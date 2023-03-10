document.addEventListener('DOMContentLoaded', function () {
  // Вивід дати (+ час).
  postDate();
});

function postDate() {
  // Додаємо клас "date-N", де N - кількість "відмотаних" днів.
  // Наприклад, span class="date-0"></span> - мотає 0 днів назад (сьогодні).
  // Наприклад, span class="date-5"></span> - мотає 5 днів назад.

  // Вивід дати (+ години + хвилини), додаємо клас "time". Наприклад, <span class="date-1 time"></span>.
  // Виводить у форматі на зразок "14.02.2018 14:22"
  // Працює як в порядку зростання, так і в порядку спадання (міняємо флажок нижче)
  var body = document.body,
    postLang = body.getAttribute('data-post-lang');

  var sa = body.getAttribute('data-post-format') || 'dd.mm.yyyy',
    msInDay = 86400000,
    counterLength = 90, // Максимальна кількість вімотаних днів. Змінюємо за необхідності.
    months,
    countryName = 'ro',
    // Мова для місяців.
    isAbbreviated = body.getAttribute('data-post-abbreviated') ? true : false, // Скорочений варіант місяців до трьох букв
    localDate = new Date();

  var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  switch (countryName) {
    case 'ro': // Romania
      days = ['Luni', 'Marţi', 'Miercuri', 'Joi', 'Vineri', 'Sîmbătă', 'Duminică'];
      break;
  }

  switch (countryName) {
    case 'lv': // Latvia латышский
      months = [
        'Janvāris',
        'Februāris',
        'Marts',
        'Aprīlis',
        'Maijs',
        'Jūnijs',
        'Jūlijs',
        'Augusts',
        'Septembris',
        'Oktobris',
        'Novembris',
        'Decembris',
      ];
      break;
    case 'lt': // Litva литовский
      months = [
        'Sausis',
        'Vasaris',
        'Kovas',
        'Balandis',
        'Gegužės',
        'Birželis',
        'Liepa',
        'Rugpjūtis',
        'Rugsėjis',
        'Spalis',
        'Lapkritis',
        'Gruodis',
      ];
      break;
    case 'it': // Italy
      months = [
        'Gennaio',
        'Febbraio',
        'Marzo',
        'Aprile',
        'Maggio',
        'Giugno',
        'Luglio',
        'Agosto',
        'Settembre',
        'Ottobre',
        'Novembre',
        'Dicembre',
      ];
      break;
    case 'es': // Spain
      months = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ];
      break;
    case 'fr': // France
      months = [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre',
      ];
      break;
    case 'pt': // Portugal
      months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
      ];
      break;
    case 'de': // Germany
      months = [
        'Januar',
        'Februar',
        'März',
        'April',
        'Mai',
        'Juni',
        'Juli',
        'August',
        'September',
        'Oktober',
        'November',
        'Dezember',
      ];
      break;
    case 'bg': // Bulgaria
      months = [
        'Януари',
        'Февруари',
        'Март',
        'Април',
        'Май',
        'Юни',
        'Юли',
        'Август',
        'Септември',
        'Октомври',
        'Ноември',
        'Декември',
      ];
      break;
    case 'pl': // Poland
      months = [
        'Stycznia',
        'Lutego',
        'Marca',
        'Kwietnia',
        'Maja',
        'Czerwca',
        'Lipca',
        'Sierpnia',
        'Września',
        'Października',
        'Listopada',
        'Grudnia',
      ];
      break;
    case 'ro': // Romania
      months = [
        'Ianuarie',
        'Februarie',
        'Martie',
        'Aprilie',
        'Mai',
        'Iunie',
        'Iulie',
        'August',
        'Septembrie',
        'Octombrie',
        'Noiembrie',
        'Decembrie',
      ];
      break;
    case 'id': // Indonesia
      months = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'Nopember',
        'Desember',
      ];
      break;
    case 'hu': // Hungary (Румунія)
      months = [
        'Január',
        'Február',
        'Március',
        'Április',
        'Május',
        'Június',
        'Július',
        'Augusztus',
        'Szeptember',
        'Október',
        'November',
        'December',
      ];
      break;
    case 'gr': // Greece
    case 'cy': // Cyprus (Кіпр)
      months = [
        'Ιανουάριος',
        'Φεβρουάριος',
        'Μάρτιος',
        'Απρίλιος',
        'Μάιος',
        'Ιούνιος',
        'Ιούλιος',
        'Αύγουστος',
        'Σεπτέμβριος',
        'Οκτώβριος',
        'Νοέμβριος',
        'Δεκέμβριος',
      ];
      break;
    case 'ar': // Арабский
      months = [
        'يناير',
        'فبراير',
        'مسيرة',
        'أبريل',
        'قد',
        'يونيو',
        'يوليو',
        'أغسطس',
        'سبتمبر',
        'أكتوبر',
        'نوفمبر',
        'ديسمبر',
      ];
      break;
    case 'th': // Тайский
      months = [
        'มกราคม',
        'กุมภาพันธ์',
        'มีนาคม',
        'เมษายน',
        'พฤษภาคม',
        'มิถุนายน',
        'กรกฎาคม',
        'สิงหาคม',
        'กันยายน',
        'ตุลาคม',
        'พฤศจิกายน',
        'ธันวาคม',
      ];
      break;
    case 'ru': // Русский
      months = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря',
      ];
      break;
    case 'ua': // Українська
      months = [
        'Січня',
        'Лютого',
        'Березня',
        'Квітня',
        'Травня',
        'Червня',
        'Липня',
        'Серпня',
        'Вересня',
        'Жовтня',
        'Листопада',
        'Грудня',
      ];
      break;
    case 'en': // Английский
      months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      break;
    case 'ge': // Грузинский
      months = [
        'იანვარი',
        'თებერვალი',
        'მარტი',
        'აპრილი',
        'მაისი',
        'ივნისი',
        'ივლისი',
        'აგვისტო',
        'სექტემბერი',
        'ოქტომბერი',
        'ნოემბერი',
        'დეკემბერი',
      ];
      break;
    case 'kz': // Казахский
      months = [
        'Қаңтар',
        'Ақпан',
        'Марш',
        'Сәуір',
        'Мүмкін',
        'Маусым',
        'Шілде',
        'Тамыз',
        'Қыркүйек',
        'Қазан',
        'Қараша',
        'Желтоқсан',
      ];
      break;
    case 'sk': // Словацкий
      months = [
        'január',
        'február',
        'marec',
        'apríl',
        'máj',
        'júna',
        'júl',
        'august',
        'septembra',
        'október',
        'november',
        'december',
      ];
      break;
    case 'cz': // Czech
      months = [
        'Leden',
        'Únor',
        'Březen',
        'Duben',
        'Květen',
        'Červen',
        'Červenec',
        'Srpen',
        'Září',
        'Říjen',
        'Listopad',
        'Prosinec',
      ];
      break;
    case 'hr': // Хорватский
      months = [
        'siječanj',
        'veljača',
        'ožujak',
        'travanj',
        'svibanj',
        'lipanj',
        'srpanj',
        'kolovoz',
        'rujan',
        'listopad',
        'studeni',
        'prosinac',
      ];
      break;
    case 'sl': // Словенский
      months = [
        'Januarja',
        'Februarja',
        'Marca',
        'Aprila',
        'Maja',
        'Junija',
        'Julija',
        'Avgusta',
        'Septembra',
        'Oktobra',
        'Novembra',
        'Decembra',
      ];
      break;
    case 'nl': // Нидерландский
      months = [
        'januari',
        'februari',
        'maart',
        'april',
        'mei',
        'juni',
        'juli',
        'augustus',
        'september',
        'oktober',
        'november',
        'december',
      ];
      break;
    case 'vi': // Вьетнамский
      months = [
        'tháng một',
        'tháng hai',
        'diễu hành',
        'tháng tư',
        'có thể',
        'tháng sáu',
        'tháng bảy',
        'tháng tám',
        'tháng chín',
        'tháng mười',
        'tháng mười một',
        'Tháng 12',
      ];
      break;
    case 'my': // Малайский
      months = [
        'Januari',
        'Februari',
        'Mac',
        'April',
        'Mei',
        'Jun',
        'Julai',
        'Ogos',
        'September',
        'Oktober',
        'November',
        'Disember',
      ];
      break;
    case 'mm': // Бирманский
      months = [
        'ဇန်နဝါရီ',
        'ဖေဖော်ဝါရီလ',
        'ချီတက်',
        '.ပြီလ',
        'မေ',
        'ဇွန်',
        'ဇူလိုင်',
        'သြဂုတ်',
        'စက်တင်ဘာ',
        'အောက်တိုဘာ',
        'နိုဝင်ဘာ',
        'ဒီဇင်ဘာ',
      ];
      break;
    case 'in': // Хинди (Индия)
      months = [
        'जनवरी',
        'फरवरी',
        'मार्च',
        'अप्रैल',
        'मई',
        'जून',
        'जुलाई',
        'अगस्त',
        'सितंबर',
        'अक्टूबर',
        'नवंबर',
        'दिसंबर',
      ];
      break;
    case 'tw': // Китайский (Тайвань)
      months = ['一月', '二月', '行軍', '四月', '可能', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
      break;
    case 'bd': // Бенгальский (Бангладеш)
      months = [
        'জানুয়ারী',
        'ফেব্রুয়ারি',
        'এপ্রিল',
        'মে',
        'জুন',
        'জুলাই',
        'অগাস্ট',
        'অগাস্ট',
        'সেপ্টেম্বর',
        'অক্টোবর',
        'নভেম্বর',
        'ডিসেম্বর',
      ];
      break;
  }
  if (isAbbreviated) {
    for (var i = 0; i < months.length; i++) {
      months[i] = months[i].slice(0, 3).toLowerCase(); // Прибираємо ".toLowerCase()", якщо перша буква повинна бути великою.
    }
  }

  for (var counter = 0; counter < counterLength; counter++) {
    var dateClass = 'date-' + counter,
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
        nodeList[i].innerHTML += ' ' + timeArray[timeCounter]; // Рядок для формату виводу часу.
        timeCounter++;
      }
    }
  }

  // <span clas="date-N"></span> - мотає час назад на N днів. Наприклад, <span className="date-5"></span>
  // <span clas="dateN"></span> - мотає час вперед на N днів. Наприклад, <span className="date5"></span>

  for (var counter = 0; counter < counterLength; counter++) {
    var dateClass = 'date' + counter,
      nodeList = document.getElementsByClassName(dateClass),
      date = new Date(localDate.getTime() + counter * msInDay),
      timeCounter = 0;

    for (var i = 0; i < nodeList.length; i++) {
      var data = nodeList[i].dataset;

      if (data.format) {
        nodeList[i].innerHTML = format(date, data.format);
      } else {
        nodeList[i].innerHTML = format(date, sa);
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
        hours = htemp < 10 ? '0' + htemp : htemp,
        minutes = mtemp < 10 ? '0' + mtemp : mtemp;
      array.push(hours + ':' + minutes);
    }

    return array;
  }

  function notLastIteration(index, array) {
    return index !== array.length - 1;
  }

  function format(date, format) {
    var testFormat = ['dd', 'day', 'mm', 'month', 'yyyy', 'year'];
    var innerDate = format;

    var dd = date.getDate(),
      mm = date.getMonth() + 1,
      year = date.getFullYear(),
      month = months[mm - 1],
      day = days[new Date(year, mm - 1, dd).getDay()];

    dd = dd < 10 ? '0' + dd : dd;
    mm = mm < 10 ? '0' + mm : mm;

    var dateFormat = {
      day: day,
      dd: dd,
      year: year,
      yyyy: year,
      mm: mm,
      month: month,
    };

    for (var i = 0; i < testFormat.length; i++) {
      var string = testFormat[i];
      var regExp = new RegExp(string);
      innerDate = innerDate.replace(regExp, dateFormat[string]);
    }

    return innerDate;
  }
}

