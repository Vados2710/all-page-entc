const months=["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"],monthMin=["","","","","","","","","","","",""],days=["duminică","luni","marți","miercuri","joi","vineri","sâmbătă"],daysMin=["","","","","","",""],seasons=["iarnă","arc","vară","toamnă"];function postDate(e,t,n,i,o){for(let e=0;e<60;e++)a(e,"date-"),a(e,"date");function a(e,t){let n;n="date-"===t?-e:e;const i=new Date(Date.now()+864e5*n),o=i.getDate(),a=i.getMonth()+1,s=i.getFullYear(),u=l(o),c=u+"."+l(a)+"."+s,m=t+e,d=document.querySelectorAll("."+m);for(let e=0;e<d.length;e++){const t=d[e].dataset.format;d[e].innerHTML=void 0!==t&&""!==t?String(r(u,a,s,t,n)):c}}function r(e,t,i,o,a){let r=o;const c=["dd","mm","yyyy","monthFull","year"],m={dd:e,mm:l(t),yyyy:i,monthFull:s(t,n,!0),year:u(i,a)};for(let e=0;e<c.length;e++){let t=c[e],n=new RegExp(t);r=r.replace(n,m[t])}return r.split(" ").join(" ")}function s(e,t,n,i){const o=i||0;let a;return a=e+o>12?o-(12-e):e+o,r=n,s=t[(a=e+o<=0?12+o+1:e+o)-1],r&&s&&s.length>0?s[0].toUpperCase()+s.slice(1):s;var r,s}function u(e,t){return e+t}function l(e){return e<10?"0"+e:e}}document.body.classList.contains("ev-date")&&document.addEventListener("DOMContentLoaded",function(){postDate(days,daysMin,months,monthMin,seasons)});

