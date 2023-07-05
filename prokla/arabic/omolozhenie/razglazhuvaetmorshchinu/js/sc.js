$("a").on("touchend, click", function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $('.title-form').offset().top
    }, 400);
  });

$(".ac_footer a, .ac_gdpr_fix a").unbind("click");