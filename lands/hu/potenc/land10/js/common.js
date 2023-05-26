$(function() {
    var user = detect.parse(navigator.userAgent);
    console.log(
        user.browser.family
    );
    if (user.browser.family != 'IE' && user.browser.family != 'Edge') {
        if ($(window).width() > 991) {
            var rellax = new Rellax('.parallax', {
                center: false,
                wrapper: null,
                round: true,
                vertical: true,
                horizontal: false
            });
        }
    };
    
    $('.pre_toform').click(function () {
        $("html, body").animate({scrollTop: $('#order_form').offset().top}, 1000);
        return false;
    });

    $('.banner__slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        fade: true,
        //cssEase: 'linear',
        //adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // проверка на пустой инпут, чисто для наглядности
    var $input;

    function onInputFocus(event) {
        var $target = $(event.target);
        var $parent = $target.parent();
        $parent.removeClass('input--error');
        $parent.addClass('input--filled');
    };

    function onInputBlur(event) {
        var $target = $(event.target);
        var $parent = $target.parent();

        if (event.target.value.trim() === '') {
            $parent.removeClass('input--filled');
            $parent.addClass('input--error');
        }
    };

    $input = $('.inp');

    // если уже есть какое-либо значение в поле
    $input.each(function(){
        var $parent = $input.parent();
        if ($input.val().trim() !== '') {
            $parent.removeClass('input--error');
            //$parent.addClass('input--filled');
        }
    });

    $input.on('focus', onInputFocus);
    $input.on('blur', onInputBlur);

});
