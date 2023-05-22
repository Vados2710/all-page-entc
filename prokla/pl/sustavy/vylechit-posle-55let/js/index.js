document.addEventListener("DOMContentLoaded", function () {
    // Вивід дати (+ час).
    // Arguments: dateFormat (string), language (string), abbreviated (bool). Default: 'dd.mm.yyyy', 'ru', false
    postDate( /*'dateFormat', 'ru', false*/);
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
        counterLength = 190, // Максимальна кількість вімотаних днів. Змінюємо за необхідності.
        months,
        countryName = countryName || 'pl', // Мова для місяців. 
        isAbbreviated = isAbbreviated || false, // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн", тоді ставим TRUE.
        localDate = new Date();

    switch (countryName) {
        case 'lv': // Latvia латышский
            months = ['Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris'];
            break;
        case 'lt': // Litva литовский
            months = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužės', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'];
            break;
        case 'it': // Italy
            months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
            break;
        case 'es': // Spain
            months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            break;
        case 'fr': // France
            months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
            break;
        case 'pt': // Portugal
            months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
            break;
        case 'de': // Germany
            months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
            break;
        case 'bg': // Bulgaria
            months = ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'];
            break;
        case 'pl': // Poland
            months = ['Stycznia', 'Lutego', 'Marca', 'Kwietnia', 'Maja', 'Czerwca', 'Lipca', 'Sierpnia', 'Września', 'Października', 'Listopada', 'Grudnia'];
            break;
        case 'ro': // Romania
            months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
            break;
        case 'id': // Indonesia
            months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember'];
            break;
        case 'hu': // Hungary (Румунія)
            months = ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'];
            break;
        case 'gr': // Greece
        case 'cy': // Cyprus (Кіпр)
            months = ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'];
            break;
        case 'ar': // Арабский
            months = ['يناير', 'فبراير', 'مسيرة', 'أبريل', 'قد', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
            break;
        case 'th': // Тайский
            months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
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
            months = ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'];
            break;
        case 'kz': // Казахский
            months = ['Қаңтар', 'Ақпан', 'Марш', 'Сәуір', 'Мүмкін', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'];
            break;
        case 'sk': // Словацкий
            months = ['január', 'február', 'marec', 'apríl', 'máj', 'júna', 'júl', 'august', 'septembra', 'október', 'november', 'december'];
            break;
        case 'cz': // Czech
            months = ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'];
            break;
        case 'hr': // Хорватский
            months = ['siječanj', 'veljača', 'ožujak', 'travanj', 'svibanj', 'lipanj', 'srpanj', 'kolovoz', 'rujan', 'listopad', 'studeni', 'prosinac'];
            break;
        case 'sl': // Словенский
            months = ['Januarja', 'Februarja', 'Marca', 'Aprila', 'Maja', 'Junija', 'Julija', 'Avgusta', 'Septembra', 'Oktobra', 'Novembra', 'Decembra'];
            break;
        case 'nl': // Нидерландский
            months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
            break;
        case 'vi': // Вьетнамский
            months = ['tháng một', 'tháng hai', 'diễu hành', 'tháng tư', 'có thể', 'tháng sáu', 'tháng bảy', 'tháng tám', 'tháng chín', 'tháng mười', 'tháng mười một', 'Tháng 12'];
            break;
        case 'my': // Малайский
            months = ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'];
            break;
        case 'mm': // Бирманский
            months = ['ဇန်နဝါရီ', 'ဖေဖော်ဝါရီလ', 'ချီတက်', '.ပြီလ', 'မေ', 'ဇွန်', 'ဇူလိုင်', 'သြဂုတ်', 'စက်တင်ဘာ', 'အောက်တိုဘာ', 'နိုဝင်ဘာ', 'ဒီဇင်ဘာ'];
            break;
        case 'in': // Хинди (Индия)
            months = ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'];
            break;
        case 'tw': // Китайский (Тайвань)
            months = ['一月', '二月', '行軍', '四月', '可能', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
            break;
        case 'bd': // Бенгальский (Бангладеш)
            months = ['জানুয়ারী', 'ফেব্রুয়ারি', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'অগাস্ট', 'অগাস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
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
    var regex = /[A-Za-zА-Яа-я]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

const box_d = document.querySelector('#box_d').getAttribute('src')
const congrat = document.querySelector('#congrat').getAttribute('src')

var triesCount = 2;
var tries = 0;
$('#tries_count').text(triesCount);
$('.try').on('click', function () {
    if ((!$(this).parent('.boxes_item').hasClass('afterlose-boxes_item')) && (!$('#boxesContainer').hasClass('stop_trying'))) {
        if (tries == 0) {
            $('#boxesContainer').addClass('stop_trying');
            $(this).attr('src', box_d);
            $(this).addClass('shake');
            $(this).parent('.boxes_item').addClass('afterlose-boxes_item');
            $('.box-tooltip-title').html('<b>Nic nie wygrałeś</b><br> Pozostała Ci  <span style="color: red;">1 próba</span>! <br> Spróbuj ponownie!');
            $('.box-tooltip-btn').html('Próbować');
            setTimeout(function () {
                $('.box-popup-wrapper.tooltip').fadeIn(100);
            }, 850);
        }
        if (tries == 1) {
            $('#boxesContainer').addClass('stop_trying');
            $(this).parent('.boxes_item').html('<div class="prize_box"><img src=' + box_d + ' class="try" alt=""><p class="win_prize">50%</p></div>');
            let price = document.querySelector('.x_price_current').innerHTML
            let cur = document.querySelector('.x_currency').innerHTML
            $('.box-tooltip-title').html('<b>Gratulacje!</b><br>Wygrałeś   <br>przeceniony<b style="color: red;"> <span class="productName"></span>!</b>');
            $('.box-tooltip-btn').html('Kup <span class="productName"></span> ze zniżką');
            $('.box-tooltip-ico>img').attr('src', congrat);
            setTimeout(function () {
                $('.box-popup-wrapper.tooltip').fadeIn(100);

            }, 1000);
        }
    }
});

$('.box-tooltip-btn').bind('click', function (e) {
    $('#boxesContainer').removeClass('stop_trying');
    $('.box-popup-wrapper').fadeOut(90);
    tries++;
    triesCount--;
    $('#tries_count').html('<span style="color: red;">' + triesCount + '</span>');
    if (tries == 2) {
        $('#boxesContainer').slideUp('fast');
        $('.lead-form-box').slideDown('fast');
        initializeTimer();
        $("body,html").animate({ scrollTop: $("#scroll_to").offset().top - 20 }, 400);
    }
});

$('a').click(function () {
    event.preventDefault();
    $(this).attr('href', '#forma');
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top - 70 }, 1500);
});

function initializeTimer() {

    var time = {
        hours: 0,
        minutes: 27,
        seconds: 0
    };

    time = time.hours * 3600 + time.minutes * 60 + time.seconds;

    timerSettings();
}
var flag = true;
function timerSettings(time1) {

    if (flag) {
        var time = {
            hours: 0,
            minutes: 25,
            seconds: 0
        };
        time = time.hours * 3600 + time.minutes * 60 + time.seconds;
        flag = false
    } else {
        var time = time1;
    }

    var different = document.querySelector(".timer-different"),
        hours = parseInt(time / 3600, 10),
        minutes = parseInt((time - hours * 3600) / 60, 10),
        seconds = parseInt(time % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : "" + minutes;
    seconds = seconds < 10 ? "0" + seconds : "" + seconds;
    hours = hours < 10 ? "0" + hours : "" + hours;

    var hoursHTML = document.getElementsByClassName("hour");
    var minutesHTML = document.getElementsByClassName("minute");
    var secondsHTML = document.getElementsByClassName("second");

    if (--time < 0) {

        return;
    }
    if (different) {
        seconds = seconds.split("");
        minutes = minutes.split("");
        hours = hours.split("");

        diFilling(hoursHTML, hours);
        diFilling(minutesHTML, minutes);
        diFilling(secondsHTML, seconds);
    } else {
        filling(hoursHTML, hours);
        filling(minutesHTML, minutes);
        filling(secondsHTML, seconds);
    }


    setTimeout(timerSettings, 1000, time);
}

function filling(obj, value) {
    for (var i = 0; i < obj.length; i++) {
        obj[i].innerHTML = value;
    }
}

function diFilling(obj, value) {
    for (var i = 0; i < obj.length; i++) {
        obj[i].innerHTML = value[i % 2];
    }
}

$('.spoiler').on('click', function (e) {
    e.target.classList.toggle('show');
    console.log(e.traget)
})