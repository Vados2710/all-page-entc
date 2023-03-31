$(document).ready(function () {

  $('.go_form').on('click', function (e) {
    e.preventDefault();
    $('body,html').animate({scrollTop: $('.order_form').offset().top}, 400);
  });

  var flag = 0;
  if (window.innerWidth <= 990 && flag === 0) {
    flag = 1;
    $('#slider1').slick({
      arrows: false,
      dots: true,
      adaptiveHeight: true
    });
  }

  $(window).on('resize', function (event) {
    if (event.target.innerWidth <= 990 && flag === 0) {
      flag = 1;
      $('#slider1').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true
      });

    }
    else if (event.target.innerWidth > 990 && flag === 1) {
      flag = 0;
      $('#slider1').slick('unslick');
    }
  });

  mainCounter();
});


$(window).on('load', function () {
  var rellax = new Rellax('.js-parralax', {
    center: true
  });
});

var buyerCounter;

var mainCounter = function () {
  var cnr = $('#country').val();
  buyerCounter = 18;

  buyed(cnr);

  setTimeout(function () {
    $('.freezing-wrap').addClass('freezing-active');
  }, 2000);

};

var buyed = function (cnr) {
  var timeInterval = setTimeout(function tInterval() {

    buyerCounter--;

    $('.counter__value').text(buyerCounter);

    var randInterval = getRandomInt(14, 20);

    if (buyerCounter > 4) {
      timeInterval = setTimeout(tInterval, randInterval * 1000);
    }

  }, 8000);
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
