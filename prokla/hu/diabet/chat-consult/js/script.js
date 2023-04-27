'use strict';

var user = detect.parse(navigator.userAgent);
var path = window.cdn_path || '';
var currentMessage = 0;
var currentMessageLink = 1;
var process = true;
var sound = document.getElementById('sound');
var startBtn = document.getElementById('start');
var resultCount = 0;
var messages = [
    {message: '0'},
    {message: '1'},
    {message: '2'},
    {message: '3'},
    {message: '4'},
    {message: '5'},
    {message: '6'},
    {message: '7'}, 
    {message: '8'},
    {message: '9'}, 
    {message: '10'},
    {message: '11'}, 
    {message: '12'},
    {message: '13'}, 
    {message: '14'},
    {message: '15'}, 
    {message: '16'},
    {message: '17'}, 
    {message: '18'},
    {message: '19'}, 
    {message: '20'},
    {message: '21'}, 
    {message: '22'},
    {message: '23'}, 
    {message: '24'},
    {message: '25'},
    {message: '26'},
    {message: '27'},
    {message: '28'},
    {message: '29'},
    {message: '30'},
    {message: '31'},
    {message: '32'}
];

var start = setInterval(function () {
    if (process) {
        if (currentMessage !== messages.length) {
            if (currentMessage == 0) {
                process = false;
                appStart();
                startNext();
            } else if (currentMessage == 6) {
                process = false;
                generatorQuestion(['Férfi', 'Nő']);
                questionNext();
            } else if (currentMessage == 7) {
                process = false;
                generatorQuestion(['30 éven aluli', '30 és 50 között', '50 és 65 között', '65 éven felüli']);
                questionNext();
            } else if (currentMessage == 8) {
                process = false;
                generatorQuestion(['Van egy pár fölös kilóm', 'Vékony testalkatú vagyok', 'Túlsúlyos vagyok']);
                questionNext();
            } else if (currentMessage == 9) {
                process = false;
                generatorQuestion(['Igyekszem csak az egészséges ételeket fogyasztani', 'Nem figyelek az étrendemre', 'Néha megengedem magamnak']);
                questionNext();
            } else if (currentMessage == 10) {
                process = false;
                generatorQuestion(['Inaktív életmódot élek', 'Rendszeresen sportolok', 'Néha tornázom']);
                questionNext();
            } else if (currentMessage == 12) {
                process = false;
                generatorQuestion(['Igen', 'Nem', 'Nem tudom']);
                questionNext();
            } else if (currentMessage == 13) {
                process = false;
                generatorQuestion(['Nagyon gyakran', 'Nagyon ritkán', 'Időnként']);
                questionNext();
            } else if (currentMessage == 14) {
                process = false;
                generatorQuestion(['Rendszeresen felkelek és elmegyek a mosdóba', 'Egész éjszaka jól alszom', 'Néha van vizelési ingerem']);
                questionNext();
            } else if (currentMessage == 15) {
                process = false;
                generatorQuestion(['Nem romlott', 'Egy kicsit romlott', 'Jelentősen romlott']);
                questionNext();
            } else if (currentMessage == 16) {
                process = false;
                generatorQuestion(['Néha, ha sokáig nem eszem', 'Étkezés után 2-3 órával', 'Gyakran, étkezéstől függetlenül']);
                questionNext();
            } else if (currentMessage == 17) {
                process = false;
                simptomCheck(['Gyakori vizelés', 'Fokozott szomjúságérzet', 'Gyors, ok nélküli fogyás vagy súlygyarapodás', 'Végtagzsibbadás és bizsergés', 'A sebek lassú begyógyulása', 'Állandó apátia']);
                simptomNext();
            } else if (currentMessage == 18) {
                process = false;
                generatorQuestion(['Az eredmény']);
                resultTest();
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
    var body_mas = '<div id="promo" class="writing"><p>Stefan Mayer gépel<span class="dot-animate-1">.</span><span class="dot-animate-2">.</span><span class="dot-animate-3">.</span></p></div>';
    $('.chat-content-list').append(body_mas);
    scrollDown();
}

function resultTest () {
    if (resultCount >= 0) {
        $('#res1').html('Válaszai alapján azt állíthatom, hogy valószínűleg a cukorbetegség már erős hatással van az életére. Sajnos, ha nem tesz semmit, az egészsége egyre jobban fog romlani. A probléma figyelmen kívül hagyása szívrohamhoz, stroke-hoz és impotenciához, májkárosodáshoz, vesekárosodáshoz és látásromláshoz vezethet.');
        $('#res2').html('A vércukorszint normalizálása érdekében javasoljuk, hogy:<br> - végezzen fizikai aktivitást;<br> - zárjon ki sós, zsíros, sült ételeket és édességeket;<br> - mondjon le rossz szokásokról.');
        $('#res3').html('A közérzet javításához azonban nem elég csak a megfelelő életmódot folytatni. Szüksége van egy készítményre, amely elősegíti a vércukorszint normalizálását és a cukorbetegség szövődményeinek megelőzését. Javaslom, hogy szedje a <strong><span class="productName"></span></strong>.');
    } else {
        $('#res1').html('Az eredmény szerint nagy esélye van a 2-es típusú cukorbetegség kialakulására. A helyzet súlyosbodásának megakadályozása érdekében az életmód módosítása javasolt könnyű testmozgás és egészséges étrend mellett.');
        $('#res2').html('A probléma hosszú távú elhanyagolása a máj és a vesék ereinek károsodásához, neurológiai rendellenességekhez, intim problémákhoz, látáskárosodáshoz, beleértve a vakságot is, és a lágyszövetek lassabb regenerációjához vezethet, amely üszkösödést idézhet elő.');
        $('#res3').html('Válaszai alapján a legjobb készítmény a cukorbetegség megelőzésére és a betegség jeleinek kiküszöbölésére a <strong><span class="productName"></span></strong>.');
    }
}

function showMessage() {
    addMessage();

    var delay = 3000;

    setTimeout(function () {
        $('#promo').after($('#message' + currentMessage));
        $('#promo').remove();
        $('#message' + currentMessage).removeClass('hidden');

        if (user.browser.family === 'IE') {
            sound.play();
        } else {
            sound.play().catch(function (error) {});
        }

        currentMessage++;
        process = true;
    }, delay);
    scrollDown();
}

function simptomCheck(arr) {
    var inner = '<div class="chat-content-buttons-question chat-content-buttons-question1">';
    arr.reverse().forEach(function (el, index) {
        inner += '<div class="chat-content-buttons-question-block simptom"><span class=index >'+ el +'</span></div>';
    });
    inner += '<div class="chat-content-buttons-question-block chat-content-buttons-question-block-next"><span class="next">Tovább</span></div></div>';
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
        switch (this.innerText) {
            case 'Túlsúlyos vagyok' :
            case 'Nagyon gyakran' :
            case 'Rendszeresen felkelek és elmegyek a mosdóba' :
            case 'Egy kicsit romlott' :
            case 'Jelentősen romlott' :
            case 'Gyakran, étkezéstől függetlenül' :
                resultCount++;
                break;
            case 'Van egy pár fölös kilóm' :
            case 'Nem figyelek az étrendemre' :
            case 'Inaktív életmódot élek' :
            case 'Időnként ' :
            case 'Néha van vizelési ingerem' :
                resultCount--;
                break;
        }
        showMessage();
    });
}

function appStart() {
    $('.chat-content-list').append('<button id="start" class="btn__start">Szakember kereső</button>');
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
    setTimeout(function() {
        document.querySelector('.isShow').style.display = 'none';
        document.querySelector('.founded').style.display = 'block';
        showMessage();
    }, 2000);
}

function myMassange(text) {
    var mass = '<div class="user-answer-wrap"><div class="chat-content-item user "><div class="chat-content-desc"><div class="chat-content-desc-item user"><p>' + text + '</p></div></div></div></div>';
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

const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) nodeList[i].innerHTML = defaultDate } function addZero(numb){return numb<10?'0'+numb:numb} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}