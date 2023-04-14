(function () {
  'use strict';

const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['','','','','','','','','','','',''],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

  var scrollSmooth = (function () {
    $(document).on("click", "a[href^=\"#\"]", function (event) {
      event.preventDefault();
      $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top
      }, 500);
    });
  });

  var symptoms = (function () {
    var arrow = '<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.2071 8.7069C19.5977 8.31639 19.5977 7.68322 19.2072 7.29269L12.8433 0.928595C12.4528 0.538062 11.8196 0.538048 11.4291 0.928565C11.0386 1.31908 11.0386 1.95225 11.4291 2.34278L17.0858 7.99975L11.4288 13.6565C11.0383 14.047 11.0383 14.6802 11.4288 15.0707C11.8193 15.4612 12.4525 15.4612 12.843 15.0707L19.2071 8.7069ZM0.999813 8.99941L18.5 8.99978L18.5001 6.99978L0.999855 6.99941L0.999813 8.99941Z" fill="white"/></svg>';
    $('.symptoms-slider__for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      infinite: false,
      asNavFor: '.symptoms-slider__nav',
      nextArrow: '<button type="button" class="slick-next slick-arrow symptoms-slider__arrow symptoms-slider__arrow--next">' + arrow + '</button>',
      prevArrow: '<button type="button" class="slick-prev slick-arrow symptoms-slider__arrow symptoms-slider__arrow--prev">' + arrow + '</button>'
    });
    $('.symptoms-slider__nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.symptoms-slider__for',
      focusOnSelect: true,
      centerPadding: "0px"
    });
  });

  var result = (function () {
    var arrow = '<svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z" fill="#005878"/></svg>';
    $('.result-list').slick({
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dotsClass: "slick-dots result-list__dots",
      nextArrow: '<button type="button" class="slick-next result-list__arrow result-list__arrow--next">' + arrow + '</button>',
      prevArrow: '<button type="button" class="slick-prev result-list__arrow result-list__arrow--prev">' + arrow + '</button>',
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
      }]
    });
  });
  var form = (function () {
    $(document).ready(function () {
      function randomInteger(min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }

      var counter = 1;
      setInterval(function () {
        var randNum = randomInteger(27, 47);

        if (counter == 1) {
          $(".form__attendance").fadeOut(1100, function () {
            $(this).html('<span class="form__attendance-value">116</span> vânzări în ultima oră');
          }).fadeIn();
          counter = 0;
        } else {
          $(".form__attendance").fadeOut(1100, function () {
            $(this).html('Acum pe site <span class="form__attendance-value">' + randNum + '</span> persoane');
          }).fadeIn();
          counter = 1;
        }
      }, 6000);
    });
  });

  var review = (function () {
    var wrap = document.querySelector('.review__block');
    wrap.addEventListener('click', function (e) {
      if (e.target.classList.contains('review-grade__like-wrap') || e.target.classList.contains('review-grade__dislike-wrap')) {
        if (!e.target.classList.contains('review-grade__item--active')) {
          e.target.classList.add('review-grade__item--active');
          e.target.querySelector('.review-grade__count').innerText = +e.target.querySelector('.review-grade__count').innerText + 1;

          if (!!e.target.nextElementSibling && e.target.nextElementSibling.classList.contains('review-grade__item--active')) {
            e.target.nextElementSibling.classList.remove('review-grade__item--active');
            var count = e.target.nextElementSibling.querySelector('.review-grade__count');
            count.innerText = +count.innerText - 1;
          }

          if (!!e.target.previousElementSibling && e.target.previousElementSibling.classList.contains('review-grade__item--active')) {
            e.target.previousElementSibling.classList.remove('review-grade__item--active');

            var _count = e.target.previousElementSibling.querySelector('.review-grade__count');

            _count.innerText = +_count.innerText - 1;
          }
        } else {
          e.target.classList.remove('review-grade__item--active');
          e.target.querySelector('.review-grade__count').innerText = +e.target.querySelector('.review-grade__count').innerText - 1;
          console.log(e.target.querySelector('.review-grade__count').innerText)
        }
      }

      if (e.target.classList.contains('review-item__more') && !e.target.classList.contains('review-item__more--open')) {
        e.target.classList.add('review-item__more--open');
        e.target.previousElementSibling.classList.add('review-item__text--open');
        e.target.innerText = e.target.dataset.open;
      } else if (e.target.classList.contains('review-item__more--open')) {
        e.target.classList.remove('review-item__more--open');
        e.target.previousElementSibling.classList.remove('review-item__text--open');
        e.target.innerText = e.target.dataset.close;
      }
    });
  });

  var reviewForm = (function () {
    var toggleFormBtn = $('.toggle-form-btn');
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
        fileText.html('Загрузите фото');
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

    function setRating() {
      var ratingWrap = document.querySelector('.reviews-form__rating');
      var stars = document.querySelectorAll('.reviews-form__star-wrap');
      ratingWrap.addEventListener('click', function (e) {
        console.log(e.target);

        if (e.target.classList.contains('reviews-form__star-wrap')) {
          var rating = +e.target.dataset.rating;

          for (var _i = 0; _i < stars.length; _i++) {
            if (_i <= rating) {
              stars[_i].classList.add('reviews-form__star-wrap--full');
            } else {
              stars[_i].classList.remove('reviews-form__star-wrap--full');
            }
          }
        }
      });
    }

    setRating();
  });

  function main() {
    scrollSmooth();
    symptoms();
    result();
    review();
    reviewForm();
    form();
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
