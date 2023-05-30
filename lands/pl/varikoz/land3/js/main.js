! function(t) {
    "use strict";
    var e = {
            ru: {
                months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                monthsRp: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
                monthsPp: ["январе", "феврале", "марте", "апреле", "мае", "июне", "июле", "августе", "сентябре", "октябре", "ноябре", "декабре"],
                maxPurchase: "Больше всего заказов (_COUNT_)  было  _DATE_ _MONTH_  2015 ",
                stockInfoTitle: "Более 100 000 продаж в",
                stockInfoTime: "Сроки проведения акции с _STARTDATE_ _STARTMONTH_  по _ENDDATE_ _ENDMONTH_  "
            }
        },
        a = function() {
            this.nowDate = new Date, this.params = {
                lang: "ru",
                maxPurchase: 2419,
                maxPurchaseDate: 2,
                startStockDate: 29,
                endStockDate: 1,
                lastPackTime: 15,
                countDownDiff: Math.ceil(86400 - (60 * this.nowDate.getHours() * 60 + 60 * this.nowDate.getMinutes() + this.nowDate.getSeconds())),
                selectors: {
                    countDown: ".landing__countdown",
                    maxPurcahesDate: ".landing__maxpurcashe",
                    stockInfo: ".landing__stockinfo",
                    stockInfoTitle: ".landing__stockinfo_title",
                    lastPack: ".landing__lastpack"
                }
            }, this.initCountDown(), this.initMaxPurcasheDate(), this.initStockInfo(), this.initLastPack()
        };
    a.prototype.initLastPack = function() {
        var e = this;
        setTimeout((function() {
            t(e.params.selectors.lastPack).each((function(e, a) {
                var n = parseFloat(t(a).text(), 10);
                t(a).html(n - 1)
            }))
        }), 1e3 * this.params.lastPackTime)
    }, a.prototype.initStockInfo = function() {
        var a = e[this.params.lang],
            n = a.stockInfoTitle + a.monthsPp[this.nowDate.getUTCMonth()],
            s = new Date(this.nowDate.getTime() + 24 * this.params.endStockDate * 60 * 60 * 1e3),
            o = new Date(this.nowDate.getTime() - 24 * this.params.startStockDate * 60 * 60 * 1e3),
            i = a.stockInfoTime;
        i = (i = (i = (i = i.replace("_STARTDATE_", o.getUTCDate())).replace("_ENDDATE_", s.getUTCDate())).replace("_STARTMONTH_", a.monthsRp[o.getMonth()])).replace("_ENDMONTH_", a.monthsRp[s.getMonth()]), t(this.params.selectors.stockInfoTitle).html(n), t(this.params.selectors.stockInfo).html(i)
    }, a.prototype.initMaxPurcasheDate = function() {
        var a = new Date(this.nowDate.getTime() - 24 * this.params.maxPurchaseDate * 60 * 60 * 1e3),
            n = e[this.params.lang].maxPurchase;
        n = (n = (n = n.replace("_COUNT_", this.params.maxPurchase)).replace("_DATE_", a.getUTCDate())).replace("_MONTH_", e[this.params.lang].monthsRp[a.getUTCMonth()]), t(this.params.selectors.maxPurcahesDate).html(n)
    }, a.prototype.initCountDown = function() {
        var e = this,
            a = new Date(this.nowDate.getTime() + 1e3 * this.params.countDownDiff);
        setInterval((function() {
            var n = new Date(a.getTime() - Date.now()),
                s = (n.getHours() > 9 ? n.getHours() : n.getHours(), '<span class="days">00</span><span class="hours">' + (n.getHours() > 9 ? n.getHours() : "0" + n.getHours()) + '</span><span class="minutes">' + (n.getMinutes() > 9 ? n.getMinutes() : "0" + n.getMinutes()) + '</span><span class="seconds">' + (n.getSeconds() > 9 ? n.getSeconds() : "0" + n.getSeconds()) + "</span>");
            t(e.params.selectors.countDown).html(s)
        }), 1e3)
    }, a.prototype.scrollToForm = function(e) {
        var a = t(e.currentTarget);
        t("body,html").animate({
            scrollTop: t(a.attr("href")).offset().top
        }, 1e3), e.preventDefault()
    }, a.prototype.showHelpers = function(e) {
        var a = t(e.currentTarget).next(".landing_helper");
        a.is(":visible") ? a.hide() : a.fadeIn(250)
    }, a.prototype.initLastPackNotice = function() {
        this.packNotify = new LastPackNotify({
            usersMax: 150,
            repeat: !0,
            geo: lCountries.userCountryCode,
            city: "Москва",
            packCount: 57,
            packCountSelector: ".lastpack",
            male: "m",
            buyCount: 2,
            malePhrase: "{name} из г. {city} приобрел {count} шт. Осталось штук по акции: {newcount}",
            femalePhrase: "{name} из г. {city} купила {count} шт. Осталось штук по акции: {newcount}",
            repeatIterations: 3,
            startTime: 5e3,
            delayTime: 1e4,
            visibleTime: 5e3
        })
    }, t((function() {
        window.landing = new a
    }))
}(jQuery);

$(document).ready(function () {
    $('.owl-carousel').owlCarousel();
  });

const months=['styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad','grudzień'],monthMin = ['','','','','','','','','','','',''],days = ['niedziela','poniedziałek','wtorek','środa','czwartek','piątek','sobota'],daysMin = ['','','','','','',''],seasons = ['zima','wiosna','lato','jesień'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}