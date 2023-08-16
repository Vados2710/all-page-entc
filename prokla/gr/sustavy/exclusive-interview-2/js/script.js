$(document).ready(function() {
    var popupShow = 1
    $('html').mouseleave(function() {
        if (popupShow === 1) {
            popupShow = 0;
            $('.popup').fadeIn();
        }
    });
    $('.close').click(function() {
        $('.popup').fadeOut();
    });

   	var $city = $('.user-city');
			var city = '';
			$.get('https://api.sypexgeo.net/json/', function (location) {
  				city = location.city.name_en;
  				console.log(location.city.name_en);
  				$('.user-city').text(city);
			})
})