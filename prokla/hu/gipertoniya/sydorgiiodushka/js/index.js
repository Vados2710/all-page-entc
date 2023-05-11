document.addEventListener("DOMContentLoaded", (function () {
    const e = document.querySelector(".sideprod"),
        t = e.parentElement,
        n = document.createElement("div"),
        o = document.querySelector(".footer");

    function m() {
        e.parentElement.getBoundingClientRect().top < 0 ? (e.style.position = "fixed", e.style.top = "20px", e.getBoundingClientRect().bottom > o.getBoundingClientRect().top - 20 && (e.style.top = o.getBoundingClientRect().top - e.getBoundingClientRect().bottom + "px")) : e.style.position = "static"
    }
    n.classList.add("content__side"), t.appendChild(n), n.appendChild(e), m(), window.addEventListener("scroll", m)
}));
const months = ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"],
    monthMin = ["", "", "", "", "", "", "", "", "", "", "", ""],
    days = ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"],
    daysMin = ["", "", "", "", "", "", ""],
    seasons = ["tél", "tavasz", "nyár", "ősz"];

function postDate(e, t, n, o, m) {
    for (let e = 0; e < 60; e++) a(e, "date-"), a(e, "date");

    function a(e, t) {
        let n;
        n = "date-" === t ? -e : e;
        const o = new Date(Date.now() + 864e5 * n),
            m = o.getDate(),
            a = o.getMonth() + 1,
            d = o.getFullYear(),
            s = r(m),
            l = s + "." + r(a) + "." + d,
            i = t + e,
            u = document.querySelectorAll("." + i);
        for (let e = 0; e < u.length; e++) {
            const t = u[e].dataset.format;
            u[e].innerHTML = void 0 !== t && "" !== t ? String(c(s, a, d, t, n)) : l
        }
    }

    function c(e, t, o, m, a) {
        let c = m;
        const l = ["dd", "mm", "yyyy", "monthFull", "year"],
            i = {
                dd: e,
                mm: r(t),
                yyyy: o,
                monthFull: d(t, n, !1),
                year: s(o, a)
            };
        for (let e = 0; e < l.length; e++) {
            let t = l[e],
                n = new RegExp(t);
            c = c.replace(n, i[t])
        }
        return c.split(" ").join(" ")
    }

    function d(e, t, n, o) {
        const m = o || 0;
        let a;
        return a = e + m > 12 ? m - (12 - e) : e + m, a = e + m <= 0 ? 12 + m + 1 : e + m, c = n, d = t[a - 1], c && d && d.length > 0 ? d[0].toUpperCase() + d.slice(1) : d;
        var c, d
    }

    function s(e, t) {
        return e + t
    }

    function r(e) {
        return e < 10 ? "0" + e : e
    }
}
document.body.classList.contains("ev-date") && document.addEventListener("DOMContentLoaded", (function () {
    postDate(days, daysMin, months, monthMin, seasons)
}));