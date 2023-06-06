/*
 Sticky-kit v1.1.2 | MIT | Leaf Corcoran 2015 | http://leafo.net
*/
(function(){var c,f;c=this.jQuery||window.jQuery;f=c(window);c.fn.stick_in_parent=function(b){var A,w,B,n,p,J,k,E,t,K,q,L;null==b&&(b={});t=b.sticky_class;B=b.inner_scrolling;E=b.recalc_every;k=b.parent;p=b.offset_top;n=b.spacer;w=b.bottoming;null==p&&(p=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=c(document);null==w&&(w=!0);J=function(a){var b;return window.getComputedStyle?(a=window.getComputedStyle(a[0]),b=parseFloat(a.getPropertyValue("width"))+parseFloat(a.getPropertyValue("margin-left"))+
parseFloat(a.getPropertyValue("margin-right")),"border-box"!==a.getPropertyValue("box-sizing")&&(b+=parseFloat(a.getPropertyValue("border-left-width"))+parseFloat(a.getPropertyValue("border-right-width"))+parseFloat(a.getPropertyValue("padding-left"))+parseFloat(a.getPropertyValue("padding-right"))),b):a.outerWidth(!0)};K=function(a,b,q,C,F,u,r,G){var v,H,m,D,I,d,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));if(!g.length)throw"failed to find stick parent";
v=m=!1;(h=null!=n?n&&a.closest(n):c("<div />"))&&h.css("position",a.css("position"));x=function(){var d,f,e;if(!G&&(I=A.height(),d=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),b=parseInt(g.css("padding-bottom"),10),q=g.offset().top+d+f,C=g.height(),m&&(v=m=!1,null==n&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-p,u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:J(a),
height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,d=p,z=E,l=function(){var c,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+d>C+q,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:d}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,d=p,null==n&&("left"!==r&&"right"!==r||a.insertAfter(h),h.detach()),c={position:"",width:"",top:""},a.css(c).removeClass(t).trigger("sticky_kit:unstick")),
B&&(c=f.height(),u+p>c&&!v&&(d-=l,d=Math.max(c-u,d),d=Math.min(p,d),m&&a.css({top:d+"px"})))):e>F&&(m=!0,c={position:"fixed",top:d},c.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(c).addClass(t),null==n&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+d>C+q),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),a.css({position:"absolute",bottom:b,top:"auto"}).trigger("sticky_kit:bottom")},
y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);c(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==n&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",y),c(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,
0)}};q=0;for(L=this.length;q<L;q++)b=this[q],K(c(b));return this}}).call(this);



/**
 * bootbox.js v4.3.0
 *
 * http://bootboxjs.com/license.txt
 */
