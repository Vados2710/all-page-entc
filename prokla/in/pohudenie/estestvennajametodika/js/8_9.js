!function(R){var Z={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0}};R.fn.bxSlider=function(e){if(0===this.length)return this;if(1<this.length)return this.each(function(){R(this).bxSlider(e)}),this;var d={},c=this,s=R(window).width(),o=R(window).height();if(!R(c).data("bxSlider")){function n(){R(c).data("bxSlider")||(d.settings=R.extend({},Z,e),d.settings.slideWidth=parseInt(d.settings.slideWidth),d.children=c.children(d.settings.slideSelector),d.children.length<d.settings.minSlides&&(d.settings.minSlides=d.children.length),d.children.length<d.settings.maxSlides&&(d.settings.maxSlides=d.children.length),d.settings.randomStart&&(d.settings.startSlide=Math.floor(Math.random()*d.children.length)),d.active={index:d.settings.startSlide},d.carousel=1<d.settings.minSlides||1<d.settings.maxSlides,d.carousel&&(d.settings.preloadImages="all"),d.minThreshold=d.settings.minSlides*d.settings.slideWidth+(d.settings.minSlides-1)*d.settings.slideMargin,d.maxThreshold=d.settings.maxSlides*d.settings.slideWidth+(d.settings.maxSlides-1)*d.settings.slideMargin,d.working=!1,d.controls={},d.interval=null,d.animProp="vertical"===d.settings.mode?"top":"left",d.usingCSS=d.settings.useCSS&&"fade"!==d.settings.mode&&function(){for(var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],i=0;i<e.length;i++)if(void 0!==t.style[e[i]])return d.cssPrefix=e[i].replace("Perspective","").toLowerCase(),d.animProp="-"+d.cssPrefix+"-transform",!0;return!1}(),"vertical"===d.settings.mode&&(d.settings.maxSlides=d.settings.minSlides),c.data("origStyle",c.attr("style")),c.children(d.settings.slideSelector).each(function(){R(this).data("origStyle",R(this).attr("style"))}),a())}function r(){var t,e=1;return"horizontal"===d.settings.mode&&0<d.settings.slideWidth?e=d.viewport.width()<d.minThreshold?d.settings.minSlides:d.viewport.width()>d.maxThreshold?d.settings.maxSlides:(t=d.children.first().width()+d.settings.slideMargin,Math.floor((d.viewport.width()+d.settings.slideMargin)/t)):"vertical"===d.settings.mode&&(e=d.settings.minSlides),e}function t(){for(var t="",e="",i=f(),n=0;n<i;n++)e="",d.settings.buildPager&&R.isFunction(d.settings.buildPager)||d.settings.pagerCustom?(e=d.settings.buildPager(n),d.pagerEl.addClass("bx-custom-pager")):(e=n+1,d.pagerEl.addClass("bx-default-pager")),t+='<div class="bx-pager-item"><a href="" data-slide-index="'+n+'" class="bx-pager-link">'+e+"</a></div>";d.pagerEl.html(t)}function l(t){var e=r();d.settings.ariaHidden&&!d.settings.ticker&&(d.children.attr("aria-hidden","true"),d.children.slice(t,t+e).attr("aria-hidden","false"))}var a=function(){var t=d.children.eq(d.settings.startSlide);c.wrap('<div class="'+d.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),d.viewport=c.parent(),d.settings.ariaLive&&!d.settings.ticker&&d.viewport.attr("aria-live","polite"),d.loader=R('<div class="bx-loading" />'),d.viewport.prepend(d.loader),c.css({width:"horizontal"===d.settings.mode?1e3*d.children.length+215+"%":"auto",position:"relative"}),d.usingCSS&&d.settings.easing?c.css("-"+d.cssPrefix+"-transition-timing-function",d.settings.easing):d.settings.easing||(d.settings.easing="swing"),d.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),d.viewport.parent().css({maxWidth:u()}),d.children.css({float:"horizontal"===d.settings.mode?"left":"none",listStyle:"none",position:"relative"}),d.children.css("width",v()),"horizontal"===d.settings.mode&&0<d.settings.slideMargin&&d.children.css("marginRight",d.settings.slideMargin),"vertical"===d.settings.mode&&0<d.settings.slideMargin&&d.children.css("marginBottom",d.settings.slideMargin),"fade"===d.settings.mode&&(d.children.css({position:"absolute",zIndex:0,display:"none"}),d.children.eq(d.settings.startSlide).css({zIndex:d.settings.slideZIndex,display:"block"})),d.controls.el=R('<div class="bx-controls" />'),d.settings.captions&&T(),d.active.last=d.settings.startSlide===f()-1,d.settings.video&&c.fitVids(),"all"!==d.settings.preloadImages&&!d.settings.ticker||(t=d.children),d.settings.ticker?d.settings.pager=!1:(d.settings.controls&&w(),d.settings.auto&&d.settings.autoControls&&C(),d.settings.pager&&b(),(d.settings.controls||d.settings.autoControls||d.settings.pager)&&d.viewport.after(d.controls.el)),g(t,p)},g=function(t,e){var i=t.find('img:not([src=""]), iframe').length,n=0;return 0===i?void e():void t.find('img:not([src=""]), iframe').each(function(){R(this).one("load error",function(){++n===i&&e()}).each(function(){this.complete&&R(this).trigger("load")})})},p=function(){var t,e;d.settings.infiniteLoop&&"fade"!==d.settings.mode&&!d.settings.ticker&&(e="vertical"===d.settings.mode?d.settings.minSlides:d.settings.maxSlides,t=d.children.slice(0,e).clone(!0).addClass("bx-clone"),e=d.children.slice(-e).clone(!0).addClass("bx-clone"),d.settings.ariaHidden&&(t.attr("aria-hidden",!0),e.attr("aria-hidden",!0)),c.append(t).prepend(e)),d.loader.remove(),m(),"vertical"===d.settings.mode&&(d.settings.adaptiveHeight=!0),d.viewport.height(h()),c.redrawSlider(),d.settings.onSliderLoad.call(c,d.active.index),d.initialized=!0,d.settings.responsive&&R(window).bind("resize",V),d.settings.auto&&d.settings.autoStart&&(1<f()||d.settings.autoSlideForOnePage)&&H(),d.settings.ticker&&D(),d.settings.pager&&z(d.settings.startSlide),d.settings.controls&&A(),d.settings.touchEnabled&&!d.settings.ticker&&O(),d.settings.keyboardEnabled&&!d.settings.ticker&&R(document).keydown(L)},h=function(){var e=0,t=R();if("vertical"===d.settings.mode||d.settings.adaptiveHeight)if(d.carousel){var n=1===d.settings.moveSlides?d.active.index:d.active.index*x(),t=d.children.eq(n);for(i=1;i<=d.settings.maxSlides-1;i++)t=n+i>=d.children.length?t.add(d.children.eq(i-1)):t.add(d.children.eq(n+i))}else t=d.children.eq(d.active.index);else t=d.children;return"vertical"===d.settings.mode?(t.each(function(t){e+=R(this).outerHeight()}),0<d.settings.slideMargin&&(e+=d.settings.slideMargin*(d.settings.minSlides-1))):e=Math.max.apply(Math,t.map(function(){return R(this).outerHeight(!1)}).get()),"border-box"===d.viewport.css("box-sizing")?e+=parseFloat(d.viewport.css("padding-top"))+parseFloat(d.viewport.css("padding-bottom"))+parseFloat(d.viewport.css("border-top-width"))+parseFloat(d.viewport.css("border-bottom-width")):"padding-box"===d.viewport.css("box-sizing")&&(e+=parseFloat(d.viewport.css("padding-top"))+parseFloat(d.viewport.css("padding-bottom"))),e},u=function(){var t="100%";return 0<d.settings.slideWidth&&(t="horizontal"===d.settings.mode?d.settings.maxSlides*d.settings.slideWidth+(d.settings.maxSlides-1)*d.settings.slideMargin:d.settings.slideWidth),t},v=function(){var t=d.settings.slideWidth,e=d.viewport.width();if(0===d.settings.slideWidth||d.settings.slideWidth>e&&!d.carousel||"vertical"===d.settings.mode)t=e;else if(1<d.settings.maxSlides&&"horizontal"===d.settings.mode){if(e>d.maxThreshold)return t;e<d.minThreshold?t=(e-d.settings.slideMargin*(d.settings.minSlides-1))/d.settings.minSlides:d.settings.shrinkItems&&(t=Math.floor((e+d.settings.slideMargin)/Math.ceil((e+d.settings.slideMargin)/(t+d.settings.slideMargin))-d.settings.slideMargin))}return t},f=function(){var t=0,e=0,i=0;if(0<d.settings.moveSlides)if(d.settings.infiniteLoop)t=Math.ceil(d.children.length/x());else for(;e<d.children.length;)++t,e=i+r(),i+=d.settings.moveSlides<=r()?d.settings.moveSlides:r();else t=Math.ceil(d.children.length/r());return t},x=function(){return 0<d.settings.moveSlides&&d.settings.moveSlides<=r()?d.settings.moveSlides:r()},m=function(){var t,e;d.children.length>d.settings.maxSlides&&d.active.last&&!d.settings.infiniteLoop?"horizontal"===d.settings.mode?(t=(e=d.children.last()).position(),S(-(t.left-(d.viewport.width()-e.outerWidth())),"reset",0)):"vertical"===d.settings.mode&&(e=d.children.length-d.settings.minSlides,t=d.children.eq(e).position(),S(-t.top,"reset",0)):(t=d.children.eq(d.active.index*x()).position(),d.active.index===f()-1&&(d.active.last=!0),void 0!==t&&("horizontal"===d.settings.mode?S(-t.left,"reset",0):"vertical"===d.settings.mode&&S(-t.top,"reset",0)))},S=function e(t,i,n,s){var o;d.usingCSS?(o="vertical"===d.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)",c.css("-"+d.cssPrefix+"-transition-duration",n/1e3+"s"),"slide"===i?(c.css(d.animProp,o),0!==n?c.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(t){R(t.target).is(c)&&(c.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),I())}):I()):"reset"===i?c.css(d.animProp,o):"ticker"===i&&(c.css("-"+d.cssPrefix+"-transition-timing-function","linear"),c.css(d.animProp,o),0!==n?c.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(t){R(t.target).is(c)&&(c.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),e(s.resetValue,"reset",0),W())}):(e(s.resetValue,"reset",0),W()))):((o={})[d.animProp]=t,"slide"===i?c.animate(o,n,d.settings.easing,function(){I()}):"reset"===i?c.css(d.animProp,t):"ticker"===i&&c.animate(o,n,"linear",function(){e(s.resetValue,"reset",0),W()}))},b=function(){d.settings.pagerCustom?d.pagerEl=R(d.settings.pagerCustom):(d.pagerEl=R('<div class="bx-pager" />'),d.settings.pagerSelector?R(d.settings.pagerSelector).html(d.pagerEl):d.controls.el.addClass("bx-has-pager").append(d.pagerEl),t()),d.pagerEl.on("click touchend","a",y)},w=function(){d.controls.next=R('<a class="bx-next" href="">'+d.settings.nextText+"</a>"),d.controls.prev=R('<a class="bx-prev" href="">'+d.settings.prevText+"</a>"),d.controls.next.bind("click touchend",P),d.controls.prev.bind("click touchend",E),d.settings.nextSelector&&R(d.settings.nextSelector).append(d.controls.next),d.settings.prevSelector&&R(d.settings.prevSelector).append(d.controls.prev),d.settings.nextSelector||d.settings.prevSelector||(d.controls.directionEl=R('<div class="bx-controls-direction" />'),d.controls.directionEl.append(d.controls.prev).append(d.controls.next),d.controls.el.addClass("bx-has-controls-direction").append(d.controls.directionEl))},C=function(){d.controls.start=R('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+d.settings.startText+"</a></div>"),d.controls.stop=R('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+d.settings.stopText+"</a></div>"),d.controls.autoEl=R('<div class="bx-controls-auto" />'),d.controls.autoEl.on("click",".bx-start",k),d.controls.autoEl.on("click",".bx-stop",M),d.settings.autoControlsCombine?d.controls.autoEl.append(d.controls.start):d.controls.autoEl.append(d.controls.start).append(d.controls.stop),d.settings.autoControlsSelector?R(d.settings.autoControlsSelector).html(d.controls.autoEl):d.controls.el.addClass("bx-has-controls-auto").append(d.controls.autoEl),q(d.settings.autoStart?"stop":"start")},T=function(){d.children.each(function(t){var e=R(this).find("img:first").attr("title");void 0!==e&&(""+e).length&&R(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},P=function(t){t.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&c.stopAuto(),c.goToNextSlide())},E=function(t){t.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&c.stopAuto(),c.goToPrevSlide())},k=function(t){c.startAuto(),t.preventDefault()},M=function(t){c.stopAuto(),t.preventDefault()},y=function(t){t.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&c.stopAuto(),void 0===(t=R(t.currentTarget)).attr("data-slide-index")||(t=parseInt(t.attr("data-slide-index")))!==d.active.index&&c.goToSlide(t))},z=function(i){var t=d.children.length;return"short"===d.settings.pagerType?(1<d.settings.maxSlides&&(t=Math.ceil(d.children.length/d.settings.maxSlides)),void d.pagerEl.html(i+1+d.settings.pagerShortSeparator+t)):(d.pagerEl.find("a").removeClass("active"),void d.pagerEl.each(function(t,e){R(e).find("a").eq(i).addClass("active")}))},I=function(){var t;d.settings.infiniteLoop&&(t="",0===d.active.index?t=d.children.eq(0).position():d.active.index===f()-1&&d.carousel?t=d.children.eq((f()-1)*x()).position():d.active.index===d.children.length-1&&(t=d.children.eq(d.children.length-1).position()),t&&("horizontal"===d.settings.mode?S(-t.left,"reset",0):"vertical"===d.settings.mode&&S(-t.top,"reset",0))),d.working=!1,d.settings.onSlideAfter.call(c,d.children.eq(d.active.index),d.oldIndex,d.active.index)},q=function(t){d.settings.autoControlsCombine?d.controls.autoEl.html(d.controls[t]):(d.controls.autoEl.find("a").removeClass("active"),d.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},A=function(){1===f()?(d.controls.prev.addClass("disabled"),d.controls.next.addClass("disabled")):!d.settings.infiniteLoop&&d.settings.hideControlOnEnd&&(0===d.active.index?(d.controls.prev.addClass("disabled"),d.controls.next.removeClass("disabled")):d.active.index===f()-1?(d.controls.next.addClass("disabled"),d.controls.prev.removeClass("disabled")):(d.controls.prev.removeClass("disabled"),d.controls.next.removeClass("disabled")))},H=function(){0<d.settings.autoDelay?setTimeout(c.startAuto,d.settings.autoDelay):(c.startAuto(),R(window).focus(function(){c.startAuto()}).blur(function(){c.stopAuto()})),d.settings.autoHover&&c.hover(function(){d.interval&&(c.stopAuto(!0),d.autoPaused=!0)},function(){d.autoPaused&&(c.startAuto(!0),d.autoPaused=null)})},D=function(){var t,e,i,n,s,o,r,a,l=0;"next"===d.settings.autoDirection?c.append(d.children.clone().addClass("bx-clone")):(c.prepend(d.children.clone().addClass("bx-clone")),t=d.children.first().position(),l="horizontal"===d.settings.mode?-t.left:-t.top),S(l,"reset",0),d.settings.pager=!1,d.settings.controls=!1,d.settings.autoControls=!1,d.settings.tickerHover&&(d.usingCSS?(n="horizontal"===d.settings.mode?4:5,d.viewport.hover(function(){e=c.css("-"+d.cssPrefix+"-transform"),i=parseFloat(e.split(",")[n]),S(i,"reset",0)},function(){a=0,d.children.each(function(t){a+="horizontal"===d.settings.mode?R(this).outerWidth(!0):R(this).outerHeight(!0)}),s=d.settings.speed/a,o="horizontal"===d.settings.mode?"left":"top",r=s*(a-Math.abs(parseInt(i))),W(r)})):d.viewport.hover(function(){c.stop()},function(){a=0,d.children.each(function(t){a+="horizontal"===d.settings.mode?R(this).outerWidth(!0):R(this).outerHeight(!0)}),s=d.settings.speed/a,o="horizontal"===d.settings.mode?"left":"top",r=s*(a-Math.abs(parseInt(c.css(o)))),W(r)})),W()},W=function(t){var e=t||d.settings.speed,i={left:0,top:0},t={left:0,top:0};"next"===d.settings.autoDirection?i=c.find(".bx-clone").first().position():t=d.children.first().position(),i="horizontal"===d.settings.mode?-i.left:-i.top,t="horizontal"===d.settings.mode?-t.left:-t.top,S(i,"ticker",e,{resetValue:t})},L=function(t){var e,i,n,s=document.activeElement.tagName.toLowerCase();if(null==new RegExp(s,["i"]).exec("input|textarea")&&(e=c,i=R(window),n={top:i.scrollTop(),left:i.scrollLeft()},s=e.offset(),n.right=n.left+i.width(),n.bottom=n.top+i.height(),s.right=s.left+e.outerWidth(),s.bottom=s.top+e.outerHeight(),!(n.right<s.left||n.left>s.right||n.bottom<s.top||n.top>s.bottom)))return 39===t.keyCode?(P(t),!1):37===t.keyCode?(E(t),!1):void 0},O=function(){d.touch={start:{x:0,y:0},end:{x:0,y:0}},d.viewport.bind("touchstart MSPointerDown pointerdown",F),d.viewport.on("click",".bxslider a",function(t){d.viewport.hasClass("click-disabled")&&(t.preventDefault(),d.viewport.removeClass("click-disabled"))})},F=function(t){var e;d.controls.el.addClass("disabled"),d.working?(t.preventDefault(),d.controls.el.removeClass("disabled")):(d.touch.originalPos=c.position(),t=void 0!==(e=t.originalEvent).changedTouches?e.changedTouches:[e],d.touch.start.x=t[0].pageX,d.touch.start.y=t[0].pageY,d.viewport.get(0).setPointerCapture&&(d.pointerId=e.pointerId,d.viewport.get(0).setPointerCapture(d.pointerId)),d.viewport.bind("touchmove MSPointerMove pointermove",X),d.viewport.bind("touchend MSPointerUp pointerup",Y),d.viewport.bind("MSPointerCancel pointercancel",N))},N=function t(e){S(d.touch.originalPos.left,"reset",0),d.controls.el.removeClass("disabled"),d.viewport.unbind("MSPointerCancel pointercancel",t),d.viewport.unbind("touchmove MSPointerMove pointermove",X),d.viewport.unbind("touchend MSPointerUp pointerup",Y),d.viewport.get(0).releasePointerCapture&&d.viewport.get(0).releasePointerCapture(d.pointerId)},X=function(t){var e=t.originalEvent,i=void 0!==e.changedTouches?e.changedTouches:[e],n=Math.abs(i[0].pageX-d.touch.start.x),s=Math.abs(i[0].pageY-d.touch.start.y),o=0,e=0;(s<3*n&&d.settings.preventDefaultSwipeX||n<3*s&&d.settings.preventDefaultSwipeY)&&t.preventDefault(),"fade"!==d.settings.mode&&d.settings.oneToOneTouch&&(o="horizontal"===d.settings.mode?(e=i[0].pageX-d.touch.start.x,d.touch.originalPos.left+e):(e=i[0].pageY-d.touch.start.y,d.touch.originalPos.top+e),S(o,"reset",0))},Y=function t(e){d.viewport.unbind("touchmove MSPointerMove pointermove",X),d.controls.el.removeClass("disabled");var i=e.originalEvent,n=void 0!==i.changedTouches?i.changedTouches:[i],e=0,i=0;d.touch.end.x=n[0].pageX,d.touch.end.y=n[0].pageY,"fade"===d.settings.mode?(i=Math.abs(d.touch.start.x-d.touch.end.x))>=d.settings.swipeThreshold&&(d.touch.start.x>d.touch.end.x?c.goToNextSlide():c.goToPrevSlide(),c.stopAuto()):(e="horizontal"===d.settings.mode?(i=d.touch.end.x-d.touch.start.x,d.touch.originalPos.left):(i=d.touch.end.y-d.touch.start.y,d.touch.originalPos.top),(d.settings.infiniteLoop||!(0===d.active.index&&0<i||d.active.last&&i<0))&&Math.abs(i)>=d.settings.swipeThreshold?(i<0?c.goToNextSlide():c.goToPrevSlide(),c.stopAuto()):S(e,"reset",200)),d.viewport.unbind("touchend MSPointerUp pointerup",t),d.viewport.get(0).releasePointerCapture&&d.viewport.get(0).releasePointerCapture(d.pointerId)},V=function t(e){var i,n;d.initialized&&(d.working?window.setTimeout(t,10):(i=R(window).width(),n=R(window).height(),s===i&&o===n||(s=i,o=n,c.redrawSlider(),d.settings.onSliderResize.call(c,d.active.index))))};return c.goToSlide=function(t,e){var i,n,s=!0,o=0,r={left:0,top:0},a=null;if(d.oldIndex=d.active.index,d.active.index=(n=t)<0?d.settings.infiniteLoop?f()-1:d.active.index:n>=f()?d.settings.infiniteLoop?0:d.active.index:n,!d.working&&d.active.index!==d.oldIndex){if(d.working=!0,void 0!==(s=d.settings.onSlideBefore.call(c,d.children.eq(d.active.index),d.oldIndex,d.active.index))&&!s)return d.active.index=d.oldIndex,void(d.working=!1);"next"===e?d.settings.onSlideNext.call(c,d.children.eq(d.active.index),d.oldIndex,d.active.index)||(s=!1):"prev"===e&&(d.settings.onSlidePrev.call(c,d.children.eq(d.active.index),d.oldIndex,d.active.index)||(s=!1)),d.active.last=d.active.index>=f()-1,(d.settings.pager||d.settings.pagerCustom)&&z(d.active.index),d.settings.controls&&A(),"fade"===d.settings.mode?(d.settings.adaptiveHeight&&d.viewport.height()!==h()&&d.viewport.animate({height:h()},d.settings.adaptiveHeightSpeed),d.children.filter(":visible").fadeOut(d.settings.speed).css({zIndex:0}),d.children.eq(d.active.index).css("zIndex",d.settings.slideZIndex+1).fadeIn(d.settings.speed,function(){R(this).css("zIndex",d.settings.slideZIndex),I()})):(d.settings.adaptiveHeight&&d.viewport.height()!==h()&&d.viewport.animate({height:h()},d.settings.adaptiveHeightSpeed),!d.settings.infiniteLoop&&d.carousel&&d.active.last?"horizontal"===d.settings.mode?(r=(a=d.children.eq(d.children.length-1)).position(),o=d.viewport.width()-a.outerWidth()):(i=d.children.length-d.settings.minSlides,r=d.children.eq(i).position()):d.carousel&&d.active.last&&"prev"===e?(i=1===d.settings.moveSlides?d.settings.maxSlides-x():(f()-1)*x()-(d.children.length-d.settings.maxSlides),r=(a=c.children(".bx-clone").eq(i)).position()):"next"===e&&0===d.active.index?(r=c.find("> .bx-clone").eq(d.settings.maxSlides).position(),d.active.last=!1):0<=t&&(t=t*parseInt(x()),r=d.children.eq(t).position()),void 0!==r?(r="horizontal"===d.settings.mode?-(r.left-o):-r.top,S(r,"slide",d.settings.speed)):d.working=!1),d.settings.ariaHidden&&l(d.active.index*x())}},c.goToNextSlide=function(){var t;!d.settings.infiniteLoop&&d.active.last||(t=parseInt(d.active.index)+1,c.goToSlide(t,"next"))},c.goToPrevSlide=function(){var t;!d.settings.infiniteLoop&&0===d.active.index||(t=parseInt(d.active.index)-1,c.goToSlide(t,"prev"))},c.startAuto=function(t){d.interval||(d.interval=setInterval(function(){"next"===d.settings.autoDirection?c.goToNextSlide():c.goToPrevSlide()},d.settings.pause),d.settings.autoControls&&!0!==t&&q("stop"))},c.stopAuto=function(t){d.interval&&(clearInterval(d.interval),d.interval=null,d.settings.autoControls&&!0!==t&&q("start"))},c.getCurrentSlide=function(){return d.active.index},c.getCurrentSlideElement=function(){return d.children.eq(d.active.index)},c.getSlideElement=function(t){return d.children.eq(t)},c.getSlideCount=function(){return d.children.length},c.isWorking=function(){return d.working},c.redrawSlider=function(){d.children.add(c.find(".bx-clone")).outerWidth(v()),d.viewport.css("height",h()),d.settings.ticker||m(),d.active.last&&(d.active.index=f()-1),d.active.index>=f()&&(d.active.last=!0),d.settings.pager&&!d.settings.pagerCustom&&(t(),z(d.active.index)),d.settings.ariaHidden&&l(d.active.index*x())},c.destroySlider=function(){d.initialized&&(d.initialized=!1,R(".bx-clone",this).remove(),d.children.each(function(){void 0!==R(this).data("origStyle")?R(this).attr("style",R(this).data("origStyle")):R(this).removeAttr("style")}),void 0!==R(this).data("origStyle")?this.attr("style",R(this).data("origStyle")):R(this).removeAttr("style"),R(this).unwrap().unwrap(),d.controls.el&&d.controls.el.remove(),d.controls.next&&d.controls.next.remove(),d.controls.prev&&d.controls.prev.remove(),d.pagerEl&&d.settings.controls&&!d.settings.pagerCustom&&d.pagerEl.remove(),R(".bx-caption",this).remove(),d.controls.autoEl&&d.controls.autoEl.remove(),clearInterval(d.interval),d.settings.responsive&&R(window).unbind("resize",V),d.settings.keyboardEnabled&&R(document).unbind("keydown",L),R(this).removeData("bxSlider"))},c.reloadSlider=function(t){void 0!==t&&(e=t),c.destroySlider(),n(),R(c).data("bxSlider",this)},n(),R(c).data("bxSlider",this),this}}}(jQuery);// TODO: отрефачить, чтобы либа для cookies грузилась в head, а отсюда удалить

/*
* jQuery Cookie
*/
;

(function ($, document) {
  var pluses = /\+/g;

  function raw(s) {
    return s;
  }

  function decoded(s) {
    return decodeURIComponent(s.replace(pluses, ' '));
  }

  $.cookie = function (key, value, options) {
    // key and at least value given, set cookie...
    if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value == null)) {
      options = $.extend({}, $.cookie.defaults, options);

      if (value == null) {
        options.expires = -1;
      }

      if (typeof options.expires === 'number') {
        var days = options.expires,
            t = options.expires = new Date();
        t.setDate(t.getDate() + days);
      }

      value = String(value);
      return document.cookie = [encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
      options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join('');
    } // key and possibly options given, get cookie...


    options = value || $.cookie.defaults || {};
    var decode = options.raw ? raw : decoded;
    var cookies = document.cookie.split('; ');

    for (var i = 0, parts; parts = cookies[i] && cookies[i].split('='); i++) {
      if (decode(parts.shift()) === key) {
        return decode(parts.join('='));
      }
    }

    return null;
  };

  $.cookie.defaults = {};
})(jQuery, document);

