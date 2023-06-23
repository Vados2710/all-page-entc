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

function draw() {
  var triesCount = 2;
  var tries = 0;
  var box_d = document.querySelector("#box_d").getAttribute("src");
  // var congrat = document.querySelector("#congrat").getAttribute("src");
  var discount = document.querySelector("#discount").getAttribute("src");

  $("#tries_count").text(triesCount);
  $(".try").on("click", function () {
    if (
      !$(this).parent(".boxes_item").hasClass("afterlose-boxes_item") &&
      !$("#boxesContainer").hasClass("stop_trying")
    ) {
      if (tries == 0) {
        $("#boxesContainer").addClass("stop_trying");
        $(this).attr("src", box_d);
        $(this).addClass("shake");
        $(this).parent(".boxes_item").addClass("afterlose-boxes_item");
        $(".box-tooltip-title").html(
          '<b>Nu am câștigat nimic</b><br> Mai aveți <span style="color: red;">1 încercare</span>! Încercați din nou!'
        );
        $(".box-tooltip-btn").html("Ок");
        setTimeout(function () {
          $(".box-popup-wrapper.tooltip").fadeIn(100);
        }, 850);
      }
      if (tries == 1) {
        $("#boxesContainer").addClass("stop_trying");
        //   $(this).parent(".boxes_item").html('<p class="win_prize">50% отстъпка</p>');
        $(this).attr("src", discount);
        $(".box-tooltip-title").html('<b>Felicitări!</b><br>Puteți obține o <br><b style="color: red;">reducere de 50%!</b>');
        $(".box-tooltip-btn").html("Ок");
        // $(".box-tooltip-ico>img").attr("src", congrat);
        setTimeout(function () {
          $(".box-popup-wrapper.tooltip").fadeIn(100);
        }, 1000);
      }
    }
  });

  $(".box-popup-wrapper.tooltip").bind("click", function (e) {
    $("#boxesContainer").removeClass("stop_trying");
    $(".box-popup-wrapper").fadeOut(90);
    tries++;
    triesCount--;
    $("#tries_count").html('<span style="color: red;">' + triesCount + "</span>");
    if (tries == 2) {
      $("#boxesContainer").slideUp("fast");
      $(".lead-form-box").slideDown("fast");
      start_timer();
      $("body,html").animate({
        scrollTop: $("#scroll_to").offset().top - 10
      }, 400);
    }
  });

  var time = 600;
  var intr;

  function start_timer() {
    intr = setInterval(tick, 1000);
  }

  function tick() {
    time = time - 1;
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
      clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0" + secs;
    $("#min").html("0" + mins);
    $("#sec").html(secs);
  }

}
