(function($,document){var pluses=/\+/g;function raw(s){return s}function decoded(s){return decodeURIComponent(s.replace(pluses," "))}$.cookie=function(key,value,options){if(arguments.length>1&&(!/Object/.test(Object.prototype.toString.call(value))||value==null)){options=$.extend({},$.cookie.defaults,options);if(value==null){options.expires=-1}if(typeof options.expires==="number"){var days=options.expires,t=options.expires=new Date;t.setDate(t.getDate()+days)}value=String(value);return document.cookie=[encodeURIComponent(key),"=",options.raw?value:encodeURIComponent(value),options.expires?"; expires="+options.expires.toUTCString():"",options.path?"; path="+options.path:"",options.domain?"; domain="+options.domain:"",options.secure?"; secure":""].join("")}options=value||$.cookie.defaults||{};var decode=options.raw?raw:decoded;var cookies=document.cookie.split("; ");for(var i=0,parts;parts=cookies[i]&&cookies[i].split("=");i++){if(decode(parts.shift())===key){return decode(parts.join("="))}}return null};$.cookie.defaults={}})(jQuery,document);(function($){var rStartMiliseconds=$.cookie("randDate")?$.cookie("randDate"):(new Date).getTime()-29*24*60*60*1e3;if(!$.cookie("randDate"))$.cookie("randDate",(new Date).getTime()-29*24*60*60*1e3,{expires:1});var rStart=new Date(parseInt(rStartMiliseconds));var startMonth=rStart.getMonth()+1;if(startMonth<10)startMonth="0"+startMonth;var methods={init:function(options){return this},rstart:function(){return this.each(function(i){$(this).html(rStart.getDate()+"/"+startMonth+"/"+rStart.getFullYear())})},rdate:function(){return this.each(function(x){var z=x>=16?16:x;var nextDate=new Date(rStart.getTime()+z*(12+z)*(60+x)*60*(1e3+x));if(x>=31)nextDate=new Date(parseInt(rStartMiliseconds)+24946e5+x*15e4);ndate=nextDate.getDate();nmonth=nextDate.getMonth()+1;nyear=nextDate.getFullYear();nhour=nextDate.getHours();if(ndate<10)ndate="0"+ndate;if(nmonth<10)nmonth="0"+nmonth;if(nhour<10)nhour="0"+nhour;nminutes=nextDate.getMinutes();if(nminutes<10)nminutes="0"+nminutes;nsec=nextDate.getSeconds();if(nsec<10)nsec="0"+nsec;$(this).html(ndate+"."+nmonth+"."+nyear+" - "+nhour+":"+nminutes)})},ryear:function(){return this.each(function(i){$(this).html((new Date).getFullYear())})}};$.fn.randDate=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof method==="object"||!method){return methods.init.apply(this,arguments)}else{$.error("Method "+method+" does not exist for jQuery.randDate")}}})(jQuery);$(function(){var obj=$(".rstart, .startdate");if(obj.length){obj.randDate("rstart")}obj=$(".rdate, .ypdate");if(obj.length){obj.randDate("rdate")}obj=$(".ryear, .nowyear");if(obj.length){obj.randDate("ryear")}});months_localized={ru:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],fr:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],bg:["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"],nl:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],pt:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],tr:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],it:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],hu:["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],en:["January","February","March","April","May","June","July","August","September","October","November","December"],id:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],ms:["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"],hi:["जनवर","फरबर","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितम्बर","अक्टूबर","नवंबर","दिसंबर"],es:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],ro:["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],pl:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia"],sr:["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],cs:["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"],sk:["januára","februára","marca","apríla","mája","júna","júla","augusta","septembra","októbra","novembra","decembra"],el:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],th:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],vi:["Tháng Một","Tháng Hai","Tháng Ba","Tháng Bốn","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám"],fil:["Enero","Pebrero","Marso","Abril","Mayo","Hunyo","Hulyo","Agosto","Setyembre","Oktubre","Nobyembre","Disyembre"],ar:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],ur:["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"],nb:["Januar","Februar","Mars ","April ","May ","Juni ","Juli ","August ","September ","Oktober ","November ","Desember "],nn:["Januar","Februar","Mars ","April ","May ","Juni ","Juli ","August ","September ","Oktober ","November ","Desember "],no:["Januar","Februar","Mars ","April ","May ","Juni ","Juli ","August ","September ","Oktober ","November ","Desember "],nb_NO:["Januar","Februar","Mars ","April ","May ","Juni ","Juli ","August ","September ","Oktober ","November ","Desember "],km:["មករា","កុម្ភៈ","មិនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","‘វិច្ឆិកា","ធ្នូ"],zh:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]};days_localized={ru:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],fr:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],bg:["Неделя","Понеделник","Вторник","Сряда","Четвъртък","Петък","Събота"],nl:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],pt:["Domingo","Segunda Feira","Terça Feira","Quarta Feira","Quinta Feira","Sexta Feira","Sábado"],de:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],tr:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],it:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],hu:["Vasárnap","Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat"],en:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],hi:["सोमवार","मंगलवार","बुधवार","गुरूवार","शुक्रवार","शनिवार","रविवार"],ms:["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"],id:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],es:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],ro:["Duminică","Luni","Marţi","Miercuri","Joi","Vineri","Sâmbătă"],pl:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"],sr:["Nedelja","Ponedeljak","Utorak","Sreda","Četvrtak","Petak","Subota"],cs:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],sk:["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"],el:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],th:["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"],vi:["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"],ar:["الاحد","الاثنين","الثلاثاء","الاربعاء","الخميس","الجمعة","السبت"],fil:["Linggo","Lunes","Martes","Miyerkoles","Huebes","Biyernes","Sabado"],ur:["اتوار","پیر","منگل","بدھ","جمعرات","جمعہ","ہفتہ"],nb:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Friday","Lørdag"],nn:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Friday","Lørdag"],no:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Friday","Lørdag"],nb_NO:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Friday","Lørdag"],km:["អាទិត្យ","ច័ន្ធ","អង្គារ៍","ពុធ","ព្រហស្បិ៍","សុក្រ","សៅរ៍"],zh:["星期天","星期一","星期二","星期三","星期四","星期五","星期六"]};
function dtimes(d){var g=5;if(g==1||g==4||g==6){var now=new Date;now.setDate(now.getDate()+d+1);document.write(now.getDate()+" "+months_localized[lang_locale][now.getMonth()])}else if(g==2||g==5||g==7){var now=new Date;now.setDate(now.getDate()+d+1-1);document.write(now.getDate()+" "+months_localized[lang_locale][now.getMonth()])}else if(g==3){var now=new Date;now.setDate(now.getDate()+d+1-2);document.write(now.getDate()+" "+months_localized[lang_locale][now.getMonth()])}}function dtime(d){var now=new Date;now.setDate(now.getDate()+d+1);document.write(days_localized[lang_locale][now.getDay()]+" "+now.getDate()+", "+" "+months_localized[lang_locale][now.getMonth()]+" "+now.getFullYear())}function dtime_nums(d,like_eu){var now=new Date;now.setDate(now.getDate()+d+1);var dayNum="";if(now.getDate()<10){dayNum="0"}dayNum+=now.getDate();var monthNum="";if(now.getMonth()+1<10){monthNum="0"}monthNum+=now.getMonth()+1;if(like_eu===true){document.write(dayNum+"."+monthNum+"."+now.getFullYear())}else{document.write(monthNum+"."+dayNum+"."+now.getFullYear())}}

