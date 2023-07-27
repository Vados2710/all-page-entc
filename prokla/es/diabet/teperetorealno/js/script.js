document.addEventListener("DOMContentLoaded", function (e) {
  !(function e(t, n) {
    function r() {
      var t = (function (e) {
        let t = Date.parse(e) - Date.parse(new Date()),
          n = Math.floor((t / 1e3) % 60),
          r = Math.floor((t / 1e3 / 60) % 60),
          o = Math.floor((t / 36e5) % 24);
        return {
          total: t,
          days: Math.floor(t / 864e5),
          hours: o,
          minutes: r,
          seconds: n,
        };
      })(n);
      t.total <= 0 &&
        (clearInterval(o),
        e("clockdiv", new Date(Date.parse(new Date()) + 135e5)));
      document.querySelectorAll(".timer-date").forEach((e) => {
        (e.querySelector(".hour").innerHTML = ("0" + t.hours).slice(-2)),
          (e.querySelector(".minutes").innerHTML = ("0" + t.minutes).slice(-2)),
          (e.querySelector(".seconds").innerHTML = ("0" + t.seconds).slice(-2));
      });
    }
    r();
    var o = setInterval(r, 1e3);
  })(0, new Date(Date.parse(new Date()) + 135e5));
});
