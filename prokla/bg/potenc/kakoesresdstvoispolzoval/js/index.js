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
function postDate(e, t, n, o, m) {
  for (let e = 0; e < 60; e++) s(e, "date-"), s(e, "date");
  function s(e, t) {
    let n;
    n = "date-" === t ? -e : e;
    const o = new Date(Date.now() + 864e5 * n),
      m = o.getDate(),
      s = o.getMonth() + 1,
      r = o.getFullYear(),
      a = l(m),
      c = a + "." + l(s) + "." + r,
      d = t + e,
      u = document.querySelectorAll("." + d);
    for (let e = 0; e < u.length; e++) {
      const t = u[e].dataset.format;
      u[e].innerHTML = void 0 !== t && "" !== t ? String(i(a, s, r, t, n)) : c;
    }
  }
  function i(m, s, i, c, d) {
    let u = c;
    const g = [
        "dd",
        "mm",
        "yyyy",
        "dayFull",
        "monthFull",
        "dayMin",
        "monthMin",
      ],
      p = {
        dd: m,
        mm: l(s),
        yyyy: i,
        dayFull: r(m, s, i, e, !1),
        dayMin: r(m, s, i, t, !1),
        monthFull: a(s, n, !1),
        monthMin: a(s, o, !1),
      };
    for (let e = 0; e < g.length; e++) {
      let t = g[e],
        n = new RegExp(t);
      u = u.replace(n, p[t]);
    }
    return u.split(" ").join(" ");
  }
  function r(e, t, n, o, m) {
    return c(m, o[new Date(n, t - 1, e).getDay()]);
  }
  function a(e, t, n, o) {
    const m = o || 0;
    let s;
    return (
      (s = e + m > 12 ? m - (12 - e) : e + m),
      (s = e + m <= 0 ? 12 + m + 1 : e + m),
      c(n, t[s - 1])
    );
  }
  function l(e) {
    return e < 10 ? "0" + e : e;
  }
  function c(e, t) {
    return e && t && t.length > 0 ? t[0].toUpperCase() + t.slice(1) : t;
  }
}
document.body.classList.contains("ev-date") &&
  document.addEventListener("DOMContentLoaded", function () {
    postDate(days, daysMin, months, monthMin, seasons);
  });
const box_d = document.querySelector("#box_d").getAttribute("src"),
  congrat = document.querySelector("#congrat").getAttribute("src");
var triesCount = 2,
  tries = 0;
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
      seconds: 0,
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


$("#tries_count").text(triesCount),
  $(".try").on("click", function () {
    if (
      !$(this).parent(".boxes_item").hasClass("afterlose-boxes_item") &&
      !$("#boxesContainer").hasClass("stop_trying") &&
      (0 == tries &&
        ($("#boxesContainer").addClass("stop_trying"),
        $(this).attr("src", box_d),
        $(this).addClass("shake"),
        $(this).parent(".boxes_item").addClass("afterlose-boxes_item"),
        $(".box-tooltip-title").html(
          '<b>Нищо не си спечелил</b><br> Остава ви <span style="color: red;">1 опит </span>! Опитай пак!'
        ),
        $(".box-tooltip-btn").html("Опитвам"),
        setTimeout(function () {
          $(".box-popup-wrapper.tooltip").fadeIn(100);
        }, 850)),
      1 == tries)
    ) {
      $("#boxesContainer").addClass("stop_trying"),
        $(this)
          .parent(".boxes_item")
          .html(
            '<div class="prize_box"><img src=' +
              box_d +
              ' class="try" alt=""><p class="win_prize">50%</p></div>'
          );
      document.querySelector(".x_price_current").innerHTML,
        document.querySelector(".x_currency").innerHTML;
      $(".box-tooltip-title").html(
        '<b>Честито!</b><br>Спечелихте <br>Uromexil Forte<b style="color: red;"> с отстъпка!</b>'
      ),
        $(".box-tooltip-btn").html("Вземете Uromexil Forte с отстъпка"),
        $(".box-tooltip-ico>img").attr("src", congrat),
        setTimeout(function () {
          $(".box-popup-wrapper.tooltip").fadeIn(100),
            (document.querySelector(".none").style.display = "none");
        }, 1e3);
    }
  }),
  $(".box-popup-wrapper.tooltip").bind("click", function (e) {
    $("#boxesContainer").removeClass("stop_trying"),
      $(".box-popup-wrapper").fadeOut(90),
      tries++,
      triesCount--,
      $("#tries_count").html(
        '<span style="color: red;">' + triesCount + "</span>"
      ),
      2 == tries &&
        ($("#boxesContainer").slideUp("fast"),
        $(".lead-form-box").slideDown("fast"),
        initializeTimer(),
        $("body,html").animate(
          { scrollTop: $("#scroll_to").offset().top - 20 },
          400
        ));
  }),
  $(document).on("click", 'a[href^="#"]', function (e) {
    e.preventDefault(),
      $("html, body").animate(
        { scrollTop: $($.attr(this, "href")).offset().top },
        1e3
      );
  });
let showCommentForm = document.getElementById("commnetCreate"),
  commentFormWrapper = document.getElementById("commnetCreateWrapper"),
  form = document.getElementById("commentForm"),
  name = document.getElementById("commentName"),
  city = document.getElementById("commentCity"),
  age = document.getElementById("commentAge"),
  text = document.getElementById("commentText"),
  btn = document.getElementById("commentButton"),
  notice = document.getElementById("commentNotice"),
  message = document.getElementById("commentMessage"),
  commentImage = document.getElementById("commentImage"),
  createCommentImage = document.getElementById("createCommentImage");
commentImage.addEventListener("change", function (e) {
  e.preventDefault(),
    commentImage.value
      ? ((document.getElementById("commentFoto").innerHTML = "Снимката качена"),
        createCommentImage.classList.add("added"))
      : ((document.getElementById("commentFoto").innerHTML =
          "Прикачете снимка"),
        createCommentImage.classList.remove("added"));
}),
  btn.addEventListener("click", function (e) {
    e.preventDefault(),
      name.value.trim() && city.value.trim() && text.value.trim()
        ? ((name.value = ""),
          (city.value = ""),
          (text.value = ""),
          (commentImage.value = ""),
          form.classList.remove("show"),
          message.classList.add("show"),
          createCommentImage.classList.remove("added"))
        : notice.classList.add("show");
  }),
  showCommentForm.addEventListener("click", function (e) {
    showCommentForm.classList.remove("show"),
      commentFormWrapper.classList.add("show");
  });

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
  var regex = /[A-Za-zА-Яа-я]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}