// timer
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var i,e=86400,s=3600,a={callback:null,step:null,stepCount:1,captionSize:0,countdown:!0,countdownAlertLimit:10,displayCaptions:!1,displayDays:0,displayHours:!0,fontFamily:"Verdana, sans-serif",fontSize:0,lang:"en",languages:{},seconds:0,start:!0,theme:"white",width:25,height:30,gap:11,vals:[0,0,0,0,0,0,0,0,0],limits:[9,9,9,2,9,5,9,5,9],iSec:8,iHour:4,tickTimeout:1e3,intervalId:null,tickCount:0},n={start:function(i){var e;i&&(l.call(this,i),e=setTimeout(d.bind(this),1e3),this.data("ttStartTime",t.now()),this.data("intervalId",e))},stop:function(){var t=this.data();return t.intervalId&&(clearTimeout(t.intervalId),this.data("intervalId",null)),t},reset:function(t){var i=n.stop.call(this),e=void 0===t?i.seconds:t;this.find("div").css({backgroundPosition:"left center"}),this.find("ul").parent().removeClass("timeTo-alert"),l.call(this,e,!0)}},o={en:{days:"days",hours:"hours",min:"minutes",sec:"seconds"},ru:{days:"дней",hours:"часов",min:"минут",sec:"секунд"},ua:{days:"днiв",hours:"годин",min:"хвилин",sec:"секунд"},de:{days:"Tag",hours:"Uhr",min:"Minuten",sec:"Secunden"},fr:{days:"jours",hours:"heures",min:"minutes",sec:"secondes"},es:{days:"días",hours:"horas",min:"minutos",sec:"segundos"},sp:{days:"días",hours:"horas",min:"minutos",sec:"segundos"},it:{days:"giorni",hours:"ore",min:"minuti",sec:"secondi"},nl:{days:"dagen",hours:"uren",min:"minuten",sec:"seconden"},no:{days:"dager",hours:"timer",min:"minutter",sec:"sekunder"},pt:{days:"dias",hours:"horas",min:"minutos",sec:"segundos"},tr:{days:"gün",hours:"saat",min:"dakika",sec:"saniye"},pl:{days:"dni",hours:"godziny",min:"minuty",sec:"secundy"}};function l(t,i){var a,n,o,l,r,c,u,h,p,m=this.data(),f=this.find("ul"),y=!1;if(m.vals&&0!==f.length){for(t||(t=m.seconds),m.intervalId&&(y=!0,clearTimeout(m.intervalId)),n=(a=Math.floor(t/e))*e,n+=(o=Math.floor((t-n)/s))*s,c=(a<100?"0"+(a<10?"0":""):"")+a+(o<10?"0":"")+o+((l=Math.floor((t-n)/60))<10?"0":"")+l+((r=t-(n+=60*l))<10?"0":"")+r,u=m.vals.length-1,h=c.length-1;u>=0;u-=1,h-=1)p=parseInt(c.substr(h,1),10),m.vals[u]=p,f.eq(u).children().html(p);(y||i)&&(m.ttStartTime=Date.now(),m.intervalId=setTimeout(d.bind(this),1e3),this.data("intervalId",m.intervalId))}}function d(i){var e,s,a,n,o,l,r=this,c=this.find("ul"),u=this.data();if(!u.vals||0===c.length)return u.intervalId&&(clearTimeout(u.intervalId),this.data("intervalId",null)),void(u.callback&&u.callback());void 0===i&&(i=u.iSec),this.data("tickCount",u.tickCount+1),e=u.vals[i],s=c.eq(i),a=s.children(),n=u.countdown?-1:1,a.eq(1).html(e),e+=n,"function"==typeof u.step&&u.tickCount%u.stepCount==0&&(this.data("tickCount",0),u.step()),i===u.iSec&&(o=u.tickTimeout,l=Date.now()-u.ttStartTime,u.sec+=n,o+=Math.abs(u.seconds-u.sec)*o-l,u.intervalId=setTimeout(d.bind(this),o)),e<0||e>u.limits[i]?(e<0?(e=u.limits[i],i===u.iHour&&u.displayDays>0&&0===u.vals[i-1]&&(e=3)):e=0,i>0&&d.call(this,i-1)):!u.countdown&&i===u.iHour&&u.displayDays>0&&2===u.vals[i-1]&&3===u.vals[i]&&(e=0,d.call(this,i-1)),a.eq(0).html(e),t.support.transition?(s.addClass("transition"),s.css({top:0}),setTimeout(function(){s.removeClass("transition"),a.eq(1).html(e),s.css({top:"-"+u.height+"px"}),n>0||i!==u.iSec||(u.sec===u.countdownAlertLimit&&c.parent().addClass("timeTo-alert"),0===u.sec&&(c.parent().removeClass("timeTo-alert"),u.intervalId&&(clearTimeout(u.intervalId),r.data("intervalId",null)),"function"==typeof u.callback&&u.callback()))},410)):s.stop().animate({top:0},400,i!==u.iSec?null:function(){a.eq(1).html(e),s.css({top:"-"+u.height+"px"}),n>0||i!==u.iSec||(u.sec===u.countdownAlertLimit?c.parent().addClass("timeTo-alert"):0===u.sec&&(c.parent().removeClass("timeTo-alert"),u.intervalId&&(clearTimeout(u.intervalId),r.data("intervalId",null)),"function"==typeof u.callback&&u.callback()))}),u.vals[i]=e}return void 0===t.support.transition&&(t.support.transition=void 0!==(i=(document.body||document.documentElement).style).transition||void 0!==i.WebkitTransition||void 0!==i.MozTransition||void 0!==i.MsTransition||void 0!==i.OTransition),t.fn.timeTo=function(){var i,d,r,c,u,h,p,m,f,y={},g=Date.now();for(i=0;i<arguments.length;i+=1)d=arguments[i],0===i&&"string"==typeof d?c=d:"object"==typeof d?"function"==typeof d.getTime?y.timeTo=d:y=t.extend(y,d):"function"==typeof d?y.callback=d:(r=parseInt(d,10),isNaN(r)||(y.seconds=r));if(y.timeTo)y.timeTo.getTime?u=y.timeTo.getTime():"number"==typeof y.timeTo&&(u=y.timeTo),y.seconds=u>g?Math.floor((u-g)/1e3):0;else if(y.time||!y.seconds)if((u=y.time)||(u=new Date(g)),"object"==typeof u&&u.getTime)y.seconds=u.getDate()*e+u.getHours()*s+60*u.getMinutes()+u.getSeconds(),y.countdown=!1;else if("string"==typeof u){for(p=u.split(":"),m=0,f=1;p.length;)m+=p.pop()*f,f*=60;y.seconds=m,y.countdown=!1}return!1!==y.countdown&&y.seconds>e&&void 0===y.displayDays?(h=Math.floor(y.seconds/e),y.displayDays=(h<10?1:h<100&&2)||3):!0===y.displayDays?y.displayDays=3:y.displayDays&&(y.displayDays=y.displayDays>0?Math.floor(y.displayDays):3),this.each(function(){var i,e,s,d,r,u,h,p,m,f,g,v,T,w,I,S,x,b,k,D,C,M=t(this),z=M.data();if(z.intervalId&&(clearInterval(z.intervalId),z.intervalId=null),z.vals)"reset"!==c&&t.extend(z,y);else{if(e=z.opt?z.options:y,i=Object.keys(a).reduce(function(t,i){return Array.isArray(a[i])?t[i]=a[i].slice(0):t[i]=a[i],t},{}),(z=t.extend(i,e)).options=e,z.height=Math.round(100*z.fontSize/93)||z.height,z.width=Math.round(.8*z.fontSize+.13*z.height)||z.width,z.displayHours=!(!z.displayDays&&!z.displayHours),d={fontFamily:z.fontFamily},z.fontSize>0&&(d.fontSize=z.fontSize+"px"),r=z.languages[z.lang]||o[z.lang],M.addClass("timeTo").addClass("timeTo-"+z.theme).css(d),u='<ul style="left:'+Math.round(z.height/10)+"px; top:-"+z.height+'px"><li>0</li><li>0</li></ul></div>',p='<div class="first"'+(h=z.fontSize?' style="width:'+z.width+"px; height:"+z.height+'px;"':' style=""')+">"+u,m="<div"+h+">"+u,f="<span>:</span>",g=Math.round(2*z.width+3),T=(v=z.captionSize||z.fontSize&&Math.round(.43*z.fontSize))?"font-size:"+v+"px;":"",w=v?' style="'+T+'"':"",I=(z.displayCaptions?(z.displayHours?'<figure style="max-width:'+g+'px">$1<figcaption'+w+">"+r.hours+"</figcaption></figure>"+f:"")+'<figure style="max-width:'+g+'px">$1<figcaption'+w+">"+r.min+"</figcaption></figure>"+f+'<figure style="max-width:'+g+'px">$1<figcaption'+w+">"+r.sec+"</figcaption></figure>":(z.displayHours?"$1"+f:"")+"$1"+f+"$1").replace(/\$1/g,p+m),z.displayDays>0){for(S=Math.round(.4*z.fontSize||a.gap),x=p,s=z.displayDays-1;s>0;s-=1)x+=1===s?m.replace('">',"margin-right:"+S+'px">'):m;1===z.displayDays&&(x=x.replace('">',"margin-right:"+S+'px">')),I=(z.displayCaptions?'<figure style="width:'+(z.width*z.displayDays+S+4)+'px">$1<figcaption style="'+T+"padding-right:"+S+'px">'+r.days+"</figcaption></figure>":"$1").replace(/\$1/,x)+I}M.html(I)}if((b=M.find("div")).length<z.vals.length){for(k=z.vals.length-b.length,D=z.vals,C=z.limits,z.vals=[],z.limits=[],s=0;s<b.length;s+=1)z.vals[s]=D[k+s],z.limits[s]=C[k+s];z.iSec=z.vals.length-1,z.iHour=z.vals.length-5}z.sec=z.seconds,M.data(z),c&&n[c]?n[c].call(M,z.seconds):z.start?n.start.call(M,z.seconds):l.call(M,z.seconds)})},t});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});


