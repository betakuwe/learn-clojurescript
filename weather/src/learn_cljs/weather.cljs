(ns ^:figwheel-hooks learn-cljs.weather
  (:require [goog.dom :as gdom]
            [reagent.core :as reagent :refer [atom]]
            [reagent.dom :as rdom]
            [cljs.core :as c]
            [ajax.core :as ajax]))

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (reagent/atom {:title "WhichWeather"
                                  :postal-code ""
                                  :temperatures {:temp {:label "Temperature" :value nil}
                                                 :temp-min {:label "Min" :value nil}
                                                 :temp-max {:label "Max" :value nil}}}))

(defn handle-response [resp]
  (let [{temp "temp"  temp-min "temp_min"  temp-max "temp_max"} (resp "main")]
    (swap! app-state update-in [:temperatures :temp :value] (c/constantly temp))
    (swap! app-state update-in [:temperatures :temp-min :value] (c/constantly temp-min))
    (swap! app-state update-in [:temperatures :temp-max :value] (c/constantly temp-max))))

(def ^:private api-key "b14b3ae77dacd859192ea3181697e03d")

(defn get-geo-encoding! [postal-code response-handler]
  (ajax/GET "http://api.openweathermap.org/geo/1.0/zip"
    {:params {"zip" (str postal-code ",US")
              "appid" api-key}
     :handler response-handler}))

(defn get-forecast!
  ([lat lon response-handler]
   (ajax/GET "http://api.openweathermap.org/data/2.5/weather"
     {:params {"lat" lat
               "lon" lon
               "appid" api-key}
      :handler response-handler}))
  ([postal-code response-handler]
   (get-geo-encoding! postal-code
                      #(let [lat (% "lat")
                             lon (% "lon")]
                         (get-forecast! lat lon response-handler)))))

(defn title []
  [:h1 (:title @app-state)])

(defn temperature [temp]
  [:div {:class "temperature"}
   [:div {:class "value" :key "value"} (:value temp)]
   [:h2 {:key "temp"} (:label temp)]])

(defn postal-code []
  [:div {:class "postal-code"}
   [:h3 "Enter your postal code"]
   [:input {:type "number"
            :placeholder "Postal Code"
            :value (:postal-code @app-state)
            :on-change
            (fn [event]
              (swap! app-state assoc :postal-code (-> event .-target .-value)))}]
   [:button
    {:on-click #(get-forecast! (:postal-code @app-state) handle-response)}
    "Go"]])

(defn app []
  [:div {:class "app"}
   [title]
   [:div {:class "temperatures"}
    (for [temp (vals (:temperatures @app-state))]
      [temperature temp {:key (:label temp)}])]
   [postal-code]])

(defn mount-app-element []
  (when-let [el (gdom/getElement "app")]
    (rdom/render [app] el)))

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
