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

function validation() {
    if (document.querySelector('#sex').classList.contains('active') &&
        (document.querySelector('#age').value < 150) &&
        (document.querySelector('#weight').value > 10) &&
        (document.querySelector('#weight').value < 400)
    ) {
        document.querySelector('.notice').classList.remove('active')
        slideNext()
    } else {
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

    for (var i = 0; i < chooseSex.length; i++) {
        chooseSex[i].classList.remove('choosen')
    }
    this.classList.add('choosen')
    this.parentElement.classList.add('active')
}


function chooseMultiplyOption() {
    this.classList.toggle('choosen')
}