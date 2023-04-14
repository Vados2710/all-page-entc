$(function() {
    country = $.url(location.href).param('country');

    if (country == 'RO') {
        ro_selected = 'selected="selected"';
    } else {
        ro_selected = '';
    }


    selects = $("select[name='country']");
    selects.append('<option value="RO" ' + ro_selected + '>România</option>');

    var change = 0,
        updatePrices = function(item) {
            change = 1;

            $(item.children).each(function() {
                if (this.selected) sel = $(this).val();
            });

            if (typeof sel === 'undefined') {
                sel = 'RO';
            }

            if (sel == 'RO') {
                $('.old_price_val').html('318');
                $('.old_price_cur').html('LEI');
                $('.old_price_sig').html('LEI');
                $('.new_price_val').html('159');
                $('.new_price_cur').html('LEI');
                $('.new_price_sig').html('LEI');
                $('select').val('RO').trigger('change');
             initializeMask({ mask: "(+40)[@]999999999", removeMaskOnSubmit: false,  definitions: {
                    '@': {
                      validator: "[0]",
                      casing: "lower"
                    }
                  } })
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

$(document).ready(function() {

    $('form button').click(function() {
        if ($(this).parent().parent().find($('input[name=phone]')).inputmask('unmaskedvalue').length < 9) {
            alert('Заполните поле Телефон');
            return false;
        }
    });
});