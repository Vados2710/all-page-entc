$(document).ready(function() {
  var $timer = $('.js-timer');
  $timer.countdown({
    until: '+1d +23h +45m 47s',
    format: 'dHMS',
    compact: true,
    layout: '<div class="days">{d10}{d1}</div>' +
    '<div class="hours">{h10}{h1}</div>' +
    '<div class="minutes">{m10}{m1}</div>' +
    '<div class="seconds">{s10}{s1}</div>'
  });
  var w = window.innerWidth;
  $('.slick_sl').slick({
    dots: true,
    infinite: true,
    speed: 400,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 400000,
    slidesToShow: 1,
    responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: false
      }
    }
    ]
  });
  $(".scroll").on("click", function (e) {
    e.preventDefault();
    $(".overley").fadeIn();
    $("body").addClass("_fixed");
  });
  $(".close, .overley").on("click", function (e) {
    e.preventDefault();
    $(".overley").fadeOut();
    $("body").removeClass("_fixed");
  }).on('click','.popup', function(e){
    e.stopPropagation();
  })
});