(function () {
    'use strict';

const months=['janvāris','februāris','marts','aprīlis','maijs','jūnijs','jūlijs','augusts','septembris','oktobris','novembris','decembris'],monthMin = ['','','','','','','','','','','',''],days = ['svētdiena','pirmdiena','otrdiena','trešdiena','ceturtdiena','piektdiena','sestdiena'],daysMin = ['','','','','','',''],seasons = ['ziema','pavasaris','vasara','rudens'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}    var scrollSmooth = (function () {
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

    var symptoms = (function () {
      $(".symptoms__slider").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        dotsClass: 'symptoms__slider-navigation',
        prevArrow: '<div class="symptoms__arrow-wrap symptoms__arrow-wrap--left"><svg class="symptoms__arrow-left" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18"><g><g><path d="M0 7.982h.482L6.435 0l1.414 1.44-4.88 6.542H20v2.036H2.968l4.881 6.543-1.414 1.44-5.952-7.983H0z"/></g></g></svg></div>',
        nextArrow: '<div class="symptoms__arrow-wrap symptoms__arrow-wrap--right"><svg class="symptoms__arrow-right" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18"><g><g><path d="M0 8h17.031l-4.88-6.433L13.565.152l5.953 7.847H20V10h-.482l-5.953 7.85-1.414-1.414L17.03 10H.002z"/></g></g></svg></div>',
        responsive: [{
          breakpoint: 480,
          settings: {
            dots: false,
            infinite: true
          }
        }]
      });
    });

    var clients = (function () {
      $(".clients-list").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 6000,
        dots: true,
        prevArrow: '<svg class="arrow-left"  xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24"><g><g><path d="M0 11H.51L9.435.151l1.414 1.413L3.086 11H40v2H3.087l7.762 9.435-1.414 1.414L.51 13H0z"/></g></g></svg>',
        nextArrow: '<svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24"><g><g><path d="M0 11h36.914l-7.763-9.436L30.565.151l8.926 10.85H40v2h-.51l-8.925 10.848-1.414-1.414L36.913 13H0z"/></g></g></svg>',
        responsive: [{
          breakpoint: 1293,
          settings: {
            prevArrow: '<div class="arrow-left"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="23" viewBox="0 0 15 23"><g><g><path d="M14.267 21.271l-1.414 1.415L2.19 12.9l-.064.058-1.414-1.414 1.414-1.415.064.059L12.853.4l1.414 1.415-10.6 9.728z"/></g></g></svg><div/>',
            nextArrow: '<div class="arrow-right"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="23" viewBox="0 0 15 23"><g><g><path d="M.733 1.729L2.147.314 12.81 10.1l.064-.058 1.414 1.414-1.414 1.415-.064-.059L2.147 22.6.733 21.184l10.6-9.728z"/></g></g></svg><div/>'
          }
        }, {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            prevArrow: '<div class="arrow-left"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="23" viewBox="0 0 15 23"><g><g><path d="M14.267 21.271l-1.414 1.415L2.19 12.9l-.064.058-1.414-1.414 1.414-1.415.064.059L12.853.4l1.414 1.415-10.6 9.728z"/></g></g></svg><div/>',
            nextArrow: '<div class="arrow-right"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="23" viewBox="0 0 15 23"><g><g><path d="M.733 1.729L2.147.314 12.81 10.1l.064-.058 1.414 1.414-1.414 1.415-.064-.059L2.147 22.6.733 21.184l10.6-9.728z"/></g></g></svg><div/>'
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            prevArrow: '<div class="arrow-left"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="23" viewBox="0 0 15 23"><g><g><path d="M14.267 21.271l-1.414 1.415L2.19 12.9l-.064.058-1.414-1.414 1.414-1.415.064.059L12.853.4l1.414 1.415-10.6 9.728z"/></g></g></svg><div/>',
            nextArrow: '<div class="arrow-right"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="23" viewBox="0 0 15 23"><g><g><path d="M.733 1.729L2.147.314 12.81 10.1l.064-.058 1.414 1.414-1.414 1.415-.064-.059L2.147 22.6.733 21.184l10.6-9.728z"/></g></g></svg><div/>'
          }
        }, {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrow: false,
            prevArrow: '<div class="arrow-left"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="23" viewBox="0 0 15 23"><g><g><path d="M14.267 21.271l-1.414 1.415L2.19 12.9l-.064.058-1.414-1.414 1.414-1.415.064.059L12.853.4l1.414 1.415-10.6 9.728z"/></g></g></svg><div/>',
            nextArrow: '<div class="arrow-right"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="23" viewBox="0 0 15 23"><g><g><path d="M.733 1.729L2.147.314 12.81 10.1l.064-.058 1.414 1.414-1.414 1.415-.064-.059L2.147 22.6.733 21.184l10.6-9.728z"/></g></g></svg><div/>'
          }
        }]
      });
    });

    var reviews = (function () {
      $(".reviews-item__btn").on("click", function () {
        $(this).parent().toggleClass("active");
      });
      $(".star1").on("click", function () {
        $(this).parent().removeClass("active1 active2 active3 active4 active5").addClass("active1");
      });
      $(".star2").on("click", function () {
        $(this).parent().removeClass("active1 active2 active3 active4 active5").addClass("active2");
      });
      $(".star3").on("click", function () {
        $(this).parent().removeClass("active1 active2 active3 active4 active5").addClass("active3");
      });
      $(".star4").on("click", function () {
        $(this).parent().removeClass("active1 active2 active3 active4 active5").addClass("active4");
      });
      $(".star5").on("click", function () {
        $(this).parent().removeClass("active1 active2 active3 active4 active5").addClass("active5");
      });
      $(".feedback").on("submit", function (e) {
        e.preventDefault()
        var reviewInput1 = $(".input__val-1").val().length,
        reviewInput2 = $(".input__val-2").val().length,
        reviewInput3 = $(".input__val-3").val().length;

    if (reviewInput1 !== 0 && reviewInput2 !== 0 && reviewInput3 !== 0) {
      $(".input__val-1").val("");
      $(".input__val-2").val("");
      $(".input__val-3").val("");
      $(".feedback-rating").removeClass("active1 active2 active3 active4 active5");
      $(".feedback-modal").fadeIn();
      setTimeout('$(".feedback").fadeOut(); $(".feedback-modal").fadeOut();', 3000);
    } else {
      alert("Aizpildiet visus laukus!");
    }
      })
      // $(".feedback-btn").click(function () {
      //   var reviewInput1 = $(".input__val-1").val().length,
      //       reviewInput2 = $(".input__val-2").val().length,
      //       reviewInput3 = $(".input__val-3").val().length;

      //   if (reviewInput1 !== 0 && reviewInput2 !== 0 && reviewInput3 !== 0) {
      //     $(".input__val-1").val("");
      //     $(".input__val-2").val("");
      //     $(".input__val-3").val("");
      //     $(".feedback-rating").removeClass("active1 active2 active3 active4 active5");
      //     $(".feedback-modal").fadeIn();
      //     setTimeout('$(".feedback").fadeOut(); $(".feedback-modal").fadeOut();', 3000);
      //   } else {
      //     alert("Aizpildiet visus laukus!");
      //   }
      // });
      $(".feedback").fadeOut();
      $(".feedback-modal").fadeOut();
      $(".reviews-btn").click(function () {
        $(".feedback").fadeIn();
      });
      $('.social__img').on('click', function (e) {
        var target = $(e.target),
            dislikeImg = target.parent().next().children().first(),
            likeImg = target.parent().prev().children().first(),
            dislikeCount = target.parent().next().children().last(),
            likeCount = target.parent().prev().children().last();

        if (target.hasClass('like')) {
          target.toggleClass('used');
          target.toggleClass('like-active');
          dislikeImg.removeClass('dislike-active');

          if (target.hasClass('like-active')) {
            target.next().text(Number(target.next().text()) + 1);
          } else {
            target.next().text(Number(target.next().text()) - 1);
          }

          if (dislikeImg.hasClass('used')) {
            dislikeCount.text(Number(dislikeCount.text()) - 1);
            dislikeImg.removeClass('used');
          }
        } else {
          target.toggleClass('used');
          target.toggleClass('dislike-active');
          likeImg.removeClass('like-active');

          if (target.hasClass('dislike-active')) {
            target.next().text(Number(target.next().text()) + 1);
          } else {
            target.next().text(Number(target.next().text()) - 1);
          }

          if (likeImg.hasClass('used')) {
            likeCount.text(Number(likeCount.text()) - 1);
            likeImg.removeClass('used');
          }
        }
      });
      var moreRev = $('.reviews-item__btn');
      moreRev.on('click', function () {
        var parent = $(this).parent();
        var btn = parent.children('.reviews-item__btn');

        if (!btn.hasClass('active')) {
          btn.addClass('active');
          $(this).html('Slēpt pārskatu');
        } else {
          btn.removeClass('active');
          $(this).html('Lasīt pilnu pārskatu');
        }
      });
    });

    var stat = (function () {
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
      var countbox = ".stat-info";
      $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена

        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница

        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа

        var w_height = $(window).height(); // Высота окна браузера

        var d_height = $(document).height(); // Высота всего документа

        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками

        if (w_top + 1000 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
          $('.percent').spincrement({
            thousandSeparator: "",
            duration: 3200
          });
          show = false;
        }
      });
    });

    var banner = (function () {
      var timeout = false;
      $(window).on("scroll resize", function () {
        if (timeout !== false) {
          clearTimeout(timeout);
        }

        timeout = setTimeout(function () {
          hideBannerScroll('.x_order_form', '.interruption');
        }, 100);
      });

      function hideBannerScroll() {
        var bannerScroll = $('.banner'),
            bannerDelivery = $('.main-banner'),
            dT = $(window).scrollTop(),
            dB = dT + $(window).height(),
            dW = $(window).width();
        var cnt = 0;

        for (var iArr = 0; iArr < arguments.length; iArr++) {
          $(arguments[iArr]).each(function (i, hi) {
            var eT = $(hi).offset().top,
                eB = eT + $(hi).outerHeight(),
                eL = $(hi).offset().left,
                eR = eL + $(hi).width();

            if (eT <= dB && eB >= dT && eL <= dW && eR >= 0) {
              cnt += +1;
            }
          });
        }

        if (dT <= 100 || cnt) {
          bannerScroll.fadeOut();
        } else {
          if (dW > 1023) {
            bannerScroll.fadeIn().css({
              'bottom': bannerDelivery.outerHeight()
            });
          }
        }
      }

      function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function onlineUser() {
        $('.form-online__count').text(getRandom(95, 130));
      }

      setInterval(onlineUser, 10000);
    });

    header();

    function main() {
      scrollSmooth();
      banner();
      symptoms();
      clients();
      reviews();
      stat();
      banner();
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
$('.input__val-2').on('input', function () {
  $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});