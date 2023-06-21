$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
		loop:true, //Зацикливаем слайдер
		margin:10, //Отступ от картино если выводите больше 1
		nav: true, //Подключим навигацию
		smartSpeed:1000, //Время движения слайда
		autoplayTimeout:6000, //Время смены слайда
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			719: {
				items:1
			},
			720:{
				items:1
			},
			1019:{
				items:1
			},
            1020:{
				items:1
			}
		}
	});
});
