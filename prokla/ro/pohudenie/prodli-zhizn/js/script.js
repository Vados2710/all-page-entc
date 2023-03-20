!(function($, window, document, undefined) {
    "use strict";
    $(document).ready(function() {
        $('body').css('position', 'relative');
        if ($('.sticky_bar_container').length === 0) {
            let sticky_bar_container = $('<div></div>');
            $(sticky_bar_container).addClass('sticky_bar_container');
            $(sticky_bar_container).css('position', 'sticky');
            $(sticky_bar_container).css('top', '0');
            $(sticky_bar_container).css('z-index', '1000');
            $('body').prepend($(sticky_bar_container));
        }
        $('body').find('.sticky_bar_container').prepend($('.sticky_bar_6'));
        window.addEventListener("scroll", function() {
            if (sticky_bar6 === true) {
                if ($(window).scrollTop() > $('.sticky_bar6-on').offset().top) {
                    sticky_bar6 = false;
                    $('.b5').hide();
                    $('.b6').fadeIn('slow');
                    countdown('.b6_counter', 24, 0);
                    setTimeout(function() {
                        $('.b6').fadeOut('slow');
                        $('.b7').fadeIn('slow');
                        sticky_bar7 = false;
                        $('.cta_fly').click(function() {
                            $('html, body').animate({
                                scrollTop: $(".container__form").offset().top
                            }, 1000);
                            $('.b7').fadeOut('slow');
                        });
                    }, 180000);
                }
            }
        });
    });
    var sticky_bar7 = true;
    var sticky_bar6 = true;
    function countdown(element, minutes, seconds) {
        if (sticky_bar7 === true) {
            var time = minutes * 60 + seconds;
            var interval = setInterval(function() {
                var el = document.querySelector(element);
                if (time <= 0) {
                    el.innerHTML = "00:00";
                    setTimeout(function() {
                        countdown('clock', 0, 5);
                    }, 2000);
                    clearInterval(interval);
                    return;
                }
                var minutes = Math.floor(time / 60);
                if (minutes < 10)
                    minutes = "0" + minutes;
                var seconds = time % 60;
                if (seconds < 10)
                    seconds = "0" + seconds;
                var text = minutes + ':' + seconds;
                el.innerHTML = text;
                time--;
            }, 1000);
        }
    }
}
)(jQuery, window, document);

!(function($, window, document) {
    'use strict';
    var pluginName = 'carousel'
      , defaults = {};
    function Carousel(element, options) {
        this.$element = $(element);
        this.settings = $.extend({}, defaults, options);
        this.prevBtn = this.$element.find(".btn-prev");
        this.nextBtn = this.$element.find(".btn-next");
        this.slides = this.$element.find(".carousel-item");
        this.actualSlide = 0;
        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.nextSlideAuto = this.nextSlideAuto.bind(this);
        this.init();
    }
    $.extend(Carousel.prototype, {
        init: function() {
            this.showSlider();
            this.switchSlide();
            this.bindEvents();
            this.nextSlideAuto();
        },
        showSlider: function() {
            this.$element.addClass("visible");
        },
        switchSlide: function() {
            this.hideAllSlides();
            this.showActualSlide();
        },
        hideAllSlides: function() {
            this.slides.hide();
        },
        showActualSlide: function() {
            $(this.slides[this.actualSlide]).show();
        },
        bindEvents: function() {
            this.prevBtn.bind("click", this.prevSlide);
            this.nextBtn.bind("click", this.nextSlide);
        },
        prevSlide: function() {
            if (this.actualSlide === 0)
                this.actualSlide = this.slides.length - 1;
            else
                --this.actualSlide;
            this.switchSlide();
        },
        nextSlide: function() {
            if (this.actualSlide === this.slides.length - 1)
                this.actualSlide = 0;
            else
                ++this.actualSlide;
            this.switchSlide();
        },
        nextSlideAuto: function() {
            let nextButton = this.nextBtn;
            setInterval(function() {
                nextButton.click()
            }, 10000);
        }
    });
    ($.fn.carousel = function(options) {
        return this.each(function() {
            $.data(this, "plugin_" + pluginName) || $.data(this, "plugin_" + pluginName, new Carousel(this,options));
        });
    }
    );
    document.addEventListener("DOMContentLoaded", function init() {
        var sidebarQuery = document.getElementsByClassName("sidebar_placeholder desktop");
        sidebarQuery = sidebarQuery.length > 0 ? sidebarQuery : document.getElementsByClassName("container__wrapper--sidebar desktop");
        if (sidebarQuery.length > 0) {
            var sidebar = sidebarQuery[0].lastElementChild;
            if (sidebar != null && typeof sidebar != "undefined" && window.pageYOffset > sidebar.offsetTop) {
                $(".main-carousel-wrapper").carousel();
            } else if (sidebar == null || typeof sidebar == "undefined") {
                return;
            } else {
                window.clearTimeout(window.carouselTimeout);
                window.carouselTimeout = setTimeout(function() {
                    init();
                }, 1000);
            }
        } else {
            $(".main-carousel-wrapper").carousel();
        }
    });
}
)(jQuery, window, document);

// scroll

var linkNav = document.querySelectorAll('[href^="#"]'),
V = 0.1;
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
        hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
        start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
            r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}

// date

const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['','','','','','','','','','','',''],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}