$(function () {



  var reviewsSlider = $(".reviews-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: !1,
    autoplaySpeed: 5e3,
    arrows: !0,
    dots: 0,
    adaptiveHeight: 0,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
 
  })

    $('.pre_toform').click(function () {
        $("html, body").animate({scrollTop: $('#order_form').offset().top}, 1000);
        return false;
    });
  
  $(window).scroll(function () {
    if ($(window).scrollTop() > 800) {
      $(".ordertop").fadeIn(600);
    } else {
      $(".ordertop").fadeOut(200);
    }
  });
  
  (function quantityProducts() {
    var $quantityArrowMinus = $(".ordertop-minus");
    var $quantityArrowPlus = $(".ordertop-plus");
    var $quantityNum = $(".ordertop-number");

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      if ($quantityNum.val() < 5) {
        $quantityNum.val(+$quantityNum.val() + 1);
      }
    }
  })();
});
