$(document).ready(function(){


	 $('.toform').click(function() {
          $("html, body").animate({
              scrollTop: $("form").offset().top - 300
          }, 2000);
          return false;
        });

    $('.bxslider').bxSlider({
        controls: true,
        adaptiveHeight: true
    });
});