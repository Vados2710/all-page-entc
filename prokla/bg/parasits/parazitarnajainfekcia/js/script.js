
window.onload = function () {
  var fiveMinutes = 60 * 10,
    minutes = document.querySelector('#min');
  seconds = document.querySelector('#sec');
  startTimer(fiveMinutes, minutes, seconds);
};
$(document).ready(function () {
  let loteryCount = 0;

  $('.lotery__item--unbroken').on('touchend, click', function () {
    let item = $(this);
    if (loteryCount < 1) {
      setTimeout(() => {
        $('#lotery-failure').fadeIn();
      }, 500);
      loteryCount++;
    } else if (loteryCount === 1) {
      $(item).find('span').text('50%');
      $(item).find('span').css({ fontSize: '38px', fontWeight: '600' });
      setTimeout(() => {
        $('#lotery-success').fadeIn();
      }, 700);
      loteryCount++;
    } else {
      return;
    }
    let itemPic = $(item).find('img');
    let oldSrc = $(itemPic).attr('src');
    let newSrc = oldSrc.replace('balloon.png', 'popped_balloon.png');
    $(itemPic).attr('src', newSrc);
    $(item).find();
    $(item).removeClass('lotery__item--unbroken').addClass('lotery__item--broken');
  });

  $('.lotery__modal-btn').on('touchend, click', function () {
    $('.lotery__modal').fadeOut();
  });

  $('.lotery__modal-btn--toForm').on('touchend, click', function () {
    $('.lotery-wrap').slideUp();
    $('.order-form-wrap').slideDown();
    $('body,html').animate({ scrollTop: $('.toscroll').offset().top }, 400);
    // -------------TIMER------------------------
    var fiveSeconds = new Date().getTime() + 600000;
    $('#clock')
      .countdown(fiveSeconds, { elapse: true })
      .on('update.countdown', function (event) {
        var $this = $(this);
        if (event.elapsed) {
          $this.html('00 : 00');
        } else {
          $this.html(event.strftime('<span>%M</span> : <span>%S</span>'));
        }
      });
  });
});
$(document).ready(function () {
  // Переменные для работы скриптов
  let currentQuestion = 1;
  const maxQuestionCount = 5;
  // переключеие вопросов
  $('.questionario__btn').on('touchend, click', function () {
    let answersCount = $('.question[data-question-portion=' + currentQuestion + '] input:checked').length;
    let answersNeed = $('.question[data-question-portion=' + currentQuestion + ']').data('answersSum');
    console.log(answersCount);
    console.log(answersNeed);

    if (answersCount < answersNeed) {
      showPrompt();
      return;
    } else if (currentQuestion === maxQuestionCount) {
      $('.question').slideUp();
      $('.questionario__controls').fadeOut();
      $('.questionario__loader').fadeIn();
      setTimeout(() => {
        $('.questionario__loader').fadeOut();
        $('.questionario__results').fadeIn();
      }, 3500);
      return;
    } else if (currentQuestion === maxQuestionCount - 1) {
      $('.questionario__btn').html('Obțineți rezultatul');
    }

    $('.question--active').removeClass('question--active').addClass('question--asked');
    currentQuestion++;
    $('.question[data-question-portion=' + currentQuestion + ']').addClass('question--active');
  });

  // подсказка о количестве ответов
  function showPrompt() {
    $('.questionario__prompt').fadeIn();
    setTimeout(() => {
      $('.questionario__prompt').fadeOut();
    }, 3000);
  }
});


function openImg(e) {
    const target = e.target;
    if (target.classList.contains("first") || target.classList.contains("second")) {
        const parent = target.parentNode;
        parent.classList.toggle("show");
    }
}

document.addEventListener("click", openImg);

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
      countryName = 'hu',
         
             // Мова для місяців. 
      isAbbreviated = body.getAttribute('data-post-abbreviated') ? true : false, // Скорочений варіант місяців до трьох букв
      localDate = new Date();

  var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

  switch(countryName) {
      case 'hu':  // Hungary (Угорщина)
          days = ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat', 'Vasárnap']
          break;
  }
                                 
    switch (countryName) {
      case 'hu': // Hungary (Румунія)
        months = ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'];
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