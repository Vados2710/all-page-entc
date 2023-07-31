$(function() {

    $(window).on('load resize', function() {
        if ($(window).width() < 577) {
            $('#slick-slider:not(.slick-initialized)').slick({
                centerMode: false,
                dots: true,
                infinite: true,
                speed: 100,
                slidesToShow: 1,
                arrows: false
            });
        } else {
            $("#slick-slider.slick-initialized").slick("unslick");
        }
    });




//smooth scroll
    $(".navigate-btn").on("click", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
           event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });

});



//main menu
$('.menu__icon').on('click', function() {
    $(this).closest('.menu__icon').toggleClass('active');
    $('.main-menu-list').slideToggle('slow', function() {
        if ($(this).css('display') === 'none') {
            //console.log(true);
            $('.main-menu-list').removeAttr('style');
        }
    });
});