jQuery(function ($) {
  $('a[href^="#"]').click(function (e) {
    var target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top - 100 }, 1000);
    return false;
  });
});
jQuery(function ($) {
  $(".ever-popup-btn").click(function (e) {
    e.preventDefault();
    return false;
  });
});
jQuery(function ($) {
  var OpenPopupLink = $("a.open-popup-link");
  var ClosePopupLink = $("a.close-popup-link");
  var PopupWrapper = $(".popup-wrapper");
  OpenPopupLink.click(function () {
    var clickId = this.id;
    $("#popup-" + clickId).fadeIn(300);
    PopupWrapper.fadeIn(300);
    $("body").css("overflow", "hidden").css("height", "100%");
  });
  ClosePopupLink.click(function () {
    $(this).parents(".popup").fadeOut(300);
    PopupWrapper.fadeOut(300);
    $("body").css("overflow", "auto").css("height", "auto");
  });
  $(document).keydown(function (eventObject) {
    if ($('[id^="popup-"]').is(":visible")) {
      if (eventObject.which == "27") {
        $('[id^="popup-"]').fadeOut(300);
        PopupWrapper.fadeOut(300);
        $("body").css("overflow", "auto").css("height", "auto");
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Вивід дати (+ час).
  postDate();
});




const months = ['ο Ιανουάριος', 'ο Φεβρουάριος', 'ο Μάρτιος', 'ο Απρίλιος', 'ο Μάιος', 'ο Ιούνιος', 'ο Ιούλιος', 'ο Αύγουστος', 'ο Σεπτέμβριος', 'ο Οκτώβριος', 'ο Νοέμβριος', 'ο Δεκέμβριος'], monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''], days = ['η Κυριακή', 'η Δευτέρα', 'η Τρίτη', 'η Τετάρτη', 'η Πέμπτη', 'η Παρασκευή', 'το Σάββατο'], daysMin = ['', '', '', '', '', '', ''], seasons = ['ο χειμώνας', 'η άνοιξη', 'το καλοκαίρι', 'το φθινόπωρο']; function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) { const _counterLength = 60; for (let counter = 0; counter < _counterLength; counter++) { innerDate(counter, 'date-'); innerDate(counter, 'date') } function innerDate(counter, dateType) { let newCounter; dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) { const dateFormat = nodeList[i].dataset.format; dateFormat !== undefined && dateFormat !== '' ? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)) : nodeList[i].innerHTML = defaultDate } } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd", "mm", "yyyy", "monthFull", "season"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), season: getSeasonsName(seasonsName, _month, false), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getSeasonsName(array, month, bigFirstLetter) { const monthNumber = month === 12 ? 0 : month, seasonIndex = monthNumber / 3 < 0 ? Math.ceil(monthNumber / 3) : Math.floor(monthNumber / 3); return changeFirstLetter(bigFirstLetter, array[seasonIndex]); } function addZero(numb) { return numb < 10 ? '0' + numb : numb } function changeFirstLetter(isBig, str) { return isBig && str && str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str } } if (document.body.classList.contains('ev-date')) { document.addEventListener("DOMContentLoaded", function () { postDate(days, daysMin, months, monthMin, seasons) }); }






$(document).ready(function () {
  $(".js-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    prevArrow: false,
    nextArrow: ".slider-arrow",
    fade: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          adaptiveHeight: true,
        },
      },
    ],
  });
});
