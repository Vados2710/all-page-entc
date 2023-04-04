$(document).ready(function() {




	$('.js_scroll-1').click(function() {
		$("html, body").animate({
			scrollTop: $(".form--1").offset().top - 15
		}, {
			duration: 1000,
			easing: "swing"
		});
		return false;
	});

	$('.js_scroll-2').click(function() {
		$("html, body").animate({
			scrollTop: $(".form--2").offset().top - 15
		}, {
			duration: 1000,
			easing: "swing"
		});
		return false;
	});

    $('.pre_toform').click(function (evt) {
        evt.preventDefault();
        $("html, body").animate({scrollTop: $('#order_form').offset().top}, 1000);
        return false;
    });



});