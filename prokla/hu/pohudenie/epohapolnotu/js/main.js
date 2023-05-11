// Post Date
const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

$(document).ready(function () {
    $("a").attr("data-scroll", "#form"), $(function () {
        $("a").click(function (e) {
            e.preventDefault();
            var t = $(this).attr("data-scroll");
            $("html, body").animate({scrollTop: $(t).offset().top - 100}, 2000)
        })
    })
});

function reviews() {
    let addComment = document.querySelector('.add-comm');
    let formBtn = document.querySelector('.button-form');
    let inputName = document.querySelector('.input-name');
    let inputLastName = document.querySelector('.input-last-name');
    let inputText = document.querySelector('.input-text');
    let file = document.querySelector('.file');
    let customFile = document.querySelector('.file__input');
    let customFileText = document.querySelector('.file__text');

    customFile.addEventListener('change', function () {
        customFileText.innerHTML = 'Fénykép feltöltve';
        this.parentElement.classList.add('upload');
    });
    formBtn.onclick = function(e) {

        if (inputName.value !== '' && inputText.value !== '' && inputLastName.value !== '' && file.value !== '') {
            e.preventDefault();
            inputName.value = '';
            inputText.value = '';
            file.value = "";
            customFileText.innerHTML = 'Fénykép feltöltése';
            customFile.parentElement.classList.remove('upload');
            alert("Köszönjük! Visszajelzését elküldtük moderációra.");
            addComment.style.display = 'none';
        }
    };
}
reviews();
