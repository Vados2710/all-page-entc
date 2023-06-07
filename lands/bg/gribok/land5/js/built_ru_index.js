var slSpead = 700; //скорость перелистывания слайдов
var slTimeOut = 86400000; //время задежки показа слайда
var slNeedLinks = true; //управляет ссылками "Следующий " и "Предыдущий" - если значение этой переменной равно true, то эти ссылки будут отображаться, а если false, то соответственно их не будет
//определяем скорось для оперымини
var isMobile = {
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	}
};
if (isMobile.Opera()) {
	slSpead = 100;
};
///
$(document).ready(function (e) {
	$('.slide').css({
		"position": "absolute",
		"top": '0',
		"left": '0'
	}).hide().eq(0).show();
	var slideNum = 0; //счетчик, номер активного слайда
	var slideTime;
	slideCount = $("#slider .slide").size();
	var animSlide = function (arrow) { // Основная функция, логика нашего слайдера
		clearTimeout(slideTime);
		$('.slide').eq(slideNum).fadeOut(slSpead);
		if (arrow == "next") {
			if (slideNum == (slideCount - 1)) {
				slideNum = 0;
			} else {
				slideNum++
			}
		} else if (arrow == "prew") {
			if (slideNum == 0) {
				slideNum = slideCount - 1;
			} else {
				slideNum -= 1
			}
		} else {
			slideNum = arrow;
		}
		$('.slide').eq(slideNum).fadeIn(slSpead, rotator);
		$(".control-slide.active").removeClass("active");
		$('.control-slide').eq(slideNum).addClass('active');
	};
	if (slNeedLinks) {
		var $linkArrow = $('<button id="prewbutton"></button><button id="nextbutton"></button>')
			.prependTo('#slider');
		$('#nextbutton').click(function () {
			animSlide("next");

		});
		$('#prewbutton').click(function () {
			animSlide("prew");
		})
	}
	var $adderSpan = '';
	$('.slide').each(function (index) {
		$adderSpan += '<span class = "control-slide">' + index + '</span>';
	});
	$('<div class ="sli-links">' + $adderSpan + '</div>').appendTo('#slider-wrap');
	$(".control-slide:first").addClass("active");

	$('.control-slide').click(function () {
		var goToNum = parseFloat($(this).text());
		animSlide(goToNum);
	});
	var pause = false; //отвечает за остановку слайдера, если user навел курсор на слайд
	var rotator = function () {
		if (!pause) {
			slideTime = setTimeout(function () {
				animSlide('next')
			}, slTimeOut);
		}
	};
	$('#slider-wrap').hover(
		function () {
			clearTimeout(slideTime);
			pause = true;
		},
		function () {
			pause = false;
			rotator();
		});
	rotator();
});

jQuery().ready(function () {
	function TemplateRefresh() {
		ModalRefresh();
	}

	$(window).resize(function () {
		TemplateRefresh();
	});
	TemplateRefresh();

	/* -----------------------------------------------------------------------------------------
	 * Modal Refresh
	 */
	function ModalRefresh() {
		if ($('.modal').is(':visible')) {
			var modalBlock = $('.modal-block'),
				width = parseInt(modalBlock.width()),
				height = parseInt(modalBlock.height());
			if ($(window).height() > height + 20) {
				modalBlock.addClass('modal-top').removeClass('margin-t-b').css('margin-top', -1 * (height / 2));
			} else {
				modalBlock.addClass('margin-t-b').removeClass('modal-top');
			}
			if ($(window).width() > width) {
				modalBlock.addClass('modal-left').removeClass('margin-l').css('margin-left', -1 * (width / 2));
			} else {
				modalBlock.addClass('margin-l').removeClass('modal-left');
			}
		}
	}


	/* -----------------------------------------------------------------------------------------
	 * Modal Show
	 */
	$(document).on('click', 'a[modal]', function () {
		var modalWindow = $('div#' + $(this).attr('modal'));
		if (modalWindow.length) {
			modalWindow.fadeIn('fast');
			$('body').addClass('modal-show');
			ModalRefresh();
			return false;
		}
	});


	/* -----------------------------------------------------------------------------------------
	 * Modal Hide
	 */
	function ModalHide() {
		$('.modal:visible').fadeOut('fast', function () {
			$('body').removeClass('modal-show');
		});
	}

	$(document)
		.on('click', '.icon-close, .modal', function (event) {
			if (event.target != this)
				return false;
			else
				ModalHide();
		})
		.on('keydown', function (key) {
			if (key.keyCode == 27)
				ModalHide();
		})
		.on('click', '.modal > *', function (event) {
			event.stopPropagation();
			return true;
		})

});


