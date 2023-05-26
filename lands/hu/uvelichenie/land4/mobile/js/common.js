$(document).ready(function(){
	$('#form .js_submit').click(function(){
		$('.pop_up').fadeIn("slow");
	});
	$('.pop_up').click(function(){
		$('#form').fadeIn("slow");
		$('.pop_up').fadeOut("slow");
	});
})
