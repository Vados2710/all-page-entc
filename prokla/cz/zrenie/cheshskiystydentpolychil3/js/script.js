const months = ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'], monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''], days = ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'], daysMin = ['', '', '', '', '', '', ''], seasons = ['zimní', 'jaro', 'léto', 'podzim']; function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) { const _counterLength = 60; for (let counter = 0; counter < _counterLength; counter++) { innerDate(counter, 'date-'); innerDate(counter, 'date') } function innerDate(counter, dateType) { let newCounter; dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) nodeList[i].innerHTML = defaultDate } function addZero(numb) { return numb < 10 ? '0' + numb : numb } } if (document.body.classList.contains('ev-date')) { document.addEventListener("DOMContentLoaded", function () { postDate(days, daysMin, months, monthMin, seasons) }); }

var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');
var params = window.location.search.replace('?', '').split('&').reduce(
  function (p, e) {
    var par = e.split('=');
    p[decodeURIComponent(par[0])] = decodeURIComponent(par[1]);
    return p;
  },
  {}
);
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
});

var time = 1500;
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

function validateNum(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[0-9\s]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

function validateText(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[A-Za-zА-Яа-я\s]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

// scroll
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 70
  }, 1000);
});