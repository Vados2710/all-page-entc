$(document).ready(function () {

    $('.click_ssty').click(function () {
        var show = $(this).attr('show');
        if (show == 1) {
            $(this).attr('show', 0);
            $(this).parent().children(".ctr_ima_s").slideUp(300);
            $(this).removeClass("click_ssty2");
            $(this).html('arată');
        } else {
            $(this).attr('show', 1);
            $(this).parent().children(".ctr_ima_s").slideDown(300);
            $(this).addClass("click_ssty2");
            $(this).html('ascunde');
        }
    });


});

