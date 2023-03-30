$(document).ready(function() {
        $('.toform').click(function(){
        $('html, body').animate({
            scrollTop: $("#forma1").offset().top
        }, 1500, function(){
            $('#ime').focus();
        });
    });
    });

	$('a[href^="#"]').click(function(){

var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 1000);
return false;
});


