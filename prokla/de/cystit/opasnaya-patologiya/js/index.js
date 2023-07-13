for (var linkNav = document.querySelectorAll('[href^="#"]'), V = .2, i = 0; i < linkNav.length; i++) linkNav[i].addEventListener("click", (function (e) {
    e.preventDefault();
    var n = window.pageYOffset,
        r = this.href.replace(/[^#]*(.*)/, "$1");
    t = document.querySelector(r).getBoundingClientRect().top - 10, start = null, requestAnimationFrame((function e(a) {
        null === start && (start = a);
        var o = a - start,
            s = t < 0 ? Math.max(n - o / V, n + t) : Math.min(n + o / V, n + t);
        window.scrollTo(0, s), s != n + t ? requestAnimationFrame(e) : location.hash = r
    }))
}), !1);
if (document.body.classList.contains("ev-date")) {
    function postDate() {
        const t = 864e5,
            e = new Date;
        let n;
        n = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
        for (let n = 0; n < 90; n++) {
            const s = "date-" + n,
                u = document.getElementsByClassName(s),
                c = new Date(e.getTime() - n * t);
            let i = 0,
                l = r(u);
            l = a(l);
            for (let t = 0; t < u.length; t++) {
                const e = u[t].dataset;
                e.format ? u[t].innerHTML = o(c, e.format) : u[t].innerHTML = o(c), /\btime\b/.test(u[t].className) && (u[t].innerHTML += " " + l[i], i++)
            }
        }
        for (let n = 0; n < 90; n++) {
            const s = "date-" + n,
                u = document.getElementsByClassName(s),
                c = new Date(e.getTime() - n * t);
            let i = r(u);
            i = a(i);
            for (let t = 0; t < u.length; t++) {
                const e = u[t].dataset;
                e.format ? u[t].innerHTML = o(c, e.format) : u[t].innerHTML = o(c)
            }
        }

        function r(t, e) {
            const n = [];
            for (let e = 0; e < t.length; e++) t[e].className.match(/\btime\b/) && n.push(Math.round(1440 * Math.random()));
            return e ? n.sort((function (t, e) {
                return e - t
            })) : n.sort((function (t, e) {
                return t - e
            })), n
        }

        function a(t) {
            const e = [];
            for (let n = 0; n < t.length; n++) {
                const r = Math.floor(t[n] / 60),
                    a = t[n] % 60,
                    o = r < 10 ? "0" + r : r,
                    s = a < 10 ? "0" + a : a;
                e.push(o + ":" + s)
            }
            return e
        }

        function o(t, e) {
            let r = "";
            const a = t.getDate(),
                o = t.getFullYear(),
                s = t.getMonth() + 1;
            switch (e || !0) {
                case "yyyy":
                    return r += "" + o, r;
                case "yyyy-1":
                    return r += "" + o - 1, r;
                case "yyyy-2":
                    return r += "" + o - 2, r;
                case "mm.dd.yyyy":
                    return r += s < 10 ? "0" + s : s, r += ".", r += a < 10 ? "0" + a : a, r += "." + o, r;
                case "month":
                    return r += n[s - 1].toLowerCase(), r;
                case "dd":
                    return r += a < 10 ? "0" + a : a, r;
                case "dd month":
                    return r += a < 10 ? "0" + a : a, r += " ", r += n[s - 1].toLowerCase(), r;
                case "dd month yyyy":
                    return r += a < 10 ? "0" + a : a, r += " ", r += n[s - 1].toLowerCase(), r += " " + o, r;
                case "day dd, month yyyy":
                    return r += ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"][new Date(o, s - 1, a).getDay()], r += " ", r += a < 10 ? "0" + a : a, r += " ", r += n[s - 1], r += " " + o, r;
                case "dd/mm/yyyy":
                    return r += a < 10 ? "0" + a : a, r += "/", r += s < 10 ? "0" + s : s, r += "/" + o, r;
                case "dd-mm-yyyy":
                    return r += a < 10 ? "0" + a : a, r += "-", r += s < 10 ? "0" + s : s, r += "-" + o, r;
                default:
                    return r += a < 10 ? "0" + a : a, r += ".", r += s < 10 ? "0" + s : s, r += "." + o, r
            }
        }
    }
    document.addEventListener("DOMContentLoaded", postDate)
}