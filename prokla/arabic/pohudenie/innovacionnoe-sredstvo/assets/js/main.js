var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');

function spin() {
    if (wheel.classList.contains('rotated')) {
        resultWrapper.style.display = "block";
    } else {
        wheel.classList.add('super-rotation');
        setTimeout(function() {
            resultWrapper.style.display = "block";
        }, 8000);
        setTimeout(function() {
            var spinLinks = document.getElementsByTagName('a');
            var spinHref = spinLinks[0].href;
            window.open(spinHref);
        }, 10000);
        wheel.classList.add('rotated');
    }
}
var closePopup = document.querySelector('.close-popup');
closePopup.onclick = function() {
    resultWrapper.style.display = "none";
}


var offerLink = ''; // <-- ссылка на трекер
var vitrina = '';
var isPopup = false;
var msgText = ''; // <-- Заголовок Попап
var lnkUrl = ''; // <-- ссылка на трекер
var lnkTxt = ''; // <-- Текст ссылки
var comeBack = true;
var jsCity = false;