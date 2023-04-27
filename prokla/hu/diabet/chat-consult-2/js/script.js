'use strict';
var block1 = 0
var block2 = 0
var user = detect.parse(navigator.userAgent);
var path = window.cdn_path || '';
var currentMessage = 0;
var currentMessageLink = 1;
var process = true;
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
    {message: '23'}, {message: '24'},
    {message: '25'}, {message: '26'},
    {message: '27'},
    {message: '28'}
];

console.log(messages.length);
var start = setInterval(function () {
    if (process) {
        console.log(currentMessage)
        if (currentMessage !== messages.length) {
            if (currentMessage == 0) {
                process = false;
                appStart()
                startNext()
            }else if (currentMessage == 1) {
                process = false;
                generatorQuestion(['Felmérés indítása']);
                questionNext();
            }
            else if (currentMessage == 2) {
                process = false;
                generatorQuestion(['Férfi', 'Nő']);
                questionNext();
            } else if (currentMessage == 3) {
                process = false;
                generatorQuestion(['30 éven aluli', '30 és 50 között', '50 és 65 között', '65 éven felüli']);
                questionNext();
            } else if (currentMessage == 4) {
                process = false;
                generatorQuestion(['Van egy pár fölös kilóm', 'Vékony testalkatú vagyok', 'Túlsúlyos vagyok']);
                questionNext();
            } else if (currentMessage == 5) {
                process = false;
                generatorQuestion(['Igyekszem csak az egészséges ételeket fogyasztani', 'Nem figyelek az étrendemre', 'Néha megengedem magamnak']);
                questionNext();
            } else if (currentMessage == 6) {
                process = false;
                generatorQuestion(['Inaktív életmódot élek', 'Rendszeresen sportolok', 'Néha tornázom']);
                questionNext();
            } else if (currentMessage == 7) {
                process = false;
                generatorQuestion(['Felmérés foltatása']);
                questionNext();
            } else if (currentMessage == 8) {
                process = false;
                generatorQuestion(['Igen', 'Nem', 'Nem tudom']);
                questionNext();
            } else if (currentMessage == 9) {
                process = false;
                generatorQuestion(['Igen', 'Nem', 'Nem tudom']);
                questionNext();
            } else if (currentMessage == 10) {
                process = false;
                generatorQuestion(['Igen', 'Nem', 'Nem tudom']);
                questionNext();
            } else if (currentMessage == 11) {
                process = false;
                generatorQuestion(['Felmérés foltatása']);
                questionNext();
            } else if (currentMessage == 12) {
                process = false;
                generatorQuestion(['Nagyon gyakran', 'Nagyon ritkán', 'Időnként' ], true);
                questionChangeNext();
            } else if (currentMessage == 13) {
                process = false;
                generatorQuestion(['Rendszeresen felkelek és elmegyek a mosdóba', 'Egész éjszaka jól alszom', 'Néha van vizelési ingerem'], true);
                questionChangeNext();
            } else if (currentMessage == 14) {
                process = false;
                generatorQuestion(['Nem romlott', 'Egy kicsit romlott', 'Jelentősen romlott']);
                questionNext();
            } else if (currentMessage == 15) {
                process = false;
                generatorQuestion(['Néha, ha sokáig nem eszem', 'Étkezés után 2-3 órával', 'Gyakran, étkezéstől függetlenül']);
                questionNext();
            } else if (currentMessage == 16) {
                process = false;
                generatorQuestion(['Ritkán', 'Gyakran', 'Állandóan']);
                questionNext();
            } else if (currentMessage == 17) {
                process = false;
                simptomCheck(['Gyakori vizelés', 'Fokozott szomjúság', 'Gyors fogyás vagy hízás', 'A végtagok zsibbadása és bizsergése',
                    'Lassú sebgyógyulás', 'Állandó apátia, erőtlenség']);
                simptomNext();
            } else if (currentMessage == 18) {
                process = false;
                generatorQuestion(['Gyakori éhség, gyakori vizelés, fejfájás',
                    'Egészségesnek érzem magam, nincs panaszom' , 'Néha fáj a fejem, gyengeséget érzek'], true);
                questionChangeNext();
            }else if (currentMessage == 24) {
                process = false;
                generatorQuestion(['Folytatás']);
                questionChangeNext();
            }
            else if (currentMessage == 25) {
                process = false;
                generatorQuestion(['Folytatás']);
                questionChangeNext();
            }
            else if (currentMessage == 26) {
                process = false;
                generatorQuestion(['Folytatás']);
                questionChangeNext();
            }

            else {
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
    var body_mas = '<div id="promo" class="writing"><p><span class="dot-animate-1">.</span><span class="dot-animate-2">.</span><span class="dot-animate-3">.</span></p></div>';
    $('.chat-content-list').append(body_mas);
    scrollDown();
}

function showMessage() {
    addMessage();
    var delay = 3000;
    if (currentMessage > 18) {
        delay = 5500;
    }

    setTimeout(function () {

        if (currentMessage == 17 && block2 >= block1){
            $('.block-1').css('display', 'none')
        }else if (currentMessage == 17){
            $('.block-2').css('display', 'none')
        }


        $('#promo').after($('#message' + currentMessage));
        $('#promo').remove();
        $('#message' + currentMessage).removeClass('hidden');
        $('#message' + currentMessage).removeClass('hidden');

        document.querySelector('#message' + currentMessage + ' .time').innerHTML = new Date().toLocaleTimeString([],{
            hour: '2-digit', minute:'2-digit', hour12: false
        })
        
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
    inner += '<div class="chat-content-buttons-question-block chat-content-buttons-question-block-next"><span class="next">Kiválaszatás</span></div></div>';
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

function generatorQuestion(arr, change) {

    $('.chat-content-list').append('<div class="chat-content-buttons-question"></div>');
    var chatContent = document.querySelector('.chat-content-buttons-question');
    if (change === true){
        arr.reverse().forEach(function (el, index) {
            chatContent.insertAdjacentHTML('afterbegin', '\n    <div class="chat-content-buttons-question-block me"  >\n        <span class="answer" data-number="'+ index +'">' + el + '</span>\n    </div>');
        });
        scrollDown();

    }else{
        arr.reverse().forEach(function (el, index) {
            chatContent.insertAdjacentHTML('afterbegin', '\n    <div class="chat-content-buttons-question-block me"  >\n        <span class="answer">' + el + '</span>\n    </div>');
        });
        scrollDown();
    }



}
function questionChangeNext() {

    $('.answer').click(function () {

        console.log(this.dataset.number)
        if (this.dataset.number == 0){
            block1++
        }
        if (this.dataset.number == 2){
            block2++
        }
        $('.chat-content-buttons-question').remove();
        myMassange(this.innerText);
        showMessage();
    });
}
function questionNext() {
    $('.answer').click(function () {
        $('.chat-content-buttons-question').remove();
        myMassange(this.innerText);
        showMessage();
    });
}

function appStart() {
    $('.chat-content-list').append('<button id="start" class="btn__start">Szakember kiválaszatása</button>');
    scrollDown();
}

function startNext() {
    $('#start').click(function () {
        document.querySelector('#start').style.display = 'none';
        searchDoctor();
    });
}





function searchDoctor() {

    document.querySelector('.isShow').style.display = 'block';
    scrollDown();
    setTimeout(function () {
        document.querySelector('.isShow').style.display = 'none';
        document.querySelector('.founded').style.display = 'block';
        scrollDown();
        setTimeout(function (){
            showMessage();
        }, 3000)
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

document.querySelector('.start-date').innerHTML = addDays(new Date(), 1).toLocaleString('ru', options);


setTimeout(function () {
    var preloader = $('.preloader');
    if (!preloader.hasClass('hide')) {
        preloader.addClass('hide');
        setTimeout(function (){
            preloader.addClass('z-0');
        },500)
    }
}, 2000);





