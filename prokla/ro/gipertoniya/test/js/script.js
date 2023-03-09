"use strict";

var quiz = [{
  q: 'Cât de des aveţi dureri de cap palpitante?',
  a: {
    one: 'Rar',
    two: '2 - 4 ori pe lună',
    three: '2 - 4 ori pe săptămână'
  }
}, {
  q: 'Au oare rudele dvs. hipertensiune <span class="nowrap">(factor de ereditate)</span>',
  a: {
    one: 'Da',
    two: 'Nu ',
    three: 'Nu ştiu'
  }
}, {
  q: 'Au avut cineva din familia dvs. accidente vasculare cerebrale sau atacuri de cord',
  a: {
    one: 'Da',
    two: 'Nu ',
    three: 'Nu ştiu'
  }
}, {
  q: 'Vă este dificil să vă concentrați și să memorați informații noi?',
  a: {
    one: 'Foarte deficil',
    two: 'Problematic',
    three: 'Nu e complicat'
  }
}, {
  q: 'Indicați care dintre următoarele simptome de hipertensiune arterială aveţi dvs.:',
  a: {
    one: 'Dispnee',
    two: 'Zgomot în urechi',
    three: 'Dureri în piept',
    four: 'Roşeaţa feţei',
    five: 'Transpiraţie',
    six: 'Ameţeală'
  },
  checkbox: true
}, {
  q: 'Cât de des vă crește tensiunea arterială?',
  a: {
    one: '2 - 4 ori pe săptămână',
    two: '2 - 4 ori pe lună',
    three: 'Nu măsor tensiunea'
  }
}, {
  q: 'Evalueați-vă vederea de ultimii <span class="nowrap">2 ani</span>',
  a: {
    one: 'S-a înrăutăţit semnificativ',
    two: 'S-a înrăutăţit, dar nu mult',
    three: 'Nu s-a schimbat'
  }
}, {
  q: 'Cât de des aveți un ritm cardiac rapid?',
  a: {
    one: 'Adeseori',
    two: 'Rar',
    three: 'Nu ştiu'
  }
}, {
  q: 'Evaluaţi starea generală a corpului dvs.',
  a: {
    one: 'Oboseală frecventă, lipsă de energie ',
    two: 'Uneori simt slăbiciune pe tot corpul',
    three: 'Nicim critic'
  }
}]; // First Screen

document.querySelector('.start-page__button').onclick = function () {
  // document.querySelector('.app__start-page').remove();
  document.querySelector('.app__start-page').parentElement.removeChild(document.querySelector('.app__start-page'))
  document.querySelector('.quiz-container').classList.add('show');
  document.querySelector('.question_images').classList.add('show');
  document.querySelector('.question_variants').classList.remove('show');
  ageChoice();
};

var prev = document.querySelector('.quiz-buttons__button_prev');
var next1 = document.querySelector('.quiz-buttons__button_next1');
var next2 = document.querySelector('.quiz-buttons__button_next2');
var checkBox = document.querySelectorAll('.radio_check');
var count = 0;
var step = 0; // Choice your age

