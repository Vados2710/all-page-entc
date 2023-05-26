'use strict'
// slider
function b_sliders(block, btn) {
    for (let i=0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => {
            for (let y=0; y < block.length; y++) {
                block[y].classList.remove("b-visible");
                btn[y].classList.remove("b-active");
            }
            block[i].classList.add("b-visible");
            btn[i].classList.add("b-active");
        });
    }
}
// в лево
function b_sliderLeft(block, btn) {
    let position = 0;
    let positionNext = 0;
    for (let i=0; i < btn.length; i++) {
        if (btn[i].className == "b-btn b-active") {
            position = i;
        }
    }
    if (position == 0) {
        positionNext = (btn.length - 1);
    } else {
        positionNext = position - 1;
    }
    block[position].classList.remove("b-visible");
    btn[position].classList.remove("b-active");
    block[positionNext].classList.add("b-visible");
    btn[positionNext].classList.add("b-active");
}
// в право
function b_sliderRight(block, btn) {
        let position = 0;
        let positionNext = 0;
        for (let i=0; i < btn.length; i++) {
            if (btn[i].className == "b-btn b-active") {
                position = i;
            }
        }
        if (position == (btn.length - 1)) {
            positionNext = 0;
        } else {
            positionNext = position + 1;
        }
        block[position].classList.remove("b-visible");
        btn[position].classList.remove("b-active");
        block[positionNext].classList.add("b-visible");
        btn[positionNext].classList.add("b-active");
}
// перелистывания пальцем
function b_touchSlider(box, slider, btn) {

    let touchStartX = null; //Точка начала касания
    let touchPositionX = null; //Текущая позиция
    const sensitivity = 50; // Чувствительность

    //Перехватываем события
    box.addEventListener("touchstart", (e)=> {TouchStart(e)}); //Начало касания
    box.addEventListener("touchmove", (e)=> {TouchMove(e)}); //Движение пальцем по экрану
    box.addEventListener("touchend", (e)=> {TouchEnd(e)}); //Пользователь отпустил экран

    function TouchStart(e) {
        //Получаем текущую позицию касания
        touchStartX = e.changedTouches[0].pageX;
    }

    function TouchMove(e) {
        //Получаем новую позицию
        touchPositionX = e.changedTouches[0].pageX;
    }

    function TouchEnd(e) {
        if (touchPositionX < (touchStartX - sensitivity )) {
            b_sliderRight(slider, btn);
        } else if (touchPositionX > (touchStartX + sensitivity)) {
            b_sliderLeft(slider, btn);
        }
    }

}
// 
let b_header = document.querySelector('.b-header-sliders');
let b_headerSliderBtn = document.querySelector('.b-btnbox').children;
let b_headerSlidersItem = document.querySelectorAll('.b-header-sid');

b_sliders(b_headerSlidersItem, b_headerSliderBtn);
b_touchSlider(b_header, b_headerSlidersItem, b_headerSliderBtn);

// автопрокрутка слайдера

setInterval(()=> {b_sliderRight(b_headerSlidersItem, b_headerSliderBtn)}, 3000);

// работа ползунка

let b_range = document.querySelector('.b-changes-btnbox__range');
let b_rangeSlider = document.querySelectorAll('.b-changes-slider');
let b_rangeText = document.querySelectorAll('.b-changes-btnbox__text');

function b_rangeEvent() {
    if (b_range.value < 26) {
        let item = 0;
        B_sliderRange(b_rangeSlider, b_rangeText, item);
    } else if (b_range.value > 25 && b_range.value < 51 ) {
        let item = 1;
        B_sliderRange(b_rangeSlider, b_rangeText, item);
    } else if (b_range.value > 50 && b_range.value < 76 ) {
        let item = 2;
        B_sliderRange(b_rangeSlider, b_rangeText, item);
    } else if (b_range.value > 75) {
        let item = 3;
        B_sliderRange(b_rangeSlider, b_rangeText, item);
    }
}

