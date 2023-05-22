$(document).ready(function(){
    $('.lubie_to').click(function(){
        $(this).toggleClass('active');
    });

    $('.lubie').click(function(){
        if($(this).text() == 'Lubisz to') {
            $(this).text('Lubię');
        } else {
            $(this).text('Lubisz to');
        }
        return false;
    });

    $('.add_comment, .dziekuje').hide();

    $('.dodaj').click(function(){
        $('.comments > .add_comment').toggle();
        return false;
    });
    
    $('.odpowiedz').click(function(){
        $(this).parent().parent().find('.add_comment').toggle();
        return false;
    });

    $('.komentarz').click(function(){
        $(this).next().show();
        return false;
    });

    $('.slider').bxSlider({
        auto: true,
        pagerType: 'short',
        nextText: 'Następny',
        prevText: 'Poprzedni'
    });

    var currentTime = new Date()
    var month = currentTime.getMonth() + 1
    var day = currentTime.getDate()
    var year = currentTime.getFullYear()

    $('.article .data').text(day + '.' + month + '.' + year);
});
