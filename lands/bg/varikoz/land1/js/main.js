(function () {
  'use strict';

  const months = ['януари', 'февруари', 'март', 'април', 'май', 'юни', 'юли', 'август', 'септември', 'октомври', 'ноември', 'декември'], monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''], days = ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота'], daysMin = ['', '', '', '', '', '', ''], seasons = ['зима', 'пролет', 'лято', 'есен']; function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) { const _counterLength = 60; for (let counter = 0; counter < _counterLength; counter++) { innerDate(counter, 'date-'); innerDate(counter, 'date') } function innerDate(counter, dateType) { let newCounter; dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) { const dateFormat = nodeList[i].dataset.format; dateFormat !== undefined && dateFormat !== '' ? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)) : nodeList[i].innerHTML = defaultDate } } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd", "mm", "yyyy", "monthFull"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function addZero(numb) { return numb < 10 ? '0' + numb : numb } function changeFirstLetter(isBig, str) { return isBig && str && str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str } } if (document.body.classList.contains('ev-date')) { document.addEventListener("DOMContentLoaded", function () { postDate(days, daysMin, months, monthMin, seasons) }); }

  $(document).on("click", "a[href^=\"#\"]", function (event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $($.attr(this, "href")).offset().top
    }, 1000);
  });

  var menuBtn = $('.menu-btn');
  var menu = $('.menu');
  menuBtn.click(function () {
    menuBtn.toggleClass('active');
    menu.toggleClass('active');
  });
  $('.menu a').click(function () {
    menuBtn.removeClass('active');
    menu.removeClass('active');
  });
  $(".reviews__content").slick({
    mobileFirst: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: $(".reviews__arrow-prev"),
    nextArrow: $(".reviews__arrow-next"),
    responsive: [{
      breakpoint: 639,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: true
      }
    }, {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true
      }
    }]
  });
  $(".reviews__content").on("afterChange", function () {
    for (var revItems = document.querySelectorAll(".reviews__item"), i = 0; i < revItems.length; i++) {
      revItems[i].classList.remove("active");
    }
  });
  var revBlock = document.querySelector(".reviews__content");
  revBlock.addEventListener("click", function (e) {
    if (e.target.classList.contains("more-btn")) {
      e.target.parentElement.classList.toggle("active");
    }
  });
  var inputFile1 = $(".input-file-1");
  var labelFile1 = $(".reviews-form__file-1");
  var fileText1 = $(".reviews-form__file-text-1");
  var fileImg1 = $(".reviews-form__file-img-1 img");
  var fileIcon1 = $(".reviews-form__checkmark-icon-1");
  var fileFlag1 = true;
  var inputFile2 = $(".input-file-2");
  var labelFile2 = $(".reviews-form__file-2");
  var fileText2 = $(".reviews-form__file-text-2");
  var fileImg2 = $(".reviews-form__file-img-2 img");
  var fileIcon2 = $(".reviews-form__checkmark-icon-2");
  var fileFlag2 = true;
  inputFile1.change(function (e) {
    if (inputFile1.val() && fileFlag1) {
      fileText1.html("Снимката е качена!");
      fileImg1.hide();
      fileIcon1.show();
      labelFile1.addClass("rloaded");
      fileFlag1 = false;
    }
  }); // inputFile1.click(function () {
  //   if (!fileFlag1) {
  //     return false;
  //   }
  // });

  inputFile2.change(function (e) {
    if (inputFile2.val() && fileFlag2) {
      fileText2.html("Снимката е качена!");
      fileImg2.hide();
      fileIcon2.show();
      labelFile2.addClass("rloaded");
      fileFlag2 = false;
    }
  }); // inputFile2.click(function () {
  //   if (!fileFlag2) {
  //     return false;
  //   }
  // });

  $(".reviews__btn").click(function () {
    $('.think').addClass('active-feed');
    $(this).removeClass('active-feed');
  });
  $('.think__btn').click(function (event) {
    var iName = $(".name__input").val();
    var iMassage = $(".inputText").val();
    if (iName == "" || iMassage == "") ;else {
      event.preventDefault();
      $('.feedback-modal').addClass('active-feed');
      setTimeout(function () {
        $('.feedback-modal').removeClass('active-feed');
      }, 3000);
      fileText1.html('Загрузить ваше фото');
      labelFile1.removeClass('rloaded');
      fileText2.html('Загрузить ваше фото');
      labelFile2.removeClass('rloaded');
      $('.think__input').val('');
      $('.inputText').val('');
      $('.think').removeClass('active-feed');
      $('.reviews-form__checkmark-icon1').hide();
      $('.reviews-form__checkmark-icon2').hide();
    }
  });

}());
