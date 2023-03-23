window.onload = function () {
  if ("undefined" != typeof mv_protect && "on" == mv_protect) {
    var e = document.createElement("script");
    (e.src = "/cdn/js/mv_protect.js"), document.body.appendChild(e);
  }
  var t = document.getElementsByClassName("mv_mdate"),
    n = Date.now();
  if (t)
    for (i = 0; i < t.length; i++)
      t[i].innerHTML = new Date(n - 864e6).toLocaleDateString();
  var o = document.getElementsByClassName("mv_tdate");
  if (o)
    for (i = 0; i < o.length; i++)
      o[i].innerHTML = new Date(n).toLocaleDateString();
  var r = document.getElementsByClassName("mv_rdate");
  if (r)
    for (i = 0; i < r.length; i++) {
      let e = Date.now(),
        t = 864e5 * (i + 2) * 0.3,
        n = new Date(e - t).toLocaleDateString();
      r[r.length - i - 1].innerHTML = n;
    }
  var c = document.getElementsByClassName("mv_tyear");
  if (c)
    for (i = 0; i < c.length; i++) c[i].innerHTML = new Date().getFullYear();
  var s = document.getElementById("mv_timer");
  s &&
    setInterval(function () {
      var e = new Date(),
        t = 26 - e.getHours(),
        n = 60 - e.getMinutes(),
        o = 60 - e.getSeconds();
      s.innerHTML =
        o < 10 && n < 10
          ? t + ":0" + n + ":0" + o
          : o < 10
          ? t + ":" + n + ":0" + o
          : n < 10
          ? t + ":0" + n + ":" + o
          : t + ":" + n + ":" + o;
    }, 1e3);
  var l = document.getElementsByClassName("mv_timer");
  if (
    (l &&
      setInterval(function () {
        var e = new Date(),
          t = 26 - e.getHours(),
          n = 60 - e.getMinutes(),
          o = 60 - e.getSeconds();
        for (i = 0; i < l.length; i++)
          l[i].innerHTML =
            o < 10 && n < 10
              ? t + ":0" + n + ":0" + o
              : o < 10
              ? t + ":" + n + ":0" + o
              : n < 10
              ? t + ":0" + n + ":" + o
              : t + ":" + n + ":" + o;
      }, 1e3),
    document.querySelector(".owl-carousel"))
  ) {
    var a = document.createElement("script");
    (a.src = "/cdn/js/owl.carousel.js"), document.head.appendChild(a);
    var m = document.createElement("link");
    (m.rel = "stylesheet"),
      (m.href = "/cdn/css/owl.carousel.min.css"),
      document.body.appendChild(m);
    var u = document.createElement("link");
    (u.rel = "stylesheet"),
      (u.href = "/cdn/css/owl.theme.default.css"),
      document.body.appendChild(u);
  }
  window.jQuery &&
    $(".scrollto").on("click", function (e) {
      e.preventDefault();
      var t = $(this).attr("href"),
        n = $(t).offset().top;
      $("body,html").animate({ scrollTop: n }, 800);
    });
  var d = document.querySelector(".send-btn"),
    f = document.querySelector(".textarea"),
    v = document.querySelector(".input-action"),
    y = document.querySelector(".comment-name-input");
  if (v) {
    function L() {
      var e = document.querySelectorAll(".like"),
        t = document.querySelectorAll(".like-count");
      [].forEach.call(e, function (e, n) {
        e.onclick = function () {
          e.classList.contains("liked")
            ? (e.classList.remove("liked"),
              (e.style.fontWeight = "normal"),
              --t[n].innerHTML,
              t[n].classList.remove("like-count-liked"),
              t[n].classList.add("like-count-unliked"))
            : (e.classList.add("liked"),
              (e.style.fontWeight = "bold"),
              ++t[n].innerHTML,
              t[n].classList.add("like-count-liked"),
              t[n].classList.remove("like-count-unliked"));
        };
      });
    }
    L(),
      v.classList.remove("input-action-focus"),
      f.classList.remove("textarea-focus"),
      f.addEventListener("focus", function (e) {
        v.classList.add("input-action-focus"),
          f.classList.add("textarea-focus");
      }),
      f.addEventListener("blur", function () {
        if (f.value) return !1;
        f.classList.remove("textarea-focus");
      }),
      d.addEventListener("click", function (e) {
        if (f.value) {
          var t = document.querySelectorAll(".comments-item"),
            n = document.createElement("div");
          n.classList.add("comments-item"),
            n.classList.add("comment-appear"),
            (n.innerHTML = t[t.length - 1].innerHTML),
            (n.querySelector(".comment-username").innerHTML = f.value),
            n.querySelector(".like-count").classList.remove("like-count-liked"),
            n.querySelector(".like").classList.remove("liked"),
            (n.querySelector(".like").style.fontWeight = "normal"),
            (n.querySelector(".like-count").innerHTML = 0),
            (n.querySelector(".comment-date").innerHTML = ""),
            y
              ? ((n.querySelector(".comment-text").innerHTML =
                  '<span class="comment-username">' +
                  y.value +
                  "</span>" +
                  f.value),
                (f.value = ""),
                (y.value = ""),
                document
                  .querySelector(".comments")
                  .insertBefore(n, document.querySelector(".comment-input")),
                L())
              : (alert("Your comment is sent for moderation!"), (f.value = ""));
        } else alert("WRITE YOUR COMMENT!");
      });
  }
  var h = function (e, t) {
      (counter = Math.floor(1e4 * Math.random()) + 5e3),
        document.querySelector(".comments-newly-showed") &&
          document
            .querySelector(".comments-newly-showed")
            .classList.remove("comments-newly-showed"),
        document
          .querySelector(".comments-refreshing")
          .classList.add("refresh-appear"),
        setTimeout(function () {
          document
            .querySelector(".comments-refreshing")
            .classList.remove("refresh-appear");
        }, counter),
        setTimeout(function () {
          e[t].classList.add("comments-newly-showed"),
            ++t,
            console.log(t),
            t < e.length && setTimeout(h, counter + 6e3, e, t);
        }, counter + 1e3);
    },
    g = document.querySelector(".comments-refreshing-wrapper");
  if (g && g.querySelector(".comments-item")) {
    var p = 0;
    g.querySelector(".comments-item").classList.add("comments-newly-showed");
    g.getBoundingClientRect().top, pageYOffset;
    window.addEventListener("scroll", function () {
      if (g.getBoundingClientRect().top <= 500 && 0 == p) {
        ++p;
        setTimeout(h, 4e3, g.querySelectorAll(".comments-item"), 1);
      }
    });
  }
};
