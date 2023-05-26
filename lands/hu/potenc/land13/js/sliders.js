
$(document).ready(function() {
    $('a[href*="#order_form"]').click(function (evt) {
        evt.preventDefault();
        $("html, body").animate({scrollTop: $('#order_form').offset().top}, 1000);
        return false;
    });
});


let b_position_1 = "slider-position-1";
let b_position_2 = "slider-position-2";
let b_position_3 = "slider-position-3";
let b_reviews = document.querySelector('.slider');
let b_reviewsSlider = document.querySelectorAll('.phone-screen');
let b_sliderRate = document.querySelectorAll('.slider-rate');
let b_starsRate = document.querySelector('.stars-rate');

function b_sliderLeft(block) {
    
    function B_addClass(item, name) { 
        let b_lenghtClassList = 0;
        let b_maxItem = item.length - 1;
        for (let y=0; y < item.length; y++) {
            let b_next = y - 1;
            b_lenghtClassList = item[y].classList.length; 
            for (let i=0; i < b_lenghtClassList; i++) {
                if (item[y].classList[i] == name) {
                    item[y].classList.remove(name);
                    if (b_next < 0) {
                        item[b_maxItem].classList.add(name);
                        return;
                    } else {
                        item[b_next].classList.add(name);
                        return;
                    }
                }
            }   
        }
    }
    B_addClass(block, b_position_1);
    B_addClass(block, b_position_2);
    B_addClass(block, b_position_3);
}
function b_sliderRight(block) {

    function B_addClass(item, name) { 
        let b_lenghtClassList = 0;
        for (let y=0; y < item.length; y++) {
            let b_next = y + 1;
            b_lenghtClassList = item[y].classList.length; 
            for (let i=0; i < b_lenghtClassList; i++) {
                if (item[y].classList[i] == name) {
                    item[y].classList.remove(name);
                    if (b_next > (item.length -1)) {
                        item[0].classList.add(name);
                        return;
                    } else {
                        item[b_next].classList.add(name);
                        return;
                    }
                }
            }   
        }
    }
    B_addClass(block, b_position_1);
    B_addClass(block, b_position_2);
    B_addClass(block, b_position_3);
}

function B_rate() {
    let b_sliderMain = document.querySelector('.slider-position-2');
    b_starsRate.innerHTML = b_sliderMain.children[1].children[2].innerHTML;
}

let b_btnLeft = document.querySelector('.arrow-left');
b_btnLeft.addEventListener('click', ()=> {
    b_sliderLeft(b_reviewsSlider);
    B_rate();
});
let b_btnRight = document.querySelector('.arrow-right');
b_btnRight.addEventListener('click', ()=> {
    b_sliderRight(b_reviewsSlider);
    B_rate();
});

function B_touchSlider(box, slider) {

    let touchStartX = null; 
    let touchPositionX = null; 
    const sensitivity = 50; 

    box.addEventListener("touchstart", (e)=> {TouchStart(e)}, {passive: true}); 
    box.addEventListener("touchmove", (e)=> {TouchMove(e)}, {passive: true});
    box.addEventListener("touchend", (e)=> {TouchEnd(e)}); 

    function TouchStart(e) {
        touchPositionX = null;
        touchStartX = e.changedTouches[0].pageX;
    }

    function TouchMove(e) {
        touchPositionX = e.changedTouches[0].pageX;
    }

    function TouchEnd(e) {
        if ((touchPositionX < (touchStartX - sensitivity )) && (touchPositionX != null)) {
            b_sliderRight(slider);
            B_rate();
        } else if ((touchPositionX > (touchStartX + sensitivity)) && (touchPositionX != null)) {
            b_sliderLeft(slider);
            B_rate();
        }
    }

}

B_touchSlider(b_reviews, b_reviewsSlider);