if (document.body.classList.contains('ev-date')) {
  // Якщо потрібен вивід дати та час + хвилин, тоді до спана з датою додаємо клас "time" <span class="date-1 time"></span>.
  // Працює як в порядку спадання, так і в порядку зростання.
  document.addEventListener("DOMContentLoaded", postDate);

  function postDate() {
    const msInDay = 86400000,
      counterLength = 400,
      months = ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
      isAbbreviated = false, // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн" і т.д, тоді ставим TRUE.
      localDate = new Date();

    if (isAbbreviated) {
      for (let i = 0; i < months.length; i++) months[i] = months[i].slice(0, 3).toLowerCase(); // Прибираємо ".toLowerCase()", якщо перша буква повинна бути великою.
    }

    for (let counter = 0; counter < counterLength; counter++) {
      const dateClass = "date-" + counter,
        nodeList = document.getElementsByClassName(dateClass),
        date = new Date(localDate.getTime() - counter * msInDay);

      let timeCounter = 0,
        timeArray = time(nodeList /*, true*/ ); // Розкоментувати, якщо необхідне сортування в порядку спадання.

      timeArray = timeFormat(timeArray);

      for (let i = 0; i < nodeList.length; i++) {
        const data = nodeList[i].dataset;

        data.format ?
          nodeList[i].innerHTML = format(date, data.format)
          // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
          // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
          :
          nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/ ); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

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

      let timeArray = time(nodeList /*, true*/ ); // Розкоментувати, якщо необхідне сортування в порядку спадання.
      timeArray = timeFormat(timeArray);

      for (let i = 0; i < nodeList.length; i++) {
        const data = nodeList[i].dataset;

        data.format ?
          nodeList[i].innerHTML = format(date, data.format)
          // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
          // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
          :
          nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/ ); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
      }
    }


    function time(nodeList, reverse) {
      const timeArray = [];

      for (let i = 0; i < nodeList.length; i++)
        nodeList[i].className.match(/\btime\b/) ?
        timeArray.push(timeRandom()) :
        false;

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

        case "day dd, month yyyy":
          const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
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

document.addEventListener("DOMContentLoaded", function () {
  Test.init();
})

var Test = function () {
  var btnTest = $(".js-btn-test");
  var radioButtons = $(".js-radio-input");
  var numberQuestion = $(".js-number-question");
  var questionList = $(".js-question");
  var resultTest = $(".js-result");
  var overlay = $(".js-overlay");
  // var blockTest = $('.test');

  var dataTestResult = [{
    title: 'Most nincsenek cukorbetegségre utaló tünetei. Az egészsége fenntartása érdekében sportolnia és egészségesen táplálkoznia kell.',
  }, {
    title: 'Figyelem! Az egészsége veszélyben van! Sürgősen foglalkoznia kell az egészségével és végrehajtania egy hatásos készítménnyel való kúrát.',
  }];
  return {
    checkItem: function checkItem() {
      radioButtons.click(function () {
        var _this = $(this);
        var inputChecked = _this.find(".js-radio-input");

        if (_this.hasClass("active")) {
          inputChecked.prop("checked", false);
        } else {
          inputChecked.prop("checked", true);
        }

        _this.toggleClass("active");
        var currentBlock = _this.parents(".js-question");
        var groupBlock = currentBlock.find(".js-group-inputs");

        if (currentBlock.find("input:radio:checked").length === groupBlock.length || currentBlock.find("input:checkbox:checked").length > 0) {
          btnTest.prop("disabled", false);
        } else {
          btnTest.prop("disabled", true);
        }
      });
    },
    showQuestion: function showQuestion() {
      var count = 0;
      btnTest.click(function (e) {
        e.preventDefault();
        count++;

        if (count == 7) {
          btnTest.text("Eredmény elérése");
        }

        if (count == 8) {
          $(".js-test").addClass("hide");
          $(".js-table").addClass("active");
          resultTest.addClass("active");
          overlay.addClass("active");
          Test.calculateSumResultTest();
          return;
        }

        numberQuestion.removeClass("active");
        numberQuestion.eq(count).addClass("active");
        btnTest.prop("disabled", true);
        questionList.removeClass("active");
        questionList.eq(count).addClass("active");
      });
    },
    calculateSumResultTest: function calculateSumResultTest() {
      var sum = 0;
      var sumChecked = 0;
      var sumСheckbox = 0;
      var inputChecked = questionList.find("input:radio:checked");
      var inputСheckbox = questionList.find("input:checkbox:checked")
      for (let i = 0; i < inputChecked.length; i++) {
        var input = $(inputChecked[i]);
        // var name = input.attr("name");
        var val = +inputChecked[i].value;
        sumChecked += val;
      }
      for (var i = 0; i < inputСheckbox.length; i++) {
        let input = $(inputСheckbox[i]);
        // let name = input.attr("name");
        let val = +inputСheckbox[i].value;
        sumСheckbox += val;
      }
      sum = sumChecked + sumСheckbox;
      Test.initTextResult(sum);
    },
    closeResultTest: function closeResultTest() {
      $(".js-close").click(function (e) {
        resultTest.removeClass("active");
        overlay.removeClass("active");
      });
    },
    initTextResult: function initTextResult(sum) {
      if (sum >= 0 && sum < 2) {
        $('.result__main').text(dataTestResult[0].title);
        $('.result__btn').text("ОК");
      } else {
        $('.result__main').text(dataTestResult[1].title);
      }
    },
    init: function init() {
      Test.checkItem();
      Test.showQuestion();
      Test.closeResultTest();
    }
  };
}();

$(document).ready(function () {
  $("a").attr('data-scroll', '#form');
  $(function () {
    $('a').click(function (evt) {
      evt.preventDefault();
      var target = $(this).attr('data-scroll');
      $("html, body").animate({
        scrollTop: $(target).offset().top - 10
      }, "slow");
    });
  });
});


let blur = document.querySelectorAll('.blur');

for(let i = 0; i < blur.length; i++){
  blur[i].addEventListener("click", function (){
    this.classList.toggle('show');
  })
}