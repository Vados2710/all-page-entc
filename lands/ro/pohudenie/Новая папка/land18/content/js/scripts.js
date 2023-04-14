new WOW().init();

var key = 0,wrapSlide,bxslid,slideDoms = [];

// function slider() {
    // if (window.innerWidth < 1000 && key == 0) {
        // //if (typeof bxslid.destroySlider !== 'function') {
        // bxslid = $('.slider-description, .slider-reviews').bxSlider({
            // moveSlides: 1,
            // infiniteLoop: true,
            // minSlides: 1,
            // maxSlides: 1,
            // pager: false,
            // slideWidth: 300,
            // auto: true,
			// adaptiveHeight: true,
			// adaptiveHeightSpeed: 0
        // });
        // //}

        // //console.log(bxslid);
        // key = 1;
    // } else if (window.innerWidth > 1000 && key == 1) {
        // if (typeof bxslid.destroySlider === 'function') {
            // bxslid.destroySlider();
        // }

        // wrapSlide.each(function (e) {
            // $(this).html(slideDoms[e]);
        // });
        // key = 0;
    // }
// }
function changeIMT()
{
    var wht = $("#wht").val(),
        hgt = $("#hgt").val(),
        imt = (wht*10000)/(hgt*hgt);
    $(".calc-result>div, .fat-girl").hide();
    if(imt<18)
    {
        $(".result-1").show();
    }
    if(imt>=18 && imt<=25)
    {
        $(".result-2").show();
    }
    if(imt>25)
    {
        $(".result-3").show();
    }
}

$(document).ready(function () {
    $("#btn-calc").click(function(){
        event.preventDefault();
        changeIMT();
    });
    $(".input-number").change(function(){
        changeIMT();
    });
    // slider();
    // key = (window.innerWidth < 1000) ? 1 : 0;

    // var sliders =  $('.slider-description, .slider-reviews');

    // sliders.wrap('<div class="bxslider_wrap"/>');

    // wrapSlide = $('.bxslider_wrap');

    // wrapSlide.each(function () {
        // slideDoms.push($(this).html());
    // });

    // slider();

    // $(window).resize(function () {
        // slider();
    // });
	
	$('.indicator').click(function () {
        var btn = $(this).data('button');
        $(this).parents('.indicators-block').find('.indicator').removeClass('active').text("+");
        $(this).addClass('active').text("-");
        $('.components').find('.component-item:visible').hide();
        $('.component-item[data-item='+btn+']').show();
    });
	
	/*$('.pre_toform').click(function(){
        $("html, body").animate({scrollTop: $("#order_form").offset().top-300}, 1000);
        return false;
    });*/
    $('.to-next').click(function(){
        $("html, body").animate({scrollTop: $("#first").offset().top}, 500);
        return false;
    });

    $(".show-text").click(function(){
       $(this).prev(".insta-text").toggleClass("hidden-text").toggleClass("vis-text");
       if($(this).text()=="+")
       {
           $(this).text("-")
       }
       else
       {
           $(this).text("+");
       }
    });
	
	
	var maxLen = 3;
  $('.input-number').keyup( function(){
    var $this = $(this);
    if($this.val().length > maxLen)
      $this.val($this.val().substr(0, maxLen));			
    });
	$( ".input-number" ).change(function() {
          var max = parseInt($(this).attr('max'));
          var min = parseInt($(this).attr('min'));
          if ($(this).val() > max)
          {
              $(this).val(max);
          }
          else if ($(this).val() < min)
          {
              $(this).val(min);
          }       
        }); 
		
		
		$('.slider-description').slick({
      dots: false,
      infinite: false,
	  arrows: false,      
      slidesToShow: 3,
      responsive: [
        {
			breakpoint: 1000,
			settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
			autoplay: true,
			variableWidth: true,
          }
        }, 
      ]
    });
	
	$('.slider-reviews').slick({
      dots: false,
      infinite: false,
	  arrows: false,      
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
			autoplay: true,
          }
        }, 
      ]
    });
		
		
	
});