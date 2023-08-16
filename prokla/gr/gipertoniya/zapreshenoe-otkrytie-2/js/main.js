"use strict";
var par = location.hash.slice(1).split('~');
var parl = par.length;
if (parl > 2) isp = par[4].replace(/\+/g, ' ');
if ("vibrate" in navigator) {
    var vibr = 1;
} else var vibr = 0;
var count = 1;
let canClick = true
$(function () {

    $(".try").click(function () {
        if (!canClick) {
            return
        }
        if (count < 2) {
            canClick = false
            // $(this).attr('src', "img/opened_box2.png");
            var openBlock = document.getElementById("open");
            $(this).replaceWith(openBlock);
            $(openBlock).addClass('show');
            count++;
            setTimeout(function () {
                // var sc2 = document.getElementById("success02");
                // sc2.className += " animate";
                // var sctip02 = document.getElementById("successtip02");
                // sctip02.className += " animateSuccessTip";
                var md2 = document.getElementById("modal02");
                md2.className += " visible";
                var cnt = document.getElementById("cntVal");
                var so = document.querySelector(".sweet-overlay");
                so.style.display = "block";
                canClick = true
            }, 800);
        } else {
            canClick = false
            var discountBlock = document.getElementById("discount");
            $(this).replaceWith(discountBlock);
            $(discountBlock).addClass('show');
            setTimeout(function () {
                resultWrapper.style.display = "block";
            }, 1000);
            setTimeout(function () {
                $('#boxes').slideUp();
                $('.order_block').slideDown();
                start_timer();
                canClick = true
            }, 3500);
        }
    });
});
var counter = 1;
$(document).ready(function () {
    $('#update').on('click', function () {
        if (counter == 1) {
            counter++;
            $('#cntVal').html(function (i, val) {
                return +val - 1
            });
        }
    });
});

function hidemodal01() {
    if (vibr > 0) navigator.vibrate(70);
    var modal1 = document.getElementById("modal01").classList.remove("visible");
    var so = document.querySelector(".sweet-overlay").style.display = "none";
}

function hidemodal02() {
    if (vibr > 0) navigator.vibrate(70);
    var modal2 = document.getElementById("modal02").classList.remove("visible");
    var so = document.querySelector(".sweet-overlay").style.display = "none";
}


const months=['ο Ιανουάριος','ο Φεβρουάριος','ο Μάρτιος','ο Απρίλιος','ο Μάιος','ο Ιούνιος','ο Ιούλιος','ο Αύγουστος','ο Σεπτέμβριος','ο Οκτώβριος','ο Νοέμβριος','ο Δεκέμβριος'],monthMin = ['','','','','','','','','','','',''],days = ['η Κυριακή','η Δευτέρα','η Τρίτη','η Τετάρτη','η Πέμπτη','η Παρασκευή','το Σάββατο'],daysMin = ['','','','','','',''],seasons = ['ο χειμώνας','η άνοιξη','το καλοκαίρι','το φθινόπωρο'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}