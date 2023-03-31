$('.js-link').on('click', function(e){
	e.preventDefault()
	$('html, body').animate({
		scrollTop: $("#order").offset().top
	},500)
})