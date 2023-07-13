$(function () {
  var $msg = $('.custom-social-proof');
  var counter = 10;

  setTimeout(function () {
    $msg.fadeIn();

    $msg.find('.custom-notification-close').click(function () {
      $msg.fadeOut();
    });

    var seconds = setInterval(function () {
      var $value = $('#notify-3 .value');
      var $unit = $('#notify-3 .unit');

      counter += 10;
      $value.text(counter);

      if (counter === 60) {
        clearInterval(seconds);

        counter = 1;
        $value.text(counter);
        $unit.text('minuto');

        setInterval(function () {
          counter += 1;
          $value.text(counter);
        }, 60000)
      }
    }, 10000);

  }, 2000);

  var countdown = function (minutes) {
    var seconds = 60;
    var mins = minutes;

    var tick = function () {
      var $counter = $("#counter");
      var current_minutes = mins - 1;
      seconds--;
      $counter.text(current_minutes.toString() + " : " + (seconds < 10 ? "0" : "") + String(seconds));
      if (seconds > 0) {
        setTimeout(tick, 1000);
      } else {
        if (mins > 1) {
          countdown(mins - 1);
        }
      }
    }
    tick();
  }

  countdown(15);

  $('body').css('padding-bottom', $('.wisepops-root').innerHeight())

  $('.PopupCloseButton__InnerPopupCloseButton-hijyvD').click(function () {
    $('.wisepops-root').fadeOut();
    $('body').css('padding-bottom', 0);
  });
});


if (document.body.classList.contains('ev-date')) {
  // Якщо потрібен вивід дати та час + хвилин, тоді до спана з датою додаємо клас "time" <span class="date-1 time"></span>.
  // Працює як в порядку спадання, так і в порядку зростання.
  document.addEventListener("DOMContentLoaded", postDate);

  function postDate() {
      const msInDay = 86400000,
          counterLength = 90,
          countryName = 'de', // Встановлюємо мову для місяців.
          isAbbreviated = false, // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн" і т.д, тоді ставим TRUE.
          localDate = new Date();

      let months;

      switch (countryName) {
          case 'de': // Germany
              months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
              break;
      }

      if (isAbbreviated) {
          for (let i = 0; i < months.length; i++) months[i] = months[i].slice(0, 3).toLowerCase(); // Прибираємо ".toLowerCase()", якщо перша буква повинна бути великою.
      }

      for (let counter = 0; counter < counterLength; counter++) {
          const dateClass = "date-" + counter,
              nodeList = document.getElementsByClassName(dateClass),
              date = new Date(localDate.getTime() - counter * msInDay);

          let timeCounter = 0,
              timeArray = time(nodeList /*, true*/); // Розкоментувати, якщо необхідне сортування в порядку спадання.

          timeArray = timeFormat(timeArray);

          for (let i = 0; i < nodeList.length; i++) {
              const data = nodeList[i].dataset;

              data.format
                  ? nodeList[i].innerHTML = format(date, data.format)
                  // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
                  // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
                  : nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

              if (/\btime\b/.test(nodeList[i].className)) {
                  nodeList[i].innerHTML += " " + timeArray[timeCounter]; // Рядок для формату виводу часу.
                  timeCounter++;
              }
          }
      }

      // <span clas="date-NUMBER"></span> - мотає час назад на NUMBER днів. Наприклад, <span className="date-5"></span>
      // <span clas="dateNUMBER"></span> - мотає час вперед на NUMBER днів. Наприклад, <span className="date5"></span>

      for (let counter = 0; counter < counterLength; counter++) {
          const dateClass = "date-" + counter,
                nodeList = document.getElementsByClassName(dateClass),
                date = new Date(localDate.getTime() - counter * msInDay);

          let timeArray = time(nodeList /*, true*/); // Розкоментувати, якщо необхідне сортування в порядку спадання.
          timeArray = timeFormat(timeArray);

          for (let i = 0; i < nodeList.length; i++) {
              const data = nodeList[i].dataset;

              data.format
                  ? nodeList[i].innerHTML = format(date, data.format)
              // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
              // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
                  : nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
          }
      }


      function time(nodeList, reverse) {
          const timeArray = [];

          for (let i = 0; i < nodeList.length; i++)
              nodeList[i].className.match(/\btime\b/)
                  ? timeArray.push(timeRandom())
                  : false;

          if (reverse) timeArray.sort(function (a, b) {
              return b - a;
          });
          else timeArray.sort(function (a, b) {
              return a - b;
          });

          return timeArray;
      }

      function timeRandom() {
          return Math.round(Math.random() * 1440);
      }

      function timeFormat(timeArray) {
          const array = [];

          for (let i = 0; i < timeArray.length; i++) {
              const hTemp = Math.floor(timeArray[i] / 60),
                    mTemp = timeArray[i] % 60,
                    hours = hTemp < 10 ? "0" + hTemp : hTemp,
                    minutes = mTemp < 10 ? "0" + mTemp : mTemp;
              array.push(hours + ":" + minutes)
          }
          return array;
      }

      function format(date, formatString) {
          let innerDate = "";

          const day = date.getDate(),
              year = date.getFullYear(),
              month = date.getMonth() + 1,
              fo = formatString || true;

          switch (fo) {
              case "yyyy":
                  innerDate += "" + year;
                  return innerDate;

              case "yyyy-1":
                  innerDate += "" + year - 1;
                  return innerDate;

              case "yyyy-2":
                  innerDate += "" + year - 2;
                  return innerDate;

              case "mm.dd.yyyy":
                  innerDate += (month < 10) ? ("0" + month) : month;
                  innerDate += ".";
                  innerDate += (day < 10) ? ("0" + day) : day;
                  innerDate += "." + year;
                  return innerDate;

              case "month":
                  innerDate += months[month - 1].toLowerCase();
                  return innerDate;

              case "dd":
                  innerDate += (day < 10) ? ("0" + day) : day;
                  return innerDate;

              case "dd month":
                  innerDate += (day < 10) ? ("0" + day) : day;
                  innerDate += " ";
                  innerDate += months[month - 1].toLowerCase();
                  return innerDate;

              case "dd month yyyy":
                  innerDate += (day < 10) ? ("0" + day) : day;
                  innerDate += " ";
                  innerDate += months[month - 1].toLowerCase();
                  innerDate += " " + year;
                  return innerDate;
              case "month dd, yyyy":
                  innerDate += months[month - 1].toLowerCase();
                  innerDate += " ";
                  innerDate += (day < 10) ? ("0" + day) : day;
                  innerDate += ", " + year;
                  return innerDate;

              case "day dd, month yyyy":
                  const days = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
                  innerDate += days[new Date(year, month - 1, day).getDay()];
                  innerDate += " ";
                  innerDate += (day < 10) ? ("0" + day) : day;
                  innerDate += " ";
                  innerDate += months[month - 1];
                  innerDate += " " + year;
                  return innerDate;
              case "day, month dd, yyyy":
                  const days2 = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
                  innerDate += days2[new Date(year, month - 1, day).getDay()];
                  innerDate += ", ";
                  innerDate += months[month - 1];
                  innerDate += " ";
                  innerDate += (day < 10) ? ("0" + day) : day;
                  innerDate += ", " + year;
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

              default:
                  innerDate += (day < 10) ? ("0" + day) : day;
                  innerDate += ".";
                  innerDate += (month < 10) ? ("0" + month) : month;
                  innerDate += "." + year;
                  return innerDate;
          }
      }
  }
}