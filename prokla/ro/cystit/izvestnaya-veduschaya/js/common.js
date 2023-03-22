var windowHeight = document.documentElement.clientHeight;
var windowWidth = document.documentElement.clientWidth;
var stick_show = true;

var stick_block_inner = '<div class="stick_block" style="display: none; position: fixed; bottom: 0px; width: 100%; padding: 6px; color: #fff; background: #86c509; font-family: \'Proxima Nova\',Arial,\'Helvetica Neue\',sans-serif; font-weight: 700; text-align: center !important; z-index: 100; font-size: 15px;"><div style="position: absolute; right: 0px; margin-top: -33px; color: #000; background: #fff; padding: 3px; cursor: pointer;" onclick="StickClose(); return false;">Закрыть</div><div class="stick_block_title" style="text-align: center !important;"></div></div>';

document.body.insertAdjacentHTML('afterBegin', stick_block_inner);

function fdateTwoDigitsReturn(d) {
	var now = new Date();
	now.setDate(now.getDate() + d);
	var mm = now.getMonth() + 1;
	var day = now.getDate();
	if (now.getDate() < 10) day = '0' + now.getDate();
	if (mm < 10) mm = '0' + mm;
	return day + "." + mm + "." + now.getFullYear();
}


var stick_block_arr = [];

stick_block_arr[0] = 'Испытай удачу! <a href="#roulette_stick" onclick="ClickGoal(\'ya_stick_click\');" class="form_link_js" style="color: #fff; text-decoration: underline;">Нажми на колесо!</a> \n' + 'Попробуй получить скидку на наш препарат или вовсе забрать его <a href="#roulette_stick" onclick="ClickGoal(\'ya_stick_click\');"  class="form_link_js" style="color: #fff; text-decoration: underline;">\n' +
	'БЕСПЛАТНО</a>!';
stick_block_arr[1] = '\n' +
	'Только ' + fdateTwoDigitsReturn(0) + ' \n' +
	'можно получить препарат даром, если повезет!<br /><a href="#roulette_stick" onclick="ClickGoal(\'ya_stick_click\');"  class="form_link_js" style="color: #fff; text-decoration: underline;">можно получить препарат даром, если повезет!</a>';
stick_block_arr[2] = 'Только ' + fdateTwoDigitsReturn(0) + ' \n' +
	'можно получить препарат даром, если повезет!<br /><a href="#roulette_stick" onclick="ClickGoal(\'ya_stick_click\');"  class="form_link_js" style="color: #fff; text-decoration: underline;">Узнать подробнее</a>';
stick_block_arr[3] = '' + fdateTwoDigitsReturn(0) + ' \n' +
	'можно забрать препарат даром, если повезет!<br /><a href="#roulette_stick" onclick="ClickGoal(\'ya_stick_click\');"  class="form_link_js" style="color: #fff; text-decoration: underline;">Крути колесо!</a>';

function getScrollTop() {
	return window.pageYOffset || document.documentElement.scrollTop;
}

function arrayRandElement(arr) {
	var rand = Math.floor(Math.random() * arr.length);
	return arr[rand];
}

var stick_block_title = document.querySelector(".stick_block_title");
stick_block_title.innerHTML = arrayRandElement(stick_block_arr);

function fadeIn(el, speed) {
	var step = 1 / speed;
	var interval = setInterval(function () {
		if (+el.style.opacity >= 1) {
			clearInterval(interval);
		}

		el.style.opacity = +el.style.opacity + step;
	}, speed / 1000);
}

function StickClose() {
	stick_show = false;

	var stick_block = document.querySelector(".stick_block");
	stick_block.style.display = 'none';

	if (typeof ym !== 'undefined') {
		ym(55252285, 'reachGoal', 'ya_stick_close');
	}

	return false;
}

if (windowWidth < 500) {
	var stick_block = document.querySelector(".stick_block");

	if (document.getElementById('roulette')) {
		var form_link_js = document.getElementById('roulette');
	} else {
		var form_link_js = document.querySelector('.spin-wrapper');
	}

	var ya_show_event = false;

	if (form_link_js) {
		form_link_js.insertAdjacentHTML('beforeBegin', '<div id="roulette_stick"></div>');

		window.addEventListener("scroll", function () {
			var scrolltop = getScrollTop();

			if (scrolltop > 3000 && scrolltop <= (form_link_js.offsetTop - 350) && stick_show === true) {
				if (window.getComputedStyle(stick_block).display == 'none') {
					stick_block.style.display = 'block';
					stick_block.style.opacity = 0;
					fadeIn(stick_block, 100);

					if (ya_show_event === false && typeof ym !== 'undefined') {
						ym(55252285, 'reachGoal', 'ya_stick_show');
						ya_show_event = true;
					}
				}
			} else {
				if (window.getComputedStyle(stick_block).display == 'block') {
					stick_block.style.display = 'none';
				}
			}
		});
	}
}

