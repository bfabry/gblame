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

(object/tag-behaviors ::receiving-blame-output #{::log-errors ::on-proc-exit-add-git-blame})

(behavior ::log-errors
          :triggers #{:proc.error}
          :reaction (fn [this & args]
                      (.log js/console (clj->js args))))

(behavior ::on-proc-exit-add-git-blame
          :triggers #{:proc.exit}
          :reaction (fn [this data]
                      (object/remove-tags this #{::receiving-blame-output})
                      (let [current-gutters (set (js->clj (editor/option this "gutters")))
                            gutter-div (dom/$ :div.CodeMirror-gutters (object/->content this))
                            git-lines (clojure.string/split-lines data)]
                        (editor/set-options this {:gutters (clj->js (conj current-gutters "GBlame-gutter"))})
                        (dom/set-css (dom/$ :div.Gblame-gutter gutter-div) {"width" (str (:width @blame-settings) "px")})
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
  (object/add-tags return-obj #{::receiving-blame-output})
  (let [exec (.-exec (js/require "child_process"))
        child-proc (exec (str "git blame --date short --contents - " path)
                         (clj->js {"cwd" (lt.objs.files/parent path)})
                           (fn [err stdout stderr]
                             (if err
                               (object/raise return-obj :proc.error err stdout stderr)
                               (object/raise return-obj :proc.exit stdout stderr))))
        proc-input (.-stdin child-proc)
        chunked (partition-all 100 content)]
    (write-with-nodejs true chunked proc-input)))

