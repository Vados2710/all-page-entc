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
        countryName = countryName || 'cz', // Мова для місяців. 
        isAbbreviated = isAbbreviated || false, // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн", тоді ставим TRUE.
        localDate = new Date();

    switch (countryName) {
        case 'cz': // Czech
            months = ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'];
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

"use strict";
var par = location.hash.slice(1).split('~');
var parl = par.length;
if (parl > 2) isp = par[4].replace(/\+/g, ' ');
if ("vibrate" in navigator) {
    var vibr = 1;
} else var vibr = 0;
var count = 1;

var url = window.cdn_path;
if (url === undefined) {
    url = "";
}

$(function () {
    $(".try").click(function () {
        if (count < 2) {
            $(this).attr('src', url + "img/opened_box2.png");
            count++;
            setTimeout(function () {
                var sc2 = document.getElementById("success02");
                sc2.className += " animate";
                var sctip02 = document.getElementById("successtip02");
                sctip02.className += " animateSuccessTip";
                var md2 = document.getElementById("modal02");
                md2.className += " visible";
                var cnt = document.getElementById("cntVal");
                var so = document.querySelector(".sweet-overlay");
                so.style.display = "block";
            }, 0);
        } else {
            var discountBlock = document.getElementById("discount");
            $(this).replaceWith(discountBlock);
            $(discountBlock).addClass('show');
            setTimeout(function () {
                resultWrapper.style.display = "block";
            }, 0);
            setTimeout(function () {
                $('#boxes').slideUp();
                $('.order_block').slideDown();
                start_timer();
            }, 100);
        }
    });
});
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

function hidemodal01() {
    if (vibr > 0) navigator.vibrate(70);
    var modal1 = document.getElementById("modal01").classList.remove("visible");
    var so = document.querySelector(".sweet-overlay").style.display = "none";
}

function hidemodal02() {
    if (vibr > 0) navigator.vibrate(70);
    var modal2 = document.getElementById("modal02").classList.remove("visible");
    var so = document.querySelector(".sweet-overlay").style.display = "none";
}
var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');
/* var link = new URL(window.location.href); */
$(function () {
    $('a:not([href="#"])').click(function () {
        event.preventDefault();
        $(this).attr('href', '#forma');
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top - 70
        }, 1500);
    });
    $('input[value="Узнать подробнее"], input[value="Принять участие в розыгрыше"]').click(function () {
        $('.eeee, .fadepopup').css('display', 'none');
    });
});

function spin() {
    if (!wheel.classList.contains('rotated')) {
        wheel.classList.add('super-rotation');
        setTimeout(function () {
            resultWrapper.style.display = "block";
        }, 8000);
        setTimeout(function () {
            $('.spin-wrapper').slideUp();
            $('.order_block').slideDown();
            start_timer();
        }, 10000);
        wheel.classList.add('rotated');
    }
}
var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();
});
var time = 600;
var intr;

function start_timer() {
    intr = setInterval(tick, 1000);
}

function tick() {
    time = time - 1;
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
        clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0" + secs;
    $("#min").html("0" + mins);
    $("#sec").html(secs);
}
$('.ord_button').on('click', function (e) {
    e.preventDefault();
    $('.screenLock .msg .close').trigger('click');
})

$("#disclaimer-btn").on("click", function (e) {
    e.preventDefault();
    $("#disclaimer").addClass("model-open");
});
$("#terms-btn").on("click", function (e) {
    e.preventDefault();
    $("#terms").addClass("model-open");
});
$("#privacy-btn").on("click", function (e) {
    e.preventDefault();
    $("#privacy").addClass("model-open");
});
$(".close-btn, .bg-overlay").click(function () {
    $("#disclaimer").removeClass("model-open");
    $("#terms").removeClass("model-open");
    $("#privacy").removeClass("model-open");
});