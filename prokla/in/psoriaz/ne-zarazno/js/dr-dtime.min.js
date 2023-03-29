var appendNull = function (t) {
    return t < 10 ? 0 + t.toString() : t
};

function dtime_nums(t) {
    d = new Date, p = new Date(d.getTime() + 864e5 * (t + 1)), monthb = "01,02,03,04,05,06,07,08,09,10,11,12".split(","), document.write(appendNull(p.getDate()) + "." + monthb[p.getMonth()] + "." + p.getFullYear())
}