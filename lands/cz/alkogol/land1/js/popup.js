
$(document).ready(function(){







/*============================ CONF ==============================*/	
	
	 $('.conf-button').click( function(){ 		view_conf();    });
	 
		 function view_conf(){ 
		
			 
		$('.conf-popup').removeClass('popup-deactive');
		$('.conf-popup').addClass('popup-active');
		$('.bg').addClass('bg-active');


    }
	
	 $('.popup-close').click( function(){ 		close_conf();    });
	 $('.popup-close-area').click( function(){ 		close_conf();    });
	
	function close_conf() {	
	
	$('.popup').addClass('popup-deactive');
		
		 function func() {						 				$('.conf-popup').removeClass('popup-active');	
				
			
				  
		 	}		setTimeout(func, 500);
		 
		 	$('.bg').removeClass('bg-active');
	
	}
	
	
	
	/*==========/zvonok =============*/

	
	




});