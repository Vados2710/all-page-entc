//postdate
const months = ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"],
    monthMin = ["", "", "", "", "", "", "", "", "", "", "", ""],
    days = ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"],
    daysMin = ["", "", "", "", "", "", ""],
    seasons = ["tél", "tavasz", "nyár", "ősz"];

function postDate(t, e, n, s, o) {
    for (let t = 0; t < 60; t++) a(t, "date-"), a(t, "date");

    function a(t, e) {
        let n;
        n = "date-" === e ? -t : t;
        const s = new Date(Date.now() + 864e5 * n),
            o = s.getDate(),
            a = s.getMonth() + 1,
            i = s.getFullYear(),
            u = d(o),
            c = u + "." + d(a) + "." + i,
            l = e + t,
            m = document.querySelectorAll("." + l);
        for (let t = 0; t < m.length; t++) {
            const e = m[t].dataset.format;
            m[t].innerHTML = void 0 !== e && "" !== e ? String(r(u, a, i, e, n)) : c
        }
    }

    function r(t, e, n, s, o) {
        let a = s;
        const r = ["dd", "mm", "yyyy"],
            i = {
                dd: t,
                mm: d(e),
                yyyy: n
            };
        for (let t = 0; t < r.length; t++) {
            let e = r[t],
                n = new RegExp(e);
            a = a.replace(n, i[e])
        }
        return a.split(" ").join(" ")
    }

    function d(t) {
        return t < 10 ? "0" + t : t
    }
}
document.body.classList.contains("ev-date") && document.addEventListener("DOMContentLoaded", function () {
    postDate(days, daysMin, months, monthMin, seasons)
});