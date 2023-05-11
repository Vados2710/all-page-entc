// date
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
    const testFormat = ["dd", "mm", "yyyy", "year"],
      dateFormat = {
        dd: _day,
        mm: addZero(_month),
        yyyy: _year,
        year: getYearWithCounter(_year, counter),
      };
    for (let i = 0; i < testFormat.length; i++) {
      let string = testFormat[i];
      let regExp = new RegExp(string);
      innerFormat = innerFormat.replace(regExp, dateFormat[string]);
    }
    return innerFormat.split(" ").join(" ");
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

// comment__form
(() => {
  const $btn = document.querySelector(".comment__btn");
  const $name = document.querySelector(".comment__input-name");
  const $text = document.querySelector(".comment__input-text");
  const $inputBlock = document.querySelector(".comment__send");
  const $newCommentBlock = document.querySelector(".comment__new");
  const $adminText = document.querySelector(".comment__admin");
  const newName = document.querySelector(".comment-name_new");
  const newText = document.querySelector(".comment-text_new");
  const key = `commentOn${window.location.pathname}`;
  const btnShow = document.querySelector('.show__form');

  btnShow.addEventListener('click', function() {
    $inputBlock.classList.add('active');
    btnShow.style.display = "none";
  })  

  if (!localStorage.getItem(key)) {
    $btn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.setItem(key, "true");

      $inputBlock.style.display = "none";
      $newCommentBlock.style.display = "flex";
      $adminText.style.display = "block";
      newName.textContent = $name.value;
      newText.textContent = $text.value;
    });
  } else {
    $inputBlock.style.display = "none";
    $adminText.style.display = "block";
  }
})();

// test

function test() {
  const $selectList = document.querySelectorAll(".quiz__input");
  const $btn = document.querySelector(".quiz__btn");
  const $result__itemList = document.querySelectorAll(".quiz__result-item");

  let result = 0;

  $btn.addEventListener("click", (e) => {
    e.preventDefault();
    result = 0;

    $selectList.forEach((select) => {
      result += parseInt(select.value);
    });
    let userAnswer = [
      {
        userScore: result <= 7,
        resultText: $result__itemList[0],
      },
      {
        userScore: result > 7 && result <= 14,
        resultText: $result__itemList[1],
      },
      {
        userScore: result > 14,
        resultText: $result__itemList[2],
      },
    ];

    answer(userAnswer);

    function answer(userAnswer) {
      userAnswer.forEach((item) => {
        if (item.userScore) {
          item.resultText.style.display = "block";
          return;
        }
        item.resultText.style.display = "none";
      });
    }
  });
}

test();

var t;
function scrolltoform() {
  $(this).attr("href", "#ordera0");
  var id = $(this).attr("href"),
    top = $(id).offset().top;
  $("body,html").animate({ scrollTop: top - 0}, 120);
}

function openImg(e) {
  const target = e.target;
  if (
    target.classList.contains("first") ||
    target.classList.contains("second")
  ) {
    const parent = target.parentNode.parentNode;
    parent.classList.toggle("show");
  }
}

document.addEventListener("click", openImg);
