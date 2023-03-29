var header = $('.header'),
    scrollPrev = 0;

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if ( scrolled > 100 && scrolled > scrollPrev ) {
        header.addClass('out');
    } else {
        header.removeClass('out');
    }
    scrollPrev = scrolled;
});

$("#show").click(
    function() {
        $('.mobile-menu').toggleClass('showPanel');
        $('.close').css('display', 'block');
        $('.burger').css('display', 'none');
    }
);
$("#hide").click(
    function() {
       // $('.mobile-menu').toggleClass('showPanel');
        $('.close').css('display', 'none');
        $('.burger').css('display', 'block');
    }
);





$(document).ready(function() {



	$('.open-form').on('touchend, click', function(event) {
		event.preventDefault();
		$('.overlay_form').toggleClass('hide');
    $('.popup').toggleClass('hide');
    $('.blur').toggleClass('active');
	});
	$('.popup__close').on('touchend, click', function(event) {
		event.preventDefault();
		$('.overlay_form').toggleClass('hide');
    $('.popup').toggleClass('hide');
    $('.blur').toggleClass('active');
	});
});


// Решение на jQuery


let num = document.querySelectorAll('.counter-num');
let counter = document.querySelectorAll('.counter');

$(document).mouseup( function(e){ // событие клика по веб-документу
    var div = $( ".header-nav-mobile" ); // тут указываем ID элемента
    if ( !div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
        $('.mobile-menu').removeClass('showPanel'); // скрываем его
        $('.header-logo').removeClass('active');
       $('.close').css('display', 'none');
        $('.burger').css('display', 'block');
        $('.bg-blur').removeClass('show');
    }
});

const ReviewMore = $('.comments-items-more');

$('#show-more').click(function(event) {
    event.preventDefault();
    ReviewMore.slideToggle();
});


for (let j = 0; j < counter.length; j++) {
    let count = 0;
    counter[j].addEventListener("click", function () {
        if (count === 0) {
            count++;
            num[j].innerHTML = parseInt(num[j].innerHTML) + 1;
        } else if (count === 1) {
            count--;
            num[j].innerHTML = parseInt(num[j].innerHTML) - 1;
        }
    });
}

document.getElementById("clearButton").onclick = function(e) {
    // Если необходимо предотвратить/отменить событие по умолчанию,
    // то необходимо вызвать метод preventDefault у события
    // https://developer.mozilla.org/ru/docs/Web/API/Event/preventDefault
    // e.preventDefault();
    // если необходимо также предотвратить дальнейшее "всплытие" события,
    // то необходимо вызвать метод stopPropagation у события
    // https://developer.mozilla.org/ru/docs/Web/API/Event/stopPropagation
    // e.stopPropagation();
    document.getElementById("textInput").value = "";
  }


$(document).ready(function() {



	$('.open-popup').on('touchend, click', function(event) {
		event.preventDefault();
		$('.overlay_form').toggleClass('hide');
    $('.popup2').toggleClass('hide');
    $('.blur').toggleClass('active');
	});
	$('.close2').on('touchend, click', function(event) {
        event.preventDefault();
        $("#textInput").val("");
		$('.overlay_form').toggleClass('hide');
    $('.popup2').toggleClass('hide');
    $('.blur').toggleClass('active');
	});
});
