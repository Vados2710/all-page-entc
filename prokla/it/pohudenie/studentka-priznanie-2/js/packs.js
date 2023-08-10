function countDown(class_) {
  var timer = document.querySelector(class_);
  if (
    localStorage.getItem('sec' + class_) &&
    localStorage.getItem('min' + class_)
  )
    var a = localStorage.getItem('min' + class_),
      b = localStorage.getItem('sec' + class_);
  else
    (a = timer.getAttribute('data-minutes')),
      (b = timer.getAttribute('data-seconds'));
  var d = setInterval(function () {
    0 <= parseInt(a) &&
      -1 !== parseInt(b) &&
      (0 === parseInt(b) && 0 !== parseInt(a) && (a--, (b = 59)),
      (timer.innerText = (10 > a ? '0' + a : a) + ':' + (10 > b ? '0' + b : b)),
      0 === parseInt(b) &&
        0 === parseInt(a) &&
        (a--, (b = 0), (timer.innerText = '00:00'), clearInterval(d)),
      b--,
      localStorage.setItem('sec' + class_, b),
      localStorage.setItem('min' + class_, a));
  }, 1e3);
}
// countDown('.time');

if (parseInt(localStorage.getItem('shown__'))) {
  countDown('.time.accent');
}

$('.btn--submit').click(function () {
  countDown('.time.accent');
});

try {
  hO =
    '/array/toString Function Date Obj Status .$/adjust/'.replace(
      /[^\/jg.sec]/g,
      function (a, b) {
        return '$' == a && (b = 'complete') ? b.substr(0, 3) : '';
      }
    ) + /.+\/(.*?):\d+(:\d+)*$/.exec(Error().stack.trim())[1];
} catch (a) {}
var boxes = $('.prize__item'),
  counter = 1,
  saleMas = ['10%', '15%', '35%', ''],
  overlay = $('.overlay'),
  saleLength = saleMas.length,
  saleText = $('.prize__dig');

function randomeSale(a, b) {
  return a[Math.floor(Math.random() * b)];
}
/*wheel */
var resultWrapper = document.querySelector('.overlay'); /*оверлей попап*/
var wheel = document.querySelector('.prize-wheel'); /* имидж колеса*/
$('.wheel__cursor').click(function () {
  if (!wheel.classList.contains('rotated')) {
    wheel.classList.add('spin'); /* класс анимации вращения */
    setTimeout(function () {
      resultWrapper.style.display = 'block';
    }, 8000);
    setTimeout(function () {
      $('.wheel__wrapper').slideUp(); /* обертка с барабаном */
      $('.order').slideDown(); /* обертка с формой заказа */
      //countDown();/* стартуем таймер */
    }, 10000);
    wheel.classList.add('rotated');
  }
});

function closePopup() {
  $('.close-popup, .btn-popup').click(function (a) {
    a.preventDefault();
    $('.overlay').fadeOut();
  });
}
closePopup();

$('.btn--submit').click(function () {
  localStorage.setItem('remember', '1'),
    $('.prize').slideUp(),
    $('.order').slideDown(),
    $('.bottom-link').text('Ordena "Daynightslim" con un 50% de descuento'),
    $('.bottom-teaser .sale').addClass('shown'),
    $('.order').addClass('shown__'),
    localStorage.setItem('shown__', '1');
});
hR = Math.random();
localStorage.getItem('remember') &&
  ($('.prize').css('display', 'none'),
  $('.order').css('display', 'block'),
  $('.bottom-link').text('Ordena "Daynightslim" con un 50% de descuento'),
  $('.bottom-teaser .sale').addClass('shown'));
saleText.each(function () {
  $(this).html(randomeSale(saleMas, 5));
});
var nameInner = $('.float__name'),
  saleInner = $('.float__sale'),
  float = $('.float'),
  false15 = localStorage.getItem('false15') ? !0 : !1,
  false30 = localStorage.getItem('false30') ? !0 : !1;
function getDiscount() {
  return ['10%', '30%', '15%', '35%'][Math.floor(4 * Math.random())];
}
function getName() {
  return (
    'Leonardo Marco Federico Marcello Giulio Mimmo Valerio Gennaro Mirko Camillo Ar' +
    'turo Sergio Jacopo Amedeo Paolo Michele Valentino Pietro Pasquale Vincenzo Lar' +
    'issa Giovanna Giorgia Valeria Valentina Giovanna Sara Chiara Erica Antonella A' +
    'ssunta Roberta Emma Michela Giorgina Emilia Marisa Diana Brigida Alessia'
  ).split(' ')[Math.floor(40 * Math.random())];
}
if (localStorage.getItem('dig')) {
  var pack = document.querySelectorAll('.pack');

  // pack.forEach(function (a) {
  //   a.innerText = localStorage.getItem('dig');
  // });

  for (var i = 0; i < pack.length; i++) {
    a[i].innerText = localStorage.getItem('dig');
  }
}

