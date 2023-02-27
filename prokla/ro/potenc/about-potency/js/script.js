var resultWrapper = document.querySelector(".spin-result-wrapper");
var wheel = document.querySelector(".wheel-img");




let counterBagsWidget = 0;
const attempt = 5;
let formTime = 600;
const counterElem = $('.counter_attempts');


let interval = {};

window.bag = {
    open: function (e) {
        if (counterBagsWidget >= 5) return;
        const target = $(e.currentTarget);

        if (counterBagsWidget < 6 && !target.hasClass('showed-goods')) {
            counterBagsWidget++;
            window.bag.substractConter();
            window.bag.changeClass(counterBagsWidget, target);
        }

        target.addClass('showed-goods');
    },

    substractConter: function () {
        let substr = attempt - counterBagsWidget;
        counterElem.text(substr);
    },

    changeClass: function (counter, target) {
        switch (counter) {
            case 1:
                target.addClass('sale sale-30');
                break;
            case 2:
            case 4:
                target.addClass('sale sale-100');
                break;
            case 3:
                target.addClass('sale sale-50');
                break;
            case 5:
                target.addClass('sale sale-100');
                $('.card__item.sale.sale-100').addClass('glow');
                window.bag.showResultWindow();
                window.bag.showForm();
                break;
        }
    },

    showResultWindow: function () {

        setTimeout(function () {
            $('.spin-result-wrapper').css('display', 'block');
        }, 1000);
    },

    showForm: function () {
        setTimeout(function () {
            $('.spin-wrapper').slideUp();
            $('.order_block').slideDown();
            window.bag.start_timer();
        }, 3000);
    },

    start_timer: function () {
        interval = setInterval(window.bag.tick, 1000);
    },

    
}

$('.card__item').click(function (e) {
    window.bag.open(e);
});


var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');

var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();

    let el = $('#forma');
    if (!el) {
        el = $('#order_form')
    }
    let top = el.offset().top;
    $('body,html').animate({
        scrollTop: top
    }, 800);
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

const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['','','','','','','','','','','',''],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, true), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}
function validateNum(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

function validateText(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[A-Za-z]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

$('a').click(function () {
    event.preventDefault();
    $(this).attr('href', '#form');
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 70}, 1500);
});