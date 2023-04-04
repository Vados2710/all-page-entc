$(document).ready(function(){
	if($(window).width() > 768){
    $("body").on("click","a", function (e) {
        if($(this).hasClass("prevented")){
            e.preventDefault();
          var id  = $(this).attr("href"),
              top = $(id).offset().top -50;
          $("body,html").animate({scrollTop: top}, 500);
          return false;
        }
        else{
          return true;
        }
      });
    };
});
