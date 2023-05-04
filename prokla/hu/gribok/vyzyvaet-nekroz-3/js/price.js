
		$('.inputpricerand').each(function(){$(this).attr('value', '9999 eur')});

		
        var price = /{{.*?price.*?}}/g;
        var currency = /{{.*?currency.*?}}/g;
        function price_rnd() {
            return Math.round(Math.random() * 90 + 10);
        }
        $(document).ready( function () {
        	var ppNew = 1000;
        	var ppOld = 2000;
        	var ppTotal = 1000;
        	$('.js-pp-new').each(function(){
        		$(this).html(ppNew);
        		ppNew+=1000;
        	})

        	$('.js-pp-name').each(function(){
        		$(this).html('Ð’Ð»Ð°Ð´Ð¸ÑÐ»Ð°Ð²');
        		
        	})

        	$('.js-pp-addr').each(function(){
        		$(this).html('Ð³ ÐÐ¾Ð²Ð¾ÑÐ¸Ð±Ð¸Ñ€ÑÐº ÑƒÐ» ÐšÑ€Ð°ÑÐ½Ñ‹Ð¹ Ð¿Ñ€Ð¾ÑÐ¿ÐµÐºÑ‚ 76 ÐºÐ² 95/1');
        		
        	})

        	$('.js-pp-phone').each(function(){
        		$(this).html('89529097682');
        		
        	})
        	$('.js-pp-old').each(function(){
        		$(this).html(ppOld);
        		ppOld+=1000;
        	})
        	$('.js-pp-full').each(function(){
        		$(this).html(ppTotal+133);
        		ppTotal+=1000;
        	})
        	$('.js-pp-ship').each(function(){
        			$(this).html('133');
        	});




        });



var lang_locale = "ru";
var price = /{{.*price.*}}/g;
var currency = /{{\s*currency\s*}}/g;
var ifel =/{%.?if.*else.?%}/;
var ef =/{%.?endif.?%}/;
function price_rnd(){return Math.round(Math.random() * 90 + 10);}
window.onload=function(){
    a=document.getElementsByTagName('*');
    for(i=0;i<a.length;i++)
        if(a[i].tagName!="SCRIPT")
            for(j=0;j<a[i].childNodes.length;j++){
                b=a[i].childNodes[j];
                if(b.nodeType==3){
                    if(ifel.test(b.textContent))b.textContent=b.textContent.replace(ifel, '');
                    if(ef.test(b.textContent))b.textContent=b.textContent.replace(ef, '');          
                    if(currency.test(b.textContent))b.textContent=b.textContent.replace(currency, "$");
                    if(price.test(b.textContent))b.textContent=b.textContent.replace(price, price_rnd());
                }
            }
}