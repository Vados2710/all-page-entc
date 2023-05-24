var timerId = setTimeout(function footsale() {
    function firstshow() {
        $('.ftrsale').fadeIn(300);
    }

    setTimeout(firstshow, 15000);
    //timerId = setTimeout(footsale, 20000);
}, 300);

setTimeout(function () {
    clearTimeout(timerId);
}, 21000);

$(function () {
    $('.cls').click(function () {
        $('.ftrsale').fadeOut(300);
    })
});

$(function () {
    $('.popbutton').click(function () {
        $('.screenLock').fadeOut(100);
        var top = $(".toform").offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    })
});

$(function () {
    $('.popbutton').click(function () {
        $('.ftrsale').fadeOut(100);
    })
});

var number_objects;
var displayObject = $('.left-pack');

function loadRandom() {
    number_objects = 54 + Math.floor(Math.random() * 1);
}

function decreaseRandom() {
    number_objects -= Math.floor(Math.random() * 2) + 1;
}

function showRandom() {
    displayObject.text(number_objects);
}

loadRandom(); // load the value
showRandom(); // initial display
var interval = setInterval(function () {
    decreaseRandom();
    showRandom();
    if (number_objects <= 5) {
        clearInterval(interval);

    }
}, 7500);

$(function () {
    $('a').on("click", function (e) {
        e.preventDefault();
        var top = $(".toform").offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
})