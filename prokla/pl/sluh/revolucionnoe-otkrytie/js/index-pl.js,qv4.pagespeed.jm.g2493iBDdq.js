!(function (e) {
  var t = {};
  function a(n) {
    if (t[n]) return t[n].exports;
    var r = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(r.exports, r, r.exports, a), (r.l = !0), r.exports;
  }
  (a.m = e),
    (a.c = t),
    (a.d = function (e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          a.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = ""),
    a((a.s = 3));
})([
  function (e, t, a) {},
  function (e, t) {
    document.addEventListener("DOMContentLoaded", function (e) {});
  },
  function (e, t) {
    var a = new Date(),
      n = a.getDate(),
      r = a.getMonth() + 1;
    n < 10 && (n = "0" + n), r < 10 && (r = "0" + r);
    var o,
      i,
      m,
      c,
      s = n + "." + r + "." + a.getFullYear();
    (document.getElementById("date").innerText = s),
      (document.getElementById("date2").innerText = s),
      (document.getElementById("date3").innerText = s),
      (DayName = [
        "niedziela",
        "poniedziałek",
        "wtorek",
        "środa",
        "czwartek",
        "piątek",
        "sobota",
      ]),
      (MonthName = [
        "styczeń",
        "luty",
        "marzec",
        "kwiecień",
        "maj",
        "czerwiec",
        "lipiec",
        "sierpień",
        "wrzesień",
        "październik",
        "listopad",
        "grudzień",
      ]),
      (document.getElementById("date_4").innerText =
        ((o = new Date(Date.now() - 432e6)).getDay(),
        (i = o.getMonth()),
        (m = o.getDate()) < 10 && (m = "0" + m),
        (c = o.getFullYear()) <= 99 && (c += 1900),
        m + " " + MonthName[i] + " " + c));
    var u = document.querySelector(".hamburger"),
      p = document.querySelector("#icon"),
      l = document.querySelector(".navigation");
    u.addEventListener("click", function () {
      p.classList.toggle("close"), l.classList.toggle("block");
    }),
      l.addEventListener("click", function () {
        l.classList.remove("block"), p.classList.remove("close");
      });
    var d = function (e) {
        if (e.matches) return l;
        l.classList.remove("block"), p.classList.remove("close");
      },
      v = window.matchMedia("screen and (max-width: 768px)");
    d(v), v.addEventListener("change", d);
  },
  function (e, t, a) {
    "use strict";
    a.r(t), a(0), a(1);
    var n = a.p + "images/4470f57e3c3be570cb978186ab6b5d8a.svg",
      r = a.p + "images/34d4558ce8f53d99b73286a4e76dfab5.jpg",
      o = a.p + "images/rev2.jpg",
      i = a.p + "images/ffd0b35b6974e4505ad54942dbafaa04.jpg",
      m = a.p + "images/rev9.jpg",
      c = a.p + "images/review2.jpg",
      s = a.p + "images/rev10.jpg",
      u = a.p + "",
      p = a.p + "images/review5.jpg",
      l = a.p + "images/review1.jpg",
      d = a.p + "images/review4.jpg",
      v = [
        {
          type: "comment",
          author: "Beata Wargacka",
          avatar: n,
          text: "Nie spodziewałem się tego odkrycia. Zdecydowanie polecam!",
          timestamp: "15 min temu",
          pictures: [l],
        },
        {
          type: "comment",
          author: "Bronisław Jagodziński",
          avatar: n,
          text: "Po przeczytaniu tego artykułu postanowiłam natychmiast zamówić te kapsułki. Teraz czekam na kuriera.",
          timestamp: "20 min temu",
          pictures: [],
        },
        {
          type: "reply",
          author: "Nikola8910",
          avatar: n,
          text: "@BronisławJagodziński Wczoraj otrzymałem przesyłkę. Mam nadzieję, że będzie to strzał w dziesiątkę.",
          timestamp: "min temu",
          pictures: [],
        },
        {
          type: "comment",
          author: "Bożena",
          avatar: n,
          text: "Nigdy bym nie pomyślała, że taka malutka kapsułka może dokonać takich cudów. To jest po prostu rewelacja. Wszystkie kłopoty odeszły, gdy je brałam. Polecam z całego serca!",
          timestamp: "30 min temu",
          pictures: [c],
        },
        {
          type: "comment",
          author: "Maria",
          avatar: n,
          text: "Chyba też muszę zamówić ten produkt",
          timestamp: "godzinę temu",
          pictures: [],
        },
        {
          type: "reply",
          author: "Anna",
          avatar: n,
          text: "@Maria nie ma się nad czym zastanawiać. Cena nie jest wysoka, a efekty są naprawdę niesamowite. I jest to pozytywne!",
          timestamp: "10 min temu",
          pictures: [],
        },
        {
          type: "comment",
          author: "Stefan Koblosz",
          avatar: n,
          text: "Dwie moje koleżanki już używają tych kapsułek i nie krzyczą „Co, co? Stefan, mów głośniej, nie słyszę cię”",
          timestamp: "godzinę temu",
          pictures: [],
        },
        {
          type: "reply",
          author: "Kazimierz",
          avatar: n,
          text: "@Stefan, ile lat mają Twoi koleżanki? Bo zastanawiam się czy zamówić ten zabieg dla mojego ojca.",
          timestamp: "30 min temu",
          pictures: [],
        },
        {
          type: "reply",
          author: "Stefan",
          avatar: n,
          text: "@Kazimierz Obie są po pięćdziesiątce. Zamów go, na pewno pomoże także Twojemu tacie.",
          timestamp: "dziesięć minut temu",
          pictures: [],
        },
        {
          type: "comment",
          author: "Jan",
          avatar: n,
          text: "Trzeba przyznać, że profesor jest po prostu geniuszem. Stworzenie tak rewolucyjnego środka to naprawdę coś! Jestem dumny widząc takie osiągnięcia na koncie osób o polskich korzeniach. Aplikacja jest bardzo prosta, a kapsułki działają bez zarzutu! Polecam wszystkim!",
          timestamp: "2 godziny temu",
          pictures: [a.p + "images/review3.jpg"],
        },
        {
          type: "comment",
          author: "Mirosław Wąsik",
          avatar: n,
          text: "Cudownie, po prostu cudownie!",
          timestamp: "2 godziny temu",
          pictures: [],
        },
        {
          type: "comment",
          author: "Stefan",
          avatar: n,
          text: "Rewelacyjny produkt. A ja wydałem tyle pieniędzy na ten głupi aparat słuchowy i po co? Po miesiącu i tak wylądował w koszu. Na zdjęciu widać, jak bardzo jest to niepraktyczne. Nie wiem, co by się stało, gdyby nie te kapsułki. Teraz Earlick Forte stoi na półce w łazience, wygląda tak ładnie i skromnie.",
          timestamp: "3 godziny temu",
          pictures: [i],
        },
        {
          type: "comment",
          author: "Beata",
          avatar: n,
          text: "Polecam ten produkt każdemu, niezależnie od wieku.",
          timestamp: "3 godziny temu",
          pictures: [d],
        },
        {
          type: "comment",
          author: "Andrzej",
          avatar: n,
          text: "To naprawdę działa, niesamowicie. Pozbyłam się już niewygodnego aparatu słuchowego, przez który wszyscy się ze mnie śmiali. Teraz nikt nie widzi, że tak dyskretnie trzymam na półce słoik z kapsułkami",
          timestamp: "4 godziny temu",
          pictures: [r],
        },
        {
          type: "comment",
          author: "Aga",
          avatar: n,
          text: "Te kapsułki nie tylko działają, ale też obłędnie pachną. Gorąco polecam!",
          timestamp: "5 godzin temu",
          pictures: [p],
        },
        {
          type: "comment",
          author: "Agata",
          avatar: n,
          text: "Trochę się obawiam, ale warto spróbować.",
          timestamp: "5 godzin temu",
          pictures: [],
        },
        {
          type: "reply",
          author: "Sabina",
          avatar: n,
          text: "@Agata mi pomógł,i Tobie również pomoże. Zamów teraz!",
          timestamp: "4 godziny temu",
          pictures: [],
        },
        {
          type: "comment",
          author: "Iza",
          avatar: n,
          text: "Kapsułki te posiadają europejską gwarancję najwyższej jakości, więc jestem pewna, że są skuteczne.",
          timestamp: "9 godzin temu",
          pictures: [],
        },
        {
          type: "comment",
          author: "Rafał",
          avatar: n,
          text: "Nie wierzę swoim uszom, ale słyszę każdy szept.",
          timestamp: "9 godzin temu",
          pictures: [],
        },
        {
          type: "comment",
          author: "Janusz",
          avatar: n,
          text: "Bajeczne, po prostu bajeczne!",
          timestamp: "10 godzin temu",
          pictures: [],
        },
        {
          type: "comment",
          author: "Andrzej Kołakowski",
          avatar: n,
          text: "Czuję się, jakbym znowu miała 20 lat. Polecam!!!",
          timestamp: "13 godzin temu",
          pictures: [],
        },
      ];
    function f(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
      return n;
    }
    var g = document.querySelector(".comments-wrapper");
    function y(e, t, a, n, r) {
      return (
        '<div class="comment comment-counter">\n      \n      <div class="comment__content">\n        <p class="comment__name text--gray">\n          '
          .concat(
            e,
            '<span class="comment__timestamp text--gray"\n            >'
          )
          .concat(
            n,
            '</span\n          >\n        </p>\n        <p class="comment__text text--gray">\n          '
          )
          .concat(a, "\n        </p>") +
        b(r) +
        '<span class="comment__resp">Odpověď</span><a class="comment__button text--gray"></a>\n      </div>\n    </div>'
      );
    }
    function j(e, t, a, n, r) {
      return (
        '<div class="comment__response comment-counter">\n  \n      <div class="comment__content">\n        <p class="comment__name text--gray">\n          '
          .concat(
            e,
            '<span class="comment__timestamp text--gray"\n            >'
          )
          .concat(
            n,
            '</span\n          >\n        </p>\n        <p class="comment__text text--gray">\n          '
          )
          .concat(a, "\n        </p>") +
        b(r) +
        '<span class="comment__resp">Odpověď</span><a class="comment__button text--gray"></a>\n      </div>\n    </div>'
      );
    }
    function b(e) {
      return e.length > 0
        ? ' <div class="comment__img-wrapper">' +
            e
              .map(function (e, t) {
                return '<img\n              src="'
                  .concat(e, '"\n              alt="')
                  .concat(
                    t,
                    '"\n              class="comment__img img-resp"\n              />'
                  );
              })
              .join("") +
            "</div>"
        : "";
    }
    function k(e, t) {
      if (e) {
        if ("string" == typeof e) return h(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === a && e.constructor && (a = e.constructor.name),
          "Map" === a || "Set" === a
            ? Array.from(e)
            : "Arguments" === a ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
            ? h(e, t)
            : void 0
        );
      }
    }
    function h(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
      return n;
    }
    document.addEventListener("DOMContentLoaded", function () {
      var e,
        t = (function (e, t) {
          var a;
          if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (
              Array.isArray(e) ||
              (a = (function (e, t) {
                if (e) {
                  if ("string" == typeof e) return f(e, t);
                  var a = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === a && e.constructor && (a = e.constructor.name),
                    "Map" === a || "Set" === a
                      ? Array.from(e)
                      : "Arguments" === a ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                      ? f(e, t)
                      : void 0
                  );
                }
              })(e)) ||
              (t && e && "number" == typeof e.length)
            ) {
              a && (e = a);
              var n = 0,
                r = function () {};
              return {
                s: r,
                n: function () {
                  return n >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[n++] };
                },
                e: function (e) {
                  throw e;
                },
                f: r,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var o,
            i = !0,
            m = !1;
          return {
            s: function () {
              a = e[Symbol.iterator]();
            },
            n: function () {
              var e = a.next();
              return (i = e.done), e;
            },
            e: function (e) {
              (m = !0), (o = e);
            },
            f: function () {
              try {
                i || null == a.return || a.return();
              } finally {
                if (m) throw o;
              }
            },
          };
        })(v);
      try {
        for (t.s(); !(e = t.n()).done; ) {
          var a = e.value,
            n = a.type,
            r = a.author,
            o = (a.avatar, a.text),
            i = a.timestamp,
            m = a.pictures;
          if ("comment" === n)
            g.insertAdjacentHTML("beforeend", y(r, 0, o, i, m));
          else {
            if ("reply" !== n) return null;
            g.insertAdjacentHTML("beforeend", j(r, 0, o, i, m));
          }
        }
      } catch (e) {
        t.e(e);
      } finally {
        t.f();
      }
    }),
      a.p;
    var _ = document.querySelector(".comments-wrapper"),
      x =
        (document.querySelector(".comments-form"),
        document.querySelector(".comments-form__input-name"),
        document.querySelector(".comments-form__textarea"),
        document.querySelectorAll(".comments-number")),
      S = document.querySelectorAll(".comment-counter");
    new Array();
    document.addEventListener(
      "DOMContentLoaded",
      function () {
        if (localStorage.getItem("comments")) {
          var e,
            t = localStorage.getItem("comments"),
            a = JSON.parse(t),
            n = (function (e, t) {
              var a;
              if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (a = k(e))) {
                  a && (e = a);
                  var n = 0,
                    r = function () {};
                  return {
                    s: r,
                    n: function () {
                      return n >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[n++] };
                    },
                    e: function (e) {
                      throw e;
                    },
                    f: r,
                  };
                }
                throw new TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              }
              var o,
                i = !0,
                m = !1;
              return {
                s: function () {
                  a = e[Symbol.iterator]();
                },
                n: function () {
                  var e = a.next();
                  return (i = e.done), e;
                },
                e: function (e) {
                  (m = !0), (o = e);
                },
                f: function () {
                  try {
                    i || null == a.return || a.return();
                  } finally {
                    if (m) throw o;
                  }
                },
              };
            })(a);
          try {
            for (n.s(); !(e = n.n()).done; ) {
              var r = e.value,
                o = r.signature,
                i = r.comment;
              _.insertAdjacentHTML("afterbegin", w(o, i));
            }
          } catch (e) {
            n.e(e);
          } finally {
            n.f();
          }
        }
        (S = document.querySelectorAll(".comment-counter")),
          (function (e) {
            return (
              (function (e) {
                if (Array.isArray(e)) return h(e);
              })(e) ||
              (function (e) {
                if (
                  "undefined" != typeof Symbol &&
                  Symbol.iterator in Object(e)
                )
                  return Array.from(e);
              })(e) ||
              k(e) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          })(x).map(function (e) {
            e.innerHTML = "".concat(S.length);
          });
      },
      !1
    );
    var w = function (e, t, a) {
      return '<div class="comment comment-counter">\n      \n      <div class="comment__content">\n        <p class="comment__name text--gray">\n          '
        .concat(
          e,
          '<span class="comment__timestamp text--gray"\n            >chwilę temu</span\n          >\n        </p>\n        <p class="comment__text text--gray">\n          '
        )
        .concat(
          t,
          '\n        </p>\n        <span class="comment__resp">Odpověď</span>\n        <a class="comment__button text--gray"></a>\n      </div>\n    </div>'
        );
    };
  },
]),
  $(document).ready(function () {
    
      $(".date").each(function () {
        var e = new Date();
        e.setDate(e.getDate() - $(this).data("num")),
          $(this).text(e.toLocaleString().split(",")[0]);
      });
  });
