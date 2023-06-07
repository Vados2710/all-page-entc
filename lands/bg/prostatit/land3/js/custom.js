$(document).ready(function() {


/* Smooth Scroll */
 // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  /* Like */
  
  $('.slide .like').one("click", function(event) {
    var n = $(this).parents('.slide').find(".currlike").html();
    $(this).addClass('active').parents('.slide').find(".currlike").html(++n);
  });

   /* Left package */
    var number_objects; // value in global scope
    var displayObject = $('.left-pack'); // fetch object only once, better performace
    var displayBuy = $('.buy-pack');

    function loadRandom() {
      number_objects = 567 + Math.floor(Math.random() * 1);      
      number_buy = 19433 + Math.floor(Math.random() * 1);
    }
    function decreaseRandom() {
      prev_objects = number_objects;
      number_objects -= Math.floor(Math.random() * 2) + 1;
      number_buy += prev_objects - number_objects;
    }
    function showRandom() {
      // show / update the value
      displayObject.text(number_objects);
      displayBuy.text(number_buy);

    }
    loadRandom(); // load the value
    showRandom(); // initial display
    var interval = setInterval(function () {
      $(".left-pack").css("animation","flash 3s infinite");
      decreaseRandom();
      // display (update) it
      showRandom();
      if(number_objects <= 5) {
        // clear interval when number of objects gets to, or below, 0
        clearInterval(interval);
        //$(".left-pack").css("background","#f0231e").addClass("alert");
      //$(".left-pack").css("animation","flash 0s infinite");
      }
    }, 3000);

   /* Timer */
  GetCount();

});

var year = 2222;
var month = 4;
var day = 4;
var hour = 0;
var min = 0;
var sec = 0;
var timerSec = 28 * 42;
dateFuture = new Date(year, month - 1, day, hour, min, sec);

function GetCount() {
  amount = timerSec;
  timerSec = timerSec - 1;
  dateNow = new Date();
  delete dateNow;
  if (amount < 0) {
    $('.days').html('00');
    $('.hours').html('00');
    $('.mins').html('00');
    $('.secs').html('00');
  } else {
    days = 0;
    hours = 0;
    mins = 0;
    secs = 0;
    out = "";
    days = 0;
    hours = 0;
    mins = Math.floor(amount / 60);
    secs = Math.floor(amount - mins * 60);
    if (days < 10) days = '0' + days;
    if (hours < 10) hours = '0' + hours;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;
    $('.days').html(days);
    $('.hours').html(hours);
    $('.mins').html(mins);
    $('.secs').html(secs);
    setTimeout("GetCount()", 1000);
  }
}