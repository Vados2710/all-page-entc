(function() {
    'use strict';

    var Messages = function() {
        this.infoBox = document.createElement('div');
        this.infoBox.style.color = '#000000';
        document.body.appendChild(this.infoBox);
    };

    Messages.prototype.add = function(msg) {
        var newMsg = document.createElement('div');
        newMsg.innerHTML = msg.text;

        if (msg.type === 'info') newMsg.style.backgroundColor = '#eeeeee';
        if (msg.type === 'err') newMsg.style.backgroundColor = '#ecc3c3';
        if (msg.type === 'ok') newMsg.style.backgroundColor = '#dfecc3';

        newMsg.style.padding = '10px';
        newMsg.style.marginBottom = '5px';
        newMsg.style.сolor = '#000000';

        this.infoBox.appendChild(newMsg);
    };

    var Test = function() {
        this.messages = new Messages();

        this.params = {
            ogrn: '1157746032608', //ОГРН номер для проверки соответствия реквизитов на странице
            //Запрещенные домены
            stopDomains: [
                'leadbit.com',
                'leadtop',
                'adcombo',
                'leadtrade',
                'leadbit.biz'
            ],
            //Зарпещенные библиотеки
            badLibs: [
                'jquery.plugin',
                'countdown',
                'scroll',
                'localScroll'
            ],
            //VIP библиотеки доступные с любого CDN
            vipLibs: [
                'codechecker',
                'lastpacknotify'
            ],
            maxCssFiles: 4
        };

        this.initTests();
    };

    Test.prototype.initTests = function() {

        this.messages.add({
            type: 'ok',
            text: 'Старт тестирования'
        });

        //Проверяем js
        this.checkJs();
        //Проверка GEO
        this.checkGeo();
        //Проверка CSS
        this.checkCSS();
        //Проверка форм на странице
        this.checkForm();
        //Проверка реквизитов
        this.checkFooter();
    };

    Test.prototype.checkFooter = function() {
        if(window.document.body.innerHTML.search(this.params.ogrn) != -1) {
            this.messages.add({
                type: 'ok',
                text: 'Реквизиты установлены верно'
            });
        } else {
            this.messages.add({
                type: 'err',
                text: 'Неверно указаны реквизиты.'
            });
        }
    };
    Test.prototype.checkGeo = function() {
        if (typeof lCountries === 'object') {
            this.messages.add({
                type: 'info',
                text: 'Проверка ГЕО: Выбрано ГЕО - ' + lCountries.userCountryCode + ' NGINX ГЕО - ' + lCountries.nginxCountryCode + ' ГЕО по умолчанию - ' + lCountries.defaultCountry
            });
            var aviableGeo = '';
            for (var key in lCountries.countries) {
                aviableGeo += key + ', ';
            }
            this.messages.add({
                type: 'info',
                text: 'Доступные ГЕО в countrylist: ' + aviableGeo
            });
        } else {
            this.messages.add({type: 'err', text: 'countries.js некорректно инициализирован или загружен.'});
        }
    };

    //Проверка js скриптов.
    Test.prototype.checkJs = function() {
        console.log('test - check js');
        var scripts = document.getElementsByTagName('script'),
            attrSrc = '',
            hardCodeCount = 0,
            cdnCountry = false,
            cdnDirect = false,
            cdnJquery = false;

        this.messages.add({
            type: 'info',
            text: 'JS скриптов на странице: ' + scripts.length
        });

        for (var i = 0, l = scripts.length; i < l; i++) {
            attrSrc = scripts[i].getAttribute('src');
            //Проверяем на хардкод
            if (scripts[i].getAttribute('src') === null) {
                hardCodeCount++;
            } else {
                //Проверка на сторонние скрипты
                for (var ii = 0, ll = this.params.stopDomains.length; ii < ll; ii++) {
                    if (attrSrc.search(this.params.stopDomains[ii]) !== -1) {
                        this.messages.add({
                            type: 'err',
                            text: 'Найден посторонний скрипт: ' + attrSrc
                        });
                    }
                }
                //Проверка на сторонние либы
                for (var iii = 0, lll = this.params.badLibs.length; iii < lll; iii++) {
                    if (attrSrc.search(this.params.badLibs[iii]) !== -1) {
                        this.messages.add({
                            type: 'err',
                            text: 'Используется запрещенная библиотека: ' + attrSrc
                        });
                    }
                }
            }
            //Проверка загружен ли country.js с нашего CDN
            if (attrSrc === '../cdn.shakesine.com/js/countries.js') cdnCountry = true;
            if (attrSrc === '../cdn.shakesine.com/js/jquery.js') cdnJquery = true;
            if (attrSrc === '../cdn.shakesine.com/js/shakesland.js') cdnDirect = true;
        }

        if (!cdnCountry) this.messages.add({
            type: 'err',
            text: 'countries.js не загружен CDN'
        });
        if (!cdnDirect) this.messages.add({
            type: 'err',
            text: 'shakesland.js не загружен CDN'
        });
        if (!cdnJquery) this.messages.add({
            type: 'err',
            text: 'jquery.js не загружен CDN'
        });

        this.messages.add({
            type: 'info',
            text: 'JS хардкод скриптов на странице: ' + hardCodeCount
        });

        if (typeof window.landing !== 'object') {
            this.messages.add({
                type: 'err',
                text: '_25D0_259D_25D0_25B5 _25D0_25B8_25D1_2581_25D0_25BF_25D0_25BE_25D0_25BB_25D1_258C_25D0_25B7_25D1_2583_25D0_25B5_25D1_2582_25D1_2581_25D1_258F main.js'
            });
        }
    };

    //Проверка CSS
    Test.prototype.checkCSS = function() {
        console.log('test - checkCSS');
        var css = document.getElementsByTagName('link'),
            findMinCss = false;

        if (css.length) {
            for (var i = 0, l = css.length; i < l; i++) {
                if (css[i].getAttribute('href').search('style.min.css') !== -1) findMinCss = true;
            }
        } else {
            if (css.getAttribute('href').search('style.min.css') !== -1) findMinCss = true;
        }

        if (!findMinCss) this.messages.add({type: 'err', text: 'style.min.css не обнаружен'});
        
        //Проверка CSS хардкода
        if(document.getElementsByTagName('style').length) {
            this.messages.add({type: 'err', text: 'На странице присутствует inline CSS хардкод.'});
        }    
    };

    //Проверка форм на лендинге
    Test.prototype.checkForm = function () {
        var forms = document.forms,
            form;

        this.messages.add({
            type: 'ok',
            text: 'Форм на лендинге: ' + forms.length
        });
        for (var i = 0, l = forms.length; i < l; i++) {
            form = forms[i];
            if (typeof form.elements.country === 'object' && typeof form.elements.name === 'object' && typeof form.elements.phone === 'object' && typeof form.elements.landing === 'object') {
                this.messages.add({
                    type: 'ok',
                    text: 'Форма #' + i + ' содержит все необходимые поля.'
                });
            } else {
                this.messages.add({
                    type: 'err',
                    text: 'В форме #' + i + ' присутствуют не все обязательные поля country, landing, name, phone'
                });
            }
        }
    };
    
    window.LeadbitTest = new Test();

})();