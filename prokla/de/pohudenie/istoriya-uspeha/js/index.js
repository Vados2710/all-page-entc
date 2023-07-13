//postdate
const months=['januar','februar','märz','april','mai','juni','juli','august','september','oktober','november','dezember'],monthMin = ['','','','','','','','','','','',''],days = ['sonntag','montag','dienstag','mittwoch','donnerstag','freitag','samstag'],daysMin = ['','','','','','',''],seasons = ['Winter','Frühling','Sommer','Herbst'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function addZero(numb){return numb<10?'0'+numb:numb} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}



let reviews = function () {
  let commentFileText = $('.pust-comments__file-text');
  let commentFileInput = $('#file');
  let commentTextArea = $('.comment-area');
  let commentName = $('.reviews-form__name');

  commentFileInput.change(function (e) {
    commentFileText.html('Foto ist hochgeladen');
    commentFileText.css("color", "#237a27");
    commentFileText.addClass("loaded");
  });

  $('.reviews-form').submit(function (e) {
    if (commentTextArea.val() === '' || commentName.val() === '') {
      return false;
    }
    e.preventDefault();
    commentFileText.html('Foto hochladen');
    commentFileText.css("color", "#000");
    commentTextArea.val('');
    commentName.val('');
    alert('Danke! Ihr Kommentar wurde zur Moderation geschickt.');
    $('#push-comments').slideUp();
  });
};

reviews();

const commentFormToggleBtn = document.querySelector(".push-comments__btn"),
    commentFormBlock = document.querySelector("#push_pwjqgx9")

commentFormToggleBtn.addEventListener("click", function () {
  commentFormBlock.classList.toggle("active")
})

