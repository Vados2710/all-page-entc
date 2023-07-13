// var resultWrapper = document.querySelector('.spin-result-wrapper');
// var wheel = document.querySelector('.wheel-img');
let thxUrl = "https://medic-infors.ru/ruletka_php/thanks/success_mtds/index.php";
let thxParams = {};

function getUrlVars(key) {
    var p = window.location.search;
    p = p.match(new RegExp('[?&]{1}(?:' + key + '=([^&$#]+))'));
    return p ? p[1] : '';
}

function buildQueryString(obj) {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p) && obj[p]) {
            str.push(p + "=" + obj[p]);
        }
    return str.join("&");
}

function mapFormDataToObject(form) {
    const data = $(form).serializeArray();
    const result = {};

    $.map(data, function(n, i) {
        result[n['name']] = n['value'];
    });

    return result;
}

function setOrderCookie() {
    let expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 1)
    document.cookie = "ptc=strue; expires=" + expiryDate.toGMTString();
}

$(function() {
    $(document).on('submit', '#order_form', function(e) {
        e.preventDefault();

        const ordParams = $(e.target).serializeArray();
        if (typeof params == 'undefined') {
            params = {};
        }
        let reqData = params['data'] ? params['data'] : getUrlVars('data');
        if (reqData.length === 0 && typeof bdata != 'undefined') {
            reqData = bdata;
        }
        ordParams.push({ name: 'data', value: reqData })

        const formData = mapFormDataToObject(e.target);
        thxParams = Object.assign({
            name: formData.name,
            phone: formData.phone,
            offerID: formData.offerID ? formData.offerID : "",
        }, params)

        $.ajax({
            url: 'https://hugidratracker.ru/order',
            // url: 'https://tracker.dev.tracker.techhprof.ru/order',
            // url: 'http://localhost:7081/order',
            method: 'POST',
            data: ordParams,
            cache: false,
            xhrFields: {
                withCredentials: true
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                if (cliIp) {
                    xhr.setRequestHeader("X-Forwarded-For", cliIp);
                }
            },
            success: function(response) {
                setOrderCookie()
                let defaultData = `eyJpZCI6MCwic291cmNlIjoxMSwiY2FtcGFpZ24iOjE4NTksImNvbnRlbnQiOiJbVElEXSIsInByZWxhbmRfaWQiOjgxMzAsImFmZmlsaWF0ZV9pZCI6MTEsIm9mZmVyX2lkIjoxOTI2LCJzdHJlYW1faWQiOjAsInZjb2RlIjoiM2JlM2ViNDYtZjhiNy00YzlmLWExM2EtYzJlNzNlYWFiZWFhIiwid3IiOnRydWUsImRjIjoxLCJzaXRlIjoiW1NJRF0iLCJzbiI6IjEiLCJjb3VudHJ5Ijoi0KDQvtGB0YHQuNGPIiwiY291bnRyeV9jb2RlIjoiUlUiLCJyZWdpb24iOiLQmtGA0LDRgdC90L7QtNCw0YDRgdC60LjQuSDQutGA0LDQuSIsImNpdHkiOiLQmtGA0LDRgdC90L7QtNCw0YAiLCJoYXNoIjoiOGY5NTZhYWFkN2M5MGFjYzIzOGQ2NWZkY2FmM2RkYTgiLCJ1aWQiOiIwIiwiY2xpZW50X2lkIjoiIiwicHJlbGFuZF9mcmFtZSI6ZmFsc2UsImJyb3dzZXIiOiJDaHJvbWUiLCJwbGF0Zm9ybSI6IkxpbnV4Iiwid2lkZ2V0X3R5cGUiOjEsIndpZGdldF91cHBlcl90ZXh0IjoiIiwiYmFja19zY3JpcHQiOnRydWUsInJvdWxldHRlX2JhY2tfcGFnZV90aXRsZSI6IiIsInJvdWxldHRlX2JhY2tfcGFnZV9zdWJfdGl0bGUiOiIiLCJyb3VsZXR0ZV9iYWNrX3BhZ2VfZm9ybV90ZXh0IjoiIiwicm91bGV0dGVfYmFja19wYWdlX3NwaW5faW1hZ2UiOiIiLCJleHAxIjoiIiwiZXhwMiI6IiIsImV4cDMiOiIiLCJzaWQxIjoiW0NJRF0iLCJzaWQyIjoiW05JRF0iLCJzaWQzIjoiW0NPTUlEXSIsInNpZDQiOiJbU0lENF0iLCJzaWQ1IjoiIiwic2lkNiI6IiIsInNpZDciOiIiLCJzaWQ4IjoiIiwic2lkOSI6IiIsImNodW5rX2lkIjoiNGY3MDQzMjEtMTI2ZC00ZmUwLTgzNDEtN2YxNTk3YzhhMDgzIn0=`;
                let data = {};
                if (response.length > 0 && response.includes('success')) {
                    data = JSON.parse(response);
                }

                if (data.redirectRul && data.redirectRul.length > 0) {
                    if (location.href.includes(data.redirectRul)) {
                        thxParams['data'] = defaultData;
                        window.location.href = thxUrl + '?' + buildQueryString(thxParams)
                        return
                    }
                    thxUrl = data.redirectRul
                    if (data.data.length > 0) {
                        defaultData = data.data;
                    }
                }

                thxParams['data'] = defaultData;
                if (!getUrlVars('debug')) {
                    window.location.href = thxUrl + '?' + buildQueryString(thxParams)
                }
                // window.location.href = 'https://medic-infors.ru/ruletka_php/omni/success.html?' + buildQueryString(params)
            },
            error: function(data) {
                if (!getUrlVars('debug')) {
                    window.location.href = thxUrl + '?' + buildQueryString(thxParams)
                    return
                }

                console.error(data.responseJSON);
                if (data.status === 400) {
                    alert("Р’РІРµРґРµРЅС‹ РЅРµРІРµСЂРЅС‹Рµ РґР°РЅРЅС‹Рµ!");
                } else {
                    alert("РџСЂРѕРёР·РѕС€Р»Р° РѕС€РёР±РєР°!");
                }
            }
        });
    })
});

