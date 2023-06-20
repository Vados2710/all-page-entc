// $(document).ready(function() {
//   var flag = true;
//   function showPopup() {
//     $(window).mouseout(function(e) {
//        if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
//            $('.modal').fadeIn(300);
//            flag = false;
//        }
//     });
//     $(".modal-flex").on('click', function(event) {
//          if ($(event.target).is($(".modal-flex")) || $(event.target).is(".modal-close")) {
//              $('.modal').fadeOut(300);
//          }
//      });
//   }

  //проверка браузера с которого зашли и разрешения экрана
//   if(($(window).width() > 1023))   {
//     showPopup();
//   }
// });
// var close = document.querySelector(".modal-close");
// var button = document.querySelector(".modal-btn");
// function hidePopup() {
//   $(".modal").fadeOut(300);
// }

// button.addEventListener('click', hidePopup);
// close.addEventListener('click', hidePopup);



// $(document).on('click', 'a[href^="#"]', function (event) {
//   event.preventDefault();

//   $('html, body').animate({
//       scrollTop: $($.attr(this, 'href')).offset().top
//   }, 1000);
// });
// $(document).ready(function () {
//   $("a").attr('data-scroll', '.form-wrapper');
//   $(function () {
//       $('a').click(function (evt) {
//           evt.preventDefault();
//           var target = $(this).attr('data-scroll');
//           $("html, body").animate({scrollTop: $(target).offset().top - 20}, "slow");
//       });
//   });
// });
const months=['leden','únor','březen','duben','květen','červen','červenec','srpen','září','říjen','listopad','prosinec'],monthMin = ['','','','','','','','','','','',''],days = ['neděle','pondělí','úterý','středa','čtvrtek','pátek','sobota'],daysMin = ['','','','','','',''],seasons = ['zimní','jaro','léto','podzim'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

var reviews = (function() {

  var inputFile = $('.input-file');
  var labelFile = $('.input-file');
  var reviewsPopup = $('.reviews-popup');
  var fileText = $('.reviews-form__file-text');
	var inputName = $('.inputName');
	var inputLastName = $('.inputLastName');
	var inputText = $('.inputText');

  inputFile.change(function(e) {
		fileText.html('Fotka nahrána');
		fileText.css("color", "#237a27");
    labelFile.addClass('rloaded');
  });
  $('.reviews-form').submit(function(event) {
      event.preventDefault();
      reviewsPopup.fadeIn();
      setTimeout(function() {
        reviewsPopup.fadeOut();
      }, 2000);
			fileText.html('Nahrát fotografii');
			fileText.css("color", "#000");
      labelFile.removeClass('rloaded');
			inputName.val('');
			inputLastName.val('');
      inputText.val('');
  });
});
reviews();