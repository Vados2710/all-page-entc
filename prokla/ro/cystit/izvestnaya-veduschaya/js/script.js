var minute = document.querySelector('#min'),
    second = document.querySelector('#sec'),
    allTime = 600;

function tick() {
    var timer = setInterval(function(){
        if (allTime === 0) {
            clearInterval(timer)
        }
        minute.textContent = (Math.floor(allTime / 60) < 10) ? ('0' + Math.floor(allTime / 60)) : (Math.floor(allTime / 60));
        second.textContent = (Math.floor(allTime % 60) < 10) ? ('0' + Math.floor(allTime % 60)) : (Math.floor(allTime % 60));
        allTime -= 1;
    }, 1000)
}

tick();