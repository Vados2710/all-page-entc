var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

var show = true;
countbox = ".silent";
percent = $('.silent-item__percent span');

var wow = new WOW({
    live: true,
    callback: function (box) {
        $(window).on("scroll load resize", function () {

            if (!show) return false;
            var w_top = $(window).scrollTop();
            var e_top = $(countbox).offset().top;
            var w_height = $(window).height();
            var d_height = $(document).height();
            var e_height = $(countbox).outerHeight();
            if (w_top + 400 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                percent.each(function () {
                    $(this).spincrement({
                        thousandSeparator: "",
                        duration: 5200
                    });
                });
                show = false;
                $(".silent-item").addClass("animate")
            }
        });
    }
});

wow.init();

$('.components').slick({
    autoplay: true,
    autoplaySpeed: 55000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

$('.reviews').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    dots: true,
    arrows: true,
    infinite: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 639,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.review-item__content span').click(function () {
    $("html, body").animate({
        scrollTop: $("#order_form").offset().top - 300
    }, 1500);
    return false;
});

$(".pre_toform").on("touchend, click", function (e) {
    e.preventDefault();
    $('body,html').animate({
        scrollTop: $('#order_form').offset().top
    }, 1000);
});

// $('.parallax').parallax();