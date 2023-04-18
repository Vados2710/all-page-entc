$(document).ready(function(){

      var  $quantity = $('[name="quantity"]'),
        $discountPercent = $('.discount_value');

    var $count  = $('.count');

    currentOption = 1;


    $('.more, .less').on('click', function(){
        var firstOptionIndex = 1,
            lastOptionIndex = 10;

        if ( $(this).is('#more, #more2') ) {
            currentOption++;
        } else {
            currentOption--;
        }

        if ( currentOption < 1 ) {
            currentOption = firstOptionIndex;
            return false;
        }
        var discounts = ['', 0, 10, 20, 30, 40, 50],
            discountPercent = 0,
            discountPrice = 0;


        if ( currentOption > lastOptionIndex ) {
            currentOption = lastOptionIndex;
            return false;
        }

         if ( currentOption >= 6 ) {
            discountValue = discounts[6];
        } else {
            discountValue = discounts[currentOption];
        }

        var total = currentOption * curr_price;

        if ( discountValue > 0 ) {
            discountPrice = total * (discountValue/100)
            total -= Math.ceil(discountPrice);
        }


        $count.val(currentOption);
        $discountPercent.text(discountValue);
        $('.js_full_price').html(total + shipment_price);
        $('input[name="total_price"]').val(total+shipment_price);
        $('input[name="total_price_wo_shipping"]').val(total);
        $('input[name="quantity"]').val(currentOption);
    });


});
