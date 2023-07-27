
function loadImageFileAsURL(a, b, d) {
  a = document
    .getElementById(a.target.id)
    .files;
  if (0 < a.length) {
    a = a[0];
    var e = new FileReader;
    e.onload = function (a) {
      a = a.target.result;
      document
        .querySelector(b)
        .src = a
    };
    e.readAsDataURL(a)
  }
}
$(function () {
  $("#calcweight").click(function (a) {
    a.preventDefault(); a = Math.ceil(Number($("#minus_weight").val()) / .666666); Number($("#weight").val()) > Number($("#minus_weight").val()) + 40 ? $(".formResult").html("<p><b>¡Si sigue las instrucciones a continuación, podrá perder " + $("#minus_weight").val() + " en solo " + a + " días sin dieta ni ejercicio!</b></p><p>¿Crees que es imposible? Lea el artículo a continuación hasta el final y cambiará de opinión. ¡Espero que esto cambie tu vida!</p>") : $(".formResult").html("<p><b>Datos Incorrectos.</b></p>");
    $(".formResult").css({ transition: "background 1s", backgroundColor: "#bf0909c4", border: '2px solid #bf0909c4' }); setTimeout(function () { $(".formResult").css({ backgroundColor: "#fff" }) }, 2E3)
  })
});

var videoWrap = $('.video-wrap');
var videoCover = $('.video-cover');
var videoFrame = $('.video-inner');

videoWrap.click(function () {
  $(this)
    .find($('.video-cover'))
    .css('display', 'none');
  $(this)
    .find($("video"))[0]
    .play();
});



