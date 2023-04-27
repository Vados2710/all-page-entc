const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","dayFull","monthFull","dayMin","monthMin","monthOnly","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, dayFull: getDaysName(_day, _month, _year, daysName, false), dayMin: getDaysName(_day, _month, _year, daysMinName, false), monthFull: getMonthName(_month, monthsName, false), monthMin: getMonthName(_month, monthsMinName, false), monthOnly: getMonthName(_month, monthsName, false, counter), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getDaysName(_day, _month, _year, daysName, bigFirstLetter) {return changeFirstLetter(bigFirstLetter, daysName[new Date(_year, _month - 1, _day).getDay()])} function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

$(document).ready(function () {
    $(".eeee").click(function () {
      $(".eeee").addClass("actsss"); // добавляем в нажатую ссылку класс act

      $(".fadepopup").addClass("actsss"); // добавляем в нажатую ссылку класс act

      $(".fadepopup").removeClass("xxxc"); // добавляем в нажатую ссылку класс act

      $(".eeee").removeClass("xxxc"); // добавляем в нажатую ссылку класс act

      $(".hikj").removeClass("actss"); // добавляем в нажатую ссылку класс act

      $("body").removeClass("modal-show"); // добавляем в нажатую ссылку класс act
    });
    setTimeout(function () {
      var flag = true;
      $(window).mouseout(function (e) {
        if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
          $('.fadepopup, .eoxp').fadeIn(300);
          $('.eeee').fadeIn(300);
          flag = false;
        }
      });
    }, 15000);
    $('div.close').click(function () {
      $('.fadepopup').css('display', 'none');
      $('.eeee').css('display', 'none');
    });
    $('a.btnp').click(function () {
      $('.eeee, .fadepopup').css('display', 'none');
    });
  });
  var counterBagsWidget = 0;
  var attempt = 5;
  var formTime = 600;
  var counterElem = $('.counter_attempts');
  var interval = {};
  window.bag = {
    open: function open(e) {
      if (counterBagsWidget >= 5) return;
      var target = $(e.currentTarget);

      if (counterBagsWidget < 6 && !target.hasClass('showed-goods')) {
        counterBagsWidget++;
        window.bag.substractConter();
        window.bag.changeClass(counterBagsWidget, target);
      }

      target.addClass('showed-goods');
    },
    substractConter: function substractConter() {
      var substr = attempt - counterBagsWidget;
      counterElem.text(substr);
    },
    changeClass: function changeClass(counter, target) {
      switch (counter) {
        case 1:
          target.addClass('sale sale-30');
          break;

        case 2:
        case 4:
          target.addClass('sale sale-50');
          break;

        case 3:
          target.addClass('sale sale-10');
          break;

        case 5:
          target.addClass('sale sale-50');
          $('.card__item.sale.sale-50').addClass('glow');
          window.bag.showResultWindow();
          window.bag.showForm();
          break;
      }
    },
    showResultWindow: function showResultWindow() {
      setTimeout(function () {
        $('.spin-result-wrapper').css('display', 'block');
      }, 1000);
    },
    showForm: function showForm() {
      setTimeout(function () {
        $('.spin-wrapper').slideUp();
        $('.order_block').slideDown();
        window.bag.start_timer();
      }, 3000);
    },
    start_timer: function start_timer() {
      interval = setInterval(window.bag.tick, 1000);
    },
    tick: function tick() {
      formTime = formTime - 1;
      var mins = Math.floor(formTime / 60);
      var secs = formTime - mins * 60;

      if (mins == 0 && secs == 0) {
        clearInterval(interval);
      }

      secs = secs >= 10 ? secs : "0" + secs;
      $("#min").html("0" + mins);
      $("#sec").html(secs);
    }
  };
  $('.card__item').click(function (e) {
    window.bag.open(e);
  });
  var closePopup = document.querySelector('.close-popup');
  $('.close-popup, .pop-up-button').click(function (e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();
    var el = $('#roulette');

    if (!el) {
      el = $('#order_form');
    }

  });
