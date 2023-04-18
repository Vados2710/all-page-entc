$(document).ready(function () {
    $(".go-form").on("touchend, click", function (e) {
        e.preventDefault();
        $('body,html').animate({scrollTop: $('.order_form').offset().top}, 1000);
    });
    $('.to-scroll').on('click', function (e) {
        e.preventDefault();
        var burg = $('.navigation').find('.burger');
        var toBlock = $(this).data('scroll');
        if ($(burg).hasClass('active')) {
            $(burg).click();
        }
        $('body,html').animate({scrollTop: $('.' + toBlock).offset().top}, 1000);
    });

    $('.faq-list_item').on('click', function () {
        $this = $(this);
        if ($this.hasClass('_open')) {
            $this.removeClass('_open');
            $this.find('.answer').slideUp(300);
        } else {
            $this.find('.answer').slideDown({
                duration: 300, complete: function () {
                    $this.addClass('_open');
                }
            });
        }
    });

    var flag = 0;
    if (window.innerWidth <= 990 && flag === 0) {
        flag = 1;
        $('.component-slider').slick({
            arrows: true,
            dots: false,
            adaptiveHeight: false,
            prevArrow: $('.component .wrapper-slider .prev'),
            nextArrow: $('.component .wrapper-slider .next'),
        });
        $('.review-slider').slick({
            arrows: false,
            dots: true,
            adaptiveHeight: false,
        });
    }
    $(window).on('resize', function (event) {
        if (event.target.innerWidth <= 990 && flag === 0) {
            flag = 1;
            $('.component-slider').slick({
                arrows: true,
                dots: false,
                adaptiveHeight: false,
                prevArrow: $('.component .wrapper-slider .prev'),
                nextArrow: $('.component .wrapper-slider .next'),
            });
            $('.review-slider').slick({
                arrows: false,
                dots: true,
                adaptiveHeight: false,
            });
        } else if (event.target.innerWidth > 990 && flag === 1) {
            flag = 0;
            $('.component-slider').slick('unslick');
            $('.review-slider').slick('unslick');
        }
    });

    $('.burger').on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.navigation .navigation_list').fadeOut(200);
            return true;
        }
        $('.navigation .navigation_list').fadeIn(200)
        $(this).addClass('active');

    })
});


$(window).on('load', function () {
    var scrollPage = $(window).scrollTop();
    var lastScrollTop = 0;
    var fixedMenu = $('.navigation').height();
    $(window).on('scroll', function () {
        scrollPage = $(window).scrollTop();
        var $menu = $('.navigation');
        if (scrollPage < fixedMenu) {
            $menu.removeClass('_fixed');
        } else {
            $menu.addClass('_fixed');

        }

        lastScrollTop = scrollPage;

    });
});