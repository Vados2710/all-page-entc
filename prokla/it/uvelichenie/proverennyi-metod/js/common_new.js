$(document).ready(function() {
 $("a").click(function() {
  $("html, body").animate({
   scrollTop: $($(this).attr("href")).offset().top - 200 + "px"
  }, {
   duration: 500,
   easing: "swing"
  });
  return false;
 });
});