$(document).ready(function () {
    // $('[name="country"]').on('change', function() {
    //     var geoKey = $(this).find('option:selected').val();
    //     var data = $jsonData.prices[geoKey];
    //     var price = data.price;
    //     var oldPrice = data.old_price;
    //     var currency = data.currency
    //     $("[value = "+geoKey+"]").attr("selected", true).siblings().attr('selected', false);
    //
    //     $('.price_land_s1').text(price);
    //     $('.price_land_s2').text(oldPrice);
    //     $('.price_land_curr').text(currency);
    // });

    // var parallaxSettings = {
    //     initialOpacity: 1,
    //     opacitySpeed: 0.1
    // };
    // parallaxImgScroll(parallaxSettings);


    $('.toform').click(function () {
        $("html, body").animate({scrollTop: $(".form-scroll").offset().top}, 700);
        return false;
    });

    $('.slider ul').lightSlider({
        item: 1,
        loop: true
    });
    var _currentDate = new Date();
    var count = 1750; // 8 hours
    var _toDate = new Date(_currentDate.getFullYear(), _currentDate.getMonth(), _currentDate.getDate(), _currentDate.getHours(), _currentDate.getMinutes() + count, 1);

    $('.timer-nums').countdown({
        until: _toDate,
        format: 'DHMS',
        compact: true,
        layout: $('.timer-nums').html()

    }).removeClass('hidden');

});
