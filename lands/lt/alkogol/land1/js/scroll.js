$(document).ready(function(){
	$(".for_scroll").on("click","a", function (event) {
		console.log($("form").offset())

		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $("form").offset().top;
			
		$('body,html').animate({scrollTop: top}, 1500);
	});
});