var slTimeOut = 86400000;
var slSpead = 700; 

$(document).ready(function() {
    initializeClock('timer1', deadline);
    initializeClock('timer2', deadline);
    initializeClock('timer3', deadline);
    lastpack(60);

    $('.slide').css({
        "position": "absolute"
        , "top": '0'
        , "left": '0'
    }).hide().eq(0).show();
    var slideNum = 0; //счетчик, номер активного слайда
    var slideTime;
    slideCount = $("#slider .slide").size();
    var animSlide = function (arrow) { // Основная функция, логика нашего слайдера
        clearTimeout(slideTime);
        $('.slide').eq(slideNum).fadeOut(slSpead);
        if (arrow == "next") {
            if (slideNum == (slideCount - 1)) {
                slideNum = 0;
            } else {
                slideNum++
            }
        } else if (arrow == "prew") {
            if (slideNum == 0) {
                slideNum = slideCount - 1;
            } else {
                slideNum -= 1
            }
        } else {
            slideNum = arrow;
        }
        $('.slide').eq(slideNum).fadeIn(slSpead, rotator);
        $(".control-slide.active").removeClass("active");
        $('.control-slide').eq(slideNum).addClass('active');
    };
    if (true) {
        var $linkArrow = $('<button id="prewbutton"></button><button id="nextbutton"></button>')
            .prependTo('#slider');
        $('#nextbutton').click(function () {
            animSlide("next");

        });
        $('#prewbutton').click(function () {
            animSlide("prew");
        })
    }
    var $adderSpan = '';
    $('.slide').each(function (index) {
        $adderSpan += '<span class = "control-slide"><i class="vis--hiden">' + index + '</i></span>';
    });
    $('<div class ="sli-links">' + $adderSpan + '</div>').appendTo('#slider-wrap');
    $(".control-slide:first").addClass("active");

    $('.control-slide').click(function () {
        var goToNum = parseFloat($(this).text());
        animSlide(goToNum);
    });
    var pause = false; //отвечает за остановку слайдера, если user навел курсор на слайд
    var rotator = function () {
        if (!pause) {
            slideTime = setTimeout(function () {
                animSlide('next')
            }, slTimeOut);
        }
    };
    $('#slider-wrap').hover(
        function () {
            clearTimeout(slideTime);
            pause = true;
        }
        , function () {
            pause = false;
            rotator();
        });
    rotator();
});




function lastpack(last)
{
    if (last > 5)
    {
        last--;
        $('.lastpack').html(last);
        setTimeout(lastpack, 60000, last);
    }
}