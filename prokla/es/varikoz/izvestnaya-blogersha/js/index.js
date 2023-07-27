// --------------CENZ pictures-------------------
$(".hide").click((function () {
  $(this).toggleClass("remove")
}))


// --------------FIXED banner-------------------
if ($(window).width() > 991) {
  var fixedBlock = $('.sticky');
  var topOfFixedBlock = fixedBlock.offset().top;
  $(window).on("scroll", function () {
    if (topOfFixedBlock <= $(window).scrollTop()){
    // if ($(window).scrollTop() > 1440) {
      fixedBlock.addClass('fixed');
    } else {
      fixedBlock.removeClass('fixed');
    }

    topOfOrder = $('#order_form').position().top;
    scrollDistanceFromTopOfDoc = $(document).scrollTop() + fixedBlock.height();
    scrollDistanceFromTopOfOrder = scrollDistanceFromTopOfDoc - topOfOrder;
    if (scrollDistanceFromTopOfDoc > topOfOrder) {
      fixedBlock.removeClass('fixed');
    }
  });
}