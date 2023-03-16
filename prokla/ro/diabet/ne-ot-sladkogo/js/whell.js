const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","monthOnly","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), monthOnly: getMonthName(_month, monthsName, false, counter), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}


var flagNew = 0;

function startCounter() {

  if (flagNew == 0) {
    let packWrap = document.querySelector(".loader__element");

    setTimeout(function () {
      let countPack = document.querySelector(".count"),
        loaderLine = document.querySelector(".loader__element"),
        defaultNum = 18;
      perc = 40;

      var num = 0;

      function getRandomPack() {

        if (num < 2) {

          // defaultNum = defaultNum - 1;
          // loaderLine.style.width = perc + '%';
          // countPack.innerHTML = defaultNum;
          // $(".prod_left_val").text(defaultNum);
          // perc = perc - 10;

          setTimeout(opacitylow, 0);
          setTimeout(opacityhigh, 400);

        } else if (3 < num < 6 && defaultNum != 6) {

          // defaultNum = defaultNum - 1;
          // countPack.innerHTML = defaultNum;
          // $(".prod_left_val").text(defaultNum);
          // loaderLine.style.width = perc + '%';
          // perc = perc - 2;

          setTimeout(opacitylow, 0);
          setTimeout(opacityhigh, 400);

        }
        num++;
      }

      function opacitylow() {
        packWrap.style.opacity = "0.3";
      }

      function opacityhigh() {
        packWrap.style.opacity = "1";
      }
      (function loop() {
        const interval = [6000, 8000, 12000];
        var rand = Math.floor(Math.random() * interval.length);
        let randomIntervalNum = interval[rand];

        setTimeout(function () {
          getRandomPack();
          loop();

        }, randomIntervalNum);
      })();
    }, 1000);

    flagNew++;
  }
}

