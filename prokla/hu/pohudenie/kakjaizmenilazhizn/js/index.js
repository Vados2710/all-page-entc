const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, true), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

//
// $(window).scroll(function () {
//   if ($(this).scrollTop() > 270) {
//     $(".prod-sidebar").addClass("active");
//   } else {
//     $(".prod-sidebar").removeClass("active");
//   }
// });

var aside = document.querySelector(".prod-sidebar")
window.addEventListener('scroll', function(e) {
  // console.log(window.pageYOffset);
  if (window.pageYOffset > 275) {
    aside.classList.add("active");
  }
  else {
    aside.classList.remove("active");
  }
})

let calendar = {
  day: new Date(),
  create: function () {
    for (let i = numDay; i < 7; i++) {
      firstWeek.children[i].innerHTML = this.checkDay();
      currDay++;
    }
    for (let i = 0; i < 7; i++) {
      secondWeek.children[i].innerHTML = this.checkDay();
      currDay++;
    }
    for (let i = 0; i < 7; i++) {
      thirdWeek.children[i].innerHTML = this.checkDay();
      currDay++;
    }
    for (let i = 0; i < 7; i++) {
      fourthWeek.children[i].innerHTML = this.checkDay();
      currDay++;
    }
    for (let i = 0; i < 7; i++) {
      if (
        this.day.getMonth() !=
        new Date(
          this.day.getTime() - (this.day.getDate() - currDay) * 86400000
        ).getMonth()
      ) {
        break;
      } else {
        lastWeek.children[i].innerHTML = this.checkDay();
        currDay++;
      }
    }
  },
  checkDay: function () {
    let a;
    if (this.day.getDate() >= currDay) {
      a = '<td><a href="">' + currDay + "</a></td>";
    } else {
      a = "<td>" + currDay + "</td>";
    }

    return a;
  },
};

let firstMonthDay = new Date(
    calendar.day.getTime() - (calendar.day.getDate() - 1) * 86400000
  ),
  numDay = firstMonthDay.getDay(),
  firstWeek = document.querySelector(".j-calendar-first-week"),
  secondWeek = document.querySelector(".j-calendar-second-week"),
  thirdWeek = document.querySelector(".j-calendar-third-week"),
  fourthWeek = document.querySelector(".j-calendar-fourth-week"),
  lastWeek = document.querySelector(".j-calendar-last-week");

let currDay = 1;

calendar.create();
