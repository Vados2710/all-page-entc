let mainHeaderSlider = $(".main-header__list--slider").data('init-slider');
let compositionSlider = $(".composition__list").data('init-slider');
let reviewsSlider = $(".reviews__list").data('init-slider');
let leftArrow = $(".reviews__toggle--left");
let rightArrow = $(".reviews__toggle--right");

$('.reviews__list').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  speed: 1500,
  arrows: true,
  centerMode: true,
  prevArrow: leftArrow,
  nextArrow: rightArrow,
  responsive: [
      {
          breakpoint: 992,
          settings: {
            infinite: true,
            dots: true,
            arrows: false,
            centerMode: true,
          }
      },
  ]
});

$(window).on('resize', function(e){
  let mainHeaderSlider = $(".main-header__list--slider").data('init-slider');
  let compositionSlider = $(".composition__list").data('init-slider');

  if(window.innerWidth < 992){
    if(mainHeaderSlider != 1){
      $('.main-header__list--slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true
      }).data({'init-slider': 1});
    }

    if(compositionSlider != 1){
      $('.composition__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }).data({'init-slider': 1});
    }
  }
  else {
    if(mainHeaderSlider == 1){
      $('.main-header__list--slider').slick('unslick').data({'init-slider': 0});
    }

    if(compositionSlider == 1){
      $('.composition__list').slick('unslick').data({'init-slider': 0});
    }
  }
}).trigger('resize')



//scroll
$(".pre_toform").click(function () {
  $("html, body").animate({
      scrollTop: $(".order__form").offset().top
  }, 700);
  return false;
});

//polyfill foreach for IE
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
      }
  };
}

//ceremony-buttons
let buttonArray = document.querySelectorAll(".ceremony__button");
let ceremonyNoteArray = document.querySelectorAll(".ceremony__paragraph");

buttonArray.forEach(function(toggleButton) {
  toggleButton.addEventListener("click", function(evt) {
    evt.preventDefault;

    let noteClass = toggleButton.getAttribute("data-note");
    let noteItem = document.querySelector("." + noteClass);

    noteItem.classList.toggle("ceremony__paragraph--active");
  })
})



//check for IE
let userAgent = navigator.userAgent.toLowerCase();	
let Edge = /edge/i.test(userAgent);	
let InternetExplorer = false;
if((/mozilla/.test(userAgent) && !/firefox/.test(userAgent) && !/chrome/.test(userAgent) && !/safari/.test(userAgent) && !/opera/.test(userAgent)) || /msie/.test(userAgent)) {
  InternetExplorer = true;
}



//parallax starting
window.addEventListener("load", function() {
  if (!(InternetExplorer)) {
    let scene = document.querySelectorAll('.parallax');
    scene.forEach(function(sceneItem) {
      new Parallax(sceneItem);
    })
  };
})

//check for safari
let safariBrowser = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);


//wow init
let wowInit = new WOW().init({
                live: true,
                mobile: false
              });
let flag = 0;

if (window.innerWidth >= 992 && flag === 0 && !InternetExplorer && !safariBrowser) {
  wowInit;
}

$(window).on('resize', function(e){
  let wowArray = $(".wow").each(function() {
    $(this);
  });

  if (window.innerWidth >= 992 && flag === 0 && !InternetExplorer && !safariBrowser) {
    wowInit;
    flag = 1;
  } else {
    wowArray.removeClass("wow");
    flag = 0;
  }
}).trigger('resize')