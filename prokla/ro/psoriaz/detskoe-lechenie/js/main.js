$(document).ready(function () {

    console.log('ready');


//    Если комментарий уже был отправлен
    if(Cookies.get('name')){
	$('.comment_hide').show();
	$('#commName').text(Cookies.get('name'));
	$('#commText').text(Cookies.get('comment'));
	$('#date').text(Cookies.get('date'));
    }
    
//    Рассчёт дат комментариев
    var dat = new Date();
    
    var i = 0; //счётчик вызовов функции
    
    //	Функция выборки случайного числа
    function getRandom(min, max) {
	var res = Math.floor(Math.random() * (max - min + 1) + min);
	if (res < 10) {
	    return '0' + res;
	} else {
	    return res;
	}
    }
    
//    Функция рассчёта дат комментариев
//    date - текущая дата, daysago - кол-во дней назад от текущей даты, hourTag (0 - любые часы, 1 - первая половина суток, 2 - вторая половина суток)
// current - если равно 1, то получает текущую дату и время
    function commentDate(daysago, hourTag, current) {
	
	var date = new Date();
	
	if (current == 0) { //считаем прошлые даты

	    i++;

	    date.setDate(date.getDate() - daysago); //установка нужной даты

//	Получение частей даты с ведущим нулём
	    var newDay = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
	    var newMonth = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
	    var newYear = date.getFullYear();

	    var newHour = getRandom(0, 23);

	    if (hourTag == 1) {
		newHour = getRandom(0, 11);
	    } else if (hourTag == 2) {
		newHour = getRandom(12, 23);
	    }

	    var newMinutes = getRandom(0, 59);
	    var newSeconds = getRandom(0, 59);

	    //рассчёт времени сегодняшнего комментария
	    if (daysago == 0) {
		date.setMinutes(date.getMinutes() - date.getMinutes() / 2);
		newMinutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
		newHour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
	    }

//	Формирование строки с датой и временем комментария
	    var commentDate = '(' + newDay + '.' + newMonth + '.' + newYear + ', ' + newHour + ':' + newMinutes + ':' + newSeconds + ')';

	    Cookies.set('commdate' + i, commentDate, {expires: 365}); //запись даты комментария в куки

	} else {
	    
//	    Получаем просто дату и время оставления пользователем комментария
	    var date = new Date();
	    
	    var newDay = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
	    var newMonth = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
	    var newYear = date.getFullYear();
	    var newHour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
	    var newMinutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
	    var newSeconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
	}
	
	//	Формирование строки с датой и временем комментария
	var commentDate = '(' + newDay + '.' + newMonth + '.' + newYear + ', ' + newHour + ':' + newMinutes + ':' + newSeconds + ')';
	
	return commentDate;
    }

//    Отправка комментариев
    var form = $('form');
    
    form.on('submit', function(e){
	e.preventDefault();
	var name = form.find('input[name="name"]').val();
	var email = form.find('input[name="email"]').val();
	var comment = form.find('textarea[name="comment"]').val();
	
	if (Cookies.get('name')) {
	    alert('Вы уже отправили свой комментарий!');
	    return;
	}
	
	if(name == '' || email == '' || comment == ''){
	    alert('Пожалуйста, заполните все поля!');
	    return;
	}
	
	var currentDate = commentDate(0, 0); 
	
	Cookies.set('name', name, { expires  :365 });
	Cookies.set('email', email, { expires  :365 });
	Cookies.set('comment', comment, { expires  :365 });
	Cookies.set('date', currentDate, { expires  :365 });
	
	alert('Ваш комментарий отправлен!');
	
	$('.comment_hide').fadeIn();
	$('#commName').text(name);
	$('#commText').text(comment);
	$('#date').text(currentDate);
	
	$('html, body').stop().animate({scrollTop: ($('.comment_hide').offset().top)}, 1000);
	
	form.trigger('reset');
    });
    
//    Голосование
    var golosov = 3894;
    
//    Проверка на голосование
    if (Cookies.get('golos')) {
	golosov++;
    }
    
    $('#golosov').text(golosov); //кол-во проголосовавших
    
    $('.opros_result, input[type="radio"]').on('click', function(e){
	e.preventDefault();
	
    //    Проверка на голосование
	if (Cookies.get('golos')) {
	    alert('Вы уже голосовали!');
	    return;
	}
	
	$('#no_result').hide();
	$('#result').show();
	$('#golosov').text(golosov + 1);
	Cookies.set('golos', '1', { expires  :365 });
    });
    
//    Подсчёт кол-ва посетителей в блоке статистики
    var peoplePerDay = 8800; //посетителей за сутки
    var date = new Date();
    var totalPeople = Math.round((peoplePerDay / 1440) * (date.getHours() * 60 + date.getMinutes())); //общее кол-во посетителей в сутки
    var zakazPeople = Math.round(totalPeople * 0.1564); //заказали варифорт
    var nowPeople = getRandom(10, 50);
    
    $('.totalPeople').text(totalPeople);
    $('.zakazPeople').text(zakazPeople);
    $('.nowPeople').text(nowPeople);

});

$(window).load(function () {

    var obj = $('.recommend');
    var offset = obj.offset();
    var topOffset = offset.top;
    var leftOffset = offset.left;
    var marginTop = obj.css("marginTop");
    var marginLeft = obj.css("marginLeft");

    $(window).scroll(function () {
	var scrollTop = $(window).scrollTop();

	if (scrollTop >= topOffset) {

	    obj.css({
		marginTop: 0,
		left: leftOffset,
		top: 0,
		position: 'fixed',
	    });
	}

	if (scrollTop < topOffset) {

	    obj.css({
		marginTop: marginTop,
		left: 0,
		position: 'relative',
	    });
	}
    });

});