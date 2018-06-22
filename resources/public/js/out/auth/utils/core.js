// Compiled by ClojureScript 1.10.238 {}
goog.provide('auth.utils.core');
goog.require('cljs.core');
/**
 * Parses a JSON string to a Clojure map
 */
auth.utils.core.parse_json = (function auth$utils$core$parse_json(var_args){
var G__21734 = arguments.length;
switch (G__21734) {
case 1:
return auth.utils.core.parse_json.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return auth.utils.core.parse_json.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

auth.utils.core.parse_json.cljs$core$IFn$_invoke$arity$1 = (function (json_str){
return cljs.core.js__GT_clj.call(null,JSON.parse(json_str));
});

auth.utils.core.parse_json.cljs$core$IFn$_invoke$arity$2 = (function (json_str,keywordize_keys_QMARK_){
return cljs.core.js__GT_clj.call(null,JSON.parse(json_str),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_);
});

auth.utils.core.parse_json.cljs$lang$maxFixedArity = 2;

/**
 * Generates a JSON from Clojure map
 */
auth.utils.core.generate_json = (function auth$utils$core$generate_json(clj_map){
return JSON.stringify(cljs.core.clj__GT_js.call(null,clj_map));
});

//# sourceMappingURL=core.js.map?rel=1529507439683
