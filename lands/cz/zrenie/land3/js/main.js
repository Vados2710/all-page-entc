/******************* timer ********************/
function Timer() {
	function e(e) {
		var i = t(new Date(e).getHours()),
			o = t(new Date(e).getMinutes()),
			n = t(new Date(e).getSeconds());
		s.each(function () {
			$(this).find(".hours").text(i), $(this).find(".minutes").text(o), $(this).find(".seconds").text(n)
		})
	}

	function t(e) {
		return e >= 10 ? e : "0" + e
	}

	function i() {
		a == r ? clearInterval(d) : (a -= 1e3, e(a))
	}

	function o() {
		d = setInterval(i, 1e3)
	}
	var s = $(".timer"),
		n = new Date,
		r = 60 * n.getTimezoneOffset() * 1e3,
		l = new Date((new Date).getTime() + 864e5);
	l.setHours(0), l.setMinutes(0), l.setSeconds(0);
	var a = l - n + r;
	i(), o();
	var d
}
// Timer();
/******************* end timer ********************/

$('.review-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
	$('.slide-open:not(.slick-current)').removeClass('slide-open')
	console.log('asdasd')
  });
 $('.review-slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,

	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		}
	  }

	]
  });

 function toggleTExtHeight () {
	let btns = document.querySelectorAll('.toggle-text')

	for(let i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', function (e) {
			e.currentTarget.parentElement.classList.toggle('slide-open')
		})
	}
 }
 toggleTExtHeight ()
 const months=['leden','únor','březen','duben','květen','červen','červenec','srpen','září','říjen','listopad','prosinec'],monthMin = ['','','','','','','','','','','',''],days = ['neděle','pondělí','úterý','středa','čtvrtek','pátek','sobota'],daysMin = ['','','','','','',''],seasons = ['zimní','jaro','léto','podzim'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}