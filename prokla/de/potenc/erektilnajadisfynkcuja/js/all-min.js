if (document.body.classList.contains('ev-date')) {
  // Якщо потрібен вивід дати та час + хвилин, тоді до спана з датою додаємо клас "time" <span class="date-1 time"></span>.
  // Працює як в порядку спадання, так і в порядку зростання.
  document.addEventListener('DOMContentLoaded', Datee);

  function Datee() {
    var msInDay = 86400000,
      counterLength = 90,
      months,
      countryName = 'it', // Встановлюємо мову для місяців.
      isAbbreviated = false, // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн" і т.д, тоді ставим TRUE.
      localDate = new Date();

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
        months = ['يناير', 'فبراير', 'مسيرة', 'أبريل', 'قد', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
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
          'Январь',
          'Февраль',
          'Март',
          'Апрель',
          'Май',
          'Июнь',
          'Июль',
          'Август',
          'Сентябрь',
          'Октябрь',
          'Ноябрь',
          'Декабрь',
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
        months = ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'];
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
        timeCounter = 0;
      var timeArray = time(nodeList /*, true*/); // Розкоментувати, якщо необхідне сортування в порядку спадання.

      timeArray = timeFormat(timeArray);

      for (var i = 0; i < nodeList.length; i++) {
        var data = nodeList[i].dataset;

        if (data.format) {
          nodeList[i].innerHTML = format(date, data.format);
          // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
          // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
        } else {
          nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
        }
        if (/\btime\b/.test(nodeList[i].className)) {
          nodeList[i].innerHTML += ' ' + timeArray[timeCounter]; // Рядок для формату виводу часу.
          timeCounter++;
        }
      }
    }

    // <span clas="date-NUMBER"></span> - мотає час назад на NUMBER днів. Наприклад, <span className="date-5"></span>
    // <span clas="dateNUMBER"></span> - мотає час вперед на NUMBER днів. Наприклад, <span className="date5"></span>

    for (var counter = 0; counter < counterLength; counter++) {
      var dateClass = 'date' + counter,
        nodeList = document.getElementsByClassName(dateClass),
        date = new Date(localDate.getTime() + counter * msInDay),
        timeCounter = 0;
      var timeArray = time(nodeList /*, true*/); // Розкоментувати, якщо необхідне сортування в порядку спадання.

      timeArray = timeFormat(timeArray);

      for (var i = 0; i < nodeList.length; i++) {
        var data = nodeList[i].dataset;

        if (data.format) {
          nodeList[i].innerHTML = format(date, data.format);
          // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
          // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
        } else {
          nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
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

    function timeRandom() {
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

    function format(date, formatstring) {
      var innerDate = '',
        day = date.getDate(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        fo = formatstring || true;

      switch (fo) {
        case 'yyyy':
          innerDate += '' + year;
          return innerDate;

        case 'yyyy-1':
          innerDate += '' + year - 1;
          return innerDate;

        case 'yyyy-2':
          innerDate += '' + year - 2;
          return innerDate;

        case 'mm.dd.yyyy':
          innerDate += month < 10 ? '0' + month : month;
          innerDate += '.';
          innerDate += day < 10 ? '0' + day : day;
          innerDate += '.' + year;
          return innerDate;

        case 'month':
          innerDate += months[month - 1].toLowerCase();
          return innerDate;
        case 'nextmonth':
          innerDate += months[month].toLowerCase();
          return innerDate;

        case 'dd':
          innerDate += day < 10 ? '0' + day : day;
          return innerDate;

        case 'dd month':
          innerDate += day < 10 ? '0' + day : day;
          innerDate += ' ';
          innerDate += months[month - 1].toLowerCase();
          return innerDate;

        case 'dd month yyyy':
          innerDate += day < 10 ? '0' + day : day;
          innerDate += ' ';
          innerDate += months[month - 1].toLowerCase();
          innerDate += ' ' + year;
          return innerDate;

        case 'day dd, month yyyy':
          var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
          innerDate += days[new Date(year, month - 1, day).getDay()];
          innerDate += ' ';
          innerDate += day < 10 ? '0' + day : day;
          innerDate += ' ';
          innerDate += months[month - 1];
          innerDate += ' ' + year;
          return innerDate;

        case 'dd/mm/yyyy':
          innerDate += day < 10 ? '0' + day : day;
          innerDate += '/';
          innerDate += month < 10 ? '0' + month : month;
          innerDate += '/' + year;
          return innerDate;

        case 'dd-mm-yyyy':
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

$(function () {
  $('a[href^="#"]').on('click', function (event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr('href'),
      dn = $(sc).offset().top;

    $('html, body').animate({ scrollTop: dn }, 1000);
  });
});

var steps = [false, false, false, false, false, false];
var curr_step = 1;
// возможность возвращаться к предыдущему вопросу
function set_history(index) {
  if (!(window.history && history.pushState)) {
    return false;
  }
  if (steps[index] == false) {
    history.pushState({ step_x: index }, null, window.location.href);
    steps[index] = true;
  }
}
// переходы по шагам
function to_step(index, need_push) {
  curr_step = index;
  for (var i = 1; i < steps.length; i++) {
    if (!$('#step' + i).is(':hidden')) {
      $('#step' + i).hide();
    }
  }
  $('#step' + index).show();
  $('#progress_in').css({ width: (100 * index) / steps.length + '%' });
  $('#curr_step').text('Шаг ' + index + ' из ' + (steps.length - 1));

  // Разделение на #step0, #other_steps и #last_step
  if (index + 1 == steps.length) {
    // если шаг равен общему количеству шагов
    if (!$('#other_steps').is(':hidden')) {
      $('#other_steps').hide();
      $('#last_step').show();
    }
  } else if (index > 0) {
    // если шаг больше ноля
    if ($('#other_steps').is(':hidden')) {
      $('#other_steps').show();
    }
    if (!$('#last_step').is(':hidden')) {
      $('#last_step').hide();
    }
  } else if (!$('#other_steps').is(':hidden')) {
    // если шаг равен нолю
    $('#other_steps').hide();
  }
}
// Проверка заполненности радиокнопки или чекбокса
function check_radio_selected(elem_id, error_message) {
  obj = $('input[name="' + elem_id + '"]:checked');
  if (!(obj.length && obj.val())) {
    alert(error_message);
    return false;
  }
  return true;
}
// Проверка E-mail
function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test($email);
}
// Проверки полей по шагам и уведомления при незаполненных полях
(function ($) {
  $(document).ready(function () {
    to_step(1, true);
  }); // задаем первоначальный индекс

  $('#to_step1').click(function (event) {
    event.preventDefault();
    to_step(1, true);
  });
  $('input[name=type-home]').on('change', function () {
    event.preventDefault();
    to_step(2, true);
  });

  $('input[name=type-home2]').on('change', function () {
    event.preventDefault();
    to_step(3, true);
  });
  $('input[name=type-repair]').on('change', function () {
    event.preventDefault();
    to_step(4, true);
  });
  $('input[name=design-project]').on('change', function () {
    event.preventDefault();
    to_step(5, true);
  });
  // Отправка формы (нажатием на финальную кнопку)
  $('#to_submit').click(function (event) {
    event.preventDefault();
    $('#quiz_form').submit();
  });

  // Проверка телефона и ПК при отправке формы
  $('#quiz_form').submit(function () {
    var name = $.trim($(this).find('input[name="name_input"]').val());
    var phone = $.trim($(this).find('input[name="phone"]').val());
    var email = $.trim($(this).find('input[name="email_input"]').val());

    if (name === '') {
      alert('Заполните поле с именем');
      return false;
    }
    if (phone === '') {
      alert('Заполните поле с номером телефона');
      return false;
    } else if (phone.length < 8) {
      alert('Слишком короткий номер');
      return false;
    } else if (!(phone.lastIndexOf('+7', 0) === 0 || phone.lastIndexOf('8', 0) === 0)) {
      alert('Введите корректный номер в формате +79998887766 или 89998887766');
      return false;
    }

    if (email === '' || !validateEmail(email)) {
      alert('Введите корректный E-mail');
      return false;
    }

    if (!$('input:checkbox[name="acceptance"]').is(':checked')) {
      alert('Вы должны ознакомиться с политикой конфиденциальности');
      return false;
    }
  });
  // для возврата к предыдущему вопросу
  window.addEventListener('popstate', function (e) {
    var step = 0;
    if (e.state) {
      step = e.state.step_x;
    }
    to_step(step);
  });
})(jQuery);
$(document).ready(function () {
  jQuery('body').on('change', '#quiz_form', function () {
    // Обводка для label input[type=radio]
    $('input[type=radio]').each(function () {
      if ($(this).is(':checked')) {
        $(this).parent('label').addClass('checked');
      } else {
        $(this).parent('label').removeClass('checked');
      }
    });

    // Обводка для label input[type=checkbox]
    $('input[type=checkbox]').each(function () {
      if ($(this).is(':checked')) {
        $(this).parent('label').addClass('checked');
      } else {
        $(this).parent('label').removeClass('checked');
      }
    });
  });

  // Поле ввода внутри label для input[type=radio]
  $('#up-layer').click(function () {
    $('#price_input').focus();
  });
});

const leftPack = $('.left-pack');
let countt = localStorage.getItem('leftPack') ? Number(localStorage.getItem('leftPack')) : 43;
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function init(countt) {
  if (countt > 5) {
    leftPack.html(localStorage.getItem('leftPack'));
    localStorage.setItem('leftPack', countt);
    leftPack.html(countt);
  } else if (countt === 5) {
    leftPack.html(5);
  }
}
init(countt);
setInterval(function () {
  countt -= randomInteger(1, 2);
  init(countt);
}, 60000);

var attempt = 1;
var box_o = document.querySelector('#box_o').getAttribute('src');
var box_d = document.querySelector('#box_d').getAttribute('src');
$(function () {
  $('.try').one('click', function () {
    if (attempt < 2) {
      $(this).attr('src', box_o);
      attempt++;

      setTimeout(function () {
        document.getElementById('success02').className += ' animate';
        document.getElementById('successtip02').className += ' animateSuccessTip';
        document.getElementById('modal02').className += ' visible';
        document.getElementById('cntVal');
        document.querySelector('.sweet-overlay').style.display = 'block';
      }, 320);
    } else if (attempt == 2) {
      attempt++;
      $(this).attr('src', box_d);
      $('.spin-result-wrapper').css('display', 'block');
      setTimeout(function () {
        $('#boxesContainer').slideUp();
        $('.order_block').slideDown();
        start_timer();
      }, 2500);
    }
  });
});

var isVibrateSupport = 'vibrate' in navigator;

function lastclick() {
  if (isVibrateSupport > 0) {
    navigator.vibrate(46);
  }
  document.getElementById('modal02').classList.remove('visible');
  document.querySelector('.sweet-overlay').style.display = 'none';
}

$(document).ready(function () {
  $('[data-toggle=scroll]').on('click', function () {
    var elementClick = $(this).attr('href');
    var destination = $('#order0').offset().top;
    jQuery('html:not(:animated),body:not(:animated)').animate(
      {
        scrollTop: destination,
      },
      2000
    );
    return false;
  });
});

function outputDat(m, fullM) {
  var d = new Date();
  var p = new Date(d.getTime() - m * 86400000);
  var monthA =
    fullM === false
      ? '01,02,03,04,05,06,07,08,09,10,11,12'.split(',')
      : 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
  var w = p.getDate();
  var ret =
    fullM === false
      ? p.getDate() + '.' + monthA[p.getMonth()] + '.' + p.getFullYear()
      : p.getDate() + ' ' + monthA[p.getMonth()] + ' ' + p.getFullYear();
  return ret;
}

var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');
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
      $('.order_block').slideDown();
      start_timer();
    }, 10000);
    wheel.classList.add('rotated');
  }
}
var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
  e.preventDefault();
  $('.spin-result-wrapper').fadeOut();
});

function initInputValidation() {
  const telFields = document.querySelectorAll('input[type="tel"]')

  for (let i = 0; i < telFields.length; i++) {
      telFields[i].addEventListener('input', validation)
  }

  function validation(event) {
      isNaN(event.data)
          ? this.value = this.value.replace(/[^0-9+]/, '')
          : false;
  }
}
initInputValidation();