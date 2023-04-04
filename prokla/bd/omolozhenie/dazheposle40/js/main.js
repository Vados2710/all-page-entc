
function func() {
	$(document).ready(function () {
		var $nav = $(".fix_side");
		var maxWidth = parseInt($(".fix_side").css('width'));
		var $h = $nav.offset().top;
		$(window).scroll(function () {
			if ($(window).scrollTop() > $h) {
				$nav.addClass("fixed");
				$nav.css('max-width', maxWidth);
			} else {
				$nav.removeClass("fixed");
			}
		});
    })
}