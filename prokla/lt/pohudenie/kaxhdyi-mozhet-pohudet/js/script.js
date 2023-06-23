document.addEventListener("DOMContentLoaded", function () {
    // Вивід дати (+ час).
    // Arguments: dateFormat (string), language (string), abbreviated (bool). Default: 'dd.mm.yyyy', 'ru', false
    postDate( /*'dateFormat', 'ru', false*/ );
});

function postDate(sa, countryName, isAbbreviated) {
    // Додаємо клас "date-N", де N - кількість "відмотаних" днів.
    // Наприклад, span class="date-0"></span> - мотає 0 днів назад (сьогодні).
    // Наприклад, span class="date-5"></span> - мотає 5 днів назад.

    // Вивід дати (+ години + хвилини), додаємо клас "time". Наприклад, <span class="date-1 time"></span>. 
    // Виводить у форматі на зразок "14.02.2018 14:22"
    // Працює як в порядку зростання, так і в порядку спадання (міняємо флажок нижче)

    var sa = sa || 'dd.mm.yyyy',
        msInDay = 86400000,
        counterLength = 190, // Максимальна кількість вімотаних днів. Змінюємо за необхідності.
        months,
        countryName = countryName || 'lt', // Мова для місяців. 
        isAbbreviated = isAbbreviated || false, // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн", тоді ставим TRUE.
        localDate = new Date();

    switch (countryName) {
        case 'lt': // Litva литовский
            months = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužės', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'];
            break;
    }

    if (isAbbreviated) {
        for (var i = 0; i < months.length; i++) {
            months[i] = months[i].slice(0, 3).toLowerCase(); // Прибираємо ".toLowerCase()", якщо перша буква повинна бути великою.
        }
    }

    for (var counter = 0; counter < counterLength; counter++) {
        var dateClass = "date-" + counter,
            nodeList = document.getElementsByClassName(dateClass),
            date = new Date(localDate.getTime() - counter * msInDay),
            timeCounter = 0,
            timeArray = time(nodeList /*, true*/ ); // Розкоментувати, якщо необхідне сортування в порядку спадання.

        timeArray = timeFormat(timeArray);

        for (var i = 0; i < nodeList.length; i++) {
            var data = nodeList[i].dataset;

            if (data.format) {
                nodeList[i].innerHTML = format(date, data.format);
                // format: особливий формать для окремої дати. Додаємo як data-format="фомарт". 
                /// Формати дивитись в switch нижче. dd - числом, day - прописом.

                // Наприклад, <span class="date-1" data-format="dd month yyyy"></span> 
                // мотає на 1 день назад і виводить цей span у вигляді "14 Лютого 2018".
            } else {
                // Загальний формат виводу дати змінювати ТУТ!
                nodeList[i].innerHTML = format(date, sa); // Default: dd.mm.yyyy 
            }
            if (/\btime\b/.test(nodeList[i].className)) {
                nodeList[i].innerHTML += " " + timeArray[timeCounter]; // Рядок для формату виводу часу.
                timeCounter++;
            }
        }
    }

    // <span clas="date-N"></span> - мотає час назад на N днів. Наприклад, <span className="date-5"></span>
    // <span clas="dateN"></span> - мотає час вперед на N днів. Наприклад, <span className="date5"></span>

    for (var counter = 0; counter < counterLength; counter++) {
        var dateClass = "date" + counter,
            nodeList = document.getElementsByClassName(dateClass),
            date = new Date(localDate.getTime() + counter * msInDay),
            timeCounter = 0;

        for (var i = 0; i < nodeList.length; i++) {
            var data = nodeList[i].dataset;

            if (data.format) {
                nodeList[i].innerHTML = format(date, data.format);
            } else {
                nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/ );
            }
        }
    }



    function time(nodeList, reverse) {
        var timeArray = [],
            timeStatement = false;

        for (var i = 0; i < nodeList.length; i++) {
            if (nodeList[i].className.match(/\btime\b/)) {
                if (nodeList[i].className.match(/\bdate-0\b/)) {
                    timeStatement = true;
                }
                timeArray.push(timeRandom(timeStatement));
            }
        }

        if (reverse) timeArray.sort(function (a, b) {
            return b - a;
        });
        else timeArray.sort(function (a, b) {
            return a - b;
        });

        return timeArray;
    }

    function timeRandom(statement) {
        if (statement) {
            var date = new Date(),
                timeLimit = date.getHours() * 60 + date.getMinutes();

            return Math.round(0 + Math.random() * timeLimit);
        }
        return Math.round(0 + Math.random() * 1440);
    }

    function timeFormat(timearray) {
        var array = [];

        for (var i = 0; i < timearray.length; i++) {
            var htemp = Math.floor(timearray[i] / 60),
                mtemp = timearray[i] % 60,
                hours = htemp < 10 ? "0" + htemp : htemp,
                minutes = mtemp < 10 ? "0" + mtemp : mtemp;
            array.push(hours + ":" + minutes);
        }


        return array;
    }

    function format(date, formatstring) {
        var innerDate = "",
            day = date.getDate(),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            fo = formatstring || true;

        switch (fo) {
            case "tom":
                innerDate += day + 1;
                innerDate += ".";
                innerDate += (month < 10) ? ("0" + month) : month;
                return innerDate;
            case "mm.dd.yyyy":
                innerDate += (month < 10) ? ("0" + month) : month;
                innerDate += ".";
                innerDate += (day < 10) ? ("0" + day) : day;
                innerDate += "." + year;
                return innerDate;

            case "dd month yyyy":
                innerDate += (day < 10) ? ("0" + day) : day;
                innerDate += " ";
                innerDate += months[month - 1];
                innerDate += " " + year;
                return innerDate;

            case "dd month":
                innerDate += (day < 10) ? ("0" + day) : day;
                innerDate += " ";
                innerDate += months[month - 1];
                return innerDate;
            case "month":
                innerDate += months[month - 1].toLowerCase();
                return innerDate;

            case "day dd, month yyyy":
                var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
                innerDate += days[new Date(year, month - 1, day).getDay()];
                innerDate += " ";
                innerDate += (day < 10) ? ("0" + day) : day;
                innerDate += " ";
                innerDate += months[month - 1];
                innerDate += " " + year;
                return innerDate;

            case "dd/mm/yyyy":
                innerDate += (day < 10) ? ("0" + day) : day;
                innerDate += "/";
                innerDate += (month < 10) ? ("0" + month) : month;
                innerDate += "/" + year;
                return innerDate;

            case "dd-mm-yyyy":
                innerDate += (day < 10) ? ("0" + day) : day;
                innerDate += "-";
                innerDate += (month < 10) ? ("0" + month) : month;
                innerDate += "-" + year;
                return innerDate;

            case "yyyy.mm.dd":
                innerDate += year;
                innerDate += ".";
                innerDate += (month < 10) ? ("0" + month) : month;
                innerDate += ".";
                innerDate += (day < 10) ? ("0" + day) : day;
                return innerDate;

            case "month dd, yyyy":
                innerDate += months[month - 1];
                innerDate += " ";
                innerDate += (day < 10) ? ("0" + day) : day;
                innerDate += ", ";
                innerDate += year;
                return innerDate;

            case "yyyy":
                innerDate += year;
                return innerDate;

            default:
                innerDate += (day < 10) ? ("0" + day) : day;
                innerDate += ".";
                innerDate += (month < 10) ? ("0" + month) : month;
                innerDate += "." + year;
                return innerDate;
        }
    }
};

