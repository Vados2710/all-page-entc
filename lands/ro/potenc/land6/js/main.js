$(document).ready(function () {

    setTimeout(function () {
        $("#call-but-m1").show();
    }, 20000);

    $('.btn-order').click(function () {
        $("html, body").animate({
            scrollTop: $("#order_form").offset().top - 300
        }, 2000);
        return false;
    });

    $('.scroll1').click(function () {
        $("html, body").animate({
            scrollTop: $("#reviews").offset().top
        }, 2000);
        return false;
    });

    $('.fake-text-wrap .check-btn').on("click", function () {
        if (!$('.check_popup_code_input').val()) {
            $('.js-message').removeClass('show');
            return false;
        }
        $('.js-message').removeClass('show');
        if ($('.check_popup_code_input').val() == 536427639800009) {
            $('.right').addClass('show');
        } else {
            $('.wrong').addClass('show');
        }
    });

    (function reviews_slider () {
        var slider = $('.reviews-list');
        slider.owlCarousel({
            items: 1,
            loop: true,
            nav: false
        })
    })();
});
