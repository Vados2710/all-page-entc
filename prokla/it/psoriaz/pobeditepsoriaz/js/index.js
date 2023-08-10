const months = [
    "januar",
    "februar",
    "marec",
    "april",
    "maj",
    "junij",
    "julij",
    "avgust",
    "september",
    "oktober",
    "november",
    "december",
  ],
  monthMin = ["", "", "", "", "", "", "", "", "", "", "", ""],
  days = [
    "nedelja",
    "ponedeljek",
    "torek",
    "sreda",
    "četrtek",
    "petek",
    "sobota",
  ],
  daysMin = ["", "", "", "", "", "", ""],
  seasons = ["zima", "pomlad", "poletje", "jesen"];
function postDate(
  daysName,
  daysMinName,
  monthsName,
  monthsMinName,
  seasonsName
) {
  const _counterLength = 120;
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
    const testFormat = ["dd", "mm", "yyyy", "dayFull", "dayMin", "year"],
      dateFormat = {
        dd: _day,
        mm: addZero(_month),
        yyyy: _year,
        dayFull: getDaysName(_day, _month, _year, daysName, false),
        dayMin: getDaysName(_day, _month, _year, daysMinName, false),
        year: getYearWithCounter(_year, counter),
      };
    for (let i = 0; i < testFormat.length; i++) {
      let string = testFormat[i];
      let regExp = new RegExp(string);
      innerFormat = innerFormat.replace(regExp, dateFormat[string]);
    }
    return innerFormat.split(" ").join(" ");
  }
  function getDaysName(_day, _month, _year, daysName, bigFirstLetter) {
    return changeFirstLetter(
      bigFirstLetter,
      daysName[new Date(_year, _month - 1, _day).getDay()]
    );
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

$(".comment-form").submit(function (e) {
  e.preventDefault();
  alert("Grazie! Il tuo commento è stato inviato per moderazione!");
  $(".comment-form")[0].reset();
  $("#send-message").fadeOut(300);
  $(".label").text("Allega una foto");
});

$(".my").change(function () {
  if ($(this).val() != "") $(this).prev().text("Occupato!");
  else $(this).prev().text("Allega una foto");
});

$(".spoiler").on("click", function (e) {
  e.target.classList.toggle("show");
  console.log(e.traget);
});
