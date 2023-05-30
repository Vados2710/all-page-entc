$(document).ready(function(){
	$('.pre_toform').click(function () {
		$("html, body").animate({scrollTop: $('#order_form').offset().top}, 1000);
		return false;
	});
});
