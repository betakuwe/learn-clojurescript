// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1416){
var map__1417 = p__1416;
var map__1417__$1 = cljs.core.__destructure_map.call(null,map__1417);
var m = map__1417__$1;
var n = cljs.core.get.call(null,map__1417__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1417__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1418_1446 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1419_1447 = null;
var count__1420_1448 = (0);
var i__1421_1449 = (0);
while(true){
if((i__1421_1449 < count__1420_1448)){
var f_1450 = cljs.core._nth.call(null,chunk__1419_1447,i__1421_1449);
cljs.core.println.call(null,"  ",f_1450);


var G__1451 = seq__1418_1446;
var G__1452 = chunk__1419_1447;
var G__1453 = count__1420_1448;
var G__1454 = (i__1421_1449 + (1));
seq__1418_1446 = G__1451;
chunk__1419_1447 = G__1452;
count__1420_1448 = G__1453;
i__1421_1449 = G__1454;
continue;
} else {
var temp__5804__auto___1455 = cljs.core.seq.call(null,seq__1418_1446);
if(temp__5804__auto___1455){
var seq__1418_1456__$1 = temp__5804__auto___1455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1418_1456__$1)){
var c__5525__auto___1457 = cljs.core.chunk_first.call(null,seq__1418_1456__$1);
var G__1458 = cljs.core.chunk_rest.call(null,seq__1418_1456__$1);
var G__1459 = c__5525__auto___1457;
var G__1460 = cljs.core.count.call(null,c__5525__auto___1457);
var G__1461 = (0);
seq__1418_1446 = G__1458;
chunk__1419_1447 = G__1459;
count__1420_1448 = G__1460;
i__1421_1449 = G__1461;
continue;
} else {
var f_1462 = cljs.core.first.call(null,seq__1418_1456__$1);
cljs.core.println.call(null,"  ",f_1462);


var G__1463 = cljs.core.next.call(null,seq__1418_1456__$1);
var G__1464 = null;
var G__1465 = (0);
var G__1466 = (0);
seq__1418_1446 = G__1463;
chunk__1419_1447 = G__1464;
count__1420_1448 = G__1465;
i__1421_1449 = G__1466;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1467 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1467);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1467)))?cljs.core.second.call(null,arglists_1467):arglists_1467));
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1422_1468 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1423_1469 = null;
var count__1424_1470 = (0);
var i__1425_1471 = (0);
while(true){
if((i__1425_1471 < count__1424_1470)){
var vec__1434_1472 = cljs.core._nth.call(null,chunk__1423_1469,i__1425_1471);
var name_1473 = cljs.core.nth.call(null,vec__1434_1472,(0),null);
var map__1437_1474 = cljs.core.nth.call(null,vec__1434_1472,(1),null);
var map__1437_1475__$1 = cljs.core.__destructure_map.call(null,map__1437_1474);
var doc_1476 = cljs.core.get.call(null,map__1437_1475__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1477 = cljs.core.get.call(null,map__1437_1475__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1473);

cljs.core.println.call(null," ",arglists_1477);

if(cljs.core.truth_(doc_1476)){
cljs.core.println.call(null," ",doc_1476);
} else {
}


var G__1478 = seq__1422_1468;
var G__1479 = chunk__1423_1469;
var G__1480 = count__1424_1470;
var G__1481 = (i__1425_1471 + (1));
seq__1422_1468 = G__1478;
chunk__1423_1469 = G__1479;
count__1424_1470 = G__1480;
i__1425_1471 = G__1481;
continue;
} else {
var temp__5804__auto___1482 = cljs.core.seq.call(null,seq__1422_1468);
if(temp__5804__auto___1482){
var seq__1422_1483__$1 = temp__5804__auto___1482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1422_1483__$1)){
var c__5525__auto___1484 = cljs.core.chunk_first.call(null,seq__1422_1483__$1);
var G__1485 = cljs.core.chunk_rest.call(null,seq__1422_1483__$1);
var G__1486 = c__5525__auto___1484;
var G__1487 = cljs.core.count.call(null,c__5525__auto___1484);
var G__1488 = (0);
seq__1422_1468 = G__1485;
chunk__1423_1469 = G__1486;
count__1424_1470 = G__1487;
i__1425_1471 = G__1488;
continue;
} else {
var vec__1438_1489 = cljs.core.first.call(null,seq__1422_1483__$1);
var name_1490 = cljs.core.nth.call(null,vec__1438_1489,(0),null);
var map__1441_1491 = cljs.core.nth.call(null,vec__1438_1489,(1),null);
var map__1441_1492__$1 = cljs.core.__destructure_map.call(null,map__1441_1491);
var doc_1493 = cljs.core.get.call(null,map__1441_1492__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1494 = cljs.core.get.call(null,map__1441_1492__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1490);

cljs.core.println.call(null," ",arglists_1494);

if(cljs.core.truth_(doc_1493)){
cljs.core.println.call(null," ",doc_1493);
} else {
}


var G__1495 = cljs.core.next.call(null,seq__1422_1483__$1);
var G__1496 = null;
var G__1497 = (0);
var G__1498 = (0);
seq__1422_1468 = G__1495;
chunk__1423_1469 = G__1496;
count__1424_1470 = G__1497;
i__1425_1471 = G__1498;
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
var temp__5804__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.call(null,"Spec");

var seq__1442 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1443 = null;
var count__1444 = (0);
var i__1445 = (0);
while(true){
if((i__1445 < count__1444)){
var role = cljs.core._nth.call(null,chunk__1443,i__1445);
var temp__5804__auto___1499__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___1499__$1)){
var spec_1500 = temp__5804__auto___1499__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1500));
} else {
}


var G__1501 = seq__1442;
var G__1502 = chunk__1443;
var G__1503 = count__1444;
var G__1504 = (i__1445 + (1));
seq__1442 = G__1501;
chunk__1443 = G__1502;
count__1444 = G__1503;
i__1445 = G__1504;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__1442);
if(temp__5804__auto____$1){
var seq__1442__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1442__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__1442__$1);
var G__1505 = cljs.core.chunk_rest.call(null,seq__1442__$1);
var G__1506 = c__5525__auto__;
var G__1507 = cljs.core.count.call(null,c__5525__auto__);
var G__1508 = (0);
seq__1442 = G__1505;
chunk__1443 = G__1506;
count__1444 = G__1507;
i__1445 = G__1508;
continue;
} else {
var role = cljs.core.first.call(null,seq__1442__$1);
var temp__5804__auto___1509__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___1509__$2)){
var spec_1510 = temp__5804__auto___1509__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1510));
} else {
}


