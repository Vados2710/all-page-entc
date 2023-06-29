document.addEventListener("DOMContentLoaded", function () {

	Test.init();
})

$(document).on('click', 'a[href^="#"]', function (event) {
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 1000);
});

var Test = function () {
	var btnTest = $(".js-btn-test");
	var radioButtons = $(".js-radio-input");
	var numberQuestion = $(".js-number-question");
	var questionList = $(".js-question");
	var resultTest = $(".js-result");
	var overlay = $(".js-overlay");
	var blockTest = $('.test');

	var dataTestResult = [{
		title: 'Paldies par jūsu atbildēm! Diemžēl jūs esat dažu soļu attālumā no letālām sekām. Lai nepārstātu būt par vīrieti vārda tiešākajā nozīmē, sāc terapiju jau tagad!',
	}, {
		title: 'Paldies par jūsu atbildēm! Diemžēl jūs esat dažu soļu attālumā no letālām sekām. Lai nepārstātu būt par vīrieti vārda tiešākajā nozīmē, sāc terapiju jau tagad!',
	}];
	return {
		checkItem: function checkItem() {
			radioButtons.click(function () {
				var _this = $(this);
				var inputChecked = _this.find(".js-radio-input");

				if (_this.hasClass("active")) {
					inputChecked.prop("checked", false);
				} else {
					inputChecked.prop("checked", true);
				}

				_this.toggleClass("active");
				var currentBlock = _this.parents(".js-question");
				var groupBlock = currentBlock.find(".js-group-inputs");

				if (currentBlock.find("input:radio:checked").length === groupBlock.length || currentBlock.find("input:checkbox:checked").length > 0) {
					btnTest.prop("disabled", false);
				} else {
					btnTest.prop("disabled", true);
				}



			});
		},
		showQuestion: function showQuestion() {
			var count = 0;
			btnTest.click(function (e) {
				e.preventDefault();
				count++;

				if (count == 4) {
					btnTest.text("Iegūstiet rezultātu");
				}

				if (count == 5) {
					$(".js-test").addClass("hide");
					$(".js-table").addClass("active");
					resultTest.addClass("active");
					overlay.addClass("active");
					Test.calculateSumResultTest();
					return;
				}

				numberQuestion.removeClass("active");
				numberQuestion.eq(count).addClass("active");
				btnTest.prop("disabled", true);
				questionList.removeClass("active");
				questionList.eq(count).addClass("active");
			});
		},
		calculateSumResultTest: function calculateSumResultTest() {
			var sum = 0;
			var sumChecked = 0;
			var inputChecked = questionList.find("input:radio:checked");
			for (let i = 0; i < inputChecked.length; i++) {
				var input = $(inputChecked[i]);
				var name = input.attr("name");
				var val = +inputChecked[i].value;
				sumChecked += val;
			}

			Test.initTextResult(sumChecked);
		},
		closeResultTest: function closeResultTest() {
			$(".js-close").click(function (e) {

				resultTest.removeClass("active");
				overlay.removeClass("active");

			});
		},
		initTextResult: function initTextResult(sum) {
			if (sum >= 0 && sum < 2) {
				$('.result__main').text(dataTestResult[0].title);
				$('.result__btn').text("ОК");
			} else {
				$('.result__main').text(dataTestResult[1].title);

			}
		},
		init: function init() {
			Test.checkItem();
			Test.showQuestion();
			Test.closeResultTest();
		}
	};

}();

$(document).ready(function () {
	$("a").attr('data-scroll', '#form');
	$(function () {
		$('a').click(function (evt) {
			evt.preventDefault();
			var target = $(this).attr('data-scroll');
			$("html, body").animate({
				scrollTop: $(target).offset().top - 100
			}, "slow");
		});
	});
});

document.addEventListener("DOMContentLoaded", function () {
	// Вивід дати (+ час).
	// Arguments: dateFormat (string), language (string), abbreviated (bool). Default: 'dd.mm.yyyy', 'ru', false
	postDate( /*'dateFormat', 'ru', false*/ );
});

