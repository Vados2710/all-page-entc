$(function() {
    country = $.url(location.href).param('country');

    if (country == 'CZ') {
        cz_selected = 'selected="selected"';
    } else {
        cz_selected = '';
    }


    selects = $("select[name='country']");
    selects.append('<option value="CZ" ' + cz_selected + '>Česká republika</option>');

    var change = 0,
        updatePrices = function(item) {
            change = 1;

            $(item.children).each(function() {
                if (this.selected) sel = $(this).val();
            });

            if (typeof sel === 'undefined') {
                sel = 'CZ';
            }

            if (sel == 'CZ') {
                $('.old_price_val').html('1640');
                $('.old_price_cur').html('CZK');
                $('.new_price_val').html('820');
                $('.new_price_cur').html('CZK');
                $('select').val('CZ').trigger('change');
                initializeMask({ mask: "(+420)(($9)|(*@)9{7})|(%9{8,11})", removeMaskOnSubmit: false,  definitions: {
                    '@': {
                      validator: "[0]",
                      casing: "lower"
                    },
                    "*": {
                        validator: "[6]",
                        casing: "lower"
                    },
                    "%": {
                        validator: "[9]",
                        casing: "lower"
                    },
                    '$': {
                        validator: "[2-578]",
                        casing: "lower" 
                    } 
                }})
            }

            change = 0;
        };
    $("select").change(function() {

        if (change == 0) updatePrices(this);
    }).change();

    function initializeMask(mask) {
        $('[name=phone]').inputmask(mask);
    }
    $(document).ready(function () {
        $("[name=phone]").keydown(function (event) {
            if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
                (event.keyCode == 65 && event.ctrlKey === true) ||
                (event.keyCode >= 35 && event.keyCode <= 39)) {
                return;
            } else {
                if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                    event.preventDefault();
                }
            }
        });
    });
});