$(document).ready(function () {
    $('.reviews,#reviews').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        mobileFirst: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [{
            breakpoint: 992,
            settings: {
                infinite: true,
                //adaptiveHeight: true,
                dots: false,
                arrows: true,
            }
        }]
    });
});