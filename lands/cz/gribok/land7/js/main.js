
(function ($) {
    'use strict';
    //Объявляем класс нашего лендинга
    var Landing = function () {
        this.nowDate = new Date();
        //Параметры загрузки лендинга
        this.params = {
            countDownDiff: Math.ceil((24 * 60 * 60) - (this.nowDate.getHours() * 60 * 60 + this.nowDate.getMinutes() * 60 + this.nowDate.getSeconds())), //Количество секунд до конца таймера
            selectors: {
                countDown: '.landing__countdown', //Таймер
                navigation: '.landing__navigation' //Попапы
            }
        };
        //Стартуем таймер
        this.initCountDown();
        this.initEvents();

        this.initSlider();
        
    };
    //Список ивентов лендинга
    Landing.prototype.initEvents = function () {
        $(this.params.selectors.navigation).on('mouseenter', 'a', this.popup).on('mouseleave', 'a', this.popup);
        $('body').on('click','.scroll', $.proxy(this.scroll,this));
    };
    //Таймер countdown
    Landing.prototype.initCountDown = function () {
        var _this = this,
            endDate = new Date(this.nowDate.getTime() + this.params.countDownDiff * 1000);
        var countDownTimer = setInterval(function () {
            var diffDate = new Date(endDate.getTime() - Date.now()),
                h = (diffDate.getHours() - 3 > 9) ? diffDate.getHours() - 3 : '0' + (diffDate.getHours() - 3),
                m = (diffDate.getMinutes() > 9) ? diffDate.getMinutes() : '0' + diffDate.getMinutes(),
                s = (diffDate.getSeconds() > 9) ? diffDate.getSeconds() : '0' + diffDate.getSeconds();
            var htmlTime = ' <div class="timer">' + 
                                '<div class="block">' + '<div class="rect hours for-win">'+ h +'</div>' + '<p>Hodin</p>' +'</div>' +  
                                '<div class="block">' + '<div class="rect mins for-win">'+ m +'</div>'  + '<p>Minut</p>' +'</div>' + 
                                '<div class="block">' + '<div class="rect secs for-win">'+ s +'</div>'  + '<p>Sekund</p>' +'</div>' + 
                                '<div class="clear"></div>' +
                            '</div>' ;
            $(_this.params.selectors.countDown).html(htmlTime);
        }, 1000);
    };
    //Всплывающие окна
    Landing.prototype.popup = function (event) {
        var $target = $(event.currentTarget);
        console.log($target);
        var $popup = $target.next('div.popup');
        $popup.is(':visible') ? $popup.hide() : $popup.show();
    };
    // скрролл к атрибуту href
    Landing.prototype.scroll = function(event){
        var $target = $(event.currentTarget).attr('href');
        $('html, body').animate({scrollTop:$($target).offset().top+80}, 1000);
        return false;
    };
    //Инициализация слайдера
    Landing.prototype.initSlider= function(){
        $('.lp__reviews').bxSlider({
            slideWidth: 920,
            minSlides:1,
            maxSlides:1,
            slideSelector: "div.lp__reviews_item"
        });
    };
    $(function () {
        window.landing = new Landing();
    });
})(jQuery);