var months_localized = {
  'ru': ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
  'fr': ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
  'bg': ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'],
  'nl': ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
  'pt': ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  'de': ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  'tr': ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
  'it': ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
  'hu': ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
  'en': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  'id': ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
  'ms': ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'],
  'hi': ['जनवर', 'फरबर', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितम्बर', 'अक्टूबर', 'नवंबर', 'दिसंबर'],
  'es': ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  'ro': ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
  'pl': ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'],
  'sr': ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'],
  'cs': ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'],
  'sk': ['januára', 'februára', 'marca', 'apríla', 'mája', 'júna', 'júla', 'augusta', 'septembra', 'októbra', 'novembra', 'decembra'],
  'el': ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'],
  'th': ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
  'vi': ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Bốn', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám'],
  'fil': ['Enero', 'Pebrero', 'Marso', 'Abril', 'Mayo', 'Hunyo', 'Hulyo', 'Agosto', 'Setyembre', 'Oktubre', 'Nobyembre', 'Disyembre'],
  'ar': ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  'ur': ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'],
  'nb': ['Januar', 'Februar', 'Mars ', 'April ', 'May ', 'Juni ', 'Juli ', 'August ', 'September ', 'Oktober ', 'November ', 'Desember '],
  'nn': ['Januar', 'Februar', 'Mars ', 'April ', 'May ', 'Juni ', 'Juli ', 'August ', 'September ', 'Oktober ', 'November ', 'Desember '],
  'no': ['Januar', 'Februar', 'Mars ', 'April ', 'May ', 'Juni ', 'Juli ', 'August ', 'September ', 'Oktober ', 'November ', 'Desember '],
  'nb_NO': ['Januar', 'Februar', 'Mars ', 'April ', 'May ', 'Juni ', 'Juli ', 'August ', 'September ', 'Oktober ', 'November ', 'Desember '],
  'km': ['មករា', 'កុម្ភៈ', 'មិនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', '‘វិច្ឆិកា', 'ធ្នូ'],
  'zh': ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
};
var days_localized = {
  'ru': ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  'fr': ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  'bg': ['Неделя', 'Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота'],
  'nl': ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
  'pt': ['Domingo', 'Segunda Feira', 'Terça Feira', 'Quarta Feira', 'Quinta Feira', 'Sexta Feira', 'Sábado'],
  'de': ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
  'tr': ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
  'it': ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
  'hu': ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'],
  'en': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  'hi': ['सोमवार', 'मंगलवार', 'बुधवार', 'गुरूवार', 'शुक्रवार', 'शनिवार', 'रविवार'],
  'ms': ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'],
  'id': ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
  'es': ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  'ro': ['Duminică', 'Luni', 'Marţi', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
  'pl': ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'],
  'sr': ['Nedelja', 'Ponedeljak', 'Utorak', 'Sreda', 'Četvrtak', 'Petak', 'Subota'],
  'cs': ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
  'sk': ['nedeľa', 'pondelok', 'utorok', 'streda', 'štvrtok', 'piatok', 'sobota'],
  'el': ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'],
  'th': ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'],
  'vi': ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'],
  'ar': ['الاحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس', 'الجمعة', 'السبت'],
  'fil': ['Linggo', 'Lunes', 'Martes', 'Miyerkoles', 'Huebes', 'Biyernes', 'Sabado'],
  'ur': ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'],
  'nb': ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Friday', 'Lørdag'],
  'nn': ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Friday', 'Lørdag'],
  'no': ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Friday', 'Lørdag'],
  'nb_NO': ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Friday', 'Lørdag'],
  'km': ['អាទិត្យ', 'ច័ន្ធ', 'អង្គារ៍', 'ពុធ', 'ព្រហស្បិ៍', 'សុក្រ', 'សៅរ៍'],
  'zh': ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
};

var AdcLandDate = function AdcLandDate(_ref) {
  var shift = _ref.shift,
      _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? 'dtime_nums' : _ref$mode,
      _ref$old = _ref.old,
      old = _ref$old === void 0 ? true : _ref$old,
      _ref$euFormat = _ref.euFormat,
      euFormat = _ref$euFormat === void 0 ? 1 : _ref$euFormat,
      _ref$index = _ref.index,
      index = _ref$index === void 0 ? 0 : _ref$index;
  this._mode = mode; // для rdate 0, чтобы не указывать сдвиг на каждом элементе

  this._shift = ~['rdate'].indexOf(mode) || isNaN(+shift) || !shift ? 0 : +shift;
  this._oldMethod = old;
  this._euFormat = !!+euFormat;
  this._indexOfCollection = index;

  this._compileDate(this._shift);
};

AdcLandDate.prototype._compileDate = function (shift) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  this._day = date;

  this._day.setDate(this._day.getDate() + (isNaN(+shift) ? 0 : shift) + (this._oldMethod && this._mode !== 'dtimes' ? 1 : 0));
};

