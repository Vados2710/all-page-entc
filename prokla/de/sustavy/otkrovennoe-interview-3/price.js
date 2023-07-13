$(function() {
    country = $.url(location.href).param('country');

    if (country == 'BG') {
        bg_selected = 'selected="selected"';
    } else {
        bg_selected = '';
    }
    if (country == 'DE') {
        de_selected = 'selected="selected"';
    } else {
        de_selected = '';
    }

    if (country == 'ES') {
        es_selected = 'selected="selected"';
    } else {
        es_selected = '';
    }

    if (country == 'GR') {
        gr_selected = 'selected="selected"';
    } else {
        gr_selected = '';
    }

    if (country == 'HU') {
        hu_selected = 'selected="selected"';
    } else {
        hu_selected = '';
    }

    if (country == 'IT') {
        it_selected = 'selected="selected"';
    } else {
        it_selected = '';
    }

    if (country == 'PL') {
        pl_selected = 'selected="selected"';
    } else {
        pl_selected = '';
    }

    if (country == 'AT') {
        at_selected = 'selected="selected"';
    } else {
        at_selected = '';
    }

    if (country == 'RO') {
        ro_selected = 'selected="selected"';
    } else {
        ro_selected = '';
    }
	
    if (country == 'PT') {
        pt_selected = 'selected="selected"';
    } else {
        pt_selected = '';
    }

    selects = $("select[name='country']");
    //  selects.append('<option value="BG" ' + bg_selected + '>България</option>');
     selects.append('<option value="DE" ' + de_selected + '>Germany</option>');
   //  selects.append('<option value="AT" ' + at_selected + '>Austria</option>');
    // selects.append('<option value="ES" ' + es_selected + '>España</option>');
    // selects.append('<option value="GR"' + gr_selected + '>Greece</option>');
     //selects.append('<option value="HU" ' + hu_selected + '>Magyarorsz</option>');
    // selects.append('<option value="IT" ' + it_selected + '>Italy</option>');
     //selects.append('<option value="PL" ' + pl_selected + '>Poland</option>');
    //selects.append('<option value="RO" ' + ro_selected + '>România</option>');
	//  selects.append('<option value="PT" ' + pt_selected + '>Portugal</option>');

    var change = 0,
        updatePrices = function(item) {
            change = 1;

            $(item.children).each(function() {
                if (this.selected) sel = $(this).val();
            });

            if (typeof sel === 'undefined') {
                sel = 'ES';
            }

            if (sel == 'BG') {
                $('.old_price_val').html('118');
                $('.old_price_cur').html('leva');
                $('.old_price_sig').html('leva');
                $('.new_price_val').html('59');
                $('.new_price_cur').html('leva');
                $('.new_price_sig').html('leva');
                $('select').val('BG').trigger('change');
                initializeMask({ mask: "(+35\\9)[@]9999999[99]", removeMaskOnSubmit: false,  definitions: {
                    '@': {
                      validator: "[0]",
                      casing: "lower"
                    }
                  }})
            }

            if (sel == 'DE') {
                $('.old_price_val').html('78');
                $('.old_price_cur').html('EUR');
                $('.new_price_val').html('39');
                $('.new_price_cur').html('EUR');
				 $('.new_price_sig').html('EUR');
                $('[name=country]').val('DE').trigger('change');
                initializeMask({ mask: "(+4\\9\\)99999999999[9]", removeMaskOnSubmit: false })
            }

            if (sel == 'AT') {
                $('.old_price_val').html('78');
                $('.old_price_cur').html('EUR');
                $('.new_price_val').html('39');
                $('.new_price_cur').html('EUR');
				$('.new_price_sig').html('EUR');
                $('[name=country]').val('AT').trigger('change');
                initializeMask({ mask: "(+43)9999999[999999]", removeMaskOnSubmit: false })
            }

            if (sel == 'ES') {
                $('.old_price_val').html('78');
                $('.old_price_cur').html('EUR');
                $('.new_price_val').html('39');
                $('.new_price_cur').html('EUR');
				$('.new_price_sig').html('EUR');
                $('select').val('ES').trigger('change');
                initializeMask({
                    mask: "(+34)A99999999", removeMaskOnSubmit: false, definitions: {

                        'A':

                            { validator: "[5-9]", casing: "lower" }
                        
                    }
                })
            }

            if (sel == 'GR') {
                $('.old_price_val').html('78');
                $('.old_price_cur').html('EUR');
                $('.old_price_sig').html('EUR');
                $('.new_price_val').html('39');
                $('.new_price_cur').html('EUR');
                $('.new_price_sig').html('EUR');
                $('select').val('GR').trigger('change');
                initializeMask({ mask: "(+30)9999999999", removeMaskOnSubmit: false })
            }

            if (sel == 'HU') {
                $('.old_price_val').html('23800');
                $('.old_price_cur').html('ft');
                $('.old_price_sig').html('ft');
                $('.new_price_val').html('11900');
                $('.new_price_cur').html('ft');
                $('.new_price_sig').html('ft');
                $('select').val('HU').trigger('change');
                initializeMask({ mask: "(+36)99999999[9]", removeMaskOnSubmit: false })
            }

            if (sel == 'IT') {
                $('.old_price_val').html('78');
                $('.old_price_cur').html('€');
                $('.old_price_sig').html('€');
                $('.new_price_val').html('39');
                $('.new_price_cur').html('€');
                $('.new_price_sig').html('€');
                $('select').val('IT').trigger('change');
                initializeMask({ mask: "(+3\\9\\)999999[99999]", removeMaskOnSubmit: false })
            }

            if (sel == 'PL') {
                $('.old_price_val').html('318');
                $('.old_price_cur').html('zl');
                $('.old_price_sig').html('zl');
                $('.new_price_val').html('159');
                $('.new_price_cur').html('zl');
                $('.new_price_sig').html('zl');
                $('select').val('PL').trigger('change');
                initializeMask({ mask: "(+48)999999999", removeMaskOnSubmit: false, placeholder: ' ' })
            }


            if (sel == 'RO') {
                $('.old_price_val').html('318');
                $('.old_price_cur').html('RON');
                $('.old_price_sig').html('RON');
                $('.new_price_val').html('159');
                $('.new_price_cur').html('RON');
                $('.new_price_sig').html('RON');
                $('select').val('RO').trigger('change');
                initializeMask({ mask: "(+40)999999999[9]", removeMaskOnSubmit: false })
            }
if (sel == 'PT') {
                $('.old_price_val').html('78');
                $('.old_price_cur').html('EUR');
                $('.old_price_sig').html('EUR');
                $('.new_price_val').html('39');
                $('.new_price_cur').html('EUR');
                $('.new_price_sig').html('EUR');
                $('select').val('PT').trigger('change');
                initializeMask({ mask: "(+351)999999999", removeMaskOnSubmit: false, placeholder: ' ' })
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