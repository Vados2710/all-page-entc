           var resultWrapper = document.querySelector('.spin-result-wrapper');
           var wheel = document.querySelector('.wheel-img');
           var p_1 = document.querySelector('#button_none');

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
                       $('.order_block, .section_form').slideDown();
                       start_timer();
                   }, 8000);
                   wheel.classList.add('rotated');
                   // p_1.style.display = 'none';
                   $('a').attr({'href':'#linkAfter'});
               }
           }
           var closePopup = document.querySelector('.close-popup');
           $('.close-popup, .pop-up-button').click(function(e) {
               e.preventDefault();
               $('.spin-result-wrapper').fadeOut();


               var top = $('#form').offset().top;
               $('body,html').animate({ scrollTop: top }, 800);
           });

           function outputDat(m, fullM) {
               var d = new Date();
               var p = new Date(d.getTime() - m * 86400000);
               var monthA = (fullM === false) ? '01,02,03,04,05,06,07,08,09,10,11,12'.split(',') : 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
               var w = p.getDate();
               var ret = (fullM === false) ? p.getDate() + '.' + monthA[p.getMonth()] + '.' + p.getFullYear() : p.getDate() + ' ' + monthA[p.getMonth()] + ' ' + p.getFullYear();
               return ret;
           }

           var time = 600;
           var intr;

           function start_timer() {
               intr = setInterval(tick, 1000);
           }

           function tick() {
               time = time - 1;
               var mins = Math.floor(time / 60);
               var secs = time - mins * 60;
               if (mins == 0 && secs == 0) {
                   clearInterval(intr);
               }
               secs = secs >= 10 ? secs : "0" + secs;
               $("#min").html("0" + mins);
               $("#sec").html(secs);
           }