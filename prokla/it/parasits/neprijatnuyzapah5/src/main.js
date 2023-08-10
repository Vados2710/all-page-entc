$('.show1 .showImg').click(function() {
    $('.show1 .myImg').toggle('active');
    if ($(this).text() == '+ Mostra foto'){
        $(this).text('- Nascondi foto')
    } else{
        $(this).text('+ Mostra foto')
    }
});

$('.show2 .showImg').click(function() {
    $('.show2 .myImg').toggle('active');
    if ($(this).text() == '+ Mostra foto'){
        $(this).text('- Nascondi foto')
    } else{
        $(this).text('+ Mostra foto')
    }
});