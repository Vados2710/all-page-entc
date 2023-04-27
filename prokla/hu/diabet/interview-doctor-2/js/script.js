$(document).ready(function () {

  $.ajax({
    url: "https://geolocation-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function(location) {
      $('.user-city').html(location.city);
    }
  });

  $(function () {
    $('.screenLock').css({
      height: $(document).height() + "px"
    });
    $('a.order-btn').click(function () {
      $(this).closest('form').submit();
      ('.screenLock').fadeOut(300);
      return false;
    });
    $('.close').click(function () {
      $('.screenLock').fadeOut(300);
    });
    $('.submit').click(function () {
      $('.screenLock').fadeOut(300);
    });
    var flag = true;
    $(window).mouseout(function (e) {
      if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
        $('.screenLock').fadeIn(300);
        flag = false;
      }
    });
  });

  $('a[href="#"]').click(function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $('#order_form').offset().top
    }, 1000);
  });
});