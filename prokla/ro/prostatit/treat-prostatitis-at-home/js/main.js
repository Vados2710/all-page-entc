var $page = $('html, body');
$('a[data-scroll*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'data-scroll')).offset().top
    }, 900);
    $("input:text:visible:first").focus();
    return false;
});


let name = document.getElementById('commentName');
let text = document.getElementById('push_dtoej2ezey__message');
let btn = document.getElementById('push_dtoej2ezey__submit');
let message = document.getElementById('commentMessage');
let commentImage = document.getElementById('commentImage');
let needPhoto = document.getElementById('commentPhotoNeed');
let addedPhoto = document.getElementById('commentPhotoAdded');

commentImage.addEventListener('change', function(event){
    event.preventDefault();
    if(needPhoto.classList.contains("show")) {
        needPhoto.classList.remove("show");
    }
    if(!addedPhoto.classList.contains("show")) {
        addedPhoto.classList.add("show");
    }
});

btn.addEventListener('click', function(event){
    event.preventDefault();
    message.innerHTML = '';

    if(name.value.trim() && text.value.trim() && commentImage.value) {
        message.innerHTML = 'Mulţumesc! Recenzia dvs. a fost trimisă pentru moderare.';
        name.value = '';
        text.value = '';
        commentImage.value = '';
        needPhoto.classList.add("show");
        addedPhoto.classList.remove("show");
    } else {
        message.innerHTML = 'Vă rugăm să tastați toate câmpurile.'
    }  

    message.classList.add('show');
    btn.setAttribute('disabled', true);

    setTimeout(function() {
        message.classList.remove('show');
        btn.removeAttribute('disabled');
    }, 2000);
})