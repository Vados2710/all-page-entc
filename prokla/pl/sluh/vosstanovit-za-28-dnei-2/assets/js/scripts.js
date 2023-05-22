$(document).ready(function() {

  var widX = screen.width;

    var f_menu = $("#fixed-menu");
          var l_menu = $("#list-menu");

          if (widX <= 800) {
            f_menu.addClass('show-2');
            $(".nav-new").css("visibility", "hidden");
            $(".nav-new").css("display", "none");
          }
          else {
            $(".nav-new").css("visibility", "visible");
            f_menu.removeClass('show-2');
          }

        $("#fixed-menu").click(function() {
          $(".show-menu a").slideToggle("slow", function() {
            if ($(this).is(':visible'))
                  $(this).css('display','inline-block');
          });
        });
  });

  
