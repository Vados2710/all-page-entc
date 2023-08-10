var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');
var p_1 = document.querySelector('#button_none');

function spin() {
    if (wheel.classList.contains('rotated')) {
        resultWrapper.style.display = 'block';
    } else {
        wheel.classList.add('super-rotation');
        setTimeout(function () {
            resultWrapper.style.display = 'block';
        }, 8000);
        setTimeout(function () {
            $('.spin-wrapper').slideUp();
            $('.order_block, .section_form').slideDown();
            start_timer();
        }, 8000);
        wheel.classList.add('rotated');
        p_1.style.display = 'none';
        $('a').attr({href: '#linkAfter'});
    }
}

var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();
    var top = $('.order0').offset().top;
    $('body,html').animate({scrollTop: top}, 800);
});

function outputDat(m, fullM) {
    var d = new Date();
    var p = new Date(d.getTime() - m * 86400000);
    var monthA = fullM === false ? '01,02,03,04,05,06,07,08,09,10,11,12'.split(',') : 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
    var w = p.getDate();
    var ret = fullM === false ? p.getDate() + '.' + monthA[p.getMonth()] + '.' + p.getFullYear() : p.getDate() + ' ' + monthA[p.getMonth()] + ' ' + p.getFullYear();
    return ret;
}

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
    secs = secs >= 10 ? secs : '0' + secs;
    $('#min').html('0' + mins);
    $('#sec').html(secs);
}

