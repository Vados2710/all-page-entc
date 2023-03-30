

const months = ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'], monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''], days = ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'], daysMin = ['', '', '', '', '', '', ''], seasons = ['शिशिर', 'बसन्त', 'ग्रीष्म', 'शरद']; function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) { const _counterLength = 60; for (let counter = 0; counter < _counterLength; counter++) { innerDate(counter, 'date-'); innerDate(counter, 'date') } function innerDate(counter, dateType) { let newCounter; dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) { const dateFormat = nodeList[i].dataset.format; dateFormat !== undefined && dateFormat !== '' ? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)) : nodeList[i].innerHTML = defaultDate } } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd", "mm", "yyyy", "monthFull"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function addZero(numb) { return numb < 10 ? '0' + numb : numb } function changeFirstLetter(isBig, str) { return isBig && str && str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str } } if (document.body.classList.contains('ev-date')) { document.addEventListener("DOMContentLoaded", function () { postDate(days, daysMin, months, monthMin, seasons) }); }

// comment-form
let sendBtn = document.querySelector('.sendBtn'),
  userName = document.querySelector('.userName'),
  userComment = document.querySelector('.userComment'),
  commentForm = document.querySelector('.commentForm');

sendBtn.addEventListener('click', function (event) {
  if (isEmpty(userName, userComment)) {
    event.preventDefault();
    alert('आपको धन्यवाद! आपकी समीक्षा मॉडरेशन के लिए सबमिट कर दी गई है');
    commentForm.style.cssText = 'display: none;';
  }
});

// Custom File
let customFile = document.querySelector('.form__image '),
  customText = document.querySelector('.custom__text');

customFile.addEventListener('change', function () {
  customText.innerHTML = 'Foto subida';
  customText.style.cssText = 'color: green;';
});

// is empty
function isEmpty(elem1, elem2) {
  if (elem1.value != '' && elem2.value != '') {
    return true;
  } else {
    return false;
  }
}