var firstjc = 1; var lastjc = 6;
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 * 
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof exports==='object'){factory(require('jquery'));}else{factory(jQuery);}}(function($){var pluses=/\+/g;function encode(s){return config.raw?s:encodeURIComponent(s);}
function decode(s){return config.raw?s:decodeURIComponent(s);}
function stringifyCookieValue(value){return encode(config.json?JSON.stringify(value):String(value));}
function parseCookieValue(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,'\\');}
try{s=decodeURIComponent(s.replace(pluses,' '));return config.json?JSON.parse(s):s;}catch(e){}}
function read(s,converter){var value=config.raw?s:parseCookieValue(s);return $.isFunction(converter)?converter(value):value;}
var config=$.cookie=function(key,value,options){if(value!==undefined&&!$.isFunction(value)){options=$.extend({},config.defaults,options);if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setTime(+t+days*864e+5);}
return(document.cookie=[encode(key),'=',stringifyCookieValue(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''));}
var result=key?undefined:{};var cookies=document.cookie?document.cookie.split('; '):[];for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split('=');var name=decode(parts.shift());var cookie=parts.join('=');if(key&&key===name){result=read(cookie,value);break;}
if(!key&&(cookie=read(cookie))!==undefined){result[name]=cookie;}}
return result;};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)===undefined){return false;}
$.cookie(key,'',$.extend({},options,{expires:-1}));return!$.cookie(key);};}));

