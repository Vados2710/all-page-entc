  var url = window.cdn_path;
if (url === undefined) {
  url = '';
}
  var triesCount = 2;
                                                    var tries = 0;
                                                    $('#tries_count').text(triesCount);
                                                    $('.try').on('click', function () {
                                                        if ((!$(this).parent('.boxes_item').hasClass('afterlose-boxes_item')) && (!$('#boxesContainer').hasClass('stop_trying'))) {
                                                            if (tries == 0) {
                                                                $('#boxesContainer').addClass('stop_trying');
                                                                $(this).attr(""+url+"images/box_d.png");
                                                                $(this).addClass('shake');
                                                                $(this).parent('.boxes_item').addClass('afterlose-boxes_item');
                                                                $('.box-tooltip-title').html('<b>Nu ați câștigat nimic</b><br> Mai aveți o încercare! Încearcați din nou!');
                                                                $('.box-tooltip-btn').html('ÎNCERCAȚI');
                                                                setTimeout(function () {
                                                                    $('.box-popup-wrapper.tooltip').fadeIn(100);
                                                                }, 850);
                                                            }
                                                            if (tries == 1) {
                                                                $('#boxesContainer').addClass('stop_trying');
                                                                $(this).parent('.boxes_item').html('<p class="win_prize">REDUCERE 50%</p>');
                                                                $('.box-tooltip-title').html('<b>Felicitări!</b><br>Ați castigat:<br><b style="color: red;">reducere 50%!</b>');
                                                                $('.box-tooltip-btn').html('OBȚINEȚI UROTRIN LA O REDUCERE');
                                                                $('.box-tooltip-ico>img').attr(""+url+"images/congrat.png")
                                                                setTimeout(function () {
                                                                    $('.box-popup-wrapper.tooltip').fadeIn(100);
                                                                }, 1000);
                                                            }
                                                        }
                                                    });

                                                    $('.box-popup-wrapper.tooltip').bind('click', function (e) {
                                                        $('#boxesContainer').removeClass('stop_trying');
                                                        $('.box-popup-wrapper').fadeOut(90);
                                                        tries++;
                                                        triesCount--;
                                                        $('#tries_count').html('<span style="color: red;">' + triesCount + '</span>');
                                                        if (tries == 2) {
                                                            $('#boxesContainer').slideUp('fast');
                                                            $('.lead-form-box').slideDown('fast');
                                                            start_timer();
                                                            $("body,html").animate({scrollTop: $("#scroll_to").offset().top - 20}, 400);
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
      case 'ro':  // Russia
      default:
        days = ['Luni', 'Marţi', 'Miercuri', 'Joi', 'Vineri', 'Sîmbătă', 'Duminică'];
          break;
  }
                                 
    switch (countryName) {
      case 'ro': // Русский
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

$('a').click(function () {
    event.preventDefault();
    $(this).attr('href', '#form');
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 70}, 1500);
});