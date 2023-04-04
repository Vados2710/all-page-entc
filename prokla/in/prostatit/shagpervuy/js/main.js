function getDayEnd() {
    var a = new Date();
    a.setHours(23, 59, 59);
    return a
}

function getTimeRemaining(d) {
    var c = Date.parse(d) - Date.parse(new Date());
    var e = Math.floor((c / 1000) % 60);
    var b = Math.floor((c / 1000 / 60) % 60);
    var a = Math.floor((c / (1000 * 60 * 60)) % 24);
    return {
        total: c,
        hours: a,
        minutes: b,
        seconds: e
    }
}

function getCookie(a) {
    var b = document.cookie.match(new RegExp("(?:^|; )" + a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    return b ? decodeURIComponent(b[1]) : undefined
}

function initializeClock(h, c) {
    var b = document.getElementById(h);
    var e = b.querySelector(".hours");
    var d = b.querySelector(".minutes");
    var f = b.querySelector(".seconds");

    function g() {
        var i = getTimeRemaining(c);
        e.innerHTML = ("0" + i.hours).slice(-2);
        d.innerHTML = ("0" + i.minutes).slice(-2);
        f.innerHTML = ("0" + i.seconds).slice(-2);
        if (i.total <= 0) {
            e.innerHTML = ("00");
            d.innerHTML = ("00");
            f.innerHTML = ("00");
            clearInterval(a)
        }
    }
    g();
    var a = setInterval(g, 1000)
}
var myClock = (document.cookie && document.cookie.match("myClock")) ? (Date.parse(getCookie("myClock")) - Date.now() > -60000) : null;
if (myClock) {
    var deadline = getCookie("myClock")
} else {
    var timeInMinutes = 45;
    var currentTime = Date.parse(new Date());
    var deadline = new Date(currentTime + timeInMinutes * 60 * 1000);
    document.cookie = "myClock=" + deadline
}
$(function () {
    initializeClock("timer6", deadline)
});
$(document).ready(function () {
    $(".spoil").find(".tire").text("+");
    $(".spoil").click(function () {
        var a = $(this).next(".contentSpoil");
        if (a.css("display") == "block") {
            a.hide(1000);
            $(this).find(".tire").text("+")
        } else {
            a.show(1000);
            $(this).find(".tire").text("–")
        }
    })
});