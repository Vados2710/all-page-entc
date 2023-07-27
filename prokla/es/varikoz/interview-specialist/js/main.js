const hidBlock = document.querySelector(".hid-block");
const hidBtn = document.querySelector(".hid-btn");

hidBtn.addEventListener("click", function () {
  hidBlock.classList.toggle("hid-block--opened");
  let height = hidBlock.scrollHeight;
  hidBlock.style.height = hidBlock.classList.contains("hid-block--opened") ? height + "px" : "";
});

