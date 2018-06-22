(ns auth.core
  (:require [ring.middleware.params]
            [compojure.core]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.util.response :refer [response]]
            [auth.jws.core :refer [wrap-handler-with-auth-backend authenticated? do-login do-logout]]))

(defn include-necessary-fns
  "Includes necessary utility functions in the current namespace
   based on the backend"
  [backend]
  (condp = backend
    "session" (require '[auth.session.core :refer [wrap-handler-with-auth-backend authenticated? do-login do-logout]])
    "jws" (require '[auth.jws.core :refer [wrap-handler-with-auth-backend authenticated? do-login do-logout]])
    "jwe" (require '[auth.jwe.core :refer [wrap-handler-with-auth-backend authenticated? do-login do-logout]])))

;(defn wrap-cors-properly
;  "Sets the correct access control methods which are required for CORS"
;  [handler]
;  (wrap-cors handler
;             :access-control-allow-origin [#".*"]
;             :access-control-allow-credentials "true"
;             :access-control-allow-methods [:get :put :post :delete]
;             :access-control-request-method ["GET" "PUT" "POST" "DELETE"])))
;
;(defn attach-necessary-headers
;  "Attaches necessary headers to the request which are required for CORS"
;  [request]
;  (assoc request
;    :headers (conj (:headers request)
;                   {"Access-Control-Allow-Headers" "Authorization"
;                    "Access-Control-Allow-Origin" "*"
;                    "Access-Control-Allow-Credentials" "true")))
;                    "Access-Control-Expose-Headers" "Authorization")))

(def handler
  (do (include-necessary-fns "jws")
      (ring.middleware.cors/wrap-cors
        (ring.middleware.params/wrap-params
          (compojure.core/routes
            (compojure.core/GET "/" request
                                (fn [request]
                                  (println "REUQEST =>" request)
                                  (comment
                                    (println
                                      (do-login {:id "punit"
                                                 :password "pass"
                                                 :lookup-user-fn (fn [i p] {:id i :password p})
                                                 :request-headers {"Access-Control-Allow-Headers" "Authorization"
                                                                   "Access-Control-Allow-Origin" "*"
                                                                   "Access-Control-Allow-Credentials" "true"
                                                                   "Access-Control-Expose-Headers" "Authorization"}})))
                                  (do-login {:id "punit"
                                             :password "pass"
                                             :lookup-user-fn (fn [i p] {:id i :password p})
                                             :request-headers {"Access-Control-Allow-Headers" "Authorization"
                                                               "Access-Control-Allow-Origin" "*"
                                                               "Access-Control-Allow-Credentials" "true"
                                                               "Access-Control-Expose-Headers" "Authorization"}})))))
        :access-control-allow-origin [#".*"]
        :access-control-allow-credentials "true"
        :access-control-allow-methods [:get :put :post :delete]
        :access-control-request-method ["GET" "PUT" "POST" "DELETE"])))