$("a[href='#offer']").click(function() {
  $('html, body').animate({
      scrollTop: parseInt($("#offer").offset().top)
  }, 2000);
});

$("a[href='#comments']").click(function() {
  $('html, body').animate({
      scrollTop: parseInt($("#comments").offset().top)
  }, 2000);
});

$("a[href='#q1']").click(function() {
  $('html, body').animate({
      scrollTop: parseInt($("#q1").offset().top)
  }, 2000);
});

$("a[href='#q2']").click(function() {
  $('html, body').animate({
      scrollTop: parseInt($("#q2").offset().top)
  }, 2000);
});

$("a[href='#q3']").click(function() {
  $('html, body').animate({
      scrollTop: parseInt($("#q3").offset().top)
  }, 2000);
});

$("a[href='#q4']").click(function() {
  $('html, body').animate({
      scrollTop: parseInt($("#q4").offset().top)
  }, 2000);
});

$('.ac_footers a').unbind('click');

$('.cenz-image').on('click', function () {
  $(this).addClass('cenz-show');
});
$('#disclaimer-btn').on('click', function (e) {
  e.preventDefault();
  $('#disclaimer').addClass('model-open');
});
$('#terms-btn').on('click', function (e) {
  e.preventDefault();
  $('#terms').addClass('model-open');
});
$('#privacy-btn').on('click', function (e) {
  e.preventDefault();
  $('#privacy').addClass('model-open');
});
$('.close-btn, .bg-overlay').click(function () {
  $('#disclaimer').removeClass('model-open');
  $('#terms').removeClass('model-open');
  $('#privacy').removeClass('model-open');
});
