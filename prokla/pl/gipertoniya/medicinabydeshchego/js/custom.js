// hover read-more start (opacity)
$( ".container-for-article" ).hover(
  function() {
    $( this ).find(".read-more-articles-img-overlay").css("opacity", 0.4);
  }, function() {
    $( this ).find(".read-more-articles-img-overlay").css("opacity", 0);
  }
);
// hover read-more end

// scrolling image start
$( document ).ready(function() {
	 if ($(window).width() > 1152) {//check if window has less px than 800, because share-button is being hidden by css
	 if($(this).scrollTop()>=$('.read-more').position().top+$('.read-more').height()) { //check if it should be visible
            $('#flyingImage').css('position','fixed');
			$('#flyingImage').css('top', "45px");
			$('#flyingImage').css('width',	$('.article-right-column').width());
        }
		else
		{
			$('#flyingImage').css('position','static');
			$('#flyingImage').css('top', "0");
			$('#flyingImage').css('width',	'100%');
		}
		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();
		}
		else
		{
			$('.share-button-floating').css('display','none');
		}
    $(document).on('scroll', function() {
		if ($(window).width() > 1152 && $(window).width()) {//check if window has less px than 800, because share-button is being hidden by css
        if($(this).scrollTop()>=$('.read-more').position().top+$('.read-more').height()+400) {
            $('#flyingImage').css('position','fixed');
			$('#flyingImage').css('top', "10px");
			$('#flyingImage').css('width',	$('.article-right-column').width());
        }
		else
		{
			$('#flyingImage').css('position','static');
			$('#flyingImage').css('top', "0");
			$('#flyingImage').css('width',	'100%');
		}
		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();
		}
		else
		{
			$('.share-button-floating').css('display','none');
		}
    });
});
// scrolling image end
//expand side share buttons start
$( ".expand-floating" ).on( "click", function() {
	$('.expand-floating').css('display','none');
	$('.wykop1').css('display','block');
	$('.linkedin1').css('display','block');
	$('.tumblr1').css('display','block');
});
//expand side share buttons end
//expand share buttons (in article) start
$( ".expand-button" ).on( "click", function() {
	console.log('dziala');
	$(".facebook2").attr("class", "facebook small-button2");
	$(".twitter2").attr("class", "twitter small-button2");
	$('.wykop2').css('display','block');
	$('.linkedin2').css('display','block');
	$('.tumblr2').css('display','block');
	$('.expand-button').css('display','none');
});
//expand share buttons (in article) end