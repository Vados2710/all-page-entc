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
    message: 'Все указывает на то, что у вас простатит. Но не стоит впадать в отчаяние. Есть средство, которое может вам помочь — <span class="productName"></span>. Это натуральные капсулы на основе крапивы, ромашки, клюквы и сосны, которые способны восстановить мужское здоровье. '
}, {
    message: '<span class="productName"></span> помогает: — устранить боли в тазу и промежности;\n' + '— нормализовать позывы к мочеиспусканию;\n' + '— улучшить качество сексуальной жизни.\n'
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
                generatorQuestion(['Méně než 30 let', '30 až 50 let', 'Více než 50 let']);
                questionNext();
            } else if (currentMessage == 5) {
                process = false;
                generatorQuestion(['Nikdy', 'Jednou denně', 'Asi v polovině případů při močení', 'Skoro pořád']);
                questionNext();
            } else if (currentMessage == 6) {
                process = false;
                generatorQuestion(['Nikdy', 'Jednou denně', 'Asi v polovině případů při močení', 'Skoro pořád']);
                questionNext();
            } else if (currentMessage == 7) {
                process = false;
                generatorQuestion(['Nikdy', 'Jednou denně', 'Asi v polovině případů při močení', 'Skoro pořád']);
                questionNext();
            } else if (currentMessage == 8) {
                process = false;
                generatorQuestion(['Nikdy', 'Jednou denně', 'Asi v polovině případů při močení', 'Skoro pořád']);
                questionNext();
            } else if (currentMessage == 9) {
                process = false;
                generatorQuestion(['Nikdy', 'Jednou denně', 'Asi v polovině případů při močení', 'Skoro pořád']);
                questionNext();
            } else if (currentMessage == 10) {
                process = false;
                generatorQuestion(['Ano ', 'Ne']);
                questionNext();
            } else if (currentMessage == 11) {
                process = false;
                generatorQuestion(['Ano ', 'Ne']);
                questionNext();
            } else if (currentMessage == 12) {
                process = false;
                generatorQuestion(['Přečtěte si doporučení']);
                questionNext();
            } else if (currentMessage == 16) {
                process = false;
                generatorQuestion(['Jak učinné to je?']);
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
    var body_mas = '<div id="promo" class="writing"><p>Karl Bauer píše <span class="dot-animate-1">.</span><span class="dot-animate-2">.</span><span class="dot-animate-3">.</span></p></div>';
    $('.chat-content-list').append(body_mas);
    scrollDown();
}

function showMessage() {

    addMessage();
    var delay = messages[currentMessage].message.length * 1;
    //var delay = 10;
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

console.log(navigator.appName)





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
    $('.chat-content-list').append('<button id="start" class="btn__start">Odpovězte na otázky</button>');
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
const offer_params = {
    priceMain : '890',
    customPriceOld: '',//вказуєм свою стару ціну якщо не підходить звичайна ціна *2
    currencyMain: 'Kč',
    productName : 'Urotrin',
};


var productName = document.getElementsByClassName("productName");
var priceMain = document.getElementsByClassName("priceMain");
var priceOld = document.getElementsByClassName("priceOld");
var currencyMain = document.getElementsByClassName("currencyMain");


for (var i = 0; i < productName.length; i++) {
    productName[i].innerHTML = offer_params.productName;
}
for (var i = 0; i < priceMain.length; i++) {
    priceMain[i].innerHTML = offer_params.priceMain;
}


if(offer_params.customPriceOld){
    for (var i = 0; i < priceOld.length; i++) {
        priceOld[i].innerHTML = offer_params.customPriceOld;
    }
}else{
    for (var i = 0; i < priceOld.length; i++) {
        priceOld[i].innerHTML = offer_params.priceMain * 2;
    }
}


for (var i = 0; i < currencyMain.length; i++) {
    currencyMain[i].innerHTML = offer_params.currencyMain;
}
