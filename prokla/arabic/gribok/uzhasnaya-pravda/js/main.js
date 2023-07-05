function addComment(name, text, ava) {
    var fullDate = new Date();
    var twoDigitMonth = ((fullDate.getMonth().length + 1) === 1) ? (fullDate.getMonth() + 1) : '0' + (fullDate.getMonth() + 1);
    var commentDate = fullDate.getDate() + "." + twoDigitMonth + "." + fullDate.getFullYear();
    var newComment = '<div class="comment comment__new"><div class="comment__head split"><div class="comment__avatar"><img src="img/ava0.jpg"></div><div class="comment__meta"><div class="comment__name">' + name + ':</div><div class="comment__date">' + commentDate + '</div></div></div><div class="comment__body"><p>' + text + '</p></div><div class="comment__response"><div class="comment__likes"><span class="comment__like comment__vote">0</span><span class="comment__dislike comment__vote">0</span></div><div class="comment__answer"><span class="comment__answer-text">trả lời</span></div></div></div>';
    $(".comments").append(newComment);
}
$(document).ready(function () {
    $('.click_ssty').click(function () {
        var show = $(this).attr('show');
        if (show == 1) {
            $(this).attr('show', 0);
            $(this).parent().children(".ctr_ima_s").slideUp(300);
            $(this).removeClass("click_ssty2");
            $(this).html('نشان دادن موارد بیشتر');
        } else {
            $(this).attr('show', 1);
            $(this).parent().children(".ctr_ima_s").slideDown(300);
            $(this).addClass("click_ssty2");
            $(this).html('قایم شو');
        }
    });
});
