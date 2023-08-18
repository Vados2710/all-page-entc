const months = [
    'ο Ιανουάριος',
    'ο Φεβρουάριος',
    'ο Μάρτιος',
    'ο Απρίλιος',
    'ο Μάιος',
    'ο Ιούνιος',
    'ο Ιούλιος',
    'ο Αύγουστος',
    'ο Σεπτέμβριος',
    'ο Οκτώβριος',
    'ο Νοέμβριος',
    'ο Δεκέμβριος',
  ],
  monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''],
  days = [
    'η Κυριακή',
    'η Δευτέρα',
    'η Τρίτη',
    'η Τετάρτη',
    'η Πέμπτη',
    'η Παρασκευή',
    'το Σάββατο',
  ],
  daysMin = ['', '', '', '', '', '', ''],
  seasons = ['ο χειμώνας', 'η άνοιξη', 'το καλοκαίρι', 'το φθινόπωρο']
function postDate(
  daysName,
  daysMinName,
  monthsName,
  monthsMinName,
  seasonsName,
) {
  const _counterLength = 700
  for (let counter = 0; counter < _counterLength; counter++) {
    innerDate(counter, 'date-')
    innerDate(counter, 'date')
  }
  function innerDate(counter, dateType) {
    let newCounter
    dateType === 'date-' ? (newCounter = -counter) : (newCounter = counter)
    const _msInDay = 86400000,
      _localDate = new Date(Date.now() + newCounter * _msInDay),
      _day = _localDate.getDate(),
      _month = _localDate.getMonth() + 1,
      _year = _localDate.getFullYear()
    const dayDefault = addZero(_day),
      monthDefault = addZero(_month),
      defaultDate = dayDefault + '.' + monthDefault + '.' + _year
    const dateClass = dateType + counter,
      nodeList = document.querySelectorAll('.' + dateClass)
    for (let i = 0; i < nodeList.length; i++) {
      const dateFormat = nodeList[i].dataset.format
      dateFormat !== undefined && dateFormat !== ''
        ? (nodeList[i].innerHTML = String(
            changeFormat(dayDefault, _month, _year, dateFormat, newCounter),
          ))
        : (nodeList[i].innerHTML = defaultDate)
    }
  }
  function changeFormat(_day, _month, _year, format, counter) {
    let innerFormat = format
    const testFormat = ['dd', 'mm', 'yyyy', 'monthFull', 'year'],
      dateFormat = {
        dd: _day,
        mm: addZero(_month),
        yyyy: _year,
        monthFull: getMonthName(_month, monthsName, false),
        year: getYearWithCounter(_year, counter),
      }
    for (let i = 0; i < testFormat.length; i++) {
      let string = testFormat[i]
      let regExp = new RegExp(string)
      innerFormat = innerFormat.replace(regExp, dateFormat[string])
    }
    return innerFormat.split(' ').join(' ')
  }
  function getMonthName(_month, monthsName, bigFirstLetter, counter) {
    const monthCounter = !!counter ? counter : 0
    let month
    _month + monthCounter > 12
      ? (month = monthCounter - (12 - _month))
      : (month = _month + monthCounter)
    _month + monthCounter <= 0
      ? (month = 12 + monthCounter + 1)
      : (month = _month + monthCounter)
    return changeFirstLetter(bigFirstLetter, monthsName[month - 1])
  }
  function getYearWithCounter(year, counter) {
    return year + counter
  }
  function addZero(numb) {
    return numb < 10 ? '0' + numb : numb
  }
  function changeFirstLetter(isBig, str) {
    return isBig && str && str.length > 0
      ? str[0].toUpperCase() + str.slice(1)
      : str
  }
}
if (document.body.classList.contains('ev-date')) {
  document.addEventListener('DOMContentLoaded', function () {
    postDate(days, daysMin, months, monthMin, seasons)
  })
}





// window.onload = function () {
//   var $date = document.getElementsByClassName('commits__date'),
//     $name = document.getElementById('myName'),
//     $message = document.getElementById('myMessage'),
//     $send = document.getElementById('mySend'),
//     /*айдишник вешаем на дату поста*/ $post = document.getElementById('post')
//   addDate()
//   /*проверка на заполненность полей*/ mySend.onclick = function () {
//     if ($name.value == 0 || $name.value == '') {
//       $name.classList.add('error')
//     } else {
//       $name.classList.remove('error')
//       if ($message.value == 0 || $message.value == '') {
//         $message.classList.add('error')
//       } else {
//         $message.classList.remove('error')
//         sendMessage()
//       }
//     }
//   }
//   /*добавление даты*/ function addDate() {
//     /*пробегаемся по всем классам и устанавливаем время*/ for (
//       var i = $date.length - 1;
//       i >= 0;
//       i--
//     ) {
//       var d = new Date()
//       d.setDate(d.getDate() - ($date.length - 1 - i))
//       $date[i].innerHTML = formatDate(d)
//       if ($post) {
//         $post.innerHTML = formatDate(d)
//       }
//     }
//   }
//   /*форматируем дату*/ function formatDate(date) {
//     var dd = date.getDate()
//     if (dd < 10) dd = '0' + dd
//     var mm = date.getMonth() + 1
//     if (mm < 10) mm = '0' + mm
//     var yy = date.getFullYear() % 100
//     if (yy < 10) yy = '0' + yy
//     return dd + '.' + mm + '.' + yy
//   }

//   /*проверяем писал ли пользователь комментарий*/ if (
//     localStorage.getItem('commit') == 1
//   ) {
//     var $item = document.getElementsByClassName('commits__item')
//     $item[$item.length - 1].classList.add('hide')
//     $item[$item.length - 2].insertAdjacentHTML(
//       'afterend',
//       '<div class="commits__item"><div class="commits__head"><div class="commits__face"></div><div class="commits__info"><div class="commits__name">' +
//         localStorage.getItem('$name') +
//         '</div><div class="commits__date"></div></div></div><div class="commits__body"><div class="commits__description">' +
//         localStorage.getItem('$message') +
//         '</div></div><div class="commits__success">Τα σχόλιά σας ελέγχονται</div></div>',
//     )
//     addDate()
//   }
//   /*вставляем новый комментарий*/ function sendMessage() {
//     var $item = document.getElementsByClassName('commits__item')
//     $item[$item.length - 2].insertAdjacentHTML(
//       'afterend',
//       '<div class="commits__item"><div class="commits__head"><div class="commits__face"></div><div class="commits__info"><div class="commits__name">' +
//         $name.value +
//         '</div><div class="commits__date"></div></div></div><div class="commits__body"><div class="commits__description">' +
//         $message.value +
//         '</div></div><div class="commits__success">Τα σχόλιά σας ελέγχονται</div></div>',
//     )
//     addDate()
//     $item[$item.length - 1].classList.add('hide')
//     localStorage.$name = $name.value
//     localStorage.$message = $message.value
//     /*нужно постоянно менять число и на 116 строке тоже самое*/ localStorage.commit = 1
//   }
// }
