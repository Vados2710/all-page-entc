const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['','','','','','','','','','','',''],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) nodeList[i].innerHTML = defaultDate } function addZero(numb){return numb<10?'0'+numb:numb} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

jQuery(document).ready(function ($) {

  // -------------spin-------------------
  var resultWrapper = $('.spin-popup');
  var wheel = $('.wheel-img');
  var popupIsOpen = false;

  $('.cursor-text').on("click", function (event) {
    $(this).off(event);
    if (!wheel.hasClass('rotated')) {
      wheel.addClass('super-rotation');
      setTimeout(function () {
        resultWrapper.css({
          'display': 'block'
        });
        popupIsOpen = true;
        $('.spin-inner').slideUp();
        $('.product-inner').slideDown();
        $('.order-form__subtitle').fadeIn();
      }, 8000);
      wheel.addClass('rotated');
    }
  });

  // --------------POPUP-------------------
  function closingPopup() {
    if (popupIsOpen) {
      popupIsOpen = false;
      resultWrapper.fadeOut();
      $('body,html').animate({
        scrollTop: $('#ordera0').offset().top - 15
      }, 400);
      $('.close-popup, .popup-button').unbind("touchend, click");
    }
  }

  $(document).keydown(function (e) {
    if (e.keyCode === 27 && popupIsOpen) {
      closingPopup();
    }
  });

  $('.close-popup, .popup-button').on("touchend, click", function (e) {
    e.preventDefault();
    closingPopup();
  });
});