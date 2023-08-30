$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 310) {
      $('.s-product').addClass("s-fixed");
    } else {
      $('.s-product').removeClass("s-fixed");
    }
  })

});
