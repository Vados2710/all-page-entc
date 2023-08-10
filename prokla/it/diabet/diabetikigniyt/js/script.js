$(document).ready(function () {
  $(function () {
    $(".screenLock").css({ height: $(document).height() + "px" });
    $(".close, .submit").click(function () {
      $(".screenLock").fadeOut(300);
    });
    var flag = true;
    $(window).mouseout(function (e) {
      if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
        $(".screenLock").fadeIn(300);
        flag = false;
      }
    });
  });

  $(".content-left-social-comments-count").on("click", function () {
    $("body,html").animate({ scrollTop: $(".vk-container").offset().top }, 400);
  });

  // --------------SCROLL-------------------
  $("a").on("touchend, click", function (e) {
    e.preventDefault();
    $("body,html").animate({ scrollTop: $(".toform").offset().top }, 400);
  });
  $(".ac_footer a, .ac_gdpr_fix a").unbind("click");
});