function B_sliderRange(slider, text, index) {
    for (let i=0; i < slider.length; i++) {
        for (let y=0; y < slider[i].classList.length; y++) {
            if (slider[i].classList[y] == "b-visible") {
                slider[i].classList.remove("b-visible");
                text[i].classList.remove("b-view");
            }
        }
    }
    slider[index].classList.add("b-visible");
    text[index].classList.add("b-view");
}

    // блок ползунка
    let b_rangeBoxslider = document.querySelector('.b-range-boxslider');
    let b_rangeValue = b_range.value;
    b_rangeBoxslider.style.left = b_rangeValue + '%';
    // отлеживания и перемешение блока там где сам ползунок
    function B_rangeBoxShift() {
        let b_shiftPlus = 0;
        let b_shiftMinus = 0;
        if (b_range.value < b_rangeValue) {
            b_shiftPlus = 0 + b_range.value;
            b_rangeBoxslider.style.left = b_shiftPlus + '%';
            b_rangeValue = b_range.value;
        }
        if (b_range.value > b_rangeValue) {
            b_shiftMinus = 0 + b_range.value;
            b_rangeBoxslider.style.left = b_shiftMinus + '%';
            b_rangeValue = b_range.value;
        }
    }
    // 

// плавная прокрутка
const b_anchorsEffect = document.querySelectorAll('a[href*="#b-effect"]');
const b_anchorsComposition = document.querySelectorAll('a[href*="#b-composition"]');
const b_anchorsReviews = document.querySelectorAll('a[href*="#b-reviews"]');
const b_anchorsBuy = document.querySelectorAll('a[href*="#b-buy"]');

function B_scrollingAnchors(anchors) {
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
        
            const blockID = anchor.getAttribute('href').substr(1)
        
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}
B_scrollingAnchors(b_anchorsEffect);
B_scrollingAnchors(b_anchorsComposition);
B_scrollingAnchors(b_anchorsReviews);
B_scrollingAnchors(b_anchorsBuy);

// прокрутка до changes и его анимация


    let b_changes = document.querySelector('.b-changes');
    let b_changesScroll = b_changes.getBoundingClientRect().top - document.body.getBoundingClientRect().top - (innerHeight * 0.9);
    let b_changesScroll_b = b_changes.getBoundingClientRect().bottom - document.body.getBoundingClientRect().top - (innerHeight * 0.1);
function B_changesAnim() {

    if ((window.pageYOffset > b_changesScroll) && (window.pageYOffset < b_changesScroll_b)) {
            setTimeout(()=> {
                b_changes.classList.add("fade-in2");
            }, 100);
    } else {
        window.addEventListener('scroll', ()=> {
            if ((window.pageYOffset > b_changesScroll) && (window.pageYOffset < b_changesScroll_b)) {
                setTimeout(()=> {
                    b_changes.classList.add("fade-in2");
                }, 100);
            }
        });
    }
}
B_changesAnim();

// прокрутка до effect и его анимация

