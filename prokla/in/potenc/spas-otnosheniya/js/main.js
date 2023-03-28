"use strict";

var getDate = function getDate(date) {
  if (!date) return '';

  var getTwoDigits = function getTwoDigits(value) {
    return value < 10 ? "0".concat(value) : value;
  };

  var formatDate = function formatDate(date) {
    var day = getTwoDigits(date.getDate());
    var month = getTwoDigits(date.getMonth() + 1);
    var year = date.getFullYear();
    return "".concat(year, "-").concat(month, "-").concat(day);
  };

  return formatDate(new Date(date));
};

var showDate = function showDate(n) {
  var currentDate = new Date();
  var dateOffset = 24 * 60 * 60 * 1000 * n;
  var time = getDate(new Date(currentDate - -dateOffset));
  return time;
};

var elements = document.querySelectorAll('.js__showdate');
elements.forEach(function (item) {
  var shift = Number(item.textContent);
  var date = showDate(shift);
  item.innerHTML = date;
});

var timer = function timer() {
  var secondsToHms = function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    var hh = h > 0 ? h : '00';
    var mm = m > 0 ? m < 10 ? "0".concat(m) : "".concat(m) : '00';
    var ss = s > 0 ? s < 10 ? "0".concat(s) : "".concat(s) : '00';
    return {
      hh: hh,
      mm: mm,
      ss: ss
    };
  };

  var run = function run() {
    var timers = document.querySelectorAll('.countdown');
    timers.forEach(function (timer) {
      var days = timer.querySelector('.days');
      var hours = timer.querySelector('.hours');
      var minutes = timer.querySelector('.minutes');
      var seconds = timer.querySelector('.seconds');

      var tick = function tick(timeout) {
        var _secondsToHms = secondsToHms(timeout),
            hh = _secondsToHms.hh,
            mm = _secondsToHms.mm,
            ss = _secondsToHms.ss;

        hours.innerText = hh;
        minutes.innerText = mm;
        seconds.innerText = ss;
        if (days) days.innerText = '00';
      }; // let timeout = localStorage.getItem('timeout');


      var timeout = 598;
      var timerId = setInterval(function () {
        tick(timeout);
        timeout--; // localStorage.setItem('timeout', timeout);

        if (timeout <= 0) clearInterval(timerId);
      }, 1000);
    });
  };

  var start = function start() {
    // localStorage.setItem('timeout', 599);
    run();
  };

  start();
}; // timer();


console.log('start');
//# sourceMappingURL=main.js.map
