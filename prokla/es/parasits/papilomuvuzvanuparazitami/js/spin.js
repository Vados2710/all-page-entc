// -------------spin-------------------
var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');

function spin() {
    if (wheel.classList.contains('rotated')) {
        resultWrapper.style.display = "block";
    } else {

        wheel.classList.add('super-rotation');
        setTimeout(function() {
            resultWrapper.style.display = "block";
            // -------------TIMER------------------------
            var fiveSeconds = new Date().getTime() + 600000;
            $('#clock').countdown(fiveSeconds, { elapse: true })
                .on('update.countdown', function(event) {
                    var $this = $(this);
                    if (event.elapsed) {
                        $this.html("Time is over");
                    } else {
                        $this.html(event.strftime('<span>%M</span> : <span>%S</span>'));
                    }
                });
        }, 8000);
        setTimeout(function() {
            $('.spin-wrapper').slideUp();
            $('.order_block').slideDown();
        }, 10000);
        wheel.classList.add('rotated');
    }
}
var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function(e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();
    var top = $('.spin-wrapper').offset().top;
    $('body,html').animate({ scrollTop: top }, 600);
});





// --------------SCROLL-------------------
$(".to__scroll").on("touchend, click", function(e) {
    e.preventDefault();
    $("body,html").animate({
            scrollTop: $(".toscroll").offset().top - 5
        },
        400
    );
});


$('input[name="referrer"]').val(document.referrer);
const url = new URL(document.location.href);
$('input[name="clickid"]').val(url.searchParams.get("clickid"));
$('input[name="landing"]').val(document.location.origin + document.location.pathname);