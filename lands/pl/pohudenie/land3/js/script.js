function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}

function lastpack(numpack) {
    var minNumPack = 6; // Минимальное количество упаковок
    var lastClass = $('.lastpack'); // Объект
    var numpackCookie = getCookie("lastpack");

    if(numpackCookie == undefined) {
        document.cookie = numpack;
    } else {
        var numpack =  numpackCookie;
    }
    
    if (numpack > minNumPack) {
        numpack--;
        document.cookie = "lastpack="+numpack;
        lastClass.text(numpack);   
    } else {
        lastClass.text(minNumPack);
    }

    setTimeout(lastpack, 45000, numpack);
}
  $(document).ready(function() {
    $('.order').click(function(){
        $("html, body").animate({scrollTop: $("form").offset().top-300}, 1000);
        return false;
    });
});

$(document).ready(function() {
  
    // $("a.order").click(function () {
    // var elementClick = $(this).attr("href")
    // var destination = $(elementClick).offset().top;
    // jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1400);
    // return false;
    // });

    initializeClock('timer', deadline);

    lastpack(25);
});