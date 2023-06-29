document.addEventListener("DOMContentLoaded", function (event) {
  function countdown(minutes) {
    var seconds = 60;
    var mins = minutes;
    function tick() {
      var counter = document.getElementById("counter");
      var current_minutes = mins - 1;
      seconds--;
      counter.innerHTML =
        //"Offer expires in " +
        " in " +
        current_minutes.toString() +
        " : " +
        (seconds < 10 ? "0" : "") +
        String(seconds);
      if (seconds > 0) {
        setTimeout(tick, 1000);
      } else {
        if (mins > 1) {
          countdown(mins - 1);
        }
      }
    }
    tick();
  }

  countdown(15);
});
$(document).ready(function () {
  // $.glue({
  // 		layer: '#beforeyougo',
  // 		cookie: false
  // });

  //Vancouver, Montreal, Calgary, Toronto, Ottawa, Edmonton
  var recentPur = [
    ["George - Vancouver", "5", "5 minutes ago"],
    ["Steve - Vancouver", "7", "15 minutes ago"],
    ["Laura - Vancouver", "3", "22 minutes ago"],
    ["Phil - Vancouver", "7", "23 minutes ago"],
    ["Juan - Edmonton", "5", "24 minutes ago"],
    ["Smith - Montreal", "7", "27 minutes ago"],
    ["Harris - Montreal", "7", "30 minutes ago"],
    ["Wilson - Montreal", "7", "31 minutes ago"],
    ["Garcia - Montreal", "7", "33 minutes ago"],
    ["Elliott - Edmonton", "7", "36 minutes ago"],
    ["Tessa - Calgary", "7", "45 minutes ago"],
    ["Ashleigh - Calgary", "7", "1 hour ago"],
    ["Devin - Calgary", "7", "1 hour ago"],
    ["Ariana - Calgary", "7", "1 hour ago"],
    ["Elin - Edmonton", "7", "1 hour ago"],
    ["Aleksandra - Toronto", "7", "1 hour ago"],
    ["Peyton - Toronto", "7", "1 hour ago"],
    ["Lucille - Toronto", "3", "1 hour ago"],
    ["Gina - Toronto", "5", "1 hour ago"],
    ["Katharine - Edmonton", "5", "1 hour ago"],
    ["Sumaya - Ottawa", "7", "1 hour ago"],
    ["Leanne - Ottawa", "5", "1 hour ago"],
    ["Nettie - Ottawa", "7", "1 hour ago"],
    ["Jeanne - Ottawa", "5", "1 hour ago"],
    ["Diane - Edmonton", "7", "1 hour ago"],
  ];
  var randPur = Math.floor(Math.random() * recentPur.length);
  var timeRand = Math.round(Math.random() * 29) + 1;
  $("#notify-1").html(recentPur[randPur][0]);
  $("#notify-2").html(recentPur[randPur][1]);
  $("#notify-3").html(timeRand + " prieš sekundes");

  setInterval(function () {
    $(".custom-social-proof")
      .stop()
      .slideToggle("slow", function () {
        if ($(".custom-social-proof").css("display") == "none") {
          var randPur = Math.floor(Math.random() * recentPur.length);
          $("#notify-1").html(recentPur[randPur][0]);
          $("#notify-2").html(recentPur[randPur][1]);
          $("#notify-3").html(timeRand + " prieš sekundes");
        }
      });
  }, 8000);
  $(".custom-close").click(function () {
    $(".custom-social-proof").addClass("hide-popup");
  });
});

$(document).bind("click", function (e) {
  if ($(e.target).closest("#beforeyougo").length == 0) {
    hideCliamLayer();
  }
});

setTimeout(function () {
  window.addEventListener("popstate", function (event) {
    if (event.state && event.state.wisepops === "exit-intent") {
      showCliamLayer();
    }
  });
}, 100);
if (
  !window.history.state ||
  window.history.state.wisepops !== "normal-intent"
) {
  window.history.replaceState({ wisepops: "exit-intent" }, "");
  window.history.pushState({ wisepops: "normal-intent" }, "");
}

function showCliamLayer() {
  $("#beforeyougo").show();
}

function hideCliamLayer() {
  $("#beforeyougo").hide();
}

function hideFooter() {
  $(".wisepops-root").hide();
}
const months = [
    "sausis",
    "vasaris",
    "kovas",
    "balandis",
    "gegužės",
    "birželis",
    "liepa",
    "rugpjūtis",
    "rugsėjis",
    "spalis",
    "lapkritis",
    "gruodis",
  ],
  monthMin = ["", "", "", "", "", "", "", "", "", "", "", ""],
  days = [
    "sekmadienis",
    "pirmadienis",
    "antradienis",
    "trečiadienis",
    "ketvirtadienis",
    "penktadienis",
    "šeštadienis",
  ],
  daysMin = ["", "", "", "", "", "", ""],
  seasons = ["žiema", "pavasaris", "vasara", "ruduo"];
function postDate(
  daysName,
  daysMinName,
  monthsName,
  monthsMinName,
  seasonsName
) {
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
        ? (nodeList[i].innerHTML = String(
            changeFormat(dayDefault, _month, _year, dateFormat, newCounter)
          ))
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
    _month + monthCounter > 12
      ? (month = monthCounter - (12 - _month))
      : (month = _month + monthCounter);
    _month + monthCounter <= 0
      ? (month = 12 + monthCounter + 1)
      : (month = _month + monthCounter);
    return changeFirstLetter(bigFirstLetter, monthsName[month - 1]);
  }
  function getYearWithCounter(year, counter) {
    return year + counter;
  }
  function addZero(numb) {
    return numb < 10 ? "0" + numb : numb;
  }
  function changeFirstLetter(isBig, str) {
    return isBig && str && str.length > 0
      ? str[0].toUpperCase() + str.slice(1)
      : str;
  }
}
if (document.body.classList.contains("ev-date")) {
  document.addEventListener("DOMContentLoaded", function () {
    postDate(days, daysMin, months, monthMin, seasons);
  });
}
$(document).ready(function () {
  $("a").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#order_form").offset().top - 10,
      },
      800
    );
  });
});
