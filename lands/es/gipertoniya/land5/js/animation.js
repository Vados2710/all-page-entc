if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', work);
}
else {
	work()
}

function work() {
	window.addEventListener('load', () => {
		animationFirstBlock('.order-main', 'animation-fadeIn');
		animationFirstBlock('.order-form', 'animation-moveLeft');
		animationSimple('h2', 'animation-fadeIn');
		animationSimple('p', 'animation-fadeIn');
		animationSimple('.col', 'animation-fadeIn');
	})
}

function hide(arr) {
	let elements = document.querySelectorAll(arr);
	for (let item of elements) {
		item.style.opacity = '0';
	}
}

function position(el) {
	/*определяем кооординаты элемента*/
	let elementBorderTop = window.pageYOffset + el.getBoundingClientRect().top,
		elementBorderBottom = window.pageYOffset + el.getBoundingClientRect().bottom,
		windowHeight = document.documentElement.clientHeight,
		windowBorderBottom = window.pageYOffset + windowHeight,
		pos = {
			element: el,
			elementBorderTop: elementBorderTop,
			elementBorderBottom: elementBorderBottom,
			windowHeight: windowHeight,
			windowBorderBottom: windowBorderBottom - 100
		};
	return pos;
}

function animationSimple(dom, animation) {
	let arr = document.querySelectorAll(dom);
	hide(dom);
	getAnimation(dom, animation)

	window.addEventListener('scroll', function () {
		for (let item of arr) {
			let pos = position(item);
			if (pos.windowBorderBottom > pos.elementBorderTop) {
				pos.element.classList.add(animation);
				pos.element.style.opacity = '1';
			}
		}
	}, false);
}

function animationFirstBlock(val, animation) {
	hide(val);
	let element = document.querySelectorAll(val);

	for (let el of element) {
		el.classList.add(animation);
		el.style.opacity = '1';
	}
}

function getAnimation(element, animation) {
	let arr = document.querySelectorAll(element)
	for (let item of arr) {
		let pos = position(item);
		if (pos.windowBorderBottom > pos.elementBorderTop) {
			pos.element.classList.add(animation);
			pos.element.style.opacity = '1';
		}
	}
}

