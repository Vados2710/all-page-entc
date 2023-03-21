window.ladi_viewport = function () {
    var width = window.outerWidth > 0 ? window.outerWidth : window.screen.width;
    var widthDevice = width;
    var is_desktop = width >= 1120;
    var content = "";
    if (typeof window.ladi_is_desktop == "undefined" || window.ladi_is_desktop == undefined) {
        window.ladi_is_desktop = is_desktop;
    }
    if (!is_desktop) {
        widthDevice = 420;
    } else {
        widthDevice = 1200;
    }
    content = "width=" + widthDevice + ", user-scalable=no";
    var scale = 1;
    if (!is_desktop && widthDevice != window.screen.width && window.screen.width > 0) {
        scale = window.screen.width / widthDevice;
    }
    if (scale != 1) {
        content += ", initial-scale=" + scale + ", minimum-scale=" + scale + ", maximum-scale=" + scale;
    }
    var docViewport = document.getElementById("viewport");
    if (!docViewport) {
        docViewport = document.createElement("meta");
        docViewport.setAttribute("id", "viewport");
        docViewport.setAttribute("name", "viewport");
        document.head.appendChild(docViewport);
    }
    docViewport.setAttribute("content", content);
};

function timer (selector, hrs, mins, secs) {
    function addZero (num) {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    }

    var timer = document.querySelector(selector),
          hours = timer.querySelector('.hours'),
          minutes = timer.querySelector('.mins'),
          seconds = timer.querySelector('.secs'),
          timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        secs -= 1;
        if (secs < 0) {
            mins -= 1;
            secs = 59;
        }
        if (mins < 0) {
            hrs -= 1;
            mins = 59;
        }

        hours.textContent = addZero(hrs);
        minutes.textContent = addZero(mins);
        seconds.textContent = addZero(secs);

        if (hrs === 0 && mins === 0 && secs === 0) {
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';

            clearInterval(timeInterval);
        }
    }
}

$('.ladi-button').click(function() {
    var $form = $("#order_form").offset().top;
    $("html, body").animate({scrollTop : $form}, 666);
    return false;
});

window.ladi_viewport();
timer('#COUNTDOWN35', 0, 9, 59);
timer('#COUNTDOWN629', 0, 9, 59);