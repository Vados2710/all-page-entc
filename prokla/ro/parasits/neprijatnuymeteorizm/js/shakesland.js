!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([,function(e,t,o){"use strict";var n=r(o(2)),i=r(o(3));function r(e){return e&&e.__esModule?e:{default:e}}window.Helpers=new n.default;var a=function(e){var t=document.location.pathname.replace(new RegExp(/\/$/),"");return{default:{cookieCheck:"http://%dynamicDomain%/index.php?r=api/cookie&jsoncallback=lShakes.setCookieDomain&site="+lShakes.config.location+"&tid="+window.tid,orderSubmit:"http://"+lShakes.config.cookie_domain+"/index.php?r=api/request/index",emailSubmit:"http://"+lShakes.config.cookie_domain+"/index.php?r=api/email",orderRedirect:"/success.%langCode%.html?ver=1&request_id=%requestID%&tid="+window.tid+"&orderType="+window.Helpers.urlGET("orderType"),apiScripts:"http://"+lShakes.config.cookie_domain+"/index.php?r=api/js&site="+lShakes.config.location+"&tid="+window.tid,returnerCheck:"http://"+lShakes.config.cookie_domain+"/comebackerSettings?site="+lShakes.config.location+"&tid="+window.tid,jsLogging:"/api/jsLog"},parking:{tid:"/api/track"+document.location.search+(""===document.location.search?"?":"&")+"code="+document.location.pathname.split("/")[1],orderSubmit:"/api/request?",emailSubmit:"/api/email?",orderRedirect:t+"/success.%langCode%.html?request_id=%requestID%&tid="+window.tid+"&orderType="+window.Helpers.urlGET("orderType")+(window.Helpers.urlGET("ver")?"&ver="+window.Helpers.urlGET("ver"):"1"),apiScripts:"/api/js?referer="+document.location.hostname+t+"&tid="+window.tid,returnerCheck:"/api/comebackerSettings?referer="+document.location.hostname+t+"&tid="+window.tid,jsLogging:"/api/jsLog"}}[lShakes.domainType][e]||!1};window.getTid=function(){var e=new RegExp('"[\\\\?\\\\&]tid\\\\=(\\\\d+)').exec(location.search);return null===e?"":"&tid="+e[1]};var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isDevMode="#devmode"===window.location.hash,this.helpers=new n.default,this.scripts=new i.default({requests:a}),this.domainType=t.domainType,this.config={},this.state={},this.isBlockerHere=void 0,this.trans={},document.addEventListener("DOMContentLoaded",this.init.bind(this,t))}return e.prototype.init=function(e){this.config=n.default.extend({cookie_times:[],cookie_statuses:[],location:document.location.hostname+document.location.pathname},e),this.state.cookieDomainsCheckedCount=0,"parking"===this.domainType?this.parkingInitialize():this.defaultInitialize()},e.prototype.initEvents=function(){var e=this,t=document.querySelectorAll(".order_form"),o=document.querySelectorAll(".mail_form"),n=!0,i=!1,r=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done);n=!0)a.value.onsubmit=function(t){return e.submitOrderForm(t)}}catch(e){i=!0,r=e}finally{try{!n&&c.return&&c.return()}finally{if(i)throw r}}var s=!0,d=!1,u=void 0;try{for(var l,f=o[Symbol.iterator]();!(s=(l=f.next()).done);s=!0)l.value.onsubmit=function(t){return e.submitEmailForm(t)}}catch(e){d=!0,u=e}finally{try{!s&&f.return&&f.return()}finally{if(d)throw u}}},e.prototype.defaultInitialize=function(){window.tid=this.helpers.urlGET("tid"),this.checkDevMode(),this.checkTest(),this.initEvents(),this.checkBlocker(),this.sendCookies()},e.prototype.parkingInitialize=function(){this.checkBlocker(),window.tid=this.helpers.urlGET("tid"),window.tid?(this.initEvents(),this.scripts.initialize()):this.getTid()},e.prototype.checkBlocker=function(){var e=this;this.scripts.initBlockChecker({onError:function(){e.sendLog({action:"AdBlock checking",message:"AdBlock is on or script wasn't found",actionUrl:e.scripts.paths.adsCheck})}})},e.prototype.getTid=function(){var e=this;n.default.JSONP(a("tid"),{onLoad:function(){e.initEvents(),e.scripts.initialize()},onError:function(){e.sendLog({action:"Get TID",message:"Script loading was failed",actionUrl:a("tid")})}})},e.prototype.sendLog=function(e,t){e=n.default.extend({date:new Date,action:"no action",message:"no message",actionUrl:"-unspecified-",domain:location.hostname,page:location.pathname,URLparams:location.search,URLhash:location.hash,pageUrl:location.href},e),this.helpers.xhrPOST({url:a("jsLogging"),data:n.default.objectToGet({data:JSON.stringify(e)}),callback:function(e,o){"function"==typeof t&&t(e,o)}})},e.prototype.submitOrderForm=function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.event;t.preventDefault();var o=t.currentTarget;if(!this.checkAnyForm(o))return!1;var i=n.default.extend(n.default.serialize(o),{tid:window.tid,orderType:this.helpers.urlGET("orderType"),location:this.config.location,site:this.config.location,jsoncallback:"lShakes.orderConfirm"});return i=this.checkFormDataArray(i),n.default.JSONP(a("orderSubmit")+n.default.objectToGet(i),{onError:function(){return e.sendLog({action:"Order submit",message:"Request error",actionUrl:a("orderSubmit")+n.default.objectToGet(i)})}}),!1},e.prototype.submitEmailForm=function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.event;t.preventDefault();var o=t.currentTarget,i=o.querySelector('input[type="submit"]');if(!this.checkAnyForm(o))return!1;var r=n.default.extend(n.default.serialize(o),{site:this.config.location,tid:window.tid});return r=this.checkFormDataArray(r),n.default.JSONP(a("emailSubmit")+n.default.objectToGet(r),{onLoad:function(){return o.innerHTML=e.trans.emailSuccess?e.trans.emailSuccess:i.dataset.success},onError:function(){return e.sendLog({action:"Email submit",message:"Request error",actionUrl:a("emailSubmit")+n.default.objectToGet(r)})}}),!1},e.prototype.checkAnyForm=function(e){var t=!0,o=!1,n=void 0;try{for(var i,r=e[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var a=i.value;switch(a.getAttribute("name")){case"phone":if(a.value<8)return alert(this.trans.phoneError),!1;break;case"name":if(a.value<3)return alert(this.trans.nameError),!1;break;case"email":if(!/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(a.value))return alert(this.trans.emailError),!1}}}catch(e){o=!0,n=e}finally{try{!t&&r.return&&r.return()}finally{if(o)throw n}}return!0},e.prototype.checkFormDataArray=function(e){return void 0!==e.null&&delete e.null,e},e.prototype.sendCookies=function(){var e=this,t=function(t){var o=e.config.cookie_domains[t];if("string"==typeof o){var i=a("cookieCheck").replace("%dynamicDomain%",o);n.default.JSONP(i,{onError:function(t,n){e.setCookieDomain({domain:o,status:!1,time:0}),e.sendLog({action:"Cookies check: domain "+o,message:"Request error",actionUrl:n})}})}};for(var o in this.config.cookie_domains)t(o)},e.prototype.setCookieDomain=function(e){var t=0,o=this.config;!0===e.status&&void 0!==e.time&&(t=e.time);var n=o.cookie_domains.indexOf(e.domain);if(-1!==n&&(o.cookie_times[n]=parseInt(t),o.cookie_statuses[n]=e.status),o.cookie_domains.length<=++this.state.cookieDomainsCheckedCount){var i=!0,r=!1,a=void 0;try{for(var c,s=o.cookie_times[Symbol.iterator]();!(i=(c=s.next()).done);i=!0){var d=c.value;void 0===d&&(d=0)}}catch(e){r=!0,a=e}finally{try{!i&&s.return&&s.return()}finally{if(r)throw a}}var u=Math.max.apply(Math,o.cookie_times);if(u){var l=o.cookie_times.indexOf(u);~l&&(o.cookie_domain=o.cookie_domains[l])}else{var f=o.cookie_statuses.indexOf(!0);~f&&(o.cookie_domain=o.cookie_domains[f])}this.scripts.initialize()}},e.prototype.orderConfirm=function(e){var t=lCountries.nginxCountryCode||lCountries.defaultCountry,o=t!==lCountries.nginxCountryCode?"":t+".";""!==this.config.orderRedirect&&(this.config.orderRedirect=a("orderRedirect").replace("%requestID%",e.request_id).replace("%langCode%.",o),this.isDevMode&&(this.config.orderRedirect+="#devmode"),document.location.href=this.config.orderRedirect)},e.prototype.checkDevMode=function(){this.isDevMode&&(this.config.cookie_domain="test.shakesin.com",this.config.cookie_domains=["test.shakesin.com"])},e.prototype.checkTest=function(e){if("#testshakes"===window.location.hash){var t=document.createElement("script");t.setAttribute("src",this.scripts.paths.testScript),document.body.appendChild(t)}},e}();"1"===n.default.getCookie("parking")?window.lShakes=new c({domainType:"parking"}):window.lShakes=new c({domainType:"default",cookie_domain:"streamshakes.com",cookie_domains:["streamshakes.com","shakpotokes.com","shakpotoke.com","shakeshakepotok.com","sekahspotok.com","shakepotok.com","r.shakesstream.com","shakesstream.com","newgoodsshake.com","goodsshake.com","shakesspot.com"],comeBacker:{status:!0}})},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return e.extend=function(e,t){var o={};for(var n in e)e.hasOwnProperty(n)&&(o[n]=e[n]);for(var i in t)t.hasOwnProperty(i)&&(o[i]=t[i]);return o},e.prototype.urlGET=function(e){return null===(e=new RegExp("[?&]"+encodeURIComponent(e)+"=([^&]*)").exec(location.search))?"":decodeURIComponent(e[1])},e.serialize=function(e){var t={},o=!0,n=!1,i=void 0;try{for(var r,a=e[Symbol.iterator]();!(o=(r=a.next()).done);o=!0){var c=r.value;t[c.getAttribute("name")]=c.value}}catch(e){n=!0,i=e}finally{try{!o&&a.return&&a.return()}finally{if(n)throw i}}return t},e.objectToGet=function(e){var t="";for(var o in e)t+="&"+o+"="+encodeURIComponent(e[o]);return t},e.JSONP=function(e,t){var o=document.createElement("script");o.async=!0,o.setAttribute("src",e),o.onload=function(o){t&&"function"==typeof t.onLoad&&t.onLoad(o,e)},o.onerror=function(o){t&&"function"==typeof t.onError&&t.onError(o,e)},document.body.appendChild(o)},e.prototype.xhrCreate=function(){var e=void 0;try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(t){e=!1}}return e||"undefined"==typeof XMLHttpRequest||(e=new XMLHttpRequest),e},e.prototype.xhrPOST=function(t){var o=this.xhrCreate();t=e.extend({ecntype:"application/x-www-form-urlencoded",async:!0},t),o.open("POST",t.url,t.async),o.setRequestHeader("Content-type",t.ecntype),o.onreadystatechange=function(){4==o.readyState&&"function"==typeof t.callback&&t.callback(o.response,o.status,o)},o.send(t.data)},e.getCookie=function(e){var t="(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)",o=document.cookie.match(new RegExp(t));return o?decodeURIComponent(o[1]):void 0},e.prototype.domReady=function(e){if(document.addEventListener)document.addEventListener("DOMContentLoaded",e);else var t=setInterval((function(){"complete"===document.readyState&&(clearInterval(t),e())}),5)},e.prototype.qs=function(e){return document.querySelectorAll(e)},e.prototype.on=function(e,t,o,n){e.addEventListener?e.addEventListener(t,(function(e){o.call(n,e)}),!1):e.attachEvent&&e.attachEvent("on"+t,(function(e){o.call(n,e)}))},e.prototype.each=function(e,t){for(var o=0;o<e.length;o++)t(e[o],o)},e.prototype.indexOf=function(e,t){for(var o=t||0;o<this.length;o++)if(this[o]==e)return o;return-1},e.prototype.bi=function(e){return document.getElementById(e)},e.prototype.bt=function(e){return document.getElementsByTagName(e)},e}();t.default=n},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=(n=o(2))&&n.__esModule?n:{default:n},r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.paths={adsCheck:"/cdn/js/ads_check.js",landingFeatures:"/cdn/js/landingfeatures.js",returner:"/cdn/js/comebacker.js",testScript:"/cdn/js/test_shakes.js"},this.requests=t.requests}return e.prototype.initBlockChecker=function(e){i.default.JSONP(this.paths.adsCheck,e)},e.prototype.initialize=function(){var e=this,t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src",this.requests("apiScripts")),t.onload=function(){if(window.location.pathname.search("/success")>-1||"returner"===window.self.name)return!1;if(e.initReturner(),window.self!==window.top)return!1;var t=document.createEvent("Event");"undefined"!=typeof GeoInfo&&"undefined"!=typeof lCountries&&(lCountries.nginxCountryCode=GeoInfo.countryCode.toLowerCase(),lCountries.setActiveCountrySelect(),t.initEvent("countryset",!0,!1),window.dispatchEvent(t)),e.initLandingFeatures()},document.body.appendChild(t)},e.prototype.initReturner=function(){var e=this;window.pageType&&"layer"===window.pageType&&i.default.JSONP(this.requests("returnerCheck"),{onLoad:function(){window.CB&&(window.CB.beforeRender=e.handleRedirectLinks(window.CB.landingUrl),window.CB.iframeSrc=window.CB.landingUrl+"?tid="+window.tid+window.location.hash,i.default.JSONP(e.paths.returner,{onLoad:function(){e.returner=new ComeBacker(window.CB)},onError:function(){lShakes.sendLog.call(e,{action:"Returner (CB) loading",message:"Script wasn't loaded",actionUrl:e.paths.returner})}}))},onError:function(){lShakes.sendLog.call(e,{action:"Returner (CB) data check",message:"Data for script wasn't loaded",actionUrl:e.requests("returnerCheck")})}})},e.prototype.handleRedirectLinks=function(e){var t=document.querySelectorAll("a"),o=!0,n=!1,i=void 0;try{for(var r,a=t[Symbol.iterator]();!(o=(r=a.next()).done);o=!0){var c=r.value;c.style.cursor="pointer",c.setAttribute("href",e),c.setAttribute("target","_blank"),c.onclick=function(t){return t.preventDefault(),window.onbeforeunload=function(){},window.showCase&&window.showCase.isActive&&(window.location="//shakesnews.com/?tid="+window.tid),window.open(e+window.location.search,"_blank"),!1}}}catch(e){n=!0,i=e}finally{try{!o&&a.return&&a.return()}finally{if(n)throw i}}},e.prototype.initLandingFeatures=function(){if(window.landingFeatures){var e=this;i.default.JSONP(this.paths.landingFeatures,{onLoad:function(){e.LandingFeatures=new LandingFeatures(window.landingFeatures)},onError:function(){e.sendLog({action:"LandingFeatures loading",message:"Script wasn't loaded",actionUrl:e.paths.landingFeatures})}})}},e}();t.default=r}]);