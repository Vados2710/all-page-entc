function dtimes(e){var r=5;if(1==r||4==r||6==r){var a=new Date;a.setDate(a.getDate()+e+1),document.write(a.getDate()+" "+months_localized[lang_locale][a.getMonth()])}else if(2==r||5==r||7==r){var a=new Date;a.setDate(a.getDate()+e+1-1),document.write(a.getDate()+" "+months_localized[lang_locale][a.getMonth()])}else if(3==r){var a=new Date;a.setDate(a.getDate()+e+1-2),document.write(a.getDate()+" "+months_localized[lang_locale][a.getMonth()])}}
var months_localized={ru:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],fr:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],bg:["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"],nl:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],pt:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],tr:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],it:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],hu:["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],en:["January","February","March","April","May","June","July","August","September","October","November","December"],id:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],ms:["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"],hi:["जनवर","फरबर","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितम्बर","अक्टूबर","नवंबर","दिसंबर"],es:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],ro:["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],pl:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia"],sr:["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],cs:["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"],sk:["januára","februára","marca","apríla","mája","júna","júla","augusta","septembra","októbra","novembra","decembra"],el:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],th:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],vi:["Tháng Một","Tháng Hai","Tháng Ba","Tháng Bốn","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám"],fil:["Enero","Pebrero","Marso","Abril","Mayo","Hunyo","Hulyo","Agosto","Setyembre","Oktubre","Nobyembre","Disyembre"],ar:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],ur:["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"],nb:["Januar","Februar","Mars ","April ","May ","Juni ","Juli ","August ","September ","Oktober ","November ","Desember "],nn:["Januar","Februar","Mars ","April ","May ","Juni ","Juli ","August ","September ","Oktober ","November ","Desember "],no:["Januar","Februar","Mars ","April ","May ","Juni ","Juli ","August ","September ","Oktober ","November ","Desember "],nb_NO:["Januar","Februar","Mars ","April ","May ","Juni ","Juli ","August ","September ","Oktober ","November ","Desember "],km:["មករា","កុម្ភៈ","មិនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","‘វិច្ឆិកា","ធ្នូ"],zh:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]}