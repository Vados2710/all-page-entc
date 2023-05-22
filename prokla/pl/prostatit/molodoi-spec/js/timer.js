
function main() {
	// Якщо потрібен вивід дати та час + хвилин, тоді до спана з датою додаємо клас "time" <span class="date-1 time"></span>.
// Працює як в порядку спадання, так і в порядку зростання.
document.addEventListener("DOMContentLoaded", Datee);

function Datee() {
    var msInDay = 86400000,
        counterLength = 90,
        months, countryName = 'pl', // Встановлюємо мову для місяців.
        isAbbreviated = false, // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн" і т.д, тоді ставим TRUE.
        localDate = new Date();

    switch (countryName) {
        case 'lv': // Latvia латышский
            months = ['Janvaris', 'Februaris', 'Marts', 'Aprilis', 'Maijs', 'Junijs', 'Julijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris'];
            break;
        case 'lt': // Litva литовский
            months = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguzes', 'Birzelis', 'Liepa', 'Rugpjutis', 'Rugsejis', 'Spalis', 'Lapkritis', 'Gruodis'];
            break;
        case 'it': // Italy
            months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
            break;
        case 'es': // Spain
            months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            break;
        case 'fr': // France
            months = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
            break;
        case 'pt': // Portugal
            months = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
            break;
        case 'de': // Germany
            months = ['Januar', 'Februar', 'Marz', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
            break;
        case 'bg': // Bulgaria
            months = ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'];
            break;
        case 'pl': // Poland
            months = ['Stycznia', 'Lutego', 'Marca', 'Kwietnia', 'Maja', 'Czerwca', 'Lipca', 'Sierpnia', 'Wrzesnia', 'Pazdziernika', 'Listopada', 'Grudnia'];
            break;
        case 'ro': // Romania
            months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
            break;
        case 'id': // Indonesia
            months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember'];
            break;
        case 'hu': // Hungary (Румунія)
            months = ['Januar', 'Februar', 'Marcius', 'Aprilis', 'Majus', 'Junius', 'Julius', 'Augusztus', 'Szeptember', 'Oktober', 'November', 'December'];
            break;
        case 'gr': // Greece
        case 'cy': // Cyprus (Кіпр)
            months = ['??????????', '???????????', '???????', '????????', '?????', '???????', '???????', '?????????', '???????????', '?????????', '?????????', '??????????'];
            break;
        case 'ar': // Арабский
            months = ['?????', '??????', '?????', '?????', '??', '?????', '?????', '?????', '??????', '??????', '??????', '??????'];
            break;
        case 'th': // Тайский
            months = ['??????', '??????????', '??????', '??????', '???????', '????????', '???????', '???????', '???????', '??????', '?????????', '???????'];
            break;
        case 'ru': // Русский
            months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
            break;
        case 'ua': // Українська
            months = ['Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня'];
            break;
        case 'en': // Английский
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            break;
        case 'ge': // Грузинский
            months = ['???????', '?????????', '?????', '??????', '?????', '??????', '??????', '???????', '??????????', '?????????', '????????', '?????????'];
            break;
        case 'kz': // Казахский
            months = ['?а?тар', 'А?пан', 'Марш', 'С?уір', 'М?мкін', 'Маусым', 'Шілде', 'Тамыз', '?ырк?йек', '?азан', '?араша', 'Желто?сан'];
            break;
        case 'sk': // Словацкий
            months = ['januar', 'februar', 'marec', 'april', 'maj', 'juna', 'jul', 'august', 'septembra', 'oktober', 'november', 'december'];
            break;
        case 'cz': // Чешский
            months = ['leden', 'unor', 'brezen', 'duben', 'kveten', 'cerven', 'cervenec', 'srpen', 'zari', 'rijen', 'listopad', 'prosinec'];
            break;
        case 'hr': // Хорватский
            months = ['sijecanj', 'veljaca', 'ozujak', 'travanj', 'svibanj', 'lipanj', 'srpanj', 'kolovoz', 'rujan', 'listopad', 'studeni', 'prosinac'];
            break;
        case 'sl': // Словенский
            months = ['Januarja', 'Februarja', 'Marca', 'Aprila', 'Maja', 'Junija', 'Julija', 'Avgusta', 'Septembra', 'Oktobra', 'Novembra', 'Decembra'];
            break;
        case 'nl': // Нидерландский
            months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
            break;
        case 'vi': // Вьетнамский
            months = ['thang m?t', 'thang hai', 'di?u hanh', 'thang tu', 'co th?', 'thang sau', 'thang b?y', 'thang tam', 'thang chin', 'thang mu?i', 'thang mu?i m?t', 'Thang 12'];
            break;
        case 'my': // Малайский
            months = ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'];
            break;
        case 'mm': // Бирманский
            months = ['????????', '???????????', '??????', '.????', '??', '????', '???????', '??????', '????????', '??????????', '????????', '???????'];
            break;
        case 'in': // Хинди (Индия)
            months = ['?????', '?????', '?????', '??????', '??', '???', '?????', '?????', '??????', '???????', '?????', '??????'];
            break;
        case 'tw': // Китайский (Тайвань)
            months = ['??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '???', '???'];
            break;
        case 'bd': // Бенгальский (Бангладеш)
            months = ['????????', '??????????', '??????', '??', '???', '?????', '??????', '??????', '??????????', '???????', '???????', '????????'];
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
            timeCounter = 0;
        timeArray = time(nodeList /*, true*/ ); // Розкоментувати, якщо необхідне сортування в порядку спадання.

        timeArray = timeFormat(timeArray);

        for (var i = 0; i < nodeList.length; i++) {
            var data = nodeList[i].dataset;

            if (data.format) {
                nodeList[i].innerHTML = format(date, data.format);
                // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
                // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
            } else {
                nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/ ); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
            }
            if (/\btime\b/.test(nodeList[i].className)) {
                nodeList[i].innerHTML += " " + timeArray[timeCounter]; // Рядок для формату виводу часу.
                timeCounter++;
            }
        }
    }

    // <span clas="date-NUMBER"></span> - мотає час назад на NUMBER днів. Наприклад, <span className="date-5"></span>
    // <span clas="dateNUMBER"></span> - мотає час вперед на NUMBER днів. Наприклад, <span className="date5"></span>

    for (var counter = 0; counter < counterLength; counter++) {
        var dateClass = "date" + counter,
            nodeList = document.getElementsByClassName(dateClass),
            date = new Date(localDate.getTime() + counter * msInDay),
            timeCounter = 0;
        timeArray = time(nodeList /*, true*/ ); // Розкоментувати, якщо необхідне сортування в порядку спадання.

        timeArray = timeFormat(timeArray);

        for (var i = 0; i < nodeList.length; i++) {
            var data = nodeList[i].dataset;

            if (data.format) {
                nodeList[i].innerHTML = format(date, data.format);
                // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
                // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
            } else {
                nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/ ); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
            }
        }
    }



    function time(nodeList, reverse) {
        var timeArray = [];

        for (var i = 0; i < nodeList.length; i++) {
            if (nodeList[i].className.match(/\btime\b/)) {
                timeArray.push(timeRandom());
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

    function timeRandom() {
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

            default:
                innerDate += (day < 10) ? ("0" + day) : day;
                innerDate += ".";
                innerDate += (month < 10) ? ("0" + month) : month;
                innerDate += "." + year;
                return innerDate;
        }
    }
}



$(document).ready(function() {
    var flag = true;
    function showPopup() {
      $(window).mouseout(function(e) {
         if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
             $('.modal').fadeIn(300);
             flag = false;
         }
      });
      $(".modal-flex").on('click', function(event) {
           if ($(event.target).is($(".modal-flex")) || $(event.target).is(".modal-close")) {
               $('.modal').fadeOut(300);
           }
       });
    }
  
    //проверка браузера с которого зашли и разрешения экрана
    if(($(window).width() > 1023))   {
      showPopup();
    }
  });
  var close = document.querySelector(".modal-close");
  var button = document.querySelector(".modal-btn");
  function hidePopup() {
    $(".modal").fadeOut(300);
  }
//   function windowSize() {
//       if (window.innerWidth < '1023') {
//         $(".modal").fadeOut(300);
//       }
//     }
// $(window).resize(windowSize);
button.addEventListener('click', hidePopup);
close.addEventListener('click', hidePopup);
}

if (document.documentElement.clientWidth < 480) {
	window.addEventListener('scroll',
		function () {
			return setTimeout(main, 1000)
		}, {
			once: true,
			passive: true
		});
} else {
	main();
};
$('a').click(function () {
    event.preventDefault();
    $(this).attr('href', '#form');
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 70}, 1500);
});