jQuery(document).ready(function ($) {


  $(".search input").keypress(function (e) {
    if (e.which == 13) {
      $(".search input").val('');
      $('body,html').animate({
        scrollTop: $('.features-wrapper ').offset().top - 10
      }, 1000);
    }
  });

});

let reviews = function () {
  let commentFileText = $('.pust-comments__file-text');
  let commentFileInput = $('#file');
  let commentTextArea = $('.comment-area');
  let commentName = $('.reviews-form__name');

  commentFileInput.change(function (e) {
    commentFileText.html('Fotogrāfija ielādēta');
    commentFileText.css("color", "#237a27");
    commentFileText.addClass("loaded");
  });

  $('.reviews-form').submit(function (e) {
    if (commentTextArea.val() == '' || commentName.val() == '') {
      return false;
    }
    e.preventDefault();
    commentFileText.html('Ielādējiet jūsu foto');
    commentFileText.css("color", "#000");
    commentTextArea.val('');
    commentName.val('');
    alert('Paldies! Jūsu atsauksme ir nosūtīta uz moderāciju.');
    $('#push-comments').slideUp();
  });
};

reviews();

// Focus/Blur
let inputs = document.querySelectorAll('.jsFocus');

for (let i = 0; i < inputs.length; ++i) {
  inputs[i].addEventListener('focus', function() {
    this.style.cssText = 'box-shadow: 1px 0px 4px 1px #00bee9;';
  });
  inputs[i].addEventListener('blur', function() {
    this.style.cssText = 'box-shadow: none'
  });
}


// Post Date
const months=['janvāris','februāris','marts','aprīlis','maijs','jūnijs','jūlijs','augusts','septembris','oktobris','novembris','decembris'],monthMin = ['','','','','','','','','','','',''],days = ['svētdiena','pirmdiena','otrdiena','trešdiena','ceturtdiena','piektdiena','sestdiena'],daysMin = ['','','','','','',''],seasons = ['ziema','pavasaris','vasara','rudens'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}