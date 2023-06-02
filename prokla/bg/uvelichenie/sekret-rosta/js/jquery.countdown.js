function initTimer(nd) {
    var b = 0,
        c = 0,
        d = 0,
        e = 0,
        f = 0,
        g = 0,
        h = Math.floor(nd / 3600),
        i = nd % 3600,
        j = Math.floor(i / 60),
        k = i % 60,
        l = k;
    b = Math.floor(h / 10), c = h % 10, d = Math.floor(j / 10), e = j % 10, f = Math.floor(l / 10), g = l % 10, setTime(b, c, d, e, f, g, fl), changetime(b, c, d, e, f, g)
}

function changetime(nd, b, c, d, e, f) {
    if (fl = 0, f > 0) f--, fl = 1;
    else if (e > 0) f = 9, e--, fl = 2;
    else if (d > 0) f = 9, e = 5, d--, fl = 3;
    else if (c > 0) f = 9, e = 5, d = 9, c--, fl = 4;
    else if (b > 0) f = 9, e = 5, d = 9, c = 5, b--, fl = 5;
    else {
        if (!(nd > 0)) return !1;
        f = 9, e = 5, d = 9, c = 5, b = 9, nd--, fl = 6
    }
    setTimeout(function() {
        setTime(nd, b, c, d, e, f, fl), changetime(nd, b, c, d, e, f)
    }, 1e3)
}

function setTime(nd, b, c, d, e, f, g) {
    1 == g && ($(".num.sec1").text(f), $(".num.sec1").toggleClass("timer"), setTimeout(function() {
        $(".num.sec1").toggleClass("timer")
    }, 100)), 2 == g && ($(".num.sec1").text(f), $(".num.sec0").text(e), $(".num.sec1, .num.sec0").toggleClass("timer"), setTimeout(function() {
        $(".num.sec1, .num.sec0").toggleClass("timer")
    }, 100)), 3 == g && ($(".num.sec1").text(f), $(".num.sec0").text(e), $(".num.min1").text(d), $(".num.sec1, .num.sec0, .num.min1").toggleClass("timer"), setTimeout(function() {
        $(".num.sec1, .num.sec0, .num.min1").toggleClass("timer")
    }, 100)), 4 == g && ($(".num.sec1").text(f), $(".num.sec0").text(e), $(".num.min1").text(d), $(".num.min0").text(c), $(".num.sec1, .num.sec0, .num.min1, .num.min0").toggleClass("timer"), setTimeout(function() {
        $(".num.sec1, .num.sec0, .num.min1, .num.min0").toggleClass("timer")
    }, 100)), 5 == g && ($(".num.sec1").text(f), $(".num.sec0").text(e), $(".num.min1").text(d), $(".num.min0").text(c), $(".num.hour1").text(b), $(".num.sec1, .num.sec0, .num.min1, .num.min0, .num.hour1").toggleClass("timer"), setTimeout(function() {
        $(".num.sec1, .num.sec0, .num.min1, .num.min0, .num.hour1").toggleClass("timer")
    }, 100)), 6 == g && ($(".num.sec1").text(f), $(".num.sec0").text(e), $(".num.min1").text(d), $(".num.min0").text(c), $(".num.hour1").text(b), $(".num.hour0").text(nd), $(".num.sec1, .num.sec0, .num.min1, .num.min0, .num.hour1, .num.hour0").toggleClass("timer"), setTimeout(function() {
        $(".num.sec1, .num.sec0, .num.min1, .num.min0, .num.hour1, .num.hour0").toggleClass("timer")
    }, 100)), 0 == g && ($(".num.sec1").text(f), $(".num.sec0").text(e), $(".num.min1").text(d), $(".num.min0").text(c), $(".num.hour1").text(b), $(".num.hour0").text(nd)), sec = 3600 * (10 * nd + b) + 60 * (10 * c + d) + (10 * e + f), localStorage.setItem("timerdata", sec)
}
timerstart = 5000, fl = 0, timerclass = ".timer ", $(document).ready(function() {
    if ($(timerclass).length > 0) {
        var nd = new Date,
            b = parseInt(nd.getDate());
        if (localStorage.getItem("newdata")) {
            var c = parseInt(localStorage.getItem("newdata"));
            b - c == 0 ? timerstart = parseInt(localStorage.getItem("timerdata")) : localStorage.setItem("newdata", b)
        } else localStorage.setItem("newdata", b), localStorage.setItem("timerdata", timerstart);
        timerstart >= 0 && initTimer(timerstart)
    }
});

