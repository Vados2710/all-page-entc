(() => {
    var e = {
            260: () => {
                function e(e) {
                    var t = new Date;
                    return t.setDate(t.getDate() - e), String(t.getDate()).padStart(2, "0") + "." + String(t.getMonth() + 1).padStart(2, "0") + "." + t.getFullYear()
                }
                document.getElementById("article-date").innerHTML = e(4), document.getElementById("publication-date").innerText = e(4), document.getElementById("promotion-date-1").innerHTML = e(0), document.getElementById("promotion-date-2").innerHTML = e(0), document.getElementById("aside-article-1-date").innerHTML = e(6), document.getElementById("aside-article-2-date").innerHTML = e(5), document.getElementById("aside-article-3-date").innerHTML = e(3)
            },
            417: () => {
                var e = document.getElementById("hamburger-btn"),
                    t = document.getElementById("mobile-menu"),
                    i = document.querySelector("body");
                e.addEventListener("click", (function() {
                    t.classList.toggle("visible"), i.classList.toggle("scroll-lock"), e.classList.toggle("open")
                }))
            },
            927: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/aeed1453982982cd9c25.png"
            },
            822: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/37405a2f411dd13d6a55.png"
            },
            266: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/fbcff52d0a00885a1275.png"
            },
            591: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/00cf17519d7f5c8cf8d6.png"
            },
            677: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/0ee2aeeb28fccc04f8b1.png"
            },
            819: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/e4e87c2c76104f9f778d.png"
            },
            307: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/e78f14d31731e49b314f.png"
            },
            947: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/3c9ee50c3fec7bb4d91f.png"
            },
            817: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/fc2a3c54d74b12a72f21.png"
            },
            706: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/6b42fcd4ecdec852a0c9.png"
            },
            176: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/a9741fe965a34aaf1232.png"
            },
            989: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/08fcb4f82c710d5ea27e.png"
            },
            229: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/76919abc8abb20574659.png"
            },
            29: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/ec3dd1701bc4ccc564aa.png"
            },
            539: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/14485eb29ad393d0399e.png"
            },
            653: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/36d26ac24f47b45d66c4.png"
            },
            407: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/4d51b3a383e59f823f7b.png"
            },
            281: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/2eb50a8b9e295350ab4b.png"
            },
            121: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/217af4f05ef21067d0af.png"
            },
            951: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/a402532b4d8861fd5962.png"
            },
            796: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/b70e2a6524ddf74b9783.png"
            },
            49: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/199d2aebd67624d8e6f6.png"
            },
            146: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/162909159b0a3b0c3a70.png"
            },
            843: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/10df4fd5f9c8fa79b50f.png"
            },
            734: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/e6663ab6322a5eaec1d6.png"
            },
            549: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/36db8f706a4f0e900dc2.png"
            },
            903: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/319b15e03f1b30714e9b.png"
            },
            697: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/85ba87958a828a21ba4b.png"
            },
            733: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/5178b91bf75e3fc932b6.png"
            },
            329: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/826d0111ad3d4fb9d6ef.png"
            },
            298: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/e78c8c56627e697f1174.png"
            },
            666: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/b3004cf8bc60dbb89df3.png"
            },
            418: (e, t, i) => {
                "use strict";
                e.exports = i.p + "images/c9949dbf9d14e902f818.png"
            }
        },
        t = {};

    function i(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var n = t[r] = {
            exports: {}
        };
        return e[r](n, n.exports, i), n.exports
    }
    i.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), (() => {
        var e;
        i.g.importScripts && (e = i.g.location + "");
        var t = i.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            r.length && (e = r[r.length - 1].src)
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
    })(), (() => {
        "use strict";
        var e = i(29),
            t = i(927),
            r = i(407),
            a = i(989),
            n = i(281),
            s = i(307),
            o = i(176),
            l = i(591),
            d = i(266),
            c = i(822),
            p = i(539),
            u = i(653),
            v = i(947),
            m = i(229),
            f = i(817),
            h = i(819),
            g = i(677),
            w = i(706),
            b = [{
                type: "comment",
                author: "Asia Kucharska",
                avatar: e,
                text: "czytałam gdzieś kiedyś coś na temat tych kapsułek… wy piszecie tu, że działają, ale dla mnie to trochę nierealne. A na pewno nie działają ąż tak, żeby przywracać widzenie całkowicie. Może to i dobre dla oka, ale chyba dla niektórych naprawdę jest za późno….",
                timestamp: "chwilę temu",
                pictures: []
            }, {
                type: "comment",
                author: "Anna Jakubowska",
                avatar: t,
                text: "Rozumiem ze trudno uwierzyc tylko na slowo. Dlatego zobacz wyniki moich okulistycznych badań, jak się poprawily w ciagu tego miesiaca.",
                timestamp: "chwilę temu",
                pictures: [i(121)]
            }, {
                type: "comment",
                author: "Aleks Wróblewski",
                avatar: r,
                text: "Kupiłem mojej mamie, która ma coraz większe problemy ze wzrokiem. Właśnie dziś przyszła paczka, więc dla wszystkich zainteresowanych jak wyglądają kapsułki:",
                timestamp: "chwilę temu",
                pictures: [i(951)]
            }, {
                type: "reply",
                author: "Łucja Nowakowska",
                avatar: a,
                text: "@Aleks Wróblewski pokaż lepiej zdjęcie zadowolonej mamci :D",
                timestamp: "chwilę temu",
                pictures: []
            }, {
                type: "reply",
                author: "Aleks Wróblewski",
                avatar: r,
                text: "Proszę bardzo!",
                timestamp: "chwilę temu",
                pictures: [i(796)]
            }, {
                type: "comment",
                author: "Julita Cieślak",
                avatar: n,
                text: "Zamówiłam wczoraj, a już dzisiaj są u mnie kapsułki, super!!",
                timestamp: "chwilę temu",
                pictures: []
            }, {
                type: "comment",
                author: "Danuta Chojnowska",
                avatar: s,
                text: "byłam w Stanach kiedy 1 raz usłyszałam o tych kapsułkach, moja kuzynka ich używała.. wtedy nie miałam problemu ze wzrokiem. Ale kiedy zaczełam coraz gorzej widzieć już wiedziałam, co powinnam jak najszybciej kupić :)",
                timestamp: "wczoraj",
                pictures: []
            }, {
                type: "comment",
                author: "Krzysztof Skoczylas",
                avatar: o,
                text: "Z wykształcenia jestem biologiem i według mojej wiedzy te kapsułki nie mają prawa NIE działać.",
                timestamp: "wczoraj",
                pictures: []
            }, {
                type: "reply",
                author: "Artur Pomorski",
                avatar: l,
                text: "podwójne zaprzeczenie daje…?",
                timestamp: "wczoraj",
                pictures: []
            }, {
                type: "reply",
                author: "Krzysztof Skoczylas",
                avatar: o,
                text: "Kapsułki działają wedle dobrze znanych praw biologii. @Artur Pomorski, zadowolony?",
                timestamp: "wczoraj",
                pictures: []
            }, {
                type: "comment",
                author: "Anastazja Bąk",
                avatar: d,
                text: "Mam je w domu, biorę już od tygodnia. Bardzo podoba mi się koncept z tymi całkowicie naturalnymi substancjami. Najważniejsze jest, żeby codziennie brać te kapsułki, wtedy jest odpowiednie wysycenie substancji czynnych. ",
                timestamp: "2 dni temu",
                pictures: []
            }, {
                type: "comment",
                author: "Alina Iwiczna",
                avatar: c,
                text: "a czy mogłabym kupić takie kapusłki mojej nastoletniej córce, której wzrok się gwałtownie pogarsza z roku na rok?",
                timestamp: "2 dni temu",
                pictures: []
            }, {
                type: "reply",
                author: "Paweł Namysłowski",
                avatar: p,
                text: "@Alina Iwiczna Ja bym spróbował, są tutaj tylko bezpieczne składniki. Na spokojnie może brać, przecież nie jest już małym dzieckiem.",
                timestamp: "2 dni temu",
                pictures: []
            }, {
                type: "comment",
                author: "Tadeusz Rozmus",
                avatar: u,
                text: "Znajoma mi kiedyś polecała te kapsułki, myślałem wtedy, że jest sekciarką. Ale to tutaj brzmi sensownie…",
                timestamp: "2 dni temu",
                pictures: []
            }, {
                type: "comment",
                author: "Dorota Okońska",
                avatar: v,
                text: "Do mnie właśnie przyszła świeża, pachnąca paczuszka! Liczę na niesamowite efekty!",
                timestamp: "3 dni temu",
                pictures: [i(49)]
            }, {
                type: "comment",
                author: "Lucyna Pospieszalska",
                avatar: m,
                text: "Ja na swoje kapsułki mam nawet specjalne miejsce :)",
                timestamp: "4 dni temu",
                pictures: [i(146)]
            }, {
                type: "comment",
                author: "Jarek Zapolski",
                avatar: f,
                text: "Od lat pracuję przy komputrze i serio już ledwo co widzę… małe literki się rozmywają, a oczy bola, że hej. Mam już tego dość…",
                timestamp: "4 dni temu",
                pictures: []
            }, {
                type: "comment",
                author: "Czesław Trocki",
                avatar: h,
                text: "no w końcu! Ta wiedza przedostała się do świadomości publicznej, czekałem na to.",
                timestamp: "5 dni temu",
                pictures: []
            }, {
                type: "comment",
                author: "Barbie C",
                avatar: g,
                text: "@Jarek Zapolski miałam ten sam problem, nie ma co się zastanawiać, hahah!",
                timestamp: "5 dni temu",
                pictures: [i(843)]
            }, {
                type: "comment",
                author: "Jerzy Wigura",
                avatar: w,
                text: "Podoba mi się to! Połączeie nauki i starej medyny naturalnej, super sprawa!",
                timestamp: "5 dni temu",
                pictures: []
            }],
            y = document.getElementById("comments-list");

        function C(e, t, i, r, a) {
            return "<li class='comment-item'>\n      <div class='comment-item__avatar-wrapper'>\n        <img class='comment-item__avatar' src=".concat(t, " alt='avatar'/>\n      </div>\n        <div class='comment-item__content'>\n            <p class='comment-item__content__author'>").concat(e, "</p>") + S(i) + x(a) + "<div class='comment-item__btn-wrapper'>\n    <a class='comment-item__btn-wrapper__like-btn cta-btn'href=\"<?=$url;?>\">Lubię to!</a><span class=\"comment-item__btn-wrapper__bullet\"></span><a class='comment-item__btn-wrapper__answer-btn cta-btn' href=\"<?=$url;?>\">Odpowiedz</a><span class=\"comment-item__btn-wrapper__bullet\"></span><span class='comment-item__btn-wrapper__timestamp'>".concat(r, "</span>\n          </div>\n      </div>\n    </li>")
        }

        function T(e, t, i, r, a) {
            return "<li  class='comment-item reply'>\n        <div class='comment-item__avatar-wrapper'>\n          <img class='comment-item__avatar' src=".concat(t, " alt=''/>\n        </div>\n        <div class='comment-item__content reply__content'>\n          <p class='comment-item__content__author'>").concat(e, "</p>") + S(i) + x(a) + "<div class='comment-item__btn-wrapper'>\n    <a class='comment-item__btn-wrapper__like-btn cta-btn'href=\"<?=$url;?>\">Lubię to!</a><span class=\"comment-item__btn-wrapper__bullet\"></span><a class='comment-item__btn-wrapper__answer-btn cta-btn'href=\"<?=$url;?>\">Odpowiedz</a><span class=\"comment-item__btn-wrapper__bullet\"></span><span class='comment-item__btn-wrapper__timestamp'>".concat(r, "</span>\n          </div>\n        </div>\n    </li>")
        }

        function x(e) {
            return e.length ? "<div class='comment-item__images-wrapper'>" + e.map(((e, t) => "<img src=".concat(e, " alt=").concat(t, "/>"))).join("") + "</div>" : ""
        }

        function S(e) {
            var t, i = e.split(" ");
            return i.includes("@Tomasz") || i.includes("@Alina") || i.includes("@Jarek") ? (t = i.slice(2).join(" "), '<p class="comment-item__content__text"><span class="comment-item__content__text-bold">'.concat(i[0] + " " + i[1], "</span> ").concat(t, "</p>")) : i.includes("@Artur") ? (t = i.slice(0, 8).join(" "), '<p class="comment-item__content__text">'.concat(t, ' <span class="comment-item__content__text-bold">').concat(i[8] + " " + i[9], "</span> ").concat(i[10], "</p>")) : '<p class="comment-item__content__text">'.concat(e, "</p>")
        }

        function E(e) {
            return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
        }

        function k(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((function(i) {
                void 0 === e[i] ? e[i] = t[i] : E(t[i]) && E(e[i]) && Object.keys(t[i]).length > 0 && k(e[i], t[i])
            }))
        }
        document.addEventListener("DOMContentLoaded", (() => {
            for (var e of b) {
                var {
                    type: t,
                    author: i,
                    avatar: r,
                    replyTo: a,
                    text: n,
                    timestamp: s,
                    pictures: o
                } = e;
                if ("comment" === t) y.insertAdjacentHTML("beforeend", C(i, r, n, s, o));
                else {
                    if ("reply" !== t) return null;
                    y.insertAdjacentHTML("beforeend", T(i, r, n, s, o))
                }
            }
        })), i(417), i(260);
        var z = {
            body: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return null
            },
            querySelectorAll: function() {
                return []
            },
            getElementById: function() {
                return null
            },
            createEvent: function() {
                return {
                    initEvent: function() {}
                }
            },
            createElement: function() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return []
                    }
                }
            },
            createElementNS: function() {
                return {}
            },
            importNode: function() {
                return null
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };

        function M() {
            var e = "undefined" != typeof document ? document : {};
            return k(e, z), e
        }
        var P = {
            document: z,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState: function() {},
                pushState: function() {},
                go: function() {},
                back: function() {}
            },
            CustomEvent: function() {
                return this
            },
            addEventListener: function() {},
            removeEventListener: function() {},
            getComputedStyle: function() {
                return {
                    getPropertyValue: function() {
                        return ""
                    }
                }
            },
            Image: function() {},
            Date: function() {},
            screen: {},
            setTimeout: function() {},
            clearTimeout: function() {},
            matchMedia: function() {
                return {}
            },
            requestAnimationFrame: function(e) {
                return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)
            },
            cancelAnimationFrame: function(e) {
                "undefined" != typeof setTimeout && clearTimeout(e)
            }
        };

        function L() {
            var e = "undefined" != typeof window ? window : {};
            return k(e, P), e
        }

        function _(e) {
            return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function O(e, t) {
            return (O = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function A() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }

        function I(e, t, i) {
            return (I = A() ? Reflect.construct : function(e, t, i) {
                var r = [null];
                r.push.apply(r, t);
                var a = new(Function.bind.apply(e, r));
                return i && O(a, i.prototype), a
            }).apply(null, arguments)
        }

        function j(e) {
            var t = "function" == typeof Map ? new Map : void 0;
            return (j = function(e) {
                if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
                var i;
                if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== t) {
                    if (t.has(e)) return t.get(e);
                    t.set(e, r)
                }

                function r() {
                    return I(e, arguments, _(this).constructor)
                }
                return r.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: r,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), O(r, e)
            })(e)
        }
        var B = function(e) {
            var t, i;

            function r(t) {
                var i, r, a;
                return r = function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(i = e.call.apply(e, [this].concat(t)) || this), a = r.__proto__, Object.defineProperty(r, "__proto__", {
                    get: function() {
                        return a
                    },
                    set: function(e) {
                        a.__proto__ = e
                    }
                }), i
            }
            return i = e, (t = r).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, r
        }(j(Array));

        function D(e) {
            void 0 === e && (e = []);
            var t = [];
            return e.forEach((function(e) {
                Array.isArray(e) ? t.push.apply(t, D(e)) : t.push(e)
            })), t
        }

        function G(e, t) {
            return Array.prototype.filter.call(e, t)
        }

        function N(e, t) {
            var i = L(),
                r = M(),
                a = [];
            if (!t && e instanceof B) return e;
            if (!e) return new B(a);
            if ("string" == typeof e) {
                var n = e.trim();
                if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
                    var s = "div";
                    0 === n.indexOf("<li") && (s = "ul"), 0 === n.indexOf("<tr") && (s = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (s = "tr"), 0 === n.indexOf("<tbody") && (s = "table"), 0 === n.indexOf("<option") && (s = "select");
                    var o = r.createElement(s);
                    o.innerHTML = n;
                    for (var l = 0; l < o.childNodes.length; l += 1) a.push(o.childNodes[l])
                } else a = function(e, t) {
                    if ("string" != typeof e) return [e];
                    for (var i = [], r = t.querySelectorAll(e), a = 0; a < r.length; a += 1) i.push(r[a]);
                    return i
                }(e.trim(), t || r)
            } else if (e.nodeType || e === i || e === r) a.push(e);
            else if (Array.isArray(e)) {
                if (e instanceof B) return e;
                a = e
            }
            return new B(function(e) {
                for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
                return t
            }(a))
        }
        N.fn = B.prototype;
        var H = "resize scroll".split(" ");

        function $(e) {
            return function() {
                for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++) i[r] = arguments[r];
                if (void 0 === i[0]) {
                    for (var a = 0; a < this.length; a += 1) H.indexOf(e) < 0 && (e in this[a] ? this[a][e]() : N(this[a]).trigger(e));
                    return this
                }
                return this.on.apply(this, [e].concat(i))
            }
        }
        $("click"), $("blur"), $("focus"), $("focusin"), $("focusout"), $("keyup"), $("keydown"), $("keypress"), $("submit"), $("change"), $("mousedown"), $("mousemove"), $("mouseup"), $("mouseenter"), $("mouseleave"), $("mouseout"), $("mouseover"), $("touchstart"), $("touchend"), $("touchmove"), $("resize"), $("scroll");
        var F = {
            addClass: function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var r = D(t.map((function(e) {
                    return e.split(" ")
                })));
                return this.forEach((function(e) {
                    var t;
                    (t = e.classList).add.apply(t, r)
                })), this
            },
            removeClass: function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var r = D(t.map((function(e) {
                    return e.split(" ")
                })));
                return this.forEach((function(e) {
                    var t;
                    (t = e.classList).remove.apply(t, r)
                })), this
            },
            hasClass: function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var r = D(t.map((function(e) {
                    return e.split(" ")
                })));
                return G(this, (function(e) {
                    return r.filter((function(t) {
                        return e.classList.contains(t)
                    })).length > 0
                })).length > 0
            },
            toggleClass: function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var r = D(t.map((function(e) {
                    return e.split(" ")
                })));
                this.forEach((function(e) {
                    r.forEach((function(t) {
                        e.classList.toggle(t)
                    }))
                }))
            },
            attr: function(e, t) {
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (var i = 0; i < this.length; i += 1)
                    if (2 === arguments.length) this[i].setAttribute(e, t);
                    else
                        for (var r in e) this[i][r] = e[r], this[i].setAttribute(r, e[r]);
                return this
            },
            removeAttr: function(e) {
                for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this
            },
            transform: function(e) {
                for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
                return this
            },
            transition: function(e) {
                for (var t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
                return this
            },
            on: function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var r = t[0],
                    a = t[1],
                    n = t[2],
                    s = t[3];

                function o(e) {
                    var t = e.target;
                    if (t) {
                        var i = e.target.dom7EventData || [];
                        if (i.indexOf(e) < 0 && i.unshift(e), N(t).is(a)) n.apply(t, i);
                        else
                            for (var r = N(t).parents(), s = 0; s < r.length; s += 1) N(r[s]).is(a) && n.apply(r[s], i)
                    }
                }

                function l(e) {
                    var t = e && e.target && e.target.dom7EventData || [];
                    t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
                }
                "function" == typeof t[1] && (r = t[0], n = t[1], s = t[2], a = void 0), s || (s = !1);
                for (var d, c = r.split(" "), p = 0; p < this.length; p += 1) {
                    var u = this[p];
                    if (a)
                        for (d = 0; d < c.length; d += 1) {
                            var v = c[d];
                            u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []), u.dom7LiveListeners[v].push({
                                listener: n,
                                proxyListener: o
                            }), u.addEventListener(v, o, s)
                        } else
                            for (d = 0; d < c.length; d += 1) {
                                var m = c[d];
                                u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[m] || (u.dom7Listeners[m] = []), u.dom7Listeners[m].push({
                                    listener: n,
                                    proxyListener: l
                                }), u.addEventListener(m, l, s)
                            }
                }
                return this
            },
            off: function() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var r = t[0],
                    a = t[1],
                    n = t[2],
                    s = t[3];
                "function" == typeof t[1] && (r = t[0], n = t[1], s = t[2], a = void 0), s || (s = !1);
                for (var o = r.split(" "), l = 0; l < o.length; l += 1)
                    for (var d = o[l], c = 0; c < this.length; c += 1) {
                        var p = this[c],
                            u = void 0;
                        if (!a && p.dom7Listeners ? u = p.dom7Listeners[d] : a && p.dom7LiveListeners && (u = p.dom7LiveListeners[d]), u && u.length)
                            for (var v = u.length - 1; v >= 0; v -= 1) {
                                var m = u[v];
                                n && m.listener === n || n && m.listener && m.listener.dom7proxy && m.listener.dom7proxy === n ? (p.removeEventListener(d, m.proxyListener, s), u.splice(v, 1)) : n || (p.removeEventListener(d, m.proxyListener, s), u.splice(v, 1))
                            }
                    }
                return this
            },
            trigger: function() {
                for (var e = L(), t = arguments.length, i = new Array(t), r = 0; r < t; r++) i[r] = arguments[r];
                for (var a = i[0].split(" "), n = i[1], s = 0; s < a.length; s += 1)
                    for (var o = a[s], l = 0; l < this.length; l += 1) {
                        var d = this[l];
                        if (e.CustomEvent) {
                            var c = new e.CustomEvent(o, {
                                detail: n,
                                bubbles: !0,
                                cancelable: !0
                            });
                            d.dom7EventData = i.filter((function(e, t) {
                                return t > 0
                            })), d.dispatchEvent(c), d.dom7EventData = [], delete d.dom7EventData
                        }
                    }
                return this
            },
            transitionEnd: function(e) {
                var t = this;
                return e && t.on("transitionend", (function i(r) {
                    r.target === this && (e.call(this, r), t.off("transitionend", i))
                })), this
            },
            outerWidth: function(e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            },
            outerHeight: function(e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            },
            styles: function() {
                var e = L();
                return this[0] ? e.getComputedStyle(this[0], null) : {}
            },
            offset: function() {
                if (this.length > 0) {
                    var e = L(),
                        t = M(),
                        i = this[0],
                        r = i.getBoundingClientRect(),
                        a = t.body,
                        n = i.clientTop || a.clientTop || 0,
                        s = i.clientLeft || a.clientLeft || 0,
                        o = i === e ? e.scrollY : i.scrollTop,
                        l = i === e ? e.scrollX : i.scrollLeft;
                    return {
                        top: r.top + o - n,
                        left: r.left + l - s
                    }
                }
                return null
            },
            css: function(e, t) {
                var i, r = L();
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (i = 0; i < this.length; i += 1)
                            for (var a in e) this[i].style[a] = e[a];
                        return this
                    }
                    if (this[0]) return r.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                    return this
                }
                return this
            },
            each: function(e) {
                return e ? (this.forEach((function(t, i) {
                    e.apply(t, [t, i])
                })), this) : this
            },
            html: function(e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this
            },
            text: function(e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this
            },
            is: function(e) {
                var t, i, r = L(),
                    a = M(),
                    n = this[0];
                if (!n || void 0 === e) return !1;
                if ("string" == typeof e) {
                    if (n.matches) return n.matches(e);
                    if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
                    if (n.msMatchesSelector) return n.msMatchesSelector(e);
                    for (t = N(e), i = 0; i < t.length; i += 1)
                        if (t[i] === n) return !0;
                    return !1
                }
                if (e === a) return n === a;
                if (e === r) return n === r;
                if (e.nodeType || e instanceof B) {
                    for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1)
                        if (t[i] === n) return !0;
                    return !1
                }
                return !1
            },
            index: function() {
                var e, t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                    return e
                }
            },
            eq: function(e) {
                if (void 0 === e) return this;
                var t = this.length;
                if (e > t - 1) return N([]);
                if (e < 0) {
                    var i = t + e;
                    return N(i < 0 ? [] : [this[i]])
                }
                return N([this[e]])
            },
            append: function() {
                for (var e, t = M(), i = 0; i < arguments.length; i += 1) {
                    e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                    for (var r = 0; r < this.length; r += 1)
                        if ("string" == typeof e) {
                            var a = t.createElement("div");
                            for (a.innerHTML = e; a.firstChild;) this[r].appendChild(a.firstChild)
                        } else if (e instanceof B)
                        for (var n = 0; n < e.length; n += 1) this[r].appendChild(e[n]);
                    else this[r].appendChild(e)
                }
                return this
            },
            prepend: function(e) {
                var t, i, r = M();
                for (t = 0; t < this.length; t += 1)
                    if ("string" == typeof e) {
                        var a = r.createElement("div");
                        for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(a.childNodes[i], this[t].childNodes[0])
                    } else if (e instanceof B)
                    for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
                else this[t].insertBefore(e, this[t].childNodes[0]);
                return this
            },
            next: function(e) {
                return this.length > 0 ? e ? this[0].nextElementSibling && N(this[0].nextElementSibling).is(e) ? N([this[0].nextElementSibling]) : N([]) : this[0].nextElementSibling ? N([this[0].nextElementSibling]) : N([]) : N([])
            },
            nextAll: function(e) {
                var t = [],
                    i = this[0];
                if (!i) return N([]);
                for (; i.nextElementSibling;) {
                    var r = i.nextElementSibling;
                    e ? N(r).is(e) && t.push(r) : t.push(r), i = r
                }
                return N(t)
            },
            prev: function(e) {
                if (this.length > 0) {
                    var t = this[0];
                    return e ? t.previousElementSibling && N(t.previousElementSibling).is(e) ? N([t.previousElementSibling]) : N([]) : t.previousElementSibling ? N([t.previousElementSibling]) : N([])
                }
                return N([])
            },
            prevAll: function(e) {
                var t = [],
                    i = this[0];
                if (!i) return N([]);
                for (; i.previousElementSibling;) {
                    var r = i.previousElementSibling;
                    e ? N(r).is(e) && t.push(r) : t.push(r), i = r
                }
                return N(t)
            },
            parent: function(e) {
                for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? N(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                return N(t)
            },
            parents: function(e) {
                for (var t = [], i = 0; i < this.length; i += 1)
                    for (var r = this[i].parentNode; r;) e ? N(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
                return N(t)
            },
            closest: function(e) {
                var t = this;
                return void 0 === e ? N([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
            },
            find: function(e) {
                for (var t = [], i = 0; i < this.length; i += 1)
                    for (var r = this[i].querySelectorAll(e), a = 0; a < r.length; a += 1) t.push(r[a]);
                return N(t)
            },
            children: function(e) {
                for (var t = [], i = 0; i < this.length; i += 1)
                    for (var r = this[i].children, a = 0; a < r.length; a += 1) e && !N(r[a]).is(e) || t.push(r[a]);
                return N(t)
            },
            filter: function(e) {
                return N(G(this, e))
            },
            remove: function() {
                for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            }
        };
        Object.keys(F).forEach((function(e) {
            Object.defineProperty(N.fn, e, {
                value: F[e],
                writable: !0
            })
        }));
        const V = N;

        function R(e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }

        function W() {
            return Date.now()
        }

        function q(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }

        function Y() {
            for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"], i = 1; i < arguments.length; i += 1) {
                var r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (null != r)
                    for (var a = Object.keys(Object(r)).filter((function(e) {
                            return t.indexOf(e) < 0
                        })), n = 0, s = a.length; n < s; n += 1) {
                        var o = a[n],
                            l = Object.getOwnPropertyDescriptor(r, o);
                        void 0 !== l && l.enumerable && (q(e[o]) && q(r[o]) ? r[o].__swiper__ ? e[o] = r[o] : Y(e[o], r[o]) : !q(e[o]) && q(r[o]) ? (e[o] = {}, r[o].__swiper__ ? e[o] = r[o] : Y(e[o], r[o])) : e[o] = r[o])
                    }
            }
            return e
        }

        function X(e, t) {
            Object.keys(t).forEach((function(i) {
                q(t[i]) && Object.keys(t[i]).forEach((function(r) {
                    "function" == typeof t[i][r] && (t[i][r] = t[i][r].bind(e))
                })), e[i] = t[i]
            }))
        }

        function U(e) {
            return void 0 === e && (e = ""), "." + e.trim().replace(/([\.:\/])/g, "\\$1").replace(/ /g, ".")
        }
        var K, Z, J;

        function Q() {
            return K || (K = function() {
                var e = L(),
                    t = M();
                return {
                    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                    pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
                    observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
                    passiveListener: function() {
                        var t = !1;
                        try {
                            var i = Object.defineProperty({}, "passive", {
                                get: function() {
                                    t = !0
                                }
                            });
                            e.addEventListener("testPassiveListener", null, i)
                        } catch (e) {}
                        return t
                    }(),
                    gestures: "ongesturestart" in e
                }
            }()), K
        }

        function ee(e) {
            return void 0 === e && (e = {}), Z || (Z = function(e) {
                var t = (void 0 === e ? {} : e).userAgent,
                    i = Q(),
                    r = L(),
                    a = r.navigator.platform,
                    n = t || r.navigator.userAgent,
                    s = {
                        ios: !1,
                        android: !1
                    },
                    o = r.screen.width,
                    l = r.screen.height,
                    d = n.match(/(Android);?[\s\/]+([\d.]+)?/),
                    c = n.match(/(iPad).*OS\s([\d_]+)/),
                    p = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                    u = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    v = "Win32" === a,
                    m = "MacIntel" === a;
                return !c && m && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + l) >= 0 && ((c = n.match(/(Version)\/([\d.]+)/)) || (c = [0, 1, "13_0_0"]), m = !1), d && !v && (s.os = "android", s.android = !0), (c || u || p) && (s.os = "ios", s.ios = !0), s
            }(e)), Z
        }

        function te() {
            return J || (J = function() {
                var e, t = L();
                return {
                    isEdge: !!t.navigator.userAgent.match(/Edge/g),
                    isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
                    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
                }
            }()), J
        }
        const ie = {
            name: "resize",
            create: function() {
                var e = this;
                Y(e, {
                    resize: {
                        observer: null,
                        createObserver: function() {
                            e && !e.destroyed && e.initialized && (e.resize.observer = new ResizeObserver((function(t) {
                                var i = e.width,
                                    r = e.height,
                                    a = i,
                                    n = r;
                                t.forEach((function(t) {
                                    var i = t.contentBoxSize,
                                        r = t.contentRect,
                                        s = t.target;
                                    s && s !== e.el || (a = r ? r.width : (i[0] || i).inlineSize, n = r ? r.height : (i[0] || i).blockSize)
                                })), a === i && n === r || e.resize.resizeHandler()
                            })), e.resize.observer.observe(e.el))
                        },
                        removeObserver: function() {
                            e.resize.observer && e.resize.observer.unobserve && e.el && (e.resize.observer.unobserve(e.el), e.resize.observer = null)
                        },
                        resizeHandler: function() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler: function() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function(e) {
                    var t = L();
                    e.params.resizeObserver && void 0 !== L().ResizeObserver ? e.resize.createObserver() : (t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler))
                },
                destroy: function(e) {
                    var t = L();
                    e.resize.removeObserver(), t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
                }
            }
        };

        function re() {
            return (re = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
                }
                return e
            }).apply(this, arguments)
        }
        var ae = {
            attach: function(e, t) {
                void 0 === t && (t = {});
                var i = L(),
                    r = this,
                    a = new(i.MutationObserver || i.WebkitMutationObserver)((function(e) {
                        if (1 !== e.length) {
                            var t = function() {
                                r.emit("observerUpdate", e[0])
                            };
                            i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0)
                        } else r.emit("observerUpdate", e[0])
                    }));
                a.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), r.observer.observers.push(a)
            },
            init: function() {
                var e = this;
                if (e.support.observer && e.params.observer) {
                    if (e.params.observeParents)
                        for (var t = e.$el.parents(), i = 0; i < t.length; i += 1) e.observer.attach(t[i]);
                    e.observer.attach(e.$el[0], {
                        childList: e.params.observeSlideChildren
                    }), e.observer.attach(e.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function() {
                this.observer.observers.forEach((function(e) {
                    e.disconnect()
                })), this.observer.observers = []
            }
        };
        const ne = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create: function() {
                X(this, {
                    observer: re({}, ae, {
                        observers: []
                    })
                })
            },
            on: {
                init: function(e) {
                    e.observer.init()
                },
                destroy: function(e) {
                    e.observer.destroy()
                }
            }
        };

        function se(e) {
            var t = this,
                i = M(),
                r = L(),
                a = t.touchEventsData,
                n = t.params,
                s = t.touches;
            if (!t.animating || !n.preventInteractionOnTransition) {
                var o = e;
                o.originalEvent && (o = o.originalEvent);
                var l = V(o.target);
                if (("wrapper" !== n.touchEventsTarget || l.closest(t.wrapperEl).length) && (a.isTouchEvent = "touchstart" === o.type, (a.isTouchEvent || !("which" in o) || 3 !== o.which) && !(!a.isTouchEvent && "button" in o && o.button > 0 || a.isTouched && a.isMoved)))
                    if (!!n.noSwipingClass && "" !== n.noSwipingClass && o.target && o.target.shadowRoot && e.path && e.path[0] && (l = V(e.path[0])), n.noSwiping && l.closest(n.noSwipingSelector ? n.noSwipingSelector : "." + n.noSwipingClass)[0]) t.allowClick = !0;
                    else if (!n.swipeHandler || l.closest(n.swipeHandler)[0]) {
                    s.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, s.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                    var d = s.currentX,
                        c = s.currentY,
                        p = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
                        u = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
                    if (p && (d <= u || d >= r.innerWidth - u)) {
                        if ("prevent" !== p) return;
                        e.preventDefault()
                    }
                    if (Y(a, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }), s.startX = d, s.startY = c, a.touchStartTime = W(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== o.type) {
                        var v = !0;
                        l.is(a.formElements) && (v = !1), i.activeElement && V(i.activeElement).is(a.formElements) && i.activeElement !== l[0] && i.activeElement.blur();
                        var m = v && t.allowTouchMove && n.touchStartPreventDefault;
                        !n.touchStartForcePreventDefault && !m || l[0].isContentEditable || o.preventDefault()
                    }
                    t.emit("touchStart", o)
                }
            }
        }

        function oe(e) {
            var t = M(),
                i = this,
                r = i.touchEventsData,
                a = i.params,
                n = i.touches,
                s = i.rtlTranslate,
                o = e;
            if (o.originalEvent && (o = o.originalEvent), r.isTouched) {
                if (!r.isTouchEvent || "touchmove" === o.type) {
                    var l = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
                        d = "touchmove" === o.type ? l.pageX : o.pageX,
                        c = "touchmove" === o.type ? l.pageY : o.pageY;
                    if (o.preventedByNestedSwiper) return n.startX = d, void(n.startY = c);
                    if (!i.allowTouchMove) return i.allowClick = !1, void(r.isTouched && (Y(n, {
                        startX: d,
                        startY: c,
                        currentX: d,
                        currentY: c
                    }), r.touchStartTime = W()));
                    if (r.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                        if (i.isVertical()) {
                            if (c < n.startY && i.translate <= i.maxTranslate() || c > n.startY && i.translate >= i.minTranslate()) return r.isTouched = !1, void(r.isMoved = !1)
                        } else if (d < n.startX && i.translate <= i.maxTranslate() || d > n.startX && i.translate >= i.minTranslate()) return;
                    if (r.isTouchEvent && t.activeElement && o.target === t.activeElement && V(o.target).is(r.formElements)) return r.isMoved = !0, void(i.allowClick = !1);
                    if (r.allowTouchCallbacks && i.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
                        n.currentX = d, n.currentY = c;
                        var p, u = n.currentX - n.startX,
                            v = n.currentY - n.startY;
                        if (!(i.params.threshold && Math.sqrt(Math.pow(u, 2) + Math.pow(v, 2)) < i.params.threshold))
                            if (void 0 === r.isScrolling && (i.isHorizontal() && n.currentY === n.startY || i.isVertical() && n.currentX === n.startX ? r.isScrolling = !1 : u * u + v * v >= 25 && (p = 180 * Math.atan2(Math.abs(v), Math.abs(u)) / Math.PI, r.isScrolling = i.isHorizontal() ? p > a.touchAngle : 90 - p > a.touchAngle)), r.isScrolling && i.emit("touchMoveOpposite", o), void 0 === r.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (r.startMoving = !0)), r.isScrolling) r.isTouched = !1;
                            else if (r.startMoving) {
                            i.allowClick = !1, !a.cssMode && o.cancelable && o.preventDefault(), a.touchMoveStopPropagation && !a.nested && o.stopPropagation(), r.isMoved || (a.loop && i.loopFix(), r.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), r.allowMomentumBounce = !1, !a.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", o)), i.emit("sliderMove", o), r.isMoved = !0;
                            var m = i.isHorizontal() ? u : v;
                            n.diff = m, m *= a.touchRatio, s && (m = -m), i.swipeDirection = m > 0 ? "prev" : "next", r.currentTranslate = m + r.startTranslate;
                            var f = !0,
                                h = a.resistanceRatio;
                            if (a.touchReleaseOnEdges && (h = 0), m > 0 && r.currentTranslate > i.minTranslate() ? (f = !1, a.resistance && (r.currentTranslate = i.minTranslate() - 1 + Math.pow(-i.minTranslate() + r.startTranslate + m, h))) : m < 0 && r.currentTranslate < i.maxTranslate() && (f = !1, a.resistance && (r.currentTranslate = i.maxTranslate() + 1 - Math.pow(i.maxTranslate() - r.startTranslate - m, h))), f && (o.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), i.allowSlidePrev || i.allowSlideNext || (r.currentTranslate = r.startTranslate), a.threshold > 0) {
                                if (!(Math.abs(m) > a.threshold || r.allowThresholdMove)) return void(r.currentTranslate = r.startTranslate);
                                if (!r.allowThresholdMove) return r.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, r.currentTranslate = r.startTranslate, void(n.diff = i.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
                            }
                            a.followFinger && !a.cssMode && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (i.updateActiveIndex(), i.updateSlidesClasses()), a.freeMode && (0 === r.velocities.length && r.velocities.push({
                                position: n[i.isHorizontal() ? "startX" : "startY"],
                                time: r.touchStartTime
                            }), r.velocities.push({
                                position: n[i.isHorizontal() ? "currentX" : "currentY"],
                                time: W()
                            })), i.updateProgress(r.currentTranslate), i.setTranslate(r.currentTranslate))
                        }
                    }
                }
            } else r.startMoving && r.isScrolling && i.emit("touchMoveOpposite", o)
        }

        function le(e) {
            var t = this,
                i = t.touchEventsData,
                r = t.params,
                a = t.touches,
                n = t.rtlTranslate,
                s = t.$wrapperEl,
                o = t.slidesGrid,
                l = t.snapGrid,
                d = e;
            if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && r.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
            r.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            var c, p = W(),
                u = p - i.touchStartTime;
            if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), u < 300 && p - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), i.lastClickTime = W(), R((function() {
                    t.destroyed || (t.allowClick = !0)
                })), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
            if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, c = r.followFinger ? n ? t.translate : -t.translate : -i.currentTranslate, !r.cssMode)
                if (r.freeMode) {
                    if (c < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (c > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (r.freeModeMomentum) {
                        if (i.velocities.length > 1) {
                            var v = i.velocities.pop(),
                                m = i.velocities.pop(),
                                f = v.position - m.position,
                                h = v.time - m.time;
                            t.velocity = f / h, t.velocity /= 2, Math.abs(t.velocity) < r.freeModeMinimumVelocity && (t.velocity = 0), (h > 150 || W() - v.time > 300) && (t.velocity = 0)
                        } else t.velocity = 0;
                        t.velocity *= r.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                        var g = 1e3 * r.freeModeMomentumRatio,
                            w = t.velocity * g,
                            b = t.translate + w;
                        n && (b = -b);
                        var y, C, T = !1,
                            x = 20 * Math.abs(t.velocity) * r.freeModeMomentumBounceRatio;
                        if (b < t.maxTranslate()) r.freeModeMomentumBounce ? (b + t.maxTranslate() < -x && (b = t.maxTranslate() - x), y = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : b = t.maxTranslate(), r.loop && r.centeredSlides && (C = !0);
                        else if (b > t.minTranslate()) r.freeModeMomentumBounce ? (b - t.minTranslate() > x && (b = t.minTranslate() + x), y = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : b = t.minTranslate(), r.loop && r.centeredSlides && (C = !0);
                        else if (r.freeModeSticky) {
                            for (var S, E = 0; E < l.length; E += 1)
                                if (l[E] > -b) {
                                    S = E;
                                    break
                                } b = -(b = Math.abs(l[S] - b) < Math.abs(l[S - 1] - b) || "next" === t.swipeDirection ? l[S] : l[S - 1])
                        }
                        if (C && t.once("transitionEnd", (function() {
                                t.loopFix()
                            })), 0 !== t.velocity) {
                            if (g = n ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity), r.freeModeSticky) {
                                var k = Math.abs((n ? -b : b) - t.translate),
                                    z = t.slidesSizesGrid[t.activeIndex];
                                g = k < z ? r.speed : k < 2 * z ? 1.5 * r.speed : 2.5 * r.speed
                            }
                        } else if (r.freeModeSticky) return void t.slideToClosest();
                        r.freeModeMomentumBounce && T ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating = !0, s.transitionEnd((function() {
                            t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(r.speed), setTimeout((function() {
                                t.setTranslate(y), s.transitionEnd((function() {
                                    t && !t.destroyed && t.transitionEnd()
                                }))
                            }), 0))
                        }))) : t.velocity ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, s.transitionEnd((function() {
                            t && !t.destroyed && t.transitionEnd()
                        })))) : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(b)), t.updateActiveIndex(), t.updateSlidesClasses()
                    } else {
                        if (r.freeModeSticky) return void t.slideToClosest();
                        r.freeMode && t.emit("_freeModeNoMomentumRelease")
                    }(!r.freeModeMomentum || u >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                } else {
                    for (var M = 0, P = t.slidesSizesGrid[0], L = 0; L < o.length; L += L < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
                        var _ = L < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                        void 0 !== o[L + _] ? c >= o[L] && c < o[L + _] && (M = L, P = o[L + _] - o[L]) : c >= o[L] && (M = L, P = o[o.length - 1] - o[o.length - 2])
                    }
                    var O = (c - o[M]) / P,
                        A = M < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                    if (u > r.longSwipesMs) {
                        if (!r.longSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (O >= r.longSwipesRatio ? t.slideTo(M + A) : t.slideTo(M)), "prev" === t.swipeDirection && (O > 1 - r.longSwipesRatio ? t.slideTo(M + A) : t.slideTo(M))
                    } else {
                        if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
                        !t.navigation || d.target !== t.navigation.nextEl && d.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(M + A), "prev" === t.swipeDirection && t.slideTo(M)) : d.target === t.navigation.nextEl ? t.slideTo(M + A) : t.slideTo(M)
                    }
                }
        }

        function de() {
            var e = this,
                t = e.params,
                i = e.el;
            if (!i || 0 !== i.offsetWidth) {
                t.breakpoints && e.setBreakpoint();
                var r = e.allowSlideNext,
                    a = e.allowSlidePrev,
                    n = e.snapGrid;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = a, e.allowSlideNext = r, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
            }
        }

        function ce(e) {
            var t = this;
            t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
        }

        function pe() {
            var e = this,
                t = e.wrapperEl,
                i = e.rtlTranslate;
            e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = i ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
            var r = e.maxTranslate() - e.minTranslate();
            (0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
        }
        var ue = !1;

        function ve() {}
        const me = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !1,
            nested: !1,
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };

        function fe(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        var he = {
                modular: {
                    useParams: function(e) {
                        var t = this;
                        t.modules && Object.keys(t.modules).forEach((function(i) {
                            var r = t.modules[i];
                            r.params && Y(e, r.params)
                        }))
                    },
                    useModules: function(e) {
                        void 0 === e && (e = {});
                        var t = this;
                        t.modules && Object.keys(t.modules).forEach((function(i) {
                            var r = t.modules[i],
                                a = e[i] || {};
                            r.on && t.on && Object.keys(r.on).forEach((function(e) {
                                t.on(e, r.on[e])
                            })), r.create && r.create.bind(t)(a)
                        }))
                    }
                },
                eventsEmitter: {
                    on: function(e, t, i) {
                        var r = this;
                        if ("function" != typeof t) return r;
                        var a = i ? "unshift" : "push";
                        return e.split(" ").forEach((function(e) {
                            r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][a](t)
                        })), r
                    },
                    once: function(e, t, i) {
                        var r = this;
                        if ("function" != typeof t) return r;

                        function a() {
                            r.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
                            for (var i = arguments.length, n = new Array(i), s = 0; s < i; s++) n[s] = arguments[s];
                            t.apply(r, n)
                        }
                        return a.__emitterProxy = t, r.on(e, a, i)
                    },
                    onAny: function(e, t) {
                        var i = this;
                        if ("function" != typeof e) return i;
                        var r = t ? "unshift" : "push";
                        return i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[r](e), i
                    },
                    offAny: function(e) {
                        var t = this;
                        if (!t.eventsAnyListeners) return t;
                        var i = t.eventsAnyListeners.indexOf(e);
                        return i >= 0 && t.eventsAnyListeners.splice(i, 1), t
                    },
                    off: function(e, t) {
                        var i = this;
                        return i.eventsListeners ? (e.split(" ").forEach((function(e) {
                            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((function(r, a) {
                                (r === t || r.__emitterProxy && r.__emitterProxy === t) && i.eventsListeners[e].splice(a, 1)
                            }))
                        })), i) : i
                    },
                    emit: function() {
                        var e, t, i, r = this;
                        if (!r.eventsListeners) return r;
                        for (var a = arguments.length, n = new Array(a), s = 0; s < a; s++) n[s] = arguments[s];
                        "string" == typeof n[0] || Array.isArray(n[0]) ? (e = n[0], t = n.slice(1, n.length), i = r) : (e = n[0].events, t = n[0].data, i = n[0].context || r), t.unshift(i);
                        var o = Array.isArray(e) ? e : e.split(" ");
                        return o.forEach((function(e) {
                            r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach((function(r) {
                                r.apply(i, [e].concat(t))
                            })), r.eventsListeners && r.eventsListeners[e] && r.eventsListeners[e].forEach((function(e) {
                                e.apply(i, t)
                            }))
                        })), r
                    }
                },
                update: {
                    updateSize: function() {
                        var e, t, i = this,
                            r = i.$el;
                        e = void 0 !== i.params.width && null !== i.params.width ? i.params.width : r[0].clientWidth, t = void 0 !== i.params.height && null !== i.params.height ? i.params.height : r[0].clientHeight, 0 === e && i.isHorizontal() || 0 === t && i.isVertical() || (e = e - parseInt(r.css("padding-left") || 0, 10) - parseInt(r.css("padding-right") || 0, 10), t = t - parseInt(r.css("padding-top") || 0, 10) - parseInt(r.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Y(i, {
                            width: e,
                            height: t,
                            size: i.isHorizontal() ? e : t
                        }))
                    },
                    updateSlides: function() {
                        var e = this,
                            t = function(t) {
                                return e.isHorizontal() ? t : {
                                    width: "height",
                                    "margin-top": "margin-left",
                                    "margin-bottom ": "margin-right",
                                    "margin-left": "margin-top",
                                    "margin-right": "margin-bottom",
                                    "padding-left": "padding-top",
                                    "padding-right": "padding-bottom",
                                    marginRight: "marginBottom"
                                } [t]
                            },
                            i = function(e, i) {
                                return parseFloat(e.getPropertyValue(t(i)) || 0)
                            },
                            r = e.params,
                            a = e.$wrapperEl,
                            n = e.size,
                            s = e.rtlTranslate,
                            o = e.wrongRTL,
                            l = e.virtual && r.virtual.enabled,
                            d = l ? e.virtual.slides.length : e.slides.length,
                            c = a.children("." + e.params.slideClass),
                            p = l ? e.virtual.slides.length : c.length,
                            u = [],
                            v = [],
                            m = [],
                            f = r.slidesOffsetBefore;
                        "function" == typeof f && (f = r.slidesOffsetBefore.call(e));
                        var h = r.slidesOffsetAfter;
                        "function" == typeof h && (h = r.slidesOffsetAfter.call(e));
                        var g = e.snapGrid.length,
                            w = e.slidesGrid.length,
                            b = r.spaceBetween,
                            y = -f,
                            C = 0,
                            T = 0;
                        if (void 0 !== n) {
                            var x, S;
                            "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * n), e.virtualSize = -b, s ? c.css({
                                marginLeft: "",
                                marginTop: ""
                            }) : c.css({
                                marginRight: "",
                                marginBottom: ""
                            }), r.slidesPerColumn > 1 && (x = Math.floor(p / r.slidesPerColumn) === p / e.params.slidesPerColumn ? p : Math.ceil(p / r.slidesPerColumn) * r.slidesPerColumn, "auto" !== r.slidesPerView && "row" === r.slidesPerColumnFill && (x = Math.max(x, r.slidesPerView * r.slidesPerColumn)));
                            for (var E, k, z, M = r.slidesPerColumn, P = x / M, L = Math.floor(p / r.slidesPerColumn), _ = 0; _ < p; _ += 1) {
                                S = 0;
                                var O = c.eq(_);
                                if (r.slidesPerColumn > 1) {
                                    var A = void 0,
                                        I = void 0,
                                        j = void 0;
                                    if ("row" === r.slidesPerColumnFill && r.slidesPerGroup > 1) {
                                        var B = Math.floor(_ / (r.slidesPerGroup * r.slidesPerColumn)),
                                            D = _ - r.slidesPerColumn * r.slidesPerGroup * B,
                                            G = 0 === B ? r.slidesPerGroup : Math.min(Math.ceil((p - B * M * r.slidesPerGroup) / M), r.slidesPerGroup);
                                        A = (I = D - (j = Math.floor(D / G)) * G + B * r.slidesPerGroup) + j * x / M, O.css({
                                            "-webkit-box-ordinal-group": A,
                                            "-moz-box-ordinal-group": A,
                                            "-ms-flex-order": A,
                                            "-webkit-order": A,
                                            order: A
                                        })
                                    } else "column" === r.slidesPerColumnFill ? (j = _ - (I = Math.floor(_ / M)) * M, (I > L || I === L && j === M - 1) && (j += 1) >= M && (j = 0, I += 1)) : I = _ - (j = Math.floor(_ / P)) * P;
                                    O.css(t("margin-top"), 0 !== j && r.spaceBetween && r.spaceBetween + "px")
                                }
                                if ("none" !== O.css("display")) {
                                    if ("auto" === r.slidesPerView) {
                                        var N = getComputedStyle(O[0]),
                                            H = O[0].style.transform,
                                            $ = O[0].style.webkitTransform;
                                        if (H && (O[0].style.transform = "none"), $ && (O[0].style.webkitTransform = "none"), r.roundLengths) S = e.isHorizontal() ? O.outerWidth(!0) : O.outerHeight(!0);
                                        else {
                                            var F = i(N, "width"),
                                                V = i(N, "padding-left"),
                                                R = i(N, "padding-right"),
                                                W = i(N, "margin-left"),
                                                q = i(N, "margin-right"),
                                                X = N.getPropertyValue("box-sizing");
                                            if (X && "border-box" === X) S = F + W + q;
                                            else {
                                                var U = O[0],
                                                    K = U.clientWidth;
                                                S = F + V + R + W + q + (U.offsetWidth - K)
                                            }
                                        }
                                        H && (O[0].style.transform = H), $ && (O[0].style.webkitTransform = $), r.roundLengths && (S = Math.floor(S))
                                    } else S = (n - (r.slidesPerView - 1) * b) / r.slidesPerView, r.roundLengths && (S = Math.floor(S)), c[_] && (c[_].style[t("width")] = S + "px");
                                    c[_] && (c[_].swiperSlideSize = S), m.push(S), r.centeredSlides ? (y = y + S / 2 + C / 2 + b, 0 === C && 0 !== _ && (y = y - n / 2 - b), 0 === _ && (y = y - n / 2 - b), Math.abs(y) < .001 && (y = 0), r.roundLengths && (y = Math.floor(y)), T % r.slidesPerGroup == 0 && u.push(y), v.push(y)) : (r.roundLengths && (y = Math.floor(y)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && u.push(y), v.push(y), y = y + S + b), e.virtualSize += S + b, C = S, T += 1
                                }
                            }
                            if (e.virtualSize = Math.max(e.virtualSize, n) + h, s && o && ("slide" === r.effect || "coverflow" === r.effect) && a.css({
                                    width: e.virtualSize + r.spaceBetween + "px"
                                }), r.setWrapperSize && a.css(((k = {})[t("width")] = e.virtualSize + r.spaceBetween + "px", k)), r.slidesPerColumn > 1 && (e.virtualSize = (S + r.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / r.slidesPerColumn) - r.spaceBetween, a.css(((z = {})[t("width")] = e.virtualSize + r.spaceBetween + "px", z)), r.centeredSlides)) {
                                E = [];
                                for (var Z = 0; Z < u.length; Z += 1) {
                                    var J = u[Z];
                                    r.roundLengths && (J = Math.floor(J)), u[Z] < e.virtualSize + u[0] && E.push(J)
                                }
                                u = E
                            }
                            if (!r.centeredSlides) {
                                E = [];
                                for (var Q = 0; Q < u.length; Q += 1) {
                                    var ee = u[Q];
                                    r.roundLengths && (ee = Math.floor(ee)), u[Q] <= e.virtualSize - n && E.push(ee)
                                }
                                u = E, Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - n)
                            }
                            if (0 === u.length && (u = [0]), 0 !== r.spaceBetween) {
                                var te, ie = e.isHorizontal() && s ? "marginLeft" : t("marginRight");
                                c.filter((function(e, t) {
                                    return !r.cssMode || t !== c.length - 1
                                })).css(((te = {})[ie] = b + "px", te))
                            }
                            if (r.centeredSlides && r.centeredSlidesBounds) {
                                var re = 0;
                                m.forEach((function(e) {
                                    re += e + (r.spaceBetween ? r.spaceBetween : 0)
                                }));
                                var ae = (re -= r.spaceBetween) - n;
                                u = u.map((function(e) {
                                    return e < 0 ? -f : e > ae ? ae + h : e
                                }))
                            }
                            if (r.centerInsufficientSlides) {
                                var ne = 0;
                                if (m.forEach((function(e) {
                                        ne += e + (r.spaceBetween ? r.spaceBetween : 0)
                                    })), (ne -= r.spaceBetween) < n) {
                                    var se = (n - ne) / 2;
                                    u.forEach((function(e, t) {
                                        u[t] = e - se
                                    })), v.forEach((function(e, t) {
                                        v[t] = e + se
                                    }))
                                }
                            }
                            Y(e, {
                                slides: c,
                                snapGrid: u,
                                slidesGrid: v,
                                slidesSizesGrid: m
                            }), p !== d && e.emit("slidesLengthChange"), u.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), v.length !== w && e.emit("slidesGridLengthChange"), (r.watchSlidesProgress || r.watchSlidesVisibility) && e.updateSlidesOffset()
                        }
                    },
                    updateAutoHeight: function(e) {
                        var t, i = this,
                            r = [],
                            a = 0;
                        if ("number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed), "auto" !== i.params.slidesPerView && i.params.slidesPerView > 1)
                            if (i.params.centeredSlides) i.visibleSlides.each((function(e) {
                                r.push(e)
                            }));
                            else
                                for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                    var n = i.activeIndex + t;
                                    if (n > i.slides.length) break;
                                    r.push(i.slides.eq(n)[0])
                                } else r.push(i.slides.eq(i.activeIndex)[0]);
                        for (t = 0; t < r.length; t += 1)
                            if (void 0 !== r[t]) {
                                var s = r[t].offsetHeight;
                                a = s > a ? s : a
                            } a && i.$wrapperEl.css("height", a + "px")
                    },
                    updateSlidesOffset: function() {
                        for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                    },
                    updateSlidesProgress: function(e) {
                        void 0 === e && (e = this && this.translate || 0);
                        var t = this,
                            i = t.params,
                            r = t.slides,
                            a = t.rtlTranslate;
                        if (0 !== r.length) {
                            void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
                            var n = -e;
                            a && (n = e), r.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                            for (var s = 0; s < r.length; s += 1) {
                                var o = r[s],
                                    l = (n + (i.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + i.spaceBetween);
                                if (i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) {
                                    var d = -(n - o.swiperSlideOffset),
                                        c = d + t.slidesSizesGrid[s];
                                    (d >= 0 && d < t.size - 1 || c > 1 && c <= t.size || d <= 0 && c >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(s), r.eq(s).addClass(i.slideVisibleClass))
                                }
                                o.progress = a ? -l : l
                            }
                            t.visibleSlides = V(t.visibleSlides)
                        }
                    },
                    updateProgress: function(e) {
                        var t = this;
                        if (void 0 === e) {
                            var i = t.rtlTranslate ? -1 : 1;
                            e = t && t.translate && t.translate * i || 0
                        }
                        var r = t.params,
                            a = t.maxTranslate() - t.minTranslate(),
                            n = t.progress,
                            s = t.isBeginning,
                            o = t.isEnd,
                            l = s,
                            d = o;
                        0 === a ? (n = 0, s = !0, o = !0) : (s = (n = (e - t.minTranslate()) / a) <= 0, o = n >= 1), Y(t, {
                            progress: n,
                            isBeginning: s,
                            isEnd: o
                        }), (r.watchSlidesProgress || r.watchSlidesVisibility || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), s && !l && t.emit("reachBeginning toEdge"), o && !d && t.emit("reachEnd toEdge"), (l && !s || d && !o) && t.emit("fromEdge"), t.emit("progress", n)
                    },
                    updateSlidesClasses: function() {
                        var e, t = this,
                            i = t.slides,
                            r = t.params,
                            a = t.$wrapperEl,
                            n = t.activeIndex,
                            s = t.realIndex,
                            o = t.virtual && r.virtual.enabled;
                        i.removeClass(r.slideActiveClass + " " + r.slideNextClass + " " + r.slidePrevClass + " " + r.slideDuplicateActiveClass + " " + r.slideDuplicateNextClass + " " + r.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + r.slideClass + '[data-swiper-slide-index="' + n + '"]') : i.eq(n)).addClass(r.slideActiveClass), r.loop && (e.hasClass(r.slideDuplicateClass) ? a.children("." + r.slideClass + ":not(." + r.slideDuplicateClass + ')[data-swiper-slide-index="' + s + '"]').addClass(r.slideDuplicateActiveClass) : a.children("." + r.slideClass + "." + r.slideDuplicateClass + '[data-swiper-slide-index="' + s + '"]').addClass(r.slideDuplicateActiveClass));
                        var l = e.nextAll("." + r.slideClass).eq(0).addClass(r.slideNextClass);
                        r.loop && 0 === l.length && (l = i.eq(0)).addClass(r.slideNextClass);
                        var d = e.prevAll("." + r.slideClass).eq(0).addClass(r.slidePrevClass);
                        r.loop && 0 === d.length && (d = i.eq(-1)).addClass(r.slidePrevClass), r.loop && (l.hasClass(r.slideDuplicateClass) ? a.children("." + r.slideClass + ":not(." + r.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(r.slideDuplicateNextClass) : a.children("." + r.slideClass + "." + r.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(r.slideDuplicateNextClass), d.hasClass(r.slideDuplicateClass) ? a.children("." + r.slideClass + ":not(." + r.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(r.slideDuplicatePrevClass) : a.children("." + r.slideClass + "." + r.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(r.slideDuplicatePrevClass)), t.emitSlidesClasses()
                    },
                    updateActiveIndex: function(e) {
                        var t, i = this,
                            r = i.rtlTranslate ? i.translate : -i.translate,
                            a = i.slidesGrid,
                            n = i.snapGrid,
                            s = i.params,
                            o = i.activeIndex,
                            l = i.realIndex,
                            d = i.snapIndex,
                            c = e;
                        if (void 0 === c) {
                            for (var p = 0; p < a.length; p += 1) void 0 !== a[p + 1] ? r >= a[p] && r < a[p + 1] - (a[p + 1] - a[p]) / 2 ? c = p : r >= a[p] && r < a[p + 1] && (c = p + 1) : r >= a[p] && (c = p);
                            s.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                        }
                        if (n.indexOf(r) >= 0) t = n.indexOf(r);
                        else {
                            var u = Math.min(s.slidesPerGroupSkip, c);
                            t = u + Math.floor((c - u) / s.slidesPerGroup)
                        }
                        if (t >= n.length && (t = n.length - 1), c !== o) {
                            var v = parseInt(i.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                            Y(i, {
                                snapIndex: t,
                                realIndex: v,
                                previousIndex: o,
                                activeIndex: c
                            }), i.emit("activeIndexChange"), i.emit("snapIndexChange"), l !== v && i.emit("realIndexChange"), (i.initialized || i.params.runCallbacksOnInit) && i.emit("slideChange")
                        } else t !== d && (i.snapIndex = t, i.emit("snapIndexChange"))
                    },
                    updateClickedSlide: function(e) {
                        var t, i = this,
                            r = i.params,
                            a = V(e.target).closest("." + r.slideClass)[0],
                            n = !1;
                        if (a)
                            for (var s = 0; s < i.slides.length; s += 1)
                                if (i.slides[s] === a) {
                                    n = !0, t = s;
                                    break
                                } if (!a || !n) return i.clickedSlide = void 0, void(i.clickedIndex = void 0);
                        i.clickedSlide = a, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(V(a).attr("data-swiper-slide-index"), 10) : i.clickedIndex = t, r.slideToClickedSlide && void 0 !== i.clickedIndex && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
                    }
                },
                translate: {
                    getTranslate: function(e) {
                        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                        var t = this,
                            i = t.params,
                            r = t.rtlTranslate,
                            a = t.translate,
                            n = t.$wrapperEl;
                        if (i.virtualTranslate) return r ? -a : a;
                        if (i.cssMode) return a;
                        var s = function(e, t) {
                            void 0 === t && (t = "x");
                            var i, r, a, n = L(),
                                s = function(e) {
                                    var t, i = L();
                                    return i.getComputedStyle && (t = i.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
                                }(e);
                            return n.WebKitCSSMatrix ? ((r = s.transform || s.webkitTransform).split(",").length > 6 && (r = r.split(", ").map((function(e) {
                                return e.replace(",", ".")
                            })).join(", ")), a = new n.WebKitCSSMatrix("none" === r ? "" : r)) : i = (a = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (r = n.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (r = n.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), r || 0
                        }(n[0], e);
                        return r && (s = -s), s || 0
                    },
                    setTranslate: function(e, t) {
                        var i = this,
                            r = i.rtlTranslate,
                            a = i.params,
                            n = i.$wrapperEl,
                            s = i.wrapperEl,
                            o = i.progress,
                            l = 0,
                            d = 0;
                        i.isHorizontal() ? l = r ? -e : e : d = e, a.roundLengths && (l = Math.floor(l), d = Math.floor(d)), a.cssMode ? s[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -l : -d : a.virtualTranslate || n.transform("translate3d(" + l + "px, " + d + "px, 0px)"), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : d;
                        var c = i.maxTranslate() - i.minTranslate();
                        (0 === c ? 0 : (e - i.minTranslate()) / c) !== o && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
                    },
                    minTranslate: function() {
                        return -this.snapGrid[0]
                    },
                    maxTranslate: function() {
                        return -this.snapGrid[this.snapGrid.length - 1]
                    },
                    translateTo: function(e, t, i, r, a) {
                        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === r && (r = !0);
                        var n = this,
                            s = n.params,
                            o = n.wrapperEl;
                        if (n.animating && s.preventInteractionOnTransition) return !1;
                        var l, d = n.minTranslate(),
                            c = n.maxTranslate();
                        if (l = r && e > d ? d : r && e < c ? c : e, n.updateProgress(l), s.cssMode) {
                            var p, u = n.isHorizontal();
                            return 0 === t ? o[u ? "scrollLeft" : "scrollTop"] = -l : o.scrollTo ? o.scrollTo(((p = {})[u ? "left" : "top"] = -l, p.behavior = "smooth", p)) : o[u ? "scrollLeft" : "scrollTop"] = -l, !0
                        }
                        return 0 === t ? (n.setTransition(0), n.setTranslate(l), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(l), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                            n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"))
                        }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0
                    }
                },
                transition: {
                    setTransition: function(e, t) {
                        var i = this;
                        i.params.cssMode || i.$wrapperEl.transition(e), i.emit("setTransition", e, t)
                    },
                    transitionStart: function(e, t) {
                        void 0 === e && (e = !0);
                        var i = this,
                            r = i.activeIndex,
                            a = i.params,
                            n = i.previousIndex;
                        if (!a.cssMode) {
                            a.autoHeight && i.updateAutoHeight();
                            var s = t;
                            if (s || (s = r > n ? "next" : r < n ? "prev" : "reset"), i.emit("transitionStart"), e && r !== n) {
                                if ("reset" === s) return void i.emit("slideResetTransitionStart");
                                i.emit("slideChangeTransitionStart"), "next" === s ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart")
                            }
                        }
                    },
                    transitionEnd: function(e, t) {
                        void 0 === e && (e = !0);
                        var i = this,
                            r = i.activeIndex,
                            a = i.previousIndex,
                            n = i.params;
                        if (i.animating = !1, !n.cssMode) {
                            i.setTransition(0);
                            var s = t;
                            if (s || (s = r > a ? "next" : r < a ? "prev" : "reset"), i.emit("transitionEnd"), e && r !== a) {
                                if ("reset" === s) return void i.emit("slideResetTransitionEnd");
                                i.emit("slideChangeTransitionEnd"), "next" === s ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")
                            }
                        }
                    }
                },
                slide: {
                    slideTo: function(e, t, i, r) {
                        if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e + "] given.");
                        if ("string" == typeof e) {
                            var a = parseInt(e, 10);
                            if (!isFinite(a)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
                            e = a
                        }
                        var n = this,
                            s = e;
                        s < 0 && (s = 0);
                        var o = n.params,
                            l = n.snapGrid,
                            d = n.slidesGrid,
                            c = n.previousIndex,
                            p = n.activeIndex,
                            u = n.rtlTranslate,
                            v = n.wrapperEl;
                        if (n.animating && o.preventInteractionOnTransition) return !1;
                        var m = Math.min(n.params.slidesPerGroupSkip, s),
                            f = m + Math.floor((s - m) / n.params.slidesPerGroup);
                        f >= l.length && (f = l.length - 1), (p || o.initialSlide || 0) === (c || 0) && i && n.emit("beforeSlideChangeStart");
                        var h, g = -l[f];
                        if (n.updateProgress(g), o.normalizeSlideIndex)
                            for (var w = 0; w < d.length; w += 1) {
                                var b = -Math.floor(100 * g),
                                    y = Math.floor(100 * d[w]),
                                    C = Math.floor(100 * d[w + 1]);
                                void 0 !== d[w + 1] ? b >= y && b < C - (C - y) / 2 ? s = w : b >= y && b < C && (s = w + 1) : b >= y && (s = w)
                            }
                        if (n.initialized && s !== p) {
                            if (!n.allowSlideNext && g < n.translate && g < n.minTranslate()) return !1;
                            if (!n.allowSlidePrev && g > n.translate && g > n.maxTranslate() && (p || 0) !== s) return !1
                        }
                        if (h = s > p ? "next" : s < p ? "prev" : "reset", u && -g === n.translate || !u && g === n.translate) return n.updateActiveIndex(s), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(g), "reset" !== h && (n.transitionStart(i, h), n.transitionEnd(i, h)), !1;
                        if (o.cssMode) {
                            var T, x = n.isHorizontal(),
                                S = -g;
                            return u && (S = v.scrollWidth - v.offsetWidth - S), 0 === t ? v[x ? "scrollLeft" : "scrollTop"] = S : v.scrollTo ? v.scrollTo(((T = {})[x ? "left" : "top"] = S, T.behavior = "smooth", T)) : v[x ? "scrollLeft" : "scrollTop"] = S, !0
                        }
                        return 0 === t ? (n.setTransition(0), n.setTranslate(g), n.updateActiveIndex(s), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, r), n.transitionStart(i, h), n.transitionEnd(i, h)) : (n.setTransition(t), n.setTranslate(g), n.updateActiveIndex(s), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, r), n.transitionStart(i, h), n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
                            n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(i, h))
                        }), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd))), !0
                    },
                    slideToLoop: function(e, t, i, r) {
                        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                        var a = this,
                            n = e;
                        return a.params.loop && (n += a.loopedSlides), a.slideTo(n, t, i, r)
                    },
                    slideNext: function(e, t, i) {
                        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                        var r = this,
                            a = r.params,
                            n = r.animating,
                            s = r.activeIndex < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup;
                        if (a.loop) {
                            if (n && a.loopPreventsSlide) return !1;
                            r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft
                        }
                        return r.slideTo(r.activeIndex + s, e, t, i)
                    },
                    slidePrev: function(e, t, i) {
                        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                        var r = this,
                            a = r.params,
                            n = r.animating,
                            s = r.snapGrid,
                            o = r.slidesGrid,
                            l = r.rtlTranslate;
                        if (a.loop) {
                            if (n && a.loopPreventsSlide) return !1;
                            r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft
                        }

                        function d(e) {
                            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                        }
                        var c, p = d(l ? r.translate : -r.translate),
                            u = s.map((function(e) {
                                return d(e)
                            })),
                            v = (s[u.indexOf(p)], s[u.indexOf(p) - 1]);
                        return void 0 === v && a.cssMode && s.forEach((function(e) {
                            !v && p >= e && (v = e)
                        })), void 0 !== v && (c = o.indexOf(v)) < 0 && (c = r.activeIndex - 1), r.slideTo(c, e, t, i)
                    },
                    slideReset: function(e, t, i) {
                        return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
                    },
                    slideToClosest: function(e, t, i, r) {
                        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === r && (r = .5);
                        var a = this,
                            n = a.activeIndex,
                            s = Math.min(a.params.slidesPerGroupSkip, n),
                            o = s + Math.floor((n - s) / a.params.slidesPerGroup),
                            l = a.rtlTranslate ? a.translate : -a.translate;
                        if (l >= a.snapGrid[o]) {
                            var d = a.snapGrid[o];
                            l - d > (a.snapGrid[o + 1] - d) * r && (n += a.params.slidesPerGroup)
                        } else {
                            var c = a.snapGrid[o - 1];
                            l - c <= (a.snapGrid[o] - c) * r && (n -= a.params.slidesPerGroup)
                        }
                        return n = Math.max(n, 0), n = Math.min(n, a.slidesGrid.length - 1), a.slideTo(n, e, t, i)
                    },
                    slideToClickedSlide: function() {
                        var e, t = this,
                            i = t.params,
                            r = t.$wrapperEl,
                            a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                            n = t.clickedIndex;
                        if (i.loop) {
                            if (t.animating) return;
                            e = parseInt(V(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? n < t.loopedSlides - a / 2 || n > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), n = r.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), R((function() {
                                t.slideTo(n)
                            }))) : t.slideTo(n) : n > t.slides.length - a ? (t.loopFix(), n = r.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), R((function() {
                                t.slideTo(n)
                            }))) : t.slideTo(n)
                        } else t.slideTo(n)
                    }
                },
                loop: {
                    loopCreate: function() {
                        var e = this,
                            t = M(),
                            i = e.params,
                            r = e.$wrapperEl;
                        r.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                        var a = r.children("." + i.slideClass);
                        if (i.loopFillGroupWithBlank) {
                            var n = i.slidesPerGroup - a.length % i.slidesPerGroup;
                            if (n !== i.slidesPerGroup) {
                                for (var s = 0; s < n; s += 1) {
                                    var o = V(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                                    r.append(o)
                                }
                                a = r.children("." + i.slideClass)
                            }
                        }
                        "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length);
                        var l = [],
                            d = [];
                        a.each((function(t, i) {
                            var r = V(t);
                            i < e.loopedSlides && d.push(t), i < a.length && i >= a.length - e.loopedSlides && l.push(t), r.attr("data-swiper-slide-index", i)
                        }));
                        for (var c = 0; c < d.length; c += 1) r.append(V(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
                        for (var p = l.length - 1; p >= 0; p -= 1) r.prepend(V(l[p].cloneNode(!0)).addClass(i.slideDuplicateClass))
                    },
                    loopFix: function() {
                        var e = this;
                        e.emit("beforeLoopFix");
                        var t, i = e.activeIndex,
                            r = e.slides,
                            a = e.loopedSlides,
                            n = e.allowSlidePrev,
                            s = e.allowSlideNext,
                            o = e.snapGrid,
                            l = e.rtlTranslate;
                        e.allowSlidePrev = !0, e.allowSlideNext = !0;
                        var d = -o[i] - e.getTranslate();
                        i < a ? (t = r.length - 3 * a + i, t += a, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)) : i >= r.length - a && (t = -r.length + i + a, t += a, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)), e.allowSlidePrev = n, e.allowSlideNext = s, e.emit("loopFix")
                    },
                    loopDestroy: function() {
                        var e = this,
                            t = e.$wrapperEl,
                            i = e.params,
                            r = e.slides;
                        t.children("." + i.slideClass + "." + i.slideDuplicateClass + ",." + i.slideClass + "." + i.slideBlankClass).remove(), r.removeAttr("data-swiper-slide-index")
                    }
                },
                grabCursor: {
                    setGrabCursor: function(e) {
                        var t = this;
                        if (!(t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
                            var i = t.el;
                            i.style.cursor = "move", i.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", i.style.cursor = e ? "-moz-grabbin" : "-moz-grab", i.style.cursor = e ? "grabbing" : "grab"
                        }
                    },
                    unsetGrabCursor: function() {
                        var e = this;
                        e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "")
                    }
                },
                manipulation: {
                    appendSlide: function(e) {
                        var t = this,
                            i = t.$wrapperEl,
                            r = t.params;
                        if (r.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                            for (var a = 0; a < e.length; a += 1) e[a] && i.append(e[a]);
                        else i.append(e);
                        r.loop && t.loopCreate(), r.observer && t.support.observer || t.update()
                    },
                    prependSlide: function(e) {
                        var t = this,
                            i = t.params,
                            r = t.$wrapperEl,
                            a = t.activeIndex;
                        i.loop && t.loopDestroy();
                        var n = a + 1;
                        if ("object" == typeof e && "length" in e) {
                            for (var s = 0; s < e.length; s += 1) e[s] && r.prepend(e[s]);
                            n = a + e.length
                        } else r.prepend(e);
                        i.loop && t.loopCreate(), i.observer && t.support.observer || t.update(), t.slideTo(n, 0, !1)
                    },
                    addSlide: function(e, t) {
                        var i = this,
                            r = i.$wrapperEl,
                            a = i.params,
                            n = i.activeIndex;
                        a.loop && (n -= i.loopedSlides, i.loopDestroy(), i.slides = r.children("." + a.slideClass));
                        var s = i.slides.length;
                        if (e <= 0) i.prependSlide(t);
                        else if (e >= s) i.appendSlide(t);
                        else {
                            for (var o = n > e ? n + 1 : n, l = [], d = s - 1; d >= e; d -= 1) {
                                var c = i.slides.eq(d);
                                c.remove(), l.unshift(c)
                            }
                            if ("object" == typeof t && "length" in t) {
                                for (var p = 0; p < t.length; p += 1) t[p] && r.append(t[p]);
                                o = n > e ? n + t.length : n
                            } else r.append(t);
                            for (var u = 0; u < l.length; u += 1) r.append(l[u]);
                            a.loop && i.loopCreate(), a.observer && i.support.observer || i.update(), a.loop ? i.slideTo(o + i.loopedSlides, 0, !1) : i.slideTo(o, 0, !1)
                        }
                    },
                    removeSlide: function(e) {
                        var t = this,
                            i = t.params,
                            r = t.$wrapperEl,
                            a = t.activeIndex;
                        i.loop && (a -= t.loopedSlides, t.loopDestroy(), t.slides = r.children("." + i.slideClass));
                        var n, s = a;
                        if ("object" == typeof e && "length" in e) {
                            for (var o = 0; o < e.length; o += 1) n = e[o], t.slides[n] && t.slides.eq(n).remove(), n < s && (s -= 1);
                            s = Math.max(s, 0)
                        } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < s && (s -= 1), s = Math.max(s, 0);
                        i.loop && t.loopCreate(), i.observer && t.support.observer || t.update(), i.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1)
                    },
                    removeAllSlides: function() {
                        for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                        this.removeSlide(e)
                    }
                },
                events: {
                    attachEvents: function() {
                        var e = this,
                            t = M(),
                            i = e.params,
                            r = e.touchEvents,
                            a = e.el,
                            n = e.wrapperEl,
                            s = e.device,
                            o = e.support;
                        e.onTouchStart = se.bind(e), e.onTouchMove = oe.bind(e), e.onTouchEnd = le.bind(e), i.cssMode && (e.onScroll = pe.bind(e)), e.onClick = ce.bind(e);
                        var l = !!i.nested;
                        if (!o.touch && o.pointerEvents) a.addEventListener(r.start, e.onTouchStart, !1), t.addEventListener(r.move, e.onTouchMove, l), t.addEventListener(r.end, e.onTouchEnd, !1);
                        else {
                            if (o.touch) {
                                var d = !("touchstart" !== r.start || !o.passiveListener || !i.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                                a.addEventListener(r.start, e.onTouchStart, d), a.addEventListener(r.move, e.onTouchMove, o.passiveListener ? {
                                    passive: !1,
                                    capture: l
                                } : l), a.addEventListener(r.end, e.onTouchEnd, d), r.cancel && a.addEventListener(r.cancel, e.onTouchEnd, d), ue || (t.addEventListener("touchstart", ve), ue = !0)
                            }(i.simulateTouch && !s.ios && !s.android || i.simulateTouch && !o.touch && s.ios) && (a.addEventListener("mousedown", e.onTouchStart, !1), t.addEventListener("mousemove", e.onTouchMove, l), t.addEventListener("mouseup", e.onTouchEnd, !1))
                        }(i.preventClicks || i.preventClicksPropagation) && a.addEventListener("click", e.onClick, !0), i.cssMode && n.addEventListener("scroll", e.onScroll), i.updateOnWindowResize ? e.on(s.ios || s.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", de, !0) : e.on("observerUpdate", de, !0)
                    },
                    detachEvents: function() {
                        var e = this,
                            t = M(),
                            i = e.params,
                            r = e.touchEvents,
                            a = e.el,
                            n = e.wrapperEl,
                            s = e.device,
                            o = e.support,
                            l = !!i.nested;
                        if (!o.touch && o.pointerEvents) a.removeEventListener(r.start, e.onTouchStart, !1), t.removeEventListener(r.move, e.onTouchMove, l), t.removeEventListener(r.end, e.onTouchEnd, !1);
                        else {
                            if (o.touch) {
                                var d = !("onTouchStart" !== r.start || !o.passiveListener || !i.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                                a.removeEventListener(r.start, e.onTouchStart, d), a.removeEventListener(r.move, e.onTouchMove, l), a.removeEventListener(r.end, e.onTouchEnd, d), r.cancel && a.removeEventListener(r.cancel, e.onTouchEnd, d)
                            }(i.simulateTouch && !s.ios && !s.android || i.simulateTouch && !o.touch && s.ios) && (a.removeEventListener("mousedown", e.onTouchStart, !1), t.removeEventListener("mousemove", e.onTouchMove, l), t.removeEventListener("mouseup", e.onTouchEnd, !1))
                        }(i.preventClicks || i.preventClicksPropagation) && a.removeEventListener("click", e.onClick, !0), i.cssMode && n.removeEventListener("scroll", e.onScroll), e.off(s.ios || s.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", de)
                    }
                },
                breakpoints: {
                    setBreakpoint: function() {
                        var e = this,
                            t = e.activeIndex,
                            i = e.initialized,
                            r = e.loopedSlides,
                            a = void 0 === r ? 0 : r,
                            n = e.params,
                            s = e.$el,
                            o = n.breakpoints;
                        if (o && (!o || 0 !== Object.keys(o).length)) {
                            var l = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
                            if (l && e.currentBreakpoint !== l) {
                                var d = l in o ? o[l] : void 0;
                                d && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function(e) {
                                    var t = d[e];
                                    void 0 !== t && (d[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                                }));
                                var c = d || e.originalParams,
                                    p = n.slidesPerColumn > 1,
                                    u = c.slidesPerColumn > 1;
                                p && !u ? (s.removeClass(n.containerModifierClass + "multirow " + n.containerModifierClass + "multirow-column"), e.emitContainerClasses()) : !p && u && (s.addClass(n.containerModifierClass + "multirow"), "column" === c.slidesPerColumnFill && s.addClass(n.containerModifierClass + "multirow-column"), e.emitContainerClasses());
                                var v = c.direction && c.direction !== n.direction,
                                    m = n.loop && (c.slidesPerView !== n.slidesPerView || v);
                                v && i && e.changeDirection(), Y(e.params, c), Y(e, {
                                    allowTouchMove: e.params.allowTouchMove,
                                    allowSlideNext: e.params.allowSlideNext,
                                    allowSlidePrev: e.params.allowSlidePrev
                                }), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", c), m && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", c)
                            }
                        }
                    },
                    getBreakpoint: function(e, t, i) {
                        if (void 0 === t && (t = "window"), e && ("container" !== t || i)) {
                            var r = !1,
                                a = L(),
                                n = "window" === t ? a.innerWidth : i.clientWidth,
                                s = "window" === t ? a.innerHeight : i.clientHeight,
                                o = Object.keys(e).map((function(e) {
                                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                                        var t = parseFloat(e.substr(1));
                                        return {
                                            value: s * t,
                                            point: e
                                        }
                                    }
                                    return {
                                        value: e,
                                        point: e
                                    }
                                }));
                            o.sort((function(e, t) {
                                return parseInt(e.value, 10) - parseInt(t.value, 10)
                            }));
                            for (var l = 0; l < o.length; l += 1) {
                                var d = o[l],
                                    c = d.point;
                                d.value <= n && (r = c)
                            }
                            return r || "max"
                        }
                    }
                },
                checkOverflow: {
                    checkOverflow: function() {
                        var e = this,
                            t = e.params,
                            i = e.isLocked,
                            r = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
                        t.slidesOffsetBefore && t.slidesOffsetAfter && r ? e.isLocked = r <= e.size : e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, i !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), i && i !== e.isLocked && (e.isEnd = !1, e.navigation && e.navigation.update())
                    }
                },
                classes: {
                    addClasses: function() {
                        var e, t, i, r = this,
                            a = r.classNames,
                            n = r.params,
                            s = r.rtl,
                            o = r.$el,
                            l = r.device,
                            d = r.support,
                            c = (e = ["initialized", n.direction, {
                                "pointer-events": d.pointerEvents && !d.touch
                            }, {
                                "free-mode": n.freeMode
                            }, {
                                autoheight: n.autoHeight
                            }, {
                                rtl: s
                            }, {
                                multirow: n.slidesPerColumn > 1
                            }, {
                                "multirow-column": n.slidesPerColumn > 1 && "column" === n.slidesPerColumnFill
                            }, {
                                android: l.android
                            }, {
                                ios: l.ios
                            }, {
                                "css-mode": n.cssMode
                            }], t = n.containerModifierClass, i = [], e.forEach((function(e) {
                                "object" == typeof e ? Object.keys(e).forEach((function(r) {
                                    e[r] && i.push(t + r)
                                })) : "string" == typeof e && i.push(t + e)
                            })), i);
                        a.push.apply(a, c), o.addClass([].concat(a).join(" ")), r.emitContainerClasses()
                    },
                    removeClasses: function() {
                        var e = this,
                            t = e.$el,
                            i = e.classNames;
                        t.removeClass(i.join(" ")), e.emitContainerClasses()
                    }
                },
                images: {
                    loadImage: function(e, t, i, r, a, n) {
                        var s, o = L();

                        function l() {
                            n && n()
                        }
                        V(e).parent("picture")[0] || e.complete && a ? l() : t ? ((s = new o.Image).onload = l, s.onerror = l, r && (s.sizes = r), i && (s.srcset = i), t && (s.src = t)) : l()
                    },
                    preloadImages: function() {
                        var e = this;

                        function t() {
                            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                        }
                        e.imagesToLoad = e.$el.find("img");
                        for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                            var r = e.imagesToLoad[i];
                            e.loadImage(r, r.currentSrc || r.getAttribute("src"), r.srcset || r.getAttribute("srcset"), r.sizes || r.getAttribute("sizes"), !0, t)
                        }
                    }
                }
            },
            ge = {},
            we = function() {
                function e() {
                    for (var t, i, r = arguments.length, a = new Array(r), n = 0; n < r; n++) a[n] = arguments[n];
                    if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? i = a[0] : (t = a[0], i = a[1]), i || (i = {}), i = Y({}, i), t && !i.el && (i.el = t), i.el && V(i.el).length > 1) {
                        var s = [];
                        return V(i.el).each((function(t) {
                            var r = Y({}, i, {
                                el: t
                            });
                            s.push(new e(r))
                        })), s
                    }
                    var o = this;
                    o.__swiper__ = !0, o.support = Q(), o.device = ee({
                        userAgent: i.userAgent
                    }), o.browser = te(), o.eventsListeners = {}, o.eventsAnyListeners = [], void 0 === o.modules && (o.modules = {}), Object.keys(o.modules).forEach((function(e) {
                        var t = o.modules[e];
                        if (t.params) {
                            var r = Object.keys(t.params)[0],
                                a = t.params[r];
                            if ("object" != typeof a || null === a) return;
                            if (!(r in i) || !("enabled" in a)) return;
                            !0 === i[r] && (i[r] = {
                                enabled: !0
                            }), "object" != typeof i[r] || "enabled" in i[r] || (i[r].enabled = !0), i[r] || (i[r] = {
                                enabled: !1
                            })
                        }
                    }));
                    var l, d, c = Y({}, me);
                    return o.useParams(c), o.params = Y({}, c, ge, i), o.originalParams = Y({}, o.params), o.passedParams = Y({}, i), o.params && o.params.on && Object.keys(o.params.on).forEach((function(e) {
                        o.on(e, o.params.on[e])
                    })), o.params && o.params.onAny && o.onAny(o.params.onAny), o.$ = V, Y(o, {
                        el: t,
                        classNames: [],
                        slides: V(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function() {
                            return "horizontal" === o.params.direction
                        },
                        isVertical: function() {
                            return "vertical" === o.params.direction
                        },
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: o.params.allowSlideNext,
                        allowSlidePrev: o.params.allowSlidePrev,
                        touchEvents: (l = ["touchstart", "touchmove", "touchend", "touchcancel"], d = ["mousedown", "mousemove", "mouseup"], o.support.pointerEvents && (d = ["pointerdown", "pointermove", "pointerup"]), o.touchEventsTouch = {
                            start: l[0],
                            move: l[1],
                            end: l[2],
                            cancel: l[3]
                        }, o.touchEventsDesktop = {
                            start: d[0],
                            move: d[1],
                            end: d[2]
                        }, o.support.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video, label",
                            lastClickTime: W(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: o.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), o.useModules(), o.emit("_swiper"), o.params.init && o.init(), o
                }
                var t, i, r = e.prototype;
                return r.setProgress = function(e, t) {
                    var i = this;
                    e = Math.min(Math.max(e, 0), 1);
                    var r = i.minTranslate(),
                        a = (i.maxTranslate() - r) * e + r;
                    i.translateTo(a, void 0 === t ? 0 : t), i.updateActiveIndex(), i.updateSlidesClasses()
                }, r.emitContainerClasses = function() {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                        var t = e.el.className.split(" ").filter((function(t) {
                            return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass)
                        }));
                        e.emit("_containerClasses", t.join(" "))
                    }
                }, r.getSlideClasses = function(e) {
                    var t = this;
                    return e.className.split(" ").filter((function(e) {
                        return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)
                    })).join(" ")
                }, r.emitSlidesClasses = function() {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                        var t = [];
                        e.slides.each((function(i) {
                            var r = e.getSlideClasses(i);
                            t.push({
                                slideEl: i,
                                classNames: r
                            }), e.emit("_slideClass", i, r)
                        })), e.emit("_slideClasses", t)
                    }
                }, r.slidesPerViewDynamic = function() {
                    var e = this,
                        t = e.params,
                        i = e.slides,
                        r = e.slidesGrid,
                        a = e.size,
                        n = e.activeIndex,
                        s = 1;
                    if (t.centeredSlides) {
                        for (var o, l = i[n].swiperSlideSize, d = n + 1; d < i.length; d += 1) i[d] && !o && (s += 1, (l += i[d].swiperSlideSize) > a && (o = !0));
                        for (var c = n - 1; c >= 0; c -= 1) i[c] && !o && (s += 1, (l += i[c].swiperSlideSize) > a && (o = !0))
                    } else
                        for (var p = n + 1; p < i.length; p += 1) r[p] - r[n] < a && (s += 1);
                    return s
                }, r.update = function() {
                    var e = this;
                    if (e && !e.destroyed) {
                        var t = e.snapGrid,
                            i = e.params;
                        i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (r(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || r(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                    }

                    function r() {
                        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                }, r.changeDirection = function(e, t) {
                    void 0 === t && (t = !0);
                    var i = this,
                        r = i.params.direction;
                    return e || (e = "horizontal" === r ? "vertical" : "horizontal"), e === r || "horizontal" !== e && "vertical" !== e || (i.$el.removeClass("" + i.params.containerModifierClass + r).addClass("" + i.params.containerModifierClass + e), i.emitContainerClasses(), i.params.direction = e, i.slides.each((function(t) {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    })), i.emit("changeDirection"), t && i.update()), i
                }, r.mount = function(e) {
                    var t = this;
                    if (t.mounted) return !0;
                    var i, r = V(e || t.params.el);
                    return !!(e = r[0]) && (e.swiper = t, e && e.shadowRoot && e.shadowRoot.querySelector ? (i = V(e.shadowRoot.querySelector("." + t.params.wrapperClass))).children = function(e) {
                        return r.children(e)
                    } : i = r.children("." + t.params.wrapperClass), Y(t, {
                        $el: r,
                        el: e,
                        $wrapperEl: i,
                        wrapperEl: i[0],
                        mounted: !0,
                        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction")),
                        wrongRTL: "-webkit-box" === i.css("display")
                    }), !0)
                }, r.init = function(e) {
                    var t = this;
                    return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
                }, r.destroy = function(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var i, r = this,
                        a = r.params,
                        n = r.$el,
                        s = r.$wrapperEl,
                        o = r.slides;
                    return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), a.loop && r.loopDestroy(), t && (r.removeClasses(), n.removeAttr("style"), s.removeAttr("style"), o && o.length && o.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), r.emit("destroy"), Object.keys(r.eventsListeners).forEach((function(e) {
                        r.off(e)
                    })), !1 !== e && (r.$el[0].swiper = null, i = r, Object.keys(i).forEach((function(e) {
                        try {
                            i[e] = null
                        } catch (e) {}
                        try {
                            delete i[e]
                        } catch (e) {}
                    }))), r.destroyed = !0), null
                }, e.extendDefaults = function(e) {
                    Y(ge, e)
                }, e.installModule = function(t) {
                    e.prototype.modules || (e.prototype.modules = {});
                    var i = t.name || Object.keys(e.prototype.modules).length + "_" + W();
                    e.prototype.modules[i] = t
                }, e.use = function(t) {
                    return Array.isArray(t) ? (t.forEach((function(t) {
                        return e.installModule(t)
                    })), e) : (e.installModule(t), e)
                }, t = e, i = [{
                    key: "extendedDefaults",
                    get: function() {
                        return ge
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return me
                    }
                }], null && fe(t.prototype, null), i && fe(t, i), e
            }();
        Object.keys(he).forEach((function(e) {
            Object.keys(he[e]).forEach((function(t) {
                we.prototype[t] = he[e][t]
            }))
        })), we.use([ie, ne]);
        const be = we;

        function ye() {
            return (ye = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
                }
                return e
            }).apply(this, arguments)
        }
        var Ce = {
            toggleEl: function(e, t) {
                e[t ? "addClass" : "removeClass"](this.params.navigation.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t)
            },
            update: function() {
                var e = this,
                    t = e.params.navigation,
                    i = e.navigation.toggleEl;
                if (!e.params.loop) {
                    var r = e.navigation,
                        a = r.$nextEl,
                        n = r.$prevEl;
                    n && n.length > 0 && (e.isBeginning ? i(n, !0) : i(n, !1), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), a && a.length > 0 && (e.isEnd ? i(a, !0) : i(a, !1), a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                }
            },
            onPrevClick: function(e) {
                var t = this;
                e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev()
            },
            onNextClick: function(e) {
                var t = this;
                e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext()
            },
            init: function() {
                var e, t, i = this,
                    r = i.params.navigation;
                (r.nextEl || r.prevEl) && (r.nextEl && (e = V(r.nextEl), i.params.uniqueNavElements && "string" == typeof r.nextEl && e.length > 1 && 1 === i.$el.find(r.nextEl).length && (e = i.$el.find(r.nextEl))), r.prevEl && (t = V(r.prevEl), i.params.uniqueNavElements && "string" == typeof r.prevEl && t.length > 1 && 1 === i.$el.find(r.prevEl).length && (t = i.$el.find(r.prevEl))), e && e.length > 0 && e.on("click", i.navigation.onNextClick), t && t.length > 0 && t.on("click", i.navigation.onPrevClick), Y(i.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }))
            },
            destroy: function() {
                var e = this,
                    t = e.navigation,
                    i = t.$nextEl,
                    r = t.$prevEl;
                i && i.length && (i.off("click", e.navigation.onNextClick), i.removeClass(e.params.navigation.disabledClass)), r && r.length && (r.off("click", e.navigation.onPrevClick), r.removeClass(e.params.navigation.disabledClass))
            }
        };
        const Te = {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                X(this, {
                    navigation: ye({}, Ce)
                })
            },
            on: {
                init: function(e) {
                    e.navigation.init(), e.navigation.update()
                },
                toEdge: function(e) {
                    e.navigation.update()
                },
                fromEdge: function(e) {
                    e.navigation.update()
                },
                destroy: function(e) {
                    e.navigation.destroy()
                },
                click: function(e, t) {
                    var i = e.navigation,
                        r = i.$nextEl,
                        a = i.$prevEl,
                        n = t.target;
                    if (e.params.navigation.hideOnClick && !V(n).is(a) && !V(n).is(r)) {
                        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === n || e.pagination.el.contains(n))) return;
                        var s;
                        r ? s = r.hasClass(e.params.navigation.hiddenClass) : a && (s = a.hasClass(e.params.navigation.hiddenClass)), !0 === s ? e.emit("navigationShow") : e.emit("navigationHide"), r && r.toggleClass(e.params.navigation.hiddenClass), a && a.toggleClass(e.params.navigation.hiddenClass)
                    }
                }
            }
        };

        function xe() {
            return (xe = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
                }
                return e
            }).apply(this, arguments)
        }
        var Se = {
            update: function() {
                var e = this,
                    t = e.rtl,
                    i = e.params.pagination;
                if (i.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var r, a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        n = e.pagination.$el,
                        s = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), r > s - 1 && (r -= s), r < 0 && "bullets" !== e.params.paginationType && (r = s + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === i.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                        var o, l, d, c = e.pagination.bullets;
                        if (i.dynamicBullets && (e.pagination.bulletSize = c.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), n.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"), i.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(c.length, i.dynamicMainBullets) - 1)) + o) / 2), c.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev " + i.bulletActiveClass + "-main"), n.length > 1) c.each((function(e) {
                            var t = V(e),
                                a = t.index();
                            a === r && t.addClass(i.bulletActiveClass), i.dynamicBullets && (a >= o && a <= l && t.addClass(i.bulletActiveClass + "-main"), a === o && t.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), a === l && t.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                        }));
                        else {
                            var p = c.eq(r),
                                u = p.index();
                            if (p.addClass(i.bulletActiveClass), i.dynamicBullets) {
                                for (var v = c.eq(o), m = c.eq(l), f = o; f <= l; f += 1) c.eq(f).addClass(i.bulletActiveClass + "-main");
                                if (e.params.loop)
                                    if (u >= c.length - i.dynamicMainBullets) {
                                        for (var h = i.dynamicMainBullets; h >= 0; h -= 1) c.eq(c.length - h).addClass(i.bulletActiveClass + "-main");
                                        c.eq(c.length - i.dynamicMainBullets - 1).addClass(i.bulletActiveClass + "-prev")
                                    } else v.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), m.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next");
                                else v.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), m.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")
                            }
                        }
                        if (i.dynamicBullets) {
                            var g = Math.min(c.length, i.dynamicMainBullets + 4),
                                w = (e.pagination.bulletSize * g - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                                b = t ? "right" : "left";
                            c.css(e.isHorizontal() ? b : "top", w + "px")
                        }
                    }
                    if ("fraction" === i.type && (n.find(U(i.currentClass)).text(i.formatFractionCurrent(r + 1)), n.find(U(i.totalClass)).text(i.formatFractionTotal(s))), "progressbar" === i.type) {
                        var y;
                        y = i.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                        var C = (r + 1) / s,
                            T = 1,
                            x = 1;
                        "horizontal" === y ? T = C : x = C, n.find(U(i.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + x + ")").transition(e.params.speed)
                    }
                    "custom" === i.type && i.renderCustom ? (n.html(i.renderCustom(e, r + 1, s)), e.emit("paginationRender", n[0])) : e.emit("paginationUpdate", n[0]), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](i.lockClass)
                }
            },
            render: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        r = e.pagination.$el,
                        a = "";
                    if ("bullets" === t.type) {
                        var n = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                        e.params.freeMode && !e.params.loop && n > i && (n = i);
                        for (var s = 0; s < n; s += 1) t.renderBullet ? a += t.renderBullet.call(e, s, t.bulletClass) : a += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                        r.html(a), e.pagination.bullets = r.find(U(t.bulletClass))
                    }
                    "fraction" === t.type && (a = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', r.html(a)), "progressbar" === t.type && (a = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', r.html(a)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                }
            },
            init: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el) {
                    var i = V(t.el);
                    0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", U(t.bulletClass), (function(t) {
                        t.preventDefault();
                        var i = V(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                    })), Y(e.pagination, {
                        $el: i,
                        el: i[0]
                    }))
                }
            },
            destroy: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var i = e.pagination.$el;
                    i.removeClass(t.hiddenClass), i.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && i.off("click", U(t.bulletClass))
                }
            }
        };
        const Ee = {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function(e) {
                        return e
                    },
                    formatFractionTotal: function(e) {
                        return e
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                X(this, {
                    pagination: xe({
                        dynamicBulletIndex: 0
                    }, Se)
                })
            },
            on: {
                init: function(e) {
                    e.pagination.init(), e.pagination.render(), e.pagination.update()
                },
                activeIndexChange: function(e) {
                    (e.params.loop || void 0 === e.snapIndex) && e.pagination.update()
                },
                snapIndexChange: function(e) {
                    e.params.loop || e.pagination.update()
                },
                slidesLengthChange: function(e) {
                    e.params.loop && (e.pagination.render(), e.pagination.update())
                },
                snapGridLengthChange: function(e) {
                    e.params.loop || (e.pagination.render(), e.pagination.update())
                },
                destroy: function(e) {
                    e.pagination.destroy()
                },
                click: function(e, t) {
                    var i = t.target;
                    if (e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !V(i).hasClass(e.params.pagination.bulletClass)) {
                        if (e.navigation && (e.navigation.nextEl && i === e.navigation.nextEl || e.navigation.prevEl && i === e.navigation.prevEl)) return;
                        !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)
                    }
                }
            }
        };
        be.use([Te, Ee]), window.addEventListener("DOMContentLoaded", (function() {
            new be(".swiper-container", {
                loop: !0,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: !0
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            })
        }));
        var ke = i(549),
            ze = i(903),
            Me = i(329),
            Pe = i(734),
            Le = i(298),
            _e = i(733),
            Oe = i(418),
            Ae = i(666),
            Ie = i(697);

        function je(e, t, i, r, a, n, s) {
            try {
                var o = e[n](s),
                    l = o.value
            } catch (e) {
                return void i(e)
            }
            o.done ? t(l) : Promise.resolve(l).then(r, a)
        }

        function Be(e) {
            return function() {
                var t = this,
                    i = arguments;
                return new Promise((function(r, a) {
                    var n = e.apply(t, i);

                    function s(e) {
                        je(n, r, a, s, o, "next", e)
                    }

                    function o(e) {
                        je(n, r, a, s, o, "throw", e)
                    }
                    s(void 0)
                }))
            }
        }
        var De = document.getElementById("current-weather-info"),
            Ge = De.querySelector("#current-temp"),
            Ne = De.querySelector("#current-description"),
            He = De.querySelector("#current-icon"),
            $e = document.getElementById("next-days-name"),
            Fe = document.getElementById("next-days-weather"),
            Ve = document.getElementById("loader");

        function Re() {
            var e;
            switch ((new Date).getDay()) {
                case 1:
                    e = ["wt", "śr", "czw"];
                    break;
                case 2:
                    e = ["śr", "czw", "pt"];
                    break;
                case 3:
                    e = ["czw", "pt", "sob"];
                    break;
                case 4:
                    e = ["pt", "sob", "ndz"];
                    break;
                case 5:
                    e = ["sob", "ndz", "pon"];
                    break;
                case 6:
                    e = ["ndz", "pon", "wt"];
                    break;
                case 0:
                    e = ["pon", "wt", "śr"]
            }
            return e
        }

        function We(e) {
            switch (e) {
                case "01d":
                case "01n":
                    return ke;
                case "02d":
                case "02n":
                    return ze;
                case "03d":
                case "03n":
                    return Me;
                case "04d":
                case "04n":
                    return Pe;
                case "09d":
                case "09n":
                    return Le;
                case "10d":
                case "10n":
                    return _e;
                case "11d":
                case "11n":
                    return Oe;
                case "13d":
                case "13n":
                    return Ae;
                case "50d":
                case "50n":
                    return Ie
            }
        }

        function qe(e) {
            return "<p class='aside__weather__next-days-weather-list__item__name'>".concat(e, "</p>")
        }

        function Ye(e, t, i) {
            var r = We(e);
            return "<li class='aside__weather__next-days-weather-list__item'>\n    <img class='aside__weather__next-days-weather-list__item__img' src=".concat(r, " alt='weather-icon'/>\n    <p class='aside__weather__next-days-weather-list__item__day'>").concat(t, " &#176;C</p>\n    <p class='aside__weather__next-days-weather-list__item__night'>").concat(i, " &#176;C</p>\n  </li>")
        }
        var Xe = () => fetch("https://api.openweathermap.org/data/2.5/onecall?lat=52.233101&lon=21.061399&units=metric&appid=7b12d585cbc65cf743d1cd0b6019f123&lang=pl&units=metric").then((e => e.json()));

        function Ue() {
            return (Ue = Be((function*() {
                De.style.display = "none";
                var e = yield Xe();
                e && (Re().forEach((e => {
                    $e.insertAdjacentHTML("beforeend", qe(e))
                })), Ve.style.display = "none", De.style.display = "flex", Ge.innerHTML = e.current.temp.toFixed(0) + "&#176;C", Ne.textContent = e.current.weather[0].description, He.src = We(e.current.weather[0].icon), e.daily.slice(1, 4).forEach((e => {
                    Fe.insertAdjacentHTML("beforeend", Ye(e.weather[0].icon, e.temp.day.toFixed(0), e.temp.night.toFixed(0)))
                })))
            }))).apply(this, arguments)
        }
        document.addEventListener("DOMContentLoaded", (function() {
            return Ue.apply(this, arguments)
        })), i(144)
    })()
})();