$(document).ready(function () {
    $(".comments-form-input").on('click', function (e) {
        if (e.offsetX < 0) {
            console.log(e.offsetX);
            console.log('before');
        }

        if (e.offsetX > 700) {
            console.log(e.offsetX);
            event.preventDefault();
            $('#myOverlay').fadeIn(297, function () {
                $('#myModal')
                    .css('display', 'block')
                    .animate({
                        opacity: 1
                    }, 198);
            });
            $('.comments-form').hide(300);

        }
    });

    $(".comments-form-input2").on('click', function (e) {
        if (e.offsetX < 0) {
            console.log(e.offsetX);
            console.log('before');
        }

        if (e.offsetX > 200) {
            console.log(e.offsetX);

            event.preventDefault();
            $('#myOverlay').fadeIn(297, function () {
                $('#myModal')
                    .css('display', 'block')
                    .animate({
                        opacity: 1
                    }, 198);
            });

            $('.comments-form').hide(300);

        }
    });

    $('#myModal__close, #myOverlay, .close').click(function () {
        $('#myModal').animate({
                opacity: 0
            }, 198,
            function () {
                $(this).css('display', 'none');
                $('#myOverlay').fadeOut(297);
            });
    });

    $(".comment-rating-like, .comment-rating-dislike").on('click', function (e) {
        $('#myOverlay2').fadeIn(297, function () {
            $('#myModal2')
                .css('display', 'block')
                .animate({
                    opacity: 1
                }, 198);
        });
    });

    $('#myModal__close2, #myOverlay2, .close').click(function () {
        $('#myModal2').animate({
                opacity: 0
            }, 198,
            function () {
                $(this).css('display', 'none');
                $('#myOverlay2').fadeOut(297);
            });
    });
});

