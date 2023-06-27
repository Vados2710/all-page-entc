var rew = 1;
var outtt = 0;

$(document).ready(function() {

    $('.form-link').click(function() {
        $('html, body').animate({ scrollTop: $('.block14 .form-block').offset().top }, 600);
        return false;
    });

    $('.openmodal').click(function() {

        $('#apply').arcticmodal();

        return false;
    });


    
        setTimeout(function(){
            startMiniPopup();
        }, 10000);

            $('body').mouseleave(function() {
            if (outtt == 0) {
                $('#apply').arcticmodal();
                outtt = 2;
            }
        });

    $('.block9 .item-block .next').click(function() {
        rew++;
        if (rew > 3) {
            rew = 1;
        }
        $('.block9 .item-block .review').hide();
        $('.block9 .item-block .review' + rew).fadeIn();
    });

    $('.block9 .item-block .prev').click(function() {
        rew--;
        if (rew < 1) {
            rew = 3;
        }
        $('.block9 .item-block .review').hide();
        $('.block9 .item-block .review' + rew).fadeIn();
    });



    $('.confident-link').click(function() {
        $('.hidden-conf').show();
        if ($(window).height() < 760) {
            $('.conf-info').css({
                'height': ($(window).height() - 120),
                'overflow-y': 'scroll'
            });

        };


        return false;
    });
    $('.close-conf').click(function() {
        $('.hidden-conf').hide();
    });
    if ($('select').length) {} else {
        $('.c-s').css({ 'display': 'none' });
    }
    GetCount();


    $('.block2 .bottom-block .left-block input').change(function() {
        calc();
    });

    $('.block2 .bottom-block .left-block input').click(function() {
        calc();
    });

    calc();


});

var year = 2222;
var month = 4;
var day = 4;
var hour = 0;
var min = 0;
var sec = 0;
var timerSec = 30 * 60;
dateFuture = new Date(year, month - 1, day, hour, min, sec);

function GetCount() {
    amount = timerSec;
    timerSec = timerSec - 1;
    dateNow = new Date();
    delete dateNow;
    if (amount < 0) {
        $('.days').html('00');
        $('.hours').html('00');
        $('.mins').html('00');
        $('.secs').html('00');
    } else {
        days = 0;
        hours = 0;
        mins = 0;
        secs = 0;
        out = "";
        days = 0;
        hours = 0;
        mins = Math.floor(amount / 60);
        secs = Math.floor(amount - mins * 60);
        if (days < 10) days = '0' + days;
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        $('.days').html(days);
        $('.hours').html(hours);
        $('.mins').html(mins);
        $('.secs').html(secs);
        setTimeout("GetCount()", 1000);
    }
}

var online = 537;
var count = 23;
var currentPopup = 0;

function startMiniPopup() {

    if (currentPopup <= $('.popup-mini .item').length - 1) {
        var item = $('.popup-mini .item').eq(currentPopup);
        currentPopup++;

        if ($(item).hasClass('type1')) {
            count--;
            $('.count').html(count);
            $(item).show();

        }

        if ($(item).hasClass('type2')) {
            count--;
            $('.count').html(count);
            $(item).show();
        }

        if ($(item).hasClass('type4')) {
            online += Math.floor((Math.random() * 5) + 1);
            $('.online').html(online);
            $(item).show();
        }

        setTimeout(function() {
            $(item).hide();

            setTimeout(function() {
                startMiniPopup();
            }, Math.floor((Math.random() * 10) + 5) * 1000);
        }, 3000);

    }

}

function calc() {
    var age = dynamicAge() + ' ' + wordEnding(dynamicAge());


    if (dynamicAge() > 0) {
        $('.block2 .bottom-block .right-block .rtitle').html('dabar tavo odai yra ' + age);
        $('.block2 .bottom-block .right-block .rtext').hide();

        if ($('.block2 .bottom-block .left-block .inp-line input[type="checkbox"]:checked').length == 1) {
            $('.block2 .bottom-block .right-block .recommend1').show();
        }
        if ($('.block2 .bottom-block .left-block .inp-line input[type="checkbox"]:checked').length == 2) {
            $('.block2 .bottom-block .right-block .recommend2').show();
        }
        if ($('.block2 .bottom-block .left-block .inp-line input[type="checkbox"]:checked').length == 3) {
            $('.block2 .bottom-block .right-block .recommend3').show();
        }
        if ($('.block2 .bottom-block .left-block .inp-line input[type="checkbox"]:checked').length == 4) {
            $('.block2 .bottom-block .right-block .recommend4').show();
        }
    } else {
        $('.block2 .bottom-block .right-block .rtitle').html('Įveskite Jūsų amžių');
        $('.block2 .bottom-block .right-block .rtext').hide();
    }
}

function wordEnding(col) {
    var x = "";

    if (col % 100 < 11 || col % 100 > 14) {
        switch (col % 10) {
            case 1:
                x = "metai";
                break;
            case 2:
            case 3:
            case 4:
                x = "metai";
                break;
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                x = "metų";
                break;
        }
    }
    if(col>100) x = "metų";
    return x;
}

function dynamicAge() {
    if (($(".js-userAge").val()) == "") {

    } else {
        var userAgeVar = parseInt($(".js-userAge").val());
    }
    if ($('.noseCheck').is(":checked")) {
        userAgeVar = userAgeVar + 2;
    }
    if ($('.skinCheck').is(":checked")) {
        userAgeVar = userAgeVar + 4;

    }
    if ($('.mimikaCheck').is(":checked")) {
        userAgeVar = userAgeVar + 4;

    }
    if ($('.morshinCheck').is(":checked")) {
        userAgeVar = userAgeVar + 2;
    }
    return (userAgeVar);
}
