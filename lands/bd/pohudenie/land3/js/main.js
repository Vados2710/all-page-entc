$(document).ready(function () {
    $(".go_form").on("touchend, click", function (e) {
        e.preventDefault();
        $('body,html').animate({scrollTop: $('.order_form').offset().top}, 400);
    });


    var slideItem = $('.review_block').find('[data-id]');
    var elem = 0;
    var c = $(slideItem).length;

    function arrowItem() {
        for (var i = 0; i < $(slideItem).length; i++) {
            if (i === 0) {
                $('.arrow_list').find('.number').append('<span class="active">' + (i + 1) + '</span>');
            } else {
                $('.arrow_list').find('.number').append('<span>' + (i + 1) + '</span>');
            }
        }
    }

    arrowItem();

    $('.next').on('click', function () {
        if (elem === slideItem.length - 1) {
            elem = 0;
        } else {
            elem++;
        }
        $(this).parents('.review_block').find('.photo_block.active').removeClass('active');
        $(this).parents('.review_block').find('.photo_block').eq(elem).addClass('active');
        $(this).parents('.review_block').find('.wrapp_comm').removeClass('active');
        $(this).parents('.review_block').find('.wrapp_comm').eq(elem).addClass('active');
        $(this).parents('.review_block').find('.arrow_list .number span').removeClass('active').eq(elem).addClass('active');
    });

    $('.prev').on('click', function () {
        if (elem === 0) {
            elem = slideItem.length - 1;
        } else {
            elem--;
        }
        $(this).parents('.review_block').find('.photo_block.active').removeClass('active');
        $(this).parents('.review_block').find('.photo_block').eq(elem).addClass('active');
        $(this).parents('.review_block').find('.wrapp_comm').removeClass('active');
        $(this).parents('.review_block').find('.wrapp_comm').eq(elem).addClass('active');
        $(this).parents('.review_block').find('.arrow_list .number span').removeClass('active').eq(elem).addClass('active');
    });


    $('.number span').on('click', function () {
        var c = $(this).text() - 1;
        elem = c;
        $('.number span').removeClass('active');
        $(this).addClass('active');
        $('.photo_block.active').removeClass('active');
        $('.photo_block').eq(c).addClass('active');
        $('.wrapp_comm').removeClass('active');
        $('.wrapp_comm').eq(c).addClass('active');
    });

    var flag = 0;
    if (window.innerWidth <= 991 && flag === 0) {
        flag = 1;
        $('.slider_compos').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            nextArrow: $('.arrow_slider .next'),
            prevArrow: $('.arrow_slider .prev')
        });
    }
    $(window).on('resize', function (event) {
        if (event.target.innerWidth <= 991 && flag === 0) {
            flag = 1;
            $('.slider_compos').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                nextArrow: $('.arrow_slider .next'),
                prevArrow: $('.arrow_slider .prev')
            });

        }
        else if (event.target.innerWidth > 991 && flag === 1) {
            flag = 0;
            $('.slider_compos').slick("unslick");
        }
    });
});