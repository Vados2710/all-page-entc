!function(R){var Z={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0}};R.fn.bxSlider=function(e){if(0===this.length)return this;if(1<this.length)return this.each(function(){R(this).bxSlider(e)}),this;var d={},c=this,s=R(window).width(),o=R(window).height();if(!R(c).data("bxSlider")){function n(){R(c).data("bxSlider")||(d.settings=R.extend({},Z,e),d.settings.slideWidth=parseInt(d.settings.slideWidth),d.children=c.children(d.settings.slideSelector),d.children.length<d.settings.minSlides&&(d.settings.minSlides=d.children.length),d.children.length<d.settings.maxSlides&&(d.settings.maxSlides=d.children.length),d.settings.randomStart&&(d.settings.startSlide=Math.floor(Math.random()*d.children.length)),d.active={index:d.settings.startSlide},d.carousel=1<d.settings.minSlides||1<d.settings.maxSlides,d.carousel&&(d.settings.preloadImages="all"),d.minThreshold=d.settings.minSlides*d.settings.slideWidth+(d.settings.minSlides-1)*d.settings.slideMargin,d.maxThreshold=d.settings.maxSlides*d.settings.slideWidth+(d.settings.maxSlides-1)*d.settings.slideMargin,d.working=!1,d.controls={},d.interval=null,d.animProp="vertical"===d.settings.mode?"top":"left",d.usingCSS=d.settings.useCSS&&"fade"!==d.settings.mode&&function(){for(var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],i=0;i<e.length;i++)if(void 0!==t.style[e[i]])return d.cssPrefix=e[i].replace("Perspective","").toLowerCase(),d.animProp="-"+d.cssPrefix+"-transform",!0;return!1}(),"vertical"===d.settings.mode&&(d.settings.maxSlides=d.settings.minSlides),c.data("origStyle",c.attr("style")),c.children(d.settings.slideSelector).each(function(){R(this).data("origStyle",R(this).attr("style"))}),a())}function r(){var t,e=1;return"horizontal"===d.settings.mode&&0<d.settings.slideWidth?e=d.viewport.width()<d.minThreshold?d.settings.minSlides:d.viewport.width()>d.maxThreshold?d.settings.maxSlides:(t=d.children.first().width()+d.settings.slideMargin,Math.floor((d.viewport.width()+d.settings.slideMargin)/t)):"vertical"===d.settings.mode&&(e=d.settings.minSlides),e}function t(){for(var t="",e="",i=f(),n=0;n<i;n++)e="",d.settings.buildPager&&R.isFunction(d.settings.buildPager)||d.settings.pagerCustom?(e=d.settings.buildPager(n),d.pagerEl.addClass("bx-custom-pager")):(e=n+1,d.pagerEl.addClass("bx-default-pager")),t+='<div class="bx-pager-item"><a href="" data-slide-index="'+n+'" class="bx-pager-link">'+e+"</a></div>";d.pagerEl.html(t)}function l(t){var e=r();d.settings.ariaHidden&&!d.settings.ticker&&(d.children.attr("aria-hidden","true"),d.children.slice(t,t+e).attr("aria-hidden","false"))}var a=function(){var t=d.children.eq(d.settings.startSlide);c.wrap('<div class="'+d.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),d.viewport=c.parent(),d.settings.ariaLive&&!d.settings.ticker&&d.viewport.attr("aria-live","polite"),d.loader=R('<div class="bx-loading" />'),d.viewport.prepend(d.loader),c.css({width:"horizontal"===d.settings.mode?1e3*d.children.length+215+"%":"auto",position:"relative"}),d.usingCSS&&d.settings.easing?c.css("-"+d.cssPrefix+"-transition-timing-function",d.settings.easing):d.settings.easing||(d.settings.easing="swing"),d.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),d.viewport.parent().css({maxWidth:u()}),d.children.css({float:"horizontal"===d.settings.mode?"left":"none",listStyle:"none",position:"relative"}),d.children.css("width",v()),"horizontal"===d.settings.mode&&0<d.settings.slideMargin&&d.children.css("marginRight",d.settings.slideMargin),"vertical"===d.settings.mode&&0<d.settings.slideMargin&&d.children.css("marginBottom",d.settings.slideMargin),"fade"===d.settings.mode&&(d.children.css({position:"absolute",zIndex:0,display:"none"}),d.children.eq(d.settings.startSlide).css({zIndex:d.settings.slideZIndex,display:"block"})),d.controls.el=R('<div class="bx-controls" />'),d.settings.captions&&T(),d.active.last=d.settings.startSlide===f()-1,d.settings.video&&c.fitVids(),"all"!==d.settings.preloadImages&&!d.settings.ticker||(t=d.children),d.settings.ticker?d.settings.pager=!1:(d.settings.controls&&w(),d.settings.auto&&d.settings.autoControls&&C(),d.settings.pager&&b(),(d.settings.controls||d.settings.autoControls||d.settings.pager)&&d.viewport.after(d.controls.el)),g(t,p)},g=function(t,e){var i=t.find('img:not([src=""]), iframe').length,n=0;return 0===i?void e():void t.find('img:not([src=""]), iframe').each(function(){R(this).one("load error",function(){++n===i&&e()}).each(function(){this.complete&&R(this).trigger("load")})})},p=function(){var t,e;d.settings.infiniteLoop&&"fade"!==d.settings.mode&&!d.settings.ticker&&(e="vertical"===d.settings.mode?d.settings.minSlides:d.settings.maxSlides,t=d.children.slice(0,e).clone(!0).addClass("bx-clone"),e=d.children.slice(-e).clone(!0).addClass("bx-clone"),d.settings.ariaHidden&&(t.attr("aria-hidden",!0),e.attr("aria-hidden",!0)),c.append(t).prepend(e)),d.loader.remove(),m(),"vertical"===d.settings.mode&&(d.settings.adaptiveHeight=!0),d.viewport.height(h()),c.redrawSlider(),d.settings.onSliderLoad.call(c,d.active.index),d.initialized=!0,d.settings.responsive&&R(window).bind("resize",V),d.settings.auto&&d.settings.autoStart&&(1<f()||d.settings.autoSlideForOnePage)&&H(),d.settings.ticker&&D(),d.settings.pager&&z(d.settings.startSlide),d.settings.controls&&A(),d.settings.touchEnabled&&!d.settings.ticker&&O(),d.settings.keyboardEnabled&&!d.settings.ticker&&R(document).keydown(L)},h=function(){var e=0,t=R();if("vertical"===d.settings.mode||d.settings.adaptiveHeight)if(d.carousel){var n=1===d.settings.moveSlides?d.active.index:d.active.index*x(),t=d.children.eq(n);for(i=1;i<=d.settings.maxSlides-1;i++)t=n+i>=d.children.length?t.add(d.children.eq(i-1)):t.add(d.children.eq(n+i))}else t=d.children.eq(d.active.index);else t=d.children;return"vertical"===d.settings.mode?(t.each(function(t){e+=R(this).outerHeight()}),0<d.settings.slideMargin&&(e+=d.settings.slideMargin*(d.settings.minSlides-1))):e=Math.max.apply(Math,t.map(function(){return R(this).outerHeight(!1)}).get()),"border-box"===d.viewport.css("box-sizing")?e+=parseFloat(d.viewport.css("padding-top"))+parseFloat(d.viewport.css("padding-bottom"))+parseFloat(d.viewport.css("border-top-width"))+parseFloat(d.viewport.css("border-bottom-width")):"padding-box"===d.viewport.css("box-sizing")&&(e+=parseFloat(d.viewport.css("padding-top"))+parseFloat(d.viewport.css("padding-bottom"))),e},u=function(){var t="100%";return 0<d.settings.slideWidth&&(t="horizontal"===d.settings.mode?d.settings.maxSlides*d.settings.slideWidth+(d.settings.maxSlides-1)*d.settings.slideMargin:d.settings.slideWidth),t},v=function(){var t=d.settings.slideWidth,e=d.viewport.width();if(0===d.settings.slideWidth||d.settings.slideWidth>e&&!d.carousel||"vertical"===d.settings.mode)t=e;else if(1<d.settings.maxSlides&&"horizontal"===d.settings.mode){if(e>d.maxThreshold)return t;e<d.minThreshold?t=(e-d.settings.slideMargin*(d.settings.minSlides-1))/d.settings.minSlides:d.settings.shrinkItems&&(t=Math.floor((e+d.settings.slideMargin)/Math.ceil((e+d.settings.slideMargin)/(t+d.settings.slideMargin))-d.settings.slideMargin))}return t},f=function(){var t=0,e=0,i=0;if(0<d.settings.moveSlides)if(d.settings.infiniteLoop)t=Math.ceil(d.children.length/x());else for(;e<d.children.length;)++t,e=i+r(),i+=d.settings.moveSlides<=r()?d.settings.moveSlides:r();else t=Math.ceil(d.children.length/r());return t},x=function(){return 0<d.settings.moveSlides&&d.settings.moveSlides<=r()?d.settings.moveSlides:r()},m=function(){var t,e;d.children.length>d.settings.maxSlides&&d.active.last&&!d.settings.infiniteLoop?"horizontal"===d.settings.mode?(t=(e=d.children.last()).position(),S(-(t.left-(d.viewport.width()-e.outerWidth())),"reset",0)):"vertical"===d.settings.mode&&(e=d.children.length-d.settings.minSlides,t=d.children.eq(e).position(),S(-t.top,"reset",0)):(t=d.children.eq(d.active.index*x()).position(),d.active.index===f()-1&&(d.active.last=!0),void 0!==t&&("horizontal"===d.settings.mode?S(-t.left,"reset",0):"vertical"===d.settings.mode&&S(-t.top,"reset",0)))},S=function e(t,i,n,s){var o;d.usingCSS?(o="vertical"===d.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)",c.css("-"+d.cssPrefix+"-transition-duration",n/1e3+"s"),"slide"===i?(c.css(d.animProp,o),0!==n?c.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(t){R(t.target).is(c)&&(c.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),I())}):I()):"reset"===i?c.css(d.animProp,o):"ticker"===i&&(c.css("-"+d.cssPrefix+"-transition-timing-function","linear"),c.css(d.animProp,o),0!==n?c.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(t){R(t.target).is(c)&&(c.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),e(s.resetValue,"reset",0),W())}):(e(s.resetValue,"reset",0),W()))):((o={})[d.animProp]=t,"slide"===i?c.animate(o,n,d.settings.easing,function(){I()}):"reset"===i?c.css(d.animProp,t):"ticker"===i&&c.animate(o,n,"linear",function(){e(s.resetValue,"reset",0),W()}))},b=function(){d.settings.pagerCustom?d.pagerEl=R(d.settings.pagerCustom):(d.pagerEl=R('<div class="bx-pager" />'),d.settings.pagerSelector?R(d.settings.pagerSelector).html(d.pagerEl):d.controls.el.addClass("bx-has-pager").append(d.pagerEl),t()),d.pagerEl.on("click touchend","a",y)},w=function(){d.controls.next=R('<a class="bx-next" href="">'+d.settings.nextText+"</a>"),d.controls.prev=R('<a class="bx-prev" href="">'+d.settings.prevText+"</a>"),d.controls.next.bind("click touchend",P),d.controls.prev.bind("click touchend",E),d.settings.nextSelector&&R(d.settings.nextSelector).append(d.controls.next),d.settings.prevSelector&&R(d.settings.prevSelector).append(d.controls.prev),d.settings.nextSelector||d.settings.prevSelector||(d.controls.directionEl=R('<div class="bx-controls-direction" />'),d.controls.directionEl.append(d.controls.prev).append(d.controls.next),d.controls.el.addClass("bx-has-controls-direction").append(d.controls.directionEl))},C=function(){d.controls.start=R('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+d.settings.startText+"</a></div>"),d.controls.stop=R('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+d.settings.stopText+"</a></div>"),d.controls.autoEl=R('<div class="bx-controls-auto" />'),d.controls.autoEl.on("click",".bx-start",k),d.controls.autoEl.on("click",".bx-stop",M),d.settings.autoControlsCombine?d.controls.autoEl.append(d.controls.start):d.controls.autoEl.append(d.controls.start).append(d.controls.stop),d.settings.autoControlsSelector?R(d.settings.autoControlsSelector).html(d.controls.autoEl):d.controls.el.addClass("bx-has-controls-auto").append(d.controls.autoEl),q(d.settings.autoStart?"stop":"start")},T=function(){d.children.each(function(t){var e=R(this).find("img:first").attr("title");void 0!==e&&(""+e).length&&R(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},P=function(t){t.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&c.stopAuto(),c.goToNextSlide())},E=function(t){t.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&c.stopAuto(),c.goToPrevSlide())},k=function(t){c.startAuto(),t.preventDefault()},M=function(t){c.stopAuto(),t.preventDefault()},y=function(t){t.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&c.stopAuto(),void 0===(t=R(t.currentTarget)).attr("data-slide-index")||(t=parseInt(t.attr("data-slide-index")))!==d.active.index&&c.goToSlide(t))},z=function(i){var t=d.children.length;return"short"===d.settings.pagerType?(1<d.settings.maxSlides&&(t=Math.ceil(d.children.length/d.settings.maxSlides)),void d.pagerEl.html(i+1+d.settings.pagerShortSeparator+t)):(d.pagerEl.find("a").removeClass("active"),void d.pagerEl.each(function(t,e){R(e).find("a").eq(i).addClass("active")}))},I=function(){var t;d.settings.infiniteLoop&&(t="",0===d.active.index?t=d.children.eq(0).position():d.active.index===f()-1&&d.carousel?t=d.children.eq((f()-1)*x()).position():d.active.index===d.children.length-1&&(t=d.children.eq(d.children.length-1).position()),t&&("horizontal"===d.settings.mode?S(-t.left,"reset",0):"vertical"===d.settings.mode&&S(-t.top,"reset",0))),d.working=!1,d.settings.onSlideAfter.call(c,d.children.eq(d.active.index),d.oldIndex,d.active.index)},q=function(t){d.settings.autoControlsCombine?d.controls.autoEl.html(d.controls[t]):(d.controls.autoEl.find("a").removeClass("active"),d.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},A=function(){1===f()?(d.controls.prev.addClass("disabled"),d.controls.next.addClass("disabled")):!d.settings.infiniteLoop&&d.settings.hideControlOnEnd&&(0===d.active.index?(d.controls.prev.addClass("disabled"),d.controls.next.removeClass("disabled")):d.active.index===f()-1?(d.controls.next.addClass("disabled"),d.controls.prev.removeClass("disabled")):(d.controls.prev.removeClass("disabled"),d.controls.next.removeClass("disabled")))},H=function(){0<d.settings.autoDelay?setTimeout(c.startAuto,d.settings.autoDelay):(c.startAuto(),R(window).focus(function(){c.startAuto()}).blur(function(){c.stopAuto()})),d.settings.autoHover&&c.hover(function(){d.interval&&(c.stopAuto(!0),d.autoPaused=!0)},function(){d.autoPaused&&(c.startAuto(!0),d.autoPaused=null)})},D=function(){var t,e,i,n,s,o,r,a,l=0;"next"===d.settings.autoDirection?c.append(d.children.clone().addClass("bx-clone")):(c.prepend(d.children.clone().addClass("bx-clone")),t=d.children.first().position(),l="horizontal"===d.settings.mode?-t.left:-t.top),S(l,"reset",0),d.settings.pager=!1,d.settings.controls=!1,d.settings.autoControls=!1,d.settings.tickerHover&&(d.usingCSS?(n="horizontal"===d.settings.mode?4:5,d.viewport.hover(function(){e=c.css("-"+d.cssPrefix+"-transform"),i=parseFloat(e.split(",")[n]),S(i,"reset",0)},function(){a=0,d.children.each(function(t){a+="horizontal"===d.settings.mode?R(this).outerWidth(!0):R(this).outerHeight(!0)}),s=d.settings.speed/a,o="horizontal"===d.settings.mode?"left":"top",r=s*(a-Math.abs(parseInt(i))),W(r)})):d.viewport.hover(function(){c.stop()},function(){a=0,d.children.each(function(t){a+="horizontal"===d.settings.mode?R(this).outerWidth(!0):R(this).outerHeight(!0)}),s=d.settings.speed/a,o="horizontal"===d.settings.mode?"left":"top",r=s*(a-Math.abs(parseInt(c.css(o)))),W(r)})),W()},W=function(t){var e=t||d.settings.speed,i={left:0,top:0},t={left:0,top:0};"next"===d.settings.autoDirection?i=c.find(".bx-clone").first().position():t=d.children.first().position(),i="horizontal"===d.settings.mode?-i.left:-i.top,t="horizontal"===d.settings.mode?-t.left:-t.top,S(i,"ticker",e,{resetValue:t})},L=function(t){var e,i,n,s=document.activeElement.tagName.toLowerCase();if(null==new RegExp(s,["i"]).exec("input|textarea")&&(e=c,i=R(window),n={top:i.scrollTop(),left:i.scrollLeft()},s=e.offset(),n.right=n.left+i.width(),n.bottom=n.top+i.height(),s.right=s.left+e.outerWidth(),s.bottom=s.top+e.outerHeight(),!(n.right<s.left||n.left>s.right||n.bottom<s.top||n.top>s.bottom)))return 39===t.keyCode?(P(t),!1):37===t.keyCode?(E(t),!1):void 0},O=function(){d.touch={start:{x:0,y:0},end:{x:0,y:0}},d.viewport.bind("touchstart MSPointerDown pointerdown",F),d.viewport.on("click",".bxslider a",function(t){d.viewport.hasClass("click-disabled")&&(t.preventDefault(),d.viewport.removeClass("click-disabled"))})},F=function(t){var e;d.controls.el.addClass("disabled"),d.working?(t.preventDefault(),d.controls.el.removeClass("disabled")):(d.touch.originalPos=c.position(),t=void 0!==(e=t.originalEvent).changedTouches?e.changedTouches:[e],d.touch.start.x=t[0].pageX,d.touch.start.y=t[0].pageY,d.viewport.get(0).setPointerCapture&&(d.pointerId=e.pointerId,d.viewport.get(0).setPointerCapture(d.pointerId)),d.viewport.bind("touchmove MSPointerMove pointermove",X),d.viewport.bind("touchend MSPointerUp pointerup",Y),d.viewport.bind("MSPointerCancel pointercancel",N))},N=function t(e){S(d.touch.originalPos.left,"reset",0),d.controls.el.removeClass("disabled"),d.viewport.unbind("MSPointerCancel pointercancel",t),d.viewport.unbind("touchmove MSPointerMove pointermove",X),d.viewport.unbind("touchend MSPointerUp pointerup",Y),d.viewport.get(0).releasePointerCapture&&d.viewport.get(0).releasePointerCapture(d.pointerId)},X=function(t){var e=t.originalEvent,i=void 0!==e.changedTouches?e.changedTouches:[e],n=Math.abs(i[0].pageX-d.touch.start.x),s=Math.abs(i[0].pageY-d.touch.start.y),o=0,e=0;(s<3*n&&d.settings.preventDefaultSwipeX||n<3*s&&d.settings.preventDefaultSwipeY)&&t.preventDefault(),"fade"!==d.settings.mode&&d.settings.oneToOneTouch&&(o="horizontal"===d.settings.mode?(e=i[0].pageX-d.touch.start.x,d.touch.originalPos.left+e):(e=i[0].pageY-d.touch.start.y,d.touch.originalPos.top+e),S(o,"reset",0))},Y=function t(e){d.viewport.unbind("touchmove MSPointerMove pointermove",X),d.controls.el.removeClass("disabled");var i=e.originalEvent,n=void 0!==i.changedTouches?i.changedTouches:[i],e=0,i=0;d.touch.end.x=n[0].pageX,d.touch.end.y=n[0].pageY,"fade"===d.settings.mode?(i=Math.abs(d.touch.start.x-d.touch.end.x))>=d.settings.swipeThreshold&&(d.touch.start.x>d.touch.end.x?c.goToNextSlide():c.goToPrevSlide(),c.stopAuto()):(e="horizontal"===d.settings.mode?(i=d.touch.end.x-d.touch.start.x,d.touch.originalPos.left):(i=d.touch.end.y-d.touch.start.y,d.touch.originalPos.top),(d.settings.infiniteLoop||!(0===d.active.index&&0<i||d.active.last&&i<0))&&Math.abs(i)>=d.settings.swipeThreshold?(i<0?c.goToNextSlide():c.goToPrevSlide(),c.stopAuto()):S(e,"reset",200)),d.viewport.unbind("touchend MSPointerUp pointerup",t),d.viewport.get(0).releasePointerCapture&&d.viewport.get(0).releasePointerCapture(d.pointerId)},V=function t(e){var i,n;d.initialized&&(d.working?window.setTimeout(t,10):(i=R(window).width(),n=R(window).height(),s===i&&o===n||(s=i,o=n,c.redrawSlider(),d.settings.onSliderResize.call(c,d.active.index))))};return c.goToSlide=function(t,e){var i,n,s=!0,o=0,r={left:0,top:0},a=null;if(d.oldIndex=d.active.index,d.active.index=(n=t)<0?d.settings.infiniteLoop?f()-1:d.active.index:n>=f()?d.settings.infiniteLoop?0:d.active.index:n,!d.working&&d.active.index!==d.oldIndex){if(d.working=!0,void 0!==(s=d.settings.onSlideBefore.call(c,d.children.eq(d.active.index),d.oldIndex,d.active.index))&&!s)return d.active.index=d.oldIndex,void(d.working=!1);"next"===e?d.settings.onSlideNext.call(c,d.children.eq(d.active.index),d.oldIndex,d.active.index)||(s=!1):"prev"===e&&(d.settings.onSlidePrev.call(c,d.children.eq(d.active.index),d.oldIndex,d.active.index)||(s=!1)),d.active.last=d.active.index>=f()-1,(d.settings.pager||d.settings.pagerCustom)&&z(d.active.index),d.settings.controls&&A(),"fade"===d.settings.mode?(d.settings.adaptiveHeight&&d.viewport.height()!==h()&&d.viewport.animate({height:h()},d.settings.adaptiveHeightSpeed),d.children.filter(":visible").fadeOut(d.settings.speed).css({zIndex:0}),d.children.eq(d.active.index).css("zIndex",d.settings.slideZIndex+1).fadeIn(d.settings.speed,function(){R(this).css("zIndex",d.settings.slideZIndex),I()})):(d.settings.adaptiveHeight&&d.viewport.height()!==h()&&d.viewport.animate({height:h()},d.settings.adaptiveHeightSpeed),!d.settings.infiniteLoop&&d.carousel&&d.active.last?"horizontal"===d.settings.mode?(r=(a=d.children.eq(d.children.length-1)).position(),o=d.viewport.width()-a.outerWidth()):(i=d.children.length-d.settings.minSlides,r=d.children.eq(i).position()):d.carousel&&d.active.last&&"prev"===e?(i=1===d.settings.moveSlides?d.settings.maxSlides-x():(f()-1)*x()-(d.children.length-d.settings.maxSlides),r=(a=c.children(".bx-clone").eq(i)).position()):"next"===e&&0===d.active.index?(r=c.find("> .bx-clone").eq(d.settings.maxSlides).position(),d.active.last=!1):0<=t&&(t=t*parseInt(x()),r=d.children.eq(t).position()),void 0!==r?(r="horizontal"===d.settings.mode?-(r.left-o):-r.top,S(r,"slide",d.settings.speed)):d.working=!1),d.settings.ariaHidden&&l(d.active.index*x())}},c.goToNextSlide=function(){var t;!d.settings.infiniteLoop&&d.active.last||(t=parseInt(d.active.index)+1,c.goToSlide(t,"next"))},c.goToPrevSlide=function(){var t;!d.settings.infiniteLoop&&0===d.active.index||(t=parseInt(d.active.index)-1,c.goToSlide(t,"prev"))},c.startAuto=function(t){d.interval||(d.interval=setInterval(function(){"next"===d.settings.autoDirection?c.goToNextSlide():c.goToPrevSlide()},d.settings.pause),d.settings.autoControls&&!0!==t&&q("stop"))},c.stopAuto=function(t){d.interval&&(clearInterval(d.interval),d.interval=null,d.settings.autoControls&&!0!==t&&q("start"))},c.getCurrentSlide=function(){return d.active.index},c.getCurrentSlideElement=function(){return d.children.eq(d.active.index)},c.getSlideElement=function(t){return d.children.eq(t)},c.getSlideCount=function(){return d.children.length},c.isWorking=function(){return d.working},c.redrawSlider=function(){d.children.add(c.find(".bx-clone")).outerWidth(v()),d.viewport.css("height",h()),d.settings.ticker||m(),d.active.last&&(d.active.index=f()-1),d.active.index>=f()&&(d.active.last=!0),d.settings.pager&&!d.settings.pagerCustom&&(t(),z(d.active.index)),d.settings.ariaHidden&&l(d.active.index*x())},c.destroySlider=function(){d.initialized&&(d.initialized=!1,R(".bx-clone",this).remove(),d.children.each(function(){void 0!==R(this).data("origStyle")?R(this).attr("style",R(this).data("origStyle")):R(this).removeAttr("style")}),void 0!==R(this).data("origStyle")?this.attr("style",R(this).data("origStyle")):R(this).removeAttr("style"),R(this).unwrap().unwrap(),d.controls.el&&d.controls.el.remove(),d.controls.next&&d.controls.next.remove(),d.controls.prev&&d.controls.prev.remove(),d.pagerEl&&d.settings.controls&&!d.settings.pagerCustom&&d.pagerEl.remove(),R(".bx-caption",this).remove(),d.controls.autoEl&&d.controls.autoEl.remove(),clearInterval(d.interval),d.settings.responsive&&R(window).unbind("resize",V),d.settings.keyboardEnabled&&R(document).unbind("keydown",L),R(this).removeData("bxSlider"))},c.reloadSlider=function(t){void 0!==t&&(e=t),c.destroySlider(),n(),R(c).data("bxSlider",this)},n(),R(c).data("bxSlider",this),this}}}(jQuery);function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (_typeof(adcValid) !== 'object') var adcValid = {};
adcValid.errorMes = {
  settings: {
    button: [],
    message: 'js_errorMessage'
  },
  remove: function remove() {
    $('.' + this.settings.message + ', .' + this.settings.message + '2').remove();
  },
  mes: function mes(elem, msg) {
    var _t = this,
        style,
        x,
        y,
        $elem = typeof elem.attr === "function" ? elem : $(elem);

    if (!$elem.length) {
      console.error('Not an item to display an error', $elem);
      return false;
    }

    ;

    if (_t.body === _t.add) {
      _t.add.add("html");

      x = $elem.offset().left;
      y = $elem.offset().top;
    } else {
      x = $elem.offset().left - _t.add.offset().left;
      y = $elem.offset().top - _t.add.offset().top + _t.add.scrollTop();
    }

    _t.add.animate({
      scrollTop: y - 50
    }, 0, function () {
      style = 'left: ' + x + 'px;' + 'top: ' + (y - 36) + 'px;' + 'background-color: #e74c3c;' + 'border-radius: 5px;' + 'border: 1px dashed black;' + 'color: #fff;' + 'font-family: Arial, \'Nimbus Sans L\', Helvetica, sans-serif;' + 'font-size: 14px;' + 'margin: 3px 0 0 0px;' + 'padding: 6px 5px 5px;' + 'position: absolute;' + 'display: block;' + 'z-index: 9999';

      _t.remove();

      _t.add.append('<div class="' + _t.settings.message + '2" style="' + style + '">' + msg + '</div>');

      $elem.focus();
    });
  },
  resize: function resize() {
    var _t = this;

    _t.window.resize(function () {
      _t.remove();
    });
  },
  init: function init() {
    var _t = this;

    _t.window = $(window);
    _t.body = $('body');
    _t.add = _t.body;
    _t.click = $('input, textarea').add(_t.body);

    _t.click.on("touchend click", function (e) {
      var result = true;

      for (var i = 0; i < _t.settings.button.length; i++) {
        if ($(e.target).closest('.' + _t.settings.button[i]).length || e.target.classList.contains(_t.settings.button[i])) result = false;
      }

      if (result) _t.remove();
    });

    _t.resize();
  }
};
adcValid.validation = {
  settings: {
    postal_code: /^[\d]{2,6}$/i,
    rename: /^[^\\|\/.!@#$%^&*()=+`~'":;?,<>{}[\]\d«»„\t\n\v\f\r]+$/i,
    rename2: /^[^\\|\/.!@#$%^&*()=+~'":;?,<>{}[\]\d«»„\t\n\v\f\r\s]+\s[^\\|\/.!@#$%^&*()=+~'":;?,<>{}[\]\d«»„\t\n\v\f\r\s]+$/i,
    rephone: /^[\d\-+() ]*$/i,
    email: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i
  },
  cleaning: function cleaning(text) {
    return text.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ');
  },
  partition: function partition(input, hint, _req, _cc) {
    var _t = this,
        req = false,
        $input = typeof input.attr === "function" ? input : $(input),
        val = _t.cleaning($input.val());

    mes = hint || defaults.get_locale_var('set_address');

    if (!val) {
      if (_typeof(_req) === 'object') {
        if (_req[_cc] !== undefined) req = _req[_cc];
      } else {
        req = _req;
      }

      if (req) {
        $input.val('');
        adcValid.errorMes.mes($input, mes);
        return false;
      }
    } else {
      $input.val(val);
    }

    return true;
  },
  init: function init(button, fullAddress) {
    var _t = this,
        errorText = {
      not: ['Field is required'],
      notName: ['Name is a required field', 'set_fio'],
      erName: ['Name field is entered incorrectly', 'error_fio'],
      notPhone: ['Phone number is a required field', 'set_phone'],
      erPhone: ['The phone number is entered incorrectly', 'error_phone'],
      erEmail: ['The email is entered incorrectly', 'error_email'],
      notAddress: ['Address is a required field', 'set_address'],
      erAddress: ['Invalid address, please, refill the form', 'error_address'],
      notHouse: ['House is a required field', 'set_house'],
      notCity: ['City is a required field', 'set_city']
    };

    for (var ekey in errorText) {
      if (_typeof(defaults) === 'object' && errorText[ekey][1]) errorText[ekey][0] = defaults.get_locale_var(errorText[ekey][1]);
    }

    _t['button'] = typeof button.attr === "function" ? button : $(button);
    _t['form'] = _t.button.closest('form');
    if (!_t['allForm']) _t['allForm'] = $('form');
    _t['input'] = {
      name: _t.form.find('[name="name"]'),
      phone: _t.form.find('[name="phone"]'),
      address: _t.form.find('[name="address"]'),
      email: _t.form.find('[name="email"]')
    };
    if (_t.input.name.attr('data-count-length') === "2+") _t.settings.rename = _t.settings.rename2;

    if (!_t.cleaning(_t.input.name.val())) {
      adcValid.errorMes.mes(_t.input.name, errorText.notName[0]);
      return false;
    } else if (!_t.settings.rename.test(_t.cleaning(_t.input.name.val()))) {
      adcValid.errorMes.mes(_t.input.name, errorText.erName[0]);
      return false;
    } else if (!_t.input.phone.val() || !_t.input.phone.val().length) {
      adcValid.errorMes.mes(_t.input.phone, errorText.notPhone[0]);
      return false;
    } else if (!_t.settings.rephone.test(_t.input.phone.val()) || _t.input.phone.val().length < 6) {
      adcValid.errorMes.mes(_t.input.phone, errorText.erPhone[0]);
      return false;
    } else if (_t.input.address.length && _t.cleaning(_t.input.address.val()) === '' && _t.input.address.is(':visible')) {
      adcValid.errorMes.mes(_t.input.address, errorText.erAddress[0]);
      return false;
    } else if (_t.input.email.length && _t.input.email.is(':visible') && !_t.settings.email.test(_t.input.email.val())) {
      adcValid.errorMes.mes(_t.input.email, errorText.erEmail[0]);
      return false;
    } else {
      if (_typeof(fullAddress) === 'object' && !fullAddress.length) {
        _t['fullAddress'] = [];

        for (var key in fullAddress) {
          var el = _t.form.find('[name="' + key + '"]'),
              error = key === 'street' ? 'notAddress' : key === 'house' ? 'notHouse' : key === 'city' ? 'notCity' : 'not';

          if (el.length) {
            if (fullAddress[key]) {
              if (!_t.cleaning(el.val()) || _t.settings[key] && !_t.settings[key].test(_t.cleaning(el.val()))) {
                adcValid.errorMes.mes(el, errorText[error][0]);
                return false;
              }
            }
          } else {
            el = _t.form.find('#' + key + '[type="checkbox"]');

            if (el.length) {
              if (!el.prop("checked")) {
                adcValid.errorMes.mes(el, errorText[error][0]);
                return false;
              }
            }
          }

          if (el.attr('type') !== 'checkbox') _t.fullAddress.push(_t.cleaning(el.val()));
        }

        _t.allForm.find('[name="address"]').val(_t.fullAddress.join(' '));
      }

      adcValid.errorMes.remove();
      return true;
    }
  }
};
$().ready(function () {
  adcValid.errorMes.init(); //change phone input type to tel manually

  $('[name="phone"]').attr('type', 'tel').addClass('onlynumber'); //scroll to top

  $('.to_top').click(function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 400);
    return false;
  }); // autoselect local country from selector

  var ip_country = $('input[name=ip_country]').val();

  if (ip_country) {
    var found = false;
    $('select').each(function () {
      if (this.id === 'country_code_selector') {
        $(this).change(function () {
          $('input[name=country_code]').val(this.value);
        });
        $('#' + this.id + ' option').each(function () {
          if (this.value === ip_country) {
            found = true;
            this.parentElement.value = ip_country;
          }
        });
      }
    });

    if (found) {
      $('input[name="country_code"]').each(function () {
        this.value = ip_country;
      });
    } else {
      var ip_country_name = $('input[name=ip_country_name]').val();

      if (ip_country_name) {
        $('select').each(function () {
          if ($(this).attr('id') === 'country_code_selector') $(this).append($('<option>', {
            value: ip_country
          }).text(ip_country_name).attr('selected', 'selected')[0]);
        });
      }
    }
  }

  var cc_select = $('#country_code_selector').val();

  if (cc_select) {
    $('input[name=country_code]').val(cc_select);
  }

  $('.only_number').on('keydown', function (event) {
    if (/^(?:46|8|9|27|187)$/.test(event.keyCode) || event.keyCode == 65 && event.ctrlKey === true || event.keyCode >= 35 && event.keyCode <= 39) {
      return;
    } else {
      if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
        event.preventDefault();
      }
    }
  });
  $('.js_submit').click(function (e) {
    e.preventDefault();
    check_form(this);
    return false;
  });
  $('.js_scroll_to_form').click(function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $('form').offset().top
    }, 400);
    return false;
  });
  $('.change-package-button').on('touchend, click', function () {
    var package_id = $(this).data('package-id');
    $('.change-package-selector [value="' + package_id + '"]').prop("selected", true);
    set_package_prices(package_id);
  });
  $('.change-package-selector').on('change', function () {
    var package_id = $(this).val();
    set_package_prices(package_id);
  });

  function show_form_hint(elem, msg) {
    $(".js_errorMessage").remove();
    jQuery('<div class="js_errorMessage">' + msg + '</div>').appendTo('body').css({
      'left': jQuery(elem).offset().left,
      'top': jQuery(elem).offset().top - 30,
      'background-color': '#e74c3c',
      'border': '1px dashed black',
      'border-radius': '5px',
      'color': '#fff',
      'font-family': 'Arial',
      'font-size': '14px',
      'margin': '3px 0 0 0px',
      'padding': '6px 5px 5px',
      'position': 'absolute',
      'z-index': '9999'
    });
    jQuery(elem).focus();
  }

  ;

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1),
        vars = query.split("&");

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");

      if (pair[0] == variable) {
        return decodeURIComponent(pair[1]) || "";
      }
    }

    return false;
  } // for mobile prelands


  ['model', 'browser', 'brand', 'appname'].forEach(function (item) {
    window[item] = getQueryVariable(item) || '';
  });
  $('input[name=name]').on('touchend, click', function () {
    if (name_hint != '') {
      show_form_hint(this, name_hint);
      return false;
    }
  });
  $('input[name=phone]').on('touchend, click', function () {
    if (phone_hint != '') {
      show_form_hint(this, phone_hint);
      return false;
    }
  });

  function check_form(target) {
    var feed = {
      submit: function submit(form, callback) {
        var formInputs = {
          country: form.find('[name="country_code"]'),
          fio: form.find('[name="name"]'),
          phone: form.find('[name="phone"]'),
          lid: form.find('[name="lid"]'),
          address: form.find('[name="address"]'),
          house: form.find('[name="house"]'),
          city: form.find('[name="city"]'),
          email: form.find('[name="email"]'),
          validate_address: form.find('[name="validate_address"]')
        };
        var postParams = {
          method: 'feedback',
          name: formInputs.fio.val(),
          phone: formInputs.phone.val(),
          country: formInputs.country.val(),
          lid: formInputs.lid.val(),
          email: formInputs.email.val(),
          house: formInputs.house.val(),
          address: formInputs.address.val(),
          city: formInputs.city.val(),
          validate_address: formInputs.validate_address.val()
        };
        jQuery('.js_errorMessage').remove();
        var country = postParams.country.toLowerCase();
        var rename = /^[\D+ ]*$/i,
            rephone = /^[0-9\-\+\(\) ]*$/i,
            remail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;

        if (formInputs.fio.attr('data-count-length') == "2+") {
          rename = /^\D+\s[\D+\s*]+$/i;
        } // checking name


        if (!postParams.name.length) return feed.errorMessage(formInputs.fio, defaults.get_locale_var('set_fio'));
        if (!postParams.name.length || !rename.test(postParams.name)) return feed.errorMessage(formInputs.fio, defaults.get_locale_var('error_fio'));
        if (!postParams.phone || !postParams.phone.length) return feed.errorMessage(formInputs.phone, defaults.get_locale_var('set_phone'));
        if (!rephone.test(postParams.phone) || postParams.phone.length < 6) return feed.errorMessage(formInputs.phone, defaults.get_locale_var('error_phone'));

        if (postParams.email && postParams.email.length) {
          if (!remail.test(postParams.email)) return feed.errorMessage(formInputs.email, defaults.get_locale_var('error_email'));
        }

        if (formInputs.address.length && $(formInputs.address).css('display') !== 'none' && postParams.address === '') {
          return feed.errorMessage(formInputs.address, defaults.get_locale_var('set_address'));
        }

        if (formInputs.city.length && $(formInputs.city).css('display') !== 'none' && formInputs.city.attr('type') !== 'hidden' && postParams.city === '') {
          return feed.errorMessage(formInputs.city, defaults.get_locale_var('set_city'));
        }

        if (formInputs.house.length && $(formInputs.house).css('display') !== 'none' && postParams.house === '') {
          return feed.errorMessage(formInputs.house, defaults.get_locale_var('set_house'));
        } //deprecated function need remove


        if (formInputs.validate_address && postParams.validate_address === '1' && formInputs.address.length && $(formInputs.address).css('display') !== 'none') {
          var o = {};
          $.each(form.serializeArray(), function () {
            if (o[this.name] !== undefined) {
              if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
              }

              o[this.name].push(this.value || '');
            } else {
              o[this.name] = this.value || '';
            }
          });
          $.post('/order/validate_address/', o).done(function (response) {
            for (key in response) {
              if (response.hasOwnProperty(key)) {
                form.append('<input type="hidden" name="' + key + '" value="' + response[key] + '">');
              }
            }

            if (callback) {
              callback(this);
            } else {
              form.submit();
            }
          }).fail(function () {
            $(formInputs.city).css("display", "inline-block");
            $(formInputs.house).css("display", "inline-block");
            var message = defaults.get_locale_var('error_address');

            if (postParams.address === undefined) {
              showAnotherFormHint(message);
            } else {
              return feed.errorMessage(formInputs.address, message);
            }
          });
          return false;
        } else {
          if (callback) {
            callback(form);
          } else if ($(target).hasClass('js_custom_validate') && typeof adc_custom_validate === 'function') {
            if (adc_custom_validate(form)) {
              form.submit();
            } else {
              return false;
            }
          } else {
            form.submit();
          }

          return false;
        }
      },
      errorMessage: show_form_hint
    };
    feed.submit($(target).parents('form').first());
  }

  $("body").on('touchend, click', function () {
    $(".js_errorMessage").remove();
  });
  checkTimeZone();
  setBrowser();

  if (typeof site_title !== 'undefined') {
    $('title').text(site_title);
  }

  if (window.lang_locale && window.lang_locale.toLowerCase() in defaults.locale) {
    defaults._locale = window.lang_locale.toLowerCase();
  } else {
    defaults._locale = 'en';
  }
});
var defaults = {
  get_locale_var: function get_locale_var(var_name) {
    var country = this._locale.toLowerCase();

    return this.locale[country][var_name] !== undefined ? this.locale[country][var_name] : this.locale[this._locale][var_name];
  },
  locale: {
    ru: {
      set_country: 'Вы не выбрали страну',
      set_fio: 'Вы не заполнили ФИО',
      set_phone: 'Вы не заполнили Телефон',
      set_comment: 'Расскажите о вашей проблеме',
      set_holder_name: 'Заполните имя номинанта',
      set_house: 'House is a required field',
      set_nomin: 'Заполните номинацию',
      set_address: 'Заполните адрес',
      set_city: 'Заполните город',
      error_email: 'Неверно заполнен электронный адрес',
      error_fio: 'Неверно заполнено ФИО',
      error_address: 'Неверный адрес, пожалуйста, заполните форму заново',
      error_phone: 'Неверно заполнен Телефон',
      exit_text: 'Вы точно хотите закрыть вкладку? До завершения заказа осталось нажать одну кнопку!'
    },
    hi: {
      set_country: 'आपने देश का चयन नहीं किया',
      set_fio: 'आपनें पूरा नाम नहीं भरा',
      error_fio: 'गलत नाम',
      set_phone: 'आपनें फोन नंबर नहीं भरा',
      error_address: 'Invalid address, please, refill the form',
      set_house: 'House is a required field',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      error_phone: 'गलत फोन नंबर',
      exit_text: 'क्या आप सुनिश्चित रूप से छोड़ना चाहते हैं? आप अपने आर्डर से बस एक चरण की दूरी पर हैं'
    },
    id: {
      set_country: 'Anda belum memilih negara',
      set_fio: 'Anda belum mengisi nama lengkap',
      error_fio: 'Nama tidak valid',
      error_address: 'Invalid address, please, refill the form',
      set_house: 'House is a required field',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      set_phone: 'Anda belum mengisi nomor telepon',
      error_phone: 'Nomor telepon tidak valid',
      exit_text: 'Apakah Anda yakin Anda ingin meninggalkan laman ini? Hanya tinggal satu langkah lagi untuk menyelesaikan pesanan Anda!'
    },
    ms: {
      set_country: 'Anda tidak memilih negara',
      set_house: 'House is a required field',
      set_fio: 'Anda tidak mengisi nama penuh',
      error_fio: 'Nama tidak sah',
      set_phone: 'Anda tidak mengisi nombor telefon',
      error_address: 'Invalid address, please, refill the form',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      error_phone: 'Nombor telefon tidak sah',
      exit_text: 'Adakah anda pasti anda ingin keluar? Hanya tinggal satu langkah lagi daripada pesanan anda!'
    },
    bg: {
      set_country: 'Вие не сте избрали държава',
      set_house: 'House is a required field',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      set_fio: 'Моля, въведете валидно име',
      error_fio: 'Моля, въведете валидно име',
      set_phone: 'Моля, въведете телефон за връзка',
      error_address: 'Invalid address, please, refill the form',
      error_phone: 'Телефонния номер е въведен неправилно',
      exit_text: 'Сигурни ли сте че искате да затворите раздел? До приключване на поръчката кликнете с левия бутон един бутон!'
    },
    ro: {
      set_country: 'Vă rugăm să completați câmpul "Nume/Prenume"',
      set_fio: 'Cimpul a fost completat incorect "Nume/Prenume"',
      set_house: 'House is a required field',
      error_fio: 'Cimpul a fost completat incorect  "Nume/Prenume"',
      set_phone: 'Vă rugăm să completați câmpul "Telefon"',
      set_address: 'Address is a required field',
      error_address: 'Invalid address, please, refill the form',
      set_city: 'City is a required field',
      error_phone: 'Cimpul a fost completat incorect "Telefon"',
      exit_text: 'Sunteți sigur că doriți să închideți o filă? Până la finalizarea comenzii stânga faceți clic pe un buton!'
    },
    br: {
      set_country: 'Não selecionou país',
      set_fio: 'Por gentileza, verifique os seus dados',
      set_house: 'House is a required field',
      error_fio: 'Por gentileza, verifique os seus dados',
      error_address: 'Invalid address, please, refill the form',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      set_phone: 'or gentileza, verifique os seus dados',
      error_phone: 'or gentileza, verifique os seus dados',
      exit_text: 'Tem certeza de que quer fechar uma guia? Até a conclusão da ordem esquerda clique em um botão!'
    },
    hu: {
      set_country: 'Nem választott ország',
      set_house: 'House is a required field',
      set_fio: 'Nem kitölteni Név és vezetéknév',
      error_fio: 'Helytelenül kitöltött Név és vezetéknév',
      set_phone: 'Nem kitölteni Phone',
      error_address: 'Invalid address, please, refill the form',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      error_phone: 'Helytelenül kitöltött Telefon',
      exit_text: 'Biztos benne, hogy be akarja zárni a lapra? Befejezéséig a rendelés bal gombbal egy gombot!'
    },
    tr: {
      set_country: 'Siz ülkeyi seçmediniz',
      set_house: 'House is a required field',
      set_fio: 'Adınızı yazınız lütfen',
      error_fio: 'Adınız yalnış yazılmış',
      error_address: 'Geçersiz adres, litfen tekrar giriniz',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      set_phone: 'Telefon numaranızı yazınız lütfen',
      error_phone: 'Telefon numarası yanlış yazılmış',
      exit_text: 'Sayfamızı kapatmak istediniz. Eminmisiniz? Sipariş etmek icin son tıklama lazım!'
    },
    pl: {
      set_country: 'Podaj kraju',
      set_house: 'House is a required field',
      set_fio: 'Podaj imię i nazwisko',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      error_address: 'Invalid address, please, refill the form',
      error_fio: 'Podaj realne imię i nazwisko',
      set_phone: 'Podaj numer telefonu',
      error_phone: 'Podaj realny numer telefonu',
      exit_text: 'Czy na pewno chcesz zamknąć kartę?'
    },
    es: {
      set_country: 'No escogió un país',
      set_house: 'House is a required field',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      set_fio: 'No escribió su nombre y apellido',
      error_address: 'Invalid address, please, refill the form',
      error_fio: 'Usted escribió mal su nombre y apellido',
      set_phone: 'No escribió su teléfono',
      error_phone: 'Escribio mal su teléfono',
      exit_text: '¿De verdad quiere cerrar la pestana? ¡Para terminar su pedido solo queda presionar el botón!'
    },
    cl: {
      set_country: 'No escogió un país',
      set_house: 'House is a required field',
      set_fio: 'No escribió su nombre y apellido',
      error_fio: 'Usted escribió mal su nombre y apellido',
      error_address: 'Invalid address, please, refill the form',
      set_phone: 'No escbribió su teléfono',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      error_phone: 'Escribio mal su teléfono',
      exit_text: '¿De verdad quiere cerrar la pestana? ¡Para terminar su pedido solo queda presionar el botón!'
    },
    en: {
      set_country: 'Select country',
      set_house: 'House is a required field',
      set_fio: 'Name is a required field',
      error_fio: 'Name field is entered incorrectly',
      set_phone: 'Phone number is a required field',
      set_address: 'Address is a required field',
      error_address: 'Invalid address, please, refill the form',
      set_city: 'City is a required field',
      error_email: 'The email is entered incorrectly',
      error_phone: 'The phone number is entered incorrectly',
      exit_text: 'You really want to close tab?'
    },
    ja: {
      set_country: '国を選択していません',
      set_house: '家の情報をご入力ください',
      set_fio: '苗字と名前を入力していません',
      error_fio: '無効の苗字と名前です',
      set_phone: '電話番号を入力していません',
      set_address: '住所を入力してください',
      error_address: '無効の住所です。再度ご入力ください',
      set_city: '都市名を入力してください',
      error_email: '無効のメールアドレスです',
      error_phone: '無効の電話番号です',
      exit_text: '本当にタブを閉じますか？左のボタンを押せば注文が完了します！'
    },
    nl: {
      set_country: 'Je hebt het land nietgekozen',
      set_house: 'Huisnummer is eenverplicht veld',
      set_fio: 'Je hebtnaamenachternaamnietingevuld',
      error_fio: 'Naamenachternaamzijnniet correct ingevuld',
      set_phone: 'Je hebtTelefoonnummernietingevuld',
      set_comment: 'Vertel over je probleem',
      set_address: 'Vul het adres is',
      error_address: 'Ongeldigadres, vulalsjeblieft het formulieropnieuw in',
      set_city: 'Vul de woonplaats in',
      error_email: 'Het e-mailadres in niet correct ingevuld',
      error_phone: 'Telefoonnummer is niet correct ingevuld',
      exit_text: 'Weet je zekerdat je het tabblad wilt sluiten? Nog maar één knop teklikken om je bestellingafteronden!'
    },
    pt: {
      set_country: 'Não selecionou o país',
      set_house: 'House is a required field',
      set_fio: 'Não preencheu o nome completo',
      error_fio: 'Nome inválido',
      set_address: 'Address is a required field',
      error_address: 'Invalid address, please, refill the form',
      set_city: 'City is a required field',
      set_phone: 'Não preencheu o telefone',
      error_phone: 'Número de telefone inválido',
      exit_text: 'Tem a certeza de que quer sair? Está apenas a um passo da sua encomenda!'
    },
    zh: {
      set_country: '你沒有選擇國家',
      set_house: 'House is a required field',
      set_fio: '你沒有填寫完整姓名',
      error_fio: '無效姓名',
      set_address: 'Address is a required field',
      error_address: 'Invalid address, please, refill the form',
      set_city: 'City is a required field',
      set_phone: '你沒有填寫電話號碼',
      error_phone: '無效電話號碼',
      exit_text: '你是否確定要離開？離你的訂單僅剩一步了！'
    },
    km: {
      set_country: 'លោកអ្នកមិនបានជ្រើសរើសប្រទេស',
      set_house: 'House is a required field',
      set_fio: 'លោកអ្នកមិនបានបំពេញឈ្មោះពេញ',
      error_fio: 'ឈ្មោះមិនត្រឹមត្រូវ',
      set_address: 'Address is a required field',
      error_address: 'Invalid address, please, refill the form',
      set_city: 'City is a required field',
      set_phone: 'លោកអ្នកមិនបានបញ្ចូលលេខទូរសព្',
      error_phone: 'លេខទូរសព្ទមិនត្រឹមត្រូវ',
      exit_text: 'តើអ្នកពិតជាចង់ចាកចេញមែនឬទេ? នៅសល់តែមួយជំហានទៀតអ្នកនឹងបញ្ជាទិញបានហើយ!'
    },
    nb: {
      set_country: 'Du valgte ikke land',
      set_house: 'House is a required field',
      set_fio: 'Du oppgav ikke fullt navn',
      set_address: 'Address is a required field',
      error_address: 'Invalid address, please, refill the form',
      set_city: 'City is a required field',
      error_fio: 'Ugyldig navn',
      set_phone: 'Du oppgav ikke fullt telefonnummer',
      error_phone: 'Ugyldig telefonnummer',
      exit_text: 'Er du sikker på at du vil forlate siden? Du er bare et steg unna din ordre!'
    },
    nn: {
      set_country: 'Du valgte ikke land',
      set_house: 'House is a required field',
      set_fio: 'Du oppgav ikke fullt navn',
      error_fio: 'Ugyldig navn',
      set_address: 'Address is a required field',
      error_address: 'Invalid address, please, refill the form',
      set_city: 'City is a required field',
      set_phone: 'Du oppgav ikke fullt telefonnummer',
      error_phone: 'Ugyldig telefonnummer',
      exit_text: 'Er du sikker på at du vil forlate siden? Du er bare et steg unna din ordre!'
    },
    no: {
      set_country: 'Du valgte ikke land',
      set_house: 'House is a required field',
      set_fio: 'Du oppgav ikke fullt navn',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      error_address: 'Invalid address, please, refill the form',
      error_fio: 'Ugyldig navn',
      set_phone: 'Du oppgav ikke fullt telefonnummer',
      error_phone: 'Ugyldig telefonnummer',
      exit_text: 'Er du sikker på at du vil forlate siden? Du er bare et steg unna din ordre!'
    },
    nb_no: {
      set_country: 'Du valgte ikke land',
      set_house: 'House is a required field',
      set_fio: 'Du oppgav ikke fullt navn',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      error_fio: 'Ugyldig navn',
      set_phone: 'Du oppgav ikke fullt telefonnummer',
      error_address: 'Invalid address, please, refill the form',
      error_phone: 'Ugyldig telefonnummer',
      exit_text: 'Er du sikker på at du vil forlate siden? Du er bare et steg unna din ordre!'
    },
    ur: {
      set_country: 'آپ نے ملک کا انتخاب نہیں کیا',
      set_house: 'گھر ایک مطلُوبہ فِیلڈ ہے',
      set_fio: 'آپ نے پورا نام درج نہیں کیا ',
      set_address: 'پتہ ایک مطلُوبہ فِیلڈ ہے',
      set_city: 'شہر ایک مطلُوبہ فِیلڈ ہے',
      error_fio: 'غیر موزوں نام ',
      error_address: 'غیرمعتبرپتہ، برائے مہربانی فارم کو دُوبارہ پُر کریں',
      set_phone: 'آپ نے فون نمبر درج نہیں کیا',
      error_phone: 'آپ نے فون نمبر درج نہیں کیاغیر موزوں فون نمبر',
      exit_text: 'کیا آپ اس صفحے سے جانا چاہتے ہیں؟ آپ اپنا آرڈر بک کرانے سے صرف ایک کلک دوری پر ہیں '
    },
    fil: {
      set_country: 'Hindi mo pinili ang bansa',
      set_house: 'House is a required field',
      set_fio: 'Hindi mo pinunan ang buong pangalan',
      error_fio: 'Inbalidong pangalan',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      set_phone: 'Hindi mo pinunan ang telepono',
      error_address: 'Invalid address, please, refill the form',
      error_phone: 'Inbalidong numero ng telepono',
      exit_text: 'Sigurado ka bang gusto mong umalis? Ikaw ay isang hakbang nalang mula sa iyong order!'
    },
    ar: {
      set_country: 'أنت لم تختر البلاد',
      set_house: 'House is a required field',
      set_fio: 'أنت لم تملء الاسم الكامل',
      error_fio: 'اسم غير صالح',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      set_phone: 'أنت لم تدخل رقم الهاتف',
      error_address: 'Invalid address, please, refill the form',
      error_phone: 'رقم الهاتف غير صحيح',
      exit_text: 'هل أنت متأكد أنك تريد أن تغادر؟ كنت للتو في خطوة واحدة من النظام الخاص بك!'
    },
    vi: {
      set_country: 'Bạn chưa chọn quốc gia',
      set_house: 'House is a required field',
      set_fio: 'Bạn chưa điền họ tên',
      error_fio: 'Tên không hợp lệ',
      set_address: 'Address is a required field',
      error_address: 'Invalid address, please, refill the form',
      set_city: 'City is a required field',
      set_phone: 'Bạn chưa điền số điện thoại',
      error_phone: 'Số điện thoại không hợp lệ',
      exit_text: 'Bạn có chắc muốn rời đi không? Chỉ còn còn một bước đặt hàng nữa thôi!'
    },
    ng: {
      set_country: 'Select country',
      set_house: 'House is a required field',
      set_fio: 'Name is a required field',
      set_address: 'Address is a required field',
      error_address: 'Invalid address, please, refill the form',
      set_city: 'City is a required field',
      error_fio: 'Name field is entered incorrectly',
      set_phone: 'Phone number is a required field',
      error_phone: 'The phone number is entered incorrectly',
      exit_text: 'You really want to close tab?'
    },
    rs: {
      set_country: 'Niste odaberete zemlju',
      set_house: 'House is a required field',
      set_fio: 'Niste popunite imenom',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      error_fio: 'Invalid format Ime',
      error_address: 'Invalid address, please, refill the form',
      set_phone: 'Niste napuniti telefon',
      error_phone: 'Invalid format Telefon',
      exit_text: 'Da li ste sigurni da želite da zatvorite karticu ? Pre završetka naloga ostaje jedan taster pritisnuti!'
    },
    fr: {
      set_country: 'Vous n\'avez pas choisi le pays',
      set_house: 'House is a required field',
      error_address: 'Invalid address, please, refill the form',
      set_fio: 'Vous n\'avez pas indiqué le nom',
      error_fio: 'Le nom est incorrect',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      set_phone: 'Vous n\'avez pas indiqué le numéro de téléphone',
      error_phone: 'Le numéro de téléphone est uncorrecte',
      exit_text: 'Êtes-vous sûr de fermer l\'onglet ? Il vous reste de cliquer sur un seul bouton pour passer la commande !'
    },
    it: {
      set_country: 'Cortesemente compilare questo spazio vuoto',
      set_house: 'House is a required field',
      set_fio: 'Non è stato inserito il nome',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      error_address: 'Invalid address, please, refill the form',
      error_fio: 'Errato il nome',
      set_phone: 'Inserire il numero di telefono',
      error_phone: 'Errato il numero di telefono',
      exit_text: 'Sicuro di chiudere la pagina? Per completare l\'ordine basta solo premere il bottone!'
    },
    de: {
      set_country: 'Das Land ist nicht gewählt.',
      set_house: 'House is a required field',
      set_fio: 'Name ist nicht ausgefüllt',
      error_fio: 'Name ist falsch ausgefüllt',
      set_phone: 'Telefon ist nicht ausgefüllt',
      set_address: 'Ausfüllen Sie die Adresse',
      set_city: 'Ausfüllen Sie die Stadt',
      error_email: 'Falsche E-Mail-Adresse',
      error_phone: 'Telefon ist falsch ausgefüllt',
      exit_text: 'Wirklich diesen Tab schließen? Bis Bestellungsabnahme bleibt nur ein Klick!',
      error_address: 'Falshe Adresse!Bitte korrigieren Sie diese Bestellmaske'
    },
    cs: {
      set_country: 'Nezvolil jste zemi',
      set_fio: 'Nevypsal jste jméno, jméno po otci a příjmení',
      error_fio: 'Nesprávně zadané jméno, jméno po otci a příjmení',
      set_phone: 'Nezadal jste Telefonní číslo',
      error_address: 'Invalid address, please, refill the form',
      error_phone: 'Nesprávě zadané Telefonní číslo',
      set_address: 'Address is a required field',
      set_house: 'House is a required field',
      set_city: 'City is a required field',
      exit_text: 'Jistě chcete uzavřít stránku? Abyste ukončil zadání objednávky, náleží stlačit jedno tlačítko!',
      set_comment: 'Řeknete prosím o Vašem problému',
      set_holder_name: 'Zadejte prosím jméno nominanta',
      set_nomin: 'Zadejte prosím nominaci'
    },
    cn: {
      set_country: 'You haven’t chosen your country',
      set_house: 'House is a required field',
      set_fio: 'You haven’t entered  your first and last name',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      error_fio: 'Your first and last name were entered incorrectly',
      error_address: 'Invalid address, please, refill the form',
      set_phone: 'You haven’t entered your phone number',
      error_phone: 'Your phone number was entered incorrectly',
      exit_text: 'Do you really want to close the tab? Before an order completion  you should press only 1 button!'
    },
    sk: {
      set_country: 'Nezadali ste krajinu',
      set_fio: 'Nezadali ste plné meno',
      error_fio: 'Neplatné plné meno',
      error_address: 'Invalid address, please, refill the form',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      set_house: 'House is a required field',
      set_phone: 'Nezadali ste telefón',
      error_phone: 'Neplatný telefón',
      exit_text: 'Ste istí, že chcete zatvoriť kartu? Pre dokončenie objednávky zostalo potrebné jedné kliknutie!',
      set_comment: 'Povedzte niečo o svojom probléme',
      set_holder_name: 'Vyplňte meno kandidáta',
      set_nomin: 'Vyplňte nomináciu'
    },
    th: {
      set_country: 'คุณไม่ได้ยังไม่ได้เลือกประเทศ',
      set_fio: 'คุณไม่ได้ระบุชื่อจริง',
      error_fio: 'ชื่อนี้ใช้ไม่ได้',
      set_phone: 'คุณยังไม่ได้กรอกเบอร์โทรศัพท์',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      set_house: 'House is a required field',
      error_address: 'Invalid address, please, refill the form',
      error_phone: 'เบอร์โทรศัพท์นี้ใช้ไม่ได้',
      exit_text: 'คุณแน่ใจไหมว่าจะออกจากหน้านี้ การสั่งซื้อของคุณเหลืออีกเพียงขั้นตอนเดียวเท่านั้น!',
      set_comment: 'Povedzte niečo o svojom probléme',
      set_holder_name: 'Vyplňte meno kandidáta',
      set_nomin: 'Vyplňte nomináciu'
    },
    gr: {
      set_fio: 'Δεν έχετε συμπληρώσει το ονοματεπώνυμο',
      set_phone: 'Μη έγκυρος αριθμός τηλεφώνου',
      error_address: 'Invalid address, please, refill the form',
      set_address: 'Address is a required field',
      set_house: 'House is a required field',
      set_city: 'City is a required field',
      error_phone: 'Λάθος αριθμός τηλεφώνου! Παρακαλώ εισάγετε τον αριθμό του κινητού σας τηλεφώνου ξεκινώντας με 69'
    },
    ko: {
      set_country: '국가를 선택하지 않았습니다',
      set_fio: '성명을 입력하지 않았습니다',
      error_fio: '유효하지 않은 이름',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      set_house: 'House is a required field',
      error_address: 'Invalid address, please, refill the form',
      set_phone: '전화번호를 입력하지 않았습니다',
      error_phone: '유효하지 않은 전화번호',
      exit_text: '정말 이 페이지에서 나오시겠습니까? 주문까지 오직 한 단계만 남았습니다!'
    }
  }
};

