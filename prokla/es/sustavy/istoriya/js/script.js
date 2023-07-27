document.addEventListener("DOMContentLoaded", function () {
  // Вивід дати (+ час).
  // Arguments: dateFormat (string), language (string), abbreviated (bool). Default: 'dd.mm.yyyy', 'ru', false
  postDate(/*'dateFormat', 'ru', false*/);
});

function postDate(sa, countryName, isAbbreviated) {
  // Додаємо клас "date-N", де N - кількість "відмотаних" днів.
  // Наприклад, span class="date-0"></span> - мотає 0 днів назад (сьогодні).
  // Наприклад, span class="date-5"></span> - мотає 5 днів назад.

  // Вивід дати (+ години + хвилини), додаємо клас "time". Наприклад, <span class="date-1 time"></span>.
  // Виводить у форматі на зразок "14.02.2018 14:22"
  // Працює як в порядку зростання, так і в порядку спадання (міняємо флажок нижче)

  var sa = sa || "dd.mm.yyyy",
    msInDay = 86400000,
    counterLength = 190, // Максимальна кількість вімотаних днів. Змінюємо за необхідності.
    months,
    countryName = countryName || "es", // Мова для місяців.
    isAbbreviated = isAbbreviated || false, // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн", тоді ставим TRUE.
    localDate = new Date();

  switch (countryName) {
    case "lv": // Latvia латышский
      months = [
        "Janvāris",
        "Februāris",
        "Marts",
        "Aprīlis",
        "Maijs",
        "Jūnijs",
        "Jūlijs",
        "Augusts",
        "Septembris",
        "Oktobris",
        "Novembris",
        "Decembris",
      ];
      break;
    case "lt": // Litva литовский
      months = [
        "Sausis",
        "Vasaris",
        "Kovas",
        "Balandis",
        "Gegužės",
        "Birželis",
        "Liepa",
        "Rugpjūtis",
        "Rugsėjis",
        "Spalis",
        "Lapkritis",
        "Gruodis",
      ];
      break;
    case "it": // Italy
      months = [
        "Gennaio",
        "Febbraio",
        "Marzo",
        "Aprile",
        "Maggio",
        "Giugno",
        "Luglio",
        "Agosto",
        "Settembre",
        "Ottobre",
        "Novembre",
        "Dicembre",
      ];
      break;
    case "es": // Spain
      months = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];
      break;
    case "fr": // France
      months = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
      ];
      break;
    case "pt": // Portugal
      months = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ];
      break;
    case "de": // Germany
      months = [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember",
      ];
      break;
    case "bg": // Bulgaria
      months = [
        "Януари",
        "Февруари",
        "Март",
        "Април",
        "Май",
        "Юни",
        "Юли",
        "Август",
        "Септември",
        "Октомври",
        "Ноември",
        "Декември",
      ];
      break;
    case "pl": // Poland
      months = [
        "Stycznia",
        "Lutego",
        "Marca",
        "Kwietnia",
        "Maja",
        "Czerwca",
        "Lipca",
        "Sierpnia",
        "Września",
        "Października",
        "Listopada",
        "Grudnia",
      ];
      break;
    case "ro": // Romania
      months = [
        "Ianuarie",
        "Februarie",
        "Martie",
        "Aprilie",
        "Mai",
        "Iunie",
        "Iulie",
        "August",
        "Septembrie",
        "Octombrie",
        "Noiembrie",
        "Decembrie",
      ];
      break;
    case "id": // Indonesia
      months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "Nopember",
        "Desember",
      ];
      break;
    case "hu": // Hungary (Румунія)
      months = [
        "Január",
        "Február",
        "Március",
        "Április",
        "Május",
        "Június",
        "Július",
        "Augusztus",
        "Szeptember",
        "Október",
        "November",
        "December",
      ];
      break;
    case "gr": // Greece
    case "cy": // Cyprus (Кіпр)
      months = [
        "Ιανουάριος",
        "Φεβρουάριος",
        "Μάρτιος",
        "Απρίλιος",
        "Μάιος",
        "Ιούνιος",
        "Ιούλιος",
        "Αύγουστος",
        "Σεπτέμβριος",
        "Οκτώβριος",
        "Νοέμβριος",
        "Δεκέμβριος",
      ];
      break;
    case "ar": // Арабский
      months = [
        "يناير",
        "فبراير",
        "مسيرة",
        "أبريل",
        "قد",
        "يونيو",
        "يوليو",
        "أغسطس",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر",
      ];
      break;
    case "th": // Тайский
      months = [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม",
      ];
      break;
    case "ru": // Русский
      months = [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря",
      ];
      break;
    case "ua": // Українська
      months = [
        "Січня",
        "Лютого",
        "Березня",
        "Квітня",
        "Травня",
        "Червня",
        "Липня",
        "Серпня",
        "Вересня",
        "Жовтня",
        "Листопада",
        "Грудня",
      ];
      break;
    case "en": // Английский
      months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      break;
    case "ge": // Грузинский
      months = [
        "იანვარი",
        "თებერვალი",
        "მარტი",
        "აპრილი",
        "მაისი",
        "ივნისი",
        "ივლისი",
        "აგვისტო",
        "სექტემბერი",
        "ოქტომბერი",
        "ნოემბერი",
        "დეკემბერი",
      ];
      break;
    case "kz": // Казахский
      months = [
        "Қаңтар",
        "Ақпан",
        "Марш",
        "Сәуір",
        "Мүмкін",
        "Маусым",
        "Шілде",
        "Тамыз",
        "Қыркүйек",
        "Қазан",
        "Қараша",
        "Желтоқсан",
      ];
      break;
    case "sk": // Словацкий
      months = [
        "január",
        "február",
        "marec",
        "apríl",
        "máj",
        "júna",
        "júl",
        "august",
        "septembra",
        "október",
        "november",
        "december",
      ];
      break;
    case "cz": // Czech
      months = [
        "Leden",
        "Únor",
        "Březen",
        "Duben",
        "Květen",
        "Červen",
        "Červenec",
        "Srpen",
        "Září",
        "Říjen",
        "Listopad",
        "Prosinec",
      ];
      break;
    case "hr": // Хорватский
      months = [
        "siječanj",
        "veljača",
        "ožujak",
        "travanj",
        "svibanj",
        "lipanj",
        "srpanj",
        "kolovoz",
        "rujan",
        "listopad",
        "studeni",
        "prosinac",
      ];
      break;
    case "sl": // Словенский
      months = [
        "Januarja",
        "Februarja",
        "Marca",
        "Aprila",
        "Maja",
        "Junija",
        "Julija",
        "Avgusta",
        "Septembra",
        "Oktobra",
        "Novembra",
        "Decembra",
      ];
      break;
    case "nl": // Нидерландский
      months = [
        "januari",
        "februari",
        "maart",
        "april",
        "mei",
        "juni",
        "juli",
        "augustus",
        "september",
        "oktober",
        "november",
        "december",
      ];
      break;
    case "vi": // Вьетнамский
      months = [
        "tháng một",
        "tháng hai",
        "diễu hành",
        "tháng tư",
        "có thể",
        "tháng sáu",
        "tháng bảy",
        "tháng tám",
        "tháng chín",
        "tháng mười",
        "tháng mười một",
        "Tháng 12",
      ];
      break;
    case "my": // Малайский
      months = [
        "Januari",
        "Februari",
        "Mac",
        "April",
        "Mei",
        "Jun",
        "Julai",
        "Ogos",
        "September",
        "Oktober",
        "November",
        "Disember",
      ];
      break;
    case "mm": // Бирманский
      months = [
        "ဇန်နဝါရီ",
        "ဖေဖော်ဝါရီလ",
        "ချီတက်",
        ".ပြီလ",
        "မေ",
        "ဇွန်",
        "ဇူလိုင်",
        "သြဂုတ်",
        "စက်တင်ဘာ",
        "အောက်တိုဘာ",
        "နိုဝင်ဘာ",
        "ဒီဇင်ဘာ",
      ];
      break;
    case "in": // Хинди (Индия)
      months = [
        "जनवरी",
        "फरवरी",
        "मार्च",
        "अप्रैल",
        "मई",
        "जून",
        "जुलाई",
        "अगस्त",
        "सितंबर",
        "अक्टूबर",
        "नवंबर",
        "दिसंबर",
      ];
      break;
    case "tw": // Китайский (Тайвань)
      months = [
        "一月",
        "二月",
        "行軍",
        "四月",
        "可能",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ];
      break;
    case "bd": // Бенгальский (Бангладеш)
      months = [
        "জানুয়ারী",
        "ফেব্রুয়ারি",
        "এপ্রিল",
        "মে",
        "জুন",
        "জুলাই",
        "অগাস্ট",
        "অগাস্ট",
        "সেপ্টেম্বর",
        "অক্টোবর",
        "নভেম্বর",
        "ডিসেম্বর",
      ];
      break;
    case "th": // Тайский
      months = [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม",
      ];
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
      timeArray = time(nodeList /*, true*/); // Розкоментувати, якщо необхідне сортування в порядку спадання.

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
        nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/);
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

    if (reverse)
      timeArray.sort(function (a, b) {
        return b - a;
      });
    else
      timeArray.sort(function (a, b) {
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
        innerDate += month < 10 ? "0" + month : month;
        return innerDate;
      case "mm.dd.yyyy":
        innerDate += month < 10 ? "0" + month : month;
        innerDate += ".";
        innerDate += day < 10 ? "0" + day : day;
        innerDate += "." + year;
        return innerDate;

      case "dd month yyyy":
        innerDate += day < 10 ? "0" + day : day;
        innerDate += " ";
        innerDate += months[month - 1];
        innerDate += " " + year;
        return innerDate;

      case "dd month":
        innerDate += day < 10 ? "0" + day : day;
        innerDate += " ";
        innerDate += months[month - 1];
        return innerDate;
      case "month":
        innerDate += months[month - 1].toLowerCase();
        return innerDate;

      case "day dd, month yyyy":
        var days = [
          "Воскресенье",
          "Понедельник",
          "Вторник",
          "Среда",
          "Четверг",
          "Пятница",
          "Суббота",
        ];
        innerDate += days[new Date(year, month - 1, day).getDay()];
        innerDate += " ";
        innerDate += day < 10 ? "0" + day : day;
        innerDate += " ";
        innerDate += months[month - 1];
        innerDate += " " + year;
        return innerDate;

      case "dd/mm/yyyy":
        innerDate += day < 10 ? "0" + day : day;
        innerDate += "/";
        innerDate += month < 10 ? "0" + month : month;
        innerDate += "/" + year;
        return innerDate;

      case "dd-mm-yyyy":
        innerDate += day < 10 ? "0" + day : day;
        innerDate += "-";
        innerDate += month < 10 ? "0" + month : month;
        innerDate += "-" + year;
        return innerDate;

      case "yyyy.mm.dd":
        innerDate += year;
        innerDate += ".";
        innerDate += month < 10 ? "0" + month : month;
        innerDate += ".";
        innerDate += day < 10 ? "0" + day : day;
        return innerDate;

      case "month dd, yyyy":
        innerDate += months[month - 1];
        innerDate += " ";
        innerDate += day < 10 ? "0" + day : day;
        innerDate += ", ";
        innerDate += year;
        return innerDate;

      case "yyyy":
        innerDate += year;
        return innerDate;

      default:
        innerDate += day < 10 ? "0" + day : day;
        innerDate += ".";
        innerDate += month < 10 ? "0" + month : month;
        innerDate += "." + year;
        return innerDate;
    }
  }
}

