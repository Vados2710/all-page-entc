function getXmlHttp() {
	var xmlhttp;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (E) {
			xmlhttp = false;
		}
	}
	if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}

/**
 * Счетчик посещений  сайтов партнеров RocketProfit.ru
 * @param options object Данные для инициализации счетчика
 * @constructor
 */
var RocketProfitCounter = function (options) {
	this.server = 'http://www.rocketprofit.ru/counter.php';
	this.shard_id = '';
	this.user_id = '';
	this.site_id = '';
	this.flow_id = '';
	this.offer_id = '';
	this.site_template_id = '';
	this.pre_site_template_id = '';
	this.source = '';
	this.price_quote_type = '';
	this.hit_id = '';
	this.is_pre_site = 0;
	this.query_string = document.location.search;
	this.subids_string = false;

	for (var a in options) {
		this[a] = options[a];
	}

    if(this.subids_string !== false){
        this.query_string = decodeURIComponent(this.subids_string);
        document.referrer = '';
    }

	this.landing_visited = this.is_pre_site ? 0 : 1;

	if (!this.__checkIsHitFromPreSite()) {
		this.ref = document.referrer;
		this.__setScreenProperties();
		this.__setSubIdAnalyticsData();
	}

	this.__setIsUniqueVisitor();
};

/**
 * Записывает в счетчик данные об мониторе посетителя
 *
 * @private
 */
RocketProfitCounter.prototype.__setScreenProperties = function () {
	this.screen_width = window.screen.width;
	this.screen_height = window.screen.height;
	this.screen_avail_height = window.screen.availHeight;
	this.screen_avail_width = window.screen.availWidth;
};

/**
 * Проверяет наличие в строке запроса параметра 'sh' - который у казывает на то, что на этот сайт был переход с преленда.
 * В этом случае новый хит не записывается, а хит с ид, который был передан в параметре sh - помечается, что посетитель перешел на сайт.
 *
 * @private
 */
RocketProfitCounter.prototype.__checkIsHitFromPreSite = function () {
	var counter = this;

	if (this.is_pre_site) {
		return false;
	}

	if (!this.query_string) {
		return false;
	}

	var s_data = this.query_string.split('&');
	for (var i = 0; i < s_data.length; i++) {
		var d = s_data[i].split('=');
		if (typeof d[1] !== 'undefined') {
			if (d[0] == 'sh' || d[0] == '?sh') {
				counter.hit_id = d[1];
				window["rp_shard_hit_id"] = counter.hit_id;
				return true;
			}
		}
	}

	return false;
};

/**
 * Вычленяет из строки запроса значения саб ид и подготавливает их для передачи на счетчик
 *
 * @private
 */
RocketProfitCounter.prototype.__setSubIdAnalyticsData = function () {

	this.subid_all = '';
	this.subid_1 = '';
	this.subid_2 = '';
	this.subid_3 = '';
	this.subid_4 = '';
	this.subid_5 = '';

	if(this.source){
		this.source = decodeURIComponent(this.source);
	}

    var data_string = '';

    if(this.subids_string !== false){
        data_string = decodeURIComponent(this.subids_string);
    }else{
        if (!this.query_string) {
            return false;
        }

        data_string = this.query_string;
    }

	var s_data = data_string.split('&');

	this.subid_all = [];

	var max_length = s_data.length;

	if (max_length > 5) {
		max_length = 5;
	}

	for (var i = 0; i < max_length; i++) {
		var d = s_data[i].split('=');

		if (typeof d[1] !== 'undefined') {
            try{
                d[1] = decodeURIComponent(d[1]);
            }catch (ex){
                console.log("Ошибка при попытке распарсить URL-компонент: ", ex);
            }
			this["subid_" + (i + 1)] = d[1];
			this.subid_all.push(d[1]);
		}
	}

	this.subid_all = this.subid_all.join("|");

	return true;
};

/**
 * Устанавливает куку посетителя, по которой потом определяется уник он или нет
 *
 * @private
 */
RocketProfitCounter.prototype.__setVisitorCookie = function () {
	var date = new Date(),
		minutes = 30,
		expire = minutes * 60 * 1000;
	date.setTime(date.getTime() + expire);
	document.cookie = "rp_visotor_unique=0; expires=" + date.toGMTString() + "; path=/";
};

/**
 * Проверяет посетителя на предмет уникальности
 *
 * @returns boolean
 * @private
 */
RocketProfitCounter.prototype.__setIsUniqueVisitor = function () {
	var nameEQ = "rp_visotor_unique=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) {
			this.is_unique = 0;
			return true;
		}
	}

	this.is_unique = 1;
	this.__setVisitorCookie();
	return true;
};

/**
 * Пишет ид клика во все ссылки преленда
 *
 * @returns boolean
 * @private
 */
RocketProfitCounter.prototype.__writeHitIdToAllLinks = function (id) {
	var forms = window.document.getElementsByTagName("a");
	for (var i = 0; i < forms.length; i++) {
		forms[i].href = forms[i].href + "&sh=" + id;
	}

	return true;
};

/**
 * Пишет ид клика во все формы как дата атрибут формы
 *
 * @returns boolean
 * @private
 */
RocketProfitCounter.prototype.__writeHitIdToAllForms = function () {
	var forms = window.document.getElementsByTagName("form");
	for (var i = 0; i < forms.length; i++) {
		forms[i].dataset.hit = this.hit_id;
		console.log(forms[i].dataset);
	}
	return true;
};

/**
 * Отправка данных о посещении страницы
 *
 * @private
 */
RocketProfitCounter.prototype._trackPageView = function () {
	var counter = this;

	var xmlhttp = getXmlHttp();

	if (counter.hit_id) {
		var img = new Image(1, 1);
		img.src = this.server + '?hit_id=' + counter.hit_id +'&shard_id=' + counter.shard_id+'&site_template_id=' + counter.site_template_id;
	}
	else {
		var cb = "rocketProfitCounterCallBack" + Math.round(Math.random() * 10000);
		var url = this.server + '?cb=' + cb,
			query = '',
			params = [
				"shard_id",
				"user_id",
				"site_id",
				"flow_id",
				"offer_id",
				"site_template_id",
				"pre_site_template_id",
				"source",
				"price_quote_type",
				"query_string",
				"screen_width",
				"screen_height",
				"screen_avail_width",
				"screen_avail_height",
				"ref",
				"is_unique",
				"subid_all",
				"subid_1",
				"subid_2",
				"subid_3",
				"subid_4",
				"subid_5",
				"landing_visited"
			];

		for (var i = 0; i < params.length; i++) {
			query += '&' + params[i] + '=' + encodeURIComponent(this[params[i]]);
		}

		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.async = true;
		script.src = url + query;

		window[cb] = function (res) {
			if (typeof res.error !== "undefined") {
				console.error(res.error);
			}
			else if (typeof res.redirect !== "undefined" && res.redirect !== window.document.location.href) {
				window.document.location.href = res.redirect;
			}
			else if (typeof res.hit_id !== "undefined") {
				window["rp_shard_hit_id"] = res.hit_id;

				if (counter.is_pre_site) {
					if (document.readyState === "complete") {
						counter.__writeHitIdToAllLinks(res.hit_id);
					}
					else {
						window.addEventListener("load", function(){
							counter.__writeHitIdToAllLinks(res.hit_id);
						});
					}
				}
			}

			script.parentNode.removeChild(script);
			delete window[cb];
		};

		document.querySelector('head').appendChild(script);
	}
};
