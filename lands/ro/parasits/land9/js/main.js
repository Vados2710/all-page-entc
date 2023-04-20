http://ro4.wortex-remedy.com/(function () {
  'use strict';

 const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['','','','','','','','','','','',''],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","monthOnly","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), monthOnly: getMonthName(_month, monthsName, false, counter), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

  function scrollSmooth () {
    $(document).on("click", "a[href^=\"#\"]", function (event) {
      event.preventDefault();
      $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top
      }, 500);
    });
  }

  function soon () {
    $('.soon__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: '<svg class="arrow-left slick-arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" style=""><g><g><path d="M0 11H.51L9.435.151l1.414 1.413L3.086 11H40v2H3.087l7.762 9.435-1.414 1.414L.51 13H0z"></path></g></g></svg>',
      nextArrow: '<svg class="arrow-right slick-arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" style=""><g><g><path d="M0 11h36.914l-7.763-9.436L30.565.151l8.926 10.85H40v2h-.51l-8.925 10.848-1.414-1.414L36.913 13H0z"></path></g></g></svg>',
      dots: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      }]
    });
  }

  function reviews () {
    $(document).ready(function () {
      function clearSliderItemState() {
        var allText = $('.js-comment');
        allText.attr('data-expanded', 'false');
        more.removeClass('active');
        allText.removeClass('show');
        allText.css({
          maxHeight: allText.height() + 'px'
        });
      }

      $('.js-reviews-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<svg class="arrow-left slick-arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" style=""><g><g><path d="M0 11H.51L9.435.151l1.414 1.413L3.086 11H40v2H3.087l7.762 9.435-1.414 1.414L.51 13H0z"></path></g></g></svg>',
        nextArrow: '<svg class="arrow-right slick-arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" style=""><g><g><path d="M0 11h36.914l-7.763-9.436L30.565.151l8.926 10.85H40v2h-.51l-8.925 10.848-1.414-1.414L36.913 13H0z"></path></g></g></svg>',
        dots: true,
        mobileFirst: true,
        responsive: [{
          breakpoint: 1219,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }, {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }]
      });
      $('.js-reviews-slider').on('beforeChange', function () {
        clearSliderItemState();
      });
      var more = $('.js-show-comment');
      more.on('click', function () {
        var parent = $(this).parent();
        var text = parent.children('.js-comment');

        if (text.attr('data-expanded') == 'false') {
          var allText = $('.js-comment');
          text.addClass('show');
          allText.not(text).css({
            maxHeight: allText.height() + 'px'
          });
          allText.not(text).removeClass('show');
          allText.attr('data-expanded', 'false');
          more.removeClass('active');
          $(this).addClass('active');
          text.attr('data-expanded', 'true');
          text.css({
            'max-height': text[0].scrollHeight + 'px'
          });
        } else {
          clearSliderItemState();
        }
      });
      var toggleFormBtn = $('.toggle-form-btn');
      var reviewsBottom = $('.reviews__bottom');
      var reviewsCta = $('.reviews-cta');
      var inputNum = document.querySelectorAll('.input-num');
      var reviewsInputsWrap = $('.reviews-form__field-wrap');
      var inputAgeWrap = $('.reviews-form__field-wrap--age');
      var inputAge = $('.input-age');
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
          fileText.html('Fotografie încărcată!');
          fileImg.hide();
          fileIcon.show();
          labelFile.addClass('rloaded');
          fileFlag = false;
        }
      });
      inputAge.on('change', function () {
        if (Number($(this).val().slice(0, 2)) > 17 && Number($(this).val().slice(0, 2)) < 91) {
          inputAgeWrap.addClass('valid');
          inputAgeWrap.removeClass('invalid');
        } else {
          inputAgeWrap.addClass('invalid');
          inputAgeWrap.removeClass('valid');
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

      for (var i = 0; i < inputNum.length; i++) {
        inputNum[i].addEventListener('input', function () {
          this.value = this.value.replace(/\D/g, '');

          if (this.value.length > 2) {
            this.value = this.value.slice(0, 2);
          }
        });
      }

      toggleFormBtn.on('click', function () {
        toggleFormBtn.hide();
        reviewsCta.show();
      });
      $('.reviews-form').submit(function () {
        if (Number(inputAge.val()) > 17 && Number(inputAge.val()) < 91 && reviewsInputTextarea.val().length !== 0 && reviewsInputName.val().length !== 0) {
          reviewsCta.hide();
          toggleFormBtn.show();
          reviewsPopup.fadeIn();
          event.preventDefault();
          setTimeout(function () {
            reviewsPopup.fadeOut();
          }, 2000);
          fileFlag = true;
          reviewsInput.val('');
          fileText.html('Încărcați fotografia');
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
  }

  function promo () {
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
    var people = $('.online-people');
    var sold = $('.online-sold');
    var dynamic = $('.online-dynamic');

    function randomInteger(min, max) {
      var rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }

    var counter = 1;
    setInterval(function () {
      if (counter == 1) {
        people.fadeIn();
        sold.fadeOut();
        counter = 0;
      } else {
        people.fadeOut();
        sold.fadeIn();
        counter = 1;
      }
    }, 3500);
    setInterval(function () {
      setTimeout(function () {
        dynamic.html(randomInteger(27, 47));
      }, 3500);
    }, 7000);
  }

  function banner () {
    var timeout = false;
    $(window).on("scroll resize", function () {
      if (timeout !== false) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(function () {
        hideBannerScroll(".x_order_form, .action, .action_bg, .action-2");
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
        bannerScroll.fadeIn().css({
          'bottom': bannerDelivery.outerHeight()
        });
      }
    }
  }

  function header () {
    $('.header__menu').on("click", function () {
      $('.header__menu-open').addClass('menu-opened');
      $('.header__overlay').addClass('overlay');
    });
    $('.close').on("click", function () {
      $('.header__menu-open').removeClass('menu-opened');
      $('.header__overlay').removeClass('overlay');
    });
    $('.close-menu').on("click", function () {
      $('.header__menu-open').removeClass('menu-opened');
      $('.header__overlay').removeClass('overlay');
    });
    $('.header__overlay').on("click", function () {
      $(this).removeClass('overlay');
      $('.header__menu-open').removeClass('menu-opened');
    });
  }

  function main() {
    scrollSmooth();
    soon();
    reviews();
    promo();
    banner();
    header();
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
