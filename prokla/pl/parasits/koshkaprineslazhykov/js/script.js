$(function() {
  //cenz
  var cenz =  $('.article__image--cenz');
  cenz.on("click", function(evt){
    evt.preventDefault();
    cenz.toggleClass("article__image--cenz-show");
  });


  //fixed banner
  if ($(window).width() > 991) {
    var fixedBlock = $('.banner');
    var topOfFixedBlock = fixedBlock.offset().top;
    $(window).scroll(function() {
      if (topOfFixedBlock <= $(window).scrollTop()) {
        fixedBlock.addClass('fixed');
      } else {
        fixedBlock.removeClass('fixed');
      }

      topOfComments = $('.comments').position().top;
      scrollDistanceFromTopOfDoc = $(document).scrollTop() + fixedBlock.height();
      scrollDistanceFromTopOfComments = scrollDistanceFromTopOfDoc - topOfComments;
      if (scrollDistanceFromTopOfDoc > topOfComments) {
        fixedBlock.removeClass('fixed');
      } 
    });
  }
});

