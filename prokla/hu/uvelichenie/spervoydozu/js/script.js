function makeTimer(e) {
    var t = document.querySelector("#min"),
        o = document.querySelector("#sec"),
        r = setInterval((function () {
            -1 === e ? clearInterval(r) : (t.textContent = Math.floor(e / 60) < 10 ? "0" + Math.floor(e / 60) : Math.floor(e / 60), o.textContent = e % 60 < 10 ? "0" + e % 60 : e % 60, e -= 1)
        }), 1e3)
}
scrollLink(), $(document).ready((function () {
    function e(e, t) {
        e.html(t)
    }! function t(o) {
        var r = new Date;
        r.setDate(r.getDate() + 1), r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setSeconds(r.getSeconds() - 1);
        var n = new Date,
            s = r - n;
        r > n ? (hour = parseInt(s / 36e5) % 24, hour < 10 && (hour = "0" + hour), hour = hour.toString(), min = parseInt(s / 6e4) % 60, min < 10 && (min = "0" + min), min = min.toString(), sec = parseInt(s / 1e3) % 60, sec < 10 && (sec = "0" + sec), sec = sec.toString(), 3 == hour[1] && 5 == min[0] && 9 == min[1] && 5 == sec[0] && 9 == sec[1] ? e($(o).find(".hour0"), hour[0]) : $(o).find(".hour0").html(hour[0]), 5 == min[0] && 9 == min[1] && 5 == sec[0] && 9 == sec[1] ? e($(o).find(".hour1"), hour[1]) : $(o).find(".hour1").html(hour[1]), 9 == min[1] && 5 == sec[0] && 9 == sec[1] ? e($(o).find(".min0"), min[0]) : $(o).find(".min0").html(min[0]), 5 == sec[0] && 9 == sec[1] ? e($(o).find(".min1"), min[1]) : $(o).find(".min1").html(min[1]), 9 == sec[1] ? e($(o).find(".sec0"), sec[0]) : $(o).find(".sec0").html(sec[0]), $(o).find(".sec1").html(sec[1]), e($(o).find(".sec1"), sec[1]), setTimeout(t, 1e3, o)) : console.log("end")
    }(".timer")
})), document.addEventListener("DOMContentLoaded", (() => {
    moment.locale(document.getElementsByTagName("html")[0].getAttribute("lang")), document.querySelectorAll(".js-current-date").forEach((e => {
        e.innerHTML = moment().format("DD.MM.YYYY")
    })), document.querySelectorAll(".js-current-month").forEach((e => {
        e.innerHTML = moment().format("MMMM")
    })), document.querySelectorAll(".js-current-year").forEach((e => {
        e.innerHTML = moment().format("YYYY")
    })), document.querySelectorAll(".js-publish-date-notime").forEach((e => {
        e.innerHTML = moment().add(-6, "days").format("LL")
    })), document.querySelectorAll("span[class^=day-]").forEach((e => {
        let t = e.getAttribute("class").split("-")[1];
        e.innerText = moment().add(-t, "days").format("DD.MM.YYYY")
    }))
}));