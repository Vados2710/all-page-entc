$(document).ready(function(){

	setTimeout(function(){
		$('select').styler();
	},50);
	    // таймер обратного отсчета, до 00:00:00
    var now = new Date(),
        secPassed = now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds();
    $('.timer').countdown({
        until: (24 * 60 * 60 - secPassed),
        labels: ['годы', 'месяцы', 'недели', 'дни', 'часы', 'минуты', 'секунды'],
        labels1: ['годы', 'месяцы', 'недели', 'дни', 'часы', 'минуты', 'секунды'],
        format: 'HMS',
        layout: '<div class="timebox"><span>{h10}</span><span>{h1}</span><em>{hl}</em></div><div class="timebox"><span>{m10}</span><span>{m1}</span><em>{ml}</em></div><div class="timebox"><span>{s10}</span><span>{s1}</span><em>{sl}</em></div>'
    });

    $('a', $('li', $('.delivery'))).hover(function(){
        $(this).siblings('p').slideToggle('fast');
    });

	$('.scrollto').on('click', function(e){
		$($(this).attr('href')).ScrollTo({easing: 'linear', duration: 2000 });
		e.preventDefault();
	});
	

});

