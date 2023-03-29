var resultWrapper = document.querySelector(".spin-result-wrapper");
var wheel = document.querySelector(".wheel-img");

function spin() {
    if (!wheel.classList.contains("rotated")) {
        wheel.classList.add("super-rotation");
        setTimeout(function () {
            resultWrapper.style.display = "block"
        }, 8000);
        setTimeout(function () {
            $(".spin-wrapper").slideUp();
            $("#boxes").slideUp();
            $(".order_block").slideDown();
            start_timer()
        }, 10000);
        wheel.classList.add("rotated")
    }
}

var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click(function (a) {
    a.preventDefault();
    $(".spin-result-wrapper").fadeOut();
    $("body,html").animate({scrollTop: $("#toscroll").offset().top}, 800)
});
$("a[href='#toscroll']").on("touchend, click", function (a) {
    a.preventDefault();
    $("body,html").animate({scrollTop: $("#toscroll").offset().top - $(".c-nav").height()}, 800)
});