if (document.body.classList.contains('ev-date')) {
    document.addEventListener('DOMContentLoaded', Datee);

    function Datee() {
        var msInDay = 86400000, counterLength = 90, months, countryName = 'it', isAbbreviated = false,
            localDate = new Date();
        switch (countryName) {
            case'lv':
                months = ['Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris',];
                break;
            case'lt':
                months = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužės', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis',];
                break;
            case'it':
                months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre',];
                break;
            case'es':
                months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',];
                break;
            case'fr':
                months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre',];
                break;
            case'pt':
                months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',];
                break;
            case'de':
                months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',];
                break;
            case'bg':
                months = ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември',];
                break;
            case'pl':
                months = ['Stycznia', 'Lutego', 'Marca', 'Kwietnia', 'Maja', 'Czerwca', 'Lipca', 'Sierpnia', 'Września', 'Października', 'Listopada', 'Grudnia',];
                break;
            case'ro':
                months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie',];
                break;
            case'id':
                months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember',];
                break;
            case'hu':
                months = ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December',];
                break;
            case'gr':
            case'cy':
                months = ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος',];
                break;
            case'ar':
                months = ['يناير', 'فبراير', 'مسيرة', 'أبريل', 'قد', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر',];
                break;
            case'th':
                months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม',];
                break;
            case'ru':
                months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря',];
                break;
            case'ua':
                months = ['Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня',];
                break;
            case'en':
                months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];
                break;
            case'ge':
                months = ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი',];
                break;
            case'kz':
                months = ['Қаңтар', 'Ақпан', 'Марш', 'Сәуір', 'Мүмкін', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан',];
                break;
            case'sk':
                months = ['január', 'február', 'marec', 'apríl', 'máj', 'júna', 'júl', 'august', 'septembra', 'október', 'november', 'december',];
                break;
            case'cz':
                months = ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec',];
                break;
            case'hr':
                months = ['siječanj', 'veljača', 'ožujak', 'travanj', 'svibanj', 'lipanj', 'srpanj', 'kolovoz', 'rujan', 'listopad', 'studeni', 'prosinac',];
                break;
            case'sl':
                months = ['Januarja', 'Februarja', 'Marca', 'Aprila', 'Maja', 'Junija', 'Julija', 'Avgusta', 'Septembra', 'Oktobra', 'Novembra', 'Decembra',];
                break;
            case'nl':
                months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december',];
                break;
            case'vi':
                months = ['tháng một', 'tháng hai', 'diễu hành', 'tháng tư', 'có thể', 'tháng sáu', 'tháng bảy', 'tháng tám', 'tháng chín', 'tháng mười', 'tháng mười một', 'Tháng 12',];
                break;
            case'my':
                months = ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember',];
                break;
            case'mm':
                months = ['ဇန်နဝါရီ', 'ဖေဖော်ဝါရီလ', 'ချီတက်', '.ပြီလ', 'မေ', 'ဇွန်', 'ဇူလိုင်', 'သြဂုတ်', 'စက်တင်ဘာ', 'အောက်တိုဘာ', 'နိုဝင်ဘာ', 'ဒီဇင်ဘာ',];
                break;
            case'in':
                months = ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर',];
                break;
            case'tw':
                months = ['一月', '二月', '行軍', '四月', '可能', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
                break;
            case'bd':
                months = ['জানুয়ারী', 'ফেব্রুয়ারি', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'অগাস্ট', 'অগাস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর',];
                break;
        }
        if (isAbbreviated) {
            for (var i = 0; i < months.length; i++) {
                months[i] = months[i].slice(0, 3).toLowerCase();
            }
        }
        for (var counter = 0; counter < counterLength; counter++) {
            var dateClass = 'date-' + counter, nodeList = document.getElementsByClassName(dateClass),
                date = new Date(localDate.getTime() - counter * msInDay), timeCounter = 0;
            var timeArray = time(nodeList);
            timeArray = timeFormat(timeArray);
            for (var i = 0; i < nodeList.length; i++) {
                var data = nodeList[i].dataset;
                if (data.format) {
                    nodeList[i].innerHTML = format(date, data.format);
                } else {
                    nodeList[i].innerHTML = format(date);
                }
                if (/\btime\b/.test(nodeList[i].className)) {
                    nodeList[i].innerHTML += ' ' + timeArray[timeCounter];
                    timeCounter++;
                }
            }
        }
        for (var counter = 0; counter < counterLength; counter++) {
            var dateClass = 'date' + counter, nodeList = document.getElementsByClassName(dateClass),
                date = new Date(localDate.getTime() + counter * msInDay), timeCounter = 0;
            var timeArray = time(nodeList);
            timeArray = timeFormat(timeArray);
            for (var i = 0; i < nodeList.length; i++) {
                var data = nodeList[i].dataset;
                if (data.format) {
                    nodeList[i].innerHTML = format(date, data.format);
                } else {
                    nodeList[i].innerHTML = format(date);
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
            }); else
                timeArray.sort(function (a, b) {
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
                var htemp = Math.floor(timearray[i] / 60), mtemp = timearray[i] % 60,
                    hours = htemp < 10 ? '0' + htemp : htemp, minutes = mtemp < 10 ? '0' + mtemp : mtemp;
                array.push(hours + ':' + minutes);
            }
            return array;
        }

        function format(date, formatstring) {
            var innerDate = '', day = date.getDate(), year = date.getFullYear(), month = date.getMonth() + 1,
                fo = formatstring || true;
            switch (fo) {
                case'yyyy':
                    innerDate += '' + year;
                    return innerDate;
                case'yyyy-1':
                    innerDate += '' + year - 1;
                    return innerDate;
                case'yyyy-2':
                    innerDate += '' + year - 2;
                    return innerDate;
                case'mm.dd.yyyy':
                    innerDate += month < 10 ? '0' + month : month;
                    innerDate += '.';
                    innerDate += day < 10 ? '0' + day : day;
                    innerDate += '.' + year;
                    return innerDate;
                case'month':
                    innerDate += months[month - 1].toLowerCase();
                    return innerDate;
                case'dd':
                    innerDate += day < 10 ? '0' + day : day;
                    return innerDate;
                case'dd month':
                    innerDate += day < 10 ? '0' + day : day;
                    innerDate += ' ';
                    innerDate += months[month - 1].toLowerCase();
                    return innerDate;
                case'dd month yyyy':
                    innerDate += day < 10 ? '0' + day : day;
                    innerDate += ' ';
                    innerDate += months[month - 1].toLowerCase();
                    innerDate += ' ' + year;
                    return innerDate;
                case'day dd, month yyyy':
                    var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
                    innerDate += days[new Date(year, month - 1, day).getDay()];
                    innerDate += ' ';
                    innerDate += day < 10 ? '0' + day : day;
                    innerDate += ' ';
                    innerDate += months[month - 1];
                    innerDate += ' ' + year;
                    return innerDate;
                case'dd/mm/yyyy':
                    innerDate += day < 10 ? '0' + day : day;
                    innerDate += '/';
                    innerDate += month < 10 ? '0' + month : month;
                    innerDate += '/' + year;
                    return innerDate;
                case'dd-mm-yyyy':
                    innerDate += day < 10 ? '0' + day : day;
                    innerDate += '-';
                    innerDate += month < 10 ? '0' + month : month;
                    innerDate += '-' + year;
                    return innerDate;
                default:
                    innerDate += day < 10 ? '0' + day : day;
                    innerDate += '.';
                    innerDate += month < 10 ? '0' + month : month;
                    innerDate += '.' + year;
                    return innerDate;
            }
        }
    }
}
var d = new Date(),
    month = new Array("Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre");
$(document).ready(function () {
    $("a:not(.terms)").on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top}, 777);
        e.preventDefault();
        return false;
    });
    $('.date').text(d.getDate() + ' ' + month[d.getMonth()]);
    $('.text_month').text(month[d.getMonth()]);
    $('.next_month').text(month[(d.getMonth() + 1) % 12]);
    var timeIs = new Date();
    var sec = 59 - timeIs.getSeconds();
    var min = 59 - timeIs.getMinutes();
    var hour = 23 - timeIs.getHours();
    if (hour === 0 && min < 45) {
        min = 45;
    }

    function refresh() {
        sec--;
        if (sec == -01) {
            sec = 59;
            min = min - 1;
        } else {
            min = min;
        }
        if (sec <= 9) {
            sec = "0" + sec;
        }
        if (min == -01) {
            min = 59;
            hour = hour - 1;
        } else {
            hour = hour;
        }
        if (document.getElementById) {
            hour1.innerHTML = (hour <= 9 ? "0" + hour : hour);
            min1.innerHTML = (min <= 9 ? "0" + min : min);
            sec1.innerHTML = sec;
        }
        inter = setTimeout(refresh, 1000);
        if (hour == '00' && min == '00' && sec == '00') {
            sec = "00";
            clearInterval(inter);
        }
    }

    refresh();
})