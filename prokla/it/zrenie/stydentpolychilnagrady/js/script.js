
$(document).ready(function () {
// -------------spin-------------------
    var resultWrapper = document.querySelector('.spin-result-wrapper');
    var wheel = document.querySelector('.wheel-img');

    $('.active').on( "click", function( event ) {
        $( this ).off( event );
        if (wheel.classList.contains('rotated')) {
            resultWrapper.style.display = "block";
        } else {
            wheel.classList.add('super-rotation');
            setTimeout(function () {
                resultWrapper.style.display = "block";
            }, 8000);
            setTimeout(function () {
                $('.spin-wrapper').slideUp();
                $('.order_block').slideDown();
            }, 9500);
            wheel.classList.add('rotated');
        }
    });

    $('.close-popup, .pop-up-button').click(function (e) {
        e.preventDefault();
        $('.spin-result-wrapper').fadeOut("slow", function () {
            $('html, body').animate({
                scrollTop: $('.pred_form').offset().top - 60
            });
        });

    });

initializeTimer();
 function initializeTimer() {

                if (!localStorage.getItem("ever-timer")) {
                    var time = {
                        hours: 0,
                        minutes: 25,
                        seconds: 0
                    };

                    time = time.hours * 3600 + time.minutes * 60 + time.seconds;

                    localStorage.setItem("time", time);
                    localStorage.setItem("ever-timer", true);
                }

                timerSettings();

            }

            function timerSettings() {
                var time = localStorage.getItem('time'),
                    different = document.querySelector(".timer-different"),
                    hours = parseInt(time / 3600, 10),
                    minutes = parseInt((time - hours * 3600 ) / 60, 10),
                    seconds = parseInt(time % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : "" + minutes;
                seconds = seconds < 10 ? "0" + seconds : "" + seconds;
                hours = hours < 10 ? "0" + hours : "" + hours;

                var hoursHTML = document.getElementsByClassName("hours");
                var minutesHTML = document.getElementsByClassName("minutes");
                var secondsHTML = document.getElementsByClassName("seconds");

                if (--time < 0) {
                    localStorage.removeItem("ever-timer");
                    return;
                }
                if (different) {
                    seconds = seconds.split("");
                    minutes = minutes.split("");
                    hours = hours.split("");

                    diFilling(hoursHTML, hours);
                    diFilling(minutesHTML, minutes);
                    diFilling(secondsHTML, seconds);
                } else {
                    filling(hoursHTML, hours);
                    filling(minutesHTML, minutes);
                    filling(secondsHTML, seconds);
                }

                localStorage.setItem("time", time);
                setTimeout(timerSettings, 1000);
            }

            function filling(obj, value) {
                for (var i = 0; i < obj.length; i++) {
                    obj[i].innerHTML = value;
                }
            }

            function diFilling(obj, value) {
                for (var i = 0; i < obj.length; i++) {
                    obj[i].innerHTML = value[i % 2];
                }
            }
// -------------TIMER------------------------
  
});

$('a').click(function () {
    event.preventDefault();
    $(this).attr('href', '#form');
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 70}, 1500);
});

const months=['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'],monthMin = ['','','','','','','','','','','',''],days = ['domenica','lunedi','martedì','mercoledì','giovedi','venerdì','sabato'],daysMin = ['','','','','','',''],seasons = ['inverno','primavera','estate','autunno'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) nodeList[i].innerHTML = defaultDate } function addZero(numb){return numb<10?'0'+numb:numb} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}