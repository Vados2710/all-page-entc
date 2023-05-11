const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

let chart4 = document.getElementById('chart4').getContext('2d');
let myChart4 = new Chart(chart4, {
    type: 'pie',
    data: {
        datasets: [{
            label: '# of Votes',
            data: [1182, 90, 10],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 147, 35, 0.2)',
                'rgba(0,0,0,0.2)',

            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 147, 35, 1)',
                'rgba(0,0,0,0.4)',
            ],
            borderWidth: 1
        }],
        labels: ['Teljes  \n gyógyulás ', 'Részleges gyógyulás', 'Nincs változás'],
    },
});


let chart1 = document.getElementById('chart1').getContext('2d');
let myChart1 = new Chart(chart1, {
    type: 'pie',
    data: {
        datasets: [{
            label: '# of Votes',
            data: [122, 590, 560],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 147, 35, 0.2)',
                'rgba(0,0,0,0.2)',

            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 147, 35, 1)',
                'rgba(0,0,0,0.4)',
            ],
            borderWidth: 1
        }],
        labels: ['30 év alattiak  ', '31 - 50', ' 51 év felettiek'],
    },
});


let chart2 = document.getElementById('chart2').getContext('2d');
let myChart2 = new Chart(chart2, {
    type: 'pie',
    data: {
        datasets: [{
            label: '# of Votes',
            data: [802, 470],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 147, 35, 0.2)',

            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 147, 35, 1)',
            ],
            borderWidth: 1
        }],
        labels: ['Férfiak', 'Nők',],
    },
});

let chart3 = document.getElementById('chart3').getContext('2d');
let myChart3 = new Chart(chart3, {
    type: 'pie',
    data: {
        datasets: [{
            label: '# of Votes',
            data: [1002, 240, 30],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 147, 35, 0.2)',
                'rgba(0,0,0,0.2)',

            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 147, 35, 1)',
                'rgba(0,0,0,0.4)',
            ],
            borderWidth: 1
        }],
        labels: ['Pozitív', 'Semleges', 'Negatív'],
    },
});

let blackbtn = document.querySelectorAll('.plus-18')
blackbtn.forEach(el => {
    el.addEventListener('click', (e) => {
        console.log(e.target.dataset.id)
        document.querySelector(`img[data-id="${e.target.dataset.id}"]`).style.display = 'block'
        el.style.display = 'none'
    })
})
