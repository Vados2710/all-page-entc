$(document).ready(function () {
  // ---   set region in document   ---
  $.get("https://api.sypexgeo.net/json/", function (location) {
    let userRegion = location.region.name_en;
    console.log(userRegion);
    $(".userRegion").text(userRegion);
  });

  // --------------SCROLL-------------------
  $("a").on("touchend, click", function (e) {
    e.preventDefault();
    $("body,html").animate({ scrollTop: $(".toscroll").offset().top }, 400);
  });
  $(".ac_footer a, .ac_gdpr_fix a").unbind("click");
});
