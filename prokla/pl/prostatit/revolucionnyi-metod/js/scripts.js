$(document).ready(function() {

	$(".btn-more").mouseover(function() {
		$(this).css("transform", "scale(1.05)");
	}).mouseout(function() {
		$(this).css("transform", "scale(1.0)");
	});

	$(".more").mouseover(function() {
		$(this).css("background", "#fff");
		$(".more span, .more:after").css("color", "#E03E45");
		$(this).css("border", "1px solid #E03E45");
	}).mouseout(function() {
		$(this).css("background", "transparent");
		$(".more span, .more:after").css("color", "#fff");
		$(this).css("border", "1px solid #fff");
	});

	var widX = screen.width;

    var f_menu = $("#fixed-menu");
    var l_menu = $("#list-menu");

    if (widX <= 550) {
    	f_menu.addClass('show-2');
    	$(".nav-new").css("visibility", "hidden");
    	$(".nav-new").css("display", "none");
  	}
  	else {
    	$(".nav-new").css("visibility", "visible");
    	f_menu.removeClass('show-2');
  	}

    $("#fixed-menu").click(function() {
        $(".show-menu a").slideToggle("slow", function() {
        	if ($(this).is(':visible'))
                $(this).css('display','inline-block');
        });
    });

    
  let divSecComments = document.getElementById('liczHr');
  let ileHr = divSecComments.getElementsByTagName('hr');
  //console.log("Liczba hr w comments: " + typeof(toString(ileHr.length)));
  let policzone = ileHr.length;
  toString(policzone);
  console.log(policzone);

  let x = window.localStorage.setItem('policzone', policzone);
  $("#how-comment #pisz").html(ileHr.length);

});