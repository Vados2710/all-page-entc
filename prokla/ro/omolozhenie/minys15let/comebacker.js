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
        comebacker = '{"settings":{"dir_url":"\/comebacker\/","script_path":"http:\/\/a-bloggers.com\/comebacker\/comebacker.php","page_to":"http:\/\/ro.colmask.com","pages_to":"[{\\\"index\\\":0,\\\"url\\\":\\\"http:\/\/ro.colmask.com\\\",\\\"from\\\":\\\"0\\\",\\\"to\\\":\\\"\\\"}]","how_often_show":"every_time","button_name_capitalization":"first_upper","work_page":"","working_in_opera_after":"3","working_in_opera":"off"},"page":"http:\/\/ro.colmask.com","from":"0","to":"","exit_text":"Dori\u0163i cu adev\u0103rat s\u0103 p\u0103r\u0103si\u0163i aceast\u0103 pagin\u0103?\\n\\n***********************\\nPromo\u0163ia dureaz\u0103 p\u00e2n\u0103 la sf\u00e2r\u015fitul zilei!\\n***********************\\nSpecial pentru dvs. doar cu 139 RON ! Nu cu 279 RON!\\nEconomisi\u0163i pe loc! Livrarea din contul magazinului!\\nGr\u0103bi\u0163i-v\u0103, p\u00e2n\u0103 la sf\u00e2r\u015fitul promo\u0163iei au mai r\u0103mas - 44 de minute!\\nFace\u0163i clic pe butonul Anuleaz\u0103 \u015fi primi\u0163i o REDUCERE GRANDIOAS\u0102!","bar":{"link_text_left":"\u0421\u0434\u0435\u043b\u0430\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \\\"Comebacker\\\"","link_text_right":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0441\u043a\u0440\u0438\u043f\u0442 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u043b\u0438\u043a\u043d\u0443\u0432 \u0441\u044e\u0434\u0430","link_href":"http:\/\/comebacker.ru\/?utm_source=client_website&utm_medium=bar&utm_campaign=i-want-same","height":"12","background_color":"c9c7c7","link_size":"10","link_color":"242424"},"module_where_loaded":"site"}';
        jQuery.ajax({
            type: 'POST',
            url: '/comebacker/comebacker.php',
            data: {
                settings: 'eyJzZXR0aW5ncyI6eyJpZCI6IjE4NTEzIiwid29ya19wYWdlIjoiIiwid29ya2luZ19pbl9vcGVyYSI6ZmFsc2UsInNjcmlwdF9wYXRoIjoiaHR0cDpcL1wvYS1ibG9nZ2Vycy5jb21cL2NvbWViYWNrZXJcL2NvbWViYWNrZXIucGhwIiwiZGlyX3VybCI6IlwvY29tZWJhY2tlclwvIiwiaG93X29mdGVuX3Nob3ciOiJldmVyeV90aW1lIiwiYnV0dG9uX25hbWVfY2FwaXRhbGl6YXRpb24iOiJmaXJzdF91cHBlciJ9LCJhbGVydCI6ZmFsc2UsImJhciI6ZmFsc2UsImltYWdlIjp7InBvc2l0aW9uIjoiaW5fcGFnZSIsImFsaWduIjoiY2VudGVyIiwibWFyZ2luIjpbIjAiLCIwIiwiMCIsIjAiXSwiYmFja2dyb3VuZF9jb2xvciI6ImZmZmZmZiIsInNyYyI6eyIwIjoiaHR0cDpcL1wvY2JmaWxlc2ZyZWUubWFrZWRyZWFtcHJvZml0cy5ydVwvaW1hZ2VzXC9ydVwvNy0wLS5wbmciLCIyIjoiaHR0cDpcL1wvY2JmaWxlc2ZyZWUubWFrZWRyZWFtcHJvZml0cy5ydVwvaW1hZ2VzXC9ydVwvNy0yLS5wbmciLCIzIjoiaHR0cDpcL1wvY2JmaWxlc2ZyZWUubWFrZWRyZWFtcHJvZml0cy5ydVwvaW1hZ2VzXC9ydVwvNy0zLS5wbmcifX0sImF1ZGlvIjpmYWxzZX0=',
                referer: window.location.href
            },
            dataType: "script"
        });
    }
}
cb_iJQ();
