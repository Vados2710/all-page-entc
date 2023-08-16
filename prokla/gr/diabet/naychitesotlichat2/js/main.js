function initializeTimer() {
  var time = {
    hours: 0,
    minutes: 27,
    seconds: 0,
  };

  time = time.hours * 3600 + time.minutes * 60 + time.seconds;

  timerSettings();
}
var flag = true;
function timerSettings(time1) {
  if (flag) {
    var time = {
      hours: 0,
      minutes: 25,
      seconds: 10,
    };
    time = time.hours * 3600 + time.minutes * 60 + time.seconds;
    flag = false;
  } else {
    var time = time1;
  }

  var different = document.querySelector(".timer-different"),
    hours = parseInt(time / 3600, 10),
    minutes = parseInt((time - hours * 3600) / 60, 10),
    seconds = parseInt(time % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : "" + minutes;
  seconds = seconds < 10 ? "0" + seconds : "" + seconds;
  hours = hours < 10 ? "0" + hours : "" + hours;

  var hoursHTML = document.getElementsByClassName("hour");
  var minutesHTML = document.getElementsByClassName("minute");
  var secondsHTML = document.getElementsByClassName("second");

  if (--time < 0) {
    return;
  }
  if (different) {
    seconds = seconds.split("");
    minutes = minutes.split("");
    hours = hours.split("");

    diFilling(hoursHTML, hours);
    diFilling(minutesHTML, minutes);
    diFilling(secondsHTML, seconds);
  } else {
    filling(hoursHTML, hours);
    filling(minutesHTML, minutes);
    filling(secondsHTML, seconds);
  }

  setTimeout(timerSettings, 1000, time);
}

function filling(obj, value) {
  for (var i = 0; i < obj.length; i++) {
    obj[i].innerHTML = value;
  }
}

function diFilling(obj, value) {
  for (var i = 0; i < obj.length; i++) {
    obj[i].innerHTML = value[i % 2];
  }
}

initializeTimer();

var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');
var params = window.location.search
  .replace('?', '')
  .split('&')
  .reduce(function (p, e) {
    var par = e.split('=');
    p[decodeURIComponent(par[0])] = decodeURIComponent(par[1]);
    return p;
  }, {});
function spin() {
  if (!wheel.classList.contains('rotated')) {
    wheel.classList.add('super-rotation');
    setTimeout(function () {
      resultWrapper.style.display = 'block';
    }, 8000);
    setTimeout(function () {
      $('.spin-wrapper').slideUp();
      $('.order_block').slideDown();
      start_timer();
    }, 10000);
    wheel.classList.add('rotated');
  }
}
document.querySelector('.cursor-text').addEventListener('click', spin);
var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
  e.preventDefault();
  $('.spin-result-wrapper').fadeOut();
});
$('a').click(function () {
    event.preventDefault();
    $(this).attr('href', '#form');
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 70}, 1500);
});
$(document).mouseup(function (e) {
  var container = $('.spin-result-wrapper');
  if (container.has(e.target).length === 0) {
    container.hide();
  }
});

const months=['ο Ιανουάριος','ο Φεβρουάριος','ο Μάρτιος','ο Απρίλιος','ο Μάιος','ο Ιούνιος','ο Ιούλιος','ο Αύγουστος','ο Σεπτέμβριος','ο Οκτώβριος','ο Νοέμβριος','ο Δεκέμβριος'],monthMin = ['','','','','','','','','','','',''],days = ['η Κυριακή','η Δευτέρα','η Τρίτη','η Τετάρτη','η Πέμπτη','η Παρασκευή','το Σάββατο'],daysMin = ['','','','','','',''],seasons = ['ο χειμώνας','η άνοιξη','το καλοκαίρι','το φθινόπωρο'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","season","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, true), year: getYearWithCounter(_year, counter), season: getSeasonsName(seasonsName, _month, false), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getSeasonsName(array, month, bigFirstLetter) {const monthNumber = month === 12 ? 0 : month,seasonIndex = monthNumber / 3 < 0 ? Math.ceil(monthNumber / 3) : Math.floor(monthNumber / 3);return changeFirstLetter(bigFirstLetter, array[seasonIndex]);} function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}
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
  var regex = /[A-Za-z�-��-�\s]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}
