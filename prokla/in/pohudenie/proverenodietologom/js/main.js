
$(document).ready(function (e) {



    $('.single_1').on('click', function(e){
        e.preventDefault();

        var $el = $(e.currentTarget);
        var data = $el.data('open');

        $.fancybox(data,{
            openEffect  : 'elastic',
            closeEffect : 'elastic',
            padding: 0,

            helpers: {
                overlay: {
                    locked : false
                }
            }
        });


    });
    $('.spoil').click(function () {
        var spoil = $(this).next('.contentSpoil');
        if (spoil.css('display') == 'block') {
            spoil.hide();
            $(this).find('.tire').text('+');
            $(this).find('.disp-text').text($(".text1hidden").text());
        } else {
            spoil.show();
            $(this).find('.tire').text('–');
            $(this).find('.disp-text').text($(".text2hidden").text());
        }
    });

});