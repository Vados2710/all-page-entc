(function() {
    'use strict';

    // Хелперы
    var lfHelpers = {
        getRandomInt: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        getWordDeclension: function(wordVariants, amount) {
            // 5 единиц
            if (amount % 100 >= 5 && amount % 100 <= 20) {
                return wordVariants[2];
            }
            // 1 единица
            if (amount % 10 == 1) {
                return wordVariants[0];
            }
            // 2-4 единицы
            if (amount % 10 >= 2 && amount % 10 <= 4) {
                return wordVariants[1];
            }

            return wordVariants[2];
        }
    };
    // Шаблоны поп-апов
    var Templates = {
        stats: {
            visitors: function(data) {
                return '<span class="lf__stats_item__icon lf__stats_visitors__icon"></span>'+
                    '<span class="lf__stats_item__text">Посетителей сегодня</span>'+
                    '<span class="lf__stats_item__count lf__stats_visitors__count">'+ data.visitors +'</span>';
            },
            orders: function(data) {
                return '<span class="lf__stats_item__icon lf__stats_purchase__icon"></span>'+
                    '<span class="lf__stats_item__text">Купили сегодня</span>'+
                    '<span class="lf__stats_item__count lf__stats_purchase__count" id="lf__purchase_count">'+ data.orders +'</span>';
            },
            online: function(data) {
                return '<span class="lf__stats_item__icon lf__stats_online__icon"></span>'+
                    '<span class="lf__stats_item__text">Сейчас на сайте</span>'+
                    '<span class="lf__stats_item__count lf__stats_online__count lf__visitors_count">'+ data.online +'</span>';
            },
            full: function(data) {
                return '<div class="lf__stats_content">'+
                    '<div class="lf__stats_item lf__stats_visitors" id="lf__stats_visitors">'+ this.visitors(data) +'</div>'+
                    '<div class="lf__stats_item lf__stats_online" id="lf__stats_online">'+ this.online(data) +'</div>'+
                    '<div class="lf__stats_item lf__stats_purchase" id="lf__stats_purchase">'+ this.orders(data) +'</div>' +
                '</div>';
            }
        },
        visitors: function(data) {
            return '<span class="lf__visitors_icon"></span>' +
                '<div class="lf__visitors_text">' +
                    'Сейчас <span class="lf__visitors_count">'+ data.count +'</span> <span class="lf__visitors_phrase">'+ data.phrase +'</span> просмотривают эту страницу'+
                '</div>';
        },
        order: function(data) {
            return '<span class="lf__order_icon"></span>' +
                '<span class="lf__order_caption">' +
                    '<span class="lf__order_buyer">'+ data.name +'</span> '+
                    'г.<span id="lf__order_city">'+ data.city +'</span>'+
                '</span> <span id="lf_order_phrase">'+ data.phrase +'</span><span id="lf__orders_quantity">&nbsp;'+ data.quantity +'&nbsp;шт.</span>';
        },
        frozenPrice: function(data) {
            return '<div class="lf__price_caption">Мы заморозили цену!</div>'+
                '<div class="lf__price_subcaption">1$ = '+ data.equivalent +'</div>'+
                '<div class="lf__price_text">'+
                    'Осталось <span id="lf_goods_count">'+ data.count +'</span> <span id="lf_price_phrase">'+ data.phrase +'</span> по старому курсу!' +
                '<div>';
        },
        delivery: function(data) {
            return '<div class="lf__delivery_icon"></div>'+
                // '<div class="lf__delivery_caption">Доставка в <span class="lf__delivery_city">'+ data.city +'</span></div>'+
                '<div class="lf__delivery_caption">Внимание!</div>'+
                '<div class="lf__delivery_text">'+
                    // 'Действует быстрая доставка в <span class="lf__delivery_city">'+ data.city +'</span>'+
                    'Действует быстрая доставка в вашем городе'+
                '</div>';
        }
    };
    // Стили для поп-апов
    var Styles = '.lf__holder-left, .lf__holder-right{position:fixed;z-index:500;}'+
        '.lf__holder-left{bottom:140px;left:30px;}'+
        '.lf__holder-right{top:75px;right:30px;}'+
        '.lf__notice{position:relative;padding:10px 12px;border-radius:3px;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.3);}'+
        '.lf__notice:not(:last-of-type){margin-bottom:38px;}'+ 
        '.lf__notice_close{position:absolute;cursor:pointer;padding:4px;width:9px;height:9px;top:15px;right:17px;z-index:501;background:url(/cdn/image/landingfeatures/cross_white.png) no-repeat;background-position:center center;}'+
        '.lf__notice_content{position:relative;padding:13px 0 13px 70px}'+
        '.lf__notice.lf__stats{padding: 14px 0;text-align:center; width:100%;background:#000000;position:fixed;top:0;left:0;right:0;z-index:500;border-radius:0;}'+
        '.lf__stats .lf__notice_close{display:none;}'+
        '.lf__stats .lf__notice_content{margin: 0 auto;width: 960px;text-transform:uppercase;padding:0;}'+
        '.lf__stats_item{display:inline-block;margin:0 20px;font-size:18px;color:#ababab;}'+
        '.lf__stats_item__icon{display:inline-block;vertical-align:middle;margin-right:10px;}'+
        '.lf__stats_item__text{display:inline-block;vertical-align:middle;}'+
        '.lf__stats_item__count{display:inline-block;vertical-align:middle;width:53px;height:26px;line-height:26px;color:#f8f8f8;text-align:center;margin-left:8px;background:url(/cdn/image/landingfeatures/price_bg.png) no-repeat;}'+
        '.lf__stats_visitors__icon{width:15px;height:22px;background:url(/cdn/image/landingfeatures/user_icon.png) no-repeat;}'+
        '.lf__stats_online__icon{width:23px;height:21px;background:url(/cdn/image/landingfeatures/window_icon.png) no-repeat;}'+
        '.lf__stats_purchase__icon{width:24px;height:24px;background:url(/cdn/image/landingfeatures/cart_icon.png) no-repeat;}'+
        '.lf__stats_online .lf__visitors_count{color:#f8f8f8;}'+ 
        '.lf__notice.lf__delivery{background:#070707;width:410px}'+
        '.lf__delivery .lf__notice_content{border:1px dotted #333;}'+
        '.lf__delivery_icon{position:absolute;width:80px;height:80px;top:50%;margin-top:-40px;left:-10px;background:url(/cdn/image/landingfeatures/delivery_icon.png) no-repeat;}'+
        '.lf__delivery_caption{text-transform:uppercase;color:#e51f31;font-size:18px;line-height:22px;margin-bottom:3px}'+
        '.lf__delivery_text{font-size:15px;line-height:22px;color:#ababab;width:190px}'+
        '.lf__delivery_city{text-transform:}'+
        '.lf__notice.lf__visitors{background:#fff;width:410px}'+
        '.lf__visitors .lf__notice_close{background:url(/cdn/image/landingfeatures/cross_black.png) no-repeat;background-position:center center;}'+
        '.lf__visitors .lf__notice_content{border:1px dotted #e51f31}'+
        '.lf__visitors_icon{position:absolute;width:33px;height:31px;top:50%;margin-top:-15px;left:14px;background:url(/cdn/image/landingfeatures/online_icon.png) no-repeat;}'+
        '.lf__visitors_text{color:#000;font-size:15px;line-height:22px;width:220px}'+
        '.lf__visitors .lf__visitors_count{color:#e51f31;font-weight:600}'+
        '.lf__notice.lf__order{background:#000000;width:260px;margin: 0 auto;}'+
        '.lf__notice.lf__order:not(:last-of-type){margin: 0 auto 38px;}'+ 
        '.lf__order .lf__notice_close{display:none;}'+
        '.lf__order .lf__notice_content{padding:20px 10px 20px 75px;font-size:15px;line-height:22px;color:#ffffff;border:1px dotted #333}'+
        '.lf__order_caption{color:#ababab}'+
        '.lf__order_icon{position:absolute;width:80px;height:80px;top:50%;margin-top:-40px;left:-10px;background:url(/cdn/image/landingfeatures/order_icon.png) no-repeat;}'+
        '.lf__notice.lf__price{width:300px;max-height:144px;padding:10px 0;background:url(/cdn/image/landingfeatures/frozen_price_bg.png) no-repeat;box-sizing:border-box;box-shadow:none;}'+
        '.lf__price .lf__notice_close{top:0px;right:20px}'+
        '.lf__price .lf__notice_content{height:100%;padding:6px 10px;margin:0px 30px;background:#000;font-size:18px;line-height:22px;text-align:center;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.3);}'+
        '.lf__price_caption{color:#e51f31;text-transform:uppercase;}'+
        '.lf__price_subcaption{color:#fff;text-transform:uppercase;}'+
        '.lf__price_text{color:#ababab}';

    var Widget = function (options) {
        this.ui = {};
        this.data = {
            geo: (typeof lCountries != 'undefined') ? lCountries.userCountryCode : 'ru', //Текущее ГЕО
            city: (typeof GeoInfo != 'undefined') ? GeoInfo.city : 'Москва',
            maleNames: [
                'Иван Иванов','Сергей Трофимов','Виктор Буцких','Анатолий Ковальчук','Никита Сафонов',
                'Виктор Любушкин','Петр Синицын','Михаил Токовин','Владмир Владимирович','Дмитрий Гришин',
                'Сергей Боров','Виктор Дмитриев',
            ],
            femaleNames: [
                'Анастасия Луцук','Валерия Латаева','Валентина Трешаренко','Ольга Аникальчук',
                'Вероника Лабаева','Маргарита Дудаева','Елена Юшкова','Анастасия Спицына',
                'Елена Кобзак'
            ],
            cities: [
                'Москва','Санкт-Петербург','Новосибирск','Екатеринбург','Нижний Новгород',
                'Казань','Челябинск','Омск','Самара','Ростов-на-Дону','Уфа',
                'Красноярск','Пермь','Воронеж','Волгоград',
            ],
            getPrice: function() {
                return typeof lCountries != 'undefined' ? lCountries.countries[lCountries.userCountryCode]['price'] : '';
            },
            getCurrency: function() {
                return typeof lCountries != 'undefined' ? lCountries.countries[lCountries.userCountryCode]['labelPrice'] : '';
            },
            getDollarEquivalent: function() {
                return typeof lCountries != 'undefined' ? lCountries.countries[lCountries.userCountryCode]['dollarEquivalent'] : '';
            },
            getMaleNames: function() {
                return typeof lCountries != 'undefined' && typeof countryList[lCountries.userCountryCode]['nameRandomMaleHelper'] != 'undefined' ? countryList[lCountries.userCountryCode]['nameRandomMaleHelper'] : this.maleNames;
            },
            getFemaleNames: function() {
                return typeof lCountries != 'undefined' && typeof countryList[lCountries.userCountryCode]['nameRandomFemaleHelper'] != 'undefined' ? countryList[lCountries.userCountryCode]['nameRandomFemaleHelper'] : this.femaleNames;
            },
            getRandomMaleName: function() {
                var names = this.getMaleNames();
                return names[lfHelpers.getRandomInt(0, names.length - 1)];
            },
            getRandomFemaleName: function() {
                var names = this.getFemaleNames();
                return names[lfHelpers.getRandomInt(0, names.length - 1)];
            },
            getCities: function() {
                return typeof lCountries != 'undefined' && typeof countryList[lCountries.userCountryCode]['cityRandomHelper'] != 'undefined' ? countryList[lCountries.userCountryCode]['cityRandomHelper'] : this.cities;
            },
            getRandomCity: function() {
                var cities = this.getCities();
                return cities[lfHelpers.getRandomInt(0, cities.length - 1)];
            },
            getCurrentCity: function() {
                return typeof GeoInfo != 'undefined' ? GeoInfo.city : this.city;
            }
        };
        // Попапы опциональны
        this.options = $.extend({
            visitorsStat: false, // Блок в шапке лендинга с количеством поситителей и заказами
            onlineVisitors: false, // Блок с количеством пользователей на странице
            orderNotification: false, // Блок со сделавшими заказ посетителями
            frozenPrice: false, // Блок «Мы заморозили цену»
            deliveryInfo: false, // Блок с доставкой
        }, options);
        // Дефолтные параметры поп-апов
        this.params = {
            visitorsStat: {
                visitorsMin: 2000,
                visitorsMax: 6000,
                visitorsAddMin: 1,
                visitorsAddMax: 5,
                visitorsInterval: 10,
                purchaseMin: 120,
                purchaseMax: 250,
                purchaseAdd: 1,
                purchaseInterval: 15,
            },
            onlineVisitors: {
                timeout: 5,
                visitorsMin: 30,
                visitorsMax: 120,
                addMin: 3,
                addMax: 7,
                addInterval: 8,
                phrase: ['пользователь','пользователя','пользователей'],
            },
            orderNotification: {
                multipleMax: 3,
                intervalMin: 5,
                intervalAvg: Number(),
                intervalMax: 20,
                hideTimeout: 5,
                mPhrase: 'заказал',
                fPhrase: 'заказала',
                getAvgInterval: function() {
                    if (!this.intervalAvg) {
                        this.intervalAvg = lfHelpers.getRandomInt(this.intervalMin, this.intervalMax);
                    }
                    return this.intervalAvg;
                },
            },
            frozenPrice: {
                timeout: 15,
                itemsMin: 50,
                itemsMax: 130,
                phrase: ['товар','товара','товаров'],
            },
            deliveryInfo: {},
        };
        this.storage = {
            totalVisitors: lfHelpers.getRandomInt(this.params.visitorsStat.visitorsMin, this.params.visitorsStat.visitorsMax),
            onlineVisitors: lfHelpers.getRandomInt(this.params.onlineVisitors.visitorsMin, this.params.onlineVisitors.visitorsMax),
            currentPurchases: lfHelpers.getRandomInt(this.params.visitorsStat.purchaseMin, this.params.visitorsStat.purchaseMax),
            goodsLeft: lfHelpers.getRandomInt(this.params.frozenPrice.itemsMin, this.params.frozenPrice.itemsMax),
            creationDate: null
        };

        this.updateStorage();
        this.makeCSS();
        // Deprecated
        // this.getCity({
        //     onDone: this.initFeatures
        // });
        this.initFeatures();
        this.initEvents();
    };
    Widget.prototype.updateStorage = function() {
        var now = new Date();

        this.storage.creationDate = now.getDate();

        if (!localStorage.landingFeatures) {
            this.refreshStorage();
        } else {
            var localStorageData = JSON.parse(localStorage.landingFeatures);

            // Инфа в хранилище держится календарные сутки
            if (localStorageData.creationDate == now.getDate()) {
                this.storage = $.extend(this.storage, JSON.parse(localStorage.landingFeatures));
                if (this.storage.goodsLeft < 1) {
                    this.storage.goodsLeft = lfHelpers.getRandomInt(this.params.frozenPrice.itemsMin, this.params.frozenPrice.itemsMax)
                }
            } else {
                this.refreshStorage();
            }
        }
    };
    Widget.prototype.refreshStorage = function() {
        localStorage.landingFeatures = JSON.stringify(this.storage);
    };
    Widget.prototype.makeCSS = function () {
        var styleTag = document.createElement('style');
            styleTag.innerHTML = Styles;

        document.body.appendChild(styleTag);
    };
    // Deprecated
    // Widget.prototype.getCity = function (params) {
    //     var _this = this,
    //         params = $.extend({
    //             onDone: function() {},
    //         }, params);
        
    //     $.ajax({
    //         url: 'http://5.187.2.223/?geo=' + this.data.geo,
    //         type: 'GET',
    //         dataType: 'json'
    //     }).done(function (response, status){
    //         _this.data.city = response.localName;
    //     }).always(function() {
    //         params.onDone.call(_this);
    //     });
    // };
    Widget.prototype.initEvents = function() {
        var _this = this;
        
         window.onbeforeunload = function() {
            _this.refreshStorage();
        };

        // Отслеживания изменения селекта со страной
        var $countrySelects = document.getElementsByName('country');

        for (var i = 0, l = $countrySelects.length; i < l; i++) {
            $countrySelects[i].addEventListener('change', function() {
                _this.updateFrozenPrice();
            });
        }
    };
    Widget.prototype.initFeatures = function() {
        var _this = this,
            leftHolder = document.createElement('div'),
            rightHolder = document.createElement('div');

        leftHolder.id = 'lf__holder_left';
        leftHolder.className = 'lf__holder-left';
        rightHolder.id = 'lf__holder_right';
        rightHolder.className = 'lf__holder-right';
        document.body.appendChild(leftHolder);
        document.body.appendChild(rightHolder);

        this.ui.leftHolder = document.getElementById(leftHolder.id);
        this.ui.rightHolder = document.getElementById(rightHolder.id);

        // инициализация для некоторых блоков проходит с небольшой задержкой или интервалом
        if (this.options.visitorsStat == 1) {
            this.initCommonStats();
        }
        if (this.options.onlineVisitors == 1) {
            setTimeout(function() {    
                _this.initOnlineVisitors();
            }, this.params.onlineVisitors.timeout * 1000);
        }
        if (this.options.frozenPrice == 1) {
            setTimeout(function() {
                _this.initFrozenPrice();
            }, this.params.frozenPrice.timeout * 1000);
        }
        if (this.options.visitorsStat || this.options.orderNotification == 1) {
            this.initOrdersRecounter();
        }
        if (this.options.deliveryInfo == 1) {
            this.initDeliveryInfo();
        }
        // Счетчик «пользователи онлайн» (пересчет)
        if (this.options.visitorsStat == 1 || this.options.onlineVisitors == 1) {
            this.initOnlineRecounter();
        }
    };
    Widget.prototype.getNoticeContent = function(content) {
        return '<span class="lf__notice_close"></span><div class="lf__notice_content">' + content + '</div>';
    },
    Widget.prototype.getNoticeBlock = function(HTML, type, onClose) {
        var _this = this,
            $notice = document.createElement('div');

        $notice.className = 'lf__notice lf__' + type;
        $notice.id = 'lf_' + type;
        $notice.innerHTML = this.getNoticeContent(HTML);
        this.ui[type] = $notice;
        
        var $close = $notice.getElementsByClassName('lf__notice_close');

        if ($close.length) {
            $close[0].addEventListener('click', function() {
                _this.removeNoticeBlock($notice, type);
                if (typeof onClose == 'function') {
                    onClose();
                }
            });
        }

        return $notice;
    };
    Widget.prototype.removeNoticeBlock = function($notice, type) {
        $notice.remove();
        delete this.ui[type];
    };
    Widget.prototype.initCommonStats = function() {
        var _this = this,
            $notice = this.getNoticeBlock(Templates.stats.full({
                visitors: this.storage.totalVisitors,
                orders: this.storage.currentPurchases,
                online: this.storage.onlineVisitors
            }), 'stats');

        document.body.insertBefore($notice, document.body.firstElementChild);
        // добавляем отступ сверху, т.к. блок со статистикой фиксированый
        document.body.style.paddingTop = $notice.offsetHeight + parseInt(window.getComputedStyle(document.body).paddingTop) + 'px';

        this.ui.statsVisitors = document.getElementById('lf__stats_visitors');
        this.ui.statsOrders = document.getElementById('lf__stats_purchase');
        this.ui.statsOnline = document.getElementById('lf__stats_online');

        // Счетчик "посетителей сегодня"
        var totalVisitorsCounter = setInterval(function() {
                _this.recountTotalVisitors();
            }, this.params.visitorsStat.visitorsInterval * 1000);
    };
    Widget.prototype.recountTotalVisitors = function() {
        if (!this.ui.statsVisitors) {
            return;
        }
        this.storage.totalVisitors = this.storage.totalVisitors + lfHelpers.getRandomInt(this.params.visitorsStat.visitorsAddMin, this.params.visitorsStat.visitorsAddMax);
        this.ui.statsVisitors.innerHTML = Templates.stats.visitors({visitors: this.storage.totalVisitors});
    };
    Widget.prototype.initOnlineVisitors = function() {
        var _this = this,
            onClose = function() {
                _this.options.onlineVisitors = false;
            },
            $notice = this.getNoticeBlock(Templates.visitors({
                count: this.storage.onlineVisitors,
                phrase: lfHelpers.getWordDeclension(this.params.onlineVisitors.phrase, this.storage.onlineVisitors)
            }), 'visitors', onClose);

        this.ui.leftHolder.appendChild($notice);
    };
    Widget.prototype.initOnlineRecounter = function() {
        var _this = this,
            recountInterval;

        recountInterval = setInterval(function() {
            if (_this.options.visitorsStat != 1 && _this.options.onlineVisitors != 1) {
                return clearInterval(recountInterval);
            }
            _this.updateOnlineVisitorsCount();
            _this.updateOnlineVisitorsView();
        }, this.params.onlineVisitors.addInterval * 1000);
    };
    Widget.prototype.updateOnlineVisitorsCount = function() {
        if (lfHelpers.getRandomInt(0, 1) || this.storage.onlineVisitors < this.params.onlineVisitors.visitorsMin) {
            // увеличиваем количество посетителей
            this.storage.onlineVisitors = this.storage.onlineVisitors + lfHelpers.getRandomInt(this.params.onlineVisitors.addMin, this.params.onlineVisitors.addMax);
        } else {
            // уменьшаем количество посетителей
            this.storage.onlineVisitors = this.storage.onlineVisitors - lfHelpers.getRandomInt(this.params.onlineVisitors.addMin, this.params.onlineVisitors.addMax);
        }
    };
    Widget.prototype.updateOnlineVisitorsView = function() {
        var _this = this;

        // обновление в блоке статистики
        if (this.ui.statsOnline || this.ui.visitors) {
            var $counters = document.getElementsByClassName('lf__visitors_count');
            
            for (var i = 0, length = $counters.length; i < length; i++) {
                $counters[i].innerHTML = _this.storage.onlineVisitors;
            }
        }
        if (this.ui.visitors) {
            this.ui.visitors.getElementsByClassName('lf__visitors_count')[0].innerHTML = this.storage.onlineVisitors;
            this.ui.visitors.getElementsByClassName('lf__visitors_phrase')[0].innerHTML = lfHelpers.getWordDeclension(this.params.onlineVisitors.phrase, this.storage.onlineVisitors);
        }
    };
    Widget.prototype.initOrdersRecounter = function() {
        var _this = this,
            recountInterval;

        recountInterval = setInterval(function() {
            if (_this.options.visitorsStat != 1 && _this.options.orderNotification != 1) {
                return clearInterval(recountInterval);
            }

            var orderAmount = lfHelpers.getRandomInt(1, _this.params.orderNotification.multipleMax)
                    
            if (_this.options.orderNotification == 1) {
                // рендерим блок о заказе
                _this.renderOrderNotification(orderAmount);
            }
            // обновляем количество «купленного» товара
            _this.storage.currentPurchases += orderAmount;
            _this.storage.goodsLeft = _this.storage.goodsLeft - orderAmount;
            _this.updateRemainingCount();
        }, this.params.orderNotification.getAvgInterval() * 1000);
    };
    Widget.prototype.renderOrderNotification = function(orderAmount) {
        var _this = this,
            templateData = {
                city: this.data.getRandomCity(), // рандомный город
                quantity: lfHelpers.getRandomInt(2, 5), // рандомное кол-во заказанных позиций
            },
            $notice, hideTimeout;

        if (!orderAmount) {
            orderAmount = lfHelpers.getRandomInt(1, this.params.orderNotification.multipleMax);
        }
        // рандомный выбор «покупателя»
        if (lfHelpers.getRandomInt(0, 1)) {
            // мужской пол
            templateData['name'] = this.data.getRandomMaleName();
            templateData['phrase'] = this.params.orderNotification.mPhrase;
        } else {
            // женский пол
            templateData['name'] = this.data.getRandomFemaleName();
            templateData['phrase'] = this.params.orderNotification.fPhrase;
        }

        $notice = this.getNoticeBlock(Templates.order(templateData), 'order');
        if (this.ui.rightHolder) {
            this.ui.rightHolder.insertBefore($notice, this.ui.rightHolder.firstElementChild);

            hideTimeout = setTimeout(function() {
                _this.removeNoticeBlock($notice, 'order')
                clearTimeout(hideTimeout);
            }, this.params.orderNotification.hideTimeout * 1000);
        }
    };
    // Инициализация, рендер блока «мы заморозили цену»
    Widget.prototype.initFrozenPrice = function() {
        var _this = this,
            onClose = function() {
                _this.options.frozenPrice = false;
            },
            $notice = this.getNoticeBlock(this.getFrozenPriceTemplate(), 'price', onClose);

        this.ui.rightHolder.appendChild($notice);
    };
    // При смене страны в форме, меняем валюту в блоке «мы заморозили цену»
    Widget.prototype.updateFrozenPrice = function() {
        if (this.ui.price) {
            this.removeNoticeBlock(this.ui.price, 'price');
            this.initFrozenPrice();
        }
    };
    // Возвращает шаблон блока «мы заморозили цену»
    Widget.prototype.getFrozenPriceTemplate = function() {
        return Templates.frozenPrice({
            equivalent: this.data.getDollarEquivalent() ? this.data.getDollarEquivalent() : '45 руб',
            count: this.storage.goodsLeft,
            phrase: lfHelpers.getWordDeclension(this.params.frozenPrice.phrase, this.storage.goodsLeft),
        });
    };
    Widget.prototype.updateRemainingCount = function() {
        var $purchaseCount = document.getElementById('lf__purchase_count');

        if ($purchaseCount) {
            // обновляем количество заказов в блоке статистики
            $purchaseCount.innerHTML = this.storage.currentPurchases;
        }
        if (this.options.frozenPrice) {
            // текст об остатках в блоке «фиксированая цена»
            if (this.ui.price) {
                // document.getElementById('lf_goods_count').innerHTML = this.storage.goodsLeft;
                document.getElementById('lf_price_phrase').innerHTML = lfHelpers.getWordDeclension(this.params.frozenPrice.phrase, this.storage.goodsLeft);
            }
            // if (this.storage.goodsLeft <= 1) {
            //     // если товары «закончились», удаляем блок «фиксированая цена»
            //     if (this.ui.price) {
            //         this.removeNoticeBlock(this.ui.price, 'price');
            //     }
            //     this.options.frozenPrice = false;
            // }
        }
    };
    Widget.prototype.initDeliveryInfo = function() {
        var _this = this,
            onClose = function() {
                _this.options.deliveryInfo = false;
            },
            $notice = this.getNoticeBlock(Templates.delivery(), 'delivery', onClose);
            // $notice = this.getNoticeBlock(Templates.delivery({city: this.data.city}), 'delivery', onClose); // временно отключено (название города в поп-апе)

        this.ui.leftHolder.appendChild($notice);
    };

    window.LandingFeatures = function(options) {
        return new Widget(options);
    };

})();