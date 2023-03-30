let orderBarPin = document.querySelector('.order__bar-pin');
let orderBar = document.querySelector('.order__bar');

let showLevel = function(n) {
  let levelList = document.querySelectorAll('.order__quantity-item');
  if (n >= 0) {
    for (let i = 0; i < levelList.length; i++) {
      levelList[i].classList.remove('order__quantity-item--select');
    }
    levelList[n].classList.add('order__quantity-item--select');
  }
}

let showNumber = function(n) {
  let number = document.querySelector('.number');
  if (n >= 2) {
    number.innerHTML='2';
  } else {
    number.innerHTML='1'
  }
}


  let startMouse = function(evt) {
    let orderBarCoords = orderBar.getBoundingClientRect();
    let orderBarWidth = orderBar.offsetWidth;
    let orderBarPinWidth = orderBarPin.offsetWidth;
    let startCoords = evt.clientX;
    let n;

    let onMouseMove = function(moveEvt) {
      moveEvt.preventDefault();
      let shift = startCoords - moveEvt.clientX;
      startCoords = moveEvt.clientX;
      let position = 0;
      let xPosition = 0;
      let positionPercent = 0;



      if (moveEvt.clientX > orderBarCoords.right - orderBarPinWidth) {
        position = orderBarWidth - orderBarPinWidth;
        startCoords = orderBarCoords.right;
      } else if (moveEvt.clientX < orderBarCoords.left + orderBarPinWidth / 2) {
        position = 0;
        startCoords = orderBarCoords.left;
      } else {
        position = (orderBarPin.offsetLeft - shift);
      }

      xPosition = position / orderBarWidth * 5;
      positionPercent = xPosition * 20;
      n = Math.floor(xPosition);
      console.log(n);
      showLevel(n);
      showNumber(n);
      orderBarPin.style.left = position + 'px';
    }


    let onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  };






  let startTouche = function(evt) {
    let orderBarCoords = orderBar.getBoundingClientRect();
    let orderBarWidth = orderBar.offsetWidth;
    let orderBarPinWidth = orderBarPin.offsetWidth;
    let startCoords = evt.clientX;

    let onMouseMove = function(moveEvt) {
      // moveEvt.preventDefault();
      let shift = startCoords - moveEvt.touches[0].clientX;
      startCoords = moveEvt.touches[0].clientX;
      let position = 0;
      let xPosition = 0;
      let positionPercent = 0;

      if (moveEvt.touches[0].clientX > orderBarCoords.right - orderBarPinWidth) {
        position = orderBarWidth - orderBarPinWidth;
        startCoords = orderBarCoords.right;
      } else if (moveEvt.touches[0].clientX < orderBarCoords.left + orderBarPinWidth / 2) {
        position = 0;
        startCoords = orderBarCoords.left;
      } else {
        position = (orderBarPin.offsetLeft - shift);
      }

      xPosition = position / orderBarWidth * 5;
      positionPercent = xPosition * 20;
      n = Math.floor(xPosition);
      showLevel(n);
      showNumber(n);
      orderBarPin.style.left = position + 'px';
    }


    let onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('touchmove', onMouseMove);
      document.removeEventListener('touchend', onMouseUp);
    };

    document.addEventListener('touchmove', onMouseMove);
    document.addEventListener('touchend', onMouseUp);

  };

  orderBarPin.addEventListener('mousedown', startMouse);
  orderBarPin.addEventListener('touchstart', startTouche);