var now = new Date();
var day = now.getDate()
var month = now.getMonth();
var monthArray = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
var year = now.getFullYear();
var div = document.getElementsByClassName('date-rev');
for (let i = 0; i < div.length; i++) {
    var elem = div[i];
    elem.innerHTML = (day + '.' + monthArray[month] + '.' + year);
}
