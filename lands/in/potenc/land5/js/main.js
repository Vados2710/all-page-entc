    var panel = $('.panel-heading')

    panel.click(function () {
        var x = $(this).children('.panel-collapse'),
            y = $(this),
            p = $(this).find('.h4plus')

        $('.h4plus').css('dispay', 'block')
        if (x.hasClass('none')) {
            $('.panel-collapse').addClass('none')
            $('.panel-collapse').removeClass('block')
            $('.h4plus').addClass('block')
            $('.h4plus').removeClass('none')
            setTimeout(function () {
                x.removeClass('none')
                x.addClass('block')
                p.removeClass('block')
                p.addClass('none')
            }, 50)
        }
        if (x.hasClass('block')) {
            setTimeout(function () {
                x.removeClass('block')
                x.addClass('none')
                p.removeClass('none')
                p.addClass('block')
            }, 50)
        }
    })

    $(document).ready(function () {

    $("a.pre_toform").click(function () {
        close()

        return $("html, body").animate({

            scrollTop: $($(this).attr("href")).offset().top + "px"

        }, {

            duration: 500,

            easing: "swing"

        }), !1
        
        

    })

});

var navbar = document.querySelector('.navbar-collapse'),
    mobMenu = document.getElementById('toggleMob'),
    mobLi = $('.mobMenuLi')
    
mobMenu.onclick = function() {
    if (mobMenu.classList.contains('mobMenuClosed')) {
        setTimeout(open, 50)
    } 
    if (mobMenu.classList.contains('mobMenuOpened')) {
        setTimeout(close, 50)
    } 
}

function open() {
    console.log('open')
    navbar.classList.remove('collapse')
    mobMenu.classList.remove('mobMenuClosed')
    mobMenu.classList.add('mobMenuOpened')
}

function close() {  
    console.log('close')
    navbar.classList.add('collapse')
    mobMenu.classList.add('mobMenuClosed')
    mobMenu.classList.remove('mobMenuOpened')
}
























