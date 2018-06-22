// Compiled by ClojureScript 1.10.238 {}
goog.provide('auth.jws.core');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('auth.utils.core');
goog.require('goog.crypt.base64');
/**
 * Gets the JWT from response map
 */
auth.jws.core.get_token = (function auth$jws$core$get_token(response_map){
return new cljs.core.Keyword(null,"jwt","jwt",1504015441).cljs$core$IFn$_invoke$arity$1(auth.utils.core.parse_json.call(null,cljs.core.get_in.call(null,response_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null)),true));
});
/**
 * Decodes payload from the JWT
 * NOTE: Payload is always a JSON (Clojure map)!
 */
auth.jws.core.get_payload = (function auth$jws$core$get_payload(token){
return auth.utils.core.parse_json.call(null,goog.crypt.base64.decodeString(cljs.core.second.call(null,clojure.string.split.call(null,token,/\./))),true);
});
auth.jws.core.base64_url_escape = (function auth$jws$core$base64_url_escape(b64string){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,b64string,"+","-"),"/","_"),"=","");
});
/**
 * Encodes any payload data (cljs map) and cleans the encoded string output
 */
auth.jws.core.encode_payload = (function auth$jws$core$encode_payload(payload){
return auth.jws.core.base64_url_escape.call(null,goog.crypt.base64.encodeString(auth.utils.core.generate_json.call(null,payload)));
});
/**
 * Re-encodes JWT with new payload.
 * NOTE: This token HAS to go in the headers where the key is "authorization" and it's value is
 *       a map i.e. (generate-json {"jwt" <JWT>}). We need to strigify the {"jwt" <JTW>} map
 * e.g. `(http/get "http://localhost:3000" {:headers {"authorization" (generate-json {"jwt" d})}})`
 */
auth.jws.core.re_encode_token = (function auth$jws$core$re_encode_token(token,new_payload){
var vec__29234 = clojure.string.split.call(null,token,/\./);
var headers = cljs.core.nth.call(null,vec__29234,(0),null);
var payload = cljs.core.nth.call(null,vec__29234,(1),null);
var signature = cljs.core.nth.call(null,vec__29234,(2),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(headers),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(auth.jws.core.encode_payload.call(null,new_payload)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(signature)].join('');
});

//# sourceMappingURL=core.js.map?rel=1529516409095
