function startTimer(duration, min, sec) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    min.textContent = minutes;
    sec.textContent = seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 10,
    minutes = document.querySelector('#min');
  seconds = document.querySelector('#sec');
  startTimer(fiveMinutes, minutes, seconds);
};

('use strict');
var slideShow = (function () {
  return function (selector, config) {
    var _slider = document.querySelector(selector), // основный элемент блока
      _sliderContainer = _slider.querySelector('.slider__items'), // контейнер для .slider-item
      _sliderItems = _slider.querySelectorAll('.slider__item'), // коллекция .slider-item
      _sliderControls = _slider.querySelectorAll('.slider__control'), // элементы управления
      _currentPosition = 0, // позиция левого активного элемента
      _transformValue = 0, // значение транфсофрмации .slider_wrapper
      _transformStep = 100, // величина шага (для трансформации)
      _itemsArray = [], // массив элементов
      _timerId,
      _indicatorItems,
      _indicatorIndex = 0,
      _indicatorIndexMax = _sliderItems.length - 1,
      _stepTouch = 50,
      _config = {
        isAutoplay: false, // автоматическая смена слайдов
        directionAutoplay: 'next', // направление смены слайдов
        delayAutoplay: 11000, // интервал между автоматической сменой слайдов
        isPauseOnHover: true, // устанавливать ли паузу при поднесении курсора к слайдеру
      };

    // настройка конфигурации слайдера в зависимости от полученных ключей
    for (var key in config) {
      if (key in _config) {
        _config[key] = config[key];
      }
    }

    // наполнение массива _itemsArray
    for (var i = 0, length = _sliderItems.length; i < length; i++) {
      _itemsArray.push({
        item: _sliderItems[i],
        position: i,
        transform: 0,
      });
    }

    // переменная position содержит методы с помощью которой можно получить минимальный и максимальный индекс элемента, а также соответствующему этому индексу позицию
    var position = {
      getItemIndex: function (mode) {
        var index = 0;
        for (var i = 0, length = _itemsArray.length; i < length; i++) {
          if (
            (_itemsArray[i].position < _itemsArray[index].position && mode === 'min') ||
            (_itemsArray[i].position > _itemsArray[index].position && mode === 'max')
          ) {
            index = i;
          }
        }
        return index;
      },
      getItemPosition: function (mode) {
        return _itemsArray[position.getItemIndex(mode)].position;
      },
    };

    // функция, выполняющая смену слайда в указанном направлении
    var _move = function (direction) {
      var nextItem,
        currentIndicator = _indicatorIndex;
      if (direction === 'next') {
        _currentPosition++;
        if (_currentPosition > position.getItemPosition('max')) {
          nextItem = position.getItemIndex('min');
          _itemsArray[nextItem].position = position.getItemPosition('max') + 1;
          _itemsArray[nextItem].transform += _itemsArray.length * 100;
          _itemsArray[nextItem].item.style.transform = 'translateX(' + _itemsArray[nextItem].transform + '%)';
        }
        _transformValue -= _transformStep;
        _indicatorIndex = _indicatorIndex + 1;
        if (_indicatorIndex > _indicatorIndexMax) {
          _indicatorIndex = 0;
        }
      } else {
        _currentPosition--;
        if (_currentPosition < position.getItemPosition('min')) {
          nextItem = position.getItemIndex('max');
          _itemsArray[nextItem].position = position.getItemPosition('min') - 1;
          _itemsArray[nextItem].transform -= _itemsArray.length * 100;
          _itemsArray[nextItem].item.style.transform = 'translateX(' + _itemsArray[nextItem].transform + '%)';
        }
        _transformValue += _transformStep;
        _indicatorIndex = _indicatorIndex - 1;
        if (_indicatorIndex < 0) {
          _indicatorIndex = _indicatorIndexMax;
        }
      }
      _sliderContainer.style.transform = 'translateX(' + _transformValue + '%)';
      _indicatorItems[currentIndicator].classList.remove('active');
      _indicatorItems[_indicatorIndex].classList.add('active');
    };

    // функция, осуществляющая переход к слайду по его порядковому номеру
    var _moveTo = function (index) {
      var i = 0,
        direction = index > _indicatorIndex ? 'next' : 'prev';
      while (index !== _indicatorIndex && i <= _indicatorIndexMax) {
        _move(direction);
        i++;
      }
    };

    // функция для запуска автоматической смены слайдов через промежутки времени
    var _startAutoplay = function () {
      if (!_config.isAutoplay) {
        return;
      }
      _stopAutoplay();
      _timerId = setInterval(function () {
        _move(_config.directionAutoplay);
      }, _config.delayAutoplay);
    };

    // функция, отключающая автоматическую смену слайдов
    var _stopAutoplay = function () {
      clearInterval(_timerId);
    };

    // функция, добавляющая индикаторы к слайдеру
    var _addIndicators = function () {
      var indicatorsContainer = document.createElement('ol');
      indicatorsContainer.classList.add('slider__indicators');
      for (var i = 0, length = _sliderItems.length; i < length; i++) {
        var sliderIndicatorsItem = document.createElement('li');
        if (i === 0) {
          sliderIndicatorsItem.classList.add('active');
        }
        sliderIndicatorsItem.setAttribute('data-slide-to', i);
        indicatorsContainer.appendChild(sliderIndicatorsItem);
      }
      _slider.appendChild(indicatorsContainer);
      _indicatorItems = _slider.querySelectorAll('.slider__indicators > li');
    };

    var _isTouchDevice = function () {
      return !!('ontouchstart' in window || navigator.maxTouchPoints);
    };

    // функция, осуществляющая установку обработчиков для событий
    var _setUpListeners = function () {
      var _startX = 0;
      if (_isTouchDevice()) {
        _slider.addEventListener('touchstart', function (e) {
          _startX = e.changedTouches[0].clientX;
          _startAutoplay();
        });
        _slider.addEventListener('touchend', function (e) {
          var _endX = e.changedTouches[0].clientX,
            _deltaX = _endX - _startX;
          if (_deltaX > _stepTouch) {
            _move('prev');
          } else if (_deltaX < -_stepTouch) {
            _move('next');
          }
          _startAutoplay();
        });
      } else {
        for (var i = 0, length = _sliderControls.length; i < length; i++) {
          _sliderControls[i].classList.add('slider__control_show');
        }
      }
      _slider.addEventListener('click', function (e) {
        if (e.target.classList.contains('slider__control')) {
          e.preventDefault();
          _move(e.target.classList.contains('slider__control_next') ? 'next' : 'prev');
          _startAutoplay();
        } else if (e.target.getAttribute('data-slide-to')) {
          e.preventDefault();
          _moveTo(parseInt(e.target.getAttribute('data-slide-to')));
          _startAutoplay();
        }
      });
      document.addEventListener(
        'visibilitychange',
        function () {
          if (document.visibilityState === 'hidden') {
            _stopAutoplay();
          } else {
            _startAutoplay();
          }
        },
        false
      );
      if (_config.isPauseOnHover && _config.isAutoplay) {
        _slider.addEventListener('mouseenter', function () {
          _stopAutoplay();
        });
        _slider.addEventListener('mouseleave', function () {
          _startAutoplay();
        });
      }
    };

    // добавляем индикаторы к слайдеру
    _addIndicators();
    // установливаем обработчики для событий
    _setUpListeners();
    // запускаем автоматическую смену слайдов, если установлен соответствующий ключ
    _startAutoplay();

    return {
      // метод слайдера для перехода к следующему слайду
      next: function () {
        _move('next');
      },
      // метод слайдера для перехода к предыдущему слайду
      left: function () {
        _move('prev');
      },
      // метод отключающий автоматическую смену слайдов
      stop: function () {
        _config.isAutoplay = false;
        _stopAutoplay();
      },
      // метод запускающий автоматическую смену слайдов
      cycle: function () {
        _config.isAutoplay = true;
        _startAutoplay();
      },
    };
  };
})();

