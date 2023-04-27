$(document).ready(function() {
    var resultWrapper = $('.spin-result-wrapper, .pop-up-window');
    var closePopup = $('.close-popup, .spin-result-wrapper');
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
                var fiveSeconds = new Date().getTime() + 600000;
                $('#clock').countdown(fiveSeconds, {
                        elapse: true
                    })
                    .on('update.countdown', function(event) {
                        var $this = $(this);
                        if (event.elapsed) {
                            $this.html("00 : 00");
                        } else {
                            $this.html(event.strftime('<span>%M</span> : <span>%S</span>'));
                        }
                    });
            }, 9500);
            wheel.addClass('rotated');
        }
    });

    $(closePopup).keydown(function(e) {
        if (e.keyCode === 27) {
            resultWrapper.fadeOut();
        }
    });

    closePopup.click(function() {
        resultWrapper.fadeOut();
    });

    // --------------SCROLL-------------------
    $(".pop-up-button").on("touchend, click", function(e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: $('#form').offset().top }, 400);
    });
});