!(function($, window, document, undefined) {
    "use strict";


    $(window).on("scroll", function() {
        if ($(window).scrollTop() > $('.cta').offset().top + $('.cta').height()) {
            $('.cta_mobile').show()
        } else {
            $('.cta_mobile').hide()
        }
    });

})(jQuery, window, document);