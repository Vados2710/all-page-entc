function scrollLink(){$(document).ready((function(){$("a[href^='#']").on("click",(function(e){var t=$(this);return $("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top},777),e.preventDefault(),!1}))}))}function makeTimer(e){var t=document.querySelector("#min"),o=document.querySelector("#sec"),r=setInterval((function(){-1===e?clearInterval(r):(t.textContent=Math.floor(e/60)<10?"0"+Math.floor(e/60):Math.floor(e/60),o.textContent=e%60<10?"0"+e%60:e%60,e-=1)}),1e3)}scrollLink(),$(document).ready((function(){function e(e,t){e.html(t)}!function t(o){var r=new Date;r.setDate(r.getDate()+1),r.setHours(0),r.setMinutes(0),r.setSeconds(0),r.setSeconds(r.getSeconds()-1);var n=new Date,s=r-n;r>n?(hour=parseInt(s/36e5)%24,hour<10&&(hour="0"+hour),hour=hour.toString(),min=parseInt(s/6e4)%60,min<10&&(min="0"+min),min=min.toString(),sec=parseInt(s/1e3)%60,sec<10&&(sec="0"+sec),sec=sec.toString(),3==hour[1]&&5==min[0]&&9==min[1]&&5==sec[0]&&9==sec[1]?e($(o).find(".hour0"),hour[0]):$(o).find(".hour0").html(hour[0]),5==min[0]&&9==min[1]&&5==sec[0]&&9==sec[1]?e($(o).find(".hour1"),hour[1]):$(o).find(".hour1").html(hour[1]),9==min[1]&&5==sec[0]&&9==sec[1]?e($(o).find(".min0"),min[0]):$(o).find(".min0").html(min[0]),5==sec[0]&&9==sec[1]?e($(o).find(".min1"),min[1]):$(o).find(".min1").html(min[1]),9==sec[1]?e($(o).find(".sec0"),sec[0]):$(o).find(".sec0").html(sec[0]),$(o).find(".sec1").html(sec[1]),e($(o).find(".sec1"),sec[1]),setTimeout(t,1e3,o)):console.log("end")}(".timer")})),document.addEventListener("DOMContentLoaded",(()=>{moment.locale(document.getElementsByTagName("html")[0].getAttribute("lang"));document.querySelectorAll(".js-current-date").forEach((e=>{e.innerHTML=moment().format("DD.MM.YYYY")})),document.querySelectorAll(".js-current-month").forEach((e=>{e.innerHTML=moment().format("MMMM")})),document.querySelectorAll(".js-current-year").forEach((e=>{e.innerHTML=moment().format("YYYY")})),document.querySelectorAll(".js-publish-date-notime").forEach((e=>{e.innerHTML=moment().add(-6,"days").format("LL")})),document.querySelectorAll("span[class^=day-]").forEach((e=>{let t=e.getAttribute("class").split("-")[1];e.innerText=moment().add(-t,"days").format("DD.MM.YYYY")}))}));var resultWrapper=document.querySelector(".spin-result-wrapper-roulette"),wheel=document.querySelector(".wheel-img-roulette"),closePopup=document.querySelector(".close-popup-roulette");function spin(){wheel.classList.contains("rotated")||(wheel.classList.add("super-rotation"),setTimeout((function(){resultWrapper.style.display="block"}),8e3),setTimeout((function(){$(".spin-wrapper-roulette").slideUp(),$(".order_block-roulette").slideDown(),makeTimer(600)}),1e4),wheel.classList.add("rotated"))}$(".close-popup-roulette, .pop-up-button-roulette").click((function(e){e.preventDefault(),$(".spin-result-wrapper-roulette").fadeOut()})),$(document).ready((function(){$(".boxes > div").click((function(){$(this).parent().hasClass("boxesfirsttry")?($(".boxes").removeClass("boxesfirsttry"),$(this).addClass("openbox"),$(this).find(".try").hide(),$(this).find(".opentry").show(),setTimeout((function(){$(".sweet-overlay").show(),$(".sweet-alert").show()}),500)):$(this).parent().hasClass("boxeslasttry")&&($(this).hasClass("openbox")||($(this).find(".try").hide(),$(this).find(".opentry").show(),$(this).find(".boxtext").css("display","block"),setTimeout((function(){$(".spin-result-wrapper-box").show(),setTimeout((function(){$("#boxesContainer").slideUp(250),setTimeout((function(){$(".order_block").slideDown(250)}),500)}),500)}),500)))})),$("#update").click((function(){$(".sweet-overlay").hide(),$(".sweet-alert").hide(),$(".boxes").addClass("boxeslasttry")})),$(".pop-up-button-box").click((function(){$(".spin-result-wrapper").hide(),$("a").attr("href","#fforms"),makeTimer(600)}))}));class Comment{constructor(e,t,o,r,n,s){this.commentForm=document.querySelector(e),this.inputCommentName=document.querySelector(t),this.inputCommentText=document.querySelector(o),this.formImage=document.querySelector(r),this.formAvatar=document.querySelector(n),this.commentPushBlock=document.querySelector(s),this.commArrAll=[],this.formImageUrl,this.formImageChange(),this.pushComBlock(),this.domOnloader()}uploadFile(e){if(!["image/jpeg","image/png","image/gif"].includes(e.type))return alert("Solo se permiten imágenes."),void(formImage.value="");if(e.size>1048576)alert("El archivo debe tener menos de 1 MB.");else{var t=new FileReader;t.onload=e=>{this.formAvatar.innerHTML=`<img src="${e.target.result}" alt="Фото">`,this.formAvatar.classList.add("form__avatar--loaded"),this.formImageUrl=e.target.result},t.onerror=function(e){alert("Error")},t.readAsDataURL(e)}}formImageChange(){this.formImage.addEventListener("change",(()=>{this.uploadFile(this.formImage.files[0])}))}pushComm(){}removeInputClass(){this.inputCommentName&&(this.inputCommentName.value="",this.inputCommentName.classList.remove("error")),this.inputCommentText.value="",this.inputCommentText.classList.remove("error")}pushComBlock(){this.commentForm.addEventListener("submit",(e=>{if(e.preventDefault(),this.inputCommentName){if(this.inputCommentName.value&&inputCommentText.value)return this.formAvatar.innerHTML="",this.formAvatar.classList.remove("form__avatar--loaded"),this.pushComm();this.inputCommentName.classList.add("error"),this.inputCommentText.classList.add("error")}else{if(this.inputCommentText.value)return this.formAvatar.innerHTML="",this.formAvatar.classList.remove("form__avatar--loaded"),this.pushComm();this.inputCommentText.classList.add("error")}}))}domOnloader(){document.addEventListener("DOMContentLoaded",(()=>{localStorage.commArr&&(this.commArrAll=JSON.parse(localStorage.getItem("commArr")),commentPushBlock.innerHTML=this.commArrAll.join(""))}))}}