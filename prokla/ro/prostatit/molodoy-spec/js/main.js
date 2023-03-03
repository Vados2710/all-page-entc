$(document).on('click', '.spoiler-trigger', function (e) {
	e.preventDefault();
	$(this).toggleClass('active');
	$(this).parent().find('.spoiler-block').first().slideToggle(300);
});
var resultWrapper = document.querySelector(".spin-result-wrapper");
var wheel = document.querySelector(".wheel-img");
var params = window.location.search
.replace("?", "")
.split("&")
.reduce(function (p, e) {
	var par = e.split("=");
	p[decodeURIComponent(par[0])] = decodeURIComponent(par[1]);
	return p;
}, {});