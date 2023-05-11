const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}


var commentRefresh = function (a, b) {
  counter = Math.floor(Math.random() * 10000) + 5000;
  if (document.querySelector('.comments-newly-showed')) {
    document.querySelector('.comments-newly-showed').classList.remove('comments-newly-showed');
  }
  document.querySelector('.comments-refreshing').classList.add('refresh-appear');
  // убираем анимацию набора текста
  setTimeout(function () {
    document.querySelector('.comments-refreshing').classList.remove('refresh-appear')
  }, counter);
  // добавляем коммент
  setTimeout(function () {
      a[b].classList.add('comments-newly-showed');
      ++b;
      if (b < a.length) {
        setTimeout(commentRefresh, (counter + 6000), a, b);
      }
    },
    // через одну секунду после того как анимация убралась
    counter + 1000)
}

var commentsRefreshing = document.querySelector('.comments-refreshing-wrapper');
if (commentsRefreshing && commentsRefreshing.querySelector('.comments-item')) {
  var commentFlag = 0;
  commentsRefreshing.querySelector('.comments-item').classList.add('comments-newly-showed');
  var commentsRefreshingCords = commentsRefreshing.getBoundingClientRect().top + pageYOffset;
  window.addEventListener('scroll', function () {
    if (commentsRefreshing.getBoundingClientRect().top <= 500 && commentFlag == 0) {
      ++commentFlag;
      var counter = 4000;
      setTimeout(commentRefresh, counter, commentsRefreshing.querySelectorAll('.comments-item'), 1);
    }
  })
}