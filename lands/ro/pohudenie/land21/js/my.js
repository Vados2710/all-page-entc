function reslide(slider) {
	if ($(window).width() < 992) {
		slider.reloadSlider({
			minSlides: 1,
			maxSlides: 1,
			adaptiveHeight: true,
			touchEnabled: true,
			infiniteLoop: true,
			controls: false,
			pager: true,
			slideWidth: 280,
			onSlideBefore: function ($slideElement, oldIndex, newIndex) {
				var ValOptionChg = $slideElement.attr('data-value');
				$("select[name='count_select'] option[value='" + ValOptionChg + "']").prop("selected", true);
			}
		});
	} else {
		slider.reloadSlider({
			minSlides: 3,
			maxSlides: 3,
			infiniteLoop: false,
			adaptiveHeight: false,
			touchEnabled: false,
			controls: false,
			pager: false,
			slideWidth: 280,
			onSlideBefore: function ($slideElement, oldIndex, newIndex) {
				var ValOptionChg = $slideElement.attr('data-value');
				$("select[name='count_select'] option[value='" + ValOptionChg + "']").prop("selected", true);
			}
		});
	}
	slider.goToSlide($("select[name='count_select']").find('option:selected').attr('data-slide-index'));
}
var slider, wdt;
$(document).ready(function () {
	wdt = $(window).width();

	if ($(window).width() < 992) {
		slider = $('.bxslider').bxSlider({
			minSlides: 1,
			maxSlides: 1,
			adaptiveHeight: true,
			touchEnabled: true,
			infiniteLoop: true,
			controls: false,
			pager: true,
			slideWidth: 280,
			onSlideBefore: function ($slideElement, oldIndex, newIndex) {
				var ValOptionChg = $slideElement.attr('data-value');
				$("select[name='count_select'] option[value='" + ValOptionChg + "']").prop("selected", true);
			}
		});
	} else {
		slider = $('.bxslider').bxSlider({
			minSlides: 3,
			maxSlides: 3,
			infiniteLoop: false,
			adaptiveHeight: false,
			touchEnabled: false,
			controls: false,
			pager: false,
			slideWidth: 280,
			onSlideBefore: function ($slideElement, oldIndex, newIndex) {
				var ValOptionChg = $slideElement.attr('data-value');
				$("select[name='count_select'] option[value='" + ValOptionChg + "']").prop("selected", true);
			}
		});
	}
});
$(window).resize(function () {
	if ($(window).width() < 992) {
		if (wdt > 991) {
			reslide(slider);
			wdt = $(window).width();

		}
	} else {
		if (wdt < 992) {
			reslide(slider);
			wdt = $(window).width();
		}
	}
});