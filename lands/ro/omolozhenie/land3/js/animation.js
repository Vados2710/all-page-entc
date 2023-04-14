if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', work);
}
else {
	work()
}

function work() {
	window.addEventListener('load', () => {
		animationFirstBlock('.order-left', 'animation-fadeIn');
		animationFirstBlock('.order-right', 'animation-moveLeft');
		animationSimple('h2', 'animation-fadeIn');
		animationMove('.imgBack-item', 'animation-moveUp_img');
		animationTimeout('.types-img_js1', 'animation-fadeIn');
		animationTimeout('.types-img_js2', 'animation-fadeIn');
		animationTimeout('.types-img_js3', 'animation-fadeIn');
		animationTimeout('.types-img_js4', 'animation-fadeIn');
		animationDoubleAnimation('.beforeAfter-img_back', 'animation-moveUp', 'animation-moveDown', 'translate(0, 30px)', 'translate(0, -30px)');
		animationDoubleAnimation('.beforeAfter-img', 'animation-moveDown', 'animation-moveUp', 'translate(0, -30px)', 'translate(0, 30px)');
		stopAnimationOnMobile('.beforeAfter-img')
		stopAnimationOnMobile('.beforeAfter-img_back')
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

function animationMove(dom) {
	let arr = document.querySelectorAll(dom);
	window.addEventListener('scroll', function () {
		arr.forEach((item, index) => {
			let pos = position(item);
			let x = pos.elementBorderTop / pos.element.y * 10;
			let shift = x >= 110 || x < 0 ? 110 : x;

			if (index % 2 === 0) {
				pos.windowBorderBottom > pos.elementBorderTop ? pos.element.style.transform = `translate(0, ${shift}px)` : pos.element.style.transform = 'translate(0, 0)';
			} else {
				pos.windowBorderBottom > pos.elementBorderTop ? pos.element.style.transform = `translate(0, ${-shift}px)` : pos.element.style.transform = 'translate(0, 0)';
			}
		});
	}, false);
}

function animationTimeout(dom, animation) {
	let arr = document.querySelectorAll(dom);
	hide(dom);
	getAnimation(dom, animation)
	window.addEventListener('scroll', function () {
		arr.forEach((item, index) => {
			let pos = position(item);
			const parentBlock = pos.element.parentNode.parentNode
			if (pos.windowBorderBottom > parentBlock.getBoundingClientRect().top + window.pageYOffset) {
				setTimeout(() => {
					pos.element.classList.add(animation);
					pos.element.style.opacity = '1';
				}, index * 300);
			}
		});
	}, false);
}

function animationDoubleAnimation(dom, animation1, animation2, transform1, transform2) {
	let arr = document.querySelectorAll(dom);
	window.addEventListener('scroll', function () {
		arr.forEach((item, index) => {
			let pos = position(item);

			if (pos.windowBorderBottom > pos.elementBorderTop && window.outerWidth > 991) {
				setTimeout(() => {
					if (index % 2 === 0) {
						pos.element.classList.add(animation1);
						pos.element.style.transform = transform1
					}
					else {
						pos.element.classList.add(animation2);
						pos.element.style.transform = transform2
					}
				}, index * 300);
			}
		});
	}, false);
}

function stopAnimationOnMobile(dom) {
	let block = document.querySelectorAll(dom);
	window.addEventListener('resize', () => {
		if (window.outerWidth < 991) {
			block.forEach(item => {
				item.style.transform = 'translate(0, 0)';
			});
		}
	}, false)
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

