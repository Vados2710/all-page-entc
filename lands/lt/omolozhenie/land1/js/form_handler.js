/*TEST*/
/**
 * Обработчик форм сайтов партнеров RocketProfit.ru
 * @param options object Данные для инициализации обработчика
 * @constructor
 */

	// Сообщаем старому обработчику формы, что тут работает омон
window['RocketProfitFormHandler_activated'] = true;

var RocketProfitFormHandler = function (options) {
	var handler = this;
	var date = new Date();
	handler.api_url = 'http://www.rocketprofit.ru/crm/api/createOrderRichData';
	handler.thank_you_page_url = '/thank_you/';
	handler.metrika_goal = 'CREATE_ORDER';
	handler.template_id = '';
	handler.flow_id = '';
	handler.ref = '';
	handler.metrika_hits = '';
	handler.selector = 'form';

	handler.query_string = '';
	handler.subid_all = '';
	handler.subid_1 = '';
	handler.subid_2 = '';
	handler.subid_3 = '';
	handler.subid_4 = '';
	handler.subid_5 = '';
	handler.screen_width = '';
	handler.screen_height = '';
	handler.screen_avail_width = '';
    handler.screen_avail_height = '';

	handler.subids_string = false;

	handler.landing_country_select_class = 'landing___country__select';
	handler.advertiser_api_url = 'http://www.rocketprofit.ru/advertiser/api/countryList';

	for (var a in options) {
		handler[a] = options[a];
	}



	handler.time_zone_offset = -date.getTimezoneOffset() / 60;

	handler.__setScreenProperties();
	handler.__setSubIdAnalyticsData();
	
	handler.__fnCounter = 0;

	if (document.readyState === "complete") {
	  handler.init();
		//handler.__setEvents();
	}
	else {
		window.addEventListener("load", function(){
		  handler.init();
			//handler.__setEvents();
		});
	}
};

RocketProfitFormHandler.prototype.init = function () {
  this.__initCountries();
  this.__setEvents();
}

RocketProfitFormHandler.prototype.__initCountries = function () {
  var handler=this;
  
  var document=window.document;
  var countrySelects=document.getElementsByClassName(handler.landing_country_select_class);
  if (countrySelects.length > 0) {
    console.log("Выбор страны: найдено элементов выбора: "+countrySelects.length);
    handler.__initCountrySelects(countrySelects);
  } else {
    console.log("Выбор страны: нет поддержки со стороны шаблона")
  }
}

RocketProfitFormHandler.prototype.__initCountrySelects = function (countrySelects) {
  var handler = this;
  for (var i = 0; i < countrySelects.length; ++i) {
    var countrySelect=countrySelects[i];
    handler.__initCountrySelect(countrySelect);
  }  
}

RocketProfitFormHandler.prototype.__initCountrySelect = function (select) {
    var handler = this;
	var document = window.document;
	
	select.addEventListener('change', function(e) {
	  var selectedOption = this.options[this.selectedIndex];
	  var price = selectedOption.getAttribute('data-price');
	  var price_old = Math.ceil(selectedOption.getAttribute('data-price-old'));
	  var currency = selectedOption.getAttribute('data-currency');
	  handler.__setTextForClass('landing___price__main_value', price);
	  handler.__setTextForClass('landing___price__old_value', price_old);
	  handler.__setTextForClass('landing___price__currency', currency);
	  
	  var selects = document.getElementsByClassName(handler.landing_country_select_class);
	  for (var i = 0; i < selects.length; ++i) {
	    var that = selects[i];
	    if (that != this) {
	      that.selectedIndex=this.selectedIndex;
	    }
	  }
	});
}

RocketProfitFormHandler.prototype.__setTextForClass = function (className, value) {
  var document=window.document;
  var elements=document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; ++i) {
    var element=elements[i];
    element.innerText=value;
  }
}

/**
 * Устанавливает событие обработки формы и добавляет форме класс -visor-no-click
 * чтобы Яндекс Веб-визор не кликал по форме и не делал дублирующий заказ
 *
 * @private
 */
RocketProfitFormHandler.prototype.__setEvents = function () {
	var handler = this;

    if(handler.selector == "form"){
        var forms = window.document.getElementsByTagName("form");
    }else{
        var forms = window.document.getElementsByClassName(handler.selector);
    }

	console.log("Количество обработанных форм: " + forms.length);
	for (var i = 0; i < forms.length; i++) {
		forms[i].className = forms[i].className + " -visor-no-click";

		forms[i].addEventListener("submit", function (e) {
			e.preventDefault();
			handler.__sendForm(this);
		});
	}
};

