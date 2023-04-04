$(document).ready(function() {
    //    alert($(window).width());
    if ($(window).width() >= 1024) {
        var topo = $("#adv").offset().top; // altura do topo

        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop(); // qto foi rolado a barra

            if (scrollTop >= topo) {
                $('#adv').css('position', 'fixed');
                $('#adv').css('top', 10);
            } else {
                $('#adv').css('position', 'relative');
                $('#adv').css('top', 0);
            }
        });
    }
}); 