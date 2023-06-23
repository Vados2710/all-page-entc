
let plus = document.getElementById("rating_35911_2");
let minus = document.getElementById("rating_35911_1");
let countCont = document.getElementsByClassName("entry-rating-score")[0];
let value = 0;
plus.onclick = function () {
	value += 1;
	if (value > 10) {
		return;
	}
	;
	countCont.innerHTML = value;

};

minus.onclick = function () {
	value -= 1;
	if (value < -10) {
		return;
	}
	;
	countCont.innerHTML = value;

};
