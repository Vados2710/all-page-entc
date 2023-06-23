if (document.body.classList.contains("ev-date")) {
    function postDate() {
        const t = 864e5, e = new Date;
        let n;
        n = ["Janvāris", "Februāris", "Marts", "Aprīlis", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"];
        for (let n = 0; n < 90; n++) {
            const s = "date-" + n, c = document.getElementsByClassName(s), u = new Date(e.getTime() - n * t);
            let y = 0, d = r(c);
            d = a(d);
            for (let t = 0; t < c.length; t++) {
                const e = c[t].dataset;
                e.format ? c[t].innerHTML = o(u, e.format) : c[t].innerHTML = o(u), /\btime\b/.test(c[t].className) && (c[t].innerHTML += " " + d[y], y++)
            }
        }
        for (let n = 0; n < 90; n++) {
            const s = "date-" + n, c = document.getElementsByClassName(s), u = new Date(e.getTime() - n * t);
            let y = r(c);
            y = a(y);
            for (let t = 0; t < c.length; t++) {
                const e = c[t].dataset;
                e.format ? c[t].innerHTML = o(u, e.format) : c[t].innerHTML = o(u)
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
                const r = Math.floor(t[n] / 60), a = t[n] % 60, o = r < 10 ? "0" + r : r, s = a < 10 ? "0" + a : a;
                e.push(o + ":" + s)
            }
            return e
        }

        function o(t, e) {
            let r = "";
            const a = t.getDate(), o = t.getFullYear(), s = t.getMonth() + 1;
            switch (e || !0) {
                case"yyyy":
                    return r += "" + o, r;
                case"yyyy-1":
                    return r += "" + o - 1, r;
                case"yyyy-2":
                    return r += "" + o - 2, r;
                case"mm.dd.yyyy":
                    return r += s < 10 ? "0" + s : s, r += ".", r += a < 10 ? "0" + a : a, r += "." + o, r;
                case"month":
                    return r += n[s - 1].toLowerCase(), r;
                case"dd":
                    return r += a < 10 ? "0" + a : a, r;
                case"dd month":
                    return r += a < 10 ? "0" + a : a, r += " ", r += n[s - 1].toLowerCase(), r;
                case"dd month yyyy":
                    return r += a < 10 ? "0" + a : a, r += " ", r += n[s - 1].toLowerCase(), r += " " + o, r;
                case"day dd, month yyyy":
                    return r += ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"][new Date(o, s - 1, a).getDay()], r += " ", r += a < 10 ? "0" + a : a, r += " ", r += n[s - 1], r += " " + o, r;
                case"dd/mm/yyyy":
                    return r += a < 10 ? "0" + a : a, r += "/", r += s < 10 ? "0" + s : s, r += "/" + o, r;
                case"dd-mm-yyyy":
                    return r += a < 10 ? "0" + a : a, r += "-", r += s < 10 ? "0" + s : s, r += "-" + o, r;
                default:
                    return r += a < 10 ? "0" + a : a, r += ".", r += s < 10 ? "0" + s : s, r += "." + o, r
            }
        }
    }

    document.addEventListener("DOMContentLoaded", postDate)
}
