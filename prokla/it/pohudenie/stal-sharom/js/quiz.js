const quizFadeOut = (el, timeout) => {
  el.style.opacity = "1";
  el.style.transition = `opacity ${timeout}ms`;
  el.style.opacity = "0";

  setTimeout(() => {
    el.style.display = "none";
  }, timeout);
};

const quizFadeIn = (el, timeout, delay, display) => {
  setTimeout(() => {
    el.style.opacity = "0";
    el.style.display = display || "block";
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
      el.style.opacity = "1";
    }, timeout);
  }, delay || 0);
};

function initQuiz(container, yes = 2) { 
  const quizRadios = container.querySelectorAll('input[type="radio"]');
  const numQuestions = container.querySelectorAll('.quiz__question').length;

  for(let quizRadio of quizRadios) {
    quizRadio.addEventListener('change', checkQuiz);
  }
  
  function checkQuiz() {
    const checkedRadios = container.querySelectorAll('input[type="radio"]:checked');
    const answers = {
      yes: 0,
      no: 0
    };

    for (let checked of checkedRadios) {
      checked.value == 'yes' ? ++answers.yes : ++answers.no;
    }

    if (checkedRadios.length == numQuestions) {
      quizFadeOut(container.querySelector('.quiz__content'),300);
      // if(answers.yes >= yes ) {
        quizFadeIn(container.querySelector('[data-result="yes"]'), 300, 300);
      // } else {
        // quizFadeIn(container.querySelector('[data-result="no"]'), 300, 300);
      // }
    }
  };
  
}

const quiz = document.getElementById('quiz');
new initQuiz(quiz);
