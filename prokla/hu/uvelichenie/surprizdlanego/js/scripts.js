
$(document).ready(function() {
    var ww = $(window).width();
    var leadListElems = [];
    var sideWidth = (ww - 1180) / 2;
    var headH = $('#whatis h3').height() + 43;

    $('.order').on('click', function () {
        $('html, body').animate({ scrollTop: $('#orderForm').offset().top }, 500);
    });
    
    if (ww > 780) {
        
        $(window).scroll(function () {
            if ($(this).scrollTop() > 160) {
                $('.icon-top, #slide_menu').fadeIn(200);
            } else {
                $('.icon-top, #slide_menu').fadeOut(200);
            }
        });
        $('.icon-top, #gototopFooter').click(function (event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, 300);
        });
    }
    $('a[href=#works]').click(function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $('#works').offset().top}, 200);
    });
    $('a[href=#top]').click(function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $('#top').offset().top}, 200);
    });
    $('a[href=#effects]').click(function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $('#effects').offset().top}, 200);
    });
    $('a[href=#usage]').click(function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $('#usage').offset().top}, 200);
    });
    $('a[href=#reviews]').click(function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $('#reviews').offset().top}, 200);
    });
    $('a[href=#order]').click(function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $('#order').offset().top}, 200);
    });
    $('a[href=#top]').click(function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: 0}, 200);
    });
});

