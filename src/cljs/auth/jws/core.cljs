(ns auth.jws.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<! poll!]]
            [clojure.string :refer [replace split]]
            [auth.utils.core :refer [parse-json generate-json]]
            [goog.crypt.base64 :refer [decodeString encodeString]]))

; (go (prn (goog.crypt.base64/decodeString (second (clojure.string/split (clojure.string/replace (:Token (js->clj (.parse js/JSON (http/get-in (<! (http/get "http://localhost:3000")) [:headers "authorization"])) :keywordize-keys true)) #"\"" "") #"\.")))))

; (go (get-payload (get-token (<! (http/get "http://localhost:3000")))))
; (poll! a)

(defn get-token
  "Gets the JWT from response map"
  [response-map]
  (:jwt (parse-json (get-in response-map [:headers "authorization"]) true)))

(defn get-payload
  "Decodes payload from the JWT
   NOTE: Payload is always a JSON (Clojure map)!"
  [token]
  (parse-json (decodeString (second (split token #"\."))) true))

(defn- base64-url-escape
  [b64string]
  (-> b64string
      (replace "+" "-")
      (replace "/" "_")
      (replace "=" "")))

(defn encode-payload
  "Encodes any payload data (cljs map) and cleans the encoded string output"
  [payload]
  (base64-url-escape (encodeString (generate-json payload))))

(defn re-encode-token
  "Re-encodes JWT with new payload.
   NOTE: This token HAS to go in the headers where the key is \"authorization\" and it's value is
         a map i.e. (generate-json {\"jwt\" <JWT>}). We need to strigify the {\"jwt\" <JWT>} map
   e.g. `(http/get \"http://localhost:3000\" {:headers {\"authorization\" (generate-json {\"jwt\" d})}})`"
  [token new-payload]
  (let [[headers payload signature] (split token #"\.")]
    (str headers "." (encode-payload new-payload) "." signature)))
