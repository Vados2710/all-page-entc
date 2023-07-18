(function () {
  'use strict';

  var months = ["januar", "februar", "märz", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "dezember"],
      days = ["sonntag", "montag", "dienstag", "mittwoch", "donnerstag", "freitag", "samstag"],
      daysMin = ["", "", "", "", "", "", ""];

  function postDate(t, e, n, o, a) {
    for (var _t = 0; _t < 60; _t++) {
      r(_t, "date-"), r(_t, "date");
    }

    function r(t, e) {
      var n;
      n = "date-" === e ? -t : t;
      var o = new Date(Date.now() + 864e5 * n),
          a = o.getDate(),
          r = o.getMonth() + 1,
          i = o.getFullYear(),
          m = d(a),
          l = d(r),
          u = m + "." + l + "." + i,
          c = e + t,
          g = document.querySelectorAll("." + c);

      for (var _t2 = 0; _t2 < g.length; _t2++) {
        var _e = g[_t2].dataset.format;
        g[_t2].innerHTML = void 0 !== _e && "" !== _e ? String(s(m, l, i, _e)) : u;
      }
    }

    function s(t, e, o, a, r) {
      var s = a;
      var d = ["dd", "mm", "yyyy", "month"],
          m = {
        dd: t,
        mm: e,
        yyyy: o,
        month: i(e, n, !0)
      };

      for (var _t3 = 0; _t3 < d.length; _t3++) {
        var _e2 = d[_t3],
            _n = new RegExp(_e2);

        s = s.replace(_n, m[_e2]);
      }

      return s;
    }

    function i(t, e, n) {
      return o = n, a = e[t - 1], o && a.length > 0 ? a[0].toUpperCase() + a.slice(1) : a;
      var o, a;
    }

    function d(t) {
      return t < 10 ? "0" + t : t;
    }
  }

  document.body.classList.contains("ev-date") && document.addEventListener("DOMContentLoaded", function () {
    postDate(days, daysMin, months);
  });

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
          fileText.html('Foto hochgeladen!');
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
          fileText.html('Загрузить ваше фото');
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

}());

function initInputValidation() {
  const telFields = document.querySelectorAll('input[type="tel"]')

  for (let i = 0; i < telFields.length; i++) {
      telFields[i].addEventListener('input', validation)
  }

  function validation(event) {
      isNaN(event.data)
          ? this.value = this.value.replace(/[^0-9+]/, '')
          : false;
  }
}
initInputValidation();

window.addEventListener("load", function () {
  const popup = document.querySelector('.ever-popup');

  document.addEventListener('click', function () {
      if (popup && popup.classList.contains('show')) {
          initInputValidation();
      }
  })
});