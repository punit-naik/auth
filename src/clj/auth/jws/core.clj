(ns auth.jws.core
  (:require [buddy.auth.backends.token :refer [jws-backend]]
            [buddy.auth.middleware :refer [wrap-authentication]]
            [buddy.sign.jwt :refer [sign unsign]]
            [ring.util.response :refer [response redirect]]
            [cheshire.core :refer [generate-string parse-string]]))

;(def ^:private secret (System/getenv "APP_TOKEN_SECRET"))

(def ^:private secret "punit")

(def ^:private backend (jws-backend {:secret secret :options {:alg :hs512} :token-name "jwt"}))

(defn wrap-handler-with-auth-backend
  [handler]
  (wrap-authentication handler backend))

(defn authenticated?
  [request]
  (try (-> request
           (get-in [:headers "authorization"])
           parse-string
           (get "jwt")
           (unsign secret))
    (catch Exception e nil)))

(defn do-login
  [{:keys [id password lookup-user-fn redirect-url request-headers]}]
  (if-let [user (lookup-user-fn id password)]
    (assoc {:status 200 :body "Authenticated!"}
      :headers
      (assoc request-headers
        "authorization"
        (generate-string {"jwt" (sign user secret)})))
    {:status 401
     :headers {"Content-Type" "text/plain"}
     :body "credentials provided are either wrong or not provided at all"}))

(defn do-logout
  [{:keys [request redirect-url]}]
  (assoc (redirect (or redirect-url "/login"))
    :headers {"authorization" (generate-string (dissoc (parse-string (get-in request [:headers "authorization"]) "jwt")))}))
