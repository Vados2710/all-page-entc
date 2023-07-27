 function getCurrentDate() {
        var today = new Date();
        var curDay = today.getDate();
        if(curDay < 10) {
            curDay = "0" + curDay;
        }
        var curMonth = today.getMonth() + 1;
        if(curMonth < 10) {
            curMonth = "0" + curMonth;
        }
        var curYear = today.getFullYear();

        today = curDay + "." + curMonth + "." + curYear;
        var output = document.getElementById('current-date');
        output.innerText = today;
}

    window.addEventListener("load", getCurrentDate);
