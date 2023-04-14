(function (min, sec) {
  let date = new Date(),
      count = 0;
  date.setMinutes(15);
  date.setSeconds(0);
  getTextContent(sec, zero(date.getSeconds()));
  getTextContent(min, zero(date.getMinutes()));
  let interval = setInterval(counter, 1000);

  function counter() {
    count++;
    let liveDate = new Date();
    liveDate.setMinutes(date.getMinutes());
    liveDate.setSeconds(date.getSeconds() - count);
    getTextContent(sec, zero(liveDate.getSeconds()));
    getTextContent(min, zero(liveDate.getMinutes()));

    if (min[0].textContent === '00' && sec[0].textContent === '00') {
      clearInterval(interval);
    }
  }

  function zero(num) {
    return num.toString().length === 1 ? '0' + num : num;
  }

  function getTextContent(valArr, func) {
    let arr = [];

    for (let val of valArr) {
      arr.push(val);
    }

    for (let val of arr) {
      val.textContent = func;
    }
  }
})(document.querySelectorAll('.counter-item_minutes'), document.querySelectorAll('.counter-item_seconds'));