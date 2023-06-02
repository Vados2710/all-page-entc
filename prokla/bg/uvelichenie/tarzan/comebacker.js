var comebacker = null;
var cb_jqi = false;
var cb_jqnc = false;

function cb_iJQ() {
    if (!window.jQuery) {
        if (!cb_jqi) {
            if (window.$) cb_jqnc = true;
            var script = document.createElement('script');
            script.type = "text/javascript";
            script.src = "//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
            document.getElementsByTagName('head')[0].appendChild(script);
            cb_jqi = true;
        }
        setTimeout('cb_iJQ()', 50);
    } else {
        if (cb_jqnc) $.noConflict();
        comebacker = '{"settings":{"dir_url":"\/comebacker\/","script_path":"http:\/\/a-bloggers.com\/comebacker\/comebacker.php","page_to":"http:\/\/bg.maxisize-pro.com\/","pages_to":"[{\\\"index\\\":0,\\\"url\\\":\\\"http:\/\/bg.maxisize-pro.com\/\\\",\\\"from\\\":\\\"0\\\",\\\"to\\\":\\\"\\\"}]","how_often_show":"every_time","button_name_capitalization":"first_upper","work_page":"","working_in_opera_after":"3","working_in_opera":"off"},"page":"http:\/\/bg.maxisize-pro.com\/","from":"0","to":"","exit_text":"\u041d\u0430\u0438\u0441\u0442\u0438\u043d\u0430 \u043b\u0438 \u0438\u0441\u043a\u0430\u0442\u0435 \u0434\u0430 \u0437\u0430\u0442\u0432\u043e\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0442\u0430?\\n\\n***********************\\n\u0414\u0435\u0439\u0441\u0442\u0432\u0430\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u0438 \u043a\u0440\u0430\u044f \u043d\u0430 \u0434\u0435\u043d\u044f!\\n***********************\\n\u0417\u0430 \u0432\u0430\u0441 - 59 BGL, \u0432\u043c\u0435\u0441\u0442\u043e 118!\\n\u0421\u043f\u0435\u0441\u0442\u044f\u0432\u0430\u0442\u0435 \u043d\u0430 \u043c\u043e\u043c\u0435\u043d\u0442\u0430! \u0411\u0435\u0437\u043f\u043b\u0430\u0442\u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u0438\u0440\u0435\u043a\u0442\u043d\u043e \u043e\u0442 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430!\\n\u041f\u043e\u0431\u044a\u0440\u0437\u0430\u0439\u0442\u0435, \u043e\u0441\u0442\u0430\u0432\u0430\u0442 44 \u043c\u0438\u043d\u0443\u0442\u0438 \u0434\u043e \u0438\u0437\u0442\u0438\u0447\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u0442\u0430\u0437\u0438 \u043e\u0444\u0435\u0440\u0442\u0430!\\n\u041d\u0430\u0442\u0438\u0441\u043d\u0435\u0442\u0435 \u041f\u0440\u0435\u043a\u0440\u0430\u0442\u0438 (Cancel) \u0438 \u0449\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u041e\u0413\u0420\u041e\u041c\u041d\u0410 \u041e\u0422\u0421\u0422\u042a\u041f\u041a\u0410!\\n","bar":{"link_text_left":"\u0421\u0434\u0435\u043b\u0430\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \\\"Comebacker\\\"","link_text_right":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0441\u043a\u0440\u0438\u043f\u0442 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u043b\u0438\u043a\u043d\u0443\u0432 \u0441\u044e\u0434\u0430","link_href":"http:\/\/comebacker.ru\/?utm_source=client_website&utm_medium=bar&utm_campaign=i-want-same","height":"12","background_color":"c9c7c7","link_size":"10","link_color":"242424"},"module_where_loaded":"site"}';
        jQuery.ajax({
            type: 'POST',
            url: '/comebacker/comebacker.php',
            data: {
                settings: 'eyJzZXR0aW5ncyI6eyJpZCI6IjE4NTIwIiwid29ya19wYWdlIjoiIiwid29ya2luZ19pbl9vcGVyYSI6ZmFsc2UsInNjcmlwdF9wYXRoIjoiaHR0cDpcL1wvYS1ibG9nZ2Vycy5jb21cL2NvbWViYWNrZXJcL2NvbWViYWNrZXIucGhwIiwiZGlyX3VybCI6IlwvY29tZWJhY2tlclwvIiwiaG93X29mdGVuX3Nob3ciOiJldmVyeV90aW1lIiwiYnV0dG9uX25hbWVfY2FwaXRhbGl6YXRpb24iOiJmaXJzdF91cHBlciJ9LCJhbGVydCI6ZmFsc2UsImJhciI6ZmFsc2UsImltYWdlIjp7InBvc2l0aW9uIjoiaW5fcGFnZSIsImFsaWduIjoiY2VudGVyIiwibWFyZ2luIjpbIjAiLCIwIiwiMCIsIjAiXSwiYmFja2dyb3VuZF9jb2xvciI6ImZmZmZmZiIsInNyYyI6eyIwIjoiaHR0cDpcL1wvY2JmaWxlc2ZyZWUubWFrZWRyZWFtcHJvZml0cy5ydVwvaW1hZ2VzXC9ydVwvNy0wLS5wbmciLCIyIjoiaHR0cDpcL1wvY2JmaWxlc2ZyZWUubWFrZWRyZWFtcHJvZml0cy5ydVwvaW1hZ2VzXC9ydVwvNy0yLS5wbmciLCIzIjoiaHR0cDpcL1wvY2JmaWxlc2ZyZWUubWFrZWRyZWFtcHJvZml0cy5ydVwvaW1hZ2VzXC9ydVwvNy0zLS5wbmcifX0sImF1ZGlvIjpmYWxzZX0=',
                referer: window.location.href
            },
            dataType: "script"
        });
    }
}
cb_iJQ();
