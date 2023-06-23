// Показвам Скривам фото
$(".show-img").click(function (event) {
  var text =
    $(this).html() == "Spustelėkite, jei norite peržiūrėti"
      ? "Slėpti"
      : "Spustelėkite, jei norite peržiūrėti";
  $(this).html(text);
  $(this).parent().parent().find(".shock-img").toggleClass("show");
});

// комментарий
$(document).ready(function () {});

// SPIN
var resultWrapper = document.querySelector(".spin-result-wrapper");
var wheel = document.querySelector(".wheel-img");

function spin() {
  if (!wheel.classList.contains("rotated")) {
    wheel.classList.add("super-rotation");
    setTimeout(function () {
      resultWrapper.style.display = "block";
    }, 8000);

    wheel.classList.add("rotated");
  }
}

var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click(function (e) {
  e.preventDefault();
  $(".spin-result-wrapper").fadeOut();
  // $('.after-spin').fadeIn();
  $(".ruletka-p").fadeOut();
  $(".wheel-wrapper").fadeOut();
  $(".order_block").fadeIn();

  // var top = $('.toscroll').offset().top;
  // $('body,html').animate({ scrollTop: top }, 800);
  $("body,html").animate(
    {
      scrollTop: $(".toscroll").offset().top - 50,
    },
    800
  );
});

//scroll

$(document).ready(function () {
  var flag = true;

  function showPopup() {
    $(window).mouseout(function (e) {
      if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
        $(".modal").fadeIn(300);
        flag = false;
      }
    });
    $(".modal-flex").on("click", function (event) {
      if (
        $(event.target).is($(".modal-flex")) ||
        $(event.target).is(".modal-close")
      ) {
        $(".modal").fadeOut(300);
      }
    });
  }

  //проверка браузера с которого зашли и разрешения экрана
  if ($(window).width() > 1023) {
    showPopup();
  }
});
var close = document.querySelector(".modal-close");
var button = document.querySelector(".modal-btn");

function hidePopup() {
  $(".modal").fadeOut(300);
}

button.addEventListener("click", hidePopup);
close.addEventListener("click", hidePopup);

const months = [
    "sausis",
    "vasaris",
    "kovas",
    "balandis",
    "gegužės",
    "birželis",
    "liepa",
    "rugpjūtis",
    "rugsėjis",
    "spalis",
    "lapkritis",
    "gruodis",
  ],
  monthMin = ["", "", "", "", "", "", "", "", "", "", "", ""],
  days = [
    "sekmadienis",
    "pirmadienis",
    "antradienis",
    "trečiadienis",
    "ketvirtadienis",
    "penktadienis",
    "šeštadienis",
  ],
  daysMin = ["", "", "", "", "", "", ""],
  seasons = ["žiema", "pavasaris", "vasara", "ruduo"];
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
    const testFormat = ["dd", "mm", "yyyy", "dayFull", "monthFull", "year"],
      dateFormat = {
        dd: _day,
        mm: addZero(_month),
        yyyy: _year,
        dayFull: getDaysName(_day, _month, _year, daysName, false),
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
  function getDaysName(_day, _month, _year, daysName, bigFirstLetter) {
    return changeFirstLetter(
      bigFirstLetter,
      daysName[new Date(_year, _month - 1, _day).getDay()]
    );
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
// $("#push_pwjqgx9__submit").click(function () {

// });
let reviews = function () {
  let commentFileText = $(".pust-comments__file-text");
  let commentFileInput = $("#file");
  let commentTextArea = $(".comment-area");
  let commentName = $(".reviews-form__name");

  commentFileInput.change(function (e) {
    commentFileText.html("Nuotrauka užkrauta");
    commentFileText.css("color", "#237a27");
  });

  $(".reviews-form").submit(function (e) {
    if (commentTextArea.val() == "" || commentName.val() == "") {
      return false;
    }
    e.preventDefault();
    commentFileText.html("Įkraukite savo nuotrauką");
    commentFileText.css("color", "#000");
    commentTextArea.val("");
    commentName.val("");
    alert("Ačiū! Jūsų atsiliepimas išsiųstas moderavimui.");
    $("#push-comments").slideUp();
  });
};
