$(document).ready(function() {

$('.boxes > div').click(function () {
        if ($(this).parent().hasClass('boxesfirsttry')) {
            $('.boxes').removeClass('boxesfirsttry');
            $(this).addClass('openbox');
            $(this).find('.try').hide();
            $(this).find('.opentry').show();
            setTimeout(function () {
                $('.sweet-overlay').show();
                $('.sweet-alert').show();
            },500);
        } else if ($(this).parent().hasClass('boxeslasttry')) {
            if (!$(this).hasClass('openbox')) {
                $(this).find('.try').hide();
                $(this).find('.opentry').show();
                $(this).find('.boxtext').css('display','block');
                setTimeout(function () {
                    $('.spin-result-wrapper').show();
                    setTimeout(function () {
                        $('#boxesContainer').slideUp(250);
                        setTimeout(function () {
                            $('.order_block').slideDown(250);
                        },500)
                    },500)
                },500);
            }
        }

    });
});