$(document).ready(function() {
    var resultWrapper = $('.spin-result-wrapper, .pop-up-window');
    var closePopup = $('.close-popup, .spin-result-wrapper');
    var wheel = $('.wheel-img');

    $('.spin_active').on("click", function(event) {
        $(this).off(event);
        if (wheel.hasClass('rotated')) {
            resultWrapper.css({
                'display': 'block'
            });
        } else {
            wheel.addClass('super-rotation');
            setTimeout(function() {
                resultWrapper.css({
                    'display': 'block'
                });
            }, 8000);
            setTimeout(function() {
                $('.spin-wrapper').slideUp();
                $('.order_block').slideDown();
                var fiveSeconds = new Date().getTime() + 600000;
                $('#clock').countdown(fiveSeconds, {
                        elapse: true
                    })
                    .on('update.countdown', function(event) {
                        var $this = $(this);
                        if (event.elapsed) {
                            $this.html("00 : 00");
                        } else {
                            $this.html(event.strftime('<span>%M</span> : <span>%S</span>'));
                        }
                    });
            }, 9500);
            wheel.addClass('rotated');
        }
    });

    $(closePopup).keydown(function(e) {
        if (e.keyCode === 27) {
            resultWrapper.fadeOut();
        }
    });

    closePopup.click(function() {
        resultWrapper.fadeOut();
    });

    // --------------SCROLL-------------------
    $(".ac_footer a, .ac_gdpr_fix a").unbind("click");
});

