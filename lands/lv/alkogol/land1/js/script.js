$(document).ready(function(){
	$(".overflow > nav > img").click (function(){
		$(".hidden_menu").show(1000);
	});
	$(".hidden_menu > img").click (function(){
		$(".hidden_menu").hide(1000);
	});
});