function B_effectAnim() {
    let b_effect = document.querySelector('.b-effect');
    let b_effectBg1 = document.querySelector('.b-effect-background1');
    let b_effectBg2 = document.querySelector('.b-effect-background2');
    let b_effectItem = document.querySelectorAll('.b-effect-item');
    // let b_effectScroll = b_effect.getBoundingClientRect().top + document.body.scrollTop;
    // 
    let b_effectScroll_bg1 = b_effectBg1.getBoundingClientRect().top - document.body.getBoundingClientRect().top - (innerHeight * 0.5);
    let b_effectScroll_bg2 = b_effectBg2.getBoundingClientRect().top - document.body.getBoundingClientRect().top - (innerHeight * 0.4);
    let b_effectScroll_bg1_b = b_effect.getBoundingClientRect().bottom - document.body.getBoundingClientRect().top - (innerHeight * 0.5);
    let b_effectScroll_bg2_b = b_effect.getBoundingClientRect().bottom - document.body.getBoundingClientRect().top - (innerHeight * -0.5);
    //
    let b_effectScroll_0 = b_effectItem[0].getBoundingClientRect().top - document.body.getBoundingClientRect().top - (innerHeight * 0.6);
    let b_effectScroll_1 = b_effectItem[1].getBoundingClientRect().top - document.body.getBoundingClientRect().top - (innerHeight * 0.6);
    let b_effectScroll_2 = b_effectItem[2].getBoundingClientRect().top - document.body.getBoundingClientRect().top - (innerHeight * 0.6);
    
    let b_effectScroll_0_b = b_effectItem[0].getBoundingClientRect().bottom - document.body.getBoundingClientRect().top - (innerHeight * -0.4);
    let b_effectScroll_1_b = b_effectItem[1].getBoundingClientRect().bottom - document.body.getBoundingClientRect().top - (innerHeight * -0.4);
    let b_effectScroll_2_b = b_effectItem[2].getBoundingClientRect().bottom - document.body.getBoundingClientRect().top - (innerHeight * -0.4);

    if ((window.pageYOffset > b_effectScroll_bg1)&&(window.pageYOffset < b_effectScroll_bg1_b)) {
        setTimeout(()=> {
            b_effectBg1.classList.add("slide-in-fwd-center0");
        }, 100);
    } else {
        window.addEventListener('scroll', ()=> {
            if ((window.pageYOffset > b_effectScroll_bg1)&&(window.pageYOffset < b_effectScroll_bg1_b)) {
                setTimeout(()=> {
                    b_effectBg1.classList.add("slide-in-fwd-center0");
                }, 100);
            }
        });
    }
    // 
    if ((window.pageYOffset > b_effectScroll_bg2)&&(window.pageYOffset < b_effectScroll_bg2_b)) {
            setTimeout(()=> {
                b_effectBg2.classList.add("slide-in-fwd-center0");
            }, 100);
    } else {
        window.addEventListener('scroll', ()=> {
            if ((window.pageYOffset > b_effectScroll_bg2)&&(window.pageYOffset < b_effectScroll_bg2_b)) {
                setTimeout(()=> {
                    b_effectBg2.classList.add("slide-in-fwd-center0");
                }, 100);
            }
        });
    }
    // 
    if ((window.pageYOffset > b_effectScroll_0)&&(window.pageYOffset < b_effectScroll_0_b)) {
        setTimeout(()=> {
            b_effectItem[0].classList.add("fade-in-03");
        }, 100);
    } else {
        window.addEventListener('scroll', ()=> {
            if ((window.pageYOffset > b_effectScroll_0)&&(window.pageYOffset < b_effectScroll_0_b)) {
                setTimeout(()=> {
                    b_effectItem[0].classList.add("fade-in-03");
                }, 100);
            }
        });
    }
    // 
    if ((window.pageYOffset > b_effectScroll_1)&&(window.pageYOffset < b_effectScroll_1_b)) {
        setTimeout(()=> {
            b_effectItem[1].classList.add("fade-in-06");
        }, 100);
    } else {
        window.addEventListener('scroll', ()=> {
            if ((window.pageYOffset > b_effectScroll_1)&&(window.pageYOffset < b_effectScroll_1_b)) {
                setTimeout(()=> {
                    b_effectItem[1].classList.add("fade-in-06");
                }, 100);
            }
        });
    }
    // 
    if ((window.pageYOffset > b_effectScroll_2)&&(window.pageYOffset < b_effectScroll_2_b)) {
        setTimeout(()=> {
            b_effectItem[2].classList.add("fade-in-09");
        }, 100);
    } else {
        window.addEventListener('scroll', ()=> {
            if ((window.pageYOffset > b_effectScroll_2)&&(window.pageYOffset < b_effectScroll_2_b)) {
                setTimeout(()=> {
                    b_effectItem[2].classList.add("fade-in-09");
                }, 100);
            }
        });
    }
}
B_effectAnim();

// прокрутка до composition и его анимация

