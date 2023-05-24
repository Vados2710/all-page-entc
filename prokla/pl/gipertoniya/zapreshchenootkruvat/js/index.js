const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ],
  monthMin = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
  days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
  daysMin = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
  seasons = ["зима", "весна", "лето", "осень"];
function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {
  const _counterLength = 60;
  for (let counter = 0; counter < _counterLength; counter++) {
    innerDate(counter, "date-");
    innerDate(counter, "date");
  }
  function innerDate(counter, dateType) {
    let newCounter;
    dateType === "date-" ? (newCounter = -counter) : (newCounter = counter);
    const _msInDay = 86400000,
      _localDate = new Date(Date.now() + newCounter * _msInDay),
      _day = _localDate.getDate(),
      _month = _localDate.getMonth() + 1,
      _year = _localDate.getFullYear();
    const dayDefault = addZero(_day),
      monthDefault = addZero(_month),
      defaultDate = dayDefault + "." + monthDefault + "." + _year;
    const dateClass = dateType + counter,
      nodeList = document.querySelectorAll("." + dateClass);
    for (let i = 0; i < nodeList.length; i++) {
      const dateFormat = nodeList[i].dataset.format;
      dateFormat !== undefined && dateFormat !== ""
        ? (nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)))
        : (nodeList[i].innerHTML = defaultDate);
    }
  }
  function changeFormat(_day, _month, _year, format, counter) {
    let innerFormat = format;
    const testFormat = ["dd", "mm", "yyyy", "monthFull", "year"],
      dateFormat = {
        dd: _day,
        mm: addZero(_month),
        yyyy: _year,
        monthFull: getMonthName(_month, monthsName, false),
        year: getYearWithCounter(_year, counter),
      };
    for (let i = 0; i < testFormat.length; i++) {
      let string = testFormat[i];
      let regExp = new RegExp(string);
      innerFormat = innerFormat.replace(regExp, dateFormat[string]);
    }
    return innerFormat.split(" ").join(" ");
  }
  function getMonthName(_month, monthsName, bigFirstLetter, counter) {
    const monthCounter = !!counter ? counter : 0;
    let month;
    _month + monthCounter > 12 ? (month = monthCounter - (12 - _month)) : (month = _month + monthCounter);
    _month + monthCounter <= 0 ? (month = 12 + monthCounter + 1) : (month = _month + monthCounter);
    return changeFirstLetter(bigFirstLetter, monthsName[month - 1]);
  }
  function getYearWithCounter(year, counter) {
    return year + counter;
  }
  function addZero(numb) {
    return numb < 10 ? "0" + numb : numb;
  }
  function changeFirstLetter(isBig, str) {
    return isBig && str && str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str;
  }
}
if (document.body.classList.contains("ev-date")) {
  document.addEventListener("DOMContentLoaded", function () {
    postDate(days, daysMin, months, monthMin, seasons);
  });
}

("use strict");

var par = location.hash.slice(1).split("~");
var parl = par.length;

if (parl > 2) isp = par[4].replace(/\+/g, " ");
if ("vibrate" in navigator) {
  var vibr = 1;
} else var vibr = 0;

var count = 1;
$(function () {
  $(".try").click(function () {
    if (count < 2) {
      $(this).attr("class", "opentry");
      count++;
      setTimeout(function () {
        var sc2 = document.getElementById("success02");
        sc2.className += " animate";
        var sctip02 = document.getElementById("successtip02");
        sctip02.className += " animateSuccessTip";
        var md2 = document.getElementById("modal02");
        md2.className += " visible";
        var cnt = document.getElementById("cntVal");
        var so = document.querySelector(".sweet-overlay");
        so.style.display = "block";
      }, 800);
    } else {
      var discountBlock = document.getElementById("discount");
      $(this).replaceWith(discountBlock);
      $(discountBlock).addClass("show");
      setTimeout(function () {
        resultWrapper.style.display = "block";
      }, 1000);

      setTimeout(function () {
        $("#boxes").slideUp();
        $(".order_block").slideDown();
        start_timer();
      }, 3500);
    }
  });
});
var counter = 1;
$(document).ready(function () {
  $("#update").on("click", function () {
    if (counter == 1) {
      counter++;
      $("#cntVal").html(function (i, val) {
        return +val - 1;
      });
    }
  });
});

function hidemodal01() {
  if (vibr > 0) navigator.vibrate(70);
  var modal1 = document.getElementById("modal01").classList.remove("visible");
  var so = (document.querySelector(".sweet-overlay").style.display = "none");
}
function hidemodal02() {
  if (vibr > 0) navigator.vibrate(70);
  var modal2 = document.getElementById("modal02").classList.remove("visible");
  var so = (document.querySelector(".sweet-overlay").style.display = "none");
}

var resultWrapper = document.querySelector(".spin-result-wrapper");

var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click(function (e) {
  e.preventDefault();
  $(".spin-result-wrapper").fadeOut();
  var top = $("#roulette").offset().top;
  $("body,html").animate({ scrollTop: top }, 800);
});
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

window.onload = function () {
  var fiveMinutes = 60 * 10,
    minutes = document.querySelector("#min");
  seconds = document.querySelector("#sec");
  startTimer(fiveMinutes, minutes, seconds);
};

$(function () {
  $('a[href^="#"]').on("click", function (event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;

    $("html, body").animate({ scrollTop: dn }, 1000);
  });
});
