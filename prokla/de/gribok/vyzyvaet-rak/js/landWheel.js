$(document).ready(function () {
    $('.close-popup, .pop-up-button, .hhh').click(function (e) {

        e.preventDefault();
        $('.spin-result-wrapper').fadeOut();
        $('.spin-result-wrapper').fadeOut();
    });
    $('#spinWheel').click(function (e) {

        e.preventDefault();
        spin();
    });
});
let time = 600;
let intr;

function start_timer() {
    intr = setInterval(tick, 1000);
}

function tick() {
    time = time - 1;
    let mins = Math.floor(time / 60);
    let secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
        clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0" + secs;
    $("#min").html("0" + mins);
    $("#sec").html(secs);
}
 
function spin() {
    let resultWrapper = document.querySelector('.spin-result-wrapper');
    let wheel = document.querySelector('.wheel-img');
    let wheelNumbers = document.querySelector('.wheel-img__numbers');
    if (!wheel.classList.contains('rotated')) {
        wheel.classList.add('super-rotation');
        wheelNumbers.classList.add('super-rotation');

        setTimeout(function () {
            resultWrapper.style.display = "block";
        }, 6000);
        setTimeout(function () {
            $('.wheel-container').slideUp();
            $('.wheel-footer').slideUp();
            $('.order_block').removeClass('visibility-hidden');
            $('.order_block').slideDown();
            start_timer();
        }, 7000);
        wheel.classList.add('rotated');
        wheelNumbers.classList.add('rotated');
    }
}




