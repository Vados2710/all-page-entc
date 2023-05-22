$(function () {
    $('.screenLock').css({height: $(document).height() + "px"});
    $('a.order-btn').click(function () {
        $(this).closest('form').submit();
        return false;
    });
    $('.close').click(function () {
        $('.screenLock').fadeOut(300);
    });
    var flag = true;
    $(window).mouseout(function (e) {
        if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
            $('.screenLock').fadeIn(300);
            flag = false;
        }
    })
});

if (document.body.classList.contains('ev-date')) {
    // Якщо потрібен вивід дати та час + хвилин, тоді до спана з датою додаємо клас "time" <span class="date-1 time"></span>.
    // Працює як в порядку спадання, так і в порядку зростання.
    document.addEventListener("DOMContentLoaded", postDate);

    function postDate() {
        const msInDay = 86400000,
            counterLength = 90,
            countryName = 'cz', // Встановлюємо мову для місяців.
            isAbbreviated = false, // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн" і т.д, тоді ставим TRUE.
            localDate = new Date();

        let months;

        switch (countryName) {
            case 'cz': // Czech
                months = ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'];
                break;
        }

        if (isAbbreviated) {
            for (let i = 0; i < months.length; i++) months[i] = months[i].slice(0, 3).toLowerCase(); // Прибираємо ".toLowerCase()", якщо перша буква повинна бути великою.
        }

        for (let counter = 0; counter < counterLength; counter++) {
            const dateClass = "date-" + counter,
                nodeList = document.getElementsByClassName(dateClass),
                date = new Date(localDate.getTime() - counter * msInDay);

            let timeCounter = 0,
                timeArray = time(nodeList /*, true*/); // Розкоментувати, якщо необхідне сортування в порядку спадання.

            timeArray = timeFormat(timeArray);

            for (let i = 0; i < nodeList.length; i++) {
                const data = nodeList[i].dataset;

                data.format
                    ? nodeList[i].innerHTML = format(date, data.format)
                    // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
                    // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
                    : nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

                if (/\btime\b/.test(nodeList[i].className)) {
                    nodeList[i].innerHTML += " " + timeArray[timeCounter]; // Рядок для формату виводу часу.
                    timeCounter++;
                }
            }
        }

        // <span clas="date-NUMBER"></span> - мотає час назад на NUMBER днів. Наприклад, <span className="date-5"></span>
        // <span clas="dateNUMBER"></span> - мотає час вперед на NUMBER днів. Наприклад, <span className="date5"></span>

        for (let counter = 0; counter < counterLength; counter++) {
            const dateClass = "date-" + counter,
                nodeList = document.getElementsByClassName(dateClass),
                date = new Date(localDate.getTime() - counter * msInDay);

            let timeArray = time(nodeList /*, true*/); // Розкоментувати, якщо необхідне сортування в порядку спадання.
            timeArray = timeFormat(timeArray);

            for (let i = 0; i < nodeList.length; i++) {
                const data = nodeList[i].dataset;

                data.format
                    ? nodeList[i].innerHTML = format(date, data.format)
                    // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
                    // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
                    : nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
            }
        }


        function time(nodeList, reverse) {
            const timeArray = [];

            for (let i = 0; i < nodeList.length; i++)
                nodeList[i].className.match(/\btime\b/)
                    ? timeArray.push(timeRandom())
                    : false;

            if (reverse) timeArray.sort(function (a, b) {
                return b - a;
            });
            else timeArray.sort(function (a, b) {
                return a - b;
            });

            return timeArray;
        }

        function timeRandom() {
            return Math.round(Math.random() * 1440);
        }

        function timeFormat(timeArray) {
            const array = [];

            for (let i = 0; i < timeArray.length; i++) {
                const hTemp = Math.floor(timeArray[i] / 60),
                    mTemp = timeArray[i] % 60,
                    hours = hTemp < 10 ? "0" + hTemp : hTemp,
                    minutes = mTemp < 10 ? "0" + mTemp : mTemp;
                array.push(hours + ":" + minutes)
            }
            return array;
        }

        function format(date, formatString) {
            let innerDate = "";

            const day = date.getDate(),
                year = date.getFullYear(),
                month = date.getMonth() + 1,
                fo = formatString || true;

            switch (fo) {
                case "yyyy":
                    innerDate += "" + year;
                    return innerDate;

                case "yyyy-1":
                    innerDate += "" + year - 1;
                    return innerDate;

                case "yyyy-2":
                    innerDate += "" + year - 2;
                    return innerDate;

                case "mm.dd.yyyy":
                    innerDate += (month < 10) ? ("0" + month) : month;
                    innerDate += ".";
                    innerDate += (day < 10) ? ("0" + day) : day;
                    innerDate += "." + year;
                    return innerDate;

                case "month":
                    innerDate += months[month - 1].toLowerCase();
                    return innerDate;

                case "dd":
                    innerDate += (day < 10) ? ("0" + day) : day;
                    return innerDate;

                case "dd month":
                    innerDate += (day < 10) ? ("0" + day) : day;
                    innerDate += " ";
                    innerDate += months[month - 1].toLowerCase();
                    return innerDate;

                case "dd month yyyy":
                    innerDate += (day < 10) ? ("0" + day) : day;
                    innerDate += " ";
                    innerDate += months[month - 1].toLowerCase();
                    innerDate += " " + year;
                    return innerDate;

                case "day dd, month yyyy":
                    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
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

                default:
                    innerDate += (day < 10) ? ("0" + day) : day;
                    innerDate += ".";
                    innerDate += (month < 10) ? ("0" + month) : month;
                    innerDate += "." + year;
                    return innerDate;
            }
        }
    }
}

$(document).ready(function() {
    var flag = true;
    function showPopup() {
        $(window).mouseout(function(e) {
            if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
                $('.modal').fadeIn(300);
                flag = false;
            }
        });
        $(".modal-flex").on('click', function(event) {
            if ($(event.target).is($(".modal-flex")) || $(event.target).is(".modal-close")) {
                $('.modal').fadeOut(300);
            }
        });
    }

    //проверка браузера с которого зашли и разрешения экрана
    if(($(window).width() > 1023))   {
        showPopup();
    }



    var time=600;
    var intr;
    function start_timer(){
        intr=setInterval(tick,1000)
        ;}
    function tick(){
        time=time-1;
        var mins=Math.floor(time/60);
        var secs=time-mins*60;
        if(mins==0&&secs==0){clearInterval(intr);}
        secs=secs>=10?secs:"0"+secs;$("#min").html("0"+mins);$("#sec").html(secs);}

    start_timer();

});
var close = document.querySelector(".modal-close");
var button = document.querySelector(".modal-btn");
function hidePopup() {
    $(".modal").fadeOut(300);
}

button.addEventListener('click', hidePopup);
close.addEventListener('click', hidePopup);



$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});


