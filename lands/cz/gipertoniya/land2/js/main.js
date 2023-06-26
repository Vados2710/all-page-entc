(function () {
    'use strict';

const months=['leden','únor','březen','duben','květen','červen','červenec','srpen','září','říjen','listopad','prosinec'],monthMin = ['','','','','','','','','','','',''],days = ['neděle','pondělí','úterý','středa','čtvrtek','pátek','sobota'],daysMin = ['','','','','','',''],seasons = ['zimní','jaro','léto','podzim'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

    var header = (function () {
      $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
      });
    });

    var mainform = (function () {
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

      var visiters = document.querySelector('.visiters');
      var timerId = setTimeout(function chanchVisitersNumber() {
        visiters.textContent = getRandomInt(4) + 5;
        timerId = setTimeout(chanchVisitersNumber, 15000);
      }, 15000);
    });

    var banner = (function () {
      var flag = false;
      $('.js-scroll').on('click', function () {
        var bannerScroll = $('.banner');
        flag = true;
        bannerScroll.fadeIn();
        setTimeout(function () {
          flag = false;
        }, 1000);
      });
      $(window).on("scroll resize", function () {
        if (flag === false) {
          hideBannerScroll('.x_order_form', '.footer', '.deliver');
        }
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

        if (dT <= 100 || cnt > 0) {
          bannerScroll.fadeOut();
        } else {
          bannerScroll.fadeIn().css({
            'bottom': bannerDelivery.outerHeight()
          });
        }
      }
    }); // var timeout = false;
    // $(window).on("scroll resize", function () {
    //   if (timeout !== false) {
    //     clearTimeout(timeout);
    //   }
    //   timeout = setTimeout(function () {
    //     hideBannerScroll('.x_order_form', '.footer', '.delivery');
    //   }, 100);
    // });
    // function hideBannerScroll() {
    //   var bannerScroll = $('.banner'),
    //     bannerDelivery = $('.main-banner'),
    //     dT = $(window).scrollTop(),
    //     dB = dT + $(window).height(),
    //     dW = $(window).width();
    //   let cnt = 0;
    //   for (let iArr = 0; iArr < arguments.length; iArr++) {
    //     $(arguments[iArr]).each(function (i, hi) {
    //       let eT = $(hi).offset().top,
    //         eB = eT + $(hi).outerHeight(),
    //         eL = $(hi).offset().left,
    //         eR = eL + $(hi).width();
    //       if ((eT <= dB) && (eB >= dT) && (eL <= dW) && (eR >= 0)) {
    //         cnt += +1;
    //       }
    //     });
    //   }
    //   if (dT <= 100 || cnt) {
    //     bannerScroll.fadeOut();
    //   } else {
    //     bannerScroll.fadeIn().css({
    //       'bottom': bannerDelivery.outerHeight()
    //     });
    //   }
    // }

    var form = (function () {
      var inputSelect = $(".country-select").first(),
          customOptions = $(".options");
      var selected = $('.selected');
      var currentCountry = $('.country-select option:selected').first();
      var currentCountryCode = currentCountry.val();
      var selectedText = $('<span>', {
        class: 'option__text',
        text: currentCountry.text()
      });
      selected.addClass(currentCountryCode);
      selectedText.appendTo(selected);

      function setOptions(select) {
        inputSelect.find('option').each(function (i, option) {
          var countryCode = option.value;
          var countryName = option.text;
          var link = $('<a>', {
            class: countryCode + ' option',
            href: "?&country_code=".concat(option.value),
            'data-value': countryCode
          });
          var optionText = $('<span>', {
            class: 'option__text',
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
      $(window).on('click', function (e) {
        var target = $(e.target); // if (target.hasClass('selected')) {

        if (target.hasClass('custom-select') || target.hasClass('selected')) {
          // target.addClass('hide');
          target.parent().find('.options').addClass('opened');
        } else {
          // $('.hide').removeClass('hide');
          $('.opened').removeClass('opened');
        }
      });
    });

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    var recomend = (function () {
      $('document').ready(function () {
          $('.recomend__wrapper--slider').not('.slick-initialized').slick({
              dots: true,
              arrows: true,
              autoplay: true,
              autoplaySpeed: 15000,
              adaptiveHeight: true,
              infinite: true,
              speed: 500,
              fade: true,
              cssEase: 'linear'
          });
          var recomendBlok = document.querySelector(".recomend");
          var recomendSlides = recomendBlok.querySelectorAll(".recomend__slide");
          var recomendText = recomendBlok.querySelectorAll(".recomend__img");
          recomendBlok.querySelector('.slick-track').addEventListener("transitionstart", function () {
              for (var i = 0; i < recomendSlides.length; i++) {
                  if (recomendSlides[i].getAttribute("aria-hidden") === "false") {
                      var activeSlide = i % 4;
                  } else {
                      recomendText[i].classList.remove("active");
                  }
              }

              recomendText[activeSlide].classList.add("active");
          });
          document.querySelector('.recomend__wrapper--img').addEventListener('click', function (evt) {
              if (evt.target.classList.contains('photo')) {
                  $('.recomend__wrapper--slider').slick('slickGoTo', evt.target.getAttribute('data-index'));
              }
          });
      });
  });

    var reviews = (function () {
      $(document).ready(function () {
        $('.reviews__slider').slick({
          dots: false,
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          responsive: [{
            breakpoint: 1220,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }, {
            breakpoint: 768,
            settings: {
              speed: 600,
              slidesToShow: 1,
              slidesToScroll: 1,
              adaptiveHeight: true
            }
          }]
        });
      });
      $(document).ready(function () {
        var toggleFormBtn = $('.toggle-form-btn');
        var reviewsBottom = $('.reviews__bottom');
        var reviewsCta = $('.reviews-cta');
        var reviewsInputsWrap = $('.reviews-form__field-wrap');
        var inputFile = $('.input-file');
        var labelFile = $('.reviews-form__file');
        var reviewsInput = $('.reviews-input');
        var reviewsInputText = $('.reviews-input-text');
        var reviewsInputTextarea = $('.reviews-form__textarea');
        var reviewsInputTextareaJS = document.querySelector('.reviews-form__textarea');
        var reviewsInputName = $('.reviews-form__input-name');
        var reviewsPopup = $('.reviews-popup');
        var fileText = $('.reviews-form__file-text');
        var fileImg = $('.reviews-form__file-img img');
        var fileIcon = $('.reviews-form__checkmark-icon');
        var fileFlag = true;
        reviewsInputTextareaJS.value = '';
        reviewsInputTextarea.on('input', function () {
          if ($(this).val().trim().length > 0) {
            $(this).addClass('o-auto');
          } else {
            $(this).removeClass('o-auto');
          }
        });
        inputFile.change(function (e) {
          if (inputFile.val() && fileFlag) {
            fileText.html('Fotografie byla nahrána!');
            fileImg.hide();
            fileIcon.show();
            labelFile.addClass('rloaded');
            fileFlag = false;
          }
        });
        reviewsInputText.on('input', function () {
          var that = this;
          setTimeout(function () {
            var res = /[^a-zA-Zа-яА-ЯїЇєЄіІёЁ ]/g.exec(that.value);
            that.value = that.value.replace(res, '');

            if (that.value.replace(res, '').length === 0) {
              that.parentElement.classList.add('invalid');
              that.parentElement.classList.remove('valid');
            } else {
              that.parentElement.classList.remove('invalid');
              that.parentElement.classList.add('valid');
            }
          }, 0);
        });
        reviewsInputTextareaJS.addEventListener('input', function () {
          var that = this;

          if (that.value.length === 0) {
            that.parentElement.classList.add('invalid');
            that.parentElement.classList.remove('valid');
          } else {
            that.parentElement.classList.remove('invalid');
            that.parentElement.classList.add('valid');
          }
        });
        inputFile.click(function () {
          if (!fileFlag) {
            return false;
          }
        });
        toggleFormBtn.on('click', function () {
          toggleFormBtn.hide();
          reviewsCta.show();
        });
        $('.reviews-form').submit(function () {
          if (reviewsInputTextarea.val().length !== 0 && reviewsInputName.val().length !== 0) {
            reviewsCta.hide();
            toggleFormBtn.show();
            reviewsPopup.fadeIn();
            event.preventDefault();
            setTimeout(function () {
              reviewsPopup.fadeOut();
            }, 2000);
            fileFlag = true;
            reviewsInput.val('');
            fileText.html('Nahrát vaší fotku');
            $('.feedback__star').removeClass('hover');
            $('.feedback__star').removeClass('selected');
            fileImg.show();
            fileIcon.hide();
            labelFile.removeClass('rloaded');
            reviewsInputsWrap.removeClass('invalid');
            reviewsInputsWrap.removeClass('valid');
            $('.reviews-form__star').removeClass('filled');
          } else {
            reviewsInputsWrap.each(function (i) {
              if (!reviewsInputsWrap[i].classList.contains('valid')) {
                reviewsInputsWrap[i].classList.add('invalid');
              }
            });
            event.preventDefault();
          }
        });
      });
      var starE = $('.feedback__star'),
          stars = document.querySelectorAll('.feedback__star'); //  Stars on mouse over

      starE.on('mouseover', function (e) {
        var onStar = parseInt($(e.target).data('value'), 10);

        for (var i = 0; i < stars.length; i++) {
          $(stars[i]).removeClass('hover');
        }

        for (var _i = 0; _i < onStar; _i++) {
          $(stars[_i]).addClass('hover');
        }
      }).on('mouseout', function () {
        for (var i = 0; i < stars.length; i++) {
          $(stars[i]).removeClass('hover');
        }
      }); //  Stars on click

      starE.on('click', function (e) {
        var onStar = parseInt($(e.target).data('value'), 10);

        for (var i = 0; i < stars.length; i++) {
          $(stars[i]).removeClass('selected');
        }

        for (var _i2 = 0; _i2 < onStar; _i2++) {
          $(stars[_i2]).addClass('selected');
        }
      });
    });

    function main() {
      header();
      mainform();
      banner();
      form();
      recomend();
      reviews();
    }

    if (document.documentElement.clientWidth < 480) {
      window.addEventListener('scroll', function () {
        return setTimeout(main, 1000);
      }, {
        once: true,
        passive: true
      });
    } else {
      main();
    }

}());
