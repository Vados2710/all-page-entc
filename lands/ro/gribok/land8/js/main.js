(function () {
  'use strict';
const months = ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'],
  monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''],
  days = ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă'],
  daysMin = ['', '', '', '', '', '', ''],
  seasons = ['iarnă', 'arc', 'vară', 'toamnă'];

function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {
  const _counterLength = 60;
  for (let counter = 0; counter < _counterLength; counter++) {
    innerDate(counter, 'date-');
    innerDate(counter, 'date')
  }

  function innerDate(counter, dateType) {
    let newCounter;
    dateType === 'date-' ? newCounter = -counter : newCounter = counter;
    const _msInDay = 86400000,
      _localDate = new Date(Date.now() + (newCounter * _msInDay)),
      _day = _localDate.getDate(),
      _month = _localDate.getMonth() + 1,
      _year = _localDate.getFullYear();
    const dayDefault = addZero(_day),
      monthDefault = addZero(_month),
      defaultDate = dayDefault + '.' + monthDefault + '.' + _year;
    const dateClass = dateType + counter,
      nodeList = document.querySelectorAll('.' + dateClass);
    for (let i = 0; i < nodeList.length; i++) {
      const dateFormat = nodeList[i].dataset.format;
      dateFormat !== undefined && dateFormat !== '' ? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)) : nodeList[i].innerHTML = defaultDate
    }
  }

  function changeFormat(_day, _month, _year, format, counter) {
    let innerFormat = format;
    const testFormat = ["dd", "mm", "yyyy", "monthFull"],
      dateFormat = {
        dd: _day,
        mm: addZero(_month),
        yyyy: _year,
        monthFull: getMonthName(_month, monthsName, false),
      };
    for (let i = 0; i < testFormat.length; i++) {
      let string = testFormat[i];
      let regExp = new RegExp(string);
      innerFormat = innerFormat.replace(regExp, dateFormat[string]);
    }
    return innerFormat.split(' ').join(' ')
  }

  function getMonthName(_month, monthsName, bigFirstLetter, counter) {
    const monthCounter = !!counter ? counter : 0;
    let month;
    _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter;
    _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter;
    return changeFirstLetter(bigFirstLetter, monthsName[month - 1])
  }

  function addZero(numb) {
    return numb < 10 ? '0' + numb : numb
  }

  function changeFirstLetter(isBig, str) {
    return isBig && str && str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str
  }
}
if (document.body.classList.contains('ev-date')) {
  document.addEventListener("DOMContentLoaded", function () {
    postDate(days, daysMin, months, monthMin, seasons)
  });
}

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

  var reviews = (function () {
    $(".reviews__content").on("afterChange", function (event, slick, currentSlide) {
      $(this).find(".slick-slide.text-open").not(".slick-active").removeClass("text-open");
    });
    $(".reviews-text__btn").on("click", function () {
      this.parentElement.classList.toggle("text-open");
      $(".reviews__content").find(".slick-slide.slick-active").height("auto");
      $(".reviews__content").find(".slick-list").height("auto");
    });
    $(".reviews__content").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      dots: true,
      prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" class="arrow-left" width="40" height="28" viewBox="0 0 40 28"><g><g ><path  d="M0 13h.52L11.435.153l1.414 1.413L3.135 13H40v2H3.137l9.712 11.435-1.414 1.415L.52 15H0z"/></g></g></svg>',
      nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" class="arrow-right" width="40" height="28" viewBox="0 0 40 28"><g><g><path  d="M0 13h36.865L27.151 1.566 28.565.152 39.48 13.001H40v2h-.52L28.565 27.85l-1.414-1.415L36.863 15H0z"/></g></g></svg>',
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          dots: false
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
        fileText.html("Fotografie încărcată!");
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

      if (iName == "" || iSname == "" || iCity == "" || iMassage == "") ; else {
        var centerEl = function centerEl() {
          $('html,body').stop().animate({
            scrollTop: $('.feedback-modal').offset().top - 40
          }, 1000);
          e.preventDefault();
        };

        event.preventDefault();
        $('.feedback-modal').addClass('active-feed');
        setTimeout(function () {
          $('.feedback-modal').removeClass('active-feed');
        }, 3000);
        fileText.html('Incarca-ti fotografia');
        labelFile.removeClass('rloaded');
        $('.think__input').val('');
        $('.inputText').val('');
        $('.think').removeClass('active-feed');
        $('.reviews-form__checkmark-icon').hide();
        setTimeout(centerEl, 800);
      }
    });
    $(".age__input").on("input", function () {
      $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ""));
    });
    $(".think-rating__star").click(function () {
      $(this).toggleClass('active');
      $(this).prevAll().addClass('active');
      $(this).nextAll().removeClass('active');
    });
  });

  function main() {
    scrollSmooth(); // bannerScroll();

    reviews();
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

  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function onlineUser() {
    $('.form-online__count').text(getRandom(95, 130));
  }

  setInterval(onlineUser, 10000);
  document.addEventListener('DOMContentLoaded', function () {
    function showDecor() {
      $('.promo, .promo__element-1, .promo__element-2').addClass('show');
    }

    setTimeout(showDecor, 700);
  });

}());
