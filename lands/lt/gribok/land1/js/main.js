$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
});


function delayFunc() {

  $owl = $('body').find('.review');

  // set the owl-carousel otions
  var carousel_Settings = {
    loop: true,
    items: 1,
    dots: true,
    nav: true
  };

  function initialize() {
    var containerWidth = $(window).width();
    if (containerWidth <= 1023) {
      // initialize owl-carousel if window screensize is less the 767px
      $owl.owlCarousel(carousel_Settings).addClass('owl-carousel owl-theme');
    } else {
      // destroy owl-carousel and remove all depending classes if window screensize is bigger then 767px
      $owl.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-theme owl-loaded');
    }
  }

  // initilize after window resize
  var id;
  $(window).resize(function () {
    clearTimeout(id);
    id = setTimeout(initialize, 500);
  });

  // initilize onload
  initialize();
}



if (document.documentElement.clientWidth < 480) {
  window.addEventListener('scroll', function () {
    setTimeout(delayFunc, 1000);
  }, {
    once: true,
    passive: true
  });
} else {
  delayFunc();
}