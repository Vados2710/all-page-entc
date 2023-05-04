let btns = document.querySelectorAll('.survey-input');
let answers = document.querySelectorAll('.survey-answer');
btns.forEach(btn => btn.addEventListener('click', () => {
        answers.forEach(answer => answer.classList.remove('survey-answer--hidden'));
        btns.forEach(btn => btn.disabled = true);
    }, {once: true}));



