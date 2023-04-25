var sec = 00;
var min = 15;
var hour = 00;

function refresh() {
	sec--;
	if (sec == -01) {
		sec = 59;
		min = min - 1;
	} else {
		min = min;
	}
	if (sec <= 9) {
		sec = "0" + sec;
	}
	if (min == -01) {
		min = 59;
		hour = hour - 1;
	} else {
		hour = hour;
	}

	if (document.getElementById) {
		hour1.innerHTML = (hour <= 9 ? "0" + hour : hour);
		min1.innerHTML = (min <= 9 ? "0" + min : min);
		sec1.innerHTML = sec;
	}

	inter = setTimeout("refresh()", 1000);
	if (hour == '00' && min == '00' && sec == '00') {
		sec = "00";
		clearInterval(inter);
	}
}
//refresh();

const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 180;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","dayFull","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, dayFull: getDaysName(_day, _month, _year, daysName, false), monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getDaysName(_day, _month, _year, daysName, bigFirstLetter) {return changeFirstLetter(bigFirstLetter, daysName[new Date(_year, _month - 1, _day).getDay()])} function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}