$( document ).ready(function () {
    window.onscroll = function () {
        var obj = ('.aside__fixed');
        if ($(window).scrollTop() >= 750
         && $(window).scrollTop() <= $(".main__product").offset().top -300)
         {
            $(obj).addClass('fixed-block')   }
        else {
            $(obj).removeClass('fixed-block');
        }
    }
});