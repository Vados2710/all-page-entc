$(function(){
	
	var note = $('#note'),
		ts = new Date(2012, 0, 1),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 1*12*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(hours, minutes, seconds){
			
			var message = "";
			
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			if(newYear){
				message += "left until the new year!";
			}
			else {
				message += "left to 10 days from now!";
			}
			
			note.html(message);
		}
	});
	
});
$(document).ready(function () {
	$('.header__slider').slick({
		arrows: false,
		autoplay: true,
		autolaySpeed: 200
	});
	$('.slider__reviews').slick({
		dots: true,
		infinite: true,
		fade: true,
		easing: "ease"
	});
	$('.result__slider').slick({
		dots: true,
		infinite: true,
		fade: true,
		easing: "ease"
	});
});