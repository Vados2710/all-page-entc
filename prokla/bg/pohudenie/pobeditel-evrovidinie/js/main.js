var sas_setup=false;
$(function(){

    jQuery('ul.nav li.dropdown').hover(function() { 
     jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).show();
     jQuery(this).addClass("active open");
    }, function() {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).hide();
     if(!jQuery(this).hasClass("current")) jQuery(this).removeClass("active open");
   });

	$('.lnk').mouseover(function(){
		$(this).addClass('linked');
	});
	$('.lnk').mouseout(function(){
		$(this).removeClass('linked');
	});
	$('.header-search').click(function(){
		$('.header-search-box').show();
		$('#search-input').focus();
		$('.cosmo-promo').hide();
	});




   /*--------------------------------------------------*/
   
  $('.menutabs span').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  });
	
	$('#temataNaCosmo').on("submit",function()
	{
		$(this).ajaxSubmit();
	});
  

  
  //-----------check ads

  
	
});
