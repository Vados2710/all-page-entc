
//fixed banner
if ($(window).width() > 991) {
	var fixedBlock = $('.sidebar__banner');
	var topOfFixedBlock = fixedBlock.offset().top;
	// console.log(topOfFixedBlock);
	$(window).on('scroll', function () {
		if (topOfFixedBlock <= $(window).scrollTop()) {
			// if ($(window).scrollTop() > 1440) {
			fixedBlock.addClass('fixed');
		} else {
			fixedBlock.removeClass('fixed');
		}

		topOfOrder = $('.order').position().top;
		scrollDistanceFromTopOfDoc = $(document).scrollTop() + fixedBlock.height();
		scrollDistanceFromTopOfOrder = scrollDistanceFromTopOfDoc - topOfOrder;
		if (scrollDistanceFromTopOfDoc > topOfOrder) {
			fixedBlock.removeClass('fixed');
		}
	});
}