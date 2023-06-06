$(document).ready(function () {
    $(".btn").on("click", function (e) {
        e.preventDefault(), $(this).parents(".base_bl").hide(), $(this).parents(".base_bl").next().fadeIn();
        window.scrollTo(0, 0);
    }), $("label:not(.accum-comment), .submit-answer").on("click", function () {
        var e = $(this);
        setTimeout(function () {
            e.parents(".base_bl").hide(), e.parents(".base_bl").next().fadeIn()
        }, 500)
    }), $(".btn2").on("click", function () {
        $("ul").fadeIn()
    });
});

var year = new Date().getFullYear();
var placeY = document.getElementsByClassName("year");
for (let i = 0; i < placeY.length; i++) {
    var elemY = placeY[i];
    elemY.innerHTML = year;
}