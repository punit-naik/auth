// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27266_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27266_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27267 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27268 = null;
var count__27269 = (0);
var i__27270 = (0);
while(true){
if((i__27270 < count__27269)){
var n = cljs.core._nth.call(null,chunk__27268,i__27270);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27271 = seq__27267;
var G__27272 = chunk__27268;
var G__27273 = count__27269;
var G__27274 = (i__27270 + (1));
seq__27267 = G__27271;
chunk__27268 = G__27272;
count__27269 = G__27273;
i__27270 = G__27274;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27267);
if(temp__5457__auto__){
var seq__27267__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27267__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__27267__$1);
var G__27275 = cljs.core.chunk_rest.call(null,seq__27267__$1);
var G__27276 = c__4319__auto__;
var G__27277 = cljs.core.count.call(null,c__4319__auto__);
var G__27278 = (0);
seq__27267 = G__27275;
chunk__27268 = G__27276;
count__27269 = G__27277;
i__27270 = G__27278;
continue;
} else {
var n = cljs.core.first.call(null,seq__27267__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27279 = cljs.core.next.call(null,seq__27267__$1);
var G__27280 = null;
var G__27281 = (0);
var G__27282 = (0);
seq__27267 = G__27279;
chunk__27268 = G__27280;
count__27269 = G__27281;
i__27270 = G__27282;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__27283){
var vec__27284 = p__27283;
var _ = cljs.core.nth.call(null,vec__27284,(0),null);
var v = cljs.core.nth.call(null,vec__27284,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__27287){
var vec__27288 = p__27287;
var k = cljs.core.nth.call(null,vec__27288,(0),null);
var v = cljs.core.nth.call(null,vec__27288,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27300_27308 = cljs.core.seq.call(null,deps);
var chunk__27301_27309 = null;
var count__27302_27310 = (0);
var i__27303_27311 = (0);
while(true){
if((i__27303_27311 < count__27302_27310)){
var dep_27312 = cljs.core._nth.call(null,chunk__27301_27309,i__27303_27311);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_27312;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27312));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27312,(depth + (1)),state);
} else {
}


var G__27313 = seq__27300_27308;
var G__27314 = chunk__27301_27309;
var G__27315 = count__27302_27310;
var G__27316 = (i__27303_27311 + (1));
seq__27300_27308 = G__27313;
chunk__27301_27309 = G__27314;
count__27302_27310 = G__27315;
i__27303_27311 = G__27316;
continue;
} else {
var temp__5457__auto___27317 = cljs.core.seq.call(null,seq__27300_27308);
if(temp__5457__auto___27317){
var seq__27300_27318__$1 = temp__5457__auto___27317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27300_27318__$1)){
var c__4319__auto___27319 = cljs.core.chunk_first.call(null,seq__27300_27318__$1);
var G__27320 = cljs.core.chunk_rest.call(null,seq__27300_27318__$1);
var G__27321 = c__4319__auto___27319;
var G__27322 = cljs.core.count.call(null,c__4319__auto___27319);
var G__27323 = (0);
seq__27300_27308 = G__27320;
chunk__27301_27309 = G__27321;
count__27302_27310 = G__27322;
i__27303_27311 = G__27323;
continue;
} else {
var dep_27324 = cljs.core.first.call(null,seq__27300_27318__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_27324;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27324));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27324,(depth + (1)),state);
} else {
}


var G__27325 = cljs.core.next.call(null,seq__27300_27318__$1);
var G__27326 = null;
var G__27327 = (0);
var G__27328 = (0);
seq__27300_27308 = G__27325;
chunk__27301_27309 = G__27326;
count__27302_27310 = G__27327;
i__27303_27311 = G__27328;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27304){
var vec__27305 = p__27304;
var seq__27306 = cljs.core.seq.call(null,vec__27305);
var first__27307 = cljs.core.first.call(null,seq__27306);
var seq__27306__$1 = cljs.core.next.call(null,seq__27306);
var x = first__27307;
var xs = seq__27306__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27305,seq__27306,first__27307,seq__27306__$1,x,xs,get_deps__$1){
return (function (p1__27291_SHARP_){
return clojure.set.difference.call(null,p1__27291_SHARP_,x);
});})(vec__27305,seq__27306,first__27307,seq__27306__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27329 = cljs.core.seq.call(null,provides);
var chunk__27330 = null;
var count__27331 = (0);
var i__27332 = (0);
while(true){
if((i__27332 < count__27331)){
var prov = cljs.core._nth.call(null,chunk__27330,i__27332);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27333_27341 = cljs.core.seq.call(null,requires);
var chunk__27334_27342 = null;
var count__27335_27343 = (0);
var i__27336_27344 = (0);
while(true){
if((i__27336_27344 < count__27335_27343)){
var req_27345 = cljs.core._nth.call(null,chunk__27334_27342,i__27336_27344);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27345,prov);


var G__27346 = seq__27333_27341;
var G__27347 = chunk__27334_27342;
var G__27348 = count__27335_27343;
var G__27349 = (i__27336_27344 + (1));
seq__27333_27341 = G__27346;
chunk__27334_27342 = G__27347;
count__27335_27343 = G__27348;
i__27336_27344 = G__27349;
continue;
} else {
var temp__5457__auto___27350 = cljs.core.seq.call(null,seq__27333_27341);
if(temp__5457__auto___27350){
var seq__27333_27351__$1 = temp__5457__auto___27350;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27333_27351__$1)){
var c__4319__auto___27352 = cljs.core.chunk_first.call(null,seq__27333_27351__$1);
var G__27353 = cljs.core.chunk_rest.call(null,seq__27333_27351__$1);
var G__27354 = c__4319__auto___27352;
var G__27355 = cljs.core.count.call(null,c__4319__auto___27352);
var G__27356 = (0);
seq__27333_27341 = G__27353;
chunk__27334_27342 = G__27354;
count__27335_27343 = G__27355;
i__27336_27344 = G__27356;
continue;
} else {
var req_27357 = cljs.core.first.call(null,seq__27333_27351__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27357,prov);


var G__27358 = cljs.core.next.call(null,seq__27333_27351__$1);
var G__27359 = null;
var G__27360 = (0);
var G__27361 = (0);
seq__27333_27341 = G__27358;
chunk__27334_27342 = G__27359;
count__27335_27343 = G__27360;
i__27336_27344 = G__27361;
continue;
}
} else {
}
}
break;
}


