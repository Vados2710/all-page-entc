$(document).ready(function () {
    $(".scroll").click(function () {
        var $scroll_block = $('#order_form').offset().top;
        $("html,body").animate({
            scrollTop: $scroll_block
        }, 1200);
        return false;
    });
    $(".lightSlider").lightSlider({
        item: 1,
        mode: 'fade',
        pager: false,
        prevHtml: '<span class="custom-prev-html"></span>',
        nextHtml: '<span class="custom-next-html"></span>',
        enableDrag: false,
        loop: true
    });
});