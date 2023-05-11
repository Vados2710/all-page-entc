$(document).ready(function () {
  $("a").on("touchend, click", function (e) {
  e.preventDefault();
  $("body,html").animate({
	  scrollTop: $("#order_form").offset().top - 300}, 1000);
});
  var $nav,$h=0;
	 $nav = $(".bnr-block");
	 $h = $nav.offset().top;
	 $(window).scroll(function(){
		 if ( $(window).scrollTop() > $h) {
			 $nav.addClass("fix");
		 }else{
			 $nav.removeClass("fix");
		 }
	 });
 
 
 });