/**
 * Записывает в счетчик данные об мониторе посетителя
 *
 * @private
 */
RocketProfitFormHandler.prototype.__setScreenProperties = function () {
	this.screen_width = window.screen.width;
	this.screen_height = window.screen.height;
	this.screen_avail_height = window.screen.availHeight;
	this.screen_avail_width = window.screen.availWidth;
};

/**
 * Вычленяет из строки запроса значения саб ид и подготавливает их для передачи на счетчик
 *
 * @private
 */
RocketProfitFormHandler.prototype.__setSubIdAnalyticsData = function () {
	if(this.subids_string !== false){
        this.query_string = decodeURIComponent(this.subids_string);
    }else{
        this.query_string = document.location.search;
    }

	this.subid_all = '';
	this.subid_1 = '';
	this.subid_2 = '';
	this.subid_3 = '';
	this.subid_4 = '';
	this.subid_5 = '';

	if (!this.query_string) {
		return false;
	}

	var s_data = this.query_string.split('&');
	this.subid_all = [];

	var max_length = s_data.length;

	if (max_length > 5) {
		max_length = 5;
	}

	for (var i = 0; i < max_length; i++) {
		var d = s_data[i].split('=');

		if (typeof d[1] !== 'undefined') {
			this["subid_" + (
			i + 1
			)] = d[1];
			this.subid_all.push(d[1]);
		}
	}

	this.subid_all = this.subid_all.join("|");

	return true;
};

RocketProfitFormHandler.prototype.__sendForm = function (form) {

	if (typeof form.elements === "undefined") {
		alert("Ошибка при обработке формы заказа. Пожалуйста обратитесь за помощью к администрации магазина!");
	}

	var handler = this;

    handler.ref = document.referrer;

    var country = null;
	var query = '',
		params = [
			"time_zone_offset",
			"flow_id",
			"template_id",
			"query_string",
			"screen_width",
			"screen_height",
			"screen_avail_width",
			"screen_avail_height",
			"ref",
			"subid_all",
			"subid_1",
			"subid_2",
			"subid_3",
			"subid_4",
			"subid_5"
		];

	for (var i = 0; i < form.elements.length; i++) {
		if (form.elements[i].type != "submit") {
			var param = form.elements[i].name;

			if (param == 'name') {
				param = 'fio';
			}
			if (param == 'Request[name]') {
				param = 'fio';
			}
			if (param == 'Request[phone]') {
				param = 'phone';
			}
			if (param == 'Request[address]') {
				param = 'address';
			}
			if (param == 'Request[country]') {
			  param = 'country_code';
			}
			console.log(param, form.elements[i].value);

			query += '&' + param + '=' + encodeURIComponent(form.elements[i].value);
			if(param == 'country_code') {
                country = encodeURIComponent(form.elements[i].value);
            }
		}
	}

	for (i = 0; i < params.length; i++) {
		query += '&' + params[i] + '=' + encodeURIComponent(this[params[i]]);
	}

	// Добавляем ид клика, если он прописан в форме
	if (typeof window["rp_shard_hit_id"] !== "undefined") {
		query += '&shard_hit_id=' + window["rp_shard_hit_id"];
	}

	var cb = "rocketProfitFormCallBack" + Math.round(Math.random() * 10000);
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.async = true;
	script.src = handler.api_url + "?callback=" + cb + query;

	window[cb] = function (data) {
		if (data.code == 200) {
			if (handler.metrika_hits) {
				var ya_counter = 'yaCounter' + handler.metrika_hits;

				if (typeof window[ya_counter] !== "undefined") {
					if (typeof form.dataset.goal !== "undefined") {
						console.log("Reach custom goal: " + form.dataset.goal);
						window[ya_counter].reachGoal(form.dataset.goal);

					}
					window[ya_counter].reachGoal(handler.metrika_goal);
				}
			}

			var redirect_url = handler.thank_you_page_url + "?order_id=" + data.order_id;
			if(country) redirect_url += "&locale=" + country;
			window.location.href = redirect_url;
		}
		else {
			script.parentNode.removeChild(script);
			delete window[cb];
			alert(data.message);
		}
	};
  document.querySelector('head').appendChild(script);
}