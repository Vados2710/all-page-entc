(function (scrollSmooth, headerMenu, banner, reviews) {
    'use strict';

    function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {
        function innerDate(counter, dateType) {
            let newCounter;
            dateType === 'date-' ? newCounter = -counter : newCounter = counter;
            const _msInDay = 86400000,
                _localDate = new Date(Date.now() + newCounter * _msInDay),
                _day = _localDate.getDate(),
                _month = _localDate.getMonth() + 1,
                _year = _localDate.getFullYear();
            const dayDefault = addZero(_day),
                monthDefault = addZero(_month),
                defaultDate = dayDefault + '.' + monthDefault + '.' + _year;
            const dateClass = dateType + counter,
                nodeList = document.querySelectorAll('.' + dateClass);
            for (let i = 0; i < nodeList.length; i++) {
                const dateFormat = nodeList[i].dataset.format;
                dateFormat !== undefined && dateFormat !== '' ? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)) : nodeList[i].innerHTML = defaultDate;
            }
        }

        function changeFormat(_day, _month, _year, format, counter) {
            let innerFormat = format;
            const testFormat = ['dd', 'mm', 'yyyy', 'dayFull', 'monthFull', 'season', 'year'],
                dateFormat = {
                    dd: _day,
                    mm: addZero(_month),
                    yyyy: _year,
                    dayFull: getDaysName(_day, _month, _year, daysName, !1),
                    monthFull: getMonthName(_month, monthsName, !1),
                    year: getYearWithCounter(_year, counter),
                    season: getSeasonsName(seasonsName, _month, !1)
                };
            for (let i = 0; i < testFormat.length; i++) {
                let string = testFormat[i];
                let regExp = new RegExp(string);
                innerFormat = innerFormat.replace(regExp, dateFormat[string]);
            }
            return innerFormat.split(' ').join('\xA0');
        }

        function getDaysName(_day, _month, _year, daysName, bigFirstLetter) {
            return changeFirstLetter(bigFirstLetter, daysName[new Date(_year, _month - 1, _day).getDay()]);
        }

        function getMonthName(_month, monthsName, bigFirstLetter, counter) {
            const monthCounter = counter ? counter : 0;
            let month;
            return _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter, _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter, changeFirstLetter(bigFirstLetter, monthsName[month - 1]);
        }

        function getSeasonsName(array, month, bigFirstLetter) {
            const monthNumber = month === 12 ? 0 : month,
                seasonIndex = monthNumber / 3 < 0 ? Math.ceil(monthNumber / 3) : Math.floor(monthNumber / 3);
            return changeFirstLetter(bigFirstLetter, array[seasonIndex]);
        }

        function getYearWithCounter(year, counter) {
            return year + counter;
        }

        function addZero(numb) {
            return numb < 10 ? '0' + numb : numb;
        }

        function changeFirstLetter(isBig, str) {
            return isBig && str && str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str;
        }
        const _counterLength = 60;
        for (let counter = 0; counter < _counterLength; counter++) innerDate(counter, 'date-'), innerDate(counter, 'date');
    }

    function symptom() {
        $(document).ready(function () {
            $(function () {
                var mySwiper = new Swiper('.swiper-container', {
                    direction: 'horizontal',
                    loop: !0,
                    initialSlide: 1,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: !0
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: !0
                    },
                    slidesPerView: 'auto',
                    centeredSlides: !0,
                    effect: 'coverflow',
                    grabCursor: !0,
                    autoHeight: !0,
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 0,
                        depth: 930,
                        modifier: 1,
                        slideShadows: !1
                    },
                    breakpoints: {
                        1189: {
                            spaceBetween: 0,
                            coverflowEffect: {
                                depth: 920
                            }
                        },
                        1023: {
                            coverflowEffect: {
                                depth: 1070
                            }
                        },
                        767: {
                            coverflowEffect: {
                                depth: 0
                            }
                        }
                    }
                });
            });
        });
    }

    function main() {
        scrollSmooth(), symptom(), banner(), reviews();
    }
    const months = ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'],
        monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''],
        days = ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă'],
        daysMin = ['', '', '', '', '', '', ''],
        seasons = ['iarnă', 'arc', 'vară', 'toamnă'];
    document.body.classList.contains('ev-date') && document.addEventListener('DOMContentLoaded', function () {
        postDate(days, daysMin, months, monthMin, seasons);
    }), scrollSmooth = function () {
        $(document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault(), $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        });
    }, headerMenu = function () {
        $(function () {
            var $navElement = $('.nav__overlay');
            var $navOpen = $('.nav__open');
            var $navClose = $('.nav__close');
            var show = function show() {
                $navElement.fadeIn(), $navOpen.fadeOut(), $(document.documentElement).css('overflow', 'hidden');
            };
            var hide = function hide() {
                $navElement.fadeOut(), $navOpen.fadeIn(), $(document.documentElement).css('overflow', 'auto');
            };
            $navOpen.click(function (evt) {
                evt.preventDefault(), show();
            }), $navClose.click(function (evt) {
                evt.preventDefault(), hide();
            }), $('.nav__link').on('click', function (evt) {
                evt.preventDefault(), hide();
                var id = $(this).attr('href');
                if (!id) return;
                var top = $(id).offset().top + 1;
                $('body,html').animate({
                    scrollTop: top
                }, 1500);
            });
        });
    }, banner = function () {
        $(document).ready(function () {
            function hideBannerScroll() {
                var e = $('.banner'),
                    t = $('.main-banner'),
                    i = $(window).scrollTop(),
                    o = i + $(window).height(),
                    r = $(window).width();
                var n = 0;
                for (var _e = 0; _e < arguments.length; _e++) $(arguments[_e]).each(function (e, t) {
                    var a = $(t).offset().top,
                        c = a + $(t).outerHeight(),
                        s = $(t).offset().left,
                        l = s + $(t).width();
                    a <= o && c >= i && s <= r && l >= 0 && (n += 1);
                });
                i <= 100 || n > 0 ? e.fadeOut() : e.fadeIn().css({
                    bottom: t.outerHeight()
                });
            }
            $('.banner').fadeOut();
            var isNavLink = !1;
            $('.scroll-link').on('click', function () {
                isNavLink = !0, setTimeout(function () {
                    $('.banner').fadeIn(), isNavLink = !1;
                }, 500);
            }), $(window).on('scroll resize', function () {
                isNavLink || hideBannerScroll('.form, .action1__content, .action2');
            });
        });
    }, reviews = function () {
        $(document).ready(function () {
            function clearSliderItemState() {
                var allText = $('.js-comment');
                allText.attr('data-expanded', 'false'), more.removeClass('active'), allText.removeClass('show'), allText.css({
                    maxHeight: allText.height() + 'px'
                });
            }
            $('.js-reviews-slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: '<svg class="arrow-left slick-arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" style=""><g><g><path d="M0 11H.51L9.435.151l1.414 1.413L3.086 11H40v2H3.087l7.762 9.435-1.414 1.414L.51 13H0z"></path></g></g></svg>',
                nextArrow: '<svg class="arrow-right slick-arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" style=""><g><g><path d="M0 11h36.914l-7.763-9.436L30.565.151l8.926 10.85H40v2h-.51l-8.925 10.848-1.414-1.414L36.913 13H0z"></path></g></g></svg>',
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            }), $('.js-reviews-slider').on('beforeChange', function () {
                clearSliderItemState();
            });
            var more = $('.js-show-comment');
            more.on('click', function () {
                var parent = $(this).parent();
                var text = parent.children('.js-comment');
                if (text.attr('data-expanded') == 'false') {
                    var allText = $('.js-comment');
                    text.addClass('show'), allText.not(text).css({
                        maxHeight: allText.height() + 'px'
                    }), allText.not(text).removeClass('show'), allText.attr('data-expanded', 'false'), more.removeClass('active'), $(this).addClass('active'), text.attr('data-expanded', 'true'), text.css({
                        'max-height': text[0].scrollHeight + 'px'
                    });
                } else clearSliderItemState();
            });
            var toggleFormBtn = $('.toggle-form-btn');
            var reviewsCta = $('.reviews-cta');
            var reviewsInputsWrap = $('.reviews-form__field-wrap');
            var inputCity = $('.input-city');
            var inputFile = $('.input-file');
            var labelFile = $('.reviews-form__file');
            var reviewsInput = $('.reviews-input');
            var reviewsInputText = $('.reviews-input-text');
            var reviewsInputTextarea = $('.reviews-form__textarea');
            var reviewsInputTextareaJS = document.querySelector('.reviews-form__textarea');
            var reviewsInputName = $('.reviews-form__input-name');
            var reviewsPopup = $('.reviews-popup');
            var fileText = $('.reviews-form__file-text');
            var fileImg = $('.reviews-form__file-img img');
            var fileIcon = $('.reviews-form__checkmark-icon');
            var fileFlag = !0;
            reviewsInputTextareaJS.value = '', reviewsInputTextarea.on('input', function () {
                $(this).val().trim().length > 0 ? $(this).addClass('o-auto') : $(this).removeClass('o-auto');
            }), inputFile.change(function (e) {
                inputFile.val() && fileFlag && (fileText.html('Fotografia este încărcată!'), fileImg.hide(), fileIcon.show(), labelFile.addClass('rloaded'), fileFlag = !1);
            }), fileImg.on('click', function () {
                inputFile.trigger('click');
            }), inputCity.on('input', function () {
                var that = this;
                setTimeout(function () {
                    var res = /[^a-zA-Zа-яА-ЯїЇєЄіІёЁ ]/g.exec(that.value);
                    that.value = that.value.replace(res, ''), that.value.replace(res, '').length === 0 ? (that.parentElement.classList.add('invalid'), that.parentElement.classList.remove('valid')) : (that.parentElement.classList.remove('invalid'), that.parentElement.classList.add('valid'));
                }, 0);
            }), reviewsInputText.on('input', function () {
                var that = this;
                setTimeout(function () {
                    var res = /[^a-zA-Zа-яА-ЯїЇєЄіІёЁ ]/g.exec(that.value);
                    that.value = that.value.replace(res, ''), that.value.replace(res, '').length === 0 ? (that.parentElement.classList.add('invalid'), that.parentElement.classList.remove('valid')) : (that.parentElement.classList.remove('invalid'), that.parentElement.classList.add('valid'));
                }, 0);
            }), reviewsInputTextareaJS.addEventListener('input', function () {
                var that = this;
                that.value.length === 0 ? (that.parentElement.classList.add('invalid'), that.parentElement.classList.remove('valid')) : (that.parentElement.classList.remove('invalid'), that.parentElement.classList.add('valid'));
            }), inputFile.click(function () {
                return fileFlag ? void 0 : !1;
            }), toggleFormBtn.on('click', function () {
                toggleFormBtn.hide(), reviewsCta.show();
            }), $('.reviews-form').submit(function () {
                inputCity.val() !== 0 && reviewsInputTextarea.val().length !== 0 && reviewsInputName.val().length !== 0 ? (reviewsCta.hide(), toggleFormBtn.show(), reviewsPopup.fadeIn(), event.preventDefault(), setTimeout(function () {
                    reviewsPopup.fadeOut();
                }, 2000), fileFlag = !0, reviewsInput.val(''), fileText.html('Atașați fotografia'), fileImg.show(), fileIcon.hide(), labelFile.removeClass('rloaded'), reviewsInputsWrap.removeClass('invalid'), reviewsInputsWrap.removeClass('valid'), $('.reviews-form__star').removeClass('filled')) : (reviewsInputsWrap.each(function (i) {
                    reviewsInputsWrap[i].classList.contains('valid') || reviewsInputsWrap[i].classList.add('invalid');
                }), event.preventDefault());
            });
        });
    }, headerMenu(), document.documentElement.clientWidth < 480 ? window.addEventListener('scroll', function () {
        return setTimeout(main, 1000);
    }, {
        once: !0
    }) : main();
}());