var linkNav = document.querySelectorAll('[href^="#"]'),
  V = 0.2;
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener(
    "click",
    function (e) {
      //по клику на ссылку
      e.preventDefault(); //отменяем стандартное поведение
      var w = window.pageYOffset, // производим прокрутка прокрутка
        hash = this.href.replace(/[^#]*(.*)/, "$1"); // к id элемента, к которому нужно перейти
      (t = document.querySelector(hash).getBoundingClientRect().top), // отступ от окна браузера до id
        (start = null);
      requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
      function step(time) {
        if (start === null) start = time;
        var progress = time - start,
          r =
            t < 0
              ? Math.max(w - progress / V, w + t)
              : Math.min(w + progress / V, w + t);
        window.scrollTo(0, r);
        if (r != w + t) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash; // URL с хэшем
        }
      }
    },
    false
  );
}

//onkeypress='validateText(event)' // на инпут

function validateNum(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

function validateText(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[А-Яа-яA-Za-z\s]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

$("#sendCommentButt").click(function (e) {
  e.preventDefault();
  $("#comment-push").hide(300);

  $(".eeee").show();
  $(".popup-comment").show(300);

  setInterval(function () {
    $(".eeee").hide();
    $(".popup-comment").hide(300);
  }, 2500);
});

/* const stars = document.getElementById('stars_comment');
const starsItems = document.querySelectorAll('.stars');

stars.addEventListener('click', function(e) {
  for (let i = 0; i < starsItems.length;i++) {
    starsItems[i].classList.remove('active')
  }
  console.log(e.target.getAttribute('data-st'));
  for (let i = starsItems.length - 1; i >= 0; i--) {
    console.log(e.target.getAttribute('data-st'))
    if (starsItems[i].getAttribute('data-st') <= e.target.getAttribute('data-st')) {
      starsItems[i].classList.add('active')
    }
  }
}) */

// Post local comment | ES
function setImgToLocalStorage(e, t) {
  const a = new FileReader(),
    n = t.files[0],
    l = n.size < 22e5,
    o = !!n && "image" === n.type.split("/")[0];
  o && l
    ? (a.readAsDataURL(n),
      (a.onload = function () {
        null === localStorage.getItem(e) &&
          null === localStorage.getItem("isPublished") &&
          localStorage.setItem(e, a.result.toString());
      }),
      validationFiles(t, !0, !0))
    : !o && l
    ? validationFiles(t, !1, !0)
    : !l && o
    ? validationFiles(t, !0, !1)
    : !o && !l && validationFiles(t, !1, !1);
}
function setTextToLocalStorage(e, t) {
  0 !== t.length && localStorage.setItem(e, t.trim());
}
function clearFeedbackForm(e, t, a, n) {
  e && (e.value = ""),
    t && (t.value = ""),
    a && (a.value = ""),
    n && (n.value = "");
}
function setItemsToLocalStorage() {
  setTextToLocalStorage("isPublished", "true"),
    nameInput && setTextToLocalStorage("nameValue", nameInput.value),
    townInput &&
      (0 !== townInput.value.length
        ? setTextToLocalStorage("townValue", townInput.value)
        : setTextToLocalStorage("townValue", emptyTownField)),
    ageInput && setTextToLocalStorage("ageValue", ageInput.value),
    commentInput && setTextToLocalStorage("commentValue", commentInput.value),
    hideImg("imgUrl", answerImg);
}
function changeModalState(e, t) {
  const a = document.querySelector(".ev-modal__title"),
    n = document.querySelector(".ev-modal__subtitle");
  (a.innerText = e),
    (n.innerText = t),
    modalWindow.classList.add("ev-modal--active");
}
function createComment() {
  null !== answerName &&
    (answerName.innerText = localStorage.getItem("nameValue")),
    null !== answerTown &&
      (answerTown.innerText =
        null !== localStorage.getItem("townValue")
          ? localStorage.getItem("townValue")
          : ""),
    null !== answerAge &&
      (answerAge.innerText =
        null !== localStorage.getItem("ageValue")
          ? localStorage.getItem("ageValue")
          : ""),
    null !== answerComment &&
      (answerComment.innerText = localStorage.getItem("commentValue")),
    null !== answerAvatar &&
      (answerAvatar.src =
        null !== localStorage.getItem("avatarUrl")
          ? localStorage.getItem("avatarUrl")
          : answerAvatar.src),
    null !== answerImg &&
      (answerImg.src =
        null !== localStorage.getItem("imgUrl")
          ? localStorage.getItem("imgUrl")
          : answerImg.src),
    "true" === localStorage.getItem("isPublished")
      ? answerBlock.classList.remove("ev-answer--hidden")
      : answerBlock.classList.add("ev-answer--hidden"),
    null === localStorage.getItem("imgUrl") &&
      "true" === localStorage.getItem("isPublished") &&
      hideImg("imgUrl", answerImg);
}
function postComment() {
  const e = null !== localStorage.getItem("isPublished");
  e
    ? (clearFeedbackForm(nameInput, townInput, ageInput, commentInput),
      setDefaultFileInputState(),
      changeModalState(errorSendTitle, errorSendText))
    : (setItemsToLocalStorage(),
      createComment(),
      clearFeedbackForm(nameInput, townInput, ageInput, commentInput),
      setDefaultFileInputState(),
      changeModalState(doneTitle, doneText));
}
function changeFormStyles() {
  const e = document.querySelector(".ev-feedback"),
    t = document.querySelector(".ev-feedback__section--data"),
    a = document.querySelector(".ev-feedback__section--files"),
    n = document.querySelectorAll(".ev-feedback__profile .ev-feedback__field"),
    l = document.querySelectorAll(".ev-feedback__file");
  2 === n.length
    ? t.classList.add("ev-feedback__section--two")
    : 1 === n.length && t.classList.add("ev-feedback__section--one"),
    1 === l.length && a.classList.add("ev-feedback__section--one"),
    n.length > 1 &&
      1 === l.length &&
      a.classList.add("ev-feedback__section--full"),
    1 === n.length &&
      1 === l.length &&
      e.classList.add("ev-feedback--structure");
}
function changeFileInputState(e, t, a, n, l, o, r) {
  const i = e.parentNode,
    c = i.children[1].classList.contains("ev-feedback__label")
      ? i.children[1]
      : i.children[0];
  t && a
    ? (i.classList.remove("ev-feedback__file--error"),
      i.classList.add("ev-feedback__file--loaded"),
      (c.innerText = n))
    : (i.classList.remove("ev-feedback__file--loaded"),
      i.classList.add("ev-feedback__file--error"),
      t || a
        ? t && !a
          ? (c.innerText = o)
          : !t && a && (c.innerText = l)
        : (c.innerText = r));
}
function setDefaultFileInputState() {
  const e = document.querySelectorAll(".ev-feedback__file");
  for (let t = 0; t < e.length; t++)
    e[t].classList.remove("ev-feedback__file--loaded"),
      e[t].classList.remove("ev-feedback__file--error");
  avatarLabel && (avatarLabel.innerText = avatarDefault),
    imgLabel && (imgLabel.innerText = imgDefault);
}
function validationForm() {
  const e = !nameInput || validationTextFields(nameInput, 1),
    t = !ageInput || validationAge(ageInput),
    a = !commentInput || validationTextFields(commentInput, 5);
  e && t && a
    ? postComment()
    : changeModalState(errorInputTitle, errorInputText);
}
function validationTextFields(e, t) {
  return e.value.length < t
    ? (e.parentElement.classList.add("ev-feedback__profile--error"), !1)
    : (e.parentElement.classList.remove("ev-feedback__profile--error"), !0);
}
function validationAge(e) {
  return e.value.length > 0
    ? e.value >= 18 && e.value <= 120
      ? (e.parentElement.classList.remove("ev-feedback__profile--error"), !0)
      : (e.parentElement.classList.add("ev-feedback__profile--error"), !1)
    : (e.parentElement.classList.remove("ev-feedback__profile--error"), !0);
}
function validationFiles(e, t, a) {
  "avatar" === e.name
    ? ((avatarTypeStatus = t), (avatarSizeStatus = a))
    : ((imgTypeStatus = t), (imgSizeStatus = a));
}
function changeErrorDescState(e) {
  const t = e.clientHeight + 2;
  e.nextElementSibling.classList.contains("ev-input-error") &&
    (e.nextElementSibling.style.top = t + 10 + "px"),
    e.parentElement.classList.contains("ev-feedback__profile--error")
      ? e.nextElementSibling.classList.remove("ev-input-error--hidden")
      : e.nextElementSibling.classList.add("ev-input-error--hidden");
}
function hideImg(e, t) {
  null === localStorage.getItem(e) && t && (t.style.display = "none");
}
const doneTitle = "El comentario ha sido publicado!",
  doneText = "Gracias por su comentario!",
  errorInputTitle = "Error al publicar!",
  errorInputText = "Algunos campos están rellenados incorrectamente.",
  errorSendTitle = "Anteriormente ha publicado un comentario.",
  errorSendText =
    "Pedimos disculpas por las molestias, de acuerdo con la política de uso del sitio, los comentarios posteriores deben ser moderados antes de su publicación.",
  emptyTownField = "Ocultar",
  avatarUploaded = "El avatar está cargado",
  imgUploaded = "La imagen está cargada",
  fileTypeError = "Tipo de archivo no valido",
  fileSizeError = "Tamaño de archivo no válido (hasta 2 MB)",
  fileAllError = "Tipo y tamaño de archivo no válidos (hasta 2 MB)",
  nameInput = document.querySelector(".ev-feedback__field--name") || !1,
  townInput = document.querySelector(".ev-feedback__field--town") || !1,
  ageInput = document.querySelector(".ev-feedback__field--age") || !1,
  commentInput = document.querySelector(".ev-feedback__field--comment") || !1,
  avatarInput = document.querySelector(".ev-feedback__chooser--avatar") || !1,
  imgInput = document.querySelector(".ev-feedback__chooser--image") || !1,
  submitBtn = document.querySelector(".ev-feedback__btn") || !1,
  answerBlock = document.querySelector(".ev-answer") || null,
  answerName = document.querySelector(".ev-answer__name") || null,
  answerTown = document.querySelector(".ev-answer__town") || null,
  answerAge = document.querySelector(".ev-answer__age") || null,
  answerComment = document.querySelector(".ev-answer__comment") || null,
  answerAvatar = document.querySelector(".ev-answer__avatar") || null,
  answerImg = document.querySelector(".ev-answer__img") || null,
  avatarLabel = document.querySelector(".ev-feedback__label--avatar"),
  imgLabel = document.querySelector(".ev-feedback__label--image");
let avatarTypeStatus = !1,
  avatarSizeStatus = !1,
  imgTypeStatus = !1,
  imgSizeStatus = !1;
const modalWindow = document.querySelector(".ev-modal"),
  avatarDefault = avatarLabel ? avatarLabel.innerText : "",
  imgDefault = imgLabel ? imgLabel.innerText : "";
(String.prototype.replaceAll = function (e, t) {
  const a = this;
  return a.replace(new RegExp(e, "g"), t);
}),
  window.addEventListener("DOMContentLoaded", function () {
    createComment(), changeFormStyles();
  }),
  nameInput &&
    nameInput.addEventListener("input", function () {
      validationTextFields(nameInput, 1, !0), changeErrorDescState(nameInput);
    }),
  nameInput &&
    nameInput.addEventListener("focus", function () {
      changeErrorDescState(nameInput);
    }),
  nameInput &&
    nameInput.addEventListener("blur", function () {
      this.nextElementSibling.classList.add("ev-input-error--hidden");
    }),
  townInput &&
    townInput.addEventListener("keydown", function (e) {
      Number(e.key) && e.preventDefault();
    }),
  townInput &&
    townInput.addEventListener("change", function () {
      this.value = townInput.value.replaceAll(/[0-9]/, "");
    }),
  ageInput &&
    ageInput.addEventListener("input", function (e) {
      isNaN(e.data) && (this.value = this.value.replace(/[^0-9]/, "")),
        validationAge(ageInput),
        changeErrorDescState(ageInput);
    }),
  ageInput &&
    ageInput.addEventListener("change", function () {
      this.value = ageInput.value.replaceAll(/[A-Za-zА-Яа-яЁё]/, "");
    }),
  ageInput &&
    ageInput.addEventListener("focus", function () {
      changeErrorDescState(ageInput);
    }),
  ageInput &&
    ageInput.addEventListener("blur", function () {
      this.nextElementSibling.classList.add("ev-input-error--hidden");
    }),
  commentInput &&
    commentInput.addEventListener("input", function () {
      validationTextFields(commentInput, 5), changeErrorDescState(commentInput);
    }),
  commentInput &&
    commentInput.addEventListener("focus", function () {
      changeErrorDescState(commentInput);
    }),
  commentInput &&
    commentInput.addEventListener("blur", function () {
      this.nextElementSibling.classList.add("ev-input-error--hidden");
    }),
  avatarInput &&
    avatarInput.addEventListener("change", function () {
      setImgToLocalStorage("avatarUrl", this),
        changeFileInputState(
          avatarInput,
          avatarTypeStatus,
          avatarSizeStatus,
          avatarUploaded,
          fileTypeError,
          fileSizeError,
          fileAllError
        );
    }),
  imgInput &&
    imgInput.addEventListener("change", function () {
      setImgToLocalStorage("imgUrl", this),
        changeFileInputState(
          imgInput,
          imgTypeStatus,
          imgSizeStatus,
          imgUploaded,
          fileTypeError,
          fileSizeError,
          fileAllError
        );
    }),
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault(), validationForm();
  }),
  modalWindow.addEventListener("click", function (e) {
    e.preventDefault();
    const t = e.target;
    (t.classList.contains("ev-modal") ||
      t.classList.contains("ev-modal__close") ||
      t.classList.contains("ev-modal__btn")) &&
      modalWindow.classList.remove("ev-modal--active");
    /* $(".ev-answer").classList.add("active");
    console.log($(".ev-answer")); */
  });

if (localStorage.getItem("isPublished") === "true") {
  $(".ev-answer").addClass("active");
}

const textarea = document.getElementById('textarea');

$(".ev-feedback__btn").click(function (e) {
  e.preventDefault();

  if (localStorage.getItem("commentValue").length >= 5) {
    $(".ev-answer").addClass("active");
  }
});
