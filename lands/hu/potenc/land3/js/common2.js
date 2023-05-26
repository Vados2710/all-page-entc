$(document).ready(function () {
  
 
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