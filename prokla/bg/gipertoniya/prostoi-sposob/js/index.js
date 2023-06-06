var resultWrapper = document.querySelector(".spin-result-wrapper");
var wheel = document.querySelector(".wheel-img");

function spin() {
  if (!wheel.classList.contains("rotated")) {
    wheel.classList.add("super-rotation");
    setTimeout(function () {
      resultWrapper.style.display = "block";
    }, 8000);
    setTimeout(function () {
      $(".spin-wrapper").slideUp();
      $(".order_block").slideDown();
      start_timer();
    }, 8000);
    wheel.classList.add("rotated");
  }
}

$(".close-popup, .pop-up-button").click(function (e) {
  e.preventDefault();
  $(".spin-result-wrapper").fadeOut();

  var top = $(".order_block").offset().top;
  $("body,html").animate({ scrollTop: top }, 800);
});

var time = 600;
var intr;

function start_timer() {
  intr = setInterval(tick, 1000);
}
let prodLeft = [
  2, 2, 3, 3, 5, 5, 7, 7, 8, 8, 9, 9, 11, 11, 12, 12, 14, 14, 15, 15, 16, 16,
  18, 18, 19, 19,
];

function start_counting_timer(limitedSeconds) {
  let timeLeft = limitedSeconds;
  let secondsLeft, minutesLeft;

  let count = setInterval(function () {
    if (timeLeft <= 0) {
      clearTimeout(count);
    } else {
      timeLeft--;
      let min = parseInt(timeLeft / 60);
      minutesLeft = min.toString();
      if (minutesLeft.length === 1) {
        minutesLeft = "0" + minutesLeft;
      }
      let sec = timeLeft % 60;
      secondsLeft = sec.toString();
      if (secondsLeft.length === 1) {
        secondsLeft = "0" + secondsLeft;
      }
      if (sec === 0) {
        document.querySelector(".prod_left_val_1").innerHTML = prodLeft[min];
      }
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  let tstamp = window.localStorage.getItem("tstamp-l2xyg239");
  let limitedSeconds = prodLeft.length * 60;
  let prodElement = document.querySelector(".prod_left_val_1");

  if (tstamp !== null) {
    let now = Math.round(new Date().getTime() / 1000);
    let then = tstamp;
    limitedSeconds = limitedSeconds - (now - then);
    let prod = Math.floor(limitedSeconds / 60);
    if (prod < 0) prod = 0;
    prodElement.innerHTML = prodLeft[prod];
  } else {
    tstamp = Math.round(new Date().getTime() / 1000);
    window.localStorage.setItem("tstamp-l2xyg239", tstamp);
    prodElement.innerHTML = 19;
  }

  start_counting_timer(limitedSeconds);
});

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

$("a").on("touchend, click", function (e) {
  e.preventDefault();
  $("body,html").animate({ scrollTop: $(".toform").offset().top }, 400);
});
$(".ac_footer a, .ac_gdpr_fix a").unbind("click");

//packs
$('.change-package-selector').on('change', (function () {
  var package_id = $(this).val();
  set_package_prices(package_id);
}));