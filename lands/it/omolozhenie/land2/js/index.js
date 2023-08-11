function setCurrentYear() {
    const yearEl = document.querySelectorAll('.year')

    for (let i = 0; i < yearEl.length; i++) {
        yearEl[i].textContent = String(new Date().getFullYear())
    }
}
setCurrentYear()