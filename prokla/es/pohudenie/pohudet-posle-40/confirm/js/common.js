$(document).ready(function() {

    //Попап менеджер FancyBox
    // data-fancybox="gallery" создание галереи
    // data-caption="<b>Подпись</b><br>"  Подпись картинки
    // data-width="2048" реальная ширина изображения
    // data-height="1365" реальная высота изображения
    // data-type="ajax" загрузка контента через ajax без перезагрузки
    // data-type="iframe" загрузка iframe (содержимое с другого сайта)
    $(".fancybox").fancybox({
        hideOnContentClick: true,
        protect: false, //защита изображения от загрузки, щелкнув правой кнопкой мыши. 
        loop: true, // Бесконечная навигация по галерее
        arrows: true, // Отображение навигационные стрелки
        infobar: true, // Отображение инфобара (счетчик и стрелки вверху)
        toolbar: true, // Отображение панели инструментов (кнопки вверху)
        buttons: [ // Отображение панели инструментов по отдельности (кнопки вверху)
            // 'slideShow',
            // 'fullScreen',
            // 'thumbs',
            // 'share',
            //'download',
            //'zoom',
            'close'
        ],
        touch: false,
        animationEffect: "fade", // анимация открытия слайдов "zoom" "fade" "zoom-in-out"
        transitionEffect: 'fade', // анимация переключения слайдов "fade" "slide" "circular" "tube" "zoom-in-out" "rotate'
        animationDuration: 500, // Длительность в мс для анимации открытия / закрытия
        transitionDuration: 1366, // Длительность переключения слайдов
        slideClass: '', // Добавить свой класс слайдам
        closeExisting: true,
    });




});