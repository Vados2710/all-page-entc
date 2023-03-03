// ! function (e, t) {
//     "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
//         if (!e.document) throw new Error("jQuery requires a window with a document");
//         return t(e)
//     } : t(e)
// }("undefined" != typeof window ? window : this, function (e, t) {
//     var n = [],
//         r = e.document,
//         o = n.slice,
//         i = n.concat,
//         a = n.push,
//         s = n.indexOf,
//         u = {},
//         c = u.toString,
//         l = u.hasOwnProperty,
//         p = {},
//         f = "2.2.4",
//         d = function (e, t) {
//             return new d.fn.init(e, t)
//         },
//         h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
//         m = /^-ms-/,
//         g = /-([\da-z])/gi,
//         y = function (e, t) {
//             return t.toUpperCase()
//         };

//     function v(e) {
//         var t = !!e && "length" in e && e.length,
//             n = d.type(e);
//         return "function" !== n && !d.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
//     }
//     d.fn = d.prototype = {
//         jquery: f,
//         constructor: d,
//         selector: "",
//         length: 0,
//         toArray: function () {
//             return o.call(this)
//         },
//         get: function (e) {
//             return null != e ? 0 > e ? this[e + this.length] : this[e] : o.call(this)
//         },
//         pushStack: function (e) {
//             var t = d.merge(this.constructor(), e);
//             return t.prevObject = this, t.context = this.context, t
//         },
//         each: function (e) {
//             return d.each(this, e)
//         },
//         map: function (e) {
//             return this.pushStack(d.map(this, function (t, n) {
//                 return e.call(t, n, t)
//             }))
//         },
//         slice: function () {
//             return this.pushStack(o.apply(this, arguments))
//         },
//         first: function () {
//             return this.eq(0)
//         },
//         last: function () {
//             return this.eq(-1)
//         },
//         eq: function (e) {
//             var t = this.length,
//                 n = +e + (0 > e ? t : 0);
//             return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
//         },
//         end: function () {
//             return this.prevObject || this.constructor()
//         },
//         push: a,
//         sort: n.sort,
//         splice: n.splice
//     }, d.extend = d.fn.extend = function () {
//         var e, t, n, r, o, i, a = arguments[0] || {},
//             s = 1,
//             u = arguments.length,
//             c = !1;
//         for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || d.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
//             if (null != (e = arguments[s]))
//                 for (t in e) n = a[t], a !== (r = e[t]) && (c && r && (d.isPlainObject(r) || (o = d.isArray(r))) ? (o ? (o = !1, i = n && d.isArray(n) ? n : []) : i = n && d.isPlainObject(n) ? n : {}, a[t] = d.extend(c, i, r)) : void 0 !== r && (a[t] = r));
//         return a
//     }, d.extend({
//         expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
//         isReady: !0,
//         error: function (e) {
//             throw new Error(e)
//         },
//         noop: function () {},
//         isFunction: function (e) {
//             return "function" === d.type(e)
//         },
//         isArray: Array.isArray,
//         isWindow: function (e) {
//             return null != e && e === e.window
//         },
//         isNumeric: function (e) {
//             var t = e && e.toString();
//             return !d.isArray(e) && t - parseFloat(t) + 1 >= 0
//         },
//         isPlainObject: function (e) {
//             var t;
//             if ("object" !== d.type(e) || e.nodeType || d.isWindow(e)) return !1;
//             if (e.constructor && !l.call(e, "constructor") && !l.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
//             for (t in e);
//             return void 0 === t || l.call(e, t)
//         },
//         isEmptyObject: function (e) {
//             var t;
//             for (t in e) return !1;
//             return !0
//         },
//         type: function (e) {
//             return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[c.call(e)] || "object" : typeof e
//         },
//         globalEval: function (e) {
//             var t, n = eval;
//             (e = d.trim(e)) && (1 === e.indexOf("use strict") ? ((t = r.createElement("script")).text = e, r.head.appendChild(t).parentNode.removeChild(t)) : n(e))
//         },
//         camelCase: function (e) {
//             return e.replace(m, "ms-").replace(g, y)
//         },
//         nodeName: function (e, t) {
//             return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
//         },
//         each: function (e, t) {
//             var n, r = 0;
//             if (v(e))
//                 for (n = e.length; n > r && !1 !== t.call(e[r], r, e[r]); r++);
//             else
//                 for (r in e)
//                     if (!1 === t.call(e[r], r, e[r])) break;
//             return e
//         },
//         trim: function (e) {
//             return null == e ? "" : (e + "").replace(h, "")
//         },
//         makeArray: function (e, t) {
//             var n = t || [];
//             return null != e && (v(Object(e)) ? d.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
//         },
//         inArray: function (e, t, n) {
//             return null == t ? -1 : s.call(t, e, n)
//         },
//         merge: function (e, t) {
//             for (var n = +t.length, r = 0, o = e.length; n > r; r++) e[o++] = t[r];
//             return e.length = o, e
//         },
//         grep: function (e, t, n) {
//             for (var r = [], o = 0, i = e.length, a = !n; i > o; o++) !t(e[o], o) !== a && r.push(e[o]);
//             return r
//         },
//         map: function (e, t, n) {
//             var r, o, a = 0,
//                 s = [];
//             if (v(e))
//                 for (r = e.length; r > a; a++) null != (o = t(e[a], a, n)) && s.push(o);
//             else
//                 for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
//             return i.apply([], s)
//         },
//         guid: 1,
//         proxy: function (e, t) {
//             var n, r, i;
//             return "string" == typeof t && (n = e[t], t = e, e = n), d.isFunction(e) ? (r = o.call(arguments, 2), (i = function () {
//                 return e.apply(t || this, r.concat(o.call(arguments)))
//             }).guid = e.guid = e.guid || d.guid++, i) : void 0
//         },
//         now: Date.now,
//         support: p
//     }), "function" == typeof Symbol && (d.fn[Symbol.iterator] = n[Symbol.iterator]), d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
//         u["[object " + t + "]"] = t.toLowerCase()
//     });
//     var x = function (e) {
//         var t, n, r, o, i, a, s, u, c, l, p, f, d, h, m, g, y, v, x, b = "sizzle" + 1 * new Date,
//             w = e.document,
//             _ = 0,
//             $ = 0,
//             T = ie(),
//             C = ie(),
//             k = ie(),
//             E = function (e, t) {
//                 return e === t && (p = !0), 0
//             },
//             N = 1 << 31,
//             S = {}.hasOwnProperty,
//             j = [],
//             A = j.pop,
//             D = j.push,
//             q = j.push,
//             L = j.slice,
//             H = function (e, t) {
//                 for (var n = 0, r = e.length; r > n; n++)
//                     if (e[n] === t) return n;
//                 return -1
//             },
//             O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
//             R = "[\\x20\\t\\r\\n\\f]",
//             F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
//             P = "\\[" + R + "*(" + F + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + R + "*\\]",
//             M = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
//             I = new RegExp(R + "+", "g"),
//             B = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
//             W = new RegExp("^" + R + "*," + R + "*"),
//             z = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
//             U = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]", "g"),
//             X = new RegExp(M),
//             Y = new RegExp("^" + F + "$"),
//             G = {
//                 ID: new RegExp("^#(" + F + ")"),
//                 CLASS: new RegExp("^\\.(" + F + ")"),
//                 TAG: new RegExp("^(" + F + "|[*])"),
//                 ATTR: new RegExp("^" + P),
//                 PSEUDO: new RegExp("^" + M),
//                 CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
//                 bool: new RegExp("^(?:" + O + ")$", "i"),
//                 needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
//             },
//             V = /^(?:input|select|textarea|button)$/i,
//             Q = /^h\d$/i,
//             J = /^[^{]+\{\s*\[native \w/,
//             K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
//             Z = /[+~]/,
//             ee = /'|\\/g,
//             te = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
//             ne = function (e, t, n) {
//                 var r = "0x" + t - 65536;
//                 return r != r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
//             },
//             re = function () {
//                 f()
//             };
//         try {
//             q.apply(j = L.call(w.childNodes), w.childNodes), j[w.childNodes.length].nodeType
//         } catch (e) {
//             q = {
//                 apply: j.length ? function (e, t) {
//                     D.apply(e, L.call(t))
//                 } : function (e, t) {
//                     for (var n = e.length, r = 0; e[n++] = t[r++];);
//                     e.length = n - 1
//                 }
//             }
//         }

//         function oe(e, t, r, o) {
//             var i, s, c, l, p, h, y, v, _ = t && t.ownerDocument,
//                 $ = t ? t.nodeType : 9;
//             if (r = r || [], "string" != typeof e || !e || 1 !== $ && 9 !== $ && 11 !== $) return r;
//             if (!o && ((t ? t.ownerDocument || t : w) !== d && f(t), t = t || d, m)) {
//                 if (11 !== $ && (h = K.exec(e)))
//                     if (i = h[1]) {
//                         if (9 === $) {
//                             if (!(c = t.getElementById(i))) return r;
//                             if (c.id === i) return r.push(c), r
//                         } else if (_ && (c = _.getElementById(i)) && x(t, c) && c.id === i) return r.push(c), r
//                     } else {
//                         if (h[2]) return q.apply(r, t.getElementsByTagName(e)), r;
//                         if ((i = h[3]) && n.getElementsByClassName && t.getElementsByClassName) return q.apply(r, t.getElementsByClassName(i)), r
//                     } if (n.qsa && !k[e + " "] && (!g || !g.test(e))) {
//                     if (1 !== $) _ = t, v = e;
//                     else if ("object" !== t.nodeName.toLowerCase()) {
//                         for ((l = t.getAttribute("id")) ? l = l.replace(ee, "\\$&") : t.setAttribute("id", l = b), s = (y = a(e)).length, p = Y.test(l) ? "#" + l : "[id='" + l + "']"; s--;) y[s] = p + " " + me(y[s]);
//                         v = y.join(","), _ = Z.test(e) && de(t.parentNode) || t
//                     }
//                     if (v) try {
//                         return q.apply(r, _.querySelectorAll(v)), r
//                     } catch (e) {} finally {
//                         l === b && t.removeAttribute("id")
//                     }
//                 }
//             }
//             return u(e.replace(B, "$1"), t, r, o)
//         }

//         function ie() {
//             var e = [];
//             return function t(n, o) {
//                 return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = o
//             }
//         }

//         function ae(e) {
//             return e[b] = !0, e
//         }

//         function se(e) {
//             var t = d.createElement("div");
//             try {
//                 return !!e(t)
//             } catch (e) {
//                 return !1
//             } finally {
//                 t.parentNode && t.parentNode.removeChild(t), t = null
//             }
//         }

//         function ue(e, t) {
//             for (var n = e.split("|"), o = n.length; o--;) r.attrHandle[n[o]] = t
//         }

//         function ce(e, t) {
//             var n = t && e,
//                 r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || N) - (~e.sourceIndex || N);
//             if (r) return r;
//             if (n)
//                 for (; n = n.nextSibling;)
//                     if (n === t) return -1;
//             return e ? 1 : -1
//         }

//         function le(e) {
//             return function (t) {
//                 return "input" === t.nodeName.toLowerCase() && t.type === e
//             }
//         }

//         function pe(e) {
//             return function (t) {
//                 var n = t.nodeName.toLowerCase();
//                 return ("input" === n || "button" === n) && t.type === e
//             }
//         }

//         function fe(e) {
//             return ae(function (t) {
//                 return t = +t, ae(function (n, r) {
//                     for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
//                 })
//             })
//         }

