(function ($) {
    'use strict';
    //Отдельном выносим языки, для более простой локализации

    //Объявляем класс нашего лендинга
    var Landing = function () {
        this.nowDate = new Date();

        //Параметры загрузки лендинга
        this.params = {
            lang: 'ru', //локализация
            maxPurchase: 2419, //Максимальное кол-во покупок
            maxPurchaseDate: 2, //Количество дней назад
            startStockDate: 29, //Дней назад началась акция
            endStockDate: 1, //Дней через которые акция закончится
            lastPackTime: 15, //Секунд, через которое уменьшится количество оставшихся на складе упаковок
            countDownDiff: Math.ceil((24 * 60 * 60) - (this.nowDate.getHours() * 60 * 60 + this.nowDate.getMinutes() * 60 + this.nowDate.getSeconds())), //Количество секунд до конца таймера
            selectors: {
                countDown: '.landing__countdown', //Таймер
                maxPurcahesDate: '.landing__maxpurcashe', //Максимальное кол-во покупок
                stockInfo: '.landing__stockinfo',
                stockInfoTitle: '.landing__stockinfo_title',
                lastPack: '.landing__lastpack'
            }
        };
        //Стартуем таймер
        this.initCountDown();

    };
    //Список ивентов лендинга




    //Таймер countdown
    Landing.prototype.initCountDown = function () {
        var _this = this,
                endDate = new Date(this.nowDate.getTime() + this.params.countDownDiff * 1000);
        var countDownTimer = setInterval(function () {
            var diffDate = new Date(endDate.getTime() - Date.now()),
                    h = (diffDate.getHours() > 9) ? diffDate.getHours() : '0' + diffDate.getHours(),
                    m = (diffDate.getMinutes() > 9) ? diffDate.getMinutes() : '0' + diffDate.getMinutes(),
                    s = (diffDate.getSeconds() > 9) ? diffDate.getSeconds() : '0' + diffDate.getSeconds();
            var htmlTime = '<span class="hours">' + h + '</span>' +
                    '<span class="minutes">' + m + '</span>' +
                    '<span class="seconds">' + s + '</span>';
            $(_this.params.selectors.countDown).html(htmlTime);
        }, 1000);
    };









    $(function () {
        window.landing = new Landing();
    });

})(jQuery);

$(document).ready(function () {

    $('[data-toggle="scroll"]').on("click", function (e) {
        var anchor = $(this).attr("data-id");
        var bodyLeft = $("body").css("left");
        if (bodyLeft == "200px") {
            $("body").animate({
                left: "-=200px"
            }, 500);
        }
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top
        }, 1000);
        e.preventDefault();
    });
});
