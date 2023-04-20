$(document).ready((function () {
    $(".go-form").on("touchend, click", (function (i) {
        i.preventDefault(), $("body,html").animate({scrollTop: $(".order_form").offset().top}, 1e3)
    })), $(".to-scroll").on("click", (function (i) {
        i.preventDefault();
        var e = $(".navigation").find(".burger"), n = $(this).data("scroll");
        $(e).hasClass("active") && $(e).click(), $("body,html").animate({scrollTop: $("." + n).offset().top}, 1e3)
    })), $(".faq-list_item").on("click", (function () {
        $this = $(this), $this.hasClass("_open") ? ($this.removeClass("_open"), $this.find(".answer").slideUp(300)) : $this.find(".answer").slideDown({
            duration: 300,
            complete: function () {
                $this.addClass("_open")
            }
        })
    }));
    var i = 0;
    window.innerWidth <= 990 && 0 === i && (i = 1, $(".component-slider").slick({
        arrows: !0,
        dots: !1,
        adaptiveHeight: !1,
        prevArrow: $(".component .wrapper-slider .prev"),
        nextArrow: $(".component .wrapper-slider .next")
    }), $(".review-slider").slick({arrows: !1, dots: !0, adaptiveHeight: !1})), $(window).on("resize", (function (e) {
        e.target.innerWidth <= 990 && 0 === i ? (i = 1, $(".component-slider").slick({
            arrows: !0,
            dots: !1,
            adaptiveHeight: !1,
            prevArrow: $(".component .wrapper-slider .prev"),
            nextArrow: $(".component .wrapper-slider .next")
        }), $(".review-slider").slick({
            arrows: !1,
            dots: !0,
            adaptiveHeight: !1
        })) : e.target.innerWidth > 990 && 1 === i && (i = 0, $(".component-slider").slick("unslick"), $(".review-slider").slick("unslick"))
    })), $(".burger").on("click", (function (i) {
        if (i.preventDefault(), $(this).hasClass("active")) return $(this).removeClass("active"), $(".navigation .navigation_list").fadeOut(200), !0;
        $(".navigation .navigation_list").fadeIn(200), $(this).addClass("active")
    }))
})), $(window).on("load", (function () {
    var i = $(window).scrollTop(), e = $(".navigation").height();
    $(window).on("scroll", (function () {
        i = $(window).scrollTop();
        var n = $(".navigation");
        i < e ? n.removeClass("_fixed") : n.addClass("_fixed"), i
    }))
}));