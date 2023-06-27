(function () {
    'use strict';

    if (document.body.classList.contains('ev-date')) {
      var postDate = function postDate() {
        var msInDay = 86400000,
            counterLength = 366,
            countryName = 'lt',
            // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн" і т.д, тоді ставим TRUE.
        localDate = new Date();
        var months;

        switch (countryName) {
          case 'lv':
            // Latvia латышский
            months = ['Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris'];
            break;

          case 'lt':
            // Litva литовский
            months = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužės', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'];
            break;

          case 'it':
            // Italy
            months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
            break;

          case 'es':
            // Spain
            months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            break;

          case 'fr':
            // France
            months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
            break;

          case 'pt':
            // Portugal
            months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
            break;

          case 'de':
            // Germany
            months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
            break;

          case 'bg':
            // Bulgaria
            months = ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'];
            break;

          case 'pl':
            // Poland
            months = ['Stycznia', 'Lutego', 'Marca', 'Kwietnia', 'Maja', 'Czerwca', 'Lipca', 'Sierpnia', 'Września', 'Października', 'Listopada', 'Grudnia'];
            break;

          case 'ro':
            // Romania
            months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
            break;

          case 'id':
            // Indonesia
            months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember'];
            break;

          case 'hu':
            // Hungary (Румунія)
            months = ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'];
            break;

          case 'gr': // Greece

          case 'cy':
            // Cyprus (Кіпр)
            months = ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'];
            break;

          case 'ar':
            // Арабский
            months = ['يناير', 'فبراير', 'مسيرة', 'أبريل', 'قد', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
            break;

          case 'th':
            // Тайский
            months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
            break;

          case 'ru':
            // Русский
            months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
            break;

          case 'ua':
            // Українська
            months = ['Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня'];
            break;

          case 'en':
            // Английский
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            break;

          case 'ge':
            // Грузинский
            months = ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'];
            break;

          case 'kz':
            // Казахский
            months = ['Қаңтар', 'Ақпан', 'Марш', 'Сәуір', 'Мүмкін', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'];
            break;

          case 'sk':
            // Словацкий
            months = ['január', 'február', 'marec', 'apríl', 'máj', 'júna', 'júl', 'august', 'septembra', 'október', 'november', 'december'];
            break;

          case 'cz':
            // Czech
            months = ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'];
            break;

          case 'hr':
            // Хорватский
            months = ['siječanj', 'veljača', 'ožujak', 'travanj', 'svibanj', 'lipanj', 'srpanj', 'kolovoz', 'rujan', 'listopad', 'studeni', 'prosinac'];
            break;

          case 'sl':
            // Словенский
            months = ['Januarja', 'Februarja', 'Marca', 'Aprila', 'Maja', 'Junija', 'Julija', 'Avgusta', 'Septembra', 'Oktobra', 'Novembra', 'Decembra'];
            break;

          case 'nl':
            // Нидерландский
            months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
            break;

          case 'vi':
            // Вьетнамский
            months = ['tháng một', 'tháng hai', 'diễu hành', 'tháng tư', 'có thể', 'tháng sáu', 'tháng bảy', 'tháng tám', 'tháng chín', 'tháng mười', 'tháng mười một', 'Tháng 12'];
            break;

          case 'my':
            // Малайский
            months = ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'];
            break;

          case 'mm':
            // Бирманский
            months = ['ဇန်နဝါရီ', 'ဖေဖော်ဝါရီလ', 'ချီတက်', '.ပြီလ', 'မေ', 'ဇွန်', 'ဇူလိုင်', 'သြဂုတ်', 'စက်တင်ဘာ', 'အောက်တိုဘာ', 'နိုဝင်ဘာ', 'ဒီဇင်ဘာ'];
            break;

          case 'in':
            // Хинди (Индия)
            months = ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'];
            break;

          case 'tw':
            // Китайский (Тайвань)
            months = ['一月', '二月', '行軍', '四月', '可能', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
            break;

          case 'bd':
            // Бенгальский (Бангладеш)
            months = ['জানুয়ারী', 'ফেব্রুয়ারি', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'অগাস্ট', 'অগাস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
            break;
        }

        for (var counter = 0; counter < counterLength; counter++) {
          var dateClass = "date-" + counter,
              nodeList = document.getElementsByClassName(dateClass),
              date = new Date(localDate.getTime() - counter * msInDay);
          var timeCounter = 0,
              timeArray = time(nodeList
          /*, true*/
          ); // Розкоментувати, якщо необхідне сортування в порядку спадання.

          timeArray = timeFormat(timeArray);

          for (var _i = 0; _i < nodeList.length; _i++) {
            var data = nodeList[_i].dataset;
            data.format ? nodeList[_i].innerHTML = format(date, data.format) // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
            // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
            : nodeList[_i].innerHTML = format(date
            /*, "dd month yyyy"*/
            ); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

            if (/\btime\b/.test(nodeList[_i].className)) {
              nodeList[_i].innerHTML += " " + timeArray[timeCounter]; // Рядок для формату виводу часу.

              timeCounter++;
            }
          }
        } // <span clas="date-NUMBER"></span> - мотає час назад на NUMBER днів. Наприклад, <span className="date-5"></span>
        // <span clas="dateNUMBER"></span> - мотає час вперед на NUMBER днів. Наприклад, <span className="date5"></span>


        for (var _counter = 0; _counter < counterLength; _counter++) {
          var _dateClass = "date-" + _counter,
              _nodeList = document.getElementsByClassName(_dateClass),
              _date = new Date(localDate.getTime() - _counter * msInDay);

          var _timeArray = time(_nodeList
          /*, true*/
          ); // Розкоментувати, якщо необхідне сортування в порядку спадання.


          _timeArray = timeFormat(_timeArray);

          for (var _i2 = 0; _i2 < _nodeList.length; _i2++) {
            var _data = _nodeList[_i2].dataset;
            _data.format ? _nodeList[_i2].innerHTML = format(_date, _data.format) // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
            // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
            : _nodeList[_i2].innerHTML = format(_date
            /*, "dd month yyyy"*/
            ); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
          }
        }

        function time(nodeList, reverse) {
          var timeArray = [];

          for (var _i3 = 0; _i3 < nodeList.length; _i3++) {
            nodeList[_i3].className.match(/\btime\b/) ? timeArray.push(timeRandom()) : false;
          }

          if (reverse) timeArray.sort(function (a, b) {
            return b - a;
          });else timeArray.sort(function (a, b) {
            return a - b;
          });
          return timeArray;
        }

        function timeRandom() {
          return Math.round(Math.random() * 1440);
        }

        function timeFormat(timeArray) {
          var array = [];

          for (var _i4 = 0; _i4 < timeArray.length; _i4++) {
            var hTemp = Math.floor(timeArray[_i4] / 60),
                mTemp = timeArray[_i4] % 60,
                hours = hTemp < 10 ? "0" + hTemp : hTemp,
                minutes = mTemp < 10 ? "0" + mTemp : mTemp;
            array.push(hours + ":" + minutes);
          }

          return array;
        }

        function format(date, formatString) {
          var innerDate = "";
          var day = date.getDate(),
              year = date.getFullYear(),
              month = date.getMonth() + 1,
              fo = formatString || true;

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
              innerDate += month < 10 ? "0" + month : month;
              innerDate += ".";
              innerDate += day < 10 ? "0" + day : day;
              innerDate += "." + year;
              return innerDate;

            case "month":
              innerDate += months[month - 1].toLowerCase();
              return innerDate;

            case "dd":
              innerDate += day < 10 ? "0" + day : day;
              return innerDate;

            case "dd month":
              innerDate += day < 10 ? "0" + day : day;
              innerDate += " ";
              innerDate += months[month - 1].toLowerCase();
              return innerDate;

            case "dd month yyyy":
              innerDate += day < 10 ? "0" + day : day;
              innerDate += " ";
              innerDate += months[month - 1].toLowerCase();
              innerDate += " " + year;
              return innerDate;

            case "day dd, month yyyy":
              var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
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

            default:
              innerDate += day < 10 ? "0" + day : day;
              innerDate += ".";
              innerDate += month < 10 ? "0" + month : month;
              innerDate += "." + year;
              return innerDate;
          }
        }
      };

      // Якщо потрібен вивід дати та час + хвилин, тоді до спана з датою додаємо клас "time" <span class="date-1 time"></span>.
      // Працює як в порядку спадання, так і в порядку зростання.
      document.addEventListener("DOMContentLoaded", postDate);
    }

    var scrollSmooth = (function () {
      $(document).on("click", "a[href^=\"#\"]", function (event) {
        event.preventDefault();
        $("html, body").animate({
          scrollTop: $($.attr(this, "href")).offset().top
        }, 500);
      });
    });

    var header = (function () {
      $(".header__burger").click(function () {
        $(".header__content").toggleClass('active');
        $(this).toggleClass('active');
      });
      $(".header__link").click(function () {
        $(".header__content").removeClass('active');
        $(".header__burger").removeClass('active');
      });
      $(".header__btn").click(function () {
        $(".header__content").removeClass('active');
        $(".header__burger").removeClass('active');
      });
    });

    var symptoms = (function () {
      $(".symptoms__slider").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        dotsClass: 'symptoms__slider-navigation',
        prevArrow: '<div class="symptoms__arrow-wrap symptoms__arrow-wrap--left"><svg class="symptoms__arrow-left" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18"><g><g><path d="M0 7.982h.482L6.435 0l1.414 1.44-4.88 6.542H20v2.036H2.968l4.881 6.543-1.414 1.44-5.952-7.983H0z"/></g></g></svg></div>',
        nextArrow: '<div class="symptoms__arrow-wrap symptoms__arrow-wrap--right"><svg class="symptoms__arrow-right" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18"><g><g><path d="M0 8h17.031l-4.88-6.433L13.565.152l5.953 7.847H20V10h-.482l-5.953 7.85-1.414-1.414L17.03 10H.002z"/></g></g></svg></div>',
        responsive: [{
          breakpoint: 480,
          settings: {
            dots: false,
            infinite: true
          }
        }]
      });
    });

    var clients = (function () {
      $(".clients-list").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 6000,
        dots: true,
        prevArrow: '<svg class="arrow-left"  xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24"><g><g><path d="M0 11H.51L9.435.151l1.414 1.413L3.086 11H40v2H3.087l7.762 9.435-1.414 1.414L.51 13H0z"/></g></g></svg>',
        nextArrow: '<svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24"><g><g><path d="M0 11h36.914l-7.763-9.436L30.565.151l8.926 10.85H40v2h-.51l-8.925 10.848-1.414-1.414L36.913 13H0z"/></g></g></svg>',
        responsive: [{
          breakpoint: 1293,
          settings: {
            prevArrow: '<div class="arrow-left"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="23" viewBox="0 0 15 23"><g><g><path d="M14.267 21.271l-1.414 1.415L2.19 12.9l-.064.058-1.414-1.414 1.414-1.415.064.059L12.853.4l1.414 1.415-10.6 9.728z"/></g></g></svg><div/>',
            nextArrow: '<div class="arrow-right"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="23" viewBox="0 0 15 23"><g><g><path d="M.733 1.729L2.147.314 12.81 10.1l.064-.058 1.414 1.414-1.414 1.415-.064-.059L2.147 22.6.733 21.184l10.6-9.728z"/></g></g></svg><div/>'
          }
        }, {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            prevArrow: '<div class="arrow-left"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="23" viewBox="0 0 15 23"><g><g><path d="M14.267 21.271l-1.414 1.415L2.19 12.9l-.064.058-1.414-1.414 1.414-1.415.064.059L12.853.4l1.414 1.415-10.6 9.728z"/></g></g></svg><div/>',
            nextArrow: '<div class="arrow-right"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="23" viewBox="0 0 15 23"><g><g><path d="M.733 1.729L2.147.314 12.81 10.1l.064-.058 1.414 1.414-1.414 1.415-.064-.059L2.147 22.6.733 21.184l10.6-9.728z"/></g></g></svg><div/>'
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            prevArrow: '<div class="arrow-left"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="23" viewBox="0 0 15 23"><g><g><path d="M14.267 21.271l-1.414 1.415L2.19 12.9l-.064.058-1.414-1.414 1.414-1.415.064.059L12.853.4l1.414 1.415-10.6 9.728z"/></g></g></svg><div/>',
            nextArrow: '<div class="arrow-right"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="23" viewBox="0 0 15 23"><g><g><path d="M.733 1.729L2.147.314 12.81 10.1l.064-.058 1.414 1.414-1.414 1.415-.064-.059L2.147 22.6.733 21.184l10.6-9.728z"/></g></g></svg><div/>'
          }
        }, {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrow: false,
            prevArrow: '<div class="arrow-left"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="23" viewBox="0 0 15 23"><g><g><path d="M14.267 21.271l-1.414 1.415L2.19 12.9l-.064.058-1.414-1.414 1.414-1.415.064.059L12.853.4l1.414 1.415-10.6 9.728z"/></g></g></svg><div/>',
            nextArrow: '<div class="arrow-right"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="23" viewBox="0 0 15 23"><g><g><path d="M.733 1.729L2.147.314 12.81 10.1l.064-.058 1.414 1.414-1.414 1.415-.064-.059L2.147 22.6.733 21.184l10.6-9.728z"/></g></g></svg><div/>'
          }
        }]
      });
    });

    var reviews = (function () {
      $(".reviews-item__btn").on("click", function () {
        $(this).parent().toggleClass("active");
      });
      $(".star1").on("click", function () {
        $(this).parent().removeClass("active1 active2 active3 active4 active5").addClass("active1");
      });
      $(".star2").on("click", function () {
        $(this).parent().removeClass("active1 active2 active3 active4 active5").addClass("active2");
      });
      $(".star3").on("click", function () {
        $(this).parent().removeClass("active1 active2 active3 active4 active5").addClass("active3");
      });
      $(".star4").on("click", function () {
        $(this).parent().removeClass("active1 active2 active3 active4 active5").addClass("active4");
      });
      $(".star5").on("click", function () {
        $(this).parent().removeClass("active1 active2 active3 active4 active5").addClass("active5");
      });
      $(".feedback-btn").click(function () {
        var reviewInput1 = $(".input__val-1").val().length,
            reviewInput2 = $(".input__val-2").val().length,
            reviewInput3 = $(".input__val-3").val().length;

        if (reviewInput1 !== 0 && reviewInput2 !== 0 && reviewInput3 !== 0) {
          $(".input__val-1").val("");
          $(".input__val-2").val("");
          $(".input__val-3").val("");
          $(".feedback-rating").removeClass("active1 active2 active3 active4 active5");
          $(".feedback-modal").fadeIn();
          setTimeout('$(".feedback").fadeOut(); $(".feedback-modal").fadeOut();', 3000);
        } else {
          alert("Užpildykite visus laukus!");
        }
      });
      $(".feedback").fadeOut();
      $(".feedback-modal").fadeOut();
      $(".reviews-btn").click(function () {
        $(".feedback").fadeIn();
      });
      $('.social__img').on('click', function (e) {
        var target = $(e.target),
            dislikeImg = target.parent().next().children().first(),
            likeImg = target.parent().prev().children().first(),
            dislikeCount = target.parent().next().children().last(),
            likeCount = target.parent().prev().children().last();

        if (target.hasClass('like')) {
          target.toggleClass('used');
          target.toggleClass('like-active');
          dislikeImg.removeClass('dislike-active');

          if (target.hasClass('like-active')) {
            target.next().text(Number(target.next().text()) + 1);
          } else {
            target.next().text(Number(target.next().text()) - 1);
          }

          if (dislikeImg.hasClass('used')) {
            dislikeCount.text(Number(dislikeCount.text()) - 1);
            dislikeImg.removeClass('used');
          }
        } else {
          target.toggleClass('used');
          target.toggleClass('dislike-active');
          likeImg.removeClass('like-active');

          if (target.hasClass('dislike-active')) {
            target.next().text(Number(target.next().text()) + 1);
          } else {
            target.next().text(Number(target.next().text()) - 1);
          }

          if (likeImg.hasClass('used')) {
            likeCount.text(Number(likeCount.text()) - 1);
            likeImg.removeClass('used');
          }
        }
      });
      var moreRev = $('.reviews-item__btn');
      moreRev.on('click', function () {
        var parent = $(this).parent();
        var btn = parent.children('.reviews-item__btn');

        if (!btn.hasClass('active')) {
          btn.addClass('active');
          $(this).html('Slėpti apžvalgą');
        } else {
          btn.removeClass('active');
          $(this).html('Skaityti visą apžvalgą');
        }
      });
    });

    var stat = (function () {
      !function (t) {
        t.extend(t.easing, {
          spincrementEasing: function spincrementEasing(t, a, e, n, r) {
            return a === r ? e + n : n * (-Math.pow(2, -10 * a / r) + 1) + e;
          }
        }), t.fn.spincrement = function (a) {
          function e(t, a) {
            if (t = t.toFixed(a), a > 0 && "." !== r.decimalPoint && (t = t.replace(".", r.decimalPoint)), r.thousandSeparator) for (; o.test(t);) {
              t = t.replace(o, "$1" + r.thousandSeparator + "$2");
            }
            return t;
          }

          var n = {
            from: 0,
            to: null,
            decimalPlaces: null,
            decimalPoint: ".",
            thousandSeparator: ",",
            duration: 1e3,
            leeway: 50,
            easing: "spincrementEasing",
            fade: !0,
            complete: null
          },
              r = t.extend(n, a),
              o = new RegExp(/^(-?[0-9]+)([0-9]{3})/);
          return this.each(function () {
            var a = t(this),
                n = r.from;
            a.attr("data-from") && (n = parseFloat(a.attr("data-from")));
            var o;
            if (a.attr("data-to")) o = parseFloat(a.attr("data-to"));else if (null !== r.to) o = r.to;else {
              var i = t.inArray(r.thousandSeparator, ["\\", "^", "$", "*", "+", "?", "."]) > -1 ? "\\" + r.thousandSeparator : r.thousandSeparator,
                  l = new RegExp(i, "g");
              o = parseFloat(a.text().replace(l, ""));
            }
            var c = r.duration;
            r.leeway && (c += Math.round(r.duration * (2 * Math.random() - 1) * r.leeway / 100));
            var s;
            if (a.attr("data-dp")) s = parseInt(a.attr("data-dp"), 10);else if (null !== r.decimalPlaces) s = r.decimalPlaces;else {
              var d = a.text().indexOf(r.decimalPoint);
              s = d > -1 ? a.text().length - (d + 1) : 0;
            }
            a.css("counter", n), r.fade && a.css("opacity", 0), a.animate({
              counter: o,
              opacity: 1
            }, {
              easing: r.easing,
              duration: c,
              step: function step(t) {
                a.html(e(t * o, s));
              },
              complete: function complete() {
                a.css("counter", null), a.html(e(o, s)), r.complete && r.complete(a);
              }
            });
          });
        };
      }(jQuery);
      var show = true;
      var countbox = ".stat-info";
      $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена

        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница

        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа

        var w_height = $(window).height(); // Высота окна браузера

        var d_height = $(document).height(); // Высота всего документа

        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками

        if (w_top + 1000 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
          $('.percent').spincrement({
            thousandSeparator: "",
            duration: 3200
          });
          show = false;
        }
      });
    });

    var banner = (function () {
      var timeout = false;
      $(window).on("scroll resize", function () {
        if (timeout !== false) {
          clearTimeout(timeout);
        }

        timeout = setTimeout(function () {
          hideBannerScroll('.x_order_form', '.interruption');
        }, 100);
      });

      function hideBannerScroll() {
        var bannerScroll = $('.banner'),
            bannerDelivery = $('.main-banner'),
            dT = $(window).scrollTop(),
            dB = dT + $(window).height(),
            dW = $(window).width();
        var cnt = 0;

        for (var iArr = 0; iArr < arguments.length; iArr++) {
          $(arguments[iArr]).each(function (i, hi) {
            var eT = $(hi).offset().top,
                eB = eT + $(hi).outerHeight(),
                eL = $(hi).offset().left,
                eR = eL + $(hi).width();

            if (eT <= dB && eB >= dT && eL <= dW && eR >= 0) {
              cnt += +1;
            }
          });
        }

        if (dT <= 100 || cnt) {
          bannerScroll.fadeOut();
        } else {
          if (dW > 1023) {
            bannerScroll.fadeIn().css({
              'bottom': bannerDelivery.outerHeight()
            });
          }
        }
      }

      function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function onlineUser() {
        $('.form-online__count').text(getRandom(95, 130));
      }

      setInterval(onlineUser, 10000);
    });

    function main() {
      scrollSmooth();
      header();
      banner();
      symptoms();
      clients();
      reviews();
      stat();
      banner();
    }

    if (document.documentElement.clientWidth < 480) {
      window.addEventListener('scroll', function () {
        return setTimeout(main, 1000);
      }, {
        once: true
      });
    } else {
      main();
    }

}());


const months=['sausis','vasaris','kovas','balandis','gegužės','birželis','liepa','rugpjūtis','rugsėjis','spalis','lapkritis','gruodis'],monthMin = ['','','','','','','','','','','',''],days = ['sekmadienis','pirmadienis','antradienis','trečiadienis','ketvirtadienis','penktadienis','šeštadienis'],daysMin = ['','','','','','',''],seasons = ['žiema','pavasaris','vasara','ruduo'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}