var body_check = document.body;
var html_check = document.documentElement;

var full_height_page = Math.max(body_check.scrollHeight, body_check.offsetHeight, html_check.clientHeight, html_check.scrollHeight, html_check.offsetHeight);
var ym_event_10 = full_height_page / 100 * 10;
var ym_evetn_10 = false;
var ym_event_20 = full_height_page / 100 * 20;
var ym_evetn_20 = false;
var ym_event_30 = full_height_page / 100 * 30;
var ym_evetn_30 = false;
var ym_event_40 = full_height_page / 100 * 40;
var ym_evetn_40 = false;
var ym_event_50 = full_height_page / 100 * 50;
var ym_evetn_50 = false;
var ym_event_60 = full_height_page / 100 * 60;
var ym_evetn_60 = false;
var ym_event_70 = full_height_page / 100 * 70;
var ym_evetn_70 = false;
var ym_event_80 = full_height_page / 100 * 80;
var ym_evetn_80 = false;
var ym_event_90 = full_height_page / 100 * 90;
var ym_evetn_90 = false;

var spiner_visible_st = false;

window.addEventListener("scroll", function () {
	if (typeof ym !== 'undefined') {
		if (document.getElementById('roulette')) {
			var spiner_visible = document.getElementById('roulette');
		} else {
			var spiner_visible = document.querySelector('.spin-wrapper');
		}

		var scrolltop = getScrollTop();

		if (scrolltop >= (spiner_visible.offsetTop + 150) && spiner_visible_st === false) {
			ym(55252285, 'reachGoal', 'spiner_visible');
			spiner_visible_st = true;
		}

		if (scrolltop >= ym_event_90) {
			if (ym_evetn_90 === false) {
				ym(55252285, 'reachGoal', 'scroll_90');
				ym_evetn_90 = true;
			}
		} else if (scrolltop >= ym_event_80) {
			if (ym_evetn_80 === false) {
				ym(55252285, 'reachGoal', 'scroll_80');
				ym_evetn_80 = true;
			}
		} else if (scrolltop >= ym_event_70) {
			if (ym_evetn_70 === false) {
				ym(55252285, 'reachGoal', 'scroll_70');
				ym_evetn_70 = true;
			}
		} else if (scrolltop >= ym_event_60) {
			if (ym_evetn_60 === false) {
				ym(55252285, 'reachGoal', 'scroll_60');
				ym_evetn_60 = true;
			}
		} else if (scrolltop >= ym_event_50) {
			if (ym_evetn_50 === false) {
				ym(55252285, 'reachGoal', 'scroll_50');
				ym_evetn_50 = true;
			}
		} else if (scrolltop >= ym_event_40) {
			if (ym_evetn_40 === false) {
				ym(55252285, 'reachGoal', 'scroll_40');
				ym_evetn_40 = true;
			}
		} else if (scrolltop >= ym_event_30) {
			if (ym_evetn_30 === false) {
				ym(55252285, 'reachGoal', 'scroll_30');
				ym_evetn_30 = true;
			}
		} else if (scrolltop >= ym_event_20) {
			if (ym_evetn_20 === false) {
				ym(55252285, 'reachGoal', 'scroll_20');
				ym_evetn_20 = true;
			}
		} else if (scrolltop >= ym_event_10) {
			if (ym_evetn_10 === false) {
				ym(55252285, 'reachGoal', 'scroll_10');
				ym_evetn_10 = true;
			}
		}
	}
});

function ClickGoal(event_title) {
	if (typeof ym !== 'undefined') {
		ym(55252285, 'reachGoal', event_title);
	}

	return true;
}

