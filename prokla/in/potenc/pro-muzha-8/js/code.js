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
            $('body').addClass('content_fixed');
            resultWrapper.css({
                'display': 'block'
            });
        }, 8000);
        setTimeout(function() {
            $('.spin-wrapper').slideUp();
        }, 9500);
        wheel.addClass('rotated');
    }
});
var fiveSeconds = new Date().getTime() + 600000;
$('.timer').countdown(fiveSeconds, {
        elapse: true
    })
    .on('update.countdown', function(event) {
        var $this = $(this);
        if (event.elapsed) {
            $this.html("00:00");
        } else {
            $this.html(event.strftime('<span>%M</span> : <span>%S</span>'));
        }
    });