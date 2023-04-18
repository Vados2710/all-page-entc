$(function(){
    $('.packages-btn').on('click', function(event){
        var e = event||window.event, 
            form = $('form').last().offset().top;
        e.preventDefault();
        e.returnValue = false;

        $('html,body').animate({ 
          scrollTop: form
        },700);
    }); 
});