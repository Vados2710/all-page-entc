$(document).ready(function () {
    $('#defaultCountdown').countdown({
        until: +6300, //отсчет в секундах
        format: 'HMS',
        labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'] //вставлять перевод для таймера в этот массив
    });
    new WOW().init();
    $(".lightSlider").lightSlider({
        item: 1,
        mode: 'fade',
        pager: false,
        prevHtml: '<span class="custom-prev-html"></span>',
        nextHtml: '<span class="custom-next-html"></span>',
        enableDrag: false,
        loop: true

    });

    setInterval(function () {
        $(".wrapimg1").animate({
            height: "595px"
        }, 3500);

        setTimeout(function () {
            $('.textimg.after').show();
            $('.textimg.before').hide();
        }, 900);

        setTimeout(function () {
            $('.textimg.after').hide();
            $('.textimg.before').show();
        }, 3600);
        $(".wrapimg1").animate({
            height: "0px"
        }, 1);
    }, 5000);

    $(".scroll").click(function () {
        var $scroll_block = $('#order_form').offset().top;
        $("html,body").animate({
            scrollTop: $scroll_block
        }, 1200);
        return false;
    });

});