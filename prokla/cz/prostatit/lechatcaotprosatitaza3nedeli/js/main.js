document.addEventListener("DOMContentLoaded", function(event) {
	let tableContainer = document.querySelector('.table__container');
	let table = document.querySelector('#table');
	let cellInCol1 = document.querySelectorAll('#table td:nth-of-type(1), #table th:nth-of-type(1)');
	let cellInCol2 = document.querySelectorAll('#table td:nth-of-type(2), #table th:nth-of-type(2)');
	let cellInCol3 = document.querySelectorAll('#table td:nth-of-type(3), #table th:nth-of-type(3)');
	let clickButtonCount = 0;
	initMobileTable();
	
	window.addEventListener('resize', function() {
		initMobileTable();
	});

	function initMobileTable() {
		let wWidth = document.body.clientWidth;
		if (wWidth < 520) {
			table.classList.add('mobile', 'show-col-1');
			table.classList.remove('show-col-2');
			createControlElement();
		} else if (wWidth > 520 && table.classList.contains('mobile')) {
			removeControlElement();
			table.classList.remove('mobile', 'show-col-1', 'show-col-2');
		}
	}

	function createControlElement() {
		if (!tableContainer.querySelector('.table__button')) {
			let next = document.createElement('button');
			let prev = document.createElement('button');
			next.classList.add('table__next', 'table__button');
			prev.classList.add('table__prev', 'table__button');
			next.addEventListener('click', function(){
				clickButtonCount++;
				changeTableClass();
			});
			prev.addEventListener('click', function(){
				clickButtonCount--;
				changeTableClass();
			})

			tableContainer.appendChild(next);
			tableContainer.appendChild(prev);
		}
	}
	function removeControlElement() {
		let btns = tableContainer.querySelectorAll('.table__button');
		for (let i = 0; i<btns.length;i++) {
			btns[i].remove();
		}
	}
	function changeTableClass() {
		if (Math.abs(clickButtonCount%2) === 1 && table.classList.contains('show-col-1')) {
			table.classList.remove('show-col-1');
			table.classList.add('show-col-2');
		} else if (Math.abs(clickButtonCount%2) === 0 && table.classList.contains('show-col-2')) {
			table.classList.remove('show-col-2');
			table.classList.add('show-col-1');
		}
	}
});