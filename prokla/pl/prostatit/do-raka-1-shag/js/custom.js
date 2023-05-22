setInterval(function () {
    var t = new Date,
        e = t.getSeconds(),
        s = t.getMinutes(),
        n = t.getHours();
    0 == e ? $(".d_seconds").text("0") : $(".d_seconds").text(60 - e), 0 == s ? $(".d_minutes").text("0") : $(".d_minutes").text(60 - s), 0 == n ? $(".d_hours").text("23") : $(".d_hours").text(24 - n)
}, 1e3);

