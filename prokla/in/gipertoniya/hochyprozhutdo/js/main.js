var resultWrapper = document.querySelector(".spin-result-wrapper"),
    wheel = document.querySelector(".wheel-img");


var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click(function (b) {
    b.preventDefault(), $(".spin-result-wrapper").fadeOut();
    var a = $(".scroll-here").offset().top;
    $("body,html").animate({
        scrollTop: a
    }, 1000)
});
var timeLeft = 1800000;

function makeTimer() {
    var c = new Date;
    c = Date.parse(c) / 1000, timeLeft -= 1000;
    var a = 0,
        d = Math.floor(timeLeft / 60000),
        b = Math.floor((timeLeft - 60 * d * 1000) / 1000);
    a < "10" && (a = "0" + a), d < "10" && (d = "0" + d), b < "10" && (b = "0" + b), $(".days").html(0), $(".hours").html(a), $(".minutes").html(d), $(".seconds").html(b)
}
setInterval(function () {
    makeTimer()
}, 1000);