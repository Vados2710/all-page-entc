var resultWrapper = document.querySelector(".spin-result-wrapper");
var cupsText = document.querySelector(".cups-text");
var cupsOne = document.querySelector(".cups-img1");
var cupsTwo = document.querySelector(".cups-img2");
var cupsThree = document.querySelector(".cups-img3");
var ballOne = document.querySelector(".ballOne");
var ballTwo = document.querySelector(".ballTwo");
var ballThree = document.querySelector(".ballThree");

function spin() {
  if (!cupsTwo.classList.contains("translateX")) {
    cupsTwo.classList.add("translateTwoY");
    $(".ord_button").slideUp();
    setTimeout(function () {
      ballOne.style.display = "none";
      if (!cupsOne.classList.contains("translateX")) {
        cupsOne.classList.add("super-translateOne");
        cupsOne.classList.add("translateX");
      }
      if (!cupsTwo.classList.contains("translateX")) {
        cupsTwo.classList.add("super-translateTwo");
        cupsTwo.classList.add("translateX");
      }
      if (!cupsThree.classList.contains("translateX")) {
        cupsThree.classList.add("super-translateThree");
        cupsThree.classList.add("translateX");
      }
    }, 1000);
    setTimeout(function () {
      $(".cups-text").slideDown();
    }, 3500);
  }
}
window.test = {
  getClick: function () {
    $(".cups").click(function () {
      var id = $(this).attr("id");
      openCups(id);
    });
  },
};
$(document).ready(function () {
  window.test.getClick();
});
function openCups(id) {
  if (document.getElementById(id).classList.contains("translateX")) {
    if (id === "cups1" && !ballTwo.classList.contains("none")) {
      ballTwo.style.display = "flex";
      ballOne.classList.add("none");
      ballThree.classList.add("none");
    }
    if (id === "cups2" && !ballOne.classList.contains("none")) {
      ballOne.style.display = "flex";
      ballTwo.classList.add("none");
      ballThree.classList.add("none");
    }
    if (id === "cups3" && !ballThree.classList.contains("none")) {
      ballThree.style.display = "flex";
      ballOne.classList.add("none");
      ballTwo.classList.add("none");
    }
    document.getElementById(id).classList.remove("super-translateOne");
    document.getElementById(id).classList.remove("super-translateTwo");
    document.getElementById(id).classList.remove("super-translateThree");
    document.getElementById(id).classList.remove("translateX");
    document.getElementById(id).classList.remove("translateTwoY");
    document.getElementById(id).classList.add("translateCupsY");
    setTimeout(function () {
      resultWrapper.style.display = "block";
    }, 2000);
    setTimeout(function () {
      $(".spin-wrapper, .cups-p,.img-form").slideUp();

      $(".order_block").slideDown();
      start_timer();
    }, 2000);
  }
}
var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click(function (e) {
  e.preventDefault();
  $(".spin-result-wrapper").fadeOut();
  $('html, body').animate(
    2000
  );

  $("html, body").animate(
    {
      scrollTop: $("#toform2").position().top,
    },
    500
  );
});

const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, true), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}
function validateNum(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

function validateText(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[A-Za-z]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}
initializeTimer();
 function initializeTimer() {

                if (!localStorage.getItem("ever-timer")) {
                    var time = {
                        hours: 0,
                        minutes: 25,
                        seconds: 0
                    };

                    time = time.hours * 3600 + time.minutes * 60 + time.seconds;

                    localStorage.setItem("time", time);
                    localStorage.setItem("ever-timer", true);
                }

                timerSettings();

            }

            function timerSettings() {
                var time = localStorage.getItem('time'),
                    different = document.querySelector(".timer-different"),
                    hours = parseInt(time / 3600, 10),
                    minutes = parseInt((time - hours * 3600 ) / 60, 10),
                    seconds = parseInt(time % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : "" + minutes;
                seconds = seconds < 10 ? "0" + seconds : "" + seconds;
                hours = hours < 10 ? "0" + hours : "" + hours;

                var hoursHTML = document.getElementsByClassName("hours");
                var minutesHTML = document.getElementsByClassName("minutes");
                var secondsHTML = document.getElementsByClassName("seconds");

                if (--time < 0) {
                    localStorage.removeItem("ever-timer");
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

                localStorage.setItem("time", time);
                setTimeout(timerSettings, 1000);
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