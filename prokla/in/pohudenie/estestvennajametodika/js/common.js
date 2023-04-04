$(document).ready(function () {
  jQuery(function () {
    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() > 400) {
        jQuery('.goToTop').addClass("showGototop");
      } else {
        jQuery('.goToTop').removeClass("showGototop");
      }
    });
    jQuery(".goToTop").click(function () {
      jQuery("body,html").animate({scrollTop: 0}, 800)
    });
  });

  $('.slider').bxSlider({
    controls: false
  });
});