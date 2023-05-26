function main() {
  let counter = 0;

  $(document).on("scroll", function () {
    if ($(".fixed-el").offset().top > 100 && counter === 0) {
      $(".main-banner").addClass("banner-bottom");
      counter = 1;
    } else if ($(".fixed-el").offset().top <= 100) {
      $(".main-banner").removeClass("banner-bottom");
      counter = 0;
    }
  });

  function resizeHeight() {
    let mainHeight = $(".main-banner").css("height"),
      mTop = mainHeight + "!important",
      mBottom = mainHeight + "!important";

    $("body.body-banner").attr(
      "style",
      "margin-top: " + mTop + "; margin-bottom: " + mBottom
    );
  }

  $(document).ready(resizeHeight);
  window.addEventListener("resize", resizeHeight);

  function test() {
    var t = 0;
    return (
      $(".icb-test").each(function () {
        $(this).prop("checked") && (t += 1);
      }),
      t
    );
  }

  $(document).ready(function () {
    $(".test-form-btn button").on("click", function () {
      var t = test();
      return (
        1 == t &&
          ($(".res-title").html(""),
          $(".res-descr").html(
            "Bizonyosan nem mondható el, hogy milyen a bőre. De ha már 30 éven felüli, feltétlenül érdemes gondoskodni magáról, valamint elvégezni a 'Keraderm' kúrát."
          ),
          $(".result-block").css(
            "background-image",
            'url("./assets/img/bg-res01.jpg")'
          )),
        2 == t &&
          ($(".res-title").html(""),
          $(".res-descr").html(
            'Ha az Ön kora 30-35 éves és idősebb, akkor nagyon valószínű, hogy a gomba nyilvánvaló vagy rejtett formában van. Ezt tünetek jelzik. Figyeljen a probléma megoldására, különben a gomba következményei a leginkább kellemetlenek lehetnek. Próbálja ki a "Nomidol!" terméket.'
          ),
          $(".result-block").css(
            "background-image",
            'url("./assets/img/bg-res02.jpg")'
          )),
        t >= 3 &&
          t <= 5 &&
          ($(".res-title").html(""),
          $(".res-descr").html(
            "Nagy valószínűséggel bőrproblémái vannak. Ahhoz, hogy minél hamarabb megelőzze azokat, végezze el a 'Keraderm' kúrát."
          ),
          $(".result-block").css(
            "background-image",
            'url("./assets/img/bg-res03.jpg")'
          )),
        t >= 6 &&
          ($(".res-title").html(""),
          $(".res-descr").html(
            "Gondoskodnia kell a bőréről. A 'Keraderm' segít visszanyerni az egészséges bőrét."
          ),
          $(".result-block").css(
            "background-image",
            'url("./assets/img/bg-res04.jpg")'
          )),
        $(window).width() <= 991 &&
          $(".result-block").css("background-image", "none"),
        0 != t &&
          ($(".test").animate(
            {
              opacity: 0,
            },
            500
          ),
          setTimeout(function () {
            $(".result").css("display", "block"),
              $(".result").animate(
                {
                  opacity: 1,
                },
                500
              ),
              $(".test").css("display", "none");
          }, 500),
          !1)
      );
    });
    var t = $(".faq-q");
    t.on("click", function () {
      $(".faq-a").stop().animate(
        {
          paddingTop: 0,
          height: 0,
          paddingBottom: 0,
        },
        500
      );
      var t = $(this).siblings(".faq-a");
      0 == t.height()
        ? ((h = t.css("height", "auto").height()),
          t.height(0),
          t.stop().animate(
            {
              paddingTop: "24px",
              height: h + 64,
              paddingBottom: 40,
            },
            500
          ))
        : t.stop().animate(
            {
              paddingTop: 0,
              height: 0,
              paddingBottom: 0,
            },
            500
          );
    }),
      $(window).scroll(function () {
        $(".faq-a").each(function () {
          0 != $(this).height() &&
            $(this).stop().animate(
              {
                paddingTop: 0,
                height: 0,
                paddingBottom: 0,
              },
              500
            );
        });
      });
  });
}

if (document.documentElement.clientWidth < 480) {
  window.addEventListener(
    "scroll",
    function () {
      return setTimeout(main, 1000);
    },
    {
      once: true,
      passive: true,
    }
  );
} else {
  main();
}

initializeTimer();
function initializeTimer() {
  if (!localStorage.getItem("ever-timer")) {
    var time = {
      hours: 0,
      minutes: 27,
      seconds: 0,
    };

    time = time.hours * 3600 + time.minutes * 60 + time.seconds;

    localStorage.setItem("time", time);
    localStorage.setItem("ever-timer", true);
  }

  timerSettings();
}

function timerSettings() {
  var time = localStorage.getItem("time"),
    different = document.querySelector(".timer-different"),
    hours = parseInt(time / 3600, 10),
    minutes = parseInt((time - hours * 3600) / 60, 10),
    seconds = parseInt(time % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : "" + minutes;
  seconds = seconds < 10 ? "0" + seconds : "" + seconds;
  hours = hours < 10 ? "0" + hours : "" + hours;

  var hoursHTML = document.getElementsByClassName("hours");
  var minutesHTML = document.getElementsByClassName("minutes");
  var secondsHTML = document.getElementsByClassName("seconds");

  if (--time < 0) {
    localStorage.removeItem("ever-timer");
    return;
  }
  if (different) {
    seconds = seconds.split("");
    minutes = minutes.split("");
    hours = hours.split("");

    diFilling(hoursHTML, hours);
    diFilling(minutesHTML, minutes);
    diFilling(secondsHTML, seconds);
  } else {
    filling(hoursHTML, hours);
    filling(minutesHTML, minutes);
    filling(secondsHTML, seconds);
  }

  localStorage.setItem("time", time);
  setTimeout(timerSettings, 1000);
}

function filling(obj, value) {
  for (var i = 0; i < obj.length; i++) {
    obj[i].innerHTML = value;
  }
}

function diFilling(obj, value) {
  for (var i = 0; i < obj.length; i++) {
    obj[i].innerHTML = value[i % 2];
  }
}
