function dtime_nums(e){var a=new Date;a.setDate(a.getDate()-e+1);var r=a.getDate(),i=a.getDay(),n=a.getMonth();return days_localized[lang_loc][i]+", "+months_localized[lang_loc][n]+" "+r+", "+a.getFullYear()}function postDate(){var e=new Date;return e.setDate(e.getDate()-2),{day:e.getDate()+1,month:months_localized[lang_loc][e.getMonth()],year:e.getFullYear()}}var lang_loc="en",months_localized={ru:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],lt:["Sausis","Vasaris","Kovas","Balandis","Gegužė","Birželis","Liepa","Rugpjūtis","Rugsėjis","Spalis","Lapkritis","Gruodis"],fr:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],bg:["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"],nl:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],pt:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],tr:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],it:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],hu:["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],en:["January","February","March","April","May","June","July","August","September","October","November","December"],id:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],my:["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"],hi:["जनवर","फरबर","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितम्बर","अक्टूबर","नवंबर","दिसंबर"],es:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],ro:["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],pl:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia"],sr:["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],cz:["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"],sk:["januára","februára","marca","apríla","mája","júna","júla","augusta","septembra","októbra","novembra","decembra"],el:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιοwς","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],th:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],vi:["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],hr:["siječanj","veljača","ožujak","travanj","svibanj","lipanj","srpanj","kolovoz","rujan","listopad","studeni","prosinac"],hr:["nedjelja","ponedjeljak","utorak","srijeda","četvrtak","petek","subota"],fil:["Enero","Pebrero","Marso","Abril","Mayo","Hunyo","Hulyo","Agosto","Setyembre","Oktubre","Nobyembre","Disyembre"],ar:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],ur:["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"],nb:["Januar","Februar","Mars ","April ","May ","Juni ","Juli ","August ","September ","Oktober ","November ","Desember "],nn:["Januar","Februar","Mars ","April ","May ","Juni ","Juli ","August ","September ","Oktober ","November ","Desember "],no:["Januar","Februar","Mars ","April ","May ","Juni ","Juli ","August ","September ","Oktober ","November ","Desember "],nb_NO:["Januar","Februar","Mars ","April ","May ","Juni ","Juli ","August ","September ","Oktober ","November ","Desember "],km:["មករា","កុម្ភៈ","មិនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","‘វិច្ឆិកា","ធ្នូ"],zh:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},days_localized={ru:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],lt:["Sekmadienis","Pirmadienis","Antradienis","Trečiadienis","Ketvirtadienis","Penktadienis","Šeštadienis"],fr:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],bg:["Неделя","Понеделник","Вторник","Сряда","Четвъртък","Петък","Събота"],nl:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],pt:["Domingo","Segunda Feira","Terça Feira","Quarta Feira","Quinta Feira","Sexta Feira","Sábado"],de:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],tr:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],it:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],hu:["Vasárnap","Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat"],en:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],hi:["सोमवार","मंगलवार","बुधवार","गुरूवार","शुक्रवार","शनिवार","रविवार"],my:["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"],id:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],es:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],ro:["Duminică","Luni","Marţi","Miercuri","Joi","Vineri","Sâmbătă"],pl:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"],sr:["Nedelja","Ponedeljak","Utorak","Sreda","Četvrtak","Petak","Subota"],cz:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],sk:["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"],el:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],th:["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"],vi:["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"],ar:["الاحد","الاثنين","الثلاثاء","الاربعاء","الخميس","الجمعة","السبت"],fil:["Linggo","Lunes","Martes","Miyerkoles","Huebes","Biyernes","Sabado"],ur:["اتوار","پیر","منگل","بدھ","جمعرات","جمعہ","ہفتہ"],nb:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Friday","Lørdag"],nn:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Friday","Lørdag"],no:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Friday","Lørdag"],nb_NO:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Friday","Lørdag"],km:["អាទិត្យ","ច័ន្ធ","អង្គារ៍","ពុធ","ព្រហស្បិ៍","សុក្រ","សៅរ៍"],zh:["星期天","星期一","星期二","星期三","星期四","星期五","星期六"]};for(var key in months_localized)key==lang_locale&&(lang_loc=lang_locale);window.addEventListener("DOMContentLoaded",function(){var e=document.getElementsByClassName("ryear"),a=document.getElementsByClassName("rdate"),r=0,i=postDate();if(document.getElementById("date").innerHTML=i.day+", "+i.month+", "+i.year,a.length>0)for(var n=a.length;n>0;n--)r+=Math.round(2*Math.random()-.5),a[a.length-n].innerHTML=dtime_nums(2+r);if(e.length>0)for(var t=(new Date).getFullYear(),o=0;o<e.length;o++)e[o].innerHTML=t});