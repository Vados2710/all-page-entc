var startBtn = document.querySelector('#start');
var next = document.querySelectorAll('.btn__next');
var prev = document.querySelectorAll('.btn__prev');
var answer = document.querySelectorAll('.answer');
var screens = document.querySelectorAll('.screen');
var currentQuestion = document.getElementById('current-question');
var currentQuestion2 = document.getElementById('current-question-mob');
let countQuestion = 0
let screen = 0;
var block1 = 0
var block2 = 0


startBtn.addEventListener('click', slideScreen)


for (let i =0;i<answer.length;i++){
    answer[i].addEventListener('click', chooseOption)
}

for (let i =0;i<next.length;i++){next[i].addEventListener('click', slideScreen)}
for (let i =0;i<prev.length;i++){prev[i].addEventListener('click', slidePrev)}


document.querySelector('.nav').style.display = 'none'

function slidePrev() {
    countQuestion--
    currentQuestion.innerHTML = countQuestion
    currentQuestion2.innerHTML = countQuestion
    setTimeout(function () {

        screens[screen].classList.remove('active')
        screens[screen].classList.add('translate')
        screens[screen].classList.add('hidden')
        screen--
        if ((screen >= 3 && screen <= 6) || (screen >= 8 && screen <= 11) || (screen >= 13 && screen <= 16) || screen === 0 || screen === 22) {

            document.querySelector('.nav').style.display = 'none'
            document.querySelector('.nav').style.pointerEvents = 'none'
        } else {

            document.querySelector('.nav').style.display = 'flex'
            document.querySelector('.nav').style.pointerEvents = 'auto'
        }
        screens[screen].classList.remove('used')
        nextSlide()
    }, 500)
}

function slideScreen() {
    countQuestion++
    currentQuestion.innerHTML = countQuestion
    currentQuestion2.innerHTML = countQuestion
    screens[screen].classList.add('used')
    screens[screen].classList.remove('active')
    setTimeout(function () {
        screens[screen].classList.add('hidden')
        screen++
        if ((screen >= 3 && screen <= 6) || (screen >= 8 && screen <= 11) || (screen >= 13 && screen <= 16) || screen === 0 || screen === 22) {
            document.querySelector('.nav').style.display = 'none'
            //document.querySelector('#screen'+screen).classList.add('h100')
            document.querySelector('.nav').style.pointerEvents = 'none'
        } else {
            document.querySelector('.nav').style.display = 'flex'
            document.querySelector('.nav').style.pointerEvents = 'auto'
        }
        nextSlide()
    }, 500)
}

function nextSlide() {
    window.scrollBy(0, -100);
    screens[screen].classList.add('active')
    screens[screen].classList.remove('translate')
    screens[screen].classList.remove('hidden')


    if (screen === 7 && block2 > block1) {
        $('#screen7 .block-1').css('display', 'none')
        $('#screen7 .block-2').css('display', 'block')
    } else if (screen === 7 && block1 >= block2) {
        $('#screen7 .block-2').css('display', 'none')
        $('#screen7 .block-1').css('display', 'block')
    }
    if (screen === 12 && block2 > block1) {
        $('#screen12 .block-1').css('display', 'none')
        $('#screen12 .block-2').css('display', 'block')
    } else if (screen === 12 && block1 >= block2) {
        $('#screen12 .block-2').css('display', 'none')
        $('#screen12 .block-1').css('display', 'block')
    }


    if (screen === 17 && block2 > block1) {
        $('#screen17 .block-1').css('display', 'none')
        $('#screen17 .block-2').css('display', 'block')
    } else if (screen === 17 && block1 >= block2) {
        $('#screen17 .block-2').css('display', 'none')
        $('#screen17 .block-1').css('display', 'block')

    }
}

function chooseOption() {
    if (this.dataset.number === 'bad') {
        block1++
    }
    if (this.dataset.number === 'good') {
        block2++
    }
    slideScreen()
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





