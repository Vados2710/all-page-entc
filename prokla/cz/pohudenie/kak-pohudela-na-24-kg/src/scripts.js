$(document).ready(function () {
    //sidebar-toggler

    $('#sidebar-toggle, #sidebar-toggle-off').click(function () {
        $('#sidebar .card-body').find('[data-target="#sidebar-toggle"]').toggle();
        $('.card-link').toggle();
        $('.card-link-off').toggle();
    });

    //comments

    // $('.comment-reply').click(function () {
    //     $('#comments_form').find('[name="replyToID"]').val($(this).attr('data-replyID'));
    //
    //     let current = $('#comments_form').find('[name="comment"]').val();
    //     $('#comments_form').find('[name="comment"]').val(current + '@' + $(this).attr('data-replyName') + ': ');
    //
    //     location.href = "#comments_form";
    // });

    $('.slider-wrapper').slick({
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '.slider-arrow-left',
        nextArrow: '.slider-arrow-right',
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('#comments_form').submit(function (e) {

        let errors = [];

        if ($('#comments_form').find('[name="name"]').val().length == 0) {
            errors.push($('#comments_form').find('[name="name"]').attr('error-txt'));
            $('#comments_form').find('[name="name"]').css('border', '1px solid red');
        }

        if ($('#comments_form').find('[name="comment"]').val().length == 0) {
            errors.push($('#comments_form').find('[name="comment"]').attr('error-txt'));
            $('#comments_form').find('[name="comment"]').css('border', '1px solid red');
        }

        if (errors.length) {
            e.preventDefault();
        }

    });

    //slider responsiveness handler

    handlerwd();

    $('#fb-expand-btn').click(function () {
        handlerwd();
    });

    $(window).resize(function () {

        handlerwd();
    });

    function handlerwd() {


        let windowWidth = parseInt($(window).innerWidth());

        let $slider = $('.slider-container');
        let sliderWidth = parseInt($($slider).width());

        $sliders = $('.slider-border');
        let scale = 1;
        let marginBottom = 0;
        let height = 0;

        $($('.slider-border')).each(function () {
            if ($(this).height() >= height) height = $(this).height();
        });


        if (sliderWidth <= 500) {
            scale = sliderWidth / 520;
            marginBottom = parseInt($($slider).height() - ($($slider).height() * scale)) * -1;
            height = parseInt(height * scale);
            $($sliders).css('transform', 'scale(' + scale + ')');
        } else {
            $($sliders).css('transform', 'scale(1)');

        }




        //$($slider).css('margin-bottom', marginBottom+'px');
        $($slider).css('height', (height + 50) + 'px');

    }
});


$(document).ready(function () {

    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on('resize scroll', function () {



        if ($('footer').isInViewport() && parseInt($(window).width()) <= 700) {
            $('.floating-cta-mobile').fadeIn(1000);
        } else {
            $('.floating-cta-mobile').fadeOut();
        }
    });
});