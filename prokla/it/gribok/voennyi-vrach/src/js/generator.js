$(document).ready(function () {
    var flag = true;

    $(window).mouseout(function (e) {
        if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
            $('.demon_popup').fadeIn(300);
            flag = false;
        }
    })


    $('.demon_close, .popup_btn').click(function () {
        $('.demon_popup').fadeOut(300);
    });

    $('#pop-up-disappear').on('click' ,function () {
        $('.demon_popup').fadeOut(300);
    });

    $('.demon_popup').click(function (e) {
        e.stopPropagation();
    });
});



var mobMenu=document.querySelector(".burger-menu"),menuBtn=document.querySelector(".burger"),closeBtn=document.querySelector(".close-button");menuBtn.addEventListener("click",function(){mobMenu.classList.contains("closed")&&(mobMenu.classList.remove("closed"),mobMenu.classList.add("opened"))});closeBtn.addEventListener("click",function(){mobMenu.classList.contains("opened")&&(mobMenu.classList.remove("opened"),mobMenu.classList.add("closed"))});
