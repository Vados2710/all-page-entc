$(document).ready(function () {
    var a = {
        subtract: function (num) {
            var qty = $('.pac-minus').html() - 0;
            var qtynew = qty - num;
            qtynew = (qtynew < 5 ? 5 : qtynew);
            $('.pac-minus').html(qtynew);
        }
    };

    setTimeout(function () {
        a.subtract(2);
        setInterval(function () {
            a.subtract(Math.floor(Math.random() * (4 - 2)) + 2);
        }, (Math.floor(Math.random() * (25 - 20)) + 20) * 1000);
    }, 2000);
});

$("a").on("touchend, click", function (e) {
    e.preventDefault();
    $("body,html").animate({
        scrollTop: $(".scroll").offset().top
    }, 400);
});

var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');

function spin() {
    if (!wheel.classList.contains('rotated')) {
        wheel.classList.add('super-rotation');
        setTimeout(function () {
            resultWrapper.style.display = "block";
        }, 8000);
        setTimeout(function () {
            $('.spin-wrapper').slideUp();
            $('.order_block').slideDown();
            start_timer();
        }, 10000);
        wheel.classList.add('rotated');
    }
}

var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();

    var top = $('#form').offset().top;
    $('body,html').animate({
        scrollTop: top
    }, 800);
});

var time = 600;
var intr;

function start_timer() {
    intr = setInterval(tick, 1000);
}

function tick() {
    time = time - 1;
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
        clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0" + secs;
    $("#min").html("0" + mins);
    $("#sec").html(secs);
}


//packs
$(".change-package-selector").on("change", function() {
    $(".order__prices-item").hide();
    $("." + $(this).val() + "_pack").css("display", "inline-block");
    $('.change-package-selector [value="' + $(this).val() + '"]').prop("selected", true);
  
    var package_id = $(this).val();
    set_package_prices(package_id);
  });