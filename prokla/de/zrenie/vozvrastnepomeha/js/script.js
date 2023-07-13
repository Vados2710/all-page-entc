const months=['januar','februar','märz','april','mai','juni','juli','monat august','september','oktober','november','dezember'],monthMin = ['','','','','','','','','','','',''],days = ['sonntag','montag','dienstag','mittwoch','donnerstag','freitag','samstag'],daysMin = ['','','','','','',''],seasons = ['Winter','Frühling','Sommer','Herbst'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, true), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

var reviews = (function () {
  var reviewsCta = $('.reviews-cta');
  var inputFile = $('.input-file');
  var labelFile = $('.input-file');
  var reviewsInput = $('.reviews-input');
  var reviewsInputText = $('.reviews-input-text');
  var reviewsInputTextarea = $('.reviews-form__textarea');
  var reviewsInputName = $('.reviews-form__input-name');
  var reviewsPopup = $('.reviews-popup');
  var fileText = $('.reviews-form__file-text');
  var fileImg = $('.reviews-form__file-img img');
  var fileIcon = $('.reviews-form__checkmark-icon');
  var fileFlag = true;

  inputFile.change(function (e) {
    fileText.html('Foto ist hochgeladen');
    fileImg.hide();
    fileIcon.show();
    labelFile.addClass('rloaded');
    fileFlag = false;
  });

  $('.reviews-form').submit(function () {
    if (true) {
      reviewsPopup.fadeIn();
      event.preventDefault();
      setTimeout(function () {
        reviewsPopup.fadeOut();
      }, 2000);
      fileText.html('Foto hochladen');
      fileImg.show();
      fileIcon.hide();
      labelFile.removeClass('rloaded');
      $('.reviews-form__star').removeClass('filled');
      $('#push-comments').hide(300);
    } else {
      reviewsInputsWrap.each(function (i) {
        if (!reviewsInputsWrap[i].classList.contains('valid')) {
          reviewsInputsWrap[i].classList.add('invalid');
        }
      });
      event.preventDefault();
    }
  });
});

$('.spoiler').on('click', function(e) {
  e.target.classList.toggle('show');
  console.log(e.traget)
})