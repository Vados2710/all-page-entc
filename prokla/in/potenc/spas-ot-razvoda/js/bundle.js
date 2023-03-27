

var blockHid = document.getElementsByClassName('interview__results'),
    button = document.getElementsByClassName('interview__links');
for( var i = 0; i < button.length; i++){
    button[i].addEventListener('click', function (e) {
         e.preventDefault();
         //console.log(this);
        for( var i = 0; i < blockHid.length; i++){
          blockHid[i].style.display = 'block';
        }

    })
}

function Random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$().ready(function(){
    var $com = $('.comments__block').children('li'),
        countCom = $com.length, //количество всех комментариев
        item = 5, //количество комментариев видных при открытии страницы
        timeMin = 3, //минимальное время до появление нового комментария (сек)
        timeMax = 10, //максимальное время до появления ноового комментария (сек)
        showCom = setTimeout(function time() {
            $com.eq(item).slideDown(600);
            item++;
            if(countCom > item) showCom = setTimeout(time, Random(timeMin, timeMax) * 1000);
        }, Random(timeMin, timeMax) * 1000);
    $com.hide();
    $com.each(function (e) {
        if(item > e) $(this).show();
    })

    $(function BannerBlink() {
        setInterval(function() {
            $(".interview__question").toggleClass("is-active");
        }, 500);
        
    });

});

