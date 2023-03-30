$('.show-comments').click(function (){
    $('.show-comments').fadeOut(100);
    $('.hide-comments').slideDown(300)
})


var sticky = function (node) {
    var doc = $(document),
        fixed = false,
        anchor = doc.find('.anchor');
    var onScroll = function (e) {
        var docTop = doc.scrollTop(),
            anchorTop = anchor.offset().top;
        if (docTop > anchorTop) {
            if (!fixed) {
                $('.scroll-aside').addClass('scroll');
                fixed = true;
            }
        } else {
            if (fixed) {
                $('.scroll-aside').removeClass('scroll');
                fixed = false;
            }
        }
    };
    $(window).on('scroll', onScroll);
};
var aside = new sticky($('.anchor'));