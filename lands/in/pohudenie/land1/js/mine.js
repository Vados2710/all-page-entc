$(document).ready(function() {
	    setTimeout(function() {
        $('.plus-prod .borderGreen').addClass('borderGreenGo');
    }, 500);
$(window).scroll(function () {
                if ($(window).scrollTop() > $("#block2").offset().top) {
                    $('#block2 .borderGreen').addClass('borderGreenGo');
                }
                if ($(window).scrollTop() > $("#block5").offset().top) {
                    $('#block5 .borderGreen').addClass('borderGreenGo');
                }
                if ($(window).scrollTop() > $("#block7").offset().top) {
                    $('#block7 .borderGreen').addClass('borderGreenGo');
                }
            });
$(window).scroll(function () {
                if ($(window).scrollTop() > $("#block3").offset().top - 400) {
                    $('#block3 .list3-item').addClass('blockGo');
                }
});

if ($(window).width() < 784) {
 $('.bx-review').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll:1,
  arrow: true,
  dots: true,
  adaptiveHeight: true
});
}
$(".to_fm").on("touchend, click", function (e) {
              e.preventDefault();
              $('body,html').animate({scrollTop: $('.scr_f').offset().top}, 800);
          });
        $(".ac_footer a, .ac_gdpr_fix a").unbind("click");
});

