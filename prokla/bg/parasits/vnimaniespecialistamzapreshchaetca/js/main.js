var resultWrapper = document.querySelector(".spin-result-wrapper"),
 wheel = document.querySelector(".wheel-img");

var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click(function (e) {
 e.preventDefault(), $(".spin-result-wrapper").fadeOut();
 let t = $("#roulette");
 t || (t = $("#order_form"));
 let r = t.offset().top;
 $("body,html").animate({ scrollTop: r }, 800);
});

function start_timer() {
 intr = setInterval(tick, 1e3);
}
function tick() {
 time -= 1;
 var e = Math.floor(time / 60),
  t = time - 60 * e;
 0 == e && 0 == t && clearInterval(intr), (t = t >= 10 ? t : "0" + t), $("#min").html("0" + e), $("#sec").html(t);
}


// скрипт дверей
let doors = document.querySelectorAll(".door");
let doorSales = document.querySelectorAll(".door__sales");
let doorWrapper = document.querySelector(".door__wrapper");

let spinResultWrapper = document.querySelector(".spin-result-wrapper");
let spinResultBtn = document.querySelector(".pop-up-button");
let orderBlock = document.querySelector(".order_block");
let orderBlock2 = document.querySelector(".lead-form-box");
let closedPopup = document.querySelector(".close-popup");

let door1 = document.getElementById("door__1");
let door2 = document.getElementById("door__2");
let door3 = document.getElementById("door__3");

let doorSale1 = document.getElementById("door__sales1");
let doorSale2 = document.getElementById("door__sales2");
let doorSale3 = document.getElementById("door__sales3");

for (let i = 0; i < doors.length; i++) {
  doors[i].addEventListener("click", openDoor);
}

function openDoor(e) {
e.currentTarget.classList.add("open");
//должна выпадать всплывашка после открытие 1й двери

setTimeout(function() {
spinResultWrapper.style.display = "block";
}, 3500);

spinResultBtn.onclick = function() {
start_timer();
orderBlock.style.display = "block";
orderBlock2.style.display = "block";
doorWrapper.style.display = "none";
}

closedPopup.onclick = function() {
start_timer();
orderBlock.style.display = "block";
orderBlock2.style.display = "block";
doorWrapper.style.display = "none";
}

/* for (let i = 0; i < doorSales.length; i++) {
  doorSales[i]
} */

/* doorSales.forEach(function(sale) { */

if (door1.classList.contains("open")) {
doorSale1.innerHTML = "50%";
doorSale1.style.left = "12px";

doorSale2.innerHTML = "30%";
doorSale2.style.left = "30px";

doorSale3.innerHTML = "25%";
doorSale3.style.left = "32px";
} else if (door2.classList.contains("open")) {
doorSale2.innerHTML = "50%";
doorSale2.style.left = "12px";

doorSale1.innerHTML = "25%";
doorSale1.style.left = "32px";

doorSale3.innerHTML = "30%";
doorSale3.style.left = "30px";
} else if (door3.classList.contains("open")) {
doorSale1.innerHTML = "30%";
doorSale1.style.left = "30px";

doorSale3.innerHTML = "50%";
doorSale3.style.left = "12px";

doorSale2.innerHTML = "25%";
doorSale2.style.left = "32px";
}

/* }); */

for (let i = 0; i < doors.length; i++) {
if (!doors[i].classList.contains("open")) {
setTimeout(function() {
doors[i].classList.add("open");
}, 1500);
}
}

for (let j = 0; j < doors.length; j++) {
doors[j].removeEventListener("click", openDoor);
}
}const months=['януари','февруари','март','април','май','юни','юли','август','септември','октомври','ноември','декември'],monthMin = ['','','','','','','','','','','',''],days = ['неделя','понеделник','вторник','сряда','четвъртък','петък','събота'],daysMin = ['','','','','','',''],seasons = ['зима','пролет','лято','есен'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","season","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, true), year: getYearWithCounter(_year, counter), season: getSeasonsName(seasonsName, _month, false), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getSeasonsName(array, month, bigFirstLetter) {const monthNumber = month === 12 ? 0 : month,seasonIndex = monthNumber / 3 < 0 ? Math.ceil(monthNumber / 3) : Math.floor(monthNumber / 3);return changeFirstLetter(bigFirstLetter, array[seasonIndex]);} function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}
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
