

const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","monthOnly","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), monthOnly: getMonthName(_month, monthsName, false, counter), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}


"use strict";
var par = location.hash.slice(1).split("~"),
  parl = par.length;
if (parl > 2 && (isp = par[4].replace(/\+/g, " ")), "vibrate" in navigator) var vibr = 1;
else vibr = 0;
var count = 1;
$((function () {
  $(".try").click((function () {
    // console.log($(".hidden-box").attr("src"));
    if (count < 2) $(this).attr("src", $(".hidden-box").attr("src")), $(this).addClass("disabled"), count++, document.querySelector(".sweet-overlay").classList.add("activating"), setTimeout((function () {
      // document.getElementById("success02").className += " animate", 
      // document.getElementById("successtip02").className += " animateSuccessTip", 
      document.getElementById("modal02").className += " visible";
      document.getElementById("cntVal");
      document.querySelector(".sweet-overlay").style.display = "block"
    }), 800);
    else if (!document.querySelector(".sweet-overlay").classList.contains("activating") && !$(this).hasClass("disabled") && count < 3) {
      count++;
      var e = document.getElementById("discount");
      $(this).replaceWith(e), $(e).addClass("show"), setTimeout((function () {
        resultWrapper.style.display = "block"
      }), 500), setTimeout((function () {
        $("#boxes").slideUp(), $(".order_block").slideDown(), start_timer()
      }), 500)
    }
  }))
}));
var counter = 1;

function hidemodal01() {
  vibr > 0 && navigator.vibrate(70);
  document.getElementById("modal01").classList.remove("visible"), document.querySelector(".sweet-overlay").style.display = "none"
}

function hidemodal02() {
  vibr > 0 && navigator.vibrate(70);
  document.getElementById("modal02").classList.remove("visible"), document.querySelector(".sweet-overlay").style.display = "none"
}
$(document).ready((function () {
  $("#update").on("click", (function () {
    1 == counter && (document.querySelector(".sweet-overlay").classList.remove("activating"), counter++, $("#cntVal").html((function (e, t) {
      return +t - 1
    })))
  }))
}));
var resultWrapper = document.querySelector(".spin-result-wrapper"),
  wheel = document.querySelector(".wheel-img"),
  link = new URL(window.location.href);
$((function () {
  $("a[href^='#']").click((function () {
    var e = $(this).attr("href");
    return $("html, body").animate({
      scrollTop: $(e).offset().top + "px"
    }), !1
  })), $('input[value="Узнать подробнее"], input[value="Принять участие в розыгрыше"]').click((function () {
    $(".eeee, .fadepopup").css("display", "none")
  }))
}));
var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click((function (e) {
  e.preventDefault(), $(".spin-result-wrapper").fadeOut();
  var t = $("#roulette").offset().top;
  $("body,html").animate({
    scrollTop: t
  }, 800)
}));
var intr, time = 600,
  counting = 0;

function start_timer() {
  if (1 !== ++counting) return !1;
  intr = setInterval(tick, 1e3), counting++
}

function tick() {
  time -= 1;
  var e = Math.floor(time / 60),
    t = time - 60 * e;
  0 == e && 0 == t && clearInterval(intr), t = t >= 10 ? t : "0" + t, document.querySelector("#min").innerHTML = "" + e, document.querySelector("#sec").innerHTML = t
}

var r_text = new Array();
r_text[0] =
  "Elég bevenni a Uromexil Forte-t az utasításoknak megfelelően. Aktiváltuk számodra a nyereményjátékot. Vegyen részt az alábbi sorsolásokon, és nyerjen akár 50% kedvezményt.";
r_text[1] =
  "Ehhez javasoljuk a Uromexil Forte bevételét 30 perccel étkezés előtt. Aktiváltuk számodra a nyereményjátékot. Vegyen részt az alábbi sorsolásokon, és nyerjen akár 50% kedvezményt.";
r_text[2] =
  "Ehhez javasoljuk a Uromexil Forte szedését 4 hétig. Aktiváltuk számodra a nyereményjátékot. Vegyen részt az alábbi sorsolásokon, és nyerjen akár 50% kedvezményt.";
var i = Math.floor(Math.random() * 3);

$(".test-text").text(r_text[i])

var steps = [false, false, false, false, false, false];
var curr_step = 1;

// возможность возвращаться к предыдущему вопросу
function set_history(index) {
  if (!(window.history && history.pushState)) {
    return false;
  }
  if (steps[index] == false) {
    history.pushState({
      'step_x': index
    }, null, window.location.href);
    steps[index] = true;
  }
}

// переходы по шагам
function to_step(index, need_push) {

  if (curr_step = index) {


    for (var i = 1; i < steps.length; i++) {
      if (!$("#step" + i).is(':hidden')) {
        $("#step" + i).hide();
      }
    };
    $("#step" + index).show();
    $("#progress_in").css({
      width: (120 * index / steps.length) + "%"
    });
    $("#curr_step").text(index + ". lépés az " + (steps.length - 1) + ' -ből');

    // Разделение на #step0, #other_steps и #last_step
    if (index + 1 == steps.length) { 
      // если шаг равен общему количеству шагов
      if (!$("#other_steps").is(':hidden')) {
        $("#progress_bar").hide();
        $("#other_steps").hide();
        $("#last_step").show();
      }
    } else if (index > 0) { 
      // если шаг больше ноля
      if ($("#other_steps").is(':hidden')) {
        $("#other_steps").show();
      }
      if (!$("#last_step").is(':hidden')) {
        $("#last_step").hide();
      }
    } else if (!$("#other_steps").is(':hidden')) { 
      // если шаг равен нолю
      $("#other_steps").hide();
    }
  }
}

// Проверка заполненности радиокнопки или чекбокса
function check_radio_selected(elem_id, error_message) {
  obj = $('input[name="' + elem_id + '"]:checked');
  if (!(obj.length && obj.val())) {
    alert(error_message);
    return false;
  }
  return true;
}

// Проверки полей по шагам и уведомления при незаполненных полях
(function ($) {

  $(document).ready(function () {
    to_step(1, true);
  });
   // задаем первоначальный индекс

  $("#to_step1").click(function (event) {
    event.preventDefault();
    to_step(1, true);
  });
  $('input[name=type-home]').on('change', function () {
    event.preventDefault();
    to_step(2, true);
  });

  $('input[name=type-home2]').on('change', function () {
    event.preventDefault();
    to_step(3, true);
  });
  $('input[name=type-repair]').on('change', function () {
    event.preventDefault();
    to_step(4, true);
  });
  $('input[name=design-project]').on('change', function () {
    event.preventDefault();
    to_step(5, true);
  });

  // Отправка формы (нажатием на финальную кнопку)
  $("#to_submit").click(function (event) {
    event.preventDefault();
    $("#quiz_form").submit();
  });


  // для возврата к предыдущему вопросу
  window.addEventListener("popstate", function (e) {
    var step = 0;
    if (e.state) {
      step = e.state.step_x;
    }
    to_step(step);
  });
})(jQuery);

