;(function($){
    $.fn.modal = function(opts) {   
        var $this = this;
        var defaults = {
            animate: false,
            mode: "",
            refreshInterval: 500,
            content: "<h1>I'm modal</h1>",
            afterOpen: function () {}
        };
        var options = $.extend({}, defaults, opts);
        var modalHtml = '' +
        '<div class="modal-box">' +
            '<div class="modal-box__inner">' +
                '<div class="modal-box__content">' +
                        options.content
                + '</div>' +
            '</div>' +
            '<div class="modal-box__close">✕</div>' +
        '</div>';
        var touchPoint = {
            startY: 0,
            endY: 0
        };
        
        /** 
            На будующее. Подумать об имитации нативной iOS анимации.
            Для использования других функций анимации использовать эту библиотеку:
            http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js
        */
        function animateScroll(scrollTo) {
            $('.modal-box').animate({
                scrollTop: scrollTo,
            }, {
                duration: 500,
                easing: "easeOutQuart"
            });
        }

        function calcDistance(point1, point2) {
            return point1 > point2 ? Math.abs(point1 - point2) : point1 - point2;
        }

        function scale() {
            return parseInt($('body').css("width"), 10) / window.innerWidth;
        }

        if ( !options.animate ) {
            $(document).on("click touchend", $this.selector, function() {
                $('.modal-box').show();
                $('html, body').addClass("modal-overflow");
            });

            $(document).on("click touchend", $(modalHtml).find(".modal-box__close").selector, function() {
                $(".modal-box").hide();
                $('html, body').removeClass("modal-overflow");
            });   
        } else {
            $(document).on("click touchend", $this.selector, function() {
                $('.modal-box').animate({
                    opacity: 1
                }, {
                    start: function() {
                        $(this).show();
                    },
                    step: function(n, t){
                        $(t.elem).css("transform", "scale("+ n +")");
                    },
                }, 500);
                
                $('html, body').addClass("modal-open");
            });

            $(document).on("click touchend", ".modal-box__close", function() {
                $('.modal-box').animate({
                    opacity: 0
                }, {
                    complete: function() {
                        $(this).hide();
                    },
                    step: function(n, t){
                        $(t.elem).css("WebKitTransform", "scale("+ n +")");
                        $(t.elem).css("MozTransform", "scale("+ n +")");
                        $(t.elem).css("OTransform", "scale("+ n +")");
                        $(t.elem).css("MSTransform", "scale("+ n +")");
                        $(t.elem).css("transform", "scale("+ n +")");
                    },
                }, 500);
                
                $('html, body').removeClass("modal-open");
            });
        }

        if ( !$('.modal-box').length ) {
            $('body').append(modalHtml);
            $('.modal-box').hide();

            options.afterOpen();

            if (options.mode) {
                $('.modal-box').addClass("modal-box--mode--" + options.mode);
            }
            
            if ( options.animate ) {
                $('.modal-box').css("opacity", 0);
            }

            /**
                Фиксируем время начала удержания
            */
            $('.modal-box').on("touchstart", function(e){
                if ( e.originalEvent.touches.length < 2 )  {
                    var oneFinger = e.originalEvent.touches[0];
                    touchPoint.startY = oneFinger.clientY;
                }
            });

            /**
                Событие touchmove используется для выполнения скролла с удержанием (без анимации)
            */
            $('.modal-box').on("touchmove", function(e){
                var oneFinger = e.originalEvent.touches[0];
                touchPoint.endY = oneFinger.clientY;

                /* разрешаем уменьшить zoom до исходного значения, если масштаб увеличен */
                if ( e.originalEvent.touches.length > 1 && scale() > 1 ) {
                    return true;
                }

                $(this).scrollTop( $(this).scrollTop() + calcDistance(touchPoint.startY, touchPoint.endY) );
                touchPoint.startY = touchPoint.endY;

                e.preventDefault();
            });

            if ( (parseInt($('.modal-box__content').css("height"), 10) + parseInt($('.modal-box__content').css("marginTop"), 10))  >=  window.innerHeight ) {
                $('.modal-box').addClass("modal-box--overflow");
            }
        }
    };
})(jQuery);