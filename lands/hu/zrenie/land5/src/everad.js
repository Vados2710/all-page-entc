//включить/выключить функцию
var mouse = true; //выход мышки

var popUpBy = true; //попап с заказами


var bPhone = true; //синяя трука для попапа


var hideMouse = 0;

$(document).ready(function() {
    $('.bxslider').bxSlider();

    $('.button-click').on('click', function(event) {
        $('.popup-callback').css('display', 'block');
        event.preventDefault();
    });

    $('.modal-first').on('click', function() {
        $('.popup-callback').css('display', 'none');


    });
    $('.modal-second').on('click', function() {
        $('.popup-phone').css('display', 'none');


    });
    $('.modal-third').on('click', function() {
        $('.popup-mouse-leave').css('display', 'none');


    });

    $('.close-ex').on('click', function() {
        $('.popup-mouse-leave').css('display', 'none');


    });
    $('.close-over').on('click', function() {
        $('.popup-phone').css('display', 'none');


    });

    $('.krestik').on('click', function() {
        $('.popup-callback').css('display', 'none');


    });

    $('#ouibounce-modal .modal-footer, .close-over').on('click', function() {
        $('#ouibounce-modal').hide();
    });

    $('#ouibounce-modal .modal').on('click', function(e) {
        e.stopPropagation();
    });

    $('.headerCallJs').on('click', function(event) {
        event.preventDefault();
        $(".popup-callback").fadeIn(200);
    });
    $('.phone-call').on('click', function(event) {
        event.preventDefault();
        $(".popup-phone").fadeIn(200);
    });
    $('.js-popup__content2').on('click', function(ev) {
        ev.stopPropagation();

    });
    $('.js-popup2').click(function() {
        $('.js-popup2').hide();
    });

    $('.close-modal,.close-img').on('click', function(event) {
        event.preventDefault();
        $(".popup-callback").fadeOut(200);
        $(".popup-phone").fadeOut(200);
    });
    $('.close-modal-mouse').on('click', function(event) {
        event.preventDefault();
        $(".popup-mouse-leave").addClass('hide');
    });
});









//Выход мышки
function mouseMoved() {
    $(".mouse").html('<div class="line_top mouse_moved"></div><div class="line_bottom mouse_moved"></div>');
    $('.mouse_moved').mouseover(function() {
        var displayPop = $(".popup-callback").css('display');
        var displayP = $(".popup-phone").css('display');
        if (displayPop == 'none' && displayP == 'none' && hideMouse == 0) {
            $('.popup-mouse-leave').show();
            hideMouse = 1;
        }
    });

}


//Добавить синюю трубку телефона
function bluePhone() {
    $('.bluePhone').html('<div class="phone-call cbh-phone cbh-green cbh-show  cbh-static" id="clbh_phone_div"><a href="#" class="phoneJs"><div class="cbh-ph-circle"></div><div class="cbh-ph-circle-fill"></div><div class="cbh-ph-img-circle1"></div></a></div>');
    $('.phoneJs').click(function() {
        event.preventDefault();
        $('.popup-second').fadeIn(300);
    });
}


//Функция проверки и включения/выключения функцый
function check() {

    if (mouse == true) {
        mouseMoved();
    }


}
check();
bluePhone();
