function main() {

  $('.reviews-text').on('afterChange', function (e, t, o) {
    $(this)
      .find('.slick-slide.text-open')
      .not('.slick-active')
      .removeClass('text-open')
  }),
    $('.reviews-text__btn').on('click', function () {
      this.parentElement.classList.toggle('text-open'),
        $('.reviews-text')
          .find('.slick-slide.slick-active')
          .height('auto'),
        $('.reviews-text')
          .find('.slick-list')
          .height('auto')
    }),
    $('.reviews-text').slick({
      infinite: !0,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: !0,
      dots: !0,
      nextArrow: '.arrow-right-text',
      prevArrow: '.arrow-left-text',
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
        { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 2 } },
        {
          breakpoint: 640,
          settings: { slidesToShow: 1, slidesToScroll: 1, adaptiveHeight: !0 }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: !0,
            arrows: !0
          }
        }
      ]
    }),
    $('.video-slider').slick({
      infinite: !0,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: !0,
      dots: !1,
      nextArrow: '.arrow-right-video',
      prevArrow: '.arrow-left-video',
      responsive: [
        {
          breakpoint: 1024,
          settings: { slidesToShow: 2, slidesToScroll: 2, dots: !0 }
        },
        {
          breakpoint: 767,
          settings: { slidesToShow: 2, slidesToScroll: 2, dots: !0 }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: !0,
            dots: !0
          }
        }
      ]
    })
}
document.documentElement.clientWidth < 480
  ? window.addEventListener(
    'scroll',
    function () {
      return setTimeout(main, 1e3)
    },
    { once: !0, passive: !0 }
  )
  : main()

