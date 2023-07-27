//polyfill foreach for IE
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }


//----------------------------TIMER---------------------------------------------------
var time = 2700;
var storageVar = "lastTimeForDiscount3";
var needToRememberTime = false;
var intr;

if (needToRememberTime && localStorage.getItem(storageVar)) {
  time = localStorage.getItem(storageVar);
}

function start_timer() {
  intr = setInterval(function () {
    time = time - 1;
    if (time >= 0) {
      localStorage.setItem(storageVar, time);
      var mins = Math.floor(time / 60);
      var secs = time - mins * 60;
      if (mins == 0 && secs == 0) {
        clearInterval(intr);
      }
      mins = mins >= 10 ? mins : "0" + mins;
      secs = secs >= 10 ? secs : "0" + secs;
      document.querySelectorAll(".m-timer").forEach(function (mTimer) {
        mTimer.innerHTML = mins;
      });
      document.querySelectorAll(".s-timer").forEach(function (sTimer) {
        sTimer.innerHTML = secs;
      });
    }
  }, 1000);
}

start_timer();


var $city = $('.geocity');
var city = '';
$.get('https://api.sypexgeo.net/json/', function (location) {
    city = location.city.name_en;
    $city.text(city);
})