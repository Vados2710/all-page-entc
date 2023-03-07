// Якщо потрібен вивід дати та час + хвилин, тоді до спана з датою додаємо клас "time" <span class="date-1 time"></span>. 
// Працює як в порядку спадання, так і в порядку зростання.

document.addEventListener("DOMContentLoaded", Datee);

function Datee() {
    var msInDay = 86400000,
        counterLength = 11,
        localDate = new Date();
                                                                
    for (var counter = 0; counter < counterLength; counter++) {
        var dateClass = "date-" + counter,
            nodeList = document.getElementsByClassName(dateClass),
            date = new Date(localDate.getTime() - counter * msInDay),
            timeCounter = 0;
            timeArray = time(nodeList/*, true*/); // Розкоментувати, якщо необхідне сортування в порядку спадання.

        timeArray = timeFormat(timeArray);

        for(var i = 0; i < nodeList.length; i++) {
            nodeList[i].innerHTML = format(date); // Default: dd.mm.yyyy
            if (nodeList[i].className.match(/\btime\b/)) {
                nodeList[i].innerHTML += " " + timeArray[timeCounter];
                timeCounter++;
            } 
        }
    }
}

function time(nodeList, reverse = false) {
    var timeArray = [];

    for (var i = 0; i < nodeList.length; i++) {
        if (nodeList[i].className.match(/\btime\b/)) {
            timeArray.push(timeRandom());
        }
    }

    if (reverse) timeArray.sort(function(a, b) { return b - a; });
    else timeArray.sort(function(a, b) { return a - b; });

    return timeArray;
} 

function timeRandom() {
    return Math.round(0 + Math.random() * 1440);
}

function timeFormat(timearray) {
    var array = [];

    for (var i = 0; i < timearray.length; i++) {
    var htemp = Math.floor(timearray[i] / 60), mtemp = timearray[i] % 60,
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
        month = date.getMonth() + 1;

    switch (formatstring) {
        case "mm.dd.yyyy": 
            innerDate += (month < 10) ? ("0" + month) : month;
            innerDate += ".";
            innerDate += (day < 10) ? ("0" + day) : day;
            innerDate += "." + year;
            return innerDate;            

        case "dd month yyyy": 
            months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
            innerDate += (day < 10) ? ("0" + day) : day;
            innerDate += " ";
            innerDate += months[month - 1];
            innerDate += " " + year;
            return innerDate;

        case "day dd, month yyyy": 
            var months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"],
                days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
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