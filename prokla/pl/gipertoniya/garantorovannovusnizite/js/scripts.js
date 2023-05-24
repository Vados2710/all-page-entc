$(document).ready(function() {
	var widX = screen.width;
	$(document).ready(function() {
	   $('.order-btn, .order-btn h2, .order-btn a').click(function(e) {
	      window.onbeforeunload = null;
	  });
	});
	$(".button").mouseover(function() {
		$(this).css("background", "#1d941c");
	}).mouseout(function() {
		$(this).css("background", "#017100");
	});
});
$(document).on('click', 'a[href^="#"]', function (event) {
	event.preventDefault();
	$('html, body').animate({
		 scrollTop: $($.attr(this, 'href')).offset().top
	}, 500);
});