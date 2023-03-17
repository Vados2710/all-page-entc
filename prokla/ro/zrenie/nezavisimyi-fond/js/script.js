$(document).ready(function () {
    $(".btn").on("click", function (e) {
        e.preventDefault(), $(this).parents(".base_bl").hide(), $(this).parents(".base_bl").next().fadeIn();
        window.scrollTo(0, 0);
    }), $("label:not(.accum-comment), .submit-answer").on("click", function () {
        var e = $(this);
        setTimeout(function () {
            e.parents(".base_bl").hide(), e.parents(".base_bl").next().fadeIn()
        }, 500)
    }), $(".btn2").on("click", function () {
        $("ul").fadeIn()
    });

    $(".block_answer select").on("change", function () {
        $(this).closest(".block_answer").find(".submit-answer").removeAttr('disabled')
    })

    $(".accum-comment").on("click", function () {
        const accums = $(this).closest(".block_answer").find(".accum-comment:checked")
        if (accums.length) {
            $(this).closest(".block_answer").find(".submit-answer").removeAttr('disabled')
        } else {
            $(this).closest(".block_answer").find(".submit-answer").attr('disabled', true)
        }
    })

    $(".submit-answer").on("click", function () {
        const accums = $(this).closest(".block_answer").find(".accum-comment:checked")
        if (accums.length) {
            const value = Array.from(accums).reduce((acc, el) => {
                return acc += `${el.value}, `
            }, '')
            $(this).closest(".block_answer").find(".add-to-comment").val(value)
        }
    })

    $(".last-question").on("click", function () {

        let message = "";

        $('.add-to-comment').each((i, el) => {
            const question = $(el).closest('.body_cont').find('h3 span').text()
            const addition = $(el).data('addition') || ''
            const value = $(el).val()

            message += `${question} : ${addition} ${value} \n`
        })

        $('form input[name="comment"]').val(message)
    })
});

var year = new Date().getFullYear();
var placeY = document.getElementsByClassName("year");
for (let i = 0; i < placeY.length; i++) {
    var elemY = placeY[i];
    elemY.innerHTML = year;
}

const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['','','','','','','','','','','',''],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}