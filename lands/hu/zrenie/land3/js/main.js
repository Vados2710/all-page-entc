document.addEventListener("DOMContentLoaded", function () {

  $('.preloader-background').delay(1000).fadeOut(200);

  $('.preloader-wrapper')
    .delay(1400)
    .fadeOut(200);
});


$(document).ready(function () {

  new WOW().init();

  $('.go_toform').click(function () {
    $("html, body").animate({
      scrollTop: $("#order_form").offset().top - 300
    }, 1500);
    return false;
  });

  // $('select').formSelect();
  $('input#input_text, textarea#textarea2').characterCounter();

  $('.review-slider').lightSlider({
    item: 3,
    controls: false,
    enableDrag: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          item: 1,
          enableDrag: false
        }
      }
    ],
  });
});

$(window).load(function () {
  $('.rw-slide-inner').equalHeights();
});


