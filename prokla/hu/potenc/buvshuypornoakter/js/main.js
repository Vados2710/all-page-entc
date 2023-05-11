const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) nodeList[i].innerHTML = defaultDate } function addZero(numb){return numb<10?'0'+numb:numb} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

let name = document.getElementById('name');
let city = document.getElementById('city');
let message = document.getElementById('message');
let file = document.getElementById('file');
let btn = document.getElementById('createReview');

btn.addEventListener('click', function () {
  if (name.value.trim() !== '' && city.value.trim() !== '' && message.value.trim() !== '') {
    name.value = '';
    city.value = '';
    message.value = '';
    document.getElementById('messageError').classList.remove('show');
    document.getElementById('iconFileLoad').classList.remove('show');
    document.getElementById('iconFile').classList.add('show')
    document.getElementById('feedback').classList.add('show');
    setTimeout(function () {
      document.getElementById('feedback').classList.remove('show');
    }, 2000)
  } else {
    document.getElementById('messageError').classList.add('show');
  }
})

file.addEventListener('change', function () {
  if (file.files.length > 0) {
    document.getElementById('iconFileLoad').classList.add('show');
    document.getElementById('iconFile').classList.remove('show')
  } else {
    document.getElementById('iconFileLoad').classList.remove('show');
    document.getElementById('iconFile').classList.add('show')
  }
})


var block = document.querySelector('.sidebar__inner');
var positionBlockTop = block.getBoundingClientRect().top + window.pageYOffset;
var blockComments = document.getElementById('comments');
var positionBlockCommentsTop = blockComments.getBoundingClientRect().top + window.pageYOffset;
var sidebar = document.getElementById('side');

window.addEventListener('resize', function () {
  block.style.position = 'static';
  positionBlockTop = block.getBoundingClientRect().top + window.pageYOffset;
});

const fieldInput = document.querySelectorAll('.field_input')
const accept = document.querySelector('#accept')


accept.addEventListener('click', showResult)
var values = {
  growth: 0,
  age: 0,
  sizeNow: 0,
  wishSize: 0
}
for (var i = 0; i < fieldInput.length; i++) {
  fieldInput[i].onchange = function () {
    values[this.getAttribute('name')] = this.value
  }
}

function showResult() {
  var valuesMap = Object.keys(values).map(function (e) {
    return values[e]
  })
  var resultValue = valuesMap.every(function (el) {
    return el !== 0
  })
  if (resultValue) {
    document.querySelector('#loader').classList.add('active')
    document.querySelector('.field').style.display = 'none'
    document.querySelector('.notice').classList.remove('active')
    accept.style.display = 'none'
    setTimeout(function () {
      document.querySelector('#loader').classList.remove('active')
      document.querySelector('.result').classList.add('active')
    }, 1000)
  } else {
    document.querySelector('.notice').classList.add('active')
  }


}

const box_d = document.querySelector('#box_d').getAttribute('src')
const congrat = document.querySelector('#congrat').getAttribute('src')

var triesCount = 2;
var tries = 0;
$('#tries_count').text(triesCount);
$('.try').on('click', function () {
  if ((!$(this).parent('.boxes_item').hasClass('afterlose-boxes_item')) && (!$('#boxesContainer').hasClass('stop_trying'))) {
    if (tries == 0) {
      $('#boxesContainer').addClass('stop_trying');
      $(this).attr('src', box_d);
      $(this).addClass('shake');
      $(this).parent('.boxes_item').addClass('afterlose-boxes_item');
      $('.box-tooltip-title').html('<b>Nem nyert semmit</b><br> 1 próbálkozásod  <span style="color: red;">maradt</span>! <br>Próbáld újra!');
      $('.box-tooltip-btn').html('Próbáld ki');
      setTimeout(function () {
        $('.box-popup-wrapper.tooltip').fadeIn(100);
      }, 850);
    }
    if (tries == 1) {
      $('#boxesContainer').addClass('stop_trying');
      $(this).parent('.boxes_item').html('<div class="prize_box"><img src=' + box_d + ' class="try" alt=""><p class="win_prize">50%</p></div>');
      let price = document.querySelector('.x_price_current').innerHTML
      let cur = document.querySelector('.x_currency').innerHTML
      $('.box-tooltip-title').html('<b>Gratulálunk!</b><br>Kedvezményes <br>Uromexil Forte<b style="color: red;"> nyert!</b>');
      $('.box-tooltip-btn').html('Szerezzen kedvezményesen <br> az Uromexil Forte');
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
    $("body,html").animate({scrollTop: $("#scroll_to").offset().top - 20}, 400);
  }
});


function initializeTimer() {

  if (!localStorage.getItem("ever-timer")) {
    var time = {
      hours: 0,
      minutes: 27,
      seconds: 0
    };

    time = time.hours * 3600 + time.minutes * 60 + time.seconds;

    localStorage.setItem("time", time);
    localStorage.setItem("ever-timer", true);
  }

  timerSettings();

}

function timerSettings() {
  var time = localStorage.getItem('time'),
    different = document.querySelector(".timer-different"),
    hours = parseInt(time / 3600, 10),
    minutes = parseInt((time - hours * 3600) / 60, 10),
    seconds = parseInt(time % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : "" + minutes;
  seconds = seconds < 10 ? "0" + seconds : "" + seconds;
  hours = hours < 10 ? "0" + hours : "" + hours;

  var hoursHTML = document.getElementsByClassName("hours");
  var minutesHTML = document.getElementsByClassName("minutes");
  var secondsHTML = document.getElementsByClassName("seconds");

  if (--time < 0) {
    localStorage.removeItem("ever-timer");
    return;
  }
  if (different) {
    seconds = seconds.split("");
    minutes = minutes.split("");
    hours = hours.split("");

    diFilling(hoursHTML, hours);
    diFilling(minutesHTML, minutes);
    diFilling(secondsHTML, seconds);
  } else {
    filling(hoursHTML, hours);
    filling(minutesHTML, minutes);
    filling(secondsHTML, seconds);
  }

  localStorage.setItem("time", time);
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
