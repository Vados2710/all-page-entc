var resultWrapper = document.querySelector(".spin-result-wrapper");
var wheel = document.querySelector(".wheel-img");

function spin() {
  if (!wheel.classList.contains("rotated")) {
    wheel.classList.add("super-rotation");
    setTimeout(function () {
      resultWrapper.style.display = "block";
    }, 6000);
    setTimeout(function () {
      $(".spin-wrapper").slideUp();
      $(".order_block, .section_form").slideDown();
      start_timer();
    }, 8000);
    wheel.classList.add("rotated");
  }
}


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
  $(".timer").html("0" + mins + ":" + secs);
}

$(document).ready(function () {
  $(".ac_footer a, .ac_gdpr_fix a").unbind("click");
});