(function($,document){var pluses=/\+/g;function raw(s){return s}function decoded(s){return decodeURIComponent(s.replace(pluses," "))}$.cookie=function(key,value,options){if(arguments.length>1&&(!/Object/.test(Object.prototype.toString.call(value))||value==null)){options=$.extend({},$.cookie.defaults,options);if(value==null){options.expires=-1}if(typeof options.expires==="number"){var days=options.expires,t=options.expires=new Date;t.setDate(t.getDate()+days)}value=String(value);return document.cookie=[encodeURIComponent(key),"=",options.raw?value:encodeURIComponent(value),options.expires?"; expires="+options.expires.toUTCString():"",options.path?"; path="+options.path:"",options.domain?"; domain="+options.domain:"",options.secure?"; secure":""].join("")}options=value||$.cookie.defaults||{};var decode=options.raw?raw:decoded;var cookies=document.cookie.split("; ");for(var i=0,parts;parts=cookies[i]&&cookies[i].split("=");i++){if(decode(parts.shift())===key){return decode(parts.join("="))}}return null};$.cookie.defaults={}})(jQuery,document);(function($){var rStartMiliseconds=$.cookie("randDate")?$.cookie("randDate"):(new Date).getTime()-29*24*60*60*1e3;if(!$.cookie("randDate"))$.cookie("randDate",(new Date).getTime()-29*24*60*60*1e3,{expires:1});var rStart=new Date(parseInt(rStartMiliseconds));var startMonth=rStart.getMonth()+1;if(startMonth<10)startMonth="0"+startMonth;var methods={init:function(options){return this},rstart:function(){return this.each(function(i){$(this).html(rStart.getDate()+"/"+startMonth+"/"+rStart.getFullYear())})},rdate:function(){return this.each(function(x){var z=x>=16?16:x;var nextDate=new Date(rStart.getTime()+z*(12+z)*(60+x)*60*(1e3+x));if(x>=31)nextDate=new Date(parseInt(rStartMiliseconds)+24946e5+x*15e4);ndate=nextDate.getDate();nmonth=nextDate.getMonth()+1;nyear=nextDate.getFullYear();nhour=nextDate.getHours();if(ndate<10)ndate="0"+ndate;if(nmonth<10)nmonth="0"+nmonth;if(nhour<10)nhour="0"+nhour;nminutes=nextDate.getMinutes();if(nminutes<10)nminutes="0"+nminutes;nsec=nextDate.getSeconds();if(nsec<10)nsec="0"+nsec;$(this).html(ndate+"."+nmonth+"."+nyear+" - "+nhour+":"+nminutes)})},ryear:function(){return this.each(function(i){$(this).html((new Date).getFullYear())})}};$.fn.randDate=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof method==="object"||!method){return methods.init.apply(this,arguments)}else{$.error("Method "+method+" does not exist for jQuery.randDate")}}})(jQuery);$(function(){var obj=$(".rstart, .startdate");if(obj.length){obj.randDate("rstart")}obj=$(".rdate, .ypdate");if(obj.length){obj.randDate("rdate")}obj=$(".ryear, .nowyear");if(obj.length){obj.randDate("ryear")}});months_localized={ru:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],fr:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],bg:["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"],nl:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],pt:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],tr:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],it:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],hu:["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],en:["January","February","March","April","May","June","July","August","September","October","November","December"],id:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],ms:["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"],hi:["जनवर","फरबर","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितम्बर","अक्टूबर","नवंबर","दिसंबर"],es:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],ro:["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],pl:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia"],sr:["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],cs:["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"],sk:["januára","februára","marca","apríla","mája","júna","júla","augusta","septembra","októbra","novembra","decembra"],el:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],th:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],vi:["Tháng Một","Tháng Hai","Tháng Ba","Tháng Bốn","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám"],fil:["Enero","Pebrero","Marso","Abril","Mayo","Hunyo","Hulyo","Agosto","Setyembre","Oktubre","Nobyembre","Disyembre"],ar:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],ur:["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"],nb:["Januar","Februar","Mars ","April ","May ","Juni ","Juli ","August ","September ","Oktober ","November ","Desember "],nn:["Januar","Februar","Mars ","April ","May ","Juni ","Juli ","August ","September ","Oktober ","November ","Desember "],no:["Januar","Februar","Mars ","April ","May ","Juni ","Juli ","August ","September ","Oktober ","November ","Desember "],nb_NO:["Januar","Februar","Mars ","April ","May ","Juni ","Juli ","August ","September ","Oktober ","November ","Desember "],km:["មករា","កុម្ភៈ","មិនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","‘វិច្ឆិកា","ធ្នូ"],zh:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]};days_localized={ru:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],fr:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],bg:["Неделя","Понеделник","Вторник","Сряда","Четвъртък","Петък","Събота"],nl:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],pt:["Domingo","Segunda Feira","Terça Feira","Quarta Feira","Quinta Feira","Sexta Feira","Sábado"],de:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],tr:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],it:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],hu:["Vasárnap","Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat"],en:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],hi:["सोमवार","मंगलवार","बुधवार","गुरूवार","शुक्रवार","शनिवार","रविवार"],ms:["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"],id:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],es:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],ro:["Duminică","Luni","Marţi","Miercuri","Joi","Vineri","Sâmbătă"],pl:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"],sr:["Nedelja","Ponedeljak","Utorak","Sreda","Četvrtak","Petak","Subota"],cs:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],sk:["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"],el:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],th:["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"],vi:["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"],ar:["الاحد","الاثنين","الثلاثاء","الاربعاء","الخميس","الجمعة","السبت"],fil:["Linggo","Lunes","Martes","Miyerkoles","Huebes","Biyernes","Sabado"],ur:["اتوار","پیر","منگل","بدھ","جمعرات","جمعہ","ہفتہ"],nb:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Friday","Lørdag"],nn:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Friday","Lørdag"],no:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Friday","Lørdag"],nb_NO:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Friday","Lørdag"],km:["អាទិត្យ","ច័ន្ធ","អង្គារ៍","ពុធ","ព្រហស្បិ៍","សុក្រ","សៅរ៍"],zh:["星期天","星期一","星期二","星期三","星期四","星期五","星期六"]};function dtimes(d){var g=5;if(g==1||g==4||g==6){var now=new Date;now.setDate(now.getDate()+d+1);document.write(now.getDate()+" "+months_localized[lang_locale][now.getMonth()])}else if(g==2||g==5||g==7){var now=new Date;now.setDate(now.getDate()+d+1-1);document.write(now.getDate()+" "+months_localized[lang_locale][now.getMonth()])}else if(g==3){var now=new Date;now.setDate(now.getDate()+d+1-2);document.write(now.getDate()+" "+months_localized[lang_locale][now.getMonth()])}}function dtime(d){var now=new Date;now.setDate(now.getDate()+d+1);document.write(days_localized[lang_locale][now.getDay()]+" "+now.getDate()+", "+" "+months_localized[lang_locale][now.getMonth()]+" "+now.getFullYear())}function dtime_nums(d,like_eu){var now=new Date;now.setDate(now.getDate()+d+1);var dayNum="";if(now.getDate()<10){dayNum="0"}dayNum+=now.getDate();var monthNum="";if(now.getMonth()+1<10){monthNum="0"}monthNum+=now.getMonth()+1;if(like_eu===true){document.write(dayNum+"."+monthNum+"."+now.getFullYear())}else{document.write(monthNum+"."+dayNum+"."+now.getFullYear())}}
document.addEventListener("DOMContentLoaded", function () {
  // Вивід дати (+ час).
  // Arguments: dateFormat (string), language (string), abbreviated (bool). Default: 'dd.mm.yyyy', 'ru', false
  postDate( /*'dateFormat', 'ru', false*/ );
});

