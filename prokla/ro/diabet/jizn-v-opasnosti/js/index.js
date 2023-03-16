for (var i = 0; i<document.querySelectorAll('.date').length; i++){
    document.querySelectorAll('.date')[i].innerHTML = new Date().toLocaleDateString('ru');
}

document.querySelector('.year').innerHTML = new Date().getFullYear()


