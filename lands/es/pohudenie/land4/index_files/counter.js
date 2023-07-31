(function (min, sec) {
    var date = new Date(),
        count = 0;
    date.setMinutes(12);
    date.setSeconds(0);
    for (var k = 0; k < min.length; k ++) {
        min[k].textContent = zero(date.getMinutes());
        sec[k].textContent = zero(date.getSeconds());
    }
    console.log(min)
    var interval = setInterval(function () {
        counter(min, sec)
    }, 1000);

    function counter(minutes, seconds) {
        count++;
        var liveDate = new Date();
        liveDate.setMinutes(date.getMinutes());
        liveDate.setSeconds(date.getSeconds() - count);
        for( var i = 0; i < minutes.length; i++) {
            minutes[i].textContent = zero(liveDate.getMinutes());
            seconds[i].textContent = zero(liveDate.getSeconds());
        }

        if (min[0].textContent === '00' && sec[0].textContent === '00') {
            clearInterval(interval);
        }
    }

    function zero(num) {
        return num.toString().length === 1 ? '0' + num : num;
    }
})(
    document.getElementsByClassName('minutesSH'),
    document.getElementsByClassName('secondsSH')
)