function counter() {

   if(sec > 0)
   {
	   sec--;
   }
   else
   {
	   if(min > 0)
	   {
		   min--;
		   sec = 59;
	   }

   }

   document.getElementById('timer').innerHTML=((min < 10) ? "0" + min : min)+":"+((sec < 10) ? "0" + sec : sec);

   setTimeout("counter();", 1000);
}

var min = 3;
var sec = 0;

counter();