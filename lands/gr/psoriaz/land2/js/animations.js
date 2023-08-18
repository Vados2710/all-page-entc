//ANCHOR

$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


//SCROLL

var slides = document.querySelectorAll(".out");

function watchSlides() {


    function checkVisibility(elt) {
        var top = elt.getBoundingClientRect().top;
        var bottom = elt.getBoundingClientRect().bottom;
        return top < window.innerHeight && bottom > 0 ;
    }

    function show(elt) {
        if (checkVisibility(elt)) {
            elt.classList.add("fade_in");
        } else {
            elt.classList.remove("fade_in");
        }
    }

    for (var i = 0; i < slides.length; i++) {
        show(slides[i]);
    }

}
watchSlides();
window.addEventListener("scroll", watchSlides);


//SLIDERS

$('.animated').onScreen({
    container: window,
    direction: 'vertical',
    doIn: function () {
        $('.fromleft').addClass('slideInLeft');
        $('.fromright').addClass('slideInRight');
    },
    doOut: function () {
        $('.fromleft').removeClass('slideInLeft');
        $('.fromright').removeClass('slideInRight');
    },
    tolerance: 0,
    throttle: 50,
    toggleClass: 'onScreen',
    lazyAttr: null,
    lazyPlaceholder: 'someImage.jpg',
    debug: false
});


//before-after slider

$(window).load(function () {
    $("#slider").twentytwenty();
});