$(document).ready(function () {
  GetCount();
});

var today = new Date(),
  tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
tomorrow = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 0, 0, 0);

function GetCount() {
  dateNow = new Date();
  amount = tomorrow.getTime() - dateNow.getTime();
  delete dateNow;
  if (amount < 0) {
    $('.timer .hours').html('00');
    $('.timer .mins').html('00');
    $('.timer .secs').html('00');
  } else {
    hours = 0;
    mins = 0;
    secs = 0;
    out = "";
    amount = Math.floor(amount / 1000);
    amount = amount % 86400;
    hours = Math.floor(amount / 3600);
    amount = amount % 3600;
    mins = Math.floor(amount / 60);
    amount = amount % 60;
    secs = Math.floor(amount);
    if (hours < 10) hours = '0' + hours;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;

    $('.timer .hours').html(hours);
    $('.timer .mins').html(mins);
    $('.timer .secs').html(secs);
    setTimeout("GetCount()", 1000);
  }
}

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 730) {
    $('.navbar-topper').fadeIn();
  } else {
    $('.navbar-topper').fadeOut();
  }

});

let buttonMenu = document.querySelector(".navbar-toggle");
let clickMenu = document.querySelectorAll("nav li");

buttonMenu.addEventListener("click", function() {
  let nav = document.querySelector(".navbar-collapse");
  nav.classList.toggle("open");
  for(let i = 0; i < clickMenu.length; i++) {
    clickMenu[i].addEventListener("click", function() {
      nav.classList.remove("open");
    })
  }
  
});

var linkNav = document.querySelectorAll('[href^="#"]'),
V = 0.1;
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
        hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top - 20,  // отступ от окна браузера до id
        start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
            r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}