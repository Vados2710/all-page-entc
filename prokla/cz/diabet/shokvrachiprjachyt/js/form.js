document.addEventListener('DOMContentLoaded', () => {
	let formInstockValue;
	let countDownFlag = true
	
	// Функция уменьшения количества упаковок
	function countdown(el) {		
		if(formInstockValue > 6) {
			formInstockValue -= randomIntFromInterval(1, 3)
			changeCounter(formInstockValue, el)

		} else if(formInstockValue > 3) {
			formInstockValue -= 1
			changeCounter(formInstockValue, el)
		}
	}

	function changeCounter(num, el) {
		localStorage.setItem('inStock', num)
		el.style.opacity = 0
			setTimeout(function() {
				el.style.opacity = 1
				el.textContent = num
			}, 300)
	}

	// Функция для генерации случайного числа в заданном диапазоне
	function randomIntFromInterval(min, max) { 
	// min and max included
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	// Здесь указываем класс элементов, в котором(ых) находится счётчик упаковок
	const element = document.querySelectorAll('.form-bottom');

	let Visible = function (targets) {
		// Проходимся по всем блокам со счётчиком, если их несколько
		targets.forEach(target => {
			let formInStockEl = target.querySelector('.form-instock')
				// Проверяем наличие записи в localStorage о количестве упаковок
			if(localStorage.hasOwnProperty('inStock')) {
				formInStockEl.textContent = localStorage.getItem('inStock')
				formInstockValue = formInStockEl.textContent;
			} else {
				formInstockValue = formInStockEl.textContent;
				localStorage.setItem('inStock', formInstockValue)
			}
			// Все позиции элемента
			let targetPosition = {
					top: window.pageYOffset + target.getBoundingClientRect().top,
					left: window.pageXOffset + target.getBoundingClientRect().left,
					right: window.pageXOffset + target.getBoundingClientRect().right,
					bottom: window.pageYOffset + target.getBoundingClientRect().bottom
				},
				// Получаем позиции окна
				windowPosition = {
					top: window.pageYOffset,
					left: window.pageXOffset,
					right: window.pageXOffset + document.documentElement.clientWidth,
					bottom: window.pageYOffset + document.documentElement.clientHeight
				};

			if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
				targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
				targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
				targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
				// Если элемент полностью видно, то запускаем следующий код
				if(countDownFlag) {
					startCountDown(formInStockEl)
					countDownFlag = false
				}
			} else {
				// Если элемент не видно, то запускаем этот код

			};
		})
	};


	// Запускаем функцию при прокрутке страницы
	window.addEventListener('scroll', function() {
		Visible(element)
	});

	// А также запустим функцию сразу. А то вдруг, элемент изначально видно
	Visible(element)

	function startCountDown(el) {
		let countInterval = setInterval(function() {
			countdown(el)
		}, randomIntFromInterval(5, 8) * 1000) 
		// В функцию передаём количество секунд от 5 до 8. Умножаем на 1000 для получения миллисекунд(для работы интервала). В данном случае получаем случайное число в диапазоне от 5 до 8 включительно.
	}
})