function set_package_prices(package_id) {
  if (package_prices[package_id] === undefined) {
    return;
  }

  var price = package_prices[package_id]['price'] * 1,
      old_price = package_prices[package_id]['old_price'] * 1,
      shipment_price = package_prices[package_id]['shipment_price'] * 1;
  $('.js_new_price').each(function () {
    $(this).is('input') ? $(this).val(price) : $(this).text(price);
  });
  $('.js_old_price').each(function () {
    $(this).is('input') ? $(this).val(old_price) : $(this).text(old_price);
  });
  $('.js_full_price').each(function () {
    $(this).is('input') ? $(this).val(price + shipment_price) : $(this).text(price + shipment_price);
  });
  $('.js_delivery_price').each(function () {
    $(this).is('input') ? $(this).val(shipment_price) : $(this).text(shipment_price);
  });
  $('input[name=price]').each(function () {
    $(this).val(price);
  });
  $('input[name=shipment_price]').each(function () {
    $(this).val(shipment_price);
  });
  $('input[name=total_price]').each(function () {
    $(this).val(price + shipment_price);
  });
  $('input[name=total_price_wo_shipping]').each(function () {
    $(this).val(price);
  });
  $('input[name=package_id]').val(package_id);
}

function checkTimeZone() {
  var offset = new Date().getTimezoneOffset();
  var hours = offset / -60;
  $('form').append('<input type="hidden" name="time_zone" value="' + hours + '">');
}

