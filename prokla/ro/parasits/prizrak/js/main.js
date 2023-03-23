$(document).ready(function () {
    var randomCount;
    $('.map__pulse').each(function (index) {
        getRandomArbitrary(2000, 10000);
        setInterval(function () {
            $addClass(index, randomCount);
        }, randomCount);
    })

    function $addClass(i) {
        $('.map__pulse').eq(i).addClass("map__pulse_active");
        setTimeout(function () {
            $('.map__pulse').eq(i).removeClass("map__pulse_active");
        }, 1000);
    }

    function getRandomArbitrary(min, max) {
        return randomCount = Math.round(Math.random() * (max - min) + min);
    }
});