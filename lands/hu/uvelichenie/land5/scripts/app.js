$('[data-scroll="true"]').click(function(e){
    var element = $(this).data('scroll-to');
    $('html, body').animate({
        scrollTop: $(element).offset().top
    }, 500);
    return false;
});