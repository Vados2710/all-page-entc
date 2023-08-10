var monthList = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
var currentMonth = new Date().getMonth();
var month = document.querySelector('.text_month');
var nextMonth = document.querySelector('.next_month');
month.textContent = monthList[currentMonth];
nextMonth.textContent = monthList[currentMonth + 1];


$("#disclaimer-btn").on('click', function (e) {
    e.preventDefault();
    $("#disclaimer").addClass('model-open');
});

$(".close-btn, .bg-overlay").click(function () {
    $("#disclaimer").removeClass('model-open');
});

var time = 1500;
var intr;

function start_timer() {
    intr = setInterval(tick, 1000);
}

function tick() {
    time = time - 1;
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
        clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0" + secs;
    mins = mins >= 10 ? mins : "0" + mins;
    $("#min1").html(mins);
    $("#sec1").html(secs);
}

start_timer();