var G__27362 = seq__27329;
var G__27363 = chunk__27330;
var G__27364 = count__27331;
var G__27365 = (i__27332 + (1));
seq__27329 = G__27362;
chunk__27330 = G__27363;
count__27331 = G__27364;
i__27332 = G__27365;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27329);
if(temp__5457__auto__){
var seq__27329__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27329__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__27329__$1);
var G__27366 = cljs.core.chunk_rest.call(null,seq__27329__$1);
var G__27367 = c__4319__auto__;
var G__27368 = cljs.core.count.call(null,c__4319__auto__);
var G__27369 = (0);
seq__27329 = G__27366;
chunk__27330 = G__27367;
count__27331 = G__27368;
i__27332 = G__27369;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27329__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27337_27370 = cljs.core.seq.call(null,requires);
var chunk__27338_27371 = null;
var count__27339_27372 = (0);
var i__27340_27373 = (0);
while(true){
if((i__27340_27373 < count__27339_27372)){
var req_27374 = cljs.core._nth.call(null,chunk__27338_27371,i__27340_27373);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27374,prov);


var G__27375 = seq__27337_27370;
var G__27376 = chunk__27338_27371;
var G__27377 = count__27339_27372;
var G__27378 = (i__27340_27373 + (1));
seq__27337_27370 = G__27375;
chunk__27338_27371 = G__27376;
count__27339_27372 = G__27377;
i__27340_27373 = G__27378;
continue;
} else {
var temp__5457__auto___27379__$1 = cljs.core.seq.call(null,seq__27337_27370);
if(temp__5457__auto___27379__$1){
var seq__27337_27380__$1 = temp__5457__auto___27379__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27337_27380__$1)){
var c__4319__auto___27381 = cljs.core.chunk_first.call(null,seq__27337_27380__$1);
var G__27382 = cljs.core.chunk_rest.call(null,seq__27337_27380__$1);
var G__27383 = c__4319__auto___27381;
var G__27384 = cljs.core.count.call(null,c__4319__auto___27381);
var G__27385 = (0);
seq__27337_27370 = G__27382;
chunk__27338_27371 = G__27383;
count__27339_27372 = G__27384;
i__27340_27373 = G__27385;
continue;
} else {
var req_27386 = cljs.core.first.call(null,seq__27337_27380__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27386,prov);


var G__27387 = cljs.core.next.call(null,seq__27337_27380__$1);
var G__27388 = null;
var G__27389 = (0);
var G__27390 = (0);
seq__27337_27370 = G__27387;
chunk__27338_27371 = G__27388;
count__27339_27372 = G__27389;
i__27340_27373 = G__27390;
continue;
}
} else {
}
}
break;
}


