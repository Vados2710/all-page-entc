// scroll

var linkNav = document.querySelectorAll('[href^="#"]'),
  V = 0.2;
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function (e) {
    //по клику на ссылку
    e.preventDefault();
    //отменяем стандартное поведение
    var w = window.pageYOffset, // производим прокрутка прокрутка
      hash = this.href.replace(/[^#]*(.*)/, '$1');
    // к id элемента, к которому нужно перейти
    t = document.querySelector(hash).getBoundingClientRect().top,
      // отступ от окна браузера до id
      start = null;
    requestAnimationFrame(step);
    // подробнее про функцию анимации [developer.mozilla.org]
    function step(time) {
      if (start === null)
        start = time;
      var progress = time - start,
        r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
      window.scrollTo(0, r);
      if (r != w + t) {
        requestAnimationFrame(step)
      } else {
        location.hash = hash
        // URL с хэшем
      }
    }
  }, false);
}

// scroll end

// date

const months = ['sausis', 'vasaris', 'kovas', 'balandis', 'gegužės', 'birželis', 'liepa', 'rugpjūtis', 'rugsėjis', 'spalis', 'lapkritis', 'gruodis'],
  monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''],
  days = ['sekmadienis', 'pirmadienis', 'antradienis', 'trečiadienis', 'ketvirtadienis', 'penktadienis', 'šeštadienis'],
  daysMin = ['', '', '', '', '', '', ''],
  seasons = ['žiema', 'pavasaris', 'vasara', 'ruduo'];

function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {
  const _counterLength = 60;
  for (let counter = 0; counter < _counterLength; counter++) {
    innerDate(counter, 'date-');
    innerDate(counter, 'date')
  }

  function innerDate(counter, dateType) {
    let newCounter;
    dateType === 'date-' ? newCounter = -counter : newCounter = counter;
    const _msInDay = 86400000,
      _localDate = new Date(Date.now() + (newCounter * _msInDay)),
      _day = _localDate.getDate(),
      _month = _localDate.getMonth() + 1,
      _year = _localDate.getFullYear();
    const dayDefault = addZero(_day),
      monthDefault = addZero(_month),
      defaultDate = dayDefault + '.' + monthDefault + '.' + _year;
    const dateClass = dateType + counter,
      nodeList = document.querySelectorAll('.' + dateClass);
    for (let i = 0; i < nodeList.length; i++)
      nodeList[i].innerHTML = defaultDate
  }

  function innerCommentTime() {
    const timeNodes = document.querySelectorAll('.time'),
      timeTodayNodes = document.querySelectorAll('.time-today'),
      dateNow = new Date().getHours();
    getRandomTime(timeNodes, 23);
    getRandomTime(timeTodayNodes, dateNow - 1);
  }
  innerCommentTime();

  function getRandomTime(nodeList, hourLimit) {
    let tempHourArr = [],
      tempMinuteArr = [];
    for (let index = 0; index < nodeList.length; index++) {
      tempHourArr.push(Math.floor(Math.random() * Math.floor(hourLimit)));
      tempMinuteArr.push(Math.floor(Math.random() * Math.floor(59)));
      const hoursSortArr = sortArr(tempHourArr),
        minuteSortArr = sortArr(tempMinuteArr);
      let innerHour = addZero(hoursSortArr[index]),
        innerMinute = addZero(minuteSortArr[index]);
      nodeList[index].innerHTML = innerHour + ":" + innerMinute
    }
  }

  function sortArr(arr) {
    return arr.sort(function (a, b) {
      return a - b
    });
  }

  function addZero(numb) {
    return numb < 10 ? '0' + numb : numb
  }
}
if (document.body.classList.contains('ev-date')) {
  document.addEventListener("DOMContentLoaded", function () {
    postDate(days, daysMin, months, monthMin, seasons)
  });
}


// Функция для просчитывания отступов баннера с таймером


$(window).on('resize', function () {
  if (($('.fixed-el').offset().top > 100)) {
    let mainbHeight2 = $('.main-banner').outerHeight();
    $('.banner').css('bottom', mainbHeight2 + 'px');
  } else if ($('.fixed-el').offset().top <= 100) {
    $('.banner').css('bottom', '0');
  }
});