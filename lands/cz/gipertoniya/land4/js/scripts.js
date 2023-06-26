jQuery(document).ready(function ($) {

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

	$("a[href^='#']").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});

	var nowDate = new Date();
	var countDownDiff = Math.ceil((24*60*60)-(nowDate.getHours() * 60 * 60 + nowDate.getMinutes() * 60 + nowDate.getSeconds()));
	var endDate = new Date(nowDate.getTime() + countDownDiff * 1000);
	setInterval( function () {
		var diffDate = new Date(endDate.getTime() - Date.now()),
			d = 00,
			h = (diffDate.getHours() > 9) ? diffDate.getHours() : '0'+diffDate.getHours(),
			m = (diffDate.getMinutes() > 9) ? diffDate.getMinutes() : '0'+diffDate.getMinutes(),
			s = (diffDate.getSeconds() > 9) ? diffDate.getSeconds() : '0'+diffDate.getSeconds();
		$('.daySH').html(d + '<span></span>');
		$('.hoursSH').html(h + '<span></span>');
		$('.minutesSH').html(m + '<span></span>');
		$('.secondsSH').html(s + '<span></span>');
	}, 1000);

	$('.reviews-slider').slick({
		 slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  prevArrow: '<div class="prev"></div>',
  nextArrow: '<div class="next"></div>',
  adaptiveHeight: true
	});

	$('.risk-item-open').click(function () {
		$(this).toggleClass('active').prev().slideToggle();
	});
});