!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):a.bootbox=b(a.jQuery)}(this,function a(b,c){"use strict";function d(a){var b=q[o.locale];return b?b[a]:q.en[a]}function e(a,c,d){a.stopPropagation(),a.preventDefault();var e=b.isFunction(d)&&d(a)===!1;e||c.modal("hide")}function f(a){var b,c=0;for(b in a)c++;return c}function g(a,c){var d=0;b.each(a,function(a,b){c(a,b,d++)})}function h(a){var c,d;if("object"!=typeof a)throw new Error("Please supply an object of options");if(!a.message)throw new Error("Please specify a message");return a=b.extend({},o,a),a.buttons||(a.buttons={}),a.backdrop=a.backdrop?"static":!1,c=a.buttons,d=f(c),g(c,function(a,e,f){if(b.isFunction(e)&&(e=c[a]={callback:e}),"object"!==b.type(e))throw new Error("button with key "+a+" must be an object");e.label||(e.label=a),e.className||(e.className=2>=d&&f===d-1?"btn-primary":"btn-default")}),a}function i(a,b){var c=a.length,d={};if(1>c||c>2)throw new Error("Invalid argument length");return 2===c||"string"==typeof a[0]?(d[b[0]]=a[0],d[b[1]]=a[1]):d=a[0],d}function j(a,c,d){return b.extend(!0,{},a,i(c,d))}function k(a,b,c,d){var e={className:"bootbox-"+a,buttons:l.apply(null,b)};return m(j(e,d,c),b)}function l(){for(var a={},b=0,c=arguments.length;c>b;b++){var e=arguments[b],f=e.toLowerCase(),g=e.toUpperCase();a[f]={label:d(g)}}return a}function m(a,b){var d={};return g(b,function(a,b){d[b]=!0}),g(a.buttons,function(a){if(d[a]===c)throw new Error("button key "+a+" is not allowed (options are "+b.join("\n")+")")}),a}var n={dialog:"<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",header:"<div class='modal-header'><h4 class='modal-title'></h4></div>",footer:"<div class='modal-footer'></div>",closeButton:"<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",form:"<form class='bootbox-form'></form>",inputs:{text:"<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",textarea:"<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",email:"<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",select:"<select class='bootbox-input bootbox-input-select form-control'></select>",checkbox:"<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",date:"<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",time:"<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",number:"<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",password:"<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"}},o={locale:"en",backdrop:!0,animate:!0,className:null,closeButton:!0,show:!0,container:"body"},p={};p.alert=function(){var a;if(a=k("alert",["ok"],["message","callback"],arguments),a.callback&&!b.isFunction(a.callback))throw new Error("alert requires callback property to be a function when provided");return a.buttons.ok.callback=a.onEscape=function(){return b.isFunction(a.callback)?a.callback():!0},p.dialog(a)},p.confirm=function(){var a;if(a=k("confirm",["cancel","confirm"],["message","callback"],arguments),a.buttons.cancel.callback=a.onEscape=function(){return a.callback(!1)},a.buttons.confirm.callback=function(){return a.callback(!0)},!b.isFunction(a.callback))throw new Error("confirm requires a callback");return p.dialog(a)},p.prompt=function(){var a,d,e,f,h,i,k;if(f=b(n.form),d={className:"bootbox-prompt",buttons:l("cancel","confirm"),value:"",inputType:"text"},a=m(j(d,arguments,["title","callback"]),["cancel","confirm"]),i=a.show===c?!0:a.show,a.message=f,a.buttons.cancel.callback=a.onEscape=function(){return a.callback(null)},a.buttons.confirm.callback=function(){var c;switch(a.inputType){case"text":case"textarea":case"email":case"select":case"date":case"time":case"number":case"password":c=h.val();break;case"checkbox":var d=h.find("input:checked");c=[],g(d,function(a,d){c.push(b(d).val())})}return a.callback(c)},a.show=!1,!a.title)throw new Error("prompt requires a title");if(!b.isFunction(a.callback))throw new Error("prompt requires a callback");if(!n.inputs[a.inputType])throw new Error("invalid prompt type");switch(h=b(n.inputs[a.inputType]),a.inputType){case"text":case"textarea":case"email":case"date":case"time":case"number":case"password":h.val(a.value);break;case"select":var o={};if(k=a.inputOptions||[],!k.length)throw new Error("prompt with select requires options");g(k,function(a,d){var e=h;if(d.value===c||d.text===c)throw new Error("given options in wrong format");d.group&&(o[d.group]||(o[d.group]=b("<optgroup/>").attr("label",d.group)),e=o[d.group]),e.append("<option value='"+d.value+"'>"+d.text+"</option>")}),g(o,function(a,b){h.append(b)}),h.val(a.value);break;case"checkbox":var q=b.isArray(a.value)?a.value:[a.value];if(k=a.inputOptions||[],!k.length)throw new Error("prompt with checkbox requires options");if(!k[0].value||!k[0].text)throw new Error("given options in wrong format");h=b("<div/>"),g(k,function(c,d){var e=b(n.inputs[a.inputType]);e.find("input").attr("value",d.value),e.find("label").append(d.text),g(q,function(a,b){b===d.value&&e.find("input").prop("checked",!0)}),h.append(e)})}return a.placeholder&&h.attr("placeholder",a.placeholder),a.pattern&&h.attr("pattern",a.pattern),f.append(h),f.on("submit",function(a){a.preventDefault(),a.stopPropagation(),e.find(".btn-primary").click()}),e=p.dialog(a),e.off("shown.bs.modal"),e.on("shown.bs.modal",function(){h.focus()}),i===!0&&e.modal("show"),e},p.dialog=function(a){a=h(a);var c=b(n.dialog),d=c.find(".modal-dialog"),f=c.find(".modal-body"),i=a.buttons,j="",k={onEscape:a.onEscape};if(g(i,function(a,b){j+="<button data-bb-handler='"+a+"' type='button' class='btn "+b.className+"'>"+b.label+"</button>",k[a]=b.callback}),f.find(".bootbox-body").html(a.message),a.animate===!0&&c.addClass("fade"),a.className&&c.addClass(a.className),"large"===a.size&&d.addClass("modal-lg"),"small"===a.size&&d.addClass("modal-sm"),a.title&&f.before(n.header),a.closeButton){var l=b(n.closeButton);a.title?c.find(".modal-header").prepend(l):l.css("margin-top","-10px").prependTo(f)}return a.title&&c.find(".modal-title").html(a.title),j.length&&(f.after(n.footer),c.find(".modal-footer").html(j)),c.on("hidden.bs.modal",function(a){a.target===this&&c.remove()}),c.on("shown.bs.modal",function(){c.find(".btn-primary:first").focus()}),c.on("escape.close.bb",function(a){k.onEscape&&e(a,c,k.onEscape)}),c.on("click",".modal-footer button",function(a){var d=b(this).data("bb-handler");e(a,c,k[d])}),c.on("click",".bootbox-close-button",function(a){e(a,c,k.onEscape)}),c.on("keyup",function(a){27===a.which&&c.trigger("escape.close.bb")}),b(a.container).append(c),c.modal({backdrop:a.backdrop,keyboard:!1,show:!1}),a.show&&c.modal("show"),c},p.setDefaults=function(){var a={};2===arguments.length?a[arguments[0]]=arguments[1]:a=arguments[0],b.extend(o,a)},p.hideAll=function(){return b(".bootbox").modal("hide"),p};var q={br:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Sim"},cs:{OK:"OK",CANCEL:"Zrušit",CONFIRM:"Potvrdit"},da:{OK:"OK",CANCEL:"Annuller",CONFIRM:"Accepter"},de:{OK:"OK",CANCEL:"Abbrechen",CONFIRM:"Akzeptieren"},el:{OK:"Εντάξει",CANCEL:"Ακύρωση",CONFIRM:"Επιβεβαίωση"},en:{OK:"OK",CANCEL:"Cancel",CONFIRM:"OK"},es:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Aceptar"},et:{OK:"OK",CANCEL:"Katkesta",CONFIRM:"OK"},fi:{OK:"OK",CANCEL:"Peruuta",CONFIRM:"OK"},fr:{OK:"OK",CANCEL:"Annuler",CONFIRM:"D'accord"},he:{OK:"אישור",CANCEL:"ביטול",CONFIRM:"אישור"},id:{OK:"OK",CANCEL:"Batal",CONFIRM:"OK"},it:{OK:"OK",CANCEL:"Annulla",CONFIRM:"Conferma"},ja:{OK:"OK",CANCEL:"キャンセル",CONFIRM:"確認"},lt:{OK:"Gerai",CANCEL:"Atšaukti",CONFIRM:"Patvirtinti"},lv:{OK:"Labi",CANCEL:"Atcelt",CONFIRM:"Apstiprināt"},nl:{OK:"OK",CANCEL:"Annuleren",CONFIRM:"Accepteren"},no:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},pl:{OK:"OK",CANCEL:"Anuluj",CONFIRM:"Potwierdź"},pt:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Confirmar"},ru:{OK:"OK",CANCEL:"Отмена",CONFIRM:"Применить"},sv:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},tr:{OK:"Tamam",CANCEL:"İptal",CONFIRM:"Onayla"},zh_CN:{OK:"OK",CANCEL:"取消",CONFIRM:"确认"},zh_TW:{OK:"OK",CANCEL:"取消",CONFIRM:"確認"}};return p.init=function(c){return a(c||b)},p});
//------------------------------------------------------------

$.fn.ajaxSubmit = function()
{
	var $form = $(this);
	var $target = $("#form-messages");
	var $type = $(this).data("type");
	if($type) $datatype=$type;
	else $datatype='html';

	var $callback = $(this).data("callback");
	if($callback) $callback_func=$callback;
	else $callback_func='jsonpSuccess';
	
	if($datatype=='jsonp')
	{
		$.ajax({
			type: $form.attr('method'),
			url: $form.attr('action'),
			data: $form.serialize(),
			dataType: $datatype,
			crossDomain: true,
			jsonpCallback: $callback_func,
			success: function(data, status) {

			}
		});
	}
	else
	{
		$.ajax({
			type: $form.attr('method'),
			url: $form.attr('action'),
			data: $form.serialize(),
			success: function(data, status) {
				result=$.parseJSON(data);
				$target.find(".modal-body").html(result.message);
				$target.find(".modal-title").html(result.title);
				$target.modal('show');
				if(result.res) $form[0].reset();
				$callback_func;
			}
		});
	}
	//event.preventDefault();
}

function fb_share()
{
	url=location.href;
	//url=url.replace(/\/([0-9]+)\.html/i, '.html');
	//alert(url);
	window.open('../facebook.com/sharer.php@u=' + encodeURIComponent(url), '_blank', 'width=540,height=380');
	return false;
}
function tweet_share()
{
	url=location.href;
	window.open('../https@twitter.com/share@url=' + encodeURIComponent(url), '_blank', 'width=540,height=380');
	return false;
}
function gplus_share()
{
	url=location.href;
	window.open('../https@plus.google.com/share@url=' + encodeURIComponent(url), '_blank', 'width=540,height=380');
	return false;
}  
function pinit_share()
{
	url=location.href;
	media=$('meta[property="og:image"]').attr('content'); 
	description=$('meta[property="og:description"]').attr('content'); 
		
	window.open('../pinterest.com/pin/create/button/@url=' + encodeURIComponent(url)+'&media='+encodeURIComponent(media)+'&description='+description, '_blank', 'width=540,height=380');
	return false;
}
function goToElement(element)
{   
	if(element.length)	$('html,body').animate({'scrollTop':element.offset().top},1000);
	else $('html,body').animate({'scrollTop':0},1000);   
}

function show_message(title,message)
{
	var $target = $("#form-messages");
	$target.find(".modal-body").html(message);
	$target.find(".modal-title").html(title);
	$target.modal('show');
}


var count=0;
var senderVal;
function txtLettersLeft()
{
	var chars, message;
	var anz=0, len=0,s;
	var msg = document.CosmoForm.bgtext.value;
	//var selected = document.CosmoForm.sender.selectedIndex;

// 		if( selected != 0 ) {
// 			sender =  document.CosmoForm.sender.options[selected].text.length;
// 			senderNew = document.CosmoForm.sender.options[selected].text;
// 		} else {
// 			sender = document.CosmoForm.From.value.length;
// 			senderNew = document.CosmoForm.From.value.length;
// 		}

	if (!chars) {
		chars = 35;
	}
	for (var i=0; i<msg.length; i++) {
		if (anz==chars) {
			count = 0;
			break;
		}
		anz++;
	}

	len = i;

	if (msg.length >= chars) {
		var IE=(navigator.appName.indexOf("Explorer")!=-1)?true:false;
		var Mozilla=(navigator.userAgent.indexOf("Mozilla")!=-1)?true:false;
		var Build=(navigator.userAgent.indexOf("rv:")!=-1)?true:false;
		var Opera=(navigator.userAgent.indexOf("Opera")!=-1)?true:false;
		var Netscape=(navigator.appName.indexOf("Netscape")!=-1)?true:false;
		var NS6=(navigator.userAgent.indexOf("netscape6") != -1)?true:false;
		var NS7=(navigator.userAgent.indexOf("netscape7") != -1)?true:false;
// 			if (senderNew!=senderVal) {
// 				senderVal = senderNew;
// 				document.CosmoForm.bgtext.value = msg.substring(0,len);
// 			} else {
		if ( (IE && !Opera) || (Mozilla && Build) || (NS6 && !Opera) || (NS7 && !Opera) ) {
			document.CosmoForm.bgtext.value = msg.substring(0,len);
		} else {
			if (count == 0) {
				document.CosmoForm.bgtext.value = msg.substring(0,len);
				count++;
			} else {
				document.CosmoForm.bgtext.value = msg.substring(0,len);
			}
			document.CosmoForm.bgtext.value = msg;
		}
		//}
	}
	//senderVal = senderNew;
	document.CosmoForm.msgLen.value = chars-anz;
	if (navigator.appName =="Netscape" && parseInt(navigator.appVersion) <= 4) {
		document.captureEvents(Event.KEYPRESS);document.CosmoForm.bgtext.onkeypress = txtLettersLeft;
		//document.captureEvents(Event.CHANGE);document.CosmoForm.sender.onchange = smsLettersLeft;
		document.captureEvents(Event.KEYPRESS);document.CosmoForm.From.onkeypress = txtLettersLeft;
	}
}

function fb_login(url,calback)
{

	FB.getLoginStatus(function(response)
	{
		if (response.status === 'connected')
		{
			$.post(url,function(data)
			{
				if(calback) calback(data);
				else if(data) location.href=data;
			})
		}
		else
		{
			FB.login(function(response)
			{
				if (response.authResponse)
				{
					FB.api('me', function(response) {
						$.post(url,function(data)
						{
							if(calback) calback(data);
							else if(data) location.href=data;
						})
					});
				}
			},
			{
				'scope':'email'

			});
		}
	});
}

function gp_login(url,calback){	
	var config = {
			'client_id':'285275819280-j5ksue81ftl03ru4bo42q498chu03vc4.apps.googleusercontent.com',
			'scope':'../https@www.googleapis.com/auth/plus.login https_3A//www.googleapis.com/auth/userinfo.email https_3A//www.googleapis.com/auth/userinfo.profile',
      
		 };  	
	gapi.auth.authorize(config, function(response){ 
  var token=response.access_token;
  var expired=response.expires_at;
  var state=response.state;  
  if(token)
  {
    var data = {'code':token, 'expired':expired,'state': state};
  	jQuery.ajax({
  	type: 'POST',			
  	data: data,							
  	url: url,										
  	success: function(data){
      if(calback) calback(data);
			else if(data) location.href=data;				
  	}
  	});
   }
	});	
}
