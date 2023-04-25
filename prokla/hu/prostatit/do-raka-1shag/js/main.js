var hiddenBox = document.querySelectorAll(".show-box");
var imgToggle = document.querySelectorAll(".image");
    for (i=0; i<hiddenBox.length; i++) {
        hiddenBox[i].onclick=(function () {
            this.nextElementSibling.classList.toggle('img-show');
        });
};

