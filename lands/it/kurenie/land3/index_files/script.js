

function codeCheck() {
    var $code = $(".check_popup_code_input"),
        $message = $(".js-message"),
        $button = $(".button-popup-first");


    var codeValues = /^\d+$/;

    $button.on("click", function (ev) {
        ev.preventDefault();
        var $codeLenght = $(".check_popup_code_input").val().length;
        var codeValue = $code.val();

        if (codeValues.test(codeValue) && $codeLenght == 15) {
            return $message.text("Данный код верен. Cпасибо, что выбрали нашу продукцию!");
        } else if ($code.val() !== '' && $code.val() !== ' ' && $code.val() !== '  ') {
            return $message.text("К сожалению, данный код не найден! Вероятнее всего, вы приобрели поддельный продукт.");
        } else {
            return $message.text("Введите, пожалуйста, код.");
        }

    });
};

$(document).ready(function() {

 


    $('a.call-form[href*=#]').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });


    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: !0,
        nav: !0,
        navText: [, ]
    }), 
	plyr.setup(document.querySelector('#a-otz-1'),{		
        volume: 5,
        iconUrl: urlImg+"plyr.svg"
    }), 
	plyr.setup(document.querySelector('#a-otz-2'),{		
        volume: 5,
        iconUrl: urlImg+"plyr.svg"
    }), 
	plyr.setup(document.querySelector('#a-otz-3'),{		
        volume: 5,
        iconUrl: urlImg+"plyr.svg"
    });
    

    var e = $(".faq-q");
    e.on("click", function() {
        $(".faq-a").stop().animate({
            paddingTop: 0,
            height: 0
        }, 500);
        var e = $(this).siblings(".faq-a");
        0 == e.height() ? (h = e.css("height", "auto").height(), e.height(0), e.stop().animate({
            paddingTop: "24px",
            height: h + 24
        }, 500)) : e.stop().animate({
            paddingTop: 0,
            height: 0
        }, 500)
    });

codeCheck();





				 var umerlo = 4;
				  var timerumerlo = setInterval(function() { umerlo++;     $('.umerlo').text(umerlo);          }, 5000);




				  var month = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
				  var lcData = new Date();
				  var curDlcData = lcData.getDate();				  
				  if ( curDlcData < 6 ) {              
					lcData.setMonth(lcData.getMonth() - 2);    
				  } else {
					lcData.setMonth(lcData.getMonth() - 1);    
				  }
				  $('.likeclients').text(month[lcData.getMonth()] + ' ' + lcData.getFullYear() + ' г.');
				  
});				  
				  
				  
				  