var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');
$('a').click(function(e) {
    e.preventDefault();
    var top = $('.scroll_to_spin').offset().top;
    $('body,html').animate({ scrollTop: top }, 800);
});

function spin() {
    if (wheel.classList.contains('rotated')) {
        resultWrapper.style.display = "block";
    } else {
        wheel.classList.add('super-rotation');
        setTimeout(function() {
            resultWrapper.style.display = "block";
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
    var top = $('.scroll_to_spin').offset().top;
    $('body,html').animate({ scrollTop: top }, 800);
});


