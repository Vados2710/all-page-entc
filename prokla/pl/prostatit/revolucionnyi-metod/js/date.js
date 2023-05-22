//data start
function sprawdzmiesiac(liczbamiesiac){
                   switch(liczbamiesiac)
                   {
                       case 0:
                        return "stycznia";
                        break;
                       case 1:
                        return "lutego";
                        break;
                       case 2:
                        return "marca";
                        break;
                       case 3:
                        return "kwietnia";
                        break;
                        case 4:
                        return "maja";
                        break;
                       case 5:
                        return "czerwca";
                        break;
                       case 6:
                        return "lipca";
                        break;
                       case 7:
                        return "sierpnia";
                        break;
                       case 8:
                        return "września";
                        break;
                       case 9:
                        return "października";
                        break;
                        case 10:
                        return "listopada";
                        break;
                       case 11:
                        return "grudnia";
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