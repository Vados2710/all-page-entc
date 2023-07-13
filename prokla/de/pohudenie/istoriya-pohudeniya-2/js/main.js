



$(document).ready(function() {
	$('.calculate').on('click touch', function(e) {
		e.preventDefault();
		var result = Math.ceil(Number($('#minus_weight').val()) / 0.666666);
		if (Number($('#weight').val()) > (Number($('#minus_weight').val()) + 40)) {
    	$('.formResult').html('<p><b> Das Ergebnis: Wenn Sie den folgenden Empfehlungen folgen können Sie in nur ' + $('#minus_weight').val() + ' Tagen  ' + result + ' ohne Sport oder Diät abnehmen.</b></p><p>Sie glauben es nicht? Ich war auch skeptisch, als ich davon vor zwei Monaten gehört habe. Bitte lesen Sie sich meine Geschichte durch und Sie werden es selbst sehen. Vielleicht können Sie Ihr Leben ändern!</p>');
    } else {
      	$('.formResult').html('<p><b>Das Ergebnis: Sie möchten viel Gewicht verlieren.</b></p>');
    };

      $('.formResult').css({transition: 'background 1s', backgroundColor: '#EDF1F5'});
					setTimeout(function(){$('.formResult').css({backgroundColor: '#fff'})}, 5000);
  });

    var $nav,$h=0;
    $nav = $(".sidebar_inner");
    $h = $nav.offset().top;
    $(window).scroll(function(){
        if ( $(window).scrollTop() > 340) {
            $nav.addClass("fixed");
        }else{
            $nav.removeClass("fixed");
        }
    });
});