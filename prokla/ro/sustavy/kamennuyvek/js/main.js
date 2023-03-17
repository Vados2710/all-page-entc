const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['','','','','','','','','','','',''],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

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


"use strict";
const box_d = document.querySelector('#box_d').getAttribute('src')
var par = location.hash.slice(1).split('~');
var parl = par.length;
if (parl > 2) isp = par[4].replace(/\+/g, ' ');
if ("vibrate" in navigator) {
    var vibr = 1;
} else var vibr = 0;
var count = 1;
$(function() {
    $(".try").click(function() {
        if (count < 2) {
            $(this).attr('src', box_d);
            count++;
            setTimeout(function() {
                var sc2 = document.getElementById("success02");
                sc2.className += " animate";
                var sctip02 = document.getElementById("successtip02");
                sctip02.className += " animateSuccessTip";
                var md2 = document.getElementById("modal02");
                md2.className += " visible";
                var cnt = document.getElementById("cntVal");
                var so = document.querySelector(".sweet-overlay");
                so.style.display = "block";
                $('body,html').animate({
                    scrollTop: $(window).scrollTop() - 1
                }, 0)
            }, 800);
        } else {
            var discountBlock = document.getElementById("discount");
            $(this).replaceWith(discountBlock);
            $(discountBlock).addClass('show');
            setTimeout(function() {
                $('.spin-result-wrapper').css('display', 'block');
                $('body,html').animate({
                    scrollTop: $(window).scrollTop() - 1
                }, 0)
            }, 1000);
            setTimeout(function() {
                $('.boxes__instructions').hide();
                $('#boxes').slideUp();
                $('.order_block').slideDown();
                start_timer();
            }, 1500);
        }
    });
});
var counter = 1;
$(document).ready(function() {
    $('#update').on('click', function() {
        if (counter == 1) {
            counter++;
            $('#cntVal').html(function(i, val) {
                return +val - 1
            });
        }
    });
    var closePopup = document.querySelector('.close-popup');
    $('.close-popup, .pop-up-button').click(function(e) {
        e.preventDefault();
        $('.spin-result-wrapper').fadeOut();
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