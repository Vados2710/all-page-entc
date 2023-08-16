if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
      }
  };
}

let reactionNumbers = document.querySelectorAll(".comments__reaction-number");
let dislikeButtons = document.querySelectorAll(".comments__button--dislike");
let likeButtons = document.querySelectorAll(".comments__button--like");

reactionNumbers.forEach(function(reactionNumber) {
  if (reactionNumber.textContent > 0) {
    reactionNumber.classList.add("comments__reaction-number--positive");
  } else if (reactionNumber.textContent < 0) {
    reactionNumber.classList.add("comments__reaction-number--negative");
  } else {
    reactionNumber.classList.remove("comments__reaction-number--positive");
    reactionNumber.classList.remove("comments__reaction-number--negative");
  }
});


