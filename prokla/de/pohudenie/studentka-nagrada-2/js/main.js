$('.play, .video-cover').on('click', function () {
    $('.video-cover, .play').css('display', 'none');
    $('.video-inner').trigger('play');
})
$('.video-inner').on('click', function () {
    $('.video-cover, .play').css('display', 'block');
    $('.video-inner').trigger('paused');
})
$('#calcweight').on('click', function () {
    $('.formResult').css('display', 'block')
    let kg = document.querySelector('#minus_weight').value;
    document.querySelector('.textGen').innerHTML = 'Wenn Sie folgende Anweisungen befolgen, können Sie in nur 60 Tagen\n' +
        ' ' + kg + '                                    kg abnehmen\n' +
        '                                    und das ohne Sport und Diäten!!'

})

// let kgSpan = document.querySelector('.kgSpan').innerText


