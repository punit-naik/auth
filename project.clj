(defproject auth "1.0.0"
  :description "Authentication library implemented with various approaches like jws, jwe, session, etc.
                Provides utility functions for authentication."
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v20.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [ring/ring-core "1.6.3"]
                 [ring-cors "0.1.12"]
                 [buddy/buddy-auth "2.1.0" :exclusions [commons-codec]]
                 [buddy/buddy-hashers "1.3.0" :exclusions [commons-codec]]
                 [buddy/buddy-sign "3.0.0" :exclusions [buddy/buddy-core commons-codec
                                                        org.bouncycastle/bcprov-jdk15on]]
                 [cljs-http "0.1.45" :exclusions [commons-codec]]
                 [cheshire "5.8.0"]
                 [org.clojure/clojurescript "1.10.238" :exclusions [commons-codec]]
                 [buddy/buddy-core "1.5.0"]]
  :profiles
    {:dev {:source-paths ["src/clj" "src/cljs"]
           :dependencies [[compojure "1.6.1" :exclusions [ring/ring-codec clout commons-codec instaparse]]
                          [figwheel-sidecar "0.5.16" :exclusions [org.clojure/tools.nrepl org.clojure/core.async
                                                                  commons-codec]]
                          [com.bhauman/rebel-readline "0.1.2"]]
           :plugins [[lein-ring "0.12.4"]
                     [lein-figwheel "0.5.16"]
                     [lein-cljsbuild "1.1.7"]]
           :cljsbuild {:builds [ {:id "test"
                                  :source-paths ["src/cljs"]
                                  :figwheel {:websocket-host "localhost"}
                                  :compiler {:main "auth.core"
                                             :asset-path "resources/public/js/out"
                                             :output-to "app.js"
                                             :output-dir "resources/public/js/out"
                                             :optimizations :none}}]}

           :ring {:handler auth.core/handler}
           :aot :all}}
  :source-paths ["src/clj" "src/cljs"]
  :aot :all)
