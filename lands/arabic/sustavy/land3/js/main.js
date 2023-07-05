$(document).ready(function (e) {

    $(".for_scroll").click(function () {
        $("html, body").animate({
            scrollTop: $(".main_form").offset().top - 200
        }, 700);
        return false;
    });

    // ====================================================

    $('.menu_scroll').on('touchstart click', function (e) {
		e.preventDefault();
		$("html, body").animate(
			{
				scrollTop: $($(this).attr('href')).offset().top
			}, 1000
		);
		return false;
	});

    // ====================================================
    
    $('.burger').click(function(){
        $('.menu').toggle();
        $('.burger').toggleClass('burgerCross');
    });

    // ====================================================

    $('.slider_av').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '0px',
        asNavFor: '.slider_main',
        variableWidth: true,
        initialSlide: 1,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
		rtl: true
    });
    $('.slider_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        initialSlide: 1,
        centerPadding: '0',
        fade: true,
        dots: false,
        asNavFor: '.slider_av',
        responsive: [
            {
              breakpoint: 769,
              settings: {               
                arrows: false,
                dots: true,
                adaptiveHeight: true,
              }
            }
        ]
    });

    // ====================================================

    let totalCount = $('.symptoms_card').length;

    $('.total_count').html(totalCount);

    let stepsCounter = 0; 

    $('.card_btn').click(function(e) {
        e.preventDefault();

        stepsCounter++;

        if (stepsCounter < totalCount) {
            $('.symptoms_card.active').removeClass('active').next().addClass('active');

            let a = $('.symptoms_card');
            let b = $('.symptoms_card.active');

            $('.counter').html($(a).index(b) + 1);
        } else {
            $('.card_btn').css('display', 'none');
            $('.cards_counter').css('display', 'none');
            $('.card_btn-buy').css('display', 'inline-block');
            $('.symptoms_card.active').removeClass('active');
            $('.cards_prod').css('display', 'block');
        }
        
    });

});