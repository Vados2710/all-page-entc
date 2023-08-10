$(function() {
    country = $.url(location.href).param('country');

    if (country == 'IT') {
        it_selected = 'selected="selected"';
    } else {
        it_selected = '';
    }


    selects = $("select[name='country']");
    selects.append('<option value="IT" ' + it_selected + '>Italia</option>');

    var change = 0,
        updatePrices = function(item) {
            change = 1;

            $(item.children).each(function() {
                if (this.selected) sel = $(this).val();
            });

            if (typeof sel === 'undefined') {
                sel = 'IT';
            }

            if (sel == 'IT') {
                $('.old_price_val').html('78');
                $('.old_price_cur').html('<span class="currencyMain"></span>');
                $('.new_price_val').html('39');
                $('.new_price_cur').html('<span class="currencyMain"></span>');
                $('select').val('IT').trigger('change');

                initializeMask({ mask: "(+3\\9\\)999999[99999]", removeMaskOnSubmit: false })
            }

            change = 0;
        };
    $("select").change(function() {

        if (change == 0) updatePrices(this);
    }).change();

    function initializeMask(mask) {
        $('[name=phone]').inputmask(mask);
    }
});