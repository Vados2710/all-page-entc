$(document).ready(function () {
	$('[data-toggle="scroll"]').on("click", function (e) {
		var anchor = $(this).attr("data-id");
		var bodyLeft = $("body").css("left");
		if (bodyLeft == "200px") {
			$("body").animate({
				left: "-=200px"
			}, 500);
		}
		$('html, body').stop().animate({
			scrollTop: $(anchor).offset().top
		}, 1000);
		e.preventDefault();
	});

	$('.countdown').timeTo(2400, function () {

	});
	$('.countdown2').timeTo(2400, {
		displayCaptions: true,
		captionSize: 14,
		lang: "ru"
	});
	function t(t, n) {
		var e = t - .5 + Math.random() * (n - t + 1);
		return e = Math.round(e)
	}

	function n(n, e) {
		var a = t(n, e),
			s = a - t(5, 9);
		$(".op_on").text(a), $(".op_raz").text(s)
	}

	
		var ls = localStorage;
    var e = (new Date).getTime() + 24e5;

    if(ls.getItem('luckyC12')) {
        e = ls.getItem('luckyC12');
    } else {
        ls.setItem('luckyC12', e);
    }
	$(".countdown__wrap").countdown(e, function (t) {
		$(this).html(t.strftime('<div class="counter__hour"><span class="counter__num_item">%H</span><span class="header__counter text-bottom">часов</span></div><div class="counter__min"><span class="counter__num_item">%M</span><span class="header__counter text-bottom">минут</span></div><div class="counter__sec"><span class="counter__num_item">%S</span><span class="header__counter text-bottom">секунд</span></div>'))
	}), n(35, 45), setInterval(n, 15e3, 35, 45)
	
	$(".feedback-slider").slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		arrows: false,
		slidesToScroll: 1
	});

});