function ageChoice() {
  next1.addEventListener('click', myFunction);

  let checkEmpty = false;

  function myFunction() {
    for (var i = 0; i < checkBox.length; i++) {
      if (checkBox[i].checked == true) {
        checkEmpty = true
        document.querySelector('.discount__value1').innerHTML = Math.round((count += 5.5) / 2);
        document.querySelector('.discount__value2').innerHTML = Math.round((count += 5.5) / 2);
        document.querySelector('.assistant-mobile').classList.add('hide');
        document.querySelector('.assistant').classList.add('hide');
        document.querySelector('.swiper-container-main').classList.add('show');
        document.querySelector('.bonuses_direction_column').classList.remove('quiz__bonuses_bottom');
        document.querySelector('.question_images').classList.remove('show');
        document.querySelector('.question_variants').classList.add('show');
        next1.classList.add('hide');
        next2.classList.add('show');
        startQuiz();
        bubble();
      }

    }
    if (!checkEmpty) {
      alert('Alegeți opțiunea de răspuns')
    }
  }
} // Start Quiz quiestions
var variants;
function startQuiz() {
  var result = {};


  function showQuestion(questionNumber) {
    
    document.querySelector('.is-block-main').classList.add('hide');
    document.querySelector('.is-block-next').classList.add('show');
    document.querySelector('.is-block-next').innerHTML = quiz[step]['q'];


    

    
    var answer = '';

    for (var key in quiz[step]['a']) {
      if (quiz[step].checkbox) {
        answer += "<div data-v=\"".concat(key, "\" class=\"answer-variant\">\n        <label tabindex=\"0\" class=\"b-radio radio\"\n        ><input class=\"radio_check\" name=\"question\" tabindex=\"-1\" type=\"checkbox\" value=\"").concat(quiz[step]['a'][key], "\" /> <span class=\"check\"></span>\n        <span class=\"control-label\"\n          ><div class=\"answer\">\n            <div class=\"answer__title\">").concat(quiz[step]['a'][key], "<!----></div>\n            <!---->\n          </div></span\n        ></label\n      >\n        \n                    </div>");
      } else {
        answer += "<div data-v=\"".concat(key, "\" class=\"answer-variant\">\n        <label tabindex=\"0\" class=\"b-radio radio\"\n        ><input class=\"radio_check\" name=\"question\" tabindex=\"-1\" type=\"radio\" value=\"").concat(quiz[step]['a'][key], "\" /> <span class=\"check\"></span>\n        <span class=\"control-label\"\n          ><div class=\"answer\">\n            <div class=\"answer__title\">").concat(quiz[step]['a'][key], "<!----></div>\n            <!---->\n          </div></span\n        ></label\n      >\n        \n                    </div>");
      }
    }
    document.querySelector('.answer-variants').innerHTML = answer;
    variants = document.querySelectorAll('.answer-variants input')
  }

  next2.addEventListener('click', click2);

  function click2(event) {
    event.stopPropagation();
    if (step < quiz.length) {
      for (var i = 0; i < checkBox.length; i++) {

        if (checkBox[i].checked == true) {

          
          if (result[event.target.dataset.v] != undefined) {
            result[event.target.dataset.v]++;
          } else {
            result[event.target.dataset.v] = 0;
          }

          
          step++;



          if (step == quiz.length) {
            // document.querySelector('.quiz-container2').remove();
            document.querySelector('.quiz-container2').parentElement.removeChild(document.querySelector('.quiz-container2'))
            showResult();
          } else {
            let res;
            for (var q = 0; q < variants.length; q++) {
              if (variants[q].checked) {
                res = true
              }
            }
            if (!res) {
              alert('Alegeți opțiunea de răspuns')
              return
            }
            

            showQuestion(step);
            

            document.querySelector('.discount__value1').innerHTML = Math.round((count += 5.5) / 2);
            document.querySelector('.discount__value2').innerHTML = Math.round((count += 5.5) / 2);
    
            prev.onclick = function (e) {
              e.stopPropagation();

              if (step > 0) {
                showQuestion(step--);
                document.querySelector('.discount__value1').innerHTML = Math.round(count -= 5.5);
                document.querySelector('.discount__value2').innerHTML = Math.round(count -= 5.5);
              } else {
                document.querySelector('.is-block-main').classList.remove('hide');
                document.querySelector('.is-block-next').classList.remove('show');
                document.querySelector('.assistant-mobile').classList.remove('hide');
                document.querySelector('.assistant').classList.remove('hide');
                document.querySelector('.swiper-container-main').classList.remove('show');
                document.querySelector('.bonuses_direction_column').classList.add('quiz__bonuses_bottom');
                document.querySelector('.question_images').classList.add('show');
                document.querySelector('.question_variants').classList.remove('show');
                next1.classList.remove('hide');
                next2.classList.remove('show');
                count = 0;
                document.querySelector('.discount__value1').innerHTML = 0;
                ocument.querySelector('.discount__value2').innerHTML = 0;
              }
            };

            bubble();
          }
        } 
      }
    }
  }

  showQuestion(step);
}

for (var i = 0; i < checkBox.length; i++) {
  if (checkBox[i].checked == true) {
    console.log('checked');
  }
} // Result Page


function showResult() {
  document.querySelector('.quiz__result').classList.add('show');
  document.querySelector('.quiz-container_has_scroll').classList.add('show');
} // Form Page


