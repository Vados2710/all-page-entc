var $nav, $h = 0;
var $win = $(window);
$win.load(function () {
    $nav = $(".b-left");
    $h = $nav.offset().top;
    $win.scroll(function () {
        if ($win.scrollTop() > $h) {
            $nav.addClass("fix");
        } else {
            $nav.removeClass("fix");
        }
    });
});

$slickSolution = false;
function solSlider(){
    if($(window).innerWidth() < 768){
        if(!$slickSolution){
            $(".b-slider").slick({
                dots: true,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true
            });
            $slickSolution = true;
        }
    } else if($(window).innerWidth() >= 768){
        if($slickSolution){
            $('.b-slider').slick('unslick');
            $slickSolution = false;
        }
    }
}
$(function(){
    solSlider();

    $(window).on('resize', function(){
        solSlider();
    });


});