var G__1511 = cljs.core.next.call(null,seq__1442__$1);
var G__1512 = null;
var G__1513 = (0);
var G__1514 = (0);
seq__1442 = G__1511;
chunk__1443 = G__1512;
count__1444 = G__1513;
i__1445 = G__1514;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map.call(null,o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__1517 = datafied_throwable;
var map__1517__$1 = cljs.core.__destructure_map.call(null,map__1517);
var via = cljs.core.get.call(null,map__1517__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__1517__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__1517__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__1518 = cljs.core.last.call(null,via);
var map__1518__$1 = cljs.core.__destructure_map.call(null,map__1518);
var type = cljs.core.get.call(null,map__1518__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__1518__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__1518__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__1519 = data;
var map__1519__$1 = cljs.core.__destructure_map.call(null,map__1519);
var problems = cljs.core.get.call(null,map__1519__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__1519__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__1519__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__1520 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__1520__$1 = cljs.core.__destructure_map.call(null,map__1520);
var top_data = map__1520__$1;
var source = cljs.core.get.call(null,map__1520__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__1521 = phase;
var G__1521__$1 = (((G__1521 instanceof cljs.core.Keyword))?G__1521.fqn:null);
switch (G__1521__$1) {
case "read-source":
var map__1522 = data;
var map__1522__$1 = cljs.core.__destructure_map.call(null,map__1522);
var line = cljs.core.get.call(null,map__1522__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1522__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__1523 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__1523__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1523,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1523);
var G__1523__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1523__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1523__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1523__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1523__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__1524 = top_data;
var G__1524__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1524,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1524);
var G__1524__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1524__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1524__$1);
var G__1524__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1524__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1524__$2);
var G__1524__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1524__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1524__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1524__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1524__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__1525 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1525,(0),null);
var method = cljs.core.nth.call(null,vec__1525,(1),null);
var file = cljs.core.nth.call(null,vec__1525,(2),null);
var line = cljs.core.nth.call(null,vec__1525,(3),null);
var G__1528 = top_data;
var G__1528__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__1528,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__1528);
var G__1528__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__1528__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__1528__$1);
var G__1528__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.call(null,G__1528__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__1528__$2);
var G__1528__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1528__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1528__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1528__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1528__$4;
}

break;
case "execution":
var vec__1529 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1529,(0),null);
var method = cljs.core.nth.call(null,vec__1529,(1),null);
var file = cljs.core.nth.call(null,vec__1529,(2),null);
var line = cljs.core.nth.call(null,vec__1529,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__1516_SHARP_){
var or__5002__auto__ = (p1__1516_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__1516_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__1532 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__1532__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__1532,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__1532);
var G__1532__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1532__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1532__$1);
var G__1532__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.call(null,G__1532__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__1532__$2);
var G__1532__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__1532__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__1532__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1532__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1532__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1521__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__1536){
var map__1537 = p__1536;
var map__1537__$1 = cljs.core.__destructure_map.call(null,map__1537);
var triage_data = map__1537__$1;
var phase = cljs.core.get.call(null,map__1537__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__1537__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__1537__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1537__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__1537__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__1537__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__1537__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__1537__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__1538 = phase;
var G__1538__$1 = (((G__1538 instanceof cljs.core.Keyword))?G__1538.fqn:null);
switch (G__1538__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1539_1548 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1540_1549 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1541_1550 = true;
var _STAR_print_fn_STAR__temp_val__1542_1551 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1541_1550);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1542_1551);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1534_SHARP_){
return cljs.core.dissoc.call(null,p1__1534_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1540_1549);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1539_1548);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1543_1552 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1544_1553 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1545_1554 = true;
var _STAR_print_fn_STAR__temp_val__1546_1555 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1545_1554);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1546_1555);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1535_SHARP_){
return cljs.core.dissoc.call(null,p1__1535_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1544_1553);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1543_1552);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1538__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
