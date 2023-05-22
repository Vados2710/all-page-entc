$(document).ready(function() {
	$(".menu li").mouseover(function() {
		$(this).css("background", "rgb(60, 128, 203, 0.3)");
	}).mouseout(function() {
		$(this).css("background", "#003366");
	});

	$(".menu-bottom li").mouseover(function() {
		$(this).css("background", "rgb(228, 147, 88, 0.6)");
	}).mouseout(function() {
		$(this).css("background", "#E6A97C");
	});

	$("a h2").mouseover(function() {
		$(this).css("color", "#0056b3");
	}).mouseout(function() {
		$(this).css("color", "#0000FF");
	});

	$(".btn").mouseover(function() {
		$(this).css("background", "#173898");
	}).mouseout(function() {
		$(this).css("background", "#304B98");
	});

	$(".media-icon img, .search img, .right-side-footer img").mouseover(function() {
		$(this).css("transform", "scale(1.1)");
	}).mouseout(function() {
		$(this).css("transform", "scale(1.0)");
	});
	
	var btn_comment = document.getElementById("myBtn");
	
	btn_comment.onclick = function() {
	  alert("Dodanie komentarza zakończone sukcesem. Zostanie on wyświetlony po akceptacji administratora.") ;
	}
	   

});