slideShow('.slider', {
  isAutoplay: true,
});

$(function () {
  $('.menu__icon').on('click', function () {
    $(this).closest('.menu__icon').toggleClass('active');
    $('.main-menu').slideToggle('slow', function () {
      if ($('.main-menu').css('display') === 'none') {
        $('.main-menu').removeAttr('style');
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // Вивід дати (+ час).
  postDate();
});

function postDate() {
  // Додаємо клас "date-N", де N - кількість "відмотаних" днів.
  // Наприклад, span class="date-0"></span> - мотає 0 днів назад (сьогодні).
  // Наприклад, span class="date-5"></span> - мотає 5 днів назад.

  // Вивід дати (+ години + хвилини), додаємо клас "time". Наприклад, <span class="date-1 time"></span>.
  // Виводить у форматі на зразок "14.02.2018 14:22"
  // Працює як в порядку зростання, так і в порядку спадання (міняємо флажок нижче)
  var body = document.body,
    postLang = body.getAttribute('data-post-lang');

  var sa = body.getAttribute('data-post-format') || 'dd.mm.yyyy',
    msInDay = 86400000,
    counterLength = 90, // Максимальна кількість вімотаних днів. Змінюємо за необхідності.
    months,
    countryName = 'ro',
    // Мова для місяців.
    isAbbreviated = body.getAttribute('data-post-abbreviated') ? true : false, // Скорочений варіант місяців до трьох букв
    localDate = new Date();

  var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  switch (countryName) {
    case 'cs': // Czech
      months = [
        'Leden',
        'Únor',
        'Březen',
        'Duben',
        'Květen',
        'Červen',
        'Červenec',
        'Srpen',
        'Září',
        'Říjen',
        'Listopad',
        'Prosinec',
      ];
      break;
    case 'ro': // Romania
      days = ['Luni', 'Marţi', 'Miercuri', 'Joi', 'Vineri', 'Sîmbătă', 'Duminică'];
      break;
    case 'ru': // Russia
    default:
      days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
      break;
  }

  switch (countryName) {
    case 'lv': // Latvia латышский
      months = [
        'Janvāris',
        'Februāris',
        'Marts',
        'Aprīlis',
        'Maijs',
        'Jūnijs',
        'Jūlijs',
        'Augusts',
        'Septembris',
        'Oktobris',
        'Novembris',
        'Decembris',
      ];
      break;
    case 'ro': // Romania
      months = [
        'Ianuarie',
        'Februarie',
        'Martie',
        'Aprilie',
        'Mai',
        'Iunie',
        'Iulie',
        'August',
        'Septembrie',
        'Octombrie',
        'Noiembrie',
        'Decembrie',
      ];
      break;
  }
  if (isAbbreviated) {
    for (var i = 0; i < months.length; i++) {
      months[i] = months[i].slice(0, 3).toLowerCase(); // Прибираємо ".toLowerCase()", якщо перша буква повинна бути великою.
    }
  }

  for (var counter = 0; counter < counterLength; counter++) {
    var dateClass = 'date-' + counter,
      nodeList = document.getElementsByClassName(dateClass),
      date = new Date(localDate.getTime() - counter * msInDay),
      timeCounter = 0,
      timeArray = time(nodeList /*, true*/); // Розкоментувати, якщо необхідне сортування в порядку спадання.

    timeArray = timeFormat(timeArray);

    for (var i = 0; i < nodeList.length; i++) {
      var data = nodeList[i].dataset;

      if (data.format) {
        nodeList[i].innerHTML = format(date, data.format);
        // format: особливий формать для окремої дати. Додаємo як data-format="фомарт".
        /// Формати дивитись в switch нижче. dd - числом, day - прописом.

        // Наприклад, <span class="date-1" data-format="dd month yyyy"></span>
        // мотає на 1 день назад і виводить цей span у вигляді "14 Лютого 2018".
      } else {
        // Загальний формат виводу дати змінювати ТУТ!
        nodeList[i].innerHTML = format(date, sa); // Default: dd.mm.yyyy
      }
      if (/\btime\b/.test(nodeList[i].className)) {
        nodeList[i].innerHTML += ' ' + timeArray[timeCounter]; // Рядок для формату виводу часу.
        timeCounter++;
      }
    }
  }

  // <span clas="date-N"></span> - мотає час назад на N днів. Наприклад, <span className="date-5"></span>
  // <span clas="dateN"></span> - мотає час вперед на N днів. Наприклад, <span className="date5"></span>

  for (var counter = 0; counter < counterLength; counter++) {
    var dateClass = 'date' + counter,
      nodeList = document.getElementsByClassName(dateClass),
      date = new Date(localDate.getTime() + counter * msInDay),
      timeCounter = 0;

    for (var i = 0; i < nodeList.length; i++) {
      var data = nodeList[i].dataset;

      if (data.format) {
        nodeList[i].innerHTML = format(date, data.format);
      } else {
        nodeList[i].innerHTML = format(date, sa);
      }
    }
  }

  function time(nodeList, reverse) {
    var timeArray = [],
      timeStatement = false;

    for (var i = 0; i < nodeList.length; i++) {
      if (nodeList[i].className.match(/\btime\b/)) {
        if (nodeList[i].className.match(/\bdate-0\b/)) {
          timeStatement = true;
        }
        timeArray.push(timeRandom(timeStatement));
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

  function timeRandom(statement) {
    if (statement) {
      var date = new Date(),
        timeLimit = date.getHours() * 60 + date.getMinutes();

      return Math.round(0 + Math.random() * timeLimit);
    }
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

  function notLastIteration(index, array) {
    return index !== array.length - 1;
  }

  function format(date, format) {
    var testFormat = ['dd', 'day', 'mm', 'month', 'yyyy', 'year'];
    var innerDate = format;

    var dd = date.getDate(),
      mm = date.getMonth() + 1,
      year = date.getFullYear(),
      month = months[mm - 1],
      day = days[new Date(year, mm - 1, dd).getDay()];

    dd = dd < 10 ? '0' + dd : dd;
    mm = mm < 10 ? '0' + mm : mm;

    var dateFormat = {
      day: day,
      dd: dd,
      year: year,
      yyyy: year,
      mm: mm,
      month: month,
    };

    for (var i = 0; i < testFormat.length; i++) {
      var string = testFormat[i];
      var regExp = new RegExp(string);
      innerDate = innerDate.replace(regExp, dateFormat[string]);
    }

    return innerDate;
  }
}
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top,
    },
    1000
  );
});
function startTimer(duration, min, sec) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    min.textContent = minutes;
    sec.textContent = seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 10,
    minutes = document.querySelector('#min');
  seconds = document.querySelector('#sec');
  startTimer(fiveMinutes, minutes, seconds);
};
