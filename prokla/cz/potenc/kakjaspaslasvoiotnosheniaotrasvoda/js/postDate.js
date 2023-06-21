const months=['leden','únor','březen','duben','květen','červen','červenec','srpen','září','říjen','listopad','prosinec'],monthMin = ['','','','','','','','','','','',''],days = ['neděle','pondělí','úterý','středa','čtvrtek','pátek','sobota'],daysMin = ['','','','','','',''],seasons = ['zimní','jaro','léto','podzim'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

var wheel = document.querySelector('.wheel-img');
var resultWrapper = document.querySelector('.spin-result-wrapper');
// направляем все ссылки на форму, если это ленд

// запускаем колесо по клику
$('.cursor-text').click(function() {
  if (wheel.classList.contains('rotated')) {
    resultWrapper.style.display = "block";
  } else {
    wheel.classList.add('super-rotation');
    setTimeout(function() {
      resultWrapper.style.display = "block";
    }, 8000);
    setTimeout(function() {
        $('.spin-wrapper').slideUp();
        $('.order_block').slideDown();
      start_timer();
      
    }, 10000);
    wheel.classList.add('rotated');
  }
});
  $('.close-popup, .pop-up-button').click(function(e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();
    var top = $('#toform').offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 800);
  });

  var time = 600;
  var intr;
  
     function start_timer() {
      intr = setInterval(tick, 1000);
    }
  
  
  function tick() {
    time = time - 1;
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
      clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0" + secs;
      mins = mins >= 10 ? mins : "0" + mins;
    $("#min").html(mins);
    $("#sec").html(secs);
  }

  $('a[href="#"], .vk-comment-like-count, .header').click(function(e) {
    var top = $('.toform').offset().top;
    e.preventDefault();
    $('body,html').animate({
      scrollTop: top
    }, 800);
  });
     