$(document).ready(function () {
	$('.carousel').owlCarousel({
		loop: true,
		dots: true,
		nav: false,
		items: 1,
		responsive: {
			991: {
				nav: true,
				dots: false
			}
		}
	})

	$('.js-commits__box').owlCarousel({
		items: 1,
		loop: false,
		nav: true
	});

	$('.js-stories__slider').owlCarousel({
		loop: false,
		dots: true,
		nav: true,
		items: 1
	})

	$('.js-open-stories').click(function () {
		$('.js-stories').fadeIn();
		$('html, body').addClass('overflow');
	})

	$('.stories__close, .stories__home').click(function () {
		$('.js-stories').fadeOut();
		$('html, body').removeClass('overflow');
	})

	/*даты*/
	const post__date = document.querySelector('.js-commits__date')
	const footer__date = document.querySelector('.footer__date')
	let date = new Date()
	date.setDate(date.getDate() - 7)
	let zero = function (val) {
		return val.toString().length === 1 ? '0' + val : val
	}
	footer__date.textContent = date.getFullYear()
	post__date.textContent = zero(date.getDate()) + '.' + zero(date.getMonth() + 1) + '.' + date.getFullYear()

	/* 
	класс блока в котором будет сообщение об успешно отправленом коммите -----
	класс поля с сообщением -------------------------------------             |
	класс поля с именем -----------------------------            |            |
	класс кнопки отправки -------------              |           |            |
	класс с формой ---------           |             |           |            |
	                        |          |             |           |            |*/
	function sendMessage(classForm, classButton, classInput, classTextarea, $sucses) {
		classInput = $('.' + classInput);
		classTextarea = $('.' + classTextarea);
		sucses = $('.' + $sucses);
		$('.' + $sucses).hide();

		$('.' + classButton).click(function () {
			if (classInput.length) {
				if (classInput.val() == '') {
					classInput.css('outline', '1px solid red');
					if (classTextarea.length) {
						if (classTextarea.val() == '') {
							classTextarea.css('outline', '1px solid red');
						} else {
							classTextarea.css('outline', '1px solid green');
						}
					}
				} else {
					classInput.css('outline', '1px solid green');
					if (classTextarea.length) {
						if (classTextarea.val() == '') {
							classTextarea.css('outline', '1px solid red');
						} else {
							classTextarea.css('outline', '1px solid green');
							$('.' + classForm).hide();
							$('.' + $sucses).fadeIn();
						}
					} else {
						$('.' + classForm).hide();
						$('.' + $sucses).fadeIn();
					}
				}
			}
		})
	}
});