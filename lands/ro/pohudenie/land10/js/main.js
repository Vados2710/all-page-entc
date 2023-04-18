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

  var bannerScroll = (function () {
    $(window).on("scroll resize", function () {
      j(".x_order_form, footer");
      i();
    });

    function j() {
      var q = $(".banner"),
          m = $(".main-banner"),
          l = $(window).scrollTop(),
          s = l + $(window).height(),
          p = $(window).width();
      var u = 0;

      for (var k = 0; k < arguments.length; k++) {
        $(arguments[k]).each(function (w, r) {
          var o = $(r).offset().top,
              x = o + $(r).outerHeight(),
              v = $(r).offset().left,
              n = v + $(r).width();
          o <= s && x >= l && v <= p && n >= 0 && (u += 1);
        });
      }

      l <= 100 || u > 0 ? q.fadeOut() : q.fadeIn().css({
        bottom: m.outerHeight()
      });
    }

    function i() {
      var k = document.querySelector(".main-banner"),
          l = document.querySelector(".banner");
      var redBannerHeight;
      k ? redBannerHeight = k.clientHeight : k;
      redBannerHeight ? l.style.bottom = redBannerHeight - 1 + "px" : l.style.bottom = 0 + "px";
    }

    $('.info__link').on('click', function () {
      var el = $(this);
      var dest = el.attr('href');

      if (dest !== undefined && dest !== '') {
        $('html').animate({
          scrollTop: $(dest).offset().top
        }, 1000);
      }

      return false;
    });
  });

  var review = (function () {
    $(".reviews__content").on("afterChange", function (event, slick, currentSlide) {
      $(this).find(".slick-slide.text-open").not(".slick-active").removeClass("text-open");
    });
    $(".reviews__btn").on("click", function () {
      this.parentElement.parentElement.classList.toggle("text-open");
      $(".reviews__content").find(".slick-slide.slick-active").height("auto");
      $(".reviews__content").find(".slick-list").height("auto");
    });
    $(".reviews__content").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: true,
      dots: true,
      prevArrow: '<svg class="arrow-left" xmlns="http://www.w3.org/2000/svg" width="19" height="35" viewBox="0 0 19 35"><g><g><path  d="M15.739 34.47L.564 19.624a1.837 1.837 0 0 1 0-2.638 1.939 1.939 0 0 1 2.698 0L18.436 31.83c.745.728.745 1.91 0 2.638-.745.73-1.953.73-2.697 0z"/></g><g><path  d="M.564 18.034a1.837 1.837 0 0 1 0-2.64L15.74.55a1.937 1.937 0 0 1 2.697 0c.745.728.745 1.91 0 2.64L3.262 18.033a1.939 1.939 0 0 1-2.698 0z"/></g></g></svg>',
      nextArrow: '<svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" width="19" height="35" viewBox="0 0 19 35"><g><g><path d="M3.23.524l15.174 14.831c.745.728.745 1.91 0 2.637a1.939 1.939 0 0 1-2.697 0L.532 3.16a1.835 1.835 0 0 1 0-2.637 1.94 1.94 0 0 1 2.698 0z"/></g><g><path  d="M18.404 16.946c.745.728.745 1.909 0 2.637L3.23 34.414a1.94 1.94 0 0 1-2.698 0 1.836 1.836 0 0 1 0-2.637l15.175-14.831a1.94 1.94 0 0 1 2.697 0z"/></g></g></svg>',
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      }]
    });
  });

  var trouble = (function () {
    $(".trouble__content").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      prevArrow: '<svg class="arrow-left" xmlns="http://www.w3.org/2000/svg" width="19" height="35" viewBox="0 0 19 35"><g><g><path  d="M15.739 34.47L.564 19.624a1.837 1.837 0 0 1 0-2.638 1.939 1.939 0 0 1 2.698 0L18.436 31.83c.745.728.745 1.91 0 2.638-.745.73-1.953.73-2.697 0z"/></g><g><path  d="M.564 18.034a1.837 1.837 0 0 1 0-2.64L15.74.55a1.937 1.937 0 0 1 2.697 0c.745.728.745 1.91 0 2.64L3.262 18.033a1.939 1.939 0 0 1-2.698 0z"/></g></g></svg>',
      nextArrow: '<svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" width="19" height="35" viewBox="0 0 19 35"><g><g><path d="M3.23.524l15.174 14.831c.745.728.745 1.91 0 2.637a1.939 1.939 0 0 1-2.697 0L.532 3.16a1.835 1.835 0 0 1 0-2.637 1.94 1.94 0 0 1 2.698 0z"/></g><g><path  d="M18.404 16.946c.745.728.745 1.909 0 2.637L3.23 34.414a1.94 1.94 0 0 1-2.698 0 1.836 1.836 0 0 1 0-2.637l15.175-14.831a1.94 1.94 0 0 1 2.697 0z"/></g></g></svg>'
    });
  });

  var gallery = (function () {
    !function (t) {
      t.extend(t.easing, {
        spincrementEasing: function spincrementEasing(t, a, e, n, r) {
          return a === r ? e + n : n * (-Math.pow(2, -10 * a / r) + 1) + e;
        }
      }), t.fn.spincrement = function (a) {
        function e(t, a) {
          if (t = t.toFixed(a), a > 0 && "." !== r.decimalPoint && (t = t.replace(".", r.decimalPoint)), r.thousandSeparator) for (; o.test(t);) {
            t = t.replace(o, "$1" + r.thousandSeparator + "$2");
          }
          return t;
        }

        var n = {
          from: 0,
          to: null,
          decimalPlaces: null,
          decimalPoint: ".",
          thousandSeparator: ",",
          duration: 1e3,
          leeway: 50,
          easing: "spincrementEasing",
          fade: !0,
          complete: null
        },
            r = t.extend(n, a),
            o = new RegExp(/^(-?[0-9]+)([0-9]{3})/);
        return this.each(function () {
          var a = t(this),
              n = r.from;
          a.attr("data-from") && (n = parseFloat(a.attr("data-from")));
          var o;
          if (a.attr("data-to")) o = parseFloat(a.attr("data-to"));else if (null !== r.to) o = r.to;else {
            var i = t.inArray(r.thousandSeparator, ["\\", "^", "$", "*", "+", "?", "."]) > -1 ? "\\" + r.thousandSeparator : r.thousandSeparator,
                l = new RegExp(i, "g");
            o = parseFloat(a.text().replace(l, ""));
          }
          var c = r.duration;
          r.leeway && (c += Math.round(r.duration * (2 * Math.random() - 1) * r.leeway / 100));
          var s;
          if (a.attr("data-dp")) s = parseInt(a.attr("data-dp"), 10);else if (null !== r.decimalPlaces) s = r.decimalPlaces;else {
            var d = a.text().indexOf(r.decimalPoint);
            s = d > -1 ? a.text().length - (d + 1) : 0;
          }
          a.css("counter", n), r.fade && a.css("opacity", 0), a.animate({
            counter: o,
            opacity: 1
          }, {
            easing: r.easing,
            duration: c,
            step: function step(t) {
              a.html(e(t * o, s));
            },
            complete: function complete() {
              a.css("counter", null), a.html(e(o, s)), r.complete && r.complete(a);
            }
          });
        });
      };
    }(jQuery);
    var show = true;
    var countbox = ".stat__list";
    $(window).on("scroll load resize", function () {
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена

      var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница

      var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа

      var w_height = $(window).height(); // Высота окна браузера

      var d_height = $(document).height(); // Высота всего документа

      var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками

      if (w_top + 1000 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $('.stat__percent--count').spincrement({
          thousandSeparator: "",
          duration: 3200
        });
        show = false;
      }
    });
  });

  var stat = (function () {
    $(".gallery__list").slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 6500,
      responsive: [{
        breakpoint: 1220,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      }, {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }]
    });
  });

  review();

  function main() {
    scrollSmooth();
    bannerScroll();
    stat();
    trouble();
    gallery();
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
  } // if (navigator.userAgent.match(/Trident\/7\./)) {
  //   document.body.addEventListener("mousewheel", function () {
  //     event.preventDefault();
  //     var wd = event.wheelDelta;
  //     var csp = window.pageYOffset;
  //     window.scrollTo(0, csp - wd);
  //   });
  // }


  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function onlineUser() {
    $('.form-online__count').text(getRandom(95, 130));
  }

  setInterval(onlineUser, 10000);

}());
