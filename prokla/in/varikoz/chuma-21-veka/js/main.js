$(document).ready(function(){


     $('.spoil').click(function () {
                var spoil = $(this).next('.contentSpoil');
                if (spoil.css('display') == 'block') {
                    spoil.hide();
                    $(this).find('.tire').text('+');
                    $(this).find('.disp-text').text('फ़ोटो देखें');
                } else {
                    spoil.show();
                    $(this).find('.tire').text('вЂ“');
                    $(this).find('.disp-text').text('फ़ोटो छुपाएं');
                }
            });

    })