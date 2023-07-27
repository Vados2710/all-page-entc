var sliderSelector = ".swiper-container", options = {
    loop: true,
    speed: 1000,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {rotate: 50, stretch: 80, depth: 60, modifier: 1, slideShadows: true},
    navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"},
    breakpoints: {1300: {}, 320: {}}
};
var mySwiper = new Swiper(sliderSelector, options);
mySwiper.init();
$("button.mobile").click(function () {
    $(".modal").css("display", "block")
});
$("button.close").click(function () {
    $(".modal").css("display", "none")
});
let num = document.querySelectorAll(".counter-num");
let counter = document.querySelectorAll(".counter");
for (let j = 0; j < counter.length; j++) {
    let count = 0;
    counter[j].addEventListener("click", function () {
        if (count === 0) {
            count++;
            num[j].innerHTML = parseInt(num[j].innerHTML) + 1
        } else {
            if (count === 1) {
                count--;
                num[j].innerHTML = parseInt(num[j].innerHTML) - 1
            }
        }
    })
}
document.getElementById("clearButton").onclick = function (a) {
    document.getElementById("textInput").value = ""
};
$(document).ready(function () {
    $(".open-popup").on("touchend, click", function (a) {
        a.preventDefault();
        $(".overlay_form").toggleClass("hide");
        $(".popup2").toggleClass("hide");
        $(".blur").toggleClass("active")
    });
    $(".close2").on("touchend, click", function (a) {
        a.preventDefault();
        $("#textInput").val("");
        $(".overlay_form").toggleClass("hide");
        $(".popup2").toggleClass("hide");
        $(".blur").toggleClass("active")
    })
});