//         function de(e) {
//             return e && void 0 !== e.getElementsByTagName && e
//         }
//         for (t in n = oe.support = {}, i = oe.isXML = function (e) {
//                 var t = e && (e.ownerDocument || e).documentElement;
//                 return !!t && "HTML" !== t.nodeName
//             }, f = oe.setDocument = function (e) {
//                 var t, o, a = e ? e.ownerDocument || e : w;
//                 return a !== d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, m = !i(d), (o = d.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)), n.attributes = se(function (e) {
//                     return e.className = "i", !e.getAttribute("className")
//                 }), n.getElementsByTagName = se(function (e) {
//                     return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
//                 }), n.getElementsByClassName = J.test(d.getElementsByClassName), n.getById = se(function (e) {
//                     return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
//                 }), n.getById ? (r.find.ID = function (e, t) {
//                     if (void 0 !== t.getElementById && m) {
//                         var n = t.getElementById(e);
//                         return n ? [n] : []
//                     }
//                 }, r.filter.ID = function (e) {
//                     var t = e.replace(te, ne);
//                     return function (e) {
//                         return e.getAttribute("id") === t
//                     }
//                 }) : (delete r.find.ID, r.filter.ID = function (e) {
//                     var t = e.replace(te, ne);
//                     return function (e) {
//                         var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
//                         return n && n.value === t
//                     }
//                 }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
//                     return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
//                 } : function (e, t) {
//                     var n, r = [],
//                         o = 0,
//                         i = t.getElementsByTagName(e);
//                     if ("*" === e) {
//                         for (; n = i[o++];) 1 === n.nodeType && r.push(n);
//                         return r
//                     }
//                     return i
//                 }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
//                     return void 0 !== t.getElementsByClassName && m ? t.getElementsByClassName(e) : void 0
//                 }, y = [], g = [], (n.qsa = J.test(d.querySelectorAll)) && (se(function (e) {
//                     h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + R + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]")
//                 }), se(function (e) {
//                     var t = d.createElement("input");
//                     t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + R + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
//                 })), (n.matchesSelector = J.test(v = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && se(function (e) {
//                     n.disconnectedMatch = v.call(e, "div"), v.call(e, "[s!='']:x"), y.push("!=", M)
//                 }), g = g.length && new RegExp(g.join("|")), y = y.length && new RegExp(y.join("|")), t = J.test(h.compareDocumentPosition), x = t || J.test(h.contains) ? function (e, t) {
//                     var n = 9 === e.nodeType ? e.documentElement : e,
//                         r = t && t.parentNode;
//                     return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
//                 } : function (e, t) {
//                     if (t)
//                         for (; t = t.parentNode;)
//                             if (t === e) return !0;
//                     return !1
//                 }, E = t ? function (e, t) {
//                     if (e === t) return p = !0, 0;
//                     var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
//                     return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : l ? H(l, e) - H(l, t) : 0 : 4 & r ? -1 : 1)
//                 } : function (e, t) {
//                     if (e === t) return p = !0, 0;
//                     var n, r = 0,
//                         o = e.parentNode,
//                         i = t.parentNode,
//                         a = [e],
//                         s = [t];
//                     if (!o || !i) return e === d ? -1 : t === d ? 1 : o ? -1 : i ? 1 : l ? H(l, e) - H(l, t) : 0;
//                     if (o === i) return ce(e, t);
//                     for (n = e; n = n.parentNode;) a.unshift(n);
//                     for (n = t; n = n.parentNode;) s.unshift(n);
//                     for (; a[r] === s[r];) r++;
//                     return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
//                 }, d) : d
//             }, oe.matches = function (e, t) {
//                 return oe(e, null, null, t)
//             }, oe.matchesSelector = function (e, t) {
//                 if ((e.ownerDocument || e) !== d && f(e), t = t.replace(U, "='$1']"), n.matchesSelector && m && !k[t + " "] && (!y || !y.test(t)) && (!g || !g.test(t))) try {
//                     var r = v.call(e, t);
//                     if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
//                 } catch (e) {}
//                 return oe(t, d, null, [e]).length > 0
//             }, oe.contains = function (e, t) {
//                 return (e.ownerDocument || e) !== d && f(e), x(e, t)
//             }, oe.attr = function (e, t) {
//                 (e.ownerDocument || e) !== d && f(e);
//                 var o = r.attrHandle[t.toLowerCase()],
//                     i = o && S.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
//                 return void 0 !== i ? i : n.attributes || !m ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
//             }, oe.error = function (e) {
//                 throw new Error("Syntax error, unrecognized expression: " + e)
//             }, oe.uniqueSort = function (e) {
//                 var t, r = [],
//                     o = 0,
//                     i = 0;
//                 if (p = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(E), p) {
//                     for (; t = e[i++];) t === e[i] && (o = r.push(i));
//                     for (; o--;) e.splice(r[o], 1)
//                 }
//                 return l = null, e
//             }, o = oe.getText = function (e) {
//                 var t, n = "",
//                     r = 0,
//                     i = e.nodeType;
//                 if (i) {
//                     if (1 === i || 9 === i || 11 === i) {
//                         if ("string" == typeof e.textContent) return e.textContent;
//                         for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
//                     } else if (3 === i || 4 === i) return e.nodeValue
//                 } else
//                     for (; t = e[r++];) n += o(t);
//                 return n
//             }, (r = oe.selectors = {
//                 cacheLength: 50,
//                 createPseudo: ae,
//                 match: G,
//                 attrHandle: {},
//                 find: {},
//                 relative: {
//                     ">": {
//                         dir: "parentNode",
//                         first: !0
//                     },
//                     " ": {
//                         dir: "parentNode"
//                     },
//                     "+": {
//                         dir: "previousSibling",
//                         first: !0
//                     },
//                     "~": {
//                         dir: "previousSibling"
//                     }
//                 },
//                 preFilter: {
//                     ATTR: function (e) {
//                         return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
//                     },
//                     CHILD: function (e) {
//                         return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
//                     },
//                     PSEUDO: function (e) {
//                         var t, n = !e[6] && e[2];
//                         return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
//                     }
//                 },
//                 filter: {
//                     TAG: function (e) {
//                         var t = e.replace(te, ne).toLowerCase();
//                         return "*" === e ? function () {
//                             return !0
//                         } : function (e) {
//                             return e.nodeName && e.nodeName.toLowerCase() === t
//                         }
//                     },
//                     CLASS: function (e) {
//                         var t = T[e + " "];
//                         return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && T(e, function (e) {
//                             return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
//                         })
//                     },
//                     ATTR: function (e, t, n) {
//                         return function (r) {
//                             var o = oe.attr(r, e);
//                             return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(I, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
//                         }
//                     },
//                     CHILD: function (e, t, n, r, o) {
//                         var i = "nth" !== e.slice(0, 3),
//                             a = "last" !== e.slice(-4),
//                             s = "of-type" === t;
//                         return 1 === r && 0 === o ? function (e) {
//                             return !!e.parentNode
//                         } : function (t, n, u) {
//                             var c, l, p, f, d, h, m = i !== a ? "nextSibling" : "previousSibling",
//                                 g = t.parentNode,
//                                 y = s && t.nodeName.toLowerCase(),
//                                 v = !u && !s,
//                                 x = !1;
//                             if (g) {
//                                 if (i) {
//                                     for (; m;) {
//                                         for (f = t; f = f[m];)
//                                             if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
//                                         h = m = "only" === e && !h && "nextSibling"
//                                     }
//                                     return !0
//                                 }
//                                 if (h = [a ? g.firstChild : g.lastChild], a && v) {
//                                     for (x = (d = (c = (l = (p = (f = g)[b] || (f[b] = {}))[f.uniqueID] || (p[f.uniqueID] = {}))[e] || [])[0] === _ && c[1]) && c[2], f = d && g.childNodes[d]; f = ++d && f && f[m] || (x = d = 0) || h.pop();)
//                                         if (1 === f.nodeType && ++x && f === t) {
//                                             l[e] = [_, d, x];
//                                             break
//                                         }
//                                 } else if (v && (x = d = (c = (l = (p = (f = t)[b] || (f[b] = {}))[f.uniqueID] || (p[f.uniqueID] = {}))[e] || [])[0] === _ && c[1]), !1 === x)
//                                     for (;
//                                         (f = ++d && f && f[m] || (x = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++x || (v && ((l = (p = f[b] || (f[b] = {}))[f.uniqueID] || (p[f.uniqueID] = {}))[e] = [_, x]), f !== t)););
//                                 return (x -= o) === r || x % r == 0 && x / r >= 0
//                             }
//                         }
//                     },
//                     PSEUDO: function (e, t) {
//                         var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
//                         return o[b] ? o(t) : o.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, n) {
//                             for (var r, i = o(e, t), a = i.length; a--;) e[r = H(e, i[a])] = !(n[r] = i[a])
//                         }) : function (e) {
//                             return o(e, 0, n)
//                         }) : o
//                     }
//                 },
//                 pseudos: {
//                     not: ae(function (e) {
//                         var t = [],
//                             n = [],
//                             r = s(e.replace(B, "$1"));
//                         return r[b] ? ae(function (e, t, n, o) {
//                             for (var i, a = r(e, null, o, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
//                         }) : function (e, o, i) {
//                             return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop()
//                         }
//                     }),
//                     has: ae(function (e) {
//                         return function (t) {
//                             return oe(e, t).length > 0
//                         }
//                     }),
//                     contains: ae(function (e) {
//                         return e = e.replace(te, ne),
//                             function (t) {
//                                 return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
//                             }
//                     }),
//                     lang: ae(function (e) {
//                         return Y.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
//                             function (t) {
//                                 var n;
//                                 do {
//                                     if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
//                                 } while ((t = t.parentNode) && 1 === t.nodeType);
//                                 return !1
//                             }
//                     }),
//                     target: function (t) {
//                         var n = e.location && e.location.hash;
//                         return n && n.slice(1) === t.id
//                     },
//                     root: function (e) {
//                         return e === h
//                     },
//                     focus: function (e) {
//                         return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
//                     },
//                     enabled: function (e) {
//                         return !1 === e.disabled
//                     },
//                     disabled: function (e) {
//                         return !0 === e.disabled
//                     },
//                     checked: function (e) {
//                         var t = e.nodeName.toLowerCase();
//                         return "input" === t && !!e.checked || "option" === t && !!e.selected
//                     },
//                     selected: function (e) {
//                         return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
//                     },
//                     empty: function (e) {
//                         for (e = e.firstChild; e; e = e.nextSibling)
//                             if (e.nodeType < 6) return !1;
//                         return !0
//                     },
//                     parent: function (e) {
//                         return !r.pseudos.empty(e)
//                     },
//                     header: function (e) {
//                         return Q.test(e.nodeName)
//                     },
//                     input: function (e) {
//                         return V.test(e.nodeName)
//                     },
//                     button: function (e) {
//                         var t = e.nodeName.toLowerCase();
//                         return "input" === t && "button" === e.type || "button" === t
//                     },
//                     text: function (e) {
//                         var t;
//                         return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
//                     },
//                     first: fe(function () {
//                         return [0]
//                     }),
//                     last: fe(function (e, t) {
//                         return [t - 1]
//                     }),
//                     eq: fe(function (e, t, n) {
//                         return [0 > n ? n + t : n]
//                     }),
//                     even: fe(function (e, t) {
//                         for (var n = 0; t > n; n += 2) e.push(n);
//                         return e
//                     }),
//                     odd: fe(function (e, t) {
//                         for (var n = 1; t > n; n += 2) e.push(n);
//                         return e
//                     }),
//                     lt: fe(function (e, t, n) {
//                         for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
//                         return e
//                     }),
//                     gt: fe(function (e, t, n) {
//                         for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
//                         return e
//                     })
//                 }
//             }).pseudos.nth = r.pseudos.eq, {
//                 radio: !0,
//                 checkbox: !0,
//                 file: !0,
//                 password: !0,
//                 image: !0
//             }) r.pseudos[t] = le(t);
//         for (t in {
//                 submit: !0,
//                 reset: !0
//             }) r.pseudos[t] = pe(t);

//         function he() {}

//         function me(e) {
//             for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
//             return r
//         }

//         function ge(e, t, n) {
//             var r = t.dir,
//                 o = n && "parentNode" === r,
//                 i = $++;
//             return t.first ? function (t, n, i) {
//                 for (; t = t[r];)
//                     if (1 === t.nodeType || o) return e(t, n, i)
//             } : function (t, n, a) {
//                 var s, u, c, l = [_, i];
//                 if (a) {
//                     for (; t = t[r];)
//                         if ((1 === t.nodeType || o) && e(t, n, a)) return !0
//                 } else
//                     for (; t = t[r];)
//                         if (1 === t.nodeType || o) {
//                             if ((s = (u = (c = t[b] || (t[b] = {}))[t.uniqueID] || (c[t.uniqueID] = {}))[r]) && s[0] === _ && s[1] === i) return l[2] = s[2];
//                             if (u[r] = l, l[2] = e(t, n, a)) return !0
//                         }
//             }
//         }

//         function ye(e) {
//             return e.length > 1 ? function (t, n, r) {
//                 for (var o = e.length; o--;)
//                     if (!e[o](t, n, r)) return !1;
//                 return !0
//             } : e[0]
//         }

//         function ve(e, t, n, r, o) {
//             for (var i, a = [], s = 0, u = e.length, c = null != t; u > s; s++)(i = e[s]) && (n && !n(i, r, o) || (a.push(i), c && t.push(s)));
//             return a
//         }

//         function xe(e, t, n, r, o, i) {
//             return r && !r[b] && (r = xe(r)), o && !o[b] && (o = xe(o, i)), ae(function (i, a, s, u) {
//                 var c, l, p, f = [],
//                     d = [],
//                     h = a.length,
//                     m = i || function (e, t, n) {
//                         for (var r = 0, o = t.length; o > r; r++) oe(e, t[r], n);
//                         return n
//                     }(t || "*", s.nodeType ? [s] : s, []),
//                     g = !e || !i && t ? m : ve(m, f, e, s, u),
//                     y = n ? o || (i ? e : h || r) ? [] : a : g;
//                 if (n && n(g, y, s, u), r)
//                     for (c = ve(y, d), r(c, [], s, u), l = c.length; l--;)(p = c[l]) && (y[d[l]] = !(g[d[l]] = p));
//                 if (i) {
//                     if (o || e) {
//                         if (o) {
//                             for (c = [], l = y.length; l--;)(p = y[l]) && c.push(g[l] = p);
//                             o(null, y = [], c, u)
//                         }
//                         for (l = y.length; l--;)(p = y[l]) && (c = o ? H(i, p) : f[l]) > -1 && (i[c] = !(a[c] = p))
//                     }
//                 } else y = ve(y === a ? y.splice(h, y.length) : y), o ? o(null, a, y, u) : q.apply(a, y)
//             })
//         }

//         function be(e) {
//             for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, l = ge(function (e) {
//                     return e === t
//                 }, s, !0), p = ge(function (e) {
//                     return H(t, e) > -1
//                 }, s, !0), f = [function (e, n, r) {
//                     var o = !a && (r || n !== c) || ((t = n).nodeType ? l(e, n, r) : p(e, n, r));
//                     return t = null, o
//                 }]; i > u; u++)
//                 if (n = r.relative[e[u].type]) f = [ge(ye(f), n)];
//                 else {
//                     if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
//                         for (o = ++u; i > o && !r.relative[e[o].type]; o++);
//                         return xe(u > 1 && ye(f), u > 1 && me(e.slice(0, u - 1).concat({
//                             value: " " === e[u - 2].type ? "*" : ""
//                         })).replace(B, "$1"), n, o > u && be(e.slice(u, o)), i > o && be(e = e.slice(o)), i > o && me(e))
//                     }
//                     f.push(n)
//                 } return ye(f)
//         }

//         function we(e, t) {
//             var n = t.length > 0,
//                 o = e.length > 0,
//                 i = function (i, a, s, u, l) {
//                     var p, h, g, y = 0,
//                         v = "0",
//                         x = i && [],
//                         b = [],
//                         w = c,
//                         $ = i || o && r.find.TAG("*", l),
//                         T = _ += null == w ? 1 : Math.random() || .1,
//                         C = $.length;
//                     for (l && (c = a === d || a || l); v !== C && null != (p = $[v]); v++) {
//                         if (o && p) {
//                             for (h = 0, a || p.ownerDocument === d || (f(p), s = !m); g = e[h++];)
//                                 if (g(p, a || d, s)) {
//                                     u.push(p);
//                                     break
//                                 } l && (_ = T)
//                         }
//                         n && ((p = !g && p) && y--, i && x.push(p))
//                     }
//                     if (y += v, n && v !== y) {
//                         for (h = 0; g = t[h++];) g(x, b, a, s);
//                         if (i) {
//                             if (y > 0)
//                                 for (; v--;) x[v] || b[v] || (b[v] = A.call(u));
//                             b = ve(b)
//                         }
//                         q.apply(u, b), l && !i && b.length > 0 && y + t.length > 1 && oe.uniqueSort(u)
//                     }
//                     return l && (_ = T, c = w), x
//                 };
//             return n ? ae(i) : i
//         }
//         return he.prototype = r.filters = r.pseudos, r.setFilters = new he, a = oe.tokenize = function (e, t) {
//             var n, o, i, a, s, u, c, l = C[e + " "];
//             if (l) return t ? 0 : l.slice(0);
//             for (s = e, u = [], c = r.preFilter; s;) {
//                 for (a in n && !(o = W.exec(s)) || (o && (s = s.slice(o[0].length) || s), u.push(i = [])), n = !1, (o = z.exec(s)) && (n = o.shift(), i.push({
//                         value: n,
//                         type: o[0].replace(B, " ")
//                     }), s = s.slice(n.length)), r.filter) !(o = G[a].exec(s)) || c[a] && !(o = c[a](o)) || (n = o.shift(), i.push({
//                     value: n,
//                     type: a,
//                     matches: o
//                 }), s = s.slice(n.length));
//                 if (!n) break
//             }
//             return t ? s.length : s ? oe.error(e) : C(e, u).slice(0)
//         }, s = oe.compile = function (e, t) {
//             var n, r = [],
//                 o = [],
//                 i = k[e + " "];
//             if (!i) {
//                 for (t || (t = a(e)), n = t.length; n--;)(i = be(t[n]))[b] ? r.push(i) : o.push(i);
//                 (i = k(e, we(o, r))).selector = e
//             }
//             return i
//         }, u = oe.select = function (e, t, o, i) {
//             var u, c, l, p, f, d = "function" == typeof e && e,
//                 h = !i && a(e = d.selector || e);
//             if (o = o || [], 1 === h.length) {
//                 if ((c = h[0] = h[0].slice(0)).length > 2 && "ID" === (l = c[0]).type && n.getById && 9 === t.nodeType && m && r.relative[c[1].type]) {
//                     if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return o;
//                     d && (t = t.parentNode), e = e.slice(c.shift().value.length)
//                 }
//                 for (u = G.needsContext.test(e) ? 0 : c.length; u-- && (l = c[u], !r.relative[p = l.type]);)
//                     if ((f = r.find[p]) && (i = f(l.matches[0].replace(te, ne), Z.test(c[0].type) && de(t.parentNode) || t))) {
//                         if (c.splice(u, 1), !(e = i.length && me(c))) return q.apply(o, i), o;
//                         break
//                     }
//             }
//             return (d || s(e, h))(i, t, !m, o, !t || Z.test(e) && de(t.parentNode) || t), o
//         }, n.sortStable = b.split("").sort(E).join("") === b, n.detectDuplicates = !!p, f(), n.sortDetached = se(function (e) {
//             return 1 & e.compareDocumentPosition(d.createElement("div"))
//         }), se(function (e) {
//             return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
//         }) || ue("type|href|height|width", function (e, t, n) {
//             return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
//         }), n.attributes && se(function (e) {
//             return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
//         }) || ue("value", function (e, t, n) {
//             return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
//         }), se(function (e) {
//             return null == e.getAttribute("disabled")
//         }) || ue(O, function (e, t, n) {
//             var r;
//             return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
//         }), oe
//     }(e);
//     d.find = x, d.expr = x.selectors, d.expr[":"] = d.expr.pseudos, d.uniqueSort = d.unique = x.uniqueSort, d.text = x.getText, d.isXMLDoc = x.isXML, d.contains = x.contains;
//     var b = function (e, t, n) {
//             for (var r = [], o = void 0 !== n;
//                 (e = e[t]) && 9 !== e.nodeType;)
//                 if (1 === e.nodeType) {
//                     if (o && d(e).is(n)) break;
//                     r.push(e)
//                 } return r
//         },
//         w = function (e, t) {
//             for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
//             return n
//         },
//         _ = d.expr.match.needsContext,
//         $ = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
//         T = /^.[^:#\[\.,]*$/;

//     function C(e, t, n) {
//         if (d.isFunction(t)) return d.grep(e, function (e, r) {
//             return !!t.call(e, r, e) !== n
//         });
//         if (t.nodeType) return d.grep(e, function (e) {
//             return e === t !== n
//         });
//         if ("string" == typeof t) {
//             if (T.test(t)) return d.filter(t, e, n);
//             t = d.filter(t, e)
//         }
//         return d.grep(e, function (e) {
//             return s.call(t, e) > -1 !== n
//         })
//     }
//     d.filter = function (e, t, n) {
//         var r = t[0];
//         return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? d.find.matchesSelector(r, e) ? [r] : [] : d.find.matches(e, d.grep(t, function (e) {
//             return 1 === e.nodeType
//         }))
//     }, d.fn.extend({
//         find: function (e) {
//             var t, n = this.length,
//                 r = [],
//                 o = this;
//             if ("string" != typeof e) return this.pushStack(d(e).filter(function () {
//                 for (t = 0; n > t; t++)
//                     if (d.contains(o[t], this)) return !0
//             }));
//             for (t = 0; n > t; t++) d.find(e, o[t], r);
//             return (r = this.pushStack(n > 1 ? d.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e, r
//         },
//         filter: function (e) {
//             return this.pushStack(C(this, e || [], !1))
//         },
//         not: function (e) {
//             return this.pushStack(C(this, e || [], !0))
//         },
//         is: function (e) {
//             return !!C(this, "string" == typeof e && _.test(e) ? d(e) : e || [], !1).length
//         }
//     });
//     var k, E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
//     (d.fn.init = function (e, t, n) {
//         var o, i;
//         if (!e) return this;
//         if (n = n || k, "string" == typeof e) {
//             if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : E.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
//             if (o[1]) {
//                 if (t = t instanceof d ? t[0] : t, d.merge(this, d.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), $.test(o[1]) && d.isPlainObject(t))
//                     for (o in t) d.isFunction(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
//                 return this
//             }
//             return (i = r.getElementById(o[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = r, this.selector = e, this
//         }
//         return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : d.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(d) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), d.makeArray(e, this))
//     }).prototype = d.fn, k = d(r);
//     var N = /^(?:parents|prev(?:Until|All))/,
//         S = {
//             children: !0,
//             contents: !0,
//             next: !0,
//             prev: !0
//         };