function startTimer() {
	var my_timer = document.getElementById("my_timer");
	//var time = my_timer.innerHTML;
	//var arr = time.split(":");
	var h = $(".hour").html();
	var m = $(".min").html();
	var s = $(".sec").html();
	if (s == 0) {
		if (m == 0) {
			if (h == 0) {
				//alert("           ");

				$('.timer__item-title').hide();
				$('.timer__finish').show();
				return;
			}
			h--;
			m = 59;
			if (h < 10)
				h = "0" + h;
		}
		m--;
		if (m < 10)
			m = "0" + m;
		s = 59;
	} else
		s--;
	if (s < 10)
		s = "0" + s;
	$(".hour").html(h);
	$(".min").html(m);
	$(".sec").html(s);
	setTimeout(startTimer, 1000);
}
startTimer();

$(document).ready(function () {

	/*   scroll   */
	var scrollTo = function () {
		var anchor = $(this).attr("href");
		var hAnchor = $(anchor).offset().top;
		//скролим
		$('html,body').animate({
			scrollTop: hAnchor
		}, 700);
		return false;
	};
	$(function () {
		$('.scrollTo').on('click', scrollTo);
	});


	/* modal */
	$('.headerCallJs').on('click', function (event) {
		event.preventDefault();
		$(".popup-callback").fadeIn(200);
	});
	$('.phone-call').on('click', function (event) {
		event.preventDefault();
		$(".popup-phone").fadeIn(200);
	});

	$('.close-modal,.close-img').on('click', function (event) {
		event.preventDefault();
		$(".popup-callback").fadeOut(200);
		$(".popup-phone").fadeOut(200);
	});
	$('.close-modal-mouse').on('click', function (event) {
		event.preventDefault();
		$(".popup-mouseleave").addClass('hide');
	});
});

//
//$(document).mouseup(function (e) { // событие клика по веб-документу
//    var div = $(".popup--all .form-wrapper"); // тут указываем ID элемента
//    var divPopup = $(".popup--all");
//    if (!div.is(e.target) // если клик был не по нашему блоку
//        && div.has(e.target).length === 0) { // и не по его дочерним элементам
//        divPopup.fadeOut(200); // скрываем его
//    }
//});
//$(document).mouseup(function (e) { // событие клика по веб-документу
//    var div = $(".popup-mouseleave .form-wrapper"); // тут указываем ID элемента
//    var divPopup = $(".popup-mouseleave");
//    if (!div.is(e.target) // если клик был не по нашему блоку
//        && div.has(e.target).length === 0) { // и не по его дочерним элементам
//        divPopup.addClass('hide'); // скрываем его
//    }
//});

//включить/выключить функцию
var mouse = true; //выход мышки

var popUpBy = true; //попап с заказами

var checkCode = true; //проверка кода продукта

var todayBayVal = true; //количество купленых сегодня товаров

var bPhone = true; //синяя трука для попапа

var mBrowser = false; //подключить стили для браузеров

var operaMini = false; //опера мини

var internetEx = false; //ИЕ

var safariWin = false; //Сафари виндовс

var safariMac = false; //Сафари МасОС

var fireFox = false; //Мозила







//Выход мышки
function mouseMoved() {
	$(".mouse").html('<div class="line_top mouse_moved"></div><div class="line_bottom mouse_moved"></div>');
	$('.mouse_moved').mouseover(function () {
		var displayPop = $(".popup-callback").css('display');
		var displayP = $(".popup-phone").css('display');
		if (displayPop == 'none' && displayP == 'none') {
			$('.popup-mouseleave').show();
		}
	});

}


//Количество купленых товаров на данный момент

function NowTime() {
	var d = new Date();
	var result = (d.getHours() * 60 + d.getMinutes()) * 2 + 2000;
	$('#todayBay').html(result);
};


