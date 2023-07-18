$('a[href ^= "#"]').on("click", (function (o) {
  var t = $(this).attr("href"),
    e = $(t).offset();
  e ? (o.preventDefault(), $("body,html").animate({
    scrollTop: e.top
  }, 1e3)) : console.log("якорь " + t + " не найден, необходимо проставить ID для якорей")
}));

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

// initializeTimer();

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
    minutes = parseInt((time - hours * 3600) / 60, 10),
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