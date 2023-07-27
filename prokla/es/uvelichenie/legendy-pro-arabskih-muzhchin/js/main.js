function dtime(language, d) { 
var now = new Date(); 
now.setDate(now.getDate() + d + 0); 
document.write((now.getDate()) + "." + lang[language]["monthNames"][now.getMonth()] + "." + now.getFullYear()); 
} 
var lang = { 
"ru":{ 
"monthNames":[ "01" , "02" , "03" , "04" , "05" , "06" , "07" , "08" , "09" , "10" , "11" , "12" ] 
}
}; 