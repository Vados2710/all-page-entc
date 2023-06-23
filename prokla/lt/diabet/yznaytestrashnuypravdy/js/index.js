const months=['sausis','vasaris','kovas','balandis','gegužės','birželis','liepa','rugpjūtis','rugsėjis','spalis','lapkritis','gruodis'],monthMin = ['','','','','','','','','','','',''],days = ['sekmadienis','pirmadienis','antradienis','trečiadienis','ketvirtadienis','penktadienis','šeštadienis'],daysMin = ['','','','','','',''],seasons = ['žiema','pavasaris','vasara','ruduo'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}


$(document).ready(function () {
    var flag = true;

    $(window).mouseout(function (e) {
        if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
            $('.demon_popup').fadeIn(300);
            flag = false;
        }
    });


    $('.demon_close, .popup_btn, .demon_overflow').click(function () {
        $('.demon_popup').fadeOut(300);
    });

    $('.demon_popup').click(function (e) {
        e.stopPropagation();
    });
});

var reviews = (function() {
    var inputFile = $('.input-file');
    var reviewsPopup = $('.reviews-popup');
    var fileText = $('.reviews-form__file-text');
    var name = $('.inL_1500');
    var text =  $('#push_mlyjekpdfdd1__message');
    var inputCity = $('.input-city');
    inputFile.change(function(e) {
      fileText.html('Фотография загружена');
    });
    $('.reviews-form').submit(function() {
        reviewsPopup.fadeIn();
        event.preventDefault();
        setTimeout(function() {
          reviewsPopup.fadeOut();
        }, 2000);
        fileText.html('Загрузите фото');
        name.val('');
        text.val('');
        inputCity.val('');
  
    });
  });
  reviews();

  
function toggleAdultPicture () {
  let photos = document.querySelectorAll('.adult')
  for(let i = 0; i < photos.length; i++) {
      photos[i].addEventListener('click', function(e) {
          e.currentTarget.classList.toggle('adult--open')
      })
  }
}

toggleAdultPicture ()