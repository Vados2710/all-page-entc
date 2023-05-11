$(document).ready(function () {
  var flag = true;

  // function showPopup() {
  //   $(window).mouseout(function (e) {
  //     if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
  //       $('#ouibounce-modal').fadeIn(300);
  //       flag = false;
  //     }
  //   });

  //   $('.underlay').on('click', function (event) {
  //     if ($(event.target).is($('.underlay'))) {
  //       $('#ouibounce-modal').fadeOut(300);
  //     }
  //   });

  //   $('.close-over').on('click', function (event) {
  //     $('#ouibounce-modal').fadeOut(300);
  //   });
  // }

  //проверка браузера с которого зашли и разрешения экрана
  // if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $(window).width() > 1023) {
  //   showPopup();
  // }
});

let form = document.getElementById('commentForm');
let name = document.getElementById('commentName');
let city = document.getElementById('commentCity');
let text = document.getElementById('commentText');
let btn = document.getElementById('commentButton');
let message = document.getElementById('commentMessage');
let commentImage = document.getElementById('commentImage');
let needPhoto = document.getElementById('commentPhotoNeed');
let addedPhoto = document.getElementById('commentPhotoAdded');

commentImage.addEventListener('change', function (event) {
  event.preventDefault();
  if (needPhoto.classList.contains('show')) {
    needPhoto.classList.remove('show');
  }
  if (!addedPhoto.classList.contains('show')) {
    addedPhoto.classList.add('show');
  }
  if (commentImage.value) {
    document.getElementById('commentFoto').innerHTML = 'Fotó feltöltve';
  } else {
    document.getElementById('commentFoto').innerHTML = 'Töltsd fel a képed';
  }
});

function validation(field) {

  let validationCategories = {
    name: /^[^0-9]{2,}$/,
    age: /^[0-9]{2}$/,
    city: /^[^0-9]{2,}$/,
    message: /.{5,}/

  }
  

  function isValidate(value, fieldName) {
    return validationCategories[fieldName].test(String(value).toLowerCase());
  }

  var value = field.value.trim();


  if (value === "" || !isValidate(value, field.name)) {
    console.log('error')
    field.classList.add("error");
    field.classList.remove("succes");
  } else {console.log('secces')
    field.classList.remove("error");
    field.classList.add("succes");
  }
}


form.addEventListener('keyup', function (e) {

    validation(e.target)
  
})

btn.addEventListener('click', function (event) {
  event.preventDefault();
  if (form.querySelector('.error')) {
    return
  }
  
  message.innerHTML = '';

  if (name.value.trim() && city.value.trim() && text.value.trim()) {
    message.innerHTML = 'Köszönöm! Megjegyzését moderálásra küldtük';
    name.value = '';
    city.value = '';
    text.value = '';
    commentImage.value = '';
    needPhoto.classList.add('show');
    addedPhoto.classList.remove('show');
    form.classList.remove('show');
  } else {
    message.innerHTML = 'Töltse ki az összes mezőt!';
  }
  message.classList.add('show');
});

const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}


$(function () {
  $('a[href^="#"]').on('click', function (event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr('href'),
      dn = $(sc).offset().top;

    $('html, body').animate({ scrollTop: dn }, 1000);
  });
});


initializeTimer() 
function initializeTimer() {
    // Додади клас "timer-different" для <body>, якщо необхідно розділяти розряди годин, хвилин і секунд. Наприклад, http://prntscr.com/japnvo

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
        minutes = parseInt((time - hours * 3600 ) / 60, 10),
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