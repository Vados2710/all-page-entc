$(document).ready(function() {
  $('[name="country"]').on('change', function() {
    var geoKey = $(this).find('option:selected').val();
    var data = $jsonData.prices[geoKey];
    var price = data.price;
    var oldPrice = data.old_price;
    var currency = data.currency
    $("[value = "+geoKey+"]").attr("selected", "selected");

    $('.js_new_price_curs').text(price + ' ' + currency);
    $('.js_old_price_curs').text(oldPrice + ' ' + currency);
  });

	$('.for-event').on('click', function () {
	  var el = $(this).attr('data-href');
	  $('html, body').animate({
	  scrollTop: $(el).offset().top}, 500);
	  return false;
	});
}); 