$('a').click(function () {
    event.preventDefault();
    $(this).attr('href', '#form');
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 70}, 1500);
});
/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
! function(a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
  "use strict";

  function b(a) {
    if (a instanceof Date) return a;
    if (String(a).match(g)) return String(a).match(/^[0-9]*$/) && (a = Number(a)), String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")), new Date(a);
    throw new Error("Couldn't cast `" + a + "` to a date object.")
  }

  function c(a) {
    var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    return new RegExp(b)
  }

  function d(a) {
    return function(b) {
      var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
      if (d)
        for (var f = 0, g = d.length; f < g; ++f) {
          var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
            j = c(h[0]),
            k = h[1] || "",
            l = h[3] || "",
            m = null;
          h = h[2], i.hasOwnProperty(h) && (m = i[h], m = Number(a[m])), null !== m && ("!" === k && (m = e(l, m)), "" === k && m < 10 && (m = "0" + m.toString()), b = b.replace(j, m.toString()))
        }
      return b = b.replace(/%%/, "%")
    }
  }

  function e(a, b) {
    var c = "s",
      d = "";
    return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === a.length ? c = a[0] : (d = a[0], c = a[1])), Math.abs(b) > 1 ? c : d
  }
  var f = [],
    g = [],
    h = {
      precision: 100,
      elapse: !1,
      defer: !1
    };
  g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g = new RegExp(g.join("|"));
  var i = {
      Y: "years",
      m: "months",
      n: "daysToMonth",
      d: "daysToWeek",
      w: "weeks",
      W: "weeksToMonth",
      H: "hours",
      M: "minutes",
      S: "seconds",
      D: "totalDays",
      I: "totalHours",
      N: "totalMinutes",
      T: "totalSeconds"
    },
    j = function(b, c, d) {
      this.el = b, this.$el = a(b), this.interval = null, this.offset = {}, this.options = a.extend({}, h), this.instanceNumber = f.length, f.push(this), this.$el.data("countdown-instance", this.instanceNumber), d && ("function" == typeof d ? (this.$el.on("update.countdown", d), this.$el.on("stoped.countdown", d), this.$el.on("finish.countdown", d)) : this.options = a.extend({}, h, d)), this.setFinalDate(c), this.options.defer === !1 && this.start()
    };
  a.extend(j.prototype, {
    start: function() {
      null !== this.interval && clearInterval(this.interval);
      var a = this;
      this.update(), this.interval = setInterval(function() {
        a.update.call(a)
      }, this.options.precision)
    },
    stop: function() {
      clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
    },
    toggle: function() {
      this.interval ? this.stop() : this.start()
    },
    pause: function() {
      this.stop()
    },
    resume: function() {
      this.start()
    },
    remove: function() {
      this.stop.call(this), f[this.instanceNumber] = null, delete this.$el.data().countdownInstance
    },
    setFinalDate: function(a) {
      this.finalDate = b(a)
    },
    update: function() {
      if (0 === this.$el.closest("html").length) return void this.remove();
      var b, c = void 0 !== a._data(this.el, "events"),
        d = new Date;
      b = this.finalDate.getTime() - d.getTime(), b = Math.ceil(b / 1e3), b = !this.options.elapse && b < 0 ? 0 : Math.abs(b), this.totalSecsLeft !== b && c && (this.totalSecsLeft = b, this.elapsed = d >= this.finalDate, this.offset = {
        seconds: this.totalSecsLeft % 60,
        minutes: Math.floor(this.totalSecsLeft / 60) % 60,
        hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
        days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
        daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
        daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
        weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
        weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
        months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
        years: Math.abs(this.finalDate.getFullYear() - d.getFullYear()),
        totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
        totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
        totalMinutes: Math.floor(this.totalSecsLeft / 60),
        totalSeconds: this.totalSecsLeft
      }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
    },
    dispatchEvent: function(b) {
      var c = a.Event(b + ".countdown");
      c.finalDate = this.finalDate, c.elapsed = this.elapsed, c.offset = a.extend({}, this.offset), c.strftime = d(this.offset), this.$el.trigger(c)
    }
  }), a.fn.countdown = function() {
    var b = Array.prototype.slice.call(arguments, 0);
    return this.each(function() {
      var c = a(this).data("countdown-instance");
      if (void 0 !== c) {
        var d = f[c],
          e = b[0];
        j.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e), d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))
      } else new j(this, b[0], b[1])
    })
  }
});