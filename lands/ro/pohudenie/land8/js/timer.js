var sec=41,min=28,hour=0;function refresh(){-1==--sec?(sec=59,min-=1):min=min,sec<=9&&(sec="0"+sec),-1==min?(min=59,hour-=1):hour=hour,document.getElementById&&(hour1.innerHTML=hour<=9?"0"+hour:hour,min1.innerHTML=min<=9?"0"+min:min,sec1.innerHTML=sec,hour2.innerHTML=hour<=9?"0"+hour:hour,min2.innerHTML=min<=9?"0"+min:min,sec2.innerHTML=sec,hour3.innerHTML=hour<=9?"0"+hour:hour,min3.innerHTML=min<=9?"0"+min:min,sec3.innerHTML=sec),inter=setTimeout("refresh()",1e3),"00"==hour&&"00"==min&&"00"==sec&&(sec="00",clearInterval(inter))}