//     function j(e, t) {
//         for (;
//             (e = e[t]) && 1 !== e.nodeType;);
//         return e
//     }
//     d.fn.extend({
//         has: function (e) {
//             var t = d(e, this),
//                 n = t.length;
//             return this.filter(function () {
//                 for (var e = 0; n > e; e++)
//                     if (d.contains(this, t[e])) return !0
//             })
//         },
//         closest: function (e, t) {
//             for (var n, r = 0, o = this.length, i = [], a = _.test(e) || "string" != typeof e ? d(e, t || this.context) : 0; o > r; r++)
//                 for (n = this[r]; n && n !== t; n = n.parentNode)
//                     if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && d.find.matchesSelector(n, e))) {
//                         i.push(n);
//                         break
//                     } return this.pushStack(i.length > 1 ? d.uniqueSort(i) : i)
//         },
//         index: function (e) {
//             return e ? "string" == typeof e ? s.call(d(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
//         },
//         add: function (e, t) {
//             return this.pushStack(d.uniqueSort(d.merge(this.get(), d(e, t))))
//         },
//         addBack: function (e) {
//             return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
//         }
//     }), d.each({
//         parent: function (e) {
//             var t = e.parentNode;
//             return t && 11 !== t.nodeType ? t : null
//         },
//         parents: function (e) {
//             return b(e, "parentNode")
//         },
//         parentsUntil: function (e, t, n) {
//             return b(e, "parentNode", n)
//         },
//         next: function (e) {
//             return j(e, "nextSibling")
//         },
//         prev: function (e) {
//             return j(e, "previousSibling")
//         },
//         nextAll: function (e) {
//             return b(e, "nextSibling")
//         },
//         prevAll: function (e) {
//             return b(e, "previousSibling")
//         },
//         nextUntil: function (e, t, n) {
//             return b(e, "nextSibling", n)
//         },
//         prevUntil: function (e, t, n) {
//             return b(e, "previousSibling", n)
//         },
//         siblings: function (e) {
//             return w((e.parentNode || {}).firstChild, e)
//         },
//         children: function (e) {
//             return w(e.firstChild)
//         },
//         contents: function (e) {
//             return e.contentDocument || d.merge([], e.childNodes)
//         }
//     }, function (e, t) {
//         d.fn[e] = function (n, r) {
//             var o = d.map(this, t, n);
//             return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = d.filter(r, o)), this.length > 1 && (S[e] || d.uniqueSort(o), N.test(e) && o.reverse()), this.pushStack(o)
//         }
//     });
//     var A, D = /\S+/g;

//     function q() {
//         r.removeEventListener("DOMContentLoaded", q), e.removeEventListener("load", q), d.ready()
//     }
//     d.Callbacks = function (e) {
//         e = "string" == typeof e ? function (e) {
//             var t = {};
//             return d.each(e.match(D) || [], function (e, n) {
//                 t[n] = !0
//             }), t
//         }(e) : d.extend({}, e);
//         var t, n, r, o, i = [],
//             a = [],
//             s = -1,
//             u = function () {
//                 for (o = e.once, r = t = !0; a.length; s = -1)
//                     for (n = a.shift(); ++s < i.length;) !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length, n = !1);
//                 e.memory || (n = !1), t = !1, o && (i = n ? [] : "")
//             },
//             c = {
//                 add: function () {
//                     return i && (n && !t && (s = i.length - 1, a.push(n)), function t(n) {
//                         d.each(n, function (n, r) {
//                             d.isFunction(r) ? e.unique && c.has(r) || i.push(r) : r && r.length && "string" !== d.type(r) && t(r)
//                         })
//                     }(arguments), n && !t && u()), this
//                 },
//                 remove: function () {
//                     return d.each(arguments, function (e, t) {
//                         for (var n;
//                             (n = d.inArray(t, i, n)) > -1;) i.splice(n, 1), s >= n && s--
//                     }), this
//                 },
//                 has: function (e) {
//                     return e ? d.inArray(e, i) > -1 : i.length > 0
//                 },
//                 empty: function () {
//                     return i && (i = []), this
//                 },
//                 disable: function () {
//                     return o = a = [], i = n = "", this
//                 },
//                 disabled: function () {
//                     return !i
//                 },
//                 lock: function () {
//                     return o = a = [], n || (i = n = ""), this
//                 },
//                 locked: function () {
//                     return !!o
//                 },
//                 fireWith: function (e, n) {
//                     return o || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
//                 },
//                 fire: function () {
//                     return c.fireWith(this, arguments), this
//                 },
//                 fired: function () {
//                     return !!r
//                 }
//             };
//         return c
//     }, d.extend({
//         Deferred: function (e) {
//             var t = [
//                     ["resolve", "done", d.Callbacks("once memory"), "resolved"],
//                     ["reject", "fail", d.Callbacks("once memory"), "rejected"],
//                     ["notify", "progress", d.Callbacks("memory")]
//                 ],
//                 n = "pending",
//                 r = {
//                     state: function () {
//                         return n
//                     },
//                     always: function () {
//                         return o.done(arguments).fail(arguments), this
//                     },
//                     then: function () {
//                         var e = arguments;
//                         return d.Deferred(function (n) {
//                             d.each(t, function (t, i) {
//                                 var a = d.isFunction(e[t]) && e[t];
//                                 o[i[1]](function () {
//                                     var e = a && a.apply(this, arguments);
//                                     e && d.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
//                                 })
//                             }), e = null
//                         }).promise()
//                     },
//                     promise: function (e) {
//                         return null != e ? d.extend(e, r) : r
//                     }
//                 },
//                 o = {};
//             return r.pipe = r.then, d.each(t, function (e, i) {
//                 var a = i[2],
//                     s = i[3];
//                 r[i[1]] = a.add, s && a.add(function () {
//                     n = s
//                 }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function () {
//                     return o[i[0] + "With"](this === o ? r : this, arguments), this
//                 }, o[i[0] + "With"] = a.fireWith
//             }), r.promise(o), e && e.call(o, o), o
//         },
//         when: function (e) {
//             var t, n, r, i = 0,
//                 a = o.call(arguments),
//                 s = a.length,
//                 u = 1 !== s || e && d.isFunction(e.promise) ? s : 0,
//                 c = 1 === u ? e : d.Deferred(),
//                 l = function (e, n, r) {
//                     return function (i) {
//                         n[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : i, r === t ? c.notifyWith(n, r) : --u || c.resolveWith(n, r)
//                     }
//                 };
//             if (s > 1)
//                 for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) a[i] && d.isFunction(a[i].promise) ? a[i].promise().progress(l(i, n, t)).done(l(i, r, a)).fail(c.reject) : --u;
//             return u || c.resolveWith(r, a), c.promise()
//         }
//     }), d.fn.ready = function (e) {
//         return d.ready.promise().done(e), this
//     }, d.extend({
//         isReady: !1,
//         readyWait: 1,
//         holdReady: function (e) {
//             e ? d.readyWait++ : d.ready(!0)
//         },
//         ready: function (e) {
//             (!0 === e ? --d.readyWait : d.isReady) || (d.isReady = !0, !0 !== e && --d.readyWait > 0 || (A.resolveWith(r, [d]), d.fn.triggerHandler && (d(r).triggerHandler("ready"), d(r).off("ready"))))
//         }
//     }), d.ready.promise = function (t) {
//         return A || (A = d.Deferred(), "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(d.ready) : (r.addEventListener("DOMContentLoaded", q), e.addEventListener("load", q))), A.promise(t)
//     }, d.ready.promise();
//     var L = function (e, t, n, r, o, i, a) {
//             var s = 0,
//                 u = e.length,
//                 c = null == n;
//             if ("object" === d.type(n))
//                 for (s in o = !0, n) L(e, t, s, n[s], !0, i, a);
//             else if (void 0 !== r && (o = !0, d.isFunction(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function (e, t, n) {
//                     return c.call(d(e), n)
//                 })), t))
//                 for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
//             return o ? e : c ? t.call(e) : u ? t(e[0], n) : i
//         },
//         H = function (e) {
//             return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
//         };

//     function O() {
//         this.expando = d.expando + O.uid++
//     }
//     O.uid = 1, O.prototype = {
//         register: function (e, t) {
//             var n = t || {};
//             return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
//                 value: n,
//                 writable: !0,
//                 configurable: !0
//             }), e[this.expando]
//         },
//         cache: function (e) {
//             if (!H(e)) return {};
//             var t = e[this.expando];
//             return t || (t = {}, H(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
//                 value: t,
//                 configurable: !0
//             }))), t
//         },
//         set: function (e, t, n) {
//             var r, o = this.cache(e);
//             if ("string" == typeof t) o[t] = n;
//             else
//                 for (r in t) o[r] = t[r];
//             return o
//         },
//         get: function (e, t) {
//             return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
//         },
//         access: function (e, t, n) {
//             var r;
//             return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, d.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
//         },
//         remove: function (e, t) {
//             var n, r, o, i = e[this.expando];
//             if (void 0 !== i) {
//                 if (void 0 === t) this.register(e);
//                 else {
//                     d.isArray(t) ? r = t.concat(t.map(d.camelCase)) : (o = d.camelCase(t), t in i ? r = [t, o] : r = (r = o) in i ? [r] : r.match(D) || []), n = r.length;
//                     for (; n--;) delete i[r[n]]
//                 }(void 0 === t || d.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
//             }
//         },
//         hasData: function (e) {
//             var t = e[this.expando];
//             return void 0 !== t && !d.isEmptyObject(t)
//         }
//     };
//     var R = new O,
//         F = new O,
//         P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
//         M = /[A-Z]/g;

//     function I(e, t, n) {
//         var r;
//         if (void 0 === n && 1 === e.nodeType)
//             if (r = "data-" + t.replace(M, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
//                 try {
//                     n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : P.test(n) ? d.parseJSON(n) : n)
//                 } catch (e) {}
//                 F.set(e, t, n)
//             } else n = void 0;
//         return n
//     }
//     d.extend({
//         hasData: function (e) {
//             return F.hasData(e) || R.hasData(e)
//         },
//         data: function (e, t, n) {
//             return F.access(e, t, n)
//         },
//         removeData: function (e, t) {
//             F.remove(e, t)
//         },
//         _data: function (e, t, n) {
//             return R.access(e, t, n)
//         },
//         _removeData: function (e, t) {
//             R.remove(e, t)
//         }
//     }), d.fn.extend({
//         data: function (e, t) {
//             var n, r, o, i = this[0],
//                 a = i && i.attributes;
//             if (void 0 === e) {
//                 if (this.length && (o = F.get(i), 1 === i.nodeType && !R.get(i, "hasDataAttrs"))) {
//                     for (n = a.length; n--;) a[n] && (0 === (r = a[n].name).indexOf("data-") && (r = d.camelCase(r.slice(5)), I(i, r, o[r])));
//                     R.set(i, "hasDataAttrs", !0)
//                 }
//                 return o
//             }
//             return "object" == typeof e ? this.each(function () {
//                 F.set(this, e)
//             }) : L(this, function (t) {
//                 var n, r;
//                 if (i && void 0 === t) {
//                     if (void 0 !== (n = F.get(i, e) || F.get(i, e.replace(M, "-$&").toLowerCase()))) return n;
//                     if (r = d.camelCase(e), void 0 !== (n = F.get(i, r))) return n;
//                     if (void 0 !== (n = I(i, r, void 0))) return n
//                 } else r = d.camelCase(e), this.each(function () {
//                     var n = F.get(this, r);
//                     F.set(this, r, t), e.indexOf("-") > -1 && void 0 !== n && F.set(this, e, t)
//                 })
//             }, null, t, arguments.length > 1, null, !0)
//         },
//         removeData: function (e) {
//             return this.each(function () {
//                 F.remove(this, e)
//             })
//         }
//     }), d.extend({
//         queue: function (e, t, n) {
//             var r;
//             return e ? (t = (t || "fx") + "queue", r = R.get(e, t), n && (!r || d.isArray(n) ? r = R.access(e, t, d.makeArray(n)) : r.push(n)), r || []) : void 0
//         },
//         dequeue: function (e, t) {
//             t = t || "fx";
//             var n = d.queue(e, t),
//                 r = n.length,
//                 o = n.shift(),
//                 i = d._queueHooks(e, t);
//             "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function () {
//                 d.dequeue(e, t)
//             }, i)), !r && i && i.empty.fire()
//         },
//         _queueHooks: function (e, t) {
//             var n = t + "queueHooks";
//             return R.get(e, n) || R.access(e, n, {
//                 empty: d.Callbacks("once memory").add(function () {
//                     R.remove(e, [t + "queue", n])
//                 })
//             })
//         }
//     }), d.fn.extend({
//         queue: function (e, t) {
//             var n = 2;
//             return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? d.queue(this[0], e) : void 0 === t ? this : this.each(function () {
//                 var n = d.queue(this, e, t);
//                 d._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && d.dequeue(this, e)
//             })
//         },
//         dequeue: function (e) {
//             return this.each(function () {
//                 d.dequeue(this, e)
//             })
//         },
//         clearQueue: function (e) {
//             return this.queue(e || "fx", [])
//         },
//         promise: function (e, t) {
//             var n, r = 1,
//                 o = d.Deferred(),
//                 i = this,
//                 a = this.length,
//                 s = function () {
//                     --r || o.resolveWith(i, [i])
//                 };
//             for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = R.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
//             return s(), o.promise(t)
//         }
//     });
//     var B = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
//         W = new RegExp("^(?:([+-])=|)(" + B + ")([a-z%]*)$", "i"),
//         z = ["Top", "Right", "Bottom", "Left"],
//         U = function (e, t) {
//             return e = t || e, "none" === d.css(e, "display") || !d.contains(e.ownerDocument, e)
//         };

//     function X(e, t, n, r) {
//         var o, i = 1,
//             a = 20,
//             s = r ? function () {
//                 return r.cur()
//             } : function () {
//                 return d.css(e, t, "")
//             },
//             u = s(),
//             c = n && n[3] || (d.cssNumber[t] ? "" : "px"),
//             l = (d.cssNumber[t] || "px" !== c && +u) && W.exec(d.css(e, t));
//         if (l && l[3] !== c) {
//             c = c || l[3], n = n || [], l = +u || 1;
//             do {
//                 l /= i = i || ".5", d.style(e, t, l + c)
//             } while (i !== (i = s() / u) && 1 !== i && --a)
//         }
//         return n && (l = +l || +u || 0, o = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = o)), o
//     }
//     var Y = /^(?:checkbox|radio)$/i,
//         G = /<([\w:-]+)/,
//         V = /^$|\/(?:java|ecma)script/i,
//         Q = {
//             option: [1, "<select multiple='multiple'>", "</select>"],
//             thead: [1, "<table>", "</table>"],
//             col: [2, "<table><colgroup>", "</colgroup></table>"],
//             tr: [2, "<table><tbody>", "</tbody></table>"],
//             td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
//             _default: [0, "", ""]
//         };

//     function J(e, t) {
//         var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
//         return void 0 === t || t && d.nodeName(e, t) ? d.merge([e], n) : n
//     }

//     function K(e, t) {
//         for (var n = 0, r = e.length; r > n; n++) R.set(e[n], "globalEval", !t || R.get(t[n], "globalEval"))
//     }
//     Q.optgroup = Q.option, Q.tbody = Q.tfoot = Q.colgroup = Q.caption = Q.thead, Q.th = Q.td;
//     var Z = /<|&#?\w+;/;

//     function ee(e, t, n, r, o) {
//         for (var i, a, s, u, c, l, p = t.createDocumentFragment(), f = [], h = 0, m = e.length; m > h; h++)
//             if ((i = e[h]) || 0 === i)
//                 if ("object" === d.type(i)) d.merge(f, i.nodeType ? [i] : i);
//                 else if (Z.test(i)) {
//             for (a = a || p.appendChild(t.createElement("div")), s = (G.exec(i) || ["", ""])[1].toLowerCase(), u = Q[s] || Q._default, a.innerHTML = u[1] + d.htmlPrefilter(i) + u[2], l = u[0]; l--;) a = a.lastChild;
//             d.merge(f, a.childNodes), (a = p.firstChild).textContent = ""
//         } else f.push(t.createTextNode(i));
//         for (p.textContent = "", h = 0; i = f[h++];)
//             if (r && d.inArray(i, r) > -1) o && o.push(i);
//             else if (c = d.contains(i.ownerDocument, i), a = J(p.appendChild(i), "script"), c && K(a), n)
//             for (l = 0; i = a[l++];) V.test(i.type || "") && n.push(i);
//         return p
//     }! function () {
//         var e = r.createDocumentFragment().appendChild(r.createElement("div")),
//             t = r.createElement("input");
//         t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), p.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
//     }();
//     var te = /^key/,
//         ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
//         re = /^([^.]*)(?:\.(.+)|)/;

