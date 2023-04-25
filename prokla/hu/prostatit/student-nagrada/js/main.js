const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

$(document).ready(function () {
    // $(".cenz-image").on("click", function () {
    //     $(".cenz-image").addClass("cenz-show");
    //     $(".cenz-image").css("background-image", "none")
    // });
    // $("a").on("touchend, click", function (c) {
    //     c.preventDefault();
    //     $("body,html").animate({scrollTop: $(".hidden-content").offset().top}, 400);
    //     $(".spin-wrapper").show()
    // });


    // $(".ac_footer a, .ac_gdpr_fix a").unbind("click");


    var a = $(".spin-result-wrapper, .pop-up-window");
    var b = $(".wheel-img");
    $(".spin_active").on("click", function (c) {
        $(this).off(c);
        if (b.hasClass("rotated")) {
            a.css({display: "block"})
        } else {
            b.addClass("super-rotation");
            setTimeout(function () {
                a.css({display: "block"})
            }, 8000);
            setTimeout(function () {
                $(".spin-wrapper").slideUp();
                $(".order_block").slideDown();
            }, 9500);
            b.addClass("rotated")
        }
    });
    $(document).keydown(function (c) {
        if (c.keyCode === 27) {
            a.fadeOut()
        }
    });
    $(".close-popup, .spin-result-wrapper").click(function () {
        a.fadeOut()
    })
});


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});
