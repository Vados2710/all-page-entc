var close = document.querySelector('.p5213 .close');

close.addEventListener('click', function(){
    document.querySelector('.t4527').classList.remove('open');
});

var indicator = true;

window.document.addEventListener('mouseleave', function(e){
    if (indicator == false) {
return false;
    }

    if(e.clientY < 0) {
indicator = false;
document.querySelector('.t4527').classList.add('open');
    }
});
$('a').click(function () {
    event.preventDefault();
    $(this).attr('href', '#form');
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 70}, 1500);
});