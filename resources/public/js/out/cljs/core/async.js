// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23883 = arguments.length;
switch (G__23883) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23884 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23884 = (function (f,blockable,meta23885){
this.f = f;
this.blockable = blockable;
this.meta23885 = meta23885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23886,meta23885__$1){
var self__ = this;
var _23886__$1 = this;
return (new cljs.core.async.t_cljs$core$async23884(self__.f,self__.blockable,meta23885__$1));
});

cljs.core.async.t_cljs$core$async23884.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23886){
var self__ = this;
var _23886__$1 = this;
return self__.meta23885;
});

cljs.core.async.t_cljs$core$async23884.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23884.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23884.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23884.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23884.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23885","meta23885",-1818085753,null)], null);
});

cljs.core.async.t_cljs$core$async23884.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23884.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23884";

cljs.core.async.t_cljs$core$async23884.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23884");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23884.
 */
cljs.core.async.__GT_t_cljs$core$async23884 = (function cljs$core$async$__GT_t_cljs$core$async23884(f__$1,blockable__$1,meta23885){
return (new cljs.core.async.t_cljs$core$async23884(f__$1,blockable__$1,meta23885));
});

}

return (new cljs.core.async.t_cljs$core$async23884(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23890 = arguments.length;
switch (G__23890) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23893 = arguments.length;
switch (G__23893) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23896 = arguments.length;
switch (G__23896) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23898 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23898);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23898,ret){
return (function (){
return fn1.call(null,val_23898);
});})(val_23898,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23900 = arguments.length;
switch (G__23900) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___23902 = n;
var x_23903 = (0);
while(true){
if((x_23903 < n__4376__auto___23902)){
(a[x_23903] = (0));

var G__23904 = (x_23903 + (1));
x_23903 = G__23904;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23905 = (i + (1));
i = G__23905;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23906 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23906 = (function (flag,meta23907){
this.flag = flag;
this.meta23907 = meta23907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23908,meta23907__$1){
var self__ = this;
var _23908__$1 = this;
return (new cljs.core.async.t_cljs$core$async23906(self__.flag,meta23907__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23906.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23908){
var self__ = this;
var _23908__$1 = this;
return self__.meta23907;
});})(flag))
;

cljs.core.async.t_cljs$core$async23906.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23906.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23906.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23906.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23906.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23907","meta23907",1147428192,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23906.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23906";

cljs.core.async.t_cljs$core$async23906.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23906");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23906.
 */
cljs.core.async.__GT_t_cljs$core$async23906 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23906(flag__$1,meta23907){
return (new cljs.core.async.t_cljs$core$async23906(flag__$1,meta23907));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23906(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23909 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23909 = (function (flag,cb,meta23910){
this.flag = flag;
this.cb = cb;
this.meta23910 = meta23910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23911,meta23910__$1){
var self__ = this;
var _23911__$1 = this;
return (new cljs.core.async.t_cljs$core$async23909(self__.flag,self__.cb,meta23910__$1));
});

cljs.core.async.t_cljs$core$async23909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23911){
var self__ = this;
var _23911__$1 = this;
return self__.meta23910;
});

cljs.core.async.t_cljs$core$async23909.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23909.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23909.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23909.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23910","meta23910",-370567960,null)], null);
});

cljs.core.async.t_cljs$core$async23909.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23909";

cljs.core.async.t_cljs$core$async23909.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23909");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23909.
 */
cljs.core.async.__GT_t_cljs$core$async23909 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23909(flag__$1,cb__$1,meta23910){
return (new cljs.core.async.t_cljs$core$async23909(flag__$1,cb__$1,meta23910));
});

}

