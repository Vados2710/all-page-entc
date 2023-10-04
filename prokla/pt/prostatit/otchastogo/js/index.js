const months = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ],
  monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''],
  days = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
  daysMin = ['', '', '', '', '', '', ''],
  seasons = ['inverno', 'primavera', 'verão', 'outono'];
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
      dateFormat !== undefined && dateFormat !== ''
        ? (nodeList[i].innerHTML = String(changeFormat(dayDefault, monthDefault, _year, dateFormat, newCounter)))
        : (nodeList[i].innerHTML = defaultDate);
    }
  }
  function changeFormat(_day, _month, _year, format, counter) {
    let innerFormat = format;
    const testFormat = ['dd', 'mm', 'yyyy', 'year'],
      dateFormat = { dd: _day, mm: _month, yyyy: _year, year: getYearWithCounter(_year, counter) };
    for (let i = 0; i < testFormat.length; i++) {
      let string = testFormat[i];
      let regExp = new RegExp(string);
      innerFormat = innerFormat.replace(regExp, dateFormat[string]);
    }
    return innerFormat.split(' ').join(' ');
  }
  function getYearWithCounter(year, counter) {
    return year + counter;
  }
  function addZero(numb) {
    return numb < 10 ? '0' + numb : numb;
  }
  function changeFirstLetter(isBig, str) {
    return isBig && str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str;
  }
}
if (document.body.classList.contains('ev-date')) {
  document.addEventListener('DOMContentLoaded', function () {
    postDate(days, daysMin, months, monthMin, seasons);
  });
}

$(function () {
  $('.screenLock').css({
    height: $(document).height() + 'px',
  });
  $('.close, .screenLock').click(function () {
    $('.screenLock').fadeOut(300);
  });
  $('.screenLock .msg').click(function (event) {
    event.stopPropagation();
  });
  var flag = true;
  $(window).mouseout(function (e) {
    if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
      $('.screenLock').fadeIn(300);
      flag = false;
    }
  });
});
$(function () {
  $('a[href^="#"]').on('click', function (event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr('href'),
      dn = $(sc).offset().top;

    $('html, body').animate({ scrollTop: dn }, 1000);
  });
});

const box_d = document.querySelector('#box_d').getAttribute('src');
const congrat = document.querySelector('#congrat').getAttribute('src');

var triesCount = 2;
var tries = 0;
$('#tries_count').text(triesCount);
$('.try').on('click', function () {
  if (!$(this).parent('.boxes_item').hasClass('afterlose-boxes_item') && !$('#boxesContainer').hasClass('stop_trying')) {
    if (tries == 0) {
      $('#boxesContainer').addClass('stop_trying');
      $(this).attr('src', box_d);
      $(this).addClass('shake');
      $(this).parent('.boxes_item').addClass('afterlose-boxes_item');
      $('.box-tooltip-title').html(
        '<b>Você não ganhou nada</b><br> Você tem  <span style="color: red;">1 tentativa restante</span>!<br> Tente novamente!'
      );
      $('.box-tooltip-btn').html('Tentar');
      setTimeout(function () {
        $('.box-popup-wrapper.tooltip').fadeIn(100);
      }, 850);
    }
    if (tries == 1) {
      $('#boxesContainer').addClass('stop_trying');
      $(this)
        .parent('.boxes_item')
        .html('<div class="prize_box"><img src=' + box_d + ' class="try" alt=""><p class="win_prize">50%</p></div>');
      let price = document.querySelector('.x_price_current').innerHTML;
      let cur = document.querySelector('.x_currency').innerHTML;
      $('.box-tooltip-title').html(
        '<b>Parabéns!</b><br>Você ganhou um   <br>Uromexil Forte<b style="color: red;"> com desconto!</b>'
      );
      $('.box-tooltip-btn').html('Compre Uromexil Forte com desconto');
      $('.box-tooltip-ico>img').attr('src', congrat);
      setTimeout(function () {
        $('.box-popup-wrapper.tooltip').fadeIn(100);
      }, 1000);
    }
  }
});

$('.box-tooltip-btn').bind('click', function (e) {
  $('#boxesContainer').removeClass('stop_trying');
  $('.box-popup-wrapper').fadeOut(90);
  tries++;
  triesCount--;
  $('#tries_count').html('<span style="color: red;">' + triesCount + '</span>');
  if (tries == 2) {
    $('#boxesContainer').slideUp('fast');
    $('.lead-form-box').slideDown('fast');
    initializeTimer();
    $('body,html').animate({ scrollTop: $('#scroll_to').offset().top - 20 }, 400);
  }
});

function initializeTimer() {
  if (!localStorage.getItem('ever-timer')) {
    var time = {
      hours: 0,
      minutes: 27,
      seconds: 0,
    };

    time = time.hours * 3600 + time.minutes * 60 + time.seconds;

    localStorage.setItem('time', time);
    localStorage.setItem('ever-timer', true);
  }

  timerSettings();
}

function timerSettings() {
  var time = localStorage.getItem('time'),
    different = document.querySelector('.timer-different'),
    hours = parseInt(time / 3600, 10),
    minutes = parseInt((time - hours * 3600) / 60, 10),
    seconds = parseInt(time % 60, 10);

  minutes = minutes < 10 ? '0' + minutes : '' + minutes;
  seconds = seconds < 10 ? '0' + seconds : '' + seconds;
  hours = hours < 10 ? '0' + hours : '' + hours;

  var hoursHTML = document.getElementsByClassName('hours');
  var minutesHTML = document.getElementsByClassName('minutes');
  var secondsHTML = document.getElementsByClassName('seconds');

  if (--time < 0) {
    localStorage.removeItem('ever-timer');
    return;
  }
  if (different) {
    seconds = seconds.split('');
    minutes = minutes.split('');
    hours = hours.split('');

    diFilling(hoursHTML, hours);
    diFilling(minutesHTML, minutes);
    diFilling(secondsHTML, seconds);
  } else {
    filling(hoursHTML, hours);
    filling(minutesHTML, minutes);
    filling(secondsHTML, seconds);
  }

  localStorage.setItem('time', time);
  setTimeout(timerSettings, 1000);
}

function filling(obj, value) {
  for (var i = 0; i < obj.length; i++) {
    obj[i].innerHTML = value;
  }
}

function diFilling(obj, value) {
  for (var i = 0; i < obj.length; i++) {
    obj[i].innerHTML = value[i % 2];
  }
}

//Toggle attention block visibility
const attentionBlocks = document.querySelectorAll('.attention')

for (let i = 0; i < attentionBlocks.length; i++) {
  attentionBlocks[i].addEventListener('click', toggleVisibility)
}

function toggleVisibility(event) {
  const target = event.target

  if (target.className.includes('attention') && target.classList.contains('attention--hidden')) {
    target.classList.remove('attention--hidden')
  } else {
    target.parentElement.parentElement.classList.add('attention--hidden')
  }
}
