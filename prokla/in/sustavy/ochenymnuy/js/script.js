$("a").on("touchend, click",function(a){a.preventDefault();$("body,html").animate({scrollTop:$(".form-block").offset().top-50},400)});