let expertInfo = document.querySelector(".expert__plus-block");
let expertButton = document.querySelector(".expert__toogler");
let shadow = document.querySelector(".shadow__text");

$(function () {
  var $navElement = $(".nav__overlay");
  var $navOpen = $(".nav__open");
  var $navClose = $(".nav__close");

  var $banner = $(".banner--scroll");

  $navElement.hide();

  var isFaded = function () {
    return $navElement.is(":hidden");
  };

  var show = function () {
    $navElement.fadeIn();
    $navOpen.fadeOut();

    $banner.fadeOut();
    $(document.documentElement).css("overflow", "hidden");
  };

  var hide = function () {
    $navElement.fadeOut();
    $navOpen.fadeIn();
    $(document.documentElement).css("overflow", "auto");

    if ($banner.hasClass("active")) $banner.fadeIn();
  };

  $navOpen.click(function (evt) {
    evt.preventDefault();
    show();
  });

  $navClose.click(function (evt) {
    evt.preventDefault();
    hide();
  });

  $(".nav__links").on("click", "a", function (evt) {
    evt.preventDefault();
    var id = $(this).attr("href");
    if (!id) return;
    var top = $(id).offset().top + 1;
    $("body,html").animate(
      {
        scrollTop: top,
      },
      1500
    );
    hide();
  });
});

$(function () {
  $(".banner__menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top + 1;
    $("body,html").animate(
      {
        scrollTop: top,
      },
      1500
    );
  });
});

