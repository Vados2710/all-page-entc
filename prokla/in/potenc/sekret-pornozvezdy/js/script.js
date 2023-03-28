$(function(){
	
	$('.countdown').each(function(){
		$(this).countdown({
			timestamp	: (new Date()).getTime() + 10*10*12*01*1000,
			callback	: function(days, hours, minutes, seconds){
			
			
			}
		});
	});
	
});



