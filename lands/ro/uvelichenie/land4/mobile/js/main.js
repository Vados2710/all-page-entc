$(document).ready(function ($) {
	$('.pre_toform').on('touchend, click',function(e){
		e.preventDefault();
		var el = $(this).attr('data-href');
		$('html, body').animate({
			scrollTop: $(el).offset().top - 50}, 700);
		return false;
	});


});







