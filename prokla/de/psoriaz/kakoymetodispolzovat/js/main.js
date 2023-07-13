(function ($, window, undefined) {
    $.fn.yuukCountDown = function (options) {
        var defaults = {
                starttime: '', //start time
                endtime: '', //end time
                startCallBack: $.noop, //time start callback
                notStartCallBack: $.noop, //time not start callback
                endCallBack: $.noop //time end callback
            },
            opts = $.extend(defaults, options);
        return this.each(function (i, v) {
            var timeCountDown = {
                timer: null,
                countDown: function () {
                    var _this = this;
                    var nowTime = Math.round(new Date().getTime() / 1000),
                        startTime = Math.round(new Date(opts.starttime) / 1000);
                    endTime = Math.round(new Date(opts.endtime) / 1000);

                    var endLeftTime = endTime - nowTime,
                        startLeftTime = startTime - nowTime,
                        day = parseInt(endLeftTime / 60 / 60 / 24),
                        hour = parseInt(endLeftTime / 60 / 60 % 24),
                        minute = parseInt(endLeftTime / 60 % 60),
                        second = parseInt(endLeftTime % 60),
                        ms = parseInt((new Date(opts.endtime) - new Date().getTime()) % 1000);

                    return {
                        endLeftTime: endLeftTime,
                        startLeftTime: startLeftTime,
                        day: day,
                        hour: hour,
                        minute: minute,
                        second: second,
                        ms: ms
                    }
                },
                setHtml: function (time) {
                    var _this = this,
                        _endLeftTime = time.endLeftTime,
                        _startLeftTime = time.startLeftTime,
                        _day = _this.fillZero(time.day),
                        _hour = _this.fillZero(time.hour),
                        _minite = _this.fillZero(time.minute),
                        _second = _this.fillZero(time.second),
                        _ms = _this.fillZero(time.ms.toString().substr(0, 2));


                    //倒计时未开始
                    if (_startLeftTime > 0) {
                        if (opts.notStartCallBack) {
                            opts.notStartCallBack(time);
                        }
                    } else {
                        //正在倒数计
                        if (_endLeftTime > 0) {
                            $(v).html([
                                '<li class="item"><i class="minute">' + _minite + '</i><span>minutes</span></li>',
                                '<li class="blank">:</li>',
                                '<li class="item"><i class="second">' + _second + '</i><span>seconds</span></li>'
                            ].join(' '));
                            if (opts.startCallBack) {
                                opts.startCallBack(time);
                            }
                        }
                        //倒计时结束
                        if (_endLeftTime <= 0) {
                            if (opts.endCallBack) {
                                opts.endCallBack(time);
                            }
                            clearInterval(_this.timer);
                        }
                    }
                },
                fillZero: function (num) {
                    if (num < 10) {
                        num = "0" + num;
                    }
                    return num;
                },
                init: function () {
                    var _this = this;
                    if (new Date(opts.endtime) <= new Date(opts.starttime)) {
                        throw new Error('time out');
                        return false;
                    }
                    this.timer = setInterval(function () {
                        _this.setHtml(_this.countDown());
                    }, 10);
                }
            }
            timeCountDown.init();
        });
    };
})(jQuery, window, undefined);

jQuery(document).ready(function ($) {
    // -------------spin-------------------
    var resultWrapper = $(".spin-result-wrapper, .pop-up-window");
    var wheel = $(".wheel-img");

    $(".cursor-text").on("click", function (event) {
        $(this).off(event);
        if (!wheel.hasClass("rotated")) {
            wheel.addClass("super-rotation");
            setTimeout(function () {
                resultWrapper.css({
                    display: "block",
                });
            }, 8000);
            setTimeout(function () {
                $(".spin-wrapper").slideUp();
                $(".order_block").slideDown();
                $("#clock").yuukCountDown({
                    starttime: makeDate(),
                    endtime: makeDate(10),
                    endCallBack: function () {
                        $(".countdown-time").append("00:00");
                        $("#clock").hide();
                    },
                });
                $("#clock").yuukCountDown();
            }, 9500);
            wheel.addClass("rotated");
        }
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            resultWrapper.fadeOut();
        }
    });

    $(".close-popup, .spin-result-wrapper").click(function () {
        resultWrapper.fadeOut();
    });
    
    function makeDate(n) {
        var thisDate = new Date();
        var minute = thisDate.getMinutes() + n;
        var month = thisDate.getMonth() + 1;
        var final =
            thisDate.getFullYear() +
            "/" +
            month +
            "/" +
            thisDate.getDate() +
            " " +
            thisDate.getHours() +
            ":" +
            minute +
            ":" +
            thisDate.getSeconds();
        return final;
    }
});