function B_compositionAnim() {
    let b_compositionImg = document.querySelectorAll('.b-composition-img');
    let b_compositionScroll_0 = b_compositionImg[0].getBoundingClientRect().top - document.body.getBoundingClientRect().top - (innerHeight * 0.6);
    let b_compositionScroll_1 = b_compositionImg[1].getBoundingClientRect().top - document.body.getBoundingClientRect().top - (innerHeight * 0.6);
    let b_compositionScroll_2 = b_compositionImg[2].getBoundingClientRect().top - document.body.getBoundingClientRect().top - (innerHeight * 0.6);
    let b_compositionScroll_0_b = b_compositionImg[0].getBoundingClientRect().bottom - document.body.getBoundingClientRect().top - (innerHeight * -0.1);
    let b_compositionScroll_1_b = b_compositionImg[1].getBoundingClientRect().bottom - document.body.getBoundingClientRect().top - (innerHeight * -0.1);
    let b_compositionScroll_2_b = b_compositionImg[2].getBoundingClientRect().bottom - document.body.getBoundingClientRect().top - (innerHeight * -0.1);

    if ((window.pageYOffset > b_compositionScroll_0)&&(window.pageYOffset < b_compositionScroll_0_b)) {
        setTimeout(()=> {
            b_compositionImg[0].classList.add("swing-in-top-bck");
        }, 100);
    } else {
        window.addEventListener('scroll', ()=> {
            if ((window.pageYOffset > b_compositionScroll_0)&&(window.pageYOffset < b_compositionScroll_0_b)) {
                setTimeout(()=> {
                    b_compositionImg[0].classList.add("swing-in-top-bck");
                }, 100);
            }
        });
    }
    if ((window.pageYOffset > b_compositionScroll_1)&&(window.pageYOffset < b_compositionScroll_1_b)) {
        setTimeout(()=> {
            b_compositionImg[1].classList.add("swing-in-right-fwd");
        }, 100);
    } else {
        window.addEventListener('scroll', ()=> {
            if ((window.pageYOffset > b_compositionScroll_1)&&(window.pageYOffset < b_compositionScroll_1_b)) {
                setTimeout(()=> {
                    b_compositionImg[1].classList.add("swing-in-right-fwd");
                }, 100);
            }
        });
    }
    if ((window.pageYOffset > b_compositionScroll_2)&&(window.pageYOffset < b_compositionScroll_2_b)) {
        setTimeout(()=> {
            b_compositionImg[2].classList.add("swing-in-bottom-fwd");
        }, 100);
    } else {
        window.addEventListener('scroll', ()=> {
            if ((window.pageYOffset > b_compositionScroll_2)&&(window.pageYOffset < b_compositionScroll_2_b)) {
                setTimeout(()=> {
                    b_compositionImg[2].classList.add("swing-in-bottom-fwd");
                }, 100);
            }
        });
    }
}
B_compositionAnim();

// прокрутка до doctor и его анимация

function B_doctorAnim() {
    let b_doctor = document.querySelector('.b-doctor');
    let b_doctorTextbox = document.querySelector('.b-doctor-textbox');
    let b_doctorImg = document.querySelector('.b-doctor-img');
    let b_doctorScroll = b_doctor.getBoundingClientRect().top - document.body.getBoundingClientRect().top - (innerHeight * 0.7);
    let b_doctorScroll_b = b_doctor.getBoundingClientRect().bottom - document.body.getBoundingClientRect().top - (innerHeight * 0.2);

    if ((window.pageYOffset > b_doctorScroll)&&(window.pageYOffset < b_doctorScroll_b)) {
            setTimeout(()=> {
                b_doctorImg.classList.add("fade-in-03");
                b_doctorTextbox.classList.add("fade-in-06");
            }, 100);
    } else {
        window.addEventListener('scroll', ()=> {
            if ((window.pageYOffset > b_doctorScroll)&&(window.pageYOffset < b_doctorScroll_b)) {
                setTimeout(()=> {
                    b_doctorImg.classList.add("fade-in-03");
                    b_doctorTextbox.classList.add("fade-in-06");
                }, 100);
            }
        });
    }
}
B_doctorAnim();

// прокрутка до reviews и его анимация

