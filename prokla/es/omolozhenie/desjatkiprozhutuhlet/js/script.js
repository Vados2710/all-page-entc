$("a.pre_toform").on("click", function () {
      return $("html, body").animate({
          scrollTop: $("#luckyshop_form").offset().top
      }, 700), !1
  });