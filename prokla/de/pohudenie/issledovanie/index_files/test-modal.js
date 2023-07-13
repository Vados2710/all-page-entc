var findGetParameter = function(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

if (findGetParameter('show_modal') == 1) {
    document.getElementById("ouibounce-modal").style.display = "block";
}

var close_modal =
    document.querySelectorAll('#ouibounce-modal .modal-footer')[0];

if (close_modal) {
    close_modal.addEventListener('click', function() {
        document.getElementById("ouibounce-modal").style.display = "none";
    });
}