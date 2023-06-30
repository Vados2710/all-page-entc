
$("a[href='#forma']").click(function () {
  $('html, body').animate({
    scrollTop: parseInt($("#forma").offset().top)
  }, 2000);
});