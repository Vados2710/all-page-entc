var timeCounter={
	id:false,
	counter:0,
	count:function(vid,type){
		if($('#hiddenDiv')[0])
		{
			var a=document.createElement('img');
			a.src='tc.php?id='+vid+'&type='+type;
			if(vid==0||timeCounter.counter>=60)
			{
				clearInterval(timeCounter.id);
			}
			timeCounter.counter++;
		}
		else
		{
			clearInterval(timeCounter.id);
		}
	},
	init:function(id,type){
		clearInterval(timeCounter.id);
		timeCounter.id=setInterval(function(){timeCounter.count(id,type);},5000);
	}
};
