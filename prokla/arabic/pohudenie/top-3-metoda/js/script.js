var resultWrapper = document.querySelector(".spin-result-wrapper");
var wheel = document.querySelector(".wheel-img");

function spin() {
    if (wheel.classList.contains("rotated")) {
        resultWrapper.style.display = "block"
    } else {
        wheel.classList.add("super-rotation");
        setTimeout(function () {
            resultWrapper.style.display = "block";
            $(".spin-wrapper").slideUp();
            $(".order_block").slideDown()
        }, 8000);
        wheel.classList.add("rotated")
    }
}

$(document).ready(function () {
    $('a[href="#form"]').on("touchend, click", function (a) {
        a.preventDefault();
        $("body,html").animate({scrollTop: $("#form").offset().top - $(".b-top").height()}, 800)
    });
    $(".close-popup, .pop-up-button").click(function (b) {
        b.preventDefault();
        $(".spin-result-wrapper").fadeOut();
        var a = $(".order_block").offset().top;
        $("body,html").animate({scrollTop: a - $(".b-top").height()}, 800)
    })
});