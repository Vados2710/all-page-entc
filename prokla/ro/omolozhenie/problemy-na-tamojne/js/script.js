var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');

function spin() {
    if (!wheel.classList.contains('rotated')) {
        wheel.classList.add('super-rotation');
        setTimeout(function() {
            resultWrapper.style.display = "block";
        }, 8000);

        wheel.classList.add('rotated');
    }
}

var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function(e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();
    $('.after-spin').slideDown();

    var top = $('#roulette').offset().top;
    $('body,html').animate({ scrollTop: top }, 800);
});


$("a").on("touchend, click", function(e) {
    e.preventDefault();
    $('body,html').animate({ scrollTop: $('.toscroll').offset().top }, 400);
});