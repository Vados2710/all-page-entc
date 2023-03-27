

const months = ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'],
    monthMin = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
    days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
    daysMin = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
  seasons = ['iarnă', 'arc', 'vară', 'toamnă'];

function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {
    const _counterLength = 183;
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
        for (let i = 0; i < nodeList.length; i++) {
            const dateFormat = nodeList[i].dataset.format;
            dateFormat !== undefined && dateFormat !== '' ? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)) : nodeList[i].innerHTML = defaultDate
        }
    }

    function changeFormat(_day, _month, _year, format, counter) {
        let innerFormat = format;
        const testFormat = ["dd", "mm", "yyyy", "monthFull", "monthOnly", "season", "year"],
            dateFormat = {
                dd: _day,
                mm: addZero(_month),
                yyyy: _year,
                monthFull: getMonthName(_month, monthsName, true),
                monthOnly: getMonthName(_month, monthsName, false, counter),
                year: getYearWithCounter(_year, counter),
                season: getSeasonsName(seasonsName, _month, false),
            };
        for (let i = 0; i < testFormat.length; i++) {
            let string = testFormat[i];
            let regExp = new RegExp(string);
            innerFormat = innerFormat.replace(regExp, dateFormat[string]);
        }
        return innerFormat.split(' ').join(' ')
    }

    function getMonthName(_month, monthsName, bigFirstLetter, counter) {
        const monthCounter = !!counter ? counter : 0;
        let month;
        _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter;
        _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter;
        return changeFirstLetter(bigFirstLetter, monthsName[month - 1])
    }

    function getSeasonsName(array, month, bigFirstLetter) {
        const monthNumber = month === 12 ? 0 : month,
            seasonIndex = monthNumber / 3 < 0 ? Math.ceil(monthNumber / 3) : Math.floor(monthNumber / 3);
        return changeFirstLetter(bigFirstLetter, array[seasonIndex]);
    }

    function getYearWithCounter(year, counter) {
        return year + counter
    }

    function addZero(numb) {
        return numb < 10 ? '0' + numb : numb
    }

    function changeFirstLetter(isBig, str) {
        return isBig && str && str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str
    }
}
if (document.body.classList.contains('ev-date')) {
    document.addEventListener("DOMContentLoaded", function () {
        postDate(days, daysMin, months, monthMin, seasons)
    });
}

$('.hide').click(function () {
	$(this).toggleClass('remove');
});


let form = document.getElementById('commentForm');
let name = document.getElementById('commentName');
let text = document.getElementById('commentText');
let btn = document.getElementById('commentButton');
let message = document.getElementById('commentMessage');

btn.addEventListener('click', function(event){
    event.preventDefault();
    message.innerHTML = '';

    if(name.value.trim() && text.value.trim()) {
        message.innerHTML = 'Mulțumiri! Recenzia dvs. a fost trimisă pentru moderare.';
        name.value = '';
        text.value = '';
        form.classList.remove("show");
    } else {
        message.innerHTML = 'Completați toate câmpurile'
    }  
    message.classList.add('show');
});
