/**
 * Created by User on 025 25.08.17.
 */
(function () {
    function dtime_nums(d, like_eu) {
        var now = new Date();
        now.setDate(now.getDate() + d + 1);

        var dayNum = '';
        if (now.getDate() < 10) {
            dayNum = '0';
        }
        dayNum += now.getDate();

        var monthNum = '';
        if (now.getMonth() + 1 < 10) {
            monthNum = '0';
        }
        monthNum += now.getMonth() + 1;

        if (like_eu === true) {
            return (dayNum + "." + monthNum + "." + now.getFullYear());
        } else {
            return (monthNum + "." + dayNum + "." + now.getFullYear());
        }
    }

    function getYear() {
        var d = new Date();
        return d.getFullYear();
    }

 
    var elementList = document.querySelectorAll('[class^="_Date"]');
    elementList.map = [].map;
    // console.log(elementList);
    elementList.map(function (p) {
        var time = p.className.split('_Date')[1];
        p.innerHTML = dtime_nums(parseInt(time),true);
    })
}())
