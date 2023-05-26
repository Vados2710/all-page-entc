$(function() {

    var user = detect.parse(navigator.userAgent);
    console.log(
        user.browser.family
    );

    if (user.browser.family != 'IE' && user.browser.family != 'Edge') {
        if ($(window).width() > 991) {

            var wow = new WOW(
                {
                    offset: 100,
                }
            );
            wow.init();

            var parallaxElementOne = document.querySelector('.parallax-scene-1');
            var parallaxOne = new Parallax(parallaxElementOne);

            var parallaxElementTwo = document.querySelector('.parallax-scene-2');
            var parallaxTwo = new Parallax(parallaxElementTwo);

            var parallaxElementThree = document.querySelector('.parallax-scene-3');
            var parallaxThree = new Parallax(parallaxElementThree);

            var parallaxElementFour = document.querySelector('.parallax-scene-4');
            var parallaxFour = new Parallax(parallaxElementFour);

            var parallaxElementFive = document.querySelector('.parallax-back-1');
            var parallaxBackOne = new Parallax(parallaxElementFive);

            var parallaxElementSix = document.querySelector('.parallax-back-2');
            var parallaxBackTwo = new Parallax(parallaxElementSix);

            var parallaxElementSeven = document.querySelector('.parallax-back-3');
            var parallaxBackThree = new Parallax(parallaxElementSeven);

            var parallaxElementEight = document.querySelector('.parallax-back-4');
            var parallaxBackFour = new Parallax(parallaxElementEight);
        }
    };

    if ($(window).width() > 991) {

        $('.helper__content .decor--1').scroolly([
            {
                minWidth: 991,
                to: 'con-top + 150 = vp-bottom',
                css: {
                    transform: 'scale(.2) rotate(0deg)',
                    opacity: '0'
                }
            },
            {
                minWidth: 991,
                from: 'con-top + 150 = vp-bottom',
                to: 'con-bottom + 250 = vp-bottom',
                css: {
                    transform: 'scale(1) rotate(180deg)',
                    opacity: '1'
                }
            },
            {
                minWidth: 991,
                from: 'con-bottom + 250 = vp-bottom',
                css: {
                    transform: 'scale(.2) rotate(0deg)',
                    opacity: '0'
                }
            }
        ], $('.scroll-container-1'));
        $('.helper__content .decor--2').scroolly([
            {
                minWidth: 991,
                to: 'con-bottom - 250 = vp-bottom',
                css: {
                    transform: 'scale(.2) rotate(0deg)',
                    opacity: '0'
                }
            },
            {
                minWidth: 991,
                from: 'con-bottom - 250 = vp-bottom',
                to: 'con-top + 450 = vp-top',
                css: {
                    transform: 'scale(1) rotate(180deg)',
                    opacity: '1'
                }
            },
            {
                minWidth: 991,
                from: 'con-top + 450 = vp-top',
                css: {
                    transform: 'scale(.2) rotate(0deg)',
                    opacity: '0'
                }
            }
        ], $('.scroll-container-1'));
        $('.helper__content .decor--3').scroolly([
            {
                minWidth: 991,
                to: 'con-bottom - 250 = vp-bottom',
                css: {
                    transform: 'scale(.2) rotate(0deg)',
                    opacity: '0'
                }
            },
            {
                minWidth: 991,
                from: 'con-bottom - 250 = vp-bottom',
                to: 'con-top + 450 = vp-top',
                css: {
                    transform: 'scale(1) rotate(180deg)',
                    opacity: '1'
                }
            },
            {
                minWidth: 991,
                from: 'con-top + 450 = vp-top',
                css: {
                    transform: 'scale(.2) rotate(0deg)',
                    opacity: '0'
                }
            }
        ], $('.scroll-container-1'));
    }


    $('.pre_toform').click(function () {
        $("html, body").animate({scrollTop: $('#order_form').offset().top - 200}, 1000);
        return false;
    });
    
});
