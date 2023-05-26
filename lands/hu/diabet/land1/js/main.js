let initSliderBlock5 = (function () {
  $('.block5__footer').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    asNavFor: '.block5__header',
    dots: false,
    fade: true,
    arrows: false,
    touchMove: false,
    adaptiveHeight: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          centerMode: true
        }
      }
    ]
  });
  $('.block5__header').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    focusOnSelect: true,
    infinite: false,
    dots: false,
    variableWidth: true,
    asNavFor: '.block5__footer',
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
          centerMode: true
        }
      }
    ]
  });
});
let initSliderBlock7 = (function () {
  $('.block7__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });
});
let initScroll = (function () {
  $(".text__scroll").mCustomScrollbar({
    theme:"my-theme",
    scrollEasing:"lineaar"
  });
});

let blurImages = (function () {
  let blur = document.querySelectorAll('.blur');

  for(let i = 0; i < blur.length; i++){
    blur[i].addEventListener("click", function (){
      this.classList.toggle('show');
    })
  }
})

if (document.documentElement.clientWidth < 480) {
  window.addEventListener('scroll',
    function () {
      return setTimeout(main, 1000)
    }, {
      once: true,
      passive: true
    });
} else {
  blurImages();
  initSliderBlock5();
  initSliderBlock7();
  initScroll();
};