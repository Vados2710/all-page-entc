(function () {
    'use strict';

    if (document.body.classList.contains('ev-date')) {
      var postDate = function postDate() {
        var msInDay = 86400000,
            counterLength = 366,
            countryName = 'ro',
            // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн" і т.д, тоді ставим TRUE.
        localDate = new Date();
        var months;

        switch (countryName) {
          case 'ro':
            // Romania
            months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
            break;
        }

        for (var counter = 0; counter < counterLength; counter++) {
          var dateClass = "date-" + counter,
              nodeList = document.getElementsByClassName(dateClass),
              date = new Date(localDate.getTime() - counter * msInDay);
          var timeCounter = 0,
              timeArray = time(nodeList
          /*, true*/
          ); // Розкоментувати, якщо необхідне сортування в порядку спадання.

          timeArray = timeFormat(timeArray);

          for (var _i = 0; _i < nodeList.length; _i++) {
            var data = nodeList[_i].dataset;
            data.format ? nodeList[_i].innerHTML = format(date, data.format) // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
            // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
            : nodeList[_i].innerHTML = format(date
            /*, "dd month yyyy"*/
            ); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

            if (/\btime\b/.test(nodeList[_i].className)) {
              nodeList[_i].innerHTML += " " + timeArray[timeCounter]; // Рядок для формату виводу часу.

              timeCounter++;
            }
          }
        } // <span clas="date-NUMBER"></span> - мотає час назад на NUMBER днів. Наприклад, <span className="date-5"></span>
        // <span clas="dateNUMBER"></span> - мотає час вперед на NUMBER днів. Наприклад, <span className="date5"></span>


        for (var _counter = 0; _counter < counterLength; _counter++) {
          var _dateClass = "date-" + _counter,
              _nodeList = document.getElementsByClassName(_dateClass),
              _date = new Date(localDate.getTime() - _counter * msInDay);

          var _timeArray = time(_nodeList
          /*, true*/
          ); // Розкоментувати, якщо необхідне сортування в порядку спадання.


          _timeArray = timeFormat(_timeArray);

          for (var _i2 = 0; _i2 < _nodeList.length; _i2++) {
            var _data = _nodeList[_i2].dataset;
            _data.format ? _nodeList[_i2].innerHTML = format(_date, _data.format) // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
            // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
            : _nodeList[_i2].innerHTML = format(_date
            /*, "dd month yyyy"*/
            ); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
          }
        }

        function time(nodeList, reverse) {
          var timeArray = [];

          for (var _i3 = 0; _i3 < nodeList.length; _i3++) {
            nodeList[_i3].className.match(/\btime\b/) ? timeArray.push(timeRandom()) : false;
          }

          if (reverse) timeArray.sort(function (a, b) {
            return b - a;
          });else timeArray.sort(function (a, b) {
            return a - b;
          });
          return timeArray;
        }

        function timeRandom() {
          return Math.round(Math.random() * 1440);
        }

        function timeFormat(timeArray) {
          var array = [];

          for (var _i4 = 0; _i4 < timeArray.length; _i4++) {
            var hTemp = Math.floor(timeArray[_i4] / 60),
                mTemp = timeArray[_i4] % 60,
                hours = hTemp < 10 ? "0" + hTemp : hTemp,
                minutes = mTemp < 10 ? "0" + mTemp : mTemp;
            array.push(hours + ":" + minutes);
          }

          return array;
        }

        function format(date, formatString) {
          var innerDate = "";
          var day = date.getDate(),
              year = date.getFullYear(),
              month = date.getMonth() + 1,
              fo = formatString || true;

          switch (fo) {
            case "yyyy":
              innerDate += "" + year;
              return innerDate;

            case "yyyy-1":
              innerDate += "" + year - 1;
              return innerDate;

            case "yyyy-2":
              innerDate += "" + year - 2;
              return innerDate;

            case "mm.dd.yyyy":
              innerDate += month < 10 ? "0" + month : month;
              innerDate += ".";
              innerDate += day < 10 ? "0" + day : day;
              innerDate += "." + year;
              return innerDate;

            case "month":
              innerDate += months[month - 1].toLowerCase();
              return innerDate;

            case "dd":
              innerDate += day < 10 ? "0" + day : day;
              return innerDate;

            case "dd month":
              innerDate += day < 10 ? "0" + day : day;
              innerDate += " ";
              innerDate += months[month - 1].toLowerCase();
              return innerDate;

            case "dd month yyyy":
              innerDate += day < 10 ? "0" + day : day;
              innerDate += " ";
              innerDate += months[month - 1].toLowerCase();
              innerDate += " " + year;
              return innerDate;

            case "day dd, month yyyy":
              var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
              innerDate += days[new Date(year, month - 1, day).getDay()];
              innerDate += " ";
              innerDate += day < 10 ? "0" + day : day;
              innerDate += " ";
              innerDate += months[month - 1];
              innerDate += " " + year;
              return innerDate;

            case "dd/mm/yyyy":
              innerDate += day < 10 ? "0" + day : day;
              innerDate += "/";
              innerDate += month < 10 ? "0" + month : month;
              innerDate += "/" + year;
              return innerDate;

            case "dd-mm-yyyy":
              innerDate += day < 10 ? "0" + day : day;
              innerDate += "-";
              innerDate += month < 10 ? "0" + month : month;
              innerDate += "-" + year;
              return innerDate;

            default:
              innerDate += day < 10 ? "0" + day : day;
              innerDate += ".";
              innerDate += month < 10 ? "0" + month : month;
              innerDate += "." + year;
              return innerDate;
          }
        }
      };

      // Якщо потрібен вивід дати та час + хвилин, тоді до спана з датою додаємо клас "time" <span class="date-1 time"></span>.
      // Працює як в порядку спадання, так і в порядку зростання.
      document.addEventListener("DOMContentLoaded", postDate);
    }

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
            $(this).text("116 vânzări în ultima oră");
          }).fadeIn();
          counter = 0;
        } else {
          $(".js-online").fadeOut(1100, function () {
            $(this).text("Acum pe site  " + randNum + " de persoane");
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