AdcLandDate.prototype._getLocalizedEntity = getLocalizedEntity;

AdcLandDate.prototype._formatNum = function (num) {
  return ('0' + num).slice(-2);
};

AdcLandDate.prototype.getDate = function () {
  var _this = this;

  var modes = {
    'dtime_nums': function dtime_nums() {
      return {
        day: _this._formatNum(_this._day.getDate()),
        month: _this._formatNum(_this._day.getMonth() + 1),
        year: _this._day.getFullYear()
      };
    },
    'dtime': function dtime() {
      return {
        weekDay: _this._getLocalizedEntity(_this._day, 'day'),
        day: _this._day.getDate(),
        month: _this._getLocalizedEntity(_this._day, 'month'),
        year: _this._day.getFullYear()
      };
    },
    'dtimes': function dtimes() {
      return {
        day: _this._day.getDate(),
        month: _this._getLocalizedEntity(_this._day, 'month')
      };
    },
    'ryear': function ryear() {
      return {
        year: _this._day.getFullYear()
      };
    },
    'rstart': function rstart() {
      _this._compileDate(_this._shift, new Date(parseInt($.cookie('randDate'))));

      return {
        day: _this._formatNum(_this._day.getDate()),
        month: _this._formatNum(_this._day.getMonth() + 1),
        year: _this._day.getFullYear()
      };
    },
    'rdate': function rdate(x) {
      var z = x >= 16 ? 16 : x;
      var savedDate = new Date(parseInt($.cookie('randDate')));
      var nextDate = new Date(savedDate.getTime() + z * (12 + z) * (60 + x) * 60 * (1000 + x));
      if (x >= 31) nextDate = new Date(savedDate.getTime() + 2494600000 + x * 150000);

      _this._compileDate(_this._shift, nextDate);

      return {
        day: _this._formatNum(_this._day.getDate()),
        month: _this._formatNum(_this._day.getMonth() + 1),
        year: _this._day.getFullYear(),
        hours: _this._formatNum(_this._day.getHours()),
        minutes: _this._formatNum(_this._day.getMinutes()),
        seconds: _this._formatNum(_this._day.getSeconds())
      };
    }
  };
  return modes[this._mode](this._indexOfCollection);
};

