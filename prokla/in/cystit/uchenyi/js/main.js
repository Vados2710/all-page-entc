// var resultWrapper = document.querySelector('.spin-result-wrapper');
// var wheel = document.querySelector('.wheel-img');
//


// function spin() {
//   if (!wheel.classList.contains('rotated')) {
//     wheel.classList.add('super-rotation');
//     setTimeout(function () {
//       resultWrapper.style.display = "block";
//     }, 8000);
//     setTimeout(function () {
//       $('.spin-wrapper').slideUp();
//       $('.order_block').slideDown();
//       start_timer();
//     }, 10000);
//     wheel.classList.add('rotated');
//   }
// }
// var closePopup = document.querySelector('.close-popup');
// $('.close-popup, .pop-up-button').click(function (e) {
//   e.preventDefault();
//   $('.spin-result-wrapper').fadeOut();
//
//   let top = $(".toform").offset().top
//   $('body,html').animate({
//     scrollTop: top
//   }, 1000);
// });

const months=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],monthMin = ['','','','','','','','','','','',''],days = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'],daysMin = ['','','','','','',''],seasons = ['invierno','primavera','verano','otoño'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}


// comment-form
let sendBtn = document.querySelector('.sendBtn'),
  userName = document.querySelector('.userName'),
  userComment = document.querySelector('.userComment'),
  commentForm = document.querySelector('.commentForm');

sendBtn.addEventListener('click', function (event) {
  if (isEmpty(userName, userComment)) {
    event.preventDefault();
    alert('¡Gracias! Tu reseña ha sido enviada para moderación');
    commentForm.style.cssText = 'display: none;';
  }
});

// Custom File
let customFile = document.querySelector('.form__image '),
  customText = document.querySelector('.custom__text');

customFile.addEventListener('change', function () {
  customText.innerHTML = 'Foto subida';
  customText.style.cssText = 'color: green;';
});

// is empty
function isEmpty(elem1, elem2) {
  if (elem1.value != '' && elem2.value != '') {
    return true;
  } else {
    return false;
  }
}