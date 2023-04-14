$(document).ready(function () {
    // SLIDERS
    var slider1 = tns({
        container: '.slider1',
        items: 1,
        autoplay: true,
        controls: false,
        nav: false,
        autoplayButtonOutput: false,
        responsive: {
            '640': {
                items: 3,
                autoplay: false,
                slideBy: 'page',
            },
            '992': {
                items: 6,
                autoplay: false,
                slideBy: 'page',
            }
        }
    });


    var reviews = tns({
        container: '.reviews',
        nav: false,
        controlsContainer: '#customize-controls',
        gutter: 18,
        items: 1,
        slideBy: 'page',
        autoplay: false,
        responsive: {
            '992': {
                items: 3,
                autoplay: false,
            }
        }
    });


    // SCROLL TO FORM
    $(".pre_toform").click(function () {
        var scroll_block = $('#order_form').offset().top;
        $("html,body").animate({
            scrollTop: scroll_block
        }, 1200);
        return false;
    });


    // STICK NAVIGATION
    $(".navigation").sticky({ topSpacing: 20 });

    // SCROLL NAVIGATION
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });


    // Styles for product name in reviews
    var all_chars = $('.reviews__char');
    char = document.querySelector('.reviews__char');
    function add_style_to_char(word) {
        newHtml = '';
        str = word.innerText.split(' ');
        for (let i = 0; i < str.length; i++) {
            for (let char of str[i]) {
                newHtml += '<span>' + char + '</span>';
            }
            newHtml += ' '
        }
        all_chars.html(newHtml);
    }

    // RELLAX
    var rellax = new Rellax('.rellax', {
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
    });


    // $(window).resize(function () {
    //     if ($(window).height() < 1019) {
    //         $('.sec9__cup').attr('data-rellax-percentage') = 1;
    // $('.sec9__prod')
    // $('.sec9__prod-box')
    //     }
    // });


    add_style_to_char(char)
});

var seeds = $('.seeds');
seeds.load(function () {
    seeds.fadeIn();
    seeds.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
            seeds.hide();
        });
});