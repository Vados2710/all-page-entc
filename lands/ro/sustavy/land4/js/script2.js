
function startTimer4(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 30, 10);


        minutes = minutes < 10 ? "0" + minutes : minutes;


       // document.querySelector('#hm3').textContent =minutes;


        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
function startTimer3(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 30, 10);


        minutes = minutes < 10 ? "0" + minutes : minutes;

       // document.querySelector('#hm4').textContent =minutes;




        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
    controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

function nextSlide(){
    goToSlide(currentSlide+1);
}

function previousSlide(){
    goToSlide(currentSlide-1);
}

function goToSlide(n){
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}


var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow(){
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow(){
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function(){
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function(){
    pauseSlideshow();
    previousSlide();
};



var mins = 40 * 15;
startTimer4(mins);
startTimer3(mins);

