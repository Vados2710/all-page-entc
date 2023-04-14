$(function () {

    var $body = $('body'),
        linkToForm = '.toForm',
        $slider = $('.reviews__list'),
        sliderSettings = {
            dots: true,
            arrows: false,
            variableWidth: true,
            centerMode: true,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 1439,
                    settings: "unslick"

                }
            ]
        };

    $slider.slick(sliderSettings);

    var rellax = new Rellax('.rellax', {
        breakpoints: [576, 768, 1440]
    });


    $body
        .on('click', linkToForm, function (e) {
            e.preventDefault();
            var id = $(this).attr('href'),
                target = $(id).offset().top;
            $body.add('html').animate({scrollTop: target}, 1200);
        });


    $(window).on('resize', function () {
        if ($(window).width() < 1440 && !$slider.hasClass('slick-initialized')) {
            $slider.slick(sliderSettings);

        }
    });
});




