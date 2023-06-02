let prod_sell_by_minutes = [1, 2, 0, 0, 1, 1, 0, 2, 0, 2, 1, 0, 0, 0, 2, 0, 0, 1, 0, 1, 1, 2];

function start_counting_timer() {
    let limitedSeconds = 1278;
    let timeLeft = limitedSeconds;
    let secondsLeft,minutesLeft;
    let timerElement = document.querySelector('.timer');
    let count = setInterval(function(){
        timeLeft--;
        let min = parseInt(timeLeft/60);
        minutesLeft = min.toString();
        if(minutesLeft.length === 1) {
            minutesLeft = '0'+ minutesLeft;
        }
        let sec = timeLeft%60;
        secondsLeft = sec.toString();
        if(secondsLeft.length === 1) {
            secondsLeft = '0'+ secondsLeft;
        }
        if(sec === 0) {
            sell_prod(min);
        }
        timerElement.innerHTML = minutesLeft+":"+secondsLeft;
        if(timeLeft === 0) {
            clearTimeout(count);
            setTimeout(function(){
               timerElement.innerHTML = "Stok habis";
               document.querySelector('.left_count').innerHTML = "Stok habis";
               document.getElementById('soldout_text').style.display = 'block';
               document.getElementById('region_text').style.display = 'none';

            },1500);
        }
    },1000);

}

function sell_prod(i) {
    let prodElement = document.querySelector('.prod_left_val');
    let prev = parseInt(prodElement.innerText);
    prodElement.innerHTML = prev-prod_sell_by_minutes[i];
}
