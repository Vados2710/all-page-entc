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
        countryName = countryName || 'ro', // Мова для місяців. 
        isAbbreviated = isAbbreviated || false, // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн", тоді ставим TRUE.
        localDate = new Date();

    switch (countryName) {
        case 'ro': // Romania
            months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
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

let counterBagsWidget = 0;
const attempt = 5;
let formTime = 600;
const counterElem = $('.counter_attempts');
let interval = {};
window.bag = {
    open: function (e) {
        if (counterBagsWidget >= 5) return;
        const target = $(e.currentTarget);
        if (counterBagsWidget < 6 && !target.hasClass('showed-goods')) {
            counterBagsWidget++;
            window.bag.substractConter();
            window.bag.changeClass(counterBagsWidget, target);
        }
        target.addClass('showed-goods');
    },
    substractConter: function () {
        let substr = attempt - counterBagsWidget;
        counterElem.text(substr);
    },
    changeClass: function (counter, target) {
        switch (counter) {
            case 1:
                target.addClass('sale sale-30');
                break;
            case 2:
            case 4:
                target.addClass('sale sale-100');
                break;
            case 3:
                target.addClass('sale sale-50');
                break;
            case 5:
                target.addClass('sale sale-100');
                $('.sard__item.sale.sale-100').addClass('glow');
                window.bag.showResultWindow();
                window.bag.showForm();
                break;
        }
    },
    showResultWindow: function () {
        setTimeout(function () {
            $('.spin-result-wrapper').css('display', 'block');
        }, 1000);
    },
    showForm: function () {
        setTimeout(function () {
            $('.spin-wraper').slideUp();
            $('.order_block').slideDown();
            $('.of-site').slideUp();
            window.bag.start_timer();
        }, 3000);
    },
    start_timer: function () {
        interval = setInterval(window.bag.tick, 1000);
    },
    tick: function () {
        formTime = formTime - 1;
        let mins = Math.floor(formTime / 60);
        let secs = formTime - mins * 60;
        if (mins == 0 && secs == 0) {
            clearInterval(interval);
        }
        secs = secs >= 10 ? secs : "0" + secs;
        $("#min").html("0" + mins);
        $("#sec").html(secs);
    },
}
$('.sard__item').click(function (e) {
    window.bag.open(e);
});

var closePopup = document.querySelector('.close-popup');
$('.pop-up-button').click(function (e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();
    $(this).attr('href', '#forma');
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
        scrollTop: top - 70
    }, 1500);
});
$('.close-popup').click(function (e) {
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
            $('.calc-form .line1').html('<span class="green">EȘTI ÎNTR-O FORMĂ EXCELENTĂ.</span>');
            $('.calc-form .line2').html(
                'Pentru a o menține, este suficient să luați <span style="white-space: nowrap;">'+offer_params.productName+'</span> o dată pe săptămână.'
            );
        } else {
            if (summs >= 104 && summs <= 114) {
                $('.calc-form .line1').attr('style', 'visibility: display;');
                $('.calc-form .line2').attr('style', 'visibility: display;');
                $('.calc-form .line1').html('AI NU MAI MULT DE 10 KG DE GREUTATE EXCESIVĂ!');
                $('.calc-form .line2').html(
                    'Este suficient să luați un curs de 2 săptămâni de administrare a <span style="white-space: nowrap;">'+offer_params.productName+'</span>.');
            } else {
                if (summs >= 90 && summs <= 103) {
                    $('.calc-form .line1').attr('style', 'visibility: display;');
                    $('.calc-form .line2').attr('style', 'visibility: display;');
                    $('.calc-form .line1').html('AVEȚI MAI MULT DE 18 KG GREUTATE EXCESIVĂ!');
                    $('.calc-form .line2').html(
                        'Pentru a scăpa de ea, vă recomandăm să urmați un curs complet cu <span style="white-space: nowrap;">'+offer_params.productName+'</span>. Pierderea în greutate estimată în prima lună - de la 8 la 17 kg.'
                    );
                } else {
                    if (summs <= 89) {
                        $('.calc-form .line1').attr('style', 'visibility: display;');
                        $('.calc-form .line2').attr('style', 'visibility: display;');
                        $('.calc-form .line1').html('AI O OBEZITATE EXTREMĂ!');
                        $('.calc-form .line2').html(
                            'Treceți urgennt un curs prelungit de administrare a <span style="white-space: nowrap;">'+offer_params.productName+'</span> (de la 10 la 14 săptămâni) și adăugați, de asemenea, activitate fizică. În acest timp, puteți pierde de la 25 kg până la 40 kg.'
                        );
                    }
                }
            }
        }
    }
}

$('a').click(function () {
    event.preventDefault();
    $(this).attr('href', '#forma');
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
        scrollTop: top - 70
    }, 1500);
});

$(".js-comment-send").click(function (e) {
    e.preventDefault();
    $("#form_add_comm").hide(300);

    $(".eeee").show();
    $(".popup-comment").show(300);

    setInterval(function () {
        $(".eeee").hide();
        $(".popup-comment").hide(300);
    }, 2500);
});