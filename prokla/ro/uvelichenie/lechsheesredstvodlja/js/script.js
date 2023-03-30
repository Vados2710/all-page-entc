(function() {
  var inputField = document.querySelector('.input');
  var outputField = document.querySelector('.output');
  const PLUSSIZE = 7;
  function getValue() {
    if (inputField.value != '') {
      outputField.innerHTML = parseInt(inputField.value)  + PLUSSIZE;
    } else {
      outputField.innerHTML = '';
    }

  }
  inputField.addEventListener('input', getValue);
})();

// (function() {
//   const btnList = document.querySelectorAll('.btnlink');
//   const anchor = document.querySelector('.anchor');
//   const animationTime = 600;
//   const framesCount = 100;
//   let anchorPosition = anchor.getBoundingClientRect().top + pageYOffset;

//   for (let i = 0; i < btnList.length; i++ ) {
//     findBtn(i);
//   }

//   function findBtn(i) {
//     btnList[i].addEventListener('click', function(e) {
//       e.preventDefault();
//       ScrollToResolver(anchor); 
//     });
//   }

//   function ScrollToResolver(elem) {
//     let anchorPosition = anchor.getBoundingClientRect().top + pageYOffset;
//     const animationTime = 600;
//     const framesCount = 100;

//     let scrollBy = anchorPosition / framesCount;
//     let scroller = setInterval(function() {
//       let elem = anchor.getBoundingClientRect().top + pageYOffset;
//       let win = (window.pageYOffset + window.innerHeight);
//       if(scrollBy < elem - win ) {
//         window.scrollBy(0, scrollBy);
//       } else {
//         window.scrollTo(0, elem);
//         clearInterval(scroller);
//       }
//     }, animationTime / framesCount);
// }
// })();