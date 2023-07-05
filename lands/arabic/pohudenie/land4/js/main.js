$(document).ready((function () {
	$(".bxslider").bxSlider({
		controls: !0,
		adaptiveHeight: !0,
		slideMargin: 20,
	}), $(".toform").click((function () {
		return $("html, body").animate({
			scrollTop: $("form").offset().top - 300
		}, 2e3), !1
	}))
}));
