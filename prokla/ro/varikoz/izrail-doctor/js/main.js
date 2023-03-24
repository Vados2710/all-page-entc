const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['','','','','','','','','','','',''],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}



function test() {

    let answersRow = document.querySelectorAll(".test__row")
    let nextQuestion = document.querySelector(".next-question")
    let testForm = document.querySelector(".test__form")
    let resultBlock = document.querySelector(".test__result")
    let resultValue = document.querySelector(".test__result-value")

    let answers = {}
    let result = {
        "1": 0,
        "2": 0,
        "3": 0
    }


    testForm.addEventListener("change", function (e) {
        e.target.parentElement.parentElement.parentElement.dataset.valid = "true"
        answers[e.target.name] = e.target.value
    })

    nextQuestion.addEventListener("click", function () {
        let currentTestSlide = document.querySelector(".test__row--open")
            if (currentTestSlide.dataset.valid === "true") {
                currentTestSlide.classList.remove("test__row--open")
                if (currentTestSlide.nextElementSibling) {
                    console.log(currentTestSlide.nextElementSibling)
                    currentTestSlide.nextElementSibling.classList.add("test__row--open")
                } else {
                    nextQuestion.style.display = "none"
                    getResult ()
                }
            } else {
                currentTestSlide.classList.add("test__row--error")
                setTimeout(function(){
                    currentTestSlide.classList.remove("test__row--error")
                }, 3000)
            }
    })

    function getResult () {
        for( key in answers) {
            result[""+answers[key]] = result[""+answers[key]] + 1
        }
        let maxValue = Math.max(result["1"], result["2"], result["3"])
        let currentAnswer;
        console.log(result)

        for(r in result) {
            console.log(typeof(r))
            if (result[r] === maxValue) {
                currentAnswer = r;
                break;
            }
        }
        resultValue.innerHTML = "Răspunsul tău este dominat de opțiune "+currentAnswer
        resultBlock.style.display = "block"


    }


}

test()