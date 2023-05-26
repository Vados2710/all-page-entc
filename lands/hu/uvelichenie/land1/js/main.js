$(document).ready(function () {

  var show = true;
  countbox = ".silent";
  percent = $('.silent-item__percent span');

  var wow = new WOW({
    live: true,
    mobile: false,
    callback: function (box) {
      $(window).on("scroll", function () {

        if (!show) return false;
        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;
        var w_height = $(window).height();
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight();
        if (w_top + 400 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
          percent.each(function () {
            $(this).spincrement({
              thousandSeparator: "",
              duration: 5200
            });
          });
          show = false;
          $(".silent-item").addClass("animate")
        }
      });
    }
  });

  $(window).load(windowSize);
  $(window).resize(windowSize);
  $(window).on('load resize', windowSize);

  function windowSize() {

    if ($(window).width() <= '767') {
      $(window).on("scroll", function () {

        if (!show) return false;
        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;
        var w_height = $(window).height();
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight();
        if (w_top + 400 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
          percent.each(function () {
            $(this).spincrement({
              thousandSeparator: "",
              duration: 5200
            });
          });
          show = false;
          $(".silent-item").addClass("animate")
        }
      });
    } else {
      wow.init();
    }
  }

  $('.reviews').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    dots: true,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.review-item__content span').click(function () {
    $("html, body").animate({scrollTop: $("#order_form").offset().top - 300}, 1500);
    return false;
  });
});