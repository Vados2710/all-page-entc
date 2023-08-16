const setDate = () => {
    let dateText = document.querySelectorAll(".divWereWeNeedSetDate")
    for (let i = 0; i < dateText.length; i++) {
        let someDate = new Date().getTime() - parseInt(dateText[i].innerText) * 86400000
        dateText[i].innerHTML = new Date(someDate).toLocaleDateString()
    }
}
setDate()

const setYear = () => {
    let dateText = document.querySelectorAll(".yearSpan")
    for (let i = 0; i < dateText.length; i++) {
        let someDate = new Date().getFullYear()
        dateText[i].innerHTML = someDate
    }
}
setYear()





const messageSendButton = document.querySelector('.com__btn')
const commentsBlock = document.getElementById('commentsX')
const nameInput = document.getElementById('nameInput')
const messageInput = document.getElementById('messageInput')
const imageUpload = document.querySelector('.comment__imgUpload')

let preview = document.getElementById('myImg')
let uploadImg = ''

imageUpload.addEventListener('change', function () {
    changeImage(this);
})

function changeImage(input) {
    let reader;

    if (input.files && input.files[0]) {
        reader = new FileReader();

        reader.onload = function (e) {
            preview.setAttribute('src', e.target.result);
            uploadImg = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
}

messageSendButton.addEventListener('click', () => {
    nameInputText = nameInput.value
    messageInputText = messageInput.value

    if (nameInputText.length == 0 || messageInputText == 0) {
        nameInput.classList = 'inputPlaceholder com__input'
        nameInput.placeholder = 'Πληκτρολογήστε το όνομά σας*'
        messageInput.classList = 'inputPlaceholder com__input'
        messageInput.placeholder = 'Εισάγετε σχόλιο*'
        return
    } else {
        nameInput.classList = 'com__input'
        nameInput.placeholder = 'Nume'
        messageInput.classList = 'com__input'
        messageInput.placeholder = 'Mesaji'
    }

    setTimeout(() => {
        /* comWrap.style.display = "none" */
        /* openCom.style.display = "block" */

        let xxx = new Date().toLocaleDateString()

        let messageBlock = document.createElement('div')
        messageBlock.innerHTML =
            `
            <div class="item">
            <div class="info">
                <div class="coment_ava"><img src="${uploadImg ? uploadImg : 'img/user.png'}" /></div>
                <div>
                <span class="name"> ${nameInputText} <span class="date">
                ${xxx}
            </span></span>
        <div class="pg">
        ${messageInputText}
        </div>
                </div>
            </div>
            </div>
        `

        commentsBlock.appendChild(messageBlock)

        localStorage.setItem("innerText", messageBlock.innerHTML);
    }, 540)
})

window.onload = () => {
    let innerText = localStorage.getItem("innerText");
    if (innerText == null) {
        return
    }
    let loadDiv = document.createElement('div')
    loadDiv.innerHTML = innerText
    commentsBlock.appendChild(loadDiv)
};


const months = ['ο Ιανουάριος', 'ο Φεβρουάριος', 'ο Μάρτιος', 'ο Απρίλιος', 'ο Μάιος', 'ο Ιούνιος', 'ο Ιούλιος', 'ο Αύγουστος', 'ο Σεπτέμβριος', 'ο Οκτώβριος', 'ο Νοέμβριος', 'ο Δεκέμβριος'], monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''], days = ['η Κυριακή', 'η Δευτέρα', 'η Τρίτη', 'η Τετάρτη', 'η Πέμπτη', 'η Παρασκευή', 'το Σάββατο'], daysMin = ['', '', '', '', '', '', ''], seasons = ['ο χειμώνας', 'η άνοιξη', 'το καλοκαίρι', 'το φθινόπωρο']; function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) { const _counterLength = 60; for (let counter = 0; counter < _counterLength; counter++) { innerDate(counter, 'date-'); innerDate(counter, 'date') } function innerDate(counter, dateType) { let newCounter; dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) { const dateFormat = nodeList[i].dataset.format; dateFormat !== undefined && dateFormat !== '' ? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)) : nodeList[i].innerHTML = defaultDate } } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd", "mm", "yyyy", "monthFull", "year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) { return year + counter } function addZero(numb) { return numb < 10 ? '0' + numb : numb } function changeFirstLetter(isBig, str) { return isBig && str && str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str } } if (document.body.classList.contains('ev-date')) { document.addEventListener("DOMContentLoaded", function () { postDate(days, daysMin, months, monthMin, seasons) }); }