'use strict';
var user = detect.parse(navigator.userAgent);
var path = window.cdn_path || '';
var currentMessage = 0;
var currentMessageLink = 1;
var process = true;
var sound = document.getElementById('sound');
var startBtn = document.getElementById('start');

var messages = [{
    message: '\n' + 'Здравствуйте! Меня зовут Карл Бауэр. \n'
}, {
    message: 'Я практикующий специалист по мужскому здоровью и провожу онлайн-консультации.'
}, {
    message: 'Часто мужчины не могут справиться со своими проблемами, потому что проходят неправильную терапию. Моя задача — подобрать средство для каждого и помочь устранить симптомы заболевания. \n' + 'Ответьте на несколько вопросов, чтобы я мог вам помочь. Это абсолютно бесплатно и анонимно.”'
}, {
    message: 'Сколько вам лет?'
}, {
    message: 'Как часто в течение последнего месяца после мочеиспускания у вас возникало ощущение неполного опорожнения мочевого пузыря?'
}, {
    message: 'Как часто возникала потребность мочиться раньше, чем через 2 часа после предыдущего похода в туалет?'
}, {
    message: 'Как часто мочеиспускание было прерывистым в течение последнего месяца?'
}, {
    message: 'Как часто вы ощущали слабый напор струи в течение последнего месяца?'
}, {
    message: 'Сколько раз за ночь во время сна приходилось вставать, чтобы помочиться в течение последнего месяца?'
}, {
    message: 'Вы готовы регулярно покупать дорогие средства от простатита?'
}, {
    message: 'Вам важно, чтобы средство от простатита было максимально натуральным?'
}, {
    message: 'Спасибо, что ответили на вопросы! '
}, {
    message: 'Все указывает на то, что у вас простатит. Но не стоит впадать в отчаяние. Есть средство, которое может вам помочь — '+offer_params.productName+'. Это натуральные капсулы на основе крапивы, ромашки, клюквы и сосны, которые способны восстановить мужское здоровье. '
}, {
    message: offer_params.productName + ' помогает: — устранить боли в тазу и промежности;\n' + '— нормализовать позывы к мочеиспусканию;\n' + '— улучшить качество сексуальной жизни.\n'
}, {
    message: 'Средство не вызывает привыкания и, как правило, не оказывает негативного влияния на организм. Это обусловлено грамотно подобранным составом, на основе природных компонентов, которые максимально дополняют действие друг друга. '
}, {
    message: 'Вот результаты опроса 300 покупателей, которые принимали это средство несколько недель:' + '1. Улучшение гормонального фона: тестостерона и альдостерона — важные гормоны для здоровья простаты.' + '2. Устранение инфекции в мочеполовой системе: патогенные бактерии не имеют шансов для жизни.' + '3. Избавление от болей и других неприятных симптомов.' + '4. Нормализация мочеиспускания.' + '5. Нормализация эрекции и повышение желания: половой акт может стать длиннее, а либидо усилится. '
}, {
    message: 'График'
}, {
    message: 'Заказать средство можно через форму заказа. Посетители моей страницы получают скидку 50%.'
}, {
    message: 'Берегите свое здоровье и не допускайте осложнений простатита!'
}, {
    message: 'Мы передали ваши данные дистрибьютору. С вами скоро свяжутся для уточнения адресных данных.'
}];
var start = setInterval(function () {
    if (process) {
        if (currentMessage !== messages.length) {
            if (currentMessage == 3) {
                process = false;
                appStart();
                startNext();
            } else if (currentMessage == 4) {
                process = false;
                generatorQuestion(['Sub 30 de ani', 'Între 30 şi 50 de ani', 'Peste 50 de ani']);
                questionNext();
            } else if (currentMessage == 5) {
                process = false;
                generatorQuestion(['Niciodată', 'O data pe zi', 'Aproximativ la jumătate de urinări', 'Aproape întotdeauna']);
                questionNext();
            } else if (currentMessage == 6) {
                process = false;
                generatorQuestion(['Niciodată', 'O data pe zi', 'Aproximativ la jumătate de urinări', 'Aproape întotdeauna']);
                questionNext();
            } else if (currentMessage == 7) {
                process = false;
                generatorQuestion(['Niciodată', 'O data pe zi', 'Aproximativ la jumătate de urinări', 'Aproape întotdeauna']);
                questionNext();
            } else if (currentMessage == 8) {
                process = false;
                generatorQuestion(['Niciodată', 'O data pe zi', 'Aproximativ la jumătate de urinări', 'Aproape întotdeauna']);
                questionNext();
            } else if (currentMessage == 9) {
                process = false;
                generatorQuestion(['Niciodată', 'O data pe zi', 'Aproximativ la jumătate de urinări', 'Aproape întotdeauna']);
                questionNext();
            } else if (currentMessage == 10) {
                process = false;
                generatorQuestion(['Da ', 'Nu']);
                questionNext();
            } else if (currentMessage == 11) {
                process = false;
                generatorQuestion(['Da ', 'Nu']);
                questionNext();
            } else if (currentMessage == 12) {
                process = false;
                generatorQuestion(['Citiți recomandarea']);
                questionNext();
            } else if (currentMessage == 16) {
                process = false;
                generatorQuestion(['Cât de eficient este']);
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
    var body_mas = '<div id="promo" class="writing"><p>Răzvan Ticulescu scrie mesajul <span class="dot-animate-1">.</span><span class="dot-animate-2">.</span><span class="dot-animate-3">.</span></p></div>';
    $('.chat-content-list').append(body_mas);
    scrollDown();
}

function showMessage() {

    addMessage();
   //var delay = messages[currentMessage].message.length * 50;
    var delay = 10;
    setTimeout(function () {
        $('#promo').after($('#message' + currentMessage));
        $('#promo').remove();
        $('#message' + currentMessage).removeClass('hidden');
        if (user.browser.family === 'IE'){
            sound.play()
        }else{
            sound.play().catch(function (error) {});
        }



        currentMessage++;
        process = true;
    }, delay);
    scrollDown();
}






function generatorQuestion(arr) {
    $('.chat-content-list').append('<div class="chat-content-buttons-question"></div>');
    var chatContent = document.querySelector('.chat-content-buttons-question');
    arr.reverse().forEach(function (el) {
        chatContent.insertAdjacentHTML('afterbegin', '\n    <div class="chat-content-buttons-question-block">\n        <span class="answer">' + el + '</span>\n    </div>');
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

function appStart() {
    $('.chat-content-list').append('<button id="start" class="btn__start">Răspundeţi la întrebări </button>');
    scrollDown();
}
function startNext() {
    $('.btn__start').click(function () {
        document.querySelector('.btn__start').style.display = 'none';
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
    var c1 = document.querySelector('.footer');
    a1.insertAdjacentElement('afterEnd', c1);
    a1.insertAdjacentElement('afterEnd', b1);
    b1.style.display = "block";
    c1.style.display = "block";
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


document.querySelector('.yesterday').innerHTML = addDays(new Date(), 1).toLocaleString('ru', options);