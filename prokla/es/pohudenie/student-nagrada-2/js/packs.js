

function countDown(class_) {
  let timer = document.querySelector(class_);
  if (localStorage.getItem("sec" + class_) && localStorage.getItem("min" + class_))
    var a = localStorage.getItem("min" + class_),
      b = localStorage.getItem("sec" + class_);
  else
  var
    a = timer.getAttribute("data-minutes"),
    b = timer.getAttribute("data-seconds");


    var d = setInterval(function () {
      0 <= parseInt(a) && -1 !== parseInt(b) && (0 === parseInt(b) && 0 !== parseInt(a) && (a-- , b = 59),
      timer.innerText = 
      (10 > a ? "0" + a : a) + ":" + (10 > b ? "0" + b : b),
      0 === parseInt(b) && 0 === parseInt(a) && (a-- , b = 0, timer.innerText = "00:00", clearInterval(d)),      b-- 

    )
  }, 1E3)
}
 // countDown('.time');

if (parseInt(localStorage.getItem('shown__'))) {
  countDown('.time.accent')
}

$(".btn--submit").click(function () {
  if (parseInt(localStorage.getItem('shown__'))) {
    return
  }
  countDown('.time.accent')
});




localStorage.getItem("remember") && (
  $(".prize").css("display", "none"),
  $(".order").css("display", "block"),
  $(".bottom-link").text('Ordenar Matcha Slim con un 50% de descuento'),
  $(".bottom-teaser .sale").addClass("shown")
);




//newAddComm

var commentsBlock = document.querySelector('.comments__list');
var commForm = comments;


var commentsArr = Object.keys(localStorage).filter(function(key) {
  return /comment_\d+/.test(key)})
.map((function(key) {
  return JSON.parse(localStorage.getItem(key));
}));


commForm.addEventListener('submit', function(e) {
  e.preventDefault();


  var name = this.querySelector('#textareaname').value;
  var text = this.querySelector('#textarea').value;
  var photo = this.querySelector('#foto').files[0]
  var avatar = this.querySelector('#avatar').files[0]
  
  var comment = {}
  var tempArr = [];

  comment.name = name;
  comment.text = text;
  comment.photo;
  

  base64(photo, function(photoBase64) {    
    base64(avatar, function(avatarBase64) {
      comment.avatar = avatarBase64;
      comment.photo = photoBase64;

      commentsArr.push(comment);
      tempArr.push(comment);

      console.log(comment)
      console.log(tempArr)
      localStorage.setItem('comment_'+ commentsArr.length, JSON.stringify(comment));
      render(tempArr);
      tempArr = [];
    })  
  })  

  

  this.reset();
});


function base64(file, cb){
  if(!file) return cb();
  var reader = new FileReader();
  reader.onload = readerOnload;
  reader.readAsBinaryString(file);

  function readerOnload(e){
    var base64 = btoa(e.target.result);
    cb(base64)
  };
}


function render(arr) {    

  arr.forEach( function(key) {
    ///Comment block
    var item = document.createElement('div');
    item.classList.add('comments__item');

    //Ava block
    var avaBlock = document.createElement('div');
    avaBlock.classList.add('comments__avatar');
    var avaImg = document.createElement('img');
    avaBlock.append(avaImg);

    //Comment data
    var dataBlock = document.createElement('div');
    dataBlock.classList.add('comments__body');

    //info 
    var dataInfo = document.createElement('div');
    dataInfo.classList.add('comments__info');
    dataBlock.append(dataInfo);

    var dataName = document.createElement('span');
    dataName.classList.add('comments__name');

    var dataDate = document.createElement('span');
    dataDate.classList.add('comments__date');

    var date = new Date();
    dataDate.innerHTML = formatDate(date);

    dataInfo.append(dataName);
    dataInfo.append(dataDate);

    //Text
    var textBlock = document.createElement('div');
    dataBlock.append(textBlock);
    var text = document.createElement('p');;
    textBlock.append(text);
    //TextImg
    var textImg = document.createElement('img');
    textBlock.append(textImg);
    item.append(avaBlock);
    item.append(dataBlock);

    ///LocalStorage
    
    if (key.avatar === undefined) {
      avaImg.src = '//{{cdn_host}}/content/Yn9gF6n4XY0GsJk/img/userpic.png';
    } else {
      avaImg.src =  'data:image/jpeg;base64,' + key.avatar;
    }
    dataName.innerText = key.name;
    text.innerText = key.text;

    if (key.photo === undefined) {
      textImg.remove()
    } else {
      textImg.src = 'data:image/jpeg;base64,' + key.photo;
    }

    commentsBlock.append(item)
  })

}

///Date for comments

function formatDate(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = date.getFullYear();
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}


  render(commentsArr);


////////////

//Weight Calc
$(function () {
	$("#calcweight").click(function (a) {
		a.preventDefault(); 
		a = Math.ceil(Number($("#minus_weight").val()) / .666666);
		Number($("#weight").val()) > Number($("#minus_weight").val()) + 40 
			? $(".formResult").html(
					"<p><b>Si sigues estas instrucciones, ¡podrás perder " + 
						$("#minus_weight").val() + 
						" kilos en solo " + 
						a + 
						" días sin dietas ni ejercicio!</b></p><p>¿Crees que es imposible? Lee el siguiente artículo hasta el final y cambiarás de opinión. ¡Espero que esto cambie tu vida!</p>"
				): $(".formResult").html("<p><b>Datos incorrectos.</b></p>");
    $(".formResult").css({ transition: "background 1s", backgroundColor: "#ff7426c4", border: '2px solid #ff7426c4' }); setTimeout(function () { $(".formResult").css({ backgroundColor: "#fff" }) }, 2E3)
  })
});



//video

var videoWrap = $('.video-wrap');
var videoCover = $('.video-cover');
var videoFrame = $('.video-inner');

videoWrap.click(function () {
  $(this)
    .find($('.video-cover'))
    .css('display', 'none');
  $(this)
    .find($("video"))[0]
    .play();
});