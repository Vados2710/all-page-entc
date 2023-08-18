
var Module = (function(){



	$('input, textarea').placeholder();


	$('.js_to-order').click(function(){
		$("html, body").animate({
			scrollTop: $(".main_form").offset().top - 10}, {
				duration: 1000,
				easing: "swing"
			});
		return false;
	});





	var toForm = function(){
		$('.toform').click(function(e) {
			
			var a = $('.js_submit'),b = a.closest('form');
			if($('form#toform').length) a = $('#toform .js_submit'),b = a.closest('form#toform');
			if(b.length && a.is(':visible')){
			$("html,body").animate({scrollTop: b.offset().top}, 1000);
					}
			return false;
		});
	}

	
		
	
	var $timer = $('.js-timer');

	$timer.countdown({
		until: '+0d +1h 35m ',
		format: 'HMS',
		compact: true,
		layout: '<li class="item hours">{h10}{h1}</li>' +
				
				'<li class="item minutes">{m10}{m1}</li>' +
				
				'<li class="item seconds">{s10}{s1}</li>'
	});





	return {
		init : function(){
			toForm();
			
			
		}
	}

})();




$(document).ready(function(){
	Module.init();


});


$(window).scroll(function () {

	var wDoc = $(window).width();

	if ( wDoc >= 1024) {

			var backParallaxValue = 0.3;

			var scrollValue = $(this).scrollTop();
			var back = $('.girl-bg');

			back.css({
				"transform": "translate3d(0px, " + scrollValue * (backParallaxValue) + "px, .01px)",
				"-webkit-transform": "translate3d(0px, " + scrollValue * (backParallaxValue) + "px, .01px)"
			});
	};



});