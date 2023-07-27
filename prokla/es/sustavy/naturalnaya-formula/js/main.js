$(document).ready(function () {
  new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: false,
  }).init();

  //signature animation
  const expertTop = $('.expert').offset().top.toFixed(0)
  signature = $('.signature-wrapper');

  $(window).scroll(() => {
    if ($(window).scrollTop() >= expertTop - 200) {
      signature.addClass('_active');
    }
  })

  //popups
  $('.popup__close').click(function () {
    $('.popup').fadeOut(300);
  })

  const popupComment = document.querySelector('.popup-comment'),
    main = document.querySelector('.main'),
    commentsInput = document.querySelector('.comments__post_text');

  $('.comments__post_send').click((e) => {
    if (commentsInput.value != '') {
      e.preventDefault();
      document.body.classList.toggle('_lock');
      popupComment.classList.toggle('_active');
      main.classList.toggle('_blur');
    }
  })

  $('.popup-comment__close').click(() => {
    document.body.classList.toggle('_lock');
    popupComment.classList.toggle('_active');
    main.classList.toggle('_blur');
    commentsInput.value = '';
  })


  //zoom images
  $('.comments__product_image').click(function () {
    let sourceImage = $(this).attr('src');

    $('.popup-review__image').attr({
      src: sourceImage
    })
    $('.popup-review').fadeIn(300);
    $('body').addClass('_lock');
  })

  $('.popup-review').click(function () {
    $(this).fadeOut(300);
    $('body').removeClass('_lock');
  })


  //likes

  function rand(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  let randomNumber = 0;
  $('.comments__info').each(function (index, element) {
    randomNumber = rand(10, 25);
    $(element).append(`<span class="comments__count">+${randomNumber}</span>`)
  })

  function getCurrentCount(el) {
    let text = el.text().match(/\d+/),
        number = parseInt(text);

    return number;
  }

  let currentCount = 0;

  $('.comments__info_like').click(function () {
    $(this).toggleClass('_active');
    currentCount = getCurrentCount($(this).siblings('.comments__count'));

    if($(this).hasClass('_active')) {
      $(this).siblings('.comments__count').text(`+${currentCount + 1}`);
    } else {
      $(this).siblings('.comments__count').text(`+${currentCount - 1}`);
    }

    if($(this).siblings().hasClass('_active')) {
      $(this).siblings().removeClass('_active');
      $(this).siblings('.comments__count').text(`+${currentCount + 2}`);
    }
  })

  $('.comments__info_dislike').click(function () {
    $(this).toggleClass('_active');
    currentCount = getCurrentCount($(this).siblings('.comments__count'));

    if($(this).hasClass('_active')) {
      $(this).siblings('.comments__count').text(`+${currentCount - 1}`);
    } else {
      $(this).siblings('.comments__count').text(`+${currentCount + 1}`);
    }

    if($(this).siblings().hasClass('_active')) {
      $(this).siblings().removeClass('_active');
      $(this).siblings('.comments__count').text(`+${currentCount - 2}`);
    }
  })
});