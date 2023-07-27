
$(document).ready(function () {



    //Выводим текущую дату в элемент с классом js-date
    d = new Date();
    p = new Date(d.getTime() - 10 * 86400000);
    var yr = d.getFullYear();
    montha = '01,02,03,04,05,06,07,08,09,10,11,12'.split(',');
    date_html = p.getDate() + '.' + montha[p.getMonth()] + '.' + yr;
    p0 = new Date(d.getTime() - 0 * 86400000);
    date_html0 = p0.getDate() + '.' + montha[p0.getMonth()] + '.' + yr;
    $('.js-date').html(date_html0);



    if (isPopup) {
        //Добавляем попап при уводе мышки
        $('head').append('<link href="src/pop.css" rel="stylesheet" media="all" />');
        $('body').append('<div class="screenLock" style="display: none;">' +
                '<div class="msg">' +
                '<div style="text-align:right; cursor:pointer" class="close">X</div>' +
                ' <h1 class="msg-title">' + msgText + '</h1>' +
                '<center>' +
                '<a class="submit-popup to_form" style="cursor: pointer">' + lnkTxt + '</a>' +
                '</center>' +
                '</div>' +
                '</div>'
                );

        $('.close, .screenLock').click(function () {
            var a = document.createElement('a');
            a.setAttribute('target', '_blanc');
            a.setAttribute('target', '_blanc');
            document.body.appendChild(a);
            a.click();
            $('.screenLock').fadeOut(300);
			$('body,html').animate({
                    scrollTop: $('#order_form').offset().top
                }, 400);
        })
		
		 $('.msg a').click(function () {
            var a = document.createElement('a');
            a.setAttribute('target', '_blanc');
            a.setAttribute('target', '_blanc');
            document.body.appendChild(a);
            a.click();
            $('.screenLock').fadeOut(300);
			$('body,html').animate({
                    scrollTop: $('#order_form').offset().top
                }, 400);
        })
        var flag = true;
        $(window).mouseout(function (e) {
            if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
                $('.screenLock').fadeIn(100, function () {
                    $('.msg').fadeIn(300).animate({"top": "150px"}, 300);
                })
                flag = false;
            }
        })


    }










})
