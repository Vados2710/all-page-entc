(() => {
  var e = {
      260: () => {
        function e(e) {
          var t = new Date();
          return (
            t.setDate(t.getDate() - e),
            String(t.getDate()).padStart(2, "0") +
              "." +
              String(t.getMonth() + 1).padStart(2, "0") +
              "." +
              t.getFullYear()
          );
        }
        (document.getElementById("article-date").innerHTML = e(4)),
          (document.getElementById("publication-date").innerText = e(4)),
          (document.getElementById("promotion-date-1").innerHTML = e(0)),
          (document.getElementById("promotion-date-2").innerHTML = e(0)),
          (document.getElementById("aside-article-1-date").innerHTML = e(6)),
          (document.getElementById("aside-article-2-date").innerHTML = e(5)),
          (document.getElementById("aside-article-3-date").innerHTML = e(3));
      },
      417: () => {
        var e = document.getElementById("hamburger-btn"),
          t = document.getElementById("mobile-menu"),
          i = document.querySelector("body");
        e.addEventListener("click", function () {
          t.classList.toggle("visible"),
            i.classList.toggle("scroll-lock"),
            e.classList.toggle("open");
        });
      },
      927: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/aeed1453982982cd9c25.png";
      },
      822: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/37405a2f411dd13d6a55.png";
      },
      266: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/fbcff52d0a00885a1275.png";
      },
      591: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/00cf17519d7f5c8cf8d6.png";
      },
      677: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/0ee2aeeb28fccc04f8b1.png";
      },
      819: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/e4e87c2c76104f9f778d.png";
      },
      307: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/e78f14d31731e49b314f.png";
      },
      947: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/3c9ee50c3fec7bb4d91f.png";
      },
      817: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/fc2a3c54d74b12a72f21.png";
      },
      706: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/6b42fcd4ecdec852a0c9.png";
      },
      176: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/a9741fe965a34aaf1232.png";
      },
      989: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/08fcb4f82c710d5ea27e.png";
      },
      229: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/76919abc8abb20574659.png";
      },
      29: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/ec3dd1701bc4ccc564aa.png";
      },
      539: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/14485eb29ad393d0399e.png";
      },
      653: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/36d26ac24f47b45d66c4.png";
      },
      407: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/4d51b3a383e59f823f7b.png";
      },
      281: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/2eb50a8b9e295350ab4b.png";
      },
      121: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/217af4f05ef21067d0af.png";
      },
      951: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/review4.jpg";
      },
      796: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/b70e2a6524ddf74b9783.png";
      },
      49: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/review2.jpg";
      },
      146: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/review3.jpg";
      },
      843: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/review1.jpg";
      },
      734: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/e6663ab6322a5eaec1d6.png";
      },
      549: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/36db8f706a4f0e900dc2.png";
      },
      903: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/319b15e03f1b30714e9b.png";
      },
      697: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/85ba87958a828a21ba4b.png";
      },
      733: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/5178b91bf75e3fc932b6.png";
      },
      329: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/826d0111ad3d4fb9d6ef.png";
      },
      298: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/e78c8c56627e697f1174.png";
      },
      666: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/b3004cf8bc60dbb89df3.png";
      },
      418: (e, t, i) => {
        "use strict";
        e.exports = i.p + "../images/c9949dbf9d14e902f818.png";
      },
    },
    t = {};
  function i(r) {
    var n = t[r];
    if (void 0 !== n) return n.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, i), a.exports;
  }
  (i.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (() => {
      var e;
      i.g.importScripts && (e = i.g.location + "");
      var t = i.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName("script");
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (i.p = e);
    })(),
    (() => {
      "use strict";
      var e = i(29),
        t = i(927),
        r = i(407),
        n = i(989),
        a = i(281),
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
        b = i(706),
        w = [
          {
            type: "comment",
            author: "Asia Kucharska",
            avatar: e,
            text: "Gdzieś kiedyś czytałam o tych kapsułkach... piszecie tu, że działają, ale dla mnie to trochę nierealne. A już na pewno nie działają w taki sposób, by całkowicie przywrócić wzrok. Może to i dobrze dla oczu, ale dla niektórych pewnie za późno....",
            timestamp: "minutę temu",
            pictures: [],
          },
          {
            type: "comment",
            author: "Anna Jakubowska",
            avatar: t,
            text: "Rozumiem, że trudno jest uwierzyć na słowo. Dlatego zobaczcie wyniki mojej oftalmoskopii, jaka jest poprawa w tym miesiącu.",
            timestamp: "minutę temu",
            pictures: [i(121)],
          },
          {
            type: "comment",
            author: "Aleks Wróblewski",
            avatar: r,
            text: "Kupiłem go dla mojej mamy, która ma coraz gorszy wzrok. Paczka właśnie dziś dotarła, więc dla tych z Was, którzy zastanawiają się jak wyglądają kapsułki:",
            timestamp: "minutę temu",
            pictures: [i(843)],
          },
          {
            type: "reply",
            author: "Łucja Nowakowska",
            avatar: n,
            text: "@Alex Wróblewski lepiej pokaż zdjęcie szczęśliwej mamy :D",
            timestamp: "minutę temu",
            pictures: [],
          },
          {
            type: "reply",
            author: "Aleks Wróblewski",
            avatar: r,
            text: "To jest to!!!",
            timestamp: "minutę temu",
            pictures: [i(796)],
          },
          {
            type: "comment",
            author: "Ewa Cieślak",
            avatar: a,
            text: "Zamówiłam wczoraj, a kapsułki są już dzisiaj u mnie, super!!!",
            timestamp: "minutę temu",
            pictures: [],
          },
          {
            type: "comment",
            author: "Danuta Chojnowska",
            avatar: s,
            text: "Byłam w Stanach, kiedy po raz pierwszy usłyszałam o tych kapsułkach, moja kuzynka ich używała.... W tym czasie nie miałam żadnych problemów ze wzrokiem. Ale kiedy zaczęłam widzieć coraz gorzej, już wiedziałam, że muszę kupić jak najszybciej :)",
            timestamp: "wczoraj",
            pictures: [],
          },
          {
            type: "comment",
            author: "Krzysztof Skoczylas",
            avatar: o,
            text: "Z wykształcenia jestem biologiem i z tego co wiem, te kapsułki NIE MAJĄ PRAWA NIE DZIAŁAĆ.",
            timestamp: "wczoraj",
            pictures: [],
          },
          {
            type: "reply",
            author: "Artur Pomorski",
            avatar: l,
            text: "podwójna negacja daje...?",
            timestamp: "wczoraj",
            pictures: [],
          },
          {
            type: "reply",
            author: "Krzysztof Skoczylas",
            avatar: o,
            text: "Kapsułki działają zgodnie ze znanymi prawami biologii. @ArthurPomeranian, czy jesteś zadowolony? bezterminowo",
            timestamp: "wczoraj",
            pictures: [],
          },
          {
            type: "comment",
            author: "Anastazja Boniek",
            avatar: d,
            text: "Mam je w domu i biorę od miesiąca tygodnia. Bardzo podoba mi się koncepcja z tymi naturalnymi substancjami. Najważniejsze jest to, aby przyjmować te kapsułki codziennie, wtedy jest odpowiednie nasycenie substancjami aktywnymi. ",
            timestamp: "2 dni temu",
            pictures: [],
          },
          {
            type: "comment",
            author: "Bogumiła Iwicińska",
            avatar: c,
            text: "Czy mogę kupić takie kapsułki dla mojej nastoletniej córki, której wzrok z każdym rokiem gwałtownie się pogarsza?",
            timestamp: "2 dni temu",
            pictures: [],
          },
          {
            type: "reply",
            author: "Paweł Namysłowski",
            avatar: p,
            text: "@BogumiłaIwicińska Ja bym spróbował, tam są tylko bezpieczne składniki. Przyjmuje to spokojnie,nie jest już małym dzieckiem.",
            timestamp: "2 dni temu",
            pictures: [],
          },
          {
            type: "comment",
            author: "Tadeusz Rozumski",
            avatar: u,
            text: "Kiedyś koleżanka poleciła mi te kapsułki, wtedy myślałem, że jest kultystką. Ale to brzmi rozsądnie....",
            timestamp: "2 dni temu",
            pictures: [],
          },
          {
            type: "comment",
            author: "Dorota Okońska",
            avatar: v,
            text: "Właśnie otrzymałam świeżo pachnącą paczkę! Mam nadzieję na niesamowite efekty!",
            timestamp: "3 dni temu",
            pictures: [i(49)],
          },
          {
            type: "comment",
            author: "Lucyna Pośpiechalska",
            avatar: m,
            text: "Mam nawet specjalne miejsce na kapsułki :)",
            timestamp: "4 dni temu",
            pictures: [i(146)],
          },
          {
            type: "comment",
            author: "Jarek Zakrzewski",
            avatar: f,
            text: "Pracuję przy komputerze od wielu lat i serio, już prawie nic nie widzę... małe litery są rozmazane, a oczy bolą jak cholera. Mam dość ....",
            timestamp: "4 dni temu",
            pictures: [],
          },
          {
            type: "comment",
            author: "Czesław Trociński",
            avatar: h,
            text: "Wreszcie!!! Ta wiedza przebiła się do świadomości społecznej, czekałem na nią.",
            timestamp: "5 dni temu",
            pictures: [],
          },
          {
            type: "comment",
            author: "Czesław Trociński",
            avatar: g,
            text: "@Jarek Zakrzewski Miałem ten sam problem, nie powinno to dziwić haha!",
            timestamp: "5 dni temu",
            pictures: [i(951)],
          },
          {
            type: "comment",
            author: "Jerzy Wigura",
            avatar: b,
            text: "Podoba mi się!!! Połączenie nauki i starej medycyny naturalnej, świetna rzecz!",
            timestamp: "5 dni temu",
            pictures: [],
          },
        ],
        y = document.getElementById("comments-list");
      function C(e, t, i, r, n) {
        return (
          "<li class='comment-item'>\n      <div class='comment-item__avatar-wrapper'>\n        <img class='comment-item__avatar' src="
            .concat(
              t,
              " alt='avatar'/>\n      </div>\n        <div class='comment-item__content'>\n            <p class='comment-item__content__author'>"
            )
            .concat(e, "</p>") +
          S(i) +
          x(n) +
          "<div class='comment-item__btn-wrapper'>\n    <a class='comment-item__btn-wrapper__like-btn cta-btn'href=\"#form\">Podoba mi się!</a><span class=\"comment-item__btn-wrapper__bullet\"></span><a class='comment-item__btn-wrapper__answer-btn cta-btn' href=\"#form\">Odpowiedź</a><span class=\"comment-item__btn-wrapper__bullet\"></span><span class='comment-item__btn-wrapper__timestamp'>".concat(
            r,
            "</span>\n          </div>\n      </div>\n    </li>"
          )
        );
      }
      function T(e, t, i, r, n) {
        return (
          "<li  class='comment-item reply'>\n        <div class='comment-item__avatar-wrapper'>\n          <img class='comment-item__avatar' src="
            .concat(
              t,
              " alt=''/>\n        </div>\n        <div class='comment-item__content reply__content'>\n          <p class='comment-item__content__author'>"
            )
            .concat(e, "</p>") +
          S(i) +
          x(n) +
          "<div class='comment-item__btn-wrapper'>\n    <a class='comment-item__btn-wrapper__like-btn cta-btn'href=\"#form\">Podoba mi się!</a><span class=\"comment-item__btn-wrapper__bullet\"></span><a class='comment-item__btn-wrapper__answer-btn cta-btn'href=\"#form\">Odpowiedź</a><span class=\"comment-item__btn-wrapper__bullet\"></span><span class='comment-item__btn-wrapper__timestamp'>".concat(
            r,
            "</span>\n          </div>\n        </div>\n    </li>"
          )
        );
      }
      function x(e) {
        return e.length
          ? "<div class='comment-item__img-wrapper'>" +
              e
                .map((e, t) => "<img src=".concat(e, " alt=").concat(t, "/>"))
                .join("") +
              "</div>"
          : "";
      }
      function S(e) {
        var t,
          i = e.split(" ");
        return i.includes("@Tomasz") ||
          i.includes("@Alina") ||
          i.includes("@Jarek")
          ? ((t = i.slice(2).join(" ")),
            '<p class="comment-item__content__text"><span class="comment-item__content__text-bold">'
              .concat(i[0] + " " + i[1], "</span> ")
              .concat(t, "</p>"))
          : i.includes("@Artur")
          ? ((t = i.slice(0, 8).join(" ")),
            '<p class="comment-item__content__text">'
              .concat(t, ' <span class="comment-item__content__text-bold">')
              .concat(i[8] + " " + i[9], "</span> ")
              .concat(i[10], "</p>"))
          : '<p class="comment-item__content__text">'.concat(e, "</p>");
      }
      function E(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function k(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach(function (i) {
            void 0 === e[i]
              ? (e[i] = t[i])
              : E(t[i]) &&
                E(e[i]) &&
                Object.keys(t[i]).length > 0 &&
                k(e[i], t[i]);
          });
      }
      document.addEventListener("DOMContentLoaded", () => {
        for (var e of w) {
          var {
            type: t,
            author: i,
            avatar: r,
            replyTo: n,
            text: a,
            timestamp: s,
            pictures: o,
          } = e;
          if ("comment" === t)
            y.insertAdjacentHTML("beforeend", C(i, r, a, s, o));
          else {
            if ("reply" !== t) return null;
            y.insertAdjacentHTML("beforeend", T(i, r, a, s, o));
          }
        }
      }),
        i(417),
        i(260);
      var M = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: "" },
        querySelector: function () {
          return null;
        },
        querySelectorAll: function () {
          return [];
        },
        getElementById: function () {
          return null;
        },
        createEvent: function () {
          return { initEvent: function () {} };
        },
        createElement: function () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () {},
            getElementsByTagName: function () {
              return [];
            },
          };
        },
        createElementNS: function () {
          return {};
        },
        importNode: function () {
          return null;
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function z() {
        var e = "undefined" != typeof document ? document : {};
        return k(e, M), e;
      }
      var P = {
        document: M,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: {
          replaceState: function () {},
          pushState: function () {},
          go: function () {},
          back: function () {},
        },
        CustomEvent: function () {
          return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return "";
            },
          };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
          return {};
        },
        requestAnimationFrame: function (e) {
          return "undefined" == typeof setTimeout
            ? (e(), null)
            : setTimeout(e, 0);
        },
        cancelAnimationFrame: function (e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function L() {
        var e = "undefined" != typeof window ? window : {};
        return k(e, P), e;
      }
      function O(e) {
        return (O = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _(e, t) {
        return (_ =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function A(e, t, i) {
        return (A = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Reflect.construct
          : function (e, t, i) {
              var r = [null];
              r.push.apply(r, t);
              var n = new (Function.bind.apply(e, r))();
              return i && _(n, i.prototype), n;
            }).apply(null, arguments);
      }
      function j(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (j = function (e) {
          if (
            null === e ||
            ((i = e), -1 === Function.toString.call(i).indexOf("[native code]"))
          )
            return e;
          var i;
          if ("function" != typeof e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, r);
          }
          function r() {
            return A(e, arguments, O(this).constructor);
          }
          return (
            (r.prototype = Object.create(e.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            _(r, e)
          );
        })(e);
      }
      var I = (function (e) {
        var t, i;
        function r(t) {
          var i, r, n;
          return (
            (r = (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })((i = e.call.apply(e, [this].concat(t)) || this))),
            (n = r.__proto__),
            Object.defineProperty(r, "__proto__", {
              get: function () {
                return n;
              },
              set: function (e) {
                n.__proto__ = e;
              },
            }),
            i
          );
        }
        return (
          (i = e),
          ((t = r).prototype = Object.create(i.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = i),
          r
        );
      })(j(Array));
      function B(e) {
        void 0 === e && (e = []);
        var t = [];
        return (
          e.forEach(function (e) {
            Array.isArray(e) ? t.push.apply(t, B(e)) : t.push(e);
          }),
          t
        );
      }
      function D(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function G(e, t) {
        var i = L(),
          r = z(),
          n = [];
        if (!t && e instanceof I) return e;
        if (!e) return new I(n);
        if ("string" == typeof e) {
          var a = e.trim();
          if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
            var s = "div";
            0 === a.indexOf("<li") && (s = "ul"),
              0 === a.indexOf("<tr") && (s = "tbody"),
              (0 !== a.indexOf("<td") && 0 !== a.indexOf("<th")) || (s = "tr"),
              0 === a.indexOf("<tbody") && (s = "table"),
              0 === a.indexOf("<option") && (s = "select");
            var o = r.createElement(s);
            o.innerHTML = a;
            for (var l = 0; l < o.childNodes.length; l += 1)
              n.push(o.childNodes[l]);
          } else
            n = (function (e, t) {
              if ("string" != typeof e) return [e];
              for (
                var i = [], r = t.querySelectorAll(e), n = 0;
                n < r.length;
                n += 1
              )
                i.push(r[n]);
              return i;
            })(e.trim(), t || r);
        } else if (e.nodeType || e === i || e === r) n.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof I) return e;
          n = e;
        }
        return new I(
          (function (e) {
            for (var t = [], i = 0; i < e.length; i += 1)
              -1 === t.indexOf(e[i]) && t.push(e[i]);
            return t;
          })(n)
        );
      }
      G.fn = I.prototype;
      var N = "resize scroll".split(" ");
      function $(e) {
        return function () {
          for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
            i[r] = arguments[r];
          if (void 0 === i[0]) {
            for (var n = 0; n < this.length; n += 1)
              N.indexOf(e) < 0 &&
                (e in this[n] ? this[n][e]() : G(this[n]).trigger(e));
            return this;
          }
          return this.on.apply(this, [e].concat(i));
        };
      }
      $("click"),
        $("blur"),
        $("focus"),
        $("focusin"),
        $("focusout"),
        $("keyup"),
        $("keydown"),
        $("keypress"),
        $("submit"),
        $("change"),
        $("mousedown"),
        $("mousemove"),
        $("mouseup"),
        $("mouseenter"),
        $("mouseleave"),
        $("mouseout"),
        $("mouseover"),
        $("touchstart"),
        $("touchend"),
        $("touchmove"),
        $("resize"),
        $("scroll");
      var H = {
        addClass: function () {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          var r = B(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var t;
              (t = e.classList).add.apply(t, r);
            }),
            this
          );
        },
        removeClass: function () {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          var r = B(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var t;
              (t = e.classList).remove.apply(t, r);
            }),
            this
          );
        },
        hasClass: function () {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          var r = B(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            D(this, function (e) {
              return (
                r.filter(function (t) {
                  return e.classList.contains(t);
                }).length > 0
              );
            }).length > 0
          );
        },
        toggleClass: function () {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          var r = B(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          this.forEach(function (e) {
            r.forEach(function (t) {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (var i = 0; i < this.length; i += 1)
            if (2 === arguments.length) this[i].setAttribute(e, t);
            else
              for (var r in e)
                (this[i][r] = e[r]), this[i].setAttribute(r, e[r]);
          return this;
        },
        removeAttr: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (var t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" != typeof e ? e + "ms" : e;
          return this;
        },
        on: function () {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          var r = t[0],
            n = t[1],
            a = t[2],
            s = t[3];
          function o(e) {
            var t = e.target;
            if (t) {
              var i = e.target.dom7EventData || [];
              if ((i.indexOf(e) < 0 && i.unshift(e), G(t).is(n))) a.apply(t, i);
              else
                for (var r = G(t).parents(), s = 0; s < r.length; s += 1)
                  G(r[s]).is(n) && a.apply(r[s], i);
            }
          }
          function l(e) {
            var t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t);
          }
          "function" == typeof t[1] &&
            ((r = t[0]), (a = t[1]), (s = t[2]), (n = void 0)),
            s || (s = !1);
          for (var d, c = r.split(" "), p = 0; p < this.length; p += 1) {
            var u = this[p];
            if (n)
              for (d = 0; d < c.length; d += 1) {
                var v = c[d];
                u.dom7LiveListeners || (u.dom7LiveListeners = {}),
                  u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []),
                  u.dom7LiveListeners[v].push({
                    listener: a,
                    proxyListener: o,
                  }),
                  u.addEventListener(v, o, s);
              }
            else
              for (d = 0; d < c.length; d += 1) {
                var m = c[d];
                u.dom7Listeners || (u.dom7Listeners = {}),
                  u.dom7Listeners[m] || (u.dom7Listeners[m] = []),
                  u.dom7Listeners[m].push({ listener: a, proxyListener: l }),
                  u.addEventListener(m, l, s);
              }
          }
          return this;
        },
        off: function () {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          var r = t[0],
            n = t[1],
            a = t[2],
            s = t[3];
          "function" == typeof t[1] &&
            ((r = t[0]), (a = t[1]), (s = t[2]), (n = void 0)),
            s || (s = !1);
          for (var o = r.split(" "), l = 0; l < o.length; l += 1)
            for (var d = o[l], c = 0; c < this.length; c += 1) {
              var p = this[c],
                u = void 0;
              if (
                (!n && p.dom7Listeners
                  ? (u = p.dom7Listeners[d])
                  : n && p.dom7LiveListeners && (u = p.dom7LiveListeners[d]),
                u && u.length)
              )
                for (var v = u.length - 1; v >= 0; v -= 1) {
                  var m = u[v];
                  (a && m.listener === a) ||
                  (a &&
                    m.listener &&
                    m.listener.dom7proxy &&
                    m.listener.dom7proxy === a)
                    ? (p.removeEventListener(d, m.proxyListener, s),
                      u.splice(v, 1))
                    : a ||
                      (p.removeEventListener(d, m.proxyListener, s),
                      u.splice(v, 1));
                }
            }
          return this;
        },
        trigger: function () {
          for (
            var e = L(), t = arguments.length, i = new Array(t), r = 0;
            r < t;
            r++
          )
            i[r] = arguments[r];
          for (var n = i[0].split(" "), a = i[1], s = 0; s < n.length; s += 1)
            for (var o = n[s], l = 0; l < this.length; l += 1) {
              var d = this[l];
              if (e.CustomEvent) {
                var c = new e.CustomEvent(o, {
                  detail: a,
                  bubbles: !0,
                  cancelable: !0,
                });
                (d.dom7EventData = i.filter(function (e, t) {
                  return t > 0;
                })),
                  d.dispatchEvent(c),
                  (d.dom7EventData = []),
                  delete d.dom7EventData;
              }
            }
          return this;
        },
        transitionEnd: function (e) {
          var t = this;
          return (
            e &&
              t.on("transitionend", function i(r) {
                r.target === this &&
                  (e.call(this, r), t.off("transitionend", i));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(t.getPropertyValue("margin-right")) +
                parseFloat(t.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(t.getPropertyValue("margin-top")) +
                parseFloat(t.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          var e = L();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            var e = L(),
              t = z(),
              i = this[0],
              r = i.getBoundingClientRect(),
              n = t.body,
              a = i.clientTop || n.clientTop || 0,
              s = i.clientLeft || n.clientLeft || 0,
              o = i === e ? e.scrollY : i.scrollTop,
              l = i === e ? e.scrollX : i.scrollLeft;
            return { top: r.top + o - a, left: r.left + l - s };
          }
          return null;
        },
        css: function (e, t) {
          var i,
            r = L();
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (i = 0; i < this.length; i += 1)
                for (var n in e) this[i].style[n] = e[n];
              return this;
            }
            if (this[0])
              return r.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach(function (t, i) {
                e.apply(t, [t, i]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          var t,
            i,
            r = L(),
            n = z(),
            a = this[0];
          if (!a || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (a.matches) return a.matches(e);
            if (a.webkitMatchesSelector) return a.webkitMatchesSelector(e);
            if (a.msMatchesSelector) return a.msMatchesSelector(e);
            for (t = G(e), i = 0; i < t.length; i += 1)
              if (t[i] === a) return !0;
            return !1;
          }
          if (e === n) return a === n;
          if (e === r) return a === r;
          if (e.nodeType || e instanceof I) {
            for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1)
              if (t[i] === a) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          var e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          var t = this.length;
          if (e > t - 1) return G([]);
          if (e < 0) {
            var i = t + e;
            return G(i < 0 ? [] : [this[i]]);
          }
          return G([this[e]]);
        },
        append: function () {
          for (var e, t = z(), i = 0; i < arguments.length; i += 1) {
            e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
            for (var r = 0; r < this.length; r += 1)
              if ("string" == typeof e) {
                var n = t.createElement("div");
                for (n.innerHTML = e; n.firstChild; )
                  this[r].appendChild(n.firstChild);
              } else if (e instanceof I)
                for (var a = 0; a < e.length; a += 1) this[r].appendChild(e[a]);
              else this[r].appendChild(e);
          }
          return this;
        },
        prepend: function (e) {
          var t,
            i,
            r = z();
          for (t = 0; t < this.length; t += 1)
            if ("string" == typeof e) {
              var n = r.createElement("div");
              for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1)
                this[t].insertBefore(n.childNodes[i], this[t].childNodes[0]);
            } else if (e instanceof I)
              for (i = 0; i < e.length; i += 1)
                this[t].insertBefore(e[i], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                G(this[0].nextElementSibling).is(e)
                ? G([this[0].nextElementSibling])
                : G([])
              : this[0].nextElementSibling
              ? G([this[0].nextElementSibling])
              : G([])
            : G([]);
        },
        nextAll: function (e) {
          var t = [],
            i = this[0];
          if (!i) return G([]);
          for (; i.nextElementSibling; ) {
            var r = i.nextElementSibling;
            e ? G(r).is(e) && t.push(r) : t.push(r), (i = r);
          }
          return G(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            var t = this[0];
            return e
              ? t.previousElementSibling && G(t.previousElementSibling).is(e)
                ? G([t.previousElementSibling])
                : G([])
              : t.previousElementSibling
              ? G([t.previousElementSibling])
              : G([]);
          }
          return G([]);
        },
        prevAll: function (e) {
          var t = [],
            i = this[0];
          if (!i) return G([]);
          for (; i.previousElementSibling; ) {
            var r = i.previousElementSibling;
            e ? G(r).is(e) && t.push(r) : t.push(r), (i = r);
          }
          return G(t);
        },
        parent: function (e) {
          for (var t = [], i = 0; i < this.length; i += 1)
            null !== this[i].parentNode &&
              (e
                ? G(this[i].parentNode).is(e) && t.push(this[i].parentNode)
                : t.push(this[i].parentNode));
          return G(t);
        },
        parents: function (e) {
          for (var t = [], i = 0; i < this.length; i += 1)
            for (var r = this[i].parentNode; r; )
              e ? G(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
          return G(t);
        },
        closest: function (e) {
          var t = this;
          return void 0 === e
            ? G([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          for (var t = [], i = 0; i < this.length; i += 1)
            for (
              var r = this[i].querySelectorAll(e), n = 0;
              n < r.length;
              n += 1
            )
              t.push(r[n]);
          return G(t);
        },
        children: function (e) {
          for (var t = [], i = 0; i < this.length; i += 1)
            for (var r = this[i].children, n = 0; n < r.length; n += 1)
              (e && !G(r[n]).is(e)) || t.push(r[n]);
          return G(t);
        },
        filter: function (e) {
          return G(D(this, e));
        },
        remove: function () {
          for (var e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(H).forEach(function (e) {
        Object.defineProperty(G.fn, e, { value: H[e], writable: !0 });
      });
      const F = G;
      function W(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function V() {
        return Date.now();
      }
      function R(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function q() {
        for (
          var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ["__proto__", "constructor", "prototype"],
            i = 1;
          i < arguments.length;
          i += 1
        ) {
          var r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          if (null != r)
            for (
              var n = Object.keys(Object(r)).filter(function (e) {
                  return t.indexOf(e) < 0;
                }),
                a = 0,
                s = n.length;
              a < s;
              a += 1
            ) {
              var o = n[a],
                l = Object.getOwnPropertyDescriptor(r, o);
              void 0 !== l &&
                l.enumerable &&
                (R(e[o]) && R(r[o])
                  ? r[o].__swiper__
                    ? (e[o] = r[o])
                    : q(e[o], r[o])
                  : !R(e[o]) && R(r[o])
                  ? ((e[o] = {}),
                    r[o].__swiper__ ? (e[o] = r[o]) : q(e[o], r[o]))
                  : (e[o] = r[o]));
            }
        }
        return e;
      }
      function Y(e, t) {
        Object.keys(t).forEach(function (i) {
          R(t[i]) &&
            Object.keys(t[i]).forEach(function (r) {
              "function" == typeof t[i][r] && (t[i][r] = t[i][r].bind(e));
            }),
            (e[i] = t[i]);
        });
      }
      function X(e) {
        return (
          void 0 === e && (e = ""),
          "." +
            e
              .trim()
              .replace(/([\.:\/])/g, "\\$1")
              .replace(/ /g, ".")
        );
      }
      var K, U, J;
      function Z() {
        return (
          K ||
            (K = (function () {
              var e = L(),
                t = z();
              return {
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                pointerEvents:
                  !!e.PointerEvent &&
                  "maxTouchPoints" in e.navigator &&
                  e.navigator.maxTouchPoints >= 0,
                observer:
                  "MutationObserver" in e || "WebkitMutationObserver" in e,
                passiveListener: (function () {
                  var t = !1;
                  try {
                    var i = Object.defineProperty({}, "passive", {
                      get: function () {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, i);
                  } catch (e) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          K
        );
      }
      const Q = {
        name: "resize",
        create: function () {
          var e = this;
          q(e, {
            resize: {
              observer: null,
              createObserver: function () {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  ((e.resize.observer = new ResizeObserver(function (t) {
                    var i = e.width,
                      r = e.height,
                      n = i,
                      a = r;
                    t.forEach(function (t) {
                      var i = t.contentBoxSize,
                        r = t.contentRect,
                        s = t.target;
                      (s && s !== e.el) ||
                        ((n = r ? r.width : (i[0] || i).inlineSize),
                        (a = r ? r.height : (i[0] || i).blockSize));
                    }),
                      (n === i && a === r) || e.resize.resizeHandler();
                  })),
                  e.resize.observer.observe(e.el));
              },
              removeObserver: function () {
                e.resize.observer &&
                  e.resize.observer.unobserve &&
                  e.el &&
                  (e.resize.observer.unobserve(e.el),
                  (e.resize.observer = null));
              },
              resizeHandler: function () {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (e.emit("beforeResize"), e.emit("resize"));
              },
              orientationChangeHandler: function () {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  e.emit("orientationchange");
              },
            },
          });
        },
        on: {
          init: function (e) {
            var t = L();
            e.params.resizeObserver && void 0 !== L().ResizeObserver
              ? e.resize.createObserver()
              : (t.addEventListener("resize", e.resize.resizeHandler),
                t.addEventListener(
                  "orientationchange",
                  e.resize.orientationChangeHandler
                ));
          },
          destroy: function (e) {
            var t = L();
            e.resize.removeObserver(),
              t.removeEventListener("resize", e.resize.resizeHandler),
              t.removeEventListener(
                "orientationchange",
                e.resize.orientationChangeHandler
              );
          },
        },
      };
      function ee() {
        return (ee =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = arguments[t];
              for (var r in i)
                Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var te = {
        attach: function (e, t) {
          void 0 === t && (t = {});
          var i = L(),
            r = this,
            n = new (i.MutationObserver || i.WebkitMutationObserver)(function (
              e
            ) {
              if (1 !== e.length) {
                var t = function () {
                  r.emit("observerUpdate", e[0]);
                };
                i.requestAnimationFrame
                  ? i.requestAnimationFrame(t)
                  : i.setTimeout(t, 0);
              } else r.emit("observerUpdate", e[0]);
            });
          n.observe(e, {
            attributes: void 0 === t.attributes || t.attributes,
            childList: void 0 === t.childList || t.childList,
            characterData: void 0 === t.characterData || t.characterData,
          }),
            r.observer.observers.push(n);
        },
        init: function () {
          var e = this;
          if (e.support.observer && e.params.observer) {
            if (e.params.observeParents)
              for (var t = e.$el.parents(), i = 0; i < t.length; i += 1)
                e.observer.attach(t[i]);
            e.observer.attach(e.$el[0], {
              childList: e.params.observeSlideChildren,
            }),
              e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
          }
        },
        destroy: function () {
          this.observer.observers.forEach(function (e) {
            e.disconnect();
          }),
            (this.observer.observers = []);
        },
      };
      const ie = {
        name: "observer",
        params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
        create: function () {
          Y(this, { observer: ee({}, te, { observers: [] }) });
        },
        on: {
          init: function (e) {
            e.observer.init();
          },
          destroy: function (e) {
            e.observer.destroy();
          },
        },
      };
      function re(e) {
        var t = this,
          i = z(),
          r = L(),
          n = t.touchEventsData,
          a = t.params,
          s = t.touches;
        if (!t.animating || !a.preventInteractionOnTransition) {
          var o = e;
          o.originalEvent && (o = o.originalEvent);
          var l = F(o.target);
          if (
            ("wrapper" !== a.touchEventsTarget ||
              l.closest(t.wrapperEl).length) &&
            ((n.isTouchEvent = "touchstart" === o.type),
            (n.isTouchEvent || !("which" in o) || 3 !== o.which) &&
              !(
                (!n.isTouchEvent && "button" in o && o.button > 0) ||
                (n.isTouched && n.isMoved)
              ))
          )
            if (
              (!!a.noSwipingClass &&
                "" !== a.noSwipingClass &&
                o.target &&
                o.target.shadowRoot &&
                e.path &&
                e.path[0] &&
                (l = F(e.path[0])),
              a.noSwiping &&
                l.closest(
                  a.noSwipingSelector
                    ? a.noSwipingSelector
                    : "." + a.noSwipingClass
                )[0])
            )
              t.allowClick = !0;
            else if (!a.swipeHandler || l.closest(a.swipeHandler)[0]) {
              (s.currentX =
                "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX),
                (s.currentY =
                  "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY);
              var d = s.currentX,
                c = s.currentY,
                p = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                u = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
              if (p && (d <= u || d >= r.innerWidth - u)) {
                if ("prevent" !== p) return;
                e.preventDefault();
              }
              if (
                (q(n, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0,
                }),
                (s.startX = d),
                (s.startY = c),
                (n.touchStartTime = V()),
                (t.allowClick = !0),
                t.updateSize(),
                (t.swipeDirection = void 0),
                a.threshold > 0 && (n.allowThresholdMove = !1),
                "touchstart" !== o.type)
              ) {
                var v = !0;
                l.is(n.formElements) && (v = !1),
                  i.activeElement &&
                    F(i.activeElement).is(n.formElements) &&
                    i.activeElement !== l[0] &&
                    i.activeElement.blur();
                var m = v && t.allowTouchMove && a.touchStartPreventDefault;
                (!a.touchStartForcePreventDefault && !m) ||
                  l[0].isContentEditable ||
                  o.preventDefault();
              }
              t.emit("touchStart", o);
            }
        }
      }
      function ne(e) {
        var t = z(),
          i = this,
          r = i.touchEventsData,
          n = i.params,
          a = i.touches,
          s = i.rtlTranslate,
          o = e;
        if ((o.originalEvent && (o = o.originalEvent), r.isTouched)) {
          if (!r.isTouchEvent || "touchmove" === o.type) {
            var l =
                "touchmove" === o.type &&
                o.targetTouches &&
                (o.targetTouches[0] || o.changedTouches[0]),
              d = "touchmove" === o.type ? l.pageX : o.pageX,
              c = "touchmove" === o.type ? l.pageY : o.pageY;
            if (o.preventedByNestedSwiper)
              return (a.startX = d), void (a.startY = c);
            if (!i.allowTouchMove)
              return (
                (i.allowClick = !1),
                void (
                  r.isTouched &&
                  (q(a, { startX: d, startY: c, currentX: d, currentY: c }),
                  (r.touchStartTime = V()))
                )
              );
            if (r.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
              if (i.isVertical()) {
                if (
                  (c < a.startY && i.translate <= i.maxTranslate()) ||
                  (c > a.startY && i.translate >= i.minTranslate())
                )
                  return (r.isTouched = !1), void (r.isMoved = !1);
              } else if (
                (d < a.startX && i.translate <= i.maxTranslate()) ||
                (d > a.startX && i.translate >= i.minTranslate())
              )
                return;
            if (
              r.isTouchEvent &&
              t.activeElement &&
              o.target === t.activeElement &&
              F(o.target).is(r.formElements)
            )
              return (r.isMoved = !0), void (i.allowClick = !1);
            if (
              (r.allowTouchCallbacks && i.emit("touchMove", o),
              !(o.targetTouches && o.targetTouches.length > 1))
            ) {
              (a.currentX = d), (a.currentY = c);
              var p,
                u = a.currentX - a.startX,
                v = a.currentY - a.startY;
              if (
                !(
                  i.params.threshold &&
                  Math.sqrt(Math.pow(u, 2) + Math.pow(v, 2)) <
                    i.params.threshold
                )
              )
                if (
                  (void 0 === r.isScrolling &&
                    ((i.isHorizontal() && a.currentY === a.startY) ||
                    (i.isVertical() && a.currentX === a.startX)
                      ? (r.isScrolling = !1)
                      : u * u + v * v >= 25 &&
                        ((p =
                          (180 * Math.atan2(Math.abs(v), Math.abs(u))) /
                          Math.PI),
                        (r.isScrolling = i.isHorizontal()
                          ? p > n.touchAngle
                          : 90 - p > n.touchAngle))),
                  r.isScrolling && i.emit("touchMoveOpposite", o),
                  void 0 === r.startMoving &&
                    ((a.currentX === a.startX && a.currentY === a.startY) ||
                      (r.startMoving = !0)),
                  r.isScrolling)
                )
                  r.isTouched = !1;
                else if (r.startMoving) {
                  (i.allowClick = !1),
                    !n.cssMode && o.cancelable && o.preventDefault(),
                    n.touchMoveStopPropagation &&
                      !n.nested &&
                      o.stopPropagation(),
                    r.isMoved ||
                      (n.loop && i.loopFix(),
                      (r.startTranslate = i.getTranslate()),
                      i.setTransition(0),
                      i.animating &&
                        i.$wrapperEl.trigger(
                          "webkitTransitionEnd transitionend"
                        ),
                      (r.allowMomentumBounce = !1),
                      !n.grabCursor ||
                        (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
                        i.setGrabCursor(!0),
                      i.emit("sliderFirstMove", o)),
                    i.emit("sliderMove", o),
                    (r.isMoved = !0);
                  var m = i.isHorizontal() ? u : v;
                  (a.diff = m),
                    (m *= n.touchRatio),
                    s && (m = -m),
                    (i.swipeDirection = m > 0 ? "prev" : "next"),
                    (r.currentTranslate = m + r.startTranslate);
                  var f = !0,
                    h = n.resistanceRatio;
                  if (
                    (n.touchReleaseOnEdges && (h = 0),
                    m > 0 && r.currentTranslate > i.minTranslate()
                      ? ((f = !1),
                        n.resistance &&
                          (r.currentTranslate =
                            i.minTranslate() -
                            1 +
                            Math.pow(
                              -i.minTranslate() + r.startTranslate + m,
                              h
                            )))
                      : m < 0 &&
                        r.currentTranslate < i.maxTranslate() &&
                        ((f = !1),
                        n.resistance &&
                          (r.currentTranslate =
                            i.maxTranslate() +
                            1 -
                            Math.pow(
                              i.maxTranslate() - r.startTranslate - m,
                              h
                            ))),
                    f && (o.preventedByNestedSwiper = !0),
                    !i.allowSlideNext &&
                      "next" === i.swipeDirection &&
                      r.currentTranslate < r.startTranslate &&
                      (r.currentTranslate = r.startTranslate),
                    !i.allowSlidePrev &&
                      "prev" === i.swipeDirection &&
                      r.currentTranslate > r.startTranslate &&
                      (r.currentTranslate = r.startTranslate),
                    i.allowSlidePrev ||
                      i.allowSlideNext ||
                      (r.currentTranslate = r.startTranslate),
                    n.threshold > 0)
                  ) {
                    if (!(Math.abs(m) > n.threshold || r.allowThresholdMove))
                      return void (r.currentTranslate = r.startTranslate);
                    if (!r.allowThresholdMove)
                      return (
                        (r.allowThresholdMove = !0),
                        (a.startX = a.currentX),
                        (a.startY = a.currentY),
                        (r.currentTranslate = r.startTranslate),
                        void (a.diff = i.isHorizontal()
                          ? a.currentX - a.startX
                          : a.currentY - a.startY)
                      );
                  }
                  n.followFinger &&
                    !n.cssMode &&
                    ((n.freeMode ||
                      n.watchSlidesProgress ||
                      n.watchSlidesVisibility) &&
                      (i.updateActiveIndex(), i.updateSlidesClasses()),
                    n.freeMode &&
                      (0 === r.velocities.length &&
                        r.velocities.push({
                          position: a[i.isHorizontal() ? "startX" : "startY"],
                          time: r.touchStartTime,
                        }),
                      r.velocities.push({
                        position: a[i.isHorizontal() ? "currentX" : "currentY"],
                        time: V(),
                      })),
                    i.updateProgress(r.currentTranslate),
                    i.setTranslate(r.currentTranslate));
                }
            }
          }
        } else r.startMoving && r.isScrolling && i.emit("touchMoveOpposite", o);
      }
      function ae(e) {
        var t = this,
          i = t.touchEventsData,
          r = t.params,
          n = t.touches,
          a = t.rtlTranslate,
          s = t.$wrapperEl,
          o = t.slidesGrid,
          l = t.snapGrid,
          d = e;
        if (
          (d.originalEvent && (d = d.originalEvent),
          i.allowTouchCallbacks && t.emit("touchEnd", d),
          (i.allowTouchCallbacks = !1),
          !i.isTouched)
        )
          return (
            i.isMoved && r.grabCursor && t.setGrabCursor(!1),
            (i.isMoved = !1),
            void (i.startMoving = !1)
          );
        r.grabCursor &&
          i.isMoved &&
          i.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        var c,
          p = V(),
          u = p - i.touchStartTime;
        if (
          (t.allowClick &&
            (t.updateClickedSlide(d),
            t.emit("tap click", d),
            u < 300 &&
              p - i.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", d)),
          (i.lastClickTime = V()),
          W(function () {
            t.destroyed || (t.allowClick = !0);
          }),
          !i.isTouched ||
            !i.isMoved ||
            !t.swipeDirection ||
            0 === n.diff ||
            i.currentTranslate === i.startTranslate)
        )
          return (
            (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1)
          );
        if (
          ((i.isTouched = !1),
          (i.isMoved = !1),
          (i.startMoving = !1),
          (c = r.followFinger
            ? a
              ? t.translate
              : -t.translate
            : -i.currentTranslate),
          !r.cssMode)
        )
          if (r.freeMode) {
            if (c < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (c > -t.maxTranslate())
              return void (t.slides.length < l.length
                ? t.slideTo(l.length - 1)
                : t.slideTo(t.slides.length - 1));
            if (r.freeModeMomentum) {
              if (i.velocities.length > 1) {
                var v = i.velocities.pop(),
                  m = i.velocities.pop(),
                  f = v.position - m.position,
                  h = v.time - m.time;
                (t.velocity = f / h),
                  (t.velocity /= 2),
                  Math.abs(t.velocity) < r.freeModeMinimumVelocity &&
                    (t.velocity = 0),
                  (h > 150 || V() - v.time > 300) && (t.velocity = 0);
              } else t.velocity = 0;
              (t.velocity *= r.freeModeMomentumVelocityRatio),
                (i.velocities.length = 0);
              var g = 1e3 * r.freeModeMomentumRatio,
                b = t.velocity * g,
                w = t.translate + b;
              a && (w = -w);
              var y,
                C,
                T = !1,
                x = 20 * Math.abs(t.velocity) * r.freeModeMomentumBounceRatio;
              if (w < t.maxTranslate())
                r.freeModeMomentumBounce
                  ? (w + t.maxTranslate() < -x && (w = t.maxTranslate() - x),
                    (y = t.maxTranslate()),
                    (T = !0),
                    (i.allowMomentumBounce = !0))
                  : (w = t.maxTranslate()),
                  r.loop && r.centeredSlides && (C = !0);
              else if (w > t.minTranslate())
                r.freeModeMomentumBounce
                  ? (w - t.minTranslate() > x && (w = t.minTranslate() + x),
                    (y = t.minTranslate()),
                    (T = !0),
                    (i.allowMomentumBounce = !0))
                  : (w = t.minTranslate()),
                  r.loop && r.centeredSlides && (C = !0);
              else if (r.freeModeSticky) {
                for (var S, E = 0; E < l.length; E += 1)
                  if (l[E] > -w) {
                    S = E;
                    break;
                  }
                w = -(w =
                  Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) ||
                  "next" === t.swipeDirection
                    ? l[S]
                    : l[S - 1]);
              }
              if (
                (C &&
                  t.once("transitionEnd", function () {
                    t.loopFix();
                  }),
                0 !== t.velocity)
              ) {
                if (
                  ((g = a
                    ? Math.abs((-w - t.translate) / t.velocity)
                    : Math.abs((w - t.translate) / t.velocity)),
                  r.freeModeSticky)
                ) {
                  var k = Math.abs((a ? -w : w) - t.translate),
                    M = t.slidesSizesGrid[t.activeIndex];
                  g =
                    k < M ? r.speed : k < 2 * M ? 1.5 * r.speed : 2.5 * r.speed;
                }
              } else if (r.freeModeSticky) return void t.slideToClosest();
              r.freeModeMomentumBounce && T
                ? (t.updateProgress(y),
                  t.setTransition(g),
                  t.setTranslate(w),
                  t.transitionStart(!0, t.swipeDirection),
                  (t.animating = !0),
                  s.transitionEnd(function () {
                    t &&
                      !t.destroyed &&
                      i.allowMomentumBounce &&
                      (t.emit("momentumBounce"),
                      t.setTransition(r.speed),
                      setTimeout(function () {
                        t.setTranslate(y),
                          s.transitionEnd(function () {
                            t && !t.destroyed && t.transitionEnd();
                          });
                      }, 0));
                  }))
                : t.velocity
                ? (t.updateProgress(w),
                  t.setTransition(g),
                  t.setTranslate(w),
                  t.transitionStart(!0, t.swipeDirection),
                  t.animating ||
                    ((t.animating = !0),
                    s.transitionEnd(function () {
                      t && !t.destroyed && t.transitionEnd();
                    })))
                : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(w)),
                t.updateActiveIndex(),
                t.updateSlidesClasses();
            } else {
              if (r.freeModeSticky) return void t.slideToClosest();
              r.freeMode && t.emit("_freeModeNoMomentumRelease");
            }
            (!r.freeModeMomentum || u >= r.longSwipesMs) &&
              (t.updateProgress(),
              t.updateActiveIndex(),
              t.updateSlidesClasses());
          } else {
            for (
              var z = 0, P = t.slidesSizesGrid[0], L = 0;
              L < o.length;
              L += L < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
            ) {
              var O = L < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
              void 0 !== o[L + O]
                ? c >= o[L] && c < o[L + O] && ((z = L), (P = o[L + O] - o[L]))
                : c >= o[L] &&
                  ((z = L), (P = o[o.length - 1] - o[o.length - 2]));
            }
            var _ = (c - o[z]) / P,
              A = z < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
            if (u > r.longSwipesMs) {
              if (!r.longSwipes) return void t.slideTo(t.activeIndex);
              "next" === t.swipeDirection &&
                (_ >= r.longSwipesRatio ? t.slideTo(z + A) : t.slideTo(z)),
                "prev" === t.swipeDirection &&
                  (_ > 1 - r.longSwipesRatio ? t.slideTo(z + A) : t.slideTo(z));
            } else {
              if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
              !t.navigation ||
              (d.target !== t.navigation.nextEl &&
                d.target !== t.navigation.prevEl)
                ? ("next" === t.swipeDirection && t.slideTo(z + A),
                  "prev" === t.swipeDirection && t.slideTo(z))
                : d.target === t.navigation.nextEl
                ? t.slideTo(z + A)
                : t.slideTo(z);
            }
          }
      }
      function se() {
        var e = this,
          t = e.params,
          i = e.el;
        if (!i || 0 !== i.offsetWidth) {
          t.breakpoints && e.setBreakpoint();
          var r = e.allowSlideNext,
            n = e.allowSlidePrev,
            a = e.snapGrid;
          (e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
            e.isEnd &&
            !e.isBeginning &&
            !e.params.centeredSlides
              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.run(),
            (e.allowSlidePrev = n),
            (e.allowSlideNext = r),
            e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
        }
      }
      function oe(e) {
        var t = this;
        t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function le() {
        var e = this,
          t = e.wrapperEl,
          i = e.rtlTranslate;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = i
                ? t.scrollWidth - t.offsetWidth - t.scrollLeft
                : -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          -0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        var r = e.maxTranslate() - e.minTranslate();
        (0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress &&
          e.updateProgress(i ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      var de = !1;
      function ce() {}
      const pe = {
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
        freeModeMinimumVelocity: 0.02,
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
        longSwipesRatio: 0.5,
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
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadimg: !0,
        updateOnimgReady: !0,
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
        _emitClasses: !1,
      };
      function ue(e, t) {
        for (var i = 0; i < t.length; i++) {
          var r = t[i];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var ve = {
          modular: {
            useParams: function (e) {
              var t = this;
              t.modules &&
                Object.keys(t.modules).forEach(function (i) {
                  var r = t.modules[i];
                  r.params && q(e, r.params);
                });
            },
            useModules: function (e) {
              void 0 === e && (e = {});
              var t = this;
              t.modules &&
                Object.keys(t.modules).forEach(function (i) {
                  var r = t.modules[i],
                    n = e[i] || {};
                  r.on &&
                    t.on &&
                    Object.keys(r.on).forEach(function (e) {
                      t.on(e, r.on[e]);
                    }),
                    r.create && r.create.bind(t)(n);
                });
            },
          },
          eventsEmitter: {
            on: function (e, t, i) {
              var r = this;
              if ("function" != typeof t) return r;
              var n = i ? "unshift" : "push";
              return (
                e.split(" ").forEach(function (e) {
                  r.eventsListeners[e] || (r.eventsListeners[e] = []),
                    r.eventsListeners[e][n](t);
                }),
                r
              );
            },
            once: function (e, t, i) {
              var r = this;
              if ("function" != typeof t) return r;
              function n() {
                r.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
                for (
                  var i = arguments.length, a = new Array(i), s = 0;
                  s < i;
                  s++
                )
                  a[s] = arguments[s];
                t.apply(r, a);
              }
              return (n.__emitterProxy = t), r.on(e, n, i);
            },
            onAny: function (e, t) {
              var i = this;
              if ("function" != typeof e) return i;
              var r = t ? "unshift" : "push";
              return (
                i.eventsAnyListeners.indexOf(e) < 0 &&
                  i.eventsAnyListeners[r](e),
                i
              );
            },
            offAny: function (e) {
              var t = this;
              if (!t.eventsAnyListeners) return t;
              var i = t.eventsAnyListeners.indexOf(e);
              return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
            },
            off: function (e, t) {
              var i = this;
              return i.eventsListeners
                ? (e.split(" ").forEach(function (e) {
                    void 0 === t
                      ? (i.eventsListeners[e] = [])
                      : i.eventsListeners[e] &&
                        i.eventsListeners[e].forEach(function (r, n) {
                          (r === t ||
                            (r.__emitterProxy && r.__emitterProxy === t)) &&
                            i.eventsListeners[e].splice(n, 1);
                        });
                  }),
                  i)
                : i;
            },
            emit: function () {
              var e,
                t,
                i,
                r = this;
              if (!r.eventsListeners) return r;
              for (
                var n = arguments.length, a = new Array(n), s = 0;
                s < n;
                s++
              )
                a[s] = arguments[s];
              return (
                "string" == typeof a[0] || Array.isArray(a[0])
                  ? ((e = a[0]), (t = a.slice(1, a.length)), (i = r))
                  : ((e = a[0].events),
                    (t = a[0].data),
                    (i = a[0].context || r)),
                t.unshift(i),
                (Array.isArray(e) ? e : e.split(" ")).forEach(function (e) {
                  r.eventsAnyListeners &&
                    r.eventsAnyListeners.length &&
                    r.eventsAnyListeners.forEach(function (r) {
                      r.apply(i, [e].concat(t));
                    }),
                    r.eventsListeners &&
                      r.eventsListeners[e] &&
                      r.eventsListeners[e].forEach(function (e) {
                        e.apply(i, t);
                      });
                }),
                r
              );
            },
          },
          update: {
            updateSize: function () {
              var e,
                t,
                i = this,
                r = i.$el;
              (e =
                void 0 !== i.params.width && null !== i.params.width
                  ? i.params.width
                  : r[0].clientWidth),
                (t =
                  void 0 !== i.params.height && null !== i.params.height
                    ? i.params.height
                    : r[0].clientHeight),
                (0 === e && i.isHorizontal()) ||
                  (0 === t && i.isVertical()) ||
                  ((e =
                    e -
                    parseInt(r.css("padding-left") || 0, 10) -
                    parseInt(r.css("padding-right") || 0, 10)),
                  (t =
                    t -
                    parseInt(r.css("padding-top") || 0, 10) -
                    parseInt(r.css("padding-bottom") || 0, 10)),
                  Number.isNaN(e) && (e = 0),
                  Number.isNaN(t) && (t = 0),
                  q(i, {
                    width: e,
                    height: t,
                    size: i.isHorizontal() ? e : t,
                  }));
            },
            updateSlides: function () {
              var e = this,
                t = function (t) {
                  return e.isHorizontal()
                    ? t
                    : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom",
                      }[t];
                },
                i = function (e, i) {
                  return parseFloat(e.getPropertyValue(t(i)) || 0);
                },
                r = e.params,
                n = e.$wrapperEl,
                a = e.size,
                s = e.rtlTranslate,
                o = e.wrongRTL,
                l = e.virtual && r.virtual.enabled,
                d = l ? e.virtual.slides.length : e.slides.length,
                c = n.children("." + e.params.slideClass),
                p = l ? e.virtual.slides.length : c.length,
                u = [],
                v = [],
                m = [],
                f = r.slidesOffsetBefore;
              "function" == typeof f && (f = r.slidesOffsetBefore.call(e));
              var h = r.slidesOffsetAfter;
              "function" == typeof h && (h = r.slidesOffsetAfter.call(e));
              var g = e.snapGrid.length,
                b = e.slidesGrid.length,
                w = r.spaceBetween,
                y = -f,
                C = 0,
                T = 0;
              if (void 0 !== a) {
                var x, S;
                "string" == typeof w &&
                  w.indexOf("%") >= 0 &&
                  (w = (parseFloat(w.replace("%", "")) / 100) * a),
                  (e.virtualSize = -w),
                  s
                    ? c.css({ marginLeft: "", marginTop: "" })
                    : c.css({ marginRight: "", marginBottom: "" }),
                  r.slidesPerColumn > 1 &&
                    ((x =
                      Math.floor(p / r.slidesPerColumn) ===
                      p / e.params.slidesPerColumn
                        ? p
                        : Math.ceil(p / r.slidesPerColumn) * r.slidesPerColumn),
                    "auto" !== r.slidesPerView &&
                      "row" === r.slidesPerColumnFill &&
                      (x = Math.max(x, r.slidesPerView * r.slidesPerColumn)));
                for (
                  var E,
                    k,
                    M,
                    z = r.slidesPerColumn,
                    P = x / z,
                    L = Math.floor(p / r.slidesPerColumn),
                    O = 0;
                  O < p;
                  O += 1
                ) {
                  S = 0;
                  var _ = c.eq(O);
                  if (r.slidesPerColumn > 1) {
                    var A = void 0,
                      j = void 0,
                      I = void 0;
                    if (
                      "row" === r.slidesPerColumnFill &&
                      r.slidesPerGroup > 1
                    ) {
                      var B = Math.floor(
                          O / (r.slidesPerGroup * r.slidesPerColumn)
                        ),
                        D = O - r.slidesPerColumn * r.slidesPerGroup * B,
                        G =
                          0 === B
                            ? r.slidesPerGroup
                            : Math.min(
                                Math.ceil((p - B * z * r.slidesPerGroup) / z),
                                r.slidesPerGroup
                              );
                      (A =
                        (j =
                          D -
                          (I = Math.floor(D / G)) * G +
                          B * r.slidesPerGroup) +
                        (I * x) / z),
                        _.css({
                          "-webkit-box-ordinal-group": A,
                          "-moz-box-ordinal-group": A,
                          "-ms-flex-order": A,
                          "-webkit-order": A,
                          order: A,
                        });
                    } else
                      "column" === r.slidesPerColumnFill
                        ? ((I = O - (j = Math.floor(O / z)) * z),
                          (j > L || (j === L && I === z - 1)) &&
                            (I += 1) >= z &&
                            ((I = 0), (j += 1)))
                        : (j = O - (I = Math.floor(O / P)) * P);
                    _.css(
                      t("margin-top"),
                      0 !== I && r.spaceBetween && r.spaceBetween + "px"
                    );
                  }
                  if ("none" !== _.css("display")) {
                    if ("auto" === r.slidesPerView) {
                      var N = getComputedStyle(_[0]),
                        $ = _[0].style.transform,
                        H = _[0].style.webkitTransform;
                      if (
                        ($ && (_[0].style.transform = "none"),
                        H && (_[0].style.webkitTransform = "none"),
                        r.roundLengths)
                      )
                        S = e.isHorizontal()
                          ? _.outerWidth(!0)
                          : _.outerHeight(!0);
                      else {
                        var F = i(N, "width"),
                          W = i(N, "padding-left"),
                          V = i(N, "padding-right"),
                          R = i(N, "margin-left"),
                          Y = i(N, "margin-right"),
                          X = N.getPropertyValue("box-sizing");
                        if (X && "border-box" === X) S = F + R + Y;
                        else {
                          var K = _[0],
                            U = K.clientWidth;
                          S = F + W + V + R + Y + (K.offsetWidth - U);
                        }
                      }
                      $ && (_[0].style.transform = $),
                        H && (_[0].style.webkitTransform = H),
                        r.roundLengths && (S = Math.floor(S));
                    } else
                      (S = (a - (r.slidesPerView - 1) * w) / r.slidesPerView),
                        r.roundLengths && (S = Math.floor(S)),
                        c[O] && (c[O].style[t("width")] = S + "px");
                    c[O] && (c[O].swiperSlideSize = S),
                      m.push(S),
                      r.centeredSlides
                        ? ((y = y + S / 2 + C / 2 + w),
                          0 === C && 0 !== O && (y = y - a / 2 - w),
                          0 === O && (y = y - a / 2 - w),
                          Math.abs(y) < 0.001 && (y = 0),
                          r.roundLengths && (y = Math.floor(y)),
                          T % r.slidesPerGroup == 0 && u.push(y),
                          v.push(y))
                        : (r.roundLengths && (y = Math.floor(y)),
                          (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                            e.params.slidesPerGroup ==
                            0 && u.push(y),
                          v.push(y),
                          (y = y + S + w)),
                      (e.virtualSize += S + w),
                      (C = S),
                      (T += 1);
                  }
                }
                if (
                  ((e.virtualSize = Math.max(e.virtualSize, a) + h),
                  s &&
                    o &&
                    ("slide" === r.effect || "coverflow" === r.effect) &&
                    n.css({ width: e.virtualSize + r.spaceBetween + "px" }),
                  r.setWrapperSize &&
                    n.css(
                      (((k = {})[t("width")] =
                        e.virtualSize + r.spaceBetween + "px"),
                      k)
                    ),
                  r.slidesPerColumn > 1 &&
                    ((e.virtualSize = (S + r.spaceBetween) * x),
                    (e.virtualSize =
                      Math.ceil(e.virtualSize / r.slidesPerColumn) -
                      r.spaceBetween),
                    n.css(
                      (((M = {})[t("width")] =
                        e.virtualSize + r.spaceBetween + "px"),
                      M)
                    ),
                    r.centeredSlides))
                ) {
                  E = [];
                  for (var J = 0; J < u.length; J += 1) {
                    var Z = u[J];
                    r.roundLengths && (Z = Math.floor(Z)),
                      u[J] < e.virtualSize + u[0] && E.push(Z);
                  }
                  u = E;
                }
                if (!r.centeredSlides) {
                  E = [];
                  for (var Q = 0; Q < u.length; Q += 1) {
                    var ee = u[Q];
                    r.roundLengths && (ee = Math.floor(ee)),
                      u[Q] <= e.virtualSize - a && E.push(ee);
                  }
                  (u = E),
                    Math.floor(e.virtualSize - a) -
                      Math.floor(u[u.length - 1]) >
                      1 && u.push(e.virtualSize - a);
                }
                if ((0 === u.length && (u = [0]), 0 !== r.spaceBetween)) {
                  var te,
                    ie =
                      e.isHorizontal() && s ? "marginLeft" : t("marginRight");
                  c.filter(function (e, t) {
                    return !r.cssMode || t !== c.length - 1;
                  }).css((((te = {})[ie] = w + "px"), te));
                }
                if (r.centeredSlides && r.centeredSlidesBounds) {
                  var re = 0;
                  m.forEach(function (e) {
                    re += e + (r.spaceBetween ? r.spaceBetween : 0);
                  });
                  var ne = (re -= r.spaceBetween) - a;
                  u = u.map(function (e) {
                    return e < 0 ? -f : e > ne ? ne + h : e;
                  });
                }
                if (r.centerInsufficientSlides) {
                  var ae = 0;
                  if (
                    (m.forEach(function (e) {
                      ae += e + (r.spaceBetween ? r.spaceBetween : 0);
                    }),
                    (ae -= r.spaceBetween) < a)
                  ) {
                    var se = (a - ae) / 2;
                    u.forEach(function (e, t) {
                      u[t] = e - se;
                    }),
                      v.forEach(function (e, t) {
                        v[t] = e + se;
                      });
                  }
                }
                q(e, {
                  slides: c,
                  snapGrid: u,
                  slidesGrid: v,
                  slidesSizesGrid: m,
                }),
                  p !== d && e.emit("slidesLengthChange"),
                  u.length !== g &&
                    (e.params.watchOverflow && e.checkOverflow(),
                    e.emit("snapGridLengthChange")),
                  v.length !== b && e.emit("slidesGridLengthChange"),
                  (r.watchSlidesProgress || r.watchSlidesVisibility) &&
                    e.updateSlidesOffset();
              }
            },
            updateAutoHeight: function (e) {
              var t,
                i = this,
                r = [],
                n = 0;
              if (
                ("number" == typeof e
                  ? i.setTransition(e)
                  : !0 === e && i.setTransition(i.params.speed),
                "auto" !== i.params.slidesPerView && i.params.slidesPerView > 1)
              )
                if (i.params.centeredSlides)
                  i.visibleSlides.each(function (e) {
                    r.push(e);
                  });
                else
                  for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                    var a = i.activeIndex + t;
                    if (a > i.slides.length) break;
                    r.push(i.slides.eq(a)[0]);
                  }
              else r.push(i.slides.eq(i.activeIndex)[0]);
              for (t = 0; t < r.length; t += 1)
                if (void 0 !== r[t]) {
                  var s = r[t].offsetHeight;
                  n = s > n ? s : n;
                }
              n && i.$wrapperEl.css("height", n + "px");
            },
            updateSlidesOffset: function () {
              for (var e = this.slides, t = 0; t < e.length; t += 1)
                e[t].swiperSlideOffset = this.isHorizontal()
                  ? e[t].offsetLeft
                  : e[t].offsetTop;
            },
            updateSlidesProgress: function (e) {
              void 0 === e && (e = (this && this.translate) || 0);
              var t = this,
                i = t.params,
                r = t.slides,
                n = t.rtlTranslate;
              if (0 !== r.length) {
                void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
                var a = -e;
                n && (a = e),
                  r.removeClass(i.slideVisibleClass),
                  (t.visibleSlidesIndexes = []),
                  (t.visibleSlides = []);
                for (var s = 0; s < r.length; s += 1) {
                  var o = r[s],
                    l =
                      (a +
                        (i.centeredSlides ? t.minTranslate() : 0) -
                        o.swiperSlideOffset) /
                      (o.swiperSlideSize + i.spaceBetween);
                  if (
                    i.watchSlidesVisibility ||
                    (i.centeredSlides && i.autoHeight)
                  ) {
                    var d = -(a - o.swiperSlideOffset),
                      c = d + t.slidesSizesGrid[s];
                    ((d >= 0 && d < t.size - 1) ||
                      (c > 1 && c <= t.size) ||
                      (d <= 0 && c >= t.size)) &&
                      (t.visibleSlides.push(o),
                      t.visibleSlidesIndexes.push(s),
                      r.eq(s).addClass(i.slideVisibleClass));
                  }
                  o.progress = n ? -l : l;
                }
                t.visibleSlides = F(t.visibleSlides);
              }
            },
            updateProgress: function (e) {
              var t = this;
              if (void 0 === e) {
                var i = t.rtlTranslate ? -1 : 1;
                e = (t && t.translate && t.translate * i) || 0;
              }
              var r = t.params,
                n = t.maxTranslate() - t.minTranslate(),
                a = t.progress,
                s = t.isBeginning,
                o = t.isEnd,
                l = s,
                d = o;
              0 === n
                ? ((a = 0), (s = !0), (o = !0))
                : ((s = (a = (e - t.minTranslate()) / n) <= 0), (o = a >= 1)),
                q(t, { progress: a, isBeginning: s, isEnd: o }),
                (r.watchSlidesProgress ||
                  r.watchSlidesVisibility ||
                  (r.centeredSlides && r.autoHeight)) &&
                  t.updateSlidesProgress(e),
                s && !l && t.emit("reachBeginning toEdge"),
                o && !d && t.emit("reachEnd toEdge"),
                ((l && !s) || (d && !o)) && t.emit("fromEdge"),
                t.emit("progress", a);
            },
            updateSlidesClasses: function () {
              var e,
                t = this,
                i = t.slides,
                r = t.params,
                n = t.$wrapperEl,
                a = t.activeIndex,
                s = t.realIndex,
                o = t.virtual && r.virtual.enabled;
              i.removeClass(
                r.slideActiveClass +
                  " " +
                  r.slideNextClass +
                  " " +
                  r.slidePrevClass +
                  " " +
                  r.slideDuplicateActiveClass +
                  " " +
                  r.slideDuplicateNextClass +
                  " " +
                  r.slideDuplicatePrevClass
              ),
                (e = o
                  ? t.$wrapperEl.find(
                      "." +
                        r.slideClass +
                        '[data-swiper-slide-index="' +
                        a +
                        '"]'
                    )
                  : i.eq(a)).addClass(r.slideActiveClass),
                r.loop &&
                  (e.hasClass(r.slideDuplicateClass)
                    ? n
                        .children(
                          "." +
                            r.slideClass +
                            ":not(." +
                            r.slideDuplicateClass +
                            ')[data-swiper-slide-index="' +
                            s +
                            '"]'
                        )
                        .addClass(r.slideDuplicateActiveClass)
                    : n
                        .children(
                          "." +
                            r.slideClass +
                            "." +
                            r.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            s +
                            '"]'
                        )
                        .addClass(r.slideDuplicateActiveClass));
              var l = e
                .nextAll("." + r.slideClass)
                .eq(0)
                .addClass(r.slideNextClass);
              r.loop &&
                0 === l.length &&
                (l = i.eq(0)).addClass(r.slideNextClass);
              var d = e
                .prevAll("." + r.slideClass)
                .eq(0)
                .addClass(r.slidePrevClass);
              r.loop &&
                0 === d.length &&
                (d = i.eq(-1)).addClass(r.slidePrevClass),
                r.loop &&
                  (l.hasClass(r.slideDuplicateClass)
                    ? n
                        .children(
                          "." +
                            r.slideClass +
                            ":not(." +
                            r.slideDuplicateClass +
                            ')[data-swiper-slide-index="' +
                            l.attr("data-swiper-slide-index") +
                            '"]'
                        )
                        .addClass(r.slideDuplicateNextClass)
                    : n
                        .children(
                          "." +
                            r.slideClass +
                            "." +
                            r.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            l.attr("data-swiper-slide-index") +
                            '"]'
                        )
                        .addClass(r.slideDuplicateNextClass),
                  d.hasClass(r.slideDuplicateClass)
                    ? n
                        .children(
                          "." +
                            r.slideClass +
                            ":not(." +
                            r.slideDuplicateClass +
                            ')[data-swiper-slide-index="' +
                            d.attr("data-swiper-slide-index") +
                            '"]'
                        )
                        .addClass(r.slideDuplicatePrevClass)
                    : n
                        .children(
                          "." +
                            r.slideClass +
                            "." +
                            r.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            d.attr("data-swiper-slide-index") +
                            '"]'
                        )
                        .addClass(r.slideDuplicatePrevClass)),
                t.emitSlidesClasses();
            },
            updateActiveIndex: function (e) {
              var t,
                i = this,
                r = i.rtlTranslate ? i.translate : -i.translate,
                n = i.slidesGrid,
                a = i.snapGrid,
                s = i.params,
                o = i.activeIndex,
                l = i.realIndex,
                d = i.snapIndex,
                c = e;
              if (void 0 === c) {
                for (var p = 0; p < n.length; p += 1)
                  void 0 !== n[p + 1]
                    ? r >= n[p] && r < n[p + 1] - (n[p + 1] - n[p]) / 2
                      ? (c = p)
                      : r >= n[p] && r < n[p + 1] && (c = p + 1)
                    : r >= n[p] && (c = p);
                s.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
              }
              if (a.indexOf(r) >= 0) t = a.indexOf(r);
              else {
                var u = Math.min(s.slidesPerGroupSkip, c);
                t = u + Math.floor((c - u) / s.slidesPerGroup);
              }
              if ((t >= a.length && (t = a.length - 1), c !== o)) {
                var v = parseInt(
                  i.slides.eq(c).attr("data-swiper-slide-index") || c,
                  10
                );
                q(i, {
                  snapIndex: t,
                  realIndex: v,
                  previousIndex: o,
                  activeIndex: c,
                }),
                  i.emit("activeIndexChange"),
                  i.emit("snapIndexChange"),
                  l !== v && i.emit("realIndexChange"),
                  (i.initialized || i.params.runCallbacksOnInit) &&
                    i.emit("slideChange");
              } else t !== d && ((i.snapIndex = t), i.emit("snapIndexChange"));
            },
            updateClickedSlide: function (e) {
              var t,
                i = this,
                r = i.params,
                n = F(e.target).closest("." + r.slideClass)[0],
                a = !1;
              if (n)
                for (var s = 0; s < i.slides.length; s += 1)
                  if (i.slides[s] === n) {
                    (a = !0), (t = s);
                    break;
                  }
              if (!n || !a)
                return (
                  (i.clickedSlide = void 0), void (i.clickedIndex = void 0)
                );
              (i.clickedSlide = n),
                i.virtual && i.params.virtual.enabled
                  ? (i.clickedIndex = parseInt(
                      F(n).attr("data-swiper-slide-index"),
                      10
                    ))
                  : (i.clickedIndex = t),
                r.slideToClickedSlide &&
                  void 0 !== i.clickedIndex &&
                  i.clickedIndex !== i.activeIndex &&
                  i.slideToClickedSlide();
            },
          },
          translate: {
            getTranslate: function (e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              var t = this,
                i = t.params,
                r = t.rtlTranslate,
                n = t.translate,
                a = t.$wrapperEl;
              if (i.virtualTranslate) return r ? -n : n;
              if (i.cssMode) return n;
              var s = (function (e, t) {
                void 0 === t && (t = "x");
                var i,
                  r,
                  n,
                  a = L(),
                  s = (function (e) {
                    var t,
                      i = L();
                    return (
                      i.getComputedStyle && (t = i.getComputedStyle(e, null)),
                      !t && e.currentStyle && (t = e.currentStyle),
                      t || (t = e.style),
                      t
                    );
                  })(e);
                return (
                  a.WebKitCSSMatrix
                    ? ((r = s.transform || s.webkitTransform).split(",")
                        .length > 6 &&
                        (r = r
                          .split(", ")
                          .map(function (e) {
                            return e.replace(",", ".");
                          })
                          .join(", ")),
                      (n = new a.WebKitCSSMatrix("none" === r ? "" : r)))
                    : (i = (n =
                        s.MozTransform ||
                        s.OTransform ||
                        s.MsTransform ||
                        s.msTransform ||
                        s.transform ||
                        s
                          .getPropertyValue("transform")
                          .replace("translate(", "matrix(1, 0, 0, 1,"))
                        .toString()
                        .split(",")),
                  "x" === t &&
                    (r = a.WebKitCSSMatrix
                      ? n.m41
                      : 16 === i.length
                      ? parseFloat(i[12])
                      : parseFloat(i[4])),
                  "y" === t &&
                    (r = a.WebKitCSSMatrix
                      ? n.m42
                      : 16 === i.length
                      ? parseFloat(i[13])
                      : parseFloat(i[5])),
                  r || 0
                );
              })(a[0], e);
              return r && (s = -s), s || 0;
            },
            setTranslate: function (e, t) {
              var i = this,
                r = i.rtlTranslate,
                n = i.params,
                a = i.$wrapperEl,
                s = i.wrapperEl,
                o = i.progress,
                l = 0,
                d = 0;
              i.isHorizontal() ? (l = r ? -e : e) : (d = e),
                n.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
                n.cssMode
                  ? (s[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                      i.isHorizontal() ? -l : -d)
                  : n.virtualTranslate ||
                    a.transform("translate3d(" + l + "px, " + d + "px, 0px)"),
                (i.previousTranslate = i.translate),
                (i.translate = i.isHorizontal() ? l : d);
              var c = i.maxTranslate() - i.minTranslate();
              (0 === c ? 0 : (e - i.minTranslate()) / c) !== o &&
                i.updateProgress(e),
                i.emit("setTranslate", i.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (e, t, i, r, n) {
              void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                void 0 === r && (r = !0);
              var a = this,
                s = a.params,
                o = a.wrapperEl;
              if (a.animating && s.preventInteractionOnTransition) return !1;
              var l,
                d = a.minTranslate(),
                c = a.maxTranslate();
              if (
                ((l = r && e > d ? d : r && e < c ? c : e),
                a.updateProgress(l),
                s.cssMode)
              ) {
                var p,
                  u = a.isHorizontal();
                return (
                  0 === t
                    ? (o[u ? "scrollLeft" : "scrollTop"] = -l)
                    : o.scrollTo
                    ? o.scrollTo(
                        (((p = {})[u ? "left" : "top"] = -l),
                        (p.behavior = "smooth"),
                        p)
                      )
                    : (o[u ? "scrollLeft" : "scrollTop"] = -l),
                  !0
                );
              }
              return (
                0 === t
                  ? (a.setTransition(0),
                    a.setTranslate(l),
                    i &&
                      (a.emit("beforeTransitionStart", t, n),
                      a.emit("transitionEnd")))
                  : (a.setTransition(t),
                    a.setTranslate(l),
                    i &&
                      (a.emit("beforeTransitionStart", t, n),
                      a.emit("transitionStart")),
                    a.animating ||
                      ((a.animating = !0),
                      a.onTranslateToWrapperTransitionEnd ||
                        (a.onTranslateToWrapperTransitionEnd = function (e) {
                          a &&
                            !a.destroyed &&
                            e.target === this &&
                            (a.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              a.onTranslateToWrapperTransitionEnd
                            ),
                            a.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              a.onTranslateToWrapperTransitionEnd
                            ),
                            (a.onTranslateToWrapperTransitionEnd = null),
                            delete a.onTranslateToWrapperTransitionEnd,
                            i && a.emit("transitionEnd"));
                        }),
                      a.$wrapperEl[0].addEventListener(
                        "transitionend",
                        a.onTranslateToWrapperTransitionEnd
                      ),
                      a.$wrapperEl[0].addEventListener(
                        "webkitTransitionEnd",
                        a.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              );
            },
          },
          transition: {
            setTransition: function (e, t) {
              var i = this;
              i.params.cssMode || i.$wrapperEl.transition(e),
                i.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              var i = this,
                r = i.activeIndex,
                n = i.params,
                a = i.previousIndex;
              if (!n.cssMode) {
                n.autoHeight && i.updateAutoHeight();
                var s = t;
                if (
                  (s || (s = r > a ? "next" : r < a ? "prev" : "reset"),
                  i.emit("transitionStart"),
                  e && r !== a)
                ) {
                  if ("reset" === s)
                    return void i.emit("slideResetTransitionStart");
                  i.emit("slideChangeTransitionStart"),
                    "next" === s
                      ? i.emit("slideNextTransitionStart")
                      : i.emit("slidePrevTransitionStart");
                }
              }
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              var i = this,
                r = i.activeIndex,
                n = i.previousIndex,
                a = i.params;
              if (((i.animating = !1), !a.cssMode)) {
                i.setTransition(0);
                var s = t;
                if (
                  (s || (s = r > n ? "next" : r < n ? "prev" : "reset"),
                  i.emit("transitionEnd"),
                  e && r !== n)
                ) {
                  if ("reset" === s)
                    return void i.emit("slideResetTransitionEnd");
                  i.emit("slideChangeTransitionEnd"),
                    "next" === s
                      ? i.emit("slideNextTransitionEnd")
                      : i.emit("slidePrevTransitionEnd");
                }
              }
            },
          },
          slide: {
            slideTo: function (e, t, i, r) {
              if (
                (void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                "number" != typeof e && "string" != typeof e)
              )
                throw new Error(
                  "The 'index' argument cannot have type other than 'number' or 'string'. [" +
                    typeof e +
                    "] given."
                );
              if ("string" == typeof e) {
                var n = parseInt(e, 10);
                if (!isFinite(n))
                  throw new Error(
                    "The passed-in 'index' (string) couldn't be converted to 'number'. [" +
                      e +
                      "] given."
                  );
                e = n;
              }
              var a = this,
                s = e;
              s < 0 && (s = 0);
              var o = a.params,
                l = a.snapGrid,
                d = a.slidesGrid,
                c = a.previousIndex,
                p = a.activeIndex,
                u = a.rtlTranslate,
                v = a.wrapperEl;
              if (a.animating && o.preventInteractionOnTransition) return !1;
              var m = Math.min(a.params.slidesPerGroupSkip, s),
                f = m + Math.floor((s - m) / a.params.slidesPerGroup);
              f >= l.length && (f = l.length - 1),
                (p || o.initialSlide || 0) === (c || 0) &&
                  i &&
                  a.emit("beforeSlideChangeStart");
              var h,
                g = -l[f];
              if ((a.updateProgress(g), o.normalizeSlideIndex))
                for (var b = 0; b < d.length; b += 1) {
                  var w = -Math.floor(100 * g),
                    y = Math.floor(100 * d[b]),
                    C = Math.floor(100 * d[b + 1]);
                  void 0 !== d[b + 1]
                    ? w >= y && w < C - (C - y) / 2
                      ? (s = b)
                      : w >= y && w < C && (s = b + 1)
                    : w >= y && (s = b);
                }
              if (a.initialized && s !== p) {
                if (
                  !a.allowSlideNext &&
                  g < a.translate &&
                  g < a.minTranslate()
                )
                  return !1;
                if (
                  !a.allowSlidePrev &&
                  g > a.translate &&
                  g > a.maxTranslate() &&
                  (p || 0) !== s
                )
                  return !1;
              }
              if (
                ((h = s > p ? "next" : s < p ? "prev" : "reset"),
                (u && -g === a.translate) || (!u && g === a.translate))
              )
                return (
                  a.updateActiveIndex(s),
                  o.autoHeight && a.updateAutoHeight(),
                  a.updateSlidesClasses(),
                  "slide" !== o.effect && a.setTranslate(g),
                  "reset" !== h &&
                    (a.transitionStart(i, h), a.transitionEnd(i, h)),
                  !1
                );
              if (o.cssMode) {
                var T,
                  x = a.isHorizontal(),
                  S = -g;
                return (
                  u && (S = v.scrollWidth - v.offsetWidth - S),
                  0 === t
                    ? (v[x ? "scrollLeft" : "scrollTop"] = S)
                    : v.scrollTo
                    ? v.scrollTo(
                        (((T = {})[x ? "left" : "top"] = S),
                        (T.behavior = "smooth"),
                        T)
                      )
                    : (v[x ? "scrollLeft" : "scrollTop"] = S),
                  !0
                );
              }
              return (
                0 === t
                  ? (a.setTransition(0),
                    a.setTranslate(g),
                    a.updateActiveIndex(s),
                    a.updateSlidesClasses(),
                    a.emit("beforeTransitionStart", t, r),
                    a.transitionStart(i, h),
                    a.transitionEnd(i, h))
                  : (a.setTransition(t),
                    a.setTranslate(g),
                    a.updateActiveIndex(s),
                    a.updateSlidesClasses(),
                    a.emit("beforeTransitionStart", t, r),
                    a.transitionStart(i, h),
                    a.animating ||
                      ((a.animating = !0),
                      a.onSlideToWrapperTransitionEnd ||
                        (a.onSlideToWrapperTransitionEnd = function (e) {
                          a &&
                            !a.destroyed &&
                            e.target === this &&
                            (a.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              a.onSlideToWrapperTransitionEnd
                            ),
                            a.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              a.onSlideToWrapperTransitionEnd
                            ),
                            (a.onSlideToWrapperTransitionEnd = null),
                            delete a.onSlideToWrapperTransitionEnd,
                            a.transitionEnd(i, h));
                        }),
                      a.$wrapperEl[0].addEventListener(
                        "transitionend",
                        a.onSlideToWrapperTransitionEnd
                      ),
                      a.$wrapperEl[0].addEventListener(
                        "webkitTransitionEnd",
                        a.onSlideToWrapperTransitionEnd
                      ))),
                !0
              );
            },
            slideToLoop: function (e, t, i, r) {
              void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0);
              var n = this,
                a = e;
              return (
                n.params.loop && (a += n.loopedSlides), n.slideTo(a, t, i, r)
              );
            },
            slideNext: function (e, t, i) {
              void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
              var r = this,
                n = r.params,
                a = r.animating,
                s = r.activeIndex < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup;
              if (n.loop) {
                if (a && n.loopPreventsSlide) return !1;
                r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
              }
              return r.slideTo(r.activeIndex + s, e, t, i);
            },
            slidePrev: function (e, t, i) {
              void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
              var r = this,
                n = r.params,
                a = r.animating,
                s = r.snapGrid,
                o = r.slidesGrid,
                l = r.rtlTranslate;
              if (n.loop) {
                if (a && n.loopPreventsSlide) return !1;
                r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
              }
              function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              var c,
                p = d(l ? r.translate : -r.translate),
                u = s.map(function (e) {
                  return d(e);
                }),
                v = (s[u.indexOf(p)], s[u.indexOf(p) - 1]);
              return (
                void 0 === v &&
                  n.cssMode &&
                  s.forEach(function (e) {
                    !v && p >= e && (v = e);
                  }),
                void 0 !== v &&
                  (c = o.indexOf(v)) < 0 &&
                  (c = r.activeIndex - 1),
                r.slideTo(c, e, t, i)
              );
            },
            slideReset: function (e, t, i) {
              return (
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                this.slideTo(this.activeIndex, e, t, i)
              );
            },
            slideToClosest: function (e, t, i, r) {
              void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                void 0 === r && (r = 0.5);
              var n = this,
                a = n.activeIndex,
                s = Math.min(n.params.slidesPerGroupSkip, a),
                o = s + Math.floor((a - s) / n.params.slidesPerGroup),
                l = n.rtlTranslate ? n.translate : -n.translate;
              if (l >= n.snapGrid[o]) {
                var d = n.snapGrid[o];
                l - d > (n.snapGrid[o + 1] - d) * r &&
                  (a += n.params.slidesPerGroup);
              } else {
                var c = n.snapGrid[o - 1];
                l - c <= (n.snapGrid[o] - c) * r &&
                  (a -= n.params.slidesPerGroup);
              }
              return (
                (a = Math.max(a, 0)),
                (a = Math.min(a, n.slidesGrid.length - 1)),
                n.slideTo(a, e, t, i)
              );
            },
            slideToClickedSlide: function () {
              var e,
                t = this,
                i = t.params,
                r = t.$wrapperEl,
                n =
                  "auto" === i.slidesPerView
                    ? t.slidesPerViewDynamic()
                    : i.slidesPerView,
                a = t.clickedIndex;
              if (i.loop) {
                if (t.animating) return;
                (e = parseInt(
                  F(t.clickedSlide).attr("data-swiper-slide-index"),
                  10
                )),
                  i.centeredSlides
                    ? a < t.loopedSlides - n / 2 ||
                      a > t.slides.length - t.loopedSlides + n / 2
                      ? (t.loopFix(),
                        (a = r
                          .children(
                            "." +
                              i.slideClass +
                              '[data-swiper-slide-index="' +
                              e +
                              '"]:not(.' +
                              i.slideDuplicateClass +
                              ")"
                          )
                          .eq(0)
                          .index()),
                        W(function () {
                          t.slideTo(a);
                        }))
                      : t.slideTo(a)
                    : a > t.slides.length - n
                    ? (t.loopFix(),
                      (a = r
                        .children(
                          "." +
                            i.slideClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            i.slideDuplicateClass +
                            ")"
                        )
                        .eq(0)
                        .index()),
                      W(function () {
                        t.slideTo(a);
                      }))
                    : t.slideTo(a);
              } else t.slideTo(a);
            },
          },
          loop: {
            loopCreate: function () {
              var e = this,
                t = z(),
                i = e.params,
                r = e.$wrapperEl;
              r.children(
                "." + i.slideClass + "." + i.slideDuplicateClass
              ).remove();
              var n = r.children("." + i.slideClass);
              if (i.loopFillGroupWithBlank) {
                var a = i.slidesPerGroup - (n.length % i.slidesPerGroup);
                if (a !== i.slidesPerGroup) {
                  for (var s = 0; s < a; s += 1) {
                    var o = F(t.createElement("div")).addClass(
                      i.slideClass + " " + i.slideBlankClass
                    );
                    r.append(o);
                  }
                  n = r.children("." + i.slideClass);
                }
              }
              "auto" !== i.slidesPerView ||
                i.loopedSlides ||
                (i.loopedSlides = n.length),
                (e.loopedSlides = Math.ceil(
                  parseFloat(i.loopedSlides || i.slidesPerView, 10)
                )),
                (e.loopedSlides += i.loopAdditionalSlides),
                e.loopedSlides > n.length && (e.loopedSlides = n.length);
              var l = [],
                d = [];
              n.each(function (t, i) {
                var r = F(t);
                i < e.loopedSlides && d.push(t),
                  i < n.length && i >= n.length - e.loopedSlides && l.push(t),
                  r.attr("data-swiper-slide-index", i);
              });
              for (var c = 0; c < d.length; c += 1)
                r.append(F(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
              for (var p = l.length - 1; p >= 0; p -= 1)
                r.prepend(
                  F(l[p].cloneNode(!0)).addClass(i.slideDuplicateClass)
                );
            },
            loopFix: function () {
              var e = this;
              e.emit("beforeLoopFix");
              var t,
                i = e.activeIndex,
                r = e.slides,
                n = e.loopedSlides,
                a = e.allowSlidePrev,
                s = e.allowSlideNext,
                o = e.snapGrid,
                l = e.rtlTranslate;
              (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
              var d = -o[i] - e.getTranslate();
              i < n
                ? ((t = r.length - 3 * n + i),
                  (t += n),
                  e.slideTo(t, 0, !1, !0) &&
                    0 !== d &&
                    e.setTranslate((l ? -e.translate : e.translate) - d))
                : i >= r.length - n &&
                  ((t = -r.length + i + n),
                  (t += n),
                  e.slideTo(t, 0, !1, !0) &&
                    0 !== d &&
                    e.setTranslate((l ? -e.translate : e.translate) - d)),
                (e.allowSlidePrev = a),
                (e.allowSlideNext = s),
                e.emit("loopFix");
            },
            loopDestroy: function () {
              var e = this,
                t = e.$wrapperEl,
                i = e.params,
                r = e.slides;
              t
                .children(
                  "." +
                    i.slideClass +
                    "." +
                    i.slideDuplicateClass +
                    ",." +
                    i.slideClass +
                    "." +
                    i.slideBlankClass
                )
                .remove(),
                r.removeAttr("data-swiper-slide-index");
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              var t = this;
              if (
                !(
                  t.support.touch ||
                  !t.params.simulateTouch ||
                  (t.params.watchOverflow && t.isLocked) ||
                  t.params.cssMode
                )
              ) {
                var i = t.el;
                (i.style.cursor = "move"),
                  (i.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                  (i.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                  (i.style.cursor = e ? "grabbing" : "grab");
              }
            },
            unsetGrabCursor: function () {
              var e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.el.style.cursor = "");
            },
          },
          manipulation: {
            appendSlide: function (e) {
              var t = this,
                i = t.$wrapperEl,
                r = t.params;
              if (
                (r.loop && t.loopDestroy(),
                "object" == typeof e && "length" in e)
              )
                for (var n = 0; n < e.length; n += 1) e[n] && i.append(e[n]);
              else i.append(e);
              r.loop && t.loopCreate(),
                (r.observer && t.support.observer) || t.update();
            },
            prependSlide: function (e) {
              var t = this,
                i = t.params,
                r = t.$wrapperEl,
                n = t.activeIndex;
              i.loop && t.loopDestroy();
              var a = n + 1;
              if ("object" == typeof e && "length" in e) {
                for (var s = 0; s < e.length; s += 1) e[s] && r.prepend(e[s]);
                a = n + e.length;
              } else r.prepend(e);
              i.loop && t.loopCreate(),
                (i.observer && t.support.observer) || t.update(),
                t.slideTo(a, 0, !1);
            },
            addSlide: function (e, t) {
              var i = this,
                r = i.$wrapperEl,
                n = i.params,
                a = i.activeIndex;
              n.loop &&
                ((a -= i.loopedSlides),
                i.loopDestroy(),
                (i.slides = r.children("." + n.slideClass)));
              var s = i.slides.length;
              if (e <= 0) i.prependSlide(t);
              else if (e >= s) i.appendSlide(t);
              else {
                for (
                  var o = a > e ? a + 1 : a, l = [], d = s - 1;
                  d >= e;
                  d -= 1
                ) {
                  var c = i.slides.eq(d);
                  c.remove(), l.unshift(c);
                }
                if ("object" == typeof t && "length" in t) {
                  for (var p = 0; p < t.length; p += 1) t[p] && r.append(t[p]);
                  o = a > e ? a + t.length : a;
                } else r.append(t);
                for (var u = 0; u < l.length; u += 1) r.append(l[u]);
                n.loop && i.loopCreate(),
                  (n.observer && i.support.observer) || i.update(),
                  n.loop
                    ? i.slideTo(o + i.loopedSlides, 0, !1)
                    : i.slideTo(o, 0, !1);
              }
            },
            removeSlide: function (e) {
              var t = this,
                i = t.params,
                r = t.$wrapperEl,
                n = t.activeIndex;
              i.loop &&
                ((n -= t.loopedSlides),
                t.loopDestroy(),
                (t.slides = r.children("." + i.slideClass)));
              var a,
                s = n;
              if ("object" == typeof e && "length" in e) {
                for (var o = 0; o < e.length; o += 1)
                  (a = e[o]),
                    t.slides[a] && t.slides.eq(a).remove(),
                    a < s && (s -= 1);
                s = Math.max(s, 0);
              } else
                (a = e),
                  t.slides[a] && t.slides.eq(a).remove(),
                  a < s && (s -= 1),
                  (s = Math.max(s, 0));
              i.loop && t.loopCreate(),
                (i.observer && t.support.observer) || t.update(),
                i.loop
                  ? t.slideTo(s + t.loopedSlides, 0, !1)
                  : t.slideTo(s, 0, !1);
            },
            removeAllSlides: function () {
              for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
              this.removeSlide(e);
            },
          },
          events: {
            attachEvents: function () {
              var e = this,
                t = z(),
                i = e.params,
                r = e.touchEvents,
                n = e.el,
                a = e.wrapperEl,
                s = e.device,
                o = e.support;
              (e.onTouchStart = re.bind(e)),
                (e.onTouchMove = ne.bind(e)),
                (e.onTouchEnd = ae.bind(e)),
                i.cssMode && (e.onScroll = le.bind(e)),
                (e.onClick = oe.bind(e));
              var l = !!i.nested;
              if (!o.touch && o.pointerEvents)
                n.addEventListener(r.start, e.onTouchStart, !1),
                  t.addEventListener(r.move, e.onTouchMove, l),
                  t.addEventListener(r.end, e.onTouchEnd, !1);
              else {
                if (o.touch) {
                  var d = !(
                    "touchstart" !== r.start ||
                    !o.passiveListener ||
                    !i.passiveListeners
                  ) && { passive: !0, capture: !1 };
                  n.addEventListener(r.start, e.onTouchStart, d),
                    n.addEventListener(
                      r.move,
                      e.onTouchMove,
                      o.passiveListener ? { passive: !1, capture: l } : l
                    ),
                    n.addEventListener(r.end, e.onTouchEnd, d),
                    r.cancel && n.addEventListener(r.cancel, e.onTouchEnd, d),
                    de || (t.addEventListener("touchstart", ce), (de = !0));
                }
                ((i.simulateTouch && !s.ios && !s.android) ||
                  (i.simulateTouch && !o.touch && s.ios)) &&
                  (n.addEventListener("mousedown", e.onTouchStart, !1),
                  t.addEventListener("mousemove", e.onTouchMove, l),
                  t.addEventListener("mouseup", e.onTouchEnd, !1));
              }
              (i.preventClicks || i.preventClicksPropagation) &&
                n.addEventListener("click", e.onClick, !0),
                i.cssMode && a.addEventListener("scroll", e.onScroll),
                i.updateOnWindowResize
                  ? e.on(
                      s.ios || s.android
                        ? "resize orientationchange observerUpdate"
                        : "resize observerUpdate",
                      se,
                      !0
                    )
                  : e.on("observerUpdate", se, !0);
            },
            detachEvents: function () {
              var e = this,
                t = z(),
                i = e.params,
                r = e.touchEvents,
                n = e.el,
                a = e.wrapperEl,
                s = e.device,
                o = e.support,
                l = !!i.nested;
              if (!o.touch && o.pointerEvents)
                n.removeEventListener(r.start, e.onTouchStart, !1),
                  t.removeEventListener(r.move, e.onTouchMove, l),
                  t.removeEventListener(r.end, e.onTouchEnd, !1);
              else {
                if (o.touch) {
                  var d = !(
                    "onTouchStart" !== r.start ||
                    !o.passiveListener ||
                    !i.passiveListeners
                  ) && { passive: !0, capture: !1 };
                  n.removeEventListener(r.start, e.onTouchStart, d),
                    n.removeEventListener(r.move, e.onTouchMove, l),
                    n.removeEventListener(r.end, e.onTouchEnd, d),
                    r.cancel &&
                      n.removeEventListener(r.cancel, e.onTouchEnd, d);
                }
                ((i.simulateTouch && !s.ios && !s.android) ||
                  (i.simulateTouch && !o.touch && s.ios)) &&
                  (n.removeEventListener("mousedown", e.onTouchStart, !1),
                  t.removeEventListener("mousemove", e.onTouchMove, l),
                  t.removeEventListener("mouseup", e.onTouchEnd, !1));
              }
              (i.preventClicks || i.preventClicksPropagation) &&
                n.removeEventListener("click", e.onClick, !0),
                i.cssMode && a.removeEventListener("scroll", e.onScroll),
                e.off(
                  s.ios || s.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  se
                );
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              var e = this,
                t = e.activeIndex,
                i = e.initialized,
                r = e.loopedSlides,
                n = void 0 === r ? 0 : r,
                a = e.params,
                s = e.$el,
                o = a.breakpoints;
              if (o && (!o || 0 !== Object.keys(o).length)) {
                var l = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
                if (l && e.currentBreakpoint !== l) {
                  var d = l in o ? o[l] : void 0;
                  d &&
                    [
                      "slidesPerView",
                      "spaceBetween",
                      "slidesPerGroup",
                      "slidesPerGroupSkip",
                      "slidesPerColumn",
                    ].forEach(function (e) {
                      var t = d[e];
                      void 0 !== t &&
                        (d[e] =
                          "slidesPerView" !== e ||
                          ("AUTO" !== t && "auto" !== t)
                            ? "slidesPerView" === e
                              ? parseFloat(t)
                              : parseInt(t, 10)
                            : "auto");
                    });
                  var c = d || e.originalParams,
                    p = a.slidesPerColumn > 1,
                    u = c.slidesPerColumn > 1;
                  p && !u
                    ? (s.removeClass(
                        a.containerModifierClass +
                          "multirow " +
                          a.containerModifierClass +
                          "multirow-column"
                      ),
                      e.emitContainerClasses())
                    : !p &&
                      u &&
                      (s.addClass(a.containerModifierClass + "multirow"),
                      "column" === c.slidesPerColumnFill &&
                        s.addClass(
                          a.containerModifierClass + "multirow-column"
                        ),
                      e.emitContainerClasses());
                  var v = c.direction && c.direction !== a.direction,
                    m = a.loop && (c.slidesPerView !== a.slidesPerView || v);
                  v && i && e.changeDirection(),
                    q(e.params, c),
                    q(e, {
                      allowTouchMove: e.params.allowTouchMove,
                      allowSlideNext: e.params.allowSlideNext,
                      allowSlidePrev: e.params.allowSlidePrev,
                    }),
                    (e.currentBreakpoint = l),
                    e.emit("_beforeBreakpoint", c),
                    m &&
                      i &&
                      (e.loopDestroy(),
                      e.loopCreate(),
                      e.updateSlides(),
                      e.slideTo(t - n + e.loopedSlides, 0, !1)),
                    e.emit("breakpoint", c);
                }
              }
            },
            getBreakpoint: function (e, t, i) {
              if (
                (void 0 === t && (t = "window"), e && ("container" !== t || i))
              ) {
                var r = !1,
                  n = L(),
                  a = "window" === t ? n.innerWidth : i.clientWidth,
                  s = "window" === t ? n.innerHeight : i.clientHeight,
                  o = Object.keys(e).map(function (e) {
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                      var t = parseFloat(e.substr(1));
                      return { value: s * t, point: e };
                    }
                    return { value: e, point: e };
                  });
                o.sort(function (e, t) {
                  return parseInt(e.value, 10) - parseInt(t.value, 10);
                });
                for (var l = 0; l < o.length; l += 1) {
                  var d = o[l],
                    c = d.point;
                  d.value <= a && (r = c);
                }
                return r || "max";
              }
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              var e = this,
                t = e.params,
                i = e.isLocked,
                r =
                  e.slides.length > 0 &&
                  t.slidesOffsetBefore +
                    t.spaceBetween * (e.slides.length - 1) +
                    e.slides[0].offsetWidth * e.slides.length;
              t.slidesOffsetBefore && t.slidesOffsetAfter && r
                ? (e.isLocked = r <= e.size)
                : (e.isLocked = 1 === e.snapGrid.length),
                (e.allowSlideNext = !e.isLocked),
                (e.allowSlidePrev = !e.isLocked),
                i !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                i &&
                  i !== e.isLocked &&
                  ((e.isEnd = !1), e.navigation && e.navigation.update());
            },
          },
          classes: {
            addClasses: function () {
              var e,
                t,
                i,
                r = this,
                n = r.classNames,
                a = r.params,
                s = r.rtl,
                o = r.$el,
                l = r.device,
                d = r.support,
                c =
                  ((e = [
                    "initialized",
                    a.direction,
                    { "pointer-events": d.pointerEvents && !d.touch },
                    { "free-mode": a.freeMode },
                    { autoheight: a.autoHeight },
                    { rtl: s },
                    { multirow: a.slidesPerColumn > 1 },
                    {
                      "multirow-column":
                        a.slidesPerColumn > 1 &&
                        "column" === a.slidesPerColumnFill,
                    },
                    { android: l.android },
                    { ios: l.ios },
                    { "css-mode": a.cssMode },
                  ]),
                  (t = a.containerModifierClass),
                  (i = []),
                  e.forEach(function (e) {
                    "object" == typeof e
                      ? Object.keys(e).forEach(function (r) {
                          e[r] && i.push(t + r);
                        })
                      : "string" == typeof e && i.push(t + e);
                  }),
                  i);
              n.push.apply(n, c),
                o.addClass([].concat(n).join(" ")),
                r.emitContainerClasses();
            },
            removeClasses: function () {
              var e = this,
                t = e.$el,
                i = e.classNames;
              t.removeClass(i.join(" ")), e.emitContainerClasses();
            },
          },
          img: {
            loadImage: function (e, t, i, r, n, a) {
              var s,
                o = L();
              function l() {
                a && a();
              }
              F(e).parent("picture")[0] || (e.complete && n)
                ? l()
                : t
                ? (((s = new o.Image()).onload = l),
                  (s.onerror = l),
                  r && (s.sizes = r),
                  i && (s.srcset = i),
                  t && (s.src = t))
                : l();
            },
            preloadimg: function () {
              var e = this;
              function t() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imgLoaded && (e.imgLoaded += 1),
                  e.imgLoaded === e.imgToLoad.length &&
                    (e.params.updateOnimgReady && e.update(),
                    e.emit("imgReady")));
              }
              e.imgToLoad = e.$el.find("img");
              for (var i = 0; i < e.imgToLoad.length; i += 1) {
                var r = e.imgToLoad[i];
                e.loadImage(
                  r,
                  r.currentSrc || r.getAttribute("src"),
                  r.srcset || r.getAttribute("srcset"),
                  r.sizes || r.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        me = {},
        fe = (function () {
          function e() {
            for (
              var t, i, r = arguments.length, n = new Array(r), a = 0;
              a < r;
              a++
            )
              n[a] = arguments[a];
            if (
              (1 === n.length &&
              n[0].constructor &&
              "Object" === Object.prototype.toString.call(n[0]).slice(8, -1)
                ? (i = n[0])
                : ((t = n[0]), (i = n[1])),
              i || (i = {}),
              (i = q({}, i)),
              t && !i.el && (i.el = t),
              i.el && F(i.el).length > 1)
            ) {
              var s = [];
              return (
                F(i.el).each(function (t) {
                  var r = q({}, i, { el: t });
                  s.push(new e(r));
                }),
                s
              );
            }
            var o = this;
            (o.__swiper__ = !0),
              (o.support = Z()),
              (o.device = (function (e) {
                return (
                  void 0 === e && (e = {}),
                  U ||
                    (U = (function (e) {
                      var t = (void 0 === e ? {} : e).userAgent,
                        i = Z(),
                        r = L(),
                        n = r.navigator.platform,
                        a = t || r.navigator.userAgent,
                        s = { ios: !1, android: !1 },
                        o = r.screen.width,
                        l = r.screen.height,
                        d = a.match(/(Android);?[\s\/]+([\d.]+)?/),
                        c = a.match(/(iPad).*OS\s([\d_]+)/),
                        p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                        u = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        v = "Win32" === n,
                        m = "MacIntel" === n;
                      return (
                        !c &&
                          m &&
                          i.touch &&
                          [
                            "1024x1366",
                            "1366x1024",
                            "834x1194",
                            "1194x834",
                            "834x1112",
                            "1112x834",
                            "768x1024",
                            "1024x768",
                            "820x1180",
                            "1180x820",
                            "810x1080",
                            "1080x810",
                          ].indexOf(o + "x" + l) >= 0 &&
                          ((c = a.match(/(Version)\/([\d.]+)/)) ||
                            (c = [0, 1, "13_0_0"]),
                          (m = !1)),
                        d && !v && ((s.os = "android"), (s.android = !0)),
                        (c || u || p) && ((s.os = "ios"), (s.ios = !0)),
                        s
                      );
                    })(e)),
                  U
                );
              })({ userAgent: i.userAgent })),
              (o.browser =
                (J ||
                  (J = (function () {
                    var e,
                      t = L();
                    return {
                      isEdge: !!t.navigator.userAgent.match(/Edge/g),
                      isSafari:
                        ((e = t.navigator.userAgent.toLowerCase()),
                        e.indexOf("safari") >= 0 &&
                          e.indexOf("chrome") < 0 &&
                          e.indexOf("android") < 0),
                      isWebView:
                        /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                          t.navigator.userAgent
                        ),
                    };
                  })()),
                J)),
              (o.eventsListeners = {}),
              (o.eventsAnyListeners = []),
              void 0 === o.modules && (o.modules = {}),
              Object.keys(o.modules).forEach(function (e) {
                var t = o.modules[e];
                if (t.params) {
                  var r = Object.keys(t.params)[0],
                    n = t.params[r];
                  if ("object" != typeof n || null === n) return;
                  if (!(r in i) || !("enabled" in n)) return;
                  !0 === i[r] && (i[r] = { enabled: !0 }),
                    "object" != typeof i[r] ||
                      "enabled" in i[r] ||
                      (i[r].enabled = !0),
                    i[r] || (i[r] = { enabled: !1 });
                }
              });
            var l,
              d,
              c = q({}, pe);
            return (
              o.useParams(c),
              (o.params = q({}, c, me, i)),
              (o.originalParams = q({}, o.params)),
              (o.passedParams = q({}, i)),
              o.params &&
                o.params.on &&
                Object.keys(o.params.on).forEach(function (e) {
                  o.on(e, o.params.on[e]);
                }),
              o.params && o.params.onAny && o.onAny(o.params.onAny),
              (o.$ = F),
              q(o, {
                el: t,
                classNames: [],
                slides: F(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function () {
                  return "horizontal" === o.params.direction;
                },
                isVertical: function () {
                  return "vertical" === o.params.direction;
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
                touchEvents:
                  ((l = ["touchstart", "touchmove", "touchend", "touchcancel"]),
                  (d = ["mousedown", "mousemove", "mouseup"]),
                  o.support.pointerEvents &&
                    (d = ["pointerdown", "pointermove", "pointerup"]),
                  (o.touchEventsTouch = {
                    start: l[0],
                    move: l[1],
                    end: l[2],
                    cancel: l[3],
                  }),
                  (o.touchEventsDesktop = {
                    start: d[0],
                    move: d[1],
                    end: d[2],
                  }),
                  o.support.touch || !o.params.simulateTouch
                    ? o.touchEventsTouch
                    : o.touchEventsDesktop),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  formElements:
                    "input, select, option, textarea, button, video, label",
                  lastClickTime: V(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: o.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0,
                },
                imgToLoad: [],
                imgLoaded: 0,
              }),
              o.useModules(),
              o.emit("_swiper"),
              o.params.init && o.init(),
              o
            );
          }
          var t,
            i,
            r = e.prototype;
          return (
            (r.setProgress = function (e, t) {
              var i = this;
              e = Math.min(Math.max(e, 0), 1);
              var r = i.minTranslate(),
                n = (i.maxTranslate() - r) * e + r;
              i.translateTo(n, void 0 === t ? 0 : t),
                i.updateActiveIndex(),
                i.updateSlidesClasses();
            }),
            (r.emitContainerClasses = function () {
              var e = this;
              if (e.params._emitClasses && e.el) {
                var t = e.el.className.split(" ").filter(function (t) {
                  return (
                    0 === t.indexOf("swiper-container") ||
                    0 === t.indexOf(e.params.containerModifierClass)
                  );
                });
                e.emit("_containerClasses", t.join(" "));
              }
            }),
            (r.getSlideClasses = function (e) {
              var t = this;
              return e.className
                .split(" ")
                .filter(function (e) {
                  return (
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                  );
                })
                .join(" ");
            }),
            (r.emitSlidesClasses = function () {
              var e = this;
              if (e.params._emitClasses && e.el) {
                var t = [];
                e.slides.each(function (i) {
                  var r = e.getSlideClasses(i);
                  t.push({ slideEl: i, classNames: r }),
                    e.emit("_slideClass", i, r);
                }),
                  e.emit("_slideClasses", t);
              }
            }),
            (r.slidesPerViewDynamic = function () {
              var e = this,
                t = e.params,
                i = e.slides,
                r = e.slidesGrid,
                n = e.size,
                a = e.activeIndex,
                s = 1;
              if (t.centeredSlides) {
                for (
                  var o, l = i[a].swiperSlideSize, d = a + 1;
                  d < i.length;
                  d += 1
                )
                  i[d] &&
                    !o &&
                    ((s += 1), (l += i[d].swiperSlideSize) > n && (o = !0));
                for (var c = a - 1; c >= 0; c -= 1)
                  i[c] &&
                    !o &&
                    ((s += 1), (l += i[c].swiperSlideSize) > n && (o = !0));
              } else
                for (var p = a + 1; p < i.length; p += 1)
                  r[p] - r[a] < n && (s += 1);
              return s;
            }),
            (r.update = function () {
              var e = this;
              if (e && !e.destroyed) {
                var t = e.snapGrid,
                  i = e.params;
                i.breakpoints && e.setBreakpoint(),
                  e.updateSize(),
                  e.updateSlides(),
                  e.updateProgress(),
                  e.updateSlidesClasses(),
                  e.params.freeMode
                    ? (r(), e.params.autoHeight && e.updateAutoHeight())
                    : (("auto" === e.params.slidesPerView ||
                        e.params.slidesPerView > 1) &&
                      e.isEnd &&
                      !e.params.centeredSlides
                        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                        : e.slideTo(e.activeIndex, 0, !1, !0)) || r(),
                  i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                  e.emit("update");
              }
              function r() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                  i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(i),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses();
              }
            }),
            (r.changeDirection = function (e, t) {
              void 0 === t && (t = !0);
              var i = this,
                r = i.params.direction;
              return (
                e || (e = "horizontal" === r ? "vertical" : "horizontal"),
                e === r ||
                  ("horizontal" !== e && "vertical" !== e) ||
                  (i.$el
                    .removeClass("" + i.params.containerModifierClass + r)
                    .addClass("" + i.params.containerModifierClass + e),
                  i.emitContainerClasses(),
                  (i.params.direction = e),
                  i.slides.each(function (t) {
                    "vertical" === e
                      ? (t.style.width = "")
                      : (t.style.height = "");
                  }),
                  i.emit("changeDirection"),
                  t && i.update()),
                i
              );
            }),
            (r.mount = function (e) {
              var t = this;
              if (t.mounted) return !0;
              var i,
                r = F(e || t.params.el);
              return (
                !!(e = r[0]) &&
                ((e.swiper = t),
                e && e.shadowRoot && e.shadowRoot.querySelector
                  ? ((i = F(
                      e.shadowRoot.querySelector("." + t.params.wrapperClass)
                    )).children = function (e) {
                      return r.children(e);
                    })
                  : (i = r.children("." + t.params.wrapperClass)),
                q(t, {
                  $el: r,
                  el: e,
                  $wrapperEl: i,
                  wrapperEl: i[0],
                  mounted: !0,
                  rtl:
                    "rtl" === e.dir.toLowerCase() ||
                    "rtl" === r.css("direction"),
                  rtlTranslate:
                    "horizontal" === t.params.direction &&
                    ("rtl" === e.dir.toLowerCase() ||
                      "rtl" === r.css("direction")),
                  wrongRTL: "-webkit-box" === i.css("display"),
                }),
                !0)
              );
            }),
            (r.init = function (e) {
              var t = this;
              return (
                t.initialized ||
                  !1 === t.mount(e) ||
                  (t.emit("beforeInit"),
                  t.params.breakpoints && t.setBreakpoint(),
                  t.addClasses(),
                  t.params.loop && t.loopCreate(),
                  t.updateSize(),
                  t.updateSlides(),
                  t.params.watchOverflow && t.checkOverflow(),
                  t.params.grabCursor && t.setGrabCursor(),
                  t.params.preloadimg && t.preloadimg(),
                  t.params.loop
                    ? t.slideTo(
                        t.params.initialSlide + t.loopedSlides,
                        0,
                        t.params.runCallbacksOnInit
                      )
                    : t.slideTo(
                        t.params.initialSlide,
                        0,
                        t.params.runCallbacksOnInit
                      ),
                  t.attachEvents(),
                  (t.initialized = !0),
                  t.emit("init"),
                  t.emit("afterInit")),
                t
              );
            }),
            (r.destroy = function (e, t) {
              void 0 === e && (e = !0), void 0 === t && (t = !0);
              var i,
                r = this,
                n = r.params,
                a = r.$el,
                s = r.$wrapperEl,
                o = r.slides;
              return (
                void 0 === r.params ||
                  r.destroyed ||
                  (r.emit("beforeDestroy"),
                  (r.initialized = !1),
                  r.detachEvents(),
                  n.loop && r.loopDestroy(),
                  t &&
                    (r.removeClasses(),
                    a.removeAttr("style"),
                    s.removeAttr("style"),
                    o &&
                      o.length &&
                      o
                        .removeClass(
                          [
                            n.slideVisibleClass,
                            n.slideActiveClass,
                            n.slideNextClass,
                            n.slidePrevClass,
                          ].join(" ")
                        )
                        .removeAttr("style")
                        .removeAttr("data-swiper-slide-index")),
                  r.emit("destroy"),
                  Object.keys(r.eventsListeners).forEach(function (e) {
                    r.off(e);
                  }),
                  !1 !== e &&
                    ((r.$el[0].swiper = null),
                    (i = r),
                    Object.keys(i).forEach(function (e) {
                      try {
                        i[e] = null;
                      } catch (e) {}
                      try {
                        delete i[e];
                      } catch (e) {}
                    })),
                  (r.destroyed = !0)),
                null
              );
            }),
            (e.extendDefaults = function (e) {
              q(me, e);
            }),
            (e.installModule = function (t) {
              e.prototype.modules || (e.prototype.modules = {});
              var i =
                t.name || Object.keys(e.prototype.modules).length + "_" + V();
              e.prototype.modules[i] = t;
            }),
            (e.use = function (t) {
              return Array.isArray(t)
                ? (t.forEach(function (t) {
                    return e.installModule(t);
                  }),
                  e)
                : (e.installModule(t), e);
            }),
            (t = e),
            (i = [
              {
                key: "extendedDefaults",
                get: function () {
                  return me;
                },
              },
              {
                key: "defaults",
                get: function () {
                  return pe;
                },
              },
            ]) && ue(t, i),
            e
          );
        })();
      Object.keys(ve).forEach(function (e) {
        Object.keys(ve[e]).forEach(function (t) {
          fe.prototype[t] = ve[e][t];
        });
      }),
        fe.use([Q, ie]);
      const he = fe;
      function ge() {
        return (ge =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = arguments[t];
              for (var r in i)
                Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var be = {
        toggleEl: function (e, t) {
          e[t ? "addClass" : "removeClass"](
            this.params.navigation.disabledClass
          ),
            e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t);
        },
        update: function () {
          var e = this,
            t = e.params.navigation,
            i = e.navigation.toggleEl;
          if (!e.params.loop) {
            var r = e.navigation,
              n = r.$nextEl,
              a = r.$prevEl;
            a &&
              a.length > 0 &&
              (e.isBeginning ? i(a, !0) : i(a, !1),
              a[
                e.params.watchOverflow && e.isLocked
                  ? "addClass"
                  : "removeClass"
              ](t.lockClass)),
              n &&
                n.length > 0 &&
                (e.isEnd ? i(n, !0) : i(n, !1),
                n[
                  e.params.watchOverflow && e.isLocked
                    ? "addClass"
                    : "removeClass"
                ](t.lockClass));
          }
        },
        onPrevClick: function (e) {
          var t = this;
          e.preventDefault(),
            (t.isBeginning && !t.params.loop) || t.slidePrev();
        },
        onNextClick: function (e) {
          var t = this;
          e.preventDefault(), (t.isEnd && !t.params.loop) || t.slideNext();
        },
        init: function () {
          var e,
            t,
            i = this,
            r = i.params.navigation;
          (r.nextEl || r.prevEl) &&
            (r.nextEl &&
              ((e = F(r.nextEl)),
              i.params.uniqueNavElements &&
                "string" == typeof r.nextEl &&
                e.length > 1 &&
                1 === i.$el.find(r.nextEl).length &&
                (e = i.$el.find(r.nextEl))),
            r.prevEl &&
              ((t = F(r.prevEl)),
              i.params.uniqueNavElements &&
                "string" == typeof r.prevEl &&
                t.length > 1 &&
                1 === i.$el.find(r.prevEl).length &&
                (t = i.$el.find(r.prevEl))),
            e && e.length > 0 && e.on("click", i.navigation.onNextClick),
            t && t.length > 0 && t.on("click", i.navigation.onPrevClick),
            q(i.navigation, {
              $nextEl: e,
              nextEl: e && e[0],
              $prevEl: t,
              prevEl: t && t[0],
            }));
        },
        destroy: function () {
          var e = this,
            t = e.navigation,
            i = t.$nextEl,
            r = t.$prevEl;
          i &&
            i.length &&
            (i.off("click", e.navigation.onNextClick),
            i.removeClass(e.params.navigation.disabledClass)),
            r &&
              r.length &&
              (r.off("click", e.navigation.onPrevClick),
              r.removeClass(e.params.navigation.disabledClass));
        },
      };
      const we = {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        },
        create: function () {
          Y(this, { navigation: ge({}, be) });
        },
        on: {
          init: function (e) {
            e.navigation.init(), e.navigation.update();
          },
          toEdge: function (e) {
            e.navigation.update();
          },
          fromEdge: function (e) {
            e.navigation.update();
          },
          destroy: function (e) {
            e.navigation.destroy();
          },
          click: function (e, t) {
            var i = e.navigation,
              r = i.$nextEl,
              n = i.$prevEl,
              a = t.target;
            if (e.params.navigation.hideOnClick && !F(a).is(n) && !F(a).is(r)) {
              if (
                e.pagination &&
                e.params.pagination &&
                e.params.pagination.clickable &&
                (e.pagination.el === a || e.pagination.el.contains(a))
              )
                return;
              var s;
              r
                ? (s = r.hasClass(e.params.navigation.hiddenClass))
                : n && (s = n.hasClass(e.params.navigation.hiddenClass)),
                !0 === s ? e.emit("navigationShow") : e.emit("navigationHide"),
                r && r.toggleClass(e.params.navigation.hiddenClass),
                n && n.toggleClass(e.params.navigation.hiddenClass);
            }
          },
        },
      };
      function ye() {
        return (ye =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = arguments[t];
              for (var r in i)
                Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var Ce = {
        update: function () {
          var e = this,
            t = e.rtl,
            i = e.params.pagination;
          if (
            i.el &&
            e.pagination.el &&
            e.pagination.$el &&
            0 !== e.pagination.$el.length
          ) {
            var r,
              n =
                e.virtual && e.params.virtual.enabled
                  ? e.virtual.slides.length
                  : e.slides.length,
              a = e.pagination.$el,
              s = e.params.loop
                ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
                : e.snapGrid.length;
            if (
              (e.params.loop
                ? ((r = Math.ceil(
                    (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                  )) >
                    n - 1 - 2 * e.loopedSlides && (r -= n - 2 * e.loopedSlides),
                  r > s - 1 && (r -= s),
                  r < 0 && "bullets" !== e.params.paginationType && (r = s + r))
                : (r =
                    void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
              "bullets" === i.type &&
                e.pagination.bullets &&
                e.pagination.bullets.length > 0)
            ) {
              var o,
                l,
                d,
                c = e.pagination.bullets;
              if (
                (i.dynamicBullets &&
                  ((e.pagination.bulletSize = c
                    .eq(0)
                    [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                  a.css(
                    e.isHorizontal() ? "width" : "height",
                    e.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"
                  ),
                  i.dynamicMainBullets > 1 &&
                    void 0 !== e.previousIndex &&
                    ((e.pagination.dynamicBulletIndex += r - e.previousIndex),
                    e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1
                      ? (e.pagination.dynamicBulletIndex =
                          i.dynamicMainBullets - 1)
                      : e.pagination.dynamicBulletIndex < 0 &&
                        (e.pagination.dynamicBulletIndex = 0)),
                  (o = r - e.pagination.dynamicBulletIndex),
                  (d =
                    ((l = o + (Math.min(c.length, i.dynamicMainBullets) - 1)) +
                      o) /
                    2)),
                c.removeClass(
                  i.bulletActiveClass +
                    " " +
                    i.bulletActiveClass +
                    "-next " +
                    i.bulletActiveClass +
                    "-next-next " +
                    i.bulletActiveClass +
                    "-prev " +
                    i.bulletActiveClass +
                    "-prev-prev " +
                    i.bulletActiveClass +
                    "-main"
                ),
                a.length > 1)
              )
                c.each(function (e) {
                  var t = F(e),
                    n = t.index();
                  n === r && t.addClass(i.bulletActiveClass),
                    i.dynamicBullets &&
                      (n >= o &&
                        n <= l &&
                        t.addClass(i.bulletActiveClass + "-main"),
                      n === o &&
                        t
                          .prev()
                          .addClass(i.bulletActiveClass + "-prev")
                          .prev()
                          .addClass(i.bulletActiveClass + "-prev-prev"),
                      n === l &&
                        t
                          .next()
                          .addClass(i.bulletActiveClass + "-next")
                          .next()
                          .addClass(i.bulletActiveClass + "-next-next"));
                });
              else {
                var p = c.eq(r),
                  u = p.index();
                if ((p.addClass(i.bulletActiveClass), i.dynamicBullets)) {
                  for (var v = c.eq(o), m = c.eq(l), f = o; f <= l; f += 1)
                    c.eq(f).addClass(i.bulletActiveClass + "-main");
                  if (e.params.loop)
                    if (u >= c.length - i.dynamicMainBullets) {
                      for (var h = i.dynamicMainBullets; h >= 0; h -= 1)
                        c.eq(c.length - h).addClass(
                          i.bulletActiveClass + "-main"
                        );
                      c.eq(c.length - i.dynamicMainBullets - 1).addClass(
                        i.bulletActiveClass + "-prev"
                      );
                    } else
                      v
                        .prev()
                        .addClass(i.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(i.bulletActiveClass + "-prev-prev"),
                        m
                          .next()
                          .addClass(i.bulletActiveClass + "-next")
                          .next()
                          .addClass(i.bulletActiveClass + "-next-next");
                  else
                    v
                      .prev()
                      .addClass(i.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(i.bulletActiveClass + "-prev-prev"),
                      m
                        .next()
                        .addClass(i.bulletActiveClass + "-next")
                        .next()
                        .addClass(i.bulletActiveClass + "-next-next");
                }
              }
              if (i.dynamicBullets) {
                var g = Math.min(c.length, i.dynamicMainBullets + 4),
                  b =
                    (e.pagination.bulletSize * g - e.pagination.bulletSize) /
                      2 -
                    d * e.pagination.bulletSize,
                  w = t ? "right" : "left";
                c.css(e.isHorizontal() ? w : "top", b + "px");
              }
            }
            if (
              ("fraction" === i.type &&
                (a.find(X(i.currentClass)).text(i.formatFractionCurrent(r + 1)),
                a.find(X(i.totalClass)).text(i.formatFractionTotal(s))),
              "progressbar" === i.type)
            ) {
              var y;
              y = i.progressbarOpposite
                ? e.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : e.isHorizontal()
                ? "horizontal"
                : "vertical";
              var C = (r + 1) / s,
                T = 1,
                x = 1;
              "horizontal" === y ? (T = C) : (x = C),
                a
                  .find(X(i.progressbarFillClass))
                  .transform(
                    "translate3d(0,0,0) scaleX(" + T + ") scaleY(" + x + ")"
                  )
                  .transition(e.params.speed);
            }
            "custom" === i.type && i.renderCustom
              ? (a.html(i.renderCustom(e, r + 1, s)),
                e.emit("paginationRender", a[0]))
              : e.emit("paginationUpdate", a[0]),
              a[
                e.params.watchOverflow && e.isLocked
                  ? "addClass"
                  : "removeClass"
              ](i.lockClass);
          }
        },
        render: function () {
          var e = this,
            t = e.params.pagination;
          if (
            t.el &&
            e.pagination.el &&
            e.pagination.$el &&
            0 !== e.pagination.$el.length
          ) {
            var i =
                e.virtual && e.params.virtual.enabled
                  ? e.virtual.slides.length
                  : e.slides.length,
              r = e.pagination.$el,
              n = "";
            if ("bullets" === t.type) {
              var a = e.params.loop
                ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
                : e.snapGrid.length;
              e.params.freeMode && !e.params.loop && a > i && (a = i);
              for (var s = 0; s < a; s += 1)
                t.renderBullet
                  ? (n += t.renderBullet.call(e, s, t.bulletClass))
                  : (n +=
                      "<" +
                      t.bulletElement +
                      ' class="' +
                      t.bulletClass +
                      '"></' +
                      t.bulletElement +
                      ">");
              r.html(n), (e.pagination.bullets = r.find(X(t.bulletClass)));
            }
            "fraction" === t.type &&
              ((n = t.renderFraction
                ? t.renderFraction.call(e, t.currentClass, t.totalClass)
                : '<span class="' +
                  t.currentClass +
                  '"></span> / <span class="' +
                  t.totalClass +
                  '"></span>'),
              r.html(n)),
              "progressbar" === t.type &&
                ((n = t.renderProgressbar
                  ? t.renderProgressbar.call(e, t.progressbarFillClass)
                  : '<span class="' + t.progressbarFillClass + '"></span>'),
                r.html(n)),
              "custom" !== t.type &&
                e.emit("paginationRender", e.pagination.$el[0]);
          }
        },
        init: function () {
          var e = this,
            t = e.params.pagination;
          if (t.el) {
            var i = F(t.el);
            0 !== i.length &&
              (e.params.uniqueNavElements &&
                "string" == typeof t.el &&
                i.length > 1 &&
                (i = e.$el.find(t.el)),
              "bullets" === t.type &&
                t.clickable &&
                i.addClass(t.clickableClass),
              i.addClass(t.modifierClass + t.type),
              "bullets" === t.type &&
                t.dynamicBullets &&
                (i.addClass("" + t.modifierClass + t.type + "-dynamic"),
                (e.pagination.dynamicBulletIndex = 0),
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
              "progressbar" === t.type &&
                t.progressbarOpposite &&
                i.addClass(t.progressbarOppositeClass),
              t.clickable &&
                i.on("click", X(t.bulletClass), function (t) {
                  t.preventDefault();
                  var i = F(this).index() * e.params.slidesPerGroup;
                  e.params.loop && (i += e.loopedSlides), e.slideTo(i);
                }),
              q(e.pagination, { $el: i, el: i[0] }));
          }
        },
        destroy: function () {
          var e = this,
            t = e.params.pagination;
          if (
            t.el &&
            e.pagination.el &&
            e.pagination.$el &&
            0 !== e.pagination.$el.length
          ) {
            var i = e.pagination.$el;
            i.removeClass(t.hiddenClass),
              i.removeClass(t.modifierClass + t.type),
              e.pagination.bullets &&
                e.pagination.bullets.removeClass(t.bulletActiveClass),
              t.clickable && i.off("click", X(t.bulletClass));
          }
        },
      };
      const Te = {
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
            formatFractionCurrent: function (e) {
              return e;
            },
            formatFractionTotal: function (e) {
              return e;
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
            lockClass: "swiper-pagination-lock",
          },
        },
        create: function () {
          Y(this, { pagination: ye({ dynamicBulletIndex: 0 }, Ce) });
        },
        on: {
          init: function (e) {
            e.pagination.init(), e.pagination.render(), e.pagination.update();
          },
          activeIndexChange: function (e) {
            (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
          },
          snapIndexChange: function (e) {
            e.params.loop || e.pagination.update();
          },
          slidesLengthChange: function (e) {
            e.params.loop && (e.pagination.render(), e.pagination.update());
          },
          snapGridLengthChange: function (e) {
            e.params.loop || (e.pagination.render(), e.pagination.update());
          },
          destroy: function (e) {
            e.pagination.destroy();
          },
          click: function (e, t) {
            var i = t.target;
            if (
              e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              e.pagination.$el.length > 0 &&
              !F(i).hasClass(e.params.pagination.bulletClass)
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && i === e.navigation.nextEl) ||
                  (e.navigation.prevEl && i === e.navigation.prevEl))
              )
                return;
              !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass)
                ? e.emit("paginationShow")
                : e.emit("paginationHide"),
                e.pagination.$el.toggleClass(e.params.pagination.hiddenClass);
            }
          },
        },
      };
      he.use([we, Te]),
        window.addEventListener("DOMContentLoaded", function () {
          new he(".swiper-container", {
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      i(549), i(903), i(329), i(734), i(298), i(733), i(418), i(666), i(697);
    })();
})();