var G__27391 = cljs.core.next.call(null,seq__27329__$1);
var G__27392 = null;
var G__27393 = (0);
var G__27394 = (0);
seq__27329 = G__27391;
chunk__27330 = G__27392;
count__27331 = G__27393;
i__27332 = G__27394;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27395_27399 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27396_27400 = null;
var count__27397_27401 = (0);
var i__27398_27402 = (0);
while(true){
if((i__27398_27402 < count__27397_27401)){
var ns_27403 = cljs.core._nth.call(null,chunk__27396_27400,i__27398_27402);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27403);


var G__27404 = seq__27395_27399;
var G__27405 = chunk__27396_27400;
var G__27406 = count__27397_27401;
var G__27407 = (i__27398_27402 + (1));
seq__27395_27399 = G__27404;
chunk__27396_27400 = G__27405;
count__27397_27401 = G__27406;
i__27398_27402 = G__27407;
continue;
} else {
var temp__5457__auto___27408 = cljs.core.seq.call(null,seq__27395_27399);
if(temp__5457__auto___27408){
var seq__27395_27409__$1 = temp__5457__auto___27408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27395_27409__$1)){
var c__4319__auto___27410 = cljs.core.chunk_first.call(null,seq__27395_27409__$1);
var G__27411 = cljs.core.chunk_rest.call(null,seq__27395_27409__$1);
var G__27412 = c__4319__auto___27410;
var G__27413 = cljs.core.count.call(null,c__4319__auto___27410);
var G__27414 = (0);
seq__27395_27399 = G__27411;
chunk__27396_27400 = G__27412;
count__27397_27401 = G__27413;
i__27398_27402 = G__27414;
continue;
} else {
var ns_27415 = cljs.core.first.call(null,seq__27395_27409__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27415);


var G__27416 = cljs.core.next.call(null,seq__27395_27409__$1);
var G__27417 = null;
var G__27418 = (0);
var G__27419 = (0);
seq__27395_27399 = G__27416;
chunk__27396_27400 = G__27417;
count__27397_27401 = G__27418;
i__27398_27402 = G__27419;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27420__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27420 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27421__i = 0, G__27421__a = new Array(arguments.length -  0);
while (G__27421__i < G__27421__a.length) {G__27421__a[G__27421__i] = arguments[G__27421__i + 0]; ++G__27421__i;}
  args = new cljs.core.IndexedSeq(G__27421__a,0,null);
} 
return G__27420__delegate.call(this,args);};
G__27420.cljs$lang$maxFixedArity = 0;
G__27420.cljs$lang$applyTo = (function (arglist__27422){
var args = cljs.core.seq(arglist__27422);
return G__27420__delegate(args);
});
G__27420.cljs$core$IFn$_invoke$arity$variadic = G__27420__delegate;
return G__27420;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__27423_SHARP_,p2__27424_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27423_SHARP_)].join('')),p2__27424_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__27425_SHARP_,p2__27426_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27425_SHARP_)].join(''),p2__27426_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27427 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27427.addCallback(((function (G__27427){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__27427))
);

G__27427.addErrback(((function (G__27427){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__27427))
);

return G__27427;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27428){if((e27428 instanceof Error)){
var e = e27428;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27428;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27429){if((e27429 instanceof Error)){
var e = e27429;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27429;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27430 = cljs.core._EQ_;
var expr__27431 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27430.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27431))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27430.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27431))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27430.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27431))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__27430,expr__27431){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27430,expr__27431))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27433,callback){
var map__27434 = p__27433;
var map__27434__$1 = ((((!((map__27434 == null)))?(((((map__27434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27434):map__27434);
var file_msg = map__27434__$1;
var request_url = cljs.core.get.call(null,map__27434__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__27434,map__27434__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27434,map__27434__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23823__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto__){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto__){
return (function (state_27472){
var state_val_27473 = (state_27472[(1)]);
if((state_val_27473 === (7))){
var inst_27468 = (state_27472[(2)]);
var state_27472__$1 = state_27472;
var statearr_27474_27500 = state_27472__$1;
(statearr_27474_27500[(2)] = inst_27468);

(statearr_27474_27500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (1))){
var state_27472__$1 = state_27472;
var statearr_27475_27501 = state_27472__$1;
(statearr_27475_27501[(2)] = null);

(statearr_27475_27501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (4))){
var inst_27438 = (state_27472[(7)]);
var inst_27438__$1 = (state_27472[(2)]);
var state_27472__$1 = (function (){var statearr_27476 = state_27472;
(statearr_27476[(7)] = inst_27438__$1);

return statearr_27476;
})();
if(cljs.core.truth_(inst_27438__$1)){
var statearr_27477_27502 = state_27472__$1;
(statearr_27477_27502[(1)] = (5));

} else {
var statearr_27478_27503 = state_27472__$1;
(statearr_27478_27503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (15))){
var inst_27451 = (state_27472[(8)]);
var inst_27453 = (state_27472[(9)]);
var inst_27455 = inst_27453.call(null,inst_27451);
var state_27472__$1 = state_27472;
var statearr_27479_27504 = state_27472__$1;
(statearr_27479_27504[(2)] = inst_27455);

(statearr_27479_27504[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (13))){
var inst_27462 = (state_27472[(2)]);
var state_27472__$1 = state_27472;
var statearr_27480_27505 = state_27472__$1;
(statearr_27480_27505[(2)] = inst_27462);

(statearr_27480_27505[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (6))){
var state_27472__$1 = state_27472;
var statearr_27481_27506 = state_27472__$1;
(statearr_27481_27506[(2)] = null);

(statearr_27481_27506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (17))){
var inst_27459 = (state_27472[(2)]);
var state_27472__$1 = state_27472;
var statearr_27482_27507 = state_27472__$1;
(statearr_27482_27507[(2)] = inst_27459);

(statearr_27482_27507[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (3))){
var inst_27470 = (state_27472[(2)]);
var state_27472__$1 = state_27472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27472__$1,inst_27470);
} else {
if((state_val_27473 === (12))){
var state_27472__$1 = state_27472;
var statearr_27483_27508 = state_27472__$1;
(statearr_27483_27508[(2)] = null);

(statearr_27483_27508[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (2))){
var state_27472__$1 = state_27472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27472__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27473 === (11))){
var inst_27443 = (state_27472[(10)]);
var inst_27449 = figwheel.client.file_reloading.blocking_load.call(null,inst_27443);
var state_27472__$1 = state_27472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27472__$1,(14),inst_27449);
} else {
if((state_val_27473 === (9))){
var inst_27443 = (state_27472[(10)]);
var state_27472__$1 = state_27472;
if(cljs.core.truth_(inst_27443)){
var statearr_27484_27509 = state_27472__$1;
(statearr_27484_27509[(1)] = (11));

} else {
var statearr_27485_27510 = state_27472__$1;
(statearr_27485_27510[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (5))){
var inst_27438 = (state_27472[(7)]);
var inst_27444 = (state_27472[(11)]);
var inst_27443 = cljs.core.nth.call(null,inst_27438,(0),null);
var inst_27444__$1 = cljs.core.nth.call(null,inst_27438,(1),null);
var state_27472__$1 = (function (){var statearr_27486 = state_27472;
(statearr_27486[(10)] = inst_27443);

(statearr_27486[(11)] = inst_27444__$1);

return statearr_27486;
})();
if(cljs.core.truth_(inst_27444__$1)){
var statearr_27487_27511 = state_27472__$1;
(statearr_27487_27511[(1)] = (8));

} else {
var statearr_27488_27512 = state_27472__$1;
(statearr_27488_27512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (14))){
var inst_27443 = (state_27472[(10)]);
var inst_27453 = (state_27472[(9)]);
var inst_27451 = (state_27472[(2)]);
var inst_27452 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27453__$1 = cljs.core.get.call(null,inst_27452,inst_27443);
var state_27472__$1 = (function (){var statearr_27489 = state_27472;
(statearr_27489[(8)] = inst_27451);

(statearr_27489[(9)] = inst_27453__$1);

return statearr_27489;
})();
if(cljs.core.truth_(inst_27453__$1)){
var statearr_27490_27513 = state_27472__$1;
(statearr_27490_27513[(1)] = (15));

} else {
var statearr_27491_27514 = state_27472__$1;
(statearr_27491_27514[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (16))){
var inst_27451 = (state_27472[(8)]);
var inst_27457 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27451);
var state_27472__$1 = state_27472;
var statearr_27492_27515 = state_27472__$1;
(statearr_27492_27515[(2)] = inst_27457);

(statearr_27492_27515[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (10))){
var inst_27464 = (state_27472[(2)]);
var state_27472__$1 = (function (){var statearr_27493 = state_27472;
(statearr_27493[(12)] = inst_27464);

return statearr_27493;
})();
var statearr_27494_27516 = state_27472__$1;
(statearr_27494_27516[(2)] = null);

(statearr_27494_27516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (8))){
var inst_27444 = (state_27472[(11)]);
var inst_27446 = eval(inst_27444);
var state_27472__$1 = state_27472;
var statearr_27495_27517 = state_27472__$1;
(statearr_27495_27517[(2)] = inst_27446);

(statearr_27495_27517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23823__auto__))
;
return ((function (switch__23733__auto__,c__23823__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23734__auto__ = null;
var figwheel$client$file_reloading$state_machine__23734__auto____0 = (function (){
var statearr_27496 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27496[(0)] = figwheel$client$file_reloading$state_machine__23734__auto__);

(statearr_27496[(1)] = (1));

return statearr_27496;
});
var figwheel$client$file_reloading$state_machine__23734__auto____1 = (function (state_27472){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_27472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e27497){if((e27497 instanceof Object)){
var ex__23737__auto__ = e27497;
var statearr_27498_27518 = state_27472;
(statearr_27498_27518[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27519 = state_27472;
state_27472 = G__27519;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23734__auto__ = function(state_27472){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23734__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23734__auto____1.call(this,state_27472);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23734__auto____0;
figwheel$client$file_reloading$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23734__auto____1;
return figwheel$client$file_reloading$state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto__))
})();
var state__23825__auto__ = (function (){var statearr_27499 = f__23824__auto__.call(null);
(statearr_27499[(6)] = c__23823__auto__);

return statearr_27499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto__))
);

return c__23823__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27521 = arguments.length;
switch (G__27521) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27523,callback){
var map__27524 = p__27523;
var map__27524__$1 = ((((!((map__27524 == null)))?(((((map__27524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27524):map__27524);
var file_msg = map__27524__$1;
var namespace = cljs.core.get.call(null,map__27524__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27524,map__27524__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27524,map__27524__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27526){
var map__27527 = p__27526;
var map__27527__$1 = ((((!((map__27527 == null)))?(((((map__27527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27527):map__27527);
var file_msg = map__27527__$1;
var namespace = cljs.core.get.call(null,map__27527__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27529){
var map__27530 = p__27529;
var map__27530__$1 = ((((!((map__27530 == null)))?(((((map__27530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27530):map__27530);
var file_msg = map__27530__$1;
var namespace = cljs.core.get.call(null,map__27530__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27532,callback){
var map__27533 = p__27532;
var map__27533__$1 = ((((!((map__27533 == null)))?(((((map__27533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27533):map__27533);
var file_msg = map__27533__$1;
var request_url = cljs.core.get.call(null,map__27533__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27533__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23823__auto___27583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto___27583,out){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto___27583,out){
return (function (state_27568){
var state_val_27569 = (state_27568[(1)]);
if((state_val_27569 === (1))){
var inst_27542 = cljs.core.seq.call(null,files);
var inst_27543 = cljs.core.first.call(null,inst_27542);
var inst_27544 = cljs.core.next.call(null,inst_27542);
var inst_27545 = files;
var state_27568__$1 = (function (){var statearr_27570 = state_27568;
(statearr_27570[(7)] = inst_27544);

(statearr_27570[(8)] = inst_27543);

(statearr_27570[(9)] = inst_27545);

return statearr_27570;
})();
var statearr_27571_27584 = state_27568__$1;
(statearr_27571_27584[(2)] = null);

(statearr_27571_27584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (2))){
var inst_27551 = (state_27568[(10)]);
var inst_27545 = (state_27568[(9)]);
var inst_27550 = cljs.core.seq.call(null,inst_27545);
var inst_27551__$1 = cljs.core.first.call(null,inst_27550);
var inst_27552 = cljs.core.next.call(null,inst_27550);
var inst_27553 = (inst_27551__$1 == null);
var inst_27554 = cljs.core.not.call(null,inst_27553);
var state_27568__$1 = (function (){var statearr_27572 = state_27568;
(statearr_27572[(10)] = inst_27551__$1);

(statearr_27572[(11)] = inst_27552);

return statearr_27572;
})();
if(inst_27554){
var statearr_27573_27585 = state_27568__$1;
(statearr_27573_27585[(1)] = (4));

} else {
var statearr_27574_27586 = state_27568__$1;
(statearr_27574_27586[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (3))){
var inst_27566 = (state_27568[(2)]);
var state_27568__$1 = state_27568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27568__$1,inst_27566);
} else {
if((state_val_27569 === (4))){
var inst_27551 = (state_27568[(10)]);
var inst_27556 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27551);
var state_27568__$1 = state_27568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27568__$1,(7),inst_27556);
} else {
if((state_val_27569 === (5))){
var inst_27562 = cljs.core.async.close_BANG_.call(null,out);
var state_27568__$1 = state_27568;
var statearr_27575_27587 = state_27568__$1;
(statearr_27575_27587[(2)] = inst_27562);

(statearr_27575_27587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (6))){
var inst_27564 = (state_27568[(2)]);
var state_27568__$1 = state_27568;
var statearr_27576_27588 = state_27568__$1;
(statearr_27576_27588[(2)] = inst_27564);

(statearr_27576_27588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (7))){
var inst_27552 = (state_27568[(11)]);
var inst_27558 = (state_27568[(2)]);
var inst_27559 = cljs.core.async.put_BANG_.call(null,out,inst_27558);
var inst_27545 = inst_27552;
var state_27568__$1 = (function (){var statearr_27577 = state_27568;
(statearr_27577[(12)] = inst_27559);

(statearr_27577[(9)] = inst_27545);

return statearr_27577;
})();
var statearr_27578_27589 = state_27568__$1;
(statearr_27578_27589[(2)] = null);

(statearr_27578_27589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23823__auto___27583,out))
;
return ((function (switch__23733__auto__,c__23823__auto___27583,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23734__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23734__auto____0 = (function (){
var statearr_27579 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27579[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23734__auto__);

(statearr_27579[(1)] = (1));

return statearr_27579;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23734__auto____1 = (function (state_27568){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_27568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e27580){if((e27580 instanceof Object)){
var ex__23737__auto__ = e27580;
var statearr_27581_27590 = state_27568;
(statearr_27581_27590[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27591 = state_27568;
state_27568 = G__27591;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23734__auto__ = function(state_27568){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23734__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23734__auto____1.call(this,state_27568);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23734__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23734__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto___27583,out))
})();
var state__23825__auto__ = (function (){var statearr_27582 = f__23824__auto__.call(null);
(statearr_27582[(6)] = c__23823__auto___27583);

return statearr_27582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto___27583,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27592,opts){
var map__27593 = p__27592;
var map__27593__$1 = ((((!((map__27593 == null)))?(((((map__27593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27593):map__27593);
var eval_body = cljs.core.get.call(null,map__27593__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27593__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27595){var e = e27595;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27596_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27596_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27597){
var vec__27598 = p__27597;
var k = cljs.core.nth.call(null,vec__27598,(0),null);
var v = cljs.core.nth.call(null,vec__27598,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27601){
var vec__27602 = p__27601;
var k = cljs.core.nth.call(null,vec__27602,(0),null);
var v = cljs.core.nth.call(null,vec__27602,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27608,p__27609){
var map__27610 = p__27608;
var map__27610__$1 = ((((!((map__27610 == null)))?(((((map__27610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27610):map__27610);
var opts = map__27610__$1;
var before_jsload = cljs.core.get.call(null,map__27610__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27610__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27610__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27611 = p__27609;
var map__27611__$1 = ((((!((map__27611 == null)))?(((((map__27611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27611):map__27611);
var msg = map__27611__$1;
var files = cljs.core.get.call(null,map__27611__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27611__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27611__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23823__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto__,map__27610,map__27610__$1,opts,before_jsload,on_jsload,reload_dependents,map__27611,map__27611__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto__,map__27610,map__27610__$1,opts,before_jsload,on_jsload,reload_dependents,map__27611,map__27611__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27765){
var state_val_27766 = (state_27765[(1)]);
if((state_val_27766 === (7))){
var inst_27628 = (state_27765[(7)]);
var inst_27625 = (state_27765[(8)]);
var inst_27626 = (state_27765[(9)]);
var inst_27627 = (state_27765[(10)]);
var inst_27633 = cljs.core._nth.call(null,inst_27626,inst_27628);
var inst_27634 = figwheel.client.file_reloading.eval_body.call(null,inst_27633,opts);
var inst_27635 = (inst_27628 + (1));
var tmp27767 = inst_27625;
var tmp27768 = inst_27626;
var tmp27769 = inst_27627;
var inst_27625__$1 = tmp27767;
var inst_27626__$1 = tmp27768;
var inst_27627__$1 = tmp27769;
var inst_27628__$1 = inst_27635;
var state_27765__$1 = (function (){var statearr_27770 = state_27765;
(statearr_27770[(7)] = inst_27628__$1);

(statearr_27770[(8)] = inst_27625__$1);

(statearr_27770[(11)] = inst_27634);

(statearr_27770[(9)] = inst_27626__$1);

(statearr_27770[(10)] = inst_27627__$1);

return statearr_27770;
})();
var statearr_27771_27854 = state_27765__$1;
(statearr_27771_27854[(2)] = null);

(statearr_27771_27854[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (20))){
var inst_27668 = (state_27765[(12)]);
var inst_27676 = figwheel.client.file_reloading.sort_files.call(null,inst_27668);
var state_27765__$1 = state_27765;
var statearr_27772_27855 = state_27765__$1;
(statearr_27772_27855[(2)] = inst_27676);

(statearr_27772_27855[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (27))){
var state_27765__$1 = state_27765;
var statearr_27773_27856 = state_27765__$1;
(statearr_27773_27856[(2)] = null);

(statearr_27773_27856[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (1))){
var inst_27617 = (state_27765[(13)]);
var inst_27614 = before_jsload.call(null,files);
var inst_27615 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27616 = (function (){return ((function (inst_27617,inst_27614,inst_27615,state_val_27766,c__23823__auto__,map__27610,map__27610__$1,opts,before_jsload,on_jsload,reload_dependents,map__27611,map__27611__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27605_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27605_SHARP_);
});
;})(inst_27617,inst_27614,inst_27615,state_val_27766,c__23823__auto__,map__27610,map__27610__$1,opts,before_jsload,on_jsload,reload_dependents,map__27611,map__27611__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27617__$1 = cljs.core.filter.call(null,inst_27616,files);
var inst_27618 = cljs.core.not_empty.call(null,inst_27617__$1);
var state_27765__$1 = (function (){var statearr_27774 = state_27765;
(statearr_27774[(13)] = inst_27617__$1);

(statearr_27774[(14)] = inst_27615);

(statearr_27774[(15)] = inst_27614);

return statearr_27774;
})();
if(cljs.core.truth_(inst_27618)){
var statearr_27775_27857 = state_27765__$1;
(statearr_27775_27857[(1)] = (2));

} else {
var statearr_27776_27858 = state_27765__$1;
(statearr_27776_27858[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (24))){
var state_27765__$1 = state_27765;
var statearr_27777_27859 = state_27765__$1;
(statearr_27777_27859[(2)] = null);

(statearr_27777_27859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (39))){
var inst_27718 = (state_27765[(16)]);
var state_27765__$1 = state_27765;
var statearr_27778_27860 = state_27765__$1;
(statearr_27778_27860[(2)] = inst_27718);

(statearr_27778_27860[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (46))){
var inst_27760 = (state_27765[(2)]);
var state_27765__$1 = state_27765;
var statearr_27779_27861 = state_27765__$1;
(statearr_27779_27861[(2)] = inst_27760);

(statearr_27779_27861[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (4))){
var inst_27662 = (state_27765[(2)]);
var inst_27663 = cljs.core.List.EMPTY;
var inst_27664 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27663);
var inst_27665 = (function (){return ((function (inst_27662,inst_27663,inst_27664,state_val_27766,c__23823__auto__,map__27610,map__27610__$1,opts,before_jsload,on_jsload,reload_dependents,map__27611,map__27611__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27606_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27606_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27606_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27606_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_27662,inst_27663,inst_27664,state_val_27766,c__23823__auto__,map__27610,map__27610__$1,opts,before_jsload,on_jsload,reload_dependents,map__27611,map__27611__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27666 = cljs.core.filter.call(null,inst_27665,files);
var inst_27667 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27668 = cljs.core.concat.call(null,inst_27666,inst_27667);
var state_27765__$1 = (function (){var statearr_27780 = state_27765;
(statearr_27780[(17)] = inst_27664);

(statearr_27780[(18)] = inst_27662);

(statearr_27780[(12)] = inst_27668);

return statearr_27780;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27781_27862 = state_27765__$1;
(statearr_27781_27862[(1)] = (16));

} else {
var statearr_27782_27863 = state_27765__$1;
(statearr_27782_27863[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (15))){
var inst_27652 = (state_27765[(2)]);
var state_27765__$1 = state_27765;
var statearr_27783_27864 = state_27765__$1;
(statearr_27783_27864[(2)] = inst_27652);

(statearr_27783_27864[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (21))){
var inst_27678 = (state_27765[(19)]);
var inst_27678__$1 = (state_27765[(2)]);
var inst_27679 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27678__$1);
var state_27765__$1 = (function (){var statearr_27784 = state_27765;
(statearr_27784[(19)] = inst_27678__$1);

return statearr_27784;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27765__$1,(22),inst_27679);
} else {
if((state_val_27766 === (31))){
var inst_27763 = (state_27765[(2)]);
var state_27765__$1 = state_27765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27765__$1,inst_27763);
} else {
if((state_val_27766 === (32))){
var inst_27718 = (state_27765[(16)]);
var inst_27723 = inst_27718.cljs$lang$protocol_mask$partition0$;
var inst_27724 = (inst_27723 & (64));
var inst_27725 = inst_27718.cljs$core$ISeq$;
var inst_27726 = (cljs.core.PROTOCOL_SENTINEL === inst_27725);
var inst_27727 = ((inst_27724) || (inst_27726));
var state_27765__$1 = state_27765;
if(cljs.core.truth_(inst_27727)){
var statearr_27785_27865 = state_27765__$1;
(statearr_27785_27865[(1)] = (35));

} else {
var statearr_27786_27866 = state_27765__$1;
(statearr_27786_27866[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (40))){
var inst_27740 = (state_27765[(20)]);
var inst_27739 = (state_27765[(2)]);
var inst_27740__$1 = cljs.core.get.call(null,inst_27739,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27741 = cljs.core.get.call(null,inst_27739,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27742 = cljs.core.not_empty.call(null,inst_27740__$1);
var state_27765__$1 = (function (){var statearr_27787 = state_27765;
(statearr_27787[(21)] = inst_27741);

(statearr_27787[(20)] = inst_27740__$1);

return statearr_27787;
})();
if(cljs.core.truth_(inst_27742)){
var statearr_27788_27867 = state_27765__$1;
(statearr_27788_27867[(1)] = (41));

} else {
var statearr_27789_27868 = state_27765__$1;
(statearr_27789_27868[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (33))){
var state_27765__$1 = state_27765;
var statearr_27790_27869 = state_27765__$1;
(statearr_27790_27869[(2)] = false);

(statearr_27790_27869[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (13))){
var inst_27638 = (state_27765[(22)]);
var inst_27642 = cljs.core.chunk_first.call(null,inst_27638);
var inst_27643 = cljs.core.chunk_rest.call(null,inst_27638);
var inst_27644 = cljs.core.count.call(null,inst_27642);
var inst_27625 = inst_27643;
var inst_27626 = inst_27642;
var inst_27627 = inst_27644;
var inst_27628 = (0);
var state_27765__$1 = (function (){var statearr_27791 = state_27765;
(statearr_27791[(7)] = inst_27628);

(statearr_27791[(8)] = inst_27625);

(statearr_27791[(9)] = inst_27626);

(statearr_27791[(10)] = inst_27627);

return statearr_27791;
})();
var statearr_27792_27870 = state_27765__$1;
(statearr_27792_27870[(2)] = null);

(statearr_27792_27870[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (22))){
var inst_27682 = (state_27765[(23)]);
var inst_27681 = (state_27765[(24)]);
var inst_27678 = (state_27765[(19)]);
var inst_27686 = (state_27765[(25)]);
var inst_27681__$1 = (state_27765[(2)]);
var inst_27682__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27681__$1);
var inst_27683 = (function (){var all_files = inst_27678;
var res_SINGLEQUOTE_ = inst_27681__$1;
var res = inst_27682__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27682,inst_27681,inst_27678,inst_27686,inst_27681__$1,inst_27682__$1,state_val_27766,c__23823__auto__,map__27610,map__27610__$1,opts,before_jsload,on_jsload,reload_dependents,map__27611,map__27611__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27607_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27607_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27682,inst_27681,inst_27678,inst_27686,inst_27681__$1,inst_27682__$1,state_val_27766,c__23823__auto__,map__27610,map__27610__$1,opts,before_jsload,on_jsload,reload_dependents,map__27611,map__27611__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27684 = cljs.core.filter.call(null,inst_27683,inst_27681__$1);
var inst_27685 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27686__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27685);
var inst_27687 = cljs.core.not_empty.call(null,inst_27686__$1);
var state_27765__$1 = (function (){var statearr_27793 = state_27765;
(statearr_27793[(23)] = inst_27682__$1);

(statearr_27793[(24)] = inst_27681__$1);

(statearr_27793[(26)] = inst_27684);

(statearr_27793[(25)] = inst_27686__$1);

return statearr_27793;
})();
if(cljs.core.truth_(inst_27687)){
var statearr_27794_27871 = state_27765__$1;
(statearr_27794_27871[(1)] = (23));

} else {
var statearr_27795_27872 = state_27765__$1;
(statearr_27795_27872[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (36))){
var state_27765__$1 = state_27765;
var statearr_27796_27873 = state_27765__$1;
(statearr_27796_27873[(2)] = false);

(statearr_27796_27873[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (41))){
var inst_27740 = (state_27765[(20)]);
var inst_27744 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27745 = cljs.core.map.call(null,inst_27744,inst_27740);
var inst_27746 = cljs.core.pr_str.call(null,inst_27745);
var inst_27747 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27746)].join('');
var inst_27748 = figwheel.client.utils.log.call(null,inst_27747);
var state_27765__$1 = state_27765;
var statearr_27797_27874 = state_27765__$1;
(statearr_27797_27874[(2)] = inst_27748);

(statearr_27797_27874[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (43))){
var inst_27741 = (state_27765[(21)]);
var inst_27751 = (state_27765[(2)]);
var inst_27752 = cljs.core.not_empty.call(null,inst_27741);
var state_27765__$1 = (function (){var statearr_27798 = state_27765;
(statearr_27798[(27)] = inst_27751);

return statearr_27798;
})();
if(cljs.core.truth_(inst_27752)){
var statearr_27799_27875 = state_27765__$1;
(statearr_27799_27875[(1)] = (44));

} else {
var statearr_27800_27876 = state_27765__$1;
(statearr_27800_27876[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (29))){
var inst_27682 = (state_27765[(23)]);
var inst_27681 = (state_27765[(24)]);
var inst_27718 = (state_27765[(16)]);
var inst_27684 = (state_27765[(26)]);
var inst_27678 = (state_27765[(19)]);
var inst_27686 = (state_27765[(25)]);
var inst_27714 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27717 = (function (){var all_files = inst_27678;
var res_SINGLEQUOTE_ = inst_27681;
var res = inst_27682;
var files_not_loaded = inst_27684;
var dependencies_that_loaded = inst_27686;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27682,inst_27681,inst_27718,inst_27684,inst_27678,inst_27686,inst_27714,state_val_27766,c__23823__auto__,map__27610,map__27610__$1,opts,before_jsload,on_jsload,reload_dependents,map__27611,map__27611__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27716){
var map__27801 = p__27716;
var map__27801__$1 = ((((!((map__27801 == null)))?(((((map__27801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27801):map__27801);
var namespace = cljs.core.get.call(null,map__27801__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27682,inst_27681,inst_27718,inst_27684,inst_27678,inst_27686,inst_27714,state_val_27766,c__23823__auto__,map__27610,map__27610__$1,opts,before_jsload,on_jsload,reload_dependents,map__27611,map__27611__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27718__$1 = cljs.core.group_by.call(null,inst_27717,inst_27684);
var inst_27720 = (inst_27718__$1 == null);
var inst_27721 = cljs.core.not.call(null,inst_27720);
var state_27765__$1 = (function (){var statearr_27803 = state_27765;
(statearr_27803[(28)] = inst_27714);

(statearr_27803[(16)] = inst_27718__$1);

return statearr_27803;
})();
if(inst_27721){
var statearr_27804_27877 = state_27765__$1;
(statearr_27804_27877[(1)] = (32));

} else {
var statearr_27805_27878 = state_27765__$1;
(statearr_27805_27878[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (44))){
var inst_27741 = (state_27765[(21)]);
var inst_27754 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27741);
var inst_27755 = cljs.core.pr_str.call(null,inst_27754);
var inst_27756 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27755)].join('');
var inst_27757 = figwheel.client.utils.log.call(null,inst_27756);
var state_27765__$1 = state_27765;
var statearr_27806_27879 = state_27765__$1;
(statearr_27806_27879[(2)] = inst_27757);

(statearr_27806_27879[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (6))){
var inst_27659 = (state_27765[(2)]);
var state_27765__$1 = state_27765;
var statearr_27807_27880 = state_27765__$1;
(statearr_27807_27880[(2)] = inst_27659);

(statearr_27807_27880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (28))){
var inst_27684 = (state_27765[(26)]);
var inst_27711 = (state_27765[(2)]);
var inst_27712 = cljs.core.not_empty.call(null,inst_27684);
var state_27765__$1 = (function (){var statearr_27808 = state_27765;
(statearr_27808[(29)] = inst_27711);

return statearr_27808;
})();
if(cljs.core.truth_(inst_27712)){
var statearr_27809_27881 = state_27765__$1;
(statearr_27809_27881[(1)] = (29));

} else {
var statearr_27810_27882 = state_27765__$1;
(statearr_27810_27882[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (25))){
var inst_27682 = (state_27765[(23)]);
var inst_27698 = (state_27765[(2)]);
var inst_27699 = cljs.core.not_empty.call(null,inst_27682);
var state_27765__$1 = (function (){var statearr_27811 = state_27765;
(statearr_27811[(30)] = inst_27698);

return statearr_27811;
})();
if(cljs.core.truth_(inst_27699)){
var statearr_27812_27883 = state_27765__$1;
(statearr_27812_27883[(1)] = (26));

} else {
var statearr_27813_27884 = state_27765__$1;
(statearr_27813_27884[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (34))){
var inst_27734 = (state_27765[(2)]);
var state_27765__$1 = state_27765;
if(cljs.core.truth_(inst_27734)){
var statearr_27814_27885 = state_27765__$1;
(statearr_27814_27885[(1)] = (38));

} else {
var statearr_27815_27886 = state_27765__$1;
(statearr_27815_27886[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (17))){
var state_27765__$1 = state_27765;
var statearr_27816_27887 = state_27765__$1;
(statearr_27816_27887[(2)] = recompile_dependents);

(statearr_27816_27887[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (3))){
var state_27765__$1 = state_27765;
var statearr_27817_27888 = state_27765__$1;
(statearr_27817_27888[(2)] = null);

(statearr_27817_27888[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (12))){
var inst_27655 = (state_27765[(2)]);
var state_27765__$1 = state_27765;
var statearr_27818_27889 = state_27765__$1;
(statearr_27818_27889[(2)] = inst_27655);

(statearr_27818_27889[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (2))){
var inst_27617 = (state_27765[(13)]);
var inst_27624 = cljs.core.seq.call(null,inst_27617);
var inst_27625 = inst_27624;
var inst_27626 = null;
var inst_27627 = (0);
var inst_27628 = (0);
var state_27765__$1 = (function (){var statearr_27819 = state_27765;
(statearr_27819[(7)] = inst_27628);

(statearr_27819[(8)] = inst_27625);

(statearr_27819[(9)] = inst_27626);

(statearr_27819[(10)] = inst_27627);

return statearr_27819;
})();
var statearr_27820_27890 = state_27765__$1;
(statearr_27820_27890[(2)] = null);

(statearr_27820_27890[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (23))){
var inst_27682 = (state_27765[(23)]);
var inst_27681 = (state_27765[(24)]);
var inst_27684 = (state_27765[(26)]);
var inst_27678 = (state_27765[(19)]);
var inst_27686 = (state_27765[(25)]);
var inst_27689 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27691 = (function (){var all_files = inst_27678;
var res_SINGLEQUOTE_ = inst_27681;
var res = inst_27682;
var files_not_loaded = inst_27684;
var dependencies_that_loaded = inst_27686;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27682,inst_27681,inst_27684,inst_27678,inst_27686,inst_27689,state_val_27766,c__23823__auto__,map__27610,map__27610__$1,opts,before_jsload,on_jsload,reload_dependents,map__27611,map__27611__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27690){
var map__27821 = p__27690;
var map__27821__$1 = ((((!((map__27821 == null)))?(((((map__27821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27821):map__27821);
var request_url = cljs.core.get.call(null,map__27821__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27682,inst_27681,inst_27684,inst_27678,inst_27686,inst_27689,state_val_27766,c__23823__auto__,map__27610,map__27610__$1,opts,before_jsload,on_jsload,reload_dependents,map__27611,map__27611__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27692 = cljs.core.reverse.call(null,inst_27686);
var inst_27693 = cljs.core.map.call(null,inst_27691,inst_27692);
var inst_27694 = cljs.core.pr_str.call(null,inst_27693);
var inst_27695 = figwheel.client.utils.log.call(null,inst_27694);
var state_27765__$1 = (function (){var statearr_27823 = state_27765;
(statearr_27823[(31)] = inst_27689);

return statearr_27823;
})();
var statearr_27824_27891 = state_27765__$1;
(statearr_27824_27891[(2)] = inst_27695);

(statearr_27824_27891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (35))){
var state_27765__$1 = state_27765;
var statearr_27825_27892 = state_27765__$1;
(statearr_27825_27892[(2)] = true);

(statearr_27825_27892[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (19))){
var inst_27668 = (state_27765[(12)]);
var inst_27674 = figwheel.client.file_reloading.expand_files.call(null,inst_27668);
var state_27765__$1 = state_27765;
var statearr_27826_27893 = state_27765__$1;
(statearr_27826_27893[(2)] = inst_27674);

(statearr_27826_27893[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (11))){
var state_27765__$1 = state_27765;
var statearr_27827_27894 = state_27765__$1;
(statearr_27827_27894[(2)] = null);

(statearr_27827_27894[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (9))){
var inst_27657 = (state_27765[(2)]);
var state_27765__$1 = state_27765;
var statearr_27828_27895 = state_27765__$1;
(statearr_27828_27895[(2)] = inst_27657);

(statearr_27828_27895[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (5))){
var inst_27628 = (state_27765[(7)]);
var inst_27627 = (state_27765[(10)]);
var inst_27630 = (inst_27628 < inst_27627);
var inst_27631 = inst_27630;
var state_27765__$1 = state_27765;
if(cljs.core.truth_(inst_27631)){
var statearr_27829_27896 = state_27765__$1;
(statearr_27829_27896[(1)] = (7));

} else {
var statearr_27830_27897 = state_27765__$1;
(statearr_27830_27897[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (14))){
var inst_27638 = (state_27765[(22)]);
var inst_27647 = cljs.core.first.call(null,inst_27638);
var inst_27648 = figwheel.client.file_reloading.eval_body.call(null,inst_27647,opts);
var inst_27649 = cljs.core.next.call(null,inst_27638);
var inst_27625 = inst_27649;
var inst_27626 = null;
var inst_27627 = (0);
var inst_27628 = (0);
var state_27765__$1 = (function (){var statearr_27831 = state_27765;
(statearr_27831[(32)] = inst_27648);

(statearr_27831[(7)] = inst_27628);

(statearr_27831[(8)] = inst_27625);

(statearr_27831[(9)] = inst_27626);

(statearr_27831[(10)] = inst_27627);

return statearr_27831;
})();
var statearr_27832_27898 = state_27765__$1;
(statearr_27832_27898[(2)] = null);

(statearr_27832_27898[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (45))){
var state_27765__$1 = state_27765;
var statearr_27833_27899 = state_27765__$1;
(statearr_27833_27899[(2)] = null);

(statearr_27833_27899[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (26))){
var inst_27682 = (state_27765[(23)]);
var inst_27681 = (state_27765[(24)]);
var inst_27684 = (state_27765[(26)]);
var inst_27678 = (state_27765[(19)]);
var inst_27686 = (state_27765[(25)]);
var inst_27701 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27703 = (function (){var all_files = inst_27678;
var res_SINGLEQUOTE_ = inst_27681;
var res = inst_27682;
var files_not_loaded = inst_27684;
var dependencies_that_loaded = inst_27686;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27682,inst_27681,inst_27684,inst_27678,inst_27686,inst_27701,state_val_27766,c__23823__auto__,map__27610,map__27610__$1,opts,before_jsload,on_jsload,reload_dependents,map__27611,map__27611__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27702){
var map__27834 = p__27702;
var map__27834__$1 = ((((!((map__27834 == null)))?(((((map__27834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27834):map__27834);
var namespace = cljs.core.get.call(null,map__27834__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27834__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27682,inst_27681,inst_27684,inst_27678,inst_27686,inst_27701,state_val_27766,c__23823__auto__,map__27610,map__27610__$1,opts,before_jsload,on_jsload,reload_dependents,map__27611,map__27611__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27704 = cljs.core.map.call(null,inst_27703,inst_27682);
var inst_27705 = cljs.core.pr_str.call(null,inst_27704);
var inst_27706 = figwheel.client.utils.log.call(null,inst_27705);
var inst_27707 = (function (){var all_files = inst_27678;
var res_SINGLEQUOTE_ = inst_27681;
var res = inst_27682;
var files_not_loaded = inst_27684;
var dependencies_that_loaded = inst_27686;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27682,inst_27681,inst_27684,inst_27678,inst_27686,inst_27701,inst_27703,inst_27704,inst_27705,inst_27706,state_val_27766,c__23823__auto__,map__27610,map__27610__$1,opts,before_jsload,on_jsload,reload_dependents,map__27611,map__27611__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27682,inst_27681,inst_27684,inst_27678,inst_27686,inst_27701,inst_27703,inst_27704,inst_27705,inst_27706,state_val_27766,c__23823__auto__,map__27610,map__27610__$1,opts,before_jsload,on_jsload,reload_dependents,map__27611,map__27611__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27708 = setTimeout(inst_27707,(10));
var state_27765__$1 = (function (){var statearr_27836 = state_27765;
(statearr_27836[(33)] = inst_27701);

(statearr_27836[(34)] = inst_27706);

return statearr_27836;
})();
var statearr_27837_27900 = state_27765__$1;
(statearr_27837_27900[(2)] = inst_27708);

(statearr_27837_27900[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (16))){
var state_27765__$1 = state_27765;
var statearr_27838_27901 = state_27765__$1;
(statearr_27838_27901[(2)] = reload_dependents);

(statearr_27838_27901[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (38))){
var inst_27718 = (state_27765[(16)]);
var inst_27736 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27718);
var state_27765__$1 = state_27765;
var statearr_27839_27902 = state_27765__$1;
(statearr_27839_27902[(2)] = inst_27736);

(statearr_27839_27902[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (30))){
var state_27765__$1 = state_27765;
var statearr_27840_27903 = state_27765__$1;
(statearr_27840_27903[(2)] = null);

(statearr_27840_27903[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (10))){
var inst_27638 = (state_27765[(22)]);
var inst_27640 = cljs.core.chunked_seq_QMARK_.call(null,inst_27638);
var state_27765__$1 = state_27765;
if(inst_27640){
var statearr_27841_27904 = state_27765__$1;
(statearr_27841_27904[(1)] = (13));

} else {
var statearr_27842_27905 = state_27765__$1;
(statearr_27842_27905[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (18))){
var inst_27672 = (state_27765[(2)]);
var state_27765__$1 = state_27765;
if(cljs.core.truth_(inst_27672)){
var statearr_27843_27906 = state_27765__$1;
(statearr_27843_27906[(1)] = (19));

} else {
var statearr_27844_27907 = state_27765__$1;
(statearr_27844_27907[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (42))){
var state_27765__$1 = state_27765;
var statearr_27845_27908 = state_27765__$1;
(statearr_27845_27908[(2)] = null);

(statearr_27845_27908[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (37))){
var inst_27731 = (state_27765[(2)]);
var state_27765__$1 = state_27765;
var statearr_27846_27909 = state_27765__$1;
(statearr_27846_27909[(2)] = inst_27731);

(statearr_27846_27909[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (8))){
var inst_27625 = (state_27765[(8)]);
var inst_27638 = (state_27765[(22)]);
var inst_27638__$1 = cljs.core.seq.call(null,inst_27625);
var state_27765__$1 = (function (){var statearr_27847 = state_27765;
(statearr_27847[(22)] = inst_27638__$1);

return statearr_27847;
})();
if(inst_27638__$1){
var statearr_27848_27910 = state_27765__$1;
(statearr_27848_27910[(1)] = (10));

} else {
var statearr_27849_27911 = state_27765__$1;
(statearr_27849_27911[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23823__auto__,map__27610,map__27610__$1,opts,before_jsload,on_jsload,reload_dependents,map__27611,map__27611__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23733__auto__,c__23823__auto__,map__27610,map__27610__$1,opts,before_jsload,on_jsload,reload_dependents,map__27611,map__27611__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23734__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23734__auto____0 = (function (){
var statearr_27850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27850[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23734__auto__);

(statearr_27850[(1)] = (1));

return statearr_27850;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23734__auto____1 = (function (state_27765){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_27765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e27851){if((e27851 instanceof Object)){
var ex__23737__auto__ = e27851;
var statearr_27852_27912 = state_27765;
(statearr_27852_27912[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27913 = state_27765;
state_27765 = G__27913;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23734__auto__ = function(state_27765){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23734__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23734__auto____1.call(this,state_27765);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23734__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23734__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto__,map__27610,map__27610__$1,opts,before_jsload,on_jsload,reload_dependents,map__27611,map__27611__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23825__auto__ = (function (){var statearr_27853 = f__23824__auto__.call(null);
(statearr_27853[(6)] = c__23823__auto__);

return statearr_27853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto__,map__27610,map__27610__$1,opts,before_jsload,on_jsload,reload_dependents,map__27611,map__27611__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23823__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27916,link){
var map__27917 = p__27916;
var map__27917__$1 = ((((!((map__27917 == null)))?(((((map__27917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27917):map__27917);
var file = cljs.core.get.call(null,map__27917__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__27917,map__27917__$1,file){
return (function (p1__27914_SHARP_,p2__27915_SHARP_){
if(cljs.core._EQ_.call(null,p1__27914_SHARP_,p2__27915_SHARP_)){
return p1__27914_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__27917,map__27917__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27920){
var map__27921 = p__27920;
var map__27921__$1 = ((((!((map__27921 == null)))?(((((map__27921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27921):map__27921);
var match_length = cljs.core.get.call(null,map__27921__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27921__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27919_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27919_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27923_SHARP_,p2__27924_SHARP_){
return cljs.core.assoc.call(null,p1__27923_SHARP_,cljs.core.get.call(null,p2__27924_SHARP_,key),p2__27924_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_27925 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27925);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27925);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27926,p__27927){
var map__27928 = p__27926;
var map__27928__$1 = ((((!((map__27928 == null)))?(((((map__27928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27928):map__27928);
var on_cssload = cljs.core.get.call(null,map__27928__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27929 = p__27927;
var map__27929__$1 = ((((!((map__27929 == null)))?(((((map__27929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27929):map__27929);
var files_msg = map__27929__$1;
var files = cljs.core.get.call(null,map__27929__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1528479350704
