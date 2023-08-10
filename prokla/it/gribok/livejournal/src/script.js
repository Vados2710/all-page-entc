$(document).ready(function () {




    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var n = 55;
    (function () {
        n--;
        $(".count").html(n);
        if (n == 3) {
            return false;
        }
        if (n !== 10000) {
            setTimeout(arguments.callee, getRandomInt(10000, 30000));
        }
    })();



});