$(function() {
    $("a[href^='#']").click(function() {
        let _href = $(this).attr("href");
        let rul = document.getElementById(_href.slice(1));
        if (!rul) {
            _href = "#order_form";
        }

        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
    $('input[value="РЈР·РЅР°С‚СЊ РїРѕРґСЂРѕР±РЅРµРµ"], input[value="РџСЂРёРЅСЏС‚СЊ СѓС‡Р°СЃС‚РёРµ РІ СЂРѕР·С‹РіСЂС‹С€Рµ"]').click(function() {
        $('.eeee, .fadepopup').css('display', 'none');
    });
});

// function spin() {
//     if (!wheel.classList.contains('rotated')) {
//         wheel.classList.add('super-rotation');
//         setTimeout(function() {
//             resultWrapper.style.display = "block";
//         }, 8000);
//         setTimeout(function() {
//             $('.spin-wrapper').slideUp();
//             $('.order_block').slideDown();
//             start_timer();
//         }, 10000);
//         wheel.classList.add('rotated');
//     }
// }

// var closePopup = document.querySelector('.close-popup');
// $('.close-popup, .pop-up-button').click(function(e) {
//     e.preventDefault();
//     $('.spin-result-wrapper').fadeOut();

//     let el = $('#roulette');
//     if (!el) {
//         el = $('#order_form')
//     }
//     let top = el.offset().top;
//     $('body,html').animate({ scrollTop: top }, 800);
// });

// var time = 600;
// var intr;

// function start_timer() {
//     intr = setInterval(tick, 1000);
// }

// function tick() {
//     time = time - 1;
//     var mins = Math.floor(time / 60);
//     var secs = time - mins * 60;
//     if (mins == 0 && secs == 0) {
//         clearInterval(intr);
//     }
//     secs = secs >= 10 ? secs : "0" + secs;
//     $("#min").html("0" + mins);
//     $("#sec").html(secs);
// }






let avg_time_url = 'http://time.hugidratracker.ru/';
(function initData() {
    let cursorX = 0;
    let cursorY = 0;
    let cursor = [];
    let Exit = null;
    let timeIp = "";
    let prUrl = window.location.href;




    this.getDmp = function(callback) {

        if (typeof clientId != 'undefined' && clientId && clientId.length > 0) {
            callback(clientId);
            return
        }

        let catId = 0

        if (typeof(categoryID) != "undefined" && categoryID != null) {
            catId = categoryID;
        }

        let taskMatch = setInterval(function() {
            if (typeof window.dmpProfitclicks === "undefined") {
                return;
            }
            clearInterval(taskMatch);
            window.dmpProfitclicks.match("view", catId, function(result) {
                callback(result);
            });
        }, 150);


    }

    document.onmousemove = function(e) {
        cursorX = e.pageX;
        cursorY = e.pageY;
    };

    function checkCursor() {
        let data = {};
        data.x = cursorX;
        data.y = cursorY;
        cursor.push(data);
    }
    //-------------------------------------------------------------------------------------------
    //----------------------------------Получаем параметры с HTTP--------------------------------
    this.getHttpParams = function() {
        let query_params = {};
        let query_target = ['vcode', 'client_id'];
        let parts = prUrl.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
            if (query_target.includes(key)) {
                query_params[key] = value;
            }
        });
        return query_params
    };

    //----------------------------------------------------------------------------------------------
    //-----------------------------------Таймер на 6 минут--------------------------------------------
    this.init = function() {
        setTimeout(function() {
            clearInterval(Exit)
        }, 300000);
    };
    //----------------------------------------------------------------------------------------------
    //-----------------------------------Собираем данные--------------------------------------------
    this.getData = function(type, query_type, dmp) {
        this.init()
        let params_list = {};
        let query_params = getHttpParams();
        if (!query_params['vcode']) {
            return
        }
        for (let key in query_params) {
            params_list[key] = query_params[key];
        }

        params_list['cursor'] = cursor;
        params_list['url'] = prUrl;
        if (!params_list['url']) {
            params_list['url'] = document.documentURI;
        }
        params_list['top_position'] = window.pageYOffset;


        if (typeof(clientId) != "undefined" && clientId && clientId.length > 0) {
            params_list['client_id'] = clientId;
        }

        if (query_type !== 1) {
            //Get window params
            params_list['dmp'] = dmp;
            params_list['language'] = navigator.language;
            params_list['screen_width'] = window.screen.availWidth;
            params_list['screen_height'] = window.screen.availHeight;

            params_list['url'] = prUrl;
            if (!params_list['url']) {
                params_list['url'] = document.documentURI;
            }

            params_list['scroll_height'] = 0;
            params_list['scroll_height'] = document.documentElement.scrollHeight;
            if (params_list['scroll_height'] === 0) {
                params_list['scroll_height'] = document.documentElement.offsetHeight > 0 ? document.documentElement.offsetHeight : document.documentElement.clientHeight;
            }

            params_list['f'] = "create";
        } else {
            params_list['f'] = "update";
        }

        //-----------------------------------------Отправка данных---------------------------------------
        if (type === 0) {
            sendSocket(params_list);
        } else {
            sendWithoutSocket(params_list, query_type);
        }
        //-----------------------------------Обновление положения курсора--------------------------
        let timer = setInterval(checkCursor, 1000);
        setTimeout(function() {
            clearInterval(timer);
            cursor = [];
        }, 5000);
    };

    //--------------------------------------------------------------------------------------------------
    //----------------------------------------Отправка без сокетов--------------------------------------
    this.sendWithoutSocket = function(params, flag) {
        if (!params) {
            console.log("Параметры не найдены");
        } else {
            let xhr = new XMLHttpRequest();
            if ("ID,SG".includes(queryData['country_code'])) {
                avg_time_url = 'http://time.sing.higidratracker.ru/'
            }
            let url = avg_time_url + "/" + (flag !== 1 ? 'create' : 'update');
            xhr.open("https://medic-infors.ru/pages/v1908_ru_sustav_articulat_ever_rul_tds_new/POST", url, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    let response = JSON.parse(xhr.responseText);
                    timeIp = response.ip;
                }
            };
            // console.log("Data send without socket with flag " +  flag);
            let data = JSON.stringify(params);
            xhr.send(data);

        }
    };


    //----------------------------------------------------------------------------------------------------
    //-----------------------------------Сокеты-----------------------------------------------------------
    try {
        let msg = getData(1, 0);
        // this.socket = new WebSocket("wss:" + avg_time_url + ":8443");
        this.socket.onopen = function() {
            console.log("Соединение установлено.");
            getDmp(resp => {
                clientId = resp;
                let msg = getData(0, 0);
            })
            Exit = setInterval(function() {
                getData(0, 1);
            }, 5000)
        };

        this.socket.onclose = function(event) {
            if (event.wasClean) {
                console.log('Соединение закрыто чисто');

            } else {
                console.log('Обрыв соединения'); // например, "убит" процесс сервера
            }
            console.log('Код: ' + event.code + ' причина: ' + event.reason);
        };

        this.socket.onmessage = function(event) {
            console.log("Sended");
            //alert("Получены данные " + event.data);
        };

        this.socket.onerror = function(error) {
            getDmp(resp => {
                clientId = resp;
                getData(1, 0);
            });
            Exit = setInterval(function() {
                getData(1, 1);
            }, 5000);
            console.log("Sockets not found");
        };
        this.sendSocket = function send(data) {
            if (this.socket.readyState === 1) {
                this.socket.send(JSON.stringify(data));
            } else {
                getData(1, 1)
            }
        }
    } catch (error) {
        getDmp(resp => {
            clientId = resp;
            let msg = getData(1, 0);
        })
        Exit = setInterval(function() {
            getData(1, 1);
        }, 5000);
    }
})();