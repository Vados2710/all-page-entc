$(function () {

    if ($('header').css('content') == '"fixedMenu"') {
        $('main').css('padding-top', $('header').height() + parseInt($('header').css('padding-top')) + parseInt($('header').css('padding-bottom')) + 10)
    }

    if($('.sidebar').css('content') == '"scrollSideBar"') {
        console.log('true');
        var height = $('.sidebar').offset().top;
        var width = $('.sidebar').width();

        $(window).on('scroll', function (e) {
            if(window.pageYOffset >= height) {
                $('.sidebar').css({
                    'position': 'fixed',
                    'top': '0px',
                    'width': width,
                    'margin-left': '40px'
                });
                if ($('header').css('content') == '"fixedMenu"') {
                    $('.sidebar').css({
                        'top': $('header').height() + parseInt($('header').css('padding-top')) + parseInt($('header').css('padding-bottom')) + 10
                    })
                }
            }
            else if (window.pageYOffset >= $('.sidebar').offset().top) {
                $('.sidebar').css({
                    'position': 'relative',
                    'top': '0px',
                    'margin-left': '0'
                })
            }
            else {
                $('.sidebar').css({
                    'position': 'relative',
                    'top': '0px',
                    'margin-left': '0'
                })
            }
        })
    }
});
var slider;
$(document).ready(function () {
  slider = $('.content__slider').bxSlider({
    controls: false,
      slideMargin : 5,
    auto: false,
    infiniteLoop : false,
    touchEnabled: false,
    hideControlOnEnd: true,
      adaptiveHeight: true
  });

    $('.next-btn').on('click', function () {
        slider.goToNextSlide();
    });


});



$(window).load(function () {

  $(function BannerBlink() {
    setInterval(function() {
      $(".banner-text").toggleClass("is-active");
    }, 500);    
  });

  var counter = 1;

 // $('.bx-prev').on('click', function () {
   // console.log(counter)
    //counter = counter - 1;
  //});

  $('.next-btn').on('click', function () {
    //var counter = 1;
    counter = counter + 1;
    if(counter > 5) {
    	hideP();
    	counter = 1;
    }
    console.log(counter);
  });

  console.log(counter);

  function hideP() {
      $('.next-btn').hide()
  }


});