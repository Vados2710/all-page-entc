$(document).ready(function () {
    if(document.documentElement.clientWidth > 767) {
      	var is_showed = false;
        $('body').on('mouseleave', function () {
          	if (!is_showed) {
            	$('.popup').fadeIn();
              	is_showed = true;
            }
        });

        $('.close, .submit').on('click', function () {
            $('.popup').fadeOut();
        });
    }
    
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };


    $('.click_ssty').click(function () {
        var show = $(this).attr('show');
        if (show == 1) {
            $(this).attr('show', 0);
            $(this).parent().children(".ctr_ima_s").slideUp(300);
            $(this).removeClass("click_ssty2");
            $(this).html('arată');
        } else {
            $(this).attr('show', 1);
            $(this).parent().children(".ctr_ima_s").slideDown(300);
            $(this).addClass("click_ssty2");
            $(this).html('ascunde');
        }
    });


    $("a").on("touchend, click", function (e) {
              e.preventDefault();
              $('body,html').animate({scrollTop: $('.pred_form').offset().top}, 800);
          });
});