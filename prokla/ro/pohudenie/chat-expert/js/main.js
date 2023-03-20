document.addEventListener("DOMContentLoaded", function () {
 /* setTimeout(function() {
    const currPrice = document.querySelector(".x_price_current").textContent;
    const totalPrice = document.querySelectorAll(".totalcost");
  
    for (let i = 0; i < totalPrice.length; i++) {
        totalPrice[i].textContent = +currPrice + 400;
    }
  }, 1000);*/
  // var namesArray = ["Csilla", "Mária", "Éva", "Mária", "Irén"];
  // var alert = document.querySelector(".alert");
  // var alertName = alert.querySelector(".alert__name");
  // var alertCount = alert.querySelector(".alert__count");
  // var clsAlertShow = "alert--show";
  // var alertInterval = null;
  // alertInterval = setInterval(intervalHandler, getRandom(26000, 34000));
  // function intervalHandler() {
  //   if (alert.classList.contains(clsAlertShow)) {
  //     clearInterval(alertInterval);
  //     alertInterval = setInterval(intervalHandler, getRandom(26000, 34000));
  //     return;
  //   }
  //   createAlertMessage();
  //   alertShow();
  //   setTimeout(function () {
  //     alertHidden();
  //   }, 10000);
  // }
  // function createAlertMessage() {
  //   var name = namesArray[getRandom(0, namesArray.length - 1)];
  //   var count = getRandom(2, 4);
  //   alertName.textContent = name;
  //   alertCount.textContent = count;
  // }
  // function alertShow() {
  //   alert.classList.add(clsAlertShow);
  // }
  // function alertHidden() {
  //   alert.classList.remove(clsAlertShow);
  // }
  // function getRandom(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
});
// $(".alert").click(function (e) {
//   e.preventDefault();
//   const _this = $(this);
//   _this.removeClass("alert--show");
// });

// $(document).ready(function () {
//   const chatTime = $(".js-time-chat");
//   const date = new Date(),
//     time = ("0" + date.getMinutes()).slice(-2);
//   chatTime.html("Hoy, " + `${("0" + date.getHours()).slice(-2) + ":" + time}`);
// });
const months = [
    "január",
    "február",
    "március",
    "április",
    "május",
    "június",
    "július",
    "augusztus",
    "szeptember",
    "október",
    "november",
    "december",
  ],
  monthMin = ["", "", "", "", "", "", "", "", "", "", "", ""],
  days = [
    "vasárnap",
    "hétfő",
    "kedd",
    "szerda",
    "csütörtök",
    "péntek",
    "szombat",
  ],
  daysMin = ["", "", "", "", "", "", ""],
  seasons = ["tél", "tavasz", "nyár", "ősz"];
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