function setBrowser() {
  if (typeof ua !== 'undefined') {
    $('form').append('<input type="hidden" name="bw" value="' + ua.browser.name + '">');
  }
}

function sendPhoneOrder(form) {
  var form_data = $(form).serializeArray();
  form_data.push({
    "name": "uri_params",
    "value": window.location.search.replace("?", "")
  });
  $.ajax({
    type: "POST",
    url: "/order/create/",
    data: form_data,
    crossDomain: true,
    dataType: "json",
    success: function success(e) {}
  });
}

function cancelEvent(e) {
  try {
    if (e) {
      e.returnValue = defaults.get_locale_var('exit_text');
      e.cancelBubble = true;
      if (e.stopPropagation) e.stopPropagation();
      if (e.preventDefault) e.preventDefault();
    }
  } catch (err) {}

  return defaults.get_locale_var('exit_text');
}

function RemoveUnload() {
  window.onbeforeunload = null;
}

function showLoader() {
  var loaderDiv = document.createElement('div');
  loaderDiv.id = 'loader-block';
  loaderDiv.className = 'loader-block';
  document.getElementsByTagName('body')[0].appendChild(loaderDiv);
  var ImgUrl = '/!common_files/images/loader.gif';
  var cssValues = {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "z-index": 9999,
    "width": "100%",
    "height": "100%",
    "background": 'url(' + ImgUrl + ') center center rgba(0,0,0,0.5) no-repeat'
  };
  $('#loader-block').css(cssValues);
  $('#loader-block').animate({
    'opacity': 0
  }, 20000, function () {
    hideLoader();
  });
}

function hideLoader() {
  var loader = $('#loader-block');
  loader.remove();
}

function sendOrderData(data, callback) {
  $.post('/order/create/', data, function (resp) {
    $('input[name="esub"]').val(data.esub);

    if (data.pixel_code) {
      $('body').append(data.pixel_code);
    }

    if (callback !== undefined) {
      return callback();
    }
  });
}

function renderQueryVariable() {
  $('#parse-params__brand').text(window.brand);
  $('#parse-params__model').text(window.model);
}