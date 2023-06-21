'use strict';

var user = detect.parse(navigator.userAgent);
var path = window.cdn_path || '';
var currentMessage = 0;
var currentMessageLink = 1;
var process = true;
var sound = document.getElementById('sound');
var startBtn = document.getElementById('start');
var messages = [
    {message: '0'},
    {message: '1'},
    {message: '2'},
    {message: '3'},
    {message: '4'},
    {message: '5'},
    {message: '6'},
    {message: '7'}, {message: '8'},
    {message: '9'}, {message: '10'},
    {message: '11'}, {message: '12'},
    {message: '13'}, {message: '14 '},
    {message: '15'}, {message: '16'},
    {message: '17'}, {message: '18'},
    {message: '19'}, {message: '20'},
    {message: '21'}, {message: '22'},
    {message: '23'},
];

console.log(messages.length);
var start = setInterval(function () {
    if (process) {
        if (currentMessage !== messages.length) {
            if (currentMessage == 0) {
                process = false;
                appStart();
                startNext();
            } else if (currentMessage == 3) {
                process = false;
                generatorQuestion(['Odpovězte na otázky']);
                questionNext();
            } else if (currentMessage == 4) {
                process = false;
                generatorQuestion(['Méně než 30 let', '30 až 50 let', 'Více než 50 let']);
                questionNext();
            } else if (currentMessage == 5) {
                process = false;
                generatorQuestion(['Nikdy', 'Občas', 'Skoro vždycky']);
                questionNext();
            } else if (currentMessage == 6) {
                process = false;
                generatorQuestion(['Nikdy', 'Občas','Asi při polovině močení', 'Skoro vždycky']);
                questionNext();
            } else if (currentMessage == 7) {
                process = false; // simptomCheck();

                simptomCheck(['Bolest v perineu', 'Časté nutkání močit', 'Problémy s potenci', 'Silná bolest v konečníku/penisu',
                    'Zakalená moč', 'Zvýšená teplota', 'Zimnice','Křeče při močení']);
                simptomNext();
            } else if (currentMessage == 8) {
                process = false;
                generatorQuestion(['Nikdy', 'Jednou za den','Asi při polovině močení', 'Skoro vždycky']);
                questionNext();
            } else if (currentMessage == 9) {
                process = false;
                generatorQuestion(['Nikdy', 'Jednou za noc','Dvakrát za noc ', 'Třikrát nebo více']);
                questionNext();
            } else if (currentMessage == 10) {
                process = false;
                generatorQuestion(['Ano', 'Ne']);
                questionNext();
            } else if (currentMessage == 11) {
                process = false;
                generatorQuestion(['Ano', 'Ne']);
                questionNext();
            } else if (currentMessage == 12) {
                process = false;
                generatorQuestion(['Přečtěte si doporučení']);
                questionNext();
            } else {
                process = false;
                showMessage();
            }
        } else {
            clearInterval(start);
            showForm();
            process = false;
        }
    }
}, 1000);

function addMessage() {
    var body_mas = '<div id="promo" class="writing"><p>Richard Kopeček píše zprávu<span class="dot-animate-1">.</span><span class="dot-animate-2">.</span><span class="dot-animate-3">.</span></p></div>';
    $('.chat-content-list').append(body_mas);
    scrollDown();
}

function showMessage() {
    addMessage();

    var delay = 4500;
    if (currentMessage > 12){
        delay = 10000
    }


    setTimeout(function () {
        $('#promo').after($('#message' + currentMessage));
        $('#promo').remove();
        $('#message' + currentMessage).removeClass('hidden');

        if (user.browser.family === 'IE') {
            sound.play();
        } else {
            sound.play().catch(function (error) {
            });
        }

        currentMessage++;
        process = true;
    }, delay);
    scrollDown();
}

function simptomCheck(arr) {
    var inner = '<div class="chat-content-buttons-question chat-content-buttons-question1">';
    arr.reverse().forEach(function (el, index) {
        inner += '<div class="chat-content-buttons-question-block simptom"><span class=index >' + el + '</span></div>';
    });
    inner += '<div class="chat-content-buttons-question-block chat-content-buttons-question-block-next"><span class="next">Vybrat</span></div></div>';
    $('.chat-content-list').append(inner);
    $('.simptom').click(function () {
        $(this).toggleClass('choiced');
    });
    scrollDown();
}

function simptomNext() {
    $('.next').click(function () {
        var count = 0;
        var simptoms = document.querySelectorAll('.choiced');
        var arr = '';

        for (let i = 0; i < simptoms.length; i++) {
            arr += simptoms[i].innerText + ', ';
        }

        $('.chat-content-buttons-question').remove();
        myMassange(arr.substring(0, arr.length - 2) + '');
        showMessage();
    });
}

function generatorQuestion(arr) {
    $('.chat-content-list').append('<div class="chat-content-buttons-question"></div>');
    var chatContent = document.querySelector('.chat-content-buttons-question');
    arr.reverse().forEach(function (el) {
        chatContent.insertAdjacentHTML('afterbegin', '\n    <div class="chat-content-buttons-question-block me">\n        <span class="answer">' + el + '</span>\n    </div>');
    });
    scrollDown();
}

function questionNext() {
    $('.answer').click(function () {
        $('.chat-content-buttons-question').remove();
        myMassange(this.innerText);
        showMessage();
    });
}

function appStart() {
    $('.chat-content-list').append('<button id="start" class="btn__start">Najít odborníka</button>');
    scrollDown();
}

function startNext() {
    $('.btn__start').click(function () {
        document.querySelector('.btn__start').style.display = 'none';
        searchDoctor();
    });
}

function searchDoctor() {
    document.querySelector('.isShow').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.isShow').style.display = 'none';
        document.querySelector('.founded').style.display = 'block';
        showMessage();
    }, 2000);
}

function myMassange(userGend) {
    var mass = '<div class="user-answer-wrap"><div class="chat-content-item user "><div class="chat-content-desc"><div class="chat-content-desc-item user"><p>' + userGend + '</p></div></div></div></div>';
    $('.chat-content-list').append(mass);
    scrollDown();
}

function showForm() {
    var a1 = document.querySelectorAll('.chat-content-item')[document.querySelectorAll('.chat-content-item').length - 1];
    var b1 = document.querySelector('.form-order');
    a1.insertAdjacentElement('afterEnd', b1);
    b1.style.display = "block";
    scrollDown();
}

function scrollDown() {
    var wrap = $('.chat-content-container'),
        wrapHeight = wrap.height(),
        currentHeight = wrap.scrollTop(),
        wrapScrollHeight = wrap.prop("scrollHeight"),
        desiredHeight = wrapScrollHeight - wrapHeight;

    if (currentHeight < desiredHeight) {
        //window.scrollBy(0,desiredHeight )
        wrap.scrollTop(desiredHeight);
    }
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
}

var options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: 'UTC'
};

document.querySelector('.date').innerHTML = new Date().toLocaleString('ru', options);

document.querySelector('.start-date').innerHTML = addDays(new Date(), 40).toLocaleString('ru', options);