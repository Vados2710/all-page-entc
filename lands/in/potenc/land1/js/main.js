$(document).ready(function () {

	$('.toform').on('click', function () {
		$('html, body').animate({scrollTop: $('#order_form').offset().top}, 700);
	});

});	

	var slider;

$(window).load(function(){
if(window.innerWidth > 992) {
    slider = $('.reviews-slider').bxSlider({
      slideWidth: 300,
      minSlides: 3,
      maxSlides: 3,
      adaptiveHeight: true,
      slideMargin: 25,
      pager: false,
      controls: false
    });
  }else{
    slider = $('.reviews-slider').bxSlider({
      slideWidth: 290,
      minSlides: 1,
      maxSlides: 1,
      adaptiveHeight: true,
      infiniteLoop: true
    });
  };
});

$(window).resize(function() {
	if($(window).width() < 992) {
		slider.reloadSlider({
		slideWidth: 290,
    minSlides: 1,
    maxSlides: 1,
    adaptiveHeight: true,
    infiniteLoop: true
		});
	} else {
		slider.reloadSlider({
			slideWidth: 300,
      minSlides: 3,
      maxSlides: 3,
      adaptiveHeight: true,
      slideMargin: 25,
      pager: false,
      controls: false
		});
	}
});