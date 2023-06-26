$(document).ready(function () {
  function compositionApp() {
    let active = 4;
  
    // const arrowTop = $('.composition__arrow-top');
    // const arrowBottom = $('.composition__arrow-bottom');
  
    $(".composition__item-" + active)
      .addClass("active")
      .siblings()
      .removeClass("active");
  
    $(".composition__item").click(function () {
      const className = $(this).attr("class");
      const numberReg = className.split("-")[1];
  
      const number = +numberReg.match(/\d/g);
      active = number;
  
      $(".composition__item-" + number)
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
  
    $(".composition__arrow-top").click(function () {
      if (active == 1) {
        return;
      }
      active--;
      $(".composition__item-" + active)
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
  
    $(".composition__arrow-bottom").click(function () {
      if (active == 7) {
        return;
      }
      active++;
      $(".composition__item-" + active)
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
  }
  
  compositionApp();
  
  function clearComposition() {
    let w = $(window).innerWidth();
  
    if (w < 767) {
      $(".composition__item").removeClass("active");
    }
  }
  
  clearComposition();
  
  $("#toggle-mnu").on("click", function (e) {
    e.preventDefault();
    $('.nav__overlay').toggleClass('show');
    $(this).toggleClass("on");
    $(this)
        .parent()
        .toggleClass("navbar_hide");
    $(this)
        .parent()
        .toggleClass("fixed-btn");
  });
  $(".menu__item a").on("click", function (e) {
    $("#toggle-mnu").toggleClass("on");
    $(".nav-btn").toggleClass("navbar_hide");
    $('.nav__overlay').removeClass('show');
  });
  
  $('.menu__exit, .nav__overlay').on('click', function () {
  
  
    $('.nav-btn').removeClass('fixed-btn');
    $('.nav-btn').addClass('navbar_hide');
    $('#toggle-mnu').removeClass('on');
    $('.nav__overlay').removeClass('show');
  });
  
  
  
  $(".nav-item a, .menu__item a").click(function () {
    var scroll_el = $(this).attr("href");
    if ($(scroll_el).length != 0) {
      $("html, body").animate(
        { scrollTop: $(scroll_el).offset().top - 56 },
        1000
      );
    }
    return false;
  });
});

function main () {
  $(".reviews-content").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  });
  $(".reviews-content").on("afterChange", function (event, slick, currentSlide) {
    $(this)
      .find(".slick-slide.content-plus")
      .not(".slick-active")
      .removeClass("content-plus");
  });
  $(".reviews-box__cbtn").on("click", function () {
    this.parentElement.parentElement.classList.toggle("content-plus");
  });
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



const months=['leden','únor','březen','duben','květen','červen','červenec','srpen','září','říjen','listopad','prosinec'],monthMin = ['','','','','','','','','','','',''],days = ['neděle','pondělí','úterý','středa','čtvrtek','pátek','sobota'],daysMin = ['','','','','','',''],seasons = ['zimní','jaro','léto','podzim'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) nodeList[i].innerHTML = defaultDate } function addZero(numb){return numb<10?'0'+numb:numb} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}