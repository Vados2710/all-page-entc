var resultWrapper = document.querySelector(".spin-result-wrapper");
var wheel = document.querySelector(".wheel-img");
var p_1 = document.querySelector("#button_none");

function spin() {
    if (wheel.classList.contains("rotated")) {
        resultWrapper.style.display = "block"
    } else {
        wheel.classList.add("super-rotation");
        setTimeout(function () {
            resultWrapper.style.display = "block"
        }, 8000);
        setTimeout(function () {
            $(".spin-wrapper").slideUp();
            $(".order_block, .section_form").slideDown();
            start_timer()
        }, 8000);
        wheel.classList.add("rotated");
        p_1.style.display = "none";
        $("a").attr({href: "#linkAfter"})
    }
}

var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click(function (b) {
    b.preventDefault();
    $(".spin-result-wrapper").fadeOut();
    var a = $(".wheel").offset().top;
    $("body,html").animate({scrollTop: a}, 800)
});

function outputDat(b, a) {
    var h = new Date();
    var g = new Date(h.getTime() - b * 86400000);
    var f = (a === false) ? "01,02,03,04,05,06,07,08,09,10,11,12".split(",") : "января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря".split(",");
    var c = g.getDate();
    var e = (a === false) ? g.getDate() + "." + f[g.getMonth()] + "." + g.getFullYear() : g.getDate() + " " + f[g.getMonth()] + " " + g.getFullYear();
    return e
}

var time = 600;
var intr;

function start_timer() {
    intr = setInterval(tick, 1000)
}

function tick() {
    time = time - 1;
    var b = Math.floor(time / 60);
    var a = time - b * 60;
    if (b == 0 && a == 0) {
        clearInterval(intr)
    }
    a = a >= 10 ? a : "0" + a;
    $("#min").html("0" + b);
    $("#sec").html(a)
};