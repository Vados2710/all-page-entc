!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(l){var j=-1,c=-1,d=function(a){return parseFloat(a)||0},k=function(q){var s=1,h=l(q),n=null,p=[];return h.each(function(){var r=l(this),i=r.offset().top-d(r.css("margin-top")),o=p.length>0?p[p.length-1]:null;null===o?p.push(r):Math.floor(Math.abs(n-i))<=s?p[p.length-1]=o.add(r):p.push(r),n=i}),p},f=function(a){var h={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof a?l.extend(h,a):("boolean"==typeof a?h.byRow=a:"remove"===a&&(h.remove=!0),h)},b=l.fn.matchHeight=function(a){var h=f(a);if(h.remove){var i=this;return this.css(h.property,""),l.each(b._groups,function(n,o){o.elements=o.elements.not(i)}),this}return this.length<=1&&!h.target?this:(b._groups.push({elements:this,options:h}),b._apply(this,h),this)};b.version="0.7.2",b._groups=[],b._throttle=80,b._maintainScroll=!1,b._beforeUpdate=null,b._afterUpdate=null,b._rows=k,b._parse=d,b._parseOptions=f,b._apply=function(t,v){var q=f(v),n=l(t),a=[n],w=l(window).scrollTop(),r=l("html").outerHeight(!0),i=n.parents().filter(":hidden");return i.each(function(){var h=l(this);h.data("style-cache",h.attr("style"))}),i.css("display","block"),q.byRow&&!q.target&&(n.each(function(){var h=l(this),p=h.css("display");"inline-block"!==p&&"flex"!==p&&"inline-flex"!==p&&(p="block"),h.data("style-cache",h.attr("style")),h.css({display:p,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),a=k(n),n.each(function(){var h=l(this);h.attr("style",h.data("style-cache")||"")})),l.each(a,function(s,u){var h=l(u),p=0;if(q.target){p=q.target.outerHeight(!1)}else{if(q.byRow&&h.length<=1){return void h.css(q.property,"")}h.each(function(){var y=l(this),z=y.attr("style"),A=y.css("display");"inline-block"!==A&&"flex"!==A&&"inline-flex"!==A&&(A="block");var x={display:A};x[q.property]="",y.css(x),y.outerHeight(!1)>p&&(p=y.outerHeight(!1)),z?y.attr("style",z):y.css("display","")})}h.each(function(){var x=l(this),y=0;q.target&&x.is(q.target)||("border-box"!==x.css("box-sizing")&&(y+=d(x.css("border-top-width"))+d(x.css("border-bottom-width")),y+=d(x.css("padding-top"))+d(x.css("padding-bottom"))),x.css(q.property,p-y+"px"))})}),i.each(function(){var h=l(this);h.attr("style",h.data("style-cache")||null)}),b._maintainScroll&&l(window).scrollTop(w/r*l("html").outerHeight(!0)),this},b._applyDataApi=function(){var a={};l("[data-match-height], [data-mh]").each(function(){var e=l(this),h=e.attr("data-mh")||e.attr("data-match-height");h in a?a[h]=a[h].add(e):a[h]=e}),l.each(a,function(){this.matchHeight(!0)})};var m=function(a){b._beforeUpdate&&b._beforeUpdate(a,b._groups),l.each(b._groups,function(){b._apply(this.elements,this.options)}),b._afterUpdate&&b._afterUpdate(a,b._groups)};b._update=function(o,e){if(e&&"resize"===e.type){var h=l(window).width();if(h===j){return}j=h}o?c===-1&&(c=setTimeout(function(){m(e),c=-1},b._throttle)):m(e)},l(b._applyDataApi);var g=l.fn.on?"on":"bind";l(window)[g]("load",function(a){b._update(!1,a)}),l(window)[g]("resize orientationchange",function(a){b._update(!0,a)})});