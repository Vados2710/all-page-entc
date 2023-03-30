$(document).ready(function () {

    $(".blur").on("click", function () {
        $(this).children(".blur-p").css("display", "none");
        $(this).children("img").css("filter", "none")
    });
    $(".top_nav__item, .blockHeaderName").on("touchend, click", function (b) {
        b.preventDefault();
        $("body,html").animate({scrollTop: $(".features-wrappergit ").offset().top}, 400)
    })
});
