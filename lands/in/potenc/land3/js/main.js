$(document).ready(function() {
	$(".pre_toform").click(function () {
		var destination = $("form").offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1400);
		return false;
	});
});
