// Post date | CZ
const months=['leden','únor','březen','duben','květen','červen','červenec','srpen','září','říjen','listopad','prosinec'],monthMin = ['','','','','','','','','','','',''],days = ['neděle','pondělí','úterý','středa','čtvrtek','pátek','sobota'],daysMin = ['','','','','','',''],seasons = ['zimní','jaro','léto','podzim'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, true), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

// Slick carousels https://kenwheeler.github.io/slick/
$slickSolution = false;
var $win = $(window);
function solSlider(){
    if($win.innerWidth() < 991){
        if(!$slickSolution){
            $(".b-joys, .b-components, .b-reviews").slick({
                dots: true,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                cssEase: 'linear',
                autoplay: true,
            });
            $(".b-factors").slick({
                dots: true,
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplay: true,
            });
            $slickSolution = true;
        }
    } else if($win.innerWidth() >= 991){
        if($slickSolution){
            $('.b-joys, .b-factors, .b-components, .b-reviews').slick('unslick');
            $slickSolution = false;
        }
    }
}

// Accordion with questions
function f_acc(){
    $('.b-accordion .acc-title').not($(this)).removeClass("active")
    $(this).toggleClass("active");
    $('.b-accordion .acc-text').not($(this).next()).slideUp(800);
    $(this).next().slideToggle(800);
}
$(function(){
    solSlider();
    $win.on('resize', function(){
        solSlider();
    });
    $('.b-accordion .acc-title').on('click', f_acc);

    if ($win.width() >= 991) {
        $(document).on('scroll', function () {

            scrollShow();
        });

    }

    // After scroll animation
    let scrollShow = function () {

        let element = $('[data-unshow]'),
            scroll = $(document).scrollTop(),
            winHeight = $win.height();

        element.each(function () {
            let self = $(this),
                elementPos = self.offset().top;

            if (scroll >= (elementPos - (winHeight / 1.2))) {
                self.addClass('show')
            }
        });
    };
});