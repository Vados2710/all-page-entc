var resultWrapper=document.querySelector(".spin-result-wrapper");var wheel=document.querySelector(".wheel-img");var target=$(".fxd");var targetPos=target.offset().top;var winHeight=$(window).height();var scrollToElem=targetPos-winHeight;function spin(){if(wheel.classList.contains("rotated")){resultWrapper.style.display="block"}else{wheel.classList.add("super-rotation");setTimeout(function(){resultWrapper.style.display="block"},8000);setTimeout(function(){$(".spin-wrapper").slideUp();$(".order_block").slideDown()},10000);wheel.classList.add("rotated")}}var closePopup=document.querySelector(".close-popup");$(".close-popup, .pop-up-button").click(function(c){c.preventDefault();$(".spin-result-wrapper").fadeOut();var b=$("#toform").offset().top;var a=new Date().getTime()+600000;$("#clock").countdown(a,{elapse:true}).on("update.countdown",function(d){var e=$(this);if(d.elapsed){e.html("время истекло")}else{e.html(d.strftime("<span>%M</span> : <span>%S</span>"))}});$("body,html").animate({scrollTop:b},800)});var popupShow=1;$("html").mouseleave(function(){if(popupShow===1){popupShow=0;$(".popup, .background").fadeIn()}});$(".close, .popup_btn").click(function(){$(".popup, .background").fadeOut()});function showVisitors(){function b(e,c){var d=Math.floor(Math.random()*(c-e+1)+e);return d}var a=b(130,251);$("#peoples").text("");$("#peoples").text(a)}setInterval(function(){showVisitors()},8000);