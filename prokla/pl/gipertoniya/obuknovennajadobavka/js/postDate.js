var calcForm = document.querySelector(".calc-form2");
var form1 = document.querySelector(".form-1");
var calcWrap = document.querySelector(".calculator");
var textt = document.querySelector(".textt");

calcForm.addEventListener("submit", function (e) {
  e.preventDefault();

  calcWrap.style.display = "none";

  form1.style.display = "block";
  textt.style.display = "block";

  $("html, body").animate(
    {
      scrollTop: $("#form1").offset().top,
    },
    700
  );
});
