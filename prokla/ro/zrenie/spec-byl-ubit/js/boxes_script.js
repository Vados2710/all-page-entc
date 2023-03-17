$(function () {
  let resultWrapper = document.querySelector(".spin-result-wrapper");
  var count = 1;
  var url;
  var img = $('img')[0];

  if ($(img).attr('src').indexOf('cdn') !== -1) {
    url = $(img).attr('src').split('/').slice(0, 3).join('/') + '/';
  } else {
    url = '';
  }
  $(function () {
    $(".try").click(function () {
      if (count < 2) {
        $(this).addClass("opened");
        $(this).attr('src', ''+url+'img/opened_box2.jpg');
        count++;
        setTimeout(function () {
          var sc2 = document.getElementById("success02");
          sc2.className += " animate";
          var sctip02 = document.getElementById("successtip02");
          sctip02.className += " animateSuccessTip";
          var md2 = document.getElementById("modal02");
          document.getElementById("modal02").classList.add("active");
          md2.className += " visible";
          var cnt = document.getElementById("cntVal");
          var so = document.querySelector(".sweet-overlay");
          so.style.display = "block";
        }, 800);
      } else {
        if (
          document.getElementById("modal02").classList.contains("active") &&
          count < 3 &&
          !$(this).hasClass("opened")
        ) {
          count++;
          $(this).attr('src', ''+url+'img/discount6.png');
          setTimeout(function () {
            resultWrapper.style.display = "block";
          }, 1000);
          setTimeout(function () {
            $("#boxes").slideUp();
            $(".boxes__instructions").css("display", "none");
            $(".instructions").css("display", "none");
            $(".order_block").slideDown();
            start_timer();
          }, 3500);
        }
      }
    });
  });
  var counter = 1;
  $(document).ready(function () {
    $("#update").on("click", function () {
      if (counter === 1) {
        counter++;
        $("#cntVal").html(function (i, val) {
          return +val - 1;
        });
      }
    });
  });
  $(".pop-up-button, .close-popup").on("click", function () {
    resultWrapper.style.display = "none";
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(".myh1").offset().top - 200,
        },
        777
      );
  });
  $("#update").on("click", function () {
    document.getElementById("modal02").classList.remove("visible");
    document.querySelector(".sweet-overlay").style.display = "none";
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $("#boxesContainer").offset().top,
        },
        777
      );
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
});
document.addEventListener("DOMContentLoaded", function() {
    
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
      counterLength = 90,  // Максимальна кількість вімотаних днів. Змінюємо за необхідності.
      months, 
      countryName = 'ro',
         
             // Мова для місяців. 
      isAbbreviated = body.getAttribute('data-post-abbreviated') ? true : false, // Скорочений варіант місяців до трьох букв
      localDate = new Date();

  var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

  switch(countryName) {
      case 'ro':  // Romania
          days = ['Luni', 'Marţi', 'Miercuri', 'Joi', 'Vineri', 'Sîmbătă', 'Duminică'];
          break;
      case 'ru':  // Russia
      default:
          days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
          break;
  }
                                 
    switch (countryName) {
      case 'ro': // Romania
        months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
        break;
    }
  if (isAbbreviated) {
      for (var i = 0; i < months.length; i++) {
          months[i] = months[i].slice(0, 3).toLowerCase();  // Прибираємо ".toLowerCase()", якщо перша буква повинна бути великою.
      }
  }

  for (var counter = 0; counter < counterLength; counter++) {
      var dateClass = "date-" + counter,
          nodeList = document.getElementsByClassName(dateClass),
          date = new Date(localDate.getTime() - counter * msInDay),
          timeCounter = 0,
          timeArray = time(nodeList/*, true*/); // Розкоментувати, якщо необхідне сортування в порядку спадання.

      timeArray = timeFormat(timeArray);

      for(var i = 0; i < nodeList.length; i++) {
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

      for(var i = 0; i < nodeList.length; i++) {
          var data = nodeList[i].dataset;

          if (data.format) {
              nodeList[i].innerHTML = format(date, data.format);
          } else {
              nodeList[i].innerHTML = format(date, sa);
          }
      }
  }

  function time(nodeList, reverse) {
      var timeArray = [], timeStatement = false;

      for (var i = 0; i < nodeList.length; i++) {
          if (nodeList[i].className.match(/\btime\b/)) {
            if (nodeList[i].className.match(/\bdate-0\b/)) {
              timeStatement = true;
            }
              timeArray.push(timeRandom(timeStatement));
          }
      }

      if (reverse) timeArray.sort(function(a, b) { return b - a; });
      else timeArray.sort(function(a, b) { return a - b; });

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
      var htemp = Math.floor(timearray[i] / 60), mtemp = timearray[i] % 60,
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
      var testFormat = ['dd', 'day', 'mm', 'month', 'yyyy', 'year'];
      var innerDate = format;

      var dd = date.getDate(),
          mm = date.getMonth() + 1,
          year = date.getFullYear(),
          month = months[mm - 1],
          day = days[new Date(year, mm - 1, dd).getDay()];

      dd = (dd < 10) ? ("0" + dd) : dd;
      mm = (mm < 10) ? ('0' + mm) : mm;

      var dateFormat = {
          day: day,
          dd: dd,
          year: year,
          yyyy: year,
          mm: mm,
          month: month
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

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });