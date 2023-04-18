$(document).ready(function () {

var isMobile = false;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
    isMobile = true
}

if(!isMobile) {
    var myFullpage = new fullpage('#fullpage', {
        navigation: true,
        scrollOverflow: true,
        hybrid: true,
        normalScrollElements: '.normalScroll',
    });
  $('.toform').on('click', function(){
    myFullpage.destroy('all');
  });
}


  $('.goToForm').on('click', function () {
    $('html, body').animate({scrollTop: $('form').offset().top - 100}, 700)
  });

  scrollShow();

  reviewSlider();

});

$(document).on('scroll', function () {
  scrollShow();
});

var scrollShow = function () {

  var element = $('[data-unshow]');
  var scroll = $(document).scrollTop();
  var winHeight = $(window).height();

  element.each(function () {

    var self = $(this);
    var elementPos = self.offset().top;

    if (scroll >= (elementPos - (winHeight / 1.2))) {
      self.addClass('show')
    }

  });

};

function reviewSlider() {

  var slider = $('.reviews__wrap');

  settings = {
    dots: false,
    arrows: true,
  };

  if ($(window).width() <= 1023) {
    slider.slick(settings);
  }

  $(window).on('resize', function () {

    if ($(window).width() >= 1023) {
      if (slider.hasClass('slick-initialized')) {
        slider.slick('unslick');
      }
    } else if (!slider.hasClass('slick-initialized')) {
      return slider.slick(settings);
    }

  });

}