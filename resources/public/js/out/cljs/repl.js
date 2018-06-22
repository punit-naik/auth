// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28739){
var map__28740 = p__28739;
var map__28740__$1 = ((((!((map__28740 == null)))?(((((map__28740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28740):map__28740);
var m = map__28740__$1;
var n = cljs.core.get.call(null,map__28740__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28740__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28742_28764 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28743_28765 = null;
var count__28744_28766 = (0);
var i__28745_28767 = (0);
while(true){
if((i__28745_28767 < count__28744_28766)){
var f_28768 = cljs.core._nth.call(null,chunk__28743_28765,i__28745_28767);
cljs.core.println.call(null,"  ",f_28768);


var G__28769 = seq__28742_28764;
var G__28770 = chunk__28743_28765;
var G__28771 = count__28744_28766;
var G__28772 = (i__28745_28767 + (1));
seq__28742_28764 = G__28769;
chunk__28743_28765 = G__28770;
count__28744_28766 = G__28771;
i__28745_28767 = G__28772;
continue;
} else {
var temp__5457__auto___28773 = cljs.core.seq.call(null,seq__28742_28764);
if(temp__5457__auto___28773){
var seq__28742_28774__$1 = temp__5457__auto___28773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28742_28774__$1)){
var c__4319__auto___28775 = cljs.core.chunk_first.call(null,seq__28742_28774__$1);
var G__28776 = cljs.core.chunk_rest.call(null,seq__28742_28774__$1);
var G__28777 = c__4319__auto___28775;
var G__28778 = cljs.core.count.call(null,c__4319__auto___28775);
var G__28779 = (0);
seq__28742_28764 = G__28776;
chunk__28743_28765 = G__28777;
count__28744_28766 = G__28778;
i__28745_28767 = G__28779;
continue;
} else {
var f_28780 = cljs.core.first.call(null,seq__28742_28774__$1);
cljs.core.println.call(null,"  ",f_28780);


var G__28781 = cljs.core.next.call(null,seq__28742_28774__$1);
var G__28782 = null;
var G__28783 = (0);
var G__28784 = (0);
seq__28742_28764 = G__28781;
chunk__28743_28765 = G__28782;
count__28744_28766 = G__28783;
i__28745_28767 = G__28784;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28785 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28785);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28785)))?cljs.core.second.call(null,arglists_28785):arglists_28785));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28746_28786 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28747_28787 = null;
var count__28748_28788 = (0);
var i__28749_28789 = (0);
while(true){
if((i__28749_28789 < count__28748_28788)){
var vec__28750_28790 = cljs.core._nth.call(null,chunk__28747_28787,i__28749_28789);
var name_28791 = cljs.core.nth.call(null,vec__28750_28790,(0),null);
var map__28753_28792 = cljs.core.nth.call(null,vec__28750_28790,(1),null);
var map__28753_28793__$1 = ((((!((map__28753_28792 == null)))?(((((map__28753_28792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28753_28792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28753_28792):map__28753_28792);
var doc_28794 = cljs.core.get.call(null,map__28753_28793__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28795 = cljs.core.get.call(null,map__28753_28793__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28791);

cljs.core.println.call(null," ",arglists_28795);

if(cljs.core.truth_(doc_28794)){
cljs.core.println.call(null," ",doc_28794);
} else {
}


var G__28796 = seq__28746_28786;
var G__28797 = chunk__28747_28787;
var G__28798 = count__28748_28788;
var G__28799 = (i__28749_28789 + (1));
seq__28746_28786 = G__28796;
chunk__28747_28787 = G__28797;
count__28748_28788 = G__28798;
i__28749_28789 = G__28799;
continue;
} else {
var temp__5457__auto___28800 = cljs.core.seq.call(null,seq__28746_28786);
if(temp__5457__auto___28800){
var seq__28746_28801__$1 = temp__5457__auto___28800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28746_28801__$1)){
var c__4319__auto___28802 = cljs.core.chunk_first.call(null,seq__28746_28801__$1);
var G__28803 = cljs.core.chunk_rest.call(null,seq__28746_28801__$1);
var G__28804 = c__4319__auto___28802;
var G__28805 = cljs.core.count.call(null,c__4319__auto___28802);
var G__28806 = (0);
seq__28746_28786 = G__28803;
chunk__28747_28787 = G__28804;
count__28748_28788 = G__28805;
i__28749_28789 = G__28806;
continue;
} else {
var vec__28755_28807 = cljs.core.first.call(null,seq__28746_28801__$1);
var name_28808 = cljs.core.nth.call(null,vec__28755_28807,(0),null);
var map__28758_28809 = cljs.core.nth.call(null,vec__28755_28807,(1),null);
var map__28758_28810__$1 = ((((!((map__28758_28809 == null)))?(((((map__28758_28809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28758_28809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28758_28809):map__28758_28809);
var doc_28811 = cljs.core.get.call(null,map__28758_28810__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28812 = cljs.core.get.call(null,map__28758_28810__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28808);

cljs.core.println.call(null," ",arglists_28812);

if(cljs.core.truth_(doc_28811)){
cljs.core.println.call(null," ",doc_28811);
} else {
}


var G__28813 = cljs.core.next.call(null,seq__28746_28801__$1);
var G__28814 = null;
var G__28815 = (0);
var G__28816 = (0);
seq__28746_28786 = G__28813;
chunk__28747_28787 = G__28814;
count__28748_28788 = G__28815;
i__28749_28789 = G__28816;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__28760 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28761 = null;
var count__28762 = (0);
var i__28763 = (0);
while(true){
if((i__28763 < count__28762)){
var role = cljs.core._nth.call(null,chunk__28761,i__28763);
var temp__5457__auto___28817__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28817__$1)){
var spec_28818 = temp__5457__auto___28817__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28818));
} else {
}


var G__28819 = seq__28760;
var G__28820 = chunk__28761;
var G__28821 = count__28762;
var G__28822 = (i__28763 + (1));
seq__28760 = G__28819;
chunk__28761 = G__28820;
count__28762 = G__28821;
i__28763 = G__28822;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__28760);
if(temp__5457__auto____$1){
var seq__28760__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28760__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28760__$1);
var G__28823 = cljs.core.chunk_rest.call(null,seq__28760__$1);
var G__28824 = c__4319__auto__;
var G__28825 = cljs.core.count.call(null,c__4319__auto__);
var G__28826 = (0);
seq__28760 = G__28823;
chunk__28761 = G__28824;
count__28762 = G__28825;
i__28763 = G__28826;
continue;
} else {
var role = cljs.core.first.call(null,seq__28760__$1);
var temp__5457__auto___28827__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28827__$2)){
var spec_28828 = temp__5457__auto___28827__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28828));
} else {
}


var G__28829 = cljs.core.next.call(null,seq__28760__$1);
var G__28830 = null;
var G__28831 = (0);
var G__28832 = (0);
seq__28760 = G__28829;
chunk__28761 = G__28830;
count__28762 = G__28831;
i__28763 = G__28832;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1528479352604
