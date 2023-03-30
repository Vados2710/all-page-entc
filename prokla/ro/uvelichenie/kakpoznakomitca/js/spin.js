jQuery(document).ready(function($) {
    // -------------spin-------------------
    var resultWrapper = $('.spin-result-wrapper, .pop-up-window');
    var wheel = $('.wheel-img');

    $('.spin_active').on("click", function(event) {
        $(this).off(event);
        if (wheel.hasClass('rotated')) {
            resultWrapper.css({
                'display': 'block'
            });
        } else {
            wheel.addClass('super-rotation');
            setTimeout(function() {
                resultWrapper.css({
                    'display': 'block'
                });
            }, 8000);
            setTimeout(function() {
                $('.spin-wrapper').slideUp();
                $('.order_block').slideDown();
            }, 9500);
            wheel.addClass('rotated');
        }
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            resultWrapper.fadeOut();
        }
    });

    $('.close-popup, .spin-result-wrapper').click(function() {
        resultWrapper.fadeOut();
    });
});