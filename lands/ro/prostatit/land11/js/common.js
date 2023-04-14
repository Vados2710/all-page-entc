$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true
    });
});


function getDayEnd() {
    var dayEnd = new Date();
    dayEnd.setHours(23,59,59);
    return dayEnd;
}

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
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            hoursSpan.innerHTML = ('00');
            minutesSpan.innerHTML = ('00');
            secondsSpan.innerHTML = ('00');
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var myClock = (document.cookie && document.cookie.match('myClock')) ?  (Date.parse(getCookie('myClock')) - Date.now() > -60000) : null;
// if there's a cookie with the name myClock, and timer stoped less then 1 minute (-60000) ago, use that value as the deadline
if(myClock){
    // get deadline value from cookie
    var deadline = getCookie('myClock');
}

// otherwise, set a deadline 45 minutes from now and
// save it in a cookie with that name
else{
    // create deadline 45 minutes from now
    var timeInMinutes = 45;
    var currentTime = Date.parse(new Date());
    var deadline = new Date(currentTime + timeInMinutes*60*1000);

    // store deadline in cookie for future reference
    document.cookie = 'myClock=' + deadline;
};

$(function(){
    initializeClock('timer1', deadline);
    initializeClock('timer5', deadline);
    initializeClock('timer6', deadline);
});

function covidWidget() {
    $('.covid19-widget__btn').on('click', function () {
        $('.covid19-widget').toggleClass('opened');
        $(this).toggleClass('opened');
    });
}

$(function () {
    $('.covid19-widget').prependTo('body');
    covidWidget();
});


$(function () {

    var $input = $('.text__block-inner input');

    $input.on('click', function () {
        $(this).parent().addClass('check');
    });

    $('.question__next, .question__result-btn').on('click', function () {
        var $parent = $(this).parent();
        var $textBlock = $parent.find('.text__block-inner');
        var $check = $parent.find('.check');

        $check.removeClass('error');

        if ($textBlock.length === $check.length) {
            $parent.removeClass('tabs__question-active');
            $(this).hasClass('question__result-btn') ? $('.popup__test-3, .second__window').css({display: "block"}) : $parent.next().addClass('tabs__question-active');
        } else {
            $textBlock.not($check).addClass('error')
        }
    });

    $('.popup-btn, .popup-close').on('click', function () {
        $($(this).data('name')).hide();
    });

    $(".scroll").on("click", function () {
        $('html, body').animate({
            scrollTop: $(".scroll_to_form").offset().top
        }, 1000);

    });


});