AdcLandDate.prototype.toString = function () {
  var _this2 = this;

  var outputDate = this.getDate(this._indexOfCollection);
  var strings = {
    'dtime_nums': function dtime_nums() {
      return _this2._euFormat ? "".concat(outputDate.day, ".").concat(outputDate.month, ".").concat(outputDate.year) : "".concat(outputDate.month, ".").concat(outputDate.day, ".").concat(outputDate.year);
    },
    'dtime': function dtime() {
      return "".concat(outputDate.weekDay, " ").concat(outputDate.day, ", ").concat(outputDate.month, " ").concat(outputDate.year);
    },
    'dtimes': function dtimes() {
      return "".concat(outputDate.day, " ").concat(outputDate.month);
    },
    'ryear': function ryear() {
      return outputDate.year;
    },
    'rstart': function rstart() {
      return "".concat(outputDate.day, "/").concat(outputDate.month, "/").concat(outputDate.year);
    },
    'rdate': function rdate() {
      return "".concat(outputDate.day, ".").concat(outputDate.month, ".").concat(outputDate.year, " - ").concat(outputDate.hours, ":").concat(outputDate.minutes);
    }
  };
  return strings[this._mode] ? strings[this._mode]() : '';
};

AdcLandDate.init = function () {
  var DAY = 24 * 60 * 60;
  var MONTH = 30 * DAY;
  if (!$.cookie('randDate')) $.cookie('randDate', new Date().getTime() - MONTH * 1000, {
    expires: 1
  });
};

