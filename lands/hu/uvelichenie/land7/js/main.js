var slider, slider_exist;
$(document).ready(function ($) {
	slider_exist = false;
	setUpSlider();

	$('.for-event').on('touchend, click',function(e){
		e.preventDefault();
		var el = $(this).attr('data-href');
		$('html, body').animate({
			scrollTop: $(el).offset().top - 50}, 700);
		return false;
	});

});

$(window).on("resize", function () {
		setUpSlider();
	});
	function setUpSlider() {
		if (!slider_exist) {
			if ($(window).width() < 768) {
				slider = $('.bx-bx').bxSlider({
					mode: 'horizontal',
					nextText: '>',
					prevText: '<',
					minSlides: 1,
					maxSlides: 1,
					adaptiveHeight: true,
					touchEnabled: true,
					infiniteLoop: true,
					controls: true,
					pager: true,
					auto: true,
					pause: 5000,
					autoStart: true
				});
				slider_exist = true;
			}
		}

		if (slider_exist) {
			if ($(window).width() >= 768) {
				slider.goToSlide(0);
				slider.destroySlider();
				slider_exist = false;
			}
		}
	}