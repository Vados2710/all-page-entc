var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

function spin() {
    if (wheel.classList.contains('rotated')) {
        resultWrapper.style.display = "block";
    } else {
        wheel.classList.add('super-rotation');
        setTimeout(function() {
            resultWrapper.style.display = "block";
        }, 8000);
        setTimeout(function() {
            $('.spin-wrapper').slideUp();
            $('.order_block').slideDown();
        }, 10000);
        wheel.classList.add('rotated');
    }
}
var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function(e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();
});

function PleaseChange() {
    const allLinksToChange = document.querySelectorAll('.changed-link');
    for (let i = 0; i < allLinksToChange.length; i++){
        allLinksToChange[i].href="#yakub";
    }
}
setTimeout(PleaseChange, 2000);



$(document).ready(function () {
    $(".button--form").attr('data-scroll', '#form');
    $(function () {
        $('.button--form').click(function () {
            var target = $(this).attr('data-scroll');
            $("html, body").animate({scrollTop: $(target).offset().top - 20}, "slow");
        });
    });
});


var fiveSeconds = new Date().getTime() + 600000;
$('#clock').countdown(fiveSeconds, {elapse: true})
.on('update.countdown', function (event) {
    var $this = $(this);
    if (event.elapsed) {
        $this.html("00 : 00");
    } else {
        $this.html(event.strftime('<span>%M</span> : <span>%S</span>'));
    }
})



// функция обновления комментов
var commentRefresh = function(a,b) {
    counter = Math.floor(Math.random()*10000)+5000;
    if(document.querySelector('.comments-newly-showed')){
        document.querySelector('.comments-newly-showed').classList.remove('comments-newly-showed');
    }
    document.querySelector('.comments-refreshing').classList.add('refresh-appear');

    // убираем анимацию набора текста
    setTimeout(function(){document.querySelector('.comments-refreshing').classList.remove('refresh-appear')}, counter);
    // добавляем коммент
    setTimeout(function(){
            a[b].classList.add('comments-newly-showed');
            ++b;

            if(b < a.length){
                setTimeout(commentRefresh,(counter+6000), a,b);
            }
        },
        // через одну секунду после того как анимация убралась
        counter+1000)
}
var commentsRefreshing = document.querySelector('.comments-refreshing-wrapper');
if (commentsRefreshing && commentsRefreshing.querySelector('.comments-item')){
    var commentFlag = 0;
    commentsRefreshing.querySelector('.comments-item').classList.add('comments-newly-showed');
    var commentsRefreshingCords = commentsRefreshing.getBoundingClientRect().top + pageYOffset;

    window.addEventListener('scroll', function() {

        if(commentsRefreshing.getBoundingClientRect().top <= 500 && commentFlag == 0) {
            ++commentFlag;
            var counter = 4000;
            setTimeout(commentRefresh, counter, commentsRefreshing.querySelectorAll('.comments-item'),1);
        }
    })
}


$('a').click(function () {
    event.preventDefault();
    $(this).attr('href', '.toform');
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});


$(".show-message__close").click(function () {
    $(".show-message").hide();
})