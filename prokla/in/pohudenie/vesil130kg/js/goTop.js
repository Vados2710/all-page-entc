$(document).ready(function(){
    $('.footer__gotop').on('click touchend', function(){
        $('html body').animate({scrollTop: 0}, 500);
    });
});