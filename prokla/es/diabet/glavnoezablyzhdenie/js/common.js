// --------------SCROLL-------------------
$("a").on("touchend, click", function (e) {
  e.preventDefault();
  $('body,html').animate({
    scrollTop: $('.order_block').offset().top
  }, 400);
});

$(".ac_footer a, .ac_gdpr_fix a").unbind("click");

// --------------New comment-------------------

var commentsBlock = document.querySelector('.comments__list');
var commForm = comments;

var commentsArr = Object.keys(localStorage)
  .filter(function (key) {
    return /comment_\d+/.test(key);
  })
  .map(function (key) {
    return JSON.parse(localStorage.getItem(key));
  });

commForm.addEventListener('submit', function (e) {
  e.preventDefault();

  var name = this.querySelector('#textareaname').value;
  var text = this.querySelector('#textarea').value;
  var avatar = this.querySelector('#avatar').files[0];
  var time = new Date();

  var comment = {};
  var tempArr = [];

  comment.name = name;
  comment.text = text;

  base64(avatar, function (avatarBase64) {
    comment.avatar = avatarBase64;

    commentsArr.push(comment);
    tempArr.push(comment);

    console.log(comment);
    console.log(tempArr);
    localStorage.setItem('comment_' + commentsArr.length, JSON.stringify(comment));
    render(tempArr);
    tempArr = [];
  });

  this.reset();
});

function base64(file, cb) {
  if (!file) return cb();
  var reader = new FileReader();
  reader.onload = readerOnload;
  reader.readAsBinaryString(file);

  function readerOnload(e) {
    var base64 = btoa(e.target.result);
    cb(base64);
  }
}

function render(arr) {
  arr.forEach(function (key) {
    ///Comment block
    var item = document.createElement('div');
    item.classList.add('comments__item-');

    //Ava block
    var avaBlock = document.createElement('div');
    avaBlock.classList.add('comments__ava-');
    var avaImg = document.createElement('img');
    avaBlock.append(avaImg);

    //info
    var dataInfo = document.createElement('div');
    dataInfo.classList.add('comments__info-');

    var dataName = document.createElement('span');
    dataName.classList.add('comments__name-');

    dataInfo.append(avaBlock);
    dataInfo.append(dataName);

    //Text
    var textBlock = document.createElement('div');
    textBlock.classList.add('comments__text-');

    dataInfo.append(textBlock);
    var text = document.createElement('p');
    textBlock.append(text);
    //TextImg
    var textImg = document.createElement('img');
    textBlock.append(textImg);

    item.append(dataInfo);

    ///LocalStorage

    if (key.avatar === undefined) {
      avaImg.src = 'img/userpic.png';
    } else {
      avaImg.src = 'data:image/jpeg;base64,' + key.avatar;
    }
    dataName.innerText = key.name;
    text.innerText = key.text;

    if (key.photo === undefined) {
      textImg.remove();
    } else {
      textImg.src = 'data:image/jpeg;base64,' + key.photo;
    }

    commentsBlock.append(item);
  });
}


// клонирование формы в футтер
if (document.documentElement.clientWidth <= 990) {
    // клонирование формы в футтер
    var clonedNode = document.getElementById("form-box").cloneNode(true);
    document.getElementById("form-bottom").appendChild(clonedNode);
  } else {
    //не выполнять
  }

// скролл к форме
  function toform(id) {
    id.click(function () { // ID откуда кливаем
      $('html, body').animate({
        scrollTop: $("#form-box").offset().top // класс объекта к которому приезжаем
      }, 700); // Скорость прокрутки
    });
  }
  toform($(".comments__item img"))
  toform($(".burger"))
  toform($(".promo__img"))
  toform($(".tx18 span"))
  toform($(".header__logo"))
  toform($(".menu__ico"))
  toform($(".menu ul li"))
  toform($(".discount"))

var count = $(".counter").html(),
    speed = 7000,
    counterInfo = parseInt(count);

setInterval(function() {
  if (counterInfo !== 3) {
    $(".counter").html(counterInfo--);
  }
}, speed)