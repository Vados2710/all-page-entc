(function () {
    'use strict';

    const months = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
      monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''],
      days = ['domenica', 'lunedi', 'martedì', 'mercoledì', 'giovedi', 'venerdì', 'sabato'],
      daysMin = ['', '', '', '', '', '', ''],
      seasons = ['inverno', 'primavera', 'estate', 'autunno'];

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
      var burger = document.querySelector('.burger');
      var mobMenu = document.querySelector('.menu-mob');
      var mobMenuBg = document.querySelector('.menu-mob__bg');
      var mobClose = document.querySelector('.mob-close');
      var links = document.querySelectorAll('.list-item__link');
      burger.addEventListener('click', function () {
        mobMenu.classList.toggle('open');
        console.log('mou');
      });
      mobClose.addEventListener('click', function () {
        mobMenu.classList.toggle('open');
      });
      mobMenuBg.addEventListener('click', function () {
        mobMenu.classList.toggle('open');
      });

      for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', hideMenu);
      }

      function hideMenu() {
        if (document.documentElement.clientWidth < 1024) {
          mobMenu.classList.toggle('open');
        }
      }
    });


    var reviews = (function () {
      $(".reviews-item__btn").on("click", function () {
        $(this).parent().toggleClass("active");

        if (!$(this).data("status")) {
          $(this).html("Скрыть отзыв");
          $(this).data("status", true);
        } else {
          $(this).html("Прочитать весь отзыв");
          $(this).data("status", false);
        }
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
      $(".feedback-btn").click(function () {
        var reviewInput1 = $(".input__val-1").val().length,
            reviewInput2 = $(".input__val-2").val().length,
            reviewInput4 = $(".input__val-4").val().length;
        var pattern = /^[A-Za-zА-Яа-яЁё]{0,}$/;
        var nameTest = pattern.test($(".input__val-1").val());

        if (reviewInput1 !== 0 && nameTest) {
          $(".feedback-name").removeClass('error');
        } else {
          $(".feedback-name").addClass('error');
        } 
        if (reviewInput2 !== 0 && Number($(".input__val-2").val()) >= 18 && Number($(".input__val-2").val()) <= 120) {
          $(".feedback-age").removeClass('error');
        } else {
          $(".feedback-age").addClass('error');
        }

        // reviewInput2 !== 0 && Number($(".input__val-2").val()) >= 18 && Number($(".input__val-2").val()) <= 120;

        if (reviewInput4 !== 0) {
          $(".feedback-text").removeClass('error');
        } else {
          $(".feedback-text").addClass('error');
        }

        if (reviewInput1 !== 0 && nameTest !== 0 && reviewInput2 !== 0 && Number($(".input__val-2").val()) >= 18 && Number($(".input__val-2").val()) <= 120 && reviewInput4 !== 0) {
          fileText.html('Carica la tua foto');
          fileFlag = true;
          $('.input-file').val('');
          labelFile.removeClass('rloaded');
          $('.feedback-form__checkmark-icon').hide();

          $(".input__val-1").val("");
          $(".input__val-2").val("");
          $(".input__val-4").val("");
          $(".feedback-rating").removeClass("active1 active2 active3 active4 active5");
          $(".feedback-modal").fadeIn();
          setTimeout('$(".feedback").fadeOut(); $(".feedback-modal").fadeOut();', 3000);
        }
      });
      $(".input__val-2").on("input", function () {
        $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ""));
      });
      $(".feedback").fadeOut();
      $(".feedback-modal").fadeOut();
      $(".reviews-btn").click(function () {
        $(".feedback").fadeIn();
      });
      var oldPrice = document.querySelectorAll(".x_price_previous");
      var newPrice = document.querySelectorAll(".x_price_current");

      $(".social__img").on("click", function (e) {
        var target = $(e.target),
            dislikeImg = target.parent().next().children().first(),
            likeImg = target.parent().prev().children().first(),
            dislikeCount = target.parent().next().children().last(),
            likeCount = target.parent().prev().children().last();

        if (target.hasClass("like")) {
          target.toggleClass("used");
          target.toggleClass("like-active");
          dislikeImg.removeClass("dislike-active");

          if (target.hasClass("like-active")) {
            target.next().text(Number(target.next().text()) + 1);
          } else {
            target.next().text(Number(target.next().text()) - 1);
          }

          if (dislikeImg.hasClass("used")) {
            dislikeCount.text(Number(dislikeCount.text()) - 1);
            dislikeImg.removeClass("used");
          }
        } else {
          target.toggleClass("used");
          target.toggleClass("dislike-active");
          likeImg.removeClass("like-active");

          if (target.hasClass("dislike-active")) {
            target.next().text(Number(target.next().text()) + 1);
          } else {
            target.next().text(Number(target.next().text()) - 1);
          }

          if (likeImg.hasClass("used")) {
            likeCount.text(Number(likeCount.text()) - 1);
            likeImg.removeClass("used");
          }
        }
      });
    });
    var inputFile = $('.input-file');
    var labelFile = $('.feedback-form__file');
    var fileText = $('.feedback-form__file-text');
    var fileImg = $('.feedback-form__file-img img');
    var fileIcon = $('.feedback-form__checkmark-icon');
    var fileFlag = true;
    inputFile.change(function (e) {
      if (inputFile.val() && fileFlag) {
        fileText.html('Foto caricata');
        fileImg.hide();
        fileIcon.show();
        labelFile.addClass('rloaded');
        fileFlag = false;
      }
    });

    var composition = (function () {
      var windowHeight = $(window).height();

      function animationA(params) {
        $(params).each(function () {
          var self = $(this),
              height;

          if (self.height() >= windowHeight) {
            height = self.offset().top + windowHeight - 100;
          } else {
            height = self.offset().top + self.height();
          }

          if ($(document).scrollTop() + windowHeight >= height) {
            self.addClass("active");
          } 
        });
      }

      $(document).on("scroll", function () {
        animationA(".composition__list");
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
          }, 500);
        });
        $(window).on("scroll resize", function () {
          if (!isNavLink) {
            hideBannerScroll(".form, .formland, .footer"); // сюда через кому дописываем классы блоков, которые должны скрыть баннер
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

    function main() {
      scrollSmooth();
      header();
      composition();
      reviews();
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
