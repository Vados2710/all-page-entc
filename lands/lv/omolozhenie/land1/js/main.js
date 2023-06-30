$(document).ready(function () {
    $('.box-modal_close').on('click', function (e) {
        var $el = $(e.currentTarget);
        $('.popup').fadeOut();
        e.stopPropagation();

    });
})
$(document).mouseup(function (b) {

    b.stopPropagation();
    var div = $(".popup>*");
    if (!div.is(b.target)
        && div.has(b.target).length === 0) {
        $('.popup').fadeOut();
    }
    b.stopPropagation();
});

$('body').mouseleave(function (e) {
    e.preventDefault();
    $('.popup').fadeIn();
    e.stopPropagation();
});

$(document).ready(function (e) {
    $('.show-resp').click(function () {
        if ($(this).hasClass("clicked")) {
            $(this).removeClass("clicked");
            $('.hidd-resp').show();
        } else {
            $(this).addClass("clicked");
            $('.hidd-resp').hide();
        }
    });

    $('.count-list').countdown({
        until: '+0d +0h 15m ',
        format: 'HMS',
        compact: true,
        layout: '<li>' +
        '<span class="digit">{h10}</span>' +
        '<span class="digit">{h1}</span>' +
        '</li>' +
        '<li>' +
        '<span class="digit">{m10}</span>' +
        '<span class="digit">{m1}</span>' +
        '</li>' +
        '<li>' +
        '<span class="digit">{s10}</span>' +
        '<span class="digit">{s1}</span>' +
        '</li>'
    }).removeClass('hidden');

    $('.for_scroll').click(function () {
        $("html, body").animate({
            scrollTop: $("form").offset().top - 200
        }, 2000);
        return false;
    });
});

$(document).ready(function () {
    var mediaWidth;
    var slider = $('.bxslider').bxSlider({
        adaptiveHeight: true,
        speed: 500,
        controls: false

    });

    var sliderInit = function () {

        mediaWidth = $(window).width();

        if (mediaWidth > 768) {
            slider.destroySlider();
        } else {
            slider.reloadSlider();
        }
    }

    sliderInit();
    $(window).resize(function () {
        sliderInit();
    })

    $(window).load(function () {
        sliderInit();
    })

});
