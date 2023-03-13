$(document).ready(function() {
    $('.boxes > div').click(function() {
        if ($(this).parent().hasClass('boxesfirsttry')) {
            $('.boxes').removeClass('boxesfirsttry');
            $(this).addClass('openbox');
            $(this).find('.try').hide();
            $(this).find('.opentry').show();
            setTimeout(function() {
                $('.sweet-overlay').show();
                $('.sweet-alert').show();
            }, 500);
        } else if ($(this).parent().hasClass('boxeslasttry')) {
            if (!$(this).hasClass('openbox')) {
                $(this).find('.try').hide();
                $(this).find('.opentry').show();
                $(this).find('.boxtext').css('display', 'block');
                setTimeout(function() {
                    if ($(".new-comebacker-overlay").is(":visible")) $(".new-comebacker-overlay").hide();
                    $(".new-comebacker-overlay .boxes-is-open").show();
                    $(".new-comebacker-overlay .boxes-not-open").hide();
                    $('.spin-result-wrapper').fadeIn(600);
                    setTimeout(function() {
                        $('#boxesContainer').slideUp(250);
                        setTimeout(function() {
                            $('.order-wrapper').slideDown(250);
                        }, 500)
                    }, 500)
                }, 500);
            }
        }
    });
    $('#update').click(function() {
        $('.sweet-overlay').hide();
        $('.sweet-alert').hide();
        $('.boxes').addClass('boxeslasttry');
    });
});