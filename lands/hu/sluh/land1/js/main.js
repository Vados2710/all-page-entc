(function () {
  'use strict';
const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

  var scrollSmooth = (function () {
    $(document).on("click", "a[href^=\"#\"]", function (event) {
      event.preventDefault();
      $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top
      }, 500);
    });
  });

  var header = (function () {
    $(".header__burger").click(function () {
      $(".header__content").toggleClass('active');
      $(this).toggleClass('active');
    });
    $(".header__link").click(function () {
      $(".header__content").removeClass('active');
      $(".header__burger").removeClass('active');
    });
    $(".header__btn").click(function () {
      $(".header__content").removeClass('active');
      $(".header__burger").removeClass('active');
    });
  });

  var elements = (function () {
    var windowHeight = $(window).height();

    function animationA(params) {
      $(params).each(function () {
        var self = $(this),
            height;

        if (self.height() >= windowHeight) {
          height = self.offset().top + windowHeight - 100;
        } else {
          height = self.offset().top + self.height();
        }

        if ($(document).scrollTop() + windowHeight >= height) {
          self.addClass("show");
        }
      });
    }

    $(document).on("scroll", function () {
      animationA('.sings');
      animationA('.problem');
      animationA('.technology__content');
      animationA('.composition');
      animationA('.reviews');
    });
  });

  var reviews = (function () {
    $('.reviews__slider').slick({
      slidesToShow: 1,
      dots: true,
      slidesToScroll: 1,
      mobileFirst: true,
      adaptiveHeight: true,
      infinite: false,
      prevArrow: '<svg class="reviews__arrow reviews__arrow-left" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" x="0px" y="0px" viewBox="0 0 493.456 493.456" style="enable-background:new 0 0 493.456 493.456;" xml:space="preserve"><g><g><path d="M246.73,0C110.682,0,0.002,110.68,0.002,246.736c0,136.036,110.68,246.72,246.728,246.72s246.724-110.684,246.724-246.72C493.454,110.68,382.778,0,246.73,0z M321.138,250.492L210.822,360.804c-2.004,2.008-5.548,2.008-7.556,0l-8.98-8.968c-2.076-2.084-2.072-5.48,0.004-7.564l94.952-94.94c0.712-0.72,1.116-1.7,1.116-2.732c0-1.016-0.408-2.004-1.116-2.72l-94.78-94.776c-1-1-1.56-2.344-1.56-3.792c0-1.42,0.556-2.772,1.556-3.764l8.968-8.976c1.004-1,2.352-1.556,3.78-1.556c1.436-0.008,2.772,0.556,3.776,1.556l110.156,110.152c1.02,1.016,1.572,2.372,1.552,3.936C322.71,248.116,322.158,249.476,321.138,250.492z"/></g></g></svg>',
      nextArrow: '<svg class="reviews__arrow reviews__arrow-right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" x="0px" y="0px" viewBox="0 0 493.456 493.456" style="enable-background:new 0 0 493.456 493.456;" xml:space="preserve"><g><g><path d="M246.73,0C110.682,0,0.002,110.68,0.002,246.736c0,136.036,110.68,246.72,246.728,246.72s246.724-110.684,246.724-246.72C493.454,110.68,382.778,0,246.73,0z M321.138,250.492L210.822,360.804c-2.004,2.008-5.548,2.008-7.556,0l-8.98-8.968c-2.076-2.084-2.072-5.48,0.004-7.564l94.952-94.94c0.712-0.72,1.116-1.7,1.116-2.732c0-1.016-0.408-2.004-1.116-2.72l-94.78-94.776c-1-1-1.56-2.344-1.56-3.792c0-1.42,0.556-2.772,1.556-3.764l8.968-8.976c1.004-1,2.352-1.556,3.78-1.556c1.436-0.008,2.772,0.556,3.776,1.556l110.156,110.152c1.02,1.016,1.572,2.372,1.552,3.936C322.71,248.116,322.158,249.476,321.138,250.492z"/></g></g></svg>',
      responsive: [{
        breakpoint: 639,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          adaptiveHeight: false
        }
      }, {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 1329,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          prevArrow: '<svg class="reviews__arrow reviews__arrow-left" xmlns="http://www.w3.org/2000/svg" width="45" height="28" viewBox="0 0 45 28"><g><g><path d="M0 13h.517L11.435.147l1.414 1.415L3.133 13H45v2H3.14l9.71 11.43-1.415 1.417L.525 15H0z"/></g></g></svg>',
          nextArrow: '<svg class="reviews__arrow reviews__arrow-right" xmlns="http://www.w3.org/2000/svg" width="45" height="28" viewBox="0 0 45 28"><g><g><path d="M0 13h.517L11.435.147l1.414 1.415L3.133 13H45v2H3.14l9.71 11.43-1.415 1.417L.525 15H0z"/></g></g></svg>'
        }
      }]
    });
    $('.reviews__slider').on('beforeChange', function () {
      allTextRev.removeClass('show');
      moreRev.removeClass('active');
    });
    var allTextRev = $('.reviews__item-text');
    var moreRev = $('.reviews__item-more');
    moreRev.on('click', function () {
      var parent = $(this).parent();
      var text = parent.children('.reviews__item-text');
      var btn = parent.children('.reviews__item-more');

      if (!text.hasClass('show')) {
        text.addClass('show');
        allTextRev.not(text).removeClass('show');
        moreRev.removeClass('active');
        btn.addClass('active');
      } else {
        text.removeClass('show');
        btn.removeClass('active');
      }
    });
  });

  function main() {
    scrollSmooth(); // bannerScroll();

    reviews();
    elements();
  }

  if (document.documentElement.clientWidth < 480) {
    window.addEventListener("scroll", function () {
      return setTimeout(main, 1000);
    }, {
      once: true,
      passive: true
    });
  } else {
    main();
  }

  header();
  document.addEventListener('DOMContentLoaded', function () {
    function showDecor() {
      $('.promo-bg').addClass('show');
    }

    setTimeout(showDecor, 700);
  });

}());
