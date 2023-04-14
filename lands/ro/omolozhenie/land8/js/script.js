
// B-7 juvenility
$(document).ready(function(){   
    var $element = $('.b-juvenility');
    var counter = 0;
    $element.find('.b-bg-box').css('width', '0');
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 2);
  //Если скролл до начала елемента
  var offset = $element.offset().top
 
    if (scroll > offset && counter == 0) {
        setTimeout(function(){$element.find('.b-bg-box').addClass("a-grad-open");}, 100);
        counter = 1;
        }
    });
});

// запуск скрипта "до и после"
$(window).load(function() {
    var twenty1 = $('#twenty, #twenty_1');
    twenty1.twentytwenty({
        no_overlay: true
    });
    var twenty2 = $('#twenty, #twenty_2');
    twenty2.twentytwenty({
        no_overlay: true
    });
    var twenty3 = $('#twenty, #twenty_3');
    twenty3.twentytwenty({
        no_overlay: true
    });
    var twenty4 = $('#twenty, #twenty_4');
    twenty4.twentytwenty({
        no_overlay: true
    });
});


// SLIDERS

// переменные для слайдера
let b_position_0 = "p1";
let b_position_1 = "p2";
let b_position_2 = "p3";



// в лево
function SliderLeft(block) {

    function B_addClass(item, name) {
        let b_lenghtClassList = 0;
        let b_maxItem = item.length - 1;
        for (let y = 0; y < item.length; y++) {
            let b_next = y - 1;
            b_lenghtClassList = item[y].classList.length;
            for (let i = 0; i < b_lenghtClassList; i++) {
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
    B_addClass(block, b_position_0);
    B_addClass(block, b_position_1);
    B_addClass(block, b_position_2);
}
// в право
function SliderRight(block) {

    function B_addClass(item, name) {
        let b_lenghtClassList = 0;
        for (let y = 0; y < item.length; y++) {
            let b_next = y + 1;
            b_lenghtClassList = item[y].classList.length;
            for (let i = 0; i < b_lenghtClassList; i++) {
                if (item[y].classList[i] == name) {
                    item[y].classList.remove(name);
                    if (b_next > (item.length - 1)) {
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
    B_addClass(block, b_position_0);
    B_addClass(block, b_position_1);
    B_addClass(block, b_position_2);
}



// слайдер 2
function B_slidersLeft(block, btn) {
    var position = 0;
    var positionNext = 0;
    for (var i = 0; i < block.length; i++) {
        if (block[i].className == "b-item active") {
            position = i;
        }
    }
    if (position == 0) {
        positionNext = (block.length - 1);
    } else {
        positionNext = position - 1;
    }
    block[position].classList.remove("active");
    block[positionNext].classList.add("active");
    btn[position].classList.remove("active");
    btn[positionNext].classList.add("active");
}

function B_slidersRight(block, btn) {
    var position2 = 0;
    var positionNext2 = 0;
    for (var y = 0; y < block.length; y++) {
        if (block[y].className == "b-item active") {
            position2 = y;
        }
    }
    if (position2 == (block.length - 1)) {
        positionNext2 = 0;
    } else {
        positionNext2 = position2 + 1;
    }
    block[position2].classList.remove("active");
    block[positionNext2].classList.add("active");
    btn[position2].classList.remove("active");
    btn[positionNext2].classList.add("active");
}


// перелистывания пальцем
function B_touchSlider(box, slider, btn) {

    var touchStartX = null; //Точка начала касания
    var touchPositionX = null; //Текущая позиция
    const sensitivity = 50; // Чувствительность

    //Перехватываем события
    box.addEventListener("touchstart", function(e) { TouchStart(e) }); //Начало касания
    box.addEventListener("touchmove", function(e) { TouchMove(e) }); //Движение пальцем по экрану
    box.addEventListener("touchend", function(e) { TouchEnd(e) }); //Пользователь отпустил экран

    function TouchStart(e) {
        touchPositionX = null;
        //Получаем текущую позицию касания
        touchStartX = e.changedTouches[0].pageX;
    }

    function TouchMove(e) {
        //Получаем новую позицию
        touchPositionX = e.changedTouches[0].pageX;
    }

    function TouchEnd(e) {
        if ((touchPositionX < (touchStartX - sensitivity)) && (touchPositionX != null)) {
            if (box == application) {
                B_slidersRight(slider, btn);
            }
            if (box != application) {
                SliderRight(slider);
            }
        } else if ((touchPositionX > (touchStartX + sensitivity)) && (touchPositionX != null)) {
            if (box == application) {
                B_slidersLeft(slider, btn);
            }
            if (box != application) {
                SliderLeft(slider);
            }
        }
    }

}




// нажатие на кнопку в лево/право
function ArrowStart (box, slider) {
    let btnLeft = box.querySelector('.b-arrow-left');
    btnLeft.addEventListener('click', () => {
        SliderLeft(slider);
    });
    let btnRight = box.querySelector('.b-arrow-right');
    btnRight.addEventListener('click', () => {
        SliderRight(slider);
    });
}


function ArrowStart_2 (box, slider, btn) {
    let btnLeft = box.querySelector('.b-arrow-left');
    btnLeft.addEventListener('click', () => {
        B_slidersLeft(slider, btn);
    });
    let btnRight = box.querySelector('.b-arrow-right');
    btnRight.addEventListener('click', () => {
        B_slidersRight(slider, btn);
    });
}

//
var box1 = document.querySelector('#comment_slid_1');
let box1_slider = box1.querySelectorAll('.b-slider');
ArrowStart(box1, box1_slider);
B_touchSlider(box1, $('#comment_slid_1').find('.b-slider'));
//
var box2 = document.querySelector('#comment_slid_2');
let box2_slider = box2.querySelectorAll('.b-slider');
ArrowStart(box2, box2_slider);
B_touchSlider(box2, $('#comment_slid_2').find('.b-slider'));
//
var box3 = document.querySelector('#comment_slid_3');
let box3_slider = box3.querySelectorAll('.b-slider');
ArrowStart(box3, box3_slider);
B_touchSlider(box3, $('#comment_slid_3').find('.b-slider'));
//
var box4 = document.querySelector('#comment_slid_4');
let box4_slider = box4.querySelectorAll('.b-slider');
ArrowStart(box4, box4_slider);
B_touchSlider(box4, $('#comment_slid_4').find('.b-slider'));
//
var application = document.querySelector('#application_slider');
let application_slider = application.querySelectorAll('.b-item');
let application_btn = application.querySelectorAll('.b-btn');
ArrowStart_2(application, application_slider, application_btn);
B_touchSlider(application, $('#application_slider').find('.b-item'), application_btn);

// простой таймер обратного отсчета
$(document).ready(function() {
    var count = $(".s-count").html(),
        speed = 7000,
        counterInfo = parseInt(count);
  
    setInterval(function() {
        if (counterInfo !== 3) {
            $(".s-count").html(counterInfo--);
        }
    }, speed)
  
});

$(document).ready(function(){   

    let comm_video = document.getElementById('comm_video');
    let comm_btn = document.getElementById('btn_play');
    comm_btn.addEventListener('click',function(){
        if(comm_video.paused){
            comm_video.play();
            comm_btn.style.opacity = '0';
        }else{
            comm_video.pause();
            comm_btn.style.opacity = '1';
        }
    },false);

});