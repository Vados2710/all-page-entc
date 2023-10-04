var element = $('#teaser-comment'),
  teaserLoad = $('#comment-load')
  // count = localStorage.getItem('count') ? localStorage.getItem('count') : 0;
// $(window).scroll(function () {
//   var a = $(window).scrollTop() + $(window).height(),
//     b = element.offset().top;
//   a > b &&
//     0 == count &&
//     (teaserLoad.addClass('visible'),
//     (count = 1),
//     localStorage.setItem('count', count));
// });

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
  (bannerImg.src = localStorage.getItem('ImgBase64')
    ? localStorage.getItem('ImgBase64')
    : 'assets/2.jpg'),
  (user_foto.src = localStorage.getItem('userFotoImg')
    ? localStorage.getItem('userFotoImg')
    : 'assets/1.jpg'));
function changeText() {
  if ($('#textareaname').val() == '') {
    $('#textareaname').css('border-bottom', '1px solid #e90e0e');
    return;
  } else {
    $('#textareaname').css('border-bottom', '1px solid #838383');
  }

  if ($('#textarea').val() == '') {
    $('#textarea').css('border-bottom', '1px solid #e90e0e');
    return;
  } else {
    $('#textarea').css('border-bottom', '1px solid #838383');
  }

  var a = document.getElementById('textarea').value,
    b = document.getElementById('textareaname').value,
    d = localStorage.getItem('ImgBase64');

  foto = localStorage.getItem('userFotoImg');
  localStorage.setItem('textAlert', a);
  localStorage.setItem('textName', b);
  vk_text.innerHTML = a;
  vk_name.innerHTML = b;
  vk_block.style.display = 'flex';
  vk_image.src = d ? d : 'assets/2.jpg';
  vk_userImage.src = foto ? foto : 'assets/1.jpg';
  bannerImage.value = '';
  textAlert.value = '';
  textName.value = '';
  vk_image.scrollIntoView();
}
bannerImage.addEventListener('change', function (a) {
  loadImageFileAsURL2(a, '#base64Img', 'ImgBase64');
});
userFile.addEventListener('change', function (a) {
  loadImageFileAsURL(a, '#userPic', 'userFotoImg');
});
function loadImageFileAsURL(a, b, d) {
  a = document.getElementById(a.target.id).files;
  if (0 < a.length) {
    a = a[0];
    var e = new FileReader();
    e.onload = function (a) {
      a = a.target.result;
      localStorage.setItem(d, a);
      document.querySelector(b).src = a == null ? 'assets/1.jpg' : a;
    };
    e.readAsDataURL(a);
  }
}
function loadImageFileAsURL2(a, b, d) {
  a = document.getElementById(a.target.id).files;
  if (0 < a.length) {
    a = a[0];
    var e = new FileReader();
    e.onload = function (a) {
      a = a.target.result;
      localStorage.setItem(d, a);
      document.querySelector(b).src = a == null ? 'assets/2.jpg' : a;
    };
    e.readAsDataURL(a);
  }
}



