const months = [
    "gennaio",
    "febbraio",
    "marzo",
    "aprile",
    "maggio",
    "giugno",
    "luglio",
    "agosto",
    "settembre",
    "ottobre",
    "novembre",
    "dicembre",
  ],
  monthMin = ["", "", "", "", "", "", "", "", "", "", "", ""],
  days = ["domenica", "lunedi", "martedì", "mercoledì", "giovedi", "venerdì", "sabato"],
  daysMin = ["", "", "", "", "", "", ""],
  seasons = ["inverno", "primavera", "estate", "autunno"];
function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {
  const _counterLength = 180;
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
    const testFormat = ["dd", "mm", "yyyy", "dayFull", "monthFull", "year"],
      dateFormat = {
        dd: _day,
        mm: addZero(_month),
        yyyy: _year,
        dayFull: getDaysName(_day, _month, _year, daysName, false),
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
  function getDaysName(_day, _month, _year, daysName, bigFirstLetter) {
    return changeFirstLetter(bigFirstLetter, daysName[new Date(_year, _month - 1, _day).getDay()]);
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

let stepHtml = document.querySelector("#step");
let result = 1;
$(".test__answer-choice").click(function () {
  $(this).toggleClass("choiced");
});

$(".answer-1").click(function () {
  result += 1;
  $(".question-1").removeClass("show");
  $(".question-2").addClass("show");
  stepHtml.innerHTML = result;
});

$(".answer-2").click(function () {
  result += 1;
  stepHtml.innerHTML = result;
  $(".question-2").removeClass("show");
  $(".question-3").addClass("show");
});

$(".answer-3").click(function () {
  result += 1;
  stepHtml.innerHTML = result;
  $(".question-3").removeClass("show");
  $(".question-4").addClass("show");
});

$(".answer-4").click(function () {
  result += 1;
  stepHtml.innerHTML = result;
  $(".question-4").removeClass("show");
  $(".question-5").addClass("show");
});

$(".answer-5").click(function () {
  result += 1;
  stepHtml.innerHTML = result;
  $(".question-5").removeClass("show");
  $(".question-6").addClass("show");
});

$(".answer-6").click(function () {
  result += 1;
  stepHtml.innerHTML = result;

  $(".question-6").removeClass("show");
  $(".question-7").addClass("show");
});

$(".answer-7").click(function () {
  result += 1;
  stepHtml.innerHTML = result;
  if (result === 8) {
    document.querySelector(".lds-ripple").style.display = "block";
    $("#plan").css("display", "none");
    $(".question-7").removeClass("show");
    setTimeout(function () {
      document.querySelector(".lds-ripple").style.display = "none";
      $(".test__result-1").addClass("show");
      document.querySelector(".lds-ripple").style.display = "none";
    }, 1000);
  }
});

$(document).ready(function () {
  // $('.photo-wrap').slick({
  // 	dots: true,
  // 	infinite: true,
  // 	speed: 300,
  // 	slidesToShow: 3,
  // 	arrows: true,
  // 	responsive: [{
  // 			breakpoint: 800,
  // 			settings: {
  // 				slidesToShow: 2,
  // 				slidesToScroll: 1
  // 			}
  // 		},
  // 		{
  // 			breakpoint: 500,
  // 			settings: {
  // 				slidesToShow: 1,
  // 				slidesToScroll: 1
  // 			}
  // 		}

  // 	]
  // });

  setTimeout(function () {
    $("#disc").attr({
      href: "Disclosure.html",
      target: "_blank",
    });
    $("#tos").attr({
      href: "Terms&Conditions.html",
      target: "_blank",
    });
    $("#pol").attr({
      href: "PrivacyPolicy.html",
      target: "_blank",
    });
  }, 2000);
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
