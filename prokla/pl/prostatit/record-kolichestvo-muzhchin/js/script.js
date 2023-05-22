var imgs = document.querySelectorAll('.center.blur');

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function(){
        this.querySelector('img').style.filter = 'none';
        this.querySelector('img').style.display = 'block';
        this.style.height = 'auto';
        this.querySelector('.blur-p').style.display = 'none';
    });
}