document.querySelector('.result__button').addEventListener('click', function () {
  // document.querySelector('.quiz__result').remove();
  document.querySelector('.quiz__result').parentElement.removeChild(document.querySelector('.quiz__result'))
  document.querySelector('.quiz__lead-form').classList.add('show');
});

function bubble() {
  var div2 = document.createElement('div');
  div2.classList.add('discount__bubble');
  div2.innerHTML = "<div class=\"discount__bubble\">+</div>";

  var div3 = document.createElement('div');
  div3.classList.add('discount__bubble');
  div3.innerHTML = "<div class=\"discount__bubble\">+</div>";
  document.querySelector('.discount__value1').appendChild(div2);
  document.querySelector('.discount__value2').appendChild(div3);
  
}



const months = [
    "ianuarie",
    "februarie",
    "martie",
    "aprilie",
    "mai",
    "iunie",
    "iulie",
    "august",
    "septembrie",
    "octombrie",
    "noiembrie",
    "decembrie",
  ],
  monthMin = ["", "", "", "", "", "", "", "", "", "", "", ""],
  days = ["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"],
  daysMin = ["", "", "", "", "", "", ""],
  seasons = ["iarnă", "arc", "vară", "toamnă"];
function postDate(
  daysName,
  daysMinName,
  monthsName,
  monthsMinName,
  seasonsName
) {
  const _counterLength = 60;
  for (let counter = 0; counter < _counterLength; counter++) {
    innerDate(counter, "date-");
    innerDate(counter, "date");
  }
  function innerDate(counter, dateType) {
    let newCounter;
    dateType === "date-" ? (newCounter = -counter) : (newCounter = counter);
    const _msInDay = 86400000,
      _localDate = new Date(Date.now() + newCounter * _msInDay),
      _day = _localDate.getDate(),
      _month = _localDate.getMonth() + 1,
      _year = _localDate.getFullYear();
    const dayDefault = addZero(_day),
      monthDefault = addZero(_month),
      defaultDate = dayDefault + "." + monthDefault + "." + _year;
    const dateClass = dateType + counter,
      nodeList = document.querySelectorAll("." + dateClass);
    for (let i = 0; i < nodeList.length; i++) {
      const dateFormat = nodeList[i].dataset.format;
      dateFormat !== undefined && dateFormat !== ""
        ? (nodeList[i].innerHTML = String(
            changeFormat(dayDefault, _month, _year, dateFormat, newCounter)
          ))
        : (nodeList[i].innerHTML = defaultDate);
    }
  }
  function changeFormat(_day, _month, _year, format, counter) {
    let innerFormat = format;
    const testFormat = ["dd", "mm", "yyyy", "monthFull", "year"],
      dateFormat = {
        dd: _day,
        mm: addZero(_month),
        yyyy: _year,
        monthFull: getMonthName(_month, monthsName, false),
        year: getYearWithCounter(_year, counter),
      };
    for (let i = 0; i < testFormat.length; i++) {
      let string = testFormat[i];
      let regExp = new RegExp(string);
      innerFormat = innerFormat.replace(regExp, dateFormat[string]);
    }
    return innerFormat.split(" ").join(" ");
  }
  function getMonthName(_month, monthsName, bigFirstLetter, counter) {
    const monthCounter = !!counter ? counter : 0;
    let month;
    _month + monthCounter > 12
      ? (month = monthCounter - (12 - _month))
      : (month = _month + monthCounter);
    _month + monthCounter <= 0
      ? (month = 12 + monthCounter + 1)
      : (month = _month + monthCounter);
    return changeFirstLetter(bigFirstLetter, monthsName[month - 1]);
  }
  function getYearWithCounter(year, counter) {
    return year + counter;
  }
  function addZero(numb) {
    return numb < 10 ? "0" + numb : numb;
  }
  function changeFirstLetter(isBig, str) {
    return isBig && str && str.length > 0
      ? str[0].toUpperCase() + str.slice(1)
      : str;
  }
}
if (document.body.classList.contains("ev-date")) {
  document.addEventListener("DOMContentLoaded", function () {
    postDate(days, daysMin, months, monthMin, seasons);
  });
}