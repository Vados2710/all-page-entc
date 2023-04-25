const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

var close = document.querySelector('.p5213 .close');
var bgrnd = document.querySelector('.t4527');

bgrnd.addEventListener('click', function() {
  this.classList.remove('open');
});
close.addEventListener('click', function() {
  document.querySelector('.t4527').classList.remove('open');
});

var ind = true;

function showPopup() {
  $(window).mouseout(function (e) {
    if (e.pageY - $(window).scrollTop() < 20 && ind === true) {
      $('.t4527').addClass('open');
      ind = false;
    }
  });
}

showPopup();


// $(function() {
//   $('a[href^="#"]').on('click', function(event) {
//     // отменяем стандартное действие
//     event.preventDefault();

//     var sc = $(this).attr('href'),
//       dn = $(sc).offset().top;

//     $('html, body').animate({ scrollTop: dn }, 1000);
//   });
// });

const lastpack2 = document.querySelectorAll(".lastpack2");
let startLast = 32,   endLast = 11;
console.log(localStorage.getItem('a'));
if(localStorage.getItem('LastStorage') !== null ){
    startLast = localStorage.getItem('LastStorage');
}
else {
    startLast = 32;
}
function getCounter() {
  let counterLast = startLast;
  return function() {
    if (counterLast > endLast) {
      counterLast--;
      localStorage.setItem('LastStorage', counterLast)
    } else {
        counterLast = endLast;
    }
    return counterLast;
  };
}

let count = getCounter();

function packDown() {
  let number = count();
  for (let i = 0; i < lastpack2.length; i++) {
    lastpack2[i].innerHTML = number;
  }
}
setTimeout(packDown, 1000);
setInterval(packDown, 11000);
