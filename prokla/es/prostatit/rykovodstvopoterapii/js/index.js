function postDate(e, t, r) {
    e = e || "dd.mm.yyyy";
    var n, a = 864e5,
        o = (t = t || "es", r = r || !1, new Date);
    switch (t) {
        case "es":
            n = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    }
    if (r)
        for (var s = 0; s < n.length; s++) n[s] = n[s].slice(0, 3).toLowerCase();
    for (var m = 0; m < 90; m++) {
        var y = "date-" + m,
            u = document.getElementsByClassName(y),
            c = new Date(o.getTime() - m * a),
            d = 0,
            i = h(u);
        i = g(i);
        for (s = 0; s < u.length; s++) {
            (f = u[s].dataset).format ? u[s].innerHTML = M(c, f.format) : u[s].innerHTML = M(c, e), /\btime\b/.test(u[s].className) && (u[s].innerHTML += " " + i[d], d++)
        }
    }
    for (m = 0; m < 90; m++)
        for (y = "date" + m, u = document.getElementsByClassName(y), c = new Date(o.getTime() + m * a), d = 0, s = 0; s < u.length; s++) {
            var f;
            (f = u[s].dataset).format ? u[s].innerHTML = M(c, f.format) : u[s].innerHTML = M(c)
        }

    function h(e, t) {
        for (var r = [], n = !1, a = 0; a < e.length; a++) e[a].className.match(/\btime\b/) && (e[a].className.match(/\bdate-0\b/) && (n = !0), r.push(l(n)));
        return t ? r.sort((function (e, t) {
            return t - e
        })) : r.sort((function (e, t) {
            return e - t
        })), r
    }

    function l(e) {
        if (e) {
            var t = new Date,
                r = 60 * t.getHours() + t.getMinutes();
            return Math.round(0 + Math.random() * r)
        }
        return Math.round(0 + 1440 * Math.random())
    }

    function g(e) {
        for (var t = [], r = 0; r < e.length; r++) {
            var n = Math.floor(e[r] / 60),
                a = e[r] % 60,
                o = n < 10 ? "0" + n : n,
                s = a < 10 ? "0" + a : a;
            t.push(o + ":" + s)
        }
        return t
    }

    function M(e, t) {
        var r = "",
            a = e.getDate(),
            o = e.getFullYear(),
            s = e.getMonth() + 1;
        switch (t || !0) {
            case "tom":
                return r += a + 1, r += ".", r += s < 10 ? "0" + s : s;
            case "mm.dd.yyyy":
                return r += s < 10 ? "0" + s : s, r += ".", r += a < 10 ? "0" + a : a, r += "." + o;
            case "dd month yyyy":
                return r += a < 10 ? "0" + a : a, r += " ", r += n[s - 1], r += " " + o;
            case "dd month":
                return r += a < 10 ? "0" + a : a, r += " ", r += n[s - 1];
            case "month":
                return r += n[s - 1].toLowerCase();
            case "day dd, month yyyy":
                return r += ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"][new Date(o, s - 1, a).getDay()], r += " ", r += a < 10 ? "0" + a : a, r += " ", r += n[s - 1], r += " " + o;
            case "dd/mm/yyyy":
                return r += a < 10 ? "0" + a : a, r += "/", r += s < 10 ? "0" + s : s, r += "/" + o;
            case "dd-mm-yyyy":
                return r += a < 10 ? "0" + a : a, r += "-", r += s < 10 ? "0" + s : s, r += "-" + o;
            case "yyyy.mm.dd":
                return r += o, r += ".", r += s < 10 ? "0" + s : s, r += ".", r += a < 10 ? "0" + a : a;
            case "month dd, yyyy":
                return r += n[s - 1], r += " ", r += a < 10 ? "0" + a : a, r += ", ", r += o;
            case "yyyy":
                return r += o;
            default:
                return r += a < 10 ? "0" + a : a, r += ".", r += s < 10 ? "0" + s : s, r += "." + o
        }
    }
}