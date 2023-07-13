!(function($, window, document) {
    'use strict';

    var pluginName = 'notificationsDesktop',
        defaults = {
            config: {
                people: {
                    endpoint: '', //initialized in NotificationsDesktop.init() method
                    delay: 60000, //in ms
                    duration: 10000, //in ms
                    animationDuration: 400 //in ms
                },
                buyers: {
                    endpoint: '', //initialized in NotificationsDesktop.init() method
                    delay: Math.floor((Math.random()*30000)+15000), //in ms
                    duration: 10000, //in ms
                    animationDuration: 400 //in ms
                }
            }
        };

    function NotificationsDesktop(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        
        this.peopleNotification = this.peopleNotification.bind(this);
        this.buyersNotification = this.buyersNotification.bind(this);

        this.init();
    }
    $.extend(NotificationsDesktop.prototype, {
        init: function() {
            this.buildCache();
            //
            this.buyers = [];
            //
            this.settings.config.people.endpoint = `${this.removeParams(window.location.href)}notification_people.php`;
            this.settings.config.buyers.endpoint = `${this.removeParams(window.location.href)}notification_buyers.php`;
            //
            this.peopleNotificationTimeout = setTimeout(this.peopleNotification, 10000);
            this.buyersNotificationTimeout = setTimeout(this.buyersNotification, 100);
        },
        buildCache: function () {
            this.$element = $(this.element);
        },
        destroy: function() {
            clearTimeout(this.peopleNotificationTimeout);
            clearTimeout(this.buyersNotificationTimeout);
            this.$element.removeData();
        },
        peopleNotification: function() {
            this.fetchNotification('people');
        },
        buyersNotification: function() {
            this.fetchNotification('buyers');
        },
        buildNotification: function(notificationData, cb, self) {

            var newNotification = this.schemaNotification(notificationData).clone().hide();

            this.$element.find('.notifications_wrapper').append(newNotification);
            newNotification.fadeIn(notificationData.animationDuration);

            setTimeout(function() {
                newNotification.fadeOut(notificationData.animationDuration, function() {
                    this.remove();
                });
            }, notificationData.duration);

            return cb();
        },
        schemaNotification: function(notificationData) {
            var newNotification = $(`<div></div>`);
            newNotification.addClass("notification");

            if(notificationData.h5) {
                newNotification.append(`<h5>${notificationData.h5}</h5>`);
            }

            for(var i = 0;i < notificationData.content.length;++i) {
                newNotification.append(`<p>${notificationData.content[i]}</p>`);
            }

            return newNotification;
        },
        fetchNotification: function(type) {
            var self = this;
            $.ajax({
                method: 'get',
                url: this.settings.config[type].endpoint
            }).done(function(data) {

                var notification = {
                    content: self.createContent(data, type),
                    duration: self.settings.config[type].duration,
                    delay: self.settings.config[type].delay,
                    animationDuration: self.settings.config[type].animationDuration
                };

                if(type === "buyers") {
                    notification.h5 = data.buyer.lastShopping;
                }

                self.buildNotification(notification, function() {
                    switch(type) {
                        case 'people':
                            return self.peopleNotificationTimeout = setTimeout(self.peopleNotification, self.settings.config[type].delay);
                        case 'buyers':
                            self.settings.config[type].delay = Math.floor((Math.random()*30000)+15000);
                            return self.buyersNotificationTimeout = setTimeout(self.buyersNotification, self.settings.config[type].delay);
                    }
                }, self);

            }).fail(function(err) {
                console.log(err);
            });
        },
        createContent: function(data, type) {
            switch(type) {
                case 'people':
                    return [data.message];
                case 'buyers':
                    var newBuyer = data.buyer;
                    newBuyer.when = new Date().getTime();
                    
                    this.pushAndClearBuyers(newBuyer);    

                    var lastBuyers = [],
                        newLastBuyer = {},
                        seconds,
                        minutes,
                        when;

                    for(var i = this.buyers.length-1;i >= 0;--i) {
                        if(lastBuyers.length >= 3) break;

                        newLastBuyer = this.buyers[i];
                        when = new Date().getTime() - newLastBuyer.when;

                        newLastBuyer.content = '';

                        seconds = Math.floor(when/1000);

                        if(seconds < 3) {
                            newLastBuyer.content += newLastBuyer.now;
                        } else if(seconds < 60) {
                            newLastBuyer.content += seconds+' '+newLastBuyer.sec;
                        } else {
                            minutes = Math.floor(seconds/60);
                            seconds = seconds % 60;

                            newLastBuyer.content += minutes+newLastBuyer.min+seconds+' '+newLastBuyer.sec;
                        }

                        newLastBuyer.content += ' '+newLastBuyer.who+' '+newLastBuyer.where;

                        lastBuyers.push(newLastBuyer.content);
                    }

                    return lastBuyers;
                default:
                    return 'Error';
            }
        },
        pushAndClearBuyers: function(newBuyer) {
            this.buyers.push(newBuyer);

            if(this.buyers.length > 3) {
                this.buyers.shift();
            }
        },
        removeParams: function(url) {
            return url.substring(0, url.indexOf('?'));
        }
    });
    ($.fn.notificationsDesktop = function(options) {
        return this.each(function() {
            $.data(this, "plugin_" + pluginName) ||
                $.data(this, "plugin_" + pluginName, new NotificationsDesktop(this, options));
        });
    });

})(jQuery, window, document);