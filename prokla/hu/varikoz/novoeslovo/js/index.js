const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","dayFull","monthFull","dayMin","monthMin"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, dayFull: getDaysName(_day, _month, _year, daysName, false), dayMin: getDaysName(_day, _month, _year, daysMinName, false), monthFull: getMonthName(_month, monthsName, false), monthMin: getMonthName(_month, monthsMinName, false), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getDaysName(_day, _month, _year, daysName, bigFirstLetter) {return changeFirstLetter(bigFirstLetter, daysName[new Date(_year, _month - 1, _day).getDay()])} function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

const box_d = document.querySelector('#box_d').getAttribute('src')
const congrat = document.querySelector('#congrat').getAttribute('src')

var triesCount = 2;
var tries = 0;
$('#tries_count').text(triesCount);
$('.try').on('click', function () {
    if ((!$(this).parent('.boxes_item').hasClass('afterlose-boxes_item')) && (!$('#boxesContainer').hasClass('stop_trying'))) {
        if (tries == 0) {
            $('#boxesContainer').addClass('stop_trying');
            $(this).attr('src', box_d);
            $(this).addClass('shake');
            $(this).parent('.boxes_item').addClass('afterlose-boxes_item');
            $('.box-tooltip-title').html('<b>Nem nyert semmit</b><br> Elmentél <span style="color: red;">1 kísérlet</span>! Próbáld újra!');
            $('.box-tooltip-btn').html('Próbáld ki');
            setTimeout(function () {
                $('.box-popup-wrapper.tooltip').fadeIn(100);
            }, 850);
        }
        if (tries == 1) {
            $('#boxesContainer').addClass('stop_trying');
            $(this).parent('.boxes_item').html('<div class="prize_box"><img src=' + box_d +' class="try" alt=""><p class="win_prize">50%</p></div>');
            let price = document.querySelector('.x_price_current').innerHTML
            let cur = document.querySelector('.x_currency').innerHTML
            $('.box-tooltip-title').html('<b>Gratulálunk!</b><br>Ön nyert <br>Renovein<b style="color: red;"> kedvezménnyel!</b>');
            $('.box-tooltip-btn').html('Szerezd meg a Renovein kedvezményesen');
            $('.box-tooltip-ico>img').attr('src', congrat);
            setTimeout(function () {
                $('.box-popup-wrapper.tooltip').fadeIn(100);
                document.querySelector('.none').style.display = 'none'

            }, 1000);
        }
    }
});

$('.box-popup-wrapper.tooltip').bind('click', function (e) {
    $('#boxesContainer').removeClass('stop_trying');
    $('.box-popup-wrapper').fadeOut(90);
    tries++;
    triesCount--;
    $('#tries_count').html('<span style="color: red;">' + triesCount + '</span>');
    if (tries == 2) {
        $('#boxesContainer').slideUp('fast');
        $('.lead-form-box').slideDown('fast');
        initializeTimer();
        $("body,html").animate({scrollTop: $("#scroll_to").offset().top - 20}, 400);
    }
});


function initializeTimer() {

    if (!localStorage.getItem("ever-timer")) {
        var time = {
            hours: 0,
            minutes: 27,
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


let showCommentForm = document.getElementById('commnetCreate');
let commentFormWrapper = document.getElementById('commnetCreateWrapper');
let form = document.getElementById('commentForm');
let name = document.getElementById('commentName');

let city = document.getElementById('commentCity');
let text = document.getElementById('commentText');
let btn = document.getElementById('commentButton');
let notice = document.getElementById('commentNotice');
let message = document.getElementById('commentMessage');
let commentImage = document.getElementById('commentImage');
let createCommentImage = document.getElementById('createCommentImage');
commentImage.addEventListener('change', function (event) {
    event.preventDefault();
    if (commentImage.value) {
        document.getElementById('commentFoto').innerHTML = 'Fotó feltöltve';
        createCommentImage.classList.add("added");
    } else {
        document.getElementById('commentFoto').innerHTML = 'Csatoljon egy fényképet';
        createCommentImage.classList.remove("added");
    }
});
btn.addEventListener('click', function (event) {
    event.preventDefault();

    if (name.value.trim() && city.value.trim() && text.value.trim()) {
        name.value = '';
        city.value = '';
        text.value = '';
        commentImage.value = '';
        form.classList.remove("show");
        message.classList.add("show");
        createCommentImage.classList.remove("added");
    } else {
        notice.classList.add("show");
    }
});
showCommentForm.addEventListener('click', function (event) {
    showCommentForm.classList.remove("show");
    commentFormWrapper.classList.add("show");
});

