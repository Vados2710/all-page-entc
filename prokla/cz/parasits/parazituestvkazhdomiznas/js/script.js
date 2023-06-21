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
		counterLength = 370, // Максимальна кількість вімотаних днів. Змінюємо за необхідності.
		months,
		countryName = countryName || 'cz', // Мова для місяців. 
		isAbbreviated = isAbbreviated || false, // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн", тоді ставим TRUE.
		localDate = new Date();

	switch (countryName) {
		case 'lv': // Latvia латышский
			months = ['Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris'];
			break;
		case 'lt': // Litva литовский
			months = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužės', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'];
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
			months = ['Stycznia', 'Lutego', 'Marca', 'Kwietnia', 'Maja', 'Czerwca', 'Lipca', 'Sierpnia', 'Września', 'Października', 'Listopada', 'Grudnia'];
			break;
		case 'ro': // Romania
			months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
			break;
		case 'id': // Indonesia
			months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember'];
			break;
		case 'hu': // Hungary (Румунія)
			months = ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'];
			break;
		case 'gr': // Greece
		case 'cy': // Cyprus (Кіпр)
			months = ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'];
			break;
		case 'ar': // Арабский
			months = ['يناير', 'فبراير', 'مسيرة', 'أبريل', 'قد', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
			break;
		case 'th': // Тайский
			months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
			break;
		case 'ru': // Русский
			months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
			break;
		case 'ua': // Українська
			months = ['Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня'];
			break;
		case 'en': // Английский
			months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			break;
		case 'ge': // Грузинский
			months = ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'];
			break;
		case 'kz': // Казахский
			months = ['Қаңтар', 'Ақпан', 'Марш', 'Сәуір', 'Мүмкін', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'];
			break;
		case 'sk': // Словацкий
			months = ['január', 'február', 'marec', 'apríl', 'máj', 'júna', 'júl', 'august', 'septembra', 'október', 'november', 'december'];
			break;
		case 'cz': // Czech
			months = ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'];
			break;
		case 'hr': // Хорватский
			months = ['siječanj', 'veljača', 'ožujak', 'travanj', 'svibanj', 'lipanj', 'srpanj', 'kolovoz', 'rujan', 'listopad', 'studeni', 'prosinac'];
			break;
		case 'sl': // Словенский
			months = ['Januarja', 'Februarja', 'Marca', 'Aprila', 'Maja', 'Junija', 'Julija', 'Avgusta', 'Septembra', 'Oktobra', 'Novembra', 'Decembra'];
			break;
		case 'nl': // Нидерландский
			months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
			break;
		case 'vi': // Вьетнамский
			months = ['tháng một', 'tháng hai', 'diễu hành', 'tháng tư', 'có thể', 'tháng sáu', 'tháng bảy', 'tháng tám', 'tháng chín', 'tháng mười', 'tháng mười một', 'Tháng 12'];
			break;
		case 'my': // Малайский
			months = ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'];
			break;
		case 'mm': // Бирманский
			months = ['ဇန်နဝါရီ', 'ဖေဖော်ဝါရီလ', 'ချီတက်', '.ပြီလ', 'မေ', 'ဇွန်', 'ဇူလိုင်', 'သြဂုတ်', 'စက်တင်ဘာ', 'အောက်တိုဘာ', 'နိုဝင်ဘာ', 'ဒီဇင်ဘာ'];
			break;
		case 'in': // Хинди (Индия)
			months = ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'];
			break;
		case 'tw': // Китайский (Тайвань)
			months = ['一月', '二月', '行軍', '四月', '可能', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
			break;
		case 'bd': // Бенгальский (Бангладеш)
			months = ['জানুয়ারী', 'ফেব্রুয়ারি', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'অগাস্ট', 'অগাস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
			break;
		case "th": // Тайский
		months = [
			"มกราคม",
			"กุมภาพันธ์",
			"มีนาคม",
			"เมษายน",
			"พฤษภาคม",
			"มิถุนายน",
			"กรกฎาคม",
			"สิงหาคม",
			"กันยายน",
			"ตุลาคม",
			"พฤศจิกายน",
			"ธันวาคม",
		];
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

			case "yyyy":
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

var mod_pagespeed_zQbbfuANoN =
  '!function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;function g(){var o=this,m=+new Date-d,n=arguments;function l(){d=+new Date,j.apply(o,n)}function k(){h=c}i&&!h&&l(),h&&clearTimeout(h),i===c&&m>e?l():!0!==f&&(h=setTimeout(i?k:l,i===c?e-m:e))}return"boolean"!=typeof f&&(i=j,j=f,f=c),$.guid&&(g.guid=j.guid=j.guid||$.guid++),g},$.debounce=function(d,e,f){return f===c?a(d,e,!1):a(d,f,!1!==e)}}(this),function($){"use strict";function transitionEnd(){var el=document.createElement("quadmenu"),transEndEventNames={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var name in transEndEventNames)if(void 0!==el.style[name])return{end:transEndEventNames[name]};return!1}$.fn.emulateTransitionEnd=function(duration){var called=!1,$el=this,callback;return $(this).one("quadmenuTransitionEnd",(function(){called=!0})),setTimeout((function(){called||$($el).trigger($.support.transition.end)}),duration),this},$((function(){$.support.transition=transitionEnd(),$.support.transition&&($.event.special.quadmenuTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(e){if($(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}})}));var QuadMenuCollapse=function(element,options){this.$element=$(element),this.options=$.extend({},QuadMenuCollapse.DEFAULTS,options),this.$trigger=$(\'[data-quadmenu="collapse"][href="#\'+element.id+\'"],[data-quadmenu="collapse"][data-target="#\'+element.id+\'"]\'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndQuadMenuCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function getTargetFromTrigger($trigger){var href,target=$trigger.attr("data-target")||(href=$trigger.attr("href"))&&href.replace(/.*(?=#[^\\s]+$)/,"");return $(target)}function Plugin(option){return this.each((function(){var $this=$(this),data=$this.data("quadmenu.collapse"),options=$.extend({},QuadMenuCollapse.DEFAULTS,$this.data(),"object"==typeof option&&option);!data&&options.toggle&&/show|hide/.test(option)&&(options.toggle=!1),data||$this.data("quadmenu.collapse",data=new QuadMenuCollapse(this,options)),"string"==typeof option&&data[option]()}))}QuadMenuCollapse.TRANSITION_DURATION=350,QuadMenuCollapse.DEFAULTS={toggle:!0},QuadMenuCollapse.prototype.dimension=function(){var hasWidth;return this.$element.hasClass("width")?"width":"height"},QuadMenuCollapse.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var activesData,actives=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(actives&&actives.length&&(activesData=actives.data("quadmenu.collapse"))&&activesData.transitioning)){var startEvent=$.Event("show.quadmenu.collapse");if(this.$element.trigger(startEvent),!startEvent.isDefaultPrevented()){actives&&actives.length&&(Plugin.call(actives,"hide"),activesData||actives.data("quadmenu.collapse",null));var dimension=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[dimension](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var complete=function(){this.$element.removeClass("collapsing").addClass("collapse in")[dimension](""),this.transitioning=0,this.$element.trigger("shown.quadmenu.collapse")};if(!$.support.transition)return complete.call(this);var scrollSize=$.camelCase(["scroll",dimension].join("-"));this.$element.one("quadmenuTransitionEnd",$.proxy(complete,this)).emulateTransitionEnd(QuadMenuCollapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])}}}},QuadMenuCollapse.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var startEvent=$.Event("hide.quadmenu.collapse");if(this.$element.trigger(startEvent),!startEvent.isDefaultPrevented()){var dimension=this.dimension();this.$element[dimension](this.$element[dimension]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var complete=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.quadmenu.collapse")};if(!$.support.transition)return complete.call(this);this.$element[dimension](0).one("quadmenuTransitionEnd",$.proxy(complete,this)).emulateTransitionEnd(QuadMenuCollapse.TRANSITION_DURATION)}}},QuadMenuCollapse.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},QuadMenuCollapse.prototype.getParent=function(){return $(this.options.parent).find(\'[data-quadmenu="collapse"][data-parent="\'+this.options.parent+\'"]\').each($.proxy((function(i,element){var $element=$(element);this.addAriaAndQuadMenuCollapsedClass(getTargetFromTrigger($element),$element)}),this)).end()},QuadMenuCollapse.prototype.addAriaAndQuadMenuCollapsedClass=function($element,$trigger){var isOpen=$element.hasClass("in");$element.attr("aria-expanded",isOpen),$trigger.toggleClass("collapsed",!isOpen).attr("aria-expanded",isOpen)};var old=$.fn.collapse;$.fn.collapse=Plugin,$.fn.collapse.Constructor=QuadMenuCollapse,$.fn.collapse.noConflict=function(){return $.fn.collapse=old,this},$(document).on("click.quadmenu.collapse.data-api",\'[data-quadmenu="collapse"]\',(function(e){var $this=$(this);$this.attr("data-target")||e.preventDefault();var $target=getTargetFromTrigger($this),data,option=$target.data("quadmenu.collapse")?"toggle":$this.data();Plugin.call($target,option)}))}(jQuery),function($,window,document,undefined){"use strict";var defaults={responsive:!0,containerGutter:parseInt(quadmenu.gutter),touchEvents:!0,mouseEvents:!0,moveThreshold:50,intent_timeout:300,intent_interval:30};function Plugin(element,options){var plugin=this;this.element=element,this.$quadmenu=$(this.element),this.$ul=this.$quadmenu.find("ul.quadmenu-navbar-nav"),this.settings=$.extend({},defaults,options),this.touchenabled="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,this.mobiledevice=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),this.perfectScrollbar=void 0!==$.fn.perfectScrollbar&&!this.mobiledevice,this.touchenabled?this.$quadmenu.addClass("quadmenu-touch"):this.$quadmenu.addClass("quadmenu-notouch"),window.navigator.pointerEnabled?(this.touchStart="pointerdown",this.touchEnd="pointerup",this.touchMove="pointermove"):window.navigator.msPointerEnabled?(this.touchStart="MSPointerDown",this.touchEnd="MSPointerUp",this.touchMove="MSPointerMove"):(this.touchStart="touchstart",this.touchEnd="touchend",this.touchMove="touchmove"),this.init()}Plugin.prototype={init:function(){this.quadmenuResolveConflics(),this.quadmenuInitClasses(),this.quadmenuInitWidth(),this.quadmenuInitContainerWidth(),this.quadmenuInitLazyLoad(),this.quadmenuInitNavbarSticky(),this.quadmenuInitNavbarOffcanvas(),this.quadmenuInitNavbarSlideBar(),this.quadmenuInitItemTabs(),this.quadmenuInitItemCarousel(),this.quadmenuInitItemLogIn(),this.quadmenuInitItemSocial(),this.quadmenuInitItemCart(),this.quadmenuInitItemWidgets(),this.quadmenuInitDropdownFloat(),this.quadmenuInitDropdownMaxHeight(),this.quadmenuInitDropdownTouchEvents(),this.quadmenuInitDropdownMouseEvents(),this.quadmenuInitDropdownRetractors(),this.quadmenuInitDropdownCloseAll(),this.quadmenuInitScrollBar(),this.quadmenuInit()},quadmenuInit:function(){this.$quadmenu.trigger("init.quadmenu")},quadmenuResolveConflics:function(){this.$quadmenu.data("unwrap")&&this.$quadmenu.unwrap("nav").find(".quadmenu-item, .quadmenu-dropdown-toggle, .quadmenu-dropdown-menu, .quadmenu-dropdown-submenu").add(this.$quadmenu).removeAttr("style").unbind().off()},quadmenuInitClasses:function(plugin){(plugin=plugin||this).handleClasses(),$(window).on("resize",$.debounce(300,(function(){plugin.handleClasses()})))},handleClasses:function(){var template=this.$quadmenu.data("template"),mobile=!!(this.settings.responsive&&window.innerWidth<=this.$quadmenu.data("breakpoint"));mobile||"collapse"!=template||this.$quadmenu.addClass("quadmenu-is-horizontal"),mobile||"embed"!=template||this.$quadmenu.addClass("quadmenu-is-horizontal"),mobile||"offcanvas"!=template||this.$quadmenu.addClass("quadmenu-is-horizontal"),mobile&&this.$quadmenu.removeClass("quadmenu-is-horizontal"),this.$quadmenu.removeClass("no-js").addClass("js")},quadmenuInitDropdownTouchEvents:function(plugin){plugin=plugin||this,this.settings.touchEvents&&(this.$ul.on(this.touchStart+".quadmenu.toggle",".quadmenu-dropdown > .quadmenu-dropdown-toggle",(function(e){plugin.handleTouchEvents(e,this,plugin)})),this.$ul.on("click",".quadmenu-dropdown > .quadmenu-dropdown-toggle",(function(e){plugin.handleClicks(e,this)})))},quadmenuInitDropdownMouseEvents:function(plugin){(plugin=plugin||this).handleDropdownMouseEvents(),$(window).on("resize",$.debounce(600,(function(){plugin.handleDropdownMouseEvents()})))},handleDropdownMouseEvents:function(plugin){plugin=plugin||this,this.$ul.find(".quadmenu-item").off("mouseleave.hoverIntent mouseenter.hoverIntent mousemove.hoverIntent"),this.$ul.find(".quadmenu-item").removeProp("hoverIntent_t"),this.$ul.find(".quadmenu-item").removeProp("hoverIntent_s"),this.settings.mouseEvents&&(this.$ul.on("click",".quadmenu-item > .quadmenu-dropdown-toggle",(function(e){plugin.handleLink(e,this)})),this.$ul.on("click.quadmenu.toggle",".quadmenu-item > .quadmenu-dropdown-toggle",(function(e){plugin.handleMouseClick(e,this,plugin)})),this.$quadmenu.hasClass("quadmenu-is-horizontal")&&void 0!==$.fn.hoverIntent&&plugin.handleMouseHover(this.$ul.find(".quadmenu-item > .quadmenu-dropdown-toggle.hoverintent"),plugin))},handleMouseHover:function(target,plugin){var $target=$(target),$li=$target.parent(".quadmenu-item");$target.off("click.quadmenu.toggle"),$target.off(this.touchStart+".quadmenu.toggle"),$li.length&&$li.hoverIntent({over:function(){var $li=$(this),$target;$li.find("> .quadmenu-dropdown-menu").data("quadmenu-killHover")||plugin.triggerSubmenu($li,plugin)},out:function(){var $li=$(this),$target;$li.find("> .quadmenu-dropdown-menu").data("quadmenu-killHover")||$li.hasClass("quadmenu-item-type-tab")||plugin.closeSubmenu($li)},timeout:plugin.settings.intent_timeout,interval:plugin.settings.intent_interval})},quadmenuInitDropdownRetractors:function(plugin){plugin=plugin||this,this.$ul.on("click.retractor",".quadmenu-item.quadmenu-dropdown.open > .quadmenu-dropdown-toggle > .quadmenu-item-content > .quadmenu-caret",(function(e){plugin.handleDropdownCloseEnd(e,this,plugin)})),this.settings.touchEvents&&this.$ul.on(this.touchStart+".retractor",".quadmenu-item.quadmenu-dropdown.open > .quadmenu-dropdown-toggle > .quadmenu-item-content > .quadmenu-caret",(function(e){plugin.handleDropdownCloseStart(e,this,plugin)}))},handleTouchEvents:function(e,target,plugin){var $target=$(target);if($target.on(plugin.touchEnd,(function(e){plugin.handleTouchTap(e,this,plugin)})),$target.on(plugin.touchMove,(function(e){plugin.preventTapOnScroll(e,this,plugin)})),void 0!==e.originalEvent)if(e.originalEvent.touches)$target.data("quadmenu-startX",e.originalEvent.touches[0].clientX),$target.data("quadmenu-startY",e.originalEvent.touches[0].clientY);else if(e.originalEvent.clientY){var pos=$target.offset();$target.data("quadmenu-startX",e.originalEvent.clientX),$target.data("quadmenu-startY",e.originalEvent.clientY)}},preventTapOnScroll:function(e,target,plugin){var $target=$(target);if(void 0!==e.originalEvent)if(e.originalEvent.touches)(Math.abs(e.originalEvent.touches[0].clientX-$target.data("quadmenu-startX"))>plugin.settings.moveThreshold||Math.abs(e.originalEvent.touches[0].clientY-$target.data("quadmenu-startY"))>plugin.settings.moveThreshold)&&plugin.resetHandlers($target);else if(e.originalEvent.clientY){var pos=$target.data(pos);(Math.abs(e.originalEvent.clientX-$target.data("quadmenu-startX"))>plugin.settings.moveThreshold||Math.abs(e.originalEvent.clientY-$target.data("quadmenu-startY"))>plugin.settings.moveThreshold)&&plugin.resetHandlers($target)}},handleTouchTap:function(e,target,plugin){e.preventDefault();var $target=$(target),$li=$target.parent();$target.data("quadmenu-killClick",!0),$target.data("quadmenu-killHover",!0),setTimeout((function(){$target.data("quadmenu-killClick",!1).data("quadmenu-killHover",!1)}),1e3),this.$quadmenu.hasClass("quadmenu-is-horizontal")&&plugin.closeSubmenu($li.siblings(".open")),$li.hasClass("quadmenu-dropdown")?$li.hasClass("open")?($li.hasClass("quadmenu-item-type-tab")&&this.$quadmenu.hasClass("quadmenu-is-horizontal")||plugin.closeSubmenu($li),plugin.handleLink(e,target,!0)):plugin.openSubmenu($li):plugin.handleLink(e,target,!0),plugin.resetHandlers($target)},handleLink:function(e,link,follow){follow=follow||!1;var $link=$(link),href=$link.attr("href");$link.is("a")&&(href?follow&&e.isDefaultPrevented()&&("_blank"===$link.attr("target")?window.open(href,"_blank"):window.location=href):e.preventDefault())},handleMouseClick:function(e,target,plugin){var $target=$(target),$li=$target.parent(".quadmenu-item");!$target.data("quadmenu-killClick")&&$li.length&&($li.hasClass("open")?$target.is("a")&&plugin.handleLink(e,target):$li.hasClass("quadmenu-dropdown")&&(e.preventDefault(),this.$quadmenu.hasClass("quadmenu-is-horizontal")&&plugin.closeSubmenu($li.siblings(".open")),plugin.openSubmenu($li)))},handleDropdownCloseStart:function(e,caret,plugin){e.preventDefault(),$(caret).on(plugin.touchEnd,(function(e){plugin.handleDropdownCloseEnd(e,this,plugin)}))},handleDropdownCloseEnd:function(e,caret,plugin){e.preventDefault(),e.stopPropagation();var $li=$(caret).closest(".quadmenu-dropdown.open");return plugin.closeSubmenu($li),$(caret).off(plugin.touchEnd),!1},resetHandlers:function($target){$target.off(this.touchEnd),$target.off(this.touchMove);var $li=$target.parent();$li.off("mousemove.hoverIntent"),$li.off("mouseenter.hoverIntent"),$li.off("mouseleave.hoverIntent"),$li.removeProp("hoverIntent_t"),$li.removeProp("hoverIntent_s")},triggerSubmenu:function($li,plugin){plugin.closeSubmenu($li.siblings(".open")),plugin.openSubmenu($li)},openSubmenu:function($li,timeout){$li.hasClass("open")||(timeout=timeout||100,$li.trigger("show.quadmenu.dropdown"),$li.addClass("opening"),setTimeout((function(){$li.addClass("open"),$li.removeClass("opening"),$li.trigger("shown.quadmenu.dropdown")}),timeout))},closeSubmenu:function($li,timeout){$li.hasClass("open")&&(timeout=timeout||200,$li.trigger("hide.quadmenu.dropdown"),$li.addClass("closing"),setTimeout((function(){$li.find(".quadmenu-item").removeClass("open"),$li.removeClass("open").removeClass("closing"),$li.trigger("hidden.quadmenu.dropdown")}),timeout))},handleClicks:function(e,target){var $target;$(target).data("quadmenu-killClick")&&e.preventDefault()},quadmenuInitDropdownCloseAll:function(plugin){plugin=plugin||this,this.$quadmenu.hasClass("quadmenu-is-horizontal")&&$(document).on(this.touchEnd+".hidden.quadmenu.dropdown.all click.hidden.quadmenu.dropdown.all",(function(e){$(e.target).closest("#quadmenu").length||plugin.closeAllSubmenus()}))},closeAllSubmenus:function(){var $li=this.$ul.find(".quadmenu-item.open");$li.length&&this.closeSubmenu($li,100)},quadmenuInitDropdownMaxHeight:function(plugin){plugin=plugin||this,this.$ul.off("shown.quadmenu.dropdown.height"),this.$quadmenu.hasClass("quadmenu-is-horizontal")&&(this.$ul.on("shown.quadmenu.dropdown.height",".dropdown-maxheight",(function(e){plugin.handleDropdownMaxHeight($(this))})),this.$ul.on("shown.quadmenu.dropdown.tabheight",".dropdown-maxheight.quadmenu-item-type-tab",(function(e){plugin.handleTabsHeight($(this))})),$(window).on("resize",$.debounce(300,(function(){plugin.$ul.find(".dropdown-maxheight > .quadmenu-dropdown-menu > ul").css({height:"","overflow-y":""}).removeData("quadmenu-dropdownHeight").removeData("quadmenu-maxHeight")}))))},handleDropdownMaxHeight:function(li,minHeight){if(void 0!==$.fn.scrollTop){minHeight=minHeight||200;var $li,$dropdown=$(li).find("> .quadmenu-dropdown-menu > ul");if($dropdown.length){var dropdownHeight=$dropdown.removeAttr("style").outerHeight(),offsetTop=this.getElementOffset($dropdown),scrollTop=$(window).scrollTop(),currentTop=Math.max(0,offsetTop-scrollTop),currentBottom=$(window).height()-currentTop-15,maxHeight=Math.min(dropdownHeight,currentBottom),Height=parseInt(Math.max(maxHeight,minHeight));return $dropdown.css({height:Height+"px","overflow-y":"auto"}).data("quadmenu-maxHeight",Height),Height}}},quadmenuInitNavbarSticky:function(){var plugin=this;void 0!==$.fn.scrollTop&&this.$quadmenu.hasClass("quadmenu-is-horizontal")&&(plugin.$sticky=this.$quadmenu.filter(\'[data-sticky="1"]\').first(),plugin.$sticky.length&&(plugin.is_sticky=!1,$(window).on("load",(function(){var topLast=0;plugin.sticky_height=plugin.$sticky.height(),plugin.adminbar_height=$("#wpadminbar").height()||0,plugin.sticky_offset=plugin.$sticky.offset().top,plugin.topYSticky=Math.max(plugin.$sticky.offset().top-plugin.adminbar_height,plugin.$sticky.data("sticky-offset"),plugin.sticky_height+plugin.adminbar_height),plugin.topYSticky>plugin.sticky_offset&&plugin.$sticky.addClass("quadmenu-sticky-animation"),$(window).on("scroll",(function(){var topY=$(this).scrollTop();plugin.is_sticky&&topY<plugin.topYSticky&&plugin.handleUnSticky(),!plugin.is_sticky&&topY>plugin.topYSticky&&plugin.handleSticky(),topLast=topY}))}))))},handleSticky:function(){var plugin=this;this.is_sticky=!0;var placeholder=$("<div />").addClass("quadmenu-sticky-wrapper").css({height:this.sticky_height+"px",position:"static"});this.$sticky.find(".quadmenu-navbar-collapse.collapse.in").collapse("hide"),this.$sticky.toggleClass("quadmenu-sticky-top").wrap(placeholder),this.$sticky.trigger("sticking.quadmenu.navbar"),this.$sticky.trigger("sticky.quadmenu.navbar")},handleUnSticking:function(){var plugin=this;this.is_sticky=!1,this.$sticky.addClass("quadmenu-unsticking-top")},handleUnSticky:function(){var plugin=this;this.is_sticky=!1,this.$sticky.trigger("unsticking.quadmenu.navbar"),setTimeout((function(){}),200),this.$sticky.removeClass("quadmenu-sticky-top"),this.$sticky.unwrap(),this.$sticky.trigger("unsticky.quadmenu.navbar")},quadmenuInitDropdownFloat:function(plugin){(plugin=plugin||this).handleDropdownFloat(),$(window).on("resize",$.debounce(600,(function(){plugin.handleDropdownFloat()})))},handleDropdownFloat:function(plugin){plugin=plugin||this,this.$ul.off("shown.quadmenu.dropdown.float"),this.$quadmenu.hasClass("quadmenu-is-horizontal")&&this.$ul.on("shown.quadmenu.dropdown.float",".quadmenu-item.quadmenu-dropdown:not(.quadmenu-item-type-tab):not(.quadmenu-item-type-tabs)",(function(e){var $dropdown=$(this).find("> .quadmenu-dropdown-menu:not(.quadmenu-dropdown-stretch-content):not(.quadmenu-dropdown-stretch-dropdown)");if($dropdown.length){var elH=$dropdown.outerWidth(),W=$(window).innerWidth(),p,l=$dropdown.offset().left,r=parseInt(W-(l+elH));$(this).hasClass("quadmenu-dropdown-left")&&l<0?$dropdown.css({"margin-right":l-plugin.settings.containerGutter+"px"}):r<0&&$dropdown.css({"margin-left":r-plugin.settings.containerGutter+"px"})}}))},quadmenuInitWidth:function(plugin){(plugin=plugin||this).$quadmenu.data("width")&&(plugin.handleFullWidth(plugin.$quadmenu),$(window).on("resize",$.debounce(600,(function(){plugin.handleFullWidth(plugin.$quadmenu)}))))},handleFullWidth:function(navbar){var $navbar=$(navbar);$navbar.css({position:"","box-sizing":"",left:"",right:"",width:""});var margin_left=parseInt($navbar.css("margin-left"),10),offset=0-$navbar.offset().left-margin_left,width=$(window).width();$navbar.css({position:"relative","box-sizing":"border-box",left:offset,right:offset,width:width})},quadmenuInitContainerWidth:function(plugin){(plugin=plugin||this).handleContainerWidth(plugin.$quadmenu),this.$quadmenu.on("sticking.quadmenu.navbar unsticking.quadmenu.navbar",(function(){plugin.handleContainerWidth($(this))})),$(window).on("resize",$.debounce(600,(function(){plugin.handleContainerWidth(plugin.$quadmenu)})))},handleContainerWidth:function(navbar){var $navbar=$(navbar),$container=$navbar.find(".quadmenu-container");$navbar.data("selector")&&$container.css({width:$(this.$quadmenu.data("selector")).innerWidth()+"px"})},quadmenuInitLazyLoad:function(plugin){plugin=plugin||this,this.$quadmenu.on("init.quadmenu shown.quadmenu.collapse shown.quadmenu.dropdown",(function(e){$(this).find("img[data-src]:visible").each((function(e){var $img=$(this),src=$img.data("src"),srcset=$img.data("srcset"),loaded;$img.data("lazyload")||($img.addClass("quadmenu-lazyload"),src&&$img.attr("src",src).removeAttr("data-src").data("lazyload",!0),srcset&&$img.attr("srcset",srcset).removeAttr("data-srcset").data("lazyload",!0))}))}))},quadmenuInitNavbarOffcanvas:function(plugin){plugin=plugin||this,this.$quadmenu.on("show.quadmenu.collapse shown.quadmenu.collapse hide.quadmenu.collapse hidden.quadmenu.collapse",".navbar-offcanvas",(function(e){var width=$(this).width(),translateX=plugin.$quadmenu.hasClass("quadmenu-offcanvas-left")?width:-1*width;$(this).trigger(e.type+".quadmenu.offcanvas",[translateX])})),this.$quadmenu.on("show.quadmenu.offcanvas",".navbar-offcanvas",(function(e,translateX){var $transform;$("> .quadmenu-navbar-toggle",plugin.$quadmenu).add($(".quadmenu-navbar-header",plugin.$quadmenu)).css({transform:"translateX("+translateX+"px)"}),$(this).css({transform:"translateX(0)"}),$("body").addClass("quadmenu-offcanvas-in"),plugin.$quadmenu.addClass("quadmenu-is-vertical")})),this.$quadmenu.on("hide.quadmenu.offcanvas",".navbar-offcanvas",(function(e){var $transform;$("> .quadmenu-navbar-toggle",plugin.$quadmenu).add($(".quadmenu-navbar-header",plugin.$quadmenu)).css({transform:""}),$(this).removeAttr("style"),$("body").removeClass("quadmenu-offcanvas-in")})),this.$quadmenu.on("hidden.quadmenu.offcanvas",".navbar-offcanvas",(function(e){plugin.$quadmenu.removeClass("quadmenu-is-vertical")})),this.$quadmenu.on("shown.quadmenu.offcanvas hidden.quadmenu.offcanvas",".navbar-offcanvas",(function(e,translateX){setTimeout((function(){var $transform;$(this).add($("> .quadmenu-navbar-toggle",plugin.$quadmenu)).add($(".quadmenu-navbar-header",plugin.$quadmenu)).toggleClass("canvas-sliding")}),1e3)})),$(document).on(this.touchStart+".hide.quadmenu.offcanvas click.hide.quadmenu.offcanvas",(function(e){var $target=$(e.target),responsive=!!(plugin.settings.responsive&&window.innerWidth<=plugin.$quadmenu.data("breakpoint"));if(!$target.closest("#quadmenu").length&&responsive&&($target.on(plugin.touchEnd,(function(e){$(".navbar-offcanvas").collapse("hide")})),$target.on(plugin.touchMove,(function(e){plugin.preventTapOnScroll(e,this,plugin)})),void 0!==e.originalEvent))if(e.originalEvent.touches)$target.data("quadmenu-startX",e.originalEvent.touches[0].clientX),$target.data("quadmenu-startY",e.originalEvent.touches[0].clientY);else if(e.originalEvent.clientY){var pos=$target.offset();$target.data("quadmenu-startX",e.originalEvent.clientX),$target.data("quadmenu-startY",e.originalEvent.clientY)}}))},quadmenuInitScrollBar:function(plugin){plugin=plugin||this,this.perfectScrollbar&&(plugin.handleDropdownScrollbar(),plugin.handleVerticalScrollbar(),$(window).on("resize",$.debounce(300,(function(){plugin.handleDropdownScrollbar(),plugin.handleVerticalScrollbar()}))))},handleDropdownScrollbar:function(plugin){plugin=plugin||this,this.$ul.off("shown.quadmenu.dropdown.pscrollbar"),this.$ul.find(".ps-container").perfectScrollbar("destroy").data("ps-id",!1),this.$quadmenu.hasClass("quadmenu-is-horizontal")&&this.$ul.on("shown.quadmenu.dropdown.pscrollbar",".dropdown-maxheight",(function(e){plugin.$dropdown=$(this).find("> .quadmenu-dropdown-menu > ul"),plugin.$dropdown.on("scroll",$.debounce(500,!0,(function(){$(this).data("quadmenu-killHover",!0)}))),plugin.$dropdown.on("scroll",$.debounce(500,(function(){$(this).removeData("quadmenu-killHover")}))),plugin.$dropdown.data("ps-id")?plugin.$dropdown.perfectScrollbar("update"):plugin.$dropdown.perfectScrollbar({useKeyboard:!0,suppressScrollX:!0,includePadding:!0,scrollYMarginOffset:1})}))},handleVerticalScrollbar:function(plugin){(plugin=plugin||this).$offcanvas=this.$quadmenu.find(".navbar-offcanvas"),plugin.$offcanvas.perfectScrollbar("destroy").data("ps-id",!1),this.$quadmenu.hasClass("quadmenu-is-horizontal")||(plugin.$offcanvas.on("shown.quadmenu.dropdown.pscrollbar hidden.quadmenu.dropdown.pscrollbar shown.quadmenu.offcanvas.pscrollbar hidden.quadmenu.offcanvas.pscrollbar",(function(e){var $psMenu=$(this);$(this).on("mouseup mouseenter",".ps-scrollbar-y-rail",(function(){$psMenu.find(".quadmenu-item > .quadmenu-dropdown-toggle").data("quadmenu-killHover",!0)})),$(this).on("mouseleave",".ps-scrollbar-y-rail",(function(){$psMenu.find(".quadmenu-item > .quadmenu-dropdown-toggle").removeData("quadmenu-killHover")})),$psMenu.perfectScrollbar("update")})),plugin.$offcanvas.data("ps-id")?plugin.$offcanvas.perfectScrollbar("update"):plugin.$offcanvas.perfectScrollbar({useKeyboard:!0,suppressScrollX:!0,includePadding:!0,scrollYMarginOffset:1}))},quadmenuInitNavbarSlideBar:function(plugin){plugin=plugin||this,this.$quadmenu.hasClass("quadmenu-is-horizontal")&&this.$quadmenu.hasClass("quadmenu-hover-slidebar")&&setTimeout((function(){plugin.$ul.append(\'<li class="quadmenu-slidebar invisible"><span class="bar"></span></li>\'),plugin.handleSlideBar(plugin.$ul)}),1e3)},handleSlideBar:function(ul,plugin){plugin=plugin||this;var $ul=$(ul),slide_nav=$ul.find("> li.quadmenu-slidebar"),$open=$ul.find("> li.open:visible"),$item=$ul.find("> li.current-menu-item:visible"),$ancestor=$ul.find("> li.current-menu-ancestor:visible"),$current=$ul.find("> li:visible:first-child");function slide_nav_css($current){if($current.length){var width=parseFloat($current.find("> a").outerWidth()),pos_left=parseFloat($current.position().left),pos_right=parseFloat($current.position().right);slide_nav.css({width:width+"px",left:pos_left+"px",right:pos_right+"px"}).removeClass("invisible")}}$ancestor.length&&($current=$ancestor),$item.length&&($current=$item),$open.length&&($current=$open),slide_nav_css($current),slide_nav.data("slidebar-style",slide_nav.attr("style")),this.$ul.on("sticky.quadmenu.navbar.slidebar unsticky.quadmenu.navbar.slidebar",(function(){slide_nav.addClass("invisible");var $ul=$(this).find(".quadmenu-navbar-nav"),$open=$ul.find("> "+li+".open"),$active=$open.length?$open:$ul.find("> li.quadmenu-item.quadmenu-item-level-0.active"),$current;slide_nav_css($active.length?$active:$ul.find(li).not(".quadmenu-float-opposite").first()),slide_nav.data("slidebar-style",slide_nav.attr("style"))})),$ul.find("> li.quadmenu-item.quadmenu-has-link").on("hover.slidebar",(function(e){slide_nav_css($(this))})),$ul.find("> li.quadmenu-item.quadmenu-has-link").on("mouseleave.slidebar",(function(e){slide_nav.attr("style",slide_nav.data("slidebar-style")).show()})),$ul.on("shown.quadmenu.dropdown.slidebar","> li.quadmenu-item.quadmenu-has-link",(function(e){$(this).find("> a").hasClass("click")&&(slide_nav_css($(this)),slide_nav.data("slidebar-style",slide_nav.attr("style")))})),$ul.on("hide.quadmenu.dropdown.slidebar","> li.quadmenu-item.quadmenu-has-link",(function(e){$(this).find("> a").hasClass("click")&&(slide_nav_css($current),slide_nav.data("slidebar-style",slide_nav.attr("style")))}))},quadmenuInitItemTabs:function(plugin){(plugin=plugin||this).handleTabs(),$(window).on("resize",$.debounce(600,(function(){plugin.handleTabs()})))},handleTabs:function(plugin){plugin=plugin||this,this.$ul.off("shown.quadmenu.dropdown.tabs",".quadmenu-item-type-tabs"),this.$ul.off("shown.quadmenu.dropdown.tabheight",".quadmenu-item-type-tab"),this.$ul.find(".quadmenu-item-type-tab > .quadmenu-dropdown-menu > ul").data("quadmenu-maxHeight",!1).data("quadmenu-killHover",!1),this.$ul.find(".quadmenu-item-type-tab > .quadmenu-dropdown-menu > ul").removeAttr("style"),this.$quadmenu.hasClass("quadmenu-is-horizontal")&&this.$ul.on("shown.quadmenu.dropdown.tabs",".quadmenu-item-type-tabs",(function(e){$(e.target).hasClass("quadmenu-item-type-tabs")&&plugin.openSubmenu($(this).find(".quadmenu-item-type-tab:first"))}))},handleTabsHeight:function(open){var $open=$(open),$tabs;$open.closest(".quadmenu-dropdown-menu > ul").css({"min-height":$open.find("> .quadmenu-dropdown-menu > ul").data("quadmenu-maxHeight")+"px"})},getElementOffset:function(element){var $element=$(element);if($element.length)return $element.is(":visible")||($element.data("element-style",$element.attr("style")),$element.css({visibility:"hidden",display:"block",transform:"none",animation:"none"}),$element.removeAttr("style").attr("style",$element.data("element-style"))),$element.offset().top},quadmenuInitItemCarousel:function(plugin){plugin=plugin||this,void 0!==$.fn.owlCarousel&&(this.$ul.on("mouseenter.hoverIntent",".owl-carousel",(function(){var $owl;$(this).trigger("stop.owl.autoplay")})),this.$ul.on("mouseleave.hoverIntent",".owl-carousel",(function(){var $owl=$(this);"on"===$(this).data("autoplay")&&$owl.trigger("play.owl.autoplay")})),this.$ul.on("hide.quadmenu.dropdown.carousel",".quadmenu-item",(function(){var $owl=$(this).find(".owl-carousel");$owl.length&&($owl.trigger("stop.owl.autoplay"),$owl.trigger("stop.owl.video"))})),this.$ul.on("shown.quadmenu.dropdown.carousel",".quadmenu-item",(function(e){var $owl=$(this).find(".owl-carousel");$owl.length&&plugin.handleCarousel($owl,plugin)})),plugin.handleCarousel(this.$ul.find(".quadmenu-item-level-0 > .owl-carousel"),plugin))},handleCarousel:function(owl,plugin){var $owl;plugin=plugin||this,$(owl).each((function(){var $owl=$(this),speed=parseInt($owl.data("speed")),autoplay="on"===$owl.data("autoplay"),pagination="on"===$owl.data("pagination"),dots="on"===$owl.data("dots"),items=$owl.data("items")||1,margin=parseInt(plugin.settings.containerGutter/2),dotsEach=1===items,autoplay_speed=parseInt($owl.data("autoplay_speed"))+speed;$owl.hasClass("owl-loaded")?$owl.trigger("refresh.owl.carousel"):$owl.owlCarousel({itemClass:"quadmenu-item-type-panel",responsive:{0:{items:1},600:{items:Math.min(2,items)},900:{items:items}},loop:!0,navText:!1,autoplayHoverPause:!0,dotsEach:dotsEach,items:items,margin:margin,dots:dots,nav:pagination,smartSpeed:speed,autoplay:autoplay,autoplayTimeout:autoplay_speed})}))},quadmenuInitItemLogIn:function(plugin){plugin=plugin||this,this.$ul.on("hide.quadmenu.dropdown.login",".quadmenu-item-type-login",(function(e){var $li=$(this);plugin.handleMouseHover($li.find("> .quadmenu-dropdown-toggle.hoverintent"),plugin)})),this.$ul.on("shown.quadmenu.dropdown.login",".quadmenu-item-type-login",(function(e){var $li=$(this);$li.find("input").on("click",(function(){$li.off("mousemove.hoverIntent"),$li.off("mouseenter.hoverIntent"),$li.off("mouseleave.hoverIntent"),$li.removeProp("hoverIntent_t"),$li.removeProp("hoverIntent_s")})),$li.find("[data-toggle=form]").on("click",(function(){e.preventDefault(),$li.find($(this).data("target")).fadeIn().removeClass("hidden"),$li.find($(this).data("current")).fadeOut().addClass("hidden"),$li.find("> .quadmenu-dropdown-menu > ul").removeData("quadmenu-dropdownHeight"),$li.find("> .quadmenu-dropdown-menu > ul").removeAttr("style"),$li.trigger("shown.quadmenu.dropdown.height"),$li.trigger("shown.quadmenu.dropdown.pscrollbar")})),plugin.handleForm(e,$li)}))},handleForm:function(e,li){var $li;$(li).find("form").on("submit",(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1;var $form=$(this),$dropdown=$form.closest(".quadmenu-dropdown-menu"),$message=$form.find(".quadmenu-result-message");$.ajax({type:"POST",url:quadmenu.ajaxurl,data:{action:$form.find("input[name=action]").val(),nonce:$form.find("input[name=quadmenu_nonce]").val(),user:$form.find("input[name=quadmenu_username]").val(),pass:$form.find("input[name=quadmenu_pass]").val(),mail:$form.find("input[name=quadmenu_email]").val(),name:$form.find("input[name=quadmenu_name]").val(),nick:$form.find("input[name=quadmenu_nick]").val()},beforeSend:function(){$dropdown.addClass("quadmenu-dropdown-mask")},complete:function(){setTimeout((function(){$dropdown.removeClass("quadmenu-dropdown-mask")}),600)},success:function(response){$message.empty().append(response.data),!0===response.success&&setTimeout((function(){window.location.reload()}),200)}})}))},quadmenuInitItemSocial:function(plugin){(plugin=plugin||this).handleSocial(),$(window).on("resize",$.debounce(600,(function(){plugin.handleSocial()})))},handleSocial:function(plugin){plugin=plugin||this,this.$ul.off("shown.quadmenu.dropdown.social hidden.quadmenu.dropdown.social"),this.$quadmenu.hasClass("quadmenu-is-horizontal")&&(this.$ul.on("shown.quadmenu.dropdown.social",".quadmenu-item-type-social",(function(){plugin.$ul.find("> li.quadmenu-item.quadmenu-item-level-0:not(.quadmenu-item-type-social)").addClass("invisible"),plugin.$ul.find("> li.quadmenu-slidebar").addClass("invisible")})),this.$ul.on("hidden.quadmenu.dropdown.social",".quadmenu-item-type-social",(function(){plugin.$ul.find("> li.quadmenu-item.quadmenu-item-level-0:not(.quadmenu-item-type-social)").removeClass("invisible"),plugin.$ul.find("> li.quadmenu-slidebar").removeClass("invisible")})))},quadmenuInitItemCart:function(plugin){var $cart=(plugin=plugin||this).$quadmenu.find("li.quadmenu-item-type-cart");$cart.each((function(){var $li=$(this),url=$li.find("> a").data("cart-url"),animation=$li.find("> a").data("cart-animation");window.location.href===url&&($cart.removeClass("quadmenu-dropdown"),$cart.find("> a").attr("href","javascript:void(0)")),$(document).bind("added_to_cart removed_from_cart edd_quantity_updated",(function(e,cart){$cart.find(".quadmenu-cart-qty",$li).addClass(animation),void 0!==cart&&0==$(cart["span.quadmenu-cart-qty"]).html()?$li.addClass("quadmenu-cart-empty"):$li.removeClass("quadmenu-cart-empty"),setTimeout((function(){$cart.find(".quadmenu-cart-qty",$li).removeClass(animation)}),500)})),$(document).bind("edd_quantity_updated",(function(){plugin.handleEddCart(plugin,$li,$cart,url)}))}))},handleEddCart:function(plugin,$li,$cart,url){plugin=plugin||this;var $edd_cart=$cart.find(".widget_edd_cart_widget");if($edd_cart.length){var total=$edd_cart.find(".edd_subtotal .subtotal").html(),qty=$edd_cart.find(".edd-cart-quantity").html();plugin.updateCart($li,total,qty,url)}},updateCart:function(li,total,qty,url){var $li=$(li),$total=$li.find(".quadmenu-cart-total"),$qty=$li.find(".quadmenu-cart-qty");$total.html(total),$qty.html(qty),qty>0?$li.removeClass("quadmenu-cart-empty"):$li.addClass("quadmenu-cart-empty"),url&&$li.find("> a").attr("href",url),setTimeout((function(){$qty.removeClass("animate")}),1500)},quadmenuInitItemWidgets:function(plugin){$(document).on("show.quadmenu.dropdown",(function(e){$(this).find(".widget_media_audio > video, .widget_media_audio > audio").each((function(){this.player.trigger("resize")}))})),$(document).on("hidden.quadmenu.dropdown",(function(e){$(this).find(".widget_media_video video, .widget_media_video audio").each((function(){this.player.pause()}))}))}},$.fn.quadmenu=function(options){var args=arguments,returns;return void 0===options||"object"==typeof options?this.each((function(){$.data(this,"plugin_quadmenu")||$.data(this,"plugin_quadmenu",new Plugin(this,options))})):"string"==typeof options&&"_"!==options[0]&&"init"!==options?(this.each((function(){var instance=$.data(this,"plugin_quadmenu");instance instanceof Plugin&&"function"==typeof instance[options]&&(returns=instance[options].apply(instance,Array.prototype.slice.call(args,1))),"destroy"===options&&$.data(this,"plugin_quadmenu",null)})),void 0!==returns?returns:this):void 0}}(jQuery,window,document),function($){function quadmenu_init(){$("nav#quadmenu").quadmenu()}quadmenu_init(),$(window).on("load",(function(){quadmenu_init()}))}(jQuery);';
var mod_pagespeed_8vZIRgyO54 =
  "$(function(){var answers=[],answer='',quest='';$('#show-test').click(function(e){e.preventDefault();$('.quiz-item').removeClass('active');$(this).parents('.quiz-item').next().addClass('active');});$('.quiz-item .btn-main-2').click(function(e){e.preventDefault();$('.quiz-item').removeClass('active');$(this).parents('.quiz-item').next().addClass('active');quest=$(this).parents('.quiz-item').find('p').text();if($(this).parents('.quiz-item').hasClass('-range'))answer=$(this).parents('.quiz-item').find('input[type=radio]:checked').val();else if($(this).parents('.quiz-item').hasClass('-checkboxes'))answer=$(this).parents('.quiz-item').find('input[type=checkbox]:checked').parent().text();else\nanswer=$(this).parents('.quiz-item').find('input[type=radio]:checked').parent().text();answers.push({q:quest,a:answer});});$('.last-click').click(function(e){e.preventDefault();$(\"#order_form\").find(\"input[name='question_answer']\").val(JSON.stringify(answers));$('.result-block').show();});$(document).on(\"submit\",\"#order_form\",function(){if(answer.length!=0){var datarow=$(this).serializeArray();var addressIsset=false;$(datarow).each(function(item,itemData){if(itemData.name==\"question_answer\"){itemData.value=JSON.parse(itemData.value);}if(itemData.name==\"address\"){addressIsset=true;}if(itemData.name==\"name\"||itemData.name==\"phone\"||itemData.name==\"address\"||itemData.name==\"client_data\"){delete datarow[item];}});datarow=datarow.filter(function(el){return el!=null;});if(addressIsset==false){$(this).append(\"<input type='hidden' name='address' />\");}$(this).find(\"input[name='address']\").val(JSON.stringify(datarow));}})});";
var mod_pagespeed_G70m0sGwPB =
  '$(document).ready(function(){var o=document.querySelectorAll(".door"),r=document.querySelectorAll(".door__sales"),c=(document.querySelector(".door__wrapper"),document.querySelector(".spin-result-wrapper")),i=(document.querySelector(".pop-up-button"),document.querySelector(".order_block"),document.getElementById("door__1")),u=document.getElementById("door__2"),l=document.getElementById("door__3"),s=document.getElementById("door__sales1"),a=document.getElementById("door__sales2"),d=document.getElementById("door__sales3"),p=$("#discount").text();function m(e){e.currentTarget.classList.add("open"),setTimeout(function(){c.style.display="block"},2500),r.forEach(function(e){i.classList.contains("open")?(s.innerHTML=p+"50%",a.innerHTML="25%",d.innerHTML="15%"):u.classList.contains("open")?(a.innerHTML=p+"50%",s.innerHTML="15%",d.innerHTML="25%"):l.classList.contains("open")&&(s.innerHTML="25%",d.innerHTML=p+"50%",a.innerHTML="15%")});for(var t=0;t<o.length;t++)!function(e){o[e].classList.contains("open")||setTimeout(function(){o[e].classList.add("open")},1500)}(t);for(var n=0;n<o.length;n++)o[n].removeEventListener("click",m)\nfor(var n=0;n<o.length;n++)o[n].removeEventListener("touchend",m)}o.forEach(function(e){e.addEventListener("click",m)})}),$(".close-popup, .pop-up-button").click(function(e){e.preventDefault(),$(".spin-result-wrapper").fadeOut()});var intr,time=1500;function start_timer(){intr=setInterval(tick,1e3)}function tick(){if(0<time){time-=1;var e=Math.floor(time/60),t=10<=(t=time-60*e)?t:"0"+t;if(e<0&&(e=0),$("#min").html(e),$("#sec").html(t),0==e&&0==t)return clearInterval(intr),!1}}let flag=0\nfunction spin(){if(flag==0){flag=1;setTimeout(function(){$(".door__wrapper").fadeOut(),$(".order_block").fadeIn();setTimeout(()=>{$(".spin-result-wrapper").fadeOut();},3000);},3e3),setTimeout(function(){start_timer()},5e3)}}$(" .pop-up-button, .close-popup, .vtgoodlink").click(function(e){$(".spin-result-wrapper").fadeOut();})';
var mod_pagespeed_niuMOYks7_ =
  "const coordinates = {\n   getBlockCoordinates: (block) => {\n      return {start: block.offsetTop, end: block.offsetTop + block.scrollHeight};\n   },\n   screenDevice: () => {\n      return {start: window.pageYOffset, end: window.pageYOffset + window.innerHeight};\n   }\n};\n\nconst commentWrapper = document.querySelector('.comments__kma'),\n      commentWrite = document.querySelector('.comment-write'),\n      blockComment = document.querySelector('.comment-hide'),\n      heightCommnet = Math.abs(coordinates.getBlockCoordinates(blockComment).start - coordinates.getBlockCoordinates(blockComment).end) + 30;\n\n// commentWrapper.style.marginTop = `-${heightCommnet}px`;\nwindow.onscroll = (event) => {\n    if(coordinates.getBlockCoordinates(commentWrite).start < coordinates.screenDevice().end) {\n        this.onscroll = null;\n        return new Promise ((resolve, reject) => {\n            setTimeout(() => {\n                resolve();\n            }, 2000);\n        }).then(() => {\n            commentWrite.style.maxHeight = '0';\n            commentWrite.style.margin = '0';\n            commentWrite.style.padding = '0';\n            commentWrite.style.border = 'none';\n            commentWrapper.style.marginTop = '0';\n            setTimeout( () =>  blockComment.classList.remove('comment-hide'), 300)\n        });\n    }\n}\n\n//Иногда лучше в if\nvar bodyRect = document.body.getBoundingClientRect(),\n    elemRect = commentWrite.getBoundingClientRect(),\n    offset = elemRect.top - bodyRect.top - 300;";
  var url = window.cdn_path;
if (url === undefined) {
  url = "";
}

var mod_pagespeed_SAl7igLgyw =
  "$('.sendcomment').click(function(){\n    let name = $('#textboxname');\n    let message = $('#textboxtext');\n    let error = $('.comment-error');\n    if (name.val() != '' && message.val() != '') {\n        let comments = $('.comments__kma');\n\n\n        let item =$(`\n            <div class=\"comment\" style=\"border-top: 1px solid gray;padding-top: 15px\">\n                <img class=\"comment-img\" src=\"" + url + "img/xa0.jpg,qv2.pagespeed.ic.YEzLVhW7P1.jpg\" alt=\"\">\n                <div class=\"comment-info\">\n                    <p class=\"comment-name\">${name.val()}</p>\n                    <p style=\"margin: 0;\">\n                        ${message.val()}\n                    </p>\n                </div>\n            </div>\n        `)\n\n        comments.append(item);\n    }\n    else {\n       \n        setTimeout(function() { \n            \n        }, 1000);\n        return\n    }\n    name.val('');\n    message.val('');\n})";

$('.sendcomment').click(function(e) {
	if ($('#textboxtext').val().length >= 5) {
		

  eval(mod_pagespeed_SAl7igLgyw);
  $('.comment-error').removeClass('active');
	} else {
		$('.comment-error').addClass('active');
	}
})


  eval(mod_pagespeed_zQbbfuANoN);
  eval(mod_pagespeed_8vZIRgyO54);
  eval(mod_pagespeed_G70m0sGwPB);
  eval(mod_pagespeed_niuMOYks7_);
  

  var linkNav = document.querySelectorAll('[href^="#"]'),
  V = 0.2;
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

//onkeypress='validateText(event)' // на инпут

function validateNum(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

function validateText(evt) {
  var theEvent = evt  || window.event;
  var key = theEvent.keyCode ||  theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[А-Яа-яA-Za-z\s]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

$(".spoiler").on("click", function (e) {
  if (e.target.previousElementSibling.tagName === "VIDEO") {
    e.target.style.display = "none";
  }
  e.target.classList.toggle("show");
  console.log(e.traget);
});

$('.sendcomment').click(function(e) {
	if ($('#textboxtext').val().length >= 5) {

	}
})