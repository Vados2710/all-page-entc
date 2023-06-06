jQuery(document).ready(function ($) {
  $("a").on("touchend, click", function (e) {
    e.preventDefault();
    $("body,html").animate({
        scrollTop: $(".scroll").offset().top - 10,
      },
      1000
    );
  });

  $(".search input").keypress(function (e) {
    if (e.which == 13) {
      $(".search input").val("");
      $("body,html").animate({
          scrollTop: $(".scroll").offset().top - 10,
        },
        1000
      );
    }
  });

  $(".bel-footer-block a").unbind("click");
});

let reviews = function () {
  let commentFileText = $(".pust-comments__file-text");
  let commentFileInput = $("#file");
  let commentTextArea = $(".comment-area");
  let commentName = $(".reviews-form__name");

  commentFileInput.change(function (e) {
    commentFileText.html("Снимката е качена");
    commentFileText.css("color", "#237a27");
    commentFileText.addClass("loaded");
  });

  $(".reviews-form").submit(function (e) {
    if (commentTextArea.val() == "" || commentName.val() == "") {
      return false;
    }
    e.preventDefault();
    commentFileText.html("Прикачете снимката си");
    commentFileText.css("color", "#000");
    commentTextArea.val("");
    commentName.val("");
    alert("Благодарим ви! Отзивът ви е изпратен на модератор.");
    $("#push-comments").slideUp();
  });
};

reviews();
const months = [
    "януари",
    "февруари",
    "март",
    "април",
    "май",
    "юни",
    "юли",
    "август",
    "септември",
    "октомври",
    "ноември",
    "декември",
  ],
  monthMin = ["", "", "", "", "", "", "", "", "", "", "", ""],
  days = [
    "неделя",
    "понеделник",
    "вторник",
    "сряда",
    "четвъртък",
    "петък",
    "събота",
  ],
  daysMin = ["", "", "", "", "", "", ""],
  seasons = ["зима", "пролет", "лято", "есен"];

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
    for (let i = 0; i < nodeList.length; i++)
      nodeList[i].innerHTML = defaultDate;
  }

  function addZero(numb) {
    return numb < 10 ? "0" + numb : numb;
  }
}
if (document.body.classList.contains("ev-date")) {
  document.addEventListener("DOMContentLoaded", function () {
    postDate(days, daysMin, months, monthMin, seasons);
  });
}

var resultWrapper = document.querySelector(".spin-result-wrapper");
var wheel = document.querySelector(".wheel-img");
var params = window.location.search
  .replace("?", "")
  .split("&")
  .reduce(function (p, e) {
    var par = e.split("=");
    p[decodeURIComponent(par[0])] = decodeURIComponent(par[1]);
    return p;
  }, {});

function spin() {
  if (!wheel.classList.contains("rotated")) {
    wheel.classList.add("super-rotation");
    setTimeout(function () {}, 8000);
    setTimeout(function () {
      $(".spin-wrapper").slideUp();
      $(".spin-result-wrapper").fadeIn();
      $(".order_block").slideDown();
    }, 7000);
    wheel.classList.add("rotated");
  }
}

$(".cursor-text").on("click", spin);

var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click(function (e) {
  e.preventDefault();
  $(".spin-result-wrapper").fadeOut();
});

start_timer();

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
  secs = secs >= 10 ? secs : "0" + secs;
  mins = mins >= 10 ? mins : "0" + mins;
  $("#min").html(mins);
  $("#sec").html(secs);
}