function main() {
  $(function () {
    var mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      loop: true,
      initialSlide: 1,
      centerMode: true,
      navigation: {
        nextEl: ".check-button-next",
        prevEl: ".check-button-prev",
        clickable: true,
      },
      pagination: {
        el: ".check-pagination",
        clickable: true,
      },
      slidesPerView: "auto",
      centeredSlides: true,
      effect: "coverflow",
      grabCursor: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 930,
        modifier: 1,
        slideShadows: false,
      },
      breakpoints: {
        1189: {
          spaceBetween: 0,
          coverflowEffect: {
            depth: 920, // Depth offset in px (slides translate in Z axis)
          },
        },
        1023: {
          coverflowEffect: {
            depth: 0, // Depth offset in px (slides translate in Z axis)
          },
        },
        767: {
          autoHeight: true,
          coverflowEffect: {
            depth: 0, // Depth offset in px (slides translate in Z axis)
          },
        },
      },
    });
  });

  $(function () {
    $(".reviews__list").on("beforeChange", function () {
      $(".review").removeClass("active");
    });

    $(".reviews__list").slick({
      slidesToShow: 3,
      arrows: true,
      infinite: true,
      autoplay: true,
      prevArrow: $(".reviews__prev"),
      nextArrow: $(".reviews__next"),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    $(".review__toggler").click(function () {
      $(this).parents(".review").toggleClass("active");
    });

    $("#send-review").click(function () {
      var $input = $("#review-field");

      if (!$input.val().length) {
        alert("Εισαγάγετε μια κριτική!");
        return;
      }

      $input.val("");
      alert("Σας ευχαριστώ! Η αναθεώρησή σας έχει σταλεί για μέτρηση.");
    });

    function checkVisibility(el) {
      var dTop = $(window).scrollTop(),
        dBot = dTop + $(window).height(),
        elTop = el.offset().top,
        elBot = elTop + el.height();
      return elTop <= dBot && elBot >= dTop;
    }

    function toggleBanner() {
      const banner = $(".banner--scroll");
      const topForm = $(".main--top .x_order_form");
      const bottomForm = $(".main--bottom .x_order_form");
      const actionBlock = $(".action--big");
      if (
        !checkVisibility(topForm) &&
        !checkVisibility(bottomForm) &&
        !checkVisibility(actionBlock)
      ) {
        banner.fadeIn();
      } else {
        banner.fadeOut();
      }
    }
    $(window).on("scroll", function () {
      toggleBanner();
    });
  });
}

if (document.documentElement.clientWidth < 480) {
  window.addEventListener(
    "scroll",
    function () {
      return setTimeout(main, 1000);
    },
    {
      once: true,
      passive: true,
    }
  );
} else {
  main();
}

document.addEventListener("DOMContentLoaded", function () {
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
    postLang = body.getAttribute("data-post-lang");

  var sa = body.getAttribute("data-post-format") || "dd.mm.yyyy",
    msInDay = 86400000,
    counterLength = 90, // Максимальна кількість вімотаних днів. Змінюємо за необхідності.
    months,
    countryName = "gr", // Мова для місяців.
    isAbbreviated = body.getAttribute("data-post-abbreviated") ? true : false, // Скорочений варіант місяців до трьох букв
    localDate = new Date();

  var days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  switch (countryName) {
    case "it": // Italy
      days = [
        "Lunedì",
        "Martedì",
        "Mercoledì",
        "Giovedì",
        "Venerdì",
        "Sabato",
        "Domenica",
      ];
      break;
    case "es": // Spain
      days = [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo",
      ];
      break;
    case "fr": // France
      days = [
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche",
      ];
      break;
    case "pt": // Portugal
      days = [
        "Segund-feira",
        "Terç-feira",
        "Quart-feira",
        "Quint-feira",
        "Sext-feira",
        "Sábado",
        "Domingo",
      ];
      break;
    case "de": // Germany
      days = [
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
        "Sonntag",
      ];
      break;
    case "bg": // Bulgaria
      days = [
        "Понеделник",
        "Вторник",
        "Сряда",
        "Четвъртък",
        "Петък",
        "Събота",
        "Неделя",
      ];
      break;
    case "pl": // Poland
      days = [
        "Poniedziałek",
        "Wtorek",
        "Środa",
        "Czwartek",
        "Piątek",
        "Sobota",
        "Niedziela",
      ];
      break;
    case "ro": // Romania
      days = [
        "Luni",
        "Marţi",
        "Miercuri",
        "Joi",
        "Vineri",
        "Sîmbătă",
        "Duminică",
      ];
      break;
    case "hu": // Hungary (Угорщина)
      days = [
        "Hétfő",
        "Kedd",
        "Szerda",
        "Csütörtök",
        "Péntek",
        "Szombat",
        "Vasárnap",
      ];
      break;
    case "gr": // Greece

    case "cy": // Cyprus (Кіпр)
      days = [
        "Δευτέρα",
        "Τρίτη",
        "Τετάρτη",
        "Πέμπτη",
        "Παρασκευή",
        "Σάββατο",
        "Κυριακή",
      ];
      break;
    case "ru": // Russia
    default:
      days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
      ];
      break;
  }

  switch (countryName) {
    case "it": // Italy
      months = [
        "Gennaio",
        "Febbraio",
        "Marzo",
        "Aprile",
        "Maggio",
        "Giugno",
        "Luglio",
        "Agosto",
        "Settembre",
        "Ottobre",
        "Novembre",
        "Dicembre",
      ];
      break;
    case "es": // Spain
      months = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];
      break;
    case "fr": // France
      months = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
      ];
      break;
    case "pt": // Portugal
      months = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ];
      break;
    case "de": // Germany
      months = [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember",
      ];
      break;
    case "bg": // Bulgaria
      months = [
        "Януари",
        "Февруари",
        "Март",
        "Април",
        "Май",
        "Юни",
        "Юли",
        "Август",
        "Септември",
        "Октомври",
        "Ноември",
        "Декември",
      ];
      break;
    case "pl": // Poland
      months = [
        "Styczeń",
        "Luty",
        "Marzec",
        "Kwiecień",
        "Maj",
        "Czerwiec",
        "Lipiec",
        "Sierpień",
        "Wrzesień",
        "Październik",
        "Listopad",
        "Grudzień",
      ];
      break;
    case "ro": // Romania
      months = [
        "Ianuarie",
        "Februarie",
        "Martie",
        "Aprilie",
        "Mai",
        "Iunie",
        "Iulie",
        "August",
        "Septembrie",
        "Octombrie",
        "Noiembrie",
        "Decembrie",
      ];
      break;
    case "hu": // Hungary (Румунія)
      months = [
        "Január",
        "Február",
        "Március",
        "Április",
        "Május",
        "Június",
        "Július",
        "Augusztus",
        "Szeptember",
        "Október",
        "November",
        "December",
      ];
      break;
    case "gr": // Greece
      months = [
        "Ιανουάριος",
        "Φεβρουάριος",
        "Μάρτιος",
        "Απρίλιος",
        "Μάιος",
        "Ιούνιος",
        "Ιούλιος",
        "Αύγουστος",
        "Σεπτέμβριος",
        "Οκτώβριος",
        "Νοέμβριος",
        "Δεκέμβριος",
      ];
      break;
    case "cy": // Cyprus (Кіпр)
      months = [
        "Ιανουάριος",
        "Φεβρουάριος",
        "Μάρτιος",
        "Απρίλιος",
        "Μάιος",
        "Ιούνιος",
        "Ιούλιος",
        "Αύγουστος",
        "Σεπτέμβριος",
        "Οκτώβριος",
        "Νοέμβριος",
        "Δεκέμβριος",
      ];
      break;
    case "ru": // Russia
    default:
      months = [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря",
      ];
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
        hours = htemp < 10 ? "0" + htemp : htemp,
        minutes = mtemp < 10 ? "0" + mtemp : mtemp;
      array.push(hours + ":" + minutes);
    }

    return array;
  }

  function notLastIteration(index, array) {
    return index !== array.length - 1;
  }

  function format(date, format) {
    var testFormat = ["dd", "day", "mm", "month", "yyyy", "year"];
    var innerDate = format;

    var dd = date.getDate(),
      mm = date.getMonth() + 1,
      year = date.getFullYear(),
      month = months[mm - 1],
      day = days[new Date(year, mm - 1, dd).getDay()];

    dd = dd < 10 ? "0" + dd : dd;
    mm = mm < 10 ? "0" + mm : mm;

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
  var regex = /[A-Za-z\s]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

function initializeTimer() {
  var time = {
    hours: 0,
    minutes: 27,
    seconds: 0,
  };

  time = time.hours * 3600 + time.minutes * 60 + time.seconds;

  timerSettings();
}
var flag = true;
function timerSettings(time1) {
  if (flag) {
    var time = {
      hours: 0,
      minutes: 25,
      seconds: 0,
    };
    time = time.hours * 3600 + time.minutes * 60 + time.seconds;
    flag = false;
  } else {
    var time = time1;
  }

  var different = document.querySelector(".timer-different"),
    hours = parseInt(time / 3600, 10),
    minutes = parseInt((time - hours * 3600) / 60, 10),
    seconds = parseInt(time % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : "" + minutes;
  seconds = seconds < 10 ? "0" + seconds : "" + seconds;
  hours = hours < 10 ? "0" + hours : "" + hours;

  var hoursHTML = document.getElementsByClassName("hour");
  var minutesHTML = document.getElementsByClassName("minute");
  var secondsHTML = document.getElementsByClassName("second");

  if (--time < 0) {
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

  setTimeout(timerSettings, 1000, time);
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

initializeTimer();
