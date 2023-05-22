/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-pointerevents-touchevents-addtest-mq-prefixed-prefixedcss-setclasses !*/
! function(e, n, t) {
    function r(e, n) {
        return typeof e === n
    }

    function o() {
        var e, n, t, o, i, s, a;
        for (var u in _)
            if (_.hasOwnProperty(u)) {
                if (e = [], n = _[u], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (o = r(n.fn, "function") ? n.fn() : n.fn, i = 0; i < e.length; i++) s = e[i], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), y.push((o ? "" : "no-") + a.join("-"))
            }
    }

    function i(e) {
        var n = S.className,
            t = Modernizr._config.classPrefix || "";
        if (b && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(r, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), b ? S.className.baseVal = n : S.className = n)
    }

    function s(e, n) {
        if ("object" == typeof e)
            for (var t in e) w(e, t) && s(t, e[t]);
        else {
            e = e.toLowerCase();
            var r = e.split("."),
                o = Modernizr[r[0]];
            if (2 == r.length && (o = o[r[1]]), "undefined" != typeof o) return Modernizr;
            n = "function" == typeof n ? n() : n, 1 == r.length ? Modernizr[r[0]] = n : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = n), i([(n && 0 != n ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, n)
        }
        return Modernizr
    }

    function a(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
            return n + t.toUpperCase()
        }).replace(/^-/, "")
    }

    function u(e) {
        return e.replace(/([A-Z])/g, function(e, n) {
            return "-" + n.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function f() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : b ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }

    function l() {
        var e = n.body;
        return e || (e = f(b ? "svg" : "body"), e.fake = !0), e
    }

    function c(e, t, r, o) {
        var i, s, a, u, c = "modernizr",
            d = f("div"),
            p = l();
        if (parseInt(r, 10))
            for (; r--;) a = f("div"), a.id = o ? o[r] : c + (r + 1), d.appendChild(a);
        return i = f("style"), i.type = "text/css", i.id = "s" + c, (p.fake ? p : d).appendChild(i), p.appendChild(d), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(n.createTextNode(e)), d.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = S.style.overflow, S.style.overflow = "hidden", S.appendChild(p)), s = t(d, e), p.fake ? (p.parentNode.removeChild(p), S.style.overflow = u, S.offsetHeight) : d.parentNode.removeChild(d), !!s
    }

    function d(e, n) {
        return !!~("" + e).indexOf(n)
    }

    function p(n, r) {
        var o = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(u(n[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var i = []; o--;) i.push("(" + u(n[o]) + ":" + r + ")");
            return i = i.join(" or "), c("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return t
    }

    function v(e, n) {
        return function() {
            return e.apply(n, arguments)
        }
    }

    function m(e, n, t) {
        var o;
        for (var i in e)
            if (e[i] in n) return t === !1 ? e[i] : (o = n[e[i]], r(o, "function") ? v(o, t || n) : o);
        return !1
    }

    function h(e, n, o, i) {
        function s() {
            l && (delete O.style, delete O.modElem)
        }
        if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) {
            var u = p(e, o);
            if (!r(u, "undefined")) return u
        }
        for (var l, c, v, m, h, g = ["modernizr", "tspan", "samp"]; !O.style && g.length;) l = !0, O.modElem = f(g.shift()), O.style = O.modElem.style;
        for (v = e.length, c = 0; v > c; c++)
            if (m = e[c], h = O.style[m], d(m, "-") && (m = a(m)), O.style[m] !== t) {
                if (i || r(o, "undefined")) return s(), "pfx" == n ? m : !0;
                try {
                    O.style[m] = o
                } catch (y) {}
                if (O.style[m] != h) return s(), "pfx" == n ? m : !0
            }
        return s(), !1
    }

    function g(e, n, t, o, i) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + j.join(s + " ") + s).split(" ");
        return r(n, "string") || r(n, "undefined") ? h(a, n, o, i) : (a = (e + " " + P.join(s + " ") + s).split(" "), m(a, n, t))
    }
    var y = [],
        _ = [],
        C = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() {
                    n(t[e])
                }, 0)
            },
            addTest: function(e, n, t) {
                _.push({
                    name: e,
                    fn: n,
                    options: t
                })
            },
            addAsyncTest: function(e) {
                _.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = C, Modernizr = new Modernizr;
    var w, S = n.documentElement,
        b = "svg" === S.nodeName.toLowerCase();
    ! function() {
        var e = {}.hasOwnProperty;
        w = r(e, "undefined") || r(e.call, "undefined") ? function(e, n) {
            return n in e && r(e.constructor.prototype[n], "undefined")
        } : function(n, t) {
            return e.call(n, t)
        }
    }(), C._l = {}, C.on = function(e, n) {
        this._l[e] || (this._l[e] = []), this._l[e].push(n), Modernizr.hasOwnProperty(e) && setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }, C._trigger = function(e, n) {
        if (this._l[e]) {
            var t = this._l[e];
            setTimeout(function() {
                var e, r;
                for (e = 0; e < t.length; e++)(r = t[e])(n)
            }, 0), delete this._l[e]
        }
    }, Modernizr._q.push(function() {
        C.addTest = s
    });
    var x = C._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    C._prefixes = x;
    var T = function() {
        var n = e.matchMedia || e.msMatchMedia;
        return n ? function(e) {
            var t = n(e);
            return t && t.matches || !1
        } : function(n) {
            var t = !1;
            return c("@media " + n + " { #modernizr { position: absolute; } }", function(n) {
                t = "absolute" == (e.getComputedStyle ? e.getComputedStyle(n, null) : n.currentStyle).position
            }), t
        }
    }();
    C.mq = T;
    var E = C.testStyles = c;
    Modernizr.addTest("touchevents", function() {
        var t;
        if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;
        else {
            var r = ["@media (", x.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            E(r, function(e) {
                t = 9 === e.offsetTop
            })
        }
        return t
    });
    var z = "Moz O ms Webkit",
        P = C._config.usePrefixes ? z.toLowerCase().split(" ") : [];
    C._domPrefixes = P;
    var j = C._config.usePrefixes ? z.split(" ") : [];
    C._cssomPrefixes = j;
    var N = function(n) {
        var r, o = x.length,
            i = e.CSSRule;
        if ("undefined" == typeof i) return t;
        if (!n) return !1;
        if (n = n.replace(/^@/, ""), r = n.replace(/-/g, "_").toUpperCase() + "_RULE", r in i) return "@" + n;
        for (var s = 0; o > s; s++) {
            var a = x[s],
                u = a.toUpperCase() + "_" + r;
            if (u in i) return "@-" + a.toLowerCase() + "-" + n
        }
        return !1
    };
    C.atRule = N;
    var A = function() {
        function e(e, n) {
            var o;
            return e ? (n && "string" != typeof n || (n = f(n || "div")), e = "on" + e, o = e in n, !o && r && (n.setAttribute || (n = f("div")), n.setAttribute(e, ""), o = "function" == typeof n[e], n[e] !== t && (n[e] = t), n.removeAttribute(e)), o) : !1
        }
        var r = !("onblur" in n.documentElement);
        return e
    }();
    C.hasEvent = A, Modernizr.addTest("pointerevents", function() {
        var e = !1,
            n = P.length;
        for (e = Modernizr.hasEvent("pointerdown"); n-- && !e;) A(P[n] + "pointerdown") && (e = !0);
        return e
    });
    var L = {
        elem: f("modernizr")
    };
    Modernizr._q.push(function() {
        delete L.elem
    });
    var O = {
        style: L.elem.style
    };
    Modernizr._q.unshift(function() {
        delete O.style
    }), C.testAllProps = g;
    var k = C.prefixed = function(e, n, t) {
        return 0 === e.indexOf("@") ? N(e) : (-1 != e.indexOf("-") && (e = a(e)), n ? g(e, n, t) : g(e, "pfx"))
    };
    C.prefixedCSS = function(e) {
        var n = k(e);
        return n && u(n)
    };
    o(), i(y), delete C.addTest, delete C.addAsyncTest;
    for (var q = 0; q < Modernizr._q.length; q++) Modernizr._q[q]();
    e.Modernizr = Modernizr
}(window, document);
! function(e) {
    var n = navigator.userAgent,
        i = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/gi;
    e && e.addTest && (e.addTest("mobile", function() {
        return i.test(n) && e.mq("only screen and (min-width: 320px) and (max-width: 639px)")
    }), e.addTest("tablet", function() {
        return i.test(n) && !e.mobile
    }))
}(Modernizr);