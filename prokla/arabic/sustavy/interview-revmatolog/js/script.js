$("a").on("touchend, click", function (e) {
  e.preventDefault();
  $("body,html").animate(
    { scrollTop: $("#order_form").offset().top - 50 },
    400
  );
});
