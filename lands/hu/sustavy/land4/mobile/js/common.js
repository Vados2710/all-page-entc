jQuery(document).ready(function($) {
    $('.for_scroll').click(function() {
        var $form = $("#fform").offset().top;
        $("html, body").animate({scrollTop : $form}, 666);
        return false;
    });

    $('.bxrew').bxSlider({
        infiniteLoop: false,
        hideControlOnEnd: true,
        controls: false,
        pager: true,
        adaptiveHeight: true,
        auto: true,
        pause: 9000,
    });
})