function main() {


    $(document).ready(function () {
        $('.boxes > div').click(function () {
            if ($(this).parent().hasClass('boxesfirsttry')) {
                $('.boxes').removeClass('boxesfirsttry');
                $(this).addClass('openbox');
                $(this).find('.try').hide();
                $(this).find('.opentry').show();
                setTimeout(function () {
                    $('.sweet-overlay').show();
                    $('.sweet-alert').show();
                }, 500);
            } else if ($(this).parent().hasClass('boxeslasttry')) {
                if (!$(this).hasClass('openbox')) {
                    $(this).find('.try').hide();
                    $(this).find('.opentry').show();
                    $(this).find('.boxtext').css('display', 'block');
                    setTimeout(function () {
                        $('.spin-result-wrapper').show();
                        setTimeout(function () {
                            $('#boxesContainer').slideUp(250);
                            setTimeout(function () {
                                $('.order_block').slideDown(250);
                            }, 500);
                        }, 500);
                    }, 500);
                }
            }
        });

        $('#update').click(function () {
            $('.sweet-overlay').hide();
            $('.sweet-alert').hide();
            $('.boxes').addClass('boxeslasttry');
        });

        $('.pop-up-button').click(function () {
            $('.spin-result-wrapper').hide();
            // $('a').attr('href[#to-form]', '#fforms');
            $('#countdown').timeTo(1500);
        });
        $('.close-popup').click(function () {
            $('.spin-result-wrapper').hide();
            // $('a').attr('href[#to-form]', '#fforms');
            $('#countdown').timeTo(1500);
        });
    });


    const images = document.querySelectorAll(".cenz-image");

    for (var i = 0; i < images.length; i++) {
        let image = images[i];
        image.addEventListener('click', function (e) {
            e.preventDefault();
            image.classList.toggle('cenz-show');
        })
    }


    function fadeOut(el) {
        let opacity = 1;
        let timer = setInterval(function () {
            if (opacity <= 0.1) {
                clearInterval(timer);
                document.querySelector(el).style.display = "none";
            }
            document.querySelector(el).style.opacity = opacity;
            opacity -= opacity * 0.1;
        }, 30);
    }

    function fadeIn(el) {
        let opacity = 0.01;
        document.querySelector(el).style.display = "block";
        let timer = setInterval(function () {
            if (opacity >= 1) {
                clearInterval(timer);
            }
            document.querySelector(el).style.opacity = opacity;
            opacity += opacity * 0.1;
        }, 30);
    }


    let first = document.querySelector('.btn-primary');
    let textarea = document.querySelector('.comment-input');
    let nameInput = document.querySelector('.name-input');
    let icon = document.querySelector('.icon-input');
    let commentFileInput = document.querySelector('#file');
    let commentFileText = document.querySelector('.pust-comments__file-text');
    let file = document.querySelector('.file-label');


    commentFileInput.addEventListener('change', function () {

        commentFileText.innerHTML = 'Fotografia este încărcată'; // фото загружено
        commentFileText.style.color = '#237a27';
        file.classList.add('upload');
    });

    first.onclick = function (e) {
        if (textarea.value !== '' && nameInput.value !== '') {
            e.preventDefault();
            textarea.value = "";
            nameInput.value = "";
            icon.value = "";
            first.blur();
            commentFileText.innerHTML = 'Încărca-ţi fotografia dvs.';  // загрузить фото
            commentFileText.style.color = '#000';
            file.classList.remove('upload');
            fadeIn('.form-popup');
            setTimeout(fade, 3000);

            function fade() {
                fadeOut('.form-popup');
            }
        }
    }
}

if (document.documentElement.clientWidth < 480) {
    window.addEventListener('scroll',
        function () {
            return setTimeout(main, 1000)
        }, {
            once: true,
            passive: true
        });
} else {
    main();
}


