function startTimer(duration) {
    var timer = duration,
		minutes, seconds;
    setInterval(function () {
		minutes = parseInt(timer / 60, 10)
		seconds = parseInt(timer % 60, 10);
	
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
	
		//document.querySelector('#hours').textContent ="00";
		//document.querySelector('#minutes').textContent =minutes;
	//	document.querySelector('#seconds').textContent =seconds;
	
		//document.querySelector('#hours2').textContent ="00";
		//document.querySelector('#minutes2').textContent =minutes;
		//document.querySelector('#seconds2').textContent =seconds;
        
        document.querySelector('#hours3').textContent ="00";
		document.querySelector('#minutes3').textContent =minutes;
		document.querySelector('#seconds3').textContent =seconds;

		if (--timer < 0) {
			timer = duration;
		}
    }, 1000);
}
var mins = 60 * 10;
startTimer(mins);