/*! jCarousel - v0.3.0 - 2013-11-22
* http://sorgalla.com/jcarousel
* Copyright (c) 2013 Jan Sorgalla; Licensed MIT */
(function(t){"use strict";var i=t.jCarousel={};i.version="0.3.0";var s=/^([+\-]=)?(.+)$/;i.parseTarget=function(t){var i=!1,e="object"!=typeof t?s.exec(t):null;return e?(t=parseInt(e[2],10)||0,e[1]&&(i=!0,"-="===e[1]&&(t*=-1))):"object"!=typeof t&&(t=parseInt(t,10)||0),{target:t,relative:i}},i.detectCarousel=function(t){for(var i;t.length>0;){if(i=t.filter("[data-jcarousel]"),i.length>0)return i;if(i=t.find("[data-jcarousel]"),i.length>0)return i;t=t.parent()}return null},i.base=function(s){return{version:i.version,_options:{},_element:null,_carousel:null,_init:t.noop,_create:t.noop,_destroy:t.noop,_reload:t.noop,create:function(){return this._element.attr("data-"+s.toLowerCase(),!0).data(s,this),!1===this._trigger("create")?this:(this._create(),this._trigger("createend"),this)},destroy:function(){return!1===this._trigger("destroy")?this:(this._destroy(),this._trigger("destroyend"),this._element.removeData(s).removeAttr("data-"+s.toLowerCase()),this)},reload:function(t){return!1===this._trigger("reload")?this:(t&&this.options(t),this._reload(),this._trigger("reloadend"),this)},element:function(){return this._element},options:function(i,s){if(0===arguments.length)return t.extend({},this._options);if("string"==typeof i){if(s===void 0)return this._options[i]===void 0?null:this._options[i];this._options[i]=s}else this._options=t.extend({},this._options,i);return this},carousel:function(){return this._carousel||(this._carousel=i.detectCarousel(this.options("carousel")||this._element),this._carousel||t.error('Could not detect carousel for plugin "'+s+'"')),this._carousel},_trigger:function(i,e,r){var n,o=!1;return r=[this].concat(r||[]),(e||this._element).each(function(){n=t.Event((s+":"+i).toLowerCase()),t(this).trigger(n,r),n.isDefaultPrevented()&&(o=!0)}),!o}}},i.plugin=function(s,e){var r=t[s]=function(i,s){this._element=t(i),this.options(s),this._init(),this.create()};return r.fn=r.prototype=t.extend({},i.base(s),e),t.fn[s]=function(i){var e=Array.prototype.slice.call(arguments,1),n=this;return"string"==typeof i?this.each(function(){var r=t(this).data(s);if(!r)return t.error("Cannot call methods on "+s+" prior to initialization; "+'attempted to call method "'+i+'"');if(!t.isFunction(r[i])||"_"===i.charAt(0))return t.error('No such method "'+i+'" for '+s+" instance");var o=r[i].apply(r,e);return o!==r&&o!==void 0?(n=o,!1):void 0}):this.each(function(){var e=t(this).data(s);e instanceof r?e.reload(i):new r(this,i)}),n},r}})(jQuery),function(t,i){"use strict";var s=function(t){return parseFloat(t)||0};t.jCarousel.plugin("jcarousel",{animating:!1,tail:0,inTail:!1,resizeTimer:null,lt:null,vertical:!1,rtl:!1,circular:!1,underflow:!1,relative:!1,_options:{list:function(){return this.element().children().eq(0)},items:function(){return this.list().children()},animation:400,transitions:!1,wrap:null,vertical:null,rtl:null,center:!1},_list:null,_items:null,_target:null,_first:null,_last:null,_visible:null,_fullyvisible:null,_init:function(){var t=this;return this.onWindowResize=function(){t.resizeTimer&&clearTimeout(t.resizeTimer),t.resizeTimer=setTimeout(function(){t.reload()},100)},this},_create:function(){this._reload(),t(i).on("resize.jcarousel",this.onWindowResize)},_destroy:function(){t(i).off("resize.jcarousel",this.onWindowResize)},_reload:function(){this.vertical=this.options("vertical"),null==this.vertical&&(this.vertical=this.list().height()>this.list().width()),this.rtl=this.options("rtl"),null==this.rtl&&(this.rtl=function(i){if("rtl"===(""+i.attr("dir")).toLowerCase())return!0;var s=!1;return i.parents("[dir]").each(function(){return/rtl/i.test(t(this).attr("dir"))?(s=!0,!1):void 0}),s}(this._element)),this.lt=this.vertical?"top":"left",this.relative="relative"===this.list().css("position"),this._list=null,this._items=null;var i=this._target&&this.index(this._target)>=0?this._target:this.closest();this.circular="circular"===this.options("wrap"),this.underflow=!1;var s={left:0,top:0};return i.length>0&&(this._prepare(i),this.list().find("[data-jcarousel-clone]").remove(),this._items=null,this.underflow=this._fullyvisible.length>=this.items().length,this.circular=this.circular&&!this.underflow,s[this.lt]=this._position(i)+"px"),this.move(s),this},list:function(){if(null===this._list){var i=this.options("list");this._list=t.isFunction(i)?i.call(this):this._element.find(i)}return this._list},items:function(){if(null===this._items){var i=this.options("items");this._items=(t.isFunction(i)?i.call(this):this.list().find(i)).not("[data-jcarousel-clone]")}return this._items},index:function(t){return this.items().index(t)},closest:function(){var i,e=this,r=this.list().position()[this.lt],n=t(),o=!1,l=this.vertical?"bottom":this.rtl&&!this.relative?"left":"right";return this.rtl&&this.relative&&!this.vertical&&(r+=this.list().width()-this.clipping()),this.items().each(function(){if(n=t(this),o)return!1;var a=e.dimension(n);if(r+=a,r>=0){if(i=a-s(n.css("margin-"+l)),!(0>=Math.abs(r)-a+i/2))return!1;o=!0}}),n},target:function(){return this._target},first:function(){return this._first},last:function(){return this._last},visible:function(){return this._visible},fullyvisible:function(){return this._fullyvisible},hasNext:function(){if(!1===this._trigger("hasnext"))return!0;var t=this.options("wrap"),i=this.items().length-1;return i>=0&&(t&&"first"!==t||i>this.index(this._last)||this.tail&&!this.inTail)?!0:!1},hasPrev:function(){if(!1===this._trigger("hasprev"))return!0;var t=this.options("wrap");return this.items().length>0&&(t&&"last"!==t||this.index(this._first)>0||this.tail&&this.inTail)?!0:!1},clipping:function(){return this._element["inner"+(this.vertical?"Height":"Width")]()},dimension:function(t){return t["outer"+(this.vertical?"Height":"Width")](!0)},scroll:function(i,s,e){if(this.animating)return this;if(!1===this._trigger("scroll",null,[i,s]))return this;t.isFunction(s)&&(e=s,s=!0);var r=t.jCarousel.parseTarget(i);if(r.relative){var n,o,l,a,h,u,c,f,d=this.items().length-1,_=Math.abs(r.target),p=this.options("wrap");if(r.target>0){var v=this.index(this._last);if(v>=d&&this.tail)this.inTail?"both"===p||"last"===p?this._scroll(0,s,e):t.isFunction(e)&&e.call(this,!1):this._scrollTail(s,e);else if(n=this.index(this._target),this.underflow&&n===d&&("circular"===p||"both"===p||"last"===p)||!this.underflow&&v===d&&("both"===p||"last"===p))this._scroll(0,s,e);else if(l=n+_,this.circular&&l>d){for(f=d,h=this.items().get(-1);l>f++;)h=this.items().eq(0),u=this._visible.index(h)>=0,u&&h.after(h.clone(!0).attr("data-jcarousel-clone",!0)),this.list().append(h),u||(c={},c[this.lt]=this.dimension(h),this.moveBy(c)),this._items=null;this._scroll(h,s,e)}else this._scroll(Math.min(l,d),s,e)}else if(this.inTail)this._scroll(Math.max(this.index(this._first)-_+1,0),s,e);else if(o=this.index(this._first),n=this.index(this._target),a=this.underflow?n:o,l=a-_,0>=a&&(this.underflow&&"circular"===p||"both"===p||"first"===p))this._scroll(d,s,e);else if(this.circular&&0>l){for(f=l,h=this.items().get(0);0>f++;){h=this.items().eq(-1),u=this._visible.index(h)>=0,u&&h.after(h.clone(!0).attr("data-jcarousel-clone",!0)),this.list().prepend(h),this._items=null;var g=this.dimension(h);c={},c[this.lt]=-g,this.moveBy(c)}this._scroll(h,s,e)}else this._scroll(Math.max(l,0),s,e)}else this._scroll(r.target,s,e);return this._trigger("scrollend"),this},moveBy:function(t,i){var e=this.list().position(),r=1,n=0;return this.rtl&&!this.vertical&&(r=-1,this.relative&&(n=this.list().width()-this.clipping())),t.left&&(t.left=e.left+n+s(t.left)*r+"px"),t.top&&(t.top=e.top+n+s(t.top)*r+"px"),this.move(t,i)},move:function(i,s){s=s||{};var e=this.options("transitions"),r=!!e,n=!!e.transforms,o=!!e.transforms3d,l=s.duration||0,a=this.list();if(!r&&l>0)return a.animate(i,s),void 0;var h=s.complete||t.noop,u={};if(r){var c=a.css(["transitionDuration","transitionTimingFunction","transitionProperty"]),f=h;h=function(){t(this).css(c),f.call(this)},u={transitionDuration:(l>0?l/1e3:0)+"s",transitionTimingFunction:e.easing||s.easing,transitionProperty:l>0?function(){return n||o?"all":i.left?"left":"top"}():"none",transform:"none"}}o?u.transform="translate3d("+(i.left||0)+","+(i.top||0)+",0)":n?u.transform="translate("+(i.left||0)+","+(i.top||0)+")":t.extend(u,i),r&&l>0&&a.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",h),a.css(u),0>=l&&a.each(function(){h.call(this)})},_scroll:function(i,s,e){if(this.animating)return t.isFunction(e)&&e.call(this,!1),this;if("object"!=typeof i?i=this.items().eq(i):i.jquery===void 0&&(i=t(i)),0===i.length)return t.isFunction(e)&&e.call(this,!1),this;this.inTail=!1,this._prepare(i);var r=this._position(i),n=this.list().position()[this.lt];if(r===n)return t.isFunction(e)&&e.call(this,!1),this;var o={};return o[this.lt]=r+"px",this._animate(o,s,e),this},_scrollTail:function(i,s){if(this.animating||!this.tail)return t.isFunction(s)&&s.call(this,!1),this;var e=this.list().position()[this.lt];this.rtl&&this.relative&&!this.vertical&&(e+=this.list().width()-this.clipping()),this.rtl&&!this.vertical?e+=this.tail:e-=this.tail,this.inTail=!0;var r={};return r[this.lt]=e+"px",this._update({target:this._target.next(),fullyvisible:this._fullyvisible.slice(1).add(this._visible.last())}),this._animate(r,i,s),this},_animate:function(i,s,e){if(e=e||t.noop,!1===this._trigger("animate"))return e.call(this,!1),this;this.animating=!0;var r=this.options("animation"),n=t.proxy(function(){this.animating=!1;var t=this.list().find("[data-jcarousel-clone]");t.length>0&&(t.remove(),this._reload()),this._trigger("animateend"),e.call(this,!0)},this),o="object"==typeof r?t.extend({},r):{duration:r},l=o.complete||t.noop;return s===!1?o.duration=0:t.fx.speeds[o.duration]!==void 0&&(o.duration=t.fx.speeds[o.duration]),o.complete=function(){n(),l.call(this)},this.move(i,o),this},_prepare:function(i){var e,r,n,o,l=this.index(i),a=l,h=this.dimension(i),u=this.clipping(),c=this.vertical?"bottom":this.rtl?"left":"right",f=this.options("center"),d={target:i,first:i,last:i,visible:i,fullyvisible:u>=h?i:t()};if(f&&(h/=2,u/=2),u>h)for(;;){if(e=this.items().eq(++a),0===e.length){if(!this.circular)break;if(e=this.items().eq(0),i.get(0)===e.get(0))break;if(r=this._visible.index(e)>=0,r&&e.after(e.clone(!0).attr("data-jcarousel-clone",!0)),this.list().append(e),!r){var _={};_[this.lt]=this.dimension(e),this.moveBy(_)}this._items=null}if(o=this.dimension(e),0===o)break;if(h+=o,d.last=e,d.visible=d.visible.add(e),n=s(e.css("margin-"+c)),u>=h-n&&(d.fullyvisible=d.fullyvisible.add(e)),h>=u)break}if(!this.circular&&!f&&u>h)for(a=l;;){if(0>--a)break;if(e=this.items().eq(a),0===e.length)break;if(o=this.dimension(e),0===o)break;if(h+=o,d.first=e,d.visible=d.visible.add(e),n=s(e.css("margin-"+c)),u>=h-n&&(d.fullyvisible=d.fullyvisible.add(e)),h>=u)break}return this._update(d),this.tail=0,f||"circular"===this.options("wrap")||"custom"===this.options("wrap")||this.index(d.last)!==this.items().length-1||(h-=s(d.last.css("margin-"+c)),h>u&&(this.tail=h-u)),this},_position:function(t){var i=this._first,s=i.position()[this.lt],e=this.options("center"),r=e?this.clipping()/2-this.dimension(i)/2:0;return this.rtl&&!this.vertical?(s-=this.relative?this.list().width()-this.dimension(i):this.clipping()-this.dimension(i),s+=r):s-=r,!e&&(this.index(t)>this.index(i)||this.inTail)&&this.tail?(s=this.rtl&&!this.vertical?s-this.tail:s+this.tail,this.inTail=!0):this.inTail=!1,-s},_update:function(i){var s,e=this,r={target:this._target||t(),first:this._first||t(),last:this._last||t(),visible:this._visible||t(),fullyvisible:this._fullyvisible||t()},n=this.index(i.first||r.first)<this.index(r.first),o=function(s){var o=[],l=[];i[s].each(function(){0>r[s].index(this)&&o.push(this)}),r[s].each(function(){0>i[s].index(this)&&l.push(this)}),n?o=o.reverse():l=l.reverse(),e._trigger(s+"in",t(o)),e._trigger(s+"out",t(l)),e["_"+s]=i[s]};for(s in i)o(s);return this}})}(jQuery,window),function(t){"use strict";t.jcarousel.fn.scrollIntoView=function(i,s,e){var r,n=t.jCarousel.parseTarget(i),o=this.index(this._fullyvisible.first()),l=this.index(this._fullyvisible.last());if(r=n.relative?0>n.target?Math.max(0,o+n.target):l+n.target:"object"!=typeof n.target?n.target:this.index(n.target),o>r)return this.scroll(r,s,e);if(r>=o&&l>=r)return t.isFunction(e)&&e.call(this,!1),this;for(var a,h=this.items(),u=this.clipping(),c=this.vertical?"bottom":this.rtl?"left":"right",f=0;;){if(a=h.eq(r),0===a.length)break;if(f+=this.dimension(a),f>=u){var d=parseFloat(a.css("margin-"+c))||0;f-d!==u&&r++;break}if(0>=r)break;r--}return this.scroll(r,s,e)}}(jQuery),function(t){"use strict";t.jCarousel.plugin("jcarouselControl",{_options:{target:"+=1",event:"click",method:"scroll"},_active:null,_init:function(){this.onDestroy=t.proxy(function(){this._destroy(),this.carousel().one("jcarousel:createend",t.proxy(this._create,this))},this),this.onReload=t.proxy(this._reload,this),this.onEvent=t.proxy(function(i){i.preventDefault();var s=this.options("method");t.isFunction(s)?s.call(this):this.carousel().jcarousel(this.options("method"),this.options("target"))},this)},_create:function(){this.carousel().one("jcarousel:destroy",this.onDestroy).on("jcarousel:reloadend jcarousel:scrollend",this.onReload),this._element.on(this.options("event")+".jcarouselcontrol",this.onEvent),this._reload()},_destroy:function(){this._element.off(".jcarouselcontrol",this.onEvent),this.carousel().off("jcarousel:destroy",this.onDestroy).off("jcarousel:reloadend jcarousel:scrollend",this.onReload)},_reload:function(){var i,s=t.jCarousel.parseTarget(this.options("target")),e=this.carousel();if(s.relative)i=e.jcarousel(s.target>0?"hasNext":"hasPrev");else{var r="object"!=typeof s.target?e.jcarousel("items").eq(s.target):s.target;i=e.jcarousel("target").index(r)>=0}return this._active!==i&&(this._trigger(i?"active":"inactive"),this._active=i),this}})}(jQuery),function(t){"use strict";t.jCarousel.plugin("jcarouselPagination",{_options:{perPage:null,item:function(t){return'<a href="#'+t+'">'+t+"</a>"},event:"click",method:"scroll"},_pages:{},_items:{},_currentPage:null,_init:function(){this.onDestroy=t.proxy(function(){this._destroy(),this.carousel().one("jcarousel:createend",t.proxy(this._create,this))},this),this.onReload=t.proxy(this._reload,this),this.onScroll=t.proxy(this._update,this)},_create:function(){this.carousel().one("jcarousel:destroy",this.onDestroy).on("jcarousel:reloadend",this.onReload).on("jcarousel:scrollend",this.onScroll),this._reload()},_destroy:function(){this._clear(),this.carousel().off("jcarousel:destroy",this.onDestroy).off("jcarousel:reloadend",this.onReload).off("jcarousel:scrollend",this.onScroll)},_reload:function(){var i=this.options("perPage");if(this._pages={},this._items={},t.isFunction(i)&&(i=i.call(this)),null==i)this._pages=this._calculatePages();else for(var s,e=parseInt(i,10)||0,r=this.carousel().jcarousel("items"),n=1,o=0;;){if(s=r.eq(o++),0===s.length)break;this._pages[n]=this._pages[n]?this._pages[n].add(s):s,0===o%e&&n++}this._clear();var l=this,a=this.carousel().data("jcarousel"),h=this._element,u=this.options("item");t.each(this._pages,function(i,s){var e=l._items[i]=t(u.call(l,i,s));e.on(l.options("event")+".jcarouselpagination",t.proxy(function(){var t=s.eq(0);if(a.circular){var e=a.index(a.target()),r=a.index(t);parseFloat(i)>parseFloat(l._currentPage)?e>r&&(t="+="+(a.items().length-e+r)):r>e&&(t="-="+(e+(a.items().length-r)))}a[this.options("method")](t)},l)),h.append(e)}),this._update()},_update:function(){var i,s=this.carousel().jcarousel("target");t.each(this._pages,function(t,e){return e.each(function(){return s.is(this)?(i=t,!1):void 0}),i?!1:void 0}),this._currentPage!==i&&(this._trigger("inactive",this._items[this._currentPage]),this._trigger("active",this._items[i])),this._currentPage=i},items:function(){return this._items},_clear:function(){this._element.empty(),this._currentPage=null},_calculatePages:function(){for(var t,i=this.carousel().data("jcarousel"),s=i.items(),e=i.clipping(),r=0,n=0,o=1,l={};;){if(t=s.eq(n++),0===t.length)break;l[o]=l[o]?l[o].add(t):t,r+=i.dimension(t),r>=e&&(o++,r=0)}return l}})}(jQuery),function(t){"use strict";t.jCarousel.plugin("jcarouselAutoscroll",{_options:{target:"+=1",interval:3e3,autostart:!0},_timer:null,_init:function(){this.onDestroy=t.proxy(function(){this._destroy(),this.carousel().one("jcarousel:createend",t.proxy(this._create,this))},this),this.onAnimateEnd=t.proxy(this.start,this)},_create:function(){this.carousel().one("jcarousel:destroy",this.onDestroy),this.options("autostart")&&this.start()},_destroy:function(){this.stop(),this.carousel().off("jcarousel:destroy",this.onDestroy)},start:function(){return this.stop(),this.carousel().one("jcarousel:animateend",this.onAnimateEnd),this._timer=setTimeout(t.proxy(function(){this.carousel().jcarousel("scroll",this.options("target"))},this),this.options("interval")),this},stop:function(){return this._timer&&(this._timer=clearTimeout(this._timer)),this.carousel().off("jcarousel:animateend",this.onAnimateEnd),this}})}(jQuery);

/*! scripts.js */
var currency;$(function(){$('select#from').val('EUR');if(typeof currency!=='undefined'){$('input#rezultat').val('1 EUR = '+currency.EUR+' RON');$("#suma").keyup(function(){var suma=parseInt($('#suma').val());if(isNaN(suma)){suma=1;}else{suma=Math.abs(parseInt($('#suma').val()));}
var rezultat=(suma*(currency[$('select#from').val()]/ currency[$('select#to').val()])).toFixed(2);$('input#rezultat').val(suma+' '+$('select#from').val()+' = '+rezultat+' '+$('select#to').val());});$("select#from").change(function(){var suma=parseInt($('#suma').val());if(isNaN(suma)){suma=1;}else{suma=Math.abs(parseInt($('#suma').val()));}
var rezultat=(suma*(currency[$('select#from').val()]/ currency[$('select#to').val()])).toFixed(2);$('input#rezultat').val(suma+' '+$('select#from').val()+' = '+rezultat+' '+$('select#to').val());});$("select#to").change(function(){var suma=parseInt($('#suma').val());if(isNaN(suma)){suma=1;}else{suma=Math.abs(parseInt($('#suma').val()));}
var rezultat=(suma*(currency[$('select#from').val()]/ currency[$('select#to').val()])).toFixed(2);$('input#rezultat').val(suma+' '+$('select#from').val()+' = '+rezultat+' '+$('select#to').val());});}
original_report_form=$('#commReportContainer').html();/*$('.jcarousel').jcarousel();$('.jcarousel').jcarouselAutoscroll({autostart: true});$('.jcarousel').jcarouselAutoscroll({interval: 20000});$('.jcarousel').jcarouselAutoscroll({target: '+=6'});$('.jcarousel').jcarousel({wrap: 'circular'});$('.jcarousel').on('jcarousel:animate', function(event, carousel) { firstjc += 6; if (firstjc == 19) firstjc = 1; lastjc = firstjc + 5; $(".intervcar").html(firstjc + ' - ' + lastjc)});$('.candidati-carousel').jcarousel();$('.jcarousel-control-prev').click(function(){$('.jcarousel').jcarousel('scroll','-=6');return false;});$('.jcarousel-control-next').click(function(){$('.jcarousel').jcarousel('scroll','+=6');return false;});$('.prev-carousel-item').click(function(){$('.candidati-carousel').jcarousel('scroll','-=6');return false;});$('.next-carousel-item').click(function(){$('.candidati-carousel').jcarousel('scroll','+=6');return false;});*/

    $('.jcarousel').jcarousel();$('.jcarousel').jcarouselAutoscroll({autostart: true});$('.jcarousel').jcarouselAutoscroll({interval: 10000});$('.jcarousel').jcarouselAutoscroll({target: '+=1'});$('.jcarousel').jcarousel({wrap: 'circular'});$('.jcarousel').on('jcarousel:animate', function(event, carousel) { firstjc += 1; if (firstjc == 13) firstjc = 1; lastjc = firstjc + 5; $(".intervcar").html(firstjc + ' - ' + lastjc)});$('.jcarousel-control-prev').on('jcarouselcontrol:active',function(){$(this).removeClass('inactive');}).on('jcarouselcontrol:inactive',function(){$(this).addClass('inactive');}).jcarouselControl({target:'-=1'});$('.jcarousel-control-next').on('jcarouselcontrol:active',function(){$(this).removeClass('inactive');}).on('jcarouselcontrol:inactive',function(){$(this).addClass('inactive');}).jcarouselControl({target:'+=1'});});
    
    if($('.sub-menu').width()>910){var li=$('.sub-menu li.active').length>0?$('.sub-menu li.active'):$('.sub-menu li').eq(0);if(910-li.position().left>li.width()){$('.sub-menu li').eq(0).addClass('firstVisible');$('.sub-menu').css('left',-$('.sub-menu li.firstVisible').position().left);$('.next-menu-item').addClass('active');}else{for(var i=0;i<$('.sub-menu li').length;i++){var item=$('.sub-menu li').eq(i);var px=item.position().left;var ulwidth=$('.sub-menu').width();if(ulwidth-px<=910){$('.sub-menu').css('left',-px);item.addClass('firstVisible');break;}}
$('.prev-menu-item').addClass('active');}}
$('.prev-menu-item').click(function(){if($(this).hasClass('active')&&!$('.sub-menu').hasClass('animate')){var prevItem=$('.sub-menu li.firstVisible').prev();if(prevItem.length>0){$('.sub-menu li').removeClass('firstVisible');prevItem.addClass('firstVisible')
var px=prevItem.position().left;$('.sub-menu').animate({'left':-px},function(){var ulpos=Math.abs(parseInt($('.sub-menu').css('left')));var ulwidth=$('.sub-menu').width();if(ulwidth-ulpos>910){$('.next-menu-item').addClass('active');}
if(prevItem.index()==0)$('.prev-menu-item').removeClass('active');$('.sub-menu').removeClass('animate');});$('.sub-menu').addClass('animate');}}});$('.next-menu-item').click(function(){if($(this).hasClass('active')&&!$('.sub-menu').hasClass('animate')){var nextItem=$('.sub-menu li.firstVisible').next();$('.sub-menu li').removeClass('firstVisible');nextItem.addClass('firstVisible')
var px=nextItem.position().left;$('.sub-menu').animate({'left':-px},function(){var ulpos=Math.abs(parseInt($('.sub-menu').css('left')));var ulwidth=$('.sub-menu').width();if(ulwidth-ulpos<=910){$('.next-menu-item').removeClass('active');}
$('.sub-menu').removeClass('animate');});$('.sub-menu').addClass('animate');}
$('.prev-menu-item').addClass('active');});function showImageFlip(){$('.flippBox .back').html('').css('background','#000000');setTimeout(function(){$('.flippBox').removeClass('flip');setTimeout(function(){$('.flippBox .back').remove();},500);},300);}
function switchTabs(name){$('#topmenu a').removeClass('active');$('#lnk-'+name).addClass('active');$('.stiri').css('display','none');$('#id-'+name).css('display','block');}
function switchTabs10(name){$('#topmenu10 a').removeClass('active');$('#lnk-'+name+'10').addClass('active');$('.stiri10').css('display','none');$('#id-'+name+'10').css('display','block');}
function regleaza(){myprod=0;for(k=0;k<document.ccpay.prod.length;k++){if(document.ccpay.prod[k].checked)
myprod=document.ccpay.prod[k].value;}
document.ccpay.PRODS.value=myprod;mylink="../https@secure.epayment.ro/order/checkout.php@QTY="+document.ccpay.qty.value+"&PRODS="+myprod+"&INFO="+myprod;document.location=mylink;}


function showPopup(elem_id){
	$('.popup').css("height",$(document).height()+'px').fadeIn();
	$.ajax({
		url:ROOT+elem_id+'.php?v=1',
		type:'GET',
		cache:false,
		dataType:'html',
		error:function(e){
			$('.popup').fadeOut();
			alert('A aparut o eroare, va rugam reincercati.');},
		success:function(response){
			$('.popup').html(response);
			//alert(response);
			//response.appendTo("body");
			$('.popup').fadeIn();
			}
		});
			$("html, body").animate({scrollTop:0},"slow");
}


function closePopup(){$('.popup').html('');$('.popup').fadeOut();}
function submitAbonareMPOP(){$.ajax({url:ROOT+'ab_mpop.php',type:'POST',cache:false,dataType:'json',data:$('#mpopFrm').serialize(),error:function(e){},success:function(response){$('#errormsg').html(response.error_msg);$('#errormsg').show();$("html, body").animate({scrollTop:0},"slow");}});}
function fbLogin(){FB.login(function(response){if(response.authResponse){var auth=response.authResponse;FB.api('me@fields=id,name,email',function(response){$('#nume').val(response.name);$('#nume').attr('readonly','readonly');if(response.hasOwnProperty("email")&&response.email!=""){$('#email').val(response.email);$('#email').attr('readonly','readonly');}
$('#fbid').val(response.id);});}else{}},{scope:'email'});}
function getCalendarMonth(a,n){$.ajax({type:"GET",url:ROOT+"dynamic/ajax_calendar.php",data:"month="+a+"&year="+n,cache:!1,error:function(){},success:function(a){a&&$("#calendar").html(a)}})}
/** comments-scripts.min.js*/
var original_comment_form='';var original_report_form='';(function($){$.fn.extend({limiter:function(limit,elem){$(this).on("keyup focus",function(){setCount(this,elem);});function setCount(src,elem){var chars=src.value.length;if(chars>limit){src.value=src.value.substr(0,limit);chars=limit;}
elem.html(limit-chars);}
setCount($(this)[0],elem);}});})(jQuery);function listComments(article_id,article_year){$.ajax({url:ROOT+'dynamic/ajax_comments_list.php',type:'GET',cache:false,dataType:'json',data:'id='+article_id+'&year='+article_year,error:function(e){},success:function(response){$('#commentsContainer_'+article_id).html(response.html);}});}
function voteComment(type,comment_id,article_year){if(!checkVotedCookie(comment_id)){$.ajax({url:ROOT+'dynamic/ajax_comments_action.php',type:'POST',cache:false,dataType:'json',data:'type='+type+'&comment_id='+comment_id+'&year='+article_year+'&action=vote',error:function(e){},success:function(response){if(response.valid){if(type=='like'){$('#vt'+comment_id).text(parseInt($('#vt'+comment_id).text())+1);$('#vt'+comment_id).attr('href','');$('#vt'+comment_id).attr('onclick','return false;').unbind('click');$('#vt'+comment_id).addClass('voted');}else{$('#vtun'+comment_id).text(parseInt($('#vtun'+comment_id).text())+1);$('#vtun'+comment_id).attr('href','');$('#vtun'+comment_id).attr('onclick','return false;').unbind('click');$('#vtun'+comment_id).addClass('voted');}}else{if(type=='like'){$('#vt'+comment_id).attr('href','');$('#vt'+comment_id).attr('onclick','return false;').unbind('click');$('#vt'+comment_id).addClass('voted');}else{$('#vtun'+comment_id).attr('href','');$('#vtun'+comment_id).attr('onclick','return false;').unbind('click');$('#vtun'+comment_id).addClass('voted');}
alert('Ai mai votat acest comentariu.');}}});}else{alert('Ai mai votat acest comentariu.');}}
function showAnswerForm(comment_id){var html='<div class="box-addComm" id="frm'+comment_id+'">'+original_comment_form+'</div>';$('#comment'+comment_id).append(html);$('#commFrm').prepend('<input type="hidden" name="parent_id" value="'+comment_id+'" />');$('#frmTitle').html('LASA UN RASPUNS <a href="#" onclick="closeAnswerForm('+comment_id+'); return false;">(inchide)</a>');$('#commFrmContainer').remove();$("#mesaj").limiter(1000,$('#chars'));$('#captcha').realperson();}
function closeAnswerForm(comment_id){var html='<div class="box-addComm" id="commFrmContainer">'+original_comment_form+'</div>';$(html).insertAfter('#commentsContainer');$('#frm'+comment_id).remove();$('#captcha').realperson();}
function showReportForm(comment_id){var html='<div class="box-addComm" id="rapFrm'+comment_id+'">'+original_report_form+'</div>';$('#comment'+comment_id).append(html);$('#commReportFrm').prepend('<input type="hidden" name="comment_id" value="'+comment_id+'" />');$('#rapTitle').html('RAPORTEAZA COMENTARIUL <a href="#" onclick="closeReportForm('+comment_id+'); return false;">(inchide)</a>');$('#commReportContainer').remove();}
function closeReportForm(comment_id){$('#rapFrm'+comment_id).remove();}

function addComment(article_id){$('input, textarea').removeClass('error');$('#captcha').removeClass('error');$('#commBtn').attr('disabled','disabled');$.ajax({url:ROOT+'dynamic/ajax_comments_action.php',type:'POST',cache:false,dataType:'json',data:$('#commFrm').serialize(),error:function(e){alert('A aparut o eroare, va rugam sa reincercati.');},success:function(response){$('#commBtn').removeAttr('disabled');if(!response.valid){$.each(response.errors,function(key,value){$('#'+value).addClass('error');});}else{if(response.displaycomment){$('#message').html('Comentariul tau a fost adaugat.');listComments(article_id,$('#article_year').val());}else{$('#message').html('Comentariul tau va fi afisat dupa ce va fi aprobat de un editor.');}
$('#captcha').realperson('destroy');$('#captcha').realperson();$('#commFrm')[0].reset();$('#message').show();}}});}




    function storepartener(partener) {
        ga('send', 'event', 'partener_trimis', 'trimis', partener, {
            'transport': 'beacon'
        });
        $.ajax({
            url: ROOT+'dynamic/store_partener.php?part='+partener,
            data: {format: 'html'},
            type: 'GET'
        });
    }






function reportComment(){$('input, textarea').removeClass('error');$.ajax({url:ROOT+'dynamic/ajax_comments_action.php',type:'POST',cache:false,dataType:'json',data:$('#commReportFrm').serialize(),error:function(e){},success:function(response){if(!response.valid){$.each(response.errors,function(key,value){$('#'+value).addClass('error');});}else{$('#message').html('Multumim pentru raportare.');$('#message').show();}}});}





function getCSRF(){original_comment_form=$('#commFrmContainer').html();}
function getTsCheck(){$.ajax({url:ROOT+'dynamic/ajax_comments_action.php',type:'POST',cache:false,dataType:'json',data:'action=tscheck',error:function(e){},success:function(response){$('#tscheck').val(response.tscheck);}});}
function showRecaptcha(element){Recaptcha.create("6LcFVPUSAAAAALMcSDwApWixyLCPoIM8PBEuRan-",element,{theme:"clean"});} 
function scrollToID(id){$('html, body').animate({scrollTop:$("#"+id).offset().top, behavior: 'smooth'},700);}
function checkVotedCookie(comment_id){if($.cookie('vote_'+comment_id)=='1'){return true;}
return false;}

/* http://keith-wood.name/realPerson.html
   Real Person Form Submission for jQuery v1.1.1.
   Written by Keith Wood (kwood{at}iinet.com.au) June 2009.
   Available under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license. 
   Please attribute the author if you use it. */

(function($) { // Hide scope, no $ conflict

/* Real person manager. */
function RealPerson() {
	this._defaults = {
		length: 6, // Number of characters to use
		includeNumbers: false, // True to use numbers as well as letters
		regenerate: 'Click pentru a schimba', // Instruction text to regenerate
		hashName: '{n}Hash' // Name of the hash value field to compare with,
			// use {n} to substitute with the original field name
	};
}

var CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var DOTS = [
	['   *   ', '  * *  ', '  * *  ', ' *   * ', ' ***** ', '*     *', '*     *'],
	['****** ', '*     *', '*     *', '****** ', '*     *', '*     *', '****** '],
	[' ***** ', '*     *', '*      ', '*      ', '*      ', '*     *', ' ***** '],
	['****** ', '*     *', '*     *', '*     *', '*     *', '*     *', '****** '],
	['*******', '*      ', '*      ', '****   ', '*      ', '*      ', '*******'],
	['*******', '*      ', '*      ', '****   ', '*      ', '*      ', '*      '],
	[' ***** ', '*     *', '*      ', '*      ', '*   ***', '*     *', ' ***** '],
	['*     *', '*     *', '*     *', '*******', '*     *', '*     *', '*     *'],
	['*******', '   *   ', '   *   ', '   *   ', '   *   ', '   *   ', '*******'],
	['      *', '      *', '      *', '      *', '      *', '*     *', ' ***** '],
	['*     *', '*   ** ', '* **   ', '**     ', '* **   ', '*   ** ', '*     *'],
	['*      ', '*      ', '*      ', '*      ', '*      ', '*      ', '*******'],
	['*     *', '**   **', '* * * *', '*  *  *', '*     *', '*     *', '*     *'],
	['*     *', '**    *', '* *   *', '*  *  *', '*   * *', '*    **', '*     *'],
	[' ***** ', '*     *', '*     *', '*     *', '*     *', '*     *', ' ***** '],
	['****** ', '*     *', '*     *', '****** ', '*      ', '*      ', '*      '],
	[' ***** ', '*     *', '*     *', '*     *', '*   * *', '*    * ', ' **** *'],
	['****** ', '*     *', '*     *', '****** ', '*   *  ', '*    * ', '*     *'],
	[' ***** ', '*     *', '*      ', ' ***** ', '      *', '*     *', ' ***** '],
	['*******', '   *   ', '   *   ', '   *   ', '   *   ', '   *   ', '   *   '],
	['*     *', '*     *', '*     *', '*     *', '*     *', '*     *', ' ***** '],
	['*     *', '*     *', ' *   * ', ' *   * ', '  * *  ', '  * *  ', '   *   '],
	['*     *', '*     *', '*     *', '*  *  *', '* * * *', '**   **', '*     *'],
	['*     *', ' *   * ', '  * *  ', '   *   ', '  * *  ', ' *   * ', '*     *'],
	['*     *', ' *   * ', '  * *  ', '   *   ', '   *   ', '   *   ', '   *   '],
	['*******', '     * ', '    *  ', '   *   ', '  *    ', ' *     ', '*******'],
	['  ***  ', ' *   * ', '*   * *', '*  *  *', '* *   *', ' *   * ', '  ***  '],
	['   *   ', '  **   ', ' * *   ', '   *   ', '   *   ', '   *   ', '*******'],
	[' ***** ', '*     *', '      *', '     * ', '   **  ', ' **    ', '*******'],
	[' ***** ', '*     *', '      *', '    ** ', '      *', '*     *', ' ***** '],
	['    *  ', '   **  ', '  * *  ', ' *  *  ', '*******', '    *  ', '    *  '],
	['*******', '*      ', '****** ', '      *', '      *', '*     *', ' ***** '],
	['  **** ', ' *     ', '*      ', '****** ', '*     *', '*     *', ' ***** '],
	['*******', '     * ', '    *  ', '   *   ', '  *    ', ' *     ', '*      '],
	[' ***** ', '*     *', '*     *', ' ***** ', '*     *', '*     *', ' ***** '],
	[' ***** ', '*     *', '*     *', ' ******', '      *', '     * ', ' ****  ']];

$.extend(RealPerson.prototype, {
	/* Class name added to elements to indicate already configured with real person. */
	markerClassName: 'hasRealPerson',
	/* Name of the data property for instance settings. */
	propertyName: 'realperson',

	/* Override the default settings for all real person instances.
	   @param  options  (object) the new settings to use as defaults
	   @return  (RealPerson) this object */
	setDefaults: function(options) {
		$.extend(this._defaults, options || {});
		return this;
	},

	/* Attach the real person functionality to an input field.
	   @param  target   (element) the control to affect
	   @param  options  (object) the custom options for this instance */
	_attachPlugin: function(target, options) {
		target = $(target);
		if (target.hasClass(this.markerClassName)) {
			return;
		}
		var inst = {options: $.extend({}, this._defaults)};
		target.addClass(this.markerClassName).data(this.propertyName, inst);
		this._optionPlugin(target, options);
	},

	/* Retrieve or reconfigure the settings for a control.
	   @param  target   (element) the control to affect
	   @param  options  (object) the new options for this instance or
	                    (string) an individual property name
	   @param  value    (any) the individual property value (omit if options
	                    is an object or to retrieve the value of a setting)
	   @return  (any) if retrieving a value */
	_optionPlugin: function(target, options, value) {
		target = $(target);
		var inst = target.data(this.propertyName);
		if (!options || (typeof options == 'string' && value == null)) { // Get option
			var name = options;
			options = (inst || {}).options;
			return (options && name ? options[name] : options);
		}

		if (!target.hasClass(this.markerClassName)) {
			return;
		}
		options = options || {};
		if (typeof options == 'string') {
			var name = options;
			options = {};
			options[name] = value;
		}
		$.extend(inst.options, options);
		target.prevAll('.' + this.propertyName + '-challenge,.' + this.propertyName + '-hash').
			remove().end().before(this._generateHTML(target, inst));
	},

	/* Generate the additional content for this control.
	   @param  target  (jQuery) the input field
	   @param  inst    (object) the current instance settings
	   @return  (string) the additional content */
	_generateHTML: function(target, inst) {
		var text = '';
		for (var i = 0; i < inst.options.length; i++) {
			text += CHARS.charAt(Math.floor(Math.random() *
				(inst.options.includeNumbers ? 36 : 26)));
		}
		var html = '<div class="' + this.propertyName + '-challenge">' +
			'<div class="' + this.propertyName + '-text">';
		for (var i = 0; i < DOTS[0].length; i++) {
			for (var j = 0; j < text.length; j++) {
				html += DOTS[CHARS.indexOf(text.charAt(j))][i].replace(/ /g, '&nbsp;') +
					'&nbsp;&nbsp;';
			}
			html += '<br>';
		}
		html += '</div><div class="' + this.propertyName + '-regen">' + inst.options.regenerate +
			'</div></div><input type="hidden" class="' + this.propertyName + '-hash" name="' +
			inst.options.hashName.replace(/\{n\}/, target.attr('name')) +
			'" value="' + this._hash(text) + '">';
		return html;
	},

	/* Enable the plugin functionality for a control.
	   @param  target  (element) the control to affect */
	_enablePlugin: function(target) {
		target = $(target);
		if (!target.hasClass(this.markerClassName)) {
			return;
		}
		target.removeClass(this.propertyName + '-disabled').prop('disabled', false).
			prevAll('.' + this.propertyName + '-challenge').removeClass(this.propertyName + '-disabled');
	},

	/* Disable the plugin functionality for a control.
	   @param  target  (element) the control to affect */
	_disablePlugin: function(target) {
		target = $(target);
		if (!target.hasClass(this.markerClassName)) {
			return;
		}
		target.addClass(this.propertyName + '-disabled').prop('disabled', true).
			prevAll('.' + this.propertyName + '-challenge').addClass(this.propertyName + '-disabled');
	},

	/* Remove the plugin functionality from a control.
	   @param  target  (element) the control to affect */
	_destroyPlugin: function(target) {
		target = $(target);
		if (!target.hasClass(this.markerClassName)) {
			return;
		}
		target.removeClass(this.markerClassName).
			removeData(this.propertyName).
			prevAll('.' + this.propertyName + '-challenge,.' + this.propertyName + '-hash').remove();
	},

	/* Compute a hash value for the given text.
	   @param  value  (string) the text to hash
	   @return  the corresponding hash value */
	_hash: function(value) {
		var hash = 5381;
		for (var i = 0; i < value.length; i++) {
			hash = ((hash << 5) + hash) + value.charCodeAt(i);
		}
		return hash;
	}
});

// The list of commands that return values and don't permit chaining
var getters = [''];

/* Determine whether a command is a getter and doesn't permit chaining.
   @param  command    (string, optional) the command to run
   @param  otherArgs  ([], optional) any other arguments for the command
   @return  true if the command is a getter, false if not */
function isNotChained(command, otherArgs) {
	if (command == 'option' && (otherArgs.length == 0 ||
			(otherArgs.length == 1 && typeof otherArgs[0] == 'string'))) {
		return true;
	}
	return $.inArray(command, getters) > -1;
}

/* Attach the real person functionality to a jQuery selection.
   @param  options  (object) the new settings to use for these instances (optional) or
                    (string) the command to run (optional)
   @return  (jQuery) for chaining further calls or
            (any) getter value */
$.fn.realperson = function(options) {
	var otherArgs = Array.prototype.slice.call(arguments, 1);
	if (isNotChained(options, otherArgs)) {
		return plugin['_' + options + 'Plugin'].apply(plugin, [this[0]].concat(otherArgs));
	}
	return this.each(function() {
		if (typeof options == 'string') {
			if (!plugin['_' + options + 'Plugin']) {
				throw 'Unknown command: ' + options;
			}
			plugin['_' + options + 'Plugin'].apply(plugin, [this].concat(otherArgs));
		}
		else {
			plugin._attachPlugin(this, options || {});
		}
	});
};

/* Initialise the real person functionality. */
var plugin = $.realperson = new RealPerson(); // Singleton instance

$(document).on('click', 'div.' + plugin.propertyName + '-challenge', function() {
	if (!$(this).hasClass(plugin.propertyName + '-disabled')) {
		$(this).nextAll('.' + plugin.markerClassName).realperson('option', {});
	}
});

})(jQuery);
