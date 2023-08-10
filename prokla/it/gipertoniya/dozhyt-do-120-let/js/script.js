$(document).ready(function () {
  // --------------SCROLL-------------------
  $("a").on("touchend, click", function (e) {
    e.preventDefault();
    $("body,html").animate({ scrollTop: $(".toform").offset().top }, 400);
  });
  $(".ac_footer a, .ac_gdpr_fix a").unbind("click");
  $('.change-package-selector2').on('change', (function() {
        $('.item-gift').hide();
        $('.' + $(this).val() + '_pack').show();
        $('.change-package-selector2 [value="' + $(this).val() + '"]').prop("selected", true);

        var package_id = $(this).val();
        set_package_prices(package_id);
    }));
});