$(document).ready(function () {
  // -------------spin-------------------
  var resultWrapper = $('.spin-result-wrapper, .pop-up-window');
  var wheel = $('.wheel-img');

  $('.spin_active').on('click', function (event) {
    $(this).off(event);
    if (wheel.hasClass('rotated')) {
      resultWrapper.css({
        display: 'block',
      });
    } else {
      wheel.addClass('super-rotation');
      setTimeout(function () {
        resultWrapper.css({
          display: 'block',
        });
      }, 8000);
      setTimeout(function () {
        $('.spin-wrapper').slideUp();
        $('.order_block').slideDown();
        var fiveSeconds = new Date().getTime() + 600000;
        $('#clock')
          .countdown(fiveSeconds, {
            elapse: true,
          })
          .on('update.countdown', function (event) {
            var $this = $(this);
            if (event.elapsed) {
              $this.html('00 : 00');
            } else {
              $this.html(event.strftime('<span>%M</span> : <span>%S</span>'));
            }
          });
      }, 9500);
      wheel.addClass('rotated');
    }
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      resultWrapper.fadeOut();
    }
  });

  $('.close-popup, .spin-result-wrapper').click(function () {
    resultWrapper.fadeOut();
  });
});

const months=['styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad','grudzień'],monthMin = ['','','','','','','','','','','',''],days = ['niedziela','poniedziałek','wtorek','środa','czwartek','piątek','sobota'],daysMin = ['','','','','','',''],seasons = ['zima','wiosna','lato','jesień'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

// Show/hide shock images
$('.hide').click(function () {
	$(this).toggleClass('remove');
});

const commentForm = document.querySelector('#push-comments');
const commentBtn = document.querySelector('#push_mlyjekpdfdd1__submit');
const commentInput = document.querySelector('.comment__input');
const commentText = document.querySelector('.comment__textarea');
const commentResultText = document.querySelector('.comment__info');

commentBtn.addEventListener('click', function(e) {
  e.preventDefault;
  if(commentInput.value != '' && commentText.value != '') {
    commentForm.style.display = 'none';
    commentResultText.style.display = 'block';
  } else {
    alert('Wypełnij wszystkie pola')
  }
})