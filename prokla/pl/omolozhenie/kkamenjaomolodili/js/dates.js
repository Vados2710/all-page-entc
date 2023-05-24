(function () {
    const post__date = document.querySelector('.js-commits__date')
    const footer__date = document.querySelector('.footer__date')
    let date = new Date()
    date.setDate(date.getDate() - 7)
    let zero = function (val) {
        return val.toString().length === 1 ? '0' + val : val
    }
    footer__date.textContent = date.getFullYear()
    post__date.textContent = zero(date.getDate()) + '.' + zero(date.getMonth() + 1) + '.' + date.getFullYear()
})()