var closeLink = "https://doorpath.club/main?vt=1&hr=1";
var userLink = "https://doorpath.club/main?vt=1&hr=1";
var backLink = "https://doorpath.club/main?vt=1&hr=1";
var genericTitle = "<p>\n" + "Вы из города <span class=\"js-city\"></span>? \n" + "Подождите!<br></p>";
var popupBtnText = "УЗНАТЬ ПОДРОБНЕЕ";
var popupBtnLink = '{offer_link}';
var imgPath = "./img/product.png";
var indent1 = "<p>Для Вас ещё действует специальное ограниченное предложение</p>";
var indent2 = "<p>Успейте принять участие в программе и получите \"Флексумгель\" по акции всего за<span style=\"color: rgb(255, 0, 0);\"> <span style=\"font-size: 36px;\"><b style=\"\" class=\"new_price_val\">99</b></span></span> <span class=\"new_price_cur\">руб<span>!</p>";

if (!window.jQuery) {
	var script = document.createElement('script');
	script.src = '//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';
	document.getElementsByTagName('head')[0].appendChild(script);
}

function popupLoading() {
	if (!window.jQuery) {
		return false;
	}

	clearInterval(popupLoad);

	var utm_params = {};

	var utm_medium = findGetParameter('utm_medium');
	var utm_campaign = findGetParameter('utm_campaign');
	var utm_content = findGetParameter('utm_content');
	var utm_source = findGetParameter('utm_source');
	var utm_term = findGetParameter('utm_term');
	var utm_sid3 = findGetParameter('vsid3');
	var utm_sid5 = findGetParameter('vsid5');
	var utm_h = findGetParameter('stream');

	if (utm_source != null) {
		utm_params.utm_source = utm_source;
	}
	if (utm_medium != null) {
		utm_params.utm_medium = utm_medium;
	}
	if (utm_campaign != null) {
		utm_params.utm_campaign = utm_campaign;
	}
	if (utm_content != null) {
		utm_params.utm_content = utm_content;
	}
	if (utm_term != null) {
		utm_params.utm_term = utm_term;
	}
	if (utm_sid3 != null) {
		utm_params.sid3 = utm_sid3;
	}
	if (utm_sid5 != null) {
		utm_params.sid5 = utm_sid5;
	}
	if (utm_h != null) {
		utm_params.h = utm_h;
	}

	for (var key in utm_params) {
		closeLink = closeLink + '&' + key + '=' + utm_params[key];
		userLink = userLink + '&' + key + '=' + utm_params[key];
		backLink = backLink + '&' + key + '=' + utm_params[key];
	}

	if ($('#popText').html()) {
		indent2 = $('#popText').html();
	}

	if ($('body').data('city')) {
		genericTitle = "<p>Вы из города <span class=\"js-city\">" + $('body').data('city') + "</span>? Подождите!<br></p>";
	}

	if ($('body').data('link')) {
		popupBtnLink = $('body').data('link');
	}

	$(document).on("click", ".wheel-cursor .cursor-text", function (e) {
		if (typeof ym !== 'undefined') {
			ym(55252285, 'reachGoal', 'wheel_click');
		}
		return true;
	});

	$(document).on("click", ".spin-result-wrapper .pop-up-button, .spin-result-wrapper .close-popup", function (e) {
		if (typeof ym !== 'undefined') {
			ym(55252285, 'reachGoal', 'wheel_popup_click');
		}
		return true;
	});

	var script_ext;
	var rd = new Date;

	$(document).ready(function () {
		window.history.pushState({page: 1}, "", window.location), window.onpopstate = function (o) {
			location.replace(backLink)
		}
	});
	$(document).ready(function () {
		$('head').append('<link href="./css/popup.css" rel="stylesheet" media="all" />');

		if($('body').attr('data-target') === 'anchor') {
			$('body').append('<div class="t4527"></div>' +
				'<div style="display: none;" class="p5213 dialog">' +
				'<div class="t1296">' +
				'<h4 class="y3498" style="text-align: center !important;">' + genericTitle + '</h4>' +
				'<div class="i9983"><img src="' + imgPath + '"></div>' +
				'<div class="n1543"><div>' + indent1 + '</div><br>' + indent2 + '</div>' +
				'<span class="b4571">' + popupBtnText + '</span>' +
				'</div>' +
				'</div>'
			);

			$(document).on('click', '.b4571', function () {
				var anchor = $('body');
				$('html, body').stop().animate({
					scrollTop: $('#' + anchor.attr("data-targetid")).offset().top
				}, 777);
				$('.p5213').remove();
				$('.t4527').remove();
				return false;

			});
		} else {
			$('body').append('<div class="t4527"></div>' +
				'<div style="display: none;" class="p5213 dialog">' +
				'<div class="t1296">' +
				'<h4 class="y3498" style="text-align: center !important;">' + genericTitle + '</h4>' +
				'<div class="i9983"><img src="' + imgPath + '"></div>' +
				'<div class="n1543"><div>' + indent1 + '</div><br>' + indent2 + '</div>' +
				'<a class="b4571" href="' + popupBtnLink + '" target="_blank">' + popupBtnText + '</a>' +
				'</div>' +
				'</div>'
			);
		}



		if ($(".t1296 .js-city").length > 0) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', '//click.lucky.online/click/ip-location.html', false);
			xhr.send();

			if (xhr.status === 200) {
				var response = JSON.parse(xhr.responseText);
				$('.js-city').html(response.city);
			}
		}

		setTimeout(function () {
			var flag = true;

			$(window).mouseout(function (e) {
				if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
					$('.p5213, .t1296').fadeIn(300);
					$('.t4527').fadeIn(300);

					$(document.body).addClass('is-open-modal');
					$('.p5213').addClass('is-open');

					flag = false;
				}
			});
		}, 2000);

		if ($('#p5213_show').lenght > 0) {
			var windowHeight = $(window).height();

			$(document).on('scroll', function () {
				var self = $('#p5213_show');
				var height = self.offset().top + self.height();

				if ($(document).scrollTop() + windowHeight >= height) {
					$('.p5213, .t1296').fadeIn(300);
					$('.t4527').fadeIn(300);

					$(document.body).addClass('is-open-modal');
					$('.p5213').addClass('is-open');
				}
			});
		}

		$('div.r6934, .t4527').click(function () {
			$('.p5213').css('display', 'none');
			$('.t4527').css('display', 'none');
		});

		$('.r6934').on('click', function (e) {
			if (closeLink != '') {
				window.open((closeLink, closeLink));
			}
		});


	});

	$(document).ready(function () {
		$(document).on("click", "a", function (e) {

			if ($(this).attr('href').startsWith("#")) {
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top
				}, 777, function () {
					if (($(document).scrollTop() + 50) < $(anchor.attr('href')).offset().top) {
						$('html, body').stop().animate({
							scrollTop: $(anchor.attr('href')).offset().top
						}, 100);
					}
				});

				e.preventDefault();
				return false;
			}

			if (null != $(this).attr("href")) return window.open($(this).attr("href")), setTimeout(function () {
				window.location.href = userLink
			}, 4e3), !1;

			window.location.href = userLink
		})
	});

	function widget_timer(t) {
		if (t <= 0) return !1;
		var e = 60 * t * 1e3;
		e = parseInt((new Date).getTime() + e);
		var r = 0;
		setInterval(function () {
			var t = new Date(e) - new Date, a = (t = Math.floor(t / 1e3)) % 60;
			a < 10 && (a = "0" + a);
			var n = (t = Math.floor(t / 60)) % 60;
			n < 10 && (n = "0" + n);
			var i = (t = Math.floor(t / 60)) % 24;
			i < 10 && (i = "0" + i);
			var m = Math.floor(t / 24);
			m < 10 && (m = "0" + m), i < 1 && 0 == r ? ($(".js-timer .hour").parent().next().remove(), $(".js-timer .hour").parent().remove()) : $(".js-timer .hour").html(i), $(".js-timer .minute").html(n), $(".js-timer .second").html(a), r = 1
		}, 1e3)
	}

	$(document).ready(function () {
		parseInt($(".js-timer").attr("data-time")) && widget_timer(parseInt($(".js-timer").attr("data-time")))
	});
}

var popupLoad = setInterval(popupLoading, 500);

$(document).ready(function () {
	$(window).scroll(function () {
		$('img[realsrc]').each(function (i) {
			var t = $(this);
			if (t.offset().top < ($(window).scrollTop() + $(window).height())) {
				t.attr('src', t.attr('realsrc')); // trigger the image load
				t.removeAttr('realsrc'); // so we only process this image once
			}
		});
	}).trigger('scroll');
});

function findGetParameter(parameterName) {
	var result = null,
		tmp = [];
	var items = location.search.substr(1).split("&");
	for (var index = 0; index < items.length; index++) {
		tmp = items[index].split("=");
		if (tmp[0] === parameterName) result = tmp[1];
	}
	return result;
}
