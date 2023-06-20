$(document).ready(function () {

    $('.click_ssty').click(function () {
        var show = $(this).attr('show');
        if (show == 1) {
            $(this).attr('show', 0);
            $(this).parent().children(".ctr_ima_s").slideUp(300);
            $(this).removeClass("click_ssty2");
            $(this).html('Zobrazit');
        } else {
            $(this).attr('show', 1);
            $(this).parent().children(".ctr_ima_s").slideDown(300);
            $(this).addClass("click_ssty2");
            $(this).html('skrýt');
        }
    });






    //    Настройки таймера и акции
    var timerdate = new Date();

    var curr_day = timerdate.getDate();
    var curr_hrs = timerdate.getHours();
    var curr_min = timerdate.getMinutes();
    var curr_sec = timerdate.getSeconds();

    var sec = 59 - curr_sec;
    var min = 59 - curr_min;
    var hrs = 23 - curr_hrs;
    var days = (curr_day + 0) - curr_day;

    var timer = setInterval(function () {
        sec--;

        if (sec == -1) {
            sec = 59;
            min--;
        }
        if (min == -1) {
            min = 59;
            hrs--;
        }
        if (hrs == -1) {
            hrs = 23;
            days--;
        }
        if (days == -1) {
            days = 30; //без учёта месяца года
        }

        days = days.toString();
        hrs = hrs.toString();
        min = min.toString();
        sec = sec.toString();

        if (hrs.length < 2) {
            hrs = '0' + hrs;
        }
        if (days.length < 2) {
            days = '0' + days;
        }
        if (min.length < 2) {
            min = '0' + min;
        }
        if (sec.length < 2) {
            sec = '0' + sec;
        }

        $('.timer-sec').text(sec);
        $('.timer-min').text(min);
        $('.timer-hrs').text(hrs);
        //    $('.timer-days').text(days);

    }, 1000);

});