const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['ianu','febr','mart','apri','mai','iuni','iuli','augu','sept','octo','noie','dece'],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthMin","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthMin: getMonthName(_month, monthsMinName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}
document.addEventListener("DOMContentLoaded", function () {
  // ширина фікс. блоку прописується в стилях
  // блок, який потрібно зафіксувати
  const stickyBlock = document.querySelector('.banner');
  const stickyParent = stickyBlock.parentElement;
  const stickyWrap = document.createElement("div");
  // перед яким блоком зупиняти фіксований блок
  const bottomEdge = document.querySelector(".comments");

  stickyWrap.classList.add("sticky-wrap");
  stickyParent.appendChild(stickyWrap);
  stickyWrap.appendChild(stickyBlock);

  function setPositionSticky() {
    const stickyParent = stickyBlock.parentElement;
    // координата верху батьківського елемента (старт фіксації)
    const stickParentTop = stickyParent.getBoundingClientRect().top;

    if (stickParentTop < 0) {
      stickyBlock.style.position = "fixed";
      // відступ фікс. блоку від верху екрану
      stickyBlock.style.top = "20px";

      if (stickyBlock.getBoundingClientRect().bottom > bottomEdge.getBoundingClientRect().top - 20) {
        stickyBlock.style.top = bottomEdge.getBoundingClientRect().top - stickyBlock.getBoundingClientRect().bottom + "px";
      }

    } else {
      stickyBlock.style.position = "static";
    }
  }
  setPositionSticky();
  window.addEventListener("scroll", setPositionSticky);
});

// time

let time = document.querySelector('.time')

function createClock () {
  let date = new Date();
  
  let hours = date.getHours(); 
  let mins = date.getMinutes();
  let seconds = date.getSeconds();

  hours = checkClock(hours);
  mins = checkClock(mins);
  seconds = checkClock(seconds);
    
  time.innerText = hours + ':' + mins + ':' + seconds;
              
  let clockStart = setTimeout(function() {
    return createClock()
  });                         
}

function checkClock(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

createClock();