const months=['styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad','grudzień'],monthMin = ['','','','','','','','','','','',''],days = ['niedziela','poniedziałek','wtorek','środa','czwartek','piątek','sobota'],daysMin = ['','','','','','',''],seasons = ['zima','wiosna','lato','jesień'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) nodeList[i].innerHTML = defaultDate } function addZero(numb){return numb<10?'0'+numb:numb} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

let date = new Date()
year = date.getFullYear()
let l = document.getElementsByClassName('cur-year').length;
for(let i = 0; i < l; i++)
{
    document.getElementsByClassName('cur-year')[i].innerHTML = year;
}

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

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

  var resultWrapper = document.querySelector('.spin-result-wrapper');
  var wheel = document.querySelector('.wheel-img');
  
  function spin() {
      if (!wheel.classList.contains('rotated')) {
          wheel.classList.add('super-rotation');
          setTimeout(function () {
              resultWrapper.style.display = "block";
          }, 8000);
          setTimeout(function () {
              $('.spin-wrapper').slideUp();
              $('.form__wrapper').slideDown();
          }, 10000);
          wheel.classList.add('rotated');
      }
  }
  
var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();
    var top = $('#formBox').offset().top;
    $('body,html').animate({
        scrollTop: top
    }, 800);
});