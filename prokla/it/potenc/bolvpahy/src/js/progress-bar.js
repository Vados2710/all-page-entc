let body = $(".is-article");
let scrollChange = 200;

$(window).scroll(function() {
    let scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
      body.addClass('is-scrolled');

    } else {
      body.removeClass("is-scrolled");
    }
});


function progressBar() {
  // Узнаем на сколько страница прокручена
  let scroll = document.body.scrollTop || document.documentElement.scrollTop;

  // Узнаем высоту всей страницы
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  // Получаем в % на сколько прокручена страница
  let scrolled = scroll / height * 100;

  // Подставляем % прокрутки в ширину нашей линии
  document.getElementById('progress-bar').style.width = scrolled + '%';
}

// Запускаем функцию, когда пользователя скролит
window.addEventListener('scroll', progressBar);
