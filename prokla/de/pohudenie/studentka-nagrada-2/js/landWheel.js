var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');
document.querySelector('#spin').addEventListener('click', spin, {once: true})
function spin() {
    if (wheel.classList.contains('rotated')) {
        resultWrapper.style.display = "block";
    } else {
        wheel.classList.add('super-rotation');
        setTimeout(function () {
            resultWrapper.style.display = "block";
        }, 8000);
        setTimeout(function () {
            $('.spinner-content').slideUp();
            $('#orderForm').slideDown();
            start_timer();
        }, 10000);
        wheel.classList.add('rotated');
    }
}

var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();
    $('#form').fadeIn();

});

function outputDat(m, fullM) {
    var d = new Date();
    var p = new Date(d.getTime() - m * 86400000);
    var monthA = (fullM === false) ? '01,02,03,04,05,06,07,08,09,10,11,12'.split(',') : 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
    var w = p.getDate();
    var ret = (fullM === false) ? p.getDate() + '.' + monthA[p.getMonth()] + '.' + p.getFullYear() : p.getDate() + ' ' + monthA[p.getMonth()] + ' ' + p.getFullYear();
    return ret;
}
let time = 600;
let intr;
let count = 0;

function start_timer() {
    count++
    if (count === 1) {
        intr = setInterval(tick, 1000);
        count++
    } else {
        return false
    }
};

function tick() {
    time = time - 1;
    let mins = Math.floor(time / 60);
    let secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
        clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0" + secs;
    document.querySelector('#min').innerHTML = "" + mins;
    document.querySelector('#sec').innerHTML = secs
}
