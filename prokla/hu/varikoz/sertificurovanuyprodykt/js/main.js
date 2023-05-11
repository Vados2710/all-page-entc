// --------------SCROLL-------------------
$("a, .pre_toform").on("touchend, click", function (e) {
  e.preventDefault();
  $('body,html').animate({
    scrollTop: $('.order').offset().top
  }, 400);
});

$(".ac_footer a, .ac_gdpr_fix a").unbind("click");