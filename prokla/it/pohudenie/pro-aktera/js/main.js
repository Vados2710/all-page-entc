var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');
$("a:not(.js-noscroll)").click(function(e) {
	var top = $(".features-wrapper").offset().top;
	e.preventDefault();
	$('body,html').animate({
		scrollTop: top
	}, 800);
});
$('.cursor-text').click(function() {
    if (wheel.classList.contains('rotated')) {
        resultWrapper.style.display = "block";
    } else {
        wheel.classList.add('super-rotation');
        setTimeout(function() {
            resultWrapper.style.display = "block";
        }, 6500);
        setTimeout(function() {
            $('.spin-wrapper').slideUp();
            $('.order_block').slideDown();
        }, 7000);
        wheel.classList.add('rotated');
    }
});

var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function(e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();
    var top = $('.toform').offset().top;
    $('body,html').animate({ scrollTop: top }, 800);
});
function Timer() {
	function e(e) {
		var i = t(new Date(e).getHours()),
			o = t(new Date(e).getMinutes()),
			n = t(new Date(e).getSeconds());
		s.each(function () {
			$(this).find(".hours").text(i), $(this).find(".minutes").text(o), $(this).find(".seconds").text(n)
		})
	}

	function t(e) {
		return e >= 10 ? e : "0" + e
	}

	function i() {
		a == r ? clearInterval(d) : (a -= 1e3, e(a))
	}

	function o() {
		d = setInterval(i, 1e3)
	}
	var s = $(".timer"),
		n = new Date,
		r = 60 * n.getTimezoneOffset() * 1e3,
		l = new Date((new Date).getTime() + 900000);
	var a = l - n + r;
	i(), o();
	var d
}
Timer();