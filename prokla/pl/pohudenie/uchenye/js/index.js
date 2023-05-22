//postdate
const months=['styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad','grudzień'],monthMin = ['','','','','','','','','','','',''],days = ['niedziela','poniedziałek','wtorek','środa','czwartek','piątek','sobota'],daysMin = ['','','','','','',''],seasons = ['zima','wiosna','lato','jesień'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","dayFull","monthFull"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, dayFull: getDaysName(_day, _month, _year, daysName, false), monthFull: getMonthName(_month, monthsName, false), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getDaysName(_day, _month, _year, daysName, bigFirstLetter) {return changeFirstLetter(bigFirstLetter, daysName[new Date(_year, _month - 1, _day).getDay()])} function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

// sidebar
(function () {
    var a = document.querySelector('.x-banner-medical'), b = null, P = 0;
    var commentBlock = document.querySelector('.container__wrapper--comments');
    window.addEventListener('scroll', Ascroll, false);
    document.body.addEventListener('scroll', Ascroll, false);

    function Ascroll() {
        if (b == null) {
            var Sa = getComputedStyle(a, ''), s = '';
            for (var i = 0; i < Sa.length; i++) {
                if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                    s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
                }
            }
            b = document.createElement('div');
            b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
            a.insertBefore(b, a.firstChild);
            var l = a.childNodes.length;
            for (var i = 1; i < l; i++) {
                b.appendChild(a.childNodes[1]);
            }
            a.style.height = b.getBoundingClientRect().height + 'px';
            a.style.padding = '0';
            a.style.border = '0';
            a.style.width = a.offsetWidth + 'px';
        }

        var Ra = a.getBoundingClientRect(),
            formTop = commentBlock.getBoundingClientRect(),
            R = Math.round(Ra.top + b.getBoundingClientRect().height);

        if (formTop.top <= 600) {
            a.classList.add('js-hide');
        } else {
            a.classList.remove('js-hide');
        }

        if ((Ra.top - P) <= 0) {
            if ((Ra.top - P) <= R) {
                b.className = 'sticky';
                if(isIE()) {
                    b.style.right = setPositionRight()
                }
                b.style.top = 0;
            }
        } else {
            b.className = '';
            b.style.top = '';
        }

        window.addEventListener('resize', function () {
            a.children[0].style.width = getComputedStyle(a, '').width
        }, false);
    }
})()

//sidebar IE fix
function isIE() {
    const userAgent = navigator.userAgent;
    return /MSIE|Trident/.test(userAgent);
}

function setPositionRight() {
    const windowWidth = window.innerWidth,
        containerWidth = document.querySelector('.container').clientWidth
    return ((windowWidth - containerWidth) / 2 + 5).toString() + 'px';
}

window.addEventListener('load', function () {
    if(window.innerWidth > 1023) {
        setPositionRight()
    }
})
window.addEventListener('resize', function () {
    if(window.innerWidth > 1023) {
        setPositionRight()
    }
})

//clock
function setCurrentTime() {
    const date = new Date()
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    return String(hours + ':' + minutes)
}

function innerTime() {
    const timeNode = document.querySelector('.bottom_timer')
    setInterval(function () {
        timeNode.textContent  = setCurrentTime()
    }, 1000)
}
innerTime()

