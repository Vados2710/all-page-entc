"use strict";

var getDate = function getDate(date) {
  if (!date) return '';

  var getTwoDigits = function getTwoDigits(value) {
    return value < 10 ? "0".concat(value) : value;
  };

  var formatDate = function formatDate(date) {
    var day = getTwoDigits(date.getDate());
    var month = getTwoDigits(date.getMonth() + 1);
    var year = date.getFullYear();
    return "".concat(year, "-").concat(month, "-").concat(day);
  };

  return formatDate(new Date(date));
};

var showDate = function showDate(n) {
  var currentDate = new Date();
  var dateOffset = 24 * 60 * 60 * 1000 * n;
  var time = getDate(new Date(currentDate - -dateOffset));
  return time;
};

var elements = document.querySelectorAll('.js__showdate');
elements.forEach(function (item) {
  var shift = Number(item.textContent);
  var date = showDate(shift);
  item.innerHTML = date;
});
//# sourceMappingURL=main.js.map
