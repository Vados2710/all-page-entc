$(document).ready(function () {


  $(".toform").click(function () {
    $("html, body").animate({ scrollTop: $(".form-scroll").offset().top }, 700);
    return false;
  });

  $(".slider ul").lightSlider({
    item: 1,
    loop: true,
  });
  var _currentDate = new Date();
  var count = 1750; // 8 hours
  var _toDate = new Date(
    _currentDate.getFullYear(),
    _currentDate.getMonth(),
    _currentDate.getDate(),
    _currentDate.getHours(),
    _currentDate.getMinutes() + count,
    1
  );

  $(".timer-nums")
    .countdown({
      until: _toDate,
      format: "DHMS",
      compact: true,
      layout: $(".timer-nums").html(),
    })
    .removeClass("hidden");
});
//
function startTimer(duration, min, sec) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    min.textContent = minutes;
    sec.textContent = seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

function startTimer2(duration2, min2, sec2) {
  var timer2 = duration2,
    minutes2,
    seconds2;
  setInterval(function () {
    minutes2 = parseInt(timer2 / 60, 10);
    seconds2 = parseInt(timer2 % 60, 10);

    minutes2 = minutes2 < 10 ? "0" + minutes2 : minutes2;
    seconds2 = seconds2 < 10 ? "0" + seconds2 : seconds2;

    min2.textContent = minutes2;
    sec2.textContent = seconds2;

    if (--timer2 < 0) {
      timer2 = duration2;
    }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes2 = 60 * 10,
    minutes2 = document.querySelector("#min2");
  seconds2 = document.querySelector("#sec2");
  startTimer2(fiveMinutes2, minutes2, seconds2);
  var fiveMinutes = 60 * 10,
    minutes = document.querySelector("#min");
  seconds = document.querySelector("#sec");
  startTimer(fiveMinutes, minutes, seconds);
};
const imgBlur = document.querySelectorAll('.blur');
imgBlur.forEach(el => {
    el.addEventListener('click', function () {
        el.classList.toggle('active-n')
    })
});
