$slickSolution = false;
var $win = $(window);
function solSlider(){
    if($win.innerWidth() < 768){
        if(!$slickSolution){
            $(".b-actions, .formula-inner, .b-experts, .b-reviews, .order-steps").slick({
                dots: true,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                cssEase: 'linear',
                autoplay: true,
                rtl: true
            });

            $slickSolution = true;
        }
    } else if($win.innerWidth() >= 768){
        if($slickSolution){
            $('.b-actions, .formula-inner, .b-experts, .b-reviews, .order-steps').slick('unslick');
            $slickSolution = false;
        }
    }
}
$(function() {
    $(".test-btn").click(function(){
        var $ind = $(".test-part.active").index();
            if($ind<3)
            {
                $(".test-part.active, .b-steps span.active").removeClass('active').next(".test-part, .b-steps span").addClass("active");
            }
            else
            {
                $(".test-part.active, .b-steps span.active").removeClass('active');
                $(".test-btn").hide();
                $(".b-result").show();
            }

    });

    solSlider();
    $win.on('resize', function(){
        solSlider();
    });
    if ($win.width() >= 991) {
        $(document).on('scroll', function () {

            scrollShow();
        });

    }
    let scrollShow = function () {

        let element = $('[data-unshow]'),
            scroll = $(document).scrollTop(),
            winHeight = $win.height();

        element.each(function () {
            let self = $(this),
                elementPos = self.offset().top;

            if (scroll >= (elementPos - (winHeight / 1.2))) {
                self.addClass('show')
            }
        });
    };
    $('a.btn').click(function(e){
        e.preventDefault();
        $("html, body").animate({scrollTop: $("#order_form").offset().top-300}, 1000);
        return false;
    });
});

$(function () {
    'use strict';
    initializeClock('timer', deadline);
});

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}



function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var hoursSpan = clock.querySelector('.hours1');
    var minutesSpan = clock.querySelector('.minutes1');
    var secondsSpan = clock.querySelector('.seconds1');
    var hoursSpan2 = clock.querySelector('.hours2');
    var minutesSpan2 = clock.querySelector('.minutes2');
    var secondsSpan2 = clock.querySelector('.seconds2');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        hoursSpan.innerHTML = ((t.hours + '').length < 2 ? '0' : ('' + t.hours).slice(0, -1));
        minutesSpan.innerHTML = ((t.minutes + '').length < 2 ? '0' : ('' + t.minutes).slice(0, -1));
        secondsSpan.innerHTML = ((t.seconds + '').length < 2 ? '0' : ('' + t.seconds).slice(0, -1));
        hoursSpan2.innerHTML = ('' + t.hours).slice(-1);
        minutesSpan2.innerHTML = ('' + t.minutes).slice(-1);
        secondsSpan2.innerHTML = ('' + t.seconds).slice(-1);

        if (t.total <= 0) {
            hoursSpan.innerHTML = ('0');
            minutesSpan.innerHTML = ('0');
            secondsSpan.innerHTML = ('0');
            hoursSpan2.innerHTML = ('0');
            minutesSpan2.innerHTML = ('0');
            secondsSpan2.innerHTML = ('0');
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var myClock = (document.cookie && document.cookie.match('myClock')) ? (Date.parse(getCookie('myClock')) - Date.now() > -60000) : null;
// if there's a cookie with the name myClock, and timer stoped less then 1 minute (-60000) ago, use that value as the deadline
if (myClock) {
    // get deadline value from cookie
    var deadline = getCookie('myClock');
}

// otherwise, set a deadline 45 minutes from now and
// save it in a cookie with that name
else {
    // create deadline 45 minutes from now
    var timeInMinutes = 45;
    var currentTime = Date.parse(new Date());
    var deadline = new Date(currentTime + timeInMinutes * 60 * 1000);

    // store deadline in cookie for future reference
    document.cookie = 'myClock=' + deadline;
}