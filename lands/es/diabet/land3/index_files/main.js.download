
$(document).ready(function(){
	



});

$("#gogogo").click(function() {
	$('html, body').animate({
		scrollTop: $("#cons").offset().top
	}, 700);
});


	$(".popup").click(function(){
		if($(this).hasClass('lnk-city')){} else {
			//$('#theme').val($(this).html());
			$('#pop h3').html($(this).html());
		}
	});
	
	$(".popup").fancybox({
		padding: 0,
		margin: 0,
		maxWidth	: 1200,
		maxHeight	: 900,
		closeClick	: true,
		openEffect	: 'none',
		closeEffect	: 'none',
		closeBtn:true
	});	


 

var controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({triggerElement: "#cons", duration: "100%" })
					.addTo(controller)
					//.addIndicators() // add indicators (requires plugin)
					.on("enter", function (e) {
						$('#cons .counter .middle').countTo({from: 30, to: 3, speed: 100, refreshInterval: 1,});
					});
					
	$('.carousel-indicators li').on('click', function() {
	  $('.carousel').carousel(parseInt(this.getAttribute('data-to')));

	});
  
  function popup_exit(){
   $.fancybox({
    href: '#pop_big',
    padding: 0,
		margin: 0,
		maxWidth	: 1200,
		maxHeight	: 900,
		closeClick	: true,
		openEffect	: 'none',
		closeEffect	: 'none',
		closeBtn:true
   });    
  }  
	
	var delay_popup = 45000;
	setTimeout(popup_exit, delay_popup);

	
	//$('.carousel').carousel().on('slide.bs.carousel', function (e) {
	//		var nextH = $(e.relatedTarget).height();
	//		$(this).find('div.active').parent().animate({ height: nextH }, 500);
	//	});
  $(document).ready(function(){
	 $(".click_me").on("click", function (event) {
		event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
    return false;
	});
});  


  
                $(document).ready(function() {
  
    $('.confident-link').click(function() {
        $('.hidden-conf').show();
        if ($(window).height() < 760) {
            $('.conf-info').css({
                'height': ($(window).height() - 120),
                'overflow-y': 'scroll'
            });
        };
        return false;
    });
    $('.close-conf').click(function() {
        $('.hidden-conf').hide();
        return false;
    });
    if ($('select').length) {} else {
        $('.c-s').css({ 'display': 'none' })
    }


});