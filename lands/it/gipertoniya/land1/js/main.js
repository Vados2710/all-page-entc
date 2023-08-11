(function () {
    'use strict';

    if (document.body.classList.contains('ev-date')) {
        var postDate = function postDate() {
            var msInDay = 86400000,
                counterLength = 90,
                countryName = 'it',
                // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн" і т.д, тоді ставим TRUE.
                localDate = new Date();
            var months;

            switch (countryName) {
                case 'it':
                    // Italy
                    months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
                    break;
            }

            for (var counter = 0; counter < counterLength; counter++) {
                var dateClass = "date-" + counter,
                    nodeList = document.getElementsByClassName(dateClass),
                    date = new Date(localDate.getTime() - counter * msInDay);
                var timeCounter = 0,
                    timeArray = time(nodeList
                        /*, true*/
                    ); // Розкоментувати, якщо необхідне сортування в порядку спадання.

                timeArray = timeFormat(timeArray);

                for (var _i = 0; _i < nodeList.length; _i++) {
                    var data = nodeList[_i].dataset;
                    data.format ? nodeList[_i].innerHTML = format(date, data.format) // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
                        // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
                        : nodeList[_i].innerHTML = format(date
                        /*, "dd month yyyy"*/
                        ); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

                    if (/\btime\b/.test(nodeList[_i].className)) {
                        nodeList[_i].innerHTML += " " + timeArray[timeCounter]; // Рядок для формату виводу часу.

                        timeCounter++;
                    }
                }
            } // <span clas="date-NUMBER"></span> - мотає час назад на NUMBER днів. Наприклад, <span className="date-5"></span>
            // <span clas="dateNUMBER"></span> - мотає час вперед на NUMBER днів. Наприклад, <span className="date5"></span>


            for (var _counter = 0; _counter < counterLength; _counter++) {
                var _dateClass = "date-" + _counter,
                    _nodeList = document.getElementsByClassName(_dateClass),
                    _date = new Date(localDate.getTime() - _counter * msInDay);

                var _timeArray = time(_nodeList
                    /*, true*/
                ); // Розкоментувати, якщо необхідне сортування в порядку спадання.


                _timeArray = timeFormat(_timeArray);

                for (var _i2 = 0; _i2 < _nodeList.length; _i2++) {
                    var _data = _nodeList[_i2].dataset;
                    _data.format ? _nodeList[_i2].innerHTML = format(_date, _data.format) // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
                        // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
                        : _nodeList[_i2].innerHTML = format(_date
                        /*, "dd month yyyy"*/
                        ); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
                }
            }

            function time(nodeList, reverse) {
                var timeArray = [];

                for (var _i3 = 0; _i3 < nodeList.length; _i3++) {
                    nodeList[_i3].className.match(/\btime\b/) ? timeArray.push(timeRandom()) : false;
                }

                if (reverse) timeArray.sort(function (a, b) {
                    return b - a;
                }); else timeArray.sort(function (a, b) {
                    return a - b;
                });
                return timeArray;
            }

            function timeRandom() {
                return Math.round(Math.random() * 1440);
            }

            function timeFormat(timeArray) {
                var array = [];

                for (var _i4 = 0; _i4 < timeArray.length; _i4++) {
                    var hTemp = Math.floor(timeArray[_i4] / 60),
                        mTemp = timeArray[_i4] % 60,
                        hours = hTemp < 10 ? "0" + hTemp : hTemp,
                        minutes = mTemp < 10 ? "0" + mTemp : mTemp;
                    array.push(hours + ":" + minutes);
                }

                return array;
            }

            function format(date, formatString) {
                var innerDate = "";
                var day = date.getDate(),
                    year = date.getFullYear(),
                    month = date.getMonth() + 1,
                    fo = formatString || true;

                switch (fo) {
                    case "dd month":
                        innerDate += day < 10 ? "0" + day : day;
                        innerDate += " ";
                        innerDate += months[month - 1].toLowerCase();
                        return innerDate;

                    default:
                        innerDate += day < 10 ? "0" + day : day;
                        innerDate += ".";
                        innerDate += month < 10 ? "0" + month : month;
                        innerDate += "." + year;
                        return innerDate;
                }
            }
        };

        // Якщо потрібен вивід дати та час + хвилин, тоді до спана з датою додаємо клас "time" <span class="date-1 time"></span>.
        // Працює як в порядку спадання, так і в порядку зростання.
        document.addEventListener("DOMContentLoaded", postDate);
    }

    var header = (function () {
        $(document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
        });
    });

    var mainform = (function () {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        var visiters = document.querySelector('.visiters');
        var timerId = setTimeout(function chanchVisitersNumber() {
            visiters.textContent = getRandomInt(4) + 5;
            timerId = setTimeout(chanchVisitersNumber, 15000);
        }, 15000);
    });

    var banner = (function () {
        var flag = false;
        $('.js-scroll').on('click', function () {
            var bannerScroll = $('.banner');
            flag = true;
            bannerScroll.fadeIn();
            setTimeout(function () {
                flag = false;
            }, 1000);
        });
        $(window).on("scroll resize", function () {
            if (flag === false) {
                hideBannerScroll('.x_order_form', '.footer', '.deliver');
            }
        });

        function hideBannerScroll() {
            var bannerScroll = $('.banner'),
                bannerDelivery = $('.main-banner'),
                dT = $(window).scrollTop(),
                dB = dT + $(window).height(),
                dW = $(window).width();
            var cnt = 0;

            for (var iArr = 0; iArr < arguments.length; iArr++) {
                $(arguments[iArr]).each(function (i, hi) {
                    var eT = $(hi).offset().top,
                        eB = eT + $(hi).outerHeight(),
                        eL = $(hi).offset().left,
                        eR = eL + $(hi).width();

                    if (eT <= dB && eB >= dT && eL <= dW && eR >= 0) {
                        cnt += +1;
                    }
                });
            }

            if (dT <= 100 || cnt > 0) {
                bannerScroll.fadeOut();
            } else {
                bannerScroll.fadeIn().css({
                    'bottom': bannerDelivery.outerHeight()
                });
            }
        }
    });

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    var recomend = (function () {
        $('document').ready(function () {
            $('.recomend__wrapper--slider').not('.slick-initialized').slick({
                dots: true,
                arrows: true,
                autoplay: true,
                autoplaySpeed: 15000,
                adaptiveHeight: true,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear'
            });
            var recomendBlok = document.querySelector(".recomend");
            var recomendSlides = recomendBlok.querySelectorAll(".recomend__slide");
            var recomendText = recomendBlok.querySelectorAll(".recomend__img");
            recomendBlok.querySelector('.slick-track').addEventListener("transitionstart", function () {
                for (var i = 0; i < recomendSlides.length; i++) {
                    if (recomendSlides[i].getAttribute("aria-hidden") === "false") {
                        var activeSlide = i % 4;
                    } else {
                        recomendText[i].classList.remove("active");
                    }
                }

                recomendText[activeSlide].classList.add("active");
            });
            document.querySelector('.recomend__wrapper--img').addEventListener('click', function (evt) {
                if (evt.target.classList.contains('photo')) {
                    $('.recomend__wrapper--slider').slick('slickGoTo', evt.target.getAttribute('data-index'));
                }
            });
        });
    });


    var reviews = (function () {
        $(document).ready(function () {
            $('.reviews__slider').slick({
                dots: false,
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                responsive: [{
                    breakpoint: 1220,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        speed: 600,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        adaptiveHeight: true
                    }
                }]
            });
        });
        $(document).ready(function () {
            var toggleFormBtn = $('.toggle-form-btn');
            var reviewsBottom = $('.reviews__bottom');
            var reviewsCta = $('.reviews-cta');
            var reviewsInputsWrap = $('.reviews-form__field-wrap');
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
            var fileFlag = true;
            reviewsInputTextareaJS.value = '';
            reviewsInputTextarea.on('input', function () {
                if ($(this).val().trim().length > 0) {
                    $(this).addClass('o-auto');
                } else {
                    $(this).removeClass('o-auto');
                }
            });
            inputFile.change(function (e) {
                if (inputFile.val() && fileFlag) {
                    fileText.html('Foto caricata!');
                    fileImg.hide();
                    fileIcon.show();
                    labelFile.addClass('rloaded');
                    fileFlag = false;
                }
            });
            reviewsInputText.on('input', function () {
                var that = this;
                setTimeout(function () {
                    var res = /[^a-zA-Zа-яА-ЯїЇєЄіІёЁ ]/g.exec(that.value);
                    that.value = that.value.replace(res, '');

                    if (that.value.replace(res, '').length === 0) {
                        that.parentElement.classList.add('invalid');
                        that.parentElement.classList.remove('valid');
                    } else {
                        that.parentElement.classList.remove('invalid');
                        that.parentElement.classList.add('valid');
                    }
                }, 0);
            });
            reviewsInputTextareaJS.addEventListener('input', function () {
                var that = this;

                if (that.value.length === 0) {
                    that.parentElement.classList.add('invalid');
                    that.parentElement.classList.remove('valid');
                } else {
                    that.parentElement.classList.remove('invalid');
                    that.parentElement.classList.add('valid');
                }
            });
            inputFile.click(function () {
                if (!fileFlag) {
                    return false;
                }
            });
            toggleFormBtn.on('click', function () {
                toggleFormBtn.hide();
                reviewsCta.show();
            });
            $('.reviews-form').submit(function () {
                if (reviewsInputTextarea.val().length !== 0 && reviewsInputName.val().length !== 0) {
                    reviewsCta.hide();
                    toggleFormBtn.show();
                    reviewsPopup.fadeIn();
                    event.preventDefault();
                    setTimeout(function () {
                        reviewsPopup.fadeOut();
                    }, 2000);
                    fileFlag = true;
                    reviewsInput.val('');
                    fileText.html('Carica la tua foto');
                    $('.feedback__star').removeClass('hover');
                    $('.feedback__star').removeClass('selected');
                    fileImg.show();
                    fileIcon.hide();
                    labelFile.removeClass('rloaded');
                    reviewsInputsWrap.removeClass('invalid');
                    reviewsInputsWrap.removeClass('valid');
                    $('.reviews-form__star').removeClass('filled');
                } else {
                    reviewsInputsWrap.each(function (i) {
                        if (!reviewsInputsWrap[i].classList.contains('valid')) {
                            reviewsInputsWrap[i].classList.add('invalid');
                        }
                    });
                    event.preventDefault();
                }
            });
        });
        var starE = $('.feedback__star'),
            stars = document.querySelectorAll('.feedback__star'); //  Stars on mouse over

        starE.on('mouseover', function (e) {
            var onStar = parseInt($(e.target).data('value'), 10);

            for (var i = 0; i < stars.length; i++) {
                $(stars[i]).removeClass('hover');
            }

            for (var _i = 0; _i < onStar; _i++) {
                $(stars[_i]).addClass('hover');
            }
        }).on('mouseout', function () {
            for (var i = 0; i < stars.length; i++) {
                $(stars[i]).removeClass('hover');
            }
        }); //  Stars on click

        starE.on('click', function (e) {
            var onStar = parseInt($(e.target).data('value'), 10);

            for (var i = 0; i < stars.length; i++) {
                $(stars[i]).removeClass('selected');
            }

            for (var _i2 = 0; _i2 < onStar; _i2++) {
                $(stars[_i2]).addClass('selected');
            }
        });
    });

    function main() {
        header();
        mainform();
        banner();
        recomend();
        reviews();
    }

    if (document.documentElement.clientWidth < 480) {
        window.addEventListener('scroll', function () {
            return setTimeout(main, 1000);
        }, {
            once: true,
            passive: true
        });
    } else {
        main();
    }

}());
