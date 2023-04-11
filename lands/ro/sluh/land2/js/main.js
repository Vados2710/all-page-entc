(function () {
    'use strict';

    if (document.body.classList.contains('ev-date')) {
      var postDate = function postDate() {
        var msInDay = 86400000,
            counterLength = 90,
            countryName = 'ro',
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

    $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
    });

    var flag = false;
    $('.js-scroll').on('click', function () {
      var bannerScroll = $('.banner');
      flag = true;
      bannerScroll.fadeIn();
      setTimeout(function () {
        flag = false;
      }, 1000);
    });
    $(window).on("scroll resize", function () {
      if (flag === false) {
        hideBannerScroll('.x_order_form', '.footer', '.deliver');
      }
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

      if (dT <= 100 || cnt > 0) {
        bannerScroll.fadeOut();
      } else {
        bannerScroll.fadeIn().css({
          'bottom': bannerDelivery.outerHeight()
        });
      }
    }

    function initSelect() {
      var inputSelect = $(".country-select").first(),
          customOptions = $(".options");
      var selected = $('.selected');
      var currentCountry = $('.country-select option:selected').first();
      var currentCountryCode = currentCountry.val();
      var selectedText = $('<span>', {
        class: 'option__text',
        text: currentCountry.text()
      });
      selected.addClass(currentCountryCode);
      selectedText.appendTo(selected);

      function setOptions(select) {
        inputSelect.find('option').each(function (i, option) {
          var countryCode = option.value;
          var countryName = option.text;
          var link = $('<a>', {
            class: countryCode + ' option',
            href: "?&country_code=".concat(option.value),
            'data-value': countryCode
          });
          var optionText = $('<span>', {
            class: 'option__text',
            text: countryName
          });
          optionText.appendTo(link);

          if (countryCode !== currentCountryCode) {
            link.appendTo(customOptions);
          } else {
            link.prependTo(customOptions);
          }
        });
      }

      setOptions();
      $(window).on('click', function (e) {
        var target = $(e.target); // if (target.hasClass('selected')) {

        if (target.hasClass('custom-select') || target.hasClass('selected')) {
          // target.addClass('hide');
          target.parent().find('.options').addClass('opened');
        } else {
          // $('.hide').removeClass('hide');
          $('.opened').removeClass('opened');
        }
      });
    }

    initSelect();

    document.querySelector('.doctor__text--wrapper').addEventListener('click', function (evt) {
      if (evt.target.classList.contains('doctor__text--toggle')) {
        evt.target.parentElement.classList.toggle('active');
      }
    });

    $(".reviews-item__btn").on("click", function () {
      $(this).parent().toggleClass("active");

      if (!$(this).data('status')) {
        $(this).html('Скрыть отзыв');
        $(this).data('status', true);
      } else {
        $(this).html('Прочитать весь отзыв');
        $(this).data('status', false);
      }
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

      if (reviewInput1 !== 0 && reviewInput3 !== 0 && reviewInput2 !== 0) {
        $(".input__val-1").val("");
        $(".input__val-2").val("");
        $(".input__val-3").val("");
        $(".feedback-rating").removeClass("active1 active2 active3 active4 active5");
        $(".feedback-modal").fadeIn();
        setTimeout('$(".feedback").fadeOut(); $(".feedback-modal").fadeOut();', 3000);
      } else {
        alert("Completaţi toate câmpurile!");
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

}());
