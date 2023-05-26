$('[data-scroll="true"]').click(function(e){
    var element = $(this).data('scroll-to');
    $('html, body').animate({
        scrollTop: $(element).offset().top
    }, 500);
    return false;
});

$('.slider').slick({
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
});
