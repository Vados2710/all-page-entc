document.addEventListener('DOMContentLoaded', function() {
    var date = new Date();
    date.setHours(date.getHours() + 3);
    date.setMinutes(date.getMinutes() + 30);
    date.setSeconds(date.getSeconds() + 35);
    var timer = new TimezZ('.prelanding-form-timer', {
        date: date,
        hoursName: 'horas',
        minutesName: 'minutos',
        secondsName: 'segundos',
        template: '<div class="prelanding-form-timer-sec"><span class="prelanding-form-timer-sec__number">NUMBER</span><span class="prelanding-form-timer-sec__text">LETTER</span></div>',
        beforeCreate: function () {
            try {
                var timerTime = new Date(timer.settings.date).getTime();
                var localTime = new Date().getTime();

                if ((timerTime - localTime) < 1000) {
                    timer.settings.isStopped = true;
                }
            } catch {}
        }
    });
});
