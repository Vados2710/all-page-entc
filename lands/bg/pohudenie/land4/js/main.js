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

  $(".review__btn").click(function () {
    $(this).prev().toggleClass('active');
  });

  function main() {
    var menuBtn = $('.menu-btn');
    var menu = $('.menu');
    menuBtn.click(function () {
      menuBtn.toggleClass('active');
      menu.toggleClass('active');
    });
    $('.menu a').click(function () {
      menuBtn.removeClass('active');
      menu.removeClass('active');
    });
    $('.reviews__slider').slick({
      slidesToShow: 1,
      dots: false,
      slidesToScroll: 1,
      mobileFirst: true,
      infinite: true,
      arrows: true,
      prevArrow: '<div class="reviews__arrow reviews__arrow-left animation-js slick-prev"></div>',
      nextArrow: '<div class="reviews__arrow reviews__arrow-right animation-js slick-next"></div>',
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
          slidesToScroll: 1
        }
      }, {
        breakpoint: 1023,
        settings: {
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }]
    });
    var inputFile = $(".input-file");
    var labelFile = $(".reviews-form__file");
    var fileText = $(".reviews-form__file-text");
    var fileImg = $(".reviews-form__file-img img");
    var fileIcon = $(".reviews-form__checkmark-icon");
    var fileFlag = true;
    inputFile.change(function (e) {
      if (inputFile.val() && fileFlag) {
        fileText.html("Фото загружено!");
        fileImg.hide();
        fileIcon.show();
        labelFile.addClass("rloaded");
        fileFlag = false;
      }
    });
    inputFile.click(function () {
      if (!fileFlag) {
        return false;
      }
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
      if (iName == "" || iSname == "" || iCity == "" || iMassage == "") ;else {
        event.preventDefault();
        $('.feedback-modal').addClass('active-feed');
        setTimeout(function () {
          $('.feedback-modal').removeClass('active-feed');
        }, 3000);
        fileText.html('Загрузить ваше фото');
        labelFile.removeClass('rloaded');
        $('.think__input').val('');
        $('.inputText').val('');
        $('.think').removeClass('active-feed');
        $('.reviews-form__checkmark-icon').hide();
      }
    });
  }

  window.addEventListener("load", main);

}());
