$(window).on('load', function () {

    var scrollTop = $(window).scrollTop();
    var scrollElem = $('.product').offset().top;




    $(window).on('scroll', function () {
        scrollTop = $(window).scrollTop();
        if ((scrollTop >= scrollElem + 10)) {
            $('.product').addClass('product--active');

        } else {
            $('.product').removeClass('product--active');
        }

    });

});