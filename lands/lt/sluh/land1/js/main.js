(function () {
  document.addEventListener("DOMContentLoaded", function () {
    // Вивід дати (+ час).
    // Arguments: dateFormat (string), language (string), abbreviated (bool). Default: 'dd.mm.yyyy', 'ru', false
    postDate( /*'dateFormat', 'ru', false*/ );
  });
  
  function postDate(sa, countryName, isAbbreviated) {
    // Додаємо клас "date-N", де N - кількість "відмотаних" днів.
    // Наприклад, span class="date-0"></span> - мотає 0 днів назад (сьогодні).
    // Наприклад, span class="date-5"></span> - мотає 5 днів назад.
  
    // Вивід дати (+ години + хвилини), додаємо клас "time". Наприклад, <span class="date-1 time"></span>. 
    // Виводить у форматі на зразок "14.02.2018 14:22"
    // Працює як в порядку зростання, так і в порядку спадання (міняємо флажок нижче)
  
    var sa = sa || 'dd.mm.yyyy',
      msInDay = 86400000,
      counterLength = 190, // Максимальна кількість вімотаних днів. Змінюємо за необхідності.
      months,
      countryName = countryName || 'lt', // Мова для місяців. 
      isAbbreviated = isAbbreviated || false, // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн", тоді ставим TRUE.
      localDate = new Date();
  
    switch (countryName) {
      case 'lt': // Litva литовский
        months = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužės', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'];
        break;
    }
  
    if (isAbbreviated) {
      for (var i = 0; i < months.length; i++) {
        months[i] = months[i].slice(0, 3).toLowerCase(); // Прибираємо ".toLowerCase()", якщо перша буква повинна бути великою.
      }
    }
  
    for (var counter = 0; counter < counterLength; counter++) {
      var dateClass = "date-" + counter,
        nodeList = document.getElementsByClassName(dateClass),
        date = new Date(localDate.getTime() - counter * msInDay),
        timeCounter = 0,
        timeArray = time(nodeList /*, true*/ ); // Розкоментувати, якщо необхідне сортування в порядку спадання.
  
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
          nodeList[i].innerHTML += " " + timeArray[timeCounter]; // Рядок для формату виводу часу.
          timeCounter++;
        }
      }
    }
  
    // <span clas="date-N"></span> - мотає час назад на N днів. Наприклад, <span className="date-5"></span>
    // <span clas="dateN"></span> - мотає час вперед на N днів. Наприклад, <span className="date5"></span>
  
    for (var counter = 0; counter < counterLength; counter++) {
      var dateClass = "date" + counter,
        nodeList = document.getElementsByClassName(dateClass),
        date = new Date(localDate.getTime() + counter * msInDay),
        timeCounter = 0;
  
      for (var i = 0; i < nodeList.length; i++) {
        var data = nodeList[i].dataset;
  
        if (data.format) {
          nodeList[i].innerHTML = format(date, data.format);
        } else {
          nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/ );
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
  
      if (reverse) timeArray.sort(function (a, b) {
        return b - a;
      });
      else timeArray.sort(function (a, b) {
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
          hours = htemp < 10 ? "0" + htemp : htemp,
          minutes = mtemp < 10 ? "0" + mtemp : mtemp;
        array.push(hours + ":" + minutes);
      }
  
  
      return array;
    }
  
    function format(date, formatstring) {
      var innerDate = "",
        day = date.getDate(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        fo = formatstring || true;
  
      switch (fo) {
        case "tom":
          innerDate += day + 1;
          innerDate += ".";
          innerDate += (month < 10) ? ("0" + month) : month;
          return innerDate;
        case "mm.dd.yyyy":
          innerDate += (month < 10) ? ("0" + month) : month;
          innerDate += ".";
          innerDate += (day < 10) ? ("0" + day) : day;
          innerDate += "." + year;
          return innerDate;
  
        case "dd month yyyy":
          innerDate += (day < 10) ? ("0" + day) : day;
          innerDate += " ";
          innerDate += months[month - 1];
          innerDate += " " + year;
          return innerDate;
  
        case "dd month":
          innerDate += (day < 10) ? ("0" + day) : day;
          innerDate += " ";
          innerDate += months[month - 1];
          return innerDate;
        case "month":
          innerDate += months[month - 1].toLowerCase();
          return innerDate;
  
        case "day dd, month yyyy":
          var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
          innerDate += days[new Date(year, month - 1, day).getDay()];
          innerDate += " ";
          innerDate += (day < 10) ? ("0" + day) : day;
          innerDate += " ";
          innerDate += months[month - 1];
          innerDate += " " + year;
          return innerDate;
  
        case "dd/mm/yyyy":
          innerDate += (day < 10) ? ("0" + day) : day;
          innerDate += "/";
          innerDate += (month < 10) ? ("0" + month) : month;
          innerDate += "/" + year;
          return innerDate;
  
        case "dd-mm-yyyy":
          innerDate += (day < 10) ? ("0" + day) : day;
          innerDate += "-";
          innerDate += (month < 10) ? ("0" + month) : month;
          innerDate += "-" + year;
          return innerDate;
  
        case "yyyy.mm.dd":
          innerDate += year;
          innerDate += ".";
          innerDate += (month < 10) ? ("0" + month) : month;
          innerDate += ".";
          innerDate += (day < 10) ? ("0" + day) : day;
          return innerDate;
  
        case "month dd, yyyy":
          innerDate += months[month - 1];
          innerDate += " ";
          innerDate += (day < 10) ? ("0" + day) : day;
          innerDate += ", ";
          innerDate += year;
          return innerDate;
  
        case "yyyy":
          innerDate += year;
          return innerDate;
  
        default:
          innerDate += (day < 10) ? ("0" + day) : day;
          innerDate += ".";
          innerDate += (month < 10) ? ("0" + month) : month;
          innerDate += "." + year;
          return innerDate;
      }
    }
  };

  var scrollSmooth = (function () {
    $(document).on("click", "a[href^=\"#\"]", function (event) {
      event.preventDefault();
      $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top
      }, 500);
    });
  });

  var header = (function () {
    $(".header__burger").click(function () {
      $(".header__content").toggleClass('active');
      $(this).toggleClass('active');
    });
    $(".header__link").click(function () {
      $(".header__content").removeClass('active');
      $(".header__burger").removeClass('active');
    });
    $(".header__btn").click(function () {
      $(".header__content").removeClass('active');
      $(".header__burger").removeClass('active');
    });
  });

  var elements = (function () {
    var windowHeight = $(window).height();

    function animationA(params) {
      $(params).each(function () {
        var self = $(this),
            height;

        if (self.height() >= windowHeight) {
          height = self.offset().top + windowHeight - 100;
        } else {
          height = self.offset().top + self.height();
        }

        if ($(document).scrollTop() + windowHeight >= height) {
          self.addClass("show");
        }
      });
    }

    $(document).on("scroll", function () {
      animationA('.sings');
      animationA('.problem');
      animationA('.technology__content');
      animationA('.composition');
      animationA('.reviews');
    });
  });

  var reviews = (function () {
    $('.reviews__slider').slick({
      slidesToShow: 1,
      dots: true,
      slidesToScroll: 1,
      mobileFirst: true,
      adaptiveHeight: true,
      infinite: false,
      prevArrow: '<svg class="reviews__arrow reviews__arrow-left" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" x="0px" y="0px" viewBox="0 0 493.456 493.456" style="enable-background:new 0 0 493.456 493.456;" xml:space="preserve"><g><g><path d="M246.73,0C110.682,0,0.002,110.68,0.002,246.736c0,136.036,110.68,246.72,246.728,246.72s246.724-110.684,246.724-246.72C493.454,110.68,382.778,0,246.73,0z M321.138,250.492L210.822,360.804c-2.004,2.008-5.548,2.008-7.556,0l-8.98-8.968c-2.076-2.084-2.072-5.48,0.004-7.564l94.952-94.94c0.712-0.72,1.116-1.7,1.116-2.732c0-1.016-0.408-2.004-1.116-2.72l-94.78-94.776c-1-1-1.56-2.344-1.56-3.792c0-1.42,0.556-2.772,1.556-3.764l8.968-8.976c1.004-1,2.352-1.556,3.78-1.556c1.436-0.008,2.772,0.556,3.776,1.556l110.156,110.152c1.02,1.016,1.572,2.372,1.552,3.936C322.71,248.116,322.158,249.476,321.138,250.492z"/></g></g></svg>',
      nextArrow: '<svg class="reviews__arrow reviews__arrow-right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" x="0px" y="0px" viewBox="0 0 493.456 493.456" style="enable-background:new 0 0 493.456 493.456;" xml:space="preserve"><g><g><path d="M246.73,0C110.682,0,0.002,110.68,0.002,246.736c0,136.036,110.68,246.72,246.728,246.72s246.724-110.684,246.724-246.72C493.454,110.68,382.778,0,246.73,0z M321.138,250.492L210.822,360.804c-2.004,2.008-5.548,2.008-7.556,0l-8.98-8.968c-2.076-2.084-2.072-5.48,0.004-7.564l94.952-94.94c0.712-0.72,1.116-1.7,1.116-2.732c0-1.016-0.408-2.004-1.116-2.72l-94.78-94.776c-1-1-1.56-2.344-1.56-3.792c0-1.42,0.556-2.772,1.556-3.764l8.968-8.976c1.004-1,2.352-1.556,3.78-1.556c1.436-0.008,2.772,0.556,3.776,1.556l110.156,110.152c1.02,1.016,1.572,2.372,1.552,3.936C322.71,248.116,322.158,249.476,321.138,250.492z"/></g></g></svg>',
      responsive: [{
        breakpoint: 639,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          adaptiveHeight: false
        }
      }, {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 1329,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          prevArrow: '<svg class="reviews__arrow reviews__arrow-left" xmlns="http://www.w3.org/2000/svg" width="45" height="28" viewBox="0 0 45 28"><g><g><path d="M0 13h.517L11.435.147l1.414 1.415L3.133 13H45v2H3.14l9.71 11.43-1.415 1.417L.525 15H0z"/></g></g></svg>',
          nextArrow: '<svg class="reviews__arrow reviews__arrow-right" xmlns="http://www.w3.org/2000/svg" width="45" height="28" viewBox="0 0 45 28"><g><g><path d="M0 13h.517L11.435.147l1.414 1.415L3.133 13H45v2H3.14l9.71 11.43-1.415 1.417L.525 15H0z"/></g></g></svg>'
        }
      }]
    });
    $('.reviews__slider').on('beforeChange', function () {
      allTextRev.removeClass('show');
      moreRev.removeClass('active');
    });
    var allTextRev = $('.reviews__item-text');
    var moreRev = $('.reviews__item-more');
    moreRev.on('click', function () {
      var parent = $(this).parent();
      var text = parent.children('.reviews__item-text');
      var btn = parent.children('.reviews__item-more');

      if (!text.hasClass('show')) {
        text.addClass('show');
        allTextRev.not(text).removeClass('show');
        moreRev.removeClass('active');
        btn.addClass('active');
      } else {
        text.removeClass('show');
        btn.removeClass('active');
      }
    });
  });

  function main() {
    scrollSmooth(); // bannerScroll();

    reviews();
    elements();
  }

  if (document.documentElement.clientWidth < 480) {
    window.addEventListener("scroll", function () {
      return setTimeout(main, 1000);
    }, {
      once: true,
      passive: true
    });
  } else {
    main();
  }

  header();
  document.addEventListener('DOMContentLoaded', function () {
    function showDecor() {
      $('.promo-bg').addClass('show');
    }

    setTimeout(showDecor, 700);
  });

}());
