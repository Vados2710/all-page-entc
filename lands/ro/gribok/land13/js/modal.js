
$(document).ready(function() {

    /* modal */
    $('.button-header').on('click', function(event) {
        event.preventDefault();
        $(".popup1").slideDown(500);
    });

    $('.modal, .close').on('click', function(event) {
        event.preventDefault();
        $(".popup1").slideUp(500);
        $(".popup2").fadeOut(200);
    });


    setTimeout(function() {
        var displayPopup = $(".popup1").css('display');
        if (displayPopup == 'none') {
            $(".popup2").fadeIn(200);
        }
    }, 40000);



    /*pl*/
    //
    //$('.input-text').each(function(){
    //    if($(this).val() != '') $(this).prev().addClass('hide');
    //});
    //
    //$('.input-text').blur(function() {
    //    if ($(this).val() == '') $(this).prev().removeClass('hide');
    //});
    //
    //$('.input-text').focus(function() {
    //    $(this).prev().addClass('hide');
    //});
    //
    //$('.input-text').mouseover(function() {
    //    if ($(this).val() != '') $(this).prev().addClass('hide');
    //});



});

