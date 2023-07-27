var form = document.querySelector(".all-form"),
  minutes = document.getElementsByClassName("all-form__min"),
  seconds = document.getElementsByClassName("all-form__sec"),
  isStart = !1,
  startCount = function (t, e) {
    var n = new Date(),
      s = 0;
    n.setMinutes(10),
      n.setSeconds(0),
      (t.textContent = r(n.getMinutes())),
      (e.textContent = r(n.getSeconds()));
    var o = setInterval(function () {
      s++;
      var i = new Date();
      i.setMinutes(n.getMinutes()),
        i.setSeconds(n.getSeconds() - s),
        (t[0].textContent = r(i.getMinutes())),
        (e[0].textContent = r(i.getSeconds())),
        "00" === t[0].textContent &&
          "00" === e[0].textContent &&
          clearInterval(o);
    }, 1e3);
    function r(t) {
      return 1 === t.toString().length ? "0" + t : t;
    }
  },
  isOk = function () {
    window.pageYOffset >= form.offsetTop - window.innerHeight &&
      !isStart &&
      (startCount(minutes, seconds), (isStart = !0));
  };
window.addEventListener("scroll", isOk);
