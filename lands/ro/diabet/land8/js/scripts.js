jQuery(document).ready(function ($) {
	$('.reviews-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		prevArrow: $('.prev'),
		nextArrow: $('.next')
	});

	$.fn.isInViewport = function() {
		var elementTop = $(this).offset().top;
		var elementBottom = elementTop + $(this).outerHeight();

		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();

		return elementBottom > viewportTop && elementTop < viewportBottom - 200;
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

	var nowDate = new Date();
	var countDownDiff = Math.ceil((24*60*60)-(nowDate.getHours() * 60 * 60 + nowDate.getMinutes() * 60 + nowDate.getSeconds()));
	var endDate = new Date(nowDate.getTime() + countDownDiff * 1000);
	setInterval( function () {
		var diffDate = new Date(endDate.getTime() - Date.now()),
			d = (diffDate.getDay() > 9) ? diffDate.getDay() : '0'+diffDate.getDay(),
			h = (diffDate.getHours() > 9) ? diffDate.getHours() : '0'+diffDate.getHours(),
			m = (diffDate.getMinutes() > 9) ? diffDate.getMinutes() : '0'+diffDate.getMinutes(),
			s = (diffDate.getSeconds() > 9) ? diffDate.getSeconds() : '0'+diffDate.getSeconds();
		$('.daySH').html(d );
		$('.hoursSH').html(h);
		$('.minutesSH').html(m);
		$('.secondsSH').html(s);
	}, 1000);

	$("a[href^='#']").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});
});