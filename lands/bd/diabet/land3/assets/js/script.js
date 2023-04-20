if (window.devicePixelRatio !== 1) { // Костыль для определения иных устройств, с коэффициентом отличным от 1     
    var dpt = window.devicePixelRatio;
    var widthM = window.screen.width * dpt;
    document.write('<meta name="viewport" content="width=' + 640+ '">');
}

$(function(){

  //main-block padding

  function wPadding(){
    $('.wrapper').css({'padding-top' : $('.top-line').outerHeight() + 'px'});
    $('.main-block').eq(0).css({'background-position-y' : -$('.top-line').outerHeight() + 'px'});
  }
  wPadding();



  $('a').click(function(){
      if($(this).attr('href').charAt(0) == "#"){
          var el = $(this).attr('href');
          $('html, body').animate({
              scrollTop: $(el).offset().top - $('.top-line').outerHeight()
          }, 500);
          return false; 
      }
  });

  //mobButton
  $('.mob-button').on('click', function(){
    $('.mob-button').toggleClass('active');
  });

  $('.popup__wrapper').on('click', function(e){
      if ($(e.target).closest('.popup__block').length) return;
      $(this).hide();
  });







    //timers
    $(".timer").eq(0).FlipClock(10300, {countdown: true, language: "ru"});
    $(".timer").eq(1).FlipClock(10300, {countdown: true, language: "ru"});
    $(".timer").eq(2).FlipClock(10300, {countdown: true, language: "ru"});
    $(".timer").eq(3).FlipClock(10300, {countdown: true, language: "ru"});
    $(".timer").eq(4).FlipClock(10300, {countdown: true, language: "ru"});
    $(".timer").eq(5).FlipClock(10300, {countdown: true, language: "ru"});


    $('select').on('focus', function(){
      $(this).addClass('active')
    })
    $('select').on('change blur', function(){
      $(this).removeClass('active')
    })
    

$('.BB > *').on('click', function(){
  var idx =$(this).index();
  console.log($(this).parents('.BB').children('*'));
 $(this).parents('.BB').siblings().not('.BB').removeClass('active');
  $(this).parents('.BB').siblings().not('.BB').eq(idx).addClass('active');
  $(this).parents('.BB').find('*').removeClass('active');
  $(this).addClass('active');
});
       
    
    //input placeholder toggle
    var curPlaceHolder;
    $("input").on("click", function(){
        curPlaceHolder = $(this).attr("placeholder");
        $(this).attr("placeholder", "");
    });
    $("input").on("blur", function(){
        if($(this).val() == ""){
            $(this).attr("placeholder", curPlaceHolder);
        }
    });



    $(".reviews__slider").owlCarousel({
         nav: false,
         dots: true,
         navText: "",
         loop: true,
         dotsEach: true,
         responsive:{ 
          768:{
              items:3,
          },
          640:{
              items: 1
          },
          0:{
              items:1
          }
      }
     });
    $(".sostav__slider").owlCarousel({
         nav: true,
         dots: true,
         navText: "",
         loop: true,
         dotsEach: true,
         responsive:{ 
          768:{
              items:2,
          },
          640:{
              items: 1
          },
          0:{
              items:1
          }
      }
     });

    if($(window).outerWidth() <= 768){
      $(".tripple__items").owlCarousel({
         nav: false,
         dots: true,
         navText: "",
         loop: true,
         dotsEach: true,
         responsive:{ 
          768:{
              items:1,
          },
          640:{
              items: 1
          },
          0:{
              items:1
          }
      }
     });
      $('a[href="#zakaz"]').attr('href', '#mob-zakaz');

    }
   
function checkPriceLength(){
  var price = $('.price-block .price-block__price');
  var oldPrice = $('.price-block .price-block__oldPrice');
  if(price.eq(0).text().length > 5){
    price.addClass('small');
    oldPrice.addClass('small');
    price.removeClass('medium');
    oldPrice.removeClass('medium');
  } else if(price.eq(0).text().length == 5){
      price.addClass('medium');
      oldPrice.addClass('medium');
      oldPrice.removeClass('small');
      price.removeClass('small');
  } else {
    price.removeClass('small');
    price.removeClass('medium');
    oldPrice.removeClass('small');
    oldPrice.removeClass('medium');
  }
}
checkPriceLength();

$(document).on('change', 'select', function(){
  checkPriceLength();
})
    
});