$(document).ready(function () {
  $('a.btn,a.btn2').click(function() {
    $("html, body").animate({
    scrollTop: $("#order_form").offset().top - 300
    }, 1000);
    return false;
  });

  /* Timer */
  if ($('.timer').length) {
  var _currentDate = new Date();
  var count = 480; // 8 hours
  var _toDate = new Date(_currentDate.getFullYear(), _currentDate.getMonth(), _currentDate.getDate(), _currentDate.getHours(), _currentDate.getMinutes() + count, 1);
  $('.timer').countdown(_toDate, function(event) {
  var $this = $(this).html(event.strftime(''
  + '<div class="count">%H<div class="label">ώρες</div></div><div class="raz">:</div><div class="count">%M<div class="label">λεπτά</div></div><div class="raz">:</div><div class="count accent-count">%S<div class="label">δευτ</div></div>'));
  });




  }

});
