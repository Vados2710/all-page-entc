const months=['leden','únor','březen','duben','květen','červen','červenec','srpen','září','říjen','listopad','prosinec'],monthMin = ['','','','','','','','','','','',''],days = ['neděle','pondělí','úterý','středa','čtvrtek','pátek','sobota'],daysMin = ['','','','','','',''],seasons = ['zimní','jaro','léto','podzim'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) nodeList[i].innerHTML = defaultDate } function addZero(numb){return numb<10?'0'+numb:numb} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}
document.addEventListener("DOMContentLoaded", function () {
  // ширина фікс. блоку прописується в стилях
  // блок, який потрібно зафіксувати
  const stickyBlock = document.querySelector('.aside-box');
  const stickyParent = stickyBlock.parentElement;
  const stickyWrap = document.createElement("div");
  // перед яким блоком зупиняти фіксований блок
  const bottomEdge = document.querySelector(".footer");

  stickyWrap.classList.add("sticky-wrap");
  stickyParent.appendChild(stickyWrap);
  stickyWrap.appendChild(stickyBlock);

  function setPositionSticky() {
    const stickyParent = stickyBlock.parentElement;
    // координата верху батьківського елемента (старт фіксації)
    const stickParentTop = stickyParent.getBoundingClientRect().top - 20;

    if (stickParentTop < 0) {
      stickyBlock.style.position = "fixed";
      // відступ фікс. блоку від верху екрану
      stickyBlock.style.top = "20px";

      if (stickyBlock.getBoundingClientRect().bottom > bottomEdge.getBoundingClientRect().top - 20) {
        stickyBlock.style.top = bottomEdge.getBoundingClientRect().top - stickyBlock.getBoundingClientRect().bottom + "px";
      }

    } else {
      stickyBlock.style.position = "static";
    }
  }
  setPositionSticky();
  window.addEventListener("scroll", setPositionSticky);
});

// Comments Form
let commentsForm = document.querySelector('#push-comments'),
  userName = document.querySelector('.userName'),
  userSurname = document.querySelector('.userSurname'),
  userMessage = document.querySelector('.userMessage'),
  sendBtn = document.querySelector('.sendBtn');

sendBtn.addEventListener('click', function (event) {
  if (checkEmpty(userName, userSurname, userMessage)) {
    event.preventDefault();
    commentsForm.style.cssText = 'display: none;';
    alert('Děkujeme! Vaše recenze byla odeslána na moderování.');
  }
});

// Check Empty
function checkEmpty(elem1, elem2, elem3) {
  if (elem1.value != '' && elem2.value != '' && elem3.value != '') {
    return true;
  } else {
    return false;
  }
}

// Custom File
let customFile = document.querySelector('.custom__field'),
  customText = document.querySelector('.custom__text');

customFile.addEventListener('change', function () {
  customText.innerHTML = 'Fotografie byla nahrána';
  customText.style.cssText = 'color: green;';
});

const addComm = document.querySelector(".add-comm");

addComm.addEventListener("click", function () {
  document.querySelector("#push_mlyjekpdfdd1").style.display = "block";
  this.style.display = "none";
})