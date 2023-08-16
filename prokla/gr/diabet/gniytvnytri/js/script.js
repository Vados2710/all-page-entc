//PostDate
const months=['ο Ιανουάριος','ο Φεβρουάριος','ο Μάρτιος','ο Απρίλιος','ο Μάιος','ο Ιούνιος','ο Ιούλιος','ο Αύγουστος','ο Σεπτέμβριος','ο Οκτώβριος','ο Νοέμβριος','ο Δεκέμβριος'],monthMin = ['','','','','','','','','','','',''],days = ['η Κυριακή','η Δευτέρα','η Τρίτη','η Τετάρτη','η Πέμπτη','η Παρασκευή','το Σάββατο'],daysMin = ['','','','','','',''],seasons = ['ο χειμώνας','η άνοιξη','το καλοκαίρι','το φθινόπωρο'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}
function closePopup() {
	$(".close-popup, .btn-popup").click(function (a) {
		a.preventDefault();
		$(".overlay").fadeOut()
	})
}
closePopup();

// Wheel
var resultWrapper = document.querySelector('.overlay');
var resultWrapper2 = document.querySelector('.wheel__cursor');
var wheel = document.querySelector('.prize-wheel');
var cursorText = document.querySelector('.wheel__cursor-text');
var hand = document.querySelector(".hand-hidden");
var oldPrice = document.querySelector('.old-price');
var discount = document.querySelector('.discount');

$('.wheel__cursor, .btn-wheel').click(function () {
	timerForm();
	if (!wheel.classList.contains('rotated')) {
		wheel.classList.add('spin');
		hand.style.display = "none";
		setTimeout(function () {
			resultWrapper.style.display = "block";
			cursorText.innerHTML = "- 50%";
			resultWrapper2.style.pointerEvents = 'none';
		}, 8000);
		wheel.classList.add('rotated');
		$(".new-price").slideUp();
		$(".discount").slideUp();
	}

});

$(".btn--submit").click(function () {
	resultWrapper.style.display = "none";

	$(".wheel__content-inner").slideUp(),
		$(".form").slideDown(),
		$(".bottom-teaser .sale").addClass("shown"),
		$(".form").addClass('shown__');

	startCounter();


	setTimeout(function () {
		$(".discount").slideDown();
		discount.classList.add('blink');
	}, 2000);

	setInterval(function () {

		setTimeout(function () {
			oldPrice.classList.add('strike');
		}, 2000);

	}, 2000);

	setInterval(function () {
		$(".new-price").slideDown();
	}, 5000);


});


//Counter
var flag = 0;

function startCounter() {

	if (flag == 0) {
		let packWrap = document.querySelector(".loader__element");

		setTimeout(function () {
			let countPack = document.querySelector(".count"),
				loaderLine = document.querySelector(".loader__element"),
				defaultNum = 18;
			perc = 40;

			var num = 0;

			function getRandomPack() {

				if (num < 2) {

					defaultNum = defaultNum - 1;
					loaderLine.style.width = perc + '%';
					countPack.innerHTML = defaultNum;
					perc = perc - 10;

					setTimeout(opacitylow, 0);
					setTimeout(opacityhigh, 400);

				} else if (3 < num < 6 && defaultNum != 6) {

					defaultNum = defaultNum - 1;
					countPack.innerHTML = defaultNum;
					loaderLine.style.width = perc + '%';
					perc = perc - 2;

					setTimeout(opacitylow, 0);
					setTimeout(opacityhigh, 400);

				}
				num++;
			}

			function opacitylow() {
				packWrap.style.opacity = "0.3";
			}

			function opacityhigh() {
				packWrap.style.opacity = "1";
			}
			(function loop() {
				const interval = [6000, 8000, 12000];
				var rand = Math.floor(Math.random() * interval.length);
				let randomIntervalNum = interval[rand];

				setTimeout(function () {
					getRandomPack();
					loop();

				}, randomIntervalNum);
			})();
		}, 1000);

		flag++;
	}
}

//Timer
function timerForm() {
	var time = 600;
	var intr;

	function start_timer() {
		intr = setInterval(tick, 1000);
	}

	start_timer()

	function tick() {
		time = time - 1;
		var mins = Math.floor(time / 60);
		var secs = time - mins * 60;
		if (mins === 0 && secs === 0) {
			clearInterval(intr);
		}
		secs = secs >= 10 ? secs : "0" + secs;
		$("#min").html("0" + mins);
		$("#sec").html(secs);
	}
}

