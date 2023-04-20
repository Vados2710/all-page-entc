document.addEventListener("DOMContentLoaded", function(event) {
    //timer
    var fullTime = new Date().getTime() + 10000000; //2:46:40
    $('.countdown-container').countdown(fullTime, function(event) {
        $(this).html(event.strftime(
            '<span class="time time__hours">%H</span>' +
            '<span class="time__delimeter">:</span>' +
            '<span class="time time__minutes">%M</span>' +
            '<span class="time__delimeter">:</span>' +
            '<span class="time time__seconds">%S</span>'));
    });












        $(".btn-buy").on("click", function(event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор бока с атрибута href
            var id = $(this).attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({ scrollTop: top }, 1500);
        });








});
$(function() {

    //    ВЫРАНИВАЕМ БЛОКИ ПО ВЫСОТЕ
    function alignmentHeight(element) {
        var maxHeight = 0;
        var block = $(element);

        for (var i=0; i<block.length; i++){

            if (maxHeight < block[i].clientHeight){
                maxHeight = block[i].clientHeight;

            }

        }

        for (var j = 0; j < block.length; j++){



            block[j].style.height =  maxHeight +"px";
        }

    };

    alignmentHeight('.components');
    alignmentHeight('.order-js');


    $(".menu-anchor").on("click", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        var element = $(event.target);
        //Находим родителя navbar-nav
        var list = element.closest('.navbar-nav');
        //Нахожу все дочерни элименты и уаляю класс
        var childList = list.children().removeClass('active-link');
        //Вешаю класс
        var li = element.parent().addClass('active-link');


    });





    // плавный скролл
    $(".nav,.wrapp-button").on("click", 'a', function(event) {

        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();


        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top - 70;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });



    function data() {
        var date = new Date();
        //Берем день
        var day = date.getDate();
        //Берем месяц
        var month = date.getMonth() + 1;
        //Берем год
        var yea = date.getFullYear();
        //находим блок
        var disc = $(".discount");

        var dataSpan = disc.find(".data");
        //Меняем содержимое спана
        dataSpan.html(+day + "." + month + "." + yea);

    }
    data();


    $('.counter-num').counterUp();





});