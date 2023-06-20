document.addEventListener("DOMContentLoaded", function() {
    
    // Вивід дати (+ час).
    postDate();   

});

function postDate() {
    // Додаємо клас "date-N", де N - кількість "відмотаних" днів.
    // Наприклад, span class="date-0"></span> - мотає 0 днів назад (сьогодні).
    // Наприклад, span class="date-5"></span> - мотає 5 днів назад.

    // Вивід дати (+ години + хвилини), додаємо клас "time". Наприклад, <span class="date-1 time"></span>. 
    // Виводить у форматі на зразок "14.02.2018 14:22"
    // Працює як в порядку зростання, так і в порядку спадання (міняємо флажок нижче)
    var body = document.body,
        postLang = body.getAttribute('data-post-lang');

    var sa = body.getAttribute('data-post-format') || 'dd.mm.yyyy',
        msInDay = 86400000,
        counterLength = 365,  // Максимальна кількість вімотаних днів. Змінюємо за необхідності.
        months, 
        countryName = 'cs',  // Мова для місяців. 
        isAbbreviated = body.getAttribute('data-post-abbreviated') ? true : false, // Скорочений варіант місяців до трьох букв
        localDate = new Date();


    if (isAbbreviated) {
        for (var i = 0; i < months.length; i++) {
            months[i] = months[i].slice(0, 3).toLowerCase();  // Прибираємо ".toLowerCase()", якщо перша буква повинна бути великою.
        }
    }

    for (var counter = 0; counter < counterLength; counter++) {
        var dateClass = "date-" + counter,
            nodeList = document.getElementsByClassName(dateClass),
            date = new Date(localDate.getTime() - counter * msInDay),
            timeCounter = 0,
            timeArray = time(nodeList/*, true*/); // Розкоментувати, якщо необхідне сортування в порядку спадання.

        timeArray = timeFormat(timeArray);

        for(var i = 0; i < nodeList.length; i++) {
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

        for(var i = 0; i < nodeList.length; i++) {
            var data = nodeList[i].dataset;

            if (data.format) {
                nodeList[i].innerHTML = format(date, data.format);
            } else {
                nodeList[i].innerHTML = format(date, sa);
            }
        }
    }



    function notLastIteration(index, array) {
        return index !== array.length - 1;
    }

    function format(date, formatstring) {
        var innerDate = "",
            day = date.getDate(),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            fo = formatstring || true;

        switch (fo) {
            case "mm.dd.yyyy":
                innerDate += month < 10 ? "0" + month : month;
                innerDate += ".";
                innerDate += day < 10 ? "0" + day : day;
                innerDate += "." + year;
                return innerDate;

            case "dd month yyyy":
                innerDate += day < 10 ? "0" + day : day;
                innerDate += " ";
                innerDate += months[month - 1];
                innerDate += " " + year;
                return innerDate;

            case "yyyy.mm.dd":
                innerDate += year;
                innerDate += ".";
                innerDate += month < 10 ? "0" + month : month;
                innerDate += ".";
                innerDate += day < 10 ? "0" + day : day;
                return innerDate;


            case "dd month, yyyy":
                innerDate += day < 10 ? "0" + day : day;
                innerDate += " ";
                innerDate += months[month - 1];
                innerDate += ", ";
                innerDate += year;
                return innerDate;

            case "yyyy":
                innerDate += year;
                return innerDate;

            case "yyyy+1":
                innerDate += year + 1;
                return innerDate;

            case "yyyy+half":
                innerDate += date.getMonth() < 5 ? date.getFullYear() : date.getFullYear() + 1;
                return innerDate;

            default:
                innerDate += day < 10 ? "0" + day : day;
                innerDate += ".";
                innerDate += month < 10 ? "0" + month : month;
                innerDate += "." + year;
                return innerDate;
        }
    }
}