$(document).ready(function(){
    $(".scrollto").on("click", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
    
        // получем идентификатор блока из атрибута href
        var id  = $(this).attr('href'),
    
        // находим высоту, на которой расположен блок
             top = $(id).offset().top;
         
        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top}, 800);
    });
    });