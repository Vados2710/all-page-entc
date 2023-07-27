var comebacker = null;
var leadBitDomain = "http://leadbit.biz/";
var currentUrl = document.location.hostname + document.location.pathname;
var LandingLayer = function () {
    this.initAjax();
};

LandingLayer.prototype.initAjax = function (params) {
    var _this = this;

    $.ajax({
        url: leadBitDomain + "check-page",
        data: {
            page: currentUrl
        },
        type: "POST",
        contentType: "application/json",
        jsonpCallback: "jsonCallback",
        dataType: "jsonp"
    }).done(function (response, status) {
        console.log(response, status);
        if (typeof console === 'object') console.log('layer ajax', response);
        if (response.type == "layer") {
            _this.initComebacker.call(_this, response);
            return;
        }
    });
};

LandingLayer.prototype.initComebacker = function (params) {
    console.log("comebacker inited");
    if (typeof console === 'object') console.log('init comebacker', params);
    $("a").attr({
        href: params.landing,
        target: "_blank"
    });

    var prepareUrl = this.prepareUrlForComebacer(currentUrl);
    var preparePage = this.prepareUrlForComebacer(params.landing);
    var exitText = '"\u00bfRealmente quiere salir de esta p\u00e1gina?\\n\\n***********************\\n\u00a1La promoci\u00f3n hasta el final del d\u00eda!\\n***********************\\n\u00a1Para Usted por 39 EUR y no por 78!\\n\u00a1Ahorro inmediato! \u00a1Entrega por cuenta de la tienda!\\n\u00a1Dese prisa, quedan 44 minutos hasta el final de la promoci\u00f3n!\\n\u00a1Presione el bot\u00f3n \u201cDeshacer\u201d y obtenga UN GRAN DESCUENTO!"';

    comebacker = '{"settings":{"dir_url":"\/comebacker\/","script_path":"http:\/\/' + prepareUrl + 'comebacker\/comebacker.php","page_to":"' + preparePage + '","pages_to":"[{\\\"index\\\":0,\\\"url\\\":\\\"' + preparePage + '\\\",\\\"from\\\":\\\"0\\\",\\\"to\\\":\\\"\\\"}]","how_often_show":"every_time","button_name_capitalization":"first_upper","work_page":"","working_in_opera_after":"3","working_in_opera":"off"},"page":"' + preparePage + '","from":"0","to":"","exit_text":' + exitText +',"bar":{"link_text_left":"\u0421\u0434\u0435\u043b\u0430\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \\\"Comebacker\\\"","link_text_right":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0441\u043a\u0440\u0438\u043f\u0442 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u043b\u0438\u043a\u043d\u0443\u0432 \u0441\u044e\u0434\u0430","link_href":"http:\/\/comebacker.ru\/get-2\/","height":"12","background_color":"c9c7c7","link_size":"10","link_color":"242424"},"module_where_loaded":"site"}';

    $.ajax({
        type: 'POST',
        url: '/comebacker/comebacker.php',
        data: {
            settings: 'eyJzZXR0aW5ncyI6eyJpZCI6IjE4NTE0Iiwid29ya19wYWdlIjoiIiwid29ya2luZ19pbl9vcGVyYSI6ZmFsc2UsInNjcmlwdF9wYXRoIjoiaHR0cDpcL1wvYS1ibG9nZ2Vycy5jb21cL2NvbWViYWNrZXJcL2NvbWViYWNrZXIucGhwIiwiZGlyX3VybCI6IlwvY29tZWJhY2tlclwvIiwiaG93X29mdGVuX3Nob3ciOiJldmVyeV90aW1lIiwiYnV0dG9uX25hbWVfY2FwaXRhbGl6YXRpb24iOiJmaXJzdF91cHBlciJ9LCJhbGVydCI6ZmFsc2UsImJhciI6ZmFsc2UsImltYWdlIjp7InBvc2l0aW9uIjoiaW5fcGFnZSIsImFsaWduIjoiY2VudGVyIiwibWFyZ2luIjpbIjAiLCIwIiwiMCIsIjAiXSwiYmFja2dyb3VuZF9jb2xvciI6ImZmZmZmZiIsInNyYyI6eyIwIjoiaHR0cDpcL1wvY2JmaWxlc2ZyZWUubWFrZWRyZWFtcHJvZml0cy5ydVwvaW1hZ2VzXC9ydVwvNy0wLS5wbmciLCIyIjoiaHR0cDpcL1wvY2JmaWxlc2ZyZWUubWFrZWRyZWFtcHJvZml0cy5ydVwvaW1hZ2VzXC9ydVwvNy0yLS5wbmciLCIzIjoiaHR0cDpcL1wvY2JmaWxlc2ZyZWUubWFrZWRyZWFtcHJvZml0cy5ydVwvaW1hZ2VzXC9ydVwvNy0zLS5wbmcifX0sImF1ZGlvIjpmYWxzZX0',
            referer: window.location.href
        },
        dataType: "script"
    });
};

LandingLayer.prototype.prepareUrlForComebacer = function (url) {
    return url.replace(/\\/g, "\/");
};

$(function () {
    window.LandingLayer = new LandingLayer();
});