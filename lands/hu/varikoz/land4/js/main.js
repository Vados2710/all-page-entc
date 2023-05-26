$(window).load(function() {
  var twenty = $('#twenty, #twentyTwo');

  twenty.twentytwenty({
    no_overlay: true
  });
});

$(function () {
  $('.pre_toform').click(function(){
    $("html, body").animate({scrollTop: $("#order_form").offset().top-300}, 1500);
    return false;
  });

  $(window).on("load resize", function () {
    if ($(window).width() > 1200) {
      $('.leaf_01').jParallax({moveFactor: 15, xparallax: true, targetContainer: '.main'});
      $('.leaf_02').jParallax({moveFactor: -25, xparallax: true, targetContainer: '.main'});
      $('.leaf').jParallax({moveFactor: 5, xparallax: true, targetContainer: '.main'});
    } else {
      $('.leaf_01').jParallax({moveFactor: 0, xparallax: true, targetContainer: '.main'});
      $('.leaf_02').jParallax({moveFactor: 0, xparallax: true, targetContainer: '.main'});
      $('.leaf').jParallax({moveFactor: 0, xparallax: true, targetContainer: '.main'});
    }
  });

  $('.slider_box').slick({
    dots: false,
    arrows: true,
    infinite: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear'
  });

  $('.other-components').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    mobileFirst: true,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }]
  });

});
