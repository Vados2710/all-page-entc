function getImageDerivative(e, t) {
  if (-1 == e.indexOf("gen/derivatives")) return e;
  for (
    nearest = derivativeSizes[0], i = 0;
    i < derivativeSizes.length && !(nearest >= t);
    i++
  )
    nearest = derivativeSizes[i];
  return e.replace(
    /gen\/derivatives\/(rectangular|square)_lqip/g,
    "gen/derivatives/$1_" + nearest
  );
}
function loadImageDerivative(e) {
  var t;
  -1 != e.src.indexOf("gen/derivatives") &&
    ((newSrc = getImageDerivative(e.src, e.width)),
    ((t = new Image()).onload = function () {
      e.src = this.src;
    }),
    (t.src = newSrc));
}
function setTheme(e) {
  localStorage.setItem("theme", e), (document.documentElement.className = e);
}
function toggleTheme() {
  "theme-dark" === localStorage.getItem("theme")
    ? setTheme("theme-light")
    : setTheme("theme-dark");
}

  $(document).ready(function () {
    $(".current-date .fa_time").hover(
      function () {
        $(".current-date .datewrap").addClass("open");
      },
      function () {
        $(".current-date .datewrap").removeClass("open");
      }
    ),
      $("a[href='#top']").click(function () {
        return $("html, body").animate({ scrollTop: 0 }, "slow"), !1;
      }),
      $(".restmenu a").click(function () {
        $(".menuoverlay").toggle(),
          $(".restmenu a i").toggleClass("fa_close"),
          $("#navigation ul li.restmenu").toggleClass("open");
      }),
      $(".menuoverlay").click(function () {
        $(".menuoverlay").hide(),
          $(".restmenu a i").toggleClass("fa_close"),
          $("#navigation ul li.restmenu").removeClass("open");
      }),
      $("#navigation ul li.parent").hover(
        function () {
          $(this).find(".sub-menu").stop(!0, !0).delay(100).fadeIn(200);
        },
        function () {
          $(this).find(".sub-menu").stop(!0, !0).delay(100).fadeOut(200);
        }
      );
  }),
  $(function () {
    $("#navigation").offset(),
      $(window).scroll(function () {
        163 < $(this).scrollTop()
          ? ($(".default").addClass("fixed_navigation"),
            $("#sidearea").addClass("sidearea_space"))
          : ($(".default").removeClass("fixed_navigation"),
            $("#sidearea").removeClass("sidearea_space"));
      });
  }),
  $(function () {
    $("#social").offset(),
      $(window).scroll(function () {
        163 < $(this).scrollTop()
          ? $(".socialdefault").addClass("social_fixed")
          : $(".socialdefault").removeClass("social_fixed");
      });
  }),
  $(function () {
    $("body").offset(),
      $(window).scroll(function () {
        163 < $(this).scrollTop()
          ? $("body").addClass("bodybgpostion")
          : $("body").removeClass("bodybgpostion");
      });
  }),
  $(function () {
    $(".toplink").offset(),
      $(window).scroll(function () {
        200 < $(this).scrollTop()
          ? $(".toplink").addClass("toplink_active")
          : $(".toplink").removeClass("toplink_active");
      });
  }),
  $(document).ready(function () {
    $(".mobilesocials").click(function () {
      $("#social").fadeToggle();
    }),
      $(window).width() < 767 &&
        ($("#searchwrap, .navbar-header").click(function () {
          $("#social").hide();
        }),
        $(".restmenu a").click(function () {}));
  }),
  jQuery(function (e) {
    769 < e(window).width() &&
      (e("#navigation .parentmenu").hover(
        function () {
          e(this).find(".sub-menu").first().stop(!0, !0).delay(250).slideDown();
        },
        function () {
          e(this).find(".sub-menu").first().stop(!0, !0).delay(100).slideUp();
        }
      ),
      e("#navigation .parentmenu > a").click(function () {
        location.href = this.href;
      }));
  }),
  $(window).bind("load", function () {
    var e = $("body.home-page .flashholder .mpuholder .mpu").height();
    e < 257
      ? $(
          "body.home-page .articlesholder .flashnews ul li.last-child"
        ).addClass("showlast")
      : 250 < e &&
        $(
          "body.home-page .articlesholder .flashnews ul li.last-child"
        ).addClass("hidelast");
  }),
  $(window).bind("load", function () {
    var e = $("body.home-page .flashholder .mpuholder .mpu").height();
    e < 257
      ? $("body.home-page .articlesholder .flashnews ul").addClass("flashnm")
      : 250 < e &&
        $("body.home-page .articlesholder .flashnews ul").addClass("flashsm");
  }),
  $(window).scroll(function () {
    var e = $("body.home-page .flashholder .mpuholder .mpu").height();
    e < 257
      ? $("body.home-page .articlesholder .flashnews ul").addClass("flashnm")
      : 250 < e &&
        $("body.home-page .articlesholder .flashnews ul").addClass("flashsm");
  }),
  $(window).scroll(function () {
    var e = $("body.home-page .flashholder .mpuholder .mpu").height();
    e < 257
      ? $(
          "body.home-page .articlesholder .flashnews ul li.last-child"
        ).addClass("showlast")
      : 250 < e &&
        $(
          "body.home-page .articlesholder .flashnews ul li.last-child"
        ).addClass("hidelast");
  }),
  // $(document).ready(function () {
  //   lazyLoadImages($(".section.lazy-load-images .media IMG"));
  // }),
  (derivativeSizes = [120, 160, 240, 320, 360, 440, 480, 640, 800, 960]),
  $(window).on("load", function () {
    $(".shareholder a.share_icon").click(function () {
      $(".socialsharing").toggle();
    }),
      $("a#show-comments").click(function () {
        $(this).next("h2.h2commenttitle").show(10);
      });
  }),

  $(document).ready(function () {
    $(".mobilesearch").click(function () {
      $(".searchwrap").fadeToggle(), $(this).toggleClass("mobilesearchclose");
    }),
      $(".searchwrap").click(function (e) {
        e.stopPropagation();
      }),
      $(".navbar-toggle").click(function () {
        $(".searchwrap").hide(),
          $("#switch").fadeToggle(),
          $(".mobilesearch").removeClass("mobilesearchclose");
      });
  }),
  "theme-dark" === localStorage.getItem("theme")
    ? (setTheme("theme-dark"),
      null != document.getElementById("darkthslider") &&
        (document.getElementById("darkthslider").checked = !1))
    : (setTheme("theme-light"),
      null != document.getElementById("darkthslider") &&
        (document.getElementById("darkthslider").checked = !0));
