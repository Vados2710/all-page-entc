'use strict';

var user = detect.parse(navigator.userAgent);
var path = window.cdn_path || '';
var currentMessage = 0;
var currentMessageLink = 1;
var process = true;
var sound = document.getElementById('sound');
var startBtn = document.getElementById('start');

var messages = [{
    message: 'Добрый день.\n' + 'Меня зовут Martina Gedeck, я эксперт в области повышенного давления\n'
}, {
    message: 'За моими плечами многолетний опыт и тысячи благодарных клиентов. Я провожу онлайн-консультации для людей с признаками гипертонии. У вас есть возможность узнать, как бороться с этим недугом, устранить неприятные симптомы и улучшить самочувствие.'
}, {
    message: 'Для этого я попрошу Вас ответить на несколько простых вопросов.”'
}, {
    message: 'Сколько вам лет?'
}, {
    message: 'Как часто у вас появляется пульсирующая боль в голове?'
}, {
    message: 'Были случаи инсульта и инфаркта в вашей семье?'
}, {
    message: 'Отметьте симптомы, которые вас беспокоят'
}, {
    message: 'Как часто у вас повышается давление?'
}, {
    message: 'Как часто у вас бывает учащенный ритм сердца?'
}, {
    message: 'Оцените общее состояние вашего организма'
}, {
    message: 'Вам важно, чтобы состав средства от гипертонии был максимально натуральным?'
}, {
    message: 'Вы готовы регулярно принимать дорогостоящие средства от гипертонии? '
}, {
    message: 'Спасибо, что ответили на вопросы.'
}, {
    message: 'Ваш результат говорит о том, что гипертония уже имеет огромное влияние на вашу жизнь. К сожалению, если вы не примете меры, состояние вашего здоровья будет только ухудшаться.'
}, {
    message: 'Вам следует пересмотреть свой образ жизни: отказаться от курения и употребления алкогольных напитков, фастфуда и жирной пищи, употреблять как можно больше свежих фруктов и овощей, заниматься физическими упражнениями.'
}, {
    message: 'Однако для улучшения самочувствия правильного образа жизни недостаточно. Вам необходимо средство, способствующее нормализации артериального давления и снятию признаков гипертонии.'
}, {
    message: 'Последней уникальной разработкой специалистов в области сердечно-сосудистых заболеваний, показавшей наилучшие результаты, является средство <span class="productName"></span>.'
}, {
    message: '<picture><source media="(max-width: 600px)" srcset="' + path + 'images/tov_mob.webp" type="image/webp"><source media="(max-width: 600px)" srcset="' + path + 'images/tov_mob.png"><source srcset="' + path + 'images/tov.webp" type="image/webp"><img src="' + path + 'prod.png">'
}, {
    message: '<span class="productName"></span> – специальные капсулы, которые помогают регулировать работу сердечно-сосудистой системы. В составе продукта три уникальных природных компонента, работающих в синергии друг с другом: боярышник однопестичный, мелисса лекарственная и экстракт чеснока. '
}, {
    message: '<ul> <li> артериальное давление нормализовалось — у 97% респондентов;</li> <li>  снизился уровень холестерина в крови — у 95% покупателей;</li> <li> исчезла головная боль — 98%;</li><li> улучшилось зрение — 94%;</li><li> почувствовали прилив сил — 99%.</li></ul> '
}, {
    message: 'Вот полученные результаты на графике:'
}, {
    message: 'График'
}, {
    message: 'Из-за сильного спроса, участились случаи подделки средства, поэтому дистрибьютор убрал его из аптек. Заказать продукт можно сразу на официальном сайте.'
}, {
    message: 'Сейчас действует скидка — 50% с (дата - 1 месяц) по (сегодня).'
}, {
    message: 'ЗАКАЗАТЬ <span class="productName"></span></div>.'
}];
var start = setInterval(function () {
    if (process) {
        if (currentMessage !== messages.length) {
            if (currentMessage == 4) {
                process = false;
                // appGender();
                // genderNext();
                generatorQuestion(['30 év alatt', '30 és 50 év között', '50 év felett']);
                questionNext();
            } else if (currentMessage == 5) {
                process = false;
                generatorQuestion(['Ritkán', '2-4 alkalommal egy héten', '2-4 alkalommal egy hónapban']);
                questionNext();
            } else if (currentMessage == 6) {
                process = false;
                generatorQuestion(['Igen', 'Nem', 'Nemtudom']);
                questionNext();
            } else if (currentMessage == 7) {
                process = false;
                simptomCheck();
                simptomNext();
            } else if (currentMessage == 8) {
                process = false;
                generatorQuestion(['2-4 alkalommal egy hónapban', '2-4 alkalommal egy héten', 'Nem mérem a vérnyomásom']);
                questionNext();
            } else if (currentMessage == 9) {
                process = false;
                generatorQuestion(['Gyakran ', 'Ritkán', 'Nemtudom']);
                questionNext();
            } else if (currentMessage == 10) {
                process = false;
                generatorQuestion(['Gyakori fáradtság, energiahiány', 'Néha az egész testemben gyengeséget érzek', 'Semmi kritikus']);
                questionNext();
            } else if (currentMessage == 11) {
                process = false;
                generatorQuestion(['Igen ', 'Nem']);
                questionNext();
            } else if (currentMessage == 12) {
                process = false;
                generatorQuestion(['Igen ', 'Nem']);
                questionNext();
            } else if (currentMessage == 13) {
                process = false;
                generatorQuestion(['Megnézni az eredményeket']);
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
    var body_mas = '<div id="promo" class="writing"><p>Martina Gedeck gépel egy üzenetet <span class="dot-animate-1">.</span><span class="dot-animate-2">.</span><span class="dot-animate-3">.</span></p></div>';
    $('.chat-content-list').append(body_mas);
    scrollDown();
}

function showMessage() {

    addMessage();
    var delay = messages[currentMessage].message.length * 50;
    //let delay = 10;
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

function generatorQuestion(arr) {
    console.log(arr);
    $('.chat-content-list').append('<div class="chat-content-buttons-question"></div>');
    var chatContent = document.querySelector('.chat-content-buttons-question');
    arr.forEach(function (el) {
        chatContent.insertAdjacentHTML('afterbegin', '\n    <div class="chat-content-buttons-question-block">\n        <span class="answer">' + el + '</span>\n    </div>\n');
    });

    scrollDown();
}

function questionNext() {
    $('.answer').click(function () {
        // document.querySelector('.chat-content-buttons-question').style.display = 'none';
        $('.chat-content-buttons-question').remove();
        myMassange(this.innerText);
        showMessage();
    });
}

function simptomCheck() {
    $('.chat-content-list').append('<div class="chat-content-buttons-question chat-content-buttons-question1">' + '<div class="chat-content-buttons-question-block simptom"><span class="simptom1">Légszomj</span></div>' + '<div class="chat-content-buttons-question-block simptom"><span class="simptom2">Fülzúgás</span></div>' + '<div class="chat-content-buttons-question-block simptom"><span class="simptom3">Fájdalmak a szív környékén</span></div>' + '<div class="chat-content-buttons-question-block simptom"><span class="simptom4">Acrpirosodás</span></div>' + '<div class="chat-content-buttons-question-block simptom"><span class="simptom5">Izzadság</span></div>' + '<div class="chat-content-buttons-question-block simptom"><span class="simptom6">Szédülés</span></div>' + '<div class="chat-content-buttons-question-block chat-content-buttons-question-block-next"><span class="next">További</span></div></div>');

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
        wrap.scrollTop(desiredHeight);
    }
}
var date = new Date(),
    y = date.getFullYear(),
    m = date.getMonth();
var firstDay = new Date(y, m, 1);

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