(function () {
  'use strict';

  const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['','','','','','','','','','','',''],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

  var scrollSmooth = (function () {
    $(document).on("click", "a[href^=\"#\"]", function (event) {
      event.preventDefault();

      if (window.innerWidth >= 1220) {
        switch ($(this).attr("href")) {
          case '#expert':
            $("html, body").animate({
              scrollTop: $($.attr(this, "href")).offset().top - 105
            }, 500);
            break;

          case '#reviews':
            $("html, body").animate({
              scrollTop: $($.attr(this, "href")).offset().top + 300
            }, 500);
            break;

          case '#order':
            $("html, body").animate({
              scrollTop: $($.attr(this, "href")).offset().top + 150
            }, 500);
            break;

          default:
            $("html, body").animate({
              scrollTop: $($.attr(this, "href")).offset().top
            }, 500);
        }
      } else {
        $("html, body").animate({
          scrollTop: $($.attr(this, "href")).offset().top
        }, 500);
      }
    });
  });

  var header = (function () {
    $(function () {
      var $navElement = $('.header__menu-wrapper');
      var $navOpen = $('.header__button');
      var $navClose = $('.header__menu-close');
      var $navmob = $('.header__menu');

      var show = function show() {
        $navElement.fadeIn();
        $navmob.fadeIn();
        $(document.documentElement).css('overflow', 'hidden');
      };

      var hide = function hide() {
        $navElement.fadeOut();
        $navmob.fadeOut();
        $(document.documentElement).css('overflow', 'auto');
      };

      $navOpen.click(function (evt) {
        evt.preventDefault();
        show();
      });
      $navClose.click(function (evt) {
        evt.preventDefault();
        hide();
      });
      $navElement.click(function (evt) {
        evt.preventDefault();
        hide();
      });
      $('.nav__link').on('click', function (evt) {
        evt.preventDefault();
        hide();
        var id = $(this).attr('href');
        if (!id) return;
        var top = $(id).offset().top + 1;
        $('body,html').animate({
          scrollTop: top
        }, 500);
      });
    });
  });

  var composition = (function () {
    $(document).ready(function () {
      $('.composition__item').hover(function () {
        $('.composition__item').removeClass('hover');
        $(this).addClass('hover');
      });
    });
  });

  var info = (function () {
    $(document).ready(function () {
      $('.info__item-mask').hover(function () {
        $('.info__item-mask').parent().removeClass('hover');
        $(this).parent().addClass('hover');
      });
      $('.info__item-mask').mouseleave(function () {
        $(this).parent().removeClass('hover');
      });
    });
  });

  var statistics = (function () {
    $(document).ready(function () {
      $('.statistics__item-1').hover(function () {
        $('.statistics__element-2').removeClass('hover');
        $('.statistics__element-3').removeClass('hover');
        $('.statistics__element-1').addClass('hover');
      });
      $('.statistics__item-2').hover(function () {
        $('.statistics__element-1').removeClass('hover');
        $('.statistics__element-3').removeClass('hover');
        $('.statistics__element-2').addClass('hover');
      });
      $('.statistics__item-3').hover(function () {
        $('.statistics__element-1').removeClass('hover');
        $('.statistics__element-2').removeClass('hover');
        $('.statistics__element-3').addClass('hover');
      });
      $('.statistics__item').mouseleave(function () {
        $('.statistics__element').removeClass('hover');
      });
    });
  });

  var reviews = (function () {
    $(document).ready(function () {
      $(".reviews__item-btn").on("click", function () {
        if ($(this).hasClass('active')) {
          $(this).parent().toggleClass('active');
          $(this).toggleClass('active');
        } else {
          $(".reviews__item").removeClass('active');
          $(".reviews__item-btn").removeClass('active');
          $(this).parent().toggleClass('active');
          $(this).toggleClass('active');
        }
      });
      $('.reviews__slider').slick({
        slidesToShow: 1,
        dots: false,
        slidesToScroll: 1,
        mobileFirst: true,
        infinite: false,
        arrows: true,
        prevArrow: '<div class="reviews__arrow reviews__arrow-left animation-js"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="8" viewBox="0 0 51 8" fill="none"><path d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM1 4.5H51V3.5H1V4.5Z" fill="#6F283B"/></svg></div>',
        nextArrow: '<div class="reviews__arrow reviews__arrow-right animation-js"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="8" viewBox="0 0 51 8" fill="none"><path d="M50.3536 4.35355C50.5488 4.15829 50.5488 3.84171 50.3536 3.64645L47.1716 0.464466C46.9763 0.269204 46.6597 0.269204 46.4645 0.464466C46.2692 0.659728 46.2692 0.976311 46.4645 1.17157L49.2929 4L46.4645 6.82843C46.2692 7.02369 46.2692 7.34027 46.4645 7.53553C46.6597 7.7308 46.9763 7.7308 47.1716 7.53553L50.3536 4.35355ZM0 4.5H50V3.5H0V4.5Z" fill="#6F283B"/></svg></div>'
      });
      $('.reviews__slider').on('beforeChange', function () {
        $(".reviews__item").removeClass('active');
        $(".reviews__item-btn").removeClass('active');
      });
      $('.reviews__slider').on('afterChange', function (event, slick) {
        $(".reviews__counter-current").text(parseInt(slick.currentSlide + 1));
      });
    });
  });

  var animation = (function () {
    $(document).ready(function () {
      var animateItems = $('.animation__block');
      $(window).scroll(function () {
        animateItems.each(function (index, element) {
          if ($(window).scrollTop() + $(window).height() > $(element).offset().top + $(element).innerHeight() / 4) {
            $(element).addClass('animation');
            $(element).find('.animation-js').addClass('animation');
          }
        });
      });
    });
  });

  $(document).ready(function () {
    $('.action-form__field').val('');
  });
  header();

  function main() {
    scrollSmooth();
    composition();
    info();
    statistics();
    reviews();
    animation();
  }

  if (document.documentElement.clientWidth < 480) {
    window.addEventListener('scroll', function () {
      return setTimeout(main, 1000);
    }, {
      once: true
    });
  } else {
    main();
  }

}());
