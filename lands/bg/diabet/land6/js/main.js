var more = $('.js-show-comment');
more.on('click', function () {
    var parent = $(this).parent();
    var text = parent.children('.js-comment');

    if (text.attr('data-expanded') === 'false') {
        var allText = $('.js-comment');
        allText.attr('data-expanded', 'false');
        allText.removeClass('show');
        more.removeClass('active');
        $(this).addClass('active');
        text.attr('data-expanded', 'true');
        text.addClass('show');
    } else {
        clearSliderItemState();
    }
})

function clearSliderItemState() {
    var allText = $('.js-comment');
    allText.attr('data-expanded', 'false');
    allText.removeClass('show');
    more.removeClass('active');
}