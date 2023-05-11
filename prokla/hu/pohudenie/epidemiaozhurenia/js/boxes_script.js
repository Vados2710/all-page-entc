"use strict";

const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

let path = document.querySelector("img").src;
let idx = path.lastIndexOf("/images");
let pathRes = path.slice(0, idx);

var resultWrapper = document.querySelector(".spin-result-wrapper"),
  par = location.hash.slice(1).split("~"),
  parl = par.length,
  boxesTitle = document.querySelector(".center"),
  instructions = document.querySelector(".boxes__instructions"),
  title = document.querySelector(".rub-title");
if (parl > 2 && (isp = par[4].replace(/\+/g, " ")), "vibrate" in navigator) var vibr = 1;
else vibr = 0;
var count = 1;
$((function () {
  $(".try").click((function () {
    if (count < 2) $(this).attr("src", pathRes + "/images/gift-box-opened.png"), $(this).addClass("empty"), count++, setTimeout((function () {
      document.getElementById("success02").className += " animate", document.getElementById("successtip02").className += " animateSuccessTip", document.getElementById("modal02").className += " visible";
      document.getElementById("cntVal");
      document.querySelector(".sweet-overlay").style.display = "block"
    }), 800);
    else if ($("#modal02").hasClass("done") && !$(this).hasClass("empty") && count < 3) {
      count++;
      var e = document.getElementById("discount");
      $(this).replaceWith(e), $(e).addClass("show"), setTimeout((function () {
        resultWrapper.style.display = "block", instructions.style.display = "none", boxesTitle.style.display = "none"
      }), 1e3), setTimeout((function () {
        $("#boxes").slideUp(), $(".order_block").slideDown(), start_timer()
      }), 3500)
    }
  }))
}));
var counter = 1;

function hidemodal01() {
  vibr > 0 && navigator.vibrate(70);
  document.getElementById("modal01").classList.remove("visible"), document.querySelector(".sweet-overlay").style.display = "none"
}

function hidemodal02() {
  $("#modal02").addClass("done"), vibr > 0 && navigator.vibrate(70);
  document.getElementById("modal02").classList.remove("visible"), document.querySelector(".sweet-overlay").style.display = "none"
}
$(document).ready((function () {
  $("#update").on("click", (function () {
    1 == counter && (counter++, $("#cntVal").html((function (e, t) {
      return +t - 1
    })))
  }))
}));
var closePopup = document.querySelector(".close-popup");
$(".pop-up-button").click((function (e) {
  e.preventDefault(), $(".spin-result-wrapper").fadeOut();
  let t = $("#roulette");
  t || (t = $("#order_form"));
  let o = t.offset().top;
  $("body,html").animate({
    scrollTop: o
  }, 800)
})), $(".close-popup").click((function (e) {
  e.preventDefault(), $(".spin-result-wrapper").fadeOut()
}));
var intr, time = 600;

function start_timer() {
  intr = setInterval(tick, 1e3)
}

function tick() {
  time -= 1;
  var e = Math.floor(time / 60),
    t = time - 60 * e;
  0 == e && 0 == t && clearInterval(intr), t = t >= 10 ? t : "0" + t, $("#min").html("0" + e), $("#sec").html(t)
}