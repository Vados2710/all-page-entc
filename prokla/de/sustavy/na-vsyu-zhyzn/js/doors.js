let doors = document.querySelectorAll(".door");
let doorSales = document.querySelectorAll(".door__sales");
let doorWrapper = document.querySelector(".door__wrapper");

let spinResultWrapper = document.querySelector(".spin-result-wrapper");
let spinResultBtn = document.querySelector(".pop-up-button");
let orderBlock = document.querySelector(".order_block");

let door1 = document.getElementById("door__1");
let door2 = document.getElementById("door__2");
let door3 = document.getElementById("door__3");

let doorSale1 = document.getElementById("door__sales1");
let doorSale2 = document.getElementById("door__sales2");
let doorSale3 = document.getElementById("door__sales3");

let customTitle = '';


doors.forEach(function (door) {
  door.addEventListener("click", openDoor);

});

function openDoor(e) {
  e.currentTarget.classList.add("open");


  doorSales.forEach(function (sale) {

    if (door1.classList.contains("open")) {
      doorSale1.innerHTML = widgetDoorsSale;

      doorSale2.innerHTML = (typeof widgetDoorsSale2 !== "undefined") ? widgetDoorsSale2 : "35%";

      doorSale3.innerHTML = (typeof widgetDoorsSale3 !== "undefined") ? widgetDoorsSale3 : "15%";
    } else if (door2.classList.contains("open")) {
      doorSale2.innerHTML = widgetDoorsSale;

      doorSale1.innerHTML = (typeof widgetDoorsSale3 !== "undefined") ? widgetDoorsSale3 : "15%";

      doorSale3.innerHTML = (typeof widgetDoorsSale2 !== "undefined") ? widgetDoorsSale2 : "35%";
    } else if (door3.classList.contains("open")) {
      doorSale1.innerHTML = (typeof widgetDoorsSale2 !== "undefined") ? widgetDoorsSale2 : "35%";

      doorSale3.innerHTML = widgetDoorsSale;

      doorSale2.innerHTML = (typeof widgetDoorsSale3 !== "undefined") ? widgetDoorsSale3 : "15%";
    }

  });

  for (let i = 0; i < doors.length; i++) {
    if (!doors[i].classList.contains("open")) {
      setTimeout(function () {
        doors[i].classList.add("open");
      }, 2500);
    }
  }

  for (let j = 0; j < doors.length; j++) {
    doors[j].removeEventListener("click", openDoor);
  }

  showResultWindow();
  showForm();
}

function showResultWindow() {
  setTimeout(function () {
    $('.spin-result-wrapper').css('display', 'block');
  }, 2000);
};

function showForm() {
  setTimeout(function () {
    $('.door__wrapper').slideUp();
    $('.order_block').slideDown();
    start_timer();
  }, 4000);
};

if (typeof customDoorsForm !== "undefined") {
  $('.default_order-block').remove();
  $('.default_spin-result-wrapper').remove();

  switch (customDoorsForm) {
    case 'id':
      customTitle = 'Tebak pintu mana yang ada diskon ' + widgetDoorsSale;
      break;
    case 'ph':
      customTitle = 'HUlaan KUNG ANONG PINTO ANG ' + widgetDoorsSale + ' OFF';
      break;
    case 'th':
      customTitle = 'เดาว่าประตูไหนลด ' + widgetDoorsSale;
      break;
    case 'ro':
      customTitle = 'GHICI CARE UȘĂ ARE O REDUCERE DE ' + widgetDoorsSale;
      break;
    case 'pe':
      customTitle = 'ADIVINA QUÉ PUERTA DESCUENTO ' + widgetDoorsSale;
      break;
    case 'ru':
      customTitle = 'Угадай за какой дверью скидка ' + widgetDoorsSale;
      break;
    default:
      customTitle = 'Guess which door the discount is behind ' + widgetDoorsSale;
  }

  $('.door__title').text(customTitle);
}

var time = 600;
var intr;

function start_timer() {
  intr = setInterval(tick, 1000);
}

function tick() {
  time = time - 1;
  var mins = Math.floor(time / 60);
  var secs = time - mins * 60;
  if (mins == 0 && secs == 0) {
    clearInterval(intr);
  }
  secs = secs >= 10 ? secs : "0" + secs;
  $("#min").html("0" + mins);
  $("#sec").html(secs);
}

$('.close-popup, .pop-up-button, .spin-result-wrapper').click(function (e) {
  e.preventDefault();
  $('.spin-result-wrapper').fadeOut();
  var top = $('#roulette').offset().top;
  $('body,html').animate({
    scrollTop: top
  }, 800);
});

// countries

$(function () {
  var e = new XMLHttpRequest;
  if (e.open("GET", "https://click.lucky.online/click/ip-location.html", !1), e.send(), 200 === e.status) {
    var t = JSON.parse(e.responseText);
    ! function (t, r) {
      $(".country").text(t), document.getElementsByTagName("body")[0], n(r)
    }(t.country, t.code)
  }
  function n(e) {
    var t, n = 0;
    $("select").change(function () {
      0 == n && (n = 1, $(this.children).each(function () {
        this.selected && (sel = $(this).val())
      }), "undefined" == typeof sel && (sel = "RU"),
        "DE" == sel &&
        ($(".country_name1").text("Deutschland"),
          $('.country_name2').text('deutsche'),
          $('.country_name3').text('Deutscher'), 
          $('.country_name4').text('deutschen'),
          
          $('.city1').text('Berlin'),
          $('.city2').text('Heidelberg'),
          $('.city3').text('Augsburg'),
          $('.flag').attr('src', 'images/nem.png'),

          document.getElementsByTagName("body")[0]),
        
        "AT" == sel &&
        ($(".country_name1").text("Österreich"),
        $('.country_name2').text('österreichisch'), 
        $('.country_name3').text('Österreichischer'), 
        $('.country_name4').text('österreichisches'), 

        $('.city1').text('Wien'),
        $('.city2').text('Salzburg'),
        $('.city3').text('Linz'),
        $('.flag').attr('src', 'images/at.png'),
        
          document.getElementsByTagName("body")[0]),
        n = 0)
    }).change();
  }
});