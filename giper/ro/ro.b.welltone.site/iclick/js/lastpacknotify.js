(function(){
    'use strict';

    window.LastPackNotify = function (params) {

        //Мужские имена
        this.mNames = [
            'Иван Иванов',
            'Сергей Трофимов',
            'Виктор Буцких',
            'Анатолий Ковальчук',
            'Виктор Любушкин',
            'Петр Синицын',
            'Михаил Токовин',
            'Владмир Владимирович',
            'Дмитрий Гришин',
            'Сергей Боров',
            'Виктор Дмитриев'
        ];

        //Женские имена
        this.fNames = [
            'Анастасия Луцук',
            'Валерия Латаева',
            'Валентина Трешаренко',
            'Ольга Аникальчук',
            'Вероника Лабаева',
            'Маргарита Дудаева',
            'Юшкова Елена',
            'Анастасия Спицына',
            'Елена Кобзак'
        ];
        
        this.countIteration = 0;

        //Дефолтные параметры
        this.params = $.extend({
            usersMin: 50, //Минимальное количество пользователей
            usersMax: 150, //Макс количество пользователей
            repeat: true, //Повторять вывод нотисов
            geo: lCountries.userCountryCode, //Текущее ГЕО
            city: 'Москва', //Город по умолчанию
            packCount: 120, //Кол-во на старте
            packCountSelector: null, //Класс для обновления инфы о количестве
            male: 'm', // m - male , f - female 
            buyCount: 2, //Количество штук на 1 покупку
            malePhrase: '{name} из г. {city} приобрел {count} шт. Осталось штук по акции: {newcount}', //Фраза для мужчин
            femalePhrase: '{name} из г. {city} купила {count} шт. Осталось штук по акции: {newcount}', //Фраза для женщин
            repeatIterations: 3, //Показов покупок между нотисом с пользователями
            startTime: 5 * 1000, //ms - перед стартом показа,
            delayTime: 10 * 1000, //ms - задержка между показами
            visibleTime: 5 * 1000 //ms - время показа
        }, params);

        //Добавим CSS
        this.makeCSS();

        //Получим город
        this.getCity();
    };

    LastPackNotify.prototype.getCity = function () {
        var _this = this;
        $.ajax({
            url: '../5.187.2.223/@geo=' + this.params.geo,
            type: 'GET',
            dataType: 'json',
            xhrFields: {
                withCredentials: false
            },
        }).done(function (response, status){
            if (status == 200) {
                _this.params.city = response.localName;
            }           
        });
        _this.startNotify();
    };

    LastPackNotify.prototype.startNotify = function () {
        var _this = this,
            startTimeout = setTimeout(function(){
                _this.makeUsersNotice.call(_this);
                clearTimeout(startTimeout);
            }, this.params.startTime);
    };

    LastPackNotify.prototype.makeCSS = function () {
        var CSS = '.lpn__notice {' +
                    'z-index:9999;font-size:16px;border-radius: 5px; position: fixed;right: 20px;top: 215px;opacity: 1;padding: 20px;width: 320px;color: #fff;background: rgba(0,0,0, 0.8);' +
                  '}' + 
                  '.lpn__notice-user { line-height: 40px; }'+
                  '.lpn__newcount {' + 
                    'color: #77ca16;animation: lpn__blink 1s infinite;'+
                  '}' + 
                  '.lpn__addcount_value {' + 
                    'animation: lpn__blink 1s infinite; line-height:30px; position: absolute; bottom: -5px; background: #77ca16; width: 30px; height: 30px; display: inline-block; text-align: center; border-radius: 20px; font-size: 16px; right: -5px;'+
                  '}' + 
                  '.lpn__usersonline {' +
                    'float: left; width: 40px; height: 40px; margin-right: 15px; background-size: 40px;' + 
                    'background: url("../cdn.shakesine.com/image/usresonline.png");'+ 
                  '}' +
                  '.lpn__addcount {' + 
                    'background: url("../cdn.shakesine.com/image/lastpacknotifies.png");'+
                    'height: 44px; width: 60px; line-height: 22px; float: left; margin-right: 15px; position: relative;' +
                  '}' + 
                  '@keyframes lpn__blink {'+
                      '0%   { opacity: 0; }'+
                      '50% { opacity: 1; }'+
                      '100% { opacity: 0; }'+
                    '}';

        var style = document.createElement('style');
            style.innerHTML = CSS;

        document.body.appendChild(style);
    };

    LastPackNotify.prototype.makeNotice = function () {
        var notice = document.createElement('div'),
            _this = this,
            city = this.params.city,
            message = "",
            name = "";

        if(this.params.male === 'm') {
            message = this.params.malePhrase.replace('{city}', this.params.city);
            name = this.mNames[this.getRandomInt(0, this.mNames.length-1)];
        } else {
            message = this.params.femalePhrase.replace('{city}', this.params.city);
            name = this.fNames[this.getRandomInt(0, this.fNames.length-1)];
        }

        message = message.replace('{name}', name);
        message = message.replace('{count}', this.params.buyCount);

        this.params.packCount = this.params.packCount - this.params.buyCount;
        
        message = message.replace('{newcount}', '<span class="lpn__newcount">' + this.params.packCount + '</span>');

        $(notice).addClass('lpn__notice');
        $(notice).append('<div class="lpn__addcount"><span class="lpn__addcount_value">+'+this.params.buyCount+'</span></div>');
        $(notice).append('<div class="lpn__body">'+ message +'</div>');

        //Добавляем на страницу нотис
        $(document.body).append(notice);

        if(this.params.packCount <= 2) this.params.packCountSelector = 2;

        //Обновим информацию о количестве на странице
        if(this.params.packCountSelector !== null) {
            $(this.params.packCountSelector).html(this.params.packCount);
        }

        //Прячем уведомление
        var hideTimeout = setTimeout(function() {
            $(notice).fadeOut(500, function(){
                $(notice).remove();
                _this.countIteration++;
                clearTimeout(hideTimeout);
                //Если включен повтор - повторим)
                if(_this.params.repeat === true) {


                   var newTimeNotice = setTimeout(function() {
                        if(_this.countIteration > _this.params.repeatIterations) {
                            _this.countIteration = 0;
                            _this.makeUsersNotice.call(_this);
                        } else {
                            _this.makeNotice.call(_this);
                        }
                        clearTimeout(newTimeNotice);
                   }, _this.params.delayTime); 
                }
            });
        }, this.params.visibleTime);
    };

    LastPackNotify.prototype.makeUsersNotice = function () {
        var usersCount = this.getRandomInt(this.params.usersMin, this.params.usersMax),
            _this = this,
            notice = document.createElement('div');

            $(notice).addClass('lpn__notice lpn__notice-user');
            $(notice).append('<div class="lpn__usersonline"></div><div class="lpn__body">Сейчас пользователей на сайте '+ usersCount +'</div>');

            $(document.body).append(notice);

        var hideTimeout = setTimeout(function(){
            $(notice).fadeOut(500, function(){
                $(notice).remove();
                _this.countIteration = 0;
                clearTimeout(hideTimeout);

                var newTimeNotice = setTimeout(function () {
                    _this.makeNotice.call(_this);
                    clearTimeout(newTimeNotice);
                }, _this.params.delayTime);
            });
        }, this.params.visibleTime);
    };

    LastPackNotify.prototype.getRandomInt = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

})();