//     function oe() {
//         return !0
//     }

//     function ie() {
//         return !1
//     }

//     function ae() {
//         try {
//             return r.activeElement
//         } catch (e) {}
//     }

//     function se(e, t, n, r, o, i) {
//         var a, s;
//         if ("object" == typeof t) {
//             for (s in "string" != typeof n && (r = r || n, n = void 0), t) se(e, s, n, r, t[s], i);
//             return e
//         }
//         if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = ie;
//         else if (!o) return e;
//         return 1 === i && (a = o, (o = function (e) {
//             return d().off(e), a.apply(this, arguments)
//         }).guid = a.guid || (a.guid = d.guid++)), e.each(function () {
//             d.event.add(this, t, o, r, n)
//         })
//     }
//     d.event = {
//         global: {},
//         add: function (e, t, n, r, o) {
//             var i, a, s, u, c, l, p, f, h, m, g, y = R.get(e);
//             if (y)
//                 for (n.handler && (n = (i = n).handler, o = i.selector), n.guid || (n.guid = d.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
//                         return void 0 !== d && d.event.triggered !== t.type ? d.event.dispatch.apply(e, arguments) : void 0
//                     }), c = (t = (t || "").match(D) || [""]).length; c--;) h = g = (s = re.exec(t[c]) || [])[1], m = (s[2] || "").split(".").sort(), h && (p = d.event.special[h] || {}, h = (o ? p.delegateType : p.bindType) || h, p = d.event.special[h] || {}, l = d.extend({
//                     type: h,
//                     origType: g,
//                     data: r,
//                     handler: n,
//                     guid: n.guid,
//                     selector: o,
//                     needsContext: o && d.expr.match.needsContext.test(o),
//                     namespace: m.join(".")
//                 }, i), (f = u[h]) || ((f = u[h] = []).delegateCount = 0, p.setup && !1 !== p.setup.call(e, r, m, a) || e.addEventListener && e.addEventListener(h, a)), p.add && (p.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, l) : f.push(l), d.event.global[h] = !0)
//         },
//         remove: function (e, t, n, r, o) {
//             var i, a, s, u, c, l, p, f, h, m, g, y = R.hasData(e) && R.get(e);
//             if (y && (u = y.events)) {
//                 for (c = (t = (t || "").match(D) || [""]).length; c--;)
//                     if (h = g = (s = re.exec(t[c]) || [])[1], m = (s[2] || "").split(".").sort(), h) {
//                         for (p = d.event.special[h] || {}, f = u[h = (r ? p.delegateType : p.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = f.length; i--;) l = f[i], !o && g !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (f.splice(i, 1), l.selector && f.delegateCount--, p.remove && p.remove.call(e, l));
//                         a && !f.length && (p.teardown && !1 !== p.teardown.call(e, m, y.handle) || d.removeEvent(e, h, y.handle), delete u[h])
//                     } else
//                         for (h in u) d.event.remove(e, h + t[c], n, r, !0);
//                 d.isEmptyObject(u) && R.remove(e, "handle events")
//             }
//         },
//         dispatch: function (e) {
//             e = d.event.fix(e);
//             var t, n, r, i, a, s = [],
//                 u = o.call(arguments),
//                 c = (R.get(this, "events") || {})[e.type] || [],
//                 l = d.event.special[e.type] || {};
//             if (u[0] = e, e.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
//                 for (s = d.event.handlers.call(this, e, c), t = 0;
//                     (i = s[t++]) && !e.isPropagationStopped();)
//                     for (e.currentTarget = i.elem, n = 0;
//                         (a = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(a.namespace) || (e.handleObj = a, e.data = a.data, void 0 !== (r = ((d.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, u)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
//                 return l.postDispatch && l.postDispatch.call(this, e), e.result
//             }
//         },
//         handlers: function (e, t) {
//             var n, r, o, i, a = [],
//                 s = t.delegateCount,
//                 u = e.target;
//             if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
//                 for (; u !== this; u = u.parentNode || this)
//                     if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
//                         for (r = [], n = 0; s > n; n++) void 0 === r[o = (i = t[n]).selector + " "] && (r[o] = i.needsContext ? d(o, this).index(u) > -1 : d.find(o, this, null, [u]).length), r[o] && r.push(i);
//                         r.length && a.push({
//                             elem: u,
//                             handlers: r
//                         })
//                     } return s < t.length && a.push({
//                 elem: this,
//                 handlers: t.slice(s)
//             }), a
//         },
//         props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
//         fixHooks: {},
//         keyHooks: {
//             props: "char charCode key keyCode".split(" "),
//             filter: function (e, t) {
//                 return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
//             }
//         },
//         mouseHooks: {
//             props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
//             filter: function (e, t) {
//                 var n, o, i, a = t.button;
//                 return null == e.pageX && null != t.clientX && (o = (n = e.target.ownerDocument || r).documentElement, i = n.body, e.pageX = t.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
//             }
//         },
//         fix: function (e) {
//             if (e[d.expando]) return e;
//             var t, n, o, i = e.type,
//                 a = e,
//                 s = this.fixHooks[i];
//             for (s || (this.fixHooks[i] = s = ne.test(i) ? this.mouseHooks : te.test(i) ? this.keyHooks : {}), o = s.props ? this.props.concat(s.props) : this.props, e = new d.Event(a), t = o.length; t--;) e[n = o[t]] = a[n];
//             return e.target || (e.target = r), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, a) : e
//         },
//         special: {
//             load: {
//                 noBubble: !0
//             },
//             focus: {
//                 trigger: function () {
//                     return this !== ae() && this.focus ? (this.focus(), !1) : void 0
//                 },
//                 delegateType: "focusin"
//             },
//             blur: {
//                 trigger: function () {
//                     return this === ae() && this.blur ? (this.blur(), !1) : void 0
//                 },
//                 delegateType: "focusout"
//             },
//             click: {
//                 trigger: function () {
//                     return "checkbox" === this.type && this.click && d.nodeName(this, "input") ? (this.click(), !1) : void 0
//                 },
//                 _default: function (e) {
//                     return d.nodeName(e.target, "a")
//                 }
//             },
//             beforeunload: {
//                 postDispatch: function (e) {
//                     void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
//                 }
//             }
//         }
//     }, d.removeEvent = function (e, t, n) {
//         e.removeEventListener && e.removeEventListener(t, n)
//     }, d.Event = function (e, t) {
//         return this instanceof d.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? oe : ie) : this.type = e, t && d.extend(this, t), this.timeStamp = e && e.timeStamp || d.now(), void(this[d.expando] = !0)) : new d.Event(e, t)
//     }, d.Event.prototype = {
//         constructor: d.Event,
//         isDefaultPrevented: ie,
//         isPropagationStopped: ie,
//         isImmediatePropagationStopped: ie,
//         isSimulated: !1,
//         preventDefault: function () {
//             var e = this.originalEvent;
//             this.isDefaultPrevented = oe, e && !this.isSimulated && e.preventDefault()
//         },
//         stopPropagation: function () {
//             var e = this.originalEvent;
//             this.isPropagationStopped = oe, e && !this.isSimulated && e.stopPropagation()
//         },
//         stopImmediatePropagation: function () {
//             var e = this.originalEvent;
//             this.isImmediatePropagationStopped = oe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
//         }
//     }, d.each({
//         mouseenter: "mouseover",
//         mouseleave: "mouseout",
//         pointerenter: "pointerover",
//         pointerleave: "pointerout"
//     }, function (e, t) {
//         d.event.special[e] = {
//             delegateType: t,
//             bindType: t,
//             handle: function (e) {
//                 var n, r = e.relatedTarget,
//                     o = e.handleObj;
//                 return r && (r === this || d.contains(this, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
//             }
//         }
//     }), d.fn.extend({
//         on: function (e, t, n, r) {
//             return se(this, e, t, n, r)
//         },
//         one: function (e, t, n, r) {
//             return se(this, e, t, n, r, 1)
//         },
//         off: function (e, t, n) {
//             var r, o;
//             if (e && e.preventDefault && e.handleObj) return r = e.handleObj, d(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
//             if ("object" == typeof e) {
//                 for (o in e) this.off(o, t, e[o]);
//                 return this
//             }
//             return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ie), this.each(function () {
//                 d.event.remove(this, e, n, t)
//             })
//         }
//     });
//     var ue = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
//         ce = /<script|<style|<link/i,
//         le = /checked\s*(?:[^=]|=\s*.checked.)/i,
//         pe = /^true\/(.*)/,
//         fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

//     function de(e, t) {
//         return d.nodeName(e, "table") && d.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
//     }

//     function he(e) {
//         return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
//     }

//     function me(e) {
//         var t = pe.exec(e.type);
//         return t ? e.type = t[1] : e.removeAttribute("type"), e
//     }

//     function ge(e, t) {
//         var n, r, o, i, a, s, u, c;
//         if (1 === t.nodeType) {
//             if (R.hasData(e) && (i = R.access(e), a = R.set(t, i), c = i.events))
//                 for (o in delete a.handle, a.events = {}, c)
//                     for (n = 0, r = c[o].length; r > n; n++) d.event.add(t, o, c[o][n]);
//             F.hasData(e) && (s = F.access(e), u = d.extend({}, s), F.set(t, u))
//         }
//     }

//     function ye(e, t) {
//         var n = t.nodeName.toLowerCase();
//         "input" === n && Y.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
//     }

//     function ve(e, t, n, r) {
//         t = i.apply([], t);
//         var o, a, s, u, c, l, f = 0,
//             h = e.length,
//             m = h - 1,
//             g = t[0],
//             y = d.isFunction(g);
//         if (y || h > 1 && "string" == typeof g && !p.checkClone && le.test(g)) return e.each(function (o) {
//             var i = e.eq(o);
//             y && (t[0] = g.call(this, o, i.html())), ve(i, t, n, r)
//         });
//         if (h && (a = (o = ee(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = a), a || r)) {
//             for (u = (s = d.map(J(o, "script"), he)).length; h > f; f++) c = o, f !== m && (c = d.clone(c, !0, !0), u && d.merge(s, J(c, "script"))), n.call(e[f], c, f);
//             if (u)
//                 for (l = s[s.length - 1].ownerDocument, d.map(s, me), f = 0; u > f; f++) c = s[f], V.test(c.type || "") && !R.access(c, "globalEval") && d.contains(l, c) && (c.src ? d._evalUrl && d._evalUrl(c.src) : d.globalEval(c.textContent.replace(fe, "")))
//         }
//         return e
//     }

//     function xe(e, t, n) {
//         for (var r, o = t ? d.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || d.cleanData(J(r)), r.parentNode && (n && d.contains(r.ownerDocument, r) && K(J(r, "script")), r.parentNode.removeChild(r));
//         return e
//     }
//     d.extend({
//         htmlPrefilter: function (e) {
//             return e.replace(ue, "<$1></$2>")
//         },
//         clone: function (e, t, n) {
//             var r, o, i, a, s = e.cloneNode(!0),
//                 u = d.contains(e.ownerDocument, e);
//             if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || d.isXMLDoc(e)))
//                 for (a = J(s), r = 0, o = (i = J(e)).length; o > r; r++) ye(i[r], a[r]);
//             if (t)
//                 if (n)
//                     for (i = i || J(e), a = a || J(s), r = 0, o = i.length; o > r; r++) ge(i[r], a[r]);
//                 else ge(e, s);
//             return (a = J(s, "script")).length > 0 && K(a, !u && J(e, "script")), s
//         },
//         cleanData: function (e) {
//             for (var t, n, r, o = d.event.special, i = 0; void 0 !== (n = e[i]); i++)
//                 if (H(n)) {
//                     if (t = n[R.expando]) {
//                         if (t.events)
//                             for (r in t.events) o[r] ? d.event.remove(n, r) : d.removeEvent(n, r, t.handle);
//                         n[R.expando] = void 0
//                     }
//                     n[F.expando] && (n[F.expando] = void 0)
//                 }
//         }
//     }), d.fn.extend({
//         domManip: ve,
//         detach: function (e) {
//             return xe(this, e, !0)
//         },
//         remove: function (e) {
//             return xe(this, e)
//         },
//         text: function (e) {
//             return L(this, function (e) {
//                 return void 0 === e ? d.text(this) : this.empty().each(function () {
//                     1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
//                 })
//             }, null, e, arguments.length)
//         },
//         append: function () {
//             return ve(this, arguments, function (e) {
//                 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || de(this, e).appendChild(e)
//             })
//         },
//         prepend: function () {
//             return ve(this, arguments, function (e) {
//                 if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
//                     var t = de(this, e);
//                     t.insertBefore(e, t.firstChild)
//                 }
//             })
//         },
//         before: function () {
//             return ve(this, arguments, function (e) {
//                 this.parentNode && this.parentNode.insertBefore(e, this)
//             })
//         },
//         after: function () {
//             return ve(this, arguments, function (e) {
//                 this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
//             })
//         },
//         empty: function () {
//             for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (d.cleanData(J(e, !1)), e.textContent = "");
//             return this
//         },
//         clone: function (e, t) {
//             return e = null != e && e, t = null == t ? e : t, this.map(function () {
//                 return d.clone(this, e, t)
//             })
//         },
//         html: function (e) {
//             return L(this, function (e) {
//                 var t = this[0] || {},
//                     n = 0,
//                     r = this.length;
//                 if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
//                 if ("string" == typeof e && !ce.test(e) && !Q[(G.exec(e) || ["", ""])[1].toLowerCase()]) {
//                     e = d.htmlPrefilter(e);
//                     try {
//                         for (; r > n; n++) 1 === (t = this[n] || {}).nodeType && (d.cleanData(J(t, !1)), t.innerHTML = e);
//                         t = 0
//                     } catch (e) {}
//                 }
//                 t && this.empty().append(e)
//             }, null, e, arguments.length)
//         },
//         replaceWith: function () {
//             var e = [];
//             return ve(this, arguments, function (t) {
//                 var n = this.parentNode;
//                 d.inArray(this, e) < 0 && (d.cleanData(J(this)), n && n.replaceChild(t, this))
//             }, e)
//         }
//     }), d.each({
//         appendTo: "append",
//         prependTo: "prepend",
//         insertBefore: "before",
//         insertAfter: "after",
//         replaceAll: "replaceWith"
//     }, function (e, t) {
//         d.fn[e] = function (e) {
//             for (var n, r = [], o = d(e), i = o.length - 1, s = 0; i >= s; s++) n = s === i ? this : this.clone(!0), d(o[s])[t](n), a.apply(r, n.get());
//             return this.pushStack(r)
//         }
//     });
//     var be, we = {
//         HTML: "block",
//         BODY: "block"
//     };

//     function _e(e, t) {
//         var n = d(t.createElement(e)).appendTo(t.body),
//             r = d.css(n[0], "display");
//         return n.detach(), r
//     }

//     function $e(e) {
//         var t = r,
//             n = we[e];
//         return n || ("none" !== (n = _e(e, t)) && n || ((t = (be = (be || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = _e(e, t), be.detach()), we[e] = n), n
//     }
//     var Te = /^margin/,
//         Ce = new RegExp("^(" + B + ")(?!px)[a-z%]+$", "i"),
//         ke = function (t) {
//             var n = t.ownerDocument.defaultView;
//             return n && n.opener || (n = e), n.getComputedStyle(t)
//         },
//         Ee = function (e, t, n, r) {
//             var o, i, a = {};
//             for (i in t) a[i] = e.style[i], e.style[i] = t[i];
//             for (i in o = n.apply(e, r || []), t) e.style[i] = a[i];
//             return o
//         },
//         Ne = r.documentElement;

//     function Se(e, t, n) {
//         var r, o, i, a, s = e.style;
//         return "" !== (a = (n = n || ke(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== a || d.contains(e.ownerDocument, e) || (a = d.style(e, t)), n && !p.pixelMarginRight() && Ce.test(a) && Te.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i), void 0 !== a ? a + "" : a
//     }

