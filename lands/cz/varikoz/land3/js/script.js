// Smooth scroll
$(document).ready((function () {
    $('a[href*="#"]').on("click", (function (t) {
        var o = $(this);
        return $("html, body").stop().animate({
            scrollTop: $(o.attr("href")).offset().top
        }, 777), t.preventDefault(), !1
    }))
}));

// Reviews carousel
$('.carousel').slick({
    dots: true
});