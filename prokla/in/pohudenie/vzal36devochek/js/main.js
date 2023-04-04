$(document).ready(function(){
    $('#form-but').click(function(){
        if ($('form').find('input:checkbox:checked').length > 0) {
            var formdata = $(this).serialize();
            $('.ps-poll-container').addClass("completed");
        }
        else {
            alert($('#form_alert').html());
        }
    })

});
