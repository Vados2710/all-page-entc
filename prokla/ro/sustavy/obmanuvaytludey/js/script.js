const months = ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'],
  monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''],
  days = ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă'],
  daysMin = ['', '', '', '', '', '', ''],
  seasons = ['iarnă', 'arc', 'vară', 'toamnă'];

function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {
  const _counterLength = 60;
  for (let counter = 0; counter < _counterLength; counter++) {
    innerDate(counter, 'date-');
    innerDate(counter, 'date')
  }

  function innerDate(counter, dateType) {
    let newCounter;
    dateType === 'date-' ? newCounter = -counter : newCounter = counter;
    const _msInDay = 86400000,
      _localDate = new Date(Date.now() + (newCounter * _msInDay)),
      _day = _localDate.getDate(),
      _month = _localDate.getMonth() + 1,
      _year = _localDate.getFullYear();
    const dayDefault = addZero(_day),
      monthDefault = addZero(_month),
      defaultDate = dayDefault + '.' + monthDefault + '.' + _year;
    const dateClass = dateType + counter,
      nodeList = document.querySelectorAll('.' + dateClass);
    for (let i = 0; i < nodeList.length; i++) {
      const dateFormat = nodeList[i].dataset.format;
      dateFormat !== undefined && dateFormat !== '' ? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)) : nodeList[i].innerHTML = defaultDate
    }
  }

  function changeFormat(_day, _month, _year, format, counter) {
    let innerFormat = format;
    const testFormat = ["dd", "mm", "yyyy", "monthFull", "monthOnly", "year"],
      dateFormat = {
        dd: _day,
        mm: addZero(_month),
        yyyy: _year,
        monthFull: getMonthName(_month, monthsName, false),
        monthOnly: getMonthName(_month, monthsName, false, counter),
        year: getYearWithCounter(_year, counter),
      };
    for (let i = 0; i < testFormat.length; i++) {
      let string = testFormat[i];
      let regExp = new RegExp(string);
      innerFormat = innerFormat.replace(regExp, dateFormat[string]);
    }
    return innerFormat.split(' ').join(' ')
  }

  function getMonthName(_month, monthsName, bigFirstLetter, counter) {
    const monthCounter = !!counter ? counter : 0;
    let month;
    _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter;
    _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter;
    return changeFirstLetter(bigFirstLetter, monthsName[month - 1])
  }

  function getYearWithCounter(year, counter) {
    return year + counter
  }

  function addZero(numb) {
    return numb < 10 ? '0' + numb : numb
  }

  function changeFirstLetter(isBig, str) {
    return isBig && str && str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str
  }
}
if (document.body.classList.contains('ev-date')) {
  document.addEventListener("DOMContentLoaded", function () {
    postDate(days, daysMin, months, monthMin, seasons)
  });
}


let mainFormBox = document.querySelectorAll(".main__form-box");
let counterText = document.querySelector(".counter");
let popup1 = document.querySelector(".popup-1");
let popup2 = document.querySelector(".popup-2");
let popup = document.querySelectorAll(".popup");

let mainFormBoxes = document.querySelector(".main__form-boxes");
let mainForm = document.querySelector(".main__form");
let mainFormSale = document.querySelector(".main__form-sale");
let mainFormRemainder = document.querySelector(".main__form-remainder");

const hiddenBox = document.querySelector(".hidden-box");

let counter = 2;

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

mainFormBox.forEach((item) => {
  item.addEventListener("click", (e) => {
    let winPrize = item.querySelector(".win_prize");
    let mainFormBoxImg = item.querySelector("img");
    if (counter === 2) {
      mainFormBoxImg.classList.add("open");

      console.log(hiddenBox.src);

      mainFormBoxImg.src = hiddenBox.src;
      popup1.classList.add("active");
    } else if (counter === 1) {
      winPrize.classList.add("active");
      mainFormBoxImg.style.display = "none";
      popup2.classList.add("active");

      setTimeout(() => {
        mainForm.classList.add("active");
        mainFormBoxes.classList.add("hide");
        mainFormSale.style.display = "none";
        mainFormRemainder.style.display = "none";
      }, 1000);


      start_timer();

    }
    counter--;
    counterText.textContent = counter;
  });
});

popup.forEach((item) => {
  let popupButton = item.querySelector(".popup__button");
  item.addEventListener("click", (e) => {
    // console.log(e.target);
    if (e.target === item || e.target === popupButton) {
      item.classList.remove("active");
    }
  });
});