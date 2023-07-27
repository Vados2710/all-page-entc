$(document).ready(function () {
    
    //	Функция выборки случайного числа
    function getRandom(min, max) {
	var res = Math.floor(Math.random() * (max - min + 1) + min);
	if (res < 10) {
	    return '0' + res;
	} else {
	    return res;
	}
    }
    
    
//    Голосование
    var golosov = 3894;
    
// //    Проверка на голосование
//     if (Cookies.get('golos')) {
	golosov++;
//     }
    
    $('#golosov').text(golosov); //кол-во проголосовавших
    
    $('.opros_result, input[type="radio"]').on('click', function(e){
	e.preventDefault();
	
    // //    Проверка на голосование
	// if (Cookies.get('golos')) {
	//     alert('Вы уже голосовали!');
	//     return;
	// }
	
	$('#no_result').hide();
	$('#result').show();
	$('#golosov').text(golosov + 1);
	// Cookies.set('golos', '1', { expires  :365 });
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