$(document).ready(function () {
    // Показать/скрыть фото
    $(".show-img").click(function (event) {
        var text = $(this).html() == "Verbergen" ? "Anzeigen" : "Verbergen";
        $(this).html(text);
        $(this).parent().parent().find(".shock-img").toggleClass("show");
    });

    // <!--Начало скрипта открытия попапа-->
    setTimeout(function () {
        var flag = true;
        $(window).mouseout(function (e) {
            if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
                $(".fadepopup, .eoxp").fadeIn(300);
                $(".eeee").fadeIn(300);
                flag = false;
            }
        });
    }, 15000);
    // <!--Конец скрипта открытия попапа-->
    // <!--Начало скрипта закрытия попапа-->
    $(".eeee, .close_popup, .close-btn").click(function () {
        $(".fadepopup").css("display", "none");
        $(".eeee").css("display", "none");
    });


    // --------------SCROLL-------------------
    $("a").on("touchend, click", function (e) {
        e.preventDefault();
        $("body,html").animate({
            scrollTop: $(".toscroll").offset().top
        }, 400);
    });

    $(".ac_footer a, .ac_gdpr_fix a").unbind("click");
});

const months = ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'],
    monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''],
    days = ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'],
    daysMin = ['', '', '', '', '', '', ''],
    seasons = ['tél', 'tavasz', 'nyár', 'ősz'];

function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {
    const _counterLength = 60;
    for (let counter = 0; counter < _counterLength; counter++) {
        innerDate(counter, 'date-');
        innerDate(counter, 'date')
    }

    function innerDate(counter, dateType) {
        let newCounter;
        dateType === 'date-' ? newCounter = -counter : newCounter = counter;
        const _msInDay = 86400000,
            _localDate = new Date(Date.now() + (newCounter * _msInDay)),
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
            dateFormat !== undefined && dateFormat !== '' ? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)) : nodeList[i].innerHTML = defaultDate
        }
    }

    function changeFormat(_day, _month, _year, format, counter) {
        let innerFormat = format;
        const testFormat = ["dd", "mm", "yyyy", "year"],
            dateFormat = {
                dd: _day,
                mm: addZero(_month),
                yyyy: _year,
                year: getYearWithCounter(_year, counter),
            };
        for (let i = 0; i < testFormat.length; i++) {
            let string = testFormat[i];
            let regExp = new RegExp(string);
            innerFormat = innerFormat.replace(regExp, dateFormat[string]);
        }
        return innerFormat.split(' ').join(' ')
    }

    function getYearWithCounter(year, counter) {
        return year + counter
    }

    function addZero(numb) {
        return numb < 10 ? '0' + numb : numb
    }

    function changeFirstLetter(isBig, str) {
        return isBig && str && str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str
    }
}
if (document.body.classList.contains('ev-date')) {
    document.addEventListener("DOMContentLoaded", function () {
        postDate(days, daysMin, months, monthMin, seasons)
    });
}

function initInputValidation() {
  const telFields = document.querySelectorAll('input[type="tel"]')

  for (let i = 0; i < telFields.length; i++) {
    telFields[i].addEventListener('input', validation)
  }

  function validation(event) {
    isNaN(event.data)
        ? this.value = this.value.replace(/[^0-9+]/, '')
        : false;
  }
}
initInputValidation();