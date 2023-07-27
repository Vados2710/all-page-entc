$( document ).ready(function(){

    $(".check").click(function(){
        $(".in_active >.check").removeClass('check_active');
        $(this).addClass('check_active');
    });
var x = 0;

    $(".next").click(function(){

        $('.chat_step').removeClass('in_active');
        x++;

        if(x==1){
            $('.chat_step:nth-child(2)').addClass('in_active');
        }
        else if(x==2){
            $('.chat_step:nth-child(3)').addClass('in_active');
        }
        else if(x==3){
            $('.chat_step:nth-child(4)').addClass('in_active');
        }
        else if(x==4){
            $('.chat_step:nth-child(5)').addClass('in_active');
            $(".next").hide();


            setTimeout(function () {
                $('.chat_step').removeClass('in_active');
                $('.chat_step:nth-child(6)').addClass('in_active');
            }, 1500)

        }

    });




});