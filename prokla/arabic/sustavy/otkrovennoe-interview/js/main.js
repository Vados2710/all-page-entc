// --------------SCROLL-------------------
$("a").on("touchend, click", function (e) {
  e.preventDefault();
  $('body,html').animate({
    scrollTop: $('#order_form').offset().top -250
  }, 400);
});

$(".ac_footer a, .ac_gdpr_fix a").unbind("click");