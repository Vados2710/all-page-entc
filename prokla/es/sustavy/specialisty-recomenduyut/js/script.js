$("a").on("touchend, click", function (e) {
  e.preventDefault();
  $("body,html").animate(
    { scrollTop: $(".inL_578593").offset().top - 10 },
    1000
  );
});

