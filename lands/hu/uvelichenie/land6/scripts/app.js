$(function () {
	'use strict';

	var $form = $('.js-form'),
		$scrollTrig = $('.js-scroll-to'),
		$timer = $('.js-timer'),
		$timerHtml = $('#js-timer-html').html(),
		$currentTime = $.now(),
		timerCount = 14400,
		$deadline = timerCount;

	$scrollTrig.on('click', function () {
		$('html,body').animate({scrollTop: $form.offset().top}, 600);
	});

	if (localStorage.timer > 0) {
		var $usedTime = ($currentTime - localStorage.timer) / 1000;
		$deadline = timerCount - $usedTime;

		if ($deadline <= 0) {
			localStorage.timer = 0;
			$deadline = timerCount;
		}
	} else {
		localStorage.timer = $currentTime;
	}

	$timer.countdown({
		until: +$deadline,
		layout: $timerHtml
	});
});
