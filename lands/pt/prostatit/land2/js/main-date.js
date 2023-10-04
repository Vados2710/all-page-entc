$(function() {

    var timeNow = new Date().getTime(); // текущее время в данный момент времени
    var timeFrom = new Date().getTime() - (3 * 86400000); // с какого дня начинать отсчет времени

    var randomInt = function(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    };


    var comments = '.dtime-1'; // для элеменентов span с классом  rdate проставлем даты
    var arrayDate = [];
    var month;
    var date;
    var hours;
    var min;
    var year;

    $(comments).each(function(index, elem) {

        // Случайная дата с сегодняшнего дня до
        var randomTime = randomInt(timeNow, timeFrom);

        var dateComment = new Date(randomTime).getTime();

        arrayDate.push(dateComment);


        arrayDate = arrayDate.sort(function(a, b) {
            return a - b
        });


    });


    $(comments).each(function(index, elem) {


        year = new Date(arrayDate[index]).getFullYear();
        month = new Date(arrayDate[index]).getMonth() + 1;
        date = new Date(arrayDate[index]).getDate();
        hours = new Date(arrayDate[index]).getHours();
        min = new Date(arrayDate[index]).getMinutes();

        if (month <= 9) month = '0' + month;
        if (date <= 9) date = '0' + date;
        if (hours <= 9) hours = '0' + hours;
        if (min <= 9) min = '0' + min;


        var formatDate = date + '.' + month + '.' + year + ' ' + hours + ':' + min;
        $(elem).html(formatDate);

    });


});
