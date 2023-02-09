
$(document).ready(function(){

// прогружаем метрику

if(metrika){

    (function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
    try {
    eval(    
        'w.yaCounter'+counterId+' = new Ya.Metrika({id:'+counterId+',webvisor:true,clickmap:true,trackLinks:true});'
        );

    } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
    s = d.createElement("script"),
    f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
    d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
}

//Камбекер
    if (comeBack){
            //окно камбекера
            var backDialogText = "ПОДОЖДИТЕ!!!\n\nВозможно вы желаете посмотреть САМЫЕ ИНТЕРЕСНЫЕ ВИДЕО РОЛИКИ 18+?!\n\nНажмите 'Остаться на сайте'";
            var exit = false;
            window.onbeforeunload = function(e) {
                if(!exit){
                    $('html,body').scrollTop(0);
                    $('#preRoll').css('display','block');
                    $('body').append("<iframe src='redirect.php' width='100%' height='100%' align='middle' frameborder='0'></iframe>");
                    $('.screenLock').css('display', 'none');
                    exit = true;
                    return backDialogText;
                }
            }
            $(function(){
                var backCode = '<img src="cb.jpg" style="width:100%;margin-bottom: 10000px;" id="preRoll" />';
                $('body').prepend(backCode);
                $('#preRoll').css('display','none');
                $('body').bind('keydown',function(e){if(e.keyCode==116){exit=true;}});
            });
    }



        //перебиваем все ссылки на нашу
        $('a').attr('href', offerLink);
        //лендинг в новом окне
        $('a').attr('target', '_blank');


        //биндим "назад" на витрину
        !function(){
            var t;
            try {
            for (t = 0; 10 > t; ++t) history.pushState({}, "", "#");
            onpopstate = function (t) {
            t.state && location.replace(vitrina)
            }
            } catch (o) {}
        }();

        //Выводим текущую дату в элемент с классом js-date
        d = new Date();
        p = new Date(d.getTime() - 10 * 86400000);
        var yr = d.getFullYear();
        montha = '01,02,03,04,05,06,07,08,09,10,11,12'.split(',');
        date_html = p.getDate() + '.' + montha[p.getMonth()] + '.' + yr;
        p0 = new Date(d.getTime() - 0 * 86400000);
        date_html0 = p0.getDate() + '.' + montha[p0.getMonth()] + '.' + yr;
        $('.js-date').html(date_html0);


        //Выводим город в элемент с классом js-city    
        if(jsCity){
              $.ajax ({
                type: "GET",
                url: "city.php",
                success: function(data) {
                  jQuery(".js-city").text(data);
                },
                error: function() {
                  jQuery(".js-city").text("Москва");
                }
              })

        }   



        if(isPopup){
        //Добавляем попап при уводе мышки
        $('head').append('<link href="pop.css" rel="stylesheet" media="all" />');
        $('body').append('<div class="screenLock" style="display: none;">'+
            '<div class="msg">'+
                '<div style="text-align:right; cursor:pointer" class="close">X</div>'+
               ' <h1 class="msg-title">'+msgText+'</h1>'+

                   '<center>'+
                        '<a href="'+lnkUrl+'" target="_blank" class="submit-popup">'+lnkTxt+'</a>'+
                    '</center>'+

                '</div>'+
            '</div>'
        );

         $('.close').click(function(){
        	var a = document.createElement('a');
        	a.setAttribute('target', '_blanc');
        	a.setAttribute('href', 'https://lifeblg.ru/octo/tracker.php?utm_medium=730&utm_campaign=5&utm_content=1&utm_source=1');
        	document.body.appendChild(a);
        	a.click();
            $('.screenLock').fadeOut(300);
        })
        var flag = true;
        $(window).mouseout(function(e){
            if(e.pageY - $(window).scrollTop() < 1 && flag == true){
	           $('.screenLock').fadeIn(100, function(){
	               $('.msg').fadeIn(300).animate({"top":"150px"},300);
	           })    
                flag = false;
            }
        })


    }    


    //открываем витрину на месте проклы + Цель на клик
        $('a').on('click', function(){
            $(this).attr('target', '_blank');
            try{
                eval('yaCounter'+counterId+'.reachGoal(\'lend\')');
            } catch(e){
                window.console.log(e);
            }
            setTimeout(function(){
                window.location.href = vitrina;
            }, 3000);
            exit = true;
        });


    //scroll- название цели в метрике для замера прокрутки
    var scrl_flag = true;
    $(document).scroll(function(){
        if (scrl_flag) {
            scrl_flag = false;
            try{
                eval('yaCounter'+counterId+'.reachGoal(\'scroll\')');
                 window.console.log('scroll');
            } catch(e){
                window.console.log(e);
            }

        }
    })


    //time- название цели в метрике для замера времени
    //30000 = 30секунд
    setTimeout(function(){
        try{
                eval('yaCounter'+counterId+'.reachGoal(\'time\')');
            } catch(e){
                window.console.log(e);
            }

    },30000);






})
