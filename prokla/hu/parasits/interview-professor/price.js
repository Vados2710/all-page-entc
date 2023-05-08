$(function() {
    country = $.url(location.href).param('country');

    if (country == 'HU') {
        hu_selected = 'selected="selected"';
    } else {
        hu_selected = '';
    }


    selects = $("select[name='country']");
    selects.append('<option value="HU" ' + hu_selected + '>Magyarorsz</option>');

    var change = 0,
        updatePrices = function(item) {
            change = 1;

            $(item.children).each(function() {
                if (this.selected) sel = $(this).val();
            });

            if (typeof sel === 'undefined') {
                sel = 'HU';
            }

            if (sel == 'HU') {
                $('.old_price_val').html('23800');
                $('.old_price_cur').html('huf');
                $('.old_price_sig').html('huf');
                $('.new_price_val').html('11900');
                $('.new_price_cur').html('huf');
                $('.new_price_sig').html('huf');
                $('select').val('HU').trigger('change');
               initializeMask({ mask: "(+36)(@9{8})|($9{7})", removeMaskOnSubmit: false,  definitions: {
                    '@': {
                      validator: "[235-7]",
                      casing: "lower"
                    },
                    '$': {
                        validator: "[1-9]",
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