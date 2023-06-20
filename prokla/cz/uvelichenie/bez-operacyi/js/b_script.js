

// плавная прокрутка
$(document).ready(function() {
    $('a[href*="#b-comments"]').click(function (evt) {
        evt.preventDefault();
        $("html, body").animate({scrollTop: $('#b-comments').offset().top}, 1000);
        return false;
    });
});

// фиксация aside в пределах блока main
$(function(){
	$b_nav = $('.b-aside-item');
	$b_nav.css('width', $b_nav.outerWidth());
	$b_window = $(window);
    $b_h = $b_nav.offset().top;
    $b_h2 = $('.b-comments').offset().top - $b_nav.outerHeight();
	$b_window.scroll(function(){
		if (($b_window.scrollTop() > $b_h) && ($b_window.scrollTop() < $b_h2)) {
            $b_nav.css('top', ($(document).scrollTop() - $b_h));
		}
	});
});