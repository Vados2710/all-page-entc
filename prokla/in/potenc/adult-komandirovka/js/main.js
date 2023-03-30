$(document).ready(function(){
    $('.banner-btn').on('click', function(){
        $(this).parent().find('.photos').slideToggle();
    });
    var nav = $(".banner-btn");
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