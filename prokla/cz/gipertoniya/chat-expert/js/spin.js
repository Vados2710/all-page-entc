var resultWrapper = document.querySelector(".spin-result-wrapper");
var wheel = document.querySelector(".wheel-img");

const spinBtn = document.querySelector('.cursor-text.lt48')

spinBtn.addEventListener('click', function () {
    if (spinBtn.classList.contains('spin-pressed')) {
        return false
    }

    spin()
    spinBtn.classList.add('spin-pressed')
})

function spin() {
    if (wheel.classList.contains("rotated")) {
        resultWrapper.style.display = "block";
    } else {
        wheel.classList.add("super-rotation");
        setTimeout(function () {
            resultWrapper.style.display = "block";
        }, 8000);
        setTimeout(function () {
            $(".spin-wrapper").slideUp();
            $(".order_block").slideDown();
            $(".order_block").css("display", "block");
            start_timer();
        }, 10000);
        wheel.classList.add("rotated");
    }
}

$(".close-popup, .pop-up-button").click(function (e) {
    e.preventDefault();
    $(".spin-result-wrapper").fadeOut();
    var top = $("#order0").offset().top;
    $("body,html").animate({scrollTop: top}, 800);
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
    mins = mins >= 10 ? mins : "0" + mins;
    $("#min").html(mins);
    $("#sec").html(secs);
}