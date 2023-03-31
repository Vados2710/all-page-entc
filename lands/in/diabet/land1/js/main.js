$(window).resize(function () {
	var viewport = $("meta[name='viewport']");
	if (screen.width >= 400) {
		viewport.attr("content", "width=device-width, initial-scale=1");
	} else {
		viewport.attr("content", "width=400");
	}
});
$(window).trigger("resize");