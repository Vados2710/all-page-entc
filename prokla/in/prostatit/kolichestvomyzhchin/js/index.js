var resultWrapper = document.querySelector(".spin-result-wrapper");
var wheel = document.querySelector(".wheel-img");

function spin() {
    if (!wheel.classList.contains("rotated")) {
        wheel.classList.add("super-rotation");
        setTimeout(function () {
            resultWrapper.style.display = "block"
        }, 8000);
        setTimeout(function () {
            $(".spin-wrapper").slideUp();
            $(".order_block").slideDown();
            start_timer()
        }, 10000);
        wheel.classList.add("rotated")
    }
}
var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click(function (b) {
    b.preventDefault();
    $(".spin-result-wrapper").fadeOut();
    var a = $("#form").offset().top;
    $("body,html").animate({
        scrollTop: a
    }, 800)
});
var time = 600;
var intr;

function start_timer() {
    intr = setInterval(tick, 1000)
}

function tick() {
    time = time - 1;
    var b = Math.floor(time / 60);
    var a = time - b * 60;
    if (b == 0 && a == 0) {
        clearInterval(intr)
    }
    a = a >= 10 ? a : "0" + a;
    $("#min").html("0" + b);
    $("#sec").html(a)
}
$(document).ready(function () {
    postDate()
});

function postDate(b) {
    var b = b || "dd.mm.yyyy",
        d = 86400000,
        l = 90,
        j, f = "in",
        m = false,
        c = new Date();
    switch (f) {
        case "in":
            j = ["जनवरी", "फ़रवरी", "जुलूस", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];
            break
    }
    if (m) {
        for (var p = 0; p < j.length; p++) {
            j[p] = j[p].slice(0, 3).toLowerCase()
        }
    }
    for (var k = 0; k < l; k++) {
        var o = "date-" + k,
            r = document.getElementsByClassName(o),
            s = new Date(c.getTime() - k * d),
            n = 0,
            e = h(r);
        e = a(e);
        for (var p = 0; p < r.length; p++) {
            var t = r[p].dataset;
            if (t.format) {
                r[p].innerHTML = q(s, t.format)
            } else {
                r[p].innerHTML = q(s, b)
            }
            if (/\btime\b/.test(r[p].className)) {
                r[p].innerHTML += " " + e[n];
                n++
            }
        }
    }
    for (var k = 0; k < l; k++) {
        var o = "date" + k,
            r = document.getElementsByClassName(o),
            s = new Date(c.getTime() + k * d),
            n = 0;
        for (var p = 0; p < r.length; p++) {
            var t = r[p].dataset;
            if (t.format) {
                r[p].innerHTML = q(s, t.format)
            } else {
                r[p].innerHTML = q(s)
            }
        }
    }

    function h(w, v) {
        var y = [],
            u = false;
        for (var x = 0; x < w.length; x++) {
            if (w[x].className.match(/\btime\b/)) {
                if (w[x].className.match(/\bdate-0\b/)) {
                    u = true
                }
                y.push(g(u))
            }
        }
        if (v) {
            y.sort(function (z, i) {
                return i - z
            })
        } else {
            y.sort(function (z, i) {
                return z - i
            })
        }
        return y
    }

    function g(u) {
        if (u) {
            var i = new Date(),
                v = i.getHours() * 60 + i.getMinutes();
            return Math.round(0 + Math.random() * v)
        }
        return Math.round(0 + Math.random() * 1440)
    }

    function a(v) {
        var A = [];
        for (var x = 0; x < v.length; x++) {
            var z = Math.floor(v[x] / 60),
                y = v[x] % 60,
                u = z < 10 ? "0" + z : z,
                w = y < 10 ? "0" + y : y;
            A.push(u + ":" + w)
        }
        return A
    }

    function q(w, v) {
        var i = "",
            u = w.getDate(),
            y = w.getFullYear(),
            z = w.getMonth() + 1,
            x = v || true;
        switch (x) {
            case "mm.dd.yyyy":
                i += (z < 10) ? ("0" + z) : z;
                i += ".";
                i += (u < 10) ? ("0" + u) : u;
                i += "." + y;
                return i;
            case "dd month yyyy":
                i += (u < 10) ? ("0" + u) : u;
                i += " ";
                i += j[z - 1];
                i += " " + y;
                return i;
            case "dd month":
                i += (u < 10) ? ("0" + u) : u;
                i += " ";
                i += j[z - 1];
                return i;
            case "day dd, month yyyy":
                var A = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
                i += A[new Date(y, z - 1, u).getDay()];
                i += " ";
                i += (u < 10) ? ("0" + u) : u;
                i += " ";
                i += j[z - 1];
                i += " " + y;
                return i;
            case "dd/mm/yyyy":
                i += (u < 10) ? ("0" + u) : u;
                i += "/";
                i += (z < 10) ? ("0" + z) : z;
                i += "/" + y;
                return i;
            case "dd-mm-yyyy":
                i += (u < 10) ? ("0" + u) : u;
                i += "-";
                i += (z < 10) ? ("0" + z) : z;
                i += "-" + y;
                return i;
            default:
                i += (u < 10) ? ("0" + u) : u;
                i += ".";
                i += (z < 10) ? ("0" + z) : z;
                i += "." + y;
                return i
        }
    }
};