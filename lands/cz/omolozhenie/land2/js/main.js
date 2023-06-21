(function () {
  'use strict';

const months=['leden','únor','březen','duben','květen','červen','červenec','srpen','září','říjen','listopad','prosinec'],monthMin = ['','','','','','','','','','','',''],days = ['neděle','pondělí','úterý','středa','čtvrtek','pátek','sobota'],daysMin = ['','','','','','',''],seasons = ['zimní','jaro','léto','podzim'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

  var scrollSmooth = (function () {
    $(document).on("click", "a[href^=\"#\"]", function (event) {
      event.preventDefault();
      $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top
      }, 500);
    });
  });

  function initSelect() {
    var inputSelect = $(".country-select").first(),
      customOptions = $(".options");
    var selected = $(".selected");
    var currentCountry = $(".country-select option:selected").first();
    var currentCountryCode = currentCountry.val();
    var selectedText = $("<span>", {
      class: "option__text",
      text: currentCountry.text()
    });
    selected.addClass(currentCountryCode);
    selectedText.appendTo(selected);

    function setOptions(select) {
      inputSelect.find("option").each(function (i, option) {
        var countryCode = option.value;
        var countryName = option.text;
        var link = $("<a>", {
          class: countryCode + " option",
          href: "?&country_code=".concat(option.value),
          "data-value": countryCode
        });
        var optionText = $("<span>", {
          class: "option__text",
          text: countryName
        });
        optionText.appendTo(link);

        if (countryCode !== currentCountryCode) {
          link.appendTo(customOptions);
        } else {
          link.prependTo(customOptions);
        }
      });
    }

    setOptions();
    $(window).on("click", function (e) {
      var target = $(e.target); // if (target.hasClass('selected')) {

      if (target.hasClass("custom-select") || target.hasClass("selected")) {
        // target.addClass('hide');
        target.parent().find(".options").addClass("opened");
      } else {
        // $('.hide').removeClass('hide');
        $(".opened").removeClass("opened");
      }
    });
  }

  initSelect();

  var Slider = function () {

    var reviewsSlider = $('.js-reviews-slider');
    return {
      initReviewsSlider: function initReviewsSlider() {
        reviewsSlider.slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 2
            }
          }, {
            breakpoint: 640,
            settings: {
              slidesToShow: 1
            }
          }, {
            breakpoint: 481,
            settings: {
              slidesToShow: 1
            }
          }]
        });
      },
      init: function init() {
        Slider.initReviewsSlider();
      }
    };
  }();

  var banner = (function () {
    $(window).on("scroll resize", function () {
      hideBannerScroll(".x_order_form", ".footer"); // сюда через запятую дописываем классы блоков, которые должны скрыть баннер
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

  var Controls = function () {

    var linkToTarget = $(".js-scroll");
    return {
      scrollToTarget: function scrollToTarget() {
        linkToTarget.click(function (e) {
          e.preventDefault();

          var _this = $(this);

          var href = _this.attr("href");

          var target = $(href);
          var top = target.offset().top;
          $("html, body").animate({
            scrollTop: top
          }, 1000);
        });
      },
      init: function init() {
        Controls.scrollToTarget();
      }
    };
  }();

  function main() {
    scrollSmooth();
    Slider.init();
    banner();
    Controls.init();

    function randomInteger(min, max) {
      var rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }

    var counter = 1;
    setInterval(function () {
      var randNum = randomInteger(27, 47);

      if (counter == 1) {
        $(".js-online").fadeOut(1100, function () {
          $(this).text("116 prodejů za poslední hodinu");
        }).fadeIn();
        counter = 0;
      } else {
        $(".js-online").fadeOut(1100, function () {
          $(this).text("Nyní je na webu " + randNum + " lidí");
        }).fadeIn();
        counter = 1;
      }
    }, 6000);
  }

  if (document.documentElement.clientWidth < 480) {
    window.addEventListener("scroll", function () {
      return setTimeout(main, 1000);
    }, {
      once: true
    });
  } else {
    main();
  }

}());