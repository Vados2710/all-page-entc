/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getCookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


var checkCookieParked = function checkCookieParked() {
  return Object(_getCookie__WEBPACK_IMPORTED_MODULE_0__["default"])('parking') === '1';
};

/* harmony default export */ __webpack_exports__["default"] = (checkCookieParked);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getCookie = function getCookie(name) {
  var pattern = "(?:^|; )".concat(name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1'), "=([^;]*)");
  var matches = document.cookie.match(new RegExp(pattern));
  return matches ? decodeURIComponent(matches[1]) : false;
};

/* harmony default export */ __webpack_exports__["default"] = (getCookie);

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_checkCookieParked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


(function () {
  'use strict';

  var LBS = function LBS() {
    this.initEvents();
    /**
     * Дефолтные параметры
     * @type {object }
     */

    this.params = {
      leadBitDomain: '//lea' + 'dbit.biz/',
      currentUrl: document.location.hostname,
      previousPage: document.referer,
      getToExtend: ['cb', 'fblp', 'lp', 'fbsop']
    }; // Получаем Facebook ID

    var data = {
      page: this.params.currentUrl,
      callback: 'LeadBitSuccess.setData'
    };
    this.extendWithGet(this.params.getToExtend, data); // Отправляем TID на случай отсутствия кук

    if (this.queryGET('TID')) {
      data['TID'] = this.queryGET('TID');
    }

    $.ajax({
      url: "".concat(this.checkCookieParked() ? 'default.htm' : this.params.leadBitDomain, "success-page"),
      data: data,
      contentType: 'application/json',
      jsonpCallback: 'LeadBitSuccess.setData',
      dataType: 'jsonp'
    });
  };

  LBS.prototype = {
    initEvents: function initEvents() {
      $('#email_form').on('submit', $.proxy(this.submitMail, this));
    },
    setData: function setData(data) {
      // Check FB pixel
      if (data && data.facebookPixelCodeId) {
        LeadBitSuccess.insertFbId.call(LeadBitSuccess, data);
      } // Check GooglePixel


      if (data && data.googleTagId) {
        LeadBitSuccess.insertGoogleTag.call(LeadBitSuccess, data.googleTagId);
      } // Check GoogleAnalytics


      if (data && data.googleAnalyticsId) {
        LeadBitSuccess.insertGoogleAnalytics.call(LeadBitSuccess, data.googleAnalyticsId);
      } // Check GoogleSiteTag


      if (data && data.googleSiteTagIdForSuccessPage) {
        LeadBitSuccess.insertGoogleSiteTag.call(LeadBitSuccess, data.googleSiteTagIdForSuccessPage);
      } // Check TiktokPixel


      if (data && data.tiktokPixelIdForSuccessPage) {
        LeadBitSuccess.insertTiktokPixel.call(LeadBitSuccess, data.tiktokPixelIdForSuccessPage);
      } // Check iFrame


      if (data && data.iframeUrl) {
        LeadBitSuccess.insertIframe.call(LeadBitSuccess, data.iframeUrl);
      } // Check propeller ads


      if (data && data.PropellerAdsImgPixelSuccess) {
        LeadBitSuccess.insertPropellerImg.call(LeadBitSuccess, data.PropellerAdsImgPixelSuccess);
      }

      if (data && data.PropellerAdsIframePixel) {
        LeadBitSuccess.insertPropellerIframe.call(LeadBitSuccess, data.PropellerAdsIframePixel);
      }
    },

    /**
     * Расширение массива во 2 аргументе
     * @param {Array} params - геты, которые надо добавить в запрос
     * @param {Array} array - массив с данными
     * @return {Array}
     */
    extendWithGet: function extendWithGet(params, array) {
      console.log(params, array);

      for (var i = 0; i < params.length; i++) {
        var param = this.queryGET(params[i]);
        param ? array[params[i]] = param : false;
      }

      return array;
    },

    /**
     * Получаем GET параметр из URL
     * @param  {String} name Имя параметра
     * @return {String}
     */
    queryGET: function queryGET(name) {
      var regExp = new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)');
      name = regExp.exec(location.search);

      if (name) {
        return name[1] ? decodeURIComponent(name[1]) : 0;
      }
    },

    /**
     * Отправляем e-mail и TID на leadbit
     * @param {Event} event
     * @return {boolean}
     */
    submitMail: function submitMail(event) {
      var $form = $(event.currentTarget);
      var email = $form.find('input[name=email]').val().replace(/^s+|s+$/g, '');
      var tid = this.getTid();
      var successText = $form.find('.btn-save').attr('data-success');
      var errorText = $form.find('.btn-save').attr('data-error');

      if ($(event.currentTarget).find('input[name=email]').val().length > 5 && /^([a-z0-9_-]+.)*[a-z0-9_-]+@([a-z0-9][a-z0-9-]*[a-z0-9].)+[a-z]{2,4}$/i.test(email)) {
        $.ajax({
          type: 'POST',
          dataType: 'jsonp',
          url: "".concat(this.checkCookieParked() ? 'default.htm' : this.params.leadBitDomain, "api/save-email-from-success-page"),
          data: {
            email: email,
            TID: tid
          }
        }).done(function (response, status) {
          console.log(response, status);
        });
        $('#email_form').html("<p>".concat(successText, "</p>"));
        return false;
      } else {
        alert(errorText);
        return false;
      }
    },

    /**
     * Получаем TID
     * @return {string}
     */
    getTid: function getTid() {
      var regex = new RegExp('[\\?\\&]TID=([0-9A-Z]+)');
      var results = regex.exec(location.search);
      return results === null ? '' : results[1];
    },

    /**
     * Вставляем facebook id
     * @param {object} data Facebook pixel id
     */
    insertFbId: function insertFbId(data) {
      /* eslint-disable-next-line */
      var fbScript = "<!-- Facebook Pixel Code --><script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','../https@connect.facebook.net/en_US/fbevents.js');fbq('init', '" + data.facebookPixelCodeId + "');fbq('track', 'PageView');fbq('track', 'Lead');</script><img height='1' width='1' style='display:none' src='../https@www.facebook.com/tr@id=" + data.facebookPixelCodeId + "&ev=PageView&noscript=1'/>";
      document.body.insertAdjacentHTML('beforeend', fbScript);
      !function (f, b, e, v, n, t, s) {
        if (f.fbq) return;

        n = f.fbq = function () {
          /* eslint-disable-next-line */
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };

        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      }(window, document, 'script', '../https@connect.facebook.net/en_US/fbevents.js');
      fbq('init', data.facebookPixelCodeId);
      fbq('track', 'Lead');
    },

    /**
     * Вставляем google tag
     * @param {int} tagId google tag id
     */
    insertGoogleTag: function insertGoogleTag(tagId) {
      /* eslint-disable-next-line */
      var googleScript = "<noscript><iframe src='//www.googletagmanager.com/ns.html?id=" + tagId + "' height='0' width='0' style='display:none;visibility:hidden'></iframe></noscript> <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','" + tagId + "');</script>";
      document.body.insertAdjacentHTML('beforeend', googleScript);

      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
          'gtm.start': new Date().getTime(),
          'event': 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0];
        var j = d.createElement(s);
        var dl = l != 'dataLayer' ? "&l=".concat(l) : '';
        j.async = true;
        j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', tagId);
    },

    /**
     * Вставляем google analitycs id
     * @param {int} tagId google analitycs id
     */
    insertGoogleAnalytics: function insertGoogleAnalytics(tagId) {
      /* eslint-disable-next-line */
      var googleAnalitycs = "<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','../https@www.google-analytics.com/analytics.js','ga');ga('create', '" + tagId + "', 'auto');ga('send', 'pageview');</script>";
      document.body.insertAdjacentHTML('beforeend', googleAnalitycs);

      (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;

        i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments);
        };

        i[r].l = 1 * new Date();
        a = s.createElement(o), m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
      })(window, document, 'script', '../https@www.google-analytics.com/analytics.js', 'ga');

      ga('create', tagId, 'auto');
      ga('send', 'pageview');
    },

    /**
     * Вставляем google site tag
     * @tagId  {string}
     * @return void
     */
    insertGoogleSiteTag: function insertGoogleSiteTag(tagId) {
      /* eslint-disable-next-line */
      var googleSiteTagScript = "<!-- Global site tag (gtag.js) - Google Analytics --> <script async src='../https@www.googletagmanager.com/gtag/js@id=" + tagId + "'></script><script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}gtag('js', new Date()); gtag('config', '" + tagId + "');</script>";
      document.body.insertAdjacentHTML('beforeend', googleSiteTagScript);
      window.dataLayer = window.dataLayer || [];

      function gtag() {
        dataLayer.push(arguments);
      }

      gtag('js', new Date());
      gtag('config', tagId);
    },

    /**
     * Вставляем tiktok pixel id
     * @tagId  {string}
     * @return void
     */
    insertTiktokPixel: function insertTiktokPixel(tagId) {
      var tiktokPixel = "<script>\n                    !function (w, d, t) {w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=[\"page\",\"track\",\"identify\",\"instances\",\"debug\",\"on\",\"off\",\"once\",\"ready\",\"alias\",\"group\",\"enableCookie\",\"disableCookie\"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i=\"../https@analytics.tiktok.com/i18n/pixel/events.js\";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement(\"script\");o.type=\"text/javascript\",o.async=!0,o.src=i\"@sdkid=\"e\"&lib=\"+t;var a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(o,a)}; ttq.load(".concat(tagId, "); ttq.page();}(window, document, 'ttq');\n                </script>");
      document.body.insertAdjacentHTML('beforeend', tiktokPixel);
      !function (w, d, t) {
        w.TiktokAnalyticsObject = t;
        var ttq = w[t] = w[t] || [];
        ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"], ttq.setAndDefer = function (t, e) {
          t[e] = function () {
            t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
          };
        };

        for (var i = 0; i < ttq.methods.length; i++) {
          ttq.setAndDefer(ttq, ttq.methods[i]);
        }

        ttq.instance = function (t) {
          for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) {
            ttq.setAndDefer(e, ttq.methods[n]);
          }

          return e;
        }, ttq.load = function (e, n) {
          var i = "../https@analytics.tiktok.com/i18n/pixel/events.js";
          ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = i, ttq._t = ttq._t || {}, ttq._t[e] = new Date(), ttq._o = ttq._o || {}, ttq._o[e] = n || {};
          var o = document.createElement("script");
          o.type = "text/javascript", o.async = !0, o.src = "".concat(i, "@sdkid=").concat(e, "&lib=").concat(t);
          var a = document.getElementsByTagName("script")[0];
          a.parentNode.insertBefore(o, a);
        };
        ttq.load(tagId);
        ttq.page();
      }(window, document, 'ttq');
    },

    /**
     * Вставляем iFrame
     * @param {string} iframeUrl
     */
    insertIframe: function insertIframe(iframeUrl) {
      /* eslint-disable-next-line */
      var iframe = '<iframe style="position: absolute;left:-9999px;" width="1" scrolling="no" height="1" frameborder="0" src="' + iframeUrl + '" seamless="seamless">';
      document.body.insertAdjacentHTML('beforeend', iframe);
    },
    insertPropellerImg: function insertPropellerImg(imgSrc) {
      var img = "<img src=\"".concat(imgSrc, "\" width=\"1\" height=\"1\" />");
      document.body.insertAdjacentHTML('beforeend', img);
    },
    insertPropellerIframe: function insertPropellerIframe(iframeUrl) {
      var iframe = "<iframe src=\"".concat(iframeUrl$, "\" style=\"width:0;height:0;visibility:hidden;\"></iframe>");
      document.body.insertAdjacentHTML('beforeend', iframe);
    },
    checkCookieParked: _utils_checkCookieParked__WEBPACK_IMPORTED_MODULE_0__["default"]
  };
  $(function () {
    window.LeadBitSuccess = new LBS();
  });
})();

/***/ })
/******/ ]);