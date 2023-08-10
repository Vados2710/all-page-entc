let widget = document.querySelector('#widget_sp_image-3');
window.addEventListener('scroll', function () {
    if (this.pageYOffset.toFixed() > 170) {
        widget.classList.add('fixed');
    } else {
        widget.classList.remove('fixed');
    }
});


