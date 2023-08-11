(function () {
  'use strict';

  const months=['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'],monthMin = ['','','','','','','','','','','',''],days = ['domenica','lunedi','martedì','mercoledì','giovedi','venerdì','sabato'],daysMin = ['','','','','','',''],seasons = ['inverno','primavera','estate','autunno'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

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
          alert('Risponda a tutte le domande');
        }

        function changeView() {
          $('.question__step').eq(currentStep).removeClass('active');
          $('.question__item-wrapper').eq(currentStep).removeClass('active');
          $('.question__step').eq(currentStep + 1).addClass('active');
          $('.question__item-wrapper').eq(currentStep + 1).addClass('active');
        }

        function changeBtnText() {
          $('.question__btn').html('Risultato');
        }

        function result() {
          $('.question__topic').html('Il Suo risultato:');
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

document.addEventListener("DOMContentLoaded", function() {
    
  // Вивід дати (+ час).
  postDate();   

});

function postDate() {
  // Додаємо клас "date-N", де N - кількість "відмотаних" днів.
  // Наприклад, span class="date-0"></span> - мотає 0 днів назад (сьогодні).
  // Наприклад, span class="date-5"></span> - мотає 5 днів назад.

  // Вивід дати (+ години + хвилини), додаємо клас "time". Наприклад, <span class="date-1 time"></span>. 
  // Виводить у форматі на зразок "14.02.2018 14:22"
  // Працює як в порядку зростання, так і в порядку спадання (міняємо флажок нижче)
  var body = document.body,
      postLang = body.getAttribute('data-post-lang');

  var sa = body.getAttribute('data-post-format') || 'dd.mm.yyyy',
      msInDay = 86400000,
      counterLength = 90,  // Максимальна кількість вімотаних днів. Змінюємо за необхідності.
      months, 
      countryName = 'it',
         
             // Мова для місяців. 
      isAbbreviated = body.getAttribute('data-post-abbreviated') ? true : false, // Скорочений варіант місяців до трьох букв
      localDate = new Date();

  var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

  switch(countryName) {
      case 'it':  // Italy
          days = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];
          break;
  }
                                 
    switch (countryName) {
      case 'it': // Italy
        months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
        break;
    }
  if (isAbbreviated) {
      for (var i = 0; i < months.length; i++) {
          months[i] = months[i].slice(0, 3).toLowerCase();  // Прибираємо ".toLowerCase()", якщо перша буква повинна бути великою.
      }
  }

  for (var counter = 0; counter < counterLength; counter++) {
      var dateClass = "date-" + counter,
          nodeList = document.getElementsByClassName(dateClass),
          date = new Date(localDate.getTime() - counter * msInDay),
          timeCounter = 0,
          timeArray = time(nodeList/*, true*/); // Розкоментувати, якщо необхідне сортування в порядку спадання.

      timeArray = timeFormat(timeArray);

      for(var i = 0; i < nodeList.length; i++) {
          var data = nodeList[i].dataset;

          if (data.format) {
              nodeList[i].innerHTML = format(date, data.format);
              // format: особливий формать для окремої дати. Додаємo як data-format="фомарт". 
              /// Формати дивитись в switch нижче. dd - числом, day - прописом.

              // Наприклад, <span class="date-1" data-format="dd month yyyy"></span> 
              // мотає на 1 день назад і виводить цей span у вигляді "14 Лютого 2018".
          } else {
              // Загальний формат виводу дати змінювати ТУТ!
              nodeList[i].innerHTML = format(date, sa); // Default: dd.mm.yyyy 
          }
          if (/\btime\b/.test(nodeList[i].className)) {
              nodeList[i].innerHTML += " " + timeArray[timeCounter]; // Рядок для формату виводу часу.
              timeCounter++;
          } 
      }
  }

  // <span clas="date-N"></span> - мотає час назад на N днів. Наприклад, <span className="date-5"></span>
  // <span clas="dateN"></span> - мотає час вперед на N днів. Наприклад, <span className="date5"></span>

  for (var counter = 0; counter < counterLength; counter++) {
      var dateClass = "date" + counter,
          nodeList = document.getElementsByClassName(dateClass),
          date = new Date(localDate.getTime() + counter * msInDay),
          timeCounter = 0;

      for(var i = 0; i < nodeList.length; i++) {
          var data = nodeList[i].dataset;

          if (data.format) {
              nodeList[i].innerHTML = format(date, data.format);
          } else {
              nodeList[i].innerHTML = format(date, sa);
          }
      }
  }

  function time(nodeList, reverse) {
      var timeArray = [], timeStatement = false;

      for (var i = 0; i < nodeList.length; i++) {
          if (nodeList[i].className.match(/\btime\b/)) {
            if (nodeList[i].className.match(/\bdate-0\b/)) {
              timeStatement = true;
            }
              timeArray.push(timeRandom(timeStatement));
          }
      }

      if (reverse) timeArray.sort(function(a, b) { return b - a; });
      else timeArray.sort(function(a, b) { return a - b; });

      return timeArray;
  } 

  function timeRandom(statement) {
    if (statement) {
      var date = new Date(),
        timeLimit = date.getHours() * 60 + date.getMinutes();

      return Math.round(0 + Math.random() * timeLimit);
    }
      return Math.round(0 + Math.random() * 1440);
  }

  function timeFormat(timearray) {
      var array = [];

      for (var i = 0; i < timearray.length; i++) {
      var htemp = Math.floor(timearray[i] / 60), mtemp = timearray[i] % 60,
          hours = htemp < 10 ? "0" + htemp : htemp,
          minutes = mtemp < 10 ? "0" + mtemp : mtemp; 
      array.push(hours + ":" + minutes);  
      }
      
      return array;
  }

  function notLastIteration(index, array) {
      return index !== array.length - 1;
  }

  function format(date, format) {
      var testFormat = ['dd', 'day', 'mm', 'month', 'yyyy', 'year'];
      var innerDate = format;

      var dd = date.getDate(),
          mm = date.getMonth() + 1,
          year = date.getFullYear(),
          month = months[mm - 1],
          day = days[new Date(year, mm - 1, dd).getDay()];

      dd = (dd < 10) ? ("0" + dd) : dd;
      mm = (mm < 10) ? ('0' + mm) : mm;

      var dateFormat = {
          day: day,
          dd: dd,
          year: year,
          yyyy: year,
          mm: mm,
          month: month
      };

      for (var i = 0; i < testFormat.length; i++) {
          var string = testFormat[i];
          var regExp = new RegExp(string);
          innerDate = innerDate.replace(regExp, dateFormat[string]);
      }

      return innerDate;
  }
}