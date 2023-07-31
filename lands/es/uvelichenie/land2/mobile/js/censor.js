$(document).ready(function(){
	if($('body.nocensor').length){
		if($('.censor').length){
			$('.censor').each(function(){
				var a=$(this).attr('src').split('.');
				if(a.length){
					var b=a.splice(-1,1);
					$(this).attr('src',a.join('.')+'_c.'+b[0]);
				}
			});
		}
	}
});