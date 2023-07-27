
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
    document.getElementById('commentFoto').innerHTML = 'Foto subida';
  } else {
    document.getElementById('commentFoto').innerHTML = 'Suba su foto';
  }
});

btn.addEventListener('click', function (event) {
  event.preventDefault();
  message.innerHTML = '';

  if (name.value.trim() && city.value.trim() && text.value.trim()) {
    message.innerHTML = '¡Gracias! Su comentario se envió a moderación';
    name.value = '';
    city.value = '';
    text.value = '';
    commentImage.value = '';
    needPhoto.classList.add('show');
    addedPhoto.classList.remove('show');
    form.classList.remove('show');
  } else {
    message.innerHTML = 'Rellene todos los campos!';
  }
  message.classList.add('show');
});

const months = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ],
  monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''],
  days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
  daysMin = ['', '', '', '', '', '', ''],
  seasons = ['invierno', 'primavera', 'verano', 'otoño'];
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
        ? (nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)))
        : (nodeList[i].innerHTML = defaultDate);
    }
  }
  function changeFormat(_day, _month, _year, format, counter) {
    let innerFormat = format;
    const testFormat = ['dd', 'mm', 'yyyy', 'monthFull', 'monthOnly', 'year'],
      dateFormat = {
        dd: _day,
        mm: addZero(_month),
        yyyy: _year,
        monthFull: getMonthName(_month, monthsName, false),
        monthOnly: getMonthName(_month, monthsName, false, counter),
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

const lastpack2 = document.querySelectorAll('.lastpack2');
let startLast = 32,
  endLast = 11;
console.log(localStorage.getItem('a'));
if (localStorage.getItem('LastStorage') !== null) {
  startLast = localStorage.getItem('LastStorage');
} else {
  startLast = 32;
}
function getCounter() {
  let counterLast = startLast;
  return function () {
    if (counterLast > endLast) {
      counterLast--;
      localStorage.setItem('LastStorage', counterLast);
    } else {
      counterLast = endLast;
    }
    return counterLast;
  };
}

let count = getCounter();

function packDown() {
  let number = count();
  for (let i = 0; i < lastpack2.length; i++) {
    lastpack2[i].innerHTML = number;
  }
}
setTimeout(packDown, 1000);
setInterval(packDown, 11000);

