$(function(){
	$('a[href="/!common_files/policy_en.html"]').on('click', function(e){
		e.preventDefault();
		window.open(location + '#privacy-policy');
	});

	if(location.hash==="#privacy-policy"){
		$('body').children().fadeOut(0, function(){$('#privacy-policy').show();document.title='Privacy Policy';$('body').css('background', 'none');});
	}
});

