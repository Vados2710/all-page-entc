$(document).ready(function () {

    /*var $city = $('.popup-geocity');
    var city = '';
    $.get('http://ip-api.com/json?lang=en', function (location) {
        city = location.city;
        $city.text(city);
    });
*/
    let isShowedPopup = false;

    $(document).mouseleave(function () {
        if (!isShowedPopup) {
            $('.popup-blackout').fadeIn();
            isShowedPopup = true;
        }
    });

    $('.popup-blackout').mouseup(function (e) {
        let popup = $('.popup');
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
            $('.popup-blackout').fadeOut();
        } else if ($('.popup-more-btn, .close-blackout').is(e.target)) {
            e.preventDefault();
            $('.popup-blackout').fadeOut();
        }
    });

    $('.blur').on('click', function(){
       $(this).children('.blur-p').css("display", "none");
       $(this).children('img').css("filter", "none");
    });

    $(".main a").on("touchend, click", function (e) {
        e.preventDefault();
        $('body,html').animate({scrollTop: $('.toscroll').offset().top}, 400);
    });
});