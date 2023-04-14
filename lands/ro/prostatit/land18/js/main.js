(function () {
  'use strict';

  const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['','','','','','','','','','','',''],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

  var scrollSmooth = (function () {
    $(document).on("click", "a[href^=\"#\"]", function (event) {
      event.preventDefault();
      $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top
      }, 500);
    });
  });

  var header = (function () {
    $(function () {
      var $navElement = $('.header__menu-wrapper');
      var $navOpen = $('.header__button-mob');
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

  var banner = (function () {
    $(document).ready(function () {
      $(".banner").fadeOut();
      var isNavLink = false;
      $('.scroll-link').on('click', function () {
        isNavLink = true;
        setTimeout(function () {
          $('.banner').fadeIn();
          isNavLink = false;
        }, 600);
      });
      $(window).on("scroll resize", function () {
        if (!isNavLink) {
          hideBannerScroll(".header, .form, .action__form"); // сюда через кому дописываем классы блоков, которые должны скрыть баннер
        }
      });

      function hideBannerScroll() {
        var e = $(".banner"),
            t = $(".main-banner"),
            i = $(window).scrollTop(),
            o = i + $(window).height(),
            r = $(window).width();
        var n = 0;

        for (var _e = 0; _e < arguments.length; _e++) {
          $(arguments[_e]).each(function (e, t) {
            var a = $(t).offset().top,
                c = a + $(t).outerHeight(),
                s = $(t).offset().left,
                l = s + $(t).width();
            a <= o && c >= i && s <= r && l >= 0 && (n += 1);
          });
        }

        i <= 100 || n > 0 ? e.fadeOut() : e.fadeIn().css({
          bottom: t.outerHeight()
        });
      }
    });
  });

  var form = (function () {
    $(document).ready(function () {
      $('.action-form__field').val('');

      function randomInteger(min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }

      setInterval(function () {
        var randNum = randomInteger(7, 20);
        $(".visiters").fadeOut(1100, function () {
          $(this).text(randNum);
        }).fadeIn();
      }, 15000);
    });
  });

  var question = (function () {
    $(document).ready(function () {
      var currentStep = 0;
      $('.question__radio').prop('checked', false);
      $('.question__btn').click(function () {
        if ($('.question__item[data-step=' + currentStep + ']').find('.question__radio:checked').length === 2) {
          switch (currentStep) {
            case 0:
              changeView();
              currentStep++;
              break;

            case 1:
              changeView();
              changeBtnText();
              currentStep++;
              break;

            case 2:
              changeView();
              result();
              currentStep++;
              break;
          }
        } else {
          alert('Răspundeți la toate întrebările');
        }

        function changeView() {
          $('.question__step').eq(currentStep).removeClass('active');
          $('.question__item-wrapper').eq(currentStep).removeClass('active');
          $('.question__step').eq(currentStep + 1).addClass('active');
          $('.question__item-wrapper').eq(currentStep + 1).addClass('active');
        }

        function changeBtnText() {
          $('.question__btn').html('Rezultat');
        }

        function result() {
          $('.question__topic').html('Rezultatul dvs.:');
          $('.question__btn').off('click');
          $('.question__btn').hide();
          $('.question__list').hide();
        }
      });
    });
  });

  var reviews = (function () {
    $(".reviews-content").on("afterChange", function (event, slick, currentSlide) {
      $(this).find(".slick-slide.text-open").not(".slick-active").removeClass("text-open");
    });
    $(".reviews-text__btn").on("click", function () {
      this.parentElement.classList.toggle("text-open");
      $(".reviews-content").find(".slick-slide.slick-active").height("auto");
      $(".reviews-content").find(".slick-list").height("auto");
    });
    $(".reviews-content").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      dots: true,
      prevArrow: '<svg class="arrow-left" xmlns="http://www.w3.org/2000/svg" width="45" height="28" viewBox="0 0 45 28"><g><g><path d="M0 13h.517L11.435.147l1.414 1.415L3.133 13H45v2H3.14l9.71 11.43-1.415 1.417L.525 15H0z"/></g></g></svg>',
      nextArrow: '<svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" width="45" height="28" viewBox="0 0 45 28"><g><g><path d="M0 13h.517L11.435.147l1.414 1.415L3.133 13H45v2H3.14l9.71 11.43-1.415 1.417L.525 15H0z"/></g></g></svg>',
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      }]
    });

    $(".reviews__btn").click(function () {
      $('.think').addClass('active-feed');
      $(this).removeClass('active-feed');
    });
    $('.think__btn').click(function (event) {
      var iName = $(".name__input").val();
      var iSname = $(".age__input").val();
      var iCity = $(".city__input").val();
      var iMassage = $(".inputText").val();

      if (iName == "" || iSname == "" || iCity == "" || iMassage == "") ; else {
        event.preventDefault();
        $('.feedback-modal').addClass('active-feed');
        setTimeout(function () {
          $('.feedback-modal').removeClass('active-feed');
        }, 3000);
        $('.think__input').val('');
        $('.inputText').val('');
        $('.think').removeClass('active-feed');
        $('.reviews-form__checkmark-icon').hide();
      }
    });
  });


  header();


  function main() {
    scrollSmooth();
    banner();
    form();
    question();
    reviews();
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