function validateNum(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

function validateText(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[A-Za-zА-Яа-я]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

// Вешаем на инпуты
// onkeypress='validateText(event)'
// onkeypress='validateNum(event)'

// Scroll--------------------------------------------------

$(function () {
  $('a[href^="#"]').on('click', function (event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr('href'),
      dn = $(sc).offset().top;

    $('html, body').animate({ scrollTop: dn }, 1000);
  });
});

// Date ----------------------------------------------------

if (document.body.classList.contains('ev-date')) {
  // Якщо потрібен вивід дати та час + хвилин, тоді до спана з датою додаємо клас "time" <span class="date-1 time"></span>.
  // Працює як в порядку спадання, так і в порядку зростання.
  document.addEventListener('DOMContentLoaded', Datee);

  function Datee() {
    var msInDay = 86400000,
      counterLength = 90,
      months,
      countryName = 'it', // Встановлюємо мову для місяців.
      isAbbreviated = false, // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн" і т.д, тоді ставим TRUE.
      localDate = new Date();

    

    for (var counter = 0; counter < counterLength; counter++) {
      var dateClass = 'date-' + counter,
        nodeList = document.getElementsByClassName(dateClass),
        date = new Date(localDate.getTime() - counter * msInDay),
        timeCounter = 0;
      var timeArray = time(nodeList /*, true*/); // Розкоментувати, якщо необхідне сортування в порядку спадання.

      timeArray = timeFormat(timeArray);

      for (var i = 0; i < nodeList.length; i++) {
        var data = nodeList[i].dataset;

        if (data.format) {
          nodeList[i].innerHTML = format(date, data.format);
          // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
          // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
        } else {
          nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
        }
        if (/\btime\b/.test(nodeList[i].className)) {
          nodeList[i].innerHTML += ' ' + timeArray[timeCounter]; // Рядок для формату виводу часу.
          timeCounter++;
        }
      }
    }

    // <span clas="date-NUMBER"></span> - мотає час назад на NUMBER днів. Наприклад, <span className="date-5"></span>
    // <span clas="dateNUMBER"></span> - мотає час вперед на NUMBER днів. Наприклад, <span className="date5"></span>

    for (var counter = 0; counter < counterLength; counter++) {
      var dateClass = 'date' + counter,
        nodeList = document.getElementsByClassName(dateClass),
        date = new Date(localDate.getTime() + counter * msInDay),
        timeCounter = 0;
      var timeArray = time(nodeList /*, true*/); // Розкоментувати, якщо необхідне сортування в порядку спадання.

      timeArray = timeFormat(timeArray);

      for (var i = 0; i < nodeList.length; i++) {
        var data = nodeList[i].dataset;

        if (data.format) {
          nodeList[i].innerHTML = format(date, data.format);
          // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
          // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
        } else {
          nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
        }
      }
    }

    function time(nodeList, reverse) {
      var timeArray = [];

      for (var i = 0; i < nodeList.length; i++) {
        if (nodeList[i].className.match(/\btime\b/)) {
          timeArray.push(timeRandom());
        }
      }

      if (reverse)
        timeArray.sort(function (a, b) {
          return b - a;
        });
      else
        timeArray.sort(function (a, b) {
          return a - b;
        });

      return timeArray;
    }

    function timeRandom() {
      return Math.round(0 + Math.random() * 1440);
    }

    function timeFormat(timearray) {
      var array = [];

      for (var i = 0; i < timearray.length; i++) {
        var htemp = Math.floor(timearray[i] / 60),
          mtemp = timearray[i] % 60,
          hours = htemp < 10 ? '0' + htemp : htemp,
          minutes = mtemp < 10 ? '0' + mtemp : mtemp;
        array.push(hours + ':' + minutes);
      }

      return array;
    }

    function format(date, formatstring) {
      var innerDate = '',
        day = date.getDate(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        fo = formatstring || true;

      switch (fo) {
        case 'yyyy':
          innerDate += '' + year;
          return innerDate;

        case 'yyyy-1':
          innerDate += '' + year - 1;
          return innerDate;

        case 'yyyy-2':
          innerDate += '' + year - 2;
          return innerDate;

        case 'mm.dd.yyyy':
          innerDate += month < 10 ? '0' + month : month;
          innerDate += '.';
          innerDate += day < 10 ? '0' + day : day;
          innerDate += '.' + year;
          return innerDate;

        case 'month':
          innerDate += months[month - 1].toLowerCase();
          return innerDate;
        case 'nextmonth':
          innerDate += months[month].toLowerCase();
          return innerDate;

        case 'dd':
          innerDate += day < 10 ? '0' + day : day;
          return innerDate;

        case 'dd month':
          innerDate += day < 10 ? '0' + day : day;
          innerDate += ' ';
          innerDate += months[month - 1].toLowerCase();
          return innerDate;

        case 'dd month yyyy':
          innerDate += day < 10 ? '0' + day : day;
          innerDate += ' ';
          innerDate += months[month - 1].toLowerCase();
          innerDate += ' ' + year;
          return innerDate;

        case 'day dd, month yyyy':
          var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
          innerDate += days[new Date(year, month - 1, day).getDay()];
          innerDate += ' ';
          innerDate += day < 10 ? '0' + day : day;
          innerDate += ' ';
          innerDate += months[month - 1];
          innerDate += ' ' + year;
          return innerDate;

        case 'dd/mm/yyyy':
          innerDate += day < 10 ? '0' + day : day;
          innerDate += '/';
          innerDate += month < 10 ? '0' + month : month;
          innerDate += '/' + year;
          return innerDate;

        case 'dd-mm-yyyy':
          innerDate += day < 10 ? '0' + day : day;
          innerDate += '-';
          innerDate += month < 10 ? '0' + month : month;
          innerDate += '-' + year;
          return innerDate;
        case 'thai':
          innerDate += day < 10 ? '0' + day : day;
          innerDate += '.';
          innerDate += month < 10 ? '0' + month : month;
          innerDate += '.' + (year + 543);
          return innerDate;

        default:
          innerDate += day < 10 ? '0' + day : day;
          innerDate += '.';
          innerDate += month < 10 ? '0' + month : month;
          innerDate += '.' + year;
          return innerDate;
      }
    }
  }
}