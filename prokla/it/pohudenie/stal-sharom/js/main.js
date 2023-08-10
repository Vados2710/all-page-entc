const isInViewport = function (elem) {
   const bounding = elem.getBoundingClientRect();
   return (
       bounding.top >= 0 &&
       bounding.left >= 0 &&
       bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
       bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
   );
 };
 
 function getRandom(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
 }
 
 function countDown(elem){
   let num = parseInt(elem.textContent);
   if(num > 6) {
     let speed = getRandom(5,30);
     const timerId = setTimeout(function(){
       elem.textContent = num - 1;
       clearTimeout(timerId);
       countDown(elem);
     }, speed*1000);
   } else {
     elem.parentNode.classList.add('prod-left__pad--low');
   }
 }
 
/* document.addEventListener('DOMContentLoaded', () => {
   const prod = document.querySelector('.js-prod-left b');
   let flagProd = 0;
   
   window.addEventListener('scroll', () => {
     if(isInViewport(prod) && !flagProd) {
       flagProd = 1;
       countDown(prod);
     }
   });
 });*/

// $(function () {
   // $('a[href]').click(function (e){
   //   var elementClick = $(this).attr("href");
   //   if(!elementClick) {
   //    e.preventDefault();
   //    return false;
   //   }
   //   var destination = $(elementClick).offset().top-30;
   //   jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 600);
   //   return false;
   // });
   
   // $('.comment .ava, .comment p b').click(function (){
   //   var destination = $('#toform').offset().top-30;
   //   jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 600);
   //   return false;
   // });

// });