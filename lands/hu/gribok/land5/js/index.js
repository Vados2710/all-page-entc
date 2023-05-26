function startTimer(duration, min, sec) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    min.textContent = minutes;
    sec.textContent = seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

var fiveMinutes = 60 * 30,
  minutes = document.querySelectorAll('.min');
seconds = document.querySelectorAll('.sec');

for (var i = 0; i < 3; i++) {
  startTimer(fiveMinutes, minutes[i], seconds[i]);
}