function postDate(sa, countryName, isAbbreviated) {
  // Додаємо клас "date-N", де N - кількість "відмотаних" днів.
  // Наприклад, span class="date-0"></span> - мотає 0 днів назад (сьогодні).
  // Наприклад, span class="date-5"></span> - мотає 5 днів назад.

  // Вивід дати (+ години + хвилини), додаємо клас "time". Наприклад, <span class="date-1 time"></span>. 
  // Виводить у форматі на зразок "14.02.2018 14:22"
  // Працює як в порядку зростання, так і в порядку спадання (міняємо флажок нижче)

  var sa = sa || 'dd.mm.yyyy',
    msInDay = 86400000,
    counterLength = 90, // Максимальна кількість вімотаних днів. Змінюємо за необхідності.
    months,
    countryName = countryName || 'ge', // Мова для місяців. 
    isAbbreviated = isAbbreviated || false, // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн", тоді ставим TRUE.
    localDate = new Date();

  switch (countryName) {
    case 'ge': // Грузинский
    months = ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'];
    break;
    case 'it': // Italy
      months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
      break;
    case 'es': // Spain
      months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      break;
    case 'fr': // France
      months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
      break;
    case 'pt': // Portugal
      months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
      break;
    case 'de': // Germany
      months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
      break;
    case 'bg': // Bulgaria
      months = ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'];
      break;
    case 'pl': // Poland
      months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
      break;
    case 'ro': // Romania
      months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
      break;
    case 'hu': // Hungary (Румунія)
      months = ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'];
      break;
    case 'gr': // Greece
    case 'cy': // Cyprus (Кіпр)
      months = ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'];
      break;
    case 'ru': // Russia
      months = ['Января', 'Февраля', 'Марта', 'Апрель', 'Май', 'Июнь', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
      break;
  }

  if (isAbbreviated) {
    for (var i = 0; i < months.length; i++) {
      months[i] = months[i].slice(0, 3).toLowerCase(); // Прибираємо ".toLowerCase()", якщо перша буква повинна бути великою.
    }
  }

  for (var counter = 0; counter < counterLength; counter++) {
    var dateClass = "date-" + counter,
      nodeList = document.getElementsByClassName(dateClass),
      date = new Date(localDate.getTime() - counter * msInDay),
      timeCounter = 0,
      timeArray = time(nodeList /*, true*/ ); // Розкоментувати, якщо необхідне сортування в порядку спадання.

    timeArray = timeFormat(timeArray);

    for (var i = 0; i < nodeList.length; i++) {
      var data = nodeList[i].dataset;

      if (data.format) {
        nodeList[i].innerHTML = format(date, data.format);
        // format: особливий формать для окремої дати. Додаємo як data-format="фомарт". 
        /// Формати дивитись в switch нижче. dd - числом, day - прописом.

        // Наприклад, <span class="date-1" data-format="dd month yyyy"></span> 
        // мотає на 1 день назад і виводить цей span у вигляді "14 Лютого 2018".
      } else {
        // Загальний формат виводу дати змінювати ТУТ!
        nodeList[i].innerHTML = format(date, sa); // Default: dd.mm.yyyy 
      }
      if (/\btime\b/.test(nodeList[i].className)) {
        nodeList[i].innerHTML += " " + timeArray[timeCounter]; // Рядок для формату виводу часу.
        timeCounter++;
      }
    }
  }

  // <span clas="date-N"></span> - мотає час назад на N днів. Наприклад, <span className="date-5"></span>
  // <span clas="dateN"></span> - мотає час вперед на N днів. Наприклад, <span className="date5"></span>

  for (var counter = 0; counter < counterLength; counter++) {
    var dateClass = "date" + counter,
      nodeList = document.getElementsByClassName(dateClass),
      date = new Date(localDate.getTime() + counter * msInDay),
      timeCounter = 0;

    for (var i = 0; i < nodeList.length; i++) {
      var data = nodeList[i].dataset;

      if (data.format) {
        nodeList[i].innerHTML = format(date, data.format);
      } else {
        nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/ );
      }
    }
  }



  function time(nodeList, reverse) {
    var timeArray = [],
      timeStatement = false;

    for (var i = 0; i < nodeList.length; i++) {
      if (nodeList[i].className.match(/\btime\b/)) {
        if (nodeList[i].className.match(/\bdate-0\b/)) {
          timeStatement = true;
        }
        timeArray.push(timeRandom(timeStatement));
      }
    }

    if (reverse) timeArray.sort(function (a, b) {
      return b - a;
    });
    else timeArray.sort(function (a, b) {
      return a - b;
    });

    return timeArray;
  }

  function timeRandom(statement) {
    if (statement) {
      var date = new Date(),
        timeLimit = date.getHours() * 60 + date.getMinutes();

      return Math.round(0 + Math.random() * timeLimit);
    }
    return Math.round(0 + Math.random() * 1440);
  }

  function timeFormat(timearray) {
    var array = [];

    for (var i = 0; i < timearray.length; i++) {
      var htemp = Math.floor(timearray[i] / 60),
        mtemp = timearray[i] % 60,
        hours = htemp < 10 ? "0" + htemp : htemp,
        minutes = mtemp < 10 ? "0" + mtemp : mtemp;
      array.push(hours + ":" + minutes);
    }


    return array;
  }

  function format(date, formatstring) {
    var innerDate = "",
      day = date.getDate(),
      year = date.getFullYear(),
      month = date.getMonth() + 1,
      fo = formatstring || true;

    switch (fo) {
      case "tom":
          innerDate += day + 1;
          innerDate += ".";
          innerDate += (month < 10) ? ("0" + month) : month;
          return innerDate;
      case "mm.dd.yyyy":
        innerDate += (month < 10) ? ("0" + month) : month;
        innerDate += ".";
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += "." + year;
        return innerDate;

      case "dd month yyyy":
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += " ";
        innerDate += months[month - 1];
        innerDate += " " + year;
        return innerDate;

      case "dd month":
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += " ";
        innerDate += months[month - 1];
        return innerDate;
        case "month":
          innerDate += months[month - 1].toLowerCase();
          return innerDate;

      case "day dd, month yyyy":
        var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
        innerDate += days[new Date(year, month - 1, day).getDay()];
        innerDate += " ";
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += " ";
        innerDate += months[month - 1];
        innerDate += " " + year;
        return innerDate;

      case "dd/mm/yyyy":
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += "/";
        innerDate += (month < 10) ? ("0" + month) : month;
        innerDate += "/" + year;
        return innerDate;

      case "dd-mm-yyyy":
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += "-";
        innerDate += (month < 10) ? ("0" + month) : month;
        innerDate += "-" + year;
        return innerDate;

      case "yyyy.mm.dd":
        innerDate += year;
        innerDate += ".";
        innerDate += (month < 10) ? ("0" + month) : month;
        innerDate += ".";
        innerDate += (day < 10) ? ("0" + day) : day;
        return innerDate;

      case "month dd, yyyy":
        innerDate += months[month - 1];
        innerDate += " ";
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += ", ";
        innerDate += year;
        return innerDate;

      case "dd month, yyyy":
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += " ";
        innerDate += months[month - 1];
        innerDate += ", ";
        innerDate += year;
        return innerDate;

      default:
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += ".";
        innerDate += (month < 10) ? ("0" + month) : month;
        innerDate += "." + year;
        return innerDate;
    }
  }
};