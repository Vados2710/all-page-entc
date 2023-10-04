const months=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'],monthMin = ['','','','','','','','','','','',''],days = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'],daysMin = ['','','','','','',''],seasons = ['inverno','primavera','verão','outono'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, monthDefault, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","year"], dateFormat = { dd: _day, mm: _month, yyyy: _year, year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

$(function () {
  $('.close, .screenLock').click(function () {
    $('.screenLock').fadeOut(300);
  })
  $('.screenLock .msg').click(function (event) {
    event.stopPropagation();
  });
  var flag = true;
  $(window).mouseout(function (e) {
    if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
      $('.screenLock').fadeIn(300);
      flag = false;
    }
  });
});

//Toggle attention block visibility
const attentionBlocks = document.querySelectorAll('.attention')

for (let i = 0; i < attentionBlocks.length; i++) {
  attentionBlocks[i].addEventListener('click', toggleVisibility)
}

function toggleVisibility(event) {
  const target = event.target

  if (target.className.includes('attention') && target.classList.contains('attention--hidden')) {
    target.classList.remove('attention--hidden')
  } else {
    target.parentElement.parentElement.classList.add('attention--hidden')
  }
}
