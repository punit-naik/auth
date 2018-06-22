(ns auth.utils.core)

(defn parse-json
  "Parses a JSON string to a Clojure map"
  ([json-str]
   (js->clj (.parse js/JSON json-str)))
  ([json-str keywordize-keys?]
   (js->clj (.parse js/JSON json-str)
     :keywordize-keys keywordize-keys?)))

(defn generate-json
  "Generates a JSON from Clojure map"
  [clj-map]
  (.stringify js/JSON (clj->js clj-map)))
