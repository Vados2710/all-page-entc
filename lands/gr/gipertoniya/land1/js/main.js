

$(document).ready(function () {


    $(window).easeScroll({
        frameRate: 120,
        animationTime: 1300,
        stepSize: 120,
        pulseAlgorithm: 1,
        pulseScale: 7,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: true
    });

    $('[data-goto]').on('click', function (e) {
        e.preventDefault();

        var that = $(this).data('goto');

        $("html, body").animate({scrollTop: $(that).offset().top - 150}, 1500).sideNav('hide');
        return false;
    });


    $(".button-collapse").sideNav();

    $('.parallax').parallax();

    $("img.lazy").lazyload({
        threshold: 200,
        effect: "fadeIn"
    });

});