(function () {
    var linkNav = document.querySelectorAll('[href^="#"]'),
        V = 0.2;
    for (var i = 0; i < linkNav.length; i++) {
        linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
            e.preventDefault(); //отменяем стандартное поведение
            var w = window.pageYOffset,  // производим прокрутка прокрутка
                hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
            t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
                start = null;
            requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
            function step(time) {
                if (start === null) start = time;
                var progress = time - start,
                    r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
                window.scrollTo(0, r);
                if (r != w + t) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash  // URL с хэшем
                }
            }
        }, false);
    }

    const months = ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'],
        days = ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă'],
        daysMin = ['', '', '', '', '', '', ''];

    function postDate(daysName, daysMinName, monthsName) {
        const _counterLength = 60;

        for (let counter = 0; counter < _counterLength; counter++) {
            innerDate(counter, 'date-');
            innerDate(counter, 'date');
        }

        function innerDate(counter, dateType) {
            let newCounter;
            dateType === 'date-' ? newCounter = -counter : newCounter = counter;

            const _msInDay = 86400000,
                _localDate = new Date(Date.now() + newCounter * _msInDay),
                _day = _localDate.getDate(),
                _month = _localDate.getMonth() + 1,
                _year = _localDate.getFullYear();

            const dayDefault = addZero(_day),
                monthDefault = addZero(_month),
                defaultDate = dayDefault + '.' + monthDefault + '.' + _year;
            const dateClass = dateType + counter,
                nodeList = document.querySelectorAll('.' + dateClass);

            for (let i = 0; i < nodeList.length; i++) {
                const dateFormat = nodeList[i].dataset.format;
                dateFormat !== undefined && dateFormat !== '' ? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat)) : nodeList[i].innerHTML = defaultDate;
            }
        }

        function changeFormat(_day, _month, _year, format) {
            let innerFormat = format;
            const testFormat = ["dd", "mm", "yyyy", "monthFull"],
                dateFormat = {
                    dd: _day,
                    mm: addZero(_month),
                    yyyy: _year,
                    monthFull: getMonthName(_month, monthsName, false)
                };

            for (let i = 0; i < testFormat.length; i++) {
                let string = testFormat[i];
                let regExp = new RegExp(string);
                innerFormat = innerFormat.replace(regExp, dateFormat[string]);
            }

            return innerFormat.split(' ').join(' ');
        }

        function getMonthName(_month, monthsName, bigFirstLetter, counter) {
            const monthCounter = !!counter ? counter : 0;
            let month;
            _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter;
            _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter;
            return changeFirstLetter(bigFirstLetter, monthsName[month - 1]);
        }

        function addZero(numb) {
            return numb < 10 ? '0' + numb : numb;
        }

        function changeFirstLetter(isBig, str) {
            return isBig && str && str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str;
        }
    }

    if (document.body.classList.contains('ev-date')) {
        document.addEventListener("DOMContentLoaded", function () {
            postDate(days, daysMin, months);
        });
    }

    function orderForm() {
        const peopleOnline = document.querySelectorAll('.online-count');

        function randomInteger(min, max) {
            let rand = min + Math.random() * (max + 1 - min);
            return Math.floor(rand);
        }

        setInterval(function () {
            let randNum = randomInteger(12, 120);

            for (let i = 0; i < peopleOnline.length; i++) peopleOnline[i].textContent = String(randNum);
        }, 15000);
    }

    function main() {
        window.addEventListener('load', function () {
            orderForm()
        });
    }

    if (document.documentElement.clientWidth < 480) {
        window.addEventListener('scroll', function () {
            return setTimeout(main, 1000);
        }, {
            once: true
        });
    } else {
        main();
    }

}());
//# sourceMappingURL=main.js.map
