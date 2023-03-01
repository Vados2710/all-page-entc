$(document).ready(function () {

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


