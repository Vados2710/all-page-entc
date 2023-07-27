var answer = $('.b-test__answer');

$(answer).on('click', function(event) {
    event.preventDefault();

    var that = this,
        questionItem = $(that).closest('.b-test__item'),
        answers = $(questionItem).find('.b-test__answer');

    $(that).addClass('b-test__answer--selected').siblings().removeClass('b-test__answer--selected');

});

var toForm = function() {
    $('.w-page a').click(function(e) {
        e.preventDefault();
        var a = $('.js_submit');
        var b = a.closest('form');

        if ($('form#toform').length) {
            a = $('#toform .js_submit');
            b = a.closest('form#toform');
        }

        if (b.length && a.is(':visible')) {
            $("html,body").animate({ scrollTop: b.last().offset().top }, 1000);
        }
        return false;
    });
}

$(window).on("load", function() {

    var slider = $('.b-test__slider').bxSlider({
        adaptiveHeight: true,
        swipeThreshold: 40,
        controls: false,
        pager: false,
        auto: false,
        autoHover: false,
        infiniteLoop: false,
        slideMargin: 3,
        touchEnabled: false,
        mode: 'fade'
    });

    var loadingResults = function() {
        $('.js-result-loading').show()
        setTimeout(function() {
            slider.goToNextSlide();
        }, 3000);
    }

    $('.js-result-btn').on('click', function(event) {
        event.preventDefault();
        loadingResults()
    });

    toForm();

});