//     function je(e, t) {
//         return {
//             get: function () {
//                 return e() ? void delete this.get : (this.get = t).apply(this, arguments)
//             }
//         }
//     }! function () {
//         var t, n, o, i, a = r.createElement("div"),
//             s = r.createElement("div");
//         if (s.style) {
//             function u() {
//                 s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ne.appendChild(a);
//                 var r = e.getComputedStyle(s);
//                 t = "1%" !== r.top, i = "2px" === r.marginLeft, n = "4px" === r.width, s.style.marginRight = "50%", o = "4px" === r.marginRight, Ne.removeChild(a)
//             }
//             s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), d.extend(p, {
//                 pixelPosition: function () {
//                     return u(), t
//                 },
//                 boxSizingReliable: function () {
//                     return null == n && u(), n
//                 },
//                 pixelMarginRight: function () {
//                     return null == n && u(), o
//                 },
//                 reliableMarginLeft: function () {
//                     return null == n && u(), i
//                 },
//                 reliableMarginRight: function () {
//                     var t, n = s.appendChild(r.createElement("div"));
//                     return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", Ne.appendChild(a), t = !parseFloat(e.getComputedStyle(n).marginRight), Ne.removeChild(a), s.removeChild(n), t
//                 }
//             })
//         }
//     }();
//     var Ae = /^(none|table(?!-c[ea]).+)/,
//         De = {
//             position: "absolute",
//             visibility: "hidden",
//             display: "block"
//         },
//         qe = {
//             letterSpacing: "0",
//             fontWeight: "400"
//         },
//         Le = ["Webkit", "O", "Moz", "ms"],
//         He = r.createElement("div").style;

//     function Oe(e) {
//         if (e in He) return e;
//         for (var t = e[0].toUpperCase() + e.slice(1), n = Le.length; n--;)
//             if ((e = Le[n] + t) in He) return e
//     }

//     function Re(e, t, n) {
//         var r = W.exec(t);
//         return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
//     }

//     function Fe(e, t, n, r, o) {
//         for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > i; i += 2) "margin" === n && (a += d.css(e, n + z[i], !0, o)), r ? ("content" === n && (a -= d.css(e, "padding" + z[i], !0, o)), "margin" !== n && (a -= d.css(e, "border" + z[i] + "Width", !0, o))) : (a += d.css(e, "padding" + z[i], !0, o), "padding" !== n && (a += d.css(e, "border" + z[i] + "Width", !0, o)));
//         return a
//     }

//     function Pe(e, t, n) {
//         var r = !0,
//             o = "width" === t ? e.offsetWidth : e.offsetHeight,
//             i = ke(e),
//             a = "border-box" === d.css(e, "boxSizing", !1, i);
//         if (0 >= o || null == o) {
//             if ((0 > (o = Se(e, t, i)) || null == o) && (o = e.style[t]), Ce.test(o)) return o;
//             r = a && (p.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
//         }
//         return o + Fe(e, t, n || (a ? "border" : "content"), r, i) + "px"
//     }

//     function Me(e, t) {
//         for (var n, r, o, i = [], a = 0, s = e.length; s > a; a++)(r = e[a]).style && (i[a] = R.get(r, "olddisplay"), n = r.style.display, t ? (i[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && U(r) && (i[a] = R.access(r, "olddisplay", $e(r.nodeName)))) : (o = U(r), "none" === n && o || R.set(r, "olddisplay", o ? n : d.css(r, "display"))));
//         for (a = 0; s > a; a++)(r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[a] || "" : "none"));
//         return e
//     }

//     function Ie(e, t, n, r, o) {
//         return new Ie.prototype.init(e, t, n, r, o)
//     }
//     d.extend({
//         cssHooks: {
//             opacity: {
//                 get: function (e, t) {
//                     if (t) {
//                         var n = Se(e, "opacity");
//                         return "" === n ? "1" : n
//                     }
//                 }
//             }
//         },
//         cssNumber: {
//             animationIterationCount: !0,
//             columnCount: !0,
//             fillOpacity: !0,
//             flexGrow: !0,
//             flexShrink: !0,
//             fontWeight: !0,
//             lineHeight: !0,
//             opacity: !0,
//             order: !0,
//             orphans: !0,
//             widows: !0,
//             zIndex: !0,
//             zoom: !0
//         },
//         cssProps: {
//             float: "cssFloat"
//         },
//         style: function (e, t, n, r) {
//             if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
//                 var o, i, a, s = d.camelCase(t),
//                     u = e.style;
//                 return t = d.cssProps[s] || (d.cssProps[s] = Oe(s) || s), a = d.cssHooks[t] || d.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : u[t] : ("string" === (i = typeof n) && (o = W.exec(n)) && o[1] && (n = X(e, t, o), i = "number"), void(null != n && n == n && ("number" === i && (n += o && o[3] || (d.cssNumber[s] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n))))
//             }
//         },
//         css: function (e, t, n, r) {
//             var o, i, a, s = d.camelCase(t);
//             return t = d.cssProps[s] || (d.cssProps[s] = Oe(s) || s), (a = d.cssHooks[t] || d.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Se(e, t, r)), "normal" === o && t in qe && (o = qe[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
//         }
//     }), d.each(["height", "width"], function (e, t) {
//         d.cssHooks[t] = {
//             get: function (e, n, r) {
//                 return n ? Ae.test(d.css(e, "display")) && 0 === e.offsetWidth ? Ee(e, De, function () {
//                     return Pe(e, t, r)
//                 }) : Pe(e, t, r) : void 0
//             },
//             set: function (e, n, r) {
//                 var o, i = r && ke(e),
//                     a = r && Fe(e, t, r, "border-box" === d.css(e, "boxSizing", !1, i), i);
//                 return a && (o = W.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = d.css(e, t)), Re(0, n, a)
//             }
//         }
//     }), d.cssHooks.marginLeft = je(p.reliableMarginLeft, function (e, t) {
//         return t ? (parseFloat(Se(e, "marginLeft")) || e.getBoundingClientRect().left - Ee(e, {
//             marginLeft: 0
//         }, function () {
//             return e.getBoundingClientRect().left
//         })) + "px" : void 0
//     }), d.cssHooks.marginRight = je(p.reliableMarginRight, function (e, t) {
//         return t ? Ee(e, {
//             display: "inline-block"
//         }, Se, [e, "marginRight"]) : void 0
//     }), d.each({
//         margin: "",
//         padding: "",
//         border: "Width"
//     }, function (e, t) {
//         d.cssHooks[e + t] = {
//             expand: function (n) {
//                 for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) o[e + z[r] + t] = i[r] || i[r - 2] || i[0];
//                 return o
//             }
//         }, Te.test(e) || (d.cssHooks[e + t].set = Re)
//     }), d.fn.extend({
//         css: function (e, t) {
//             return L(this, function (e, t, n) {
//                 var r, o, i = {},
//                     a = 0;
//                 if (d.isArray(t)) {
//                     for (r = ke(e), o = t.length; o > a; a++) i[t[a]] = d.css(e, t[a], !1, r);
//                     return i
//                 }
//                 return void 0 !== n ? d.style(e, t, n) : d.css(e, t)
//             }, e, t, arguments.length > 1)
//         },
//         show: function () {
//             return Me(this, !0)
//         },
//         hide: function () {
//             return Me(this)
//         },
//         toggle: function (e) {
//             return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
//                 U(this) ? d(this).show() : d(this).hide()
//             })
//         }
//     }), d.Tween = Ie, Ie.prototype = {
//         constructor: Ie,
//         init: function (e, t, n, r, o, i) {
//             this.elem = e, this.prop = n, this.easing = o || d.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (d.cssNumber[n] ? "" : "px")
//         },
//         cur: function () {
//             var e = Ie.propHooks[this.prop];
//             return e && e.get ? e.get(this) : Ie.propHooks._default.get(this)
//         },
//         run: function (e) {
//             var t, n = Ie.propHooks[this.prop];
//             return this.options.duration ? this.pos = t = d.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ie.propHooks._default.set(this), this
//         }
//     }, Ie.prototype.init.prototype = Ie.prototype, Ie.propHooks = {
//         _default: {
//             get: function (e) {
//                 var t;
//                 return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = d.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
//             },
//             set: function (e) {
//                 d.fx.step[e.prop] ? d.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[d.cssProps[e.prop]] && !d.cssHooks[e.prop] ? e.elem[e.prop] = e.now : d.style(e.elem, e.prop, e.now + e.unit)
//             }
//         }
//     }, Ie.propHooks.scrollTop = Ie.propHooks.scrollLeft = {
//         set: function (e) {
//             e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
//         }
//     }, d.easing = {
//         linear: function (e) {
//             return e
//         },
//         swing: function (e) {
//             return .5 - Math.cos(e * Math.PI) / 2
//         },
//         _default: "swing"
//     }, d.fx = Ie.prototype.init, d.fx.step = {};
//     var Be, We, ze = /^(?:toggle|show|hide)$/,
//         Ue = /queueHooks$/;

//     function Xe() {
//         return e.setTimeout(function () {
//             Be = void 0
//         }), Be = d.now()
//     }

//     function Ye(e, t) {
//         var n, r = 0,
//             o = {
//                 height: e
//             };
//         for (t = t ? 1 : 0; 4 > r; r += 2 - t) o["margin" + (n = z[r])] = o["padding" + n] = e;
//         return t && (o.opacity = o.width = e), o
//     }

//     function Ge(e, t, n) {
//         for (var r, o = (Ve.tweeners[t] || []).concat(Ve.tweeners["*"]), i = 0, a = o.length; a > i; i++)
//             if (r = o[i].call(n, t, e)) return r
//     }

//     function Ve(e, t, n) {
//         var r, o, i = 0,
//             a = Ve.prefilters.length,
//             s = d.Deferred().always(function () {
//                 delete u.elem
//             }),
//             u = function () {
//                 if (o) return !1;
//                 for (var t = Be || Xe(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), i = 0, a = c.tweens.length; a > i; i++) c.tweens[i].run(r);
//                 return s.notifyWith(e, [c, r, n]), 1 > r && a ? n : (s.resolveWith(e, [c]), !1)
//             },
//             c = s.promise({
//                 elem: e,
//                 props: d.extend({}, t),
//                 opts: d.extend(!0, {
//                     specialEasing: {},
//                     easing: d.easing._default
//                 }, n),
//                 originalProperties: t,
//                 originalOptions: n,
//                 startTime: Be || Xe(),
//                 duration: n.duration,
//                 tweens: [],
//                 createTween: function (t, n) {
//                     var r = d.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
//                     return c.tweens.push(r), r
//                 },
//                 stop: function (t) {
//                     var n = 0,
//                         r = t ? c.tweens.length : 0;
//                     if (o) return this;
//                     for (o = !0; r > n; n++) c.tweens[n].run(1);
//                     return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
//                 }
//             }),
//             l = c.props;
//         for (function (e, t) {
//                 var n, r, o, i, a;
//                 for (n in e)
//                     if (o = t[r = d.camelCase(n)], i = e[n], d.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = d.cssHooks[r]) && "expand" in a)
//                         for (n in i = a.expand(i), delete e[r], i) n in e || (e[n] = i[n], t[n] = o);
//                     else t[r] = o
//             }(l, c.opts.specialEasing); a > i; i++)
//             if (r = Ve.prefilters[i].call(c, e, l, c.opts)) return d.isFunction(r.stop) && (d._queueHooks(c.elem, c.opts.queue).stop = d.proxy(r.stop, r)), r;
//         return d.map(l, Ge, c), d.isFunction(c.opts.start) && c.opts.start.call(e, c), d.fx.timer(d.extend(u, {
//             elem: e,
//             anim: c,
//             queue: c.opts.queue
//         })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
//     }
//     d.Animation = d.extend(Ve, {
//             tweeners: {
//                 "*": [function (e, t) {
//                     var n = this.createTween(e, t);
//                     return X(n.elem, e, W.exec(t), n), n
//                 }]
//             },
//             tweener: function (e, t) {
//                 d.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(D);
//                 for (var n, r = 0, o = e.length; o > r; r++) n = e[r], Ve.tweeners[n] = Ve.tweeners[n] || [], Ve.tweeners[n].unshift(t)
//             },
//             prefilters: [function (e, t, n) {
//                 var r, o, i, a, s, u, c, l = this,
//                     p = {},
//                     f = e.style,
//                     h = e.nodeType && U(e),
//                     m = R.get(e, "fxshow");
//                 for (r in n.queue || (null == (s = d._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
//                         s.unqueued || u()
//                     }), s.unqueued++, l.always(function () {
//                         l.always(function () {
//                             s.unqueued--, d.queue(e, "fx").length || s.empty.fire()
//                         })
//                     })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (c = d.css(e, "display")) ? R.get(e, "olddisplay") || $e(e.nodeName) : c) && "none" === d.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", l.always(function () {
//                         f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
//                     })), t)
//                     if (o = t[r], ze.exec(o)) {
//                         if (delete t[r], i = i || "toggle" === o, o === (h ? "hide" : "show")) {
//                             if ("show" !== o || !m || void 0 === m[r]) continue;
//                             h = !0
//                         }
//                         p[r] = m && m[r] || d.style(e, r)
//                     } else c = void 0;
//                 if (d.isEmptyObject(p)) "inline" === ("none" === c ? $e(e.nodeName) : c) && (f.display = c);
//                 else
//                     for (r in m ? "hidden" in m && (h = m.hidden) : m = R.access(e, "fxshow", {}), i && (m.hidden = !h), h ? d(e).show() : l.done(function () {
//                             d(e).hide()
//                         }), l.done(function () {
//                             var t;
//                             for (t in R.remove(e, "fxshow"), p) d.style(e, t, p[t])
//                         }), p) a = Ge(h ? m[r] : 0, r, l), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
//             }],
//             prefilter: function (e, t) {
//                 t ? Ve.prefilters.unshift(e) : Ve.prefilters.push(e)
//             }
//         }), d.speed = function (e, t, n) {
//             var r = e && "object" == typeof e ? d.extend({}, e) : {
//                 complete: n || !n && t || d.isFunction(e) && e,
//                 duration: e,
//                 easing: n && t || t && !d.isFunction(t) && t
//             };
//             return r.duration = d.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in d.fx.speeds ? d.fx.speeds[r.duration] : d.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
//                 d.isFunction(r.old) && r.old.call(this), r.queue && d.dequeue(this, r.queue)
//             }, r
//         }, d.fn.extend({
//             fadeTo: function (e, t, n, r) {
//                 return this.filter(U).css("opacity", 0).show().end().animate({
//                     opacity: t
//                 }, e, n, r)
//             },
//             animate: function (e, t, n, r) {
//                 var o = d.isEmptyObject(e),
//                     i = d.speed(t, n, r),
//                     a = function () {
//                         var t = Ve(this, d.extend({}, e), i);
//                         (o || R.get(this, "finish")) && t.stop(!0)
//                     };
//                 return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
//             },
//             stop: function (e, t, n) {
//                 var r = function (e) {
//                     var t = e.stop;
//                     delete e.stop, t(n)
//                 };
//                 return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
//                     var t = !0,
//                         o = null != e && e + "queueHooks",
//                         i = d.timers,
//                         a = R.get(this);
//                     if (o) a[o] && a[o].stop && r(a[o]);
//                     else
//                         for (o in a) a[o] && a[o].stop && Ue.test(o) && r(a[o]);
//                     for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
//                     !t && n || d.dequeue(this, e)
//                 })
//             },
//             finish: function (e) {
//                 return !1 !== e && (e = e || "fx"), this.each(function () {
//                     var t, n = R.get(this),
//                         r = n[e + "queue"],
//                         o = n[e + "queueHooks"],
//                         i = d.timers,
//                         a = r ? r.length : 0;
//                     for (n.finish = !0, d.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
//                     for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
//                     delete n.finish
//                 })
//             }
//         }), d.each(["toggle", "show", "hide"], function (e, t) {
//             var n = d.fn[t];
//             d.fn[t] = function (e, r, o) {
//                 return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Ye(t, !0), e, r, o)
//             }
//         }), d.each({
//             slideDown: Ye("show"),
//             slideUp: Ye("hide"),
//             slideToggle: Ye("toggle"),
//             fadeIn: {
//                 opacity: "show"
//             },
//             fadeOut: {
//                 opacity: "hide"
//             },
//             fadeToggle: {
//                 opacity: "toggle"
//             }
//         }, function (e, t) {
//             d.fn[e] = function (e, n, r) {
//                 return this.animate(t, e, n, r)
//             }
//         }), d.timers = [], d.fx.tick = function () {
//             var e, t = 0,
//                 n = d.timers;
//             for (Be = d.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
//             n.length || d.fx.stop(), Be = void 0
//         }, d.fx.timer = function (e) {
//             d.timers.push(e), e() ? d.fx.start() : d.timers.pop()
//         }, d.fx.interval = 13, d.fx.start = function () {
//             We || (We = e.setInterval(d.fx.tick, d.fx.interval))
//         }, d.fx.stop = function () {
//             e.clearInterval(We), We = null
//         }, d.fx.speeds = {
//             slow: 600,
//             fast: 200,
//             _default: 400
//         }, d.fn.delay = function (t, n) {
//             return t = d.fx && d.fx.speeds[t] || t, n = n || "fx", this.queue(n, function (n, r) {
//                 var o = e.setTimeout(n, t);
//                 r.stop = function () {
//                     e.clearTimeout(o)
//                 }
//             })
//         },
//         function () {
//             var e = r.createElement("input"),
//                 t = r.createElement("select"),
//                 n = t.appendChild(r.createElement("option"));
//             e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = n.selected, t.disabled = !0, p.optDisabled = !n.disabled, (e = r.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value
//         }();
//     var Qe, Je = d.expr.attrHandle;
//     d.fn.extend({
//         attr: function (e, t) {
//             return L(this, d.attr, e, t, arguments.length > 1)
//         },
//         removeAttr: function (e) {
//             return this.each(function () {
//                 d.removeAttr(this, e)
//             })
//         }
//     }), d.extend({
//         attr: function (e, t, n) {
//             var r, o, i = e.nodeType;
//             if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? d.prop(e, t, n) : (1 === i && d.isXMLDoc(e) || (t = t.toLowerCase(), o = d.attrHooks[t] || (d.expr.match.bool.test(t) ? Qe : void 0)), void 0 !== n ? null === n ? void d.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = d.find.attr(e, t)) ? void 0 : r)
//         },
//         attrHooks: {
//             type: {
//                 set: function (e, t) {
//                     if (!p.radioValue && "radio" === t && d.nodeName(e, "input")) {
//                         var n = e.value;
//                         return e.setAttribute("type", t), n && (e.value = n), t
//                     }
//                 }
//             }
//         },
//         removeAttr: function (e, t) {
//             var n, r, o = 0,
//                 i = t && t.match(D);
//             if (i && 1 === e.nodeType)
//                 for (; n = i[o++];) r = d.propFix[n] || n, d.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
//         }
//     }), Qe = {
//         set: function (e, t, n) {
//             return !1 === t ? d.removeAttr(e, n) : e.setAttribute(n, n), n
//         }
//     }, d.each(d.expr.match.bool.source.match(/\w+/g), function (e, t) {
//         var n = Je[t] || d.find.attr;
//         Je[t] = function (e, t, r) {
//             var o, i;
//             return r || (i = Je[t], Je[t] = o, o = null != n(e, t, r) ? t.toLowerCase() : null, Je[t] = i), o
//         }
//     });
//     var Ke = /^(?:input|select|textarea|button)$/i,
//         Ze = /^(?:a|area)$/i;
//     d.fn.extend({
//         prop: function (e, t) {
//             return L(this, d.prop, e, t, arguments.length > 1)
//         },
//         removeProp: function (e) {
//             return this.each(function () {
//                 delete this[d.propFix[e] || e]
//             })
//         }
//     }), d.extend({
//         prop: function (e, t, n) {
//             var r, o, i = e.nodeType;
//             if (3 !== i && 8 !== i && 2 !== i) return 1 === i && d.isXMLDoc(e) || (t = d.propFix[t] || t, o = d.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
//         },
//         propHooks: {
//             tabIndex: {
//                 get: function (e) {
//                     var t = d.find.attr(e, "tabindex");
//                     return t ? parseInt(t, 10) : Ke.test(e.nodeName) || Ze.test(e.nodeName) && e.href ? 0 : -1
//                 }
//             }
//         },
//         propFix: {
//             for: "htmlFor",
//             class: "className"
//         }
//     }), p.optSelected || (d.propHooks.selected = {
//         get: function (e) {
//             var t = e.parentNode;
//             return t && t.parentNode && t.parentNode.selectedIndex, null
//         },
//         set: function (e) {
//             var t = e.parentNode;
//             t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
//         }
//     }), d.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
//         d.propFix[this.toLowerCase()] = this
//     });
//     var et = /[\t\r\n\f]/g;

