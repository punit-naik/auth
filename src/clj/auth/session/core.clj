(ns auth.session.core
  (:require [buddy.auth.backends.session :refer [session-backend]]
            [buddy.auth.middleware :refer [wrap-authentication]]
            [ring.util.response :refer [response redirect]]))

(def ^:private backend (session-backend))

(defn wrap-handler-with-auth-backend
  [handler]
  (wrap-authentication handler backend))

(defn authenticated?
  "Checks if the request is authenticated or not"
  [request]
  (get-in request [:session :identity]))

(defn do-login
  [{:keys [id password lookup-user-fn redirect-url request]}]
  (if-let [user (lookup-user-fn id password)]
    (assoc (redirect (or redirect-url "/"))
      :session
      (assoc (:session request) :identity user))
    {:status 401
     :headers {"Content-Type" "text/plain"}
     :body "credentials provided are either wrong or not provided at all"}))

(defn do-logout
  [{:keys [request redirect-url]}]
  (assoc (redirect (or redirect-url "/login"))
    :session
    (dissoc (:session request) :identity)))
