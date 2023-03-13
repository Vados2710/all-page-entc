document.addEventListener("DOMContentLoaded", (() => {
    const e = document.getElementsByTagName("html")[0].getAttribute("lang"),
        t = document.querySelectorAll(".js-publish-date"),
        r = document.querySelectorAll(".js-current-date"),
        o = document.querySelectorAll(".js-comm-time"),
        n = document.querySelector(".js-current-year"),
        m = document.querySelectorAll(".js-current-month"),
        c = document.querySelectorAll(".js-comment-ago");
    moment.locale(e);
    var a, l = moment().subtract(3, "days"),
        u = moment();
    t.forEach((e => {
        e.innerHTML = l.format("ll")
    })), m.forEach((e => {
        e.innerHTML = u.format("MMMM")
    })), r.forEach((e => {
        e.innerHTML = u.format("L")
    })), n && (n.innerHTML = u.format("L"));
    for (a = 0; a < o.length; ++a) o[a].innerHTML = u.subtract(3, "hours").format("L");
    c.forEach((e => {
        let t = 2 * Math.random() - .5;
        e.innerHTML = u.subtract(1 + Math.floor(t), "hour").fromNow()
    }))
}));