//     function tt(e) {
//         return e.getAttribute && e.getAttribute("class") || ""
//     }
//     d.fn.extend({
//         addClass: function (e) {
//             var t, n, r, o, i, a, s, u = 0;
//             if (d.isFunction(e)) return this.each(function (t) {
//                 d(this).addClass(e.call(this, t, tt(this)))
//             });
//             if ("string" == typeof e && e)
//                 for (t = e.match(D) || []; n = this[u++];)
//                     if (o = tt(n), r = 1 === n.nodeType && (" " + o + " ").replace(et, " ")) {
//                         for (a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
//                         o !== (s = d.trim(r)) && n.setAttribute("class", s)
//                     } return this
//         },
//         removeClass: function (e) {
//             var t, n, r, o, i, a, s, u = 0;
//             if (d.isFunction(e)) return this.each(function (t) {
//                 d(this).removeClass(e.call(this, t, tt(this)))
//             });
//             if (!arguments.length) return this.attr("class", "");
//             if ("string" == typeof e && e)
//                 for (t = e.match(D) || []; n = this[u++];)
//                     if (o = tt(n), r = 1 === n.nodeType && (" " + o + " ").replace(et, " ")) {
//                         for (a = 0; i = t[a++];)
//                             for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
//                         o !== (s = d.trim(r)) && n.setAttribute("class", s)
//                     } return this
//         },
//         toggleClass: function (e, t) {
//             var n = typeof e;
//             return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : d.isFunction(e) ? this.each(function (n) {
//                 d(this).toggleClass(e.call(this, n, tt(this), t), t)
//             }) : this.each(function () {
//                 var t, r, o, i;
//                 if ("string" === n)
//                     for (r = 0, o = d(this), i = e.match(D) || []; t = i[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
//                 else void 0 !== e && "boolean" !== n || ((t = tt(this)) && R.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : R.get(this, "__className__") || ""))
//             })
//         },
//         hasClass: function (e) {
//             var t, n, r = 0;
//             for (t = " " + e + " "; n = this[r++];)
//                 if (1 === n.nodeType && (" " + tt(n) + " ").replace(et, " ").indexOf(t) > -1) return !0;
//             return !1
//         }
//     });
//     var nt = /\r/g,
//         rt = /[\x20\t\r\n\f]+/g;
//     d.fn.extend({
//         val: function (e) {
//             var t, n, r, o = this[0];
//             return arguments.length ? (r = d.isFunction(e), this.each(function (n) {
//                 var o;
//                 1 === this.nodeType && (null == (o = r ? e.call(this, n, d(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : d.isArray(o) && (o = d.map(o, function (e) {
//                     return null == e ? "" : e + ""
//                 })), (t = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
//             })) : o ? (t = d.valHooks[o.type] || d.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(nt, "") : null == n ? "" : n : void 0
//         }
//     }), d.extend({
//         valHooks: {
//             option: {
//                 get: function (e) {
//                     var t = d.find.attr(e, "value");
//                     return null != t ? t : d.trim(d.text(e)).replace(rt, " ")
//                 }
//             },
//             select: {
//                 get: function (e) {
//                     for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, a = i ? null : [], s = i ? o + 1 : r.length, u = 0 > o ? s : i ? o : 0; s > u; u++)
//                         if (((n = r[u]).selected || u === o) && (p.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !d.nodeName(n.parentNode, "optgroup"))) {
//                             if (t = d(n).val(), i) return t;
//                             a.push(t)
//                         } return a
//                 },
//                 set: function (e, t) {
//                     for (var n, r, o = e.options, i = d.makeArray(t), a = o.length; a--;)((r = o[a]).selected = d.inArray(d.valHooks.option.get(r), i) > -1) && (n = !0);
//                     return n || (e.selectedIndex = -1), i
//                 }
//             }
//         }
//     }), d.each(["radio", "checkbox"], function () {
//         d.valHooks[this] = {
//             set: function (e, t) {
//                 return d.isArray(t) ? e.checked = d.inArray(d(e).val(), t) > -1 : void 0
//             }
//         }, p.checkOn || (d.valHooks[this].get = function (e) {
//             return null === e.getAttribute("value") ? "on" : e.value
//         })
//     });
//     var ot = /^(?:focusinfocus|focusoutblur)$/;
//     d.extend(d.event, {
//         trigger: function (t, n, o, i) {
//             var a, s, u, c, p, f, h, m = [o || r],
//                 g = l.call(t, "type") ? t.type : t,
//                 y = l.call(t, "namespace") ? t.namespace.split(".") : [];
//             if (s = u = o = o || r, 3 !== o.nodeType && 8 !== o.nodeType && !ot.test(g + d.event.triggered) && (g.indexOf(".") > -1 && (y = g.split("."), g = y.shift(), y.sort()), p = g.indexOf(":") < 0 && "on" + g, (t = t[d.expando] ? t : new d.Event(g, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), n = null == n ? [t] : d.makeArray(n, [t]), h = d.event.special[g] || {}, i || !h.trigger || !1 !== h.trigger.apply(o, n))) {
//                 if (!i && !h.noBubble && !d.isWindow(o)) {
//                     for (c = h.delegateType || g, ot.test(c + g) || (s = s.parentNode); s; s = s.parentNode) m.push(s), u = s;
//                     u === (o.ownerDocument || r) && m.push(u.defaultView || u.parentWindow || e)
//                 }
//                 for (a = 0;
//                     (s = m[a++]) && !t.isPropagationStopped();) t.type = a > 1 ? c : h.bindType || g, (f = (R.get(s, "events") || {})[t.type] && R.get(s, "handle")) && f.apply(s, n), (f = p && s[p]) && f.apply && H(s) && (t.result = f.apply(s, n), !1 === t.result && t.preventDefault());
//                 return t.type = g, i || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(m.pop(), n) || !H(o) || p && d.isFunction(o[g]) && !d.isWindow(o) && ((u = o[p]) && (o[p] = null), d.event.triggered = g, o[g](), d.event.triggered = void 0, u && (o[p] = u)), t.result
//             }
//         },
//         simulate: function (e, t, n) {
//             var r = d.extend(new d.Event, n, {
//                 type: e,
//                 isSimulated: !0
//             });
//             d.event.trigger(r, null, t)
//         }
//     }), d.fn.extend({
//         trigger: function (e, t) {
//             return this.each(function () {
//                 d.event.trigger(e, t, this)
//             })
//         },
//         triggerHandler: function (e, t) {
//             var n = this[0];
//             return n ? d.event.trigger(e, t, n, !0) : void 0
//         }
//     }), d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
//         d.fn[t] = function (e, n) {
//             return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
//         }
//     }), d.fn.extend({
//         hover: function (e, t) {
//             return this.mouseenter(e).mouseleave(t || e)
//         }
//     }), p.focusin = "onfocusin" in e, p.focusin || d.each({
//         focus: "focusin",
//         blur: "focusout"
//     }, function (e, t) {
//         var n = function (e) {
//             d.event.simulate(t, e.target, d.event.fix(e))
//         };
//         d.event.special[t] = {
//             setup: function () {
//                 var r = this.ownerDocument || this,
//                     o = R.access(r, t);
//                 o || r.addEventListener(e, n, !0), R.access(r, t, (o || 0) + 1)
//             },
//             teardown: function () {
//                 var r = this.ownerDocument || this,
//                     o = R.access(r, t) - 1;
//                 o ? R.access(r, t, o) : (r.removeEventListener(e, n, !0), R.remove(r, t))
//             }
//         }
//     });
//     var it = e.location,
//         at = d.now(),
//         st = /\?/;
//     d.parseJSON = function (e) {
//         return JSON.parse(e + "")
//     }, d.parseXML = function (t) {
//         var n;
//         if (!t || "string" != typeof t) return null;
//         try {
//             n = (new e.DOMParser).parseFromString(t, "text/xml")
//         } catch (e) {
//             n = void 0
//         }
//         return n && !n.getElementsByTagName("parsererror").length || d.error("Invalid XML: " + t), n
//     };
//     var ut = /#.*$/,
//         ct = /([?&])_=[^&]*/,
//         lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
//         pt = /^(?:GET|HEAD)$/,
//         ft = /^\/\//,
//         dt = {},
//         ht = {},
//         mt = "*/".concat("*"),
//         gt = r.createElement("a");

//     function yt(e) {
//         return function (t, n) {
//             "string" != typeof t && (n = t, t = "*");
//             var r, o = 0,
//                 i = t.toLowerCase().match(D) || [];
//             if (d.isFunction(n))
//                 for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
//         }
//     }

//     function vt(e, t, n, r) {
//         var o = {},
//             i = e === ht;

//         function a(s) {
//             var u;
//             return o[s] = !0, d.each(e[s] || [], function (e, s) {
//                 var c = s(t, n, r);
//                 return "string" != typeof c || i || o[c] ? i ? !(u = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
//             }), u
//         }
//         return a(t.dataTypes[0]) || !o["*"] && a("*")
//     }

//     function xt(e, t) {
//         var n, r, o = d.ajaxSettings.flatOptions || {};
//         for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
//         return r && d.extend(!0, e, r), e
//     }
//     gt.href = it.href, d.extend({
//         active: 0,
//         lastModified: {},
//         etag: {},
//         ajaxSettings: {
//             url: it.href,
//             type: "GET",
//             isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(it.protocol),
//             global: !0,
//             processData: !0,
//             async: !0,
//             contentType: "application/x-www-form-urlencoded; charset=UTF-8",
//             accepts: {
//                 "*": mt,
//                 text: "text/plain",
//                 html: "text/html",
//                 xml: "application/xml, text/xml",
//                 json: "application/json, text/javascript"
//             },
//             contents: {
//                 xml: /\bxml\b/,
//                 html: /\bhtml/,
//                 json: /\bjson\b/
//             },
//             responseFields: {
//                 xml: "responseXML",
//                 text: "responseText",
//                 json: "responseJSON"
//             },
//             converters: {
//                 "* text": String,
//                 "text html": !0,
//                 "text json": d.parseJSON,
//                 "text xml": d.parseXML
//             },
//             flatOptions: {
//                 url: !0,
//                 context: !0
//             }
//         },
//         ajaxSetup: function (e, t) {
//             return t ? xt(xt(e, d.ajaxSettings), t) : xt(d.ajaxSettings, e)
//         },
//         ajaxPrefilter: yt(dt),
//         ajaxTransport: yt(ht),
//         ajax: function (t, n) {
//             "object" == typeof t && (n = t, t = void 0), n = n || {};
//             var o, i, a, s, u, c, l, p, f = d.ajaxSetup({}, n),
//                 h = f.context || f,
//                 m = f.context && (h.nodeType || h.jquery) ? d(h) : d.event,
//                 g = d.Deferred(),
//                 y = d.Callbacks("once memory"),
//                 v = f.statusCode || {},
//                 x = {},
//                 b = {},
//                 w = 0,
//                 _ = "canceled",
//                 $ = {
//                     readyState: 0,
//                     getResponseHeader: function (e) {
//                         var t;
//                         if (2 === w) {
//                             if (!s)
//                                 for (s = {}; t = lt.exec(a);) s[t[1].toLowerCase()] = t[2];
//                             t = s[e.toLowerCase()]
//                         }
//                         return null == t ? null : t
//                     },
//                     getAllResponseHeaders: function () {
//                         return 2 === w ? a : null
//                     },
//                     setRequestHeader: function (e, t) {
//                         var n = e.toLowerCase();
//                         return w || (e = b[n] = b[n] || e, x[e] = t), this
//                     },
//                     overrideMimeType: function (e) {
//                         return w || (f.mimeType = e), this
//                     },
//                     statusCode: function (e) {
//                         var t;
//                         if (e)
//                             if (2 > w)
//                                 for (t in e) v[t] = [v[t], e[t]];
//                             else $.always(e[$.status]);
//                         return this
//                     },
//                     abort: function (e) {
//                         var t = e || _;
//                         return o && o.abort(t), T(0, t), this
//                     }
//                 };
//             if (g.promise($).complete = y.add, $.success = $.done, $.error = $.fail, f.url = ((t || f.url || it.href) + "").replace(ut, "").replace(ft, it.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = d.trim(f.dataType || "*").toLowerCase().match(D) || [""], null == f.crossDomain) {
//                 c = r.createElement("a");
//                 try {
//                     c.href = f.url, c.href = c.href, f.crossDomain = gt.protocol + "//" + gt.host != c.protocol + "//" + c.host
//                 } catch (e) {
//                     f.crossDomain = !0
//                 }
//             }
//             if (f.data && f.processData && "string" != typeof f.data && (f.data = d.param(f.data, f.traditional)), vt(dt, f, n, $), 2 === w) return $;
//             for (p in (l = d.event && f.global) && 0 == d.active++ && d.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !pt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (st.test(i) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = ct.test(i) ? i.replace(ct, "$1_=" + at++) : i + (st.test(i) ? "&" : "?") + "_=" + at++)), f.ifModified && (d.lastModified[i] && $.setRequestHeader("If-Modified-Since", d.lastModified[i]), d.etag[i] && $.setRequestHeader("If-None-Match", d.etag[i])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && $.setRequestHeader("Content-Type", f.contentType), $.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + mt + "; q=0.01" : "") : f.accepts["*"]), f.headers) $.setRequestHeader(p, f.headers[p]);
//             if (f.beforeSend && (!1 === f.beforeSend.call(h, $, f) || 2 === w)) return $.abort();
//             for (p in _ = "abort", {
//                     success: 1,
//                     error: 1,
//                     complete: 1
//                 }) $[p](f[p]);
//             if (o = vt(ht, f, n, $)) {
//                 if ($.readyState = 1, l && m.trigger("ajaxSend", [$, f]), 2 === w) return $;
//                 f.async && f.timeout > 0 && (u = e.setTimeout(function () {
//                     $.abort("timeout")
//                 }, f.timeout));
//                 try {
//                     w = 1, o.send(x, T)
//                 } catch (e) {
//                     if (!(2 > w)) throw e;
//                     T(-1, e)
//                 }
//             } else T(-1, "No Transport");

