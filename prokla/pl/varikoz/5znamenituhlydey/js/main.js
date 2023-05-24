const months=['styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad','grudzień'],monthMin = ['','','','','','','','','','','',''],days = ['niedziela','poniedziałek','wtorek','środa','czwartek','piątek','sobota'],daysMin = ['','','','','','',''],seasons = ['zima','wiosna','lato','jesień'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","dayFull","monthFull","dayMin"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, dayFull: getDaysName(_day, _month, _year, daysName, false), dayMin: getDaysName(_day, _month, _year, daysMinName, false), monthFull: getMonthName(_month, monthsName, false), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getDaysName(_day, _month, _year, daysName, bigFirstLetter) {return changeFirstLetter(bigFirstLetter, daysName[new Date(_year, _month - 1, _day).getDay()])} function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

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
            $('.box-tooltip-title').html('<b>Nic nie wygrałeś</b><br> Została Ci  <span style="color: red;">1 próba</span>!<br> Spróbuj ponownie!');
            $('.box-tooltip-btn').html('SPRÓBOWAĆ');
            setTimeout(function () {
                $('.box-popup-wrapper.tooltip').fadeIn(100);
            }, 850);
        }
        if (tries == 1) {
            $('#boxesContainer').addClass('stop_trying');
            $(this).attr('src', box_d);
            $(this).parent('.boxes_item').html('<div class="prize_box"><img src=' + box_d +' class="try" alt=""><p class="win_prize">50%</p></div>');
            $('.box-tooltip-title').html('<b>Gratulacje!</b> <br>zniżkę na <b style="color: red;"> NeoVeris!</b> <br> <b style="color: red; font-size: 24px; display: block;margin-bottom: -15px;"> 50%</b>');
            $('.box-tooltip-btn').html('Uzyskaj NeoVeris ze zniżką');
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



$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});





let showCommentForm = document.getElementById('commnetCreate');
let commentFormWrapper = document.getElementById('commnetCreateWrapper');
let form = document.getElementById('commentForm');
let name = document.getElementById('commentName');

let city = document.getElementById('commentCity');
let age = document.getElementById('commentAge');
let text = document.getElementById('commentText');
let btn = document.getElementById('commentButton');
let notice = document.getElementById('commentNotice');
let message = document.getElementById('commentMessage');
let commentImage = document.getElementById('commentImage');
let createCommentImage = document.getElementById('createCommentImage');
commentImage.addEventListener('change', function (event) {
    event.preventDefault();
    if (commentImage.value) {
        document.getElementById('commentFoto').innerHTML = 'Zdjęcie przesłane';
        createCommentImage.classList.add("added");
    } else {
        document.getElementById('commentFoto').innerHTML = 'Załącz zdjęcie';
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

function openImg(e) {
    const target = e.target;
    if (target.classList.contains("first") || target.classList.contains("second")) {
        const parent = target.parentNode.parentNode;
        parent.classList.toggle("show");
    }
    }

    document.addEventListener("click", openImg);

var firstStartButton = document.querySelector('#start');
var answerButtons = document.querySelectorAll('.answer');

var previousSlideButton = document.querySelectorAll('.prev');
var simptomsButtons = document.querySelectorAll('.simptom');
var chooseSex = document.querySelectorAll('.simptom2');
var screens = document.querySelectorAll('.screen');
var curentScreen = 0;


const questionLine = document.querySelector('.question__numbers')
const questionLineMobile = document.querySelector('.question__numbers-mobile')
const currentQuestion = questionLineMobile.querySelector('#current')
const chatContainer = document.querySelector('.wrapper-chat')
const simptomNext = document.querySelector('#simptomNext')
const simptomNotice = document.querySelector('.simptom-notice')


window.onload = function () {
    for (let i = 0; i < screens; i++) {
        screens[i].classList.remove('used')
        screens[i].classList.remove('active')
    }
    document.querySelector('#screen0').classList.add('active');

}

firstStartButton.addEventListener('click', validation)
simptomNext.addEventListener('click', validationSimptom)

function validation(){
    if (document.querySelector('#sex').classList.contains('active')
        && (document.querySelector('#age').value )
        && document.querySelector('#weight').value ){
        document.querySelector('.notice').classList.remove('active')
        slideNext()
    }else{
        document.querySelector('.notice').classList.add('active')
    }

}

for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener('click', chooseOption)
}

for (let i = 0; i < previousSlideButton.length; i++) {
    previousSlideButton[i].addEventListener('click', slidePrev)
}

for (let i = 0; i < simptomsButtons.length; i++) {
    simptomsButtons[i].addEventListener('click', chooseMultiplyOption)
}
for (let i = 0; i < chooseSex.length; i++) {
    chooseSex[i].addEventListener('click', chooseSimptom)
}

function validationSimptom() {
    for (let i = 0; i < simptomsButtons.length; i++) {
        if (simptomsButtons[i].classList.contains('choosen')) {
            simptomNotice.classList.remove('active')
            showResult()
            break
        } else {
            simptomNotice.classList.add('active')
        }
    }
}

function showResult() {
    document.querySelector('.test-container').classList.add('hide')
    questionLine.classList.add('hide')
    questionLineMobile.classList.add('hide')
    document.querySelector('#loader').classList.add('active')
    setTimeout(function () {
        document.querySelector('#loader').classList.remove('active')
        document.querySelector('.result').classList.add('active')
    }, 1000)

}



function slidePrev() {
    setTimeout(function () {
        screens[curentScreen].classList.remove('active')
        screens[curentScreen].classList.add('translate')
        screens[curentScreen].classList.add('hidden')
        curentScreen--
        screens[curentScreen].classList.remove('used')
        changerSlides()
    }, 500)
}

function slideNext() {
    screens[curentScreen].classList.add('used')
    screens[curentScreen].classList.remove('active')
    setTimeout(function () {
        screens[curentScreen].classList.add('hidden')
        curentScreen++
        changerSlides()
    }, 500)
}

function changerSlides() {
    screens[curentScreen].classList.add('active')
    screens[curentScreen].classList.remove('translate')
    screens[curentScreen].classList.remove('hidden')

    let dataTurn = screens[curentScreen].getAttribute('data-turn')
    questionLine.classList.remove('hide')
    questionLineMobile.classList.remove('hide')
    currentQuestion.innerHTML = dataTurn
    chatContainer.classList.add('height90')
    for (let i = 0; i < questionLine.childElementCount; i++) {
        questionLine.children[i].classList.remove('active')
    }
    questionLine.children[dataTurn - 1].classList.add('active')


}

function chooseOption() {
    slideNext()
}

function chooseSimptom() {

    for (var i =0;i<chooseSex.length;i++){
        chooseSex[i].classList.remove('choosen')
    }
    this.classList.add('choosen')
    this.parentElement.classList.add('active')
}


function chooseMultiplyOption(){
    this.classList.toggle('choosen')
}


