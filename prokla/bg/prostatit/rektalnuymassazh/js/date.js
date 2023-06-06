(function date(footer) {
    var now = new Date();
    footer[0].textContent = now.getFullYear()
})(
    document.getElementsByClassName('footer-date')
);