function getLocalizedEntity(date, entity) {
  date = new Date(date);
  var defLang = 'en';
  var locale = window.lang_locale || defLang;
  var configs = {
    month: {
      dict: months_localized,
      method: 'getMonth'
    },
    day: {
      dict: days_localized,
      method: 'getDay'
    }
  };
  var config = configs[entity];
  if (!config) return 'Unknown entity';
  return config.dict[config.dict[locale] ? locale : defLang][date[config.method]()];
}

function dtime_nums(shift, euFormat) {
  var date = new AdcLandDate({
    shift: shift,
    euFormat: euFormat
  });
  document.write(date.toString());
}

function dtime(shift) {
  var date = new AdcLandDate({
    mode: 'dtime',
    shift: shift
  });
  document.write(date.toString());
}

function dtimes(shift) {
  var date = new AdcLandDate({
    mode: 'dtimes',
    shift: shift
  });
  document.write(date.toString());
}

AdcLandDate.init();
$(function () {
  $.fn.adcLandDate = function (mode) {
    var $collection = this;
    $collection.each(function (i) {
      var el = $collection.eq(i);
      var shift = el.attr('data-date-shift');
      var euFormat = el.attr('data-date-eu');
      var date = new AdcLandDate({
        mode: mode,
        shift: shift,
        old: false,
        index: i,
        euFormat: euFormat
      });
      el.text(date.toString());
    });
  };

  $('.ryear, .nowyear').adcLandDate('ryear');
  $('.rstart, .startdate').adcLandDate('rstart');
  $('.rdate, .ypdate').adcLandDate('rdate');
  $('.dtime').adcLandDate('dtime');
  $('.dtime_nums').adcLandDate('dtime_nums');
  $('.dtimes').adcLandDate('dtimes');
});