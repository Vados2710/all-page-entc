$(document).ready(function () {



    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var n = 74;
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

    var v = 74;
    (function () {
        v--;
        $(".count-2").html(v);
        if (v == 3) {
            return false;
        }
        if (v !== 10000) {
            setTimeout(arguments.callee, getRandomInt(10000, 30000));
        }
    })();

    var t = 74;
    (function () {
        t--;
        $(".count-3").html(t);
        if (t == 3) {
            return false;
        }
        if (t !== 10000) {
            setTimeout(arguments.callee, getRandomInt(10000, 30000));
        }
    })();

});
