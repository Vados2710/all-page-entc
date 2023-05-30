jQuery(document).ready(function ($) {
	$("a[href^='#']").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});

	$('.reviews-slider').owlCarousel({
		loop:true,
		margin: 0,
		autoHeight: true,
		items:1,
		nav:true
	});

	$.fn.isInViewport = function() {
		var elementTop = $(this).offset().top;
		var elementBottom = elementTop + $(this).outerHeight();

		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();

		return elementBottom > viewportTop && elementTop < viewportBottom - 100;
	};

	function animation() {
		$('.animation').each(function () {
			if ($(this).isInViewport()) {
				$(this).addClass('animation-on');
			} else {
				$(this).removeClass('animation-on');
			}
		});
	}

	animation();

	$(window).scroll(function() {
		animation();
	});
});