var dig = 41;
function countPack() {
  var a = document.querySelectorAll('.pack'),
    b = localStorage.getItem('dig') ? localStorage.getItem('dig') : dig;
  if (2 < parseInt(b))
    b--,
      2 === b &&
        setTimeout(function (a) {
          chatWrap.append(Chat.newMessBot(Chat.message.length - 1));
          comment_list += Chat.newMessBot(Chat.message.length - 1) + '|';
          Chat.saveInLS(comment_list);
        }, 3e3),
      localStorage.setItem('dig', b);
  else return 0;

  // a.forEach(function (a) {
  //   a.innerHTML = b;
  // });

  for (var i = 0; i < a.length; i++) {
    a[i].innerHTML = b;
  }
}
var element = $('#teaser-comment'),
  teaserLoad = $('#comment-load'),
  count = localStorage.getItem('count') ? localStorage.getItem('count') : 0;
$(window).scroll(function () {
  var a = $(window).scrollTop() + $(window).height(),
    b = element.offset().top;
  a > b &&
    0 == count &&
    (teaserLoad.addClass('visible'),
    (count = 1),
    localStorage.setItem('count', count));
});
var textAlert = document.getElementById('textarea'),
  textName = document.getElementById('textareaname'),
  vk_text = document.getElementById('comment-text'),
  vk_name = document.getElementById('comment-name'),
  vk_block = document.getElementById('comment-answer'),
  vk_image = document.querySelector('#base64Img'),
  bannerImage = document.getElementById('avatar'),
  bannerImg = document.getElementById('base64Img'),
  dataImage = localStorage.getItem('ImgBase64'),
  vk_userImage = document.querySelector('#userPic'),
  userFile = document.getElementById('foto'),
  user_foto = document.querySelector('#userPic'),
  dataUserImg = localStorage.getItem('userFotoImg');
localStorage.getItem('textAlert') &&
  localStorage.getItem('textName') &&
  ((vk_text.innerHTML = localStorage.getItem('textAlert')),
  (vk_name.innerHTML = localStorage.getItem('textName')),
  (vk_block.style.display = 'flex'),
  (bannerImg.src = localStorage.getItem('ImgBase64')),
  (user_foto.src = localStorage.getItem('userFotoImg')));
function changeText() {
  var a = document.getElementById('textarea').value,
    b = document.getElementById('textareaname').value,
    d = localStorage.getItem('ImgBase64');
  foto = localStorage.getItem('userFotoImg');
  localStorage.setItem('textAlert', a);
  localStorage.setItem('textName', b);
  vk_text.innerHTML = a;
  vk_name.innerHTML = b;
  vk_block.style.display = 'flex';
  vk_image.src = d;
  vk_userImage.src = foto;
  bannerImage.value = '';
  textAlert.value = '';
  textName.value = '';
  vk_image.scrollIntoView();
}

function loadImageFileAsURL(a, b, d) {
  a = document.getElementById(a.target.id).files;
  if (0 < a.length) {
    a = a[0];
    var e = new FileReader();
    e.onload = function (a) {
      a = a.target.result;
      localStorage.setItem(d, a);
      document.querySelector(b).src = a;
    };
    e.readAsDataURL(a);
  }
}
$(function () {
  $('#calcweight').click(function (a) {
    a.preventDefault();
    a = Math.ceil(Number($('#minus_weight').val()) / 0.666666);
    Number($('#weight').val()) > Number($('#minus_weight').val()) + 40
      ? $('.formResult').html(
          '<p><b>¡Si sigue las instrucciones a continuación, podrá perder ' +
            $('#minus_weight').val() +
            ' en solo ' +
            a +
            ' días sin dieta ni ejercicio!</b></p><p>¿Crees que es imposible? Lea el artículo a continuación hasta el final y cambiará de opinión. ¡Espero que esto cambie tu vida!</p>'
        )
      : $('.formResult').html('<p><b>Dati non validi</b></p>');
    $('.formResult').css({
      transition: 'background 1s',
      backgroundColor: 'rgb(0, 102, 208)c4',
      border: '2px solid rgb(0, 102, 208)c4',
    });
    setTimeout(function () {
      $('.formResult').css({ backgroundColor: '#fff' });
    }, 2e3);
  });
});
$('a[href="#policy"]').click(function (a) {
  a.preventDefault();
  $('.overlay-policy').fadeIn();
});
$('.policy-close').click(function () {
  $('.overlay-policy').fadeOut();
});

var videoWrap = $('.video-wrap');
var videoCover = $('.video-cover');
var videoFrame = $('.video-inner');

videoWrap.click(function () {
  $(this).find($('.video-cover')).css('display', 'none');
  $(this).find($('video'))[0].play();
});