$(document).ready(function () {
    $('.calc-form input').change(function () {
        calc();
    });
    $('.calc-form input').keyup(function () {
        calc();
    });
});

function calc() {
    var age = $('.calc-form .inp1').val();
    var height2 = $('.calc-form .inp2').val();
    var weight2 = $('.calc-form .inp3').val();
    var summs = height2 - weight2;
    age = parseInt(age.replace(/\D+/g, ""));
    height2 = parseInt(height2.replace(/\D+/g, ""));
    weight2 = parseInt(weight2.replace(/\D+/g, ""));
    console.log(summs);
    if (age > 0 && height2 > 0 && weight2 > 0) {
        if (summs >= 115) {
            $('.calc-form .line1').attr('style', 'visibility: display;');
            $('.calc-form .line2').attr('style', 'visibility: display;');
            $('.calc-form .line1').html(
                '<span class="green">Jūs turite puikią fizinę formą'
            );
            $('.calc-form .line2').html(
                'Kad palaikytų ją, pakanka vartoti '+offer_params.productName+' vieną kartą per savaitę.'
            );
        } else {
            if (summs >= 104 && summs <= 114) {
                $('.calc-form .line1').attr('style', 'visibility: display;');
                $('.calc-form .line2').attr('style', 'visibility: display;');
                $('.calc-form .line1').html(
                    'Jūs turite ne daugiau kaip 10 kg antsvorio.'
                );
                $('.calc-form .line2').html(
                    'Pakanka suvartoti 2 savaičių papildo '+offer_params.productName+' kursą'
                );
            } else {
                if (summs >= 90 && summs <= 103) {
                    $('.calc-form .line1').attr('style',
                        'visibility: display;');
                    $('.calc-form .line2').attr('style',
                        'visibility: display;');
                    $('.calc-form .line1').html(
                        'Jūs turite daugiau nei 18 kg antsvorio.'
                    );
                    $('.calc-form .line2').html(
                        'Kad atsikratytų jo – rekomenduojame suvartoti visą papildo '+offer_params.productName+' kursą. Laukiamas svorio metimas per pirmą mėnesį– nuo 7 iki 14 kg'
                    );
                } else {
                    if (summs <= 89) {
                        $('.calc-form .line1').attr('style',
                            'visibility: display;');
                        $('.calc-form .line2').attr('style',
                            'visibility: display;');
                        $('.calc-form .line1').html(
                            'Jūs esate paskutinėje nutukimo stadijoje.'
                        );
                        $('.calc-form .line2').html(
                            'Skubiai suvartokite '+offer_params.productName+' išplėstinį kursą (nuo 10 iki 14 savaičių), ir taip pat pridėkite fizines apkrovas. Per šį laikotarpį galima numesti nuo 25 iki 40 kg.'
                        );
                    }
                }
            }
        }
    }
}

var counter = 1;
$(document).ready(function () {
    $('#update').on('click', function () {
        if (counter == 1) {
            counter++;
            $('#cntVal').html(function (i, val) {
                return +val - 1
            });
        }
    });
});

window.isShow = 0;
var stateObj = {
    foo: "bar"
};
var curURL = window.location.href;
var curTitle = document.title;
history.pushState(stateObj, curTitle, curURL);
window.onpopstate = function (event) {
    if (isShow == 0) {
        history.pushState(stateObj, curTitle, curURL);
        document.getElementById('comeback').style.display = 'block';
        isShow = 1;
    };
};
document.body.onmouseout = function (event) {
    if (event.clientY < 0 && window.isShow == 0) {
        document.getElementById('comeback').style.display = 'block';
        isShow = 1;
    }
    document.getElementById('comeback').onclick = function (event) {
        if (event.target.id == "comeback") {
            document.getElementById('comeback').style.display = 'none';
        }
    };
};

(function ($) {
    jQuery.fn.lightTabs = function (options) {
        var createTabs = function () {
            tabs = this;
            i = 0;
            showPage = function (i) {
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i)
                    .show();
                $(tabs).children("ul").children("li").removeClass(
                    "active");
                $(tabs).children("ul").children("li").eq(i)
                    .addClass(
                        "active");
            }
            showPage(0);
            $(tabs).children("ul").children("li").each(function (index,
                element) {
                $(element).attr("data-page", i);
                i++;
            });
            $(tabs).children("ul").children("li").click(function () {
                showPage(parseInt($(this).attr("data-page")));
            });
        };
        return this.each(createTabs);
    };
})(jQuery);
$(document).ready(function () {
    $(".tabs").lightTabs();
});

