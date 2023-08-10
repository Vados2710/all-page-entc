var Video_Sub = (function(){
	var __video = function(){
		var video = $('video.avid[data-sub]'),
			subtit = $('ul#video_sub');
		
		if(video.length && subtit.length){
			video.each(function(){
				var init_sud = undefined,
					init_vid = undefined,
					track = $(this)[0].addTextTrack("captions", "English", "en");
				track.mode = "showing";
					
				if($(this).data('sub')!='')init_vid = $(this).data('sub');
				if(subtit.find('li[data-sub="'+ init_vid +'"]').length)init_sud = init_vid;
				if(init_sud !== undefined){
					__subtit(subtit.find('li[data-sub="'+ init_sud +'"]'),track);
				}else{
					__subtit(subtit.find('li:eq(0)'),track);
				}
			});
		}
	}
	
	var __subtit = function($init,track){
		$init.find('span').each(function(e){
			var param = [$(this).data('sub-start'), $(this).data('sub-end'), $(this).text()];
			if(window.VTTCue){
				var __op = new VTTCue(param[0], param[1], '&nbsp;' + param[2] + '&nbsp;');
			}else if(window.TextTrackCue){
				var __op = new TextTrackCue(param[0], param[1], param[2]);
			}
			track.addCue(__op);
		});
	}
	
	var __css = function(){
		$('body').append('<style>::cue {font-family:Arial, "Nimbus Sans L", Helvetica, sans-serif;font-size:15px;text-shadow: 0 1px 1px rgba(0,0,0,0.5),0 -1px 1px rgba(0,0,0,0.5),1px 0 1px rgba(0,0,0,0.5),-1px 0 1px rgba(0,0,0,0.5),1px 1px 1px rgba(0,0,0,0.5),-1px -1px 1px rgba(0,0,0,0.5),1px -1px 1px rgba(0,0,0,0.5),-1px 1px 1px rgba(0,0,0,0.5),3px 3px 1px rgba(0,0,0,0.5),2px 2px 1px rgba(0,0,0,0.5);color:#fff;background:rgba(0,0,0,0);}#video_sub{display:none}</style>');
	}
	
	return {
		init: function(){
			__css();
			__video();
		},
    
    
  }
})();

$(document).ready(function(){
	Video_Sub.init();
});