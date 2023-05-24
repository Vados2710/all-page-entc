$(document).ready(function() {
	$(".menu-left a, .menu-right a").mouseover(function() {
		$(this).css("color", "#B88300");
	}).mouseout(function() {
		$(this).css("color", "#888888");
	});

	$("a h2, a h3").mouseover(function() {
		$(this).css("color", "#493b18");
	}).mouseout(function() {
		$(this).css("color", "#111111");
	});

	$(".link-1 h2").mouseover(function() {
		$(this).css("color", "#4d40fc");
	}).mouseout(function() {
		$(this).css("color", "#2c1fd9");
	});

	$(".comment-text a").mouseover(function() {
		$(this).css("color", "#4d40fc");
	}).mouseout(function() {
		$(this).css("color", "#2c1fd9");
	});

	$(".comment-btn").mouseover(function() {
		$(this).css("background", "#4d40fc");
	}).mouseout(function() {
		$(this).css("background", "#2c1fd9");
	});

	$(".col-1-log img").mouseover(function() {
		$(this).css("transform", "scale(1.1)");
	}).mouseout(function() {
		$(this).css("transform", "scale(1.0)");
	});

});


