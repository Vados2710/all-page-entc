document.addEventListener("DOMContentLoaded", function () {
  
  postDate(/*'dateFormat', 'ru', false*/);
});

function postDate(sa, countryName, isAbbreviated) {
 

  var sa = sa || "dd.mm.yyyy",
    msInDay = 86400000,
    counterLength = 90,
    months,
    countryName = countryName || "es", 
    isAbbreviated = isAbbreviated || false, 
    localDate = new Date();

  switch (countryName) {
    case "es": // Spain
      months = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];
      break;
  }

  if (isAbbreviated) {
    for (var i = 0; i < months.length; i++) {
      months[i] = months[i].slice(0, 3).toLowerCase(); 
    }
  }

  for (var counter = 0; counter < counterLength; counter++) {
    var dateClass = "date-" + counter,
      nodeList = document.getElementsByClassName(dateClass),
      date = new Date(localDate.getTime() - counter * msInDay),
      timeCounter = 0,
      timeArray = time(nodeList /*, true*/); 

    timeArray = timeFormat(timeArray);

    for (var i = 0; i < nodeList.length; i++) {
      var data = nodeList[i].dataset;

      if (data.format) {
        nodeList[i].innerHTML = format(date, data.format);
        
        /// Формати дивитись в switch нижче. dd - числом, day - прописом.

      
      } else {
      
        nodeList[i].innerHTML = format(date, sa); 
      }
      if (/\btime\b/.test(nodeList[i].className)) {
        nodeList[i].innerHTML += " " + timeArray[timeCounter]; // Рядок для формату виводу часу.
        timeCounter++;
      }
    }
  }

  

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
        nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/);
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

    if (reverse)
      timeArray.sort(function (a, b) {
        return b - a;
      });
    else
      timeArray.sort(function (a, b) {
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
        innerDate += month < 10 ? "0" + month : month;
        return innerDate;
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

      case "dd month":
        innerDate += day < 10 ? "0" + day : day;
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
        innerDate += day < 10 ? "0" + day : day;
        innerDate += " ";
        innerDate += months[month - 1];
        innerDate += " " + year;
        return innerDate;

      case "dd/mm/yyyy":
        innerDate += day < 10 ? "0" + day : day;
        innerDate += "/";
        innerDate += month < 10 ? "0" + month : month;
        innerDate += "/" + year;
        return innerDate;

      case "dd-mm-yyyy":
        innerDate += day < 10 ? "0" + day : day;
        innerDate += "-";
        innerDate += month < 10 ? "0" + month : month;
        innerDate += "-" + year;
        return innerDate;

      case "yyyy.mm.dd":
        innerDate += year;
        innerDate += ".";
        innerDate += month < 10 ? "0" + month : month;
        innerDate += ".";
        innerDate += day < 10 ? "0" + day : day;
        return innerDate;

      case "month dd, yyyy":
        innerDate += months[month - 1];
        innerDate += " ";
        innerDate += day < 10 ? "0" + day : day;
        innerDate += ", ";
        innerDate += year;
        return innerDate;

      case "yyyy":
        innerDate += year;
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


var list_image1 = document.querySelector(".list_image1");
var image_blur1 = document.querySelector(".list_image-blur1");
var list_image2 = document.querySelector(".list_image2");
var image_blur2 = document.querySelector(".list_image-blur2");
var list_image3 = document.querySelector(".list_image3");
var image_blur3 = document.querySelector(".list_image-blur3");
var list_image4 = document.querySelector(".list_image4");
var image_blur4 = document.querySelector(".list_image-blur4");
var list_image5 = document.querySelector(".list_image5");
var image_blur5 = document.querySelector(".list_image-blur5");
var list_image6 = document.querySelector(".list_image6");
var image_blur6 = document.querySelector(".list_image-blur6");
var list_image7 = document.querySelector(".list_image7");
var image_blur7 = document.querySelector(".list_image-blur7");
var list_image8 = document.querySelector(".list_image8");
var image_blur8 = document.querySelector(".list_image-blur8");
var list_image9 = document.querySelector(".list_image9");
var image_blur9 = document.querySelector(".list_image-blur9");

image_blur1.addEventListener("click", function () {
  image_blur1.classList.add("hidden");
  list_image1.classList.add("show");
});

list_image1.addEventListener("click", function () {
  image_blur1.classList.remove("hidden");
  list_image1.classList.remove("show");
});
// 2
image_blur2.addEventListener("click", function () {
  image_blur2.classList.add("hidden");
  list_image2.classList.add("show");
});

list_image2.addEventListener("click", function () {
  image_blur2.classList.remove("hidden");
  list_image2.classList.remove("show");
});
// 3
image_blur3.addEventListener("click", function () {
  image_blur3.classList.add("hidden");
  list_image3.classList.add("show");
});

list_image3.addEventListener("click", function () {
  image_blur3.classList.remove("hidden");
  list_image3.classList.remove("show");
});
// 4

image_blur4.addEventListener("click", function () {
  image_blur4.classList.add("hidden");
  list_image4.classList.add("show");
});

list_image4.addEventListener("click", function () {
  image_blur4.classList.remove("hidden");
  list_image4.classList.remove("show");
});

// 5

image_blur5.addEventListener("click", function () {
  image_blur5.classList.add("hidden");
  list_image5.classList.add("show");
});

list_image5.addEventListener("click", function () {
  image_blur5.classList.remove("hidden");
  list_image5.classList.remove("show");
});

// 6

image_blur6.addEventListener("click", function () {
  image_blur6.classList.add("hidden");
  list_image6.classList.add("show");
});

list_image6.addEventListener("click", function () {
  image_blur6.classList.remove("hidden");
  list_image6.classList.remove("show");
});

// 7

image_blur7.addEventListener("click", function () {
  image_blur7.classList.add("hidden");
  list_image7.classList.add("show");
});

list_image7.addEventListener("click", function () {
  image_blur7.classList.remove("hidden");
  list_image7.classList.remove("show");
});
//   8

image_blur8.addEventListener("click", function () {
  image_blur8.classList.add("hidden");
  list_image8.classList.add("show");
});

list_image8.addEventListener("click", function () {
  image_blur8.classList.remove("hidden");
  list_image8.classList.remove("show");
});

//   9

image_blur9.addEventListener("click", function () {
  image_blur9.classList.add("hidden");
  list_image9.classList.add("show");
});

list_image9.addEventListener("click", function () {
  image_blur9.classList.remove("hidden");
  list_image9.classList.remove("show");
});

