var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');

function spin() {
  if (!wheel.classList.contains('rotated')) {
    wheel.classList.add('super-rotation');
    setTimeout(function () {
      resultWrapper.style.display = 'block';
    }, 8000);
    setTimeout(function () {
      $('.spin-wrapper').slideUp(300);
      $('.order_block').slideDown(300);
      // start_timer();
    }, 10000);
    wheel.classList.add('rotated');
  }
}

var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
  e.preventDefault();
  $('.spin-result-wrapper').fadeOut();
  $('html, body').animate(2000);
});

$(document).mouseup(function (e) {
  var container = $('.spin-result-wrapper');
  if (container.has(e.target).length === 0) {
    container.hide();
  }
});

const months = [
    'يَنَايِرُ',
    'فِبْرَايِرُ',
    'مَارِسُ',
    'أَبْرِيلُ',
    'مَايُو',
    'يُونْيُو',
    'يُولْيُو',
    'أَغُسْطُسُ',
    'سِبْتَمْبَرُ',
    'أُكْتُوبَرُ',
    'نُوفَمْبَرُ',
    'دِيسَمْبَرُ',
  ],
  monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''],
  days = ['‫الأحد', '‫الاثنين', '‫الثلاثاء', '‫الأربعاء', 'الخميس', 'الجمعة‬', 'السبت‬'],
  daysMin = ['', '', '', '', '', '', ''],
  seasons = ['شِتَاء', 'رَبِيع', 'صَيْف', 'خَرِيف'];
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
    const testFormat = ['dd', 'mm', 'yyyy', 'monthFull', 'year'],
      dateFormat = {
        dd: _day,
        mm: addZero(_month),
        yyyy: _year,
        monthFull: getMonthName(_month, monthsName, true),
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
