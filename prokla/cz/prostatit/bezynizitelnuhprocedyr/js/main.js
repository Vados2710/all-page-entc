

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
			title: 'Děkujeme za vaše odpovědi! Bohužel, jste pár kroků od fatálních následků. Abyste nepřestali být mužem v pravém slova smyslu, začněte s terapií hned teď!',
	}, {
			title: 'Děkujeme za vaše odpovědi! Bohužel, jste pár kroků od fatálních následků. Abyste nepřestali být mužem v pravém slova smyslu, začněte s terapií hned teď!',
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
									btnTest.text("Získejte výsledek");
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

$(document).ready(function () {
	$("a").attr('data-scroll', '#form');
	$(function () {
			$('a').click(function (evt) {
					evt.preventDefault();
					var target = $(this).attr('data-scroll');
					$("html, body").animate({scrollTop: $(target).offset().top - 100}, "slow");
			});
	});
});

const months=['leden','únor','březen','duben','květen','červen','červenec','srpen','září','říjen','listopad','prosinec'],monthMin = ['','','','','','','','','','','',''],days = ['neděle','pondělí','úterý','středa','čtvrtek','pátek','sobota'],daysMin = ['','','','','','',''],seasons = ['zimní','jaro','léto','podzim'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, monthDefault, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","dayFull","monthFull"], dateFormat = { dd: _day, mm: _month, yyyy: _year, dayFull: getDaysName(_day, _month, _year, daysName, false), monthFull: getMonthName(_month, monthsName, false), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getDaysName(_day, _month, _year, daysName, bigFirstLetter) {return changeFirstLetter(bigFirstLetter, daysName[new Date(_year, _month - 1, _day).getDay()])} function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0, month = _month + monthCounter > 12 ? monthCounter - (12 - _month) : _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}