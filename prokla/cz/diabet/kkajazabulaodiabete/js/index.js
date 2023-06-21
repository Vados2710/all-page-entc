function draw() {
  var triesCount = 2;
  var tries = 0;
  var box_d = document.querySelector('#box_d').getAttribute('src');
  var congrat = document.querySelector('#congrat').getAttribute('src');
  var discount = document.querySelector('#discount').getAttribute('src');
  $('#tries_count').text(triesCount);
  $('.try').on('click', function () {
    if (!$(this).parent('.boxes_item').hasClass('afterlose-boxes_item') && !$('#boxesContainer').hasClass('stop_trying')) {
      if (tries == 0) {
        $('#boxesContainer').addClass('stop_trying');
        $(this).attr('src', box_d);
        $(this).addClass('shake');
        $(this).parent('.boxes_item').addClass('afterlose-boxes_item');
        $('.box-tooltip-title').html(
          '<b>Nic jsem nevyhrál</b><br> odešel jsi  <span style="color: red;">1 pokus</span>! Zkus to znovu!'
        );
        $('.box-tooltip-btn').html('Ок');
        setTimeout(function () {
          $('.box-popup-wrapper.tooltip').fadeIn(100);
        }, 850);
      }
      if (tries == 1) {
        $('#boxesContainer').addClass('stop_trying');
        //   $(this).parent(".boxes_item").html('<p class="win_prize">50% отстъпка</p>');
        $(this).attr('src', discount);
        $('.box-tooltip-title').html('<b>Gratulujeme!</b><br>Můžete získat nápravu <br><b style="color: red;">s 50% slevou</b>');
        $('.box-tooltip-btn').html('OK');
        // $(".box-tooltip-ico>img").attr("src", congrat);
        setTimeout(function () {
          $('.box-popup-wrapper.tooltip').fadeIn(100);
        }, 1000);
      }
    }
  });

  $('.box-popup-wrapper.tooltip').bind('click', function (e) {
    $('#boxesContainer').removeClass('stop_trying');
    $('.box-popup-wrapper').fadeOut(90);
    tries++;
    triesCount--;
    $('#tries_count').html('<span style="color: red;">' + triesCount + '</span>');
    if (tries == 2) {
      $('#boxesContainer').slideUp('fast');
      $('.lead-form-box').slideDown('fast');
      start_timer();
      $('body,html').animate({
        scrollTop: $('#scroll_to').offset().top - 20
      }, 400);
    }
  });

  var time = 600;
  var intr;

  function start_timer() {
    intr = setInterval(tick, 1000);
  }

  function tick() {
    time = time - 1;
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
      clearInterval(intr);
    }
    secs = secs >= 10 ? secs : '0' + secs;
    $('#min').html('0' + mins);
    $('#sec').html(secs);
  }
}
draw();

// $(document).ready(function () {
//   $('a').attr('data-scroll', '#form-block');
//   $(function () {
//     $('a').click(function (evt) {
//       evt.preventDefault();
//       var target = $(this).attr('data-scroll');
//       $('html, body').animate({
//         scrollTop: $(target).offset().top - 20
//       }, 'slow');
//     });
//   });
// });

$(document).on('click', 'a:not(.ev-footer__link)', function (event) {
	event.preventDefault();
  $("html, body").animate({
    scrollTop: $("#toform").offset().top - 10
  }, 800);
});

const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ],
  monthMin = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
  days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
  daysMin = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  seasons = ['зима', 'весна', 'лето', 'осень'];

function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {
  const _counterLength = 60;
  for (let counter = 0; counter < _counterLength; counter++) {
    innerDate(counter, 'date-');
    innerDate(counter, 'date');
  }

  function innerDate(counter, dateType) {
    let newCounter;
    dateType === 'date-' ? (newCounter = -counter) : (newCounter = counter);
    const _msInDay = 86400000,
      _localDate = new Date(Date.now() + newCounter * _msInDay),
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
      dateFormat !== undefined && dateFormat !== '' ?
        (nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter))) :
        (nodeList[i].innerHTML = defaultDate);
    }
  }

  function changeFormat(_day, _month, _year, format, counter) {
    let innerFormat = format;
    const testFormat = ['dd', 'mm', 'yyyy', 'monthFull', 'year'],
      dateFormat = {
        dd: _day,
        mm: addZero(_month),
        yyyy: _year,
        monthFull: getMonthName(_month, monthsName, false),
        year: getYearWithCounter(_year, counter),
      };
    for (let i = 0; i < testFormat.length; i++) {
      let string = testFormat[i];
      let regExp = new RegExp(string);
      innerFormat = innerFormat.replace(regExp, dateFormat[string]);
    }
    return innerFormat.split(' ').join(' ');
  }

  function getMonthName(_month, monthsName, bigFirstLetter, counter) {
    const monthCounter = !!counter ? counter : 0;
    let month;
    _month + monthCounter > 12 ? (month = monthCounter - (12 - _month)) : (month = _month + monthCounter);
    _month + monthCounter <= 0 ? (month = 12 + monthCounter + 1) : (month = _month + monthCounter);
    return changeFirstLetter(bigFirstLetter, monthsName[month - 1]);
  }

  function getYearWithCounter(year, counter) {
    return year + counter;
  }

  function addZero(numb) {
    return numb < 10 ? '0' + numb : numb;
  }

  function changeFirstLetter(isBig, str) {
    return isBig && str && str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str;
  }
}
if (document.body.classList.contains('ev-date')) {
  document.addEventListener('DOMContentLoaded', function () {
    postDate(days, daysMin, months, monthMin, seasons);
  });
}
