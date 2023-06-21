
$(document).ready(function() {

    // AOS animation init https://michalsnik.github.io/aos/
    AOS.init({
        offset: 60
    });

    // Reviews carousel https://owlcarousel2.github.io/OwlCarousel2/demos/demos.html
    $('.js-commits__box').owlCarousel({
        loop: true,
        margin: 45,
        responsive : {
            320 : {
                items: 1
            },

            768 : {
                items: 2
            },

            960 : {
                items: 3
            }
        }
    });

    setTimeout(function() {
        $('body').addClass('loaded');
    }, 600);


    // Counter animation
    countAnimate();
    $(window).resize(function () {
        countAnimate ();
    });
    function countAnimate () {
        var $height = 120; /* на какой высоте будет срабатывать анимация*/
            $hWindow = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
            $csrollTop = $(window).scrollTop() + $hWindow - $height,
            $offsetTop = $('.count__body').offset().top;

        if($csrollTop >= $offsetTop) {
            $('.count__body').addClass('count__body_active');
        } else {
            $('.count__body').removeClass('count__body_active');
        };

        $(window).scroll(function () {
            $csrollTop = $(this).scrollTop() + $hWindow - $height;
            if($csrollTop >= $offsetTop) {
                $('.count__body').addClass('count__body_active');
            } else {
                $('.count__body').removeClass('count__body_active');
            }
        });
    }
});

// Smooth scroll
$('.js-link').on('click', function(e){
	e.preventDefault()
	var id = $(this).attr('href')
	$('html, body').animate({
		scrollTop: $(id).offset().top
	},600)
})
