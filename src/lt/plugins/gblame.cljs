(ns lt.plugins.gblame
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.util.dom :as dom]
            [lt.objs.editor :as editor]
            [lt.objs.document :as document]
            [lt.objs.files :as files]
            [lt.objs.proc :as proc]
            [lt.objs.notifos :as notifos]
            [lt.objs.tabs :as tabs]
            [lt.objs.editor.pool :as pool])
  (:require-macros [lt.macros :refer [behavior defui]]))

(def exec (.-exec (js/require "child_process")))
(declare run-git-blame-on-path-and-content)
(declare open-diff)


(object/object* ::git-blame-settings
                :width 300)

(def blame-settings (object/create ::git-blame-settings))

(behavior ::git-blame-settings
                  :desc "Editor: Git Blame settings"
                  :params [{:label "Blame gutter width (pixels)"
                            :type :number}]
                  :type :user
                  :exclusive true
                  :triggers #{:object.instant}
                  :reaction (fn [this new-width]
                              (object/merge! blame-settings {:width new-width})))

(defn sha-from-git-string [git-string]
  (clojure.string/replace (clojure.string/join (take 8 git-string)) "^" ""))

(defn line-from-git-string [git-string]
  (int (second (re-matches #"^.[a-f0-9]{7}\s+(\d+)\s+.*$" git-string))))

(defui gblame-gutter-marker [this git-content]
  (let [display-string (-> git-content
                           (clojure.string/replace-first #"\s*\d+\).*$" ")")
                           (clojure.string/replace-first #"^(.[a-z0-9]+)\s+\d+\s+" "$1 "))]
    [:div.GBlame-gutter-marker
     {:style (str "width: " (:width @blame-settings) "px; white-space: nowrap; overflow: hidden;") }
     display-string])
  :click (fn [e]
           (let [sha (sha-from-git-string git-content)
                 line (line-from-git-string git-content)]
             (when-not (= "00000000" sha)
               (object/raise this
                             ::git-blame-clicked
                             (sha-from-git-string git-content)
                             (line-from-git-string git-content))))))

(cmd/command {:command ::show-git-blame
              :desc "Git Blame: Show/update git blame for file"
              :exec (fn []
                      (let [active-ed (pool/last-active)]
                        (run-git-blame-on-path-and-content (-> @active-ed :info :path) (editor/->val active-ed) active-ed)))})

(cmd/command {:command ::remove-git-blame
              :desc "Git Blame: Remove"
              :exec (fn []
                      (object/raise (pool/last-active) ::remove-git-blame))})

(behavior ::log-errors
          :triggers #{::blame-failed}
          :reaction (fn [this & args]
                      (object/remove-tags this #{::receiving-blame-output})
                      (.log js/console (clj->js args))
                      (notifos/done-working)))
(defn add-gutter [this]
  (let [ed (editor/->cm-ed this)
        current-gutters (set (js->clj (editor/option this "gutters")))
        gutter-div (dom/$ :div.CodeMirror-gutters (object/->content this))]
    (editor/set-options this {:gutters (clj->js (conj current-gutters "GBlame-gutter"))})
    (dom/set-css (dom/$ :div.Gblame-gutter gutter-div) {"width" (str (:width @blame-settings) "px")})))


(defn add-gutter-markers [this data]
  (let [git-lines (clojure.string/split-lines data)
        gutter-markers (map #(gblame-gutter-marker this %) git-lines)]
  (editor/operation
   this
   (fn []
     (add-gutter this)
     (doall
      (map-indexed
       (fn [line-no gutter-marker]
         (let [lh (editor/line-handle this line-no)]
           (if-not (.-gutterMarkers lh)
             (aset lh "gutterMarkers" #js {}))

           (aset (.-gutterMarkers lh) "GBlame-gutter" gutter-marker)))
       gutter-markers))))))

(behavior ::show-blame-data
           :triggers #{::show-blame-data}
           :reaction (fn [this data]
                       (object/remove-tags this #{::receiving-blame-output})
                       (add-gutter-markers this data)
                       (object/add-tags this #{::git-blame-on})
                       (notifos/done-working)))

(behavior ::open-git-diff
          :triggers #{::git-blame-clicked}
          :reaction (fn [this sha line]
                      (let [path (-> @this :info :path)]
                        (open-diff sha path line))))

(behavior ::remove-git-blame
          :triggers #{::remove-git-blame}
          :reaction (fn [this]
                      (object/remove-tags this #{::git-blame-on})
                      (.clearGutter (editor/->cm-ed this) "GBlame-gutter")
                      (dom/remove :div.Gblame-gutter (object/->content this))
                      (editor/set-options this {:gutters (clj->js (remove #{"GBlame-gutter"} (js->clj (editor/option this "gutters"))))})
                      (object/raise this :refresh!)))

(defn run-git-blame-on-path-and-content [path content return-obj]
  (notifos/working "Getting git blame")
  (object/merge! return-obj {::git-blame-output ""})
  (object/add-tags return-obj #{::receiving-blame-output})
  (let [child-proc (exec (str "git blame -n --date short --contents - " path)
                         (clj->js {"cwd" (files/parent path)})
                         (fn [err stdout stderr]
                           (if err
                             (object/raise return-obj ::blame-failed err stdout stderr)
                             (object/raise return-obj ::show-blame-data stdout stderr))))
        proc-input (.-stdin child-proc)]
    (.end proc-input content)))

(defn hunk-spec [line]
  (map int (rest (re-matches #"@@ -\d+,\d+ \+(\d+),(\d+) @@" line))))

(defn diff-line-mappings [diff]
  (let [lines (map-indexed (fn [diff-line-no line] [line diff-line-no]) (clojure.string/split-lines diff))]
    (reduce (fn [mappings [line diff-line-no]]
              (let [[hunk hunk-lines] (last mappings)]
                (if (re-find #"^@@" line)
                  (conj mappings [(hunk-spec line) []])
                  (conj (pop mappings) [hunk (conj hunk-lines diff-line-no)]))))
            [[[0 0] []]]
            lines)))

(defn src-line-to-diff-line [line mappings]
  (let [mapping (first (filter (fn [[[start-hunk num-lines] _]]
                                 (and (>= line start-hunk) (<= line (+ start-hunk num-lines))))
                               mappings))
        [[start-hunk num-lines] line-mappings] mapping
        line-offset-into-hunk (- line start-hunk)]

    (nth line-mappings line-offset-into-hunk)))

(defn open-diff [sha path line]
  (let [new-ed (pool/create {:line-separator "\n", :name (str (files/basename path) " @ " sha)})]
    (object/add-tags new-ed #{:editor.read-only})
    (pool/set-syntax-by-path new-ed "foo.diff")
    (tabs/add! new-ed)
    (tabs/active! new-ed)
    (exec (str "git show --no-color " sha " " path)
          (clj->js {"cwd" (files/parent path)})
          (fn [err stdout stderr]
            (if err
              (.log js/console #js [err stderr])
              (do
                (editor/set-val new-ed stdout)
                (let [mappings (diff-line-mappings stdout)
                      diff-line (src-line-to-diff-line line mappings)]
                  (editor/move-cursor new-ed {:line diff-line, :ch 0})
                  (editor/center-cursor new-ed))))))))
