//PostDate
const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['','','','','','','','','','','',''],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) nodeList[i].innerHTML = defaultDate } function addZero(numb){return numb<10?'0'+numb:numb} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}

//Door
let doors = document.querySelectorAll(".door");
let doorSales = document.querySelectorAll(".door__sales");
let doorWrapper = document.querySelector(".door__wrapper");

let spinResultWrapper = document.querySelector(".spin-result-wrapper");
let spinResultBtn = document.querySelector(".pop-up-button");
let closedPopup = document.querySelector(".close-popup");

let orderBlock = document.querySelector(".order_block");
let orderBlock2 = document.querySelector(".lead-form-box");

let door1 = document.getElementById("door__1");
let door2 = document.getElementById("door__2");
let door3 = document.getElementById("door__3");

let doorSale1 = document.getElementById("door__sales1");
let doorSale2 = document.getElementById("door__sales2");
let doorSale3 = document.getElementById("door__sales3");


doors.forEach(function (door) {
	door.addEventListener("click", openDoor);

});

function openDoor(e) {
	e.currentTarget.classList.add("open");
	//должна выпадать всплывашка после открытие 1й двери

	setTimeout(function () {
		spinResultWrapper.style.display = "block";
	}, 2500);

	spinResultBtn.onclick = function () {
		start_timer();
		orderBlock.style.display = "block";
		orderBlock2.style.display = "block";
		doorWrapper.style.display = "none";
	}

	closedPopup.onclick = function () {
		start_timer();
		orderBlock.style.display = "block";
		orderBlock2.style.display = "block";
		doorWrapper.style.display = "none";
	}

	doorSales.forEach(function (sale) {

		if (door1.classList.contains("open")) {
			doorSale1.innerHTML = "50%";
			doorSale1.style.left = "32px";

			doorSale2.innerHTML = "50%";
			doorSale2.style.left = "30px";

			doorSale3.innerHTML = "25%";
			doorSale3.style.left = "32px";
		} else if (door2.classList.contains("open")) {
			doorSale2.innerHTML = "50%";
			doorSale2.style.left = "32px";

			doorSale1.innerHTML = "25%";
			doorSale1.style.left = "32px";

			doorSale3.innerHTML = "50%";
			doorSale3.style.left = "30px";
		} else if (door3.classList.contains("open")) {
			doorSale1.innerHTML = "50%";
			doorSale1.style.left = "30px";

			doorSale3.innerHTML = "50%";
			doorSale3.style.left = "32px";

			doorSale2.innerHTML = "25%";
			doorSale2.style.left = "32px";
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
}


var resultWrapper = document.querySelector(".spin-result-wrapper"),
	wheel = document.querySelector(".wheel-img");

$(function () {
	$(".fadepopup input").click(function () {
		$(".eeee, .fadepopup").css("display", "none");
	});
});
var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click(function (e) {
	e.preventDefault(), $(".spin-result-wrapper").fadeOut();
});

//Timer
var intr,
time = 600;

function start_timer() {
intr = setInterval(tick, 1e3);
}

function tick() {
if (0 < time) {
	time -= 1;
	var e = Math.floor(time / 60),
		n = 10 <= (n = time - 60 * e) ? n : "0" + t;
	if ((e < 0 && (e = 0), $("#min").html("0" + e), $("#sec").html(n), 0 == e && 0 == n)) return clearInterval(intr), !1;
}
}

//Censored
$('.cenz_wrapper > div').click(function () {
		$(this).hide();
		$(this).next().show();
	});
//Scroll
var linkNav = document.querySelectorAll('[href^="#"]'),
V = 0.05;
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
        hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
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
