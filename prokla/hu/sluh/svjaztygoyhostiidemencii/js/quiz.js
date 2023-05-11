(function () {
    const $selectList = document.querySelectorAll('.quiz__input')
    const $btn = document.querySelector('.quiz__btn')
    const $result__itemList = document.querySelectorAll('.quiz__result-item')

    let result = 0

    $btn.addEventListener('click', e => {
        e.preventDefault()
        result = 0

        $selectList.forEach(select => {
            result += parseInt(select.value)
        })
        let userAnswer = [
            {
                userScore: result <= 7,
                resultText: $result__itemList[0]
            },
            {
                userScore: ((result > 7) && (result <= 14)),
                resultText: $result__itemList[1]
            },
            {
                userScore: result > 14,
                resultText: $result__itemList[2]
            }
        ]

        answer(userAnswer)

        function answer(userAnswer) {
            userAnswer.forEach(item => {
                if (item.userScore) {
                    item.resultText.style.display = 'block'
                    return
                }
                item.resultText.style.display = 'none'
            })

        }

    })
})()