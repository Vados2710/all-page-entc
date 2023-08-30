// picture zoom
document.querySelector(".zoom-icon").addEventListener("click", (function () {
  var divElement = document.createElement("div");
  divElement.className = "zoom-bg";
  var imgElement = document.createElement("img");
  imgElement.src = document.querySelector(".zoom").src,
    imgElement.className = "zoom active",
    document.body.appendChild(divElement),
    divElement.appendChild(imgElement),
    document.querySelector(".zoom-bg").addEventListener("click", (function () {
      // document.querySelector(".zoom-bg").remove();
      document.querySelector(".zoom-bg").parentNode.removeChild(document.querySelector(".zoom-bg"));
    }))
}));


//comments
var commentInput = document.querySelector(".name-input");
var commentTextarea = document.querySelector(".name-textarea");
document.querySelector(".send-comment").addEventListener("click", (function () {
  commentInput.style.border = "2px solid #E7E9EF",
  commentTextarea.style.border = "2px solid #E7E9EF",
  "" === commentInput.value.trim() && (commentInput.style.border = "2px solid red"),
  "" === commentTextarea.value.trim() && (commentTextarea.style.border = "2px solid red"),
  commentInput.value.trim() && commentTextarea.value.trim() && (commentInput.value = "",
    commentTextarea.value = "",
    document.querySelector(".thank-you").style.display = "flex")
}));
document.querySelector(".close").addEventListener("click", (function () {
  document.querySelector(".thank-you").style.display = "none"
}));