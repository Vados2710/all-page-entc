$(document).ready(function(){
$('#tel').keypress(function(e) {
if (!(e.which==8 || e.which==44 ||e.which==45 ||e.which==46 ||(e.which>47 && e.which<58))) return false;
});

function validate(){
	var inp = $('.valid');
	for(var i=0; i < inp.length; i++){
		var x = $(inp[i]).val();
		if(x){
			$(inp[i]).addClass("success");
			$(inp[i]).removeClass("error");
			
		} else {
			$(inp[i]).addClass("error");
		};
	}
	if($(inp).hasClass("success")){
		$(this).removeClass("error");
	};
	if($(inp).hasClass("error")){
	return false;
	};
}
$("form").bind("submit", validate);
});
