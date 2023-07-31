$(document).ready(function(){
$('#tel').keypress(function(e) {

if (!(e.which==8 || e.which==44 ||e.which==45 ||e.which==46 ||(e.which>47 && e.which<58))) return false;
});

$("#email").keydown(function(){
	if  ( $(this).hasClass("wrong") ) {
	$(this).attr("defaultvalue", "");
	$(this).attr("placeholder", "");
	var text =document.getElementById("email");
	text.value="";
	$(this).removeClass("wrong");
  };	
});

function validateEmail(email) {  
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate(){
  var email = $("#email").val();

    if (validateEmail(email)) {
    return true;
  } else {
    $("#email").addClass("wrong");
	var text =document.getElementById("email");
    text.value="Въведете точните данни";
	  return false;
  };
}
$("form").bind("submit", validate);

	$(".tab_prod .but").click(function(){
		$(".form_true").fadeIn(600);
		$(".form > p").fadeIn(600);
	});
		$(".tab_prod .but_gr").click(function(){
		$(".form_true").fadeIn(600);
		$(".form > p").fadeIn(600);
	});
});

