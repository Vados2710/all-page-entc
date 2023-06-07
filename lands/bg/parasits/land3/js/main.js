(function () {
  'use strict';

  var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
      monthMin = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
      days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
      daysMin = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
      seasons = ["зима", "весна", "лето", "осень"];

  function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {
    var _counterLength = 60;

    for (var counter = 0; counter < _counterLength; counter++) {
      innerDate(counter, 'date-');
      innerDate(counter, 'date');
    }

    function innerDate(counter, dateType) {
      var newCounter;
      dateType === 'date-' ? newCounter = -counter : newCounter = counter;

      var _msInDay = 86400000,
          _localDate = new Date(Date.now() + newCounter * _msInDay),
          _day = _localDate.getDate(),
          _month = _localDate.getMonth() + 1,
          _year = _localDate.getFullYear();

      var dayDefault = addZero(_day),
          monthDefault = addZero(_month),
          defaultDate = dayDefault + '.' + monthDefault + '.' + _year;
      var dateClass = dateType + counter,
          nodeList = document.querySelectorAll('.' + dateClass);

      for (var i = 0; i < nodeList.length; i++) {
        var dateFormat = nodeList[i].dataset.format;
        dateFormat !== undefined && dateFormat !== '' ? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat)) : nodeList[i].innerHTML = defaultDate;
      }
    }

    function changeFormat(_day, _month, _year, format, counter) {
      var innerFormat = format;
      var testFormat = ["dd", "mm", "yyyy", "monthFull", "season"],
          dateFormat = {
        dd: _day,
        mm: addZero(_month),
        yyyy: _year,
        monthFull: getMonthName(_month, monthsName, false),
        season: getSeasonsName(seasonsName, _month, false)
      };

      for (var i = 0; i < testFormat.length; i++) {
        var string = testFormat[i];
        var regExp = new RegExp(string);
        innerFormat = innerFormat.replace(regExp, dateFormat[string]);
      }

      return innerFormat.split(' ').join(' ');
    }

    function getMonthName(_month, monthsName, bigFirstLetter, counter) {
      var monthCounter = !!counter ? counter : 0;
      var month;
      _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter;
      _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter;
      return changeFirstLetter(bigFirstLetter, monthsName[month - 1]);
    }

    function getSeasonsName(array, month, bigFirstLetter) {
      var monthNumber = month === 12 ? 0 : month,
          seasonIndex = monthNumber / 3 < 0 ? Math.ceil(monthNumber / 3) : Math.floor(monthNumber / 3);
      return changeFirstLetter(bigFirstLetter, array[seasonIndex]);
    }

    function addZero(numb) {
      return numb < 10 ? '0' + numb : numb;
    }

    function changeFirstLetter(isBig, str) {
      return isBig && str && str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str;
    }
  }

  if (document.body.classList.contains('ev-date')) {
    document.addEventListener("DOMContentLoaded", function () {
      postDate(days, daysMin, months, monthMin, seasons);
    });
  }

  $(document).on("click", "a[href^=\"#\"]", function (event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $($.attr(this, "href")).offset().top
    }, 1000);
  });

  var menuBtn = $('.menu-btn');
  var menu = $('.menu');
  menuBtn.click(function () {
    menuBtn.toggleClass('active');
    menu.toggleClass('active');
  });
  $('.menu a').click(function () {
    menuBtn.removeClass('active');
    menu.removeClass('active');
  }); // $(document).ready(function () {
  //   $('.consist__item').hover(function () {
  //     $('.consist__item').removeClass('hover');
  //     $(this).addClass('hover');
  //   });
  // });

  $(document).ready(function () {
    $('.reviews__slider').slick({
      slidesToShow: 1,
      dots: false,
      slidesToScroll: 1,
      mobileFirst: true,
      infinite: false,
      arrows: true,
      prevArrow: '<div class="reviews__arrow reviews__arrow-left animation-js"><svg width="52" height="23" viewBox="0 0 52 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.938852 10.851C0.353065 11.4368 0.353065 12.3866 0.938852 12.9723L10.4848 22.5183C11.0706 23.1041 12.0203 23.1041 12.6061 22.5183C13.1919 21.9325 13.1919 20.9827 12.6061 20.397L4.12083 11.9117L12.6061 3.4264C13.1919 2.84061 13.1919 1.89087 12.6061 1.30508C12.0203 0.719294 11.0706 0.719294 10.4848 1.30508L0.938852 10.851ZM1.99951 13.4117H51.9995V10.4117H1.99951V13.4117Z" fill="#434343"/></svg></div>',
      nextArrow: '<div class="reviews__arrow reviews__arrow-right animation-js"><svg width="52" height="23" viewBox="0 0 52 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M51.0597 12.9723C51.6455 12.3866 51.6455 11.4368 51.0597 10.851L41.5137 1.30508C40.928 0.719294 39.9782 0.719294 39.3924 1.30508C38.8066 1.89087 38.8066 2.84061 39.3924 3.4264L47.8777 11.9117L39.3924 20.397C38.8066 20.9827 38.8066 21.9325 39.3924 22.5183C39.9782 23.1041 40.928 23.1041 41.5137 22.5183L51.0597 12.9723ZM-0.000976562 13.4117H49.999V10.4117H-0.000976562V13.4117Z" fill="#434343"/></svg></div>',
      responsive: [{
        breakpoint: 479,
        settings: {
          dots: true
        }
      }, {
        breakpoint: 639,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 1023,
        settings: {
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }]
    });
    $(".reviews__item-btn").on("click", function () {
      $(this).parent().addClass('active');
    });
    $('.reviews__slider').on('beforeChange', function () {
      $(".reviews__item").removeClass('active');
    });
  });

}());
