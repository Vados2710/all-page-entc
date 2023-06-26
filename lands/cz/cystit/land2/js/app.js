$(document).ready(function () {

    $("#nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('#reviews').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev pull-left slick-arrow'><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"angle-left\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 512\" class=\"svg-inline--fa fa-angle-left fa-w-8 fa-2x\"><path fill=\"currentColor\" d=\"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z\" class=\"\"></path></svg></button>",
        nextArrow: "<button type='button' class='slick-next pull-right slick-arrow'><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"angle-right\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 512\" class=\"svg-inline--fa fa-angle-right fa-w-8 fa-2x\"><path fill=\"currentColor\" d=\"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z\" class=\"\"></path></svg></button>",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    prevArrow:false,
                    nextArrow:false
                }
            }
        ]
    });

});