//             function T(t, n, r, s) {
//                 var c, p, x, b, _, T = n;
//                 2 !== w && (w = 2, u && e.clearTimeout(u), o = void 0, a = s || "", $.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, r && (b = function (e, t, n) {
//                     for (var r, o, i, a, s = e.contents, u = e.dataTypes;
//                         "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
//                     if (r)
//                         for (o in s)
//                             if (s[o] && s[o].test(r)) {
//                                 u.unshift(o);
//                                 break
//                             } if (u[0] in n) i = u[0];
//                     else {
//                         for (o in n) {
//                             if (!u[0] || e.converters[o + " " + u[0]]) {
//                                 i = o;
//                                 break
//                             }
//                             a || (a = o)
//                         }
//                         i = i || a
//                     }
//                     return i ? (i !== u[0] && u.unshift(i), n[i]) : void 0
//                 }(f, $, r)), b = function (e, t, n, r) {
//                     var o, i, a, s, u, c = {},
//                         l = e.dataTypes.slice();
//                     if (l[1])
//                         for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
//                     for (i = l.shift(); i;)
//                         if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = l.shift())
//                             if ("*" === i) i = u;
//                             else if ("*" !== u && u !== i) {
//                         if (!(a = c[u + " " + i] || c["* " + i]))
//                             for (o in c)
//                                 if ((s = o.split(" "))[1] === i && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
//                                     !0 === a ? a = c[o] : !0 !== c[o] && (i = s[0], l.unshift(s[1]));
//                                     break
//                                 } if (!0 !== a)
//                             if (a && e.throws) t = a(t);
//                             else try {
//                                 t = a(t)
//                             } catch (e) {
//                                 return {
//                                     state: "parsererror",
//                                     error: a ? e : "No conversion from " + u + " to " + i
//                                 }
//                             }
//                     }
//                     return {
//                         state: "success",
//                         data: t
//                     }
//                 }(f, b, $, c), c ? (f.ifModified && ((_ = $.getResponseHeader("Last-Modified")) && (d.lastModified[i] = _), (_ = $.getResponseHeader("etag")) && (d.etag[i] = _)), 204 === t || "HEAD" === f.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, p = b.data, c = !(x = b.error))) : (x = T, !t && T || (T = "error", 0 > t && (t = 0))), $.status = t, $.statusText = (n || T) + "", c ? g.resolveWith(h, [p, T, $]) : g.rejectWith(h, [$, T, x]), $.statusCode(v), v = void 0, l && m.trigger(c ? "ajaxSuccess" : "ajaxError", [$, f, c ? p : x]), y.fireWith(h, [$, T]), l && (m.trigger("ajaxComplete", [$, f]), --d.active || d.event.trigger("ajaxStop")))
//             }
//             return $
//         },
//         getJSON: function (e, t, n) {
//             return d.get(e, t, n, "json")
//         },
//         getScript: function (e, t) {
//             return d.get(e, void 0, t, "script")
//         }
//     }), d.each(["get", "post"], function (e, t) {
//         d[t] = function (e, n, r, o) {
//             return d.isFunction(n) && (o = o || r, r = n, n = void 0), d.ajax(d.extend({
//                 url: e,
//                 type: t,
//                 dataType: o,
//                 data: n,
//                 success: r
//             }, d.isPlainObject(e) && e))
//         }
//     }), d._evalUrl = function (e) {
//         return d.ajax({
//             url: e,
//             type: "GET",
//             dataType: "script",
//             async: !1,
//             global: !1,
//             throws: !0
//         })
//     }, d.fn.extend({
//         wrapAll: function (e) {
//             var t;
//             return d.isFunction(e) ? this.each(function (t) {
//                 d(this).wrapAll(e.call(this, t))
//             }) : (this[0] && (t = d(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
//                 for (var e = this; e.firstElementChild;) e = e.firstElementChild;
//                 return e
//             }).append(this)), this)
//         },
//         wrapInner: function (e) {
//             return d.isFunction(e) ? this.each(function (t) {
//                 d(this).wrapInner(e.call(this, t))
//             }) : this.each(function () {
//                 var t = d(this),
//                     n = t.contents();
//                 n.length ? n.wrapAll(e) : t.append(e)
//             })
//         },
//         wrap: function (e) {
//             var t = d.isFunction(e);
//             return this.each(function (n) {
//                 d(this).wrapAll(t ? e.call(this, n) : e)
//             })
//         },
//         unwrap: function () {
//             return this.parent().each(function () {
//                 d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
//             }).end()
//         }
//     }), d.expr.filters.hidden = function (e) {
//         return !d.expr.filters.visible(e)
//     }, d.expr.filters.visible = function (e) {
//         return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
//     };
//     var bt = /%20/g,
//         wt = /\[\]$/,
//         _t = /\r?\n/g,
//         $t = /^(?:submit|button|image|reset|file)$/i,
//         Tt = /^(?:input|select|textarea|keygen)/i;

//     function Ct(e, t, n, r) {
//         var o;
//         if (d.isArray(t)) d.each(t, function (t, o) {
//             n || wt.test(e) ? r(e, o) : Ct(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
//         });
//         else if (n || "object" !== d.type(t)) r(e, t);
//         else
//             for (o in t) Ct(e + "[" + o + "]", t[o], n, r)
//     }
//     d.param = function (e, t) {
//         var n, r = [],
//             o = function (e, t) {
//                 t = d.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
//             };
//         if (void 0 === t && (t = d.ajaxSettings && d.ajaxSettings.traditional), d.isArray(e) || e.jquery && !d.isPlainObject(e)) d.each(e, function () {
//             o(this.name, this.value)
//         });
//         else
//             for (n in e) Ct(n, e[n], t, o);
//         return r.join("&").replace(bt, "+")
//     }, d.fn.extend({
//         serialize: function () {
//             return d.param(this.serializeArray())
//         },
//         serializeArray: function () {
//             return this.map(function () {
//                 var e = d.prop(this, "elements");
//                 return e ? d.makeArray(e) : this
//             }).filter(function () {
//                 var e = this.type;
//                 return this.name && !d(this).is(":disabled") && Tt.test(this.nodeName) && !$t.test(e) && (this.checked || !Y.test(e))
//             }).map(function (e, t) {
//                 var n = d(this).val();
//                 return null == n ? null : d.isArray(n) ? d.map(n, function (e) {
//                     return {
//                         name: t.name,
//                         value: e.replace(_t, "\r\n")
//                     }
//                 }) : {
//                     name: t.name,
//                     value: n.replace(_t, "\r\n")
//                 }
//             }).get()
//         }
//     }), d.ajaxSettings.xhr = function () {
//         try {
//             return new e.XMLHttpRequest
//         } catch (e) {}
//     };
//     var kt = {
//             0: 200,
//             1223: 204
//         },
//         Et = d.ajaxSettings.xhr();
//     p.cors = !!Et && "withCredentials" in Et, p.ajax = Et = !!Et, d.ajaxTransport(function (t) {
//         var n, r;
//         return p.cors || Et && !t.crossDomain ? {
//             send: function (o, i) {
//                 var a, s = t.xhr();
//                 if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
//                     for (a in t.xhrFields) s[a] = t.xhrFields[a];
//                 for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) s.setRequestHeader(a, o[a]);
//                 n = function (e) {
//                     return function () {
//                         n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(kt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
//                             binary: s.response
//                         } : {
//                             text: s.responseText
//                         }, s.getAllResponseHeaders()))
//                     }
//                 }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
//                     4 === s.readyState && e.setTimeout(function () {
//                         n && r()
//                     })
//                 }, n = n("abort");
//                 try {
//                     s.send(t.hasContent && t.data || null)
//                 } catch (e) {
//                     if (n) throw e
//                 }
//             },
//             abort: function () {
//                 n && n()
//             }
//         } : void 0
//     }), d.ajaxSetup({
//         accepts: {
//             script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
//         },
//         contents: {
//             script: /\b(?:java|ecma)script\b/
//         },
//         converters: {
//             "text script": function (e) {
//                 return d.globalEval(e), e
//             }
//         }
//     }), d.ajaxPrefilter("script", function (e) {
//         void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
//     }), d.ajaxTransport("script", function (e) {
//         var t, n;
//         if (e.crossDomain) return {
//             send: function (o, i) {
//                 t = d("<script>").prop({
//                     charset: e.scriptCharset,
//                     src: e.url
//                 }).on("load error", n = function (e) {
//                     t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
//                 }), r.head.appendChild(t[0])
//             },
//             abort: function () {
//                 n && n()
//             }
//         }
//     });
//     var Nt = [],
//         St = /(=)\?(?=&|$)|\?\?/;
//     d.ajaxSetup({
//         jsonp: "callback",
//         jsonpCallback: function () {
//             var e = Nt.pop() || d.expando + "_" + at++;
//             return this[e] = !0, e
//         }
//     }), d.ajaxPrefilter("json jsonp", function (t, n, r) {
//         var o, i, a, s = !1 !== t.jsonp && (St.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && St.test(t.data) && "data");
//         return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = d.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(St, "$1" + o) : !1 !== t.jsonp && (t.url += (st.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
//             return a || d.error(o + " was not called"), a[0]
//         }, t.dataTypes[0] = "json", i = e[o], e[o] = function () {
//             a = arguments
//         }, r.always(function () {
//             void 0 === i ? d(e).removeProp(o) : e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, Nt.push(o)), a && d.isFunction(i) && i(a[0]), a = i = void 0
//         }), "script") : void 0
//     }), d.parseHTML = function (e, t, n) {
//         if (!e || "string" != typeof e) return null;
//         "boolean" == typeof t && (n = t, t = !1), t = t || r;
//         var o = $.exec(e),
//             i = !n && [];
//         return o ? [t.createElement(o[1])] : (o = ee([e], t, i), i && i.length && d(i).remove(), d.merge([], o.childNodes))
//     };
//     var jt = d.fn.load;

//     function At(e) {
//         return d.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
//     }
//     d.fn.load = function (e, t, n) {
//         if ("string" != typeof e && jt) return jt.apply(this, arguments);
//         var r, o, i, a = this,
//             s = e.indexOf(" ");
//         return s > -1 && (r = d.trim(e.slice(s)), e = e.slice(0, s)), d.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && d.ajax({
//             url: e,
//             type: o || "GET",
//             dataType: "html",
//             data: t
//         }).done(function (e) {
//             i = arguments, a.html(r ? d("<div>").append(d.parseHTML(e)).find(r) : e)
//         }).always(n && function (e, t) {
//             a.each(function () {
//                 n.apply(this, i || [e.responseText, t, e])
//             })
//         }), this
//     }, d.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
//         d.fn[t] = function (e) {
//             return this.on(t, e)
//         }
//     }), d.expr.filters.animated = function (e) {
//         return d.grep(d.timers, function (t) {
//             return e === t.elem
//         }).length
//     }, d.offset = {
//         setOffset: function (e, t, n) {
//             var r, o, i, a, s, u, c = d.css(e, "position"),
//                 l = d(e),
//                 p = {};
//             "static" === c && (e.style.position = "relative"), s = l.offset(), i = d.css(e, "top"), u = d.css(e, "left"), ("absolute" === c || "fixed" === c) && (i + u).indexOf("auto") > -1 ? (a = (r = l.position()).top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0), d.isFunction(t) && (t = t.call(e, n, d.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + o), "using" in t ? t.using.call(e, p) : l.css(p)
//         }
//     }, d.fn.extend({
//         offset: function (e) {
//             if (arguments.length) return void 0 === e ? this : this.each(function (t) {
//                 d.offset.setOffset(this, e, t)
//             });
//             var t, n, r = this[0],
//                 o = {
//                     top: 0,
//                     left: 0
//                 },
//                 i = r && r.ownerDocument;
//             return i ? (t = i.documentElement, d.contains(t, r) ? (o = r.getBoundingClientRect(), n = At(i), {
//                 top: o.top + n.pageYOffset - t.clientTop,
//                 left: o.left + n.pageXOffset - t.clientLeft
//             }) : o) : void 0
//         },
//         position: function () {
//             if (this[0]) {
//                 var e, t, n = this[0],
//                     r = {
//                         top: 0,
//                         left: 0
//                     };
//                 return "fixed" === d.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), d.nodeName(e[0], "html") || (r = e.offset()), r.top += d.css(e[0], "borderTopWidth", !0), r.left += d.css(e[0], "borderLeftWidth", !0)), {
//                     top: t.top - r.top - d.css(n, "marginTop", !0),
//                     left: t.left - r.left - d.css(n, "marginLeft", !0)
//                 }
//             }
//         },
//         offsetParent: function () {
//             return this.map(function () {
//                 for (var e = this.offsetParent; e && "static" === d.css(e, "position");) e = e.offsetParent;
//                 return e || Ne
//             })
//         }
//     }), d.each({
//         scrollLeft: "pageXOffset",
//         scrollTop: "pageYOffset"
//     }, function (e, t) {
//         var n = "pageYOffset" === t;
//         d.fn[e] = function (r) {
//             return L(this, function (e, r, o) {
//                 var i = At(e);
//                 return void 0 === o ? i ? i[t] : e[r] : void(i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o)
//             }, e, r, arguments.length)
//         }
//     }), d.each(["top", "left"], function (e, t) {
//         d.cssHooks[t] = je(p.pixelPosition, function (e, n) {
//             return n ? (n = Se(e, t), Ce.test(n) ? d(e).position()[t] + "px" : n) : void 0
//         })
//     }), d.each({
//         Height: "height",
//         Width: "width"
//     }, function (e, t) {
//         d.each({
//             padding: "inner" + e,
//             content: t,
//             "": "outer" + e
//         }, function (n, r) {
//             d.fn[r] = function (r, o) {
//                 var i = arguments.length && (n || "boolean" != typeof r),
//                     a = n || (!0 === r || !0 === o ? "margin" : "border");
//                 return L(this, function (t, n, r) {
//                     var o;
//                     return d.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? d.css(t, n, a) : d.style(t, n, r, a)
//                 }, t, i ? r : void 0, i, null)
//             }
//         })
//     }), d.fn.extend({
//         bind: function (e, t, n) {
//             return this.on(e, null, t, n)
//         },
//         unbind: function (e, t) {
//             return this.off(e, null, t)
//         },
//         delegate: function (e, t, n, r) {
//             return this.on(t, e, n, r)
//         },
//         undelegate: function (e, t, n) {
//             return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
//         },
//         size: function () {
//             return this.length
//         }
//     }), d.fn.andSelf = d.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
//         return d
//     });
//     var Dt = e.jQuery,
//         qt = e.$;
//     return d.noConflict = function (t) {
//         return e.$ === d && (e.$ = qt), t && e.jQuery === d && (e.jQuery = Dt), d
//     }, t || (e.jQuery = e.$ = d), d
// }),
// function (e) {
//     "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
// }(function (e) {
//     function t(e) {
//         return a.raw ? e : encodeURIComponent(e)
//     }

//     function n(e) {
//         return a.raw ? e : decodeURIComponent(e)
//     }

//     function r(e) {
//         return t(a.json ? JSON.stringify(e) : String(e))
//     }

//     function o(t, n) {
//         var r = a.raw ? t : function (e) {
//             0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
//             try {
//                 return e = decodeURIComponent(e.replace(i, " ")), a.json ? JSON.parse(e) : e
//             } catch (e) {}
//         }(t);
//         return e.isFunction(n) ? n(r) : r
//     }
//     var i = /\+/g,
//         a = e.cookie = function (i, s, u) {
//             if (void 0 !== s && !e.isFunction(s)) {
//                 if ("number" == typeof (u = e.extend({}, a.defaults, u)).expires) {
//                     var c = u.expires,
//                         l = u.expires = new Date;
//                     l.setTime(+l + 864e5 * c)
//                 }
//                 return document.cookie = [t(i), "=", r(s), u.expires ? "; expires=" + u.expires.toUTCString() : "", u.path ? "; path=" + u.path : "", u.domain ? "; domain=" + u.domain : "", u.secure ? "; secure" : ""].join("")
//             }
//             for (var p = i ? void 0 : {}, f = document.cookie ? document.cookie.split("; ") : [], d = 0, h = f.length; h > d; d++) {
//                 var m = f[d].split("="),
//                     g = n(m.shift()),
//                     y = m.join("=");
//                 if (i && i === g) {
//                     p = o(y, s);
//                     break
//                 }
//                 i || void 0 === (y = o(y)) || (p[g] = y)
//             }
//             return p
//         };
//     a.defaults = {}, e.removeCookie = function (t, n) {
//         return void 0 !== e.cookie(t) && (e.cookie(t, "", e.extend({}, n, {
//             expires: -1
//         })), !e.cookie(t))
//     }
// }),
// function (e) {
//     "function" == typeof define && define.amd ? define(e) : window.purl = e()
// }(function () {
//     function e(e, t) {
//         for (var n = decodeURI(e), o = c[t ? "strict" : "loose"].exec(n), i = {
//                 attr: {},
//                 param: {},
//                 seg: {}
//             }, a = 14; a--;) i.attr[s[a]] = o[a] || "";
//         return i.param.query = r(i.attr.query), i.param.fragment = r(i.attr.fragment), i.seg.path = i.attr.path.replace(/^\/+|\/+$/g, "").split("/"), i.seg.fragment = i.attr.fragment.replace(/^\/+|\/+$/g, "").split("/"), i.attr.base = i.attr.host ? (i.attr.protocol ? i.attr.protocol + "://" + i.attr.host : i.attr.host) + (i.attr.port ? ":" + i.attr.port : "") : "", i
//     }

