$(document).ready(function () {
    var flag = true;

    $(window).mouseout(function (e) {
        if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
            $('.demon_popup').fadeIn(300);
            flag = false;
        }
    })


    $('.demon_close, .popup_btn').click(function () {
        $('.demon_popup').fadeOut(300);
    });

    $('.demon_popup').click(function (e) {
        e.stopPropagation();
    });
$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".demon_popup_body"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			  $('.demon_popup').fadeOut(300); // скрываем его
		}
	});
});
