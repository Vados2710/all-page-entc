"use strict";

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
        days.innerText = '00';
      };

      var timeout = localStorage.getItem('timeout');
      var timerId = setInterval(function () {
        tick(timeout);
        timeout--;
        localStorage.setItem('timeout', timeout);
        if (timeout <= 0) clearInterval(timerId);
      }, 1000);
    });
  };

  var start = function start() {
    var timeout = localStorage.getItem('timeout');

    if (!timeout || timeout < Number(0)) {
      localStorage.setItem('timeout', 600);
    }

    run();
  };

  start();
};

timer();
var wheel__btn = document.querySelector('.order__pin');
var wheel = document.querySelector('.order__wheel');
var order1 = document.querySelector('.order--01');
var order2 = document.querySelector('.order--02');
wheel__btn.addEventListener('click', function () {
  wheel.classList.add('super-rotation');
  setTimeout(function () {
    order1.classList.remove('order--show');
    order2.classList.add('order--show');
  }, 7000);
});
