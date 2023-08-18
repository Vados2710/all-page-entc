jQuery(document).ready(function ($) {

    timer = function () {
        remaining = $('#time_remaining').val();

        if (remaining > 0) {
            remaining--;
            $('#time_remaining').val(remaining);
            hours = Math.floor((remaining % 86400) / 3600);
            minutes = Math.floor(((remaining % 86400) % 3600) / 60);
            seconds = Math.floor(((remaining % 86400) % 3600) % 60);
            $('.seconds .data').text(fill(seconds));
            $('.minutes .data').html(fill(minutes));
            $('.hours .data').html(fill(hours));
            setTimeout("timer();", 1000);
        }
    }

    fill = function (value) {
        if (value < 10) {
            return '0' + value;
        } else {
            return value;
        }
    }

    setTimeout("timer()", 1000);

}(jQuery));