function postDate(sa, countryName, isAbbreviated) {
	// Додаємо клас "date-N", де N - кількість "відмотаних" днів.
	// Наприклад, span class="date-0"></span> - мотає 0 днів назад (сьогодні).
	// Наприклад, span class="date-5"></span> - мотає 5 днів назад.

	// Вивід дати (+ години + хвилини), додаємо клас "time". Наприклад, <span class="date-1 time"></span>. 
	// Виводить у форматі на зразок "14.02.2018 14:22"
	// Працює як в порядку зростання, так і в порядку спадання (міняємо флажок нижче)

	var sa = sa || 'dd.mm.yyyy',
		msInDay = 86400000,
		counterLength = 90, // Максимальна кількість вімотаних днів. Змінюємо за необхідності.
		months,
		countryName = countryName || 'lv', // Мова для місяців. 
		isAbbreviated = isAbbreviated || false, // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн", тоді ставим TRUE.
		localDate = new Date();

	switch (countryName) {
		case 'lv': // Latvia латышский
			months = ['Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris'];
			break;
	}

	if (isAbbreviated) {
		for (var i = 0; i < months.length; i++) {
			months[i] = months[i].slice(0, 3).toLowerCase(); // Прибираємо ".toLowerCase()", якщо перша буква повинна бути великою.
		}
	}

	for (var counter = 0; counter < counterLength; counter++) {
		var dateClass = "date-" + counter,
			nodeList = document.getElementsByClassName(dateClass),
			date = new Date(localDate.getTime() - counter * msInDay),
			timeCounter = 0,
			timeArray = time(nodeList /*, true*/ ); // Розкоментувати, якщо необхідне сортування в порядку спадання.

		timeArray = timeFormat(timeArray);

		for (var i = 0; i < nodeList.length; i++) {
			var data = nodeList[i].dataset;

			if (data.format) {
				nodeList[i].innerHTML = format(date, data.format);
				// format: особливий формать для окремої дати. Додаємo як data-format="фомарт". 
				/// Формати дивитись в switch нижче. dd - числом, day - прописом.

				// Наприклад, <span class="date-1" data-format="dd month yyyy"></span> 
				// мотає на 1 день назад і виводить цей span у вигляді "14 Лютого 2018".
			} else {
				// Загальний формат виводу дати змінювати ТУТ!
				nodeList[i].innerHTML = format(date, sa); // Default: dd.mm.yyyy 
			}
			if (/\btime\b/.test(nodeList[i].className)) {
				nodeList[i].innerHTML += " " + timeArray[timeCounter]; // Рядок для формату виводу часу.
				timeCounter++;
			}
		}
	}

	// <span clas="date-N"></span> - мотає час назад на N днів. Наприклад, <span className="date-5"></span>
	// <span clas="dateN"></span> - мотає час вперед на N днів. Наприклад, <span className="date5"></span>

	for (var counter = 0; counter < counterLength; counter++) {
		var dateClass = "date" + counter,
			nodeList = document.getElementsByClassName(dateClass),
			date = new Date(localDate.getTime() + counter * msInDay),
			timeCounter = 0;

		for (var i = 0; i < nodeList.length; i++) {
			var data = nodeList[i].dataset;

			if (data.format) {
				nodeList[i].innerHTML = format(date, data.format);
			} else {
				nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/ );
			}
		}
	}



	function time(nodeList, reverse) {
		var timeArray = [],
			timeStatement = false;

		for (var i = 0; i < nodeList.length; i++) {
			if (nodeList[i].className.match(/\btime\b/)) {
				if (nodeList[i].className.match(/\bdate-0\b/)) {
					timeStatement = true;
				}
				timeArray.push(timeRandom(timeStatement));
			}
		}

		if (reverse) timeArray.sort(function (a, b) {
			return b - a;
		});
		else timeArray.sort(function (a, b) {
			return a - b;
		});

		return timeArray;
	}

	function timeRandom(statement) {
		if (statement) {
			var date = new Date(),
				timeLimit = date.getHours() * 60 + date.getMinutes();

			return Math.round(0 + Math.random() * timeLimit);
		}
		return Math.round(0 + Math.random() * 1440);
	}

	function timeFormat(timearray) {
		var array = [];

		for (var i = 0; i < timearray.length; i++) {
			var htemp = Math.floor(timearray[i] / 60),
				mtemp = timearray[i] % 60,
				hours = htemp < 10 ? "0" + htemp : htemp,
				minutes = mtemp < 10 ? "0" + mtemp : mtemp;
			array.push(hours + ":" + minutes);
		}


		return array;
	}

	function format(date, formatstring) {
		var innerDate = "",
			day = date.getDate(),
			year = date.getFullYear(),
			month = date.getMonth() + 1,
			fo = formatstring || true;

		switch (fo) {
			case "tom":
				innerDate += day + 1;
				innerDate += ".";
				innerDate += (month < 10) ? ("0" + month) : month;
				return innerDate;
			case "mm.dd.yyyy":
				innerDate += (month < 10) ? ("0" + month) : month;
				innerDate += ".";
				innerDate += (day < 10) ? ("0" + day) : day;
				innerDate += "." + year;
				return innerDate;

			case "dd month yyyy":
				innerDate += (day < 10) ? ("0" + day) : day;
				innerDate += " ";
				innerDate += months[month - 1];
				innerDate += " " + year;
				return innerDate;

			case "dd month":
				innerDate += (day < 10) ? ("0" + day) : day;
				innerDate += " ";
				innerDate += months[month - 1];
				return innerDate;
			case "month":
				innerDate += months[month - 1].toLowerCase();
				return innerDate;

			case "day dd, month yyyy":
				var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
				innerDate += days[new Date(year, month - 1, day).getDay()];
				innerDate += " ";
				innerDate += (day < 10) ? ("0" + day) : day;
				innerDate += " ";
				innerDate += months[month - 1];
				innerDate += " " + year;
				return innerDate;

			case "dd/mm/yyyy":
				innerDate += (day < 10) ? ("0" + day) : day;
				innerDate += "/";
				innerDate += (month < 10) ? ("0" + month) : month;
				innerDate += "/" + year;
				return innerDate;

			case "dd-mm-yyyy":
				innerDate += (day < 10) ? ("0" + day) : day;
				innerDate += "-";
				innerDate += (month < 10) ? ("0" + month) : month;
				innerDate += "-" + year;
				return innerDate;

			case "yyyy.mm.dd":
				innerDate += year;
				innerDate += ".";
				innerDate += (month < 10) ? ("0" + month) : month;
				innerDate += ".";
				innerDate += (day < 10) ? ("0" + day) : day;
				return innerDate;

			case "month dd, yyyy":
				innerDate += months[month - 1];
				innerDate += " ";
				innerDate += (day < 10) ? ("0" + day) : day;
				innerDate += ", ";
				innerDate += year;
				return innerDate;

			case "yyyy":
				innerDate += year;
				return innerDate;

			default:
				innerDate += (day < 10) ? ("0" + day) : day;
				innerDate += ".";
				innerDate += (month < 10) ? ("0" + month) : month;
				innerDate += "." + year;
				return innerDate;
		}
	}
};