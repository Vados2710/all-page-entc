$(document).ready(function () {
	$('.carousel').owlCarousel({
		loop: true,
		dots: true,
		nav: false,
		items: 1,
		responsive: {
			991: {
				nav: true,
				dots: false
			}
		}
	})

	$('.js-commits__box').owlCarousel({
		items: 1,
		loop: false,
		nav: true
	});

	$('.js-stories__slider').owlCarousel({
		loop: false,
		dots: true,
		nav: true,
		items: 1
	})

	$('.js-open-stories').click(function () {
		$('.js-stories').fadeIn();
		$('html, body').addClass('overflow');
	})

	$('.stories__close, .stories__home').click(function () {
		$('.js-stories').fadeOut();
		$('html, body').removeClass('overflow');
	})


});