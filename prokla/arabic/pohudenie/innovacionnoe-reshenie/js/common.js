
  /* add comment */
  let commentsList = document.querySelector('.comments__list');
  let textarea = document.querySelector('.comment-add textarea');
  let btn = document.querySelector('.btn--add-comment');

function addComment() {
      function createComment() {
          let newComment = document.createElement('div');
          let ava = document.createElement('img');
        let name = document.createElement('div');
          let text = document.createElement('div');
          let date = document.createElement('div');
          let newDate = new Date().toLocaleDateString('ru');
          newComment.classList.add('comment');
          ava.classList.add('comment__ava');
          ava.src  = 'https://febatigr.com/content/FXzJSyqd6vHKODK/img/av-anon.jpg'
          name.classList.add('comment__name');
          name.textContent = 'مجهول';
          text.classList.add('comment__text');
          text.textContent = textarea.value;
          date.classList.add('comment__date');
          date.textContent = newDate;
          textarea.value = '';
          newComment.appendChild(ava);
        newComment.appendChild(name);
          newComment.appendChild(text);
          newComment.appendChild(date);
          commentsList.appendChild(newComment);
          textarea.classList.remove('error');
      }
      if (!textarea.value) {
          textarea.classList.add('error');
          return;
      }
      createComment();
  };
  btn.addEventListener('click', addComment);

    //fixed banner
  if ($(window).width() > 991) {
    var fixedBlock = $('.aside-prod');
    var topOfFixedBlock = fixedBlock.offset().top;
    // console.log(topOfFixedBlock);
    $(window).on("scroll", function () {
      // if (topOfFixedBlock <= $(window).scrollTop()){
      if ($(window).scrollTop() > 990) {
        fixedBlock.addClass('fixed');
      } else {
        fixedBlock.removeClass('fixed');
      }

      topOfOrder = $('.features-wrapper').position().top + 420;
      scrollDistanceFromTopOfDoc = $(document).scrollTop() + fixedBlock.height();
      scrollDistanceFromTopOfOrder = scrollDistanceFromTopOfDoc - topOfOrder;
      if (scrollDistanceFromTopOfDoc > topOfOrder) {
        fixedBlock.removeClass('fixed');
      }
    });
  }

    //if winter

  const attention = document.getElementById('attention');

  function isWinter(dt, elem) {
    const m = dt.getMonth();
    if (m == 0 || m ==1 || m==11) {
      elem.style.display = 'block';
    } else {
      elem.style.display = 'none';
    }
  };

  isWinter(new Date(), attention);