
// year
var today = new Date();
var yr = today.getFullYear();
var year = document.getElementById('date');
year.innerHTML = yr;

// dates
document.addEventListener("DOMContentLoaded", Datee);

function Datee(){
    const msInDay = 86400000,
          localDate = new Date();
                                                                
    for (var counter = 0; counter < 365; counter++) {
        var dateClass = "date-" + counter,
            nodelist = document.getElementsByClassName(dateClass),
            date = new Date(localDate.getTime() - counter*msInDay);
    
        for(var i = 0; i < nodelist.length; i++){
            nodelist[i].innerHTML = format(date, "dd month yyyy"); // Default: dd.mm.yyyy
        }
    }
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
            months = ["Január", "Február", "Március", "Aprilis", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"];
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
