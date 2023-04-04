//data start
function sprawdzmiesiac(liczbamiesiac){
                   switch(liczbamiesiac)
                   {
                       case 0:
                        return "जनवरी";
                        break;
                       case 1:
                        return "फ़रवरी";
                        break;
                       case 2:
                        return "मार्च";
                        break;
                       case 3:
                        return "अप्रैल";
                        break;
                        case 4:
                        return "मई";
                        break;
                       case 5:
                        return "जून";
                        break;
                       case 6:
                        return "जुलाई";
                        break;
                       case 7:
                        return "अगस्त का";
                        break;
                       case 8:
                        return "सितंबर";
                        break;
                       case 9:
                        return "अक्टूबर";
                        break;
                        case 10:
                        return "नवंबर";
                        break;
                       case 11:
                        return "दिसंबर का";
                        break;
                        
                   }}
				   
                   var date = new Date();
				   
				   var waznoscdzien = date.getDate();
				   var waznoscmiesiac = sprawdzmiesiac(date.getMonth());
				   var waznoscrok = date.getFullYear();

                   date.setDate(date.getDate() - 1);
				   
                   var dzien = date.getDate();
				   var miesiac = sprawdzmiesiac(date.getMonth());
                   var rok = date.getFullYear();
//dataend