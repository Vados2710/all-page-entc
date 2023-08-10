function dtime(language, d) { 
var now = new Date(); 
now.setDate(now.getDate() + d + 0); 
document.write(lang[language]["dayNames"][now.getDay()] + " " + (now.getDate()) + " " + lang[language]["monthNames"][now.getMonth()] + " " + now.getFullYear()); 
} 
var lang = { 
"es":{ 
"dayNames":[ "Domingo" , "Lunes" , "Martes" , "Miércoles" , "Jueves" , "Viernes" , "Sábado" ], 
"monthNames":[ "enero" , "febrero" , "marzo" , "abril" , "mayo" , "junio" , "julio" , "agosto" , "septiembre" , "octubre" , "noviembre" , "diciembre" ] 
}, 
"ru":{ 
"dayNames":[ "Воскресенье" , "Понедельник" , "Вторник" , "Среда" , "Четверг" , "Пятница" , "Суббота" ], 
"monthNames":[ "Январь" , "Февраль" , "Март" , "Апрель" , "Май" , "Июнь" , "Июль" , "Август" , "Сентябрь" , "Октябрь" , "Ноябрь" , "Декабрь" ] 
}, 
"it":{ 
"dayNames":[ "Domenica" , "Lunedì" , "Martedì" , "Mercoledì" , "Giovedì" , "Venerdì" , "Sabato" ], 
"monthNames":[ "gennaio" , "febbraio" , "marzo" , "aprile" , "maggio" , "giugno" , "luglio" , "agosto" , "settembre" , "ottobre" , "novembre" , "dicembre" ] 
} 
}; 