function B_reviewsAnim() {
    let b_reviewsItem = document.querySelectorAll('.b-reviews-item');
    let b_reviewsScroll_0 = b_reviewsItem[0].getBoundingClientRect().top - document.body.getBoundingClientRect().top - (innerHeight * 0.7);
    let b_reviewsScroll_1 = b_reviewsItem[1].getBoundingClientRect().top - document.body.getBoundingClientRect().top - (innerHeight * 0.7);
    let b_reviewsScroll_2 = b_reviewsItem[2].getBoundingClientRect().top - document.body.getBoundingClientRect().top - (innerHeight * 0.7);
    let b_reviewsScroll_0_b = b_reviewsItem[0].getBoundingClientRect().bottom - document.body.getBoundingClientRect().top - (innerHeight * -0.25);
    let b_reviewsScroll_1_b = b_reviewsItem[1].getBoundingClientRect().bottom - document.body.getBoundingClientRect().top - (innerHeight * -0.25);
    let b_reviewsScroll_2_b = b_reviewsItem[2].getBoundingClientRect().bottom - document.body.getBoundingClientRect().top - (innerHeight * -0.25);

    if ((window.pageYOffset > b_reviewsScroll_0)&&(window.pageYOffset < b_reviewsScroll_0_b)) {
            setTimeout(()=> {
                b_reviewsItem[0].classList.add("fade-in-03");
            }, 100);
    } else {
        window.addEventListener('scroll', ()=> {
            if ((window.pageYOffset > b_reviewsScroll_0)&&(window.pageYOffset < b_reviewsScroll_0_b)) {
                setTimeout(()=> {
                    b_reviewsItem[0].classList.add("fade-in-03");
                }, 100);
            }
        });
    }
    if ((window.pageYOffset > b_reviewsScroll_1)&&(window.pageYOffset < b_reviewsScroll_1_b)) {
        setTimeout(()=> {
            b_reviewsItem[1].classList.add("fade-in-06");
        }, 100);
    } else {
        window.addEventListener('scroll', ()=> {
            if ((window.pageYOffset > b_reviewsScroll_1)&&(window.pageYOffset < b_reviewsScroll_1_b)) {
                setTimeout(()=> {
                    b_reviewsItem[1].classList.add("fade-in-06");
                }, 100);
            }
        });
    }
    if ((window.pageYOffset > b_reviewsScroll_2)&&(window.pageYOffset < b_reviewsScroll_2_b)) {
        setTimeout(()=> {
            b_reviewsItem[2].classList.add("fade-in-09");
        }, 100);
    } else {
        window.addEventListener('scroll', ()=> {
            if ((window.pageYOffset > b_reviewsScroll_2)&&(window.pageYOffset < b_reviewsScroll_2_b)) {
                setTimeout(()=> {
                    b_reviewsItem[2].classList.add("fade-in-09");
                }, 100);
            }
        });
    }
}
B_reviewsAnim();

// прокрутка до buy и его анимация

function B_buyAnim() {
    let b_buy = document.querySelector('.b-buy');
    let b_buyBerry = document.querySelector('.b-buy-berry');
    let b_buyBoxform = document.querySelector('.b-buy-boxform');
    let b_buyFormBg1 = document.querySelector('.b-buy-boxform__bg1');
    let b_buyFormListbox = document.querySelector('.b-buy-listbox');
    let b_buyScroll = b_buy.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
    let b_buyScroll_b = b_buy.getBoundingClientRect().bottom - document.body.getBoundingClientRect().top;

    if ((window.pageYOffset > b_buyScroll)&&(window.pageYOffset < b_buyScroll_b)) {
            setTimeout(()=> {
                b_buyBerry.classList.add("slide-in-fwd-center0");
                b_buyBoxform.classList.add("swing-in-right-fwd");
                b_buyFormBg1.classList.add("puff-in-center");
                b_buyFormListbox.classList.add("slide-in-fwd-center08");
            }, 100);
    } else {
        window.addEventListener('scroll', ()=> {
            if ((window.pageYOffset > b_buyScroll)&&(window.pageYOffset < b_buyScroll_b)) {
                setTimeout(()=> {
                    b_buyBerry.classList.add("slide-in-fwd-center0");
                    b_buyBoxform.classList.add("swing-in-right-fwd");
                    b_buyFormBg1.classList.add("puff-in-center");
                    b_buyFormListbox.classList.add("slide-in-fwd-center08");
                }, 100);
            }
        });
    }
}
B_buyAnim();