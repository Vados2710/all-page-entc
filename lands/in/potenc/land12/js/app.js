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

    var flag = 0;
    if (window.innerWidth < 960 && flag === 0) {
        flag = 1;
        $('.slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
        });
    }
    $(window).on('resize', function (event) {
        if (event.target.innerWidth < 960 && flag === 0) {
            flag = 1;
            $('.slider').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            });

        }
        else if(event.target.innerWidth > 961 && flag === 1) {
            flag = 0;
            $('.slider').slick("unslick");
        }
    });
});
