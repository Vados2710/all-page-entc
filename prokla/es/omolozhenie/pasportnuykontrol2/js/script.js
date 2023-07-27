
 // -------------spin-------------------
    var resultWrapper = document.querySelector('.spin-result-wrapper');
    var wheel = document.querySelector('.wheel-img');


    function spin() {
        if (wheel.classList.contains('rotated')) {
            resultWrapper.style.display = "block";
        } else {
            wheel.classList.add('super-rotation');
            setTimeout(function() {
                resultWrapper.style.display = "block";
            }, 8000);
            setTimeout(function() {
                $('.spin-wrapper').slideUp();
                $('.tov').slideUp();
                $('.order_block').slideDown();
            }, 10000);
            wheel.classList.add('rotated');
        }
    }
    var closePopup = document.querySelector('.close-popup');
    $('.close-popup, .pop-up-button').click(function(e) {
        e.preventDefault();
        $('.spin-result-wrapper').fadeOut();
        var top = $('.spin-wrapper').offset().top;
        $('body,html').animate({ scrollTop: parseInt($("#forma").offset().top) }, 800);
    });

    $("a[href='#forma']").click(function() {
        $('html, body').animate({
            scrollTop: parseInt($("#forma").offset().top)
        }, 2000);
      });