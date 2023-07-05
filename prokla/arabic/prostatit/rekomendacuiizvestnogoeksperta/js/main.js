$(function () {
    let resultWrapper = document.querySelector('.spin-result-wrapper')
    var count = 1;

    let path = window.cdn_path || '';

    $(function () {
        $(".try").click(function () {
            if (count < 2) {
                $(this).addClass('opened');
                $(this).attr('src', path + "images/opened_box2.png");
                count++;

                setTimeout(function () {
                    // var sc2 = document.getElementById("success02");
                    // sc2.className += " animate";
                    // var sctip02 = document.getElementById("successtip02");
                    // sctip02.className += " animateSuccessTip";
                    var md2 = document.getElementById("modal02");
                    document.getElementById("modal02").classList.add('active')
                    md2.className += " visible";
                    var cnt = document.getElementById("cntVal");
                    var so = document.querySelector(".sweet-overlay");
                    so.style.display = "flex";
                }, 800);
            } else {
                if (document.getElementById("modal02").classList.contains('active') && count < 3 && !$(this).hasClass('opened')) {
                    count++
                    $(this).attr('src', path + 'images/discount100.png');
                    $(this).addClass('percent');
                    setTimeout(function () {
                        resultWrapper.style.display = "block";
                    }, 1000);

                    setTimeout(function () {
                        $('#boxes,.form__heading').slideUp();
                        $('.boxes__instructions').css('display', 'none')
                        $('.instructions').css('display', 'none')
                        $('.order_block').slideDown();

                        start_timer();
                    }, 3500);
                }
            }
        });
    });
    var counter = 1;
    $(document).ready(function() {
        $('#update').on('click',function(){
            if (counter === 1) {
                counter++;
                $('#cntVal').html(function(i, val) {
                    return +val - 1
                });
            }
        });
    });

    $('.pop-up-button').on('click', function (){
        resultWrapper.style.display = 'none';
    })
    $('.close-popup').on('click', function (){
        resultWrapper.style.display = 'none';
    })
    $('#update').on('click', function(){
        document.getElementById("modal02").classList.remove("visible");
        document.querySelector(".sweet-overlay").style.display = "none";
    });



    var time = 600;
    var intr;

    function start_timer() {
        intr = setInterval(tick, 1000);
    }

    function tick() {
        time = time - 1;
        var mins = Math.floor(time / 60);
        var secs = time - mins * 60;
        if (mins == 0 && secs == 0) {
            clearInterval(intr);
        }
        secs = secs >= 10 ? secs : "0" + secs;
        $("#min").html("0" + mins);
        $("#sec").html(secs);
    }
});


const months=['يَنَايِرُ','فِبْرَايِرُ','مَارِسُ','أَبْرِيلُ','مَايُو','يُونْيُو','يُولْيُو','أَغُسْطُسُ','سِبْتَمْبَرُ','أُكْتُوبَرُ','نُوفَمْبَرُ','دِيسَمْبَرُ'],monthMin = ['','','','','','','','','','','',''],days = ['‫الأحد','‫الاثنين','‫الثلاثاء','‫الأربعاء','الخميس','الجمعة‬','السبت‬'],daysMin = ['','','','','','',''],seasons = ['شِتَاء','رَبِيع','صَيْف','خَرِيف'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}
