$(document).ready(function() {
    $("a").click(function() {
        $("html, body").animate({
           scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
           duration: 500,
           easing: "swing"
        });
        return false;
     });
    $(document).mousemove(function(e) {

        if(e.pageY <= 5)
        {

// Launch MODAL BOX
            $('.p5213').modal({onOpen: modalOpen, onClose: simplemodal_close});
        }

    });



/**
 * When the open event is called, this function will be used to 'open'
 * the overlay, container and data portions of the modal dialog.
 *
 * onOpen callbacks need to handle 'opening' the overlay, container
 * and data.
 */
function modalOpen (dialog) {
    dialog.overlay.fadeIn('fast', function () {
        dialog.container.fadeIn('fast', function () {
            dialog.data.hide().slideDown('fast');
        });
    });
}

/**
 * When the close event is called, this function will be used to 'close'
 * the overlay, container and data portions of the modal dialog.
 *
 * The SimpleModal close function will still perform some actions that
 * don't need to be handled here.
 *
 * onClose callbacks need to handle 'closing' the overlay, container
 * and data.
 */
function simplemodal_close (dialog) {
    dialog.data.fadeOut('fast', function () {
        dialog.container.hide('fast', function () {
            dialog.overlay.slideUp('fast', function () {
                $.modal.close();
            });
        });
    });
}

$('body').on('click', '.r6934', function(event) {
    event.preventDefault();
    $(this).closest('.p5213').fadeOut('300');
    $('#simplemodal-overlay').css('background-color', 'transparent');

});

});