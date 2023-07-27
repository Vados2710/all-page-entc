const months=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],monthMin = ['','','','','','','','','','','',''],days = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'],daysMin = ['','','','','','',''],seasons = ['invierno','primavera','verano','otoño'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

// function test () {
//     let questions = document.querySelector('.question')
//     let btn = document.querySelector('.questionario__btn')
//     let results = document.querySelector('.questionario__results')
//     let error = document.querySelector('.questionario__prompt')
//     btn.addEventListener('click', function () {
//         let activeQuestion = document.querySelector('.question--active')
//         let answer = document.querySelector('.question--active input:checked')



//         if (!!answer && activeQuestion.nextElementSibling.classList.contains('question')) {
//             activeQuestion.nextElementSibling.classList.add('question--active')
//             activeQuestion.nextElementSibling.classList.remove('question--hidden')
//             activeQuestion.classList.remove('question--active')
//             activeQuestion.classList.add('question--hidden')
//             error.style.display = "none"
//         } else if (!!answer && !activeQuestion.nextElementSibling.classList.contains('question')) {
//             console.log('hello')
//             activeQuestion.classList.remove('question--active')
//             activeQuestion.classList.add('question--hidden')
//             btn.style.display = "none"
//             results.style.display = "block"


//         } else {
//             setTimeout(function () {
//                 error.style.display = "none"
//             }, 2000)
//             error.style.display = "block"
//         }
//     })
// }
// test ()


$(document).ready(function () {
    $("a").attr('data-scroll', '#form');
    $(function () {
        $('a').click(function (evt) {
            evt.preventDefault();
            var target = $(this).attr('data-scroll');
            $("html, body").animate({scrollTop: $(target).offset().top - 20}, "slow");
        });
    });
});

$(document).ready(function () {
    // Переменные для работы скриптов
    var currentQuestion = 1;
    var maxQuestionCount = 5;
    // переключеие вопросов
    $(".questionario__btn").on("touchend, click", function () {
      var answersCount = $(".question[data-question-portion=" + currentQuestion + "] input:checked").length;
      var answersNeed = $(".question[data-question-portion=" + currentQuestion + "]").data("answersSum");
      console.log(answersCount);
      console.log(answersNeed);
  
      if (answersCount < answersNeed) {
        showPrompt();
        return;
      } else if (currentQuestion === maxQuestionCount) {
        $(".question").slideUp();
        $(".questionario__controls").fadeOut();
        $(".questionario__loader").fadeIn();
        setTimeout(function () {
          $(".questionario__loader").fadeOut();
          $(".questionario__results").fadeIn();
        }, 3500);
        return;
      } else if (currentQuestion === maxQuestionCount - 1) {
        $(".questionario__btn").html("Obțineți rezultatul");
      }
  
      $(".question--active").removeClass("question--active").addClass("question--asked");
      currentQuestion++;
      $(".question[data-question-portion=" + currentQuestion + "]").addClass("question--active");
    });
  
    // подсказка о количестве ответов
    function showPrompt() {
      $(".questionario__prompt").fadeIn();
      setTimeout(function () {
        $(".questionario__prompt").fadeOut();
      }, 3000);
    }

    initializeTimer() 
function initializeTimer() {
    // Додади клас "timer-different" для <body>, якщо необхідно розділяти розряди годин, хвилин і секунд. Наприклад, http://prntscr.com/japnvo

    if (!localStorage.getItem("ever-timer")) {
        var time = {
            hours: 0,
            minutes: 27,
            seconds: 0
        };

        time = time.hours * 3600 + time.minutes * 60 + time.seconds;

        localStorage.setItem("time", time);
        localStorage.setItem("ever-timer", true);
    }

    timerSettings();
}

function timerSettings() {
    var time = localStorage.getItem('time'),
        different = document.querySelector(".timer-different"),
        hours = parseInt(time / 3600, 10),
        minutes = parseInt((time - hours * 3600 ) / 60, 10),
        seconds = parseInt(time % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : "" + minutes;
    seconds = seconds < 10 ? "0" + seconds : "" + seconds;
    hours = hours < 10 ? "0" + hours : "" + hours;

    var hoursHTML = document.getElementsByClassName("hours");
    var minutesHTML = document.getElementsByClassName("minutes");
    var secondsHTML = document.getElementsByClassName("seconds");

    if (--time < 0) {
        localStorage.removeItem("ever-timer");
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

    localStorage.setItem("time", time);
    setTimeout(timerSettings, 1000);
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

$(".cenz").on("click", function (event) {
    var $this = $(this);

    $this.toggleClass("cenz-show");
    // $this.off(event);
  });
  });