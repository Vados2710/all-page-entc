$(document).ready(function () {
  $('.toform').click(function (e) {
    $("html, body").animate({
      scrollTop: $('form').offset().top
    }, 2000);
    return false;
  });
  
 
  var $timer = $('.js-timer');
  
  $timer.countdown({
    until: '+0d +1h 35m ',
    format: 'HMS',
    compact: true,
    layout: '<li class="item hours">{h10}{h1}</li>' +
    
    '<li class="item minutes">{m10}{m1}</li>' +
    
    '<li class="item seconds">{s10}{s1}</li>'
  });
});






	
