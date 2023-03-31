$(window).on('load', function () {
    var $preloader = $('#preloader');
    var $body = $('body');
    if ( $preloader.length ) {
        $preloader.fadeOut('slow');
        $body.removeClass('no-scroll');
    }
});

$.fn.isOnScreen = function(shift) {
    if (!shift) {
        shift = 0;
    }
    var viewport = {};
    viewport.top = $(window).scrollTop();
    viewport.bottom = viewport.top + $(window).height();
    var bounds = {};
    bounds.top = this.offset().top + shift;
    bounds.bottom = bounds.top + this.outerHeight() - shift;
    return ((bounds.top <= viewport.bottom) && (bounds.bottom >= viewport.top));
};
function viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
};
function parallaxOnScroll() {

    $(window).scroll(function(e) {
 e.preventDefault();
        var scrolled = $(window).scrollTop();

        $('.parallax').each(function(index, elem) {

            var $this = $(this);

            var initY = $this.offset().top,
                $height = $this.height(),
                endY = index + $this.height();

            // Check if the element is in the viewport.

            var visible = $this.isOnScreen();

            if(visible) {
                var diff = scrolled - initY;

                if ($this.hasClass('parallax-big')) {
                    var ratio = Math.round((diff / $height) * 30);
                    $(this).css('transform', 'translateY(' + parseInt((ratio * 2)) + 'px)');

                } else if ($this.hasClass('parallax-verybig')) {
                    var ratio = Math.round((diff / $height) * 30);
                    $(this).css('transform','translateY(' + parseInt((ratio * 7.55)) + 'px)');
                }else if ($this.hasClass('parallax-small')) {
                    var ratio = Math.round((diff / $height) * 30);
                    $(this).css('transform','translateY(' + parseInt((ratio * 0.7)) + 'px)');
                } else if ($this.hasClass('parallax-medium')) {
                    var ratio = Math.round((diff / $height) * 30);
                    $(this).css('transform','translateY(' + parseInt(-(ratio * .5)) + 'px)');
                }else if ($this.hasClass('parallax-large')) {
                    var ratio = Math.round((diff / $height) * 30);
                    $(this).css('transform','translateY(' + parseInt(-(ratio * 3)) + 'px)');
                }
                else if ($this.hasClass('parallax-up')) {
                    var ratio = Math.round((diff / $height) * 30);
                    $(this).css('transform','translateY(' + parseInt((ratio * 3)) + 'px)');
                }else {
                    var ratio = Math.round((diff / $height) * 30);
                    $(this).css('transform','translateY(' + parseInt(-(ratio * 1.5)) + 'px)');
                }
            }
        })
    })
};

$(function() {

    var user = detect.parse(navigator.userAgent);
    console.log(
        user.browser.family
    );
    if (user.browser.family != 'IE' && user.browser.family != 'Edge') {
        if ($(window).width() > 991) {
            parallaxOnScroll();
        }
    };

    $('.pre_toform').click(function () {
        $("html, body").animate({scrollTop: $('#order_form').offset().top - 30}, 1000);
        return false;
    });

    $('.review__slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        fade: true,
        speed: 500,
    });

});
