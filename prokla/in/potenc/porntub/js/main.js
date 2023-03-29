var vh,
    vw,
    key,
    slider = null,
    slider_conf = {
        controls: false
    };

$(document).ready(function () {
    vw = $(window).innerWidth();

    $('.form__inp').focus(function () {
        $(this).parent('.form__item').addClass('active');
    });
    $('.form__inp').focusout(function () {
        $(this).parent('.form__item').removeClass('active');
    });

    vh = $(window).height();

    $('.link, .btn-order, .main-nav__item, .links-list__item, .article').on('click', function () {
        $("html, body").animate({
            scrollTop: $("#order_form").offset().top - vh / 3
        }, 700);
        return false;
    });

    if(vw < 992) {
        key = 0;
        slider = $('.actor-slider').bxSlider(slider_conf);
    } else {
        key = 1;
    }
});

$(window).resize(function () {
    vw = $(window).innerWidth();
    if(vw < 992 && key === 1){
        key = 0;
        slider = $('.actor-slider').bxSlider(slider_conf);
    } else if (vw >= 992 && key === 0) {
        key = 1;
        slider.destroySlider();
    }
});