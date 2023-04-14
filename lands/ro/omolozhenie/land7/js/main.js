$(document).ready(function () {
    var scroll = $('.js-link'),
        nav_toggle = $('.header__nav-toggle'),
        nav = $('.header__nav');

    scroll.on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1000);
        nav.removeClass('active');
        nav_toggle.removeClass('active');
    });

    nav_toggle.on('click', function (e) {
        e.preventDefault();
        nav.toggleClass('active');
        console.log(1);
        $(this).toggleClass('active');
    });

    var show = true,
        countbox = ".test__info",
        number = $('.test__progress--num'),
        progress = $('.test__progress');

    $(document).on('scroll', function () {
        scrollShow();
    });

    $(window).on("scroll load resize", function () {
        if (!show) return false;
        var w_top = $(window).scrollTop(),
            e_top = $(countbox).offset().top,
            w_height = $(window).height(),
            d_height = $(document).height(),
            e_height = $(countbox).outerHeight();
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            number.spincrement({
                thousandSeparator: "",
                duration: 3000
            });
            progress.each(function () {
                var prog = $(this).data("prog");
                $(this).css('width', prog + '%');
            });
            show = false;
        }
    });

    var scrollShow = function () {

        var element = $('[data-unshow]'),
            scroll = $(document).scrollTop(),
            winHeight = $(window).height();

        element.each(function () {
            var self = $(this),
                elementPos = self.offset().top;

            if (scroll >= (elementPos - (winHeight / 1.2))) {
                self.addClass('show')
            }
        });

    };
});

$(window).on('load', function () {
    var twenty = $('.twenty');

    twenty.twentytwenty({
        no_overlay: true
    });
});

$(window).on('load resize orientationchange', function () {
    var desc = $('.description__item--content'),
        result = $('.result__text'),
        composition = $('.composition__item'),
        review = $('.review__item'),
        slider = $('.slider'),
        slick_on = 'slick-initialized';

    if ($(window).width() > 767) {
        desc.matchHeight();
        result.matchHeight();
        composition.matchHeight();
        review.matchHeight();

        if (slider.hasClass(slick_on)) {
            slider.slick('unslick');
        }
    }
    else {
        composition.matchHeight({
            remove: true
        });
        review.matchHeight({
            remove: true
        });

        if (!slider.hasClass(slick_on)) {
            slider.slick({
                dots: true,
                infinite: true,
                speed: 600,
                slidesToShow: 1,
                adaptiveHeight: true,
                fade: true,
                arrows: false,
                cssEase: 'linear'
            });
        }
    }
});