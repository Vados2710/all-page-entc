// $(window).load(function(){
    
// });
$(document).ready(function(){
    $('#slider-reviews').bxSlider(
        {

            pager: true,
            controls: false,
            auto: true,
            slideWidth: '260'
        }
    );



    $(".to-form").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
    var $win=$(window);
    $win.scroll(function(){
        if ($win.scrollTop() + $win.height() > $('.b-footer').offset().top) {
            $('.conf-text').addClass('animate-box');
            var $offValue=$('.offer-value');
            $({numberValue: 18}).animate({numberValue: 0}, {
                duration: 60000,
                easing: "linear",
                step: function(val) {
                    $offValue.html(Math.ceil(val));
                }
            });
        }
    });
});