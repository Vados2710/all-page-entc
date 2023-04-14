//ANCHOR
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

// Post Date
const months = ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'],
    monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''],
    days = ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă'],
    daysMin = ['', '', '', '', '', '', ''],
    seasons = ['iarnă', 'arc', 'vară', 'toamnă'];

function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {
    const _counterLength = 60;
    for (let counter = 0; counter < _counterLength; counter++) {
        innerDate(counter, 'date-');
        innerDate(counter, 'date')
    }

    function innerDate(counter, dateType) {
        let newCounter;
        dateType === 'date-' ? newCounter = -counter : newCounter = counter;
        const _msInDay = 86400000,
            _localDate = new Date(Date.now() + (newCounter * _msInDay)),
            _day = _localDate.getDate(),
            _month = _localDate.getMonth() + 1,
            _year = _localDate.getFullYear();
        const dayDefault = addZero(_day),
            monthDefault = addZero(_month),
            defaultDate = dayDefault + '.' + monthDefault + '.' + _year;
        const dateClass = dateType + counter,
            nodeList = document.querySelectorAll('.' + dateClass);
        for (let i = 0; i < nodeList.length; i++) nodeList[i].innerHTML = defaultDate
    }

    function addZero(numb) {
        return numb < 10 ? '0' + numb : numb
    }
}

if (document.body.classList.contains('ev-date')) {
    document.addEventListener("DOMContentLoaded", function () {
        postDate(days, daysMin, months, monthMin, seasons)
    });
}
/* FIX-FIX-FIX */
(function () {
    var breakpoint = 999;

    function checkPosition(selector, container, screenHeight) {
        //позиционирование попапа по вертикали

        var cont = selector,
            contHeight = cont.offsetHeight;

        if (contHeight > screenHeight) {
            container.style.margin = '40px auto';
        } else {
            var top = (screenHeight - contHeight) / 2;
            container.style.margin = top + 'px auto 20px';
        }
    }

    function modalPosition(screenHeight) {
        //расчет ширины и вывод ее в html, функция вызывается при загрузке страницы, а так же при ресайзе
        var container = document.querySelector('.ever-popup  .ever-popup__inner');
        if (container) {

            var desktop = document.querySelector('#cloneThis'),
                mobile = document.querySelector('#cloneMobileThis');


            if (desktop) {
                checkPosition(desktop, container, screenHeight);
                if (window.innerWidth >= breakpoint) {
                    container.style.width = desktop.offsetWidth + 'px';
                }
                if (!mobile) {
                    container.style.width = desktop.offsetWidth + 'px';
                }
            }
            if (mobile) {
                checkPosition(mobile, container, screenHeight);
                if (window.innerWidth <= breakpoint) {
                    container.style.width = mobile.offsetWidth + 'px';
                }
            }
        }
    }

    var modalBtn = document.querySelectorAll('.ever-popup-btn');
    for (var i = 0; i < modalBtn.length; i++) {
        modalBtn && modalBtn[i].addEventListener('click', function () {
            modalPosition(window.innerHeight);
        });
    }
})();