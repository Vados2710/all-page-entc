

document.addEventListener("DOMContentLoaded", function() {

	Test.init();
})

$(document).on('click', 'a[href^="#"]', function(event) {
	event.preventDefault();
	$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
	}, 1000);
});

var Test = function() {
	var btnTest = $(".js-btn-test");
	var radioButtons = $(".js-radio-input");
	var numberQuestion = $(".js-number-question");
	var questionList = $(".js-question");
	var resultTest = $(".js-result");
	var overlay = $(".js-overlay");
	var blockTest = $('.test');

	var dataTestResult = [{
			title: 'Благодаря ви за отговорите! За съжаление, вие сте на няколко крачки от фаталните последици. За да не спрете да бъдете мъж в истинския смисъл на думата, започнете терапия сега!',
	}, {
			title: 'Благодаря ви за отговорите! За съжаление, вие сте на няколко крачки от фаталните последици. За да не спрете да бъдете мъж в истинския смисъл на думата, започнете терапия сега!',
	}];
	return {
			checkItem: function checkItem() {
					radioButtons.click(function() {
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
					btnTest.click(function(e) {
							e.preventDefault();
							count++;

							if (count == 4) {
									btnTest.text("Получете резултата");
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
					$(".js-close").click(function(e) {
					
							resultTest.removeClass("active");
							overlay.removeClass("active");

					});
			},
			initTextResult: function initTextResult(sum) {
					if (sum >= 0 && sum < 2) {
							$('.result__main').text(dataTestResult[0].title);
							$('.result__btn').text("ОК");
					} else  {
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

const months=['януари','февруари','март','април','май','юни','юли','август','септември','октомври','ноември','декември'],monthMin = ['','','','','','','','','','','',''],days = ['неделя','понеделник','вторник','сряда','четвъртък','петък','събота'],daysMin = ['','','','','','',''],seasons = ['зима','пролет','лято','есен'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) nodeList[i].innerHTML = defaultDate } function addZero(numb){return numb<10?'0'+numb:numb} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}