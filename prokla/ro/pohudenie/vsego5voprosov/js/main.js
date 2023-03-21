var slider;

$(document).ready(function() {
  
	slider = $('.content__slider').bxSlider({
		controls: false,
		slideMargin: 5,
		auto: false,
		infiniteLoop: false,
		touchEnabled: false,
		hideControlOnEnd: true,
		adaptiveHeight: true
	});

	$('.next-btn').on('click', function() {
		slider.goToNextSlide();
	});


	$(function BannerBlink() {
		setInterval(function() {
			$(".banner-text").toggleClass("is-active");
		}, 500);
		
	})



});



$(window).load(function() {

	var counter = 1;

	// $('.bx-prev').on('click', function () {
	// console.log(counter)
	//counter = counter - 1;
	//});

	$('.next-btn').on('click', function() {
		//var counter = 1;
		counter = counter + 1;
		if (counter > 5) {
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