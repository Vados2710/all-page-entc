// var cookies = (function(a) {
//     if (a == "") return {};
//     var b = {};
//     for (var i = 0; i < a.length; ++i) {
//         var p=a[i].split('=');
//         if (p.length != 2) continue;
//         b[p[0]] = p[1];
//     }

//     return b;
// })(document.cookie.split('; '));


// function initiate() {

//     var breakpoint = 1000;
//     var desktop = document.querySelector('#cloneThis');
//     var mobile = document.querySelector('#cloneMobileThis');



//     function init() {


//         var h = document.querySelector('.hours1'), m = document.querySelector('.minutes1'),
//             s = document.querySelector('.seconds1');

//         if (h && m && s) {
//             // РµСЃР»Рё РІСЃРµ Р·РЅР°С‡РµРЅРёСЏ (С‡Р°СЃС‹/РјРёРЅСѓС‚С‹/СЃРµРєСѓРЅРґС‹) СЃСѓС‰РµСЃРІС‚СѓСЋС‚, С‚РѕРіРґР° СЃСЂР°Р±Р°С‚С‹РІР°РµС‚ С‚Р°Р№РјРµСЂ
//             initializeTimer();
//         }

//     }

//     init();



//     function initializeTimer() {
//         // Р”РѕРґР°РґРё РєР»Р°СЃ "timer-different" РґР»СЏ <body>, СЏРєС‰Рѕ РЅРµРѕР±С…С–РґРЅРѕ СЂРѕР·РґС–Р»СЏС‚Рё СЂРѕР·СЂСЏРґРё РіРѕРґРёРЅ, С…РІРёР»РёРЅ С– СЃРµРєСѓРЅРґ. РќР°РїСЂРёРєР»Р°Рґ, http://prntscr.com/japnvo

//         if (!localStorage.getItem("ever-timer1")) {
//             var time = {
//                 hours: 0,
//                 minutes: 10,
//                 seconds: 0
//             };

//             time = time.hours * 3600 + time.minutes * 60 + time.seconds;

//             localStorage.setItem("time1", time);
//             localStorage.setItem("ever-timer1", true);
//         }

//         timerSettings();
//     }

//     function timerSettings() {
//         var time = localStorage.getItem('time1'),
//            hours = parseInt(time / 3600, 10),
//             minutes = parseInt((time - hours * 3600 ) / 60, 10),
//             seconds = parseInt(time % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : "" + minutes;
//         seconds = seconds < 10 ? "0" + seconds : "" + seconds;
//         hours = hours < 10 ? "0" + hours : "" + hours;

//         var hoursHTML = document.getElementsByClassName("hours1");
//         var minutesHTML = document.getElementsByClassName("minutes1");
//         var secondsHTML = document.getElementsByClassName("seconds1");

//         if (--time < 0) {
//             localStorage.removeItem("ever-timer1");
//             return;
//         }

//         filling(hoursHTML, hours);
//         filling(minutesHTML, minutes);
//         filling(secondsHTML, seconds);

//         localStorage.setItem("time1", time);
//         setTimeout(timerSettings, 1000);
//     }

//     function filling(obj, value) {
//         for (var i = 0; i < obj.length; i++) {
//             obj[i].innerHTML = value;
//         }
//     }


// };

// document.addEventListener('DOMContentLoaded', function () {
//     initiate();
// });