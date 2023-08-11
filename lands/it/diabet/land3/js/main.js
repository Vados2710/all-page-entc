
function main() {
  $(document).ready(function(){
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
    
    var revievsSlider = $('.block7__slider');
    $('.block7__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
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

  $('.block7__slider').on('beforeChange', function(){
    $('.item__text').removeClass('item__text--active');
  });

  $('.item__toggle').on('click', function(evt) {
    evt.target.parentElement.classList.toggle('item__text--active');
  })
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