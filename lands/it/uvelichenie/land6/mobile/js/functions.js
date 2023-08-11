$(document).ready(function() {
		$('.pre_toform').on('touchend, click', function(){
			$('html,body').animate({scrollTop: $('form').offset().top}, 800);
		})
})