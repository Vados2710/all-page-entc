$(document).on('click', 'a:not(.ev-footer__link), .sidebar_block', function (event) {
  event.preventDefault();
  $("html, body").animate({
    scrollTop: $("#form").offset().top - 10
  }, 800);
});

const accordItems = document.querySelectorAll(".elementor-accordion-item");

for (let i = 0; i < accordItems.length; i++) {
  accordItems[i].addEventListener("click", function (e) {
    // closeContents();
    if (e.target.classList.contains("elementor-tab-title")) {
      accordItems[i].classList.toggle("active");
    }
  })  
}

function closeContents() {
  for (let i = 0; i < accordItems.length; i++) {
    accordItems[i].classList.remove("active");
  }
}

