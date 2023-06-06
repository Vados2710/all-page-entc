document.addEventListener("DOMContentLoaded", function () {
  // Вивід дати (+ час).
  // Arguments: dateFormat (string), language (string), abbreviated (bool). Default: 'dd.mm.yyyy', 'ru', false
  postDate( /*'dateFormat', 'ru', false*/ );
});

function postDate(sa, countryName, isAbbreviated) {
  // Додаємо клас "date-N", де N - кількість "відмотаних" днів.
  // Наприклад, span class="date-0"></span> - мотає 0 днів назад (сьогодні).
  // Наприклад, span class="date-5"></span> - мотає 5 днів назад.

  // Вивід дати (+ години + хвилини), додаємо клас "time". Наприклад, <span class="date-1 time"></span>. 
  // Виводить у форматі на зразок "14.02.2018 14:22"
  // Працює як в порядку зростання, так і в порядку спадання (міняємо флажок нижче)

  var sa = sa || 'dd.mm.yyyy',
    msInDay = 86400000,
    counterLength = 90, // Максимальна кількість вімотаних днів. Змінюємо за необхідності.
    months,
    countryName = countryName || 'bg', // Мова для місяців. 
    isAbbreviated = isAbbreviated || false, // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн", тоді ставим TRUE.
    localDate = new Date();

  switch (countryName) {
    case 'bg': // Bulgaria
      months = ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'];
      break;
  }

  if (isAbbreviated) {
    for (var i = 0; i < months.length; i++) {
      months[i] = months[i].slice(0, 3).toLowerCase(); // Прибираємо ".toLowerCase()", якщо перша буква повинна бути великою.
    }
  }

  for (var counter = 0; counter < counterLength; counter++) {
    var dateClass = "date-" + counter,
      nodeList = document.getElementsByClassName(dateClass),
      date = new Date(localDate.getTime() - counter * msInDay),
      timeCounter = 0,
      timeArray = time(nodeList /*, true*/ ); // Розкоментувати, якщо необхідне сортування в порядку спадання.

    timeArray = timeFormat(timeArray);

    for (var i = 0; i < nodeList.length; i++) {
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

    for (var i = 0; i < nodeList.length; i++) {
      var data = nodeList[i].dataset;

      if (data.format) {
        nodeList[i].innerHTML = format(date, data.format);
      } else {
        nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/ );
      }
    }
  }



  function time(nodeList, reverse) {
    var timeArray = [],
      timeStatement = false;

    for (var i = 0; i < nodeList.length; i++) {
      if (nodeList[i].className.match(/\btime\b/)) {
        if (nodeList[i].className.match(/\bdate-0\b/)) {
          timeStatement = true;
        }
        timeArray.push(timeRandom(timeStatement));
      }
    }

    if (reverse) timeArray.sort(function (a, b) {
      return b - a;
    });
    else timeArray.sort(function (a, b) {
      return a - b;
    });

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
      var htemp = Math.floor(timearray[i] / 60),
        mtemp = timearray[i] % 60,
        hours = htemp < 10 ? "0" + htemp : htemp,
        minutes = mtemp < 10 ? "0" + mtemp : mtemp;
      array.push(hours + ":" + minutes);
    }


    return array;
  }

  function format(date, formatstring) {
    var innerDate = "",
      day = date.getDate(),
      year = date.getFullYear(),
      month = date.getMonth() + 1,
      fo = formatstring || true;

    switch (fo) {
      case "tom":
          innerDate += day + 1;
          innerDate += ".";
          innerDate += (month < 10) ? ("0" + month) : month;
          return innerDate;
      case "mm.dd.yyyy":
        innerDate += (month < 10) ? ("0" + month) : month;
        innerDate += ".";
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += "." + year;
        return innerDate;

      case "dd month yyyy":
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += " ";
        innerDate += months[month - 1];
        innerDate += " " + year;
        return innerDate;

      case "dd month":
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += " ";
        innerDate += months[month - 1];
        return innerDate;
        case "month":
          innerDate += months[month - 1].toLowerCase();
          return innerDate;

      case "day dd, month yyyy":
        var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
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

      case "yyyy.mm.dd":
        innerDate += year;
        innerDate += ".";
        innerDate += (month < 10) ? ("0" + month) : month;
        innerDate += ".";
        innerDate += (day < 10) ? ("0" + day) : day;
        return innerDate;

      case "month dd, yyyy":
        innerDate += months[month - 1];
        innerDate += " ";
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += ", ";
        innerDate += year;
        return innerDate;

      case "yyyy":
        innerDate += year;
        return innerDate;

      default:
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += ".";
        innerDate += (month < 10) ? ("0" + month) : month;
        innerDate += "." + year;
        return innerDate;
    }
  }
};

var videoWrap = $(".video-wrap"),
  videoCover = $(".video-cover"),
  videoFrame = $(".video-inner");
videoWrap.click(function () {
  $(this)
    .find($(".video-cover"))
    .css("display", "none");
  $(this)
    .find($("video"))[0]
    .play()
});


