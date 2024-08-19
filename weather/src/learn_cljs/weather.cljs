(ns ^:figwheel-hooks learn-cljs.weather
  (:require [goog.dom :as gdom]
            [reagent.core :as reagent :refer [atom]]
            [reagent.dom :as rdom]))

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "Hello world!"}))

(defn hello-world
  []
  [:div [:h1 {:class "app-title"} "Hello, World"]])

(defn mount-app-element []
  (when-let [el (gdom/getElement "app")]
    (rdom/render [hello-world] el)))

;; conditionally start your application based on the presence of an "app"
;; element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^:after-load metadata
(defn ^:after-load on-reload
  []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
