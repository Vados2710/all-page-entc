var link = document.querySelector(".btn-write"), popup = document.querySelector(".modal-content");
link.addEventListener("click", (function (e) {
    console.log('1');
    e.preventDefault(), popup.classList.add("modal-content-show"), popup.style.top = window.pageYOffset + "40px"
}));
var close = popup.querySelector(".modal-content-close");
close.addEventListener("click", (function (e) {
    e.preventDefault(), popup.classList.remove("modal-content-show")
}));