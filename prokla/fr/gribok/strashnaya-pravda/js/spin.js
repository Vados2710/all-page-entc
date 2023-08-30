$(document).ready(function () {
// -------------spin-------------------
    var resultWrapper = document.querySelector('.spin-result-wrapper');
    var wheel = document.querySelector('.wheel-img');

    $('.active').on( "click", function( event ) {
        $( this ).off( event );
        if (wheel.classList.contains('rotated')) {
            resultWrapper.style.display = "block";
        } else {
            wheel.classList.add('super-rotation');
            setTimeout(function () {
                resultWrapper.style.display = "block";
            }, 8000);
            setTimeout(function () {
                $('.spin-wrapper').slideUp();
                $('.order_block').slideDown();
            }, 9500);
            wheel.classList.add('rotated');
        }
    });

    $('.close-popup, .pop-up-button').click(function (e) {
        e.preventDefault();
        $('.spin-result-wrapper').fadeOut("slow", function () {
                $('html, body').animate({
                    scrollTop: $('.pred_form').offset().top
                });
        });

    });
});