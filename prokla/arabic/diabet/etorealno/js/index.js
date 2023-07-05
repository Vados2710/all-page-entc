(function date(n, h) {
    var a = new Date(),
        e = new Date(a.getFullYear(), a.getMonth(), a.getDate() - 7),
        k = e.getDate(),
        c = e.getMonth() + 1,
        l = e.getFullYear();
    n[0].textContent = f(k, c, l);
    for (var g = 0; g < h.length; g++) {
        var b = new Date(e.getFullYear(), e.getMonth(), Math.round(e.getDate() + g * 0.8)),
            o = b < a ? b : a;
        h[g].textContent = f(o.getDate(), o.getMonth() + 1, o.getFullYear())
    }

    function j(d) {
        return d.toString().length === 1 ? "0" + d : d
    }

    function f(p, i, q) {
        return [j(p), j(i), q].join(".")
    }
})(document.getElementsByClassName("post-date"), document.getElementsByClassName("comment-date"));
