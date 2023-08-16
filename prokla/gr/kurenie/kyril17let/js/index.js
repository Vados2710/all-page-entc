// --------------SCROLL-------------------
$("a").on("touchend, click", function (e) {
    e.preventDefault();
    $("body,html").animate({ scrollTop: $(".toform").offset().top - 200 }, 800);
});

// open modal
let openModals = document.querySelectorAll(".open-modal");
let modal = document.querySelector(".modal");

openModals.forEach(function (openModal) {
    openModal.addEventListener('click', function (e) {
        e.preventDefault();
        modal.style.display = "flex";
    })
});

// timer
let time = 300;
let intr;

function start_timer() {
    intr = setInterval(tick, 1000);
}

function tick() {
    time = time - 1;
    let mins = Math.floor(time / 60);
    let secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
        clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0" + secs;
    document.getElementById("#min").innerHTML = "0" + mins;
    document.getElementById("#sec").innerHTML = secs;
}


// test
let question1 = document.querySelector('input[name="question-1"]');
let question2 = document.querySelector('input[name="question-2"]');
let question3 = document.querySelector('input[name="question-3"]');
let question4 = document.querySelector('input[name="question-4"]');
let question5 = document.querySelector('input[name="question-5"]');
let question6 = document.querySelector('input[name="question-6"]');

$('.test-button_start').click(function () {
    $('.test-1').css({ 'display': 'block' });
})

$('.test-1 .test-list__item').click(function () {
    $('.test-2').css({ 'display': 'block' });
    $('.test-1').css({ 'display': 'none' });
    question1.value = this.dataset.indexNumber;
})
$('.test-2 .test-list__item').click(function () {
    $('.test-3').css({ 'display': 'block' });
    $('.test-2').css({ 'display': 'none' });
    question2.value = this.dataset.indexNumber;
})
$('.test-3 .test-list__item').click(function () {
    $('.test-4').css({ 'display': 'block' });
    $('.test-3').css({ 'display': 'none' });
    question3.value = this.dataset.indexNumber;
})
$('.test-4 .test-list__item').click(function () {
    $('.test-5').css({ 'display': 'block' });
    $('.test-4').css({ 'display': 'none' });
    question4.value = this.dataset.indexNumber;
})
$('.test-5 .test-list__item').click(function () {
    $('.test-6').css({ 'display': 'block' });
    $('.test-5').css({ 'display': 'none' });
    question5.value = this.dataset.indexNumber;
});
$('.test-6 .test-list__item').click(function () {
    $('.block-hide').css({ 'display': 'block' });
    $('.test-6, .test-text').css({ 'display': 'none' });
    start_timer();
    $('.test-wrap').css({ 'margin': '0' });
    question6.value = this.dataset.indexNumber;
    $('.submit_test').trigger('click');
});



// comments 

const commentFormBlock = document.querySelector(".comment__form-block");

commentFormBlock.addEventListener("click", () => {
    if (!commentFormBlock.classList.contains("open")) {
    $(".comment__form-body").slideDown();
    commentFormBlock.classList.add("open");
}
});

$(".comment__form-button").on("click", () => {
    $(".comment__form-input")
.children("input, textarea")
    .each(function (index, elem) {
        elem.value = null;
    });
});