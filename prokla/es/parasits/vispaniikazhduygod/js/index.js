const spoils = document.querySelectorAll('.spoil');

window.addEventListener('DOMContentLoaded', () => {
    spoils.forEach((spoil, index) => {
        spoil.addEventListener('click', () => {
            const content = document.querySelector('.content'+index);

            if(content.style.display === 'none' || !content.style.display) {
                content.style.display = 'block'
            }else {
                content.style.display = 'none'
            }
            //content.style.display = //content.style.display === "none" ? "block" : 'none' 
        });
    });
})