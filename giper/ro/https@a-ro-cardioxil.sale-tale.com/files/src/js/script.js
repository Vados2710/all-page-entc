document.addEventListener("DOMContentLoaded", function(event) {
    //timer

    var fullTime = new Date().getTime() + 13500000; //1.5 дня
    $('.countdown-container').countdown(fullTime, function(event) {
        $(this).html(event.strftime(

            '<div class="unit hours">' +
            '<div class="value">%H</div>' +
            '<div class="desc">:</div>' +
            '</div>' +

            '<div class="unit minutes">' +
            '<div class="value">%M</div>' +
            '<div class="desc">:</div>' +
            '</div>' +

            '<div class="unit seconds">' +
            '<div class="value">%S</div>' +
            '<div class="desc"></div>' +
            '</div>'));
    });

});

/** **/

$(document).ready(function() {$
    $('[name="country"]').on('change', function() {
        var geoKey = $(this).find('option:selected').val();
        var data = $jsonData.prices[geoKey];
        var price = data.price;
        var oldPrice = data.old_price;
        var currency = data.currency;
        $("[value = "+geoKey+"]").attr("selected", true).siblings().attr('selected', false);
        $('.price_land_s1').text(price);
        $('.price_land_s2').text(oldPrice);
        $('.price_land_curr').text(currency);
    });

    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 60;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
});