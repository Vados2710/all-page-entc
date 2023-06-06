$(document).ready(function () {
    $('.spoiler').on('click', function(){
        var that = $(this);
      
        that.next('img').slideToggle('slow', function(){
            if ($(this).is(':visible')) {
              that.text('- скрия');                
        } else {
              that.text('+ покажи');                
        }
        });
    });
});