$(document).ready(function () {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var n = 40;
    (function () {
        n--;
        $(".rest-count").html(n);
        if (n == 3) {
            return false;
        }
        if (n !== 10000) {
            setTimeout(arguments.callee, getRandomInt(10000, 30000));
        }
    })();
    var n2 = 40;
    (function () {
        n2--;
        $(".lastpack").html(n2);
        if (n2 == 3) {
            return false;
        }
        if (n2 !== 10000) {
            setTimeout(arguments.callee, getRandomInt(10000, 30000));
        }

    })();
});