var width = 0;

$(document).ready(function(){
    width = $(window).width() + 17;
    $('.banner-btn').on('click', function(){
        $(this).parent().find('.photos').slideToggle();
    });
    var nav = $(".hova");
    var h = nav.offset().top;
    var obj = $("#ftr");
    var obj2 = $("#hdr");
    $(window).scroll(function () {
        if ($(window).scrollTop() > h) {
            obj.fadeIn();
            obj2.fadeIn();
        } else {
            obj.fadeOut();
            obj2.fadeOut();
        }
    });
});

$(window).resize(function () {
    width = $(window).width() + 17;
    var $pos =  $("#scrollFixed").offset().top - $("body").offset().top;
    var $scroll = $(this).scrollTop();
    if(width > 991) {
        if($pos < $scroll){
            $(".slide").css({
                'position':'fixed',
                'top':'50px'
            })
        } else {
            $(".slide").css({
                'position':'relative'
            })
        }
    } else {
        $(".slide").css({
            'position':'relative'
        })
    }
})

$(window).scroll(function(){
    if (width > 991) {
        var $pos =  $("#scrollFixed").offset().top - $("body").offset().top;
        var $scroll = $(this).scrollTop();
        if($pos < $scroll){
            $(".slide").css({
                'position':'fixed',
                'top':'50px'
            })
        } else {
            $(".slide").css({
                'position':'relative'
            })
        }
    } else {
        $(".slide").css({
            'position':'relative'
        })
    }
});