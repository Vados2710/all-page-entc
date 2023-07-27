var d = new Date();
var year = d.getFullYear();
var yearBlocks = document.querySelectorAll('.ryear');
for (var i = 0; i < yearBlocks.length; i++) {
    yearBlocks[i].innerText = year;
}

const form = document.querySelector('.comment__form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    let link = document.querySelector('a');
    window.location.href = link
})