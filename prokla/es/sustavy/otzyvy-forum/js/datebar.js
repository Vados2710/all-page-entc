(function($){$(document).ready(function($){
    function sidebar(){
        var width = $(window).width();
        if (width > 768){
            var el = $('.ephp-sidebox');
            if(el.length) {
                var fixmeTop = el.offset().top - 24;
                var w = el.parents('.td-ss-main-sidebar').outerWidth();
                var currentScroll = $(window).scrollTop();
                var bottom = el.parents('.td-ss-main-sidebar').outerHeight() - 40;
                var elBottom = currentScroll + el.outerHeight();
                if($('body').hasClass('admin-bar')){
                    fixmeTop -= 32;
                }
                $(window).scroll(function() {
                    currentScroll = $(window).scrollTop();
                    elBottom = currentScroll + el.outerHeight();
                    console.log('parentOffset' + el.parents('.td-ss-main-sidebar').offset().top);
                    console.log('current'+currentScroll+' elBottom'+ elBottom + ' offsetBottom'+ bottom);
                    if (currentScroll >= fixmeTop) {
                        el.addClass('fixed-sidebar');
                        el.css({
                            width: w
                        });
                        if(elBottom >= bottom){
                            console.log('Poza footerem');
                            el.removeClass('fixed-sidebar');
                            el.addClass('absolute-sidebar');
                        }
                        else{
                            el.addClass('fixed-sidebar');
                            el.removeClass('absolute-sidebar');
                        }
                    }
                    else {
                        el.removeClass('fixed-sidebar absolute-sidebar');
                        el.css({
                            width: 'auto'
                        });
                    }
                });
            }
        }
    }
    var width = $(window).width();
    if (width > 768) {
        sidebar();
    }
    $(window).resize(function() {
        var width = $(window).width();
        if (width > 768){
            sidebar()
        }
    });

    $(window).scroll(function() {
        var menu = $('.td-header-menu-wrap');
        if(menu.hasClass('td-affix')){
            if($('body').hasClass('admin-bar')){
                $('.fixed-bar.top').css('top', (menu.outerHeight()+24)+'px');
            }
            else{
                $('.fixed-bar.top').css('top', menu.outerHeight()+'px');
            }
        }
        else{
            if($('body').hasClass('admin-bar')){
                $('.fixed-bar.top').css('top', '32px');
            }
            else{
                $('.fixed-bar.top').css('top', '0');
            }
        }
    });

    $(window).trigger('scroll');
})})(jQuery);