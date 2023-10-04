var wheel = document.querySelector(".wheel-img");
var resultWrapper = document.querySelector(".spin-result-wrapper");
$(".cursor-text").click(function () {
  if (wheel.classList.contains("rotated")) {
    resultWrapper.style.display = "block";
  } else {
    wheel.classList.add("super-rotation");
    setTimeout(function () {
      resultWrapper.style.display = "block";
    }, 8000);
    setTimeout(function () {
      $(".spin-wrapper").slideUp();
      $(".order_block").slideDown();
      start_timer();
    }, 10000);
    wheel.classList.add("rotated");
  }
});

$(".close-popup, .pop-up-button").click(function (e) {
  e.preventDefault();
  $(".spin-result-wrapper").fadeOut();
  var top = $(".toform").offset().top;
  $("body,html").animate(
    {
      scrollTop: top,
    },
    800
  );
});

var time = 1500;
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

const months=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'],monthMin = ['','','','','','','','','','','',''],days = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'],daysMin = ['','','','','','',''],seasons = ['inverno','primavera','verão','outono'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) nodeList[i].innerHTML = defaultDate } function addZero(numb){return numb<10?'0'+numb:numb} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

$(function () {
  $('a[href^="#"]').on("click", function (event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;

    $("html, body").animate({ scrollTop: dn }, 1000);
  });
});
