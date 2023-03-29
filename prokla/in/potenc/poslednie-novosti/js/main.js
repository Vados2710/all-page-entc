$(document).ready(function() {

	$('.header__title').on('click', function(){
  	$("html, body").animate({scrollTop: $(".order-button").offset().top}, 1000);
    	return false;
    });

});