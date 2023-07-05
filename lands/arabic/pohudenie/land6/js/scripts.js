
$(document).ready(function() {

    $(window).scroll(function() {
        $( ".arw" ).fadeOut();
    });
    $('.scrollPage').click(function() {
        var elementClicked = $(this).attr("href");
        var destination = $(elementClicked).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination+10}, 800);
        removeHash();
        return false;
    });
    $('.scrollToForm').click(function() {
        var elementClicked = $("#order");
        var destination = $(elementClicked).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination+10}, 800);
        removeHash();
        return false;
    });



    setInterval(function(){
        if($('.btn_animate').hasClass('jello')) {
            $('.btn_animate').removeClass('jello')
        }
        else{
            $('.btn_animate').addClass('jello')
        }
    },1500);
});
$('.main-carousel').flickity({
    adaptiveHeight: true,
    wrapAround: true,
    cellSelector: '.carousel-cell',
    pageDots: false,
    imagesLoaded: true
});
$('.quotes-carousel').flickity({
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: false,
    prevNextButtons: false,
    draggable: true,
    pageDots: false,
    autoPlay: 3500,
    pauseAutoPlayOnHover: false
});
$('.gallery-carousel').flickity({
    adaptiveHeight: true,
    freeScroll: true,
    wrapAround: true,
    cellSelector: '.gallery-cell',
    pageDots: false,
    imagesLoaded: true
});
$('.orologio-carousel').flickity({
    adaptiveHeight: false,
    freeScroll: false,
    wrapAround: true,
    cellSelector: '.gallery-cell',
    pageDots: false,
    prevNextButtons: false,
    imagesLoaded: true,
    autoPlay: 2000
});
