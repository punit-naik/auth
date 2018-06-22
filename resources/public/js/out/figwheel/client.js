// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e29027){if((e29027 instanceof Error)){
var e = e29027;
return "Error: Unable to stringify";
} else {
throw e29027;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29030 = arguments.length;
switch (G__29030) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29028_SHARP_){
if(typeof p1__29028_SHARP_ === 'string'){
return p1__29028_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29028_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29033 = arguments.length;
var i__4500__auto___29034 = (0);
while(true){
if((i__4500__auto___29034 < len__4499__auto___29033)){
args__4502__auto__.push((arguments[i__4500__auto___29034]));

var G__29035 = (i__4500__auto___29034 + (1));
i__4500__auto___29034 = G__29035;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29032){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29032));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29037 = arguments.length;
var i__4500__auto___29038 = (0);
while(true){
if((i__4500__auto___29038 < len__4499__auto___29037)){
args__4502__auto__.push((arguments[i__4500__auto___29038]));

var G__29039 = (i__4500__auto___29038 + (1));
i__4500__auto___29038 = G__29039;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29036){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29036));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29040){
var map__29041 = p__29040;
var map__29041__$1 = ((((!((map__29041 == null)))?(((((map__29041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29041):map__29041);
var message = cljs.core.get.call(null,map__29041__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29041__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23823__auto___29120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto___29120,ch){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto___29120,ch){
return (function (state_29092){
var state_val_29093 = (state_29092[(1)]);
if((state_val_29093 === (7))){
var inst_29088 = (state_29092[(2)]);
var state_29092__$1 = state_29092;
var statearr_29094_29121 = state_29092__$1;
(statearr_29094_29121[(2)] = inst_29088);

(statearr_29094_29121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (1))){
var state_29092__$1 = state_29092;
var statearr_29095_29122 = state_29092__$1;
(statearr_29095_29122[(2)] = null);

(statearr_29095_29122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (4))){
var inst_29045 = (state_29092[(7)]);
var inst_29045__$1 = (state_29092[(2)]);
var state_29092__$1 = (function (){var statearr_29096 = state_29092;
(statearr_29096[(7)] = inst_29045__$1);

return statearr_29096;
})();
if(cljs.core.truth_(inst_29045__$1)){
var statearr_29097_29123 = state_29092__$1;
(statearr_29097_29123[(1)] = (5));

} else {
var statearr_29098_29124 = state_29092__$1;
(statearr_29098_29124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (15))){
var inst_29052 = (state_29092[(8)]);
var inst_29067 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29052);
var inst_29068 = cljs.core.first.call(null,inst_29067);
var inst_29069 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29068);
var inst_29070 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29069)].join('');
var inst_29071 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29070);
var state_29092__$1 = state_29092;
var statearr_29099_29125 = state_29092__$1;
(statearr_29099_29125[(2)] = inst_29071);

(statearr_29099_29125[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (13))){
var inst_29076 = (state_29092[(2)]);
var state_29092__$1 = state_29092;
var statearr_29100_29126 = state_29092__$1;
(statearr_29100_29126[(2)] = inst_29076);

(statearr_29100_29126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (6))){
var state_29092__$1 = state_29092;
var statearr_29101_29127 = state_29092__$1;
(statearr_29101_29127[(2)] = null);

(statearr_29101_29127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (17))){
var inst_29074 = (state_29092[(2)]);
var state_29092__$1 = state_29092;
var statearr_29102_29128 = state_29092__$1;
(statearr_29102_29128[(2)] = inst_29074);

(statearr_29102_29128[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (3))){
var inst_29090 = (state_29092[(2)]);
var state_29092__$1 = state_29092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29092__$1,inst_29090);
} else {
if((state_val_29093 === (12))){
var inst_29051 = (state_29092[(9)]);
var inst_29065 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29051,opts);
var state_29092__$1 = state_29092;
if(cljs.core.truth_(inst_29065)){
var statearr_29103_29129 = state_29092__$1;
(statearr_29103_29129[(1)] = (15));

} else {
var statearr_29104_29130 = state_29092__$1;
(statearr_29104_29130[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (2))){
var state_29092__$1 = state_29092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29092__$1,(4),ch);
} else {
if((state_val_29093 === (11))){
var inst_29052 = (state_29092[(8)]);
var inst_29057 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29058 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29052);
var inst_29059 = cljs.core.async.timeout.call(null,(1000));
var inst_29060 = [inst_29058,inst_29059];
var inst_29061 = (new cljs.core.PersistentVector(null,2,(5),inst_29057,inst_29060,null));
var state_29092__$1 = state_29092;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29092__$1,(14),inst_29061);
} else {
if((state_val_29093 === (9))){
var inst_29052 = (state_29092[(8)]);
var inst_29078 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29079 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29052);
var inst_29080 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29079);
var inst_29081 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29080)].join('');
var inst_29082 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29081);
var state_29092__$1 = (function (){var statearr_29105 = state_29092;
(statearr_29105[(10)] = inst_29078);

return statearr_29105;
})();
var statearr_29106_29131 = state_29092__$1;
(statearr_29106_29131[(2)] = inst_29082);

(statearr_29106_29131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (5))){
var inst_29045 = (state_29092[(7)]);
var inst_29047 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29048 = (new cljs.core.PersistentArrayMap(null,2,inst_29047,null));
var inst_29049 = (new cljs.core.PersistentHashSet(null,inst_29048,null));
var inst_29050 = figwheel.client.focus_msgs.call(null,inst_29049,inst_29045);
var inst_29051 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29050);
var inst_29052 = cljs.core.first.call(null,inst_29050);
var inst_29053 = figwheel.client.autoload_QMARK_.call(null);
var state_29092__$1 = (function (){var statearr_29107 = state_29092;
(statearr_29107[(9)] = inst_29051);

(statearr_29107[(8)] = inst_29052);

return statearr_29107;
})();
if(cljs.core.truth_(inst_29053)){
var statearr_29108_29132 = state_29092__$1;
(statearr_29108_29132[(1)] = (8));

} else {
var statearr_29109_29133 = state_29092__$1;
(statearr_29109_29133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (14))){
var inst_29063 = (state_29092[(2)]);
var state_29092__$1 = state_29092;
var statearr_29110_29134 = state_29092__$1;
(statearr_29110_29134[(2)] = inst_29063);

(statearr_29110_29134[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (16))){
var state_29092__$1 = state_29092;
var statearr_29111_29135 = state_29092__$1;
(statearr_29111_29135[(2)] = null);

(statearr_29111_29135[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (10))){
var inst_29084 = (state_29092[(2)]);
var state_29092__$1 = (function (){var statearr_29112 = state_29092;
(statearr_29112[(11)] = inst_29084);

return statearr_29112;
})();
var statearr_29113_29136 = state_29092__$1;
(statearr_29113_29136[(2)] = null);

(statearr_29113_29136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29093 === (8))){
var inst_29051 = (state_29092[(9)]);
var inst_29055 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29051,opts);
var state_29092__$1 = state_29092;
if(cljs.core.truth_(inst_29055)){
var statearr_29114_29137 = state_29092__$1;
(statearr_29114_29137[(1)] = (11));

} else {
var statearr_29115_29138 = state_29092__$1;
(statearr_29115_29138[(1)] = (12));

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
});})(c__23823__auto___29120,ch))
;
return ((function (switch__23733__auto__,c__23823__auto___29120,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23734__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23734__auto____0 = (function (){
var statearr_29116 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29116[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23734__auto__);

(statearr_29116[(1)] = (1));

return statearr_29116;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23734__auto____1 = (function (state_29092){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_29092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e29117){if((e29117 instanceof Object)){
var ex__23737__auto__ = e29117;
var statearr_29118_29139 = state_29092;
(statearr_29118_29139[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29140 = state_29092;
state_29092 = G__29140;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23734__auto__ = function(state_29092){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23734__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23734__auto____1.call(this,state_29092);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23734__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23734__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto___29120,ch))
})();
var state__23825__auto__ = (function (){var statearr_29119 = f__23824__auto__.call(null);
(statearr_29119[(6)] = c__23823__auto___29120);

return statearr_29119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto___29120,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29141_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29141_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29145 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29145){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29143 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29144 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29143,_STAR_print_fn_STAR_29144,sb,base_path_29145){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_29143,_STAR_print_fn_STAR_29144,sb,base_path_29145))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29144;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29143;
}}catch (e29142){if((e29142 instanceof Error)){
var e = e29142;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29145], null));
} else {
var e = e29142;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29145))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29146){
var map__29147 = p__29146;
var map__29147__$1 = ((((!((map__29147 == null)))?(((((map__29147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29147):map__29147);
var opts = map__29147__$1;
var build_id = cljs.core.get.call(null,map__29147__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29147,map__29147__$1,opts,build_id){
return (function (p__29149){
var vec__29150 = p__29149;
var seq__29151 = cljs.core.seq.call(null,vec__29150);
var first__29152 = cljs.core.first.call(null,seq__29151);
var seq__29151__$1 = cljs.core.next.call(null,seq__29151);
var map__29153 = first__29152;
var map__29153__$1 = ((((!((map__29153 == null)))?(((((map__29153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29153):map__29153);
var msg = map__29153__$1;
var msg_name = cljs.core.get.call(null,map__29153__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29151__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29150,seq__29151,first__29152,seq__29151__$1,map__29153,map__29153__$1,msg,msg_name,_,map__29147,map__29147__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29150,seq__29151,first__29152,seq__29151__$1,map__29153,map__29153__$1,msg,msg_name,_,map__29147,map__29147__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29147,map__29147__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29155){
var vec__29156 = p__29155;
var seq__29157 = cljs.core.seq.call(null,vec__29156);
var first__29158 = cljs.core.first.call(null,seq__29157);
var seq__29157__$1 = cljs.core.next.call(null,seq__29157);
var map__29159 = first__29158;
var map__29159__$1 = ((((!((map__29159 == null)))?(((((map__29159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29159):map__29159);
var msg = map__29159__$1;
var msg_name = cljs.core.get.call(null,map__29159__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29157__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29161){
var map__29162 = p__29161;
var map__29162__$1 = ((((!((map__29162 == null)))?(((((map__29162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29162):map__29162);
var on_compile_warning = cljs.core.get.call(null,map__29162__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29162__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29162,map__29162__$1,on_compile_warning,on_compile_fail){
return (function (p__29164){
var vec__29165 = p__29164;
var seq__29166 = cljs.core.seq.call(null,vec__29165);
var first__29167 = cljs.core.first.call(null,seq__29166);
var seq__29166__$1 = cljs.core.next.call(null,seq__29166);
var map__29168 = first__29167;
var map__29168__$1 = ((((!((map__29168 == null)))?(((((map__29168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29168):map__29168);
var msg = map__29168__$1;
var msg_name = cljs.core.get.call(null,map__29168__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29166__$1;
var pred__29170 = cljs.core._EQ_;
var expr__29171 = msg_name;
if(cljs.core.truth_(pred__29170.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29171))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29170.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29171))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29162,map__29162__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23823__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto__,msg_hist,msg_names,msg){
return (function (state_29260){
var state_val_29261 = (state_29260[(1)]);
if((state_val_29261 === (7))){
var inst_29180 = (state_29260[(2)]);
var state_29260__$1 = state_29260;
if(cljs.core.truth_(inst_29180)){
var statearr_29262_29309 = state_29260__$1;
(statearr_29262_29309[(1)] = (8));

} else {
var statearr_29263_29310 = state_29260__$1;
(statearr_29263_29310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (20))){
var inst_29254 = (state_29260[(2)]);
var state_29260__$1 = state_29260;
var statearr_29264_29311 = state_29260__$1;
(statearr_29264_29311[(2)] = inst_29254);

(statearr_29264_29311[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (27))){
var inst_29250 = (state_29260[(2)]);
var state_29260__$1 = state_29260;
var statearr_29265_29312 = state_29260__$1;
(statearr_29265_29312[(2)] = inst_29250);

(statearr_29265_29312[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (1))){
var inst_29173 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29260__$1 = state_29260;
if(cljs.core.truth_(inst_29173)){
var statearr_29266_29313 = state_29260__$1;
(statearr_29266_29313[(1)] = (2));

} else {
var statearr_29267_29314 = state_29260__$1;
(statearr_29267_29314[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (24))){
var inst_29252 = (state_29260[(2)]);
var state_29260__$1 = state_29260;
var statearr_29268_29315 = state_29260__$1;
(statearr_29268_29315[(2)] = inst_29252);

(statearr_29268_29315[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (4))){
var inst_29258 = (state_29260[(2)]);
var state_29260__$1 = state_29260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29260__$1,inst_29258);
} else {
if((state_val_29261 === (15))){
var inst_29256 = (state_29260[(2)]);
var state_29260__$1 = state_29260;
var statearr_29269_29316 = state_29260__$1;
(statearr_29269_29316[(2)] = inst_29256);

(statearr_29269_29316[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (21))){
var inst_29209 = (state_29260[(2)]);
var inst_29210 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29211 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29210);
var state_29260__$1 = (function (){var statearr_29270 = state_29260;
(statearr_29270[(7)] = inst_29209);

return statearr_29270;
})();
var statearr_29271_29317 = state_29260__$1;
(statearr_29271_29317[(2)] = inst_29211);

(statearr_29271_29317[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (31))){
var inst_29239 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29260__$1 = state_29260;
if(cljs.core.truth_(inst_29239)){
var statearr_29272_29318 = state_29260__$1;
(statearr_29272_29318[(1)] = (34));

} else {
var statearr_29273_29319 = state_29260__$1;
(statearr_29273_29319[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (32))){
var inst_29248 = (state_29260[(2)]);
var state_29260__$1 = state_29260;
var statearr_29274_29320 = state_29260__$1;
(statearr_29274_29320[(2)] = inst_29248);

(statearr_29274_29320[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (33))){
var inst_29235 = (state_29260[(2)]);
var inst_29236 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29237 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29236);
var state_29260__$1 = (function (){var statearr_29275 = state_29260;
(statearr_29275[(8)] = inst_29235);

return statearr_29275;
})();
var statearr_29276_29321 = state_29260__$1;
(statearr_29276_29321[(2)] = inst_29237);

(statearr_29276_29321[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (13))){
var inst_29194 = figwheel.client.heads_up.clear.call(null);
var state_29260__$1 = state_29260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29260__$1,(16),inst_29194);
} else {
if((state_val_29261 === (22))){
var inst_29215 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29216 = figwheel.client.heads_up.append_warning_message.call(null,inst_29215);
var state_29260__$1 = state_29260;
var statearr_29277_29322 = state_29260__$1;
(statearr_29277_29322[(2)] = inst_29216);

(statearr_29277_29322[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (36))){
var inst_29246 = (state_29260[(2)]);
var state_29260__$1 = state_29260;
var statearr_29278_29323 = state_29260__$1;
(statearr_29278_29323[(2)] = inst_29246);

(statearr_29278_29323[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (29))){
var inst_29226 = (state_29260[(2)]);
var inst_29227 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29228 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29227);
var state_29260__$1 = (function (){var statearr_29279 = state_29260;
(statearr_29279[(9)] = inst_29226);

return statearr_29279;
})();
var statearr_29280_29324 = state_29260__$1;
(statearr_29280_29324[(2)] = inst_29228);

(statearr_29280_29324[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (6))){
var inst_29175 = (state_29260[(10)]);
var state_29260__$1 = state_29260;
var statearr_29281_29325 = state_29260__$1;
(statearr_29281_29325[(2)] = inst_29175);

(statearr_29281_29325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (28))){
var inst_29222 = (state_29260[(2)]);
var inst_29223 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29224 = figwheel.client.heads_up.display_warning.call(null,inst_29223);
var state_29260__$1 = (function (){var statearr_29282 = state_29260;
(statearr_29282[(11)] = inst_29222);

return statearr_29282;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29260__$1,(29),inst_29224);
} else {
if((state_val_29261 === (25))){
var inst_29220 = figwheel.client.heads_up.clear.call(null);
var state_29260__$1 = state_29260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29260__$1,(28),inst_29220);
} else {
if((state_val_29261 === (34))){
var inst_29241 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29260__$1 = state_29260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29260__$1,(37),inst_29241);
} else {
if((state_val_29261 === (17))){
var inst_29200 = (state_29260[(2)]);
var inst_29201 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29202 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29201);
var state_29260__$1 = (function (){var statearr_29283 = state_29260;
(statearr_29283[(12)] = inst_29200);

return statearr_29283;
})();
var statearr_29284_29326 = state_29260__$1;
(statearr_29284_29326[(2)] = inst_29202);

(statearr_29284_29326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (3))){
var inst_29192 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29260__$1 = state_29260;
if(cljs.core.truth_(inst_29192)){
var statearr_29285_29327 = state_29260__$1;
(statearr_29285_29327[(1)] = (13));

} else {
var statearr_29286_29328 = state_29260__$1;
(statearr_29286_29328[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (12))){
var inst_29188 = (state_29260[(2)]);
var state_29260__$1 = state_29260;
var statearr_29287_29329 = state_29260__$1;
(statearr_29287_29329[(2)] = inst_29188);

(statearr_29287_29329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (2))){
var inst_29175 = (state_29260[(10)]);
var inst_29175__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29260__$1 = (function (){var statearr_29288 = state_29260;
(statearr_29288[(10)] = inst_29175__$1);

return statearr_29288;
})();
if(cljs.core.truth_(inst_29175__$1)){
var statearr_29289_29330 = state_29260__$1;
(statearr_29289_29330[(1)] = (5));

} else {
var statearr_29290_29331 = state_29260__$1;
(statearr_29290_29331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (23))){
var inst_29218 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29260__$1 = state_29260;
if(cljs.core.truth_(inst_29218)){
var statearr_29291_29332 = state_29260__$1;
(statearr_29291_29332[(1)] = (25));

} else {
var statearr_29292_29333 = state_29260__$1;
(statearr_29292_29333[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (35))){
var state_29260__$1 = state_29260;
var statearr_29293_29334 = state_29260__$1;
(statearr_29293_29334[(2)] = null);

(statearr_29293_29334[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (19))){
var inst_29213 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29260__$1 = state_29260;
if(cljs.core.truth_(inst_29213)){
var statearr_29294_29335 = state_29260__$1;
(statearr_29294_29335[(1)] = (22));

} else {
var statearr_29295_29336 = state_29260__$1;
(statearr_29295_29336[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (11))){
var inst_29184 = (state_29260[(2)]);
var state_29260__$1 = state_29260;
var statearr_29296_29337 = state_29260__$1;
(statearr_29296_29337[(2)] = inst_29184);

(statearr_29296_29337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (9))){
var inst_29186 = figwheel.client.heads_up.clear.call(null);
var state_29260__$1 = state_29260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29260__$1,(12),inst_29186);
} else {
if((state_val_29261 === (5))){
var inst_29177 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29260__$1 = state_29260;
var statearr_29297_29338 = state_29260__$1;
(statearr_29297_29338[(2)] = inst_29177);

(statearr_29297_29338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (14))){
var inst_29204 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29260__$1 = state_29260;
if(cljs.core.truth_(inst_29204)){
var statearr_29298_29339 = state_29260__$1;
(statearr_29298_29339[(1)] = (18));

} else {
var statearr_29299_29340 = state_29260__$1;
(statearr_29299_29340[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (26))){
var inst_29230 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29260__$1 = state_29260;
if(cljs.core.truth_(inst_29230)){
var statearr_29300_29341 = state_29260__$1;
(statearr_29300_29341[(1)] = (30));

} else {
var statearr_29301_29342 = state_29260__$1;
(statearr_29301_29342[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (16))){
var inst_29196 = (state_29260[(2)]);
var inst_29197 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29198 = figwheel.client.heads_up.display_exception.call(null,inst_29197);
var state_29260__$1 = (function (){var statearr_29302 = state_29260;
(statearr_29302[(13)] = inst_29196);

return statearr_29302;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29260__$1,(17),inst_29198);
} else {
if((state_val_29261 === (30))){
var inst_29232 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29233 = figwheel.client.heads_up.display_warning.call(null,inst_29232);
var state_29260__$1 = state_29260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29260__$1,(33),inst_29233);
} else {
if((state_val_29261 === (10))){
var inst_29190 = (state_29260[(2)]);
var state_29260__$1 = state_29260;
var statearr_29303_29343 = state_29260__$1;
(statearr_29303_29343[(2)] = inst_29190);

(statearr_29303_29343[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (18))){
var inst_29206 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29207 = figwheel.client.heads_up.display_exception.call(null,inst_29206);
var state_29260__$1 = state_29260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29260__$1,(21),inst_29207);
} else {
if((state_val_29261 === (37))){
var inst_29243 = (state_29260[(2)]);
var state_29260__$1 = state_29260;
var statearr_29304_29344 = state_29260__$1;
(statearr_29304_29344[(2)] = inst_29243);

(statearr_29304_29344[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29261 === (8))){
var inst_29182 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29260__$1 = state_29260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29260__$1,(11),inst_29182);
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
});})(c__23823__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23733__auto__,c__23823__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23734__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23734__auto____0 = (function (){
var statearr_29305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29305[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23734__auto__);

(statearr_29305[(1)] = (1));

return statearr_29305;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23734__auto____1 = (function (state_29260){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_29260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e29306){if((e29306 instanceof Object)){
var ex__23737__auto__ = e29306;
var statearr_29307_29345 = state_29260;
(statearr_29307_29345[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29346 = state_29260;
state_29260 = G__29346;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23734__auto__ = function(state_29260){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23734__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23734__auto____1.call(this,state_29260);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23734__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23734__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto__,msg_hist,msg_names,msg))
})();
var state__23825__auto__ = (function (){var statearr_29308 = f__23824__auto__.call(null);
(statearr_29308[(6)] = c__23823__auto__);

return statearr_29308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto__,msg_hist,msg_names,msg))
);

return c__23823__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23823__auto___29375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto___29375,ch){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto___29375,ch){
return (function (state_29361){
var state_val_29362 = (state_29361[(1)]);
if((state_val_29362 === (1))){
var state_29361__$1 = state_29361;
var statearr_29363_29376 = state_29361__$1;
(statearr_29363_29376[(2)] = null);

(statearr_29363_29376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29362 === (2))){
var state_29361__$1 = state_29361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29361__$1,(4),ch);
} else {
if((state_val_29362 === (3))){
var inst_29359 = (state_29361[(2)]);
var state_29361__$1 = state_29361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29361__$1,inst_29359);
} else {
if((state_val_29362 === (4))){
var inst_29349 = (state_29361[(7)]);
var inst_29349__$1 = (state_29361[(2)]);
var state_29361__$1 = (function (){var statearr_29364 = state_29361;
(statearr_29364[(7)] = inst_29349__$1);

return statearr_29364;
})();
if(cljs.core.truth_(inst_29349__$1)){
var statearr_29365_29377 = state_29361__$1;
(statearr_29365_29377[(1)] = (5));

} else {
var statearr_29366_29378 = state_29361__$1;
(statearr_29366_29378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29362 === (5))){
var inst_29349 = (state_29361[(7)]);
var inst_29351 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29349);
var state_29361__$1 = state_29361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29361__$1,(8),inst_29351);
} else {
if((state_val_29362 === (6))){
var state_29361__$1 = state_29361;
var statearr_29367_29379 = state_29361__$1;
(statearr_29367_29379[(2)] = null);

(statearr_29367_29379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29362 === (7))){
var inst_29357 = (state_29361[(2)]);
var state_29361__$1 = state_29361;
var statearr_29368_29380 = state_29361__$1;
(statearr_29368_29380[(2)] = inst_29357);

(statearr_29368_29380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29362 === (8))){
var inst_29353 = (state_29361[(2)]);
var state_29361__$1 = (function (){var statearr_29369 = state_29361;
(statearr_29369[(8)] = inst_29353);

return statearr_29369;
})();
var statearr_29370_29381 = state_29361__$1;
(statearr_29370_29381[(2)] = null);

(statearr_29370_29381[(1)] = (2));


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
});})(c__23823__auto___29375,ch))
;
return ((function (switch__23733__auto__,c__23823__auto___29375,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23734__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23734__auto____0 = (function (){
var statearr_29371 = [null,null,null,null,null,null,null,null,null];
(statearr_29371[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23734__auto__);

(statearr_29371[(1)] = (1));

return statearr_29371;
});
var figwheel$client$heads_up_plugin_$_state_machine__23734__auto____1 = (function (state_29361){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_29361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e29372){if((e29372 instanceof Object)){
var ex__23737__auto__ = e29372;
var statearr_29373_29382 = state_29361;
(statearr_29373_29382[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29383 = state_29361;
state_29361 = G__29383;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23734__auto__ = function(state_29361){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23734__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23734__auto____1.call(this,state_29361);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23734__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23734__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto___29375,ch))
})();
var state__23825__auto__ = (function (){var statearr_29374 = f__23824__auto__.call(null);
(statearr_29374[(6)] = c__23823__auto___29375);

return statearr_29374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto___29375,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23823__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto__){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto__){
return (function (state_29389){
var state_val_29390 = (state_29389[(1)]);
if((state_val_29390 === (1))){
var inst_29384 = cljs.core.async.timeout.call(null,(3000));
var state_29389__$1 = state_29389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29389__$1,(2),inst_29384);
} else {
if((state_val_29390 === (2))){
var inst_29386 = (state_29389[(2)]);
var inst_29387 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29389__$1 = (function (){var statearr_29391 = state_29389;
(statearr_29391[(7)] = inst_29386);

return statearr_29391;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29389__$1,inst_29387);
} else {
return null;
}
}
});})(c__23823__auto__))
;
return ((function (switch__23733__auto__,c__23823__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23734__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23734__auto____0 = (function (){
var statearr_29392 = [null,null,null,null,null,null,null,null];
(statearr_29392[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23734__auto__);

(statearr_29392[(1)] = (1));

return statearr_29392;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23734__auto____1 = (function (state_29389){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_29389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e29393){if((e29393 instanceof Object)){
var ex__23737__auto__ = e29393;
var statearr_29394_29396 = state_29389;
(statearr_29394_29396[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29397 = state_29389;
state_29389 = G__29397;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23734__auto__ = function(state_29389){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23734__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23734__auto____1.call(this,state_29389);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23734__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23734__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto__))
})();
var state__23825__auto__ = (function (){var statearr_29395 = f__23824__auto__.call(null);
(statearr_29395[(6)] = c__23823__auto__);

return statearr_29395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto__))
);

return c__23823__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23823__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto__,figwheel_version,temp__5457__auto__){
return (function (state_29404){
var state_val_29405 = (state_29404[(1)]);
if((state_val_29405 === (1))){
var inst_29398 = cljs.core.async.timeout.call(null,(2000));
var state_29404__$1 = state_29404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29404__$1,(2),inst_29398);
} else {
if((state_val_29405 === (2))){
var inst_29400 = (state_29404[(2)]);
var inst_29401 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29402 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29401);
var state_29404__$1 = (function (){var statearr_29406 = state_29404;
(statearr_29406[(7)] = inst_29400);

return statearr_29406;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29404__$1,inst_29402);
} else {
return null;
}
}
});})(c__23823__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__23733__auto__,c__23823__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23734__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23734__auto____0 = (function (){
var statearr_29407 = [null,null,null,null,null,null,null,null];
(statearr_29407[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23734__auto__);

(statearr_29407[(1)] = (1));

return statearr_29407;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23734__auto____1 = (function (state_29404){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_29404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e29408){if((e29408 instanceof Object)){
var ex__23737__auto__ = e29408;
var statearr_29409_29411 = state_29404;
(statearr_29409_29411[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29412 = state_29404;
state_29404 = G__29412;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23734__auto__ = function(state_29404){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23734__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23734__auto____1.call(this,state_29404);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23734__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23734__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto__,figwheel_version,temp__5457__auto__))
})();
var state__23825__auto__ = (function (){var statearr_29410 = f__23824__auto__.call(null);
(statearr_29410[(6)] = c__23823__auto__);

return statearr_29410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto__,figwheel_version,temp__5457__auto__))
);

return c__23823__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29413){
var map__29414 = p__29413;
var map__29414__$1 = ((((!((map__29414 == null)))?(((((map__29414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29414):map__29414);
var file = cljs.core.get.call(null,map__29414__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29414__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29414__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29416 = "";
var G__29416__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29416),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29416);
var G__29416__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29416__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29416__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29416__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29416__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29417){
var map__29418 = p__29417;
var map__29418__$1 = ((((!((map__29418 == null)))?(((((map__29418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29418):map__29418);
var ed = map__29418__$1;
var formatted_exception = cljs.core.get.call(null,map__29418__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29418__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29418__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29420_29424 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29421_29425 = null;
var count__29422_29426 = (0);
var i__29423_29427 = (0);
while(true){
if((i__29423_29427 < count__29422_29426)){
var msg_29428 = cljs.core._nth.call(null,chunk__29421_29425,i__29423_29427);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29428);


var G__29429 = seq__29420_29424;
var G__29430 = chunk__29421_29425;
var G__29431 = count__29422_29426;
var G__29432 = (i__29423_29427 + (1));
seq__29420_29424 = G__29429;
chunk__29421_29425 = G__29430;
count__29422_29426 = G__29431;
i__29423_29427 = G__29432;
continue;
} else {
var temp__5457__auto___29433 = cljs.core.seq.call(null,seq__29420_29424);
if(temp__5457__auto___29433){
var seq__29420_29434__$1 = temp__5457__auto___29433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29420_29434__$1)){
var c__4319__auto___29435 = cljs.core.chunk_first.call(null,seq__29420_29434__$1);
var G__29436 = cljs.core.chunk_rest.call(null,seq__29420_29434__$1);
var G__29437 = c__4319__auto___29435;
var G__29438 = cljs.core.count.call(null,c__4319__auto___29435);
var G__29439 = (0);
seq__29420_29424 = G__29436;
chunk__29421_29425 = G__29437;
count__29422_29426 = G__29438;
i__29423_29427 = G__29439;
continue;
} else {
var msg_29440 = cljs.core.first.call(null,seq__29420_29434__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29440);


var G__29441 = cljs.core.next.call(null,seq__29420_29434__$1);
var G__29442 = null;
var G__29443 = (0);
var G__29444 = (0);
seq__29420_29424 = G__29441;
chunk__29421_29425 = G__29442;
count__29422_29426 = G__29443;
i__29423_29427 = G__29444;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29445){
var map__29446 = p__29445;
var map__29446__$1 = ((((!((map__29446 == null)))?(((((map__29446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29446):map__29446);
var w = map__29446__$1;
var message = cljs.core.get.call(null,map__29446__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29448 = cljs.core.seq.call(null,plugins);
var chunk__29449 = null;
var count__29450 = (0);
var i__29451 = (0);
while(true){
if((i__29451 < count__29450)){
var vec__29452 = cljs.core._nth.call(null,chunk__29449,i__29451);
var k = cljs.core.nth.call(null,vec__29452,(0),null);
var plugin = cljs.core.nth.call(null,vec__29452,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29458 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29448,chunk__29449,count__29450,i__29451,pl_29458,vec__29452,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29458.call(null,msg_hist);
});})(seq__29448,chunk__29449,count__29450,i__29451,pl_29458,vec__29452,k,plugin))
);
} else {
}


var G__29459 = seq__29448;
var G__29460 = chunk__29449;
var G__29461 = count__29450;
var G__29462 = (i__29451 + (1));
seq__29448 = G__29459;
chunk__29449 = G__29460;
count__29450 = G__29461;
i__29451 = G__29462;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29448);
if(temp__5457__auto__){
var seq__29448__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29448__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29448__$1);
var G__29463 = cljs.core.chunk_rest.call(null,seq__29448__$1);
var G__29464 = c__4319__auto__;
var G__29465 = cljs.core.count.call(null,c__4319__auto__);
var G__29466 = (0);
seq__29448 = G__29463;
chunk__29449 = G__29464;
count__29450 = G__29465;
i__29451 = G__29466;
continue;
} else {
var vec__29455 = cljs.core.first.call(null,seq__29448__$1);
var k = cljs.core.nth.call(null,vec__29455,(0),null);
var plugin = cljs.core.nth.call(null,vec__29455,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29467 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29448,chunk__29449,count__29450,i__29451,pl_29467,vec__29455,k,plugin,seq__29448__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29467.call(null,msg_hist);
});})(seq__29448,chunk__29449,count__29450,i__29451,pl_29467,vec__29455,k,plugin,seq__29448__$1,temp__5457__auto__))
);
} else {
}


var G__29468 = cljs.core.next.call(null,seq__29448__$1);
var G__29469 = null;
var G__29470 = (0);
var G__29471 = (0);
seq__29448 = G__29468;
chunk__29449 = G__29469;
count__29450 = G__29470;
i__29451 = G__29471;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__29473 = arguments.length;
switch (G__29473) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__29474_29479 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29475_29480 = null;
var count__29476_29481 = (0);
var i__29477_29482 = (0);
while(true){
if((i__29477_29482 < count__29476_29481)){
var msg_29483 = cljs.core._nth.call(null,chunk__29475_29480,i__29477_29482);
figwheel.client.socket.handle_incoming_message.call(null,msg_29483);


var G__29484 = seq__29474_29479;
var G__29485 = chunk__29475_29480;
var G__29486 = count__29476_29481;
var G__29487 = (i__29477_29482 + (1));
seq__29474_29479 = G__29484;
chunk__29475_29480 = G__29485;
count__29476_29481 = G__29486;
i__29477_29482 = G__29487;
continue;
} else {
var temp__5457__auto___29488 = cljs.core.seq.call(null,seq__29474_29479);
if(temp__5457__auto___29488){
var seq__29474_29489__$1 = temp__5457__auto___29488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29474_29489__$1)){
var c__4319__auto___29490 = cljs.core.chunk_first.call(null,seq__29474_29489__$1);
var G__29491 = cljs.core.chunk_rest.call(null,seq__29474_29489__$1);
var G__29492 = c__4319__auto___29490;
var G__29493 = cljs.core.count.call(null,c__4319__auto___29490);
var G__29494 = (0);
seq__29474_29479 = G__29491;
chunk__29475_29480 = G__29492;
count__29476_29481 = G__29493;
i__29477_29482 = G__29494;
continue;
} else {
var msg_29495 = cljs.core.first.call(null,seq__29474_29489__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29495);


var G__29496 = cljs.core.next.call(null,seq__29474_29489__$1);
var G__29497 = null;
var G__29498 = (0);
var G__29499 = (0);
seq__29474_29479 = G__29496;
chunk__29475_29480 = G__29497;
count__29476_29481 = G__29498;
i__29477_29482 = G__29499;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29504 = arguments.length;
var i__4500__auto___29505 = (0);
while(true){
if((i__4500__auto___29505 < len__4499__auto___29504)){
args__4502__auto__.push((arguments[i__4500__auto___29505]));

var G__29506 = (i__4500__auto___29505 + (1));
i__4500__auto___29505 = G__29506;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29501){
var map__29502 = p__29501;
var map__29502__$1 = ((((!((map__29502 == null)))?(((((map__29502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29502):map__29502);
var opts = map__29502__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29500){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29500));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29507){if((e29507 instanceof Error)){
var e = e29507;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29507;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__29508){
var map__29509 = p__29508;
var map__29509__$1 = ((((!((map__29509 == null)))?(((((map__29509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29509):map__29509);
var msg_name = cljs.core.get.call(null,map__29509__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1528479353292
