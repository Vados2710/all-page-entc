let counterBagsWidget = 0;
const attempt = 5;
let formTime = 600;
const counterElem = $('.counter_attempts');


let interval = {};

window.bag = {
    open: (e) => {
        if (counterBagsWidget >= 5) return;
        const target = $(e.currentTarget);

        if (counterBagsWidget < 6 && !target.hasClass('showed-goods')) {
            counterBagsWidget++;
            window.bag.substractConter();
            window.bag.changeClass(counterBagsWidget, target);
        }

        target.addClass('showed-goods');
    },

    substractConter: () => {
        let substr = attempt - counterBagsWidget;
        counterElem.text(substr);
    },

    changeClass: (counter, target) => {
        switch (counter) {
            case 1:
                target.addClass('sale sale-30');
                break;
            case 2:
            case 4:
                target.addClass('sale sale-100');
                break;
            case 3:
                target.addClass('sale sale-50');
                break;
            case 5:
                target.addClass('sale sale-100');
                $('.card__item.sale.sale-100').addClass('glow');
                window.bag.showResultWindow();
                window.bag.showForm();
                break;
        }
    },

    showResultWindow: () => {

        setTimeout(function () {
            $('.spin-result-wrapper').css('display', 'block');
        }, 1000);
    },

    showForm: () => {
        setTimeout(function () {
            $('.spin-wrapper').slideUp();
            $('.order_block').slideDown();
            window.bag.start_timer();
        }, 3000);
    },

    start_timer: () => {
        interval = setInterval(window.bag.tick, 1000);
    },

    tick: () => {
        formTime = formTime - 1;
        let mins = Math.floor(formTime / 60);
        let secs = formTime - mins * 60;
        if (mins == 0 && secs == 0) {
            clearInterval(interval);
        }
        secs = secs >= 10 ? secs : "0" + secs;
        $("#min").html("0" + mins);
        $("#sec").html(secs);
    },
}

$('.card__item').click((e) => {
    window.bag.open(e);
});