//     function t(e, t) {
//         if (0 === e[t].length) return e[t] = {};
//         var n = {};
//         for (var r in e[t]) n[r] = e[t][r];
//         return e[t] = n, n
//     }

//     function n(e, n, r) {
//         if (~n.indexOf("]")) {
//             ! function e(n, r, i, a) {
//                 var s = n.shift();
//                 if (s) {
//                     var u = r[i] = r[i] || [];
//                     "]" == s ? o(u) ? "" !== a && u.push(a) : "object" == typeof u ? u[function (e) {
//                         var t = [];
//                         for (var n in e) e.hasOwnProperty(n) && t.push(n);
//                         return t
//                     }(u).length] = a : u = r[i] = [r[i], a] : ~s.indexOf("]") ? (s = s.substr(0, s.length - 1), !l.test(s) && o(u) && (u = t(r, i)), e(n, u, s, a)) : (!l.test(s) && o(u) && (u = t(r, i)), e(n, u, s, a))
//                 } else o(r[i]) ? r[i].push(a) : r[i] = "object" == typeof r[i] ? a : void 0 === r[i] ? a : [r[i], a]
//             }(n.split("["), e, "base", r)
//         } else {
//             if (!l.test(n) && o(e.base)) {
//                 var i = {};
//                 for (var a in e.base) i[a] = e.base[a];
//                 e.base = i
//             }
//             "" !== n && function (e, t, n) {
//                 var r = e[t];
//                 void 0 === r ? e[t] = n : o(r) ? r.push(n) : e[t] = [r, n]
//             }(e.base, n, r)
//         }
//         return e
//     }

//     function r(e) {
//         return function (e, t) {
//             for (var n = 0, r = e.length >> 0, o = arguments[2]; r > n;) n in e && (o = t.call(void 0, o, e[n], n, e)), ++n;
//             return o
//         }(String(e).split(/&|;/), function (e, t) {
//             try {
//                 t = decodeURIComponent(t.replace(/\+/g, " "))
//             } catch (e) {}
//             var r = t.indexOf("="),
//                 o = function (e) {
//                     for (var t, n, r = e.length, o = 0; r > o; ++o)
//                         if ("]" == (n = e[o]) && (t = !1), "[" == n && (t = !0), "=" == n && !t) return o
//                 }(t),
//                 i = t.substr(0, o || r),
//                 a = t.substr(o || r, t.length);
//             return a = a.substr(a.indexOf("=") + 1, a.length), "" === i && (i = t, a = ""), n(e, i, a)
//         }, {
//             base: {}
//         }).base
//     }

//     function o(e) {
//         return "[object Array]" === Object.prototype.toString.call(e)
//     }

//     function i(t, n) {
//         return 1 === arguments.length && !0 === t && (n = !0, t = void 0), n = n || !1, {
//             data: e(t = t || window.location.toString(), n),
//             attr: function (e) {
//                 return void 0 !== (e = u[e] || e) ? this.data.attr[e] : this.data.attr
//             },
//             param: function (e) {
//                 return void 0 !== e ? this.data.param.query[e] : this.data.param.query
//             },
//             fparam: function (e) {
//                 return void 0 !== e ? this.data.param.fragment[e] : this.data.param.fragment
//             },
//             segment: function (e) {
//                 return void 0 === e ? this.data.seg.path : (e = 0 > e ? this.data.seg.path.length + e : e - 1, this.data.seg.path[e])
//             },
//             fsegment: function (e) {
//                 return void 0 === e ? this.data.seg.fragment : (e = 0 > e ? this.data.seg.fragment.length + e : e - 1, this.data.seg.fragment[e])
//             }
//         }
//     }
//     var a = {
//             a: "href",
//             img: "src",
//             form: "action",
//             base: "href",
//             script: "src",
//             iframe: "src",
//             link: "href"
//         },
//         s = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "fragment"],
//         u = {
//             anchor: "fragment"
//         },
//         c = {
//             strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
//             loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
//         },
//         l = /^[0-9]+$/;
//     return i.jQuery = function (e) {
//         null != e && (e.fn.url = function (t) {
//             var n, r, o = "";
//             return this.length && (o = e(this).attr((n = this[0], void 0 !== (r = n.tagName) ? a[r.toLowerCase()] : r)) || ""), i(o, t)
//         }, e.url = i)
//     }, i.jQuery(window.jQuery), i
// }), $(function () {
//     var e = new XMLHttpRequest;
//     if (e.open("GET", "//click.lucky.online/click/ip-location.html", !1), e.send(), 200 === e.status) {
//         var t = JSON.parse(e.responseText);
//         ! function (e, t, r) {
//             $(".user-city").text(e), $(".country").text(t), $(".js-city").html(e), document.getElementsByTagName("body")[0].setAttribute("data-city", e), document.getElementsByTagName("body")[0].setAttribute("data-prod", "Потенциалекс"), n(r)
//         }(t.city, t.country, t.code)
//     }

//     function n(e) {
//         "undefined" == typeof country && (country = e), "KZ" == country ? kz_selected = 'selected="selected"' : kz_selected = "", "UA" == country ? ua_selected = 'selected="selected"' : ua_selected = "", "MD" == country ? md_selected = 'selected="selected"' : md_selected = "", "GE" == country ? ge_selected = 'selected="selected"' : ge_selected = "", "BY" == country ? by_selected = 'selected="selected"' : by_selected = "", "AM" == country ? am_selected = 'selected="selected"' : am_selected = "", "AZ" == country ? az_selected = 'selected="selected"' : az_selected = "", "KG" == country ? kg_selected = 'selected="selected"' : kg_selected = "", selects = $("select[name='country']"), selects.append('<option value="RU">Россия</option>'), selects.append('<option value="BY" ' + by_selected + ">Белоруссия</option>"), selects.append('<option value="KZ" ' + kz_selected + ">Казахстан</option>"), selects.append('<option value="UA" ' + ua_selected + ">Украина</option>");
//         var t, n = 0;
//         $("select").change(function () {
//             0 == n && (n = 1, $(this.children).each(function () {
//                 this.selected && (sel = $(this).val())
//             }), "undefined" == typeof sel && (sel = "RU"), "RU" == sel && ($(".old_price_val").html(""), $(".old_price_cur").html("руб"), $(".old_price_sig").html("&#8381;"), $(".new_price_val").html("бесплатно"), $(".new_price_cur").html("руб"), $(".new_price_sig").html("&#8381;"), $(".country_name").text("Россия"), $(".country_name1").text("России"), $(".country_name2").text("России"), $(".country_name3").text("Россию"), $(".country_name4").text("российских"), $(".country_name5").text("российской"), $(".country_name6").text("российским"), $(".country_name7").text("российскому"), $(".country_name8").text("российскую"), $(".country_name9").text("российские"), $(".country_name10").text("российский"), $(".country_name11").text("российская"), $(".country_name12").text("российского"), $(".country_name13").text("Россиян"), $(".country_name14").text("россиянина"), $(".country_name15").text("россиянам"), $("select").val(sel).trigger("change"), document.getElementById("popText").innerHTML = '<p>Успейте принять участие в программе и получите "Потенциалекс" по акции  <span style="color: rgb(255, 0, 0);"> <span style="font-size: 36px;"><b>БЕСПЛАТНО</b></span></span> <span style="font-size: 36px;">!</span></p>', document.getElementsByTagName("body")[0].setAttribute("data-price", "БЕСПЛАТНО")), "KZ" == sel && ($(".old_price_val").html("11000"), $(".old_price_cur").html("тнг"), $(".old_price_sig").html("тнг*"), $(".new_price_val").html("бесплатно"), $(".new_price_cur").html("тнг"), $(".new_price_sig").html("тнг"), $(".country_name").text("Казахстан"), $(".country_name1").text("Казахстана"), $(".country_name2").text("Казахстана"), $(".country_name3").text("Казахстану"), $(".country_name4").text("казахстанских"), $(".country_name5").text("казахстанской"), $(".country_name6").text("казахстанским"), $(".country_name7").text("казахстанскому"), $(".country_name8").text("казахстанскую"), $(".country_name9").text("казахстанские"), $(".country_name10").text("казахстанский"), $(".country_name11").text("казахстанская"), $(".country_name12").text("казахстанского"), $(".country_name13").text("казахов"), $(".country_name14").text("казаха"), $(".country_name15").text("казахам"), $("select").val(sel).trigger("change"), document.getElementById("popText").innerHTML = '<p>Успейте принять участие в программе и получите "Потенциалекс" по акции  <span style="color: rgb(255, 0, 0);"> <span style="font-size: 36px;"><b>БЕСПЛАТНО</b></span></span> <span style="font-size: 36px;">!</span></p>', document.getElementsByTagName("body")[0].setAttribute("data-price", "БЕСПЛАТНО")), "UA" == sel && ($(".old_price_val").html("640"), $(".old_price_cur").html("грн"), $(".old_price_sig").html("грн*"), $(".new_price_val").html("бесплатно"), $(".new_price_cur").html("грн"), $(".new_price_sig").html("грн*"), $(".country_name").text("Украина"), $(".country_name1").text("Украины"), $(".country_name2").text("Украины"), $(".country_name3").text("Украину"), $(".country_name4").text("украинских"), $(".country_name5").text("украинской"), $(".country_name6").text("украинским"), $(".country_name7").text("украинскому"), $(".country_name8").text("украинскую"), $(".country_name9").text("украинские"), $(".country_name10").text("украинский"), $(".country_name11").text("украинская"), $(".country_name12").text("украинского"), $(".country_name13").text("Украинцев"), $(".country_name14").text("украинца"), $(".country_name15").text("украинцам"), $("select").val(sel).trigger("change"), document.getElementById("popText").innerHTML = '<p>Успейте принять участие в программе и получите "Потенциалекс" по акции  <span style="color: rgb(255, 0, 0);"> <span style="font-size: 36px;"><b>БЕСПЛАТНО</b></span></span> <span style="font-size: 36px;">!</span></p>', document.getElementsByTagName("body")[0].setAttribute("data-price", "БЕСПЛАТНО")), "MD" == sel && ($(".old_price_val").html("9"), $(".old_price_cur").html("лей"), $(".old_price_sig").html("лей*"), $(".new_price_val").html("бесплатно"), $(".new_price_cur").html("лей*"), $(".new_price_sig").html("лей*"), $(".country_name").text("Молдова"), $(".country_name1").text("Молдовии"), $(".country_name2").text("Молдовии"), $(".country_name3").text("Молдову"), $(".country_name4").text("молдовских"), $(".country_name5").text("молдовской"), $(".country_name6").text("молдовским"), $(".country_name7").text("молдовскому"), $(".country_name8").text("молдовскую"), $(".country_name9").text("молдовские"), $(".country_name10").text("молдовский"), $(".country_name11").text("молдовская"), $(".country_name12").text("молдовского"), $(".country_name13").text("Молдован"), $(".country_name14").text("молдована"), $("select").val(sel).trigger("change")), "GE" == sel && ($(".old_price_val").html("140"), $(".old_price_cur").html("gel"), $(".old_price_sig").html("gel*"), $(".new_price_val").html("бесплатно"), $(".new_price_cur").html("gel"), $(".new_price_sig").html("gel*"), $(".country_name").text("Грузия"), $(".country_name1").text("Грузии"), $(".country_name2").text("Грузии"), $(".country_name3").text("Грузию"), $(".country_name4").text("грузинских"), $(".country_name5").text("грузинской"), $(".country_name6").text("грузинским"), $(".country_name7").text("грузинскому"), $(".country_name8").text("грузинскую"), $(".country_name9").text("грузинские"), $(".country_name10").text("грузинский"), $(".country_name11").text("грузинская"), $(".country_name12").text("грузинского"), $(".country_name13").text("Грузинов"), $(".country_name14").text("грузина"), $("select").val(sel).trigger("change")), "BY" == sel && ($(".old_price_val").html(""), $(".old_price_cur").html("Бр"), $(".old_price_sig").html("р*"), $(".new_price_val").html("бесплатно"), $(".new_price_cur").html("Бр"), $(".new_price_sig").html("р*"), $(".country_name").text("Белоруссия"), $(".country_name1").text("Белоруссии"), $(".country_name2").text("Белоруссии"), $(".country_name3").text("Белоруссию"), $(".country_name4").text("белорусских"), $(".country_name5").text("белорусской"), $(".country_name6").text("белорусским"), $(".country_name7").text("белорусскому"), $(".country_name8").text("белорусскую"), $(".country_name9").text("белорусские"), $(".country_name10").text("белорусский"), $(".country_name11").text("белорусская"), $(".country_name12").text("белорусского"), $(".country_name13").text("Беларусов"), $(".country_name14").text("беларуса"), $("select").val(sel).trigger("change"), document.getElementById("popText").innerHTML = '<p>Успейте принять участие в программе и получите "Потенциалекс" по акции  <span style="color: rgb(255, 0, 0);"> <span style="font-size: 36px;"><b>БЕСПЛАТНО</b></span></span> <span style="font-size: 36px;">!</span></p>', document.getElementsByTagName("body")[0].setAttribute("data-price", "БЕСПЛАТНО")), "AM" == sel && ($(".old_price_val").html("25980"), $(".old_price_cur").html("др"), $(".old_price_sig").html("др*"), $(".new_price_val").html("бесплатно"), $(".new_price_cur").html("др"), $(".new_price_sig").html("др*"), $(".country_name").text("Армения"), $(".country_name1").text("Армении"), $(".country_name2").text("Армении"), $(".country_name3").text("Армению"), $(".country_name4").text("армянских"), $(".country_name5").text("армянской"), $(".country_name6").text("армянским"), $(".country_name7").text("армянскому"), $(".country_name8").text("армянскую"), $(".country_name9").text("армянские"), $(".country_name10").text("армянский"), $(".country_name11").text("армянская"), $(".country_name12").text("армянского"), $(".country_name13").text("Армян"), $(".country_name14").text("армянина"), $(".country_name15").text("армянам"), $("select").val(sel).trigger("change")), "AZ" == sel && ($(".old_price_val").html("69"), $(".old_price_cur").html("манат"), $(".old_price_sig").html("манат*"), $(".new_price_val").html("бесплатно"), $(".new_price_cur").html("манат*"), $(".new_price_sig").html("манат*"), $(".country_name").text("Азербайджан"), $(".country_name1").text("Азербайджане"), $(".country_name2").text("Азербайджана"), $(".country_name3").text("Азербайджану"), $(".country_name4").text("азербайджанских"), $(".country_name5").text("азербайджанской"), $(".country_name6").text("азербайджанским"), $(".country_name7").text("азербайджанскому"), $(".country_name8").text("азербайджанскую"), $(".country_name9").text("азербайджанские"), $(".country_name10").text("азербайджанский"), $(".country_name11").text("азербайджанская"), $(".country_name12").text("азербайджанского"), $(".country_name13").text("Азербайджанцев"), $(".country_name14").text("азербайджанца"), $("select").val(sel).trigger("change")), "KG" == sel && ($(".old_price_val").html("3380"), $(".old_price_cur").html("сом"), $(".old_price_sig").html("сом*"), $(".new_price_val").html("бесплатно"), $(".new_price_cur").html("сом*"), $(".new_price_sig").html("сом*"), $(".country_name").text("Киргизия"), $(".country_name1").text("Киргизии"), $(".country_name2").text("Киргизии"), $(".country_name3").text("Киргизию"), $(".country_name4").text("киргизских"), $(".country_name5").text("киргизской"), $(".country_name6").text("киргизским"), $(".country_name7").text("киргизскому"), $(".country_name8").text("киргизскую"), $(".country_name9").text("киргизские"), $(".country_name10").text("киргизский"), $(".country_name11").text("киргизская"), $(".country_name12").text("киргизского"), $(".country_name13").text("Киргизов"), $(".country_name14").text("киргиза"), $("select").val(sel).trigger("change")), n = 0)
//         }).change();
//         var r = new Date;
//         (t = document.createElement("script")).src = "https://myweek-news.ru/js_templates_h/common.js?v=" + r.getTime(), document.getElementsByTagName("body")[0].appendChild(t)
//     }
// });













/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});










