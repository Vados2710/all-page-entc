function dtime(language, d) {
var now = new Date();
now.setDate(now.getDate() + d + 0);
document.write(lang[language]["monthNames"][now.getMonth()]);
}
var lang = {
"es":{
"dayNames":[ "Domingo" , "Lunes" , "Martes" , "Miércoles" , "Jueves" , "Viernes" , "Sábado" ],
"monthNames":[ "Enero" , "Febrero" , "Marzo" , "Abril" , "Mayo" , "Junio" , "Julio" , "Agosto" , "Septiembre" , "Octubre" , "Noviembre" , "Diciembre" ]
},
"ru":{
"dayNames":[ "Воскресенье" , "Понедельник" , "Вторник" , "Среда" , "Четверг" , "Пятница" , "Суббота" ],
"monthNames":[ "Январь" , "Февраль" , "Март" , "Апрель" , "Май" , "Июнь" , "Июль" , "Август" , "Сентябрь" , "Октябрь" , "Ноябрь" , "Декабрь" ]
},
"it":{
"dayNames":[ "Domenica" , "Lunedì" , "Martedì" , "Mercoledì" , "Giovedì" , "Venerdì" , "Sabato" ],
"monthNames":[ "01" , "02" , "03" , "04" , "05" , "06" , "07" , "08" , "09" , "10" , "11" , "12" ]
},
"de":{
"dayNames": [ "Sonntag," , "Montag," , "Dienstag," , "Mittwoch," , "Donnerstag," , "Freitag," , "Samstag," ],
"monthNames":[ "Januar" , "Februar" , "März" , "April" , "Mai" , "Juni" , "Juli" , "August" , "September" , "Oktober" , "November" , "Dezember" ]
} ,
"bg":{
"dayNames":[ "Неделя" , "Понеделник" , "Вторник" , "Сряда" , "Четвъртък" , "Петък" , "Събота" ],
"monthNames":[ "Януари" , "Февруари" , "Март" , "Април" , "Май" , "Юни" , "Юли" , "Август" , "Септември" , "Октомври" , "Ноември" , "Декември" ]
}
};