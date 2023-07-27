$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 168) {
      $('.s-product').addClass("s-fixed");
    } else {
      $('.s-product').removeClass("s-fixed");
    }
  })
  $(".q_button").on("click", function (e) {
    e.preventDefault();
    $(this).attr('disabled', true);
    $.a($("input[name='q_radio']:checked").val()+'es');
    $(".q_item_answer>input").attr('disabled', true);
  })


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
});
