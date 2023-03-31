(function () {
  'use strict';
  var scrollSmooth = function () {
    $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();
      $('html, body').animate(
        {
          scrollTop: $($.attr(this, 'href')).offset().top,
        },
        500
      );
    });
  };

  var header = function () {
    var burger = document.querySelector('.burger');
    var mobMenu = document.querySelector('.menu-mob');
    var mobMenuBg = document.querySelector('.menu-mob__bg');
    var mobClose = document.querySelector('.mob-close');
    var links = document.querySelectorAll('.list-item__link');
    burger.addEventListener('click', function () {
      mobMenu.classList.toggle('open');
      console.log('mou');
    });
    mobClose.addEventListener('click', function () {
      mobMenu.classList.toggle('open');
    });
    mobMenuBg.addEventListener('click', function () {
      mobMenu.classList.toggle('open');
    });

    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', hideMenu);
    }

    function hideMenu() {
      if (document.documentElement.clientWidth < 1024) {
        mobMenu.classList.toggle('open');
      }
    }
  };

  var form = function () {
    function randomInteger(min, max) {
      var rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }

    var counter = 1;
    setInterval(function () {
      var randNum = randomInteger(27, 47);

      if (counter == 1) {
        $('.online-1').removeClass('active');
        $('.online-2').addClass('active');
        counter = 0;
      } else {
        $('.online-1').addClass('active');
        $('.online-2').removeClass('active');
        $('.online-dynamic-1').html(randNum);
        counter = 1;
      }
    }, 10000);

    function initSelect() {
      var inputSelect = $('.country-select').first(),
        customSelect = $('.custom-select'),
        customOptions = $('.options'); //set options to custom select

      var selected = $('.selected');
      var currentCountry = $('.country-select option:selected').first();
      var currentCountryCode = currentCountry.val();
      var selectedText = $('<span>', {
        class: 'option__text',
        text: currentCountry.text(),
      });
      selected.addClass(currentCountryCode);
      selectedText.appendTo(selected);

      function setOptions(select) {
        inputSelect.find('option').each(function (i, option) {
          var countryCode = option.value;
          var countryName = option.text;
          var link = $('<a>', {
            class: countryCode + ' option',
            href: '?&country_code='.concat(option.value),
            'data-value': countryCode,
          });
          var optionText = $('<span>', {
            class: 'option__text',
            text: countryName,
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
        var target = $(e.target);

        if (target.hasClass('selected')) {
          target.addClass('hide');
          target.parent().find('.options').addClass('opened');
        } else {
          $('.hide').removeClass('hide');
          $('.opened').removeClass('opened');
        }
      });
    }

    initSelect();
  };

  var reviews = function () {
    $('.reviews-item__btn').on('click', function () {
      $(this).parent().toggleClass('active');

      if (!$(this).data('status')) {
        $(this).html('Скрыть отзыв');
        $(this).data('status', true);
      } else {
        $(this).html('Прочитать весь отзыв');
        $(this).data('status', false);
      }
    });

    $('.star1').on('click', function () {
      $(this).parent().removeClass('active1 active2 active3 active4 active5').addClass('active1');
    });
    $('.star2').on('click', function () {
      $(this).parent().removeClass('active1 active2 active3 active4 active5').addClass('active2');
    });
    $('.star3').on('click', function () {
      $(this).parent().removeClass('active1 active2 active3 active4 active5').addClass('active3');
    });
    $('.star4').on('click', function () {
      $(this).parent().removeClass('active1 active2 active3 active4 active5').addClass('active4');
    });
    $('.star5').on('click', function () {
      $(this).parent().removeClass('active1 active2 active3 active4 active5').addClass('active5');
    });
    $('.feedback-btn').click(function () {
      fileText.html('Загрузить ваше фото');
      fileFlag = true;
      $('.input-file').val('');
      labelFile.removeClass('rloaded');
      $('.feedback-form__checkmark-icon').hide();
      var reviewInput1 = $('.input__val-1').val().length,
        reviewInput2 = $('.input__val-2').val().length,
        reviewInput4 = $('.input__val-4').val().length;
      var pattern = /^[A-Za-zА-Яа-яЁё]{0,}$/;
      var nameTest = pattern.test($('.input__val-1').val());

      if (reviewInput1 !== 0 && nameTest) {
        $('.feedback-name').removeClass('error');
      } else {
        $('.feedback-name').addClass('error');
      }
      if (reviewInput2 !== 0 && Number($('.input__val-2').val()) >= 18 && Number($('.input__val-2').val()) <= 120) {
        $('.feedback-age').removeClass('error');
      } else {
        $('.feedback-age').addClass('error');
      }

      reviewInput2 !== 0 && Number($('.input__val-2').val()) >= 18 && Number($('.input__val-2').val()) <= 120;

      if (reviewInput4 !== 0) {
        $('.feedback-text').removeClass('error');
      } else {
        $('.feedback-text').addClass('error');
      }

      if (
        reviewInput1 !== 0 &&
        nameTest !== 0 &&
        reviewInput2 !== 0 &&
        Number($('.input__val-2').val()) >= 18 &&
        Number($('.input__val-2').val()) <= 120 &&
        reviewInput4 !== 0
      ) {
        $('.input__val-1').val('');
        $('.input__val-2').val('');

        $('.input__val-4').val('');
        $('.feedback-rating').removeClass('active1 active2 active3 active4 active5');
        $('.feedback-modal').fadeIn();
        setTimeout('$(".feedback").fadeOut(); $(".feedback-modal").fadeOut();', 3000);
      }
    });
    $('.input__val-2').on('input', function () {
      $(this).val(
        $(this)
          .val()
          .replace(/[A-Za-zА-Яа-яЁё]/, '')
      );
    });
    $('.feedback').fadeOut();
    $('.feedback-modal').fadeOut();
    $('.reviews-btn').click(function () {
      $('.feedback').fadeIn();
    });
    var oldPrice = document.querySelectorAll('.x_price_previous');
    var newPrice = document.querySelectorAll('.x_price_current');

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
  };
  var inputFile = $('.input-file');
  var labelFile = $('.feedback-form__file');
  var fileText = $('.feedback-form__file-text');
  var fileImg = $('.feedback-form__file-img img');
  var fileIcon = $('.feedback-form__checkmark-icon');
  var fileFlag = true;
  inputFile.change(function (e) {
    if (inputFile.val() && fileFlag) {
      fileText.html('Фото загружено');
      fileImg.hide();
      fileIcon.show();
      labelFile.addClass('rloaded');
      fileFlag = false;
    }
  });

  var composition = function () {
    var windowHeight = $(window).height();

    function animationA(params) {
      $(params).each(function () {
        var self = $(this),
          height;

        if (self.height() >= windowHeight) {
          height = self.offset().top + windowHeight - 100;
        } else {
          height = self.offset().top + self.height();
        }

        if ($(document).scrollTop() + windowHeight >= height) {
          self.addClass('active');
        }
      });
    }

    $(document).on('scroll', function () {
      animationA('.composition__list');
    });
  };

  var banner = function () {
    $(document).ready(function () {
      $('.banner').fadeOut();
      var isNavLink = false;
      $('.scroll-link').on('click', function () {
        isNavLink = true;
        setTimeout(function () {
          $('.banner').fadeIn();
          isNavLink = false;
        }, 500);
      });
      $(window).on('scroll resize', function () {
        if (!isNavLink) {
          hideBannerScroll('.form, .formland, .footer'); // сюда через кому дописываем классы блоков, которые должны скрыть баннер
        }
      });

      function hideBannerScroll() {
        var e = $('.banner'),
          t = $('.main-banner'),
          i = $(window).scrollTop(),
          o = i + $(window).height(),
          r = $(window).width();
        var n = 0;

        for (var _e = 0; _e < arguments.length; _e++) {
          $(arguments[_e]).each(function (e, t) {
            var a = $(t).offset().top,
              c = a + $(t).outerHeight(),
              s = $(t).offset().left,
              l = s + $(t).width();
            a <= o && c >= i && s <= r && l >= 0 && (n += 1);
          });
        }

        i <= 100 || n > 0
          ? e.fadeOut()
          : e.fadeIn().css({
              bottom: t.outerHeight(),
            });
      }
    });
  };

  function main() {
    scrollSmooth();
    header();
    form();
    composition();
    reviews();
    banner();
  }

  if (document.documentElement.clientWidth < 480) {
    window.addEventListener(
      'scroll',
      function () {
        return setTimeout(main, 1000);
      },
      {
        once: true,
      }
    );
  } else {
    main();
  }
})();
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
    countryName = 'in',
    // Мова для місяців.
    isAbbreviated = body.getAttribute('data-post-abbreviated') ? true : false, // Скорочений варіант місяців до трьох букв
    localDate = new Date();

  var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  switch (countryName) {
    case 'in': // Хинди (Индия)
    default:
      days = ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरूवार', 'शुक्रवार', 'शनिवार'];
      break;
  }

  switch (countryName) {
    case 'in': // Хинди (Индия)
      months = ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'];
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
