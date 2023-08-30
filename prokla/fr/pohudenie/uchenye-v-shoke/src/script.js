'use strict';
$(document).ready(function () {
  var o = document.querySelectorAll('.door'),
    r = document.querySelectorAll('.door__sales'),
    c =
      (document.querySelector('.door__wrapper'),
        document.querySelector('.spin-result-wrapper')),
    i =
      (document.querySelector('.pop-up-button'),
        document.querySelector('.order_block'),
        document.getElementById('door__1')),
    u = document.getElementById('door__2'),
    l = document.getElementById('door__3'),
    s = document.getElementById('door__sales1'),
    a = document.getElementById('door__sales2'),
    d = document.getElementById('door__sales3'),
    p = $('#discount').text();

  function m(e) {
    e.currentTarget.classList.add('open'),
      setTimeout(function () {
        c.style.display = 'block';
      }, 2500),
      r.forEach(function (e) {
        i.classList.contains('open') ?
          ((s.innerHTML = p),
            (a.innerHTML = '25%'),
            (d.innerHTML = '10%')) :
          u.classList.contains('open') ?
            ((a.innerHTML = p),
              (s.innerHTML = '10%'),
              (d.innerHTML = '25%')) :
            l.classList.contains('open') &&
            ((s.innerHTML = '25%'),
              (d.innerHTML = p),
              (a.innerHTML = '10%'));
      });
    for (var t = 0; t < o.length; t++)
      !(function (e) {
        o[e].classList.contains('open') ||
          setTimeout(function () {
            o[e].classList.add('open');
          }, 1500);
      })(t);
    for (var n = 0; n < o.length; n++)
      o[n].removeEventListener('click', m);
    for (var n = 0; n < o.length; n++)
      o[n].removeEventListener('touchend', m);
  }
  o.forEach(function (e) {
    e.addEventListener('click', m);
  });
  var date = new Date();
  $('.date').text(date.toLocaleString().split(',')[0]);
  $('.date-n').each(function () {
    var d = new Date();
    d.setDate(d.getDate() - $(this).data('num'));
    $(this).text(d.toLocaleString().split(',')[0]);
  });
}),
  $('.close-popup, .pop-up-button').click(function (e) {
    e.preventDefault(), $('.spin-result-wrapper').fadeOut();
  });

function openDoor() {
  setTimeout(function () {
    $('.door__wrapper').fadeOut(),
      $('.order_block').fadeIn(),
      start_timer();
  }, 3e3);
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
  secs = secs >= 10 ? secs : '0' + secs;
  $('#min').html('0' + mins);
  $('#sec').html(secs);
}
