(ns ^:figwheel-hooks learn-cljs.doing-io
  (:require
   [goog.dom :as gdom]
   [reagent.dom :as rdom]))

(println "This text is printed from src/learn_cljs/doing_io.cljs. Go ahead and edit it and see reloading in action.")

(defn multiply [a b] (* a b))

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "Hello world!"}))

(defn app []
  [:div {:class "app"}
   [:h1 (:text @app-state)]])

(defn mount-app-element []
  (when-let [el (gdom/getElement "app")]
    (rdom/render [app] el)))

(mount-app-element)

;; specify reload hook with ^:after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

; (require '[goog.dom :as gdom])
; (def body (.querySelector js/document "body"))
; (def heading (gdom/createElement "h1"))
; (gdom/setTextContent heading "I am new")
; (gdom/appendChild body heading)
