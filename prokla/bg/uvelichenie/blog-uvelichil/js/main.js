/*===========FLIPCLOCK==============*/

$(document).ready(function() {

    var clock = $(".clock").FlipClock({
        autoStart : false,
        callbacks : {
            stop : true
        }
    });

    clock.setTime(600);
    clock.setCountdown(true);
    clock.start();
});