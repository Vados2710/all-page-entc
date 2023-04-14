var arrowTiming = setInterval(arrowAnim, 1000);

function arrowAnim() {
    if ($('.red-arrow:first').hasClass("op")) {
        $('.red-arrow').each(function (el) {
            $(this).removeClass('op');
        });
    } else {
        $('.red-arrow').each(function (el) {
            $(this).addClass('op');
        });
    }
}

function moreComments() {
    if ($('.block5_slider_item:first').hasClass("more")) {

        $('.block5_slider_item').each(function (el) {
            $(this).removeClass('more');
        });
        $('#more').removeClass('down');
        $('#more_text').removeClass('visable');
        $('#less_text').addClass('visable');
    } else {
        $('.block5_slider_item').each(function (el) {
            $(this).addClass('more');
        });
        $('#more').addClass('down');
        $('#more_text').addClass('visable');
        $('#less_text').removeClass('visable');
    }

}

// <== to here
function toBlock1() {
    var d = document.getElementById("block1");
    var topPos = d.offsetTop;
    var scroll = topPos + 15;
    scrollToDiv(scroll);
}

function toBlock2() {
    var d = document.getElementById("block2");
    var topPos = d.offsetTop;
    var scroll = topPos + 15;
    scrollToDiv(scroll);
}

function toBlock3() {
    var d = document.getElementById("block3");
    var topPos = d.offsetTop;
    var scroll = topPos + 15;
    scrollToDiv(scroll);
}

function toBlock5() {
    var d = document.getElementById("block5");
    var topPos = d.offsetTop;
    var scroll = topPos + 15;
    scrollToDiv(scroll);
}

function toBlock7() {
    var d = document.getElementById("block7");
    var topPos = d.offsetTop;
    var scroll = topPos + 15;
    scrollToDiv(scroll);
}

function scrollToDiv(scr) {
    scr = scr - 30;
    $('html, body').animate({
        scrollTop: scr
    }, 900);
    return false;
}

$(document).ready(function () {
    $('.for-event').on('touchend, click', function (e) {
        e.preventDefault();
        var el = $(this).attr('data-href');
        $('html, body').animate({
            scrollTop: $(el).offset().top
        }, 900);
        return false;
    });
});


