

function fdateTwoDigits(d) {
    let now = new Date();
    now.setDate(now.getDate() + d);
    let mm = now.getMonth() + 1;
    let day = now.getDate();
    if (now.getDate() < 10) day = '0' + now.getDate();
    if (mm < 10) mm = '0' + mm;
    return (" " + day + "." + mm + "." + now.getFullYear() + " ");
}

function blocks(blockClass) {
    let block = document.querySelectorAll(blockClass)
    for (i = 0; i < block.length; i++) {
        if (i >= 0 && i <= 3) {
            block[i].innerHTML = fdateTwoDigits(0)
        } else if (i >= 3 && i <= 6) {
            block[i].innerHTML = fdateTwoDigits(-1)
        } else {
            block[i].innerHTML = fdateTwoDigits(-2)
        }
    }
}

window.addEventListener("DOMContentLoaded", function () {
    blocks(".comment__date")

})