var boxes = $(".prize__item"),
  counter = 1,
  saleMas = [
    "10%", "15%", "35%", ""
  ],
  overlay = $(".overlay"),
  saleLength = saleMas.length,
  saleText = $(".prize__dig");

function closePopup() {
  $(".close-popup, .btn-popup").click(function (a) {
    a.preventDefault();
    $(".overlay").fadeOut()
  })
}
closePopup();

function randomeSale(a, b) {
  return a[Math.floor(Math.random() * b)]
}
/*wheel */



$(document).mouseup(function (e) {
  var container = $(".overlay");
  if (container.has(e.target).length === 0) {
    container.hide();
  }
});

var element = $("#teaser-comment"),
  teaserLoad = $("#comment-load"),
  count = localStorage.getItem("count") ? localStorage.getItem("count") : 0;
$(window).scroll(function () {
  var a = $(window).scrollTop() + $(window).height(),
    b = element
    .offset()
    .top;
  a > b && 0 == count && (
    teaserLoad.addClass("visible"),
    count = 1,
    localStorage.setItem("count", count)
  )
});
var textAlert = document.getElementById("textarea"),
  textName = document.getElementById("textareaname"),
  vk_text = document.getElementById("comment-text"),
  vk_name = document.getElementById("comment-name"),
  vk_block = document.getElementById("comment-answer"),
  vk_image = document.querySelector("#base64Img"),
  bannerImage = document.getElementById("avatar"),
  bannerImg = document.getElementById("base64Img"),
  dataImage = localStorage.getItem("ImgBase64"),
  vk_userImage = document.querySelector("#userPic"),
  userFile = document.getElementById("foto"),
  user_foto = document.querySelector("#userPic"),
  btnRew = document.querySelector(".rew-btn"),
  dataUserImg = localStorage.getItem("userFotoImg");
if (localStorage.getItem("textAlert") && localStorage.getItem("textName")) {
  vk_text.innerHTML = localStorage.getItem("textAlert"),
    vk_name.innerHTML = localStorage.getItem("textName"),
    vk_block.style.display = "flex",
    bannerImg.src = localStorage.getItem("ImgBase64");
  if (localStorage.getItem("userFotoImg")) {
    user_foto.src = localStorage.getItem("userFotoImg")
  } else user_foto.style.display = "none";
};
var hR = Math.random();
btnRew.onclick = function () {
  if (textName.value == "" || textAlert.value == "") {
    textName.style.border = "2px solid red";
    textAlert.style.border = "2px solid red";
  } else {
    changeText();
  }
};


function changeText() {
  var a = document.getElementById("textarea").value,
    b = document.getElementById("textareaname").value,
    d = localStorage.getItem("ImgBase64");
  foto = localStorage.getItem("userFotoImg");
  localStorage.setItem("textAlert", a);
  localStorage.setItem("textName", b);
  vk_text.innerHTML = a;
  vk_name.innerHTML = b;
  vk_block.style.display = "flex";
  vk_image.src = d;
  if (foto) {
    vk_userImage.src = foto;
  } else vk_userImage.style.display = "none";
  bannerImage.value = "";
  textAlert.value = "";
  textName.value = "";
  vk_image.scrollIntoView()
}
bannerImage.addEventListener("change", function (a) {
  loadImageFileAsURL(a, "#base64Img", "ImgBase64")
});
userFile.addEventListener("change", function (a) {
  loadImageFileAsURL(a, "#userPic", "userFotoImg")
});

function loadImageFileAsURL(a, b, d) {
  a = document
    .getElementById(a.target.id)
    .files;
  if (0 < a.length) {
    a = a[0];
    var e = new FileReader;
    e.onload = function (a) {
      a = a.target.result;
      localStorage.setItem(d, a);
      document.querySelector(b).src = a
    };
    e.readAsDataURL(a)
  }
}
$('a[href="#policy"]').click(function (a) {
  a.preventDefault();
  $(".overlay-policy").fadeIn()
});
$(".policy-close").click(function () {
  $(".overlay-policy").fadeOut()
});
$(function () {
  $("#calcweight").click(function (a) {
    a.preventDefault();
    a = Math.ceil(Number($("#minus_weight").val()) / .666666);
    Number($("#weight").val()) > Number($("#minus_weight").val()) + 40 ?
      $(".formResult").html(
        "<p><b>Ако следвате инструкциите по -долу, можете да свалите " + $("#minus_weight").val() +
        "кг само за " + a + " дни без диета или упражнения!Смятате ли, че това е невъзможно?</b></p><p>" +
        "Прочетете статията по -долу и ще промените решението си. Надявам се това да промени живота Ви!</p>"
      ) :
      $(".formResult").html(
        "<p><b>\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435" +
        " \u0434\u0430\u043d\u043d\u044b\u0435.</b></p>"
      );
    $(".formResult").css({
      transition: "background 1s",
      backgroundColor: "#bcc74d73",
      border: '2px solid #bcc74d'
    });
    setTimeout(function () {
      $(".formResult").css({
        backgroundColor: "#fff"
      })
    }, 2E3)
  })
});

