const quizButton = document.querySelector(".main__quiz_start");
const bodyQuiz = document.querySelector(".main__quiz");
const circleQuiz = document.querySelectorAll(".answer");
const firstQuestion = document.querySelector(".first__question");
const secondQuestion = document.querySelector(".second__question");
const thirdQuestion = document.querySelector(".third__question");
const nextBtn = document.querySelector(".question__next_btn");
const countText = document.querySelector(".count");
const counterBlock = document.querySelector(".question__count");

let counter = 0;
let flag = true;

quizButton.addEventListener("click", () => {
  bodyQuiz.classList.add("active");
  quizButton.classList.add("hide");
  counter++;
});

circleQuiz.forEach((item) => {
  item.addEventListener("click", () => {
    if (counter === 1 && flag) {
      circle = item.querySelector(".circle");
      circle.classList.add("active");
      item.classList.add("active");
      item.insertAdjacentHTML(
        "beforeend",
        `<div class="answer__info">
				<b>Професор Милен Лазаров: </b> <br />

				<span>
					Сърдечно-съдовите заболявания са много коварни.
					Човек може да не обръща внимание на някои важни
					признаци на тези болести, а тяхното ранно улавяне
					е много важно за ефективността на по-нататъшното
					лечение.</span
				>
			</div>`
      );
      nextBtn.removeAttribute("disabled");
      flag = false;
    }
    if (counter === 2 && flag) {
      circle = item.querySelector(".circle");
      circle.classList.add("active");
      item.classList.add("active");

      item.insertAdjacentHTML(
        "beforeend",
        `<div class="answer__info">
				<b>Професор Милен Лазаров: </b> <br />

				<span>
					Наличието поне на 1 фактор вече е повод да се замислите дали вашето здраве или здравето на вашето семейство не попада в зоната на риска?! Почистването на кръвоносните съдове може да започне на всяка възраст за профилактика.</span
				>
			</div>`
      );
      nextBtn.removeAttribute("disabled");
      flag = false;
    }
    if (counter === 3 && flag) {
      circle = item.querySelector(".circle");
      circle.classList.add("active");
      item.classList.add("active");

      item.insertAdjacentHTML(
        "beforeend",
        `<div class="answer__info">
				<b>Професор Милен Лазаров: </b> <br />

				<span>
        Ако нивото на холестерина не се понижава след измененията в диетата и начина на живот, съществува висок риск от сърдечен пристъп, необходимост от скъпи лекарства, безкрайно чакане пред лекарските кабинети, както става най-често, но съществува и просто решение под формата на натуралното масло от канабис (прочетете статията до края).</span
				>
			</div>`
      );
      flag = false;

      nextBtn.removeAttribute("disabled");
    }
  });
});

nextBtn.addEventListener("click", () => {
  counter++;
  flag = true;
  nextBtn.setAttribute("disabled", true);

  if (counter < 4) {
    countText.textContent = counter;
  }

  if (counter === 2) {
    firstQuestion.style.display = "none";
    secondQuestion.style.display = "block";
  }
  if (counter === 3) {
    secondQuestion.style.display = "none";
    thirdQuestion.style.display = "block";
  }

  if (counter === 4) {
    nextBtn.textContent = "Завършете теста. Четете по-нататък.";
    nextBtn.removeAttribute("disabled");
  }
  if (counter === 5) {
    counterBlock.style.display = "none";
    thirdQuestion.style.display = "none";
  }
});
