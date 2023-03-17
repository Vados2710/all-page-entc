const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['','','','','','','','','','','',''],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) nodeList[i].innerHTML = defaultDate } function addZero(numb){return numb<10?'0'+numb:numb} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

let date = new Date()
year = date.getFullYear()
let l = document.getElementsByClassName('cur-year').length;
for(let i = 0; i < l; i++)
{
    document.getElementsByClassName('cur-year')[i].innerHTML = year;
}


$(document).ready(function() {

    // Фіксований sidebar. Argument: Class_Name (string). Default: 'sticky'
    setTimeout(postFixedSidebar(), 1000);
  
  });
  
  function postFixedSidebar() {
  
    var sticky = $('.sticky-wrapper');
    var stickyTop = 908 + Number(pageYOffset);
    var outerWidth = sticky.outerWidth();
  
    $(window).scroll(fixedScrolling);
  
    function isScreen() {
        var winTop = $(window).scrollTop();
        return (stickyTop <= winTop);
    }
  
    function fixedScrolling() {
        if (isScreen()) sticky.addClass('fixed').css({ maxWidth: outerWidth });
        else sticky.removeClass('fixed');
    }
  }