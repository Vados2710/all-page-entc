$(document).ready(function(){
	$('a').click(function (e) {
	  e.preventDefault();
	  $("html, body").animate({scrollTop: $(".form").offset().top}, 1000);
	  return false;
	});
 });