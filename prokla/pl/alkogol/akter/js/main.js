// Объявляем переменные
var send = document.querySelector(".send-btn");
var textarea = document.querySelector(".textarea");
var sendContainer = document.querySelector(".input-action");
var like = document.querySelectorAll('.like');

// При клике на элемент с классом "like" меняется его содержимое, а также содержимое элемента с числом лайков, которое находится через один элемент от элемента .like
for (var i = 0; i <  like.length; i++) {
  like[i].addEventListener('click', function (event) {
    var middle = event.currentTarget.nextElementSibling;
    if (this.classList.contains("liked")) {
      event.currentTarget.classList.remove('liked');
      event.currentTarget.innerHTML = "Like";
      middle.nextElementSibling.innerHTML = --middle.nextElementSibling.innerHTML;
      middle.nextElementSibling.classList.remove("like-count-liked");
      middle.nextElementSibling.classList.add("like-count-unliked");
      } else {
      event.currentTarget.classList.add('liked');
      event.currentTarget.innerHTML = "Unlike";
      middle.nextElementSibling.innerHTML = ++middle.nextElementSibling.innerHTML;
      middle.nextElementSibling.classList.add("like-count-liked");
      middle.nextElementSibling.classList.remove("like-count-unliked");
      }
  })
  };

// Если JS не загрузится, то кнопка отправки комментария будет доступна по-умолчанию
sendContainer.classList.remove("input-action-focus");
// И ширина инпута тоже будет больше
 textarea.classList.remove("textarea-focus");


// При фокусировке на поле ввода появляется кнопка отправления комментария, а также увеличивается высота поля ввода
  textarea.addEventListener("focus", function(event) {
    sendContainer.classList.add("input-action-focus");
    textarea.classList.add("textarea-focus");
  });

// При потере фокуса поле ввода схлопнется, если оно пустое
  textarea.addEventListener("blur", function() {
    if(!textarea.value) {
      textarea.classList.remove("textarea-focus");
    } else {
      return false;
    }
  });

// Если поле не заполнено, выведется сообщение о том, что нужно заполнить поле для комментов, если заполнено, то выведет сообщение об успехе
  send.addEventListener("click", function(event) {
    if (!textarea.value) {
      alert("WRITE YOUR COMMENT!");
    } else {
      alert("THANK YOU FOR YOUR COMMENT!");
      textarea.value = ""
    }
  });

// Проставление времени публикации в комментах
var ctime = document.querySelectorAll(".comment-date");
// Значение переменной yesterday означает "вчера" на нужном языке
var yesterday = "Yesterday" + " ";

// Заменять только числа в кавычках
// ctime[0].innerHTML = yesterday + "23:" + (Math.floor(Math.random()*50)+10);
// ctime[1].innerHTML = yesterday + "20:" + (Math.floor(Math.random()*50)+10);
// ctime[2].innerHTML = yesterday + "19:" + (Math.floor(Math.random()*50)+10);
// ctime[3].innerHTML = yesterday + "18:" + (Math.floor(Math.random()*50)+10);
// ctime[4].innerHTML = yesterday + "15:" + (Math.floor(Math.random()*50)+10);
// ctime[5].innerHTML = yesterday + "14:" + (Math.floor(Math.random()*50)+10);
// ctime[6].innerHTML = yesterday + "14:" + (Math.floor(Math.random()*50)+10);
// ctime[7].innerHTML = yesterday + "13:" + (Math.floor(Math.random()*50)+10);
// ctime[8].innerHTML = yesterday + "11:" + (Math.floor(Math.random()*50)+10);
// ctime[9].innerHTML = yesterday + "10:" + (Math.floor(Math.random()*50)+10);
// ctime[10].innerHTML = yesterday + "9:" + (Math.floor(Math.random()*50)+10);
// ctime[11].innerHTML = yesterday + "8:" + (Math.floor(Math.random()*50)+10);
// ctime[12].innerHTML = yesterday + "7:" + (Math.floor(Math.random()*50)+10);
// ctime[13].innerHTML = yesterday + "6:" + (Math.floor(Math.random()*50)+10);