//Добавить синюю трубку телефона
function bluePhone() {
	$('.bluePhone').html('<div class="phone-call cbh-phone cbh-green cbh-show  cbh-static" id="clbh_phone_div"><a href="#" class="phoneJs"><div class="cbh-ph-circle"></div><div class="cbh-ph-circle-fill"></div><div class="cbh-ph-img-circle1"></div></a></div>');
	$('.phoneJs').click(function () {
		event.preventDefault();
		$('.popup-second').fadeIn(300);
	});
}

//Спрятать попапы

//$('html').mouseleave(function(){
//    var displayP1 = $(".popup-callback").css('display');
//    var displayP2 = $(".popup-phone").css('display');
//    if ( displayP1 == 'none' && displayP2 == 'none'){
//        $('.popup-mouseleave').show();
//    }
//});
//
//$('.mouse_moved').mouseover(function(){
//    var displayPop = $(".popup-callback").css('display');
//    var displayP = $(".popup-phone").css('display');
//    if (displayPop == 'none' && displayP == 'none') {
//        $('.popup-mouseleave').show();
//    }
//});


//спрятать попапы конек


//Стили для браузеров

function mobileBrowser() {
	function safari_windows() {
		var ua = navigator.userAgent.toLowerCase();
		if (ua.indexOf('safari') != -1) {
			if (ua.indexOf('chrome') > -1) {
				var a = 1;
			} else {
				var tag_css = document.createElement('link');
				var basePath = window.cdn_path || '';
				tag_css.type = 'text/css';
				tag_css.rel = 'stylesheet';
				tag_css.href = basePath + "css/safari.css";
				var tag_head = document.getElementsByTagName('head');
				tag_head[0].appendChild(tag_css);
			}
		};
	};

	function firefox() {
		var browser = navigator.userAgent.toLowerCase();
		if (browser.indexOf('firefox') > -1) {
			var basePath = window.cdn_path || '';
			var tag_css = document.createElement('link');
			tag_css.type = 'text/css';
			tag_css.rel = 'stylesheet';
			tag_css.href = basePath + "css/firefox.css";
			var tag_head = document.getElementsByTagName('head');
			tag_head[0].appendChild(tag_css);
		} else { // If another browser, return 0
			var b = 1;
		}
		return false;
	};

	function internet_explorer() {
		var basePath = window.cdn_path || '';
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");

		if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) { // If Internet Explorer, return version number
			var tag_css = document.createElement('link');
			tag_css.type = 'text/css';
			tag_css.rel = 'stylesheet';
			tag_css.href = basePath + "css/ie.css";
			var tag_head = document.getElementsByTagName('head');
			tag_head[0].appendChild(tag_css);
		} else { // If another browser, return 0
			var b = 1;
		}
		return false;
	};


	function getMobileOperatingSystem() {
		var userAgent = navigator.userAgent || navigator.vendor || window.opera;

		if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
			var basePath = window.cdn_path || '';
			var tag_css = document.createElement('link');
			tag_css.type = 'text/css';
			tag_css.rel = 'stylesheet';
			tag_css.href = basePath + "css/ios.css";
			var tag_head = document.getElementsByTagName('head');
			tag_head[0].appendChild(tag_css);
		}

	};

	function opera_mini() {
		var isMobile = {
			Opera: function () {
				return navigator.userAgent.match(/Opera Mini/i);
			}
		};
		if (isMobile.Opera()) {
			var basePath = window.cdn_path || '';
			var tag_css = document.createElement('link');
			tag_css.type = 'text/css';
			tag_css.rel = 'stylesheet';
			tag_css.href = basePath + "css/operamini.css";
			var tag_head = document.getElementsByTagName('head');
			tag_head[0].appendChild(tag_css);

		}
	}

	function checkBrowser() {

		if (safariMac == true) {
			getMobileOperatingSystem();
		}
		if (internetEx == true) {
			internet_explorer();
		}
		if (safariWin == true) {
			safari_windows();
		}
		if (fireFox == true) {
			firefox();
		}
		if (operaMini == true) {
			opera_mini();
		}

	}
	checkBrowser();
};