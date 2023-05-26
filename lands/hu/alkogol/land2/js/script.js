const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) nodeList[i].innerHTML = defaultDate } function addZero(numb){return numb<10?'0'+numb:numb} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault(), $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 80
  }, 1000);
});

const slider = document.querySelector(".swiper-container");
const slider1 = document.querySelector(".swiper-container-1");

let mySwiper = new Swiper(slider, {
  slidesPerView: 1.25,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  // centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {

    1200: {
      slidesPerView: 3.8,
      spaceBetween: 35,
    },

    650: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },

    450: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    404: {
      slidesPerView: 1.45,
      spaceBetween: 20,
    },
  },
});

let mySwiper1 = new Swiper(slider1, {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,

  autoplay: {
    delay: 6000,
  },

  navigation: {
    nextEl: ".section-comment .section-comment__container .swiper-button-next",
    prevEl: ".section-comment .section-comment__container .swiper-button-prev",
  },

  breakpoints: {
    738: {
      spaceBetween: 800,
      slidesPerView: "1",
    },
  },
});

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger').toggleClass('header__burger-active');
    $('.header__nav').toggleClass('header__nav-active');
    $('body').toggleClass('lock')
  });
});

$(document).ready(function () {
  $('.header__link, .header__btn').click(function (event) {
    $('.header__burger').removeClass('header__burger-active');
    $('.header__nav').removeClass('header__nav-active');
    $('body').removeClass('lock')
  });
});

"use strict";
!(function () {

  window.addEventListener("load", function () {}),
    (window.onscroll = function () {
      680 < document.body.scrolltop ||
        680 < document.documentElement.scrollTop ||
        680 < window.pageYOffset ?
        document.querySelector(".header").classList.add("header-scroll") :
        document.querySelector(".header").classList.remove("header-scroll");
    }),

    // Activate nav section
    window.addEventListener('scroll', function () {
      if (window.matchMedia("(min-width: 1401px)").matches) {
        activateNav('reasons');
        activateNav('expert');
        activateNav('structure');
        activateNav('research');
        // activateNav('account');
      }
    });

  function activateNav(target) {
    var aim = document.querySelector('#' + target);
    var targetPosition = {
      top: window.pageYOffset + aim.getBoundingClientRect().top,
      bottom: window.pageYOffset + aim.getBoundingClientRect().bottom
    };

    var windowPosition = {
      top: window.pageYOffset,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };
    if (targetPosition.top < windowPosition.bottom) {
      if (document.querySelector('nav a').classList.contains('header__link__active')) {
        document.querySelectorAll('nav a.header__link__active').forEach(function (activelink) {
          activelink.classList.remove('header__link__active')
        })
      }
      document.querySelector('nav a[href="#' + target + '"]').classList.add('header__link__active')
    } else {
      document.querySelector('nav a[href="#' + target + '"]').classList.remove('header__link__active')
    };
  }

  document.querySelectorAll(".title_bottom").forEach(function (e) {
      e.classList.add("animated", "opacity0");
    }),
    document.querySelectorAll(".title_right").forEach(function (e) {
      e.classList.add("animated", "opacity0");
    }),
    document.querySelectorAll(".title_left").forEach(function (e) {
      e.classList.add("animated", "opacity0");
    }),
    document
    .querySelectorAll(".section-hero__picture, .section-order__picture")
    .forEach(function (e) {
      e.classList.add("animated", "opacity0");
    }),
    ScrollOut({
      once: !0,
      targets: ".title_left",
      onShown: function (e) {
        e.classList.add("slideInLeft"),
          setTimeout(function () {
            e.classList.remove("opacity0");
          }, 50);
      },
    }),
    ScrollOut({
      once: !0,
      targets: ".title_right",
      onShown: function (e) {
        e.classList.add("slideInRight"),
          setTimeout(function () {
            e.classList.remove("opacity0");
          }, 50);
      },
    }),
    ScrollOut({
      once: !0,
      targets: ".title_bottom",
      onShown: function (e) {
        e.classList.add("fadeInUp"),
          setTimeout(function () {
            e.classList.remove("opacity0");
          }, 50);
      },
    }),
    ScrollOut({
      once: !0,
      targets: ".section-hero__picture, .section-order__picture",
      onShown: function (e) {
        e.classList.add("zoomIn"),
          setTimeout(function () {
            e.classList.remove("opacity0");
          }, 50);
      },
    });
})();

