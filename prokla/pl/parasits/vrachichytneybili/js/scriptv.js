
$(document).ready(function(){



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



        
    
        $('a').attr('target', '_blank');


       
        !function(){
            var t;
            try {
            for (t = 0; 10 > t; ++t) history.pushState({}, "", "#");
            onpopstate = function (t) {
            t.state && location.replace(vitrina)
            }
            } catch (o) {}
        }();

   
        d = new Date();
        p = new Date(d.getTime() - 10 * 86400000);
        var yr = d.getFullYear();
        montha = '01,02,03,04,05,06,07,08,09,10,11,12'.split(',');
        date_html = p.getDate() + '.' + montha[p.getMonth()] + '.' + yr;
        p0 = new Date(d.getTime() - 0 * 86400000);
        date_html0 = p0.getDate() + '.' + montha[p0.getMonth()] + '.' + yr;
        $('.js-date').html(date_html0);


       
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

  
    setTimeout(function(){
        try{
                eval('yaCounter'+counterId+'.reachGoal(\'time\')');
            } catch(e){
                window.console.log(e);
            }

    },30000);






})