return (new cljs.core.async.t_cljs$core$async23909(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23912_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23912_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23913_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23913_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23914 = (i + (1));
i = G__23914;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23920 = arguments.length;
var i__4500__auto___23921 = (0);
while(true){
if((i__4500__auto___23921 < len__4499__auto___23920)){
args__4502__auto__.push((arguments[i__4500__auto___23921]));

var G__23922 = (i__4500__auto___23921 + (1));
i__4500__auto___23921 = G__23922;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23917){
var map__23918 = p__23917;
var map__23918__$1 = ((((!((map__23918 == null)))?(((((map__23918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23918):map__23918);
var opts = map__23918__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23915){
var G__23916 = cljs.core.first.call(null,seq23915);
var seq23915__$1 = cljs.core.next.call(null,seq23915);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23916,seq23915__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23924 = arguments.length;
switch (G__23924) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23823__auto___23970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto___23970){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto___23970){
return (function (state_23948){
var state_val_23949 = (state_23948[(1)]);
if((state_val_23949 === (7))){
var inst_23944 = (state_23948[(2)]);
var state_23948__$1 = state_23948;
var statearr_23950_23971 = state_23948__$1;
(statearr_23950_23971[(2)] = inst_23944);

(statearr_23950_23971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23949 === (1))){
var state_23948__$1 = state_23948;
var statearr_23951_23972 = state_23948__$1;
(statearr_23951_23972[(2)] = null);

(statearr_23951_23972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23949 === (4))){
var inst_23927 = (state_23948[(7)]);
var inst_23927__$1 = (state_23948[(2)]);
var inst_23928 = (inst_23927__$1 == null);
var state_23948__$1 = (function (){var statearr_23952 = state_23948;
(statearr_23952[(7)] = inst_23927__$1);

return statearr_23952;
})();
if(cljs.core.truth_(inst_23928)){
var statearr_23953_23973 = state_23948__$1;
(statearr_23953_23973[(1)] = (5));

} else {
var statearr_23954_23974 = state_23948__$1;
(statearr_23954_23974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23949 === (13))){
var state_23948__$1 = state_23948;
var statearr_23955_23975 = state_23948__$1;
(statearr_23955_23975[(2)] = null);

(statearr_23955_23975[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23949 === (6))){
var inst_23927 = (state_23948[(7)]);
var state_23948__$1 = state_23948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23948__$1,(11),to,inst_23927);
} else {
if((state_val_23949 === (3))){
var inst_23946 = (state_23948[(2)]);
var state_23948__$1 = state_23948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23948__$1,inst_23946);
} else {
if((state_val_23949 === (12))){
var state_23948__$1 = state_23948;
var statearr_23956_23976 = state_23948__$1;
(statearr_23956_23976[(2)] = null);

(statearr_23956_23976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23949 === (2))){
var state_23948__$1 = state_23948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23948__$1,(4),from);
} else {
if((state_val_23949 === (11))){
var inst_23937 = (state_23948[(2)]);
var state_23948__$1 = state_23948;
if(cljs.core.truth_(inst_23937)){
var statearr_23957_23977 = state_23948__$1;
(statearr_23957_23977[(1)] = (12));

} else {
var statearr_23958_23978 = state_23948__$1;
(statearr_23958_23978[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23949 === (9))){
var state_23948__$1 = state_23948;
var statearr_23959_23979 = state_23948__$1;
(statearr_23959_23979[(2)] = null);

(statearr_23959_23979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23949 === (5))){
var state_23948__$1 = state_23948;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23960_23980 = state_23948__$1;
(statearr_23960_23980[(1)] = (8));

} else {
var statearr_23961_23981 = state_23948__$1;
(statearr_23961_23981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23949 === (14))){
var inst_23942 = (state_23948[(2)]);
var state_23948__$1 = state_23948;
var statearr_23962_23982 = state_23948__$1;
(statearr_23962_23982[(2)] = inst_23942);

(statearr_23962_23982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23949 === (10))){
var inst_23934 = (state_23948[(2)]);
var state_23948__$1 = state_23948;
var statearr_23963_23983 = state_23948__$1;
(statearr_23963_23983[(2)] = inst_23934);

(statearr_23963_23983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23949 === (8))){
var inst_23931 = cljs.core.async.close_BANG_.call(null,to);
var state_23948__$1 = state_23948;
var statearr_23964_23984 = state_23948__$1;
(statearr_23964_23984[(2)] = inst_23931);

(statearr_23964_23984[(1)] = (10));


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
});})(c__23823__auto___23970))
;
return ((function (switch__23733__auto__,c__23823__auto___23970){
return (function() {
var cljs$core$async$state_machine__23734__auto__ = null;
var cljs$core$async$state_machine__23734__auto____0 = (function (){
var statearr_23965 = [null,null,null,null,null,null,null,null];
(statearr_23965[(0)] = cljs$core$async$state_machine__23734__auto__);

(statearr_23965[(1)] = (1));

return statearr_23965;
});
var cljs$core$async$state_machine__23734__auto____1 = (function (state_23948){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_23948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e23966){if((e23966 instanceof Object)){
var ex__23737__auto__ = e23966;
var statearr_23967_23985 = state_23948;
(statearr_23967_23985[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23986 = state_23948;
state_23948 = G__23986;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
cljs$core$async$state_machine__23734__auto__ = function(state_23948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23734__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23734__auto____1.call(this,state_23948);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23734__auto____0;
cljs$core$async$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23734__auto____1;
return cljs$core$async$state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto___23970))
})();
var state__23825__auto__ = (function (){var statearr_23968 = f__23824__auto__.call(null);
(statearr_23968[(6)] = c__23823__auto___23970);

return statearr_23968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto___23970))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23987){
var vec__23988 = p__23987;
var v = cljs.core.nth.call(null,vec__23988,(0),null);
var p = cljs.core.nth.call(null,vec__23988,(1),null);
var job = vec__23988;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23823__auto___24159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto___24159,res,vec__23988,v,p,job,jobs,results){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto___24159,res,vec__23988,v,p,job,jobs,results){
return (function (state_23995){
var state_val_23996 = (state_23995[(1)]);
if((state_val_23996 === (1))){
var state_23995__$1 = state_23995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23995__$1,(2),res,v);
} else {
if((state_val_23996 === (2))){
var inst_23992 = (state_23995[(2)]);
var inst_23993 = cljs.core.async.close_BANG_.call(null,res);
var state_23995__$1 = (function (){var statearr_23997 = state_23995;
(statearr_23997[(7)] = inst_23992);

return statearr_23997;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23995__$1,inst_23993);
} else {
return null;
}
}
});})(c__23823__auto___24159,res,vec__23988,v,p,job,jobs,results))
;
return ((function (switch__23733__auto__,c__23823__auto___24159,res,vec__23988,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____0 = (function (){
var statearr_23998 = [null,null,null,null,null,null,null,null];
(statearr_23998[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__);

(statearr_23998[(1)] = (1));

return statearr_23998;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____1 = (function (state_23995){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_23995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e23999){if((e23999 instanceof Object)){
var ex__23737__auto__ = e23999;
var statearr_24000_24160 = state_23995;
(statearr_24000_24160[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24161 = state_23995;
state_23995 = G__24161;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__ = function(state_23995){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____1.call(this,state_23995);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto___24159,res,vec__23988,v,p,job,jobs,results))
})();
var state__23825__auto__ = (function (){var statearr_24001 = f__23824__auto__.call(null);
(statearr_24001[(6)] = c__23823__auto___24159);

return statearr_24001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto___24159,res,vec__23988,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24002){
var vec__24003 = p__24002;
var v = cljs.core.nth.call(null,vec__24003,(0),null);
var p = cljs.core.nth.call(null,vec__24003,(1),null);
var job = vec__24003;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___24162 = n;
var __24163 = (0);
while(true){
if((__24163 < n__4376__auto___24162)){
var G__24006_24164 = type;
var G__24006_24165__$1 = (((G__24006_24164 instanceof cljs.core.Keyword))?G__24006_24164.fqn:null);
switch (G__24006_24165__$1) {
case "compute":
var c__23823__auto___24167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24163,c__23823__auto___24167,G__24006_24164,G__24006_24165__$1,n__4376__auto___24162,jobs,results,process,async){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (__24163,c__23823__auto___24167,G__24006_24164,G__24006_24165__$1,n__4376__auto___24162,jobs,results,process,async){
return (function (state_24019){
var state_val_24020 = (state_24019[(1)]);
if((state_val_24020 === (1))){
var state_24019__$1 = state_24019;
var statearr_24021_24168 = state_24019__$1;
(statearr_24021_24168[(2)] = null);

(statearr_24021_24168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (2))){
var state_24019__$1 = state_24019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24019__$1,(4),jobs);
} else {
if((state_val_24020 === (3))){
var inst_24017 = (state_24019[(2)]);
var state_24019__$1 = state_24019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24019__$1,inst_24017);
} else {
if((state_val_24020 === (4))){
var inst_24009 = (state_24019[(2)]);
var inst_24010 = process.call(null,inst_24009);
var state_24019__$1 = state_24019;
if(cljs.core.truth_(inst_24010)){
var statearr_24022_24169 = state_24019__$1;
(statearr_24022_24169[(1)] = (5));

} else {
var statearr_24023_24170 = state_24019__$1;
(statearr_24023_24170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (5))){
var state_24019__$1 = state_24019;
var statearr_24024_24171 = state_24019__$1;
(statearr_24024_24171[(2)] = null);

(statearr_24024_24171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (6))){
var state_24019__$1 = state_24019;
var statearr_24025_24172 = state_24019__$1;
(statearr_24025_24172[(2)] = null);

(statearr_24025_24172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (7))){
var inst_24015 = (state_24019[(2)]);
var state_24019__$1 = state_24019;
var statearr_24026_24173 = state_24019__$1;
(statearr_24026_24173[(2)] = inst_24015);

(statearr_24026_24173[(1)] = (3));


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
});})(__24163,c__23823__auto___24167,G__24006_24164,G__24006_24165__$1,n__4376__auto___24162,jobs,results,process,async))
;
return ((function (__24163,switch__23733__auto__,c__23823__auto___24167,G__24006_24164,G__24006_24165__$1,n__4376__auto___24162,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____0 = (function (){
var statearr_24027 = [null,null,null,null,null,null,null];
(statearr_24027[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__);

(statearr_24027[(1)] = (1));

return statearr_24027;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____1 = (function (state_24019){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_24019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e24028){if((e24028 instanceof Object)){
var ex__23737__auto__ = e24028;
var statearr_24029_24174 = state_24019;
(statearr_24029_24174[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24175 = state_24019;
state_24019 = G__24175;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__ = function(state_24019){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____1.call(this,state_24019);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__;
})()
;})(__24163,switch__23733__auto__,c__23823__auto___24167,G__24006_24164,G__24006_24165__$1,n__4376__auto___24162,jobs,results,process,async))
})();
var state__23825__auto__ = (function (){var statearr_24030 = f__23824__auto__.call(null);
(statearr_24030[(6)] = c__23823__auto___24167);

return statearr_24030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(__24163,c__23823__auto___24167,G__24006_24164,G__24006_24165__$1,n__4376__auto___24162,jobs,results,process,async))
);


break;
case "async":
var c__23823__auto___24176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24163,c__23823__auto___24176,G__24006_24164,G__24006_24165__$1,n__4376__auto___24162,jobs,results,process,async){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (__24163,c__23823__auto___24176,G__24006_24164,G__24006_24165__$1,n__4376__auto___24162,jobs,results,process,async){
return (function (state_24043){
var state_val_24044 = (state_24043[(1)]);
if((state_val_24044 === (1))){
var state_24043__$1 = state_24043;
var statearr_24045_24177 = state_24043__$1;
(statearr_24045_24177[(2)] = null);

(statearr_24045_24177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24044 === (2))){
var state_24043__$1 = state_24043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24043__$1,(4),jobs);
} else {
if((state_val_24044 === (3))){
var inst_24041 = (state_24043[(2)]);
var state_24043__$1 = state_24043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24043__$1,inst_24041);
} else {
if((state_val_24044 === (4))){
var inst_24033 = (state_24043[(2)]);
var inst_24034 = async.call(null,inst_24033);
var state_24043__$1 = state_24043;
if(cljs.core.truth_(inst_24034)){
var statearr_24046_24178 = state_24043__$1;
(statearr_24046_24178[(1)] = (5));

} else {
var statearr_24047_24179 = state_24043__$1;
(statearr_24047_24179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24044 === (5))){
var state_24043__$1 = state_24043;
var statearr_24048_24180 = state_24043__$1;
(statearr_24048_24180[(2)] = null);

(statearr_24048_24180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24044 === (6))){
var state_24043__$1 = state_24043;
var statearr_24049_24181 = state_24043__$1;
(statearr_24049_24181[(2)] = null);

(statearr_24049_24181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24044 === (7))){
var inst_24039 = (state_24043[(2)]);
var state_24043__$1 = state_24043;
var statearr_24050_24182 = state_24043__$1;
(statearr_24050_24182[(2)] = inst_24039);

(statearr_24050_24182[(1)] = (3));


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
});})(__24163,c__23823__auto___24176,G__24006_24164,G__24006_24165__$1,n__4376__auto___24162,jobs,results,process,async))
;
return ((function (__24163,switch__23733__auto__,c__23823__auto___24176,G__24006_24164,G__24006_24165__$1,n__4376__auto___24162,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____0 = (function (){
var statearr_24051 = [null,null,null,null,null,null,null];
(statearr_24051[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__);

(statearr_24051[(1)] = (1));

return statearr_24051;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____1 = (function (state_24043){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_24043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e24052){if((e24052 instanceof Object)){
var ex__23737__auto__ = e24052;
var statearr_24053_24183 = state_24043;
(statearr_24053_24183[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24184 = state_24043;
state_24043 = G__24184;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__ = function(state_24043){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____1.call(this,state_24043);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__;
})()
;})(__24163,switch__23733__auto__,c__23823__auto___24176,G__24006_24164,G__24006_24165__$1,n__4376__auto___24162,jobs,results,process,async))
})();
var state__23825__auto__ = (function (){var statearr_24054 = f__23824__auto__.call(null);
(statearr_24054[(6)] = c__23823__auto___24176);

return statearr_24054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(__24163,c__23823__auto___24176,G__24006_24164,G__24006_24165__$1,n__4376__auto___24162,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24006_24165__$1)].join('')));

}

var G__24185 = (__24163 + (1));
__24163 = G__24185;
continue;
} else {
}
break;
}

var c__23823__auto___24186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto___24186,jobs,results,process,async){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto___24186,jobs,results,process,async){
return (function (state_24076){
var state_val_24077 = (state_24076[(1)]);
if((state_val_24077 === (1))){
var state_24076__$1 = state_24076;
var statearr_24078_24187 = state_24076__$1;
(statearr_24078_24187[(2)] = null);

(statearr_24078_24187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24077 === (2))){
var state_24076__$1 = state_24076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24076__$1,(4),from);
} else {
if((state_val_24077 === (3))){
var inst_24074 = (state_24076[(2)]);
var state_24076__$1 = state_24076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24076__$1,inst_24074);
} else {
if((state_val_24077 === (4))){
var inst_24057 = (state_24076[(7)]);
var inst_24057__$1 = (state_24076[(2)]);
var inst_24058 = (inst_24057__$1 == null);
var state_24076__$1 = (function (){var statearr_24079 = state_24076;
(statearr_24079[(7)] = inst_24057__$1);

return statearr_24079;
})();
if(cljs.core.truth_(inst_24058)){
var statearr_24080_24188 = state_24076__$1;
(statearr_24080_24188[(1)] = (5));

} else {
var statearr_24081_24189 = state_24076__$1;
(statearr_24081_24189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24077 === (5))){
var inst_24060 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24076__$1 = state_24076;
var statearr_24082_24190 = state_24076__$1;
(statearr_24082_24190[(2)] = inst_24060);

(statearr_24082_24190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24077 === (6))){
var inst_24057 = (state_24076[(7)]);
var inst_24062 = (state_24076[(8)]);
var inst_24062__$1 = cljs.core.async.chan.call(null,(1));
var inst_24063 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24064 = [inst_24057,inst_24062__$1];
var inst_24065 = (new cljs.core.PersistentVector(null,2,(5),inst_24063,inst_24064,null));
var state_24076__$1 = (function (){var statearr_24083 = state_24076;
(statearr_24083[(8)] = inst_24062__$1);

return statearr_24083;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24076__$1,(8),jobs,inst_24065);
} else {
if((state_val_24077 === (7))){
var inst_24072 = (state_24076[(2)]);
var state_24076__$1 = state_24076;
var statearr_24084_24191 = state_24076__$1;
(statearr_24084_24191[(2)] = inst_24072);

(statearr_24084_24191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24077 === (8))){
var inst_24062 = (state_24076[(8)]);
var inst_24067 = (state_24076[(2)]);
var state_24076__$1 = (function (){var statearr_24085 = state_24076;
(statearr_24085[(9)] = inst_24067);

return statearr_24085;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24076__$1,(9),results,inst_24062);
} else {
if((state_val_24077 === (9))){
var inst_24069 = (state_24076[(2)]);
var state_24076__$1 = (function (){var statearr_24086 = state_24076;
(statearr_24086[(10)] = inst_24069);

return statearr_24086;
})();
var statearr_24087_24192 = state_24076__$1;
(statearr_24087_24192[(2)] = null);

(statearr_24087_24192[(1)] = (2));


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
});})(c__23823__auto___24186,jobs,results,process,async))
;
return ((function (switch__23733__auto__,c__23823__auto___24186,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____0 = (function (){
var statearr_24088 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24088[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__);

(statearr_24088[(1)] = (1));

return statearr_24088;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____1 = (function (state_24076){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_24076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e24089){if((e24089 instanceof Object)){
var ex__23737__auto__ = e24089;
var statearr_24090_24193 = state_24076;
(statearr_24090_24193[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24194 = state_24076;
state_24076 = G__24194;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__ = function(state_24076){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____1.call(this,state_24076);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto___24186,jobs,results,process,async))
})();
var state__23825__auto__ = (function (){var statearr_24091 = f__23824__auto__.call(null);
(statearr_24091[(6)] = c__23823__auto___24186);

return statearr_24091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto___24186,jobs,results,process,async))
);


var c__23823__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto__,jobs,results,process,async){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto__,jobs,results,process,async){
return (function (state_24129){
var state_val_24130 = (state_24129[(1)]);
if((state_val_24130 === (7))){
var inst_24125 = (state_24129[(2)]);
var state_24129__$1 = state_24129;
var statearr_24131_24195 = state_24129__$1;
(statearr_24131_24195[(2)] = inst_24125);

(statearr_24131_24195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (20))){
var state_24129__$1 = state_24129;
var statearr_24132_24196 = state_24129__$1;
(statearr_24132_24196[(2)] = null);

(statearr_24132_24196[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (1))){
var state_24129__$1 = state_24129;
var statearr_24133_24197 = state_24129__$1;
(statearr_24133_24197[(2)] = null);

(statearr_24133_24197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (4))){
var inst_24094 = (state_24129[(7)]);
var inst_24094__$1 = (state_24129[(2)]);
var inst_24095 = (inst_24094__$1 == null);
var state_24129__$1 = (function (){var statearr_24134 = state_24129;
(statearr_24134[(7)] = inst_24094__$1);

return statearr_24134;
})();
if(cljs.core.truth_(inst_24095)){
var statearr_24135_24198 = state_24129__$1;
(statearr_24135_24198[(1)] = (5));

} else {
var statearr_24136_24199 = state_24129__$1;
(statearr_24136_24199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (15))){
var inst_24107 = (state_24129[(8)]);
var state_24129__$1 = state_24129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24129__$1,(18),to,inst_24107);
} else {
if((state_val_24130 === (21))){
var inst_24120 = (state_24129[(2)]);
var state_24129__$1 = state_24129;
var statearr_24137_24200 = state_24129__$1;
(statearr_24137_24200[(2)] = inst_24120);

(statearr_24137_24200[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (13))){
var inst_24122 = (state_24129[(2)]);
var state_24129__$1 = (function (){var statearr_24138 = state_24129;
(statearr_24138[(9)] = inst_24122);

return statearr_24138;
})();
var statearr_24139_24201 = state_24129__$1;
(statearr_24139_24201[(2)] = null);

(statearr_24139_24201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (6))){
var inst_24094 = (state_24129[(7)]);
var state_24129__$1 = state_24129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24129__$1,(11),inst_24094);
} else {
if((state_val_24130 === (17))){
var inst_24115 = (state_24129[(2)]);
var state_24129__$1 = state_24129;
if(cljs.core.truth_(inst_24115)){
var statearr_24140_24202 = state_24129__$1;
(statearr_24140_24202[(1)] = (19));

} else {
var statearr_24141_24203 = state_24129__$1;
(statearr_24141_24203[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (3))){
var inst_24127 = (state_24129[(2)]);
var state_24129__$1 = state_24129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24129__$1,inst_24127);
} else {
if((state_val_24130 === (12))){
var inst_24104 = (state_24129[(10)]);
var state_24129__$1 = state_24129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24129__$1,(14),inst_24104);
} else {
if((state_val_24130 === (2))){
var state_24129__$1 = state_24129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24129__$1,(4),results);
} else {
if((state_val_24130 === (19))){
var state_24129__$1 = state_24129;
var statearr_24142_24204 = state_24129__$1;
(statearr_24142_24204[(2)] = null);

(statearr_24142_24204[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (11))){
var inst_24104 = (state_24129[(2)]);
var state_24129__$1 = (function (){var statearr_24143 = state_24129;
(statearr_24143[(10)] = inst_24104);

return statearr_24143;
})();
var statearr_24144_24205 = state_24129__$1;
(statearr_24144_24205[(2)] = null);

(statearr_24144_24205[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (9))){
var state_24129__$1 = state_24129;
var statearr_24145_24206 = state_24129__$1;
(statearr_24145_24206[(2)] = null);

(statearr_24145_24206[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (5))){
var state_24129__$1 = state_24129;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24146_24207 = state_24129__$1;
(statearr_24146_24207[(1)] = (8));

} else {
var statearr_24147_24208 = state_24129__$1;
(statearr_24147_24208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (14))){
var inst_24109 = (state_24129[(11)]);
var inst_24107 = (state_24129[(8)]);
var inst_24107__$1 = (state_24129[(2)]);
var inst_24108 = (inst_24107__$1 == null);
var inst_24109__$1 = cljs.core.not.call(null,inst_24108);
var state_24129__$1 = (function (){var statearr_24148 = state_24129;
(statearr_24148[(11)] = inst_24109__$1);

(statearr_24148[(8)] = inst_24107__$1);

return statearr_24148;
})();
if(inst_24109__$1){
var statearr_24149_24209 = state_24129__$1;
(statearr_24149_24209[(1)] = (15));

} else {
var statearr_24150_24210 = state_24129__$1;
(statearr_24150_24210[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (16))){
var inst_24109 = (state_24129[(11)]);
var state_24129__$1 = state_24129;
var statearr_24151_24211 = state_24129__$1;
(statearr_24151_24211[(2)] = inst_24109);

(statearr_24151_24211[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (10))){
var inst_24101 = (state_24129[(2)]);
var state_24129__$1 = state_24129;
var statearr_24152_24212 = state_24129__$1;
(statearr_24152_24212[(2)] = inst_24101);

(statearr_24152_24212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (18))){
var inst_24112 = (state_24129[(2)]);
var state_24129__$1 = state_24129;
var statearr_24153_24213 = state_24129__$1;
(statearr_24153_24213[(2)] = inst_24112);

(statearr_24153_24213[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (8))){
var inst_24098 = cljs.core.async.close_BANG_.call(null,to);
var state_24129__$1 = state_24129;
var statearr_24154_24214 = state_24129__$1;
(statearr_24154_24214[(2)] = inst_24098);

(statearr_24154_24214[(1)] = (10));


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
});})(c__23823__auto__,jobs,results,process,async))
;
return ((function (switch__23733__auto__,c__23823__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____0 = (function (){
var statearr_24155 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24155[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__);

(statearr_24155[(1)] = (1));

return statearr_24155;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____1 = (function (state_24129){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_24129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e24156){if((e24156 instanceof Object)){
var ex__23737__auto__ = e24156;
var statearr_24157_24215 = state_24129;
(statearr_24157_24215[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24216 = state_24129;
state_24129 = G__24216;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__ = function(state_24129){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____1.call(this,state_24129);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23734__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto__,jobs,results,process,async))
})();
var state__23825__auto__ = (function (){var statearr_24158 = f__23824__auto__.call(null);
(statearr_24158[(6)] = c__23823__auto__);

return statearr_24158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto__,jobs,results,process,async))
);

return c__23823__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24218 = arguments.length;
switch (G__24218) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24221 = arguments.length;
switch (G__24221) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24224 = arguments.length;
switch (G__24224) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23823__auto___24273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto___24273,tc,fc){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto___24273,tc,fc){
return (function (state_24250){
var state_val_24251 = (state_24250[(1)]);
if((state_val_24251 === (7))){
var inst_24246 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24252_24274 = state_24250__$1;
(statearr_24252_24274[(2)] = inst_24246);

(statearr_24252_24274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (1))){
var state_24250__$1 = state_24250;
var statearr_24253_24275 = state_24250__$1;
(statearr_24253_24275[(2)] = null);

(statearr_24253_24275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (4))){
var inst_24227 = (state_24250[(7)]);
var inst_24227__$1 = (state_24250[(2)]);
var inst_24228 = (inst_24227__$1 == null);
var state_24250__$1 = (function (){var statearr_24254 = state_24250;
(statearr_24254[(7)] = inst_24227__$1);

return statearr_24254;
})();
if(cljs.core.truth_(inst_24228)){
var statearr_24255_24276 = state_24250__$1;
(statearr_24255_24276[(1)] = (5));

} else {
var statearr_24256_24277 = state_24250__$1;
(statearr_24256_24277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (13))){
var state_24250__$1 = state_24250;
var statearr_24257_24278 = state_24250__$1;
(statearr_24257_24278[(2)] = null);

(statearr_24257_24278[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (6))){
var inst_24227 = (state_24250[(7)]);
var inst_24233 = p.call(null,inst_24227);
var state_24250__$1 = state_24250;
if(cljs.core.truth_(inst_24233)){
var statearr_24258_24279 = state_24250__$1;
(statearr_24258_24279[(1)] = (9));

} else {
var statearr_24259_24280 = state_24250__$1;
(statearr_24259_24280[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (3))){
var inst_24248 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24250__$1,inst_24248);
} else {
if((state_val_24251 === (12))){
var state_24250__$1 = state_24250;
var statearr_24260_24281 = state_24250__$1;
(statearr_24260_24281[(2)] = null);

(statearr_24260_24281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (2))){
var state_24250__$1 = state_24250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24250__$1,(4),ch);
} else {
if((state_val_24251 === (11))){
var inst_24227 = (state_24250[(7)]);
var inst_24237 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24250__$1,(8),inst_24237,inst_24227);
} else {
if((state_val_24251 === (9))){
var state_24250__$1 = state_24250;
var statearr_24261_24282 = state_24250__$1;
(statearr_24261_24282[(2)] = tc);

(statearr_24261_24282[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (5))){
var inst_24230 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24231 = cljs.core.async.close_BANG_.call(null,fc);
var state_24250__$1 = (function (){var statearr_24262 = state_24250;
(statearr_24262[(8)] = inst_24230);

return statearr_24262;
})();
var statearr_24263_24283 = state_24250__$1;
(statearr_24263_24283[(2)] = inst_24231);

(statearr_24263_24283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (14))){
var inst_24244 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24264_24284 = state_24250__$1;
(statearr_24264_24284[(2)] = inst_24244);

(statearr_24264_24284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (10))){
var state_24250__$1 = state_24250;
var statearr_24265_24285 = state_24250__$1;
(statearr_24265_24285[(2)] = fc);

(statearr_24265_24285[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (8))){
var inst_24239 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
if(cljs.core.truth_(inst_24239)){
var statearr_24266_24286 = state_24250__$1;
(statearr_24266_24286[(1)] = (12));

} else {
var statearr_24267_24287 = state_24250__$1;
(statearr_24267_24287[(1)] = (13));

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
});})(c__23823__auto___24273,tc,fc))
;
return ((function (switch__23733__auto__,c__23823__auto___24273,tc,fc){
return (function() {
var cljs$core$async$state_machine__23734__auto__ = null;
var cljs$core$async$state_machine__23734__auto____0 = (function (){
var statearr_24268 = [null,null,null,null,null,null,null,null,null];
(statearr_24268[(0)] = cljs$core$async$state_machine__23734__auto__);

(statearr_24268[(1)] = (1));

return statearr_24268;
});
var cljs$core$async$state_machine__23734__auto____1 = (function (state_24250){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_24250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e24269){if((e24269 instanceof Object)){
var ex__23737__auto__ = e24269;
var statearr_24270_24288 = state_24250;
(statearr_24270_24288[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24289 = state_24250;
state_24250 = G__24289;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
cljs$core$async$state_machine__23734__auto__ = function(state_24250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23734__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23734__auto____1.call(this,state_24250);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23734__auto____0;
cljs$core$async$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23734__auto____1;
return cljs$core$async$state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto___24273,tc,fc))
})();
var state__23825__auto__ = (function (){var statearr_24271 = f__23824__auto__.call(null);
(statearr_24271[(6)] = c__23823__auto___24273);

return statearr_24271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto___24273,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23823__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto__){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto__){
return (function (state_24310){
var state_val_24311 = (state_24310[(1)]);
if((state_val_24311 === (7))){
var inst_24306 = (state_24310[(2)]);
var state_24310__$1 = state_24310;
var statearr_24312_24330 = state_24310__$1;
(statearr_24312_24330[(2)] = inst_24306);

(statearr_24312_24330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24311 === (1))){
var inst_24290 = init;
var state_24310__$1 = (function (){var statearr_24313 = state_24310;
(statearr_24313[(7)] = inst_24290);

return statearr_24313;
})();
var statearr_24314_24331 = state_24310__$1;
(statearr_24314_24331[(2)] = null);

(statearr_24314_24331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24311 === (4))){
var inst_24293 = (state_24310[(8)]);
var inst_24293__$1 = (state_24310[(2)]);
var inst_24294 = (inst_24293__$1 == null);
var state_24310__$1 = (function (){var statearr_24315 = state_24310;
(statearr_24315[(8)] = inst_24293__$1);

return statearr_24315;
})();
if(cljs.core.truth_(inst_24294)){
var statearr_24316_24332 = state_24310__$1;
(statearr_24316_24332[(1)] = (5));

} else {
var statearr_24317_24333 = state_24310__$1;
(statearr_24317_24333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24311 === (6))){
var inst_24290 = (state_24310[(7)]);
var inst_24297 = (state_24310[(9)]);
var inst_24293 = (state_24310[(8)]);
var inst_24297__$1 = f.call(null,inst_24290,inst_24293);
var inst_24298 = cljs.core.reduced_QMARK_.call(null,inst_24297__$1);
var state_24310__$1 = (function (){var statearr_24318 = state_24310;
(statearr_24318[(9)] = inst_24297__$1);

return statearr_24318;
})();
if(inst_24298){
var statearr_24319_24334 = state_24310__$1;
(statearr_24319_24334[(1)] = (8));

} else {
var statearr_24320_24335 = state_24310__$1;
(statearr_24320_24335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24311 === (3))){
var inst_24308 = (state_24310[(2)]);
var state_24310__$1 = state_24310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24310__$1,inst_24308);
} else {
if((state_val_24311 === (2))){
var state_24310__$1 = state_24310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24310__$1,(4),ch);
} else {
if((state_val_24311 === (9))){
var inst_24297 = (state_24310[(9)]);
var inst_24290 = inst_24297;
var state_24310__$1 = (function (){var statearr_24321 = state_24310;
(statearr_24321[(7)] = inst_24290);

return statearr_24321;
})();
var statearr_24322_24336 = state_24310__$1;
(statearr_24322_24336[(2)] = null);

(statearr_24322_24336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24311 === (5))){
var inst_24290 = (state_24310[(7)]);
var state_24310__$1 = state_24310;
var statearr_24323_24337 = state_24310__$1;
(statearr_24323_24337[(2)] = inst_24290);

(statearr_24323_24337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24311 === (10))){
var inst_24304 = (state_24310[(2)]);
var state_24310__$1 = state_24310;
var statearr_24324_24338 = state_24310__$1;
(statearr_24324_24338[(2)] = inst_24304);

(statearr_24324_24338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24311 === (8))){
var inst_24297 = (state_24310[(9)]);
var inst_24300 = cljs.core.deref.call(null,inst_24297);
var state_24310__$1 = state_24310;
var statearr_24325_24339 = state_24310__$1;
(statearr_24325_24339[(2)] = inst_24300);

(statearr_24325_24339[(1)] = (10));


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
});})(c__23823__auto__))
;
return ((function (switch__23733__auto__,c__23823__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23734__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23734__auto____0 = (function (){
var statearr_24326 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24326[(0)] = cljs$core$async$reduce_$_state_machine__23734__auto__);

(statearr_24326[(1)] = (1));

return statearr_24326;
});
var cljs$core$async$reduce_$_state_machine__23734__auto____1 = (function (state_24310){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_24310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e24327){if((e24327 instanceof Object)){
var ex__23737__auto__ = e24327;
var statearr_24328_24340 = state_24310;
(statearr_24328_24340[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24341 = state_24310;
state_24310 = G__24341;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23734__auto__ = function(state_24310){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23734__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23734__auto____1.call(this,state_24310);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23734__auto____0;
cljs$core$async$reduce_$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23734__auto____1;
return cljs$core$async$reduce_$_state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto__))
})();
var state__23825__auto__ = (function (){var statearr_24329 = f__23824__auto__.call(null);
(statearr_24329[(6)] = c__23823__auto__);

return statearr_24329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto__))
);

return c__23823__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23823__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto__,f__$1){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto__,f__$1){
return (function (state_24347){
var state_val_24348 = (state_24347[(1)]);
if((state_val_24348 === (1))){
var inst_24342 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24347__$1 = state_24347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24347__$1,(2),inst_24342);
} else {
if((state_val_24348 === (2))){
var inst_24344 = (state_24347[(2)]);
var inst_24345 = f__$1.call(null,inst_24344);
var state_24347__$1 = state_24347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24347__$1,inst_24345);
} else {
return null;
}
}
});})(c__23823__auto__,f__$1))
;
return ((function (switch__23733__auto__,c__23823__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23734__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23734__auto____0 = (function (){
var statearr_24349 = [null,null,null,null,null,null,null];
(statearr_24349[(0)] = cljs$core$async$transduce_$_state_machine__23734__auto__);

(statearr_24349[(1)] = (1));

return statearr_24349;
});
var cljs$core$async$transduce_$_state_machine__23734__auto____1 = (function (state_24347){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_24347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e24350){if((e24350 instanceof Object)){
var ex__23737__auto__ = e24350;
var statearr_24351_24353 = state_24347;
(statearr_24351_24353[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24354 = state_24347;
state_24347 = G__24354;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23734__auto__ = function(state_24347){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23734__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23734__auto____1.call(this,state_24347);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23734__auto____0;
cljs$core$async$transduce_$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23734__auto____1;
return cljs$core$async$transduce_$_state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto__,f__$1))
})();
var state__23825__auto__ = (function (){var statearr_24352 = f__23824__auto__.call(null);
(statearr_24352[(6)] = c__23823__auto__);

return statearr_24352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto__,f__$1))
);

return c__23823__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24356 = arguments.length;
switch (G__24356) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23823__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto__){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto__){
return (function (state_24381){
var state_val_24382 = (state_24381[(1)]);
if((state_val_24382 === (7))){
var inst_24363 = (state_24381[(2)]);
var state_24381__$1 = state_24381;
var statearr_24383_24404 = state_24381__$1;
(statearr_24383_24404[(2)] = inst_24363);

(statearr_24383_24404[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (1))){
var inst_24357 = cljs.core.seq.call(null,coll);
var inst_24358 = inst_24357;
var state_24381__$1 = (function (){var statearr_24384 = state_24381;
(statearr_24384[(7)] = inst_24358);

return statearr_24384;
})();
var statearr_24385_24405 = state_24381__$1;
(statearr_24385_24405[(2)] = null);

(statearr_24385_24405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (4))){
var inst_24358 = (state_24381[(7)]);
var inst_24361 = cljs.core.first.call(null,inst_24358);
var state_24381__$1 = state_24381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24381__$1,(7),ch,inst_24361);
} else {
if((state_val_24382 === (13))){
var inst_24375 = (state_24381[(2)]);
var state_24381__$1 = state_24381;
var statearr_24386_24406 = state_24381__$1;
(statearr_24386_24406[(2)] = inst_24375);

(statearr_24386_24406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (6))){
var inst_24366 = (state_24381[(2)]);
var state_24381__$1 = state_24381;
if(cljs.core.truth_(inst_24366)){
var statearr_24387_24407 = state_24381__$1;
(statearr_24387_24407[(1)] = (8));

} else {
var statearr_24388_24408 = state_24381__$1;
(statearr_24388_24408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (3))){
var inst_24379 = (state_24381[(2)]);
var state_24381__$1 = state_24381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24381__$1,inst_24379);
} else {
if((state_val_24382 === (12))){
var state_24381__$1 = state_24381;
var statearr_24389_24409 = state_24381__$1;
(statearr_24389_24409[(2)] = null);

(statearr_24389_24409[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (2))){
var inst_24358 = (state_24381[(7)]);
var state_24381__$1 = state_24381;
if(cljs.core.truth_(inst_24358)){
var statearr_24390_24410 = state_24381__$1;
(statearr_24390_24410[(1)] = (4));

} else {
var statearr_24391_24411 = state_24381__$1;
(statearr_24391_24411[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (11))){
var inst_24372 = cljs.core.async.close_BANG_.call(null,ch);
var state_24381__$1 = state_24381;
var statearr_24392_24412 = state_24381__$1;
(statearr_24392_24412[(2)] = inst_24372);

(statearr_24392_24412[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (9))){
var state_24381__$1 = state_24381;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24393_24413 = state_24381__$1;
(statearr_24393_24413[(1)] = (11));

} else {
var statearr_24394_24414 = state_24381__$1;
(statearr_24394_24414[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (5))){
var inst_24358 = (state_24381[(7)]);
var state_24381__$1 = state_24381;
var statearr_24395_24415 = state_24381__$1;
(statearr_24395_24415[(2)] = inst_24358);

(statearr_24395_24415[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (10))){
var inst_24377 = (state_24381[(2)]);
var state_24381__$1 = state_24381;
var statearr_24396_24416 = state_24381__$1;
(statearr_24396_24416[(2)] = inst_24377);

(statearr_24396_24416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (8))){
var inst_24358 = (state_24381[(7)]);
var inst_24368 = cljs.core.next.call(null,inst_24358);
var inst_24358__$1 = inst_24368;
var state_24381__$1 = (function (){var statearr_24397 = state_24381;
(statearr_24397[(7)] = inst_24358__$1);

return statearr_24397;
})();
var statearr_24398_24417 = state_24381__$1;
(statearr_24398_24417[(2)] = null);

(statearr_24398_24417[(1)] = (2));


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
});})(c__23823__auto__))
;
return ((function (switch__23733__auto__,c__23823__auto__){
return (function() {
var cljs$core$async$state_machine__23734__auto__ = null;
var cljs$core$async$state_machine__23734__auto____0 = (function (){
var statearr_24399 = [null,null,null,null,null,null,null,null];
(statearr_24399[(0)] = cljs$core$async$state_machine__23734__auto__);

(statearr_24399[(1)] = (1));

return statearr_24399;
});
var cljs$core$async$state_machine__23734__auto____1 = (function (state_24381){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_24381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e24400){if((e24400 instanceof Object)){
var ex__23737__auto__ = e24400;
var statearr_24401_24418 = state_24381;
(statearr_24401_24418[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24419 = state_24381;
state_24381 = G__24419;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
cljs$core$async$state_machine__23734__auto__ = function(state_24381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23734__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23734__auto____1.call(this,state_24381);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23734__auto____0;
cljs$core$async$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23734__auto____1;
return cljs$core$async$state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto__))
})();
var state__23825__auto__ = (function (){var statearr_24402 = f__23824__auto__.call(null);
(statearr_24402[(6)] = c__23823__auto__);

return statearr_24402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto__))
);

return c__23823__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24420 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24420 = (function (ch,cs,meta24421){
this.ch = ch;
this.cs = cs;
this.meta24421 = meta24421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24422,meta24421__$1){
var self__ = this;
var _24422__$1 = this;
return (new cljs.core.async.t_cljs$core$async24420(self__.ch,self__.cs,meta24421__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24420.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24422){
var self__ = this;
var _24422__$1 = this;
return self__.meta24421;
});})(cs))
;

cljs.core.async.t_cljs$core$async24420.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24420.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24420.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24420.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24420.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24420.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24420.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24421","meta24421",-557790539,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24420.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24420";

cljs.core.async.t_cljs$core$async24420.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24420");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24420.
 */
cljs.core.async.__GT_t_cljs$core$async24420 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24420(ch__$1,cs__$1,meta24421){
return (new cljs.core.async.t_cljs$core$async24420(ch__$1,cs__$1,meta24421));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24420(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23823__auto___24642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto___24642,cs,m,dchan,dctr,done){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto___24642,cs,m,dchan,dctr,done){
return (function (state_24557){
var state_val_24558 = (state_24557[(1)]);
if((state_val_24558 === (7))){
var inst_24553 = (state_24557[(2)]);
var state_24557__$1 = state_24557;
var statearr_24559_24643 = state_24557__$1;
(statearr_24559_24643[(2)] = inst_24553);

(statearr_24559_24643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (20))){
var inst_24456 = (state_24557[(7)]);
var inst_24468 = cljs.core.first.call(null,inst_24456);
var inst_24469 = cljs.core.nth.call(null,inst_24468,(0),null);
var inst_24470 = cljs.core.nth.call(null,inst_24468,(1),null);
var state_24557__$1 = (function (){var statearr_24560 = state_24557;
(statearr_24560[(8)] = inst_24469);

return statearr_24560;
})();
if(cljs.core.truth_(inst_24470)){
var statearr_24561_24644 = state_24557__$1;
(statearr_24561_24644[(1)] = (22));

} else {
var statearr_24562_24645 = state_24557__$1;
(statearr_24562_24645[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (27))){
var inst_24425 = (state_24557[(9)]);
var inst_24498 = (state_24557[(10)]);
var inst_24500 = (state_24557[(11)]);
var inst_24505 = (state_24557[(12)]);
var inst_24505__$1 = cljs.core._nth.call(null,inst_24498,inst_24500);
var inst_24506 = cljs.core.async.put_BANG_.call(null,inst_24505__$1,inst_24425,done);
var state_24557__$1 = (function (){var statearr_24563 = state_24557;
(statearr_24563[(12)] = inst_24505__$1);

return statearr_24563;
})();
if(cljs.core.truth_(inst_24506)){
var statearr_24564_24646 = state_24557__$1;
(statearr_24564_24646[(1)] = (30));

} else {
var statearr_24565_24647 = state_24557__$1;
(statearr_24565_24647[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (1))){
var state_24557__$1 = state_24557;
var statearr_24566_24648 = state_24557__$1;
(statearr_24566_24648[(2)] = null);

(statearr_24566_24648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (24))){
var inst_24456 = (state_24557[(7)]);
var inst_24475 = (state_24557[(2)]);
var inst_24476 = cljs.core.next.call(null,inst_24456);
var inst_24434 = inst_24476;
var inst_24435 = null;
var inst_24436 = (0);
var inst_24437 = (0);
var state_24557__$1 = (function (){var statearr_24567 = state_24557;
(statearr_24567[(13)] = inst_24475);

(statearr_24567[(14)] = inst_24437);

(statearr_24567[(15)] = inst_24435);

(statearr_24567[(16)] = inst_24436);

(statearr_24567[(17)] = inst_24434);

return statearr_24567;
})();
var statearr_24568_24649 = state_24557__$1;
(statearr_24568_24649[(2)] = null);

(statearr_24568_24649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (39))){
var state_24557__$1 = state_24557;
var statearr_24572_24650 = state_24557__$1;
(statearr_24572_24650[(2)] = null);

(statearr_24572_24650[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (4))){
var inst_24425 = (state_24557[(9)]);
var inst_24425__$1 = (state_24557[(2)]);
var inst_24426 = (inst_24425__$1 == null);
var state_24557__$1 = (function (){var statearr_24573 = state_24557;
(statearr_24573[(9)] = inst_24425__$1);

return statearr_24573;
})();
if(cljs.core.truth_(inst_24426)){
var statearr_24574_24651 = state_24557__$1;
(statearr_24574_24651[(1)] = (5));

} else {
var statearr_24575_24652 = state_24557__$1;
(statearr_24575_24652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (15))){
var inst_24437 = (state_24557[(14)]);
var inst_24435 = (state_24557[(15)]);
var inst_24436 = (state_24557[(16)]);
var inst_24434 = (state_24557[(17)]);
var inst_24452 = (state_24557[(2)]);
var inst_24453 = (inst_24437 + (1));
var tmp24569 = inst_24435;
var tmp24570 = inst_24436;
var tmp24571 = inst_24434;
var inst_24434__$1 = tmp24571;
var inst_24435__$1 = tmp24569;
var inst_24436__$1 = tmp24570;
var inst_24437__$1 = inst_24453;
var state_24557__$1 = (function (){var statearr_24576 = state_24557;
(statearr_24576[(14)] = inst_24437__$1);

(statearr_24576[(15)] = inst_24435__$1);

(statearr_24576[(16)] = inst_24436__$1);

(statearr_24576[(18)] = inst_24452);

(statearr_24576[(17)] = inst_24434__$1);

return statearr_24576;
})();
var statearr_24577_24653 = state_24557__$1;
(statearr_24577_24653[(2)] = null);

(statearr_24577_24653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (21))){
var inst_24479 = (state_24557[(2)]);
var state_24557__$1 = state_24557;
var statearr_24581_24654 = state_24557__$1;
(statearr_24581_24654[(2)] = inst_24479);

(statearr_24581_24654[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (31))){
var inst_24505 = (state_24557[(12)]);
var inst_24509 = done.call(null,null);
var inst_24510 = cljs.core.async.untap_STAR_.call(null,m,inst_24505);
var state_24557__$1 = (function (){var statearr_24582 = state_24557;
(statearr_24582[(19)] = inst_24509);

return statearr_24582;
})();
var statearr_24583_24655 = state_24557__$1;
(statearr_24583_24655[(2)] = inst_24510);

(statearr_24583_24655[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (32))){
var inst_24498 = (state_24557[(10)]);
var inst_24497 = (state_24557[(20)]);
var inst_24500 = (state_24557[(11)]);
var inst_24499 = (state_24557[(21)]);
var inst_24512 = (state_24557[(2)]);
var inst_24513 = (inst_24500 + (1));
var tmp24578 = inst_24498;
var tmp24579 = inst_24497;
var tmp24580 = inst_24499;
var inst_24497__$1 = tmp24579;
var inst_24498__$1 = tmp24578;
var inst_24499__$1 = tmp24580;
var inst_24500__$1 = inst_24513;
var state_24557__$1 = (function (){var statearr_24584 = state_24557;
(statearr_24584[(22)] = inst_24512);

(statearr_24584[(10)] = inst_24498__$1);

(statearr_24584[(20)] = inst_24497__$1);

(statearr_24584[(11)] = inst_24500__$1);

(statearr_24584[(21)] = inst_24499__$1);

return statearr_24584;
})();
var statearr_24585_24656 = state_24557__$1;
(statearr_24585_24656[(2)] = null);

(statearr_24585_24656[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (40))){
var inst_24525 = (state_24557[(23)]);
var inst_24529 = done.call(null,null);
var inst_24530 = cljs.core.async.untap_STAR_.call(null,m,inst_24525);
var state_24557__$1 = (function (){var statearr_24586 = state_24557;
(statearr_24586[(24)] = inst_24529);

return statearr_24586;
})();
var statearr_24587_24657 = state_24557__$1;
(statearr_24587_24657[(2)] = inst_24530);

(statearr_24587_24657[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (33))){
var inst_24516 = (state_24557[(25)]);
var inst_24518 = cljs.core.chunked_seq_QMARK_.call(null,inst_24516);
var state_24557__$1 = state_24557;
if(inst_24518){
var statearr_24588_24658 = state_24557__$1;
(statearr_24588_24658[(1)] = (36));

} else {
var statearr_24589_24659 = state_24557__$1;
(statearr_24589_24659[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (13))){
var inst_24446 = (state_24557[(26)]);
var inst_24449 = cljs.core.async.close_BANG_.call(null,inst_24446);
var state_24557__$1 = state_24557;
var statearr_24590_24660 = state_24557__$1;
(statearr_24590_24660[(2)] = inst_24449);

(statearr_24590_24660[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (22))){
var inst_24469 = (state_24557[(8)]);
var inst_24472 = cljs.core.async.close_BANG_.call(null,inst_24469);
var state_24557__$1 = state_24557;
var statearr_24591_24661 = state_24557__$1;
(statearr_24591_24661[(2)] = inst_24472);

(statearr_24591_24661[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (36))){
var inst_24516 = (state_24557[(25)]);
var inst_24520 = cljs.core.chunk_first.call(null,inst_24516);
var inst_24521 = cljs.core.chunk_rest.call(null,inst_24516);
var inst_24522 = cljs.core.count.call(null,inst_24520);
var inst_24497 = inst_24521;
var inst_24498 = inst_24520;
var inst_24499 = inst_24522;
var inst_24500 = (0);
var state_24557__$1 = (function (){var statearr_24592 = state_24557;
(statearr_24592[(10)] = inst_24498);

(statearr_24592[(20)] = inst_24497);

(statearr_24592[(11)] = inst_24500);

(statearr_24592[(21)] = inst_24499);

return statearr_24592;
})();
var statearr_24593_24662 = state_24557__$1;
(statearr_24593_24662[(2)] = null);

(statearr_24593_24662[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (41))){
var inst_24516 = (state_24557[(25)]);
var inst_24532 = (state_24557[(2)]);
var inst_24533 = cljs.core.next.call(null,inst_24516);
var inst_24497 = inst_24533;
var inst_24498 = null;
var inst_24499 = (0);
var inst_24500 = (0);
var state_24557__$1 = (function (){var statearr_24594 = state_24557;
(statearr_24594[(10)] = inst_24498);

(statearr_24594[(20)] = inst_24497);

(statearr_24594[(11)] = inst_24500);

(statearr_24594[(27)] = inst_24532);

(statearr_24594[(21)] = inst_24499);

return statearr_24594;
})();
var statearr_24595_24663 = state_24557__$1;
(statearr_24595_24663[(2)] = null);

(statearr_24595_24663[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (43))){
var state_24557__$1 = state_24557;
var statearr_24596_24664 = state_24557__$1;
(statearr_24596_24664[(2)] = null);

(statearr_24596_24664[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (29))){
var inst_24541 = (state_24557[(2)]);
var state_24557__$1 = state_24557;
var statearr_24597_24665 = state_24557__$1;
(statearr_24597_24665[(2)] = inst_24541);

(statearr_24597_24665[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (44))){
var inst_24550 = (state_24557[(2)]);
var state_24557__$1 = (function (){var statearr_24598 = state_24557;
(statearr_24598[(28)] = inst_24550);

return statearr_24598;
})();
var statearr_24599_24666 = state_24557__$1;
(statearr_24599_24666[(2)] = null);

(statearr_24599_24666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (6))){
var inst_24489 = (state_24557[(29)]);
var inst_24488 = cljs.core.deref.call(null,cs);
var inst_24489__$1 = cljs.core.keys.call(null,inst_24488);
var inst_24490 = cljs.core.count.call(null,inst_24489__$1);
var inst_24491 = cljs.core.reset_BANG_.call(null,dctr,inst_24490);
var inst_24496 = cljs.core.seq.call(null,inst_24489__$1);
var inst_24497 = inst_24496;
var inst_24498 = null;
var inst_24499 = (0);
var inst_24500 = (0);
var state_24557__$1 = (function (){var statearr_24600 = state_24557;
(statearr_24600[(10)] = inst_24498);

(statearr_24600[(20)] = inst_24497);

(statearr_24600[(30)] = inst_24491);

(statearr_24600[(11)] = inst_24500);

(statearr_24600[(29)] = inst_24489__$1);

(statearr_24600[(21)] = inst_24499);

return statearr_24600;
})();
var statearr_24601_24667 = state_24557__$1;
(statearr_24601_24667[(2)] = null);

(statearr_24601_24667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (28))){
var inst_24516 = (state_24557[(25)]);
var inst_24497 = (state_24557[(20)]);
var inst_24516__$1 = cljs.core.seq.call(null,inst_24497);
var state_24557__$1 = (function (){var statearr_24602 = state_24557;
(statearr_24602[(25)] = inst_24516__$1);

return statearr_24602;
})();
if(inst_24516__$1){
var statearr_24603_24668 = state_24557__$1;
(statearr_24603_24668[(1)] = (33));

} else {
var statearr_24604_24669 = state_24557__$1;
(statearr_24604_24669[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (25))){
var inst_24500 = (state_24557[(11)]);
var inst_24499 = (state_24557[(21)]);
var inst_24502 = (inst_24500 < inst_24499);
var inst_24503 = inst_24502;
var state_24557__$1 = state_24557;
if(cljs.core.truth_(inst_24503)){
var statearr_24605_24670 = state_24557__$1;
(statearr_24605_24670[(1)] = (27));

} else {
var statearr_24606_24671 = state_24557__$1;
(statearr_24606_24671[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (34))){
var state_24557__$1 = state_24557;
var statearr_24607_24672 = state_24557__$1;
(statearr_24607_24672[(2)] = null);

(statearr_24607_24672[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (17))){
var state_24557__$1 = state_24557;
var statearr_24608_24673 = state_24557__$1;
(statearr_24608_24673[(2)] = null);

(statearr_24608_24673[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (3))){
var inst_24555 = (state_24557[(2)]);
var state_24557__$1 = state_24557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24557__$1,inst_24555);
} else {
if((state_val_24558 === (12))){
var inst_24484 = (state_24557[(2)]);
var state_24557__$1 = state_24557;
var statearr_24609_24674 = state_24557__$1;
(statearr_24609_24674[(2)] = inst_24484);

(statearr_24609_24674[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (2))){
var state_24557__$1 = state_24557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24557__$1,(4),ch);
} else {
if((state_val_24558 === (23))){
var state_24557__$1 = state_24557;
var statearr_24610_24675 = state_24557__$1;
(statearr_24610_24675[(2)] = null);

(statearr_24610_24675[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (35))){
var inst_24539 = (state_24557[(2)]);
var state_24557__$1 = state_24557;
var statearr_24611_24676 = state_24557__$1;
(statearr_24611_24676[(2)] = inst_24539);

(statearr_24611_24676[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (19))){
var inst_24456 = (state_24557[(7)]);
var inst_24460 = cljs.core.chunk_first.call(null,inst_24456);
var inst_24461 = cljs.core.chunk_rest.call(null,inst_24456);
var inst_24462 = cljs.core.count.call(null,inst_24460);
var inst_24434 = inst_24461;
var inst_24435 = inst_24460;
var inst_24436 = inst_24462;
var inst_24437 = (0);
var state_24557__$1 = (function (){var statearr_24612 = state_24557;
(statearr_24612[(14)] = inst_24437);

(statearr_24612[(15)] = inst_24435);

(statearr_24612[(16)] = inst_24436);

(statearr_24612[(17)] = inst_24434);

return statearr_24612;
})();
var statearr_24613_24677 = state_24557__$1;
(statearr_24613_24677[(2)] = null);

(statearr_24613_24677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (11))){
var inst_24456 = (state_24557[(7)]);
var inst_24434 = (state_24557[(17)]);
var inst_24456__$1 = cljs.core.seq.call(null,inst_24434);
var state_24557__$1 = (function (){var statearr_24614 = state_24557;
(statearr_24614[(7)] = inst_24456__$1);

return statearr_24614;
})();
if(inst_24456__$1){
var statearr_24615_24678 = state_24557__$1;
(statearr_24615_24678[(1)] = (16));

} else {
var statearr_24616_24679 = state_24557__$1;
(statearr_24616_24679[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (9))){
var inst_24486 = (state_24557[(2)]);
var state_24557__$1 = state_24557;
var statearr_24617_24680 = state_24557__$1;
(statearr_24617_24680[(2)] = inst_24486);

(statearr_24617_24680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (5))){
var inst_24432 = cljs.core.deref.call(null,cs);
var inst_24433 = cljs.core.seq.call(null,inst_24432);
var inst_24434 = inst_24433;
var inst_24435 = null;
var inst_24436 = (0);
var inst_24437 = (0);
var state_24557__$1 = (function (){var statearr_24618 = state_24557;
(statearr_24618[(14)] = inst_24437);

(statearr_24618[(15)] = inst_24435);

(statearr_24618[(16)] = inst_24436);

(statearr_24618[(17)] = inst_24434);

return statearr_24618;
})();
var statearr_24619_24681 = state_24557__$1;
(statearr_24619_24681[(2)] = null);

(statearr_24619_24681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (14))){
var state_24557__$1 = state_24557;
var statearr_24620_24682 = state_24557__$1;
(statearr_24620_24682[(2)] = null);

(statearr_24620_24682[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (45))){
var inst_24547 = (state_24557[(2)]);
var state_24557__$1 = state_24557;
var statearr_24621_24683 = state_24557__$1;
(statearr_24621_24683[(2)] = inst_24547);

(statearr_24621_24683[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (26))){
var inst_24489 = (state_24557[(29)]);
var inst_24543 = (state_24557[(2)]);
var inst_24544 = cljs.core.seq.call(null,inst_24489);
var state_24557__$1 = (function (){var statearr_24622 = state_24557;
(statearr_24622[(31)] = inst_24543);

return statearr_24622;
})();
if(inst_24544){
var statearr_24623_24684 = state_24557__$1;
(statearr_24623_24684[(1)] = (42));

} else {
var statearr_24624_24685 = state_24557__$1;
(statearr_24624_24685[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (16))){
var inst_24456 = (state_24557[(7)]);
var inst_24458 = cljs.core.chunked_seq_QMARK_.call(null,inst_24456);
var state_24557__$1 = state_24557;
if(inst_24458){
var statearr_24625_24686 = state_24557__$1;
(statearr_24625_24686[(1)] = (19));

} else {
var statearr_24626_24687 = state_24557__$1;
(statearr_24626_24687[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (38))){
var inst_24536 = (state_24557[(2)]);
var state_24557__$1 = state_24557;
var statearr_24627_24688 = state_24557__$1;
(statearr_24627_24688[(2)] = inst_24536);

(statearr_24627_24688[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (30))){
var state_24557__$1 = state_24557;
var statearr_24628_24689 = state_24557__$1;
(statearr_24628_24689[(2)] = null);

(statearr_24628_24689[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (10))){
var inst_24437 = (state_24557[(14)]);
var inst_24435 = (state_24557[(15)]);
var inst_24445 = cljs.core._nth.call(null,inst_24435,inst_24437);
var inst_24446 = cljs.core.nth.call(null,inst_24445,(0),null);
var inst_24447 = cljs.core.nth.call(null,inst_24445,(1),null);
var state_24557__$1 = (function (){var statearr_24629 = state_24557;
(statearr_24629[(26)] = inst_24446);

return statearr_24629;
})();
if(cljs.core.truth_(inst_24447)){
var statearr_24630_24690 = state_24557__$1;
(statearr_24630_24690[(1)] = (13));

} else {
var statearr_24631_24691 = state_24557__$1;
(statearr_24631_24691[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (18))){
var inst_24482 = (state_24557[(2)]);
var state_24557__$1 = state_24557;
var statearr_24632_24692 = state_24557__$1;
(statearr_24632_24692[(2)] = inst_24482);

(statearr_24632_24692[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (42))){
var state_24557__$1 = state_24557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24557__$1,(45),dchan);
} else {
if((state_val_24558 === (37))){
var inst_24425 = (state_24557[(9)]);
var inst_24516 = (state_24557[(25)]);
var inst_24525 = (state_24557[(23)]);
var inst_24525__$1 = cljs.core.first.call(null,inst_24516);
var inst_24526 = cljs.core.async.put_BANG_.call(null,inst_24525__$1,inst_24425,done);
var state_24557__$1 = (function (){var statearr_24633 = state_24557;
(statearr_24633[(23)] = inst_24525__$1);

return statearr_24633;
})();
if(cljs.core.truth_(inst_24526)){
var statearr_24634_24693 = state_24557__$1;
(statearr_24634_24693[(1)] = (39));

} else {
var statearr_24635_24694 = state_24557__$1;
(statearr_24635_24694[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24558 === (8))){
var inst_24437 = (state_24557[(14)]);
var inst_24436 = (state_24557[(16)]);
var inst_24439 = (inst_24437 < inst_24436);
var inst_24440 = inst_24439;
var state_24557__$1 = state_24557;
if(cljs.core.truth_(inst_24440)){
var statearr_24636_24695 = state_24557__$1;
(statearr_24636_24695[(1)] = (10));

} else {
var statearr_24637_24696 = state_24557__$1;
(statearr_24637_24696[(1)] = (11));

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
});})(c__23823__auto___24642,cs,m,dchan,dctr,done))
;
return ((function (switch__23733__auto__,c__23823__auto___24642,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23734__auto__ = null;
var cljs$core$async$mult_$_state_machine__23734__auto____0 = (function (){
var statearr_24638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24638[(0)] = cljs$core$async$mult_$_state_machine__23734__auto__);

(statearr_24638[(1)] = (1));

return statearr_24638;
});
var cljs$core$async$mult_$_state_machine__23734__auto____1 = (function (state_24557){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_24557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e24639){if((e24639 instanceof Object)){
var ex__23737__auto__ = e24639;
var statearr_24640_24697 = state_24557;
(statearr_24640_24697[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24698 = state_24557;
state_24557 = G__24698;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23734__auto__ = function(state_24557){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23734__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23734__auto____1.call(this,state_24557);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23734__auto____0;
cljs$core$async$mult_$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23734__auto____1;
return cljs$core$async$mult_$_state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto___24642,cs,m,dchan,dctr,done))
})();
var state__23825__auto__ = (function (){var statearr_24641 = f__23824__auto__.call(null);
(statearr_24641[(6)] = c__23823__auto___24642);

return statearr_24641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto___24642,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24700 = arguments.length;
switch (G__24700) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24712 = arguments.length;
var i__4500__auto___24713 = (0);
while(true){
if((i__4500__auto___24713 < len__4499__auto___24712)){
args__4502__auto__.push((arguments[i__4500__auto___24713]));

var G__24714 = (i__4500__auto___24713 + (1));
i__4500__auto___24713 = G__24714;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24706){
var map__24707 = p__24706;
var map__24707__$1 = ((((!((map__24707 == null)))?(((((map__24707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24707):map__24707);
var opts = map__24707__$1;
var statearr_24709_24715 = state;
(statearr_24709_24715[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__24707,map__24707__$1,opts){
return (function (val){
var statearr_24710_24716 = state;
(statearr_24710_24716[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24707,map__24707__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_24711_24717 = state;
(statearr_24711_24717[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24702){
var G__24703 = cljs.core.first.call(null,seq24702);
var seq24702__$1 = cljs.core.next.call(null,seq24702);
var G__24704 = cljs.core.first.call(null,seq24702__$1);
var seq24702__$2 = cljs.core.next.call(null,seq24702__$1);
var G__24705 = cljs.core.first.call(null,seq24702__$2);
var seq24702__$3 = cljs.core.next.call(null,seq24702__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24703,G__24704,G__24705,seq24702__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24718 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24718 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta24719){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta24719 = meta24719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24720,meta24719__$1){
var self__ = this;
var _24720__$1 = this;
return (new cljs.core.async.t_cljs$core$async24718(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta24719__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24718.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24720){
var self__ = this;
var _24720__$1 = this;
return self__.meta24719;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24718.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24718.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24718.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24718.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24718.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24718.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24718.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24718.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24718.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta24719","meta24719",596691115,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24718.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24718";

cljs.core.async.t_cljs$core$async24718.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24718");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24718.
 */
cljs.core.async.__GT_t_cljs$core$async24718 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24718(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24719){
return (new cljs.core.async.t_cljs$core$async24718(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24719));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24718(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23823__auto___24882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto___24882,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto___24882,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24822){
var state_val_24823 = (state_24822[(1)]);
if((state_val_24823 === (7))){
var inst_24737 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
var statearr_24824_24883 = state_24822__$1;
(statearr_24824_24883[(2)] = inst_24737);

(statearr_24824_24883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (20))){
var inst_24749 = (state_24822[(7)]);
var state_24822__$1 = state_24822;
var statearr_24825_24884 = state_24822__$1;
(statearr_24825_24884[(2)] = inst_24749);

(statearr_24825_24884[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (27))){
var state_24822__$1 = state_24822;
var statearr_24826_24885 = state_24822__$1;
(statearr_24826_24885[(2)] = null);

(statearr_24826_24885[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (1))){
var inst_24724 = (state_24822[(8)]);
var inst_24724__$1 = calc_state.call(null);
var inst_24726 = (inst_24724__$1 == null);
var inst_24727 = cljs.core.not.call(null,inst_24726);
var state_24822__$1 = (function (){var statearr_24827 = state_24822;
(statearr_24827[(8)] = inst_24724__$1);

return statearr_24827;
})();
if(inst_24727){
var statearr_24828_24886 = state_24822__$1;
(statearr_24828_24886[(1)] = (2));

} else {
var statearr_24829_24887 = state_24822__$1;
(statearr_24829_24887[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (24))){
var inst_24782 = (state_24822[(9)]);
var inst_24796 = (state_24822[(10)]);
var inst_24773 = (state_24822[(11)]);
var inst_24796__$1 = inst_24773.call(null,inst_24782);
var state_24822__$1 = (function (){var statearr_24830 = state_24822;
(statearr_24830[(10)] = inst_24796__$1);

return statearr_24830;
})();
if(cljs.core.truth_(inst_24796__$1)){
var statearr_24831_24888 = state_24822__$1;
(statearr_24831_24888[(1)] = (29));

} else {
var statearr_24832_24889 = state_24822__$1;
(statearr_24832_24889[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (4))){
var inst_24740 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
if(cljs.core.truth_(inst_24740)){
var statearr_24833_24890 = state_24822__$1;
(statearr_24833_24890[(1)] = (8));

} else {
var statearr_24834_24891 = state_24822__$1;
(statearr_24834_24891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (15))){
var inst_24767 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
if(cljs.core.truth_(inst_24767)){
var statearr_24835_24892 = state_24822__$1;
(statearr_24835_24892[(1)] = (19));

} else {
var statearr_24836_24893 = state_24822__$1;
(statearr_24836_24893[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (21))){
var inst_24772 = (state_24822[(12)]);
var inst_24772__$1 = (state_24822[(2)]);
var inst_24773 = cljs.core.get.call(null,inst_24772__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24774 = cljs.core.get.call(null,inst_24772__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24775 = cljs.core.get.call(null,inst_24772__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24822__$1 = (function (){var statearr_24837 = state_24822;
(statearr_24837[(13)] = inst_24774);

(statearr_24837[(11)] = inst_24773);

(statearr_24837[(12)] = inst_24772__$1);

return statearr_24837;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24822__$1,(22),inst_24775);
} else {
if((state_val_24823 === (31))){
var inst_24804 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
if(cljs.core.truth_(inst_24804)){
var statearr_24838_24894 = state_24822__$1;
(statearr_24838_24894[(1)] = (32));

} else {
var statearr_24839_24895 = state_24822__$1;
(statearr_24839_24895[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (32))){
var inst_24781 = (state_24822[(14)]);
var state_24822__$1 = state_24822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24822__$1,(35),out,inst_24781);
} else {
if((state_val_24823 === (33))){
var inst_24772 = (state_24822[(12)]);
var inst_24749 = inst_24772;
var state_24822__$1 = (function (){var statearr_24840 = state_24822;
(statearr_24840[(7)] = inst_24749);

return statearr_24840;
})();
var statearr_24841_24896 = state_24822__$1;
(statearr_24841_24896[(2)] = null);

(statearr_24841_24896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (13))){
var inst_24749 = (state_24822[(7)]);
var inst_24756 = inst_24749.cljs$lang$protocol_mask$partition0$;
var inst_24757 = (inst_24756 & (64));
var inst_24758 = inst_24749.cljs$core$ISeq$;
var inst_24759 = (cljs.core.PROTOCOL_SENTINEL === inst_24758);
var inst_24760 = ((inst_24757) || (inst_24759));
var state_24822__$1 = state_24822;
if(cljs.core.truth_(inst_24760)){
var statearr_24842_24897 = state_24822__$1;
(statearr_24842_24897[(1)] = (16));

} else {
var statearr_24843_24898 = state_24822__$1;
(statearr_24843_24898[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (22))){
var inst_24782 = (state_24822[(9)]);
var inst_24781 = (state_24822[(14)]);
var inst_24780 = (state_24822[(2)]);
var inst_24781__$1 = cljs.core.nth.call(null,inst_24780,(0),null);
var inst_24782__$1 = cljs.core.nth.call(null,inst_24780,(1),null);
var inst_24783 = (inst_24781__$1 == null);
var inst_24784 = cljs.core._EQ_.call(null,inst_24782__$1,change);
var inst_24785 = ((inst_24783) || (inst_24784));
var state_24822__$1 = (function (){var statearr_24844 = state_24822;
(statearr_24844[(9)] = inst_24782__$1);

(statearr_24844[(14)] = inst_24781__$1);

return statearr_24844;
})();
if(cljs.core.truth_(inst_24785)){
var statearr_24845_24899 = state_24822__$1;
(statearr_24845_24899[(1)] = (23));

} else {
var statearr_24846_24900 = state_24822__$1;
(statearr_24846_24900[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (36))){
var inst_24772 = (state_24822[(12)]);
var inst_24749 = inst_24772;
var state_24822__$1 = (function (){var statearr_24847 = state_24822;
(statearr_24847[(7)] = inst_24749);

return statearr_24847;
})();
var statearr_24848_24901 = state_24822__$1;
(statearr_24848_24901[(2)] = null);

(statearr_24848_24901[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (29))){
var inst_24796 = (state_24822[(10)]);
var state_24822__$1 = state_24822;
var statearr_24849_24902 = state_24822__$1;
(statearr_24849_24902[(2)] = inst_24796);

(statearr_24849_24902[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (6))){
var state_24822__$1 = state_24822;
var statearr_24850_24903 = state_24822__$1;
(statearr_24850_24903[(2)] = false);

(statearr_24850_24903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (28))){
var inst_24792 = (state_24822[(2)]);
var inst_24793 = calc_state.call(null);
var inst_24749 = inst_24793;
var state_24822__$1 = (function (){var statearr_24851 = state_24822;
(statearr_24851[(15)] = inst_24792);

(statearr_24851[(7)] = inst_24749);

return statearr_24851;
})();
var statearr_24852_24904 = state_24822__$1;
(statearr_24852_24904[(2)] = null);

(statearr_24852_24904[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (25))){
var inst_24818 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
var statearr_24853_24905 = state_24822__$1;
(statearr_24853_24905[(2)] = inst_24818);

(statearr_24853_24905[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (34))){
var inst_24816 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
var statearr_24854_24906 = state_24822__$1;
(statearr_24854_24906[(2)] = inst_24816);

(statearr_24854_24906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (17))){
var state_24822__$1 = state_24822;
var statearr_24855_24907 = state_24822__$1;
(statearr_24855_24907[(2)] = false);

(statearr_24855_24907[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (3))){
var state_24822__$1 = state_24822;
var statearr_24856_24908 = state_24822__$1;
(statearr_24856_24908[(2)] = false);

(statearr_24856_24908[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (12))){
var inst_24820 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24822__$1,inst_24820);
} else {
if((state_val_24823 === (2))){
var inst_24724 = (state_24822[(8)]);
var inst_24729 = inst_24724.cljs$lang$protocol_mask$partition0$;
var inst_24730 = (inst_24729 & (64));
var inst_24731 = inst_24724.cljs$core$ISeq$;
var inst_24732 = (cljs.core.PROTOCOL_SENTINEL === inst_24731);
var inst_24733 = ((inst_24730) || (inst_24732));
var state_24822__$1 = state_24822;
if(cljs.core.truth_(inst_24733)){
var statearr_24857_24909 = state_24822__$1;
(statearr_24857_24909[(1)] = (5));

} else {
var statearr_24858_24910 = state_24822__$1;
(statearr_24858_24910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (23))){
var inst_24781 = (state_24822[(14)]);
var inst_24787 = (inst_24781 == null);
var state_24822__$1 = state_24822;
if(cljs.core.truth_(inst_24787)){
var statearr_24859_24911 = state_24822__$1;
(statearr_24859_24911[(1)] = (26));

} else {
var statearr_24860_24912 = state_24822__$1;
(statearr_24860_24912[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (35))){
var inst_24807 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
if(cljs.core.truth_(inst_24807)){
var statearr_24861_24913 = state_24822__$1;
(statearr_24861_24913[(1)] = (36));

} else {
var statearr_24862_24914 = state_24822__$1;
(statearr_24862_24914[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (19))){
var inst_24749 = (state_24822[(7)]);
var inst_24769 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24749);
var state_24822__$1 = state_24822;
var statearr_24863_24915 = state_24822__$1;
(statearr_24863_24915[(2)] = inst_24769);

(statearr_24863_24915[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (11))){
var inst_24749 = (state_24822[(7)]);
var inst_24753 = (inst_24749 == null);
var inst_24754 = cljs.core.not.call(null,inst_24753);
var state_24822__$1 = state_24822;
if(inst_24754){
var statearr_24864_24916 = state_24822__$1;
(statearr_24864_24916[(1)] = (13));

} else {
var statearr_24865_24917 = state_24822__$1;
(statearr_24865_24917[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (9))){
var inst_24724 = (state_24822[(8)]);
var state_24822__$1 = state_24822;
var statearr_24866_24918 = state_24822__$1;
(statearr_24866_24918[(2)] = inst_24724);

(statearr_24866_24918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (5))){
var state_24822__$1 = state_24822;
var statearr_24867_24919 = state_24822__$1;
(statearr_24867_24919[(2)] = true);

(statearr_24867_24919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (14))){
var state_24822__$1 = state_24822;
var statearr_24868_24920 = state_24822__$1;
(statearr_24868_24920[(2)] = false);

(statearr_24868_24920[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (26))){
var inst_24782 = (state_24822[(9)]);
var inst_24789 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24782);
var state_24822__$1 = state_24822;
var statearr_24869_24921 = state_24822__$1;
(statearr_24869_24921[(2)] = inst_24789);

(statearr_24869_24921[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (16))){
var state_24822__$1 = state_24822;
var statearr_24870_24922 = state_24822__$1;
(statearr_24870_24922[(2)] = true);

(statearr_24870_24922[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (38))){
var inst_24812 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
var statearr_24871_24923 = state_24822__$1;
(statearr_24871_24923[(2)] = inst_24812);

(statearr_24871_24923[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (30))){
var inst_24782 = (state_24822[(9)]);
var inst_24774 = (state_24822[(13)]);
var inst_24773 = (state_24822[(11)]);
var inst_24799 = cljs.core.empty_QMARK_.call(null,inst_24773);
var inst_24800 = inst_24774.call(null,inst_24782);
var inst_24801 = cljs.core.not.call(null,inst_24800);
var inst_24802 = ((inst_24799) && (inst_24801));
var state_24822__$1 = state_24822;
var statearr_24872_24924 = state_24822__$1;
(statearr_24872_24924[(2)] = inst_24802);

(statearr_24872_24924[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (10))){
var inst_24724 = (state_24822[(8)]);
var inst_24745 = (state_24822[(2)]);
var inst_24746 = cljs.core.get.call(null,inst_24745,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24747 = cljs.core.get.call(null,inst_24745,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24748 = cljs.core.get.call(null,inst_24745,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24749 = inst_24724;
var state_24822__$1 = (function (){var statearr_24873 = state_24822;
(statearr_24873[(16)] = inst_24747);

(statearr_24873[(17)] = inst_24746);

(statearr_24873[(18)] = inst_24748);

(statearr_24873[(7)] = inst_24749);

return statearr_24873;
})();
var statearr_24874_24925 = state_24822__$1;
(statearr_24874_24925[(2)] = null);

(statearr_24874_24925[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (18))){
var inst_24764 = (state_24822[(2)]);
var state_24822__$1 = state_24822;
var statearr_24875_24926 = state_24822__$1;
(statearr_24875_24926[(2)] = inst_24764);

(statearr_24875_24926[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (37))){
var state_24822__$1 = state_24822;
var statearr_24876_24927 = state_24822__$1;
(statearr_24876_24927[(2)] = null);

(statearr_24876_24927[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24823 === (8))){
var inst_24724 = (state_24822[(8)]);
var inst_24742 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24724);
var state_24822__$1 = state_24822;
var statearr_24877_24928 = state_24822__$1;
(statearr_24877_24928[(2)] = inst_24742);

(statearr_24877_24928[(1)] = (10));


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
});})(c__23823__auto___24882,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23733__auto__,c__23823__auto___24882,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23734__auto__ = null;
var cljs$core$async$mix_$_state_machine__23734__auto____0 = (function (){
var statearr_24878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24878[(0)] = cljs$core$async$mix_$_state_machine__23734__auto__);

(statearr_24878[(1)] = (1));

return statearr_24878;
});
var cljs$core$async$mix_$_state_machine__23734__auto____1 = (function (state_24822){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_24822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e24879){if((e24879 instanceof Object)){
var ex__23737__auto__ = e24879;
var statearr_24880_24929 = state_24822;
(statearr_24880_24929[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24930 = state_24822;
state_24822 = G__24930;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23734__auto__ = function(state_24822){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23734__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23734__auto____1.call(this,state_24822);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23734__auto____0;
cljs$core$async$mix_$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23734__auto____1;
return cljs$core$async$mix_$_state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto___24882,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23825__auto__ = (function (){var statearr_24881 = f__23824__auto__.call(null);
(statearr_24881[(6)] = c__23823__auto___24882);

return statearr_24881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto___24882,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24932 = arguments.length;
switch (G__24932) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24936 = arguments.length;
switch (G__24936) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__24934_SHARP_){
if(cljs.core.truth_(p1__24934_SHARP_.call(null,topic))){
return p1__24934_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24934_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24937 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24937 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24938){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24938 = meta24938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24939,meta24938__$1){
var self__ = this;
var _24939__$1 = this;
return (new cljs.core.async.t_cljs$core$async24937(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24938__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24939){
var self__ = this;
var _24939__$1 = this;
return self__.meta24938;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24937.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24937.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24937.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24937.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24937.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24937.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24937.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24937.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24938","meta24938",-1458214864,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24937.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24937";

cljs.core.async.t_cljs$core$async24937.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24937");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24937.
 */
cljs.core.async.__GT_t_cljs$core$async24937 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24937(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24938){
return (new cljs.core.async.t_cljs$core$async24937(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24938));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24937(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23823__auto___25057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto___25057,mults,ensure_mult,p){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto___25057,mults,ensure_mult,p){
return (function (state_25011){
var state_val_25012 = (state_25011[(1)]);
if((state_val_25012 === (7))){
var inst_25007 = (state_25011[(2)]);
var state_25011__$1 = state_25011;
var statearr_25013_25058 = state_25011__$1;
(statearr_25013_25058[(2)] = inst_25007);

(statearr_25013_25058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (20))){
var state_25011__$1 = state_25011;
var statearr_25014_25059 = state_25011__$1;
(statearr_25014_25059[(2)] = null);

(statearr_25014_25059[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (1))){
var state_25011__$1 = state_25011;
var statearr_25015_25060 = state_25011__$1;
(statearr_25015_25060[(2)] = null);

(statearr_25015_25060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (24))){
var inst_24990 = (state_25011[(7)]);
var inst_24999 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24990);
var state_25011__$1 = state_25011;
var statearr_25016_25061 = state_25011__$1;
(statearr_25016_25061[(2)] = inst_24999);

(statearr_25016_25061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (4))){
var inst_24942 = (state_25011[(8)]);
var inst_24942__$1 = (state_25011[(2)]);
var inst_24943 = (inst_24942__$1 == null);
var state_25011__$1 = (function (){var statearr_25017 = state_25011;
(statearr_25017[(8)] = inst_24942__$1);

return statearr_25017;
})();
if(cljs.core.truth_(inst_24943)){
var statearr_25018_25062 = state_25011__$1;
(statearr_25018_25062[(1)] = (5));

} else {
var statearr_25019_25063 = state_25011__$1;
(statearr_25019_25063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (15))){
var inst_24984 = (state_25011[(2)]);
var state_25011__$1 = state_25011;
var statearr_25020_25064 = state_25011__$1;
(statearr_25020_25064[(2)] = inst_24984);

(statearr_25020_25064[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (21))){
var inst_25004 = (state_25011[(2)]);
var state_25011__$1 = (function (){var statearr_25021 = state_25011;
(statearr_25021[(9)] = inst_25004);

return statearr_25021;
})();
var statearr_25022_25065 = state_25011__$1;
(statearr_25022_25065[(2)] = null);

(statearr_25022_25065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (13))){
var inst_24966 = (state_25011[(10)]);
var inst_24968 = cljs.core.chunked_seq_QMARK_.call(null,inst_24966);
var state_25011__$1 = state_25011;
if(inst_24968){
var statearr_25023_25066 = state_25011__$1;
(statearr_25023_25066[(1)] = (16));

} else {
var statearr_25024_25067 = state_25011__$1;
(statearr_25024_25067[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (22))){
var inst_24996 = (state_25011[(2)]);
var state_25011__$1 = state_25011;
if(cljs.core.truth_(inst_24996)){
var statearr_25025_25068 = state_25011__$1;
(statearr_25025_25068[(1)] = (23));

} else {
var statearr_25026_25069 = state_25011__$1;
(statearr_25026_25069[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (6))){
var inst_24990 = (state_25011[(7)]);
var inst_24992 = (state_25011[(11)]);
var inst_24942 = (state_25011[(8)]);
var inst_24990__$1 = topic_fn.call(null,inst_24942);
var inst_24991 = cljs.core.deref.call(null,mults);
var inst_24992__$1 = cljs.core.get.call(null,inst_24991,inst_24990__$1);
var state_25011__$1 = (function (){var statearr_25027 = state_25011;
(statearr_25027[(7)] = inst_24990__$1);

(statearr_25027[(11)] = inst_24992__$1);

return statearr_25027;
})();
if(cljs.core.truth_(inst_24992__$1)){
var statearr_25028_25070 = state_25011__$1;
(statearr_25028_25070[(1)] = (19));

} else {
var statearr_25029_25071 = state_25011__$1;
(statearr_25029_25071[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (25))){
var inst_25001 = (state_25011[(2)]);
var state_25011__$1 = state_25011;
var statearr_25030_25072 = state_25011__$1;
(statearr_25030_25072[(2)] = inst_25001);

(statearr_25030_25072[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (17))){
var inst_24966 = (state_25011[(10)]);
var inst_24975 = cljs.core.first.call(null,inst_24966);
var inst_24976 = cljs.core.async.muxch_STAR_.call(null,inst_24975);
var inst_24977 = cljs.core.async.close_BANG_.call(null,inst_24976);
var inst_24978 = cljs.core.next.call(null,inst_24966);
var inst_24952 = inst_24978;
var inst_24953 = null;
var inst_24954 = (0);
var inst_24955 = (0);
var state_25011__$1 = (function (){var statearr_25031 = state_25011;
(statearr_25031[(12)] = inst_24955);

(statearr_25031[(13)] = inst_24977);

(statearr_25031[(14)] = inst_24952);

(statearr_25031[(15)] = inst_24953);

(statearr_25031[(16)] = inst_24954);

return statearr_25031;
})();
var statearr_25032_25073 = state_25011__$1;
(statearr_25032_25073[(2)] = null);

(statearr_25032_25073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (3))){
var inst_25009 = (state_25011[(2)]);
var state_25011__$1 = state_25011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25011__$1,inst_25009);
} else {
if((state_val_25012 === (12))){
var inst_24986 = (state_25011[(2)]);
var state_25011__$1 = state_25011;
var statearr_25033_25074 = state_25011__$1;
(statearr_25033_25074[(2)] = inst_24986);

(statearr_25033_25074[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (2))){
var state_25011__$1 = state_25011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25011__$1,(4),ch);
} else {
if((state_val_25012 === (23))){
var state_25011__$1 = state_25011;
var statearr_25034_25075 = state_25011__$1;
(statearr_25034_25075[(2)] = null);

(statearr_25034_25075[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (19))){
var inst_24992 = (state_25011[(11)]);
var inst_24942 = (state_25011[(8)]);
var inst_24994 = cljs.core.async.muxch_STAR_.call(null,inst_24992);
var state_25011__$1 = state_25011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25011__$1,(22),inst_24994,inst_24942);
} else {
if((state_val_25012 === (11))){
var inst_24966 = (state_25011[(10)]);
var inst_24952 = (state_25011[(14)]);
var inst_24966__$1 = cljs.core.seq.call(null,inst_24952);
var state_25011__$1 = (function (){var statearr_25035 = state_25011;
(statearr_25035[(10)] = inst_24966__$1);

return statearr_25035;
})();
if(inst_24966__$1){
var statearr_25036_25076 = state_25011__$1;
(statearr_25036_25076[(1)] = (13));

} else {
var statearr_25037_25077 = state_25011__$1;
(statearr_25037_25077[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (9))){
var inst_24988 = (state_25011[(2)]);
var state_25011__$1 = state_25011;
var statearr_25038_25078 = state_25011__$1;
(statearr_25038_25078[(2)] = inst_24988);

(statearr_25038_25078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (5))){
var inst_24949 = cljs.core.deref.call(null,mults);
var inst_24950 = cljs.core.vals.call(null,inst_24949);
var inst_24951 = cljs.core.seq.call(null,inst_24950);
var inst_24952 = inst_24951;
var inst_24953 = null;
var inst_24954 = (0);
var inst_24955 = (0);
var state_25011__$1 = (function (){var statearr_25039 = state_25011;
(statearr_25039[(12)] = inst_24955);

(statearr_25039[(14)] = inst_24952);

(statearr_25039[(15)] = inst_24953);

(statearr_25039[(16)] = inst_24954);

return statearr_25039;
})();
var statearr_25040_25079 = state_25011__$1;
(statearr_25040_25079[(2)] = null);

(statearr_25040_25079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (14))){
var state_25011__$1 = state_25011;
var statearr_25044_25080 = state_25011__$1;
(statearr_25044_25080[(2)] = null);

(statearr_25044_25080[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (16))){
var inst_24966 = (state_25011[(10)]);
var inst_24970 = cljs.core.chunk_first.call(null,inst_24966);
var inst_24971 = cljs.core.chunk_rest.call(null,inst_24966);
var inst_24972 = cljs.core.count.call(null,inst_24970);
var inst_24952 = inst_24971;
var inst_24953 = inst_24970;
var inst_24954 = inst_24972;
var inst_24955 = (0);
var state_25011__$1 = (function (){var statearr_25045 = state_25011;
(statearr_25045[(12)] = inst_24955);

(statearr_25045[(14)] = inst_24952);

(statearr_25045[(15)] = inst_24953);

(statearr_25045[(16)] = inst_24954);

return statearr_25045;
})();
var statearr_25046_25081 = state_25011__$1;
(statearr_25046_25081[(2)] = null);

(statearr_25046_25081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (10))){
var inst_24955 = (state_25011[(12)]);
var inst_24952 = (state_25011[(14)]);
var inst_24953 = (state_25011[(15)]);
var inst_24954 = (state_25011[(16)]);
var inst_24960 = cljs.core._nth.call(null,inst_24953,inst_24955);
var inst_24961 = cljs.core.async.muxch_STAR_.call(null,inst_24960);
var inst_24962 = cljs.core.async.close_BANG_.call(null,inst_24961);
var inst_24963 = (inst_24955 + (1));
var tmp25041 = inst_24952;
var tmp25042 = inst_24953;
var tmp25043 = inst_24954;
var inst_24952__$1 = tmp25041;
var inst_24953__$1 = tmp25042;
var inst_24954__$1 = tmp25043;
var inst_24955__$1 = inst_24963;
var state_25011__$1 = (function (){var statearr_25047 = state_25011;
(statearr_25047[(12)] = inst_24955__$1);

(statearr_25047[(17)] = inst_24962);

(statearr_25047[(14)] = inst_24952__$1);

(statearr_25047[(15)] = inst_24953__$1);

(statearr_25047[(16)] = inst_24954__$1);

return statearr_25047;
})();
var statearr_25048_25082 = state_25011__$1;
(statearr_25048_25082[(2)] = null);

(statearr_25048_25082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (18))){
var inst_24981 = (state_25011[(2)]);
var state_25011__$1 = state_25011;
var statearr_25049_25083 = state_25011__$1;
(statearr_25049_25083[(2)] = inst_24981);

(statearr_25049_25083[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (8))){
var inst_24955 = (state_25011[(12)]);
var inst_24954 = (state_25011[(16)]);
var inst_24957 = (inst_24955 < inst_24954);
var inst_24958 = inst_24957;
var state_25011__$1 = state_25011;
if(cljs.core.truth_(inst_24958)){
var statearr_25050_25084 = state_25011__$1;
(statearr_25050_25084[(1)] = (10));

} else {
var statearr_25051_25085 = state_25011__$1;
(statearr_25051_25085[(1)] = (11));

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
});})(c__23823__auto___25057,mults,ensure_mult,p))
;
return ((function (switch__23733__auto__,c__23823__auto___25057,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23734__auto__ = null;
var cljs$core$async$state_machine__23734__auto____0 = (function (){
var statearr_25052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25052[(0)] = cljs$core$async$state_machine__23734__auto__);

(statearr_25052[(1)] = (1));

return statearr_25052;
});
var cljs$core$async$state_machine__23734__auto____1 = (function (state_25011){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_25011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e25053){if((e25053 instanceof Object)){
var ex__23737__auto__ = e25053;
var statearr_25054_25086 = state_25011;
(statearr_25054_25086[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25087 = state_25011;
state_25011 = G__25087;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
cljs$core$async$state_machine__23734__auto__ = function(state_25011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23734__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23734__auto____1.call(this,state_25011);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23734__auto____0;
cljs$core$async$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23734__auto____1;
return cljs$core$async$state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto___25057,mults,ensure_mult,p))
})();
var state__23825__auto__ = (function (){var statearr_25055 = f__23824__auto__.call(null);
(statearr_25055[(6)] = c__23823__auto___25057);

return statearr_25055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto___25057,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25089 = arguments.length;
switch (G__25089) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25092 = arguments.length;
switch (G__25092) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25095 = arguments.length;
switch (G__25095) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23823__auto___25162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto___25162,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto___25162,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25134){
var state_val_25135 = (state_25134[(1)]);
if((state_val_25135 === (7))){
var state_25134__$1 = state_25134;
var statearr_25136_25163 = state_25134__$1;
(statearr_25136_25163[(2)] = null);

(statearr_25136_25163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (1))){
var state_25134__$1 = state_25134;
var statearr_25137_25164 = state_25134__$1;
(statearr_25137_25164[(2)] = null);

(statearr_25137_25164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (4))){
var inst_25098 = (state_25134[(7)]);
var inst_25100 = (inst_25098 < cnt);
var state_25134__$1 = state_25134;
if(cljs.core.truth_(inst_25100)){
var statearr_25138_25165 = state_25134__$1;
(statearr_25138_25165[(1)] = (6));

} else {
var statearr_25139_25166 = state_25134__$1;
(statearr_25139_25166[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (15))){
var inst_25130 = (state_25134[(2)]);
var state_25134__$1 = state_25134;
var statearr_25140_25167 = state_25134__$1;
(statearr_25140_25167[(2)] = inst_25130);

(statearr_25140_25167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (13))){
var inst_25123 = cljs.core.async.close_BANG_.call(null,out);
var state_25134__$1 = state_25134;
var statearr_25141_25168 = state_25134__$1;
(statearr_25141_25168[(2)] = inst_25123);

(statearr_25141_25168[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (6))){
var state_25134__$1 = state_25134;
var statearr_25142_25169 = state_25134__$1;
(statearr_25142_25169[(2)] = null);

(statearr_25142_25169[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (3))){
var inst_25132 = (state_25134[(2)]);
var state_25134__$1 = state_25134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25134__$1,inst_25132);
} else {
if((state_val_25135 === (12))){
var inst_25120 = (state_25134[(8)]);
var inst_25120__$1 = (state_25134[(2)]);
var inst_25121 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25120__$1);
var state_25134__$1 = (function (){var statearr_25143 = state_25134;
(statearr_25143[(8)] = inst_25120__$1);

return statearr_25143;
})();
if(cljs.core.truth_(inst_25121)){
var statearr_25144_25170 = state_25134__$1;
(statearr_25144_25170[(1)] = (13));

} else {
var statearr_25145_25171 = state_25134__$1;
(statearr_25145_25171[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (2))){
var inst_25097 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25098 = (0);
var state_25134__$1 = (function (){var statearr_25146 = state_25134;
(statearr_25146[(9)] = inst_25097);

(statearr_25146[(7)] = inst_25098);

return statearr_25146;
})();
var statearr_25147_25172 = state_25134__$1;
(statearr_25147_25172[(2)] = null);

(statearr_25147_25172[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (11))){
var inst_25098 = (state_25134[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25134,(10),Object,null,(9));
var inst_25107 = chs__$1.call(null,inst_25098);
var inst_25108 = done.call(null,inst_25098);
var inst_25109 = cljs.core.async.take_BANG_.call(null,inst_25107,inst_25108);
var state_25134__$1 = state_25134;
var statearr_25148_25173 = state_25134__$1;
(statearr_25148_25173[(2)] = inst_25109);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25134__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (9))){
var inst_25098 = (state_25134[(7)]);
var inst_25111 = (state_25134[(2)]);
var inst_25112 = (inst_25098 + (1));
var inst_25098__$1 = inst_25112;
var state_25134__$1 = (function (){var statearr_25149 = state_25134;
(statearr_25149[(7)] = inst_25098__$1);

(statearr_25149[(10)] = inst_25111);

return statearr_25149;
})();
var statearr_25150_25174 = state_25134__$1;
(statearr_25150_25174[(2)] = null);

(statearr_25150_25174[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (5))){
var inst_25118 = (state_25134[(2)]);
var state_25134__$1 = (function (){var statearr_25151 = state_25134;
(statearr_25151[(11)] = inst_25118);

return statearr_25151;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25134__$1,(12),dchan);
} else {
if((state_val_25135 === (14))){
var inst_25120 = (state_25134[(8)]);
var inst_25125 = cljs.core.apply.call(null,f,inst_25120);
var state_25134__$1 = state_25134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25134__$1,(16),out,inst_25125);
} else {
if((state_val_25135 === (16))){
var inst_25127 = (state_25134[(2)]);
var state_25134__$1 = (function (){var statearr_25152 = state_25134;
(statearr_25152[(12)] = inst_25127);

return statearr_25152;
})();
var statearr_25153_25175 = state_25134__$1;
(statearr_25153_25175[(2)] = null);

(statearr_25153_25175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (10))){
var inst_25102 = (state_25134[(2)]);
var inst_25103 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25134__$1 = (function (){var statearr_25154 = state_25134;
(statearr_25154[(13)] = inst_25102);

return statearr_25154;
})();
var statearr_25155_25176 = state_25134__$1;
(statearr_25155_25176[(2)] = inst_25103);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25134__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25135 === (8))){
var inst_25116 = (state_25134[(2)]);
var state_25134__$1 = state_25134;
var statearr_25156_25177 = state_25134__$1;
(statearr_25156_25177[(2)] = inst_25116);

(statearr_25156_25177[(1)] = (5));


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
});})(c__23823__auto___25162,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23733__auto__,c__23823__auto___25162,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23734__auto__ = null;
var cljs$core$async$state_machine__23734__auto____0 = (function (){
var statearr_25157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25157[(0)] = cljs$core$async$state_machine__23734__auto__);

(statearr_25157[(1)] = (1));

return statearr_25157;
});
var cljs$core$async$state_machine__23734__auto____1 = (function (state_25134){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_25134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e25158){if((e25158 instanceof Object)){
var ex__23737__auto__ = e25158;
var statearr_25159_25178 = state_25134;
(statearr_25159_25178[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25179 = state_25134;
state_25134 = G__25179;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
cljs$core$async$state_machine__23734__auto__ = function(state_25134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23734__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23734__auto____1.call(this,state_25134);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23734__auto____0;
cljs$core$async$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23734__auto____1;
return cljs$core$async$state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto___25162,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23825__auto__ = (function (){var statearr_25160 = f__23824__auto__.call(null);
(statearr_25160[(6)] = c__23823__auto___25162);

return statearr_25160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto___25162,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25182 = arguments.length;
switch (G__25182) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23823__auto___25236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto___25236,out){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto___25236,out){
return (function (state_25214){
var state_val_25215 = (state_25214[(1)]);
if((state_val_25215 === (7))){
var inst_25194 = (state_25214[(7)]);
var inst_25193 = (state_25214[(8)]);
var inst_25193__$1 = (state_25214[(2)]);
var inst_25194__$1 = cljs.core.nth.call(null,inst_25193__$1,(0),null);
var inst_25195 = cljs.core.nth.call(null,inst_25193__$1,(1),null);
var inst_25196 = (inst_25194__$1 == null);
var state_25214__$1 = (function (){var statearr_25216 = state_25214;
(statearr_25216[(7)] = inst_25194__$1);

(statearr_25216[(9)] = inst_25195);

(statearr_25216[(8)] = inst_25193__$1);

return statearr_25216;
})();
if(cljs.core.truth_(inst_25196)){
var statearr_25217_25237 = state_25214__$1;
(statearr_25217_25237[(1)] = (8));

} else {
var statearr_25218_25238 = state_25214__$1;
(statearr_25218_25238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (1))){
var inst_25183 = cljs.core.vec.call(null,chs);
var inst_25184 = inst_25183;
var state_25214__$1 = (function (){var statearr_25219 = state_25214;
(statearr_25219[(10)] = inst_25184);

return statearr_25219;
})();
var statearr_25220_25239 = state_25214__$1;
(statearr_25220_25239[(2)] = null);

(statearr_25220_25239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (4))){
var inst_25184 = (state_25214[(10)]);
var state_25214__$1 = state_25214;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25214__$1,(7),inst_25184);
} else {
if((state_val_25215 === (6))){
var inst_25210 = (state_25214[(2)]);
var state_25214__$1 = state_25214;
var statearr_25221_25240 = state_25214__$1;
(statearr_25221_25240[(2)] = inst_25210);

(statearr_25221_25240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (3))){
var inst_25212 = (state_25214[(2)]);
var state_25214__$1 = state_25214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25214__$1,inst_25212);
} else {
if((state_val_25215 === (2))){
var inst_25184 = (state_25214[(10)]);
var inst_25186 = cljs.core.count.call(null,inst_25184);
var inst_25187 = (inst_25186 > (0));
var state_25214__$1 = state_25214;
if(cljs.core.truth_(inst_25187)){
var statearr_25223_25241 = state_25214__$1;
(statearr_25223_25241[(1)] = (4));

} else {
var statearr_25224_25242 = state_25214__$1;
(statearr_25224_25242[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (11))){
var inst_25184 = (state_25214[(10)]);
var inst_25203 = (state_25214[(2)]);
var tmp25222 = inst_25184;
var inst_25184__$1 = tmp25222;
var state_25214__$1 = (function (){var statearr_25225 = state_25214;
(statearr_25225[(11)] = inst_25203);

(statearr_25225[(10)] = inst_25184__$1);

return statearr_25225;
})();
var statearr_25226_25243 = state_25214__$1;
(statearr_25226_25243[(2)] = null);

(statearr_25226_25243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (9))){
var inst_25194 = (state_25214[(7)]);
var state_25214__$1 = state_25214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25214__$1,(11),out,inst_25194);
} else {
if((state_val_25215 === (5))){
var inst_25208 = cljs.core.async.close_BANG_.call(null,out);
var state_25214__$1 = state_25214;
var statearr_25227_25244 = state_25214__$1;
(statearr_25227_25244[(2)] = inst_25208);

(statearr_25227_25244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (10))){
var inst_25206 = (state_25214[(2)]);
var state_25214__$1 = state_25214;
var statearr_25228_25245 = state_25214__$1;
(statearr_25228_25245[(2)] = inst_25206);

(statearr_25228_25245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (8))){
var inst_25184 = (state_25214[(10)]);
var inst_25194 = (state_25214[(7)]);
var inst_25195 = (state_25214[(9)]);
var inst_25193 = (state_25214[(8)]);
var inst_25198 = (function (){var cs = inst_25184;
var vec__25189 = inst_25193;
var v = inst_25194;
var c = inst_25195;
return ((function (cs,vec__25189,v,c,inst_25184,inst_25194,inst_25195,inst_25193,state_val_25215,c__23823__auto___25236,out){
return (function (p1__25180_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25180_SHARP_);
});
;})(cs,vec__25189,v,c,inst_25184,inst_25194,inst_25195,inst_25193,state_val_25215,c__23823__auto___25236,out))
})();
var inst_25199 = cljs.core.filterv.call(null,inst_25198,inst_25184);
var inst_25184__$1 = inst_25199;
var state_25214__$1 = (function (){var statearr_25229 = state_25214;
(statearr_25229[(10)] = inst_25184__$1);

return statearr_25229;
})();
var statearr_25230_25246 = state_25214__$1;
(statearr_25230_25246[(2)] = null);

(statearr_25230_25246[(1)] = (2));


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
});})(c__23823__auto___25236,out))
;
return ((function (switch__23733__auto__,c__23823__auto___25236,out){
return (function() {
var cljs$core$async$state_machine__23734__auto__ = null;
var cljs$core$async$state_machine__23734__auto____0 = (function (){
var statearr_25231 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25231[(0)] = cljs$core$async$state_machine__23734__auto__);

(statearr_25231[(1)] = (1));

return statearr_25231;
});
var cljs$core$async$state_machine__23734__auto____1 = (function (state_25214){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_25214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e25232){if((e25232 instanceof Object)){
var ex__23737__auto__ = e25232;
var statearr_25233_25247 = state_25214;
(statearr_25233_25247[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25248 = state_25214;
state_25214 = G__25248;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
cljs$core$async$state_machine__23734__auto__ = function(state_25214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23734__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23734__auto____1.call(this,state_25214);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23734__auto____0;
cljs$core$async$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23734__auto____1;
return cljs$core$async$state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto___25236,out))
})();
var state__23825__auto__ = (function (){var statearr_25234 = f__23824__auto__.call(null);
(statearr_25234[(6)] = c__23823__auto___25236);

return statearr_25234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto___25236,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25250 = arguments.length;
switch (G__25250) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23823__auto___25295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto___25295,out){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto___25295,out){
return (function (state_25274){
var state_val_25275 = (state_25274[(1)]);
if((state_val_25275 === (7))){
var inst_25256 = (state_25274[(7)]);
var inst_25256__$1 = (state_25274[(2)]);
var inst_25257 = (inst_25256__$1 == null);
var inst_25258 = cljs.core.not.call(null,inst_25257);
var state_25274__$1 = (function (){var statearr_25276 = state_25274;
(statearr_25276[(7)] = inst_25256__$1);

return statearr_25276;
})();
if(inst_25258){
var statearr_25277_25296 = state_25274__$1;
(statearr_25277_25296[(1)] = (8));

} else {
var statearr_25278_25297 = state_25274__$1;
(statearr_25278_25297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (1))){
var inst_25251 = (0);
var state_25274__$1 = (function (){var statearr_25279 = state_25274;
(statearr_25279[(8)] = inst_25251);

return statearr_25279;
})();
var statearr_25280_25298 = state_25274__$1;
(statearr_25280_25298[(2)] = null);

(statearr_25280_25298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (4))){
var state_25274__$1 = state_25274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25274__$1,(7),ch);
} else {
if((state_val_25275 === (6))){
var inst_25269 = (state_25274[(2)]);
var state_25274__$1 = state_25274;
var statearr_25281_25299 = state_25274__$1;
(statearr_25281_25299[(2)] = inst_25269);

(statearr_25281_25299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (3))){
var inst_25271 = (state_25274[(2)]);
var inst_25272 = cljs.core.async.close_BANG_.call(null,out);
var state_25274__$1 = (function (){var statearr_25282 = state_25274;
(statearr_25282[(9)] = inst_25271);

return statearr_25282;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25274__$1,inst_25272);
} else {
if((state_val_25275 === (2))){
var inst_25251 = (state_25274[(8)]);
var inst_25253 = (inst_25251 < n);
var state_25274__$1 = state_25274;
if(cljs.core.truth_(inst_25253)){
var statearr_25283_25300 = state_25274__$1;
(statearr_25283_25300[(1)] = (4));

} else {
var statearr_25284_25301 = state_25274__$1;
(statearr_25284_25301[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (11))){
var inst_25251 = (state_25274[(8)]);
var inst_25261 = (state_25274[(2)]);
var inst_25262 = (inst_25251 + (1));
var inst_25251__$1 = inst_25262;
var state_25274__$1 = (function (){var statearr_25285 = state_25274;
(statearr_25285[(10)] = inst_25261);

(statearr_25285[(8)] = inst_25251__$1);

return statearr_25285;
})();
var statearr_25286_25302 = state_25274__$1;
(statearr_25286_25302[(2)] = null);

(statearr_25286_25302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (9))){
var state_25274__$1 = state_25274;
var statearr_25287_25303 = state_25274__$1;
(statearr_25287_25303[(2)] = null);

(statearr_25287_25303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (5))){
var state_25274__$1 = state_25274;
var statearr_25288_25304 = state_25274__$1;
(statearr_25288_25304[(2)] = null);

(statearr_25288_25304[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (10))){
var inst_25266 = (state_25274[(2)]);
var state_25274__$1 = state_25274;
var statearr_25289_25305 = state_25274__$1;
(statearr_25289_25305[(2)] = inst_25266);

(statearr_25289_25305[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (8))){
var inst_25256 = (state_25274[(7)]);
var state_25274__$1 = state_25274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25274__$1,(11),out,inst_25256);
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
});})(c__23823__auto___25295,out))
;
return ((function (switch__23733__auto__,c__23823__auto___25295,out){
return (function() {
var cljs$core$async$state_machine__23734__auto__ = null;
var cljs$core$async$state_machine__23734__auto____0 = (function (){
var statearr_25290 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25290[(0)] = cljs$core$async$state_machine__23734__auto__);

(statearr_25290[(1)] = (1));

return statearr_25290;
});
var cljs$core$async$state_machine__23734__auto____1 = (function (state_25274){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_25274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e25291){if((e25291 instanceof Object)){
var ex__23737__auto__ = e25291;
var statearr_25292_25306 = state_25274;
(statearr_25292_25306[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25307 = state_25274;
state_25274 = G__25307;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
cljs$core$async$state_machine__23734__auto__ = function(state_25274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23734__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23734__auto____1.call(this,state_25274);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23734__auto____0;
cljs$core$async$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23734__auto____1;
return cljs$core$async$state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto___25295,out))
})();
var state__23825__auto__ = (function (){var statearr_25293 = f__23824__auto__.call(null);
(statearr_25293[(6)] = c__23823__auto___25295);

return statearr_25293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto___25295,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25309 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25309 = (function (f,ch,meta25310){
this.f = f;
this.ch = ch;
this.meta25310 = meta25310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25311,meta25310__$1){
var self__ = this;
var _25311__$1 = this;
return (new cljs.core.async.t_cljs$core$async25309(self__.f,self__.ch,meta25310__$1));
});

cljs.core.async.t_cljs$core$async25309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25311){
var self__ = this;
var _25311__$1 = this;
return self__.meta25310;
});

cljs.core.async.t_cljs$core$async25309.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25309.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25309.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25309.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25309.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25312 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25312 = (function (f,ch,meta25310,_,fn1,meta25313){
this.f = f;
this.ch = ch;
this.meta25310 = meta25310;
this._ = _;
this.fn1 = fn1;
this.meta25313 = meta25313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25314,meta25313__$1){
var self__ = this;
var _25314__$1 = this;
return (new cljs.core.async.t_cljs$core$async25312(self__.f,self__.ch,self__.meta25310,self__._,self__.fn1,meta25313__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25312.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25314){
var self__ = this;
var _25314__$1 = this;
return self__.meta25313;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25312.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25312.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25312.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25312.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25308_SHARP_){
return f1.call(null,(((p1__25308_SHARP_ == null))?null:self__.f.call(null,p1__25308_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25312.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25310","meta25310",776606292,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25309","cljs.core.async/t_cljs$core$async25309",-2125762326,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25313","meta25313",-133869429,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25312.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25312";

cljs.core.async.t_cljs$core$async25312.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25312");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25312.
 */
cljs.core.async.__GT_t_cljs$core$async25312 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25312(f__$1,ch__$1,meta25310__$1,___$2,fn1__$1,meta25313){
return (new cljs.core.async.t_cljs$core$async25312(f__$1,ch__$1,meta25310__$1,___$2,fn1__$1,meta25313));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25312(self__.f,self__.ch,self__.meta25310,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25309.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25309.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25309.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25310","meta25310",776606292,null)], null);
});

cljs.core.async.t_cljs$core$async25309.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25309";

cljs.core.async.t_cljs$core$async25309.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25309");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25309.
 */
cljs.core.async.__GT_t_cljs$core$async25309 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25309(f__$1,ch__$1,meta25310){
return (new cljs.core.async.t_cljs$core$async25309(f__$1,ch__$1,meta25310));
});

}

return (new cljs.core.async.t_cljs$core$async25309(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25315 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25315 = (function (f,ch,meta25316){
this.f = f;
this.ch = ch;
this.meta25316 = meta25316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25317,meta25316__$1){
var self__ = this;
var _25317__$1 = this;
return (new cljs.core.async.t_cljs$core$async25315(self__.f,self__.ch,meta25316__$1));
});

cljs.core.async.t_cljs$core$async25315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25317){
var self__ = this;
var _25317__$1 = this;
return self__.meta25316;
});

cljs.core.async.t_cljs$core$async25315.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25315.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25315.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25315.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25315.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25315.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25316","meta25316",-2027142564,null)], null);
});

cljs.core.async.t_cljs$core$async25315.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25315";

cljs.core.async.t_cljs$core$async25315.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25315");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25315.
 */
cljs.core.async.__GT_t_cljs$core$async25315 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25315(f__$1,ch__$1,meta25316){
return (new cljs.core.async.t_cljs$core$async25315(f__$1,ch__$1,meta25316));
});

}

return (new cljs.core.async.t_cljs$core$async25315(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25318 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25318 = (function (p,ch,meta25319){
this.p = p;
this.ch = ch;
this.meta25319 = meta25319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25320,meta25319__$1){
var self__ = this;
var _25320__$1 = this;
return (new cljs.core.async.t_cljs$core$async25318(self__.p,self__.ch,meta25319__$1));
});

cljs.core.async.t_cljs$core$async25318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25320){
var self__ = this;
var _25320__$1 = this;
return self__.meta25319;
});

cljs.core.async.t_cljs$core$async25318.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25318.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25318.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25318.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25318.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25318.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25318.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25319","meta25319",1057523057,null)], null);
});

cljs.core.async.t_cljs$core$async25318.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25318.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25318";

cljs.core.async.t_cljs$core$async25318.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25318");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25318.
 */
cljs.core.async.__GT_t_cljs$core$async25318 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25318(p__$1,ch__$1,meta25319){
return (new cljs.core.async.t_cljs$core$async25318(p__$1,ch__$1,meta25319));
});

}

return (new cljs.core.async.t_cljs$core$async25318(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25322 = arguments.length;
switch (G__25322) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23823__auto___25362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto___25362,out){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto___25362,out){
return (function (state_25343){
var state_val_25344 = (state_25343[(1)]);
if((state_val_25344 === (7))){
var inst_25339 = (state_25343[(2)]);
var state_25343__$1 = state_25343;
var statearr_25345_25363 = state_25343__$1;
(statearr_25345_25363[(2)] = inst_25339);

(statearr_25345_25363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (1))){
var state_25343__$1 = state_25343;
var statearr_25346_25364 = state_25343__$1;
(statearr_25346_25364[(2)] = null);

(statearr_25346_25364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (4))){
var inst_25325 = (state_25343[(7)]);
var inst_25325__$1 = (state_25343[(2)]);
var inst_25326 = (inst_25325__$1 == null);
var state_25343__$1 = (function (){var statearr_25347 = state_25343;
(statearr_25347[(7)] = inst_25325__$1);

return statearr_25347;
})();
if(cljs.core.truth_(inst_25326)){
var statearr_25348_25365 = state_25343__$1;
(statearr_25348_25365[(1)] = (5));

} else {
var statearr_25349_25366 = state_25343__$1;
(statearr_25349_25366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (6))){
var inst_25325 = (state_25343[(7)]);
var inst_25330 = p.call(null,inst_25325);
var state_25343__$1 = state_25343;
if(cljs.core.truth_(inst_25330)){
var statearr_25350_25367 = state_25343__$1;
(statearr_25350_25367[(1)] = (8));

} else {
var statearr_25351_25368 = state_25343__$1;
(statearr_25351_25368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (3))){
var inst_25341 = (state_25343[(2)]);
var state_25343__$1 = state_25343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25343__$1,inst_25341);
} else {
if((state_val_25344 === (2))){
var state_25343__$1 = state_25343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25343__$1,(4),ch);
} else {
if((state_val_25344 === (11))){
var inst_25333 = (state_25343[(2)]);
var state_25343__$1 = state_25343;
var statearr_25352_25369 = state_25343__$1;
(statearr_25352_25369[(2)] = inst_25333);

(statearr_25352_25369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (9))){
var state_25343__$1 = state_25343;
var statearr_25353_25370 = state_25343__$1;
(statearr_25353_25370[(2)] = null);

(statearr_25353_25370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (5))){
var inst_25328 = cljs.core.async.close_BANG_.call(null,out);
var state_25343__$1 = state_25343;
var statearr_25354_25371 = state_25343__$1;
(statearr_25354_25371[(2)] = inst_25328);

(statearr_25354_25371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (10))){
var inst_25336 = (state_25343[(2)]);
var state_25343__$1 = (function (){var statearr_25355 = state_25343;
(statearr_25355[(8)] = inst_25336);

return statearr_25355;
})();
var statearr_25356_25372 = state_25343__$1;
(statearr_25356_25372[(2)] = null);

(statearr_25356_25372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25344 === (8))){
var inst_25325 = (state_25343[(7)]);
var state_25343__$1 = state_25343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25343__$1,(11),out,inst_25325);
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
});})(c__23823__auto___25362,out))
;
return ((function (switch__23733__auto__,c__23823__auto___25362,out){
return (function() {
var cljs$core$async$state_machine__23734__auto__ = null;
var cljs$core$async$state_machine__23734__auto____0 = (function (){
var statearr_25357 = [null,null,null,null,null,null,null,null,null];
(statearr_25357[(0)] = cljs$core$async$state_machine__23734__auto__);

(statearr_25357[(1)] = (1));

return statearr_25357;
});
var cljs$core$async$state_machine__23734__auto____1 = (function (state_25343){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_25343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e25358){if((e25358 instanceof Object)){
var ex__23737__auto__ = e25358;
var statearr_25359_25373 = state_25343;
(statearr_25359_25373[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25374 = state_25343;
state_25343 = G__25374;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
cljs$core$async$state_machine__23734__auto__ = function(state_25343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23734__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23734__auto____1.call(this,state_25343);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23734__auto____0;
cljs$core$async$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23734__auto____1;
return cljs$core$async$state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto___25362,out))
})();
var state__23825__auto__ = (function (){var statearr_25360 = f__23824__auto__.call(null);
(statearr_25360[(6)] = c__23823__auto___25362);

return statearr_25360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto___25362,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25376 = arguments.length;
switch (G__25376) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23823__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto__){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto__){
return (function (state_25439){
var state_val_25440 = (state_25439[(1)]);
if((state_val_25440 === (7))){
var inst_25435 = (state_25439[(2)]);
var state_25439__$1 = state_25439;
var statearr_25441_25479 = state_25439__$1;
(statearr_25441_25479[(2)] = inst_25435);

(statearr_25441_25479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (20))){
var inst_25405 = (state_25439[(7)]);
var inst_25416 = (state_25439[(2)]);
var inst_25417 = cljs.core.next.call(null,inst_25405);
var inst_25391 = inst_25417;
var inst_25392 = null;
var inst_25393 = (0);
var inst_25394 = (0);
var state_25439__$1 = (function (){var statearr_25442 = state_25439;
(statearr_25442[(8)] = inst_25392);

(statearr_25442[(9)] = inst_25394);

(statearr_25442[(10)] = inst_25416);

(statearr_25442[(11)] = inst_25391);

(statearr_25442[(12)] = inst_25393);

return statearr_25442;
})();
var statearr_25443_25480 = state_25439__$1;
(statearr_25443_25480[(2)] = null);

(statearr_25443_25480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (1))){
var state_25439__$1 = state_25439;
var statearr_25444_25481 = state_25439__$1;
(statearr_25444_25481[(2)] = null);

(statearr_25444_25481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (4))){
var inst_25380 = (state_25439[(13)]);
var inst_25380__$1 = (state_25439[(2)]);
var inst_25381 = (inst_25380__$1 == null);
var state_25439__$1 = (function (){var statearr_25445 = state_25439;
(statearr_25445[(13)] = inst_25380__$1);

return statearr_25445;
})();
if(cljs.core.truth_(inst_25381)){
var statearr_25446_25482 = state_25439__$1;
(statearr_25446_25482[(1)] = (5));

} else {
var statearr_25447_25483 = state_25439__$1;
(statearr_25447_25483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (15))){
var state_25439__$1 = state_25439;
var statearr_25451_25484 = state_25439__$1;
(statearr_25451_25484[(2)] = null);

(statearr_25451_25484[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (21))){
var state_25439__$1 = state_25439;
var statearr_25452_25485 = state_25439__$1;
(statearr_25452_25485[(2)] = null);

(statearr_25452_25485[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (13))){
var inst_25392 = (state_25439[(8)]);
var inst_25394 = (state_25439[(9)]);
var inst_25391 = (state_25439[(11)]);
var inst_25393 = (state_25439[(12)]);
var inst_25401 = (state_25439[(2)]);
var inst_25402 = (inst_25394 + (1));
var tmp25448 = inst_25392;
var tmp25449 = inst_25391;
var tmp25450 = inst_25393;
var inst_25391__$1 = tmp25449;
var inst_25392__$1 = tmp25448;
var inst_25393__$1 = tmp25450;
var inst_25394__$1 = inst_25402;
var state_25439__$1 = (function (){var statearr_25453 = state_25439;
(statearr_25453[(8)] = inst_25392__$1);

(statearr_25453[(9)] = inst_25394__$1);

(statearr_25453[(11)] = inst_25391__$1);

(statearr_25453[(12)] = inst_25393__$1);

(statearr_25453[(14)] = inst_25401);

return statearr_25453;
})();
var statearr_25454_25486 = state_25439__$1;
(statearr_25454_25486[(2)] = null);

(statearr_25454_25486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (22))){
var state_25439__$1 = state_25439;
var statearr_25455_25487 = state_25439__$1;
(statearr_25455_25487[(2)] = null);

(statearr_25455_25487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (6))){
var inst_25380 = (state_25439[(13)]);
var inst_25389 = f.call(null,inst_25380);
var inst_25390 = cljs.core.seq.call(null,inst_25389);
var inst_25391 = inst_25390;
var inst_25392 = null;
var inst_25393 = (0);
var inst_25394 = (0);
var state_25439__$1 = (function (){var statearr_25456 = state_25439;
(statearr_25456[(8)] = inst_25392);

(statearr_25456[(9)] = inst_25394);

(statearr_25456[(11)] = inst_25391);

(statearr_25456[(12)] = inst_25393);

return statearr_25456;
})();
var statearr_25457_25488 = state_25439__$1;
(statearr_25457_25488[(2)] = null);

(statearr_25457_25488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (17))){
var inst_25405 = (state_25439[(7)]);
var inst_25409 = cljs.core.chunk_first.call(null,inst_25405);
var inst_25410 = cljs.core.chunk_rest.call(null,inst_25405);
var inst_25411 = cljs.core.count.call(null,inst_25409);
var inst_25391 = inst_25410;
var inst_25392 = inst_25409;
var inst_25393 = inst_25411;
var inst_25394 = (0);
var state_25439__$1 = (function (){var statearr_25458 = state_25439;
(statearr_25458[(8)] = inst_25392);

(statearr_25458[(9)] = inst_25394);

(statearr_25458[(11)] = inst_25391);

(statearr_25458[(12)] = inst_25393);

return statearr_25458;
})();
var statearr_25459_25489 = state_25439__$1;
(statearr_25459_25489[(2)] = null);

(statearr_25459_25489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (3))){
var inst_25437 = (state_25439[(2)]);
var state_25439__$1 = state_25439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25439__$1,inst_25437);
} else {
if((state_val_25440 === (12))){
var inst_25425 = (state_25439[(2)]);
var state_25439__$1 = state_25439;
var statearr_25460_25490 = state_25439__$1;
(statearr_25460_25490[(2)] = inst_25425);

(statearr_25460_25490[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (2))){
var state_25439__$1 = state_25439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25439__$1,(4),in$);
} else {
if((state_val_25440 === (23))){
var inst_25433 = (state_25439[(2)]);
var state_25439__$1 = state_25439;
var statearr_25461_25491 = state_25439__$1;
(statearr_25461_25491[(2)] = inst_25433);

(statearr_25461_25491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (19))){
var inst_25420 = (state_25439[(2)]);
var state_25439__$1 = state_25439;
var statearr_25462_25492 = state_25439__$1;
(statearr_25462_25492[(2)] = inst_25420);

(statearr_25462_25492[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (11))){
var inst_25405 = (state_25439[(7)]);
var inst_25391 = (state_25439[(11)]);
var inst_25405__$1 = cljs.core.seq.call(null,inst_25391);
var state_25439__$1 = (function (){var statearr_25463 = state_25439;
(statearr_25463[(7)] = inst_25405__$1);

return statearr_25463;
})();
if(inst_25405__$1){
var statearr_25464_25493 = state_25439__$1;
(statearr_25464_25493[(1)] = (14));

} else {
var statearr_25465_25494 = state_25439__$1;
(statearr_25465_25494[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (9))){
var inst_25427 = (state_25439[(2)]);
var inst_25428 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25439__$1 = (function (){var statearr_25466 = state_25439;
(statearr_25466[(15)] = inst_25427);

return statearr_25466;
})();
if(cljs.core.truth_(inst_25428)){
var statearr_25467_25495 = state_25439__$1;
(statearr_25467_25495[(1)] = (21));

} else {
var statearr_25468_25496 = state_25439__$1;
(statearr_25468_25496[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (5))){
var inst_25383 = cljs.core.async.close_BANG_.call(null,out);
var state_25439__$1 = state_25439;
var statearr_25469_25497 = state_25439__$1;
(statearr_25469_25497[(2)] = inst_25383);

(statearr_25469_25497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (14))){
var inst_25405 = (state_25439[(7)]);
var inst_25407 = cljs.core.chunked_seq_QMARK_.call(null,inst_25405);
var state_25439__$1 = state_25439;
if(inst_25407){
var statearr_25470_25498 = state_25439__$1;
(statearr_25470_25498[(1)] = (17));

} else {
var statearr_25471_25499 = state_25439__$1;
(statearr_25471_25499[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (16))){
var inst_25423 = (state_25439[(2)]);
var state_25439__$1 = state_25439;
var statearr_25472_25500 = state_25439__$1;
(statearr_25472_25500[(2)] = inst_25423);

(statearr_25472_25500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (10))){
var inst_25392 = (state_25439[(8)]);
var inst_25394 = (state_25439[(9)]);
var inst_25399 = cljs.core._nth.call(null,inst_25392,inst_25394);
var state_25439__$1 = state_25439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25439__$1,(13),out,inst_25399);
} else {
if((state_val_25440 === (18))){
var inst_25405 = (state_25439[(7)]);
var inst_25414 = cljs.core.first.call(null,inst_25405);
var state_25439__$1 = state_25439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25439__$1,(20),out,inst_25414);
} else {
if((state_val_25440 === (8))){
var inst_25394 = (state_25439[(9)]);
var inst_25393 = (state_25439[(12)]);
var inst_25396 = (inst_25394 < inst_25393);
var inst_25397 = inst_25396;
var state_25439__$1 = state_25439;
if(cljs.core.truth_(inst_25397)){
var statearr_25473_25501 = state_25439__$1;
(statearr_25473_25501[(1)] = (10));

} else {
var statearr_25474_25502 = state_25439__$1;
(statearr_25474_25502[(1)] = (11));

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
});})(c__23823__auto__))
;
return ((function (switch__23733__auto__,c__23823__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23734__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23734__auto____0 = (function (){
var statearr_25475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25475[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23734__auto__);

(statearr_25475[(1)] = (1));

return statearr_25475;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23734__auto____1 = (function (state_25439){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_25439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e25476){if((e25476 instanceof Object)){
var ex__23737__auto__ = e25476;
var statearr_25477_25503 = state_25439;
(statearr_25477_25503[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25504 = state_25439;
state_25439 = G__25504;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23734__auto__ = function(state_25439){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23734__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23734__auto____1.call(this,state_25439);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23734__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23734__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto__))
})();
var state__23825__auto__ = (function (){var statearr_25478 = f__23824__auto__.call(null);
(statearr_25478[(6)] = c__23823__auto__);

return statearr_25478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto__))
);

return c__23823__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25506 = arguments.length;
switch (G__25506) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25509 = arguments.length;
switch (G__25509) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25512 = arguments.length;
switch (G__25512) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23823__auto___25559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto___25559,out){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto___25559,out){
return (function (state_25536){
var state_val_25537 = (state_25536[(1)]);
if((state_val_25537 === (7))){
var inst_25531 = (state_25536[(2)]);
var state_25536__$1 = state_25536;
var statearr_25538_25560 = state_25536__$1;
(statearr_25538_25560[(2)] = inst_25531);

(statearr_25538_25560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (1))){
var inst_25513 = null;
var state_25536__$1 = (function (){var statearr_25539 = state_25536;
(statearr_25539[(7)] = inst_25513);

return statearr_25539;
})();
var statearr_25540_25561 = state_25536__$1;
(statearr_25540_25561[(2)] = null);

(statearr_25540_25561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (4))){
var inst_25516 = (state_25536[(8)]);
var inst_25516__$1 = (state_25536[(2)]);
var inst_25517 = (inst_25516__$1 == null);
var inst_25518 = cljs.core.not.call(null,inst_25517);
var state_25536__$1 = (function (){var statearr_25541 = state_25536;
(statearr_25541[(8)] = inst_25516__$1);

return statearr_25541;
})();
if(inst_25518){
var statearr_25542_25562 = state_25536__$1;
(statearr_25542_25562[(1)] = (5));

} else {
var statearr_25543_25563 = state_25536__$1;
(statearr_25543_25563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (6))){
var state_25536__$1 = state_25536;
var statearr_25544_25564 = state_25536__$1;
(statearr_25544_25564[(2)] = null);

(statearr_25544_25564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (3))){
var inst_25533 = (state_25536[(2)]);
var inst_25534 = cljs.core.async.close_BANG_.call(null,out);
var state_25536__$1 = (function (){var statearr_25545 = state_25536;
(statearr_25545[(9)] = inst_25533);

return statearr_25545;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25536__$1,inst_25534);
} else {
if((state_val_25537 === (2))){
var state_25536__$1 = state_25536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25536__$1,(4),ch);
} else {
if((state_val_25537 === (11))){
var inst_25516 = (state_25536[(8)]);
var inst_25525 = (state_25536[(2)]);
var inst_25513 = inst_25516;
var state_25536__$1 = (function (){var statearr_25546 = state_25536;
(statearr_25546[(7)] = inst_25513);

(statearr_25546[(10)] = inst_25525);

return statearr_25546;
})();
var statearr_25547_25565 = state_25536__$1;
(statearr_25547_25565[(2)] = null);

(statearr_25547_25565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (9))){
var inst_25516 = (state_25536[(8)]);
var state_25536__$1 = state_25536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25536__$1,(11),out,inst_25516);
} else {
if((state_val_25537 === (5))){
var inst_25516 = (state_25536[(8)]);
var inst_25513 = (state_25536[(7)]);
var inst_25520 = cljs.core._EQ_.call(null,inst_25516,inst_25513);
var state_25536__$1 = state_25536;
if(inst_25520){
var statearr_25549_25566 = state_25536__$1;
(statearr_25549_25566[(1)] = (8));

} else {
var statearr_25550_25567 = state_25536__$1;
(statearr_25550_25567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (10))){
var inst_25528 = (state_25536[(2)]);
var state_25536__$1 = state_25536;
var statearr_25551_25568 = state_25536__$1;
(statearr_25551_25568[(2)] = inst_25528);

(statearr_25551_25568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (8))){
var inst_25513 = (state_25536[(7)]);
var tmp25548 = inst_25513;
var inst_25513__$1 = tmp25548;
var state_25536__$1 = (function (){var statearr_25552 = state_25536;
(statearr_25552[(7)] = inst_25513__$1);

return statearr_25552;
})();
var statearr_25553_25569 = state_25536__$1;
(statearr_25553_25569[(2)] = null);

(statearr_25553_25569[(1)] = (2));


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
});})(c__23823__auto___25559,out))
;
return ((function (switch__23733__auto__,c__23823__auto___25559,out){
return (function() {
var cljs$core$async$state_machine__23734__auto__ = null;
var cljs$core$async$state_machine__23734__auto____0 = (function (){
var statearr_25554 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25554[(0)] = cljs$core$async$state_machine__23734__auto__);

(statearr_25554[(1)] = (1));

return statearr_25554;
});
var cljs$core$async$state_machine__23734__auto____1 = (function (state_25536){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_25536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e25555){if((e25555 instanceof Object)){
var ex__23737__auto__ = e25555;
var statearr_25556_25570 = state_25536;
(statearr_25556_25570[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25571 = state_25536;
state_25536 = G__25571;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
cljs$core$async$state_machine__23734__auto__ = function(state_25536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23734__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23734__auto____1.call(this,state_25536);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23734__auto____0;
cljs$core$async$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23734__auto____1;
return cljs$core$async$state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto___25559,out))
})();
var state__23825__auto__ = (function (){var statearr_25557 = f__23824__auto__.call(null);
(statearr_25557[(6)] = c__23823__auto___25559);

return statearr_25557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto___25559,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25573 = arguments.length;
switch (G__25573) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23823__auto___25639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto___25639,out){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto___25639,out){
return (function (state_25611){
var state_val_25612 = (state_25611[(1)]);
if((state_val_25612 === (7))){
var inst_25607 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
var statearr_25613_25640 = state_25611__$1;
(statearr_25613_25640[(2)] = inst_25607);

(statearr_25613_25640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (1))){
var inst_25574 = (new Array(n));
var inst_25575 = inst_25574;
var inst_25576 = (0);
var state_25611__$1 = (function (){var statearr_25614 = state_25611;
(statearr_25614[(7)] = inst_25575);

(statearr_25614[(8)] = inst_25576);

return statearr_25614;
})();
var statearr_25615_25641 = state_25611__$1;
(statearr_25615_25641[(2)] = null);

(statearr_25615_25641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (4))){
var inst_25579 = (state_25611[(9)]);
var inst_25579__$1 = (state_25611[(2)]);
var inst_25580 = (inst_25579__$1 == null);
var inst_25581 = cljs.core.not.call(null,inst_25580);
var state_25611__$1 = (function (){var statearr_25616 = state_25611;
(statearr_25616[(9)] = inst_25579__$1);

return statearr_25616;
})();
if(inst_25581){
var statearr_25617_25642 = state_25611__$1;
(statearr_25617_25642[(1)] = (5));

} else {
var statearr_25618_25643 = state_25611__$1;
(statearr_25618_25643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (15))){
var inst_25601 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
var statearr_25619_25644 = state_25611__$1;
(statearr_25619_25644[(2)] = inst_25601);

(statearr_25619_25644[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (13))){
var state_25611__$1 = state_25611;
var statearr_25620_25645 = state_25611__$1;
(statearr_25620_25645[(2)] = null);

(statearr_25620_25645[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (6))){
var inst_25576 = (state_25611[(8)]);
var inst_25597 = (inst_25576 > (0));
var state_25611__$1 = state_25611;
if(cljs.core.truth_(inst_25597)){
var statearr_25621_25646 = state_25611__$1;
(statearr_25621_25646[(1)] = (12));

} else {
var statearr_25622_25647 = state_25611__$1;
(statearr_25622_25647[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (3))){
var inst_25609 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25611__$1,inst_25609);
} else {
if((state_val_25612 === (12))){
var inst_25575 = (state_25611[(7)]);
var inst_25599 = cljs.core.vec.call(null,inst_25575);
var state_25611__$1 = state_25611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25611__$1,(15),out,inst_25599);
} else {
if((state_val_25612 === (2))){
var state_25611__$1 = state_25611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25611__$1,(4),ch);
} else {
if((state_val_25612 === (11))){
var inst_25591 = (state_25611[(2)]);
var inst_25592 = (new Array(n));
var inst_25575 = inst_25592;
var inst_25576 = (0);
var state_25611__$1 = (function (){var statearr_25623 = state_25611;
(statearr_25623[(10)] = inst_25591);

(statearr_25623[(7)] = inst_25575);

(statearr_25623[(8)] = inst_25576);

return statearr_25623;
})();
var statearr_25624_25648 = state_25611__$1;
(statearr_25624_25648[(2)] = null);

(statearr_25624_25648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (9))){
var inst_25575 = (state_25611[(7)]);
var inst_25589 = cljs.core.vec.call(null,inst_25575);
var state_25611__$1 = state_25611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25611__$1,(11),out,inst_25589);
} else {
if((state_val_25612 === (5))){
var inst_25584 = (state_25611[(11)]);
var inst_25575 = (state_25611[(7)]);
var inst_25579 = (state_25611[(9)]);
var inst_25576 = (state_25611[(8)]);
var inst_25583 = (inst_25575[inst_25576] = inst_25579);
var inst_25584__$1 = (inst_25576 + (1));
var inst_25585 = (inst_25584__$1 < n);
var state_25611__$1 = (function (){var statearr_25625 = state_25611;
(statearr_25625[(11)] = inst_25584__$1);

(statearr_25625[(12)] = inst_25583);

return statearr_25625;
})();
if(cljs.core.truth_(inst_25585)){
var statearr_25626_25649 = state_25611__$1;
(statearr_25626_25649[(1)] = (8));

} else {
var statearr_25627_25650 = state_25611__$1;
(statearr_25627_25650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (14))){
var inst_25604 = (state_25611[(2)]);
var inst_25605 = cljs.core.async.close_BANG_.call(null,out);
var state_25611__$1 = (function (){var statearr_25629 = state_25611;
(statearr_25629[(13)] = inst_25604);

return statearr_25629;
})();
var statearr_25630_25651 = state_25611__$1;
(statearr_25630_25651[(2)] = inst_25605);

(statearr_25630_25651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (10))){
var inst_25595 = (state_25611[(2)]);
var state_25611__$1 = state_25611;
var statearr_25631_25652 = state_25611__$1;
(statearr_25631_25652[(2)] = inst_25595);

(statearr_25631_25652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25612 === (8))){
var inst_25584 = (state_25611[(11)]);
var inst_25575 = (state_25611[(7)]);
var tmp25628 = inst_25575;
var inst_25575__$1 = tmp25628;
var inst_25576 = inst_25584;
var state_25611__$1 = (function (){var statearr_25632 = state_25611;
(statearr_25632[(7)] = inst_25575__$1);

(statearr_25632[(8)] = inst_25576);

return statearr_25632;
})();
var statearr_25633_25653 = state_25611__$1;
(statearr_25633_25653[(2)] = null);

(statearr_25633_25653[(1)] = (2));


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
});})(c__23823__auto___25639,out))
;
return ((function (switch__23733__auto__,c__23823__auto___25639,out){
return (function() {
var cljs$core$async$state_machine__23734__auto__ = null;
var cljs$core$async$state_machine__23734__auto____0 = (function (){
var statearr_25634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25634[(0)] = cljs$core$async$state_machine__23734__auto__);

(statearr_25634[(1)] = (1));

return statearr_25634;
});
var cljs$core$async$state_machine__23734__auto____1 = (function (state_25611){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_25611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e25635){if((e25635 instanceof Object)){
var ex__23737__auto__ = e25635;
var statearr_25636_25654 = state_25611;
(statearr_25636_25654[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25655 = state_25611;
state_25611 = G__25655;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
cljs$core$async$state_machine__23734__auto__ = function(state_25611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23734__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23734__auto____1.call(this,state_25611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23734__auto____0;
cljs$core$async$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23734__auto____1;
return cljs$core$async$state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto___25639,out))
})();
var state__23825__auto__ = (function (){var statearr_25637 = f__23824__auto__.call(null);
(statearr_25637[(6)] = c__23823__auto___25639);

return statearr_25637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto___25639,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25657 = arguments.length;
switch (G__25657) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23823__auto___25727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23823__auto___25727,out){
return (function (){
var f__23824__auto__ = (function (){var switch__23733__auto__ = ((function (c__23823__auto___25727,out){
return (function (state_25699){
var state_val_25700 = (state_25699[(1)]);
if((state_val_25700 === (7))){
var inst_25695 = (state_25699[(2)]);
var state_25699__$1 = state_25699;
var statearr_25701_25728 = state_25699__$1;
(statearr_25701_25728[(2)] = inst_25695);

(statearr_25701_25728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25700 === (1))){
var inst_25658 = [];
var inst_25659 = inst_25658;
var inst_25660 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25699__$1 = (function (){var statearr_25702 = state_25699;
(statearr_25702[(7)] = inst_25660);

(statearr_25702[(8)] = inst_25659);

return statearr_25702;
})();
var statearr_25703_25729 = state_25699__$1;
(statearr_25703_25729[(2)] = null);

(statearr_25703_25729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25700 === (4))){
var inst_25663 = (state_25699[(9)]);
var inst_25663__$1 = (state_25699[(2)]);
var inst_25664 = (inst_25663__$1 == null);
var inst_25665 = cljs.core.not.call(null,inst_25664);
var state_25699__$1 = (function (){var statearr_25704 = state_25699;
(statearr_25704[(9)] = inst_25663__$1);

return statearr_25704;
})();
if(inst_25665){
var statearr_25705_25730 = state_25699__$1;
(statearr_25705_25730[(1)] = (5));

} else {
var statearr_25706_25731 = state_25699__$1;
(statearr_25706_25731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25700 === (15))){
var inst_25689 = (state_25699[(2)]);
var state_25699__$1 = state_25699;
var statearr_25707_25732 = state_25699__$1;
(statearr_25707_25732[(2)] = inst_25689);

(statearr_25707_25732[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25700 === (13))){
var state_25699__$1 = state_25699;
var statearr_25708_25733 = state_25699__$1;
(statearr_25708_25733[(2)] = null);

(statearr_25708_25733[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25700 === (6))){
var inst_25659 = (state_25699[(8)]);
var inst_25684 = inst_25659.length;
var inst_25685 = (inst_25684 > (0));
var state_25699__$1 = state_25699;
if(cljs.core.truth_(inst_25685)){
var statearr_25709_25734 = state_25699__$1;
(statearr_25709_25734[(1)] = (12));

} else {
var statearr_25710_25735 = state_25699__$1;
(statearr_25710_25735[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25700 === (3))){
var inst_25697 = (state_25699[(2)]);
var state_25699__$1 = state_25699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25699__$1,inst_25697);
} else {
if((state_val_25700 === (12))){
var inst_25659 = (state_25699[(8)]);
var inst_25687 = cljs.core.vec.call(null,inst_25659);
var state_25699__$1 = state_25699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25699__$1,(15),out,inst_25687);
} else {
if((state_val_25700 === (2))){
var state_25699__$1 = state_25699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25699__$1,(4),ch);
} else {
if((state_val_25700 === (11))){
var inst_25663 = (state_25699[(9)]);
var inst_25667 = (state_25699[(10)]);
var inst_25677 = (state_25699[(2)]);
var inst_25678 = [];
var inst_25679 = inst_25678.push(inst_25663);
var inst_25659 = inst_25678;
var inst_25660 = inst_25667;
var state_25699__$1 = (function (){var statearr_25711 = state_25699;
(statearr_25711[(11)] = inst_25677);

(statearr_25711[(12)] = inst_25679);

(statearr_25711[(7)] = inst_25660);

(statearr_25711[(8)] = inst_25659);

return statearr_25711;
})();
var statearr_25712_25736 = state_25699__$1;
(statearr_25712_25736[(2)] = null);

(statearr_25712_25736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25700 === (9))){
var inst_25659 = (state_25699[(8)]);
var inst_25675 = cljs.core.vec.call(null,inst_25659);
var state_25699__$1 = state_25699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25699__$1,(11),out,inst_25675);
} else {
if((state_val_25700 === (5))){
var inst_25663 = (state_25699[(9)]);
var inst_25667 = (state_25699[(10)]);
var inst_25660 = (state_25699[(7)]);
var inst_25667__$1 = f.call(null,inst_25663);
var inst_25668 = cljs.core._EQ_.call(null,inst_25667__$1,inst_25660);
var inst_25669 = cljs.core.keyword_identical_QMARK_.call(null,inst_25660,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25670 = ((inst_25668) || (inst_25669));
var state_25699__$1 = (function (){var statearr_25713 = state_25699;
(statearr_25713[(10)] = inst_25667__$1);

return statearr_25713;
})();
if(cljs.core.truth_(inst_25670)){
var statearr_25714_25737 = state_25699__$1;
(statearr_25714_25737[(1)] = (8));

} else {
var statearr_25715_25738 = state_25699__$1;
(statearr_25715_25738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25700 === (14))){
var inst_25692 = (state_25699[(2)]);
var inst_25693 = cljs.core.async.close_BANG_.call(null,out);
var state_25699__$1 = (function (){var statearr_25717 = state_25699;
(statearr_25717[(13)] = inst_25692);

return statearr_25717;
})();
var statearr_25718_25739 = state_25699__$1;
(statearr_25718_25739[(2)] = inst_25693);

(statearr_25718_25739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25700 === (10))){
var inst_25682 = (state_25699[(2)]);
var state_25699__$1 = state_25699;
var statearr_25719_25740 = state_25699__$1;
(statearr_25719_25740[(2)] = inst_25682);

(statearr_25719_25740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25700 === (8))){
var inst_25663 = (state_25699[(9)]);
var inst_25667 = (state_25699[(10)]);
var inst_25659 = (state_25699[(8)]);
var inst_25672 = inst_25659.push(inst_25663);
var tmp25716 = inst_25659;
var inst_25659__$1 = tmp25716;
var inst_25660 = inst_25667;
var state_25699__$1 = (function (){var statearr_25720 = state_25699;
(statearr_25720[(7)] = inst_25660);

(statearr_25720[(8)] = inst_25659__$1);

(statearr_25720[(14)] = inst_25672);

return statearr_25720;
})();
var statearr_25721_25741 = state_25699__$1;
(statearr_25721_25741[(2)] = null);

(statearr_25721_25741[(1)] = (2));


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
});})(c__23823__auto___25727,out))
;
return ((function (switch__23733__auto__,c__23823__auto___25727,out){
return (function() {
var cljs$core$async$state_machine__23734__auto__ = null;
var cljs$core$async$state_machine__23734__auto____0 = (function (){
var statearr_25722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25722[(0)] = cljs$core$async$state_machine__23734__auto__);

(statearr_25722[(1)] = (1));

return statearr_25722;
});
var cljs$core$async$state_machine__23734__auto____1 = (function (state_25699){
while(true){
var ret_value__23735__auto__ = (function (){try{while(true){
var result__23736__auto__ = switch__23733__auto__.call(null,state_25699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23736__auto__;
}
break;
}
}catch (e25723){if((e25723 instanceof Object)){
var ex__23737__auto__ = e25723;
var statearr_25724_25742 = state_25699;
(statearr_25724_25742[(5)] = ex__23737__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25743 = state_25699;
state_25699 = G__25743;
continue;
} else {
return ret_value__23735__auto__;
}
break;
}
});
cljs$core$async$state_machine__23734__auto__ = function(state_25699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23734__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23734__auto____1.call(this,state_25699);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23734__auto____0;
cljs$core$async$state_machine__23734__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23734__auto____1;
return cljs$core$async$state_machine__23734__auto__;
})()
;})(switch__23733__auto__,c__23823__auto___25727,out))
})();
var state__23825__auto__ = (function (){var statearr_25725 = f__23824__auto__.call(null);
(statearr_25725[(6)] = c__23823__auto___25727);

return statearr_25725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23825__auto__);
});})(c__23823__auto___25727,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1528479346971
