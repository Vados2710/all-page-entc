(function (){
	//дата поста формата д.м.г.
	var postDate = document.querySelector('.post__date');
	var commDate = document.querySelectorAll('.review__date');
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth();
	var day = today.getDate();
	var hour = today.getHours();
	(function postDateText () {
		if ((month < 10) && (day < 10)) {
			postDate.textContent = '0' + day + '.0' + month + '.' + year;
		}
		else if (month < 10) {
			postDate.textContent = day + '.0' + month + '.' + year;
		}
		else if (day < 10) {
			postDate.textContent = '0' + day + '.' + month + '.' + year;
		}
		else {
			postDate.textContent = day + '.' + month + '.' + year;
		};
	})();
	//дата комментов формата час назад
	(function commDateText () {
		var sum; 
		for ( var i = 0; i < commDate.length ; i++) {
			sum = Math.abs(Math.round((hour - i) / 1.2));
			if (sum > 23) {
				commDate[i].textContent ='день назад';
		}
			else if ( (sum > 1) && (sum < 5) ) {
				commDate[i].textContent = sum + ' часа назад';
		}
		 	else if ( (sum === 0) || (sum === 1) ) {
				commDate[i].textContent ='час назад';
		}
		 	else if (sum === 21) {
				commDate[i].textContent =sum + ' час назад';
		}
			else if (sum > 21) {
				commDate[i].textContent =sum + ' часа назад';
		} 
			else {
				commDate[i].textContent = sum + ' часов назад';
		};
		};
	})();
})();