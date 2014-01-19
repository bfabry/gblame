(ns lt.plugins.gblame
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.util.dom :as dom]
            [lt.objs.editor :as editor]
            [lt.objs.proc :as proc]
            [lt.objs.editor.pool :as pool])
  (:require-macros [lt.macros :refer [behavior defui]]))

(declare write-with-nodejs)
(declare run-git-blame-on-path-and-content)

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

(defui gblame-gutter-marker [git-content]
  [:div.GBlame-gutter-marker
   {:style (str "width: " (:width @blame-settings) "px; white-space: nowrap; overflow: hidden;") }
   (clojure.string/replace-first git-content #"\s*\d+\).*$" ")")])

(cmd/command {:command ::show-git-blame
              :desc "Git Blame: Show/update git blame for file"
              :exec (fn []
                      (let [active-ed (pool/last-active)]
                        (run-git-blame-on-path-and-content (-> @active-ed :info :path) (editor/->val active-ed) active-ed)))})

(cmd/command {:command ::remove-git-blame
              :desc "Git Blame: Remove"
              :exec (fn []
                      (object/raise (pool/last-active) ::remove-git-blame))})

(object/tag-behaviors ::receiving-blame-output #{::buffer-output-from-git-blame ::on-proc-exit-add-git-blame})
(behavior ::buffer-output-from-git-blame
          :triggers #{:proc.out}
          :reaction (fn [this data]
                      (object/update! this [::git-blame-output] str (.toString data))))

(behavior ::on-proc-exit-add-git-blame
          :triggers #{:proc.exit}
          :reaction (fn [this]
                      (object/remove-tags this #{::receiving-blame-output})
                      (let [current-gutters (set (js->clj (editor/option this "gutters")))
                            gutter-div (dom/$ :div.CodeMirror-gutters (object/->content this))
                            git-lines (clojure.string/split-lines (::git-blame-output @this))]
                        (editor/set-options this {:gutters (clj->js (conj current-gutters "GBlame-gutter"))})
                        (dom/set-css (dom/$ :div.Gblame-gutter gutter-div) {"width" "300px"})
                        (doall (map-indexed (fn [idx git-line]
                                              (.setGutterMarker (editor/->cm-ed this)
                                                                idx
                                                                "GBlame-gutter"
                                                                (gblame-gutter-marker git-line)))
                                            git-lines))
                        (object/raise this :refresh!)
                        (object/add-tags this #{::git-blame-on}))))

(object/tag-behaviors ::git-blame-on #{::remove-git-blame})
(behavior ::remove-git-blame
          :triggers #{::remove-git-blame}
          :reaction (fn [this]
                      (object/remove-tags this #{::git-blame-on})
                      (.clearGutter (editor/->cm-ed this) "GBlame-gutter")
                      (dom/remove :div.Gblame-gutter (object/->content this))
                      (editor/set-options this {:gutters (clj->js (remove #{"GBlame-gutter"} (js->clj (editor/option this "gutters"))))})
                      (object/raise this :refresh!)))

(defn write-with-nodejs [write-ok? chunks stream]
  (letfn [(callback-fn []
                       (if write-ok?
                         (write-with-nodejs (.write stream (clojure.string/join (first chunks))) (rest chunks) stream)
                         (.once stream 'drain' callback-fn)))]
    (if-not (empty? chunks)
      (callback-fn)
      (.end stream))))

(defn run-git-blame-on-path-and-content [path content return-obj]
  (object/merge! return-obj {::git-blame-output ""})
  (let [proc (proc/simple-spawn* return-obj {:command "git" :args ["blame" "--date" "short" "--contents" "-" path]})
        proc-input (.-stdin proc)
        chunked (partition-all 100 content)]
    (object/add-tags return-obj #{::receiving-blame-output})
    (write-with-nodejs true chunked proc-input)))
