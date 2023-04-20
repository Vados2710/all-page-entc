$(document).ready(function(){
	$('.bxslider').bxSlider({
	  controls: true,
	  adaptiveHeight: true
	 });

	 $('.toform').click(function() {
          $("html, body").animate({
              scrollTop: $("form").offset().top - 300
          }, 2000);
          return false;
        });
});