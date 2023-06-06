window.onload = function() {
    startProdCountdown();
  };
var sc = 60; /* seconds between tick // must be bigger than 20 */
var count = 10; /* 1-99 */
var rand = 1; /* 1-9 */
var stop = 1; /* stop timer and show center-popup after this {N} counts // Must be smaller then ${count} */

// header popups
var time = 9999; /* show header-popups past {N} seconds after the site visit // 0 - to off */

// center popup
var center = 200; /* show center-popup past {N} seconds after the second site visit // 0 - to off */

var names = [
"Мария",
"Иванка",
"Елена",
"Йорданка",
"Пенка",
"Даниела",
"Росица",
"Марийка",
"Десислава",
"Виолета",
"Мария"
];

var cities = [
"София",
"Пловдив",
"Варна",
"Бургас",
"Русе",
"Стара Загора",
"Плевен",
"Добрич",
"Сливен",
"Шумен",
"София",
"София",
"София",
"София",
"София",
"София"
];

var cnt = 49;
function startProdCountdown() {
  intr = setInterval(buyout, 25e3)
}

function buyout() {
  cnt -= 1;
  if (cnt == 1){
    clearInterval(intr);
  }
  if (cnt >= 10) {
    var first = String(cnt).charAt(0);
    var second = String(cnt).charAt(1);
  } else {
    var first = "0";
    var second = String(cnt).charAt(0);
  }
  
  $(".first").html(first);
  $(".second").html(second);
}

var pt = 1200;
