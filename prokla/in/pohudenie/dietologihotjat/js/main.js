function startTimer(t) {
    var e, n, r = t,
        a = setInterval(function () {
            e = parseInt(r / 60, 10), n = parseInt(r % 60, 10), n = 10 > n ? "0" + n : n, $("#timerr").text(e + ':' + n ), --r < 0 && (clearInterval(a))
        }, 1000)
}
startTimer((5 * 60) + 00);