 var resultWrapper = document.querySelector('.spin-result-wrapper');

 function replace() {
     document.getElementById("square").style.display = "none";
     document.getElementById("square2").style.display = "block";
     setTimeout(function () {
         resultWrapper.style.display = "block";
     }, 1000);
     setTimeout(function () {
         $('.bilet').slideUp();
         $('.order_block').slideDown();
         start_timer();
     }, 3500);
 }
 var closePopup = document.querySelector('.close-popup');
 $('.close-popup, .pop-up-button').click(function (e) {
     e.preventDefault();
     $('.spin-result-wrapper').fadeOut();
     var top = $('#form').offset().top;
     $('body,html').animate({
         scrollTop: top
     }, 800);
 });
