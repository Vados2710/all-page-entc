var resultWrapper = document.querySelector(".spin-result-wrapper"),
    wheel = document.querySelector(".wheel-img");

function spin() {
    wheel.classList.contains("rotated") || (wheel.classList.add("super-rotation"), setTimeout((function () {
        resultWrapper.style.display = "block"
    }), 8e3), setTimeout((function () {
        $(".spin-wrapper").slideUp(), $(".order_block").slideDown(), start_timer()
    }), 1e4), wheel.classList.add("rotated"))
}
var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click((function (t) {
    t.preventDefault(), $(".spin-result-wrapper").fadeOut();
    var e = $("#roulette").offset().top;
    $("body,html").animate({
        scrollTop: e
    }, 800)
}));
var intr, time = 600;

function start_timer() {
    intr = setInterval(tick, 1e3)
}

function tick() {
    time -= 1;
    var t = Math.floor(time / 60),
        e = time - 60 * t;
    0 == t && 0 == e && clearInterval(intr), e = e >= 10 ? e : "0" + e, $("#min").html("0" + t), $("#sec").html(e)
}
 Date.prototype.addDays = function (t) {
    return this.setDate(this.getDate() + t), this
}, $("document").ready((function () {
    for (var t = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], e = $("span.comment_date"), o = e.length, r = [], n = new Date, a = o - 1; a >= 0; a--) {
        var i = Math.round(2 * Math.random());
        n = new Date(n.addDays(-i));
        r[a] = n.getDate() + "." + t[n.getMonth()] + "." + n.getFullYear()
    }
    e.each((function (t, e) {
        $(this).text(r[t])
    }))
}));