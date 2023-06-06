$(document).ready(function () {
  // ---   set region in document   ---
  $.get("https://api.sypexgeo.net/json/", function (location) {
    let userRegion = location.region.name_en;
    console.log(userRegion);
    $(".userRegion").text(userRegion);
  });


});

//lazy loading
$(function () {
    var settings = {
        url: ''   // пусть в адкомбо до картинок
    };

    let LazyWr = $('.lazy'),  // класс картинок по по скроллу
        LazyClick = $('.lazy_image');  // класс картинок по по лику
    for (let j = 0; LazyWr.length > j; ++j) {
        let arrLazyWr = LazyWr[j];
        let imgLazyWr = $(arrLazyWr).attr('data-original');
        $(arrLazyWr).attr('data-original', settings.url + imgLazyWr);
    }

    for (let j = 0; LazyClick.length > j; ++j) {
        let arrLazyClick = LazyClick[j];
        let imgLazyClick = $(arrLazyClick).attr('data-original');
        $(arrLazyClick).attr('data-original', settings.url + imgLazyClick);
    }

    $('.cenz-image').on('click', function (event) {
        $(".lazy_image").lazyload({
            event: "click"
        });
        var $this = $(this);
        $(this).addClass('cenz-show');
        $(this).off(event);
    });
});

    //
let prodLeft = [2, 3, 4, 6, 7, 8, 9, 9, 11, 11, 12, 14, 14, 15, 15, 16, 16, 16, 17, 17, 18, 18];

function start_counting_timer(limitedSeconds) {
    let timeLeft = limitedSeconds;
    let secondsLeft,minutesLeft;
    let timerElement = document.querySelector('.timer');
    let count = setInterval(function(){
        if(timeLeft <= 0) {
            clearTimeout(count);
        } else {
            timeLeft--;
            let min = parseInt(timeLeft/60);
            minutesLeft = min.toString();
            if(minutesLeft.length === 1) {
                minutesLeft = '0'+ minutesLeft;
            }
            let sec = timeLeft%60;
            secondsLeft = sec.toString();
            if(secondsLeft.length === 1) {
                secondsLeft = '0'+ secondsLeft;
            }
            if(sec === 0) {
                document.querySelector('.prod_left_val').innerHTML = prodLeft[min];
            }
            timerElement.innerHTML = minutesLeft+":"+secondsLeft;
        }
    },1000);

}

document.addEventListener('DOMContentLoaded', function () {
    let tstamp = window.localStorage.getItem('tstamp-l2xyg239');
    let limitedSeconds = 1278;
    let prodElement = document.querySelector('.prod_left_val');

    if (tstamp !== null) {
        let now = Math.round(new Date().getTime() / 1000);
        let then = tstamp;
        limitedSeconds = limitedSeconds - (now - then);
        let prod = Math.floor(limitedSeconds/60);
        if (prod < 0) prod = 0;
        prodElement.innerHTML = prodLeft[prod];
    } else {
        tstamp = Math.round(new Date().getTime() / 1000);
        window.localStorage.setItem('tstamp-l2xyg239', tstamp);
        prodElement.innerHTML